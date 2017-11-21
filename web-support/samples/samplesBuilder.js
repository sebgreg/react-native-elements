import React from 'react';
import ReactNative, {
  Button,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import times from 'lodash.times';
import log from 'loglevel';

log.setLevel('debug');

function uuid(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

export const genRefId = () => {
  const id = uuid().replace(/-/g, '');
  return `ref${id}`;
};

export const assignRef = refId => {
  return Function('ref', `return ${refId} = ref`);
};

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

export default function buildSamples(
  Component,
  name,
  propSamples,
  methodSamples
) {
  const commonScript =
    'const { Text, TouchableHighlight, View } = require("react-native");';
  const componentSamples = [];

  componentSamples.push({
    title: `${name}:  Base`,
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
      title: `${name}:  All props`,
      skip: false,
      chunks: propSamples.map(({ p, v, t, noMnt }) => {
        let props = {};
        times(p.length, i => {
          Object.assign(props, { [p[i]]: v[i] });
        });
        return {
          name: 'prop:  '.concat(p),
          timeTravel: t,
          noMount: noMnt,
          jsx: React.createElement(Component, props),
        };
      }),
    });

  componentSamples.push({
    title: `${name}:  All methods`,
    skip: false,
    chunks: methodSamples.map(({ m, script, cd }) => {
      const refId = genRefId();
      const timerFunc = Function(`setTimeout(() => {${refId}.${m}();}, ${cd})`);
      const buttonTitle = cd
        ? `Start ${cd / 1000} sec countdown for: ${m}()`
        : `Execute: ${m}()`;
      return {
        name: 'method:  '.concat(m).concat('()'),
        script: commonScript,
        jsx: (
          <View>
            <TouchableHighlight
              onPress={timerFunc}
              style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
            >
              <Text>{buttonTitle}</Text>
            </TouchableHighlight>
            {React.createElement(Component, { ref: assignRef(refId) })}
          </View>
        ),
      };
    }),
  });

  return componentSamples;
}
