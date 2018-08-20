Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\searchbar\\SearchBar-default.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=_interopRequireDefault(_MaterialIcons);
var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _normalizeText=require('../helpers/normalizeText');var _normalizeText2=_interopRequireDefault(_normalizeText);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);
var _getIconType=require('../helpers/getIconType');var _getIconType2=_interopRequireDefault(_getIconType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Search=function(_Component){_inherits(Search,_Component);function Search(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Search);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Search.__proto__||Object.getPrototypeOf(Search)).call.apply(_ref,[this].concat(args))),_this),_this.
getRef=function(){
return _this.input||_this.refs[_this.props.textInputRef];
},_this.

getRefHandler=function(){
if(_this.props.textInputRef){
if(typeof _this.props.textInputRef==='function'){
return function(input){
_this.input=input;
_this.props.textInputRef(input);
};
}else{
return _this.props.textInputRef;
}
}else{
return function(input){return _this.input=input;};
}
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Search,[{key:'focus',value:function focus()

{
this.getRef()&&this.getRef().focus();
}},{key:'blur',value:function blur()

{
this.getRef()&&this.getRef().blur();
}},{key:'clearText',value:function clearText()

{
this.getRef()&&this.getRef().clear();
this.props.onChangeText&&this.props.onChangeText('');
this.props.onClearText&&this.props.onClearText();
}},{key:'render',value:function render()

{var _props=














this.props,containerStyle=_props.containerStyle,inputStyle=_props.inputStyle,icon=_props.icon,noIcon=_props.noIcon,lightTheme=_props.lightTheme,round=_props.round,showLoading=_props.showLoading,loadingProps=_props.loadingProps,clearIcon=_props.clearIcon,containerRef=_props.containerRef,underlineColorAndroid=_props.underlineColorAndroid,onClearText=_props.onClearText,attributes=_objectWithoutProperties(_props,['containerStyle','inputStyle','icon','noIcon','lightTheme','round','showLoading','loadingProps','clearIcon','containerRef','underlineColorAndroid','onClearText']);var

loadingStyle=loadingProps.style,otherLoadingProps=_objectWithoutProperties(loadingProps,['style']);

var Icon=_MaterialIcons2.default;
if(icon.type){
Icon=(0,_getIconType2.default)(icon.type);
}

return(
_react2.default.createElement(_reactNative.View,{
ref:containerRef,
style:[
styles.container,
lightTheme&&styles.containerLight,
containerStyle&&containerStyle],__source:{fileName:_jsxFileName,lineNumber:76}},


_react2.default.createElement(_reactNative.TextInput,_extends({},
attributes,{
ref:this.getRefHandler(),
underlineColorAndroid:
underlineColorAndroid?underlineColorAndroid:'transparent',

style:[
styles.input,
lightTheme&&styles.inputLight,
noIcon&&{paddingLeft:9},
round&&{borderRadius:_reactNative.Platform.OS==='ios'?15:20},
inputStyle&&inputStyle,
clearIcon&&showLoading&&{paddingRight:50},
(clearIcon&&!showLoading||!clearIcon&&showLoading)&&{
paddingRight:30}],__source:{fileName:_jsxFileName,lineNumber:84}})),



!noIcon&&
_react2.default.createElement(Icon,{
size:16,
style:[styles.icon,styles.searchIcon,icon.style&&icon.style],
name:icon.name||'search',
color:icon.color||_colors2.default.grey3,__source:{fileName:_jsxFileName,lineNumber:103}}),


clearIcon&&
_react2.default.createElement(Icon,{
size:16,
style:[
styles.icon,
styles.clearIcon,
clearIcon.style&&clearIcon.style],

name:clearIcon.name||'close',
onPress:this.clearText.bind(this),
color:clearIcon.color||_colors2.default.grey3,__source:{fileName:_jsxFileName,lineNumber:111}}),


showLoading&&
_react2.default.createElement(_reactNative.ActivityIndicator,_extends({
style:[
styles.loadingIcon,
loadingStyle&&loadingStyle,
clearIcon&&{right:35}],

color:icon.color||_colors2.default.grey3},
otherLoadingProps,{__source:{fileName:_jsxFileName,lineNumber:124}}))));




}}]);return Search;}(_react.Component);


Search.propTypes={
icon:_propTypes2.default.object,
noIcon:_propTypes2.default.bool,
lightTheme:_propTypes2.default.bool,
containerStyle:_ViewPropTypes2.default.style,
inputStyle:_reactNative.Text.propTypes.style,
round:_propTypes2.default.bool,
showLoading:_propTypes2.default.bool,
loadingProps:_propTypes2.default.object,
clearIcon:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.bool]),

textInputRef:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.func]),

containerRef:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.func]),
underlineColorAndroid:_propTypes2.default.string,
onChangeText:_propTypes2.default.func,
onClearText:_propTypes2.default.func};


Search.defaultProps={
placeholderTextColor:_colors2.default.grey3,
lightTheme:false,
noIcon:false,
round:false,
icon:{},
showLoading:false,
loadingProps:{}};


var styles=_reactNative.StyleSheet.create({
container:{
borderTopWidth:1,
borderBottomWidth:1,
borderBottomColor:'#000',
borderTopColor:'#000',
backgroundColor:_colors2.default.grey0},

containerLight:{
backgroundColor:_colors2.default.grey5,
borderTopColor:'#e1e1e1',
borderBottomColor:'#e1e1e1'},

icon:_extends({
backgroundColor:'transparent',
position:'absolute',
top:15.5},
_reactNative.Platform.select({
android:{
top:20},

web:{
top:19}})),



loadingIcon:_extends({
backgroundColor:'transparent',
position:'absolute',
right:16,
top:13},
_reactNative.Platform.select({
android:{
top:18},

web:{
top:18}})),



input:_extends({
paddingLeft:26,
paddingRight:19,
margin:8,
borderRadius:3,
overflow:'hidden',
backgroundColor:_colors2.default.searchBg,
fontSize:(0,_normalizeText2.default)(14),
color:_colors2.default.grey3,
height:40},
_reactNative.Platform.select({
ios:{
height:30},

android:{
borderWidth:0}})),



inputLight:{
backgroundColor:_colors2.default.grey4},

searchIcon:{
left:16},

clearIcon:{
right:16}});exports.default=



Search;
//# sourceMappingURL=SearchBar-default.js.map