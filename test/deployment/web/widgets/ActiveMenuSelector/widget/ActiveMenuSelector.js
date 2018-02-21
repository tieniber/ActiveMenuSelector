define(["dojo/_base/array","dijit/registry","dojo/query","dojo/NodeList-traverse","dojo/_base/lang","dojo/Deferred","dojo/_base/declare","mxui/widget/_WidgetBase","dijit/_TemplatedMixin"], function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony export (immutable) */ __webpack_exports__["b"] = runCallback;
/* unused harmony export getMendixVersion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__);
/*eslint no-invalid-this: 0*/


/**
 * Logs using the Mendix logger
 *
 * @export
 * @param {string} methodName
 * @param {...any} args
 */
function log() {
    var methodName = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.id) {
        logger.debug(this.id + '.' + methodName, args && args.length ? args[0] : '');
    } else {
        logger.debug(methodName, args && args.length ? args[0] : '');
    }
}

/**
 * Runs a callback and logs the method where it comes from
 *
 * @export
 * @param {() => {}} cb
 * @param {string} from
 */
function runCallback(cb, from) {
    log.call(this, '_callback', from ? 'from ' + from : '');
    if (cb && 'function' === typeof cb) {
        cb();
    }
}

var getMendixVersion = function getMendixVersion() {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();

    if (!mx.version) {
        deferred.resolve(null);
    } else {
        try {
            var version = mx.version.split('.');
            var versionObject = {
                major: parseInt(version[0], 10),
                minor: parseInt(version[1], 10),
                path: parseInt(version[2], 10)
            };
            deferred.resolve(versionObject);
        } catch (error) {
            console.warn('getMendixVersion error:', error);
            deferred.resolve(null);
        }
    }

    return deferred.promise;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["a" /* defineWidget */])('ActiveMenuSelector', false, {

    _obj: null,

    constructor: function constructor() {
        this.log = __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["c" /* log */].bind(this);
        this.runCallback = __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["d" /* runCallback */].bind(this);
    },
    postCreate: function postCreate() {
        __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["c" /* log */].call(this, 'postCreate', this._WIDGET_VERSION);
    },
    update: function update(obj, callback) {
        var menu = Object(__WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["b" /* findWidgetByName */])(this.menuWidgetName);
        for (var propertyName in menu._menuItemMap) {
            if (this.targetItemCaption === menu._menuItemMap[propertyName].caption) {
                menu._view.deactivateAll(), menu._currentActive = propertyName; //this is the ID of the menu item
                menu._view.activate(propertyName);

                //see if this menu item is nested in a tree
                var s = propertyName;
                var rx = /[\-]/gi;
                var m = s.match(rx);
                if (m && m.length === 6) {
                    //it is in a tree, get the parent and make sure it's expanded
                    var parentID = s.substr(0, s.lastIndexOf("-"));
                    menu._view.expand(parentID);
                }
            }
        }
        if (callback) {
            callback();
        }
    }
}));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_define_widget__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_microflow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_dom__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers_define_widget__["a"]; });
/* unused harmony reexport getData */
/* unused harmony reexport fetchAttr */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["b"]; });
/* unused harmony reexport getMendixVersion */
/* unused harmony reexport execute */
/* unused harmony reexport executePromise */
/* unused harmony reexport findWidgetByClass */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_dom__["a"]; });
/* unused harmony reexport findElementByName */
/* unused harmony reexport findElement */
/* unused harmony reexport isDescendant */








/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defineWidget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgetBase__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgetBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_widgetBase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin__);




// const { packageName, version, widgetFolder } = config;

/**
 * Defines a widget. Use this when you have multiple sub widgets. For a single widget this might be overkill
 *
 * @export
 * @param {string} id
 * @param {string} template
 * @param {{}}} obj
 * @param {any} base
 * @returns
 */
function defineWidget(id, template, obj, base, configParam) {
    var widgetConfig = {"version":"1.0.0","packageName":"ActiveMenuSelector","widgetFolder":"widget"} || configParam;
    var packageName = void 0;
    var version = void 0;
    var widgetFolder = void 0;

    if ('undefined' !== typeof widgetConfig) {
        packageName = widgetConfig.packageName;
        version = widgetConfig.version;
        widgetFolder = widgetConfig.widgetFolder;
    } else {
        throw new Error('Widget needs a config! Please check your source code!');
    }

    var widgetObj = obj;
    var baseID = packageName + '.' + widgetFolder + '.' + id;

    widgetObj._WIDGET_VERSION = version;
    widgetObj._WIDGET_BASE_ID = baseID;

    var mixins = [];
    if ('undefined' !== typeof base && null !== base) {
        mixins.push(base);
    } else {
        mixins.push(__WEBPACK_IMPORTED_MODULE_1_widgetBase___default.a);
    }

    if (template) {
        mixins.push(__WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin___default.a);
        if ('boolean' !== typeof template) {
            widgetObj.templateString = template;
        }
    }

    return __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare___default()(baseID, mixins, widgetObj);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getData */
/* unused harmony export fetchAttr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_base_lang__);



var getData = function getData(params) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    var getParams = __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default.a.mixin({
        callback: deferred.resolve,
        error: deferred.reject
    }, params);
    try {
        mx.data.get(getParams);
    } catch (e) {
        deferred.reject(e);
    }

    return deferred.promise;
};

var fetchAttr = function fetchAttr(obj, attr) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    try {
        obj.fetch(attr, function (val) {
            return deferred.resolve(val);
        });
    } catch (e) {
        deferred.reject(e);
    }
    return deferred.promise;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export execute */
/* unused harmony export executePromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_base_lang__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_Deferred__);
/*eslint no-invalid-this: 0*/




function execute(microflow, guid, cb, errCb) {
    var _this = this;

    if (microflow) {
        __WEBPACK_IMPORTED_MODULE_1__index__["a" /* log */].call(this, 'execute microflow', 'mf: ' + microflow + ':' + guid);
        var action = {
            params: {
                actionname: microflow,
                applyto: 'selection',
                guids: []
            },
            callback: __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default.a.hitch(this, function (res) {
                if (cb && 'function' == typeof cb) {
                    cb(res);
                }
            }),
            error: __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default.a.hitch(this, function (error) {
                if (errCb && 'function' == typeof errCb) {
                    errCb(error);
                } else {
                    mx.ui.error('Error executing microflow ' + microflow + ' : ' + error.message);
                    console.error(_this.id + '._execMf', error);
                }
            })
        };

        if (guid) {
            action.params.guids = [guid];
        }

        if (!mx.version || mx.version && 7 > parseInt(mx.version.split('.')[0], 10)) {
            action.store = {
                caller: this.mxform
            };
        } else {
            action.origin = this.mxform;
        }

        mx.data.action(action, this);
    }
}

function executePromise(microflow, guid) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred___default.a();

    execute.call(this, microflow, guid, deferred.resolve, deferred.reject);

    return deferred.promise;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findWidgetByClass */
/* harmony export (immutable) */ __webpack_exports__["a"] = findWidgetByName;
/* unused harmony export findElementByName */
/* unused harmony export findElement */
/* unused harmony export isDescendant */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dijit_registry__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dijit_registry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dijit_registry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_base_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_query__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_query__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse__);





function _getClassNameByMxName(elementName) {
    return ('mx-name-' + elementName).trim();
}

function findWidgetByClass(className) {
    var findWidget = __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default.a.filter(__WEBPACK_IMPORTED_MODULE_0_dijit_registry___default.a.toArray(), function (widget) {
        return widget.class && -1 !== widget.class.indexOf(className);
    });
    return 0 === findWidget.length ? null : findWidget[0];
}

function findWidgetByName(widgetName) {
    return findWidgetByClass(_getClassNameByMxName(widgetName));
}

function findElementByName(elementName) {
    return findElement('.' + _getClassNameByMxName(elementName));
}

function findElement(cssSelector, parentNode) {
    var target = 'undefined' !== typeof parentNode ? __WEBPACK_IMPORTED_MODULE_2_dojo_query___default()(cssSelector, parentNode) : __WEBPACK_IMPORTED_MODULE_2_dojo_query___default()(cssSelector);
    return target && 1 === target.length ? target[0] : null;
}

function isDescendant(parentNode, child) {
    var node = child.parentNode;
    while (null !== node) {
        if (node === parentNode) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])});;