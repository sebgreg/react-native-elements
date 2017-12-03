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
import { Divider as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Component,
    props: { style: { backgroundColor: '#071', height: 5 } },
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
