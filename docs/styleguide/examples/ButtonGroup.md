ButtonGroup Examples:

Using strings
```js
initialState = { selectedButtonIndex: 2 };

const ReactNative = require('react-native');
const View = ReactNative.View;

const buttons = ['Hello', 'World', 'Buttons'];

<ButtonGroup
  buttons={buttons}
  selectedIndex={state.selectedButtonIndex}
  onPress={(index) => setState({selectedButtonIndex: index})}
/>
```