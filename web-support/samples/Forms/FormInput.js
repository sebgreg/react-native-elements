import React from 'react';
import ReactNative, {
  Button,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import times from 'lodash.times';
import log from 'loglevel';
import buildSamples, { genRefId, assignRef } from '../samplesBuilder';

import { FormInput as Component } from '../../../src';
const COMP_NAME = 'FormInput';

log.setLevel('debug');

const propSamples = [
  {
    p: ['containerStyle'],
    v: [{ backgroundColor: '#181818' }],
  },
  {
    p: ['inputStyle'],
    v: [{ color: '#222' }],
  },
  {
    p: ['textInputRef'],
    v: [assignRef(genRefId())],
  },
  {
    p: ['containerRef'],
    v: [assignRef(genRefId())],
  },
  {
    p: ['shake'],
    v: [true],
    t: [5000],
    noMnt: [true],
  },
];

const methodSamples = [
  {
    m: 'shake',
  },
  {
    m: 'focus',
    cd: 1000,
  },
  {
    m: 'blur',
    cd: 3000,
  },
  {
    m: 'clearText',
  },
];

export default buildSamples(Component, COMP_NAME, propSamples, methodSamples);
