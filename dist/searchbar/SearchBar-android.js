Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\searchbar\\SearchBar-android.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _MaterialCommunityIcons=require('react-native-vector-icons/MaterialCommunityIcons');var _MaterialCommunityIcons2=_interopRequireDefault(_MaterialCommunityIcons);

var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);
var _Input=require('../input/Input');var _Input2=_interopRequireDefault(_Input);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SCREEN_WIDTH=_reactNative.Dimensions.get('window').width;
var ANDROID_GRAY='rgba(0, 0, 0, 0.54)';var

SearchBar=function(_Component){_inherits(SearchBar,_Component);


































function SearchBar(props){_classCallCheck(this,SearchBar);var _this=_possibleConstructorReturn(this,(SearchBar.__proto__||Object.getPrototypeOf(SearchBar)).call(this,
props));_this.focus=function(){_this.input.focus();};_this.blur=function(){_this.input.blur();};_this.clear=function(){_this.input.clear();_this.onChangeText('');_this.props.onClearText();};_this.cancel=function(){_this.blur();_this.props.onCancel();};_this.onFocus=function(){_this.props.onFocus();_this.setState({hasFocus:true});};_this.onBlur=function(){_this.props.onBlur();_this.setState({hasFocus:false});};_this.onChangeText=function(text){_this.props.onChangeText(text);_this.setState({isEmpty:text===''});};
_this.state={
hasFocus:false,
isEmpty:true};return _this;

}_createClass(SearchBar,[{key:'render',value:function render()

{var _this2=this;var _props=











this.props,clearIcon=_props.clearIcon,containerStyle=_props.containerStyle,leftIcon=_props.leftIcon,leftIconContainerStyle=_props.leftIconContainerStyle,rightIconContainerStyle=_props.rightIconContainerStyle,inputStyle=_props.inputStyle,noIcon=_props.noIcon,showLoading=_props.showLoading,loadingProps=_props.loadingProps,attributes=_objectWithoutProperties(_props,['clearIcon','containerStyle','leftIcon','leftIconContainerStyle','rightIconContainerStyle','inputStyle','noIcon','showLoading','loadingProps']);var _state=
this.state,hasFocus=_state.hasFocus,isEmpty=_state.isEmpty;var
loadingStyle=loadingProps.style,otherLoadingProps=_objectWithoutProperties(loadingProps,['style']);
var searchIcon=
_react2.default.createElement(_MaterialCommunityIcons2.default,{
size:25,
color:ANDROID_GRAY,
name:hasFocus?'arrow-left':'magnify',
onPress:hasFocus?this.cancel:null,__source:{fileName:_jsxFileName,lineNumber:77}});


return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:85}},
_react2.default.createElement(_Input2.default,_extends({},
attributes,{
onFocus:this.onFocus,
onBlur:this.onBlur,
onChangeText:this.onChangeText,
ref:function ref(input){return _this2.input=input;},
inputStyle:[styles.input,inputStyle],
containerStyle:[styles.inputContainer,containerStyle],
leftIcon:noIcon?undefined:leftIcon?leftIcon:searchIcon,
leftIconContainerStyle:[
styles.leftIconContainerStyle,
leftIconContainerStyle],

rightIcon:
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:100}},
showLoading&&
_react2.default.createElement(_reactNative.ActivityIndicator,_extends({
style:[
clearIcon&&!isEmpty&&{marginRight:10},
loadingStyle]},

otherLoadingProps,{__source:{fileName:_jsxFileName,lineNumber:102}})),


clearIcon&&
!isEmpty&&
_react2.default.createElement(_MaterialCommunityIcons2.default,{
name:'close',
size:25,
color:ANDROID_GRAY,
onPress:function onPress(){return _this2.clear();},__source:{fileName:_jsxFileName,lineNumber:112}})),




rightIconContainerStyle:[
styles.rightIconContainerStyle,
rightIconContainerStyle],__source:{fileName:_jsxFileName,lineNumber:86}}))));




}}]);return SearchBar;}(_react.Component);


SearchBar.propTypes={
clearIcon:_propTypes2.default.bool,
loadingProps:_propTypes2.default.object,
noIcon:_propTypes2.default.bool,
showLoading:_propTypes2.default.bool,
containerStyle:_ViewPropTypes2.default.style,
leftIcon:_propTypes2.default.object,
leftIconContainerStyle:_ViewPropTypes2.default.style,
rightIconContainerStyle:_ViewPropTypes2.default.style,
inputStyle:_reactNative.Text.propTypes.style,
onClearText:_propTypes2.default.func,
onCancel:_propTypes2.default.func,
onFocus:_propTypes2.default.func,
onBlur:_propTypes2.default.func,
onChangeText:_propTypes2.default.func};


SearchBar.defaultProps={
clearIcon:true,
loadingProps:{},
noIcon:false,
showLoading:false,
onClearText:function onClearText(){return null;},
onCancel:function onCancel(){return null;},
onFocus:function onFocus(){return null;},
onBlur:function onBlur(){return null;},
onChangeText:function onChangeText(){return null;}};


var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'white',
width:SCREEN_WIDTH,
paddingTop:8,
paddingBottom:8},

input:{
flex:1,
marginLeft:24,
marginRight:8},

inputContainer:{
borderBottomWidth:0,
width:SCREEN_WIDTH},

rightIconContainerStyle:{
marginRight:8},

leftIconContainerStyle:{
marginLeft:8}});exports.default=



SearchBar;
//# sourceMappingURL=SearchBar-android.js.map