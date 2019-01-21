/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar fullname = function fullname(lastname, firstname) {\n  return lastname + ',' + firstname;\n};\n\nvar formatNumber = function formatNumber(num, separator) {\n  var parts = void 0;\n  if (!isNaN(parseFloat(num)) && isFinite(num)) {\n    num = Number(num);\n    parts = num.toString().split('.');\n    parts[0] = parts[0].toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1' + (separator || ','));\n    return parts.join('.');\n  }\n  return NaN;\n};\n\nvar isTouchDevice = function isTouchDevice() {\n  return 'ontouchstart' in window || navigator.maxTouchPoints;\n};\n\nexports.fullname = fullname;\nexports.formatNumber = formatNumber;\nexports.isTouchDevice = isTouchDevice;\n\n//# sourceURL=webpack:///./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _function = __webpack_require__(/*! ./function.js */ \"./src/function.js\");\n\nvar theFn = _interopRequireWildcard(_function);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// import './test.scss';\n\nvar person = theFn.fullname('Json', 'Wang');\n//console.log(person);\n// import fullname from './fullname';\n// import formatNumber from './format-number';\nvar x = document.createElement('div');\nx.innerHTML = person;\nx.className = \"nameTag\";\ndocument.body.appendChild(x);\n\n// console.log(theFn.formatNumber(867890231));\n\n// var x = document.createElement('span');\n// const k = theFn.formatNumber(867890231);\n// x.innerHTML = k;\n// document.body.appendChild(x);\n\nvar viewWidth = function viewWidth() {\n  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);\n};\n// $(window).on('resize',()=>{\n//   console.log(viewWidth())\n// })\n\n// number add ',' in #num element\nvar numElement = document.querySelector('#num');\nvar j = theFn.formatNumber(numElement.innerHTML);\nnumElement.innerHTML = j;\n\n// #nav menu\nvar triggerFlag = false;\n//avoid click and touchend triggered in the same time on touchable desktop pc\nvar triggerThreshold = 200;\n$('[data-toggle=\"slidedown\"]').off('click');\n$(document).on('click', '.slidedown-title', function (e) {\n  if ($(this).attr('href') == '#') {\n    e.preventDefault();\n  }\n});\n$(document).on('focus', '.slidedown-title', function (e) {\n  var _this = $(this);\n  _this.addClass('slidedown--active');\n  _this.closest('[data-slidedown]').siblings().find('.slidedown-title').removeClass('slidedown--active');\n  $(document).on('blur', '[data-slidedown]:last .slidedown-item:last', function () {\n    _this.removeClass('slidedown--active');\n  });\n});\n//click other element to close on touchable desktop pc\n$(document).on('click', ':not(#nav a)', function () {\n  $('.slidedown--active').removeClass('slidedown--active');\n});\nif (!theFn.isTouchDevice()) {\n  $(document).on('mouseenter', '[data-slidedown]', function (e) {\n    var _this = $(this);\n    // _this.find('.slidedown-title').addClass('slidedown--active');\n    // _this.siblings().find('.slidedown-title').removeClass('slidedown--active');\n    _this.find('.slidedown-title').trigger('focus');\n    _this.on('mouseleave', function (e) {\n      // i dont know why mouseenter trigger focus cant add class slidedown--active\n      _this.find('.slidedown-title').trigger('blur');\n      _this.find('.slidedown--active').removeClass('slidedown--active');\n    });\n  });\n}\n\n$(document).on('click touchend', '.nav-toggle-button', function (e) {\n  e.preventDefault();\n  if (!triggerFlag) {\n    triggerFlag = true;\n    setTimeout(function () {\n      triggerFlag = false;\n    }, triggerThreshold);\n    $('#nav').toggleClass('--active');\n  }\n});\n\nfunction tablePagination(element) {\n  var theTable = $(element);\n  var row = theTable.find('tbody tr');\n  var rowLength = row.length;\n  if (rowLength > 10) {\n    theTable.after('<ul class=\"justify-content-center pagination ' + element.replace(/[\\s\\W]/g, '') + '-pagination\"></ul>');\n    //直接選會選不到\n    var pagination = theTable.next();\n    appendPaginationButton(pagination, rowLength);\n    console.log('test');\n  }\n}\nfunction appendPaginationButton(element, index) {\n  element.append('<li class=\"page-item\"><a class=\"page-link\" href=\"#\" aria-label=\"上一頁\" data-page=\"prev\"><span aria-hidden=\"true\">&laquo;</span></a></li>');\n  for (var i = 1; i <= Math.ceil(index / 10); i++) {\n    element.append('<li class=\"page-item\"><a class=\"page-link\" href=\"#\" data-page=\"' + i + '\">' + i + '</a></li>');\n  }\n  element.append('<li class=\"page-item\"><a class=\"page-link\" href=\"#\" aria-label=\"下一頁\" data-page=\"next\"><span aria-hidden=\"true\">&raquo;</span></a></li>');\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });