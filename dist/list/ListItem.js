Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\list\\ListItem.js';var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');









var _Avatar=require('../avatar/Avatar');var _Avatar2=_interopRequireDefault(_Avatar);
var _badge=require('../badge/badge');var _badge2=_interopRequireDefault(_badge);
var _Icon=require('../icons/Icon');var _Icon2=_interopRequireDefault(_Icon);
var _Text=require('../text/Text');var _Text2=_interopRequireDefault(_Text);
var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _fonts=require('../config/fonts');var _fonts2=_interopRequireDefault(_fonts);
var _normalizeText=require('../helpers/normalizeText');var _normalizeText2=_interopRequireDefault(_normalizeText);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var ListItem=function ListItem(props){var

onPress=





























































props.onPress,title=props.title,leftIcon=props.leftIcon,rightIcon=props.rightIcon,leftIconOnPress=props.leftIconOnPress,leftIconOnLongPress=props.leftIconOnLongPress,leftIconUnderlayColor=props.leftIconUnderlayColor,leftIconContainerStyle=props.leftIconContainerStyle,avatarStyle=props.avatarStyle,avatarContainerStyle=props.avatarContainerStyle,avatarOverlayContainerStyle=props.avatarOverlayContainerStyle,underlayColor=props.underlayColor,subtitle=props.subtitle,subtitleStyle=props.subtitleStyle,containerStyle=props.containerStyle,wrapperStyle=props.wrapperStyle,titleNumberOfLines=props.titleNumberOfLines,titleStyle=props.titleStyle,titleContainerStyle=props.titleContainerStyle,hideChevron=props.hideChevron,chevronColor=props.chevronColor,roundAvatar=props.roundAvatar,component=props.component,fontFamily=props.fontFamily,rightTitle=props.rightTitle,rightTitleContainerStyle=props.rightTitleContainerStyle,rightTitleStyle=props.rightTitleStyle,rightTitleNumberOfLines=props.rightTitleNumberOfLines,subtitleContainerStyle=props.subtitleContainerStyle,subtitleNumberOfLines=props.subtitleNumberOfLines,badge=props.badge,label=props.label,onLongPress=props.onLongPress,switchButton=props.switchButton,onSwitch=props.onSwitch,switchDisabled=props.switchDisabled,switchOnTintColor=props.switchOnTintColor,switchThumbTintColor=props.switchThumbTintColor,switchTintColor=props.switchTintColor,switched=props.switched,textInput=props.textInput,textInputAutoCapitalize=props.textInputAutoCapitalize,textInputAutoCorrect=props.textInputAutoCorrect,textInputAutoFocus=props.textInputAutoFocus,textInputEditable=props.textInputEditable,textInputKeyboardType=props.textInputKeyboardType,textInputMaxLength=props.textInputMaxLength,textInputMultiline=props.textInputMultiline,textInputOnChangeText=props.textInputOnChangeText,textInputOnFocus=props.textInputOnFocus,textInputOnBlur=props.textInputOnBlur,textInputSelectTextOnFocus=props.textInputSelectTextOnFocus,textInputReturnKeyType=props.textInputReturnKeyType,textInputValue=props.textInputValue,textInputSecure=props.textInputSecure,textInputStyle=props.textInputStyle,textInputContainerStyle=props.textInputContainerStyle,textInputPlaceholder=props.textInputPlaceholder,onPressRightIcon=props.onPressRightIcon,disabled=props.disabled,disabledStyle=props.disabledStyle,attributes=_objectWithoutProperties(props,['onPress','title','leftIcon','rightIcon','leftIconOnPress','leftIconOnLongPress','leftIconUnderlayColor','leftIconContainerStyle','avatarStyle','avatarContainerStyle','avatarOverlayContainerStyle','underlayColor','subtitle','subtitleStyle','containerStyle','wrapperStyle','titleNumberOfLines','titleStyle','titleContainerStyle','hideChevron','chevronColor','roundAvatar','component','fontFamily','rightTitle','rightTitleContainerStyle','rightTitleStyle','rightTitleNumberOfLines','subtitleContainerStyle','subtitleNumberOfLines','badge','label','onLongPress','switchButton','onSwitch','switchDisabled','switchOnTintColor','switchThumbTintColor','switchTintColor','switched','textInput','textInputAutoCapitalize','textInputAutoCorrect','textInputAutoFocus','textInputEditable','textInputKeyboardType','textInputMaxLength','textInputMultiline','textInputOnChangeText','textInputOnFocus','textInputOnBlur','textInputSelectTextOnFocus','textInputReturnKeyType','textInputValue','textInputSecure','textInputStyle','textInputContainerStyle','textInputPlaceholder','onPressRightIcon','disabled','disabledStyle']);
delete attributes.avatar;var

avatar=props.avatar;

var Component=_reactNative.View;
var highlightProps={};
if(onPress||onLongPress){
Component=_reactNative.TouchableHighlight;
highlightProps={onPress:onPress,onLongPress:onLongPress,underlayColor:underlayColor};
}

var LeftIconWrapper=_reactNative.View;
var leftIconHighlightProps={};
if(leftIconOnPress||leftIconOnLongPress){
LeftIconWrapper=_reactNative.TouchableHighlight;
leftIconHighlightProps={
onPress:leftIconOnPress,
onLongPress:leftIconOnLongPress,
underlayColor:leftIconUnderlayColor};

}

if(component){
Component=component;
if(Component!=_reactNative.TouchableHighlight)delete highlightProps.underlayColor;
}
if(typeof avatar==='string'){
avatar={uri:avatar};
}
return(
_react2.default.createElement(Component,_extends({},
attributes,
highlightProps,{
disabled:disabled,
style:[
styles.container,
containerStyle&&containerStyle,
disabled&&styles.disabled,
disabled&&disabledStyle&&disabledStyle],__source:{fileName:_jsxFileName,lineNumber:117}}),


_react2.default.createElement(_reactNative.View,{style:[styles.wrapper,wrapperStyle&&wrapperStyle],__source:{fileName:_jsxFileName,lineNumber:128}},
_react2.default.isValidElement(leftIcon)?
leftIcon:
leftIcon&&
leftIcon.name&&
_react2.default.createElement(LeftIconWrapper,_extends({},
leftIconHighlightProps,{
disabled:disabled,
style:[
styles.iconStyle,
leftIconContainerStyle&&leftIconContainerStyle],__source:{fileName:_jsxFileName,lineNumber:133}}),


_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:141}},
_react2.default.createElement(_Icon2.default,{
type:leftIcon.type,
iconStyle:[styles.icon,leftIcon.style&&leftIcon.style],
name:leftIcon.name,
color:leftIcon.color||_colors2.default.grey4,
size:leftIcon.size||24,__source:{fileName:_jsxFileName,lineNumber:142}}))),




avatar&&_react2.default.isValidElement(avatar)?
avatar:
avatar&&
!_react2.default.isValidElement(avatar)&&
_react2.default.createElement(_Avatar2.default,{
avatarStyle:avatarStyle&&avatarStyle,
containerStyle:avatarContainerStyle&&avatarContainerStyle,
overlayContainerStyle:
avatarOverlayContainerStyle&&avatarOverlayContainerStyle,

rounded:roundAvatar,
source:avatar,__source:{fileName:_jsxFileName,lineNumber:156}}),


_react2.default.createElement(_reactNative.View,{style:styles.titleSubtitleContainer,__source:{fileName:_jsxFileName,lineNumber:166}},
_react2.default.createElement(_reactNative.View,{style:titleContainerStyle,__source:{fileName:_jsxFileName,lineNumber:167}},
title!==null&&(
typeof title==='string'||typeof title==='number')?
_react2.default.createElement(_Text2.default,{
numberOfLines:titleNumberOfLines,
style:[
styles.title,
!leftIcon&&{marginLeft:10},
titleStyle&&titleStyle,
fontFamily&&{fontFamily:fontFamily}],__source:{fileName:_jsxFileName,lineNumber:170}},


title):


_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:182}},title)),


_react2.default.createElement(_reactNative.View,{style:subtitleContainerStyle,__source:{fileName:_jsxFileName,lineNumber:185}},
subtitle!==null&&(
typeof subtitle==='string'||typeof subtitle==='number')?
_react2.default.createElement(_Text2.default,{
numberOfLines:subtitleNumberOfLines,
style:[
styles.subtitle,
!leftIcon&&{marginLeft:10},
subtitleStyle&&subtitleStyle,
fontFamily&&{fontFamily:fontFamily}],__source:{fileName:_jsxFileName,lineNumber:188}},


subtitle):


_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:200}},subtitle))),



!!rightTitle&&
rightTitle!==''&&
!textInput&&
_react2.default.createElement(_reactNative.View,{
style:[styles.rightTitleContainer,rightTitleContainerStyle],__source:{fileName:_jsxFileName,lineNumber:207}},

_react2.default.createElement(_Text2.default,{
numberOfLines:rightTitleNumberOfLines,
style:[styles.rightTitleStyle,rightTitleStyle],__source:{fileName:_jsxFileName,lineNumber:210}},

rightTitle)),



textInput&&
_react2.default.createElement(_reactNative.View,{
style:[
styles.rightTitleContainer,
styles.textInputContainerStyle,
textInputContainerStyle],__source:{fileName:_jsxFileName,lineNumber:219}},


_react2.default.createElement(_reactNative.TextInput,{
style:[styles.textInputStyle,textInputStyle],
underlineColorAndroid:'transparent',
defaultValue:rightTitle,
value:textInputValue,
placeholder:textInputPlaceholder,
autoCapitalize:textInputAutoCapitalize,
autoCorrect:textInputAutoCorrect,
autoFocus:textInputAutoFocus,
editable:disabled?false:textInputEditable,
keyboardType:textInputKeyboardType,
maxLength:textInputMaxLength,
multiline:textInputMultiline,
onChangeText:textInputOnChangeText,
onFocus:textInputOnFocus,
onBlur:textInputOnBlur,
secureTextEntry:textInputSecure,
selectTextOnFocus:textInputSelectTextOnFocus,
returnKeyType:textInputReturnKeyType,__source:{fileName:_jsxFileName,lineNumber:226}})),



