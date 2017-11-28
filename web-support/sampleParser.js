import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { mount, render, shallow } from 'enzyme';
import capitalize from 'lodash.capitalize';
import cloneDeep from 'lodash.clonedeep';
import each from 'lodash.foreach';
import merge from 'lodash.merge';
import jsxToString from 'react-element-to-jsx-string';
import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import StringBuilder from 'string-builder';
import log from 'loglevel';

import { FormInput } from '../src';

const HEADER = `\n[//]: # (** auto-generated ${new Date().toISOString()} **)\n`;
const METHODS = 'methods';
const PROPS = 'props';

log.setLevel(`INFO`);

export function assignRef(refId) {
  return Function('ref', `return ${refId} = ref`);
}

function smallUUID(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, smallUUID);
}

export function genRefId() {
  const id = smallUUID().replace(/-/g, '');
  return `ref${id}`;
}

const createWrapper = (depth, jsx) => {
  let wrapper;
  switch (depth) {
    case 'mount':
      wrapper = mount(jsx);
      break;
    case 'shallow':
      wrapper = shallow(jsx);
      break;
    case 'render':
      wrapper = render(jsx);
      break;
    default:
  }
  return wrapper;
};

const defaultBuildJsx = attr => {
  const jsx = React.createElement(attr.component, attr.props);
  return jsx;
};

const _processAttribute = (attr, opts) => {
  let exampleWritten = false;
  if (opts.enzyme) {
    const jsx = attr.enzyme.buildJsx
      ? attr.enzyme.buildJsx(attr)
      : defaultBuildJsx(attr);
    each(attr.enzyme.tests, (depth, depthName) => {
      each(depth, (jestTest, testName) => {
        const title = attr.title.concat(' enzyme-', depthName, ': ', testName);
        if (opts.enzyme) {
          const wrapper = opts.enzyme.createWrapper
            ? opts.enzyme.createWrapper(depthName, jsx)
            : createWrapper(depthName, jsx);
          jestTest(wrapper, title, attr.attrName);
        }
      });
    });
  } else if (opts.guide) {
    const jsx = attr.styleguidist.buildJsx
      ? attr.styleguidist.buildJsx(attr)
      : defaultBuildJsx(attr);
    fs.appendFileSync(
      attr.exampleFileName,
      jsxToString(jsx, {
        showFunctions: true,
        showDefaultProps: false,
      })
    );
    fs.appendFileSync(attr.exampleFileName, '\n```\n');
    exampleWritten = true;
  }
  if (opts.guide) {
    examplesTitle = attr.title + ' example file written';
    test(attr.title + ' example file written', () => {
      expect(exampleWritten).toBeTruthy();
    });
  }
};

const _processComponent = (compSect, opts) => {
  log.debug({ compSect });
  each(compSect.samples, (attrDefs, attrTypeName) => {
    log.debug({ attrTypeName });
    const descTitle = compSect.title.concat(' ', capitalize(attrTypeName));
    if (opts.enzyme) {
      describe(descTitle, () => {
        each(attrDefs, (attr, attrName) => {
          attr.attrName = attrName;
          attr.attrType = attrTypeName;
          attr.title = compSect.title.concat(
            ` [ ${attrTypeName.slice(0, -1)}: ${attrName}`
          ); // remove "s"
          if (attrTypeName === METHODS)
            attr.title = attr.title.concat('() ]'); // add parens if method
          else attr.title = attr.title.concat(' ]');
          _processAttribute(attr, opts);
        });
      });
    }
    if (opts.guide) {
      fs.appendFileSync(
        compSect.exampleFileName,
        '\n### ' + attrTypeName + '\n'
      );
      describe('Styleguide Examples:', () => {
        each(attrDefs, (attr, attrName) => {
          attr.attrName = attrName;
          attr.attrType = attrTypeName;
          fs.appendFileSync(compSect.exampleFileName, '\n#### ' + attrName);
          if (attrTypeName === METHODS)
            fs.appendFileSync(compSect.exampleFileName, '()');
          fs.appendFileSync(compSect.exampleFileName, '\n```js\n');
          fs.appendFileSync(
            compSect.exampleFileName,
            'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n\n'
          );
          attr.exampleFileName = compSect.exampleFileName;
          _processAttribute(attr, opts);
        });
      });
    }
  });
};

const _processSection = (section, opts) => {
  log.debug({ section });
  each(section.sectionComponents, (compSect, componentName) => {
    compSect.title = section.title.concat(': ', componentName, ':');
    if (opts.guide) {
      compSect.exampleFileName = path
        .join(opts.EXAMPLES_DIR, componentName)
        .concat('.md');
      fse.removeSync(compSect.exampleFileName);
      fs.appendFileSync(compSect.exampleFileName, HEADER);
    }
    _processComponent(compSect, opts);
  });
};

export function runTests(section, opts) {
  // mocking

  // * not yet working
  //
  // const travelInTime = (ms, step = 100) => {
  //   const tickTravel = v => {
  //     jest.runTimersToTime(v);
  //     const now = Date.now();
  //     MockDate.set(new Date(now + v));
  //   };

  //   let done = 0;
  //   while (ms - done > step) {
  //     tickTravel(step);
  //     done += step;
  //   }
  //   tickTravel(ms - done);
  // };

  Date.now = jest.fn(() => -3580994563);
  _processSection(section, opts);
}

export function buildGuide(section, opts) {
  log.info(`Styleguide: processing Section: ${sectionName}`);
  const sectionOpts = cloneDeep(opts);

  _processSection(section, opts);
}

export default function parseSamples(sections, options) {
  log.debug({ options });
  each(sections, (section, sectionKey) => {
    // guide first to avoid the mocks
    if (options.guide) {
      const guideOpts = cloneDeep(options);
      delete guideOpts.enzyme;
      log.info(`Styleguide: processing Section: ${sectionKey}`);
      debugger;
      _processSection(section, guideOpts);
    }

    if (options.enzyme && options.enzyme.run) {
      const testOpts = cloneDeep(options);
      delete testOpts.guide;
      runTests(section, testOpts);
    }
  });
}
