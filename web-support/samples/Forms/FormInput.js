import uniqueId from 'lodash.uniqueid';
import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { assignRef, snapShot, snapAll, ensureCalled } from '../../sampleParser';

import { FormInput as Component } from '../../../src';
const COMP_NAME = 'FormInput';

// props
const propTitle = COMP_NAME.concat(': prop: ');

const noProps = {
  guide: {},
  props: {},
  tests: snapAll(propTitle.concat('no props:')),
};
const containerStyle = {
  guide: {},
  props: { containerStyle: { backgroundColor: '#181818' } },
  tests: snapAll(propTitle.concat('containerStyle:')),
};
const inputStyle = {
  guide: {},
  props: { inputStyle: { color: '#222' } },
  tests: snapAll(propTitle.concat('inputStyle:')),
};
const textInputRef = {
  guide: {},
  props: { textInputRef: () => assignRef(uniqueId('ref')) },
  tests: snapAll(propTitle.concat('textInputRef:')),
};
const containerRef = {
  guide: {},
  props: { containerRef: () => assignRef(uniqueId('ref')) },
  tests: snapAll(propTitle.concat('containerRef:')),
};
const shake = {
  guide: {},
  props: { shake: true },
  tests: {
    shallow: {
      snapshot: (wrapper, title) => {
        test(title, () => {
          expect(toJson(wrapper)).toMatchSnapshot(title);
        });
      },
    },
  },
};

const props = {
  no_props: noProps,
  containerStyle,
  inputStyle,
  textInputRef,
  containerRef,
  shake,
};

// methods
const methodTitle = COMP_NAME.concat(': method: ');

const shakeMeth = {
  guide: {},
  tests: {
    shallow: ensureCalled(methodTitle, 'shake'),
  },
};
const focus = {
  guide: { cd: 1000 },
  tests: {
    shallow: ensureCalled(methodTitle, 'focus'),
  },
};
const blur = {
  guide: { cd: 3000 },
  tests: {
    shallow: ensureCalled(methodTitle, 'blur'),
  },
};
const clearText = {
  guide: {},
  tests: {
    shallow: ensureCalled(methodTitle, 'clearText'),
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
