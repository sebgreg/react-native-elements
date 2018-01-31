var _react=require('react');var _react2=_interopRequireDefault(_react);
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Text Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should have font size of 50 when h1',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h1:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(50);
});

it('should have font size of 42.5 when h2',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h2:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(42.5);
});

it('should have font size of 35 when h3',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h3:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(35);
});

it('should have font size of 27.5 when h4',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,{h4:true}));

var styles=component.props().style;
var fontSizeStyle=void 0;
for(var i=0;i<styles.length;i++){
if(styles[i]&&styles[i].hasOwnProperty('fontSize')){
fontSizeStyle=styles[i].fontSize;
}
}

expect(fontSizeStyle).toBe(27.5);
});

it('should have text as children',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Text2.default,null,'Children Text'));

expect(component.props().children).toBe('Children Text');
});

it('should render fontFamily and style',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Text2.default,{fontFamily:'comic-sans',style:{color:'red'}},'Children Text'));




expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=Text.js.map