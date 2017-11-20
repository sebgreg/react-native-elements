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
import sampleSections from '../../samples';

log.setLevel('debug');

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

sampleSections.forEach(({ sectionName, componentSamples }) => {
  log.info(`Processing Section: ${sectionName}`);

  componentSamples.forEach(component => {
    log.debug({ component });
    test('true is true', () => {
      expect(true).toBeTruthy();
    });
    component.samples.forEach(sample => {
      if (!sample.skip) {
        describe(sample.title, () => {
          let React;
          beforeEach(function() {
            const doc = jsdom.jsdom(
              '<!doctype html><html><body></body></html>'
            );
            global.document = doc;
            global.window = doc.defaultView;
            React = require.requireActual('react');
          });
          sample.chunks.forEach(testCase => {
            test(testCase.name, () => {
              let mountTree;
              let renderTree;
              let shallowTree;
              let reactRenderTree;
              if (testCase.testContext) {
                mountTree = mount(
                  testCase.jsx,
                  buildOptions(testCase.testContext)
                );
              } else {
                mountTree = mount(testCase.jsx);
                // not (yet) serializing all the way to the DOM, so there's no point
                // renderTree = render(testCase.jsx);
                // shallowTree = shallow(testCase.jsx);
                // reactRenderTree = renderer.create(testCase.jsx).toJSON();
              }
              expect(toJson(mountTree)).toMatchSnapshot(
                `enzyme.mount ${component.name} : ${testCase.name}`
              );
              if (renderTree)
                expect(toJson(renderTree)).toMatchSnapshot(
                  `enzyme.render ${component.name} : ${testCase.name}`
                );
              if (shallowTree)
                expect(toJson(shallowTree)).toMatchSnapshot(
                  `enzyme.shallow ${component.name} : ${testCase.name}`
                );
              mountTree.unmount();
              if (reactRenderTree)
                expect(reactRenderTree).toMatchSnapshot(
                  `react-renderer ${component.name} : ${testCase.name}`
                );
            });
          });
        });
      }
    });
  });
});
