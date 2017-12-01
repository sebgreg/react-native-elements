# Compatibility with react-native-web

## Component Progress

| Component    | initial check | estimated effort            | add tests  | final |
| ------------ | ------------- | --------------------------- | ---------- | ----- |
| Avatar       | 2017-11-08    | [med](#avatar-changes)      | 2017-11-29 |
| Badge        | 2017-11-10    | [med](#badge-changes)       |
| Button Group | 2017-11-11    | [low](#buttongroup-changes) | 2017-11-29 |
| Buttons      | 2017-11-09    | [low](#button-changes)      | 2017-11-29 |
| Card         | 2017-11-10    | no changes                  |
| Checkbox     | 2017-11-10    | no changes                  |
| Divider      | 2017-11-10    | no changes                  |
| Forms        | 2017-11-11    | [low](#form-changes)        | 2017-11-29 |
| Header       | 2017-11-07    | no changes                  |
| Icon         | 2017-11-07    | [med](#icon-changes)        | 2017-11-30 |
| Lists        | 2017-11-11    | no changes                  |
| Pricing      | 2017-11-11    | no changes                  |
| Rating       | 2017-11-11    | [med](#rating-changes)      | 2017-11-21 |
| SearchBar    | 2017-11-12    | [low](#search-changes)      |
| Slider       | 2017-11-08    | [low](#slider-changes)      |
| Social Icons | 2017-11-11    | no changes                  | 2017-11-30 |
| Text         | 2017-11-12    | [low](#text-changes)        |
| Tiles        | 2017-11-12    | [med](#tile-changes)        |

## Component Changes

### Avatar changes
- avoid dom prop warnings
  - using `touchableProps` object, empty if View, then added via {...touchableProps}
- seems to work ok, but need to investigate why styleguidist can't parse
  - changed component proptype from .oneOf([...components]) to .any

### Badge changes
- set width instead of 100%

### Button changes
- add support for raised
- `leftIcon` and `rightIcon` cause React.createElement errors during run, but produce acceptable snapshots

### ButtonGroup changes
- avoid dom prop warnings
  - use {...opacityProps} and {...highlightProps}
  - add defaultProps: {underlayColor: '#ffffff'} to keep orig behaviour
- add units to numeric props
- prop: `containerBorderRadius` - see [below](#outstanding)

### Form changes
- avoid dom prop warnings

### Icon changes
- avoid dom prop warnings
  - use {...touchableProps}
- fix: `iconStyle` was not being passed to Icon - see [below](#outstanding)
- change: applied `borderRadius`, `height`, and `width` to all, not just reverse or raised - see [below](#outstanding)
- TODO: doc example for icon font injection

### Rating changes
- Keep images from being dragged
  - solution:
    - modified props to Views:
      - added draggable={false}
      - changed pointerEvents; `box-none` for parent View, `none` for Image
- mouseclick & mousemove seem off from displayed position

### SearchBar changes
- for styleguidist:
  - rename class from `Search` to `SearchBar`

### Slider changes
- avoid dom prop warnings
- small fix for `minimumTrackStyle` margin

### Text changes
- for styleguidist:
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

### Badge:
**suggestion**:  new prop to set Text node's `selectable` prop, defaults to false

**suggestion**:  default value for `wrapperStyle` prop - set  to `alignSelf: 'flex-start'`, which sets width to fit content

**confirm**:  ok to disable validElement check for `control` prop?

### ButtonGroup:
**question**:  `containerBorderRadius` prop has no effect on web.  current source is labelled as a workaround.  implement a workaround for web or chang the whole thing?

### Icon:
**suggestion**:  new prop to set Text node's `selectable` prop, defaults to false

**suggestion**: default value for `containerStyle` prop - set  to `alignSelf: 'flex-start'`, which sets width to fit content

**confirm**:  are changes to `iconStyle` prop ok?

**confirm**:  are chagnes to `borderRadius`, `height`, and `width` ok?

### Raing
**suggestion**: check for existance of `extractOffset` function and use it if available
  - mouseclick & mousemove seem off from displayed position (more obvious on web)
  - later versions of react-native support `extractOffset` to make this behave better
