import 'react-native';
import PropTypes from 'prop-types';
import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import jsdom from 'jsdom';
import merge from 'lodash.merge';
import mapValues from 'lodash.mapvalues';
import each from 'lodash.foreach';
import log from 'loglevel';
import MockDate from 'mockdate';
import cli from 'cli';

const LOG_LEVEL = 'info';
log.setLevel(LOG_LEVEL);

// parse args

cli.enable(status);
const opts = cli.parse({
  all: ['a', 'generate all', 'true', false],
  tests: ['t', 'generate tests', 'true', true],
  dev: ['d', 'generate dev styleguide', 'true', true],
  pub: ['p', 'generate public styleguide', 'true', false],
  verbose: ['v', 'verbose output', 'true', false],
});

// if ()

// enums

export const sampleType = {
  PROP: 'p',
  METHOD: 'm',
};

export const testType = {
  SNAP: 'snap',
  CALL: 'call',
};

export const sampleOutput = {
  TESTS: 'tests',
  DEV_GUIDE: 'dev guide',
  PUB_GUIDE: 'pub guide',
};

// mocking
Date.now = jest.fn(() => 40304820);

// not yet supported
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

// jsx, wrapping, & context
const StyleGuideMethodWrapper = (props, children) => {
  return (
    <View>
      <TouchableHighlight
        onPress={props.timerFunc}
        style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
      >
        <Text>{props.buttonTitle}</Text>
        {children}
      </TouchableHighlight>
    </View>
  );
};

const buildJsx = (Component, props, WrapperComponent) => {
  if (WrapperComponent) {
    return StyleGuideMethodWrapper(
      { timerFunc, buttonTitle },
      ComponentElement
    );
  }
  return React.createElement(Component, props);
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

export const ensureCallMethod = (wrapper, methName, methArgs) => {
  const spy = sinon.spy(wrapper.instance(), methName);
  const func = Function('elem', `elem.${methName}(${methArgs})`);
  func(wrapper.instance());
  expect(spy.calledOnce).toBe(true);
};

const setupJsDom = () => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.document = doc;
  global.window = doc.defaultView;
  React = require.requireActual('react');
};

export const snapAll = {
  mount: { gen: testType.SNAP },
  shallow: { gen: testType.SNAP },
  render: { gen: testType.SNAP },
};

export const callShallow = {
  shallow: { gen: testType.SNAP },
};

export function generate(sectionComponents, outputType) {
  log.setLevel(LOG_LEVEL);

  each(sectionComponents, (component, componentName) => {
    log.debug({ componentName });

    each(component.samples, (attrSamples, attrType) => {
      log.debug({ attrType });

      each(attrSamples, (attribute, attrName) => {
        log.debug({ attrName });
        const attrTitle = `${componentName}: ${attrType}: ${attrName}`;

        describe(attrTitle, () => {
          let React;
          beforeEach(setupJsDom);
          each(attribute.tests, (enzymeDepth, depthName) => {
            log.debug({ depthName });
            // const depthTitle = `${attrTitle}: (${depthName})`;

            each(enzymeDepth, (testFunc, testName) => {
              log.debug(testName);
              const wrapper = wrapJsx(depthName);
              if (testName === testType.SNAP) {
                const testTitle = `${attrTitle}: snapshot: ${depthName}`;
                test(testTitle, () => {
                  expect(toJson(wrapper)).toMatchSnapshot(testTitle);
                });
              } else if (testName === testType.CALL) {
                const testTitle = `${attrTitle}: ensure called`;
                test(testTitle, () => {
                  ensureCallMethod(wrapper, attrName);
                });
              } else {
                const testTitle = `${attrTitle}: ensure called`;
                testFunc(wrapper);
              }
            });
          });
        });
      });
    });
  });
}

// switch (outputType) {
//   case sampleOutput.TESTS:
//     break;
//   case sampleOutput.DEV_GUIDE:
//   case sampleOutput.PUB_GUIDE:
//     break;
// }

const generateGuide = (componentName, attrType, attrName, attribute) => {
  const attrTitle = `${componentName}: ${attrType}: ${attrName}`;
};

const generateTests = (componentName, attrType, attrName, attribute) => {};