badge&&!rightTitle&&_react2.default.createElement(_badge2.default,_extends({},badge,{__source:{fileName:_jsxFileName,lineNumber:248}})),
!hideChevron&&(
_react2.default.isValidElement(rightIcon)?
rightIcon:

_react2.default.createElement(_reactNative.TouchableOpacity,{
onPress:onPressRightIcon,
disabled:disabled?disabled:!onPressRightIcon,
style:styles.chevronContainer,__source:{fileName:_jsxFileName,lineNumber:253}},

_react2.default.createElement(_Icon2.default,{
type:rightIcon.type,
iconStyle:rightIcon.style,
size:rightIcon.size||28,
name:rightIcon.name||'chevron-right',
color:rightIcon.color||chevronColor,__source:{fileName:_jsxFileName,lineNumber:258}}))),



switchButton&&
hideChevron&&
_react2.default.createElement(_reactNative.View,{style:styles.switchContainer,__source:{fileName:_jsxFileName,lineNumber:269}},
_react2.default.createElement(_reactNative.Switch,{
onValueChange:onSwitch,
disabled:disabled?disabled:switchDisabled,
onTintColor:switchOnTintColor,
thumbTintColor:switchThumbTintColor,
tintColor:switchTintColor,
value:switched,__source:{fileName:_jsxFileName,lineNumber:270}})),



label&&label)));



};

ListItem.defaultProps={
underlayColor:'white',
leftIconUnderlayColor:'white',
chevronColor:_colors2.default.grey4,
rightIcon:{name:'chevron-right'},
hideChevron:false,
roundAvatar:false,
switchButton:false,
textInputEditable:true,
titleNumberOfLines:1,
subtitleNumberOfLines:1,
rightTitleNumberOfLines:1,
disabled:false};


