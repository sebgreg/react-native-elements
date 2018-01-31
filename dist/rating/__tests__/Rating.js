var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Rating=require('../Rating');var _Rating2=_interopRequireDefault(_Rating);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Rating Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render rating label',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,{showRating:true}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render custom images',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Rating2.default,{
type:'custom',
ratingImage:{
uri:'https://image.freepik.com/free-icon/smiley_318-121680.jpg'}}));




expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render custom color',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Rating2.default,{
type:'custom',
ratingImage:{
uri:'https://image.freepik.com/free-icon/smiley_318-121680.jpg'},

ratingColor:'green'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render custom background color',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Rating2.default,{
type:'custom',
ratingImage:{
uri:'https://image.freepik.com/free-icon/smiley_318-121680.jpg'},

ratingColor:'green',
ratingBackgroundColor:'darkgreen'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render 10 images',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,{ratingCount:10}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render images with the size of 30',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,{imageSize:30}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render in readonly mode',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,{readonly:true}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with an initial value of 3.3',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,{showRating:true,startingValue:3.3}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render value with 2 decimal places',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Rating2.default,{showRating:true,fractions:2}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Rating.js.map