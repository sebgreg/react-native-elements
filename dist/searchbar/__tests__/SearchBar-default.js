var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _SearchBarDefault=require('../SearchBar-default');var _SearchBarDefault2=_interopRequireDefault(_SearchBarDefault);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Default SearchBar component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SearchBarDefault2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with icons',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{
clearIcon:{
name:'3d-rotation',
color:'red'},

showLoading:true,
loadingProps:{
style:{flex:1}},

lightTheme:true,
containerStyle:{height:70}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
it('should call onTextChange when close icon is touched',function(){
var onChangeTextMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{textInputRef:'ti',clearIcon:true,onChangeText:onChangeTextMock}));

component.find('Icon[name="close"]').simulate('press');
expect(onChangeTextMock).toBeCalled();
});

it('should render without icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{underlineColorAndroid:'red',noIcon:true,round:true}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with a custom icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{icon:{type:'font-awesome',name:'glass'}}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=SearchBar-default.js.map