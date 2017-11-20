// @flow
import React from 'react';
import ReactNative, { Button, View } from 'react-native';
import log from 'loglevel';
import { Rating as Component } from '../../../src';

const COMP_NAME = 'Rating';

log.setLevel('debug');

const counter = 0;
const genRefId = () => {
  return `uniqueRef${counter++}`;
};
const assignRef = refId => {
  return Function('ref', `return ${refId} = ref`);
};

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
    p: ['startingValue'],
    v: [3.3],
  },
  {
    p: ['fractions'],
    v: [2],
  },
  {
    p: ['startingValue', 'fractions'],
    v: [3.3, 2],
  },
  {
    p: ['startingValue', 'showRating'],
    v: [3.3, true],
  },
];

const methodSamples = [];

const componentSamples = [];

componentSamples.push({
  title: COMP_NAME,
  skip: false,
  chunks: [
    {
      name: 'no props',
      jsx: React.createElement(Component),
    },
  ],
});

if (propSamples.length > 0)
  componentSamples.push({
    title: `${COMP_NAME}:  All props`,
    skip: false,
    chunks: propSamples.map(({ p, v }) => {
      let props = {};
      for (let i = 0; i < p.length; i++) {
        props[p[i]] = v[i];
      }
      return {
        name: 'prop:  '.concat(p),
        jsx: React.createElement(Component, props),
      };
    }),
  });

if (methodSamples.length > 0)
  componentSamples.push({
    title: `${COMP_NAME}:  All methods`,
    skip: false,
    chunks: methodSamples.map(({ m, script }) => {
      const refId = genRefId();
      // const exec = Function('ref', 'm', `(${refId}.${m}()`);
      const timerFunc = Function(`setTimeout(() => {${refId}.${m}();}, 3000)`);
      const buttonTitle = `Start 3 sec countdown for: ${m}()`;
      return {
        name: 'method:  '.concat(m),
        script,
        jsx: (
          <View>
            <Button title={buttonTitle} onPress={timerFunc} />
            {React.createElement(Component, { ref: assignRef(refId) })}
          </View>
        ),
      };
    }),
  });

export default componentSamples;
