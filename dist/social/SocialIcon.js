Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _colors,_jsxFileName='src\\social\\SocialIcon.js';var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=_interopRequireDefault(_FontAwesome);
var _Text=require('../text/Text');var _Text2=_interopRequireDefault(_Text);
var _fonts=require('../config/fonts');var _fonts2=_interopRequireDefault(_fonts);
var _elevation=require('../config/elevation');var _elevation2=_interopRequireDefault(_elevation);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var log=function log(){
console.log('please attach method to this component');
};

var colors=(_colors={},_defineProperty(_colors,
'github-alt','#000000'),_defineProperty(_colors,
'google-plus-official','#dd4b39'),_defineProperty(_colors,
'reddit-alien','#fc461e'),_defineProperty(_colors,
'stack-overflow','#f27f33'),_defineProperty(_colors,'angellist',
'#1c4082'),_defineProperty(_colors,'codepen',
'#000000'),_defineProperty(_colors,'envelope',
'#000000'),_defineProperty(_colors,'etsy',
'#f2581e'),_defineProperty(_colors,'facebook',
'#3b5998'),_defineProperty(_colors,'foursquare',
'#0072b1'),_defineProperty(_colors,'github',
'#000000'),_defineProperty(_colors,'gitlab',
'#e14329'),_defineProperty(_colors,'instagram',
'#517fa4'),_defineProperty(_colors,'linkedin',
'#007bb6'),_defineProperty(_colors,'medium',
'#02b875'),_defineProperty(_colors,'pinterest',
'#cb2027'),_defineProperty(_colors,'quora',
'#a82400'),_defineProperty(_colors,'soundcloud',
'#f50'),_defineProperty(_colors,'steam',
'#c6c3c1'),_defineProperty(_colors,'stumbleupon',
'#EB4823'),_defineProperty(_colors,'tumblr',
'#32506d'),_defineProperty(_colors,'twitch',
'#6441A5'),_defineProperty(_colors,'twitter',
'#00aced'),_defineProperty(_colors,'vimeo',
'#aad450'),_defineProperty(_colors,'wordpress',
'#21759b'),_defineProperty(_colors,'youtube',
'#bb0000'),_colors);


var SocialIcon=function SocialIcon(props){var

activityIndicatorStyle=




















props.activityIndicatorStyle,button=props.button,component=props.component,disabled=props.disabled,fontFamily=props.fontFamily,fontStyle=props.fontStyle,fontWeight=props.fontWeight,iconColor=props.iconColor,iconSize=props.iconSize,iconStyle=props.iconStyle,light=props.light,loading=props.loading,onLongPress=props.onLongPress,onPress=props.onPress,raised=props.raised,small=props.small,style=props.style,title=props.title,type=props.type,underlayColor=props.underlayColor,attributes=_objectWithoutProperties(props,['activityIndicatorStyle','button','component','disabled','fontFamily','fontStyle','fontWeight','iconColor','iconSize','iconStyle','light','loading','onLongPress','onPress','raised','small','style','title','type','underlayColor']);

var touchableProps={};
var highlightProps={};
var Component=_reactNative.View;
if(onPress||onLongPress){
touchableProps={
onPress:(!disabled||log)&&(onPress||log),
onLongPress:disabled?null:onLongPress||log};

Component=component||_reactNative.TouchableHighlight;
}
if(Component==_reactNative.TouchableHighlight){
highlightProps={
underlayColor:light?'white':underlayColor||colors[type]};

}
var loadingElement=void 0;
if(loading){
loadingElement=
_react2.default.createElement(_reactNative.ActivityIndicator,{
animating:true,
style:[styles.activityIndicatorStyle,activityIndicatorStyle],
color:iconColor||'white',
size:small&&'small'||'large',__source:{fileName:_jsxFileName,lineNumber:94}});


}
return(
_react2.default.createElement(Component,_extends({},
attributes,
touchableProps,
highlightProps,{
disabled:disabled||false,
style:[
raised&&styles.raised,
styles.container,
button&&styles.button,
!button&&raised&&styles.icon,
!button&&
!light&&
!raised&&{
width:iconSize*2+4,
height:iconSize*2+4,
borderRadius:iconSize*2},

{backgroundColor:colors[type]},
light&&{backgroundColor:'white'},
style&&style],__source:{fileName:_jsxFileName,lineNumber:103}}),


_react2.default.createElement(_reactNative.View,{style:styles.wrapper,__source:{fileName:_jsxFileName,lineNumber:125}},
_react2.default.createElement(_FontAwesome2.default,{
style:[iconStyle&&iconStyle],
color:light?colors[type]:iconColor,
name:type,
size:iconSize,__source:{fileName:_jsxFileName,lineNumber:126}}),

button&&
title&&
_react2.default.createElement(_Text2.default,{
style:[
styles.title,
light&&{color:colors[type]},
fontFamily&&{fontFamily:fontFamily},
fontWeight&&{fontWeight:fontWeight},
fontStyle&&fontStyle],__source:{fileName:_jsxFileName,lineNumber:134}},


title),


loading&&loadingElement)));



};

SocialIcon.propTypes={
component:_propTypes2.default.func,
type:_propTypes2.default.string,
button:_propTypes2.default.bool,
onPress:_propTypes2.default.func,
onLongPress:_propTypes2.default.func,
iconStyle:_ViewPropTypes2.default.style,
style:_ViewPropTypes2.default.style,
iconColor:_propTypes2.default.string,
underlayColor:_propTypes2.default.string,
title:_propTypes2.default.string,
raised:_propTypes2.default.bool,
disabled:_propTypes2.default.bool,
loading:_propTypes2.default.bool,
activityIndicatorStyle:_ViewPropTypes2.default.style,
small:_propTypes2.default.string,
iconSize:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),
light:_propTypes2.default.bool,
fontWeight:_propTypes2.default.string,
fontStyle:_reactNative.Text.propTypes.style,
fontFamily:_propTypes2.default.string};


SocialIcon.defaultProps={
raised:true,
iconColor:'white',
iconSize:24,
button:false};


var styles=_reactNative.StyleSheet.create({
container:{
margin:7,
borderRadius:30,
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},

button:{
paddingTop:14,
paddingBottom:14},

raised:_extends({},
_reactNative.Platform.select({
ios:{
shadowColor:'rgba(0,0,0, .4)',
shadowOffset:{height:1,width:1},
shadowOpacity:1,
shadowRadius:1},

android:_extends({},
_elevation2.default.two),

web:_extends({},
_elevation2.default.two)})),



wrapper:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},

title:_extends({
color:'white',
marginLeft:15},
_reactNative.Platform.select({
ios:{
fontWeight:'bold'},

android:_extends({},
_fonts2.default.android.black)})),



icon:{
height:52,
width:52},

activityIndicatorStyle:{
marginHorizontal:10,
height:0}});exports.default=



SocialIcon;
//# sourceMappingURL=SocialIcon.js.map