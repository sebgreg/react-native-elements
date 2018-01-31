var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _lodash=require('lodash.foreach');var _lodash2=_interopRequireDefault(_lodash);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Overlay=require('../Overlay');var _Overlay2=_interopRequireDefault(_Overlay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var children=_react2.default.createElement(_reactNative.Text,null,'here\'s something');
var childrenString='<Text>here\'s something</Text>';

var getJsx=function getJsx(propString){
var jsx='initialState = { isVisible: false };\nconst View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n    \n<View>\n  <TouchableHighlight\n    onPress={() => {\n      setState({ isVisible: true });\n      setTimeout(() => {\n        setState({ isVisible: false });\n      }, 4000);\n    }}\n    style={{ backgroundColor: \'#aaa\', padding: 10, marginBottom: 15 }}\n  >\n    <Text>Show Overlay for 4 sec</Text>\n  </TouchableHighlight>\n  <Overlay '+
















propString+' isVisible={state.isVisible}>\n    '+
childrenString+'\n  </Overlay>\n</View>\n';



console.warn(jsx);
return jsx;
};






























var props={
containerStyle:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
containerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

overlayStyle:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
overlayStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

overlayBackgroundColor:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
overlayBackgroundColor:'#aaa'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

windowBackgroundColor:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
windowBackgroundColor:'#aaa'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

borderRadius:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
borderRadius:20},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

width:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
width:50},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

height:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
height:50},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

fullScreen:{
component:_Overlay2.default,
children:children,
props:{
isVisible:true,
fullScreen:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Overlay:{samples:samples}}}},_samples2.default);
//# sourceMappingURL=Overlay.web.test.js.map