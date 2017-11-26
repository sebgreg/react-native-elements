import React from 'react';
import ReactNative, {
  Button,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import times from 'lodash.times';
import mapValues from 'lodash.mapvalues';
import log from 'loglevel';

log.setLevel('warn');

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

export function buildSamples(Component, name, propSamples, methodSamples) {
  const commonScript =
    'const { Text, TouchableHighlight, View } = require("react-native");';
  const componentSamples = [];

  if (propSamples.length > 0)
    componentSamples.push({
      title: `${name}:  Props`,
      skip: false,
      attributes: propSamples.map(({ p, v, t, noMnt }) => {
        let props = {};
        times(p.length, i => {
          Object.assign(props, { [p[i]]: v[i] });
        });
        return {
          name: p,
          sampleType: sampleType.PROP,
          timeTravel: t,
          noMount: noMnt,
          jsx: React.createElement(Component, props),
        };
      }),
    });

  componentSamples.push({
    title: `${name}:  Methods`,
    skip: false,
    attributes: mapValues(methodSamples, (details, name) => {
      const refId = genRefId();
      const ComponentElement = React.createElement(Component, {
        ref: assignRef(refId),
      });
      const buttonTitle = details.cd
        ? `Execute: ${name}()`
        : `Begin ${details.cd / 1000}s timer for ${name}()`;
      const timerFunc = Function(
        details.cd
          ? `setTimeout(() => {${refId}.${name}();}, ${details.cd})`
          : `${refId}.${name}()`
      );
      return {
        name,
        sampleType: sampleType.METHOD,
        script: details.script
          ? commonScript.concat(details.script)
          : commonScript,
        tests: details.tests ? details.tests : {},
        guideWrapper: StyleGuideMethodWrapper(
          { timerFunc, buttonTitle },
          ComponentElement
        ),
        jsx: ComponentElement,
      };
    }),
  });

  return componentSamples;
}
