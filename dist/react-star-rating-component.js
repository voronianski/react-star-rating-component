(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactStarRatingComponent", ["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactStarRatingComponent"] = factory(require("react"));
	else
		root["ReactStarRatingComponent"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StarRatingComponent = function (_Component) {
	  _inherits(StarRatingComponent, _Component);

	  function StarRatingComponent(props) {
	    _classCallCheck(this, StarRatingComponent);

	    var _this = _possibleConstructorReturn(this, (StarRatingComponent.__proto__ || Object.getPrototypeOf(StarRatingComponent)).call(this));

	    _this.state = {
	      value: props.value
	    };
	    return _this;
	  }

	  _createClass(StarRatingComponent, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var value = nextProps.value;


	      if (value != null && value !== this.state.value) {
	        this.setState({ value: value });
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(value) {
	      var editing = this.props.editing;


	      if (!editing) {
	        return;
	      }

	      this.setState({ value: value });
	    }
	  }, {
	    key: 'onStarClick',
	    value: function onStarClick(index, value, name) {
	      var _props = this.props,
	          onStarClick = _props.onStarClick,
	          editing = _props.editing;


	      if (!editing) {
	        return;
	      }

	      onStarClick && onStarClick(index, value, name);
	    }
	  }, {
	    key: 'renderStars',
	    value: function renderStars() {
	      var _props2 = this.props,
	          name = _props2.name,
	          starCount = _props2.starCount,
	          starColor = _props2.starColor,
	          emptyStarColor = _props2.emptyStarColor,
	          editing = _props2.editing;
	      var value = this.state.value;

	      var starStyles = function starStyles(i, value) {
	        return {
	          float: 'right',
	          cursor: editing ? 'pointer' : 'default',
	          color: value >= i ? starColor : emptyStarColor
	        };
	      };
	      var radioStyles = {
	        display: 'none',
	        position: 'absolute',
	        marginLeft: -9999
	      };

	      // populate stars
	      var starNodes = [];

	      for (var i = starCount; i > 0; i--) {
	        var id = name + '_' + i;
	        var starNodeInput = _react2.default.createElement('input', {
	          key: 'input_' + id,
	          style: radioStyles,
	          className: 'dv-star-rating-input',
	          type: 'radio',
	          name: name,
	          id: id,
	          value: i,
	          checked: value === i,
	          onChange: this.onChange.bind(this, i, name)
	        });
	        var starNodeLabel = _react2.default.createElement(
	          'label',
	          {
	            key: 'label_' + id,
	            style: starStyles(i, value),
	            className: 'dv-star-rating-star ' + (value >= i ? 'dv-star-rating-full-star' : 'dv-star-rating-empty-star'),
	            htmlFor: id,
	            onClick: this.onStarClick.bind(this, i, value, name)
	          },
	          this.renderIcon(i, value, name)
	        );

	        starNodes.push(starNodeInput);
	        starNodes.push(starNodeLabel);
	      }

	      return starNodes;
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(index, value, name) {
	      var _props3 = this.props,
	          renderStarIcon = _props3.renderStarIcon,
	          renderStarIconHalf = _props3.renderStarIconHalf;


	      if (typeof renderStarIconHalf === 'function' && Math.ceil(value) === index && value % 1 !== 0) {
	        return renderStarIconHalf(index, value, name);
	      }

	      if (typeof renderStarIcon === 'function') {
	        return renderStarIcon(index, value, name);
	      }

	      return _react2.default.createElement(
	        'i',
	        { style: { fontStyle: 'normal' } },
	        '\u2605'
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props,
	          editing = _props4.editing,
	          className = _props4.className;

	      var classes = (0, _classnames2.default)('dv-star-rating', {
	        'dv-star-rating-non-editable': !editing
	      }, className);

	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'inline-block', position: 'relative' }, className: classes },
	        this.renderStars()
	      );
	    }
	  }]);

	  return StarRatingComponent;
	}(_react.Component);

	StarRatingComponent.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  value: _react.PropTypes.number,
	  editing: _react.PropTypes.bool,
	  starCount: _react.PropTypes.number,
	  starColor: _react.PropTypes.string,
	  onStarClick: _react.PropTypes.func,
	  renderStarIcon: _react.PropTypes.func,
	  renderStarIconHalf: _react.PropTypes.func
	};
	StarRatingComponent.defaultProps = {
	  starCount: 5,
	  value: 0,
	  editing: true,
	  starColor: '#ffb400',
	  emptyStarColor: '#333'
	};
	exports.default = StarRatingComponent;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;