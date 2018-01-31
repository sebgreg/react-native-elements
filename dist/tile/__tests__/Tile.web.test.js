var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Tile=require('../Tile');var _Tile2=_interopRequireDefault(_Tile);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
imageSrc:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

icon:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
icon:{
name:'pets',
color:'white'},

width:400,
height:400},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

iconContainerStyle:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
iconContainerStyle:{borderWidth:5,borderColor:'white'},
icon:{
name:'pets',
color:'white'},

width:400,
height:400},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

title:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
title:'Title',
width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

titleStyle:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
title:'Title',
titleStyle:{
color:'#071'},

width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

titleNumberOfLines:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
title:'Title line1\\nline2\\nline3',
titleNumberOfLines:3,
width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

caption:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
title:'Title',
caption:'Caption',
featured:true,
width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

captionStyle:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
title:'Title',
featured:true,
caption:'Caption',
captionStyle:{
color:'#071'},

width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

containerStyle:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
containerStyle:{
borderWidth:5},

width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onPress:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
onPress:function onPress(){
console.log('pressed');
},
width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

activeOpacity:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
activeOpacity:0.99,
onPress:function onPress(){
console.log('pressed');
},
width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

contentContainerStyle:{
component:_Tile2.default,
props:{
imageSrc:'hero.jpg',
contentContainerStyle:{
borderWidth:5},

width:400,
height:400},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Misc:{sectionComponents:{Tile:{samples:samples}}}},_samples2.default);




describe('Tile component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Tile2.default,{imageSrc:{url:'http://google.com'}}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render featured tile',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Tile2.default,{
imageSrc:{url:'http://google.com'},
title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem',
featured:true,
caption:'Some Caption Text'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render featured tile with icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Tile2.default,{
imageSrc:{url:'http://google.com'},
icon:{name:'play-circle',type:'font-awesome'},
featured:true}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render tile with icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Tile2.default,{
imageSrc:{url:'http://google.com'},
title:'Lorem ipsum dolor sit amet, consectetur',
icon:{name:'play-circle',type:'font-awesome'},
contentContainerStyle:{height:70},
imageContainerStyle:{height:70},
iconContainerStyle:{height:70},
containerStyle:{height:70},
titleStyle:{backgroundColor:'yellow'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Tile.web.test.js.map