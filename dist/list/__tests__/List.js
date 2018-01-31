var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _List=require('../List');var _List2=_interopRequireDefault(_List);
var _ListItem=require('../ListItem');var _ListItem2=_interopRequireDefault(_ListItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('List component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_List2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render children',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_List2.default,{containerStyle:{backgroundColor:'peru'}},
_react2.default.createElement(_ListItem2.default,null)));



expect(component.find('ListItem').length).toBe(1);
});
});
//# sourceMappingURL=List.js.map