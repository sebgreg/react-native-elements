Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\input\\Input.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');









var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SCREEN_WIDTH=_reactNative.Dimensions.get('window').width;var

Input=function(_Component){_inherits(Input,_Component);function Input(){_classCallCheck(this,Input);return _possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));}_createClass(Input,[{key:'componentWillMount',value:function componentWillMount()
{
this.shake=this.shake.bind(this);
this.shakeAnimationValue=new _reactNative.Animated.Value(0);
this.props.shake&&this.shake();
}},{key:'focus',value:function focus()

{
this.input.focus();
}},{key:'blur',value:function blur()

{
this.input.blur();
}},{key:'clear',value:function clear()

{
this.input.clear();
}},{key:'shake',value:function shake()

{var
shakeAnimationValue=this.shakeAnimationValue;

shakeAnimationValue.setValue(0);


_reactNative.Animated.timing(shakeAnimationValue,{
duration:375,
toValue:3,
ease:_reactNative.Easing.bounce}).
start();
}},{key:'render',value:function render()

{var _this2=this;var _props=











this.props,containerStyle=_props.containerStyle,leftIcon=_props.leftIcon,leftIconContainerStyle=_props.leftIconContainerStyle,rightIcon=_props.rightIcon,rightIconContainerStyle=_props.rightIconContainerStyle,inputStyle=_props.inputStyle,displayError=_props.displayError,errorStyle=_props.errorStyle,errorMessage=_props.errorMessage,attributes=_objectWithoutProperties(_props,['containerStyle','leftIcon','leftIconContainerStyle','rightIcon','rightIconContainerStyle','inputStyle','displayError','errorStyle','errorMessage']);
var translateX=this.shakeAnimationValue.interpolate({
inputRange:[0,0.5,1,1.5,2,2.5,3],
outputRange:[0,-15,0,15,0,-15,0]});


return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:69}},
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.container,
{width:SCREEN_WIDTH-100,height:40},
containerStyle,
{transform:[{translateX:translateX}]}],__source:{fileName:_jsxFileName,lineNumber:70}},


leftIcon&&
_react2.default.createElement(_reactNative.View,{
style:[
styles.iconContainer,
{marginLeft:15},
leftIconContainerStyle],__source:{fileName:_jsxFileName,lineNumber:79}},


leftIcon),


_react2.default.createElement(_reactNative.TextInput,_extends({
ref:function ref(input){return _this2.input=input;},
underlineColorAndroid:'transparent',
style:[
styles.input,
{width:SCREEN_WIDTH-100,height:40},
inputStyle]},

attributes,{__source:{fileName:_jsxFileName,lineNumber:89}})),

rightIcon&&
_react2.default.createElement(_reactNative.View,{style:[styles.iconContainer,rightIconContainerStyle],__source:{fileName:_jsxFileName,lineNumber:100}},
rightIcon)),



displayError&&
_react2.default.createElement(_reactNative.Text,{style:[styles.error,errorStyle&&errorStyle],__source:{fileName:_jsxFileName,lineNumber:106}},
errorMessage||'Error!')));




}}]);return Input;}(_react.Component);


Input.propTypes={
containerStyle:_ViewPropTypes2.default.style,

leftIcon:_propTypes2.default.object,
leftIconContainerStyle:_ViewPropTypes2.default.style,

rightIcon:_propTypes2.default.object,
rightIconContainerStyle:_ViewPropTypes2.default.style,

inputStyle:_reactNative.Text.propTypes.style,

shake:_propTypes2.default.any,
displayError:_propTypes2.default.bool,
errorStyle:_reactNative.Text.propTypes.style,
errorMessage:_propTypes2.default.string};


var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'row',
borderBottomWidth:1,
borderColor:'rgba(171, 189, 219, 1)',
alignItems:'center'},

iconContainer:{
height:40,
justifyContent:'center',
alignItems:'center'},

input:{
alignSelf:'center',
color:'black',
fontSize:18,
marginLeft:10},

error:{
color:'#FF2D00',
margin:5,
fontSize:12}});exports.default=



Input;
//# sourceMappingURL=Input.js.map