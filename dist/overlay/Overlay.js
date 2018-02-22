Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}







var dimensions=_reactNative.Dimensions.get('window');
var windowWidth=dimensions.width;
var windowHeight=dimensions.height;

var ViewPropTypes=_reactNative.ViewPropTypes||_reactNative.View.propTypes;

var Overlay=function Overlay(props){var

children=










props.children,isVisible=props.isVisible,containerStyle=props.containerStyle,overlayStyle=props.overlayStyle,windowBackgroundColor=props.windowBackgroundColor,overlayBackgroundColor=props.overlayBackgroundColor,_props$borderRadius=props.borderRadius,borderRadius=_props$borderRadius===undefined?parseInt(borderRadius)||3:_props$borderRadius,width=props.width,height=props.height,fullScreen=props.fullScreen,rest=_objectWithoutProperties(props,['children','isVisible','containerStyle','overlayStyle','windowBackgroundColor','overlayBackgroundColor','borderRadius','width','height','fullScreen']);
if(!isVisible)return null;
return(
_react2.default.createElement(_reactNative.View,_extends({
style:[
styles.container,
windowBackgroundColor&&{backgroundColor:windowBackgroundColor},
containerStyle]},

rest),

_react2.default.createElement(_reactNative.View,{
style:[
styles.overlay,
{borderRadius:borderRadius},
overlayBackgroundColor&&{backgroundColor:overlayBackgroundColor},
width&&{width:width},
height&&{height:height},
fullScreen&&{width:windowWidth,height:windowHeight},
overlayStyle]},


children)));



};

Overlay.propTypes={
children:_propTypes2.default.any.isRequired,
isVisible:_propTypes2.default.bool.isRequired,
containerStyle:ViewPropTypes.style,
overlayStyle:ViewPropTypes.style,
windowBackgroundColor:_propTypes2.default.string,
overlayBackgroundColor:_propTypes2.default.string,
borderRadius:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),
width:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),
height:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),
fullScreen:_propTypes2.default.bool};


var styles=_reactNative.StyleSheet.create({
container:{
position:'absolute',
top:0,
left:0,
width:windowWidth,
height:windowHeight,
backgroundColor:'rgba(0, 0, 0, .4)',
justifyContent:'center',
alignItems:'center'},

overlay:_extends({
borderRadius:5,
width:windowWidth-80,
height:windowHeight-180,
backgroundColor:'white',
padding:10},
_reactNative.Platform.select({
ios:{
shadowColor:'rgba(0, 0, 0, .3)',
shadowOffset:{width:0,height:1},
shadowRadius:4},

android:{
elevation:2}}))});exports.default=





Overlay;
//# sourceMappingURL=Overlay.js.map