var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _badge=require('../badge');var _badge2=_interopRequireDefault(_badge);

var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}







var props={
noProps:{
component:_badge2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

value:{
component:_badge2.default,
props:{value:7},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

containerStyle:{
component:_badge2.default,
props:{value:'seven',containerStyle:{backgroundColor:'#071'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

wrapperStyle:{
component:_badge2.default,
props:{value:'seven',wrapperStyle:{alignSelf:'flex-start'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

textStyle:{
component:_badge2.default,
props:{
value:'seven',
textStyle:{fontSize:30}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

children:{
component:_badge2.default,
children:[
_react2.default.createElement(_reactNative.Text,{style:{color:'white'}},'a text node'),
_react2.default.createElement(_reactNative.Text,{style:{color:'white'}},'a text node')],

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
script:'const Text = RN.Text;\n'}},


onPress:{
component:_badge2.default,
props:{
value:'press',
onPress:function onPress(){
console.log('pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

component:{
component:_badge2.default,
props:{component:_reactNative.TouchableOpacity},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
getJsxString:function getJsxString(){
return'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <Badge \n    value=\'TouchableWithoutFeedback\'\n    component={TouchableWithoutFeedback}\n    textStyle={{ color: \'#071\'}}\n    onPress={() => console.log(\'pressed\')}\n  />';






}}}};




var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Badge:{samples:samples}}}},_samples2.default);




describe('Badge Badge',function(){
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
//# sourceMappingURL=badge.web.test.js.map