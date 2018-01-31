var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _ButtonGroup=require('../ButtonGroup');var _ButtonGroup2=_interopRequireDefault(_ButtonGroup);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var buttons=['Button 1','Button 2','Button 3'];
var buttonsElement=[{element:'Text'},{element:'View'}];

describe('ButtonGroup Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_ButtonGroup2.default,{buttons:buttons}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have onPress event',function(){
var onPress=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttons,
onPress:onPress,
containerStyle:{backgroundColor:'yellow'},
buttonStyle:{backgroundColor:'blue'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render selectedIndex',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttons,
selectedIndex:1,
selectedButtonStyle:{backgroundColor:'red'},
selectedTextStyle:{fontSize:12}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with button.element',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttonsElement,
innerBorderStyle:{width:300,color:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render lastButtonStyle',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttons,
lastBorderStyle:{backgroundColor:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=ButtonGroup.js.map