Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _lodash=require('lodash.times');var _lodash2=_interopRequireDefault(_lodash);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _Text=require('../text/Text');var _Text2=_interopRequireDefault(_Text);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var STAR_IMAGE=require('./images/star.png');
var HEART_IMAGE=require('./images/heart.png');
var ROCKET_IMAGE=require('./images/rocket.png');
var BELL_IMAGE=require('./images/bell.png');

var STAR_WIDTH=60;

var TYPES={
star:{
source:STAR_IMAGE,
color:'#f1c40f',
backgroundColor:'white'},

heart:{
source:HEART_IMAGE,
color:'#e74c3c',
backgroundColor:'white'},

rocket:{
source:ROCKET_IMAGE,
color:'#2ecc71',
backgroundColor:'white'},

bell:{
source:BELL_IMAGE,
color:'#f39c12',
backgroundColor:'white'}};var



Rating=function(_Component){_inherits(Rating,_Component);












function Rating(props){_classCallCheck(this,Rating);var _this=_possibleConstructorReturn(this,(Rating.__proto__||Object.getPrototypeOf(Rating)).call(this,
props));_this._animListener=null;
var initialRatingPct=props.startingValue?
props.startingValue/props.ratingCount:
0.5;
_this.state={
panResponder:null,
rating:initialRatingPct*props.ratingCount,
ratingPosAnim:new _reactNative.Animated.Value(
initialRatingPct*props.imageSize*props.ratingCount)};return _this;


}_createClass(Rating,[{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;var _props=
this.props,imageSize=_props.imageSize,onFinishRating=_props.onFinishRating,fractions=_props.fractions;
this._animListener=this.state.ratingPosAnim.addListener(function(_ref){var value=_ref.value;
_this2.updateRating(value);
});
var panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},
onPanResponderGrant:function onPanResponderGrant(){

_this2.state.ratingPosAnim.setOffset(_this2.state.rating*imageSize);
},
onPanResponderMove:_reactNative.Animated.event([
null,
{dx:this.state.ratingPosAnim}]),

onPanResponderRelease:function onPanResponderRelease(e,gestureState){
_this2.state.ratingPosAnim.flattenOffset();
_this2.updatePosition(_this2.state.rating);
onFinishRating(_this2.state.rating);
}});

this.setState(function(prevState){
return _extends({},prevState,{panResponder:panResponder});
});
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.state.ratingPosAnim.removeListener(this._animListener);
}},{key:'getPrimaryViewStyle',value:function getPrimaryViewStyle()

{var _props2=
this.props,imageSize=_props2.imageSize,ratingCount=_props2.ratingCount,type=_props2.type;

var color=TYPES[type].color;

var fullWidth=ratingCount*imageSize;

var width=this.state.ratingPosAnim.interpolate(
{
inputRange:[0,fullWidth],
outputRange:[0,fullWidth],
extrapolate:'clamp'},

{useNativeDriver:true});


return{
backgroundColor:color,
width:width,
height:width?imageSize:0};

}},{key:'getSecondaryViewStyle',value:function getSecondaryViewStyle()

{var _props3=
this.props,imageSize=_props3.imageSize,ratingCount=_props3.ratingCount,type=_props3.type;

var backgroundColor=TYPES[type].backgroundColor;

var fullWidth=ratingCount*imageSize;

var width=this.state.ratingPosAnim.interpolate(
{
inputRange:[0,fullWidth],
outputRange:[fullWidth,0],
extrapolate:'clamp'},

{useNativeDriver:true});


return{
backgroundColor:backgroundColor,
width:width,
height:width?imageSize:0};

}},{key:'renderRatings',value:function renderRatings()

{var _props4=
this.props,imageSize=_props4.imageSize,ratingCount=_props4.ratingCount,type=_props4.type;
var source=TYPES[type].source;

return(0,_lodash2.default)(ratingCount,function(index){return(
_react2.default.createElement(_reactNative.View,{key:index,style:styles.starContainer,pointerEvents:'none'},
_react2.default.createElement(_reactNative.Image,{
source:source,
style:{width:imageSize,height:imageSize},
pointerEvents:'none',
draggable:false})));});



}},{key:'updatePosition',value:function updatePosition(

rating){var _props5=
this.props,fractions=_props5.fractions,imageSize=_props5.imageSize,ratingCount=_props5.ratingCount;
var ratingPos=rating*imageSize;
this.state.ratingPosAnim.setValue(ratingPos);
}},{key:'updateRating',value:function updateRating(

pos){var _props6=
this.props,fractions=_props6.fractions,imageSize=_props6.imageSize,ratingCount=_props6.ratingCount;
var rating=pos/imageSize;

if(rating>ratingCount){
rating=ratingCount;
}else if(rating<0){
rating=0;
}
rating=!fractions?Math.ceil(rating):+rating.toFixed(fractions);
this.setState(function(prevState){
return _extends({},
prevState,{
rating:rating});

});
}},{key:'displayCurrentRating',value:function displayCurrentRating()

{var _props7=
this.props,ratingCount=_props7.ratingCount,type=_props7.type,readonly=_props7.readonly;

var color=TYPES[type].color;

return(
_react2.default.createElement(_reactNative.View,{style:styles.showRatingView},
_react2.default.createElement(_reactNative.View,{style:styles.ratingView},
_react2.default.createElement(_Text2.default,{style:styles.ratingText},'Rating: '),
_react2.default.createElement(_Text2.default,{style:[styles.currentRatingText,{color:color}]},
this.state.rating),

_react2.default.createElement(_Text2.default,{style:styles.maxRatingText},'/',ratingCount)),

_react2.default.createElement(_reactNative.View,null,
readonly&&_react2.default.createElement(_Text2.default,{style:styles.readonlyLabel},'(readonly)'))));



}},{key:'render',value:function render()

{var _props8=








this.props,readonly=_props8.readonly,type=_props8.type,ratingImage=_props8.ratingImage,ratingColor=_props8.ratingColor,ratingBackgroundColor=_props8.ratingBackgroundColor,style=_props8.style,showRating=_props8.showRating;

if(type==='custom'){
var custom={
source:ratingImage,
color:ratingColor,
backgroundColor:ratingBackgroundColor};

TYPES.custom=custom;
}

return(
_react2.default.createElement(_reactNative.View,{pointerEvents:readonly?'none':'box-none',style:style},
showRating&&this.displayCurrentRating(),
_react2.default.createElement(_reactNative.View,_extends({
style:styles.starsWrapper},
this.state.panResponder.panHandlers),

_react2.default.createElement(_reactNative.View,{style:styles.starsInsideWrapper,pointerEvents:'none'},
_react2.default.createElement(_reactNative.Animated.View,{style:this.getPrimaryViewStyle()}),
_react2.default.createElement(_reactNative.Animated.View,{style:this.getSecondaryViewStyle()})),

this.renderRatings())));



}}]);return Rating;}(_react.Component);Rating.defaultProps={type:'star',ratingImage:require('./images/star.png'),ratingColor:'#f1c40f',ratingBackgroundColor:'white',ratingCount:5,imageSize:STAR_WIDTH,onFinishRating:function onFinishRating(){return console.log('Attach a function here.');}};exports.default=Rating;


var styles=_reactNative.StyleSheet.create({
starsWrapper:{
flexDirection:'row'},

starsInsideWrapper:{
position:'absolute',
top:0,
left:0,
flexDirection:'row'},

showRatingView:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
paddingBottom:5},

ratingView:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
paddingBottom:5},

ratingText:{
fontSize:15,
textAlign:'center',
fontFamily:_reactNative.Platform.OS==='ios'?'Trebuchet MS':null,
color:'#34495e'},

readonlyLabel:{
justifyContent:'center',
alignItems:'center',
fontSize:12,
textAlign:'center',
fontFamily:_reactNative.Platform.OS==='ios'?'Trebuchet MS':null,
color:'#34495a'},

currentRatingText:{
fontSize:30,
textAlign:'center',
fontFamily:_reactNative.Platform.OS==='ios'?'Trebuchet MS':null},

maxRatingText:{
fontSize:18,
textAlign:'center',
fontFamily:_reactNative.Platform.OS==='ios'?'Trebuchet MS':null,
color:'#34495e'}});



var fractionsType=function fractionsType(props,propName,componentName){
if(props[propName]){
var value=props[propName];
if(typeof value==='number'){
return value>=0&&value<=20?
null:
new Error('`'+
propName+'` in `'+componentName+'` must be between 0 and 20');

}

return new Error('`'+
propName+'` in `'+componentName+'` must be a number');

}
};

Rating.propTypes={
type:_propTypes2.default.string,
ratingImage:_reactNative.Image.propTypes.source,
ratingColor:_propTypes2.default.string,
ratingBackgroundColor:_propTypes2.default.string,
ratingCount:_propTypes2.default.number,
imageSize:_propTypes2.default.number,
onFinishRating:_propTypes2.default.func,
showRating:_propTypes2.default.bool,
style:_ViewPropTypes2.default.style,
readonly:_propTypes2.default.bool,
startingValue:_propTypes2.default.number,
fractions:fractionsType};
//# sourceMappingURL=Rating.js.map