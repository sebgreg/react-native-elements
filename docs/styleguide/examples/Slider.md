Slider example:
```js
const ReactNative = require('react-native');
const View = ReactNative.View;
const Text = ReactNative.Text;

initialState = { value: 0.71 };

<View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
  <Slider
    value={state.value}
    onValueChange={(value) => setState({value})} />
  <Text>Value: {state.value}</Text>
</View>
```