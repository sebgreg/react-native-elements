var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _FormValidationMessage=require('../FormValidationMessage');var _FormValidationMessage2=_interopRequireDefault(_FormValidationMessage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
containerStyle:{
component:_FormValidationMessage2.default,
children:'bad things',
props:{containerStyle:{backgroundColor:'#2ff',padding:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

labelStyle:{
component:_FormValidationMessage2.default,
children:'bad things',
props:{labelStyle:{backgroundColor:'#2ff',padding:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

fontFamily:{
component:_FormValidationMessage2.default,
children:'bad things',
props:{fontFamily:'Courier New'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Forms:{sectionComponents:{FormValidationMessage:{samples:samples}}}},_samples2.default);




describe('FormValidationMessage Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_FormValidationMessage2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should show text from the FormValidationMessage children',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_FormValidationMessage2.default,{
containerStyle:{backgroundColor:'red'},
labelStyle:{backgroundColor:'yellow'},
fontFamily:'arial'},'There was an error'));





expect(component.props().children.props.children).toBe(
'There was an error');

});
});
//# sourceMappingURL=FormValidationMessage.web.test.js.map