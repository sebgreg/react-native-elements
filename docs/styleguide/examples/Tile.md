Tile exmample:
```js
const ReactNative = require('react-native');
const Text = ReactNative.Text;
const View = ReactNative.View;
const Image = ReactNative.Image;

const TRAIN = require('./red-train.png');

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
document.head.appendChild(style);


<View>
<Image source={TRAIN} style={{ width: 480, height: 360 }}/>
<Tile
   imageSrc={{ require: ('./red-train.png') }}
   imageContainerSTyle={{ width: 480, height: 360}}
   title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
   featured
   caption="Some Caption Text"
/>
<Tile
  imageSrc={{require: ('./red-train.png')}}
  title="Lorem ipsum dolor sit amet, consectetur"
  icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
  contentContainerStyle={{height: 70}}
>
  <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
    <Text>Caption</Text>
    <Text>Caption</Text>
  </View>
</Tile>
</View>
```