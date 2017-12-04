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
import { List as Component, ListItem } from '../../src';

const children = [
  <ListItem key="v0" title="item 1" />,
  <ListItem key="v1" title="item 2" />,
  <ListItem key="v2" title="item 3" />,
];

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    children,
    props: {
      containerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

export default {
  samples: {
    props,
  },
};
