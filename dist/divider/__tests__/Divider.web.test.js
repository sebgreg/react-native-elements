var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Divider=require('../Divider');var _Divider2=_interopRequireDefault(_Divider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
noProps:{
component:_Divider2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

style:{
component:_Divider2.default,
props:{style:{backgroundColor:'#071',height:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Divider:{samples:samples}}}},_samples2.default);




describe('Divider Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Divider2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with style',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Divider2.default,{style:{backgroundColor:'blue'}}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
expect(component.props().style.length).toBe(2);
expect(component.props().style[1].backgroundColor).toBe('blue');
});
});
//# sourceMappingURL=Divider.web.test.js.map