# Compatibility with react-native-web

## Component Progress

| Component    | initial check | estimated effort            | add tests  | final |
| ------------ | ------------- | --------------------------- | ---------- | ----- |
| Avatar       | 2017-11-08    | [med](#avatar-changes)      |
| Badge        | 2017-11-10    | [med](#badge-changes)       |
| Button Group | 2017-11-11    | [low](#buttongroup-changes) |
| Buttons      | 2017-11-09    | [low](#button-changes)      |
| Card         | 2017-11-10    | no changes                  |
| Checkbox     | 2017-11-10    | no changes                  |
| Divider      | 2017-11-10    | no changes                  |
| Forms        | 2017-11-11    | [low](#form-changes)        |
| Header       | 2017-11-07    | no changes                  |
| Icon         | 2017-11-07    | [med](#icon-changes)        |
| Lists        | 2017-11-11    | no changes                  |
| Pricing      | 2017-11-11    | no changes                  |
| Rating       | 2017-11-11    | [med](#rating-changes)      | 2017-11-21 |
| SearchBar    | 2017-11-12    | [low](#search-changes)      |
| Slider       | 2017-11-08    | [low](#slider-changes)      |
| Social Icons | 2017-11-11    | no changes                  |
| Text         | 2017-11-12    | [low](#text-changes)        |
| Tiles        | 2017-11-12    | [med](#tile-changes)        |

## Component Changes

### Avatar changes
- seems to work ok, but need to investigate why styleguidist can't parse

### Badge changes
- set width instead of 100%

### Button changes
- add support for raised

### ButtonGroup changes
- avoid dom prop warnings
- add units to numberic props

### Form changes
- avoid dom prop warnings

### Icon changes
- avoid dom prop warnings
- doc example for icon font injection

### Rating changes
- Keep images from being dragged
  - solution:
    - modified props to Views:
      - added draggable={false}
      - changed pointerEvents; "box-none" for parent View, "none" for Image
- mouseclick & mousemove seem off from displayed position

### SearchBar changes
- for styleguidist:
  - rename class from "Search" to "SearchBar"

### Slider changes
- avoid dom prop warnings
- small fix for "minimumTrackStyle" margin

### Text changes
- for styleguidist:
  - rename function from "TextElement" to "Text"
  - rename import from "Text" to "NativeText"

### Tile changes
- avoid dom prop warnings
- images not showing

## Other Changes
- rnw does not export ViewPropTypes from the same place
- to resolve:
  - src/config/ViewPropTypes.js split into .ios .android and .web
  - added "moduleNameMapper" to jest config in package.json
  - added module.resolve.extensions to webpack.config.js
