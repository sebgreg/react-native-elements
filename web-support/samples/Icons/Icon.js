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
import { Icon as Component } from '../../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  name: {
    component: Component,
    props: { name: 'pets' },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  type: {
    component: Component,
    props: { name: 'sms', type: 'octicons' },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  size: {
    component: Component,
    props: { name: 'pets', size: 50 },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  color: {
    component: Component,
    props: { name: 'pets', color: '#071' },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  iconStyle: {
    component: Component,
    props: { name: 'pets', iconStyle: { transform: [{ rotateZ: '-45deg' }] } },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  component: {
    component: Component,
    props: { name: 'pets', component: TouchableWithoutFeedback },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<Icon \n' +
          "  name='pets'" +
          '  component={TouchableWithoutFeedback}\n' +
          '/>'
        );
      },
    },
  },
  onPress: {
    component: Component,
    props: {
      name: 'pets',
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
      name: 'pets',
      onLongPress: () => {
        alert('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  underlayColor: {
    component: Component,
    props: {
      name: 'pets',
      onPress: () => {
        alert('pressed');
      },
      underlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  reverse: {
    component: Component,
    props: { name: 'pets', reverse: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  raised: {
    component: Component,
    props: { name: 'pets', raised: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  containerStyle: {
    component: Component,
    props: { name: 'pets', containerStyle: { padding: 50 } },
    enzyme: {
      tests: { shallow: snapShot() },
    },
  },
  reverseColor: {
    component: Component,
    props: { name: 'pets', reverse: true, reverseColor: '#071' },
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
