var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Slider=require('../Slider');var _Slider2=_interopRequireDefault(_Slider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Slider component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Slider2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with ThumbTouchRect',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Slider2.default,{debugTouchArea:true,minimumValue:0,maximumValue:100}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render vertically',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Slider2.default,{orientation:'vertical'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should pass down Thumb transform values',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Slider2.default,{thumbStyle:{transform:[{scale:2}]}}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should call onValueChange',function(){
var customFunction=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Slider2.default,{
value:20,
minimumValue:0,
maximumValue:100,
onValueChange:customFunction,
allMeasured:true}));



expect(component.props().value).toBe(20);
component.simulate('ValueChange',30);
expect(customFunction).toHaveBeenCalledTimes(1);
});
});
//# sourceMappingURL=Slider.js.map