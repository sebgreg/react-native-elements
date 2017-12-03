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
import { ListItem as Component } from '../../src';

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatar: {
    component: Component,
    props: { title: 'title', avatar: 'hero.jpg' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatarStyle: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      avatarStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatarContainerStyle: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      avatarContainerStyle: { padding: 50 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatarOverlayContainerStyle: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      avatarOverlayContainerStyle: { padding: 25 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  chevronColor: {
    component: Component,
    props: { title: 'title', chevronColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  component: {
    component: Component,
    props: {
      title: 'title',
      onPress: () => {
        alert('pressed');
      },
      component: TouchableWithoutFeedback,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<ListItem \n' +
          '  title="title" \n' +
          '  onPress={ () => {\n' +
          '    alert("pressed");\n' +
          '  }}\n' +
          '  component={TouchableWithoutFeedback}\n' +
          '/>'
        );
      },
    },
  },
  containerStyle: {
    component: Component,
    props: { title: 'title', containerStyle: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  wrapperStyle: {
    component: Component,
    props: { title: 'title', wrapperStyle: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'underlayColor & onPress': {
    component: Component,
    props: {
      title: 'title',
      underlayColor: 'yellow',
      onPress: () => {
        alert('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Component,
    props: { title: 'title', fontFamily: 'Courier New' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  hideChevron: {
    component: Component,
    props: { title: 'title', hideChevron: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onLongPress: {
    component: Component,
    props: {
      title: 'title',
      onLongPress: () => {
        alert('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  roundAvatar: {
    component: Component,
    props: { title: 'title', avatar: 'hero.jpg', roundAvatar: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  titleNumberOfLines: {
    component: Component,
    props: { title: 'line1\\nline2\\nline3', titleNumberOfLines: 3 },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      titleStyle: { marginTop: -25 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  titleContainerStyle: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      titleContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitle: {
    component: Component,
    props: { title: 'title', subtitle: 'subtitle' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitleNumberOfLines: {
    component: Component,
    props: {
      title: 'title',
      subtitle: 'line1\\nline2\\nline3',
      subtitleNumberOfLines: 3,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitleContainerStyle: {
    component: Component,
    props: {
      title: 'title',
      subtitle: 'subtitle',
      avatar: 'hero.jpg',
      subtitleContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitleStyle: {
    component: Component,
    props: {
      title: 'title',
      subtitle: 'subtitle',
      avatar: 'hero.jpg',
      subtitleStyle: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitle: {
    component: Component,
    props: { title: 'title', rightTitle: 'rightTitle' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitleNumberOfLines: {
    component: Component,
    props: {
      title: 'title',
      rightTitle: 'line1\\nline2\\nline3',
      rightTitleNumberOfLines: 3,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitleContainerStyle: {
    component: Component,
    props: {
      title: 'title',
      rightTitle: 'rightTitle',
      avatar: 'hero.jpg',
      rightTitleContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitleStyle: {
    component: Component,
    props: {
      title: 'title',
      rightTitle: 'rightTitle',
      avatar: 'hero.jpg',
      rightTitleStyle: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  label: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      label: <Text>label</Text>,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  leftIcon: {
    component: Component,
    props: {
      title: 'title',
      avatar: 'hero.jpg',
      leftIcon: { name: 'pets', color: '#071' },
    },
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
