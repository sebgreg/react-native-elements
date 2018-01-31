var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _SocialIcon=require('../SocialIcon');var _SocialIcon2=_interopRequireDefault(_SocialIcon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('SocialIcon component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SocialIcon2.default,{type:'twitter'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should show loading indicator',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SocialIcon2.default,{type:'twitter',loading:true}));

expect(component.find('ActivityIndicator').length).toBe(1);
});

it('should render light social icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SocialIcon2.default,{light:true,raised:false,type:'medium'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render social icon button',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SocialIcon2.default,{title:'Sign In With Facebook',button:true,type:'facebook'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have onPress event',function(){
var onPress=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SocialIcon2.default,{onPress:onPress,type:'gitlab'}));

component.simulate('press');
expect(onPress).toHaveBeenCalled();
});
});
//# sourceMappingURL=SocialIcon.js.map