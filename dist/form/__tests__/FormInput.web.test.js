var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _FormInput=require('../FormInput');var _FormInput2=_interopRequireDefault(_FormInput);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var noProps={
component:_FormInput2.default,
enzyme:{
tests:{
shallow:{
snapshot:(0,_samples.snapShot)(),
oneTextInput:function oneTextInput(wrapper,title){
test(title,function(){
expect(wrapper.find('TextInput').length).toBe(1);
});
}},

mount:{snapshot:(0,_samples.snapShot)()},
render:{snapshot:(0,_samples.snapShot)()}}}};



var containerStyle={
component:_FormInput2.default,
props:{containerStyle:{backgroundColor:'#071'}},
styleguidist:{},
enzyme:{
tests:{
shallow:{snapshot:(0,_samples.snapShot)()},
mount:{snapshot:(0,_samples.snapShot)()},
render:{snapshot:(0,_samples.snapShot)()}}}};



var inputStyle={
component:_FormInput2.default,
props:{inputStyle:{color:'#071'}},
styleguidist:{},
enzyme:{
tests:{
shallow:{snapshot:(0,_samples.snapShot)()},
mount:{snapshot:(0,_samples.snapShot)()},
render:{snapshot:(0,_samples.snapShot)()}}}};



var textInputRef={
component:_FormInput2.default,

styleguidist:{
buildJsx:function buildJsx(){
var refId=(0,_enzymeStyleguidistSampleParser.genRefId)();
return _react2.default.createElement(_FormInput2.default,{textInputRef:(0,_enzymeStyleguidistSampleParser.assignRef)(refId)});
}},

enzyme:{
buildJsx:function buildJsx(){
var refId=(0,_enzymeStyleguidistSampleParser.genRefId)();
return _react2.default.createElement(_FormInput2.default,{textInputRef:(0,_enzymeStyleguidistSampleParser.assignRef)(refId)});
},
tests:{
shallow:{snapshot:(0,_samples.snapShot)()}}}};



var containerRef={
component:_FormInput2.default,
props:{containerRef:(0,_enzymeStyleguidistSampleParser.assignRef)((0,_enzymeStyleguidistSampleParser.genRefId)())},
styleguidist:{},
enzyme:{
tests:{
shallow:{snapshot:(0,_samples.snapShot)()}}}};



var shake={
component:_FormInput2.default,
props:{shake:true},
styleguidist:{},
enzyme:{
tests:{
shallow:{
snapshot:(0,_samples.snapShot)(),
changeShake:function changeShake(wrapper,title){
wrapper.setProps({shake:false});
}}}}};





var props={
'no props':noProps,
containerStyle:containerStyle,
inputStyle:inputStyle,
textInputRef:textInputRef,
containerRef:containerRef,
shake:shake};




var shakeMeth={
component:_FormInput2.default,
props:{defaultValue:'text to shake'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:_samples.onlyEnsureCalled};

var focus={
component:_FormInput2.default,
props:{defaultValue:'cursor will appear'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
cd:1000,
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:{
tests:{
shallow:{
'ensure called':(0,_samples.ensureCalled)()}}}};




var blur={
component:_FormInput2.default,
props:{defaultValue:'place cursor here and watch it be removed'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
cd:3000,
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:{
tests:{
shallow:{
'ensure called':(0,_samples.ensureCalled)()}}}};




var clearText={
component:_FormInput2.default,
props:{defaultValue:'text to clear'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:{
tests:{
shallow:{
'ensure called':(0,_samples.ensureCalled)()}}}};





var methods={
shake:shakeMeth,
focus:focus,
blur:blur,
clearText:clearText};


var samples={
props:props,
methods:methods};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Forms:{sectionComponents:{FormInput:{samples:samples}}}},_samples2.default);




describe('FormInput Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_FormInput2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have a TextInput component',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_FormInput2.default,null));

expect(component.find('TextInput').length).toBe(1);
});

it('should call onChangeText function on adding new value',function(){
var customFunction=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_FormInput2.default,{onChangeText:customFunction}));
component.find('TextInput').simulate('ChangeText','Text Change');

expect(customFunction).toHaveBeenCalled();
});

it('should call onFocus function',function(){
var customFunction=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_FormInput2.default,{
onFocus:customFunction,
containerStyle:{backgroundColor:'red'},
inputStyle:{backgroundColor:'red'}}));


component.find('TextInput').simulate('Focus');

expect(customFunction).toHaveBeenCalledTimes(1);
});
});
//# sourceMappingURL=FormInput.web.test.js.map