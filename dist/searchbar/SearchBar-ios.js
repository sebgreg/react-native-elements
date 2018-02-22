Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');









var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);

var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);
var _Input=require('../input/Input');var _Input2=_interopRequireDefault(_Input);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SCREEN_WIDTH=_reactNative.Dimensions.get('window').width;
var IOS_GRAY='#7d7d7d';var

SearchBar=function(_Component){_inherits(SearchBar,_Component);




































function SearchBar(props){_classCallCheck(this,SearchBar);var _this=_possibleConstructorReturn(this,(SearchBar.__proto__||Object.getPrototypeOf(SearchBar)).call(this,
props));_this.focus=function(){_this.input.focus();};_this.blur=function(){_this.input.blur();};_this.clear=function(){_this.input.clear();_this.onChangeText('');_this.props.onClearText&&_this.props.onClearText();};_this.cancel=function(){_this.blur();_this.props.onCancel&&_this.props.onCancel();};_this.onFocus=function(){_this.props.onFocus&&_this.props.onFocus();_reactNative.UIManager.configureNextLayoutAnimation&&_reactNative.LayoutAnimation.easeInEaseOut();_this.setState({hasFocus:true});};_this.onBlur=function(){_this.props.onBlur&&_this.props.onBlur();_reactNative.UIManager.configureNextLayoutAnimation&&_reactNative.LayoutAnimation.easeInEaseOut();_this.setState({hasFocus:false});};_this.onChangeText=function(text){_this.props.onChangeText&&_this.props.onChangeText(text);_this.setState({isEmpty:text===''});};
_this.state={
hasFocus:false,
isEmpty:true};return _this;

}_createClass(SearchBar,[{key:'render',value:function render()

{var _this2=this;var _props=













this.props,cancelButtonTitle=_props.cancelButtonTitle,clearIcon=_props.clearIcon,containerStyle=_props.containerStyle,leftIcon=_props.leftIcon,leftIconContainerStyle=_props.leftIconContainerStyle,rightIconContainerStyle=_props.rightIconContainerStyle,inputStyle=_props.inputStyle,noIcon=_props.noIcon,placeholderTextColor=_props.placeholderTextColor,showLoading=_props.showLoading,loadingProps=_props.loadingProps,attributes=_objectWithoutProperties(_props,['cancelButtonTitle','clearIcon','containerStyle','leftIcon','leftIconContainerStyle','rightIconContainerStyle','inputStyle','noIcon','placeholderTextColor','showLoading','loadingProps']);var _state=
this.state,hasFocus=_state.hasFocus,isEmpty=_state.isEmpty;var
loadingStyle=loadingProps.style,otherLoadingProps=_objectWithoutProperties(loadingProps,['style']);
var searchIcon=
_react2.default.createElement(_Ionicons2.default,{size:20,name:'ios-search',color:IOS_GRAY});

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_Input2.default,_extends({},
attributes,{
onFocus:this.onFocus,
onBlur:this.onBlur,
onChangeText:this.onChangeText,
ref:function ref(input){return _this2.input=input;},
inputStyle:[styles.input,inputStyle],
containerStyle:[
styles.inputContainer,
!hasFocus&&{width:SCREEN_WIDTH-32,marginRight:15},
containerStyle],

leftIcon:noIcon?undefined:leftIcon?leftIcon:searchIcon,
leftIconContainerStyle:[
styles.leftIconContainerStyle,
leftIconContainerStyle],

placeholderTextColor:placeholderTextColor,
rightIcon:
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row'}},
showLoading&&
_react2.default.createElement(_reactNative.ActivityIndicator,_extends({
style:[
clearIcon&&!isEmpty&&{marginRight:10},
loadingStyle]},

otherLoadingProps)),


clearIcon&&
!isEmpty&&
_react2.default.createElement(_Ionicons2.default,{
name:'ios-close-circle',
size:20,
color:IOS_GRAY,
onPress:function onPress(){return _this2.clear();}})),




rightIconContainerStyle:[
styles.rightIconContainerStyle,
rightIconContainerStyle]})),


_react2.default.createElement(_reactNative.Button,{title:cancelButtonTitle,onPress:this.cancel})));


}}]);return SearchBar;}(_react.Component);


SearchBar.propTypes={
cancelButtonTitle:_propTypes2.default.string,
clearIcon:_propTypes2.default.bool,
loadingProps:_propTypes2.default.object,
noIcon:_propTypes2.default.bool,
showLoading:_propTypes2.default.bool,
onClearText:_propTypes2.default.func,
onCancel:_propTypes2.default.func,
containerStyle:_ViewPropTypes2.default.style,
leftIcon:_propTypes2.default.object,
leftIconContainerStyle:_ViewPropTypes2.default.style,
rightIconContainerStyle:_ViewPropTypes2.default.style,
inputStyle:_reactNative.Text.propTypes.style,
placeholderTextColor:_propTypes2.default.string};


SearchBar.defaultProps={
cancelButtonTitle:'Cancel',
clearIcon:true,
loadingProps:{},
noIcon:false,
showLoading:false,
onClearText:null,
onCancel:null,
placeholderTextColor:IOS_GRAY};


var styles=_reactNative.StyleSheet.create({
container:{
width:SCREEN_WIDTH,
backgroundColor:'#f5f5f5',
paddingBottom:13,
paddingTop:13,
flexDirection:'row'},

input:{
flex:1,
marginLeft:6},

inputContainer:{
borderBottomWidth:0,
backgroundColor:'#dcdce1',
borderRadius:9,
height:36,
marginLeft:15},

rightIconContainerStyle:{
marginRight:8},

leftIconContainerStyle:{
marginLeft:8}});exports.default=



SearchBar;
//# sourceMappingURL=SearchBar-ios.js.map