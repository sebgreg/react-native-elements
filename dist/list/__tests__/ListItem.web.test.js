var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _ListItem=require('../ListItem');var _ListItem2=_interopRequireDefault(_ListItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
'no props':{
component:_ListItem2.default,
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

avatar:{
component:_ListItem2.default,
props:{title:'Title',avatar:'hero.jpg'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

avatarStyle:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
avatarStyle:{transform:[{rotateZ:'-45deg'}]}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

avatarContainerStyle:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
avatarContainerStyle:{padding:50}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

avatarOverlayContainerStyle:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
avatarOverlayContainerStyle:{padding:25}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

chevronColor:{
component:_ListItem2.default,
props:{title:'Title',chevronColor:'#071'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

component:{
component:_ListItem2.default,
props:{
title:'Title',
onPress:function onPress(){
console.log('pressed');
},
component:_reactNative.TouchableWithoutFeedback},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
getJsxString:function getJsxString(){
return'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n  <ListItem \n    title="title"\n    onPress={ () => {\n      console.log("pressed");\n    }}\n    component={TouchableWithoutFeedback}\n  />';







}}},


containerStyle:{
component:_ListItem2.default,
props:{title:'Title',containerStyle:{borderWidth:5}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

wrapperStyle:{
component:_ListItem2.default,
props:{title:'Title',wrapperStyle:{borderWidth:5}},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

'underlayColor & onPress':{
component:_ListItem2.default,
props:{
title:'Title',
underlayColor:'yellow',
onPress:function onPress(){
console.log('pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

fontFamily:{
component:_ListItem2.default,
props:{title:'Title',fontFamily:'Courier New'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

hideChevron:{
component:_ListItem2.default,
props:{title:'Title',hideChevron:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

onLongPress:{
component:_ListItem2.default,
props:{
title:'Title',
onLongPress:function onLongPress(){
console.log('pressed, long');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

roundAvatar:{
component:_ListItem2.default,
props:{title:'Title',avatar:'hero.jpg',roundAvatar:true},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

titleNumberOfLines:{
component:_ListItem2.default,
props:{title:'line1\\nline2\\nline3',titleNumberOfLines:3},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

titleStyle:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
titleStyle:{marginTop:-25}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

titleContainerStyle:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
titleContainerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

subtitle:{
component:_ListItem2.default,
props:{title:'Title',subtitle:'subtitle'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

subtitleNumberOfLines:{
component:_ListItem2.default,
props:{
title:'Title',
subtitle:'line1\\nline2\\nline3',
subtitleNumberOfLines:3},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

subtitleContainerStyle:{
component:_ListItem2.default,
props:{
title:'Title',
subtitle:'subtitle',
avatar:'hero.jpg',
subtitleContainerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

subtitleStyle:{
component:_ListItem2.default,
props:{
title:'Title',
subtitle:'subtitle',
avatar:'hero.jpg',
subtitleStyle:{color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

rightTitle:{
component:_ListItem2.default,
props:{title:'Title',rightTitle:'rightTitle'},
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

rightTitleNumberOfLines:{
component:_ListItem2.default,
props:{
title:'Title',
rightTitle:'line1\\nline2\\nline3',
rightTitleNumberOfLines:3},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

rightTitleContainerStyle:{
component:_ListItem2.default,
props:{
title:'Title',
rightTitle:'rightTitle',
avatar:'hero.jpg',
rightTitleContainerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

rightTitleStyle:{
component:_ListItem2.default,
props:{
title:'Title',
rightTitle:'rightTitle',
avatar:'hero.jpg',
rightTitleStyle:{color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

label:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
label:_react2.default.createElement(_reactNative.Text,null,'label')},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'const Text = RN.Text;\n'}},


leftIcon:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
leftIcon:{name:'pets',color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

leftIconOnPress:{
component:_ListItem2.default,
props:{
title:'Title',
leftIcon:{name:'pets',color:'#071'},
leftIconOnPress:function leftIconOnPress(){
console.log('leftIcon pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

leftIconOnLongPress:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
leftIcon:{name:'pets',color:'#071'},
leftIconOnLongPress:function leftIconOnLongPress(){
console.log('leftIcon pressed, long');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

leftIconUnderlayColor:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
leftIcon:{name:'pets',color:'#071'},
leftIconOnPress:function leftIconOnPress(){
console.log('leftIcon pressed');
},
leftIconUnderlayColor:'yellow'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

rightIcon:{
component:_ListItem2.default,
props:{
title:'Title',
avatar:'hero.jpg',
rightIcon:{name:'pets',color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

onPressRightIcon:{
component:_ListItem2.default,
props:{
title:'Title',
rightIcon:{name:'pets',color:'#071'},
onPressRightIcon:function onPressRightIcon(){
console.log('rightIcon pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

switchButton:{
component:_ListItem2.default,
props:{
title:'Title',
hideChevron:true,
switchButton:true,
onSwitch:function onSwitch(){}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { switchedOn: false };',
getJsxString:function getJsxString(attr){
return'<ListItem\n  title={\'Title\'}\n  hideChevron={true}\n  switchButton={true}\n  switched={state.switchedOn}\n  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}\n/>';






}}},


switchDisabled:{
component:_ListItem2.default,
props:{
title:'Title',
hideChevron:true,
switchButton:true,
switchDisabled:true,
onSwitch:function onSwitch(){}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

switchOnTintColor:{
component:_ListItem2.default,
props:{
title:'Title',
hideChevron:true,
switchButton:true,
onSwitch:function onSwitch(){},
switchOnTintColor:'#071'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { switchedOn: false };',
getJsxString:function getJsxString(attr){
return'<ListItem\n  title={\'Title\'}\n  hideChevron={true}\n  switchButton={true}\n  switched={state.switchedOn}\n  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}\n  switchOnTintColor="#071"\n/>';







}}},


switchThumbTintColor:{
component:_ListItem2.default,
props:{
title:'Title',
hideChevron:true,
switchButton:true,
onSwitch:function onSwitch(){},
switchThumbTintColor:'#071'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { switchedOn: false };',
getJsxString:function getJsxString(attr){
return'<ListItem\n  title={\'Title\'}\n  hideChevron={true}\n  switchButton={true}\n  switched={state.switchedOn}\n  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}\n  switchThumbTintColor="#071"\n  />';







}}},


switchTintColor:{
component:_ListItem2.default,
props:{
title:'Title',
hideChevron:true,
switchButton:true,
onSwitch:function onSwitch(){},
switchTintColor:'#071'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{
script:'initialState = { switchedOn: false };',
getJsxString:function getJsxString(attr){
return'<ListItem\n  title={\'Title\'}\n  hideChevron={true}\n  switchButton={true}\n  switched={state.switchedOn}\n  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}\n  switchTintColor="#071"\n  />';







}}},


textInput:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputAutoCapitalize:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputAutoCapitalize:'characters'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputAutoCorrect:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputAutoCorrect:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},













'textInputEditable & textInputValue':{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputEditable:false,
textInputValue:'example text'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputKeyboardType:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputKeyboardType:'numeric'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputMaxLength:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputMaxLength:7},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputMultiline:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputMultiline:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputOnChangeText:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputOnChangeText:function textInputOnChangeText(text){
console.log(text);
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputOnFocus:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputOnFocus:function textInputOnFocus(){
console.log('ListItem: textInputOnFocus');
}},

enzyme:{
tests:{
shallow:{snapshot:(0,_samples.snapShot)()}}},


styleguidist:{}},

textInputSecure:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputSecure:true,
textInputOnChangeText:function textInputOnChangeText(text){
console.log(text);
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputStyle:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputStyle:{color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputContainerStyle:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputContainerStyle:{borderWidth:5}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputPlaceholder:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputPlaceholder:'placeholder'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputOnBlur:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputOnBlur:function textInputOnBlur(){
console.log('ListItem: textInputOnBlur');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputSelectTextOnFocus:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputValue:'selectable text',
textInputSelectTextOnFocus:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

textInputReturnKeyType:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputValue:'selectable text',
textInputReturnKeyType:'go'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

disabled:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputValue:'selectable text',
disabled:true,
leftIcon:{name:'pets',color:'#071'},
leftIconOnPress:function leftIconOnPress(){
console.log('leftIcon pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

disabledStyle:{
component:_ListItem2.default,
props:{
title:'Title',
textInput:true,
textInputValue:'selectable text',
disabled:true,
disabledStyle:{borderWidth:5},
leftIcon:{name:'pets',color:'#071'},
leftIconOnPress:function leftIconOnPress(){
console.log('leftIcon pressed');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

badge:{
component:_ListItem2.default,
props:{
title:'Title',
badge:{
value:'7',
containerStyle:{borderWidth:2,borderColor:'#4b5'},
textStyle:{color:'#4b5'}}},


enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Lists:{sectionComponents:{ListItem:{samples:samples}}}},_samples2.default);




describe('ListItem component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_ListItem2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with avatar',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
avatar:'avatar_uri',
containerStyle:{backgroundColor:'peru'},
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with left icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
leftIcon:{
name:'wifi',
type:'font-awesome',
color:'red',
size:20},

wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with left icon component',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
leftIcon:_react2.default.createElement(_reactNative.Text,null,'I\'m left icon'),
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with right icon component',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
rightIcon:_react2.default.createElement(_reactNative.Text,null,'I\'m right icon'),
wrapperStyle:{backgroundColor:'peru'}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with title and subtitle',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{
title:'title test',
subtitle:'title test',
rightTitle:'title',
wrapperStyle:{backgroundColor:'peru'},
titleStyle:{backgroundColor:'peru'},
subtitleStyle:{backgroundColor:'peru'},
fontFamily:'arial'}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with textInput',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_ListItem2.default,{textInput:true,hideChevron:true,switchButton:true,fontFamily:'arial'}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=ListItem.web.test.js.map