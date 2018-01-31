var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);



var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Header=require('../Header');var _Header2=_interopRequireDefault(_Header);
var _NavButton=require('../NavButton');var _NavButton2=_interopRequireDefault(_NavButton);
var _Title=require('../Title');var _Title2=_interopRequireDefault(_Title);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var btnCfg={icon:'home'};var titleCfg={text:'This is a title'};

var props={
noProps:{
component:_Header2.default,
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

statusBarProps:{
component:_Header2.default,
props:{statusBarProps:{animated:true}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

leftComponent:{
component:_Header2.default,
props:{statusBarProps:{animated:true}},
enzyme:{
buildJsx:function buildJsx(){
return _react2.default.createElement(_Header2.default,{leftComponent:_react2.default.createElement(_reactNative.Text,null,'sample component')});
},
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'const Text = RN.Text;\n',
buildJsx:function buildJsx(){
return _react2.default.createElement(_Header2.default,{leftComponent:_react2.default.createElement(_reactNative.Text,null,'sample component')});
}}},


'leftComponent icon':{
component:_Header2.default,
props:{leftComponent:{icon:'directions-bike'}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

centerComponent:{
component:_Header2.default,
props:{statusBarProps:{animated:true}},
enzyme:{
buildJsx:function buildJsx(){
return _react2.default.createElement(_Header2.default,{centerComponent:_react2.default.createElement(_reactNative.Text,null,'sample component')});
},
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'const Text = RN.Text;\n',
buildJsx:function buildJsx(){
return _react2.default.createElement(_Header2.default,{centerComponent:_react2.default.createElement(_reactNative.Text,null,'sample component')});
}}},


'centerComponent text':{
component:_Header2.default,
props:{centerComponent:{text:'text sample'}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

rightComponent:{
component:_Header2.default,
props:{statusBarProps:{animated:true}},
enzyme:{
buildJsx:function buildJsx(){
return _react2.default.createElement(_Header2.default,{rightComponent:_react2.default.createElement(_reactNative.Text,null,'sample component')});
},
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'const Text = RN.Text;\n',
buildJsx:function buildJsx(){
return _react2.default.createElement(_Header2.default,{rightComponent:_react2.default.createElement(_reactNative.Text,null,'sample component')});
}}},


'rightComponent icon':{
component:_Header2.default,
props:{rightComponent:{icon:'pets'}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

backgroundColor:{
component:_Header2.default,
props:{backgroundColor:'#071'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

outerContainerStyles:{
component:_Header2.default,
props:{outerContainerStyles:{borderWidth:5}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

innerContainerStyles:{
component:_Header2.default,
props:{innerContainerStyles:{borderWidth:5}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Header:{samples:samples}}}},_samples2.default);




describe('Header Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Header2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render children when passed in',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_reactNative.Button,{title:'Test button',onPress:function onPress(){}})));



expect(component.find('Button').length).toBe(1);
});

it('should render multiple children when passed in',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,null,
_react2.default.createElement(_reactNative.Button,{title:'Test button 1',onPress:function onPress(){}}),
_react2.default.createElement(_reactNative.Button,{title:'Test button 2',onPress:function onPress(){}})));



expect(component.find('Button').length).toBe(2);
});

it('should render left component by passing a config through props',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Header2.default,{leftComponent:btnCfg}));

expect(component.find(_NavButton2.default).length).toBe(1);
});

it('should render left component by passing a component through props',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,{
leftComponent:_react2.default.createElement(_reactNative.Button,{title:'Test button',onPress:function onPress(){}})}));



expect(component.find('Button').length).toBe(1);
});

it('should render right component by passing a config through props',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Header2.default,{rightComponent:btnCfg}));

expect(component.find(_NavButton2.default).length).toBe(1);
});

it('should render right component by passing a component through props',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,{
rightComponent:_react2.default.createElement(_reactNative.Button,{title:'Test button',onPress:function onPress(){}})}));



expect(component.find('Button').length).toBe(1);
});

it('should render center component by passing a config through props',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Header2.default,{centerComponent:titleCfg}));

expect(component.find(_Title2.default).length).toBe(1);
});

it('should render center component by passing a component through props',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,{
centerComponent:_react2.default.createElement(_reactNative.Button,{title:'Test button',onPress:function onPress(){}})}));



expect(component.find('Button').length).toBe(1);
});

it('should allow to pass backgroundColor through prop',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Header2.default,{backgroundColor:'#aaa'}));

expect(
component.
find('View').
first().
props().style[1].backgroundColor).
toBe('#aaa');
});

it('should allow to pass styles through outerContainerStyles prop',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,{outerContainerStyles:{backgroundColor:'#ccc'}}));


expect(
component.
find('View').
at(0).
props().style[2].backgroundColor).
toBe('#ccc');
});

it('should allow to pass styles through innerContainerStyles prop',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Header2.default,{innerContainerStyles:{backgroundColor:'#ccc'}}));


expect(
component.
find('View').
at(1).
props().style[1].backgroundColor).
toBe('#ccc');
});

it('should accept props for StatusBar',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Header2.default,{statusBarProps:{hidden:true}}));

expect(component.find('StatusBar').props().hidden).toBe(true);
});
});
//# sourceMappingURL=Header.web.test.js.map