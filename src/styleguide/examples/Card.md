Card examples:
```js
const ReactNative = require('react-native');
const View = ReactNative.View;

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
];

<View>
      <Card title="Card Title"
        containerStyle={{ backgroundColor: 'lightgreen' }}
        fontFamily="arial"
        dividerStyle={{ backgroundColor: 'purple' }}
        flexDirection="row"/>

      <Card
        title="HELLO WORLD"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        containerStyle={{ backgroundColor: 'red' }}
        titleStyle={{ backgroundColor: 'red' }}
        fontFamily="arial"
      />

      <Card
        title="foo title"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        imageWrapperStyle={{ backgroundColor: 'red' }}
        imageStyle={{ backgroundColor: 'red' }}
        wrapperStyle={{ backgroundColor: 'cyan' }}
        featuredTitle="featured title"
        featuredSubtitle="featured sub title"
        featuredSubtitleStyle={{ backgroundColor: 'darkred' }}
      />
</View>
```