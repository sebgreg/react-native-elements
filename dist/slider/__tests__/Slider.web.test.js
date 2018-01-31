var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _enzyme=require('enzyme');
var _enzymeToJson=require('enzyme-to-json');var _enzymeToJson2=_interopRequireDefault(_enzymeToJson);
var _enzymeStyleguidistSampleParser=require('enzyme-styleguidist-sample-parser');var _enzymeStyleguidistSampleParser2=_interopRequireDefault(_enzymeStyleguidistSampleParser);



var _samples=require('../../../samples');var _samples2=_interopRequireDefault(_samples);






var _Slider=require('../Slider');var _Slider2=_interopRequireDefault(_Slider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var getJsxStringToChangeSliderValue=function getJsxStringToChangeSliderValue(attr){
var refId=(0,_enzymeStyleguidistSampleParser.genRefId)();
var execFunc=Function('setState({value: 0.98});');
var buttonTitle='change state.value';

return'<View>\n      <TouchableHighlight\n        onPress={() => { setState({value: 0.98})}}\n        style={{ backgroundColor: \'#aaa\', padding: 10, marginBottom: 15 }}\n      >\n        <Text>change state.value</Text>\n      </TouchableHighlight>\n      {React.createElement(Slider, {\n        animateTransitions: true,\n        animationType: \'spring\',\n        animationConfig: {\n          friction: 10,\n          tension: 11,\n        },\n        ref:(ref) => {'+













refId+' = ref},\n        value:state.value\n      })}\n    </View>';



};

var props={
'no props':{
component:_Slider2.default,
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

value:{
component:_Slider2.default,
props:{value:0.7},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

minimumValue:{
component:_Slider2.default,
props:{value:0.7,minimumValue:0.2},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

maximumValue:{
component:_Slider2.default,
props:{maximumValue:0.7},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

step:{
component:_Slider2.default,
props:{step:0.25},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

minimumTrackTintColor:{
component:_Slider2.default,
props:{minimumTrackTintColor:'#071'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

maximumTrackTintColor:{
component:_Slider2.default,
props:{maximumTrackTintColor:'#071'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

thumbTouchSize:{
component:_Slider2.default,
props:{
thumbTouchSize:{width:100,height:100},
debugTouchArea:true},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onValueChange:{
component:_Slider2.default,
props:{
onValueChange:function onValueChange(value){
console.log(value);
}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onSlidingStart:{
component:_Slider2.default,
props:{
onSlidingStart:function onSlidingStart(){
console.log('slidingStarted');
}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

onSlidingComplete:{
component:_Slider2.default,
props:{
onSlidingComplete:function onSlidingComplete(value){
console.log('slidingComplete: '+value);
}},

enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

style:{
component:_Slider2.default,
props:{style:{borderWidth:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

trackStyle:{
component:_Slider2.default,
props:{trackStyle:{borderWidth:5}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

thumbStyle:{
component:_Slider2.default,
props:{thumbStyle:{width:100,height:100}},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

debugTouchArea:{
component:_Slider2.default,
props:{debugTouchArea:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{}},

animateTransitions:{
component:_Slider2.default,
props:{animateTransitions:true},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\ninitialState = { value: 0.1 };\n\n',
getJsxString:function getJsxString(attr){
var refId=(0,_enzymeStyleguidistSampleParser.genRefId)();
var execFunc=Function('setState({value: 0.98});');
var buttonTitle='change state.value';

return'<View>\n            <TouchableHighlight\n              onPress={() => { setState({value: 0.98})}}\n              style={{ backgroundColor: \'#aaa\', padding: 10, marginBottom: 15 }}\n            >\n              <Text>change state.value</Text>\n            </TouchableHighlight>\n            {React.createElement(Slider, {\n              animateTransitions: true,\n              ref:(ref) => {'+








refId+' = ref},\n              value:state.value\n            })}\n          </View>';



}}},


animationType:{
component:_Slider2.default,
props:{animateTransitions:true,animationType:'spring'},
enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\ninitialState = { value: 0.1 };\n\n',
getJsxString:function getJsxString(attr){
var refId=(0,_enzymeStyleguidistSampleParser.genRefId)();
var execFunc=Function('setState({value: 0.98});');
var buttonTitle='change state.value';

return'<View>\n            <TouchableHighlight\n              onPress={() => { setState({value: 0.98})}}\n              style={{ backgroundColor: \'#aaa\', padding: 10, marginBottom: 15 }}\n            >\n              <Text>change state.value</Text>\n            </TouchableHighlight>\n            {React.createElement(Slider, {\n              animateTransitions: true,\n              animationType: \'spring\',\n              animationConfig: {\n                friction: 10,\n                tension: 11,\n              },\n              ref:(ref) => {'+













refId+' = ref},\n              value:state.value\n            })}\n          </View>';



}}},


animationConfig:{
component:_Slider2.default,
props:{
animateTransitions:true,
animationType:'spring',
animationConfig:{
friction:10,
tension:11}},


enzyme:{
tests:_samples.onlySnapshots},

styleguidist:{
script:'const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\ninitialState = { value: 0.1 };\n\n',
getJsxString:function getJsxString(attr){
var refId=(0,_enzymeStyleguidistSampleParser.genRefId)();
var execFunc=Function('setState({value: 0.98});');
var buttonTitle='change state.value';

return'<View>\n            <TouchableHighlight\n              onPress={() => { setState({value: 0.98})}}\n              style={{ backgroundColor: \'#aaa\', padding: 10, marginBottom: 15 }}\n            >\n              <Text>change state.value</Text>\n            </TouchableHighlight>\n            {React.createElement(Slider, {\n              animateTransitions: true,\n              animationType: \'timing\',\n              animationConfig: {\n                duration: 2000,\n              },\n              ref:(ref) => {'+












refId+' = ref},\n              value:state.value\n            })}\n          </View>';



}}}};




var samples={
props:props};


(0,_enzymeStyleguidistSampleParser2.default)(
{
Input:{sectionComponents:{Slider:{samples:samples}}}},_samples2.default);




describe('Slider component',function(){
it('should render without issues',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Slider2.default,null));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render with ThumbTouchRect',function(){
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Slider2.default,{debugTouchArea:true,minimumValue:0,maximumValue:100}));


expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should render vertically',function(){
var component=(0,_enzyme.shallow)(_react2.default.createElement(_Slider2.default,{orientation:'vertical'}));

expect(component.length).toBe(1);
expect((0,_enzymeToJson2.default)(component)).toMatchSnapshot();
});

it('should call onValueChange',function(){
var customFunction=jest.fn();
var component=(0,_enzyme.shallow)(
_react2.default.createElement(_Slider2.default,{
value:20,
minimumValue:0,
maximumValue:100,
onValueChange:customFunction,
allMeasured:true}));



expect(component.props().value).toBe(20);
component.simulate('ValueChange',30);
expect(customFunction).toHaveBeenCalledTimes(1);
});
});
//# sourceMappingURL=Slider.web.test.js.map