import React from 'react';
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

const HEADER = '\n[//]: # (** auto-generated **)\n';

log.setLevel(`DEBUG`);

const buildCtxOptions = ctxArr => {
  let options = { context: {}, childContextTypes: {} };
  ctxArr.forEach(ctx => {
    if (ctx.type && ctx.type === 'func') {
      const mockFunc = jest.fn();
      mockFunc.mockReturnValue(ctx.value);
      options = merge(options, {
        context: { [ctx.name]: mockFunc },
        childContextTypes: { [ctx.name]: toPropType(ctx.type) },
      });
    }
  });
  return options;
};

const toPropType = typeId => {
  switch (typeId) {
    case 'func':
      return PropTypes.func;
    default:
      return null;
  }
};

const wrapJsx = (depthName, jsx, ctx) => {
  let wrapper;
  let ctxOpts = {};
  if (ctx) ctxOpts = buildCtxOptions(ctx);
  switch (depthName) {
    case 'mount':
      wrapper = mount(jsx, ctxOpts);
      break;
    case 'shallow':
      delete ctxOpts.childContextTypes;
      wrapper = shallow(jsx, ctxOpts);
      break;
    case 'render':
      wrapper = render(jsx);
      break;
    default:
  }
  return wrapper;
};

const _processAttribute = (opts, attr) => {
  log.debug({ opts, attr });
  const jsx = React.createElement(opts.component, attr.props);
  if (opts.tests) {
    each(attr.tests, (depth, depthName) => {
      each(depth, (jestTest, testName) => {
        const title = opts.title.concat(' enzyme-', depthName, ': ', testName);
        if (opts.tests) {
          const wrapper = wrapJsx(depthName, jsx);
          jestTest(wrapper, title, opts.attrName);
        }
      });
    });
  } else if (opts.dev || opts.prod) {
    // if (example.script) opts.exampleBuilder.appendLine(example.script);
    // if (example.script) opts.exampleBuilder.appendLine();
    // if (example.styleExample) {
    //   opts.exampleBuilder.appendLine(example.styleExample);
    // } else {

    fs.appendFileSync(
      opts.exampleFileName,
      jsxToString(jsx, {
        showFunctions: true,
        showDefaultProps: false,
      })
    );
    fs.appendFileSync(opts.exampleFileName, '\n```\n');
  }
  // }
};

const _processComponent = (opts, component) => {
  log.debug({ component });
  each(component.samples, (attrDefs, attrTypeName) => {
    log.debug({ attrTypeName });
    if (opts.tests) {
      describe(opts.title.concat(' ', capitalize(attrTypeName)), () => {
        each(attrDefs, (attr, attrName) => {
          log.debug({ attrName });
          const componentOpts = cloneDeep(opts);
          opts.component = component.component;
          opts.title = opts.title.concat(
            ' [ ',
            attrTypeName,
            ': ',
            attrName,
            '() ]'
          );
          componentOpts.attrName = attrName;
          _processAttribute(componentOpts, attr);
        });
      });
    } else if (opts.dev || opts.prod) {
      fs.appendFileSync(opts.exampleFileName, '\n### ' + attrTypeName + '\n');
      each(attrDefs, (attr, attrName) => {
        log.debug({ attrName });
        const componentOpts = cloneDeep(opts);
        componentOpts.component = component.component;
        componentOpts.attrName = attrName;
        fs.appendFileSync(opts.exampleFileName, '\n#### ' + attrName);
        if (attrTypeName === 'methods')
          fs.appendFileSync(opts.exampleFileName, '()');
        fs.appendFileSync(opts.exampleFileName, '\n```js\n');
        _processAttribute(componentOpts, attr);
      });
    }
  });
};

// const _process = (opts, component) => {
//   describe(opts.title.concat(' Props'), () => {
//     each(component.samples.props, (prop, propName) => {
//       log.debug({ propName });
//       const propOpts = cloneDeep(opts);
//       propOpts.component = component.component;
//       propOpts.title = opts.title.concat(' [ prop: ', propName, ' ]');
//       propOpts.attrName = propName;
//       _processAttribute(propOpts, prop);
//     });
//   });
// };

const _processSection = (opts, section) => {
  log.debug({ section });
  each(section.sectionComponents, (component, componentName) => {
    let clonedOpts = cloneDeep(opts);
    clonedOpts.title = section.title.concat(': ', componentName, ':');
    if (opts.dev || opts.prod) {
      clonedOpts.exampleFileName = path
        .join(opts.EXAMPLES_DIR, componentName)
        .concat('.md');
      fse.removeSync(clonedOpts.exampleFileName);
    }

    _processComponent(clonedOpts, component);
    if (opts.dev || opts.prod) {
      log.debug('will write to ' + clonedOpts.exampleFileName);
      // fse.outputFileSync(clonedOpts.exampleFilename, HEADER);
    }
  });
};

export function runTests(section) {
  log.debug({ section });
  const testOpts = { tests: true };

  // mocking
  Date.now = jest.fn(() => -3580994563);

  // not yet working
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

  _processSection(testOpts, section);
}

export function buildGuide(sections, opts) {
  each(sections, (section, sectionName) => {
    log.info(`Processing Section: ${sectionName}`);
    log.debug({ opts });
    const sectionOpts = cloneDeep(opts);

    _processSection(sectionOpts, section);
  });
}
