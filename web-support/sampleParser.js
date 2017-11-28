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

// const StyleGuideMethodWrapper = (props, innerComponent) => {
//   const { methodName, cd } = props;
//   const refId = genRefId();
//   const timerFunc = Function(
//     `setTimeout(() => {${refId}.${methodName}();}, ${cd})`
//   );
//   const buttonTitle = cd
//     ? `Start ${cd / 1000} sec countdown for: ${methodName}()`
//     : `Execute ${methodName}()`;
//   return (
//     <View>
//       <TouchableHighlight
//         onPress={timerFunc}
//         style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
//       >
//         <Text>{buttonTitle}</Text>
//         {innerComponent}
//       </TouchableHighlight>
//     </View>
//   );
// };

const _processAttribute = (opts, attr) => {
  const buildJsx = (Component, attr, wrapMethodForGuide) => {
    log.debug(wrapMethodForGuide);
    if (wrapMethodForGuide) {
      const refId = genRefId();
      const timerFunc = Function(
        `setTimeout(() => {${refId}.${opts.attrName}();}, ${attr.guide.cd})`
      );
      const buttonTitle = attr.guide.cd
        ? `Start ${attr.guide.cd / 1000} sec countdown for: ${opts.attrName}()`
        : `Execute ${opts.attrName}()`;
      return (
        <View>
          <TouchableHighlight
            onPress={timerFunc}
            style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
          >
            <Text>{buttonTitle}</Text>
          </TouchableHighlight>
          {React.createElement(Component, {
            ...attr.props,
            ref: assignRef(refId),
          })}
        </View>
      );
    }
    return React.createElement(Component, attr.props);
  };

  log.debug({ opts, attr });
  if (opts.tests) {
    const jsx = buildJsx(opts.component, attr, false);
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
    const jsx = buildJsx(opts.component, attr, opts.attrType === METHODS);
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
          componentOpts.component = component.component;
          componentOpts.attrType = attrTypeName;
          componentOpts.title = opts.title.concat(
            ' [ ',
            attrTypeName.slice(0, -1),
            ': ',
            attrName,
            attrTypeName === METHODS ? '() ]' : ' ]'
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
        componentOpts.attrType = attrTypeName;
        fs.appendFileSync(opts.exampleFileName, '\n#### ' + attrName);
        if (attrTypeName === METHODS)
          fs.appendFileSync(opts.exampleFileName, '()');
        fs.appendFileSync(opts.exampleFileName, '\n```js\n');
        fs.appendFileSync(
          opts.exampleFileName,
          'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n'
        );
        _processAttribute(componentOpts, attr);
      });
    }
  });
};

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
      fs.appendFileSync(clonedOpts.exampleFileName, HEADER);
    }
    _processComponent(clonedOpts, component);
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
    log.info(`Styleguide: processing Section: ${sectionName}`);
    log.debug({ opts });
    const sectionOpts = cloneDeep(opts);

    _processSection(sectionOpts, section);
  });
}
