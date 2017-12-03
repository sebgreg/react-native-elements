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
import { Card as Component } from '../../src';

const children = [
  <View key="v0" style={{ width: 50, height: 50, backgroundColor: '#071' }} />,
  <View key="v1" style={{ width: 50, height: 50, backgroundColor: '#293' }} />,
  <View key="v2" style={{ width: 50, height: 50, backgroundColor: '#4b5' }} />,
];

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  flexDirection: {
    component: Component,
    props: { flexDirection: 'row' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    props: { containerStyle: { borderWidth: 5 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  wrapperStyle: {
    component: Component,
    props: { wrapperStyle: { borderWidth: 5 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  title: {
    component: Component,
    props: { title: 'Current Events' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Component,
    props: { title: 'Current Events', titleStyle: { padding: 50 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  featuredTitle: {
    component: Component,
    props: { image: 'hero.jpg', featuredTitle: 'Current Events' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  featuredTitleStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      featuredTitle: 'Current Events',
      featuredTitleStyle: { color: '#4b5' },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  featuredSubtitle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      featuredTitle: 'Current Events',
      featuredSubtitle: 'something',
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  featuredSubtitleStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      featuredTitle: 'Current Events',
      featuredSubtitle: 'something',
      featuredSubtitleStyle: { color: '#4b5' },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  dividerStyle: {
    component: Component,
    props: {
      title: 'Current Events',
      dividerStyle: { backgroundColor: '#4b5', height: 5 },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Component,
    props: {
      title: 'Current Events',
      fontFamily: 'Courier New',
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      imageStyle: { opacity: 0.3 },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageProps: {
    component: Component,
    props: {
      image: 'hero.jpg',
      imageProps: { resizeMode: 'contain' },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageWrapperStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      imageWrapperStyle: { borderWidth: 5 },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
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
