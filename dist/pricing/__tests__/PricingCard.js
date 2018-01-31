var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _PricingCard=require('../PricingCard');var _PricingCard2=_interopRequireDefault(_PricingCard);
var _Icon=require('../../icons/Icon');var _Icon2=_interopRequireDefault(_Icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('PricingCard component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_PricingCard2.default,{
info:['1 User','Basic Support','All Core Features'],
button:{title:'GET STARTED',icon:'flight-takeoff'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with props',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_PricingCard2.default,{
title:'Free',
price:'$0',
info:['1 User','Basic Support','All Core Features'],
button:{title:'GET STARTED',icon:'flight-takeoff'},
titleFont:'arial',
infoFont:'arial',
pricingFont:'arial',
buttonFont:'arial',
containerStyle:{backgroundColor:'peru'},
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=PricingCard.js.map