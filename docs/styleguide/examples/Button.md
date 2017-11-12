Button Examples:
```js
const ReactNative = require('react-native');
const View = ReactNative.View;

// inject fonts
const style = document.createElement("style");

// fontAwesome
const fontAwesomeFont = require("react-native-vector-icons/Fonts/FontAwesome.ttf");
const fontAwesomeFontStyles = `@font-face {
  src: url(${fontAwesomeFont});
  font-family: 'FontAwesome';
}`;
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = fontAwesomeFontStyles;
} else {
  style.appendChild(document.createTextNode(fontAwesomeFontStyles));
}

// Octicons
const octiconsFont = require("react-native-vector-icons/Fonts/Octicons.ttf");
const octiconsFontStyles = `@font-face {
  src: url(${octiconsFont});
  font-family: 'Octions';
}`;
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = octiconsFontStyles;
} else {
  style.appendChild(document.createTextNode(octiconsFontStyles));
}

document.head.appendChild(style);

<View>

<Button
  backgroundColor='red'
  title='BUTTON' />

<View style={{ height: '20px' }} />

<Button
  raised
  backgroundColor='orange'
  icon={{name: 'cached'}}
  title='RAISED BUTTON WITH ICON' />

<View style={{ height: '20px' }} />

<Button
  backgroundColor='yellow'
  color='black'
  large
  iconRight={{name: 'code', color: 'black' }}
  title='large with right icon' />

<View style={{ height: '20px' }} />

<Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='large with FontAwesome icon' />

<View style={{ height: '20px' }} />

<Button
  backgroundColor='lightblue'
  color='darkblue'
  large
  raised
  iconRight={{name: 'sms', type: 'octicons', color: 'darkblue' }}
  title='large raised with Octicons icon' />

</View>
```