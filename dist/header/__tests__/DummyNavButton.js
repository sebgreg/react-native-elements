var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _DummyNavButton=require('../DummyNavButton');var _DummyNavButton2=_interopRequireDefault(_DummyNavButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('DummyNavButton Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_DummyNavButton2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=DummyNavButton.js.map