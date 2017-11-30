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
} from '../';
import { Button } from '../../../src';

const props = {
  noProps: {
    component: Button,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerViewStyle: {
    component: Button,
    props: { containerViewStyle: { padding: 20 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  Component: {
    component: Button,
    props: {
      Component: TouchableWithoutFeedback,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<Button \n' +
          '  Component={TouchableWithoutFeedback}\n' +
          '/>'
        );
      },
    },
  },
  buttonStyle: {
    component: Button,
    props: { buttonStyle: { padding: 50 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  title: {
    component: Button,
    props: { title: 'title prop' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  large: {
    component: Button,
    props: { title: 'button title', large: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Button,
    props: { title: 'button title', fontFamily: 'Courier New' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontWeight: {
    component: Button,
    props: { title: 'button title', fontWeight: 'bold' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  leftIcon: {
    component: Button,
    props: {
      title: 'button title',
      leftIcon: {
        name: 'gamepad',
        color: 'blue',
        size: 50,
        type: 'font-awesome',
      },
    },
    enzyme: {
      // buildJsx: attr => {
      //   console.warn('leftIcon.enzyme.buildJsx');
      //   try {
      //     const jsx = React.createElement(Button, {
      //       title: 'button title',
      //       leftIcon: {
      //         name: 'gamepad',
      //         color: 'red',
      //         size: 50,
      //         type: 'font-awesome',
      //       },
      //     });
      //     return jsx;
      //   } catch (err) {
      //     console.error(err);
      //   }
      // },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      // getJsxString: () => {
      //   return (
      //     '<Button\n' +
      //     '  leftIcon={{\n' +
      //     "    name: 'gamepad'," +
      //     "    color: 'blue',\n" +
      //     '    size: 50,' +
      //     "    type: 'font-awesome'" +
      //     '  }}\n' +
      //     '  title="button title"\n' +
      //     '/>;'
      //   );
      // },
    },
  },
  rightIcon: {
    component: Button,
    props: {
      title: 'button title',
      rightIcon: {
        name: 'gamepad',
        color: 'red',
        size: 50,
        type: 'font-awesome',
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconComponent: {
    component: Button,
    props: {
      title: 'button title',
      iconComponent: props => {
        return <Text>{props.color} </Text>;
      },
      leftIcon: {
        name: 'gamepad',
        color: 'blue',
        size: 50,
        type: 'font-awesome',
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          '<Button\n' +
          '  iconComponent={props => { return <Text>{props.color} </Text> }}\n' +
          '  leftIcon={{\n' +
          "    color: 'blue',\n" +
          '  }}\n' +
          '  title="button title"\n' +
          '/>;'
        );
      },
    },
  },
  onPress: {
    component: Button,
    props: {
      onPress: () => {
        alert('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onLongPress: {
    component: Button,
    props: {
      onLongPress: () => {
        alert('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  backgroundColor: {
    component: Button,
    props: { backgroundColor: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  borderRadius: {
    component: Button,
    props: { borderRadius: 10 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  color: {
    component: Button,
    props: { title: 'button title', color: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textStyle: {
    component: Button,
    props: { title: 'button title', textStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontSize: {
    component: Button,
    props: { title: 'button title', fontSize: 30 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  underlayColor: {
    component: Button,
    props: { title: 'button title', underlayColor: 'yellow' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  raised: {
    component: Button,
    props: { raised: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  disabled: {
    component: Button,
    props: { disabled: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  disabledStyle: {
    component: Button,
    props: { disabledStyle: { backgroundColor: '#555' }, disabled: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loading: {
    component: Button,
    props: { title: 'button title', loading: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  activityIndicatorStyle: {
    component: Button,
    props: {
      title: 'button title',
      activityIndicatorStyle: { marginRight: 50, opacity: 0.2 },
      loading: true,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loadingRight: {
    component: Button,
    props: { title: 'button title', loadingRight: true, loading: true },
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
