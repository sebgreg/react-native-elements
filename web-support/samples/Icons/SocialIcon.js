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
import { SocialIcon as Component } from '../../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  title: {
    component: Component,
    props: { type: 'github', title: 'gith U.B.', button: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  type: {
    component: Component,
    props: { type: 'github' },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  raised: {
    component: Component,
    props: { type: 'github', raised: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  button: {
    component: Component,
    props: { type: 'github', button: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  onPress: {
    component: Component,
    props: {
      type: 'github',
      onPress: () => {
        alert('pressed');
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  onLongPress: {
    component: Component,
    props: {
      type: 'github',
      onLongPress: () => {
        alert('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  light: {
    component: Component,
    props: { type: 'github', light: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  iconStyle: {
    component: Component,
    props: {
      type: 'github',
      iconStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  style: {
    component: Component,
    props: {
      type: 'github',
      style: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  iconColor: {
    component: Component,
    props: { type: 'github', iconColor: '#071' },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  underlayColor: {
    component: Component,
    props: {
      type: 'github',
      onPress: () => {
        alert('pressed');
      },
      underlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  iconSize: {
    component: Component,
    props: { type: 'github', iconSize: 50 },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  component: {
    component: Component,
    props: { type: 'github', component: TouchableWithoutFeedback },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<SocialIcon \n' +
          "  type='github'" +
          '  component={TouchableWithoutFeedback}\n' +
          '/>'
        );
      },
    },
  },
  fontFamily: {
    component: Component,
    props: {
      type: 'github',
      fontFamily: 'Courier New',
      title: 'gith U.B.',
      button: true,
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  fontWeight: {
    component: Component,
    props: {
      type: 'github',
      fontWeight: 'bold',
      title: 'gith U.B.',
      button: true,
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  fontStyle: {
    component: Component,
    props: {
      type: 'github',
      fontStyle: { padding: 50 },
      title: 'gith U.B.',
      button: true,
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  disabled: {
    component: Component,
    props: { type: 'github', disabled: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  loading: {
    component: Component,
    props: { type: 'github', loading: true, title: 'gith U.B.', button: true },
    enzyme: {
      tests: { shallow: snapShot() },
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
