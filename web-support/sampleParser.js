import React from 'react';
import ReactNative, {
  Button,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import jsdom from 'jsdom';
import each from 'lodash.foreach';
import times from 'lodash.times';
import mapValues from 'lodash.mapvalues';
import mapKeys from 'lodash.mapkeys';
import ArgParse from 'argparse';
import log from 'loglevel';
import sections from './samples';

// let React;
log.setLevel(`INFO`);

export function assignRef(refId) {
  return Function('ref', `return ${refId} = ref`);
}

export function snapShot() {
  return {
    snapshot: (wrapper, title) => {
      test(title, () => {
        expect(toJson(wrapper)).toMatchSnapshot(title);
      });
    },
  };
}

export function snapAll() {
  return {
    shallow: snapShot(),
    mount: snapShot(),
    render: snapShot(),
  };
}

export function ensureCalled(fullTitle, methodName) {
  const title = 'ensure called: '.concat(methodName, '()');
  return {
    [title]: wrapper => {
      test(fullTitle.concat(title), () => {
        const spy = sinon.spy(wrapper.instance(), methodName);
        const func = Function('elem', `elem.${methodName}()`);
        func(wrapper.instance());
        expect(spy.calledOnce).toBe(true);
      });
    },
  };
}

const buildJsx = (Component, props, WrapperComponent) => {
  if (WrapperComponent) {
    return StyleGuideMethodWrapper(
      { timerFunc, buttonTitle },
      ComponentElement
    );
  }
  return React.createElement(Component, props);
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

const setupJsDom = () => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.document = doc;
  global.window = doc.defaultView;
  // React = require.requireActual('react');
};

const _processShallow = (opts, Component, props, title, jestTest) => {
  log.debug({ opts, props, title, jestTest });
  if (opts.tests) {
    const jsx = buildJsx(Component, props, null);
    const wrapper = wrapJsx('shallow', jsx);
    jestTest(wrapper, title);
  }
};

const _processMount = (opts, Component, props, title, jestTest) => {
  log.debug({ opts, props, title, jestTest });
  if (opts.tests) {
    const jsx = buildJsx(Component, props, null);
    const wrapper = wrapJsx('mount', jsx);
    jestTest(wrapper, title);
  }
};

const _processRender = (opts, Component, props, title, jestTest) => {
  log.debug({ opts, props, title, jestTest });
  if (opts.tests) {
    const jsx = buildJsx(Component, props, null);
    const wrapper = wrapJsx('render', jsx);
    jestTest(wrapper, title);
  }
};

const _processAttribute = (opts, Component, title, prop) => {
  log.debug({ title, prop });
  each(prop.tests.shallow, (jestTest, testName) => {
    _processShallow(
      opts,
      Component,
      prop.props,
      title.concat(' enzyme shallow: ', testName),
      jestTest
    );
  });
  each(prop.tests.mount, (jestTest, testName) => {
    _processMount(
      opts,
      Component,
      prop.props,
      title.concat(' enzyme mount: ', testName),
      jestTest
    );
  });
  each(prop.tests.render, (jestTest, testName) => {
    _processRender(
      opts,
      Component,
      prop.props,
      title.concat(' enzyme render: ', testName),
      jestTest
    );
  });
};

const _processComponent = (opts, title, component) => {
  log.debug({ component });
  if (opts.tests) {
    beforeEach(setupJsDom);
  }
  describe(title.concat(' Props'), () => {
    each(component.samples.props, (prop, propName) => {
      log.debug({ propName });

      _processAttribute(
        opts,
        component.component,
        title.concat(' prop: [', propName, ']'),
        prop
      );
    });
  });
  each(component.samples.methods, (method, methodName) => {
    log.debug({ methodName });
    describe(title.concat(' Methods'), () => {
      _processAttribute(
        opts,
        component.component,
        title.concat(' method: [', methodName, '()]'),
        method
      );
    });
  });
};

const _processSection = (opts, title, section) => {
  log.debug({ section });
  each(section.sectionComponents, (component, componentName) => {
    _processComponent(opts, title.concat(' ', componentName, ':'), component);
  });
};

// run tests
export function runTests(section) {
  log.debug({ section });
  const testOpts = { tests: true };

  _processSection(testOpts, section.title.concat(':'), section);
}

// build styleguides
// const argParser = new ArgParse.ArgumentParser({
//   version: '0.1.0',
//   addHelp: true,
//   description: 'parse sample into react-styleguidist examples',
// });

// argParser.addArgument(['-d', '--dev'], {
//   defaultValue: false,
//   action: 'storeTrue',
//   help: 'generate Development styleguide',
// });

// argParser.addArgument(['-p', '--prod'], {
//   defaultValue: false,
//   action: 'storeTrue',
//   help: 'generate Production styleguide',
// });

// const opts = argParser.parseArgs();
// log.debug({ opts });

// if (opts.dev || opts.prod)
//   each(sections, (section, sectionName) => {
//     log.debug({ sectionName });

//     _processSection(opts, sectionName.concat(':'), section);
//   });
