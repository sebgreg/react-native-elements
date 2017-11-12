Form examples:
```js
initialState = { error: false };

const ReactNative = require('react-native');
const View = ReactNative.View;

<View>
<FormLabel
  labelStyle={{ fontSize: 20, color: "black" }} >spell "cat"</FormLabel>
<FormInput
  shake={!state.error ? false : true  }
  onChangeText={(text) => {
    setState({error: text != "cat" ? "wrong!" : null })
  }}
  containerStyle={{ borderWidth: "2px", borderColor: "#2f2f2f", backgroundColor: "#ddddddff" }}
  inputStyle={{ fontSize: 24 }}
/>
<FormValidationMessage
 labelStyle={{ fontSize: 30 }}
>
  {state.error}
</FormValidationMessage>
</View>
```