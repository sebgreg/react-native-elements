var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _SearchBarAndroid=require('../SearchBar-android');var _SearchBarAndroid2=_interopRequireDefault(_SearchBarAndroid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Android SearchBar component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SearchBarAndroid2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with loading',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarAndroid2.default,{
showLoading:true,
loadingProps:{
style:{flex:1}}}));




expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render without search icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarAndroid2.default,{noIcon:true}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render without clear icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarAndroid2.default,{clearIcon:false}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should call onFocus when input is focused',function(){
var onFocusMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarAndroid2.default,{onFocus:onFocusMock}));

component.find('Input').simulate('focus');
expect(onFocusMock).toBeCalled();
});

it('should call onBlur when input is blured',function(){
var onBlurMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarAndroid2.default,{onFocus:onBlurMock}));

component.find('Input').simulate('focus');
component.find('Input').simulate('blur');
expect(onBlurMock).toBeCalled();
});

it('should call onChangeText when input is changed',function(){
var onChangeMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarAndroid2.default,{onChangeText:onChangeMock}));

component.find('Input').simulate('changeText','test');
expect(onChangeMock).toBeCalled();
});
});
//# sourceMappingURL=SearchBar-android.js.map