Card examples:
```js
initialState = { checked: true }

const ReactNative = require('react-native');
const View = ReactNative.View;

// inject fonts
const fontAwesomeFont = require("react-native-vector-icons/Fonts/FontAwesome.ttf");
const fontAwesomeFontStyles = `@font-face {
  src: url(${fontAwesomeFont});
  font-family: 'FontAwesome';
}`;
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = fontAwesomeFontStyles;
} else {
  style.appendChild(document.createTextNode(fontAwesomeFontStyles));
}
document.head.appendChild(style);


<CheckBox
    title='Click Here'
    checked={state.checked}
    onPress={() => setState({ checked: !state.checked })}
  />

```