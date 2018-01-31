var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _PricingCard=require('../PricingCard');var _PricingCard2=_interopRequireDefault(_PricingCard);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
'required props: title, price, color, button, & info':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1']},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'onButtonPress & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
onButtonPress:function onButtonPress(){
console.log('button pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'containerStyle & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
containerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'wrapperStyle & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
wrapperStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'titleFont & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
titleFont:'Courier New'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'pricingFont & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
pricingFont:'Courier New'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'infoFont & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
infoFont:'Courier New'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'buttonFont & required props':{
component:_PricingCard2.default,
props:{
title:'Title',
price:'$71',
color:'#071',
button:{
title:'BUTTON TEXT',
icon:'pets'},

info:['info0','info1'],
buttonFont:'Courier New'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Cards:{sectionComponents:{PricingCard:{samples:samples}}}},_samples2.default);




describe('PricingCard component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_PricingCard2.default,{
info:['1 User','Basic Support','All Core Features'],
button:{title:'GET STARTED',icon:'flight-takeoff'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with props',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_PricingCard2.default,{
title:'Free',
price:'$0',
info:['1 User','Basic Support','All Core Features'],
button:{title:'GET STARTED',icon:'flight-takeoff'},
titleFont:'arial',
infoFont:'arial',
pricingFont:'arial',
buttonFont:'arial',
containerStyle:{backgroundColor:'peru'},
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=PricingCard.web.test.js.map