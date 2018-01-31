var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Icon=require('../Icon');var _Icon2=_interopRequireDefault(_Icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Icon component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Icon2.default,{name:'wifi'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with icon type',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Icon2.default,{
name:'alert',
type:'octicon',
reverse:true,
color:'red',
iconStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have onPress event',function(){
var onPress=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Icon2.default,{onPress:onPress,name:'wifi'}));

component.simulate('press');
expect(onPress).toHaveBeenCalledTimes(1);
});
});
//# sourceMappingURL=Icon.js.map