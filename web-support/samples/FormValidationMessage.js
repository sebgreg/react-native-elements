import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { assignRef, genRefId } from 'enzyme-styleguidist-sample-parser';
import {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from './';
import {
  FormValidationMessage as Component,
  FormValidationMessage,
} from '../../src';

const props = {
  containerStyle: {
    component: Component,
    children: 'bad things',
    props: { containerStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  labelStyle: {
    component: Component,
    children: 'bad things',
    props: { labelStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Component,
    children: 'bad things',
    props: { fontFamily: 'Courier New' },
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
