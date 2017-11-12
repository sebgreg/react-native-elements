Header example:

```js
// inject fonts
const style = document.createElement("style");

// fontAwesome
const materialFont = require("react-native-vector-icons/Fonts/MaterialIcons.ttf");
const materialFontStyles = `@font-face {
  src: url(${materialFont});
  font-family: 'Material Icons';
}`;
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = materialFontStyles;
} else {
  style.appendChild(document.createTextNode(materialFontStyles));
}

document.head.appendChild(style);

<Header
  backgroundColor="lightblue"
  leftComponent={{ icon: 'menu' }}
  centerComponent={<span>my title text</span>}
  rightComponent={<Icon name='person'/>}
  outerContainerStyles={{ width: "100%" }}
/>
```