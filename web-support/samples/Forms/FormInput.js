import React from 'react';
import ReactNative, { Button, View } from 'react-native';
import log from 'loglevel';
import { FormInput as Component } from '../../../src';

const COMP_NAME = 'FormInput';

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
    p: 'containerStyle',
    v: { backgroundColor: '#181818' },
  },
  {
    p: 'inputStyle',
    v: { color: '#989898' },
  },
  {
    p: 'textInputRef',
    v: assignRef(genRefId()),
  },
  {
    p: 'containerRef',
    v: assignRef(genRefId()),
  },
  {
    p: 'shake',
    v: true,
  },
];

const methodSamples = [
  {
    m: 'shake',
    script: 'const View = require("react-native").View;',
  },
];

const componentSamples = [];

componentSamples.push({
  title: 'FormInput',
  skip: false,
  chunks: [
    {
      name: 'no props',
      jsx: React.createElement(Component),
    },
  ],
});

componentSamples.push({
  title: 'FormInput:  All props',
  skip: false,
  chunks: propSamples.map(({ p, v }) => {
    return {
      name: 'prop:  '.concat(p),
      jsx: React.createElement(Component, { [p]: v }),
    };
  }),
});

componentSamples.push({
  title: 'FormInput:  All methods',
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
