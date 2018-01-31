var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _FormLabel=require('../FormLabel');var _FormLabel2=_interopRequireDefault(_FormLabel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
containerStyle:{
component:_FormLabel2.default,
children:'enter something',
props:{containerStyle:{backgroundColor:'#2ff',padding:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

labelStyle:{
component:_FormLabel2.default,
children:'enter something',
props:{labelStyle:{backgroundColor:'#2ff',padding:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

fontFamily:{
component:_FormLabel2.default,
children:'enter something',
props:{fontFamily:'Courier New'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Forms:{sectionComponents:{FormLabel:{samples:samples}}}},_samples2.default);




describe('FormLabel Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_FormLabel2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should show text from the FormLabel children',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_FormLabel2.default,{
containerStyle:{backgroundColor:'red'},
labelStyle:{backgroundColor:'yellow'},
fontFamily:'arial'},'Name'));





expect(component.props().children.props.children).toBe('Name');
});
});
//# sourceMappingURL=FormLabel.web.test.js.map