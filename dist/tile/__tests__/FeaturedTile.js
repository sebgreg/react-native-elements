var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _FeaturedTile=require('../FeaturedTile');var _FeaturedTile2=_interopRequireDefault(_FeaturedTile);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('FeaturedTitle component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_FeaturedTile2.default,{imageSrc:{url:'http://google.com'}}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with width and height',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_FeaturedTile2.default,{
imageSrc:{url:'http://google.com'},
width:34,
height:20}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with Icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_FeaturedTile2.default,{
imageSrc:{url:'http://google.com'},
icon:{name:'play-circle',type:'font-awesome'},
imageContainerStyle:{height:70},
containerStyle:{height:70},
captionStyle:{color:'blue'},
iconContainerStyle:{height:70},
titleStyle:{backgroundColor:'yellow'},
overlayContainerStyle:{height:70}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=FeaturedTile.js.map