# Compatibility with react-native-web

## Component Progress

| Component    | initial check | estimated effort            | add tests  | final |
| ------------ | ------------- | --------------------------- | ---------- | ----- |
| Avatar       | 2017-11-08    | [med](#avatar-changes)      | 2017-11-29 |
| Badge        | 2017-11-10    | [med](#badge-changes)       | 2017-12-01 |
| Button Group | 2017-11-11    | [low](#buttongroup-changes) | 2017-11-29 |
| Buttons      | 2017-11-09    | [low](#button-changes)      | 2017-11-29 |
| Card         | 2017-11-10    | [low](#card-changes)   | 2017-12-01 |
| Checkbox     | 2017-11-10    | [low](#checkbox-changes)   | 2017-12-02 |
| Divider      | 2017-11-10    | no changes                | 2017-12-02 |
| Forms        | 2017-11-11    | [low](#form-changes)        | 2017-11-29 |
| Header       | 2017-11-07    | no changes                  | 2017-12-02 |
| Icon         | 2017-11-07    | [med](#icon-changes)        | 2017-11-30 |
| Lists        | 2017-11-11    | [low](#listitem-changes)       | 2017-12-03 |
| Pricing      | 2017-11-11    | no changes                |
| Rating       | 2017-11-11    | [med](#rating-changes)      | 2017-11-21 |
| SearchBar    | 2017-11-12    | [low](#search-changes)      |
| Slider       | 2017-11-08    | [low](#slider-changes)      |
| Social Icons | 2017-11-11    | [low](#socialicon-changes)   | 2017-11-30 |
| Text         | 2017-11-12    | [low](#text-changes)        |
| Tiles        | 2017-11-12    | [med](#tile-changes)        |

## Component Changes
note: "dom prop warnings" refer to console.warn messages which alert the developer that a dom element has been passed props it connot recognize

### Avatar changes
- fix: for `onPress`, `onLongPress`, and `activeOpactiy`: utilize `touchableProps` object, empty if View, then added via `"{...touchableProps}"` - to avoid dom prop warnings
- fix: `iconStyle` was not being passed to Icon - see [below](#outstanding)
- fix: set `draggable` to false for Image
- fix: changed `component` proptype from `.oneOf([...components])` to `.any` to make styleguide (react-docgen) happy
- change: added web support for `raised` prop

### Badge changes
- fix: removed isValidElement check for `control` prop

### Button changes
- change: add web support for raised
- fix: for `Component`, `leftIcon`, and `rightIcon`: delete from `attributes`- to avoid dom prop warnings

### ButtonGroup changes
- fix: for `activeOpacity`, `setOpactityTo`: introduce `{...opacityProps}` and for `onHideUnderlay`, `onShowUnderlay`, `underlayColor`: `{...highlightProps}` - to avoid dom prop warnings
- fix: add defaultProps: `{underlayColor: '#ffffff'}` to keep orig behaviour

### Card changes
- change: add web shadow to appear raised
- change: add web support for default font weights

### CheckBox changes
- change: added web support for bold text

### FormInput changes
- fix: `shake` and `textInputRef` added to props destructuring to avoid dom prop warnings
- change: add web support for default styles

### FormLabel changes
- change: added web support for bold text

### Icon changes
- fix: for `onPress`, `onLongPress`, `underlayColor` use `{...touchableProps}` to avoid dom prop warnings
- change: added web support for `raised` prop

### ListItem changes
- fix: use `{...highlightProps}` to avoid dom prop warnings for the following props:
  -  `onPress`,
  -  `onLongPress`,
  -  `underlayColor`
- fix: use `{...leftIconHighlightProps}` to avoid dom prop warnings for the following props:
  -  `leftIconOnPress`,
  -  `leftIconOnLongPress`,
  -  `leftIconUnderlayColor`
- change: add web support for default styles

### Rating changes
- fix: added `draggable={false}` to keep Image elements from dragging instead of chaning the rating
- fix: changed pointerEvents; `box-none` for parent View, `none` for Image
- fix: changed the way Animated was being used:
  - switched from ValueXY to Value - only need X
  - keep one instance-wide Animated.Value instead of creating new.  Change value via SetValue()
  - simplified interpolations

### SearchBar changes
- change: renamed class from `Search` to `SearchBar` for styleguidist

### Slider changes
- fix: `thumbTouchSize`, `animationType`, `animateTransitions`: added to props destructuring to avoid dom prop warnings
- fix: removed `marginTop` from `minimumTrackStyle`.  No negative effect on android

### SocialIcon changes
- change: added web support for `raised` prop

### Text changes
- change: for styleguidist:
  - rename function from `TextElement` to `Text`
  - rename import from `Text` to `NativeText`

### Tile changes
- avoid dom prop warnings
- images not showing

## Other Changes
- rnw does not export `ViewPropTypes` from the same place
- to resolve:
  - src/config/ViewPropTypes.js split into .ios .android and .web
  - added `moduleNameMapper` to jest config in package.json
  - added module.resolve.extensions to webpack.config.js


## Outstanding

### Themes & Styles:
- **note**:  planning to handle this with documentation and examples

### Badge:
- **suggestion**:  new prop to set Text node's `selectable` prop, defaults to false

- **suggestion**:  default value for `wrapperStyle` prop - set  to `alignSelf: 'flex-start'`, which sets width to fit content

- **confirm**:  ok to disable validElement check for `control` prop?

### Button
- **note**:  `leftIcon` and `rightIcon` cause React.createElement errors during run, but produce acceptable snapshots

### ButtonGroup:
- **question**:  `containerBorderRadius` prop has no effect on web.  current source is labelled as a workaround.  implement a workaround for web or chang the whole thing?

### CheckBox:
- **unresolved**:  `onLongIconPress` does not function on web
- **note**:  dom prop warnings are generated by react-native-vector-icons

### Icon:
- **suggestion**:  new prop to set Text node's `selectable` prop, defaults to false

- **suggestion**: default value for `containerStyle` prop - set  to `alignSelf: 'flex-start'`, which sets width to fit content

- **confirm**:  are changes to `iconStyle` prop ok?

### ListItem:
- **fix**: set `title` and `subtitle` default font sizes larger for web
- **fix**: add "alignItems: 'center'" to default `wrapperStyle`
- **note**: the following props have no effect on web:
  - `textInputAutoCapitalize` (does work in Chrome and iOS Safari)
  - `textInputAutoCorrect` (does work in iOS Safari)
  - `textInputReturnKeyType`

### Rating
- **suggestion**: check for existance of `extractOffset` function and use it if available
  - mouseclick & mousemove seem off from displayed position (more obvious on web)
  - later versions of react-native support `extractOffset` to make this behave better
