var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _SearchBar=require('../SearchBar');var _SearchBar2=_interopRequireDefault(_SearchBar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('SearchBar wrapper component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SearchBar2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render a default SearchBar if wrong platform',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBar2.default,{
platform:'wrong-platform'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render an iOS SearchBar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBar2.default,{
platform:'ios'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render an Android SearchBar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBar2.default,{
platform:'android'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=SearchBar.js.map