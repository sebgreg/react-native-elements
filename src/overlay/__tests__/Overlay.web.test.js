import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import foreach from 'lodash.foreach';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../../../samples';
import Overlay from '../Overlay';

const children = <Text>something here</Text>;
const childrenString = `<Text>something here</Text>`;

const getJsx = propString => {
  const jsx = `initialState = { isVisible: false };
const View = RN.View;
const TouchableHighlight = RN.TouchableHighlight;
const Text = RN.Text;
const rootNode = document.getElementById("overlay-root");
    
<View>
  <TouchableHighlight
    onPress={() => {
      setState({ isVisible: true });
      setTimeout(() => {
        setState({ isVisible: false });
      }, 4000);
    }}
    style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
  >
    <Text>Show Overlay for 4 sec</Text>
  </TouchableHighlight>
  <Overlay ${propString} domNode={rootNode} isVisible={state.isVisible}>
    ${childrenString}
  </Overlay>
</View>
`;
  return jsx;
};

// const props = {
//   containerStyle: {
//     component: Overlay,
//     children,
//     props: {
//       containerStyle: { borderWidth: 5 },
//     },
//     enzyme: {
//       tests: { shallow: { snapshot: snapShot() } },
//     },
//     styleguidist: {
//       getJsxString: getJsx('containerStyle={{ borderWidth: 5 }}'),
//     },
//   },
//   overlayStyle: {
//     component: Overlay,
//     children,
//     props: {
//       overlayStyle: { borderWidth: 5 },
//     },
//     enzyme: {
//       tests: { shallow: { snapshot: snapShot() } },
//     },
//     styleguidist: {
//       getJsxString: getJsx('overlayStyle={{ borderWidth: 5 }}'),
//     },
//   },
// };

const props = {
  containerStyle: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      containerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  overlayStyle: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      overlayStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  overlayBackgroundColor: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      overlayBackgroundColor: '#aaa',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  windowBackgroundColor: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      windowBackgroundColor: '#aaa',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  borderRadius: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      borderRadius: 20,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  width: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      width: 50,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  height: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      height: 50,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  fullScreen: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      fullScreen: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  domNode: {
    component: Overlay,
    children,
    props: {
      isVisible: true,
      domNode: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
      buildJsx: attr => {
        return (
          <Overlay isVisible domNode={document.createElement('div')}>
            <Text>...overlay content...</Text>
          </Overlay>
        );
      },
    },
    styleguidist: {
      getJsxString: () => getJsx(),
    },
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Overlay: { samples } } },
  },
  options
);
