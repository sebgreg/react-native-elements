import log from 'loglevel';
import buildSamples, { genRefId, assignRef } from '../../samplesBuilder';

import { Rating as Component } from '../../../src';
const COMP_NAME = 'Rating';

log.setLevel('debug');

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

const methodSamples = {};

export default buildSamples(Component, COMP_NAME, propSamples, methodSamples);
