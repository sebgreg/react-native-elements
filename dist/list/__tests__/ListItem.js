var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _ListItem=require('../ListItem');var _ListItem2=_interopRequireDefault(_ListItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('ListItem component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_ListItem2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with avatar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
avatar:'avatar_uri',
containerStyle:{backgroundColor:'peru'},
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with left icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
leftIcon:{
name:'wifi',
type:'font-awesome',
color:'red',
size:20},

wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with left icon component',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
leftIcon:_react2.default.createElement(_reactNative.Text,null,'I\'m left icon'),
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with right icon component',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
rightIcon:_react2.default.createElement(_reactNative.Text,null,'I\'m right icon'),
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with title and subtitle',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
title:'title test',
subtitle:'title test',
rightTitle:'title',
wrapperStyle:{backgroundColor:'peru'},
titleStyle:{backgroundColor:'peru'},
subtitleStyle:{backgroundColor:'peru'},
fontFamily:'arial'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with textInput',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{textInput:true,hideChevron:true,switchButton:true,fontFamily:'arial'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=ListItem.js.map