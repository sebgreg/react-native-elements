var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _CheckBox=require('../CheckBox');var _CheckBox2=_interopRequireDefault(_CheckBox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
noProps:{
component:_CheckBox2.default,
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'component, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
component:_reactNative.TouchableWithoutFeedback,
checked:true,
title:'Title',
onIconPress:function onIconPress(){
var x=7;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
getJsxString:function getJsxString(){
return'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <CheckBox \n    component={TouchableWithoutFeedback}\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n  />';








}}},


'iconRight, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
iconRight:true,
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n    iconRight\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n  />';







}}},


'right, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
right:true,
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n  right\n  title="title"\n  checked={state.checked}\n  onIconPress={() => {\n    setState({ checked: !state.checked });\n  }}\n/>';







}}},


'center, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
center:true,
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n    center\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n  />';







}}},


containerStyle:{
component:_CheckBox2.default,
props:{containerStyle:{backgroundColor:'#071'}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'textStyle & title':{
component:_CheckBox2.default,
props:{textStyle:{backgroundColor:'#071'},title:'Title'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'onLongPress, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
},
onLongPress:function onLongPress(){
var y=8;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n    onLongPress={() => {\n      console.log("pressed, long");\n    }}\n  />';









}}},


'onLongIconPress, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
},
onLongPress:function onLongPress(){
var y=8;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n    onLongIconPress={() => {\n      console.log("pressed, long");\n    }}\n  />';









}}},


'onPress, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
},
onPress:function onPress(){
var y=8;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n    onPress={() => {\n      setState({ checked: !state.checked });\n    }}\n  />';









}}},


checkedIcon:{
component:_CheckBox2.default,
props:{checked:true,checkedIcon:'bell-o'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

uncheckedIcon:{
component:_CheckBox2.default,
props:{uncheckedIcon:'bell-slash-o'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

checkedColor:{
component:_CheckBox2.default,
props:{checked:true,checkedColor:'#22d'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

uncheckedColor:{
component:_CheckBox2.default,
props:{uncheckedColor:'#d22'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'checkedTitle, title, checked, & onIconPress':{
component:_CheckBox2.default,
props:{
checkedTitle:'title - is checked',
title:'Title',
checked:true,
onIconPress:function onIconPress(){
var x=7;
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { checked: false };',
getJsxString:function getJsxString(){
return'<CheckBox\n    checkedTitle="title - is checked"\n    title="title"\n    checked={state.checked}\n    onIconPress={() => {\n      setState({ checked: !state.checked });\n    }}\n  />';







}}},


fontFamily:{
component:_CheckBox2.default,
props:{title:'Title',fontFamily:'Courier New'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Input:{sectionComponents:{CheckBox:{samples:samples}}}},_samples2.default);




describe('CheckBox Component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should use TouchableOpacity as default component',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,null));

expect(component.find('TouchableOpacity').length).toBe(1);
});

it('should allow to pass custom component',function(){
var View=jest.fn();
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,{component:View}));

expect(component.find('View').length).toBe(1);
});

it('should render title in Text',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_CheckBox2.default,{title:'Custom Text',checked:true}));

expect(component.props().children.props.children[1].props.children).toBe(
'Custom Text');

});

it('should render with icon and checked',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_CheckBox2.default,{
iconType:'font-awesome',
checkedColor:'red',
containerStyle:{backgroundColor:'red'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with icon and iconRight',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_CheckBox2.default,{
iconType:'font-awesome',
iconRight:true,
uncheckedColor:'blue',
rigth:true,
center:true}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=CheckBox.web.test.js.map