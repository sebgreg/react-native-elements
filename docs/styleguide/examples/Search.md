Search example:
```js
const ReactNative = require('react-native');
const View = ReactNative.View;

<View>

  <SearchBar
    onChangeText={(text) => { console.log(text) }}
    onClearText={(text) => { console.log(text) }}
    placeholder='Type Here...' />

  <SearchBar
    noIcon
    onChangeText={(text) => { console.log(text) }}
    onClearText={(text) => { console.log(text) }}
    placeholder='Type Here...' />

  <SearchBar
    round
    onChangeText={(text) => { console.log(text) }}
    onClearText={(text) => { console.log(text) }}
    placeholder='Type Here...' />

  <SearchBar
    lightTheme
    onChangeText={(text) => { console.log(text) }}
    onClearText={(text) => { console.log(text) }}
    placeholder='Type Here...' />

</View>
```