ListItem.propTypes={
title:_propTypes2.default.oneOfType([
_propTypes2.default.string,
_propTypes2.default.number,
_propTypes2.default.object]),

avatar:_propTypes2.default.any,
icon:_propTypes2.default.any,
onPress:_propTypes2.default.func,
rightIcon:_propTypes2.default.oneOfType([_propTypes2.default.element,_propTypes2.default.object]),
underlayColor:_propTypes2.default.string,
subtitle:_propTypes2.default.oneOfType([
_propTypes2.default.string,
_propTypes2.default.number,
_propTypes2.default.object]),

subtitleStyle:_propTypes2.default.any,
subtitleNumberOfLines:_propTypes2.default.number,
containerStyle:_propTypes2.default.any,
wrapperStyle:_propTypes2.default.any,
titleStyle:_propTypes2.default.any,
titleContainerStyle:_propTypes2.default.any,
titleNumberOfLines:_propTypes2.default.number,
hideChevron:_propTypes2.default.bool,
chevronColor:_propTypes2.default.string,
roundAvatar:_propTypes2.default.bool,
badge:_propTypes2.default.any,
switchButton:_propTypes2.default.bool,
onSwitch:_propTypes2.default.func,
switchDisabled:_propTypes2.default.bool,
switchOnTintColor:_propTypes2.default.string,
switchThumbTintColor:_propTypes2.default.string,
switchTintColor:_propTypes2.default.string,
switched:_propTypes2.default.bool,
textInput:_propTypes2.default.bool,
textInputAutoCapitalize:_propTypes2.default.oneOf([
'none',
'sentences',
'words',
'characters']),

textInputAutoCorrect:_propTypes2.default.bool,
textInputAutoFocus:_propTypes2.default.bool,
textInputEditable:_propTypes2.default.bool,
textInputKeyboardType:_propTypes2.default.oneOf([
'default',
'email-address',
'numeric',
'phone-pad',
'ascii-capable',
'numbers-and-punctuation',
'url',
'number-pad',
'name-phone-pad',
'decimal-pad',
'twitter',
'web-search']),

textInputMaxLength:_propTypes2.default.number,
textInputMultiline:_propTypes2.default.bool,
textInputOnChangeText:_propTypes2.default.func,
textInputOnFocus:_propTypes2.default.func,
textInputOnBlur:_propTypes2.default.func,
textInputSelectTextOnFocus:_propTypes2.default.bool,
textInputReturnKeyType:_propTypes2.default.string,
textInputValue:_propTypes2.default.string,
textInputSecure:_propTypes2.default.bool,
textInputStyle:_propTypes2.default.any,
textInputContainerStyle:_propTypes2.default.any,
textInputPlaceholder:_propTypes2.default.string,
component:_propTypes2.default.any,
fontFamily:_propTypes2.default.string,
rightTitle:_propTypes2.default.string,
rightTitleContainerStyle:_ViewPropTypes2.default.style,
rightTitleStyle:_Text2.default.propTypes.style,
rightTitleNumberOfLines:_propTypes2.default.number,
subtitleContainerStyle:_ViewPropTypes2.default.style,
label:_propTypes2.default.any,
onLongPress:_propTypes2.default.func,
leftIcon:_propTypes2.default.oneOfType([_propTypes2.default.element,_propTypes2.default.object]),
leftIconOnPress:_propTypes2.default.func,
leftIconOnLongPress:_propTypes2.default.func,
leftIconUnderlayColor:_propTypes2.default.string,
leftIconContainerStyle:_ViewPropTypes2.default.style,
avatarStyle:_reactNative.Image.propTypes.style,
avatarContainerStyle:_ViewPropTypes2.default.style,
avatarOverlayContainerStyle:_ViewPropTypes2.default.style,
onPressRightIcon:_propTypes2.default.func,
disabled:_propTypes2.default.bool,
disabledStyle:_ViewPropTypes2.default.style};


var styles=_reactNative.StyleSheet.create({
container:{
paddingTop:10,
paddingRight:10,
paddingBottom:10,
borderBottomColor:_colors2.default.greyOutline,
borderBottomWidth:1,
backgroundColor:'transparent'},

wrapper:{
flexDirection:'row',
marginLeft:10,
alignItems:'center'},

iconStyle:{
justifyContent:'center',
alignItems:'center'},

icon:{
marginRight:8},

title:_extends({
color:_colors2.default.grey1},
_reactNative.Platform.select({
ios:{
fontSize:(0,_normalizeText2.default)(14)},

android:{
fontSize:(0,_normalizeText2.default)(14)},

web:{
fontSize:(0,_normalizeText2.default)(16)}})),



subtitle:_extends({
color:_colors2.default.grey3,
marginTop:1},
_reactNative.Platform.select({
ios:{
fontSize:(0,_normalizeText2.default)(12),
fontWeight:'600'},

android:_extends({
fontSize:(0,_normalizeText2.default)(12)},
_fonts2.default.android.bold),

web:{
fontSize:(0,_normalizeText2.default)(14),
fontWeight:'600'}})),



titleSubtitleContainer:{
justifyContent:'center',
flex:1},

chevronContainer:{
alignItems:'flex-end',
justifyContent:'center'},

switchContainer:{
alignItems:'flex-end',
justifyContent:'center',
marginRight:5},

rightTitleContainer:{
flex:1,
alignItems:'flex-end',
justifyContent:'center'},

rightTitleStyle:{
marginRight:5,
color:_colors2.default.grey4},

textInputContainerStyle:{
alignItems:null},

textInputStyle:{
height:20,
flex:1,
textAlign:'right'},

disabled:{
opacity:0.5}});exports.default=



ListItem;
//# sourceMappingURL=ListItem.js.map