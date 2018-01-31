var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Icon=require('../Icon');var _Icon2=_interopRequireDefault(_Icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
noProps:{
component:_Icon2.default,
enzyme:{
tests:{
shallow:{snapshot:(0,_samples.snapShot)()}}},


styleguidist:{}},

name:{
component:_Icon2.default,
props:{name:'pets'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

type:{
component:_Icon2.default,
props:{name:'sms',type:'octicons'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


size:{
component:_Icon2.default,
props:{name:'pets',size:50},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


color:{
component:_Icon2.default,
props:{name:'pets',color:'#071'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


iconStyle:{
component:_Icon2.default,
props:{name:'pets',iconStyle:{transform:[{rotateZ:'-45deg'}]}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


component:{
component:_Icon2.default,
props:{name:'pets',component:_reactNative.TouchableWithoutFeedback},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
getJsxString:function getJsxString(){
return'  const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <Icon\n  name=\'pets\'\n    component={TouchableWithoutFeedback}\n  />';




}}},


onPress:{
component:_Icon2.default,
props:{
name:'pets',
onPress:function onPress(){
console.log('pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


onLongPress:{
component:_Icon2.default,
props:{
name:'pets',
onLongPress:function onLongPress(){
console.log('pressed, long');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


underlayColor:{
component:_Icon2.default,
props:{
name:'pets',
onPress:function onPress(){
console.log('pressed');
},
underlayColor:'yellow'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


reverse:{
component:_Icon2.default,
props:{name:'pets',reverse:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


raised:{
component:_Icon2.default,
props:{name:'pets',raised:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


containerStyle:{
component:_Icon2.default,
props:{name:'pets',containerStyle:{padding:50}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


reverseColor:{
component:_Icon2.default,
props:{name:'pets',reverse:true,reverseColor:'#071'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Icons:{sectionComponents:{Icon:{samples:samples}}}},_samples2.default);




describe('Icon component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Icon2.default,{name:'wifi'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with icon type',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Icon2.default,{
name:'alert',
type:'octicon',
reverse:true,
color:'red',
iconStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have onPress event',function(){
var onPress=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Icon2.default,{onPress:onPress,name:'wifi'}));

component.simulate('press');
expect(onPress).toHaveBeenCalledTimes(1);
});
});
//# sourceMappingURL=Icon.web.test.js.map