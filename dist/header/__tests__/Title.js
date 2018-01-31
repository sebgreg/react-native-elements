var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Title=require('../Title');var _Title2=_interopRequireDefault(_Title);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Title Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Title2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should accept props',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Title2.default,{text:'Test title'}));

expect(component.find('TextElement').props().children).toBe('Test title');
});
});
//# sourceMappingURL=Title.js.map