import React from 'react';
import {
  Text,
  TextStatic,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { assignRef, genRefId } from 'enzyme-styleguidist-sample-parser';
import {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../';
import { CheckBox as Component } from '../../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'component, title, checked, & onIconPress': {
    component: Component,
    props: {
      component: TouchableWithoutFeedback,
      checked: true,
      title: 'title',
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<CheckBox \n' +
          '  component={TouchableWithoutFeedback}\n' +
          `  title="title"\n` +
          `  checked={state.checked}\n` +
          `  onIconPress={() => {\n` +
          `    setState({ checked: !state.checked });\n` +
          `  }}\n` +
          '/>'
        );
      },
    },
  },
  'iconRight, title, checked, & onIconPress': {
    component: Component,
    props: {
      iconRight: true,
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  iconRight\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `/>`,
    },
  },
  'right, title, checked, & onIconPress': {
    component: Component,
    props: {
      right: true,
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  right\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `/>`,
    },
  },
  'center, title, checked, & onIconPress': {
    component: Component,
    props: {
      center: true,
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  center\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `/>`,
    },
  },
  containerStyle: {
    component: Component,
    props: { containerStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'textStyle & title': {
    component: Component,
    props: { textStyle: { backgroundColor: '#071' }, title: 'title' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'onLongPress, title, checked, & onIconPress': {
    component: Component,
    props: {
      right: true,
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  right\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `/>`,
    },
  },
};

const methods = {};

export default {
  samples: {
    props,
    methods,
  },
};
