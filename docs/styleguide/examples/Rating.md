Rating example:
```js
const ReactNative = require('react-native');
const View = ReactNative.View;
const WATER_IMAGE = require('./water.png');

// const showRating = rating => {
//   console.log("Rating is: " + rating);
// }

<View>
  <Rating
    showRating
    onFinishRating={rating => {console.log(rating)}}
    style={{ paddingVertical: 10 }}
  />

  <Rating
    type="heart"
    ratingCount={3}
    fractions={2}
    startingValue={1.57}
    imageSize={40}
    onFinishRating={rating => {console.log(rating)}}
    showRating
    style={{ paddingVertical: 10 }}
  />

  <Rating
    type='custom'
    ratingImage={WATER_IMAGE}
    ratingColor='#3498db'
    ratingBackgroundColor='#c8c7c8'
    ratingCount={10}
    imageSize={30}
    onFinishRating={this.ratingCompleted}
    style={{ paddingVertical: 10 }}
  />
</View>
```