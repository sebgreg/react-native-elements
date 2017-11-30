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
import { Avatar as Component } from '../../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  component: {
    component: Component,
    props: { component: TouchableOpacity },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<Avatar \n' +
          '  component={TouchableWithoutFeedback}\n' +
          "  onPress={() => alert('pressed')}\n" +
          '/>'
        );
      },
    },
  },
  'width & height': {
    component: Component,
    props: { width: 68, height: 34 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: Component,
    props: {
      onPress: () => {
        alert('pressed');
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  onLongPress: {
    component: Component,
    props: {
      onLongPress: () => {
        alert('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    props: { containerStyle: { padding: 50 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  source: {
    component: Component,
    props: {
      source: 'hero.jpg',
      width: 250,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  avatarStyle: {
    component: Component,
    props: {
      source: 'hero.jpg',
      avatarStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageProps: {
    component: Component,
    props: {
      source: 'hero.jpg',
      width: 250,
      imageProps: { resizeMode: 'center' },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  rounded: {
    component: Component,
    props: { rounded: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  title: {
    component: Component,
    props: { title: 'hero' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Component,
    props: { title: 'hero', titleStyle: { fontWeight: 'bold' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  overlayContainerStyle: {
    component: Component,
    props: { overlayContainerStyle: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  activeOpacity: {
    component: Component,
    props: {
      onPress: () => {},
      activeOpacity: 0.5,
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  icon: {
    component: Component,
    props: {
      icon: { name: 'sms', color: '#071', size: 35, type: 'octicons' },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  iconStyle: {
    component: Component,
    props: {
      icon: { name: 'sms', color: '#071', size: 35, type: 'octicons' },
      iconStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  small: {
    component: Component,
    props: { small: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  medium: {
    component: Component,
    props: { medium: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  large: {
    component: Component,
    props: { large: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  xlarge: {
    component: Component,
    props: { xlarge: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  showEditButton: {
    component: Component,
    props: { showEditButton: true },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  onEditPress: {
    component: Component,
    props: {
      showEditButton: true,
      onEditPress: () => {
        alert('edit pressed');
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
    },
    styleguidist: {},
  },
  editButton: {
    component: Component,
    props: {
      xlarge: true,
      showEditButton: true,
      editButton: {
        size: 30,
        iconName: 'sms',
        iconType: 'octicons',
        iconColor: '#071',
        underlayColor: 'yellow',
        style: { backgroundColor: '#7d8' },
      },
    },
    enzyme: {
      tests: { shallow: snapShot() },
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
