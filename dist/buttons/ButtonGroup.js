Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\buttons\\ButtonGroup.js';var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _Text=require('../text/Text');var _Text2=_interopRequireDefault(_Text);
var _normalizeText=require('../helpers/normalizeText');var _normalizeText2=_interopRequireDefault(_normalizeText);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var ButtonGroup=function ButtonGroup(props){var

component=




















props.component,buttons=props.buttons,_onPress=props.onPress,selectedIndex=props.selectedIndex,selectedIndexes=props.selectedIndexes,selectMultiple=props.selectMultiple,containerStyle=props.containerStyle,innerBorderStyle=props.innerBorderStyle,lastBorderStyle=props.lastBorderStyle,buttonStyle=props.buttonStyle,textStyle=props.textStyle,selectedTextStyle=props.selectedTextStyle,selectedButtonStyle=props.selectedButtonStyle,underlayColor=props.underlayColor,activeOpacity=props.activeOpacity,onHideUnderlay=props.onHideUnderlay,onShowUnderlay=props.onShowUnderlay,setOpacityTo=props.setOpacityTo,containerBorderRadius=props.containerBorderRadius,disableSelected=props.disableSelected,attributes=_objectWithoutProperties(props,['component','buttons','onPress','selectedIndex','selectedIndexes','selectMultiple','containerStyle','innerBorderStyle','lastBorderStyle','buttonStyle','textStyle','selectedTextStyle','selectedButtonStyle','underlayColor','activeOpacity','onHideUnderlay','onShowUnderlay','setOpacityTo','containerBorderRadius','disableSelected']);

var opacityProps={};
var highlightProps={};
var Component=component||_reactNative.TouchableHighlight;
if(Component===_reactNative.TouchableOpacity){
opacityProps={activeOpacity:activeOpacity,setOpacityTo:setOpacityTo};
}else if(Component===_reactNative.TouchableHighlight){
highlightProps={
onHideUnderlay:onHideUnderlay,
onShowUnderlay:onShowUnderlay,
underlayColor:underlayColor||_colors2.default.primary};

}
return(
_react2.default.createElement(_reactNative.View,_extends({},
attributes,{
style:[styles.container,containerStyle&&containerStyle],__source:{fileName:_jsxFileName,lineNumber:54}}),

buttons.map(function(button,i){
var isSelected=selectedIndex===i||selectedIndexes.includes(i);

return(
_react2.default.createElement(Component,_extends({},
opacityProps,
highlightProps,{
disabled:disableSelected&&i===selectedIndex?true:false,
onPress:function onPress(){
if(selectMultiple){
if(selectedIndexes.includes(i)){
_onPress(selectedIndexes.filter(function(index){return index!==i;}));
}else{
_onPress([].concat(_toConsumableArray(selectedIndexes),[i]));
}
}else{
_onPress(i);
}
},
key:i,
style:[
styles.button,


i<buttons.length-1&&{
borderRightWidth:
i===0?
0:
innerBorderStyle&&innerBorderStyle.width||1,
borderRightColor:
innerBorderStyle&&innerBorderStyle.color||_colors2.default.grey4},

i===1&&{
borderLeftWidth:
innerBorderStyle&&innerBorderStyle.width||1,
borderLeftColor:
innerBorderStyle&&innerBorderStyle.color||_colors2.default.grey4},

i===buttons.length-1&&_extends({},
lastBorderStyle,{
borderTopRightRadius:containerBorderRadius,
borderBottomRightRadius:containerBorderRadius}),

i===0&&{
borderTopLeftRadius:containerBorderRadius,
borderBottomLeftRadius:containerBorderRadius},

isSelected&&{
backgroundColor:_colors2.default.primary}],__source:{fileName:_jsxFileName,lineNumber:62}}),



_react2.default.createElement(_reactNative.View,{
style:[
styles.textContainer,
buttonStyle&&buttonStyle,
isSelected&&selectedButtonStyle&&selectedButtonStyle],__source:{fileName:_jsxFileName,lineNumber:110}},


button.element?
_react2.default.createElement(button.element,{__source:{fileName:_jsxFileName,lineNumber:118}}):

_react2.default.createElement(_Text2.default,{
style:[
styles.buttonText,
textStyle&&textStyle,
isSelected&&{color:'#fff'},
isSelected&&selectedTextStyle],__source:{fileName:_jsxFileName,lineNumber:120}},


button))));





})));


};

var styles=_reactNative.StyleSheet.create({
button:{
flex:1},

textContainer:{
flex:1,
justifyContent:'center',
alignItems:'center'},

container:{
marginLeft:10,
marginRight:10,
marginBottom:5,
marginTop:5,
borderColor:'#e3e3e3',
borderWidth:1,
flexDirection:'row',
borderRadius:3,
overflow:'hidden',
backgroundColor:'#fff',
height:40},

buttonText:_extends({
fontSize:(0,_normalizeText2.default)(13),
color:_colors2.default.grey2},
_reactNative.Platform.select({
ios:{
fontWeight:'500'}}))});





ButtonGroup.propTypes={
button:_propTypes2.default.object,
component:_propTypes2.default.any,
onPress:_propTypes2.default.func,
buttons:_propTypes2.default.array,
containerStyle:_ViewPropTypes2.default.style,
textStyle:_reactNative.Text.propTypes.style,
selectedTextStyle:_reactNative.Text.propTypes.style,
selectedButtonStyle:_ViewPropTypes2.default.style,
underlayColor:_propTypes2.default.string,
selectedIndex:_propTypes2.default.number,
selectedIndexes:_propTypes2.default.arrayOf(_propTypes2.default.number),
activeOpacity:_propTypes2.default.number,
onHideUnderlay:_propTypes2.default.func,
onShowUnderlay:_propTypes2.default.func,
setOpacityTo:_propTypes2.default.any,
innerBorderStyle:_propTypes2.default.shape({
color:_propTypes2.default.string,
width:_propTypes2.default.number}),

lastBorderStyle:_propTypes2.default.oneOfType([
_ViewPropTypes2.default.style,
_reactNative.Text.propTypes.style]),

buttonStyle:_ViewPropTypes2.default.style,
containerBorderRadius:_propTypes2.default.number,
disableSelected:_propTypes2.default.bool,
selectMultiple:_propTypes2.default.bool};


ButtonGroup.defaultProps={
selectedIndexes:[],
selectMultiple:false,
containerBorderRadius:3,
onPress:function onPress(){}};exports.default=


ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map