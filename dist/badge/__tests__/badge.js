var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _badge=require('../badge');var _badge2=_interopRequireDefault(_badge);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Badge Component',function(){
it('should render without issue',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_badge2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should show error if value and child are included',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_badge2.default,{value:'Hello'},
_react2.default.createElement(_reactNative.Text,null)));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render if element included',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_badge2.default,null,
_react2.default.createElement(_reactNative.Text,{title:'foo'})));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
expect(component.props().children.props.children.props.title).toBe('foo');
});

it('should pass value props should still work',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_badge2.default,{value:'foo'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should apply text style in the badge',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_badge2.default,{textStyle:{color:'orange'}}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should apply container style in the badge',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_badge2.default,{containerStyle:{backgroundColor:'orange'}}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should allow adding custom element',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_badge2.default,{element:_react2.default.createElement(_reactNative.Text,null,'Hello')}));

expect(component.find('Text').props().children).toBe('Hello');
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should allow wrapper style',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_badge2.default,{wrapperStyle:{}}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=badge.js.map