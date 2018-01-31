var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Card=require('../Card');var _Card2=_interopRequireDefault(_Card);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Card Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Card2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have Card title without image',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Card2.default,{
title:'Card Title',
containerStyle:{backgroundColor:'red'},
fontFamily:'arial',
dividerStyle:{backgroundColor:'red'},
flexDirection:'row'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have Card title with image',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Card2.default,{
title:'HELLO WORLD',
image:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

containerStyle:{backgroundColor:'red'},
titleStyle:{backgroundColor:'red'},
fontFamily:'arial'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have Card with featured title',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Card2.default,{
title:'foo title',
image:{
uri:
'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},

imageWrapperStyle:{backgroundColor:'red'},
imageStyle:{backgroundColor:'red'},
wrapperStyle:{backgroundColor:'red'},
featuredTitle:'featured title',
featuredSubtitle:'featured sub title',
featuredTitleStyle:{backgroundColor:'red'},
featuredSubtitleStyle:{backgroundColor:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Card.js.map