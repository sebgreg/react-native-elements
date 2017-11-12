SocialIcon examples:

Icons
```js
const ReactNative = require('react-native');
const View = ReactNative.View;

<View style={{backgroundColor: "#d0d0d0"}}>
<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

</View>
```

Buttons
```js
const ReactNative = require('react-native');
const View = ReactNative.View;

<View style={{backgroundColor: "#d0d0d0"}}>
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>


<SocialIcon
  button
  light
  type='instagram'
/>
</View>
```