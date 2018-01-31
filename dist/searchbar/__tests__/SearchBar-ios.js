var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _SearchBarIos=require('../SearchBar-ios');var _SearchBarIos2=_interopRequireDefault(_SearchBarIos);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('iOS SearchBar component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SearchBarIos2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with loading',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{
showLoading:true,
loadingProps:{
style:{flex:1}},

containerStyle:{height:70}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with a custom search icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{leftIcon:_react2.default.createElement(_reactNative.View,null)}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render without search icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{noIcon:true}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render without clear icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{clearIcon:false}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with a custom Cancel button title',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{cancelButtonTitle:'Annuler'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should call onFocus when input is focused',function(){
var onFocusMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{onFocus:onFocusMock}));

component.find('Input').simulate('focus');
expect(onFocusMock).toBeCalled();
});

it('should call onBlur when input is blured',function(){
var onBlurMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{onFocus:onBlurMock}));

component.find('Input').simulate('focus');
component.find('Input').simulate('blur');
expect(onBlurMock).toBeCalled();
});

it('should call onChangeText when input is changed',function(){
var onChangeMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarIos2.default,{onChangeText:onChangeMock}));

component.find('Input').simulate('changeText','test');
expect(onChangeMock).toBeCalled();
});
});
//# sourceMappingURL=SearchBar-ios.js.map