var SiteJS = typeof SiteJS === "object" ? SiteJS : {}; SiteJS["app"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/app.js":
/*!**********************************!*\
  !*** ./assets/javascript/app.js ***!
  \**********************************/
/*! exports provided: Exports, Cookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cookies\", function() { return Cookies; });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports */ \"./assets/javascript/exports.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Exports\", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__[\"Exports\"]; });\n\n\n // pass-through for Cookies API\n\nvar Cookies = {\n  get: js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"get\"],\n  set: js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"set\"]\n};\n\n//# sourceURL=webpack://SiteJS.%5Bname%5D/./assets/javascript/app.js?");

/***/ }),

/***/ "./assets/javascript/exports.js":
/*!**************************************!*\
  !*** ./assets/javascript/exports.js ***!
  \**************************************/
/*! exports provided: Exports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exports\", function() { return Exports; });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar addLogStubToTable = function addLogStubToTable() {\n  // ht: https://stackoverflow.com/a/18333693/8207\n  var exportRunTable = document.getElementById('export-run-table').getElementsByTagName('tbody')[0];\n  var recordRow = exportRunTable.insertRow(0); // Populate the cell with initial data\n\n  recordRow.insertCell(0).appendChild(document.createTextNode('Now'));\n  recordRow.insertCell(1).appendChild(document.createTextNode('TBD'));\n  recordRow.insertCell(2).appendChild(document.createTextNode('started'));\n  recordRow.insertCell(3).appendChild(document.createTextNode('waiting for log...'));\n  return recordRow;\n};\n\nvar setupLogTriggers = function setupLogTriggers() {\n  var releaseNotesTriggers = document.getElementsByClassName('log-trigger');\n\n  for (var i = 0; i < releaseNotesTriggers.length; i++) {\n    releaseNotesTriggers[i].addEventListener(\"click\", function (event) {\n      var trigger = event.target.closest('a');\n      var selectorId = 'export-log-' + trigger.dataset.exportRunId;\n      var notes = document.getElementById(selectorId);\n      var icon = trigger.querySelector(\".fa\");\n\n      if (trigger.dataset.openStatus === 'closed') {\n        notes.style.display = '';\n        trigger.dataset.openStatus = 'open';\n        icon.classList.remove('fa-chevron-down');\n        icon.classList.add('fa-chevron-up');\n      } else {\n        notes.style.display = 'none';\n        trigger.dataset.openStatus = 'closed';\n        icon.classList.remove('fa-chevron-up');\n        icon.classList.add('fa-chevron-down');\n      }\n    });\n  }\n};\n\nvar initializeExportRunButton = function initializeExportRunButton(apiUrl, progressUrl) {\n  var runExportButton = document.getElementById('run-export-button');\n  runExportButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    runExportButton.classList.add('is-loading', 'is-disabled');\n    var progressWrapper = document.getElementById('export-status-progress');\n    progressWrapper.style.display = 'inherit';\n    var progressBar = document.getElementById('progress-bar');\n    var progressMessage = document.getElementById('progress-bar-message');\n    fetch(apiUrl, {\n      method: 'post',\n      credentials: 'same-origin',\n      headers: {\n        'X-CSRFToken': js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('csrftoken')\n      }\n    }).then(function (response) {\n      return response.text();\n    }).then(function (text) {\n      var taskUrl = progressUrl.replace('task-id-stub', text);\n      var recordRow = Exports.addLogStubToTable();\n\n      if (typeof CeleryProgressBar === 'undefined') {\n        var errorMessage = 'CeleryProgressBar class missing. Did you forget to import celery_progress.js?';\n        console.error(errorMessage);\n        progressBar.classList.add('is-danger');\n        progressBar.setAttribute('value', '100');\n        progressMessage.innerText = errorMessage;\n        return;\n      }\n\n      CeleryProgressBar.initProgressBar(taskUrl, {\n        onProgress: function onProgress() {\n          progressMessage.innerHTML = 'Running Export...';\n        },\n        onSuccess: function onSuccess() {\n          progressBar.setAttribute('value', '100');\n          progressMessage.innerHTML = 'Complete!';\n        },\n        onResult: function onResult(resultElement, result) {\n          recordRow.cells[1].innerText = result.duration;\n          recordRow.cells[2].innerText = result.status;\n\n          if (result.status === \"completed\") {\n            progressBar.classList.add('is-success');\n          } else if (result.status === \"failed\") {\n            progressBar.classList.add('is-danger');\n            progressBar.setAttribute('value', '100');\n            progressMessage.innerText = 'Failed!';\n          }\n\n          recordRow.cells[3].innerHTML = '<a onclick=location.reload()>Refresh for log</a>';\n          runExportButton.classList.remove('is-loading', 'is-disabled');\n        }\n      });\n    })[\"catch\"](function (error) {\n      console.error('Request failed', error);\n    });\n  }, false);\n};\n\nvar Exports = {\n  setupLogTriggers: setupLogTriggers,\n  addLogStubToTable: addLogStubToTable,\n  initializeExportRunButton: initializeExportRunButton\n};\n\n//# sourceURL=webpack://SiteJS.%5Bname%5D/./assets/javascript/exports.js?");

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.1\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction decode (s) {\n\t\treturn s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api() {}\n\n\t\tfunction set (key, value, attributes) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tattributes = extend({\n\t\t\t\tpath: '/'\n\t\t\t}, api.defaults, attributes);\n\n\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\tattributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);\n\t\t\t}\n\n\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\ttry {\n\t\t\t\tvar result = JSON.stringify(value);\n\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\tvalue = result;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\n\t\t\tvalue = converter.write ?\n\t\t\t\tconverter.write(value, key) :\n\t\t\t\tencodeURIComponent(String(value))\n\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\n\t\t\tkey = encodeURIComponent(String(key))\n\t\t\t\t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)\n\t\t\t\t.replace(/[\\(\\)]/g, escape);\n\n\t\t\tvar stringifiedAttributes = '';\n\t\t\tfor (var attributeName in attributes) {\n\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Considers RFC 6265 section 5.2:\n\t\t\t\t// ...\n\t\t\t\t// 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n\t\t\t\t//     character:\n\t\t\t\t// Consume the characters of the unparsed-attributes up to,\n\t\t\t\t// not including, the first %x3B (\";\") character.\n\t\t\t\t// ...\n\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n\t\t\t}\n\n\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t}\n\n\t\tfunction get (key, json) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar jar = {};\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all.\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = decode(parts[0]);\n\t\t\t\t\tcookie = (converter.read || converter)(cookie, name) ||\n\t\t\t\t\t\tdecode(cookie);\n\n\t\t\t\t\tif (json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tjar[name] = cookie;\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn key ? jar[key] : jar;\n\t\t}\n\n\t\tapi.set = set;\n\t\tapi.get = function (key) {\n\t\t\treturn get(key, false /* read as raw */);\n\t\t};\n\t\tapi.getJSON = function (key) {\n\t\t\treturn get(key, true /* read as json */);\n\t\t};\n\t\tapi.remove = function (key, attributes) {\n\t\t\tset(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.defaults = {};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack://SiteJS.%5Bname%5D/./node_modules/js-cookie/src/js.cookie.js?");

/***/ })

/******/ });