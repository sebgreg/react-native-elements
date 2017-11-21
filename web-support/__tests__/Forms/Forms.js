// @flow
import 'react-native';
import PropTypes from 'prop-types';
import { mount, render, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import jsdom from 'jsdom';
import merge from 'lodash.merge';
import fs from 'fs';
import path from 'path';
import log from 'loglevel';
import MockDate from 'mockdate';
import { Forms as componentSamples } from '../../samples';
// import mockAnim from '../../__mocks__/react-native/api/Animated';
// import createMockComponent from '../../__mocks__/createMockComponent';

log.setLevel('debug');

Date.now = jest.fn(() => 40304820);

// jest.useFakeTimers();
// jest.mock('animated', () => '../__mocks__/react-native/api/Animated');

// jest.mock('animated', () => {
//   function createMockComponent(displayName) {
//     return require('react').createClass({
//       displayName,
//       render() {
//         return null;
//       },
//     });
//   }

//   return {
//     ...mockAnim,
//     inject: {
//       FlattenStyle: jest.fn(),
//     },
//     Image: createMockComponent('Image'),
//     ScrollView: createMockComponent('ScrollView'),
//     Text: createMockComponent('Text'),
//     View: createMockComponent('View'),
//   };
// });

const travelInTime = (ms, step = 100) => {
  const tickTravel = v => {
    jest.runTimersToTime(v);
    const now = Date.now();
    MockDate.set(new Date(now + v));
  };

  let done = 0;
  while (ms - done > step) {
    tickTravel(step);
    done += step;
  }
  tickTravel(ms - done);
};

const buildOptions = ctxArr => {
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

componentSamples.forEach(component => {
  log.debug({ component });
  component.samples.forEach(sample => {
    if (!sample.skip) {
      describe(sample.title, () => {
        let React;
        beforeEach(function() {
          const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
          global.document = doc;
          global.window = doc.defaultView;
          React = require.requireActual('react');
        });
        sample.chunks.forEach(testCase => {
          test(testCase.name, () => {
            let mountTree;
            let renderTree;
            let shallowTree;
            if (!testCase.noMount) {
              if (testCase.testContext) {
                mountTree = mount(
                  testCase.jsx,
                  buildOptions(testCase.testContext)
                );
              } else {
                mountTree = mount(testCase.jsx);
                renderTree = render(testCase.jsx);
                shallowTree = shallow(testCase.jsx);
              }

              expect(toJson(mountTree)).toMatchSnapshot(
                `enzyme.mount ${component.name} : ${testCase.name}`
              );
              mountTree.unmount();
            }

            if (renderTree)
              expect(toJson(renderTree)).toMatchSnapshot(
                `enzyme.render ${component.name} : ${testCase.name}`
              );

            if (shallowTree)
              expect(toJson(shallowTree)).toMatchSnapshot(
                `enzyme.shallow ${component.name} : ${testCase.name}`
              );

            // if (reactRenderTree)
            //   expect(reactRenderTree).toMatchSnapshot(
            //     `react-renderer ${component.name} : ${testCase.name}`
            //   );
          });
        });
      });
    }
  });
});
