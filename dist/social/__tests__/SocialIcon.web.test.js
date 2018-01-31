var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _SocialIcon=require('../SocialIcon');var _SocialIcon2=_interopRequireDefault(_SocialIcon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
noProps:{
component:_SocialIcon2.default,
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

title:{
component:_SocialIcon2.default,
props:{type:'medium',title:'medium',button:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


type:{
component:_SocialIcon2.default,
props:{type:'medium'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


raised:{
component:_SocialIcon2.default,
props:{type:'medium',raised:false},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


button:{
component:_SocialIcon2.default,
props:{type:'medium',button:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


onPress:{
component:_SocialIcon2.default,
props:{
type:'medium',
onPress:function onPress(){
console.log('pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


onLongPress:{
component:_SocialIcon2.default,
props:{
type:'medium',
onLongPress:function onLongPress(){
console.log('pressed, long');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


light:{
component:_SocialIcon2.default,
props:{type:'medium',light:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

iconStyle:{
component:_SocialIcon2.default,
props:{
type:'medium',
button:true,
iconStyle:{transform:[{rotateZ:'-45deg'}]}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


style:{
component:_SocialIcon2.default,
props:{
type:'medium',
button:true,
style:{width:120,transform:[{rotateZ:'-45deg'}]}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


iconColor:{
component:_SocialIcon2.default,
props:{type:'medium',iconColor:'#071'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


underlayColor:{
component:_SocialIcon2.default,
props:{
type:'medium',
onPress:function onPress(){},
underlayColor:'yellow'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


iconSize:{
component:_SocialIcon2.default,
props:{type:'medium',iconSize:40},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


component:{
component:_SocialIcon2.default,
props:{type:'medium',component:_reactNative.TouchableWithoutFeedback},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
getJsxString:function getJsxString(){
return'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <SocialIcon\n    type=\'medium\'\n    component={TouchableWithoutFeedback}\n  />';




}}},


fontFamily:{
component:_SocialIcon2.default,
props:{
type:'medium',
fontFamily:'Courier New',
title:'medium',
button:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


fontWeight:{
component:_SocialIcon2.default,
props:{
type:'medium',
fontWeight:'bold',
title:'medium',
button:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


fontStyle:{
component:_SocialIcon2.default,
props:{
type:'medium',
fontStyle:{padding:50},
title:'medium',
button:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


disabled:{
component:_SocialIcon2.default,
props:{type:'medium',disabled:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}},


loading:{
component:_SocialIcon2.default,
props:{type:'medium',loading:true,title:'medium',button:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}}}};




var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Icons:{sectionComponents:{SocialIcon:{samples:samples}}}},_samples2.default);



describe('SocialIcon component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SocialIcon2.default,{type:'twitter'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should show loading indicator',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SocialIcon2.default,{type:'twitter',loading:true}));

expect(component.find('ActivityIndicator').length).toBe(1);
});

it('should render light social icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SocialIcon2.default,{light:true,raised:false,type:'medium'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render social icon button',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SocialIcon2.default,{title:'Sign In With Facebook',button:true,type:'facebook'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have onPress event',function(){
var onPress=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SocialIcon2.default,{onPress:onPress,type:'gitlab'}));

component.simulate('press');
expect(onPress).toHaveBeenCalled();
});
});
//# sourceMappingURL=SocialIcon.web.test.js.map