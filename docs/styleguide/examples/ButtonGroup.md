ButtonGroup Examples:

Using strings
```js
initialState = { selectedButtonIndex: 0 };

const ReactNative = require('react-native');
const View = ReactNative.View;
const Text = ReactNative.Text;

const buttons = ['Hello', 'World', 'ButtonGroup'];

<View>
<ButtonGroup
  buttons={buttons}
  selectedIndex={state.selectedButtonIndex}
  selectedBackgroundColor="#3cf"
  onPress={(index) => setState({selectedButtonIndex: index})}
/>
<Text>Selected: {state.selectedButtonIndex}</Text>
</View>
```

Using components
```js
initialState = { selectedButtonIndex: 1 };

const ReactNative = require('react-native');
const View = ReactNative.View;
const Text = ReactNative.Text;

const component1 = () => (<Text>Hello</Text>);
const component2 = () => (<Text>World</Text>);
const component3 = () => (<Text>ButtonGroup</Text>);
const buttons = [
  { element: component1 },
  { element: component2 },
  { element: component3 }
];

<View>
<ButtonGroup
  buttons={buttons}
  selectedIndex={state.selectedButtonIndex}
  selectedBackgroundColor="#9f6"
  onPress={(index) => setState({selectedButtonIndex: index})}
/>
<Text>Selected: {state.selectedButtonIndex}</Text>
</View>
```