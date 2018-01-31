var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Avatar=require('../Avatar');var _Avatar2=_interopRequireDefault(_Avatar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
noProps:{
component:_Avatar2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

component:{
component:_Avatar2.default,
props:{component:_reactNative.TouchableOpacity},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
getJsxString:function getJsxString(){
return'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <Avatar \n    component={TouchableWithoutFeedback}\n    onPress={() => console.log(\'pressed\')}\n  />';




}}},


'width & height':{
component:_Avatar2.default,
props:{width:68,height:34},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onPress:{
component:_Avatar2.default,
props:{
onPress:function onPress(){
console.log('pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

onLongPress:{
component:_Avatar2.default,
props:{
onLongPress:function onLongPress(){
console.log('pressed, long');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

containerStyle:{
component:_Avatar2.default,
props:{containerStyle:{padding:50}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

source:{
component:_Avatar2.default,
props:{
source:'hero.jpg',
width:250},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

avatarStyle:{
component:_Avatar2.default,
props:{
source:'hero.jpg',
avatarStyle:{transform:[{rotateZ:'-45deg'}]}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

rounded:{
component:_Avatar2.default,
props:{rounded:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

title:{
component:_Avatar2.default,
props:{title:'hero'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

titleStyle:{
component:_Avatar2.default,
props:{title:'hero',titleStyle:{fontWeight:'bold'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

overlayContainerStyle:{
component:_Avatar2.default,
props:{overlayContainerStyle:{borderWidth:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

activeOpacity:{
component:_Avatar2.default,
props:{
onPress:function onPress(){},
activeOpacity:0.71},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

icon:{
component:_Avatar2.default,
props:{
icon:{name:'sms',color:'#071',size:35,type:'octicons'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

iconStyle:{
component:_Avatar2.default,
props:{
icon:{name:'sms',color:'#071',size:35,type:'octicons'},
iconStyle:{transform:[{rotateZ:'-45deg'}]}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

small:{
component:_Avatar2.default,
props:{small:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

medium:{
component:_Avatar2.default,
props:{medium:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

large:{
component:_Avatar2.default,
props:{large:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

xlarge:{
component:_Avatar2.default,
props:{xlarge:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

showEditButton:{
component:_Avatar2.default,
props:{showEditButton:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

onEditPress:{
component:_Avatar2.default,
props:{
showEditButton:true,
onEditPress:function onEditPress(){
console.log('edit pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

editButton:{
component:_Avatar2.default,
props:{
xlarge:true,
showEditButton:true,
editButton:{
size:30,
iconName:'sms',
iconType:'octicons',
iconColor:'#071',
underlayColor:'yellow',
style:{backgroundColor:'#7d8'}}},


enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Avatar:{samples:samples}}}},_samples2.default);




describe('Avatar Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Avatar2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render small avatar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Avatar2.default,{
small:true,
rounded:true,
source:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

activeOpacity:0.7,
avatarStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render medium avatar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Avatar2.default,{
medium:true,
rounded:true,
source:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

activeOpacity:0.7}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render large avatar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Avatar2.default,{
large:true,
rounded:true,
icon:{color:'blue',name:'name',size:22,type:'type'},
activeOpacity:0.7}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render xlarge avatar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Avatar2.default,{xlarge:true,rounded:true,title:'avatar title',activeOpacity:0.7}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render avatar without width',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Avatar2.default,{
height:90,
source:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

activeOpacity:0.7,
avatarStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render avatar without height',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Avatar2.default,{width:80,title:'avatar title',titleStyle:{color:'red'}}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Avatar.web.test.js.map