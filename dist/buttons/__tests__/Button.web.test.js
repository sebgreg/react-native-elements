var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _reactNative=require('react-native');





var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _colors=require('../../config/colors');var _colors2=_interopRequireDefault(_colors);
var _Button=require('../Button');var _Button2=_interopRequireDefault(_Button);
var _Icon=require('../../icons/Icon');var _Icon2=_interopRequireDefault(_Icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var icon=_react2.default.createElement(_Icon2.default,{color:'#fff',name:'pets'});

var props={
noProps:{
component:_Button2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

containerStyle:{
component:_Button2.default,
props:{containerStyle:{padding:20,backgroundColor:'#071'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

buttonStyle:{
component:_Button2.default,
props:{buttonStyle:{padding:20}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

text:{
component:_Button2.default,
props:{text:'text prop'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onPress:{
component:_Button2.default,
props:{
onPress:function onPress(){
console.log('pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textStyle:{
component:_Button2.default,
props:{
text:'button text',
textStyle:{fontSize:32,fontFamily:'Courier New'}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

textProps:{
component:_Button2.default,
props:{
text:'button\\ntext',
textProps:{
numberOfLines:2}},


enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

loading:{
component:_Button2.default,
props:{text:'button text',loading:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

loadingStyle:{
component:_Button2.default,
props:{
text:'button text',
loadingStyle:{marginRight:50,opacity:0.2},
loading:true},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

loadingProps:{
component:_Button2.default,
props:{loading:true,loadingProps:{size:'large'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

icon:{
component:_Button2.default,
props:{icon:icon},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

iconContainerStyle:{
component:_Button2.default,
props:{icon:icon,iconContainerStyle:{borderWidth:2}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

iconRight:{
component:_Button2.default,
props:{icon:icon,iconRight:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

clear:{
component:_Button2.default,
props:{
text:'button text',
textStyle:{color:'#071'},
clear:true},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Buttons:{sectionComponents:{Button:{samples:samples}}}},_samples2.default);
//# sourceMappingURL=Button.web.test.js.map