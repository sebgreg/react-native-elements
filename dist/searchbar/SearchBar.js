Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\searchbar\\SearchBar.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _SearchBarIos=require('./SearchBar-ios');var _SearchBarIos2=_interopRequireDefault(_SearchBarIos);
var _SearchBarAndroid=require('./SearchBar-android');var _SearchBarAndroid2=_interopRequireDefault(_SearchBarAndroid);
var _SearchBarDefault=require('./SearchBar-default');var _SearchBarDefault2=_interopRequireDefault(_SearchBarDefault);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SEARCHBAR_COMPONENTS={
ios:_SearchBarIos2.default,
android:_SearchBarAndroid2.default,
default:_SearchBarDefault2.default};var


SearchBar=function(_Component){_inherits(SearchBar,_Component);function SearchBar(){_classCallCheck(this,SearchBar);return _possibleConstructorReturn(this,(SearchBar.__proto__||Object.getPrototypeOf(SearchBar)).apply(this,arguments));}_createClass(SearchBar,[{key:'render',value:function render()

{
var SearchBar=SEARCHBAR_COMPONENTS[this.props.platform]||_SearchBarDefault2.default;
return _react2.default.createElement(SearchBar,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:17}}));
}}]);return SearchBar;}(_react.Component);


SearchBar.propTypes={
platform:_propTypes2.default.oneOf(['default','ios','android'])};


SearchBar.defaultProps={
platform:'default'};exports.default=



SearchBar;
//# sourceMappingURL=SearchBar.js.map