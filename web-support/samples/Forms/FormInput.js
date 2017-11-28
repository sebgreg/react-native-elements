import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { assignRef, genRefId } from '../../sampleParser';

import { FormInput as Component } from '../../../src';

// props
const snapShot = () => {
  return (wrapper, title) => {
    test(title, () => {
      expect(toJson(wrapper)).toMatchSnapshot(title);
    });
  };
};

const noProps = {
  guide: {},
  props: {},
  tests: {
    shallow: { snapshot: snapShot() },
    mount: { snapshot: snapShot() },
    render: { snapshot: snapShot() },
  },
};
const containerStyle = {
  guide: {},
  props: { containerStyle: { backgroundColor: '#181818' } },
  tests: {
    shallow: { snapshot: snapShot() },
    mount: { snapshot: snapShot() },
    render: { snapshot: snapShot() },
  },
};
const inputStyle = {
  guide: {},
  props: { inputStyle: { color: '#222' } },
  tests: {
    shallow: { snapshot: snapShot() },
    mount: { snapshot: snapShot() },
    render: { snapshot: snapShot() },
  },
};
const textInputRef = {
  guide: {},
  props: { textInputRef: assignRef(genRefId()) },
  tests: {
    shallow: { snapshot: snapShot() },
    mount: { snapshot: snapShot() },
    render: { snapshot: snapShot() },
  },
};
const containerRef = {
  guide: {},
  props: { containerRef: assignRef(genRefId()) },
  tests: {
    shallow: { snapshot: snapShot() },
    mount: { snapshot: snapShot() },
    render: { snapshot: snapShot() },
  },
};
const shake = {
  guide: {},
  props: { shake: true },
  tests: {
    shallow: { snapshot: snapShot() },
  },
};

const props = {
  'no props': noProps,
  containerStyle,
  inputStyle,
  textInputRef,
  containerRef,
  shake,
};

// methods
const ensureCalled = () => {
  return (wrapper, title, attrName) => {
    test(title, () => {
      const spy = sinon.spy(wrapper.instance(), attrName);
      const func = Function('elem', `elem.${attrName}()`);
      func(wrapper.instance());
      expect(spy.calledOnce).toBe(true);
    });
  };
};

const shakeMeth = {
  guide: {},
  tests: {
    shallow: {
      'ensure called': ensureCalled(),
    },
  },
};
const focus = {
  guide: { cd: 1000 },
  tests: {
    shallow: {
      'ensure called': ensureCalled(),
    },
  },
};
const blur = {
  guide: { cd: 3000 },
  tests: {
    shallow: {
      'ensure called': ensureCalled(),
    },
  },
};
const clearText = {
  guide: {},
  tests: {
    shallow: {
      'ensure called': ensureCalled(),
    },
  },
};

const methods = {
  shake: shakeMeth,
  focus,
  blur,
  clearText,
};

export default {
  component: Component,
  samples: {
    props,
    methods,
  },
};
