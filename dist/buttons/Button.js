Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');








var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);

var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);
var _elevation=require('../config/elevation');var _elevation2=_interopRequireDefault(_elevation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var log=function log(){

console.log('Please attach a method to this component');
};var
Button=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'componentDidMount',value:function componentDidMount()
{
if(
this.props.linearGradientProps!=null&&
this.props.ViewComponent==null)
{

console.error('You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require(\'expo\').LinearGradient}');


}
}},{key:'render',value:function render()

{var _props=


















this.props,ViewComponent=_props.ViewComponent,TouchableComponent=_props.TouchableComponent,containerStyle=_props.containerStyle,onPress=_props.onPress,buttonStyle=_props.buttonStyle,clear=_props.clear,loading=_props.loading,loadingStyle=_props.loadingStyle,loadingProps=_props.loadingProps,text=_props.text,textStyle=_props.textStyle,textProps=_props.textProps,icon=_props.icon,iconContainerStyle=_props.iconContainerStyle,iconRight=_props.iconRight,linearGradientProps=_props.linearGradientProps,attributes=_objectWithoutProperties(_props,['ViewComponent','TouchableComponent','containerStyle','onPress','buttonStyle','clear','loading','loadingStyle','loadingProps','text','textStyle','textProps','icon','iconContainerStyle','iconRight','linearGradientProps']);

return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,containerStyle]},
_react2.default.createElement(TouchableComponent,_extends({
onPress:onPress,
activeOpacity:clear?0:undefined,
style:{
borderRadius:buttonStyle.borderRadius}},

attributes),

_react2.default.createElement(ViewComponent,_extends({},
linearGradientProps,{
style:[
styles.button,
clear&&_extends({
backgroundColor:'transparent'},
_reactNative.Platform.select({
android:_elevation2.default.android.zero,
web:_elevation2.default.web.zero})),


buttonStyle,
linearGradientProps&&{backgroundColor:'transparent'}]}),


loading&&
_react2.default.createElement(_reactNative.ActivityIndicator,_extends({
animating:true,
style:[styles.loading,loadingStyle],
color:loadingProps.color,
size:loadingProps.size},
loadingProps)),


!loading&&
icon&&
!iconRight&&
_react2.default.createElement(_reactNative.View,{style:[styles.iconContainer,iconContainerStyle]},
icon),


!loading&&
_react2.default.createElement(_reactNative.Text,_extends({style:[styles.text,textStyle]},textProps),
text),


!loading&&
icon&&
iconRight&&
_react2.default.createElement(_reactNative.View,{style:[styles.iconContainer,iconContainerStyle]},
icon)))));






}}]);return Button;}(_react.Component);


Button.propTypes={
text:_propTypes2.default.string,
textStyle:_reactNative.Text.propTypes.style,
textProps:_propTypes2.default.object,
buttonStyle:_ViewPropTypes2.default.style,
clear:_propTypes2.default.bool,
loading:_propTypes2.default.bool,
loadingStyle:_ViewPropTypes2.default.style,
loadingProps:_propTypes2.default.object,
onPress:_propTypes2.default.any,
containerStyle:_ViewPropTypes2.default.style,
icon:_propTypes2.default.object,
iconContainerStyle:_ViewPropTypes2.default.style,
iconRight:_propTypes2.default.bool,
linearGradientProps:_propTypes2.default.object,
TouchableComponent:_propTypes2.default.any,
ViewComponent:_propTypes2.default.any};


Button.defaultProps={
iconRight:false,
TouchableComponent:
_reactNative.Platform.OS==='android'?_reactNative.TouchableNativeFeedback:_reactNative.TouchableOpacity,
ViewComponent:_reactNative.View,
onPress:log,
clear:false,
loadingProps:{
color:'white',
size:'small'},

buttonStyle:{
borderRadius:3}};



var styles=_reactNative.StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
borderRadius:30},

button:_extends({
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
borderRadius:3,
backgroundColor:_colors2.default.primary},
_reactNative.Platform.select({
android:_extends({},
_elevation2.default.android.four,{
borderRadius:2}),

web:_extends({},
_elevation2.default.web.two)})),



loading:{
padding:8},

text:_extends({
color:'white',
fontSize:16,
textAlign:'center',
padding:8},
_reactNative.Platform.select({
ios:{
fontSize:18},

android:{
fontWeight:'500'}})),



iconContainer:{
marginHorizontal:5}});exports.default=



Button;
//# sourceMappingURL=Button.js.map