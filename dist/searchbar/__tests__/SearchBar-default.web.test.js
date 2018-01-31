var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _SearchBarDefault=require('../SearchBar-default');var _SearchBarDefault2=_interopRequireDefault(_SearchBarDefault);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var props={
'no props':{
component:_SearchBarDefault2.default,
enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

containerStyle:{
component:_SearchBarDefault2.default,
props:{
containerStyle:{borderWidth:5,borderColor:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

inputStyle:{
component:_SearchBarDefault2.default,
props:{
inputStyle:{borderWidth:5,borderColor:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

icon:{
component:_SearchBarDefault2.default,
props:{
icon:{name:'pets',color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

noIcon:{
component:_SearchBarDefault2.default,
props:{
noIcon:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

lightTheme:{
component:_SearchBarDefault2.default,
props:{
lightTheme:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

round:{
component:_SearchBarDefault2.default,
props:{
round:true},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

underlineColorAndroid:{
component:_SearchBarDefault2.default,
props:{
underlineColorAndroid:'#071'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

loadingIcon:{
component:_SearchBarDefault2.default,
props:{
showLoadingIcon:true,
loadingIcon:{color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

placeholder:{
component:_SearchBarDefault2.default,
props:{
placeholder:'placeholder'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

placeholderTextColor:{
component:_SearchBarDefault2.default,
props:{
placeholder:'placeholder',
placeholderTextColor:'#071'},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

onChangeText:{
component:_SearchBarDefault2.default,
props:{
onChangeText:function onChangeText(text){
console.log(text);
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

onClearText:{
component:_SearchBarDefault2.default,
props:{
defaultValue:'text to clear',
clearIcon:{name:'clear'},
onClearText:function onClearText(){
console.log('onClearText');
}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}},

clearIcon:{
component:_SearchBarDefault2.default,
props:{
showLoadingIcon:true,
clearIcon:{name:'clear',color:'#071'}},

enzyme:{
tests:{shallow:{snapshot:(0,_samples.snapShot)()}}},

styleguidist:{}}};



var methods={
focus:{
component:_SearchBarDefault2.default,
props:{defaultValue:'cursor will appear'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
cd:1000,
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:{
tests:{
shallow:{
'ensure called':(0,_samples.ensureCalled)()}}}},




blur:{
component:_SearchBarDefault2.default,
props:{defaultValue:'place cursor here and watch it be removed'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
cd:3000,
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:{
tests:{
shallow:{
'ensure called':(0,_samples.ensureCalled)()}}}},




clearText:{
component:_SearchBarDefault2.default,
props:{defaultValue:'text to clear'},
styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n',
buildJsx:_samples.buildJsxForGuideMethod},

enzyme:{
tests:{
shallow:{
'ensure called':(0,_samples.ensureCalled)()}}}}};





var samples={
props:props,
methods:methods};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Input:{sectionComponents:{SearchBar:{samples:samples}}}},_samples2.default);




describe('Search component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_SearchBarDefault2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with icons',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{
clearIcon:{
name:'3d-rotation',
color:'red'},

showLoadingIcon:true,
loadingIcon:{
style:{flex:1}},

lightTheme:true,
containerStyle:{height:70}}));



expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
it('should call onTextChange when close icon is touched',function(){
var onChangeTextMock=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{textInputRef:'ti',clearIcon:true,onChangeText:onChangeTextMock}));

component.find('Icon[name="close"]').simulate('press');
expect(onChangeTextMock).toBeCalled();
});

it('should render without icon',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_SearchBarDefault2.default,{underlineColorAndroid:'red',noIcon:true,round:true}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});
});
//# sourceMappingURL=SearchBar-default.web.test.js.map