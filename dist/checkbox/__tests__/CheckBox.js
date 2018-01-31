var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _CheckBox=require('../CheckBox');var _CheckBox2=_interopRequireDefault(_CheckBox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('CheckBox Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should use TouchableOpacity as default component',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,null));

expect(component.find('TouchableOpacity').length).toBe(1);
});

it('should allow to pass custom component',function(){
var View=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,{component:View}));

expect(component.find('View').length).toBe(1);
});

it('should render title in Text',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,{title:'Custom Text',checked:true}));

expect(component.props().children.props.children[1].props.children).toBe(
'Custom Text');

});

it('should render with icon and checked',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_CheckBox2.default,{
iconType:'font-awesome',
checkedColor:'red',
containerStyle:{backgroundColor:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with icon and iconRight',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_CheckBox2.default,{
iconType:'font-awesome',
iconRight:true,
uncheckedColor:'blue',
rigth:true,
center:true}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=CheckBox.js.map