var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _List=require('../List');var _List2=_interopRequireDefault(_List);
var _ListItem=require('../ListItem');var _ListItem2=_interopRequireDefault(_ListItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var children=[
_react2.default.createElement(_ListItem2.default,{key:'v0',title:'item 1'}),
_react2.default.createElement(_ListItem2.default,{key:'v1',title:'item 2'}),
_react2.default.createElement(_ListItem2.default,{key:'v2',title:'item 3'})];


var props={
'no props':{
component:_List2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

containerStyle:{
component:_List2.default,
children:children,
props:{
containerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Lists:{sectionComponents:{List:{samples:samples}}}},_samples2.default);




describe('List component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_List2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render children',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_List2.default,{containerStyle:{backgroundColor:'peru'}},
_react2.default.createElement(_ListItem2.default,null)));



expect(component.find('ListItem').length).toBe(1);
});
});
//# sourceMappingURL=List.web.test.js.map