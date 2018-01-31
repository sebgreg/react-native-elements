var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _reactNative=require('react-native');





var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _ButtonGroup=require('../ButtonGroup');var _ButtonGroup2=_interopRequireDefault(_ButtonGroup);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var buttons=['button one','button two','button three'];

var props={







selectedIndex:{
component:_ButtonGroup2.default,
props:{buttons:buttons,selectedIndex:1},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onPress:{
component:_ButtonGroup2.default,
props:{
buttons:buttons,
onPress:function onPress(idx){
console.log('pressed: '+idx);
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

buttons:{
component:_ButtonGroup2.default,
props:{buttons:buttons},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

component:{
component:_ButtonGroup2.default,
props:{buttons:buttons,component:_reactNative.TouchableWithoutFeedback},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
getJsxString:function getJsxString(){
return'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <ButtonGroup buttons={[\'button one\', \'button two\', \'button three\']}\n    component={TouchableWithoutFeedback}\n  />';



}}},


containerStyle:{
component:_ButtonGroup2.default,
props:{buttons:buttons,containerStyle:{alignSelf:'flex-start'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

buttonStyle:{
component:_ButtonGroup2.default,
props:{
buttons:buttons,
buttonStyle:{
width:150,
backgroundColor:'#aaa'}},


enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

'buttonStyle & containerStyle':{
component:_ButtonGroup2.default,
props:{
buttons:buttons,
buttonStyle:{
width:150,
backgroundColor:'#aaa'},

containerStyle:{alignSelf:'flex-start'}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

selectedButtonStyle:{
component:_ButtonGroup2.default,
props:{
buttons:buttons,
selectedButtonStyle:{backgroundColor:'#071'},
selectedIndex:1},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

containerBorderRadius:{
component:_ButtonGroup2.default,
props:{buttons:buttons,containerBorderRadius:20},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

textStyle:{
component:_ButtonGroup2.default,
props:{buttons:buttons,textStyle:{backgroundColor:'#071'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

selectedTextStyle:{
component:_ButtonGroup2.default,
props:{
buttons:buttons,
selectedTextStyle:{backgroundColor:'#071'},
selectedIndex:1},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

innerBorderStyle:{
component:_ButtonGroup2.default,
props:{buttons:buttons,innerBorderStyle:{width:10,color:'#071'}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

underlayColor:{
component:_ButtonGroup2.default,
props:{buttons:buttons,underlayColor:'yellow'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

disableSelected:{
component:_ButtonGroup2.default,
props:{buttons:buttons,disableSelected:true,selectedIndex:1},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Buttons:{sectionComponents:{ButtonGroup:{samples:samples}}}},_samples2.default);




buttons=['Button 1','Button 2','Button 3'];
var buttonsElement=[{element:'Text'},{element:'View'}];

describe('ButtonGroup ButtonGroup',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_ButtonGroup2.default,{buttons:buttons}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have onPress event',function(){
var onPress=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttons,
onPress:onPress,
containerStyle:{backgroundColor:'yellow'},
buttonStyle:{backgroundColor:'blue'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render selectedIndex',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttons,
selectedIndex:1,
selectedButtonStyle:{backgroundColor:'red'},
selectedTextStyle:{fontSize:12}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with button.element',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttonsElement,
innerBorderStyle:{width:300,color:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render lastButtonStyle',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ButtonGroup2.default,{
buttons:buttons,
lastBorderStyle:{backgroundColor:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=ButtonGroup.web.test.js.map