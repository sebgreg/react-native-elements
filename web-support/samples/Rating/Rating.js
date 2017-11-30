import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { assignRef, genRefId } from 'enzyme-styleguidist-sample-parser';
import {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../';
import { Rating as Component } from '../../../src';

const propSamples = [
  {
    p: ['onFinishRating'],
    v: [Function('rating', 'alert(rating)')],
  },
  {
    p: ['type'],
    v: ['rocket'],
  },
  {
    p: ['type', 'ratingImage', 'ratingColor', 'ratingBackgroundColor'],
    v: ['custom', 'water.png', 'blue', 'white'],
  },
  {
    p: ['ratingCount'],
    v: [7],
  },
  {
    p: ['imageSize'],
    v: [71],
  },
  {
    p: ['showRating'],
    v: [true],
  },
  {
    p: ['readonly'],
    v: [true],
  },
  {
    p: ['startingValue'],
    v: [3.3],
  },
  {
    p: ['fractions'],
    v: [2],
  },
  {
    p: ['startingValue', 'fractions'],
    v: [3.3, 1],
  },
  {
    p: ['startingValue', 'fractions', 'showRating'],
    v: [3.3, 2, true],
  },
];

const noProps = {
  component: Component,
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const onFinishRating = {
  component: Component,
  props: {
    onFinishRating: rating => {
      alert(rating);
    },
  },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const typeProp = {
  component: Component,
  props: { type: 'rocket' },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const custom = {
  component: Component,
  props: {
    type: 'custom',
    ratingImage: 'water.png',
    ratingColor: 'blue',
    ratingBackgroundColor: '#aaa',
  },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const ratingCount = {
  component: Component,
  props: { ratingCount: 3 },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const imageSize = {
  component: Component,
  props: { imageSize: 100 },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const showRating = {
  component: Component,
  props: { showRating: true },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const readonly = {
  component: Component,
  props: { readonly: true },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const startingValue = {
  component: Component,
  props: { startingValue: 3.3 },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const fractions = {
  component: Component,
  props: { fractions: 2 },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const style = {
  component: Component,
  props: { style: { backgroundColor: 'red', padding: 5 } },
  enzyme: {
    tests: onlySnapshots,
  },
  styleguidist: {},
};
const props = {
  'no props': noProps,
  onFinishRating,
  type: typeProp,
  'ratingColor, ratingImage, & ratingBackgroundColor': custom,
  ratingCount,
  imageSize,
  showRating,
  readonly,
  startingValue,
  fractions,
  style,
};

const methods = {};

export default {
  samples: {
    props,
    methods,
  },
};
