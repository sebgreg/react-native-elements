var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
'no props':{
component:_Text2.default,
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

h1:{
component:_Text2.default,
props:{h1:true},
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

h2:{
component:_Text2.default,
props:{h2:true},
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

h3:{
component:_Text2.default,
props:{h3:true},
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

h4:{
component:_Text2.default,
props:{h4:true},
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

fontFamily:{
component:_Text2.default,
props:{fontFamily:'Courier New'},
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

style:{
component:_Text2.default,
props:{style:{color:'#071'}},
children:'Text',
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Text:{samples:samples}}}},_samples2.default);




describe('Text Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have font size of 40 when h1',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h1:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(40);
});

it('should have font size of 34 when h2',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h2:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(34);
});

it('should have font size of 28 when h3',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h3:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(28);
});

it('should have font size of 22 when h4',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h4:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(22);
});

it('should have text as children',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,null,'Children Text'));

expect(component.props().children).toBe('Children Text');
});

it('should render fontFamily and style',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Text2.default,{fontFamily:'comic-sans',style:{color:'red'}},'Children Text'));




expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Text.web.test.js.map