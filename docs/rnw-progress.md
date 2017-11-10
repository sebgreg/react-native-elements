# Compatibility with react-native-web

## Component Progress

| Component    | initial check | estimated effort       | add tests | final |
| ------------ | ------------- | ---------------------- | --------- | ----- |
| Avatar       | 2017-11-08    | no changes             |
| Badge        | 2017-11-10    | [med](#badge-changes)  |
| Button Group |
| Buttons      | 2017-11-09    | [low](#button-changes) |
| Card         | 2017-11-10    | no changes             |
| Checkbox     | 2017-11-10    | no changes             |
| Divider      | 2017-11-10    | no changes             |
| Forms        |
| Header       | 2017-11-07    | no changes             |
| Icons        | 2017-11-07    | [med](#icon-changes)   |
| Lists        |
| Pricing      |
| Rating       |
| Searchbar    |
| Slider       | 2017-11-08    | [low](#slider-changes) |
| Social Icons |
| Text         |
| Tile         |

## Component Changes

### Badge changes
- set width instead of 100%

### Button changes
- add support for raised

### Icon changes
- avoid dom prop warnings
- doc example for icon font injection

### Slider changes
- avoid dom prop warnings
- small fix for "minimumTrackStyle" margin


## Other Changes
- rnw does not export ViewPropTypes from the same place
  - src/config/ViewPropTypes.js split into .ios .android and .web
  - added "moduleNameMapper" to jest config in package.json
  - added module.resolve.extensions to webpack.config.js
