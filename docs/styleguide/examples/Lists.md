List examples:
```js

const ReactNative = require('react-native');
const View = ReactNative.View;

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

  <List>
    {
      list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{name: item.icon}}
        />
      ))
    }
  </List>
```
```js
const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

<List containerStyle={{marginBottom: 20}}>
    {
      list2.map((l, i) => (
        <ListItem
          roundAvatar
          avatar={{uri:l.avatar_url}}
          key={i}
          title={l.name}
        />
      ))
    }
  </List>
```