Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\avatar\\Avatar.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');










var _elevation=require('../config/elevation');var _elevation2=_interopRequireDefault(_elevation);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);

var _Icon=require('../icons/Icon');var _Icon2=_interopRequireDefault(_Icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var DEFAULT_COLORS=['#000','#333','#555','#888','#aaa','#ddd'];

var Avatar=function Avatar(props){var

component=




















props.component,onPress=props.onPress,onLongPress=props.onLongPress,containerStyle=props.containerStyle,icon=props.icon,iconStyle=props.iconStyle,source=props.source,small=props.small,medium=props.medium,large=props.large,xlarge=props.xlarge,avatarStyle=props.avatarStyle,rounded=props.rounded,title=props.title,titleStyle=props.titleStyle,overlayContainerStyle=props.overlayContainerStyle,activeOpacity=props.activeOpacity,showEditButton=props.showEditButton,editButton=props.editButton,onEditPress=props.onEditPress,attributes=_objectWithoutProperties(props,['component','onPress','onLongPress','containerStyle','icon','iconStyle','source','small','medium','large','xlarge','avatarStyle','rounded','title','titleStyle','overlayContainerStyle','activeOpacity','showEditButton','editButton','onEditPress']);var

width=props.width,height=props.height;

if(small){
width=34;
height=34;
}else if(medium){
width=50;
height=50;
}else if(large){
width=75;
height=75;
}else if(xlarge){
width=150;
height=150;
}else if(!width&&!height){
width=34;
height=34;
}else if(!width){
width=height;
}else if(!height){
height=width;
}

var titleSize=width/2;
var iconSize=width/2;

var touchableProps={};
var Component=_reactNative.View;
if(onPress||onLongPress){
Component=_reactNative.TouchableOpacity;
touchableProps={onPress:onPress,onLongPress:onLongPress,activeOpacity:activeOpacity};
}
if(component){
Component=component;
if(Component!=_reactNative.TouchableOpacity)delete touchableProps.activeOpacity;
}

var renderUtils=function renderUtils(){
if(showEditButton){
var editButtonProps=_extends({},editButton);

var defaultEditButtonSize=(width+height)/2/3;
var editButtonSize=editButton.size||defaultEditButtonSize;
var editButtonSizeStyle={
width:editButtonSize,
height:editButtonSize,
borderRadius:editButtonSize/2};

var editButtonIconSize=editButtonSize*0.8;

return(
_react2.default.createElement(_reactNative.TouchableHighlight,{
style:[
styles.editButton,
editButtonSizeStyle,
editButtonProps.style],

underlayColor:editButtonProps.underlayColor,
onPress:onEditPress,__source:{fileName:_jsxFileName,lineNumber:97}},

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:106}},
_react2.default.createElement(_Icon2.default,{
size:editButtonIconSize,
name:editButtonProps.iconName,
type:editButtonProps.iconType,
color:editButtonProps.iconColor,__source:{fileName:_jsxFileName,lineNumber:107}}))));




}
};

var renderContent=function renderContent(){
if(source){
return(
_react2.default.createElement(_reactNative.Image,{
style:[
styles.avatar,
rounded&&{borderRadius:width/2},
avatarStyle&&avatarStyle],

source:source,
draggable:false,__source:{fileName:_jsxFileName,lineNumber:122}}));


}else if(title){
return(
_react2.default.createElement(_reactNative.Text,{style:[styles.title,titleStyle&&titleStyle],__source:{fileName:_jsxFileName,lineNumber:134}},title));

}else if(icon){
return(
_react2.default.createElement(_Icon2.default,{
iconStyle:iconStyle&&iconStyle,
color:icon.color||'white',
name:icon.name||'user',
size:icon.size||iconSize,
type:icon.type&&icon.type,__source:{fileName:_jsxFileName,lineNumber:138}}));


}
};

var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'transparent',
width:width,
height:height},

avatar:{
width:width,
height:height},

overlayContainer:{
flex:1,
alignItems:'center',
backgroundColor:'rgba(0,0,0,0.2)',
alignSelf:'stretch',
justifyContent:'center',
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

title:{
color:'#ffffff',
fontSize:titleSize,
backgroundColor:'rgba(0,0,0,0)',
textAlign:'center'},

editButton:_extends({
position:'absolute',
bottom:0,
right:0,
alignItems:'center',
justifyContent:'center',
backgroundColor:DEFAULT_COLORS[4]},
_reactNative.Platform.select({
ios:{
shadowColor:DEFAULT_COLORS[0],
shadowOffset:{width:1,height:1},
shadowRadius:2,
shadowOpacity:0.5},

android:_elevation2.default.android.one,
web:_elevation2.default.web.one}))});




return(
_react2.default.createElement(Component,_extends({},
touchableProps,{
style:[
styles.container,
rounded&&{borderRadius:width/2},
containerStyle&&containerStyle]},

attributes,{__source:{fileName:_jsxFileName,lineNumber:198}}),

_react2.default.createElement(_reactNative.View,{
style:[
styles.overlayContainer,
rounded&&{borderRadius:width/2},
overlayContainerStyle&&overlayContainerStyle],__source:{fileName:_jsxFileName,lineNumber:207}},


renderContent(),
renderUtils())));



};

var defaultProps={
showEditButton:false,
onEditPress:null,
editButton:{
size:null,
iconName:'mode-edit',
iconType:'material',
iconColor:'#fff',
underlayColor:DEFAULT_COLORS[0],
style:null}};



Avatar.propTypes={
component:_propTypes2.default.func,
width:_propTypes2.default.number,
height:_propTypes2.default.number,
onPress:_propTypes2.default.func,
onLongPress:_propTypes2.default.func,
containerStyle:_propTypes2.default.any,
source:_reactNative.Image.propTypes.source,
avatarStyle:_propTypes2.default.any,
rounded:_propTypes2.default.bool,
title:_propTypes2.default.string,
titleStyle:_reactNative.Text.propTypes.style,
overlayContainerStyle:_propTypes2.default.any,
activeOpacity:_propTypes2.default.number,
icon:_propTypes2.default.object,
iconStyle:_reactNative.Text.propTypes.style,
small:_propTypes2.default.bool,
medium:_propTypes2.default.bool,
large:_propTypes2.default.bool,
xlarge:_propTypes2.default.bool,
showEditButton:_propTypes2.default.bool,
onEditPress:_propTypes2.default.func,
editButton:_propTypes2.default.shape({
size:_propTypes2.default.number,
iconName:_propTypes2.default.string,
iconType:_propTypes2.default.string,
iconColor:_propTypes2.default.string,
underlayColor:_propTypes2.default.string,
style:_ViewPropTypes2.default.style})};



Avatar.defaultProps=defaultProps;exports.default=

Avatar;
//# sourceMappingURL=Avatar.js.map