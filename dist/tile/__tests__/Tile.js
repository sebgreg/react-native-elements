var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Tile=require('../Tile');var _Tile2=_interopRequireDefault(_Tile);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

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

it('should render with active opacity',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Tile2.default,{
imageSrc:{url:'http://google.com'},
activeOpacity:0.90}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Tile.js.map