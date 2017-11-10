Badge examples:
```js
const ReactNative = require('react-native');
const View = ReactNative.View;
const Text = ReactNative.Text;

<View>

<Badge
  value={3}
  textStyle={{ color: 'orange' }}
/>

<View style={{ height: '20px' }} />

<Badge containerStyle={{ backgroundColor: 'violet', width: '100'}}>
  <Text>User 1</Text>
</Badge>

<View style={{ height: '20px' }} />

<Badge onPress={() => {console.log('pressed')}} value="5" />

</View>
```