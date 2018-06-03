Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}




var TRACK_SIZE=4;
var THUMB_SIZE=20;

var DEFAULT_ANIMATION_CONFIGS={
spring:{
friction:7,
tension:100},

timing:{
duration:150,
easing:_reactNative.Easing.inOut(_reactNative.Easing.ease),
delay:0}};var



Rect=
function Rect(x,y,width,height){_classCallCheck(this,Rect);_initialiseProps.call(this);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
};var _initialiseProps=function _initialiseProps(){this.

containsPoint=function(x,y){
return(
x>=this.x&&
y>=this.y&&
x<=this.x+this.width&&
y<=this.y+this.height);

};};var


Slider=function(_Component){_inherits(Slider,_Component);
function Slider(props){_classCallCheck(this,Slider);var _this=_possibleConstructorReturn(this,(Slider.__proto__||Object.getPrototypeOf(Slider)).call(this,
props));
console.warn('rne');
_this.state={
containerSize:{width:0,height:0},
trackSize:{width:0,height:0},
thumbSize:{width:0,height:0},
value:new _reactNative.Animated.Value(props.value),
length:0};return _this;

}_createClass(Slider,[{key:'componentWillMount',value:function componentWillMount()

{
this.panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:this.handleStartShouldSetPanResponder.bind(
this),

onMoveShouldSetPanResponder:this.handleMoveShouldSetPanResponder.bind(
this),

onPanResponderGrant:this.handlePanResponderGrant.bind(this),
onPanResponderMove:this.handlePanResponderMove.bind(this),
onPanResponderRelease:this.handlePanResponderEnd.bind(this),
onPanResponderTerminationRequest:this.handlePanResponderRequestEnd.bind(
this),

onPanResponderTerminate:this.handlePanResponderEnd.bind(this)});

}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
var newValue=nextProps.value;

if(this.props.value!==newValue){
if(this.props.animateTransitions){
this.setCurrentValueAnimated(newValue);
}else{
this.setCurrentValue(newValue);
}
}
}},{key:'setCurrentValue',value:function setCurrentValue(































value){
this.state.value.setValue(value);
}},{key:'setCurrentValueAnimated',value:function setCurrentValueAnimated(

value){
var animationType=this.props.animationType;
var animationConfig=_extends(
{},
DEFAULT_ANIMATION_CONFIGS[animationType],
this.props.animationConfig,
{
toValue:value});



_reactNative.Animated[animationType](this.state.value,animationConfig).start();
}},{key:'handleMoveShouldSetPanResponder',value:function handleMoveShouldSetPanResponder()

{

return false;
}},{key:'handlePanResponderGrant',value:function handlePanResponderGrant()

{
this._previousPos=this.getThumbPos(this.getCurrentValue());
this.fireChangeEvent('onSlidingStart');
}},{key:'handlePanResponderMove',value:function handlePanResponderMove(

e,gestureState){
if(this.props.disabled){
return;
}

this.setCurrentValue(this.getValue(gestureState));
this.fireChangeEvent('onValueChange');
}},{key:'handlePanResponderRequestEnd',value:function handlePanResponderRequestEnd()

{

return false;
}},{key:'handlePanResponderEnd',value:function handlePanResponderEnd(

e,gestureState){
if(this.props.disabled){
return;
}

this.setCurrentValue(this.getValue(gestureState));
this.fireChangeEvent('onSlidingComplete');
}},{key:'thumbHitTest',value:function thumbHitTest(

e){
var nativeEvent=e.nativeEvent;
var thumbTouchRect=this.getThumbTouchRect();
return thumbTouchRect.containsPoint(
nativeEvent.locationX,
nativeEvent.locationY);

}},{key:'handleStartShouldSetPanResponder',value:function handleStartShouldSetPanResponder(

e){

return this.thumbHitTest(e);
}},{key:'fireChangeEvent',value:function fireChangeEvent(

event){
if(this.props[event]){
this.props[event](this.getCurrentValue());
}
}},{key:'getTouchOverflowSize',value:function getTouchOverflowSize()

{
var size={};
size.width=Math.max(
0,
this.props.thumbTouchSize.width-this.state.thumbSize.width);

size.height=Math.max(
0,
this.props.thumbTouchSize.height-this.state.containerSize.height);

return size;
}},{key:'getTouchOverflowStyle',value:function getTouchOverflowStyle()

{var _getTouchOverflowSize=
this.getTouchOverflowSize(),width=_getTouchOverflowSize.width,height=_getTouchOverflowSize.height;

var touchOverflowStyle={};
if(width!==undefined&&height!==undefined){
var verticalMargin=-height/2;
touchOverflowStyle.marginTop=verticalMargin;
touchOverflowStyle.marginBottom=verticalMargin;

var horizontalMargin=-width/2;
touchOverflowStyle.marginLeft=horizontalMargin;
touchOverflowStyle.marginRight=horizontalMargin;
}

if(this.props.debugTouchArea===true){
touchOverflowStyle.backgroundColor='orange';
touchOverflowStyle.opacity=0.5;
}

return touchOverflowStyle;
}},{key:'measureContainer',value:function measureContainer(

e){var _this2=this;var _e$nativeEvent$layout=
e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;
var size={width:width,height:height};
console.warn({container:size});
this.setState(function(prevState){
return _extends({},
prevState,{
containerSize:size,
length:
_this2.props.orientation==='vertical'?
size.height-prevState.thumbSize.height:
size.width-prevState.thumbSize.width});

});
}},{key:'measureTrack',value:function measureTrack(

e){var _e$nativeEvent$layout2=
e.nativeEvent.layout,width=_e$nativeEvent$layout2.width,height=_e$nativeEvent$layout2.height;
var size={width:width,height:height};
console.warn({track:size});
this.setState(function(prevState){
return _extends({},
prevState,{
trackSize:size});

});
}},{key:'measureThumb',value:function measureThumb(

e){var _this3=this;var _e$nativeEvent$layout3=
e.nativeEvent.layout,width=_e$nativeEvent$layout3.width,height=_e$nativeEvent$layout3.height;
var size={width:width,height:height};
console.warn({thumb:size});
this.setState(function(prevState){
return _extends({},
prevState,{
thumbSize:size,
length:
_this3.props.orientation==='vertical'?
size.height-prevState.thumbSize.height:
size.width-prevState.thumbSize.width});

});
}},{key:'getValue',value:function getValue(

gestureState){
var thumbPos=
this._previousPos+(
this.props.orientation==='vertical'?
-1*gestureState.dy:
gestureState.dx);

var ratio=thumbPos/this.state.length;

if(this.props.step){
return Math.max(
this.props.minimumValue,
Math.min(
this.props.maximumValue,
this.props.minimumValue+
Math.round(
ratio*(
this.props.maximumValue-this.props.minimumValue)/
this.props.step)*

this.props.step));


}else{
return Math.max(
this.props.minimumValue,
Math.min(
this.props.maximumValue,
ratio*(this.props.maximumValue-this.props.minimumValue)+
this.props.minimumValue));


}
}},{key:'getCurrentValue',value:function getCurrentValue()

{
return this.state.value.__getValue();
}},{key:'getRatio',value:function getRatio(

value){
return(
(value-this.props.minimumValue)/(
this.props.maximumValue-this.props.minimumValue));

}},{key:'getThumbPos',value:function getThumbPos(

value){
var ratio=this.getRatio(value);
return ratio*this.state.length;
}},{key:'getThumbTouchRect',value:function getThumbTouchRect()

{
var state=this.state;
var props=this.props;
var touchOverflowSize=this.getTouchOverflowSize();

return new Rect(
touchOverflowSize.width/2+
this.getThumbPos(this.getCurrentValue())+
(state.thumbSize.width-props.thumbTouchSize.width)/2,
touchOverflowSize.height/2+
(state.containerSize.height-props.thumbTouchSize.height)/2,
props.thumbTouchSize.width,
props.thumbTouchSize.height);

}},{key:'renderDebugThumbTouchRect',value:function renderDebugThumbTouchRect(

thumbPos){
var thumbTouchRect=this.getThumbTouchRect();
var positionStyle={
left:thumbTouchRect.x,
top:thumbTouchRect.y,
width:thumbTouchRect.width,
height:thumbTouchRect.height};

return _react2.default.createElement(_reactNative.Animated.View,{style:positionStyle,pointerEvents:'none'});
}},{key:'render',value:function render()

{var _this4=this;var _props=



















this.props,minimumValue=_props.minimumValue,maximumValue=_props.maximumValue,minimumTrackTintColor=_props.minimumTrackTintColor,maximumTrackTintColor=_props.maximumTrackTintColor,thumbTintColor=_props.thumbTintColor,containerStyle=_props.containerStyle,style=_props.style,trackStyle=_props.trackStyle,thumbStyle=_props.thumbStyle,debugTouchArea=_props.debugTouchArea,thumbTouchSize=_props.thumbTouchSize,onSlidingStart=_props.onSlidingStart,onSlidingComplete=_props.onSlidingComplete,animationType=_props.animationType,animateTransitions=_props.animateTransitions,animationConfig=_props.animationConfig,orientation=_props.orientation,other=_objectWithoutProperties(_props,['minimumValue','maximumValue','minimumTrackTintColor','maximumTrackTintColor','thumbTintColor','containerStyle','style','trackStyle','thumbStyle','debugTouchArea','thumbTouchSize','onSlidingStart','onSlidingComplete','animationType','animateTransitions','animationConfig','orientation']);

if(process.env.NODE_ENV!=='test'){
delete other.onValueChange;
}var _state=

this.state,value=_state.value,containerSize=_state.containerSize,trackSize=_state.trackSize,thumbSize=_state.thumbSize,length=_state.length;

var mainStyles=containerStyle||styles;
var thumbPos=value.interpolate({
inputRange:[minimumValue,maximumValue],
outputRange:orientation==='vertical'?[length,0]:[0,length]});



var valueVisibleStyle={};

var minimumTrackStyle=_extends({
position:'absolute',
width:
orientation==='vertical'?
TRACK_SIZE:
_reactNative.Animated.add(thumbPos,thumbSize.width/2),
height:
orientation==='vertical'?
_reactNative.Animated.add(thumbPos,thumbSize.height/2):
TRACK_SIZE,
backgroundColor:minimumTrackTintColor},
valueVisibleStyle);


var thumbStyleTransform=thumbStyle&&thumbStyle.transform||[];
var thumbTransform=
orientation==='vertical'?
[
{
translateX:(trackSize.width-thumbSize.width)/2},

{translateY:thumbPos}]:

[
{translateX:thumbPos},
{
translateY:(trackSize.height-thumbSize.height)/2}];


var touchOverflowStyle=this.getTouchOverflowStyle();

var maximumTrackStyle=
orientation==='vertical'?
{width:TRACK_SIZE,height:'100%'}:
{width:'100%',height:TRACK_SIZE};
return(
_react2.default.createElement(_reactNative.View,_extends({},
other,{
style:[mainStyles.container,style],
onLayout:function onLayout(e){
_this4.measureContainer(e);
}}),

_react2.default.createElement(_reactNative.View,{
style:[
{backgroundColor:maximumTrackTintColor},
mainStyles.track,
maximumTrackStyle,
trackStyle],

onLayout:function onLayout(e){
_this4.measureTrack(e);
}}),

_react2.default.createElement(_reactNative.Animated.View,{
style:[mainStyles.track,trackStyle,minimumTrackStyle]}),

_react2.default.createElement(_reactNative.Animated.View,{
onLayout:function onLayout(e){
_this4.measureThumb(e);
},
style:[
{backgroundColor:thumbTintColor},
mainStyles.thumb,
thumbStyle,
{
transform:thumbTransform}]}),



_react2.default.createElement(_reactNative.View,_extends({
style:[styles.touchArea,touchOverflowStyle]},
this.panResponder.panHandlers),

debugTouchArea===true&&this.renderDebugThumbTouchRect(thumbPos))));



}}]);return Slider;}(_react.Component);exports.default=Slider;


Slider.propTypes={








value:_propTypes2.default.number,





disabled:_propTypes2.default.bool,




minimumValue:_propTypes2.default.number,




maximumValue:_propTypes2.default.number,





step:_propTypes2.default.number,





minimumTrackTintColor:_propTypes2.default.string,





maximumTrackTintColor:_propTypes2.default.string,




thumbTintColor:_propTypes2.default.string,








thumbTouchSize:_propTypes2.default.shape({
width:_propTypes2.default.number,
height:_propTypes2.default.number}),





onValueChange:_propTypes2.default.func,





onSlidingStart:_propTypes2.default.func,





onSlidingComplete:_propTypes2.default.func,




style:_ViewPropTypes2.default.style,




trackStyle:_ViewPropTypes2.default.style,




thumbStyle:_ViewPropTypes2.default.style,




debugTouchArea:_propTypes2.default.bool,




animateTransitions:_propTypes2.default.bool,




animationType:_propTypes2.default.oneOf(['spring','timing']),




orientation:_propTypes2.default.oneOf(['horizontal','vertical']),




animationConfig:_propTypes2.default.object,
containerStyle:_ViewPropTypes2.default.style};


Slider.defaultProps={
value:0,
minimumValue:0,
maximumValue:1,
step:0,
minimumTrackTintColor:'#3f3f3f',
maximumTrackTintColor:'#b3b3b3',
thumbTintColor:'red',
thumbTouchSize:{width:40,height:40},
debugTouchArea:false,
animationType:'timing',
orientation:'horizontal'};


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

track:{
borderRadius:TRACK_SIZE/2},

thumb:{
position:'absolute',
width:THUMB_SIZE,
height:THUMB_SIZE,
borderRadius:THUMB_SIZE/2},

touchArea:{
position:'absolute',
backgroundColor:'transparent',
top:0,
left:0,
right:0,
bottom:0},

debugThumbTouchArea:{
position:'absolute',
backgroundColor:'green',
opacity:0.5}});
//# sourceMappingURL=Slider.js.map