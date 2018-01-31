var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Card=require('../Card');var _Card2=_interopRequireDefault(_Card);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var children=[
_react2.default.createElement(_reactNative.View,{key:'v0',style:{width:50,height:50,backgroundColor:'#071'}}),
_react2.default.createElement(_reactNative.View,{key:'v1',style:{width:50,height:50,backgroundColor:'#293'}}),
_react2.default.createElement(_reactNative.View,{key:'v2',style:{width:50,height:50,backgroundColor:'#4b5'}})];


var props={
noProps:{
component:_Card2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

flexDirection:{
component:_Card2.default,
props:{flexDirection:'row'},
children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
script:'const View = RN.View;\n'}},


containerStyle:{
component:_Card2.default,
props:{containerStyle:{borderWidth:5}},
children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
script:'const View = RN.View;\n'}},


wrapperStyle:{
component:_Card2.default,
props:{wrapperStyle:{borderWidth:5}},
children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

title:{
component:_Card2.default,
props:{title:'Current Events'},
children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

titleStyle:{
component:_Card2.default,
props:{title:'Current Events',titleStyle:{padding:50}},
children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

featuredTitle:{
component:_Card2.default,
props:{image:'hero.jpg',featuredTitle:'Current Events'},
children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

featuredTitleStyle:{
component:_Card2.default,
props:{
image:'hero.jpg',
featuredTitle:'Current Events',
featuredTitleStyle:{color:'#4b5'}},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

featuredSubtitle:{
component:_Card2.default,
props:{
image:'hero.jpg',
featuredTitle:'Current Events',
featuredSubtitle:'something'},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

featuredSubtitleStyle:{
component:_Card2.default,
props:{
image:'hero.jpg',
featuredTitle:'Current Events',
featuredSubtitle:'something',
featuredSubtitleStyle:{color:'#4b5'}},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

dividerStyle:{
component:_Card2.default,
props:{
title:'Current Events',
dividerStyle:{backgroundColor:'#4b5',height:5}},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

fontFamily:{
component:_Card2.default,
props:{
title:'Current Events',
fontFamily:'Courier New'},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

imageStyle:{
component:_Card2.default,
props:{
image:'hero.jpg',
imageStyle:{opacity:0.3}},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

imageProps:{
component:_Card2.default,
props:{
image:'hero.jpg',
imageProps:{resizeMode:'contain'}},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}},

imageWrapperStyle:{
component:_Card2.default,
props:{
image:'hero.jpg',
imageWrapperStyle:{borderWidth:5}},

children:children,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{script:'const View = RN.View;\n'}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Cards:{sectionComponents:{Card:{samples:samples}}}},_samples2.default);




describe('Card Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Card2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have Card title without image',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Card2.default,{
title:'Card Title',
containerStyle:{backgroundColor:'red'},
fontFamily:'arial',
dividerStyle:{backgroundColor:'red'},
flexDirection:'row'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have Card title with image',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Card2.default,{
title:'HELLO WORLD',
image:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

containerStyle:{backgroundColor:'red'},
titleStyle:{backgroundColor:'red'},
fontFamily:'arial'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have Card with featured title',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Card2.default,{
title:'foo title',
image:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

imageWrapperStyle:{backgroundColor:'red'},
imageStyle:{backgroundColor:'red'},
wrapperStyle:{backgroundColor:'red'},
featuredTitle:'featured title',
featuredSubtitle:'featured sub title',
featuredTitleStyle:{backgroundColor:'red'},
featuredSubtitleStyle:{backgroundColor:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Card.web.test.js.map