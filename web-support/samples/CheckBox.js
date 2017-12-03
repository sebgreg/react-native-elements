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
} from './';
import { CheckBox as Component } from '../../src';

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
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
      onLongPress: () => {
        let y = 8;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `  onLongPress={() => {\n` +
        `    alert("pressed, long");\n` +
        `  }}\n` +
        `/>`,
    },
  },
  'onLongIconPress, title, checked, & onIconPress': {
    component: Component,
    props: {
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
      onLongPress: () => {
        let y = 8;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script:
        `// onLongIconPress is not working on web platform\nq` +
        `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `  onLongIconPress={() => {\n` +
        `    alert("pressed, long");\n` +
        `  }}\n` +
        `/>`,
    },
  },
  'onPress, title, checked, & onIconPress': {
    component: Component,
    props: {
      title: 'title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
      onPress: () => {
        let y = 8;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () =>
        `<CheckBox\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `  onPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `/>`,
    },
  },
  checkedIcon: {
    component: Component,
    props: { checked: true, checkedIcon: 'bell-o' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  uncheckedIcon: {
    component: Component,
    props: { uncheckedIcon: 'bell-slash-o' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  checkedColor: {
    component: Component,
    props: { checked: true, checkedColor: '#22d' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  uncheckedColor: {
    component: Component,
    props: { uncheckedColor: '#d22' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'checkedTitle, title, checked, & onIconPress': {
    component: Component,
    props: {
      checkedTitle: 'title - is checked',
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
        `  checkedTitle="title - is checked"\n` +
        `  title="title"\n` +
        `  checked={state.checked}\n` +
        `  onIconPress={() => {\n` +
        `    setState({ checked: !state.checked });\n` +
        `  }}\n` +
        `/>`,
    },
  },
  fontFamily: {
    component: Component,
    props: { title: 'title', fontFamily: 'Courier New' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

const methods = {};

export default {
  samples: {
    props,
    methods,
  },
};
