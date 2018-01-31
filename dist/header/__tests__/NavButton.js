var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _NavButton=require('../NavButton');var _NavButton2=_interopRequireDefault(_NavButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NavButton Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_NavButton2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should accept props',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_NavButton2.default,{icon:'home'}));

expect(component.find('Icon').props().name).toBe('home');
});
});
//# sourceMappingURL=NavButton.js.map