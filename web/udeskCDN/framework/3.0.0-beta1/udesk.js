/******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.js
	 * Version 3.0.0-beta1.1
	 * Date 2016-04-06
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.js
	 *
	 * Usage:
	 *   udesk.someMethod();
	 *
	 * Copyright Agriculture Bank of China.
	 */

	//var module = {}, window = this, document = this.document;
	// 框架环境管理模块
	;(function(root, factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return (root.udesk = factory(jQuery, window, document));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    root.udesk = factory(root.jQuery, window, document);
	  }
	}(this, function($, window, document, undefined) {
	  'use strict';
	  if (!$) return {};

	  var udesk = window.udesk = window.udesk || {},
	    _defaults = {

	    };

	  // IE8未定义console
	  window.console = window.console || (function() {
	    var c = {};
	    c.log = c.warn = c.debug.c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {};
	    return c;
	  });

	  /**
	   * 判断某一jquery元素是否存在
	   * @method _isExist
	   * @param  {String} selector jquery选择器字符串
	   * @return {Boolean} 判断该元素是否存在
	   */ 
	  function _isExist(selector) {
	    return $(selector).length > 0;
	  }

	  /**
	   * 检查浏览器功能支持
	   * @method _checkBrowserSupport
	   * @param  {Object} $ jquery对象
	   * @param  {Object} window window对象
	   * @return {Boolean} 判断当前环境是否支持所需功能
	   */
	  function _checkBrowserSupport($, window) {
	    if (!$.support.opacity) {
	      _log('当前浏览器版本过旧，为保证浏览效果，建议使用IE9及以上浏览器。');
	      return false;
	    }
	    if (!window.localStorage) {
	      _log('当前浏览器不支持HTML5 Web存储功能。');
	      return false;
	    }
	    return true;
	  }; // end of _checkBrowserSupport

	  /**
	   * 设置环境参数
	   * @method _envManager
	   * @param  {Object} options 选项对象
	   * @return {Boolean} 判断环境设置是否成功
	   */
	  var _envManager = function(options) {
	    // TODO
	    _log(options);
	    _checkBrowserSupport();
	    return true;
	  }; // end of _envManager

	  // UDesk public properties and methods
	  return $.extend(true, udesk, {
	    'defaults': _defaults,
	    'envManager': function(options) {
	      _envManager(options);
	      return this;
	    },
	    'checkBroserSupport': function() {
	      return _checkBrowserSupport();

	    }

	  });

	}));


	// 框架通用功能模块
	;(function(root, factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return (root.udesk = factory(jQuery, window, document));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    root.udesk = factory(root.jQuery, window, document);
	  }
	}(this, function($, window, document, undefined) {
	  'use strict';
	  if(!$) return {};

	  var udesk = window.udesk = window.udesk || {},
	    _defaults = {
	      root: 'http://dev.udesk.abc:9080/framework/3.0.0-beta1/',
	      templates: {
	        options: {
	          evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
	          interpolate: /\{\{=([\s\S]+?)\}\}/g,
	          encode: /\{\{!([\s\S]+?)\}\}/g,
	          use: /\{\{#([\s\S]+?)\}\}/g,
	          useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
	          define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
	          defineParams: /^\s*([\w$]+):([\s\S]+)/,
	          conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
	          iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
	          varname: "it",
	          strip: true,
	          append: true,
	          selfcontained: false,
	          doNotSkipEncoded: false
	        } // end of options
	      }, // end of templates

	      notice: {
	        target: '<div class="notice-handler" style="display:none;"></div>',
	        displayZone: '<div class="notice-display-zone"></div>',
	        name: 'Notification',
	        position: {
	          pinned: true,
	          top: 30,
	          right: 30
	        },
	        stacking: 'down',
	        hideOnClick: true,
	        button: true,
	        allowHideAfter: 0,
	        autoHideAfter: 0,
	//        appendTo: null,
	        width: null,
	        height: null,
	        // 通知框模板
	        templates: [{
	          type: 'success',
	          template: '<div class="udesk-notice"><div class="notice-image"/><div><h4><b>成功</b></h4>'
	            + '#if(message){#<p>#=message#</p>#}#'
	            + '#if(detail){#<p>#=detail#<a><i class="fa fa-plus"></i></a></p>#}#</div>'
	        }, {
	          type: 'warning',
	          template: '<div class="udesk-notice"><div class="notice-image"/><div><h4><b>警告</b></h4>'
	            + '#if(message){#<p>#=message#</p>#}#'
	            + '#if(detail){#<p>#=detail#<a><i class="fa fa-plus"></i></a></p>#}#</div>'
	        }, {
	          type: 'error',
	          template: '<div class="udesk-notice"><div class="notice-image"/><div><h4><b>失败</b></h4>'
	            + '#if(message){#<p>#=message#</p>#}#'
	            + '#if(detail){#<p>#=detail#<a><i class="fa fa-plus"></i></a></p>#}#</div>'
	        }, {
	          type: 'info',
	          template: '<div class="udesk-notice"><div class="notice-image"/><div><h4><b>通知</b></h4>'
	            + '#if(message){#<p>#=message#</p>#}#'
	            + '#if(detail){#<p>#=detail#<a><i class="fa fa-plus"></i></a></p>#}#</div>'
	        }], // end of template
	        // 展示动画效果
	        animation: {
	          open: {
	            effects: 'fade:in',
	            duration: 300
	          }, // end of open
	          close: {
	            effects: 'fade:out',
	            duration: 600,
	            hide: true
	          } // end of close
	        }, // end of animation
	        // 绑定通知框显示和消失事件
	        onShow: function(e) {}, // e.element为notice框集合
	        onHide: function(e) {} // e.element为notice框集合
	      },

	      // ajax默认配置
	      ajax: {
	//        method: 'GET', // HTTP请求方法
	//        type: 'GET',// jquery 1.9.0之前的版本需使用type
	        url: undefined,
	        data: undefined,
	//        dataType: 'json',
	//        async: true,
	//        cache: false,
	//        crossDomain: false,
	//        global: true,
	        headers: {},
	        beforeSend: function(jqXHR, settings) {},
	        complete: function(jqXHR, textStatus) {},
	        error: function(jqXHR, textStatus, errorThrown) {},
	        success: function(res, textStatus, jqXHR) {},
	        statusCode: {},
	        timeout: {},
	        showDefaultNotice: false,
	        defaultNotice: {
	          success: true,
	          message: '操作成功！',
	          detail: null
	        }
	      }, // end of ajax
	      // 业务性ajax返回成功时框架展示方法
	      ajaxSuccessDisplay: function(res, textStatus, jqXHR) {
	        udesk.showNotice({
	          message: res.message,
	          detail: res.detail
	        }, 'success');

	      }, // end of ajaxSuccessDisplay
	      // 业务性ajax返回失败时框架展示方法
	      ajaxErrorDisplay: function(jqXHR, textStatus, errorThrown, res) {
	        if(res) {
	          udesk.showNotice({
	            message: res.message,
	            detail: res.detail
	          }, 'error');
	        } else {
	          udesk.showNotice({
	            message: jqXHR.status + ' ' + jqXHR.statusText,
	            detail: textStatus
	          }, 'error');
	        }

	      } // end of ajaxErrorDisplay
	    };

	  /**
	   * 判断某一jquery元素是否存在
	   * @method _isExist
	   * @param  {String} selector jquery选择器字符串
	   * @return {Boolean} 判断该元素是否存在
	   */  
	  function _isExist(selector) {
	    return $(selector).length > 0;
	  };

	  /**
	   * 输出框架日志正常信息
	   * @method _log
	   * @param  {String} msg 日志信息
	   * @param  {String} dst 输出日志文件路径 
	   * @return {[type]}
	   */
	  function _log(msg, dst) {
	    console.log('UDesk log: ' + msg);
	  }; // end of _log

	  /**
	   * 输出框架日志警告信息
	   * @method _warn
	   * @param  {String} msg 日志信息
	   * @param  {String} dst 输出日志文件路径
	   * @return {[type]}
	   */
	   function _warn(msg, dst) {
	    console.warn('UDesk warn: ' + msg);
	  }; // end of _warn

	  /**
	   * 输出框架日志错误信息
	   * @method _error
	   * @param  {String} msg 日志信息
	   * @param  {String} dst 输出日志文件路径
	   * @return {[type]}
	   */
	  function _error(msg, dst) {
	    console.error('UDesk error: ' + msg);
	  }; //end of _error

	  /**
	   * [_encodeHTMLSource description]
	   * @method _encodeHTMLSource
	   * @param  {Boolean} doNotSkipEncoded
	   * @return {String}
	   */
	  function _encodeHTMLSource(doNotSkipEncoded) {
	    var encodeHTMLRules = {
	        "&": "&#38;",
	        "<": "&#60;",
	        ">": "&#62;",
	        '"': "&#34;",
	        "'": "&#39;",
	        "/": "&#47;"
	      },
	      matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
	    return function(code) {
	      return code ? code.toString().replace(matchHTML, function(m) {
	        return encodeHTMLRules[m] || m;
	      }) : "";
	    };
	  }; // end of _encodeHTMLSource

	  var _globals = (function() {
	    return this || (0, eval)("this");
	  }());

	  var startend = {
	      append: {
	        start: "'+(",
	        end: ")+'",
	        startencode: "'+encodeHTML("
	      },
	      split: {
	        start: "';out+=(",
	        end: ");out+='",
	        startencode: "';out+=encodeHTML("
	      }
	    },
	    skip = /$^/;

	 /**
	  * [_resolveDefs description]
	  * @method _resolveDefs
	  * @param  {[type]} c
	  * @param  {[type]} block
	  * @param  {[type]} def
	  * @return {[type]}
	  */
	  var _resolveDefs = function(c, block, def) {
	    return ((typeof block === "string") ? block : block.toString())
	    .replace(c.define || skip, function(m, code, assign, value) {
	      if (code.indexOf("def.") === 0) {
	        code = code.substring(4);
	      }
	      if (!(code in def)) {
	        if (assign === ":") {
	          if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
	            def[code] = {arg: param, text: v};
	          });
	          if (!(code in def)) def[code]= value;
	        } else {
	          new Function("def", "def['"+code+"']=" + value)(def);
	        }
	      }
	      return "";
	    })
	    .replace(c.use || skip, function(m, code) {
	      if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
	        if (def[d] && def[d].arg && param) {
	          var rw = (d+":"+param).replace(/'|\\/g, "_");
	          def.__exp = def.__exp || {};
	          def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
	          return s + "def.__exp['"+rw+"']";
	        }
	      });
	      var v = new Function("def", "return " + code)(def);
	      return v ? _resolveDefs(c, v, def) : v;
	    });
	  } // end of _resolveDefs

	  /**
	   * [_unescape description]
	   * @method _unescape
	   * @param  {String} code
	   * @return {String}
	   */
	  var _unescape = function(code) {
	    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
	  }; // end of _unescape

	  /**
	   * [_template description]
	   * @method _template
	   * @param  {String} tmpl
	   * @param  {[type]} c
	   * @param  {Object} def
	   * @return {Function}
	   */
	  var _template = function(tmpl, c, def) {
	    var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
	      str  = (c.use || c.define) ? _resolveDefs(c, tmpl, def || {}) : tmpl;

	    str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
	          .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
	      .replace(/'|\\/g, "\\$&")
	      .replace(c.interpolate || skip, function(m, code) {
	        return cse.start + _unescape(code) + cse.end;
	      })
	      .replace(c.encode || skip, function(m, code) {
	        needhtmlencode = true;
	        return cse.startencode + _unescape(code) + cse.end;
	      })
	      .replace(c.conditional || skip, function(m, elsecase, code) {
	        return elsecase ?
	          (code ? "';}else if(" + _unescape(code) + "){out+='" : "';}else{out+='") :
	          (code ? "';if(" + _unescape(code) + "){out+='" : "';}out+='");
	      })
	      .replace(c.iterate || skip, function(m, iterate, vname, iname) {
	        if (!iterate) return "';} } out+='";
	        sid+=1; indv=iname || "i"+sid; iterate=_unescape(iterate);
	        return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
	          +vname+"=arr"+sid+"["+indv+"+=1];out+='";
	      })
	      .replace(c.evaluate || skip, function(m, code) {
	        return "';" + _unescape(code) + "out+='";
	      })
	      + "';return out;")
	      .replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
	      .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
	      //.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

	    if (needhtmlencode) {
	      if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = _encodeHTMLSource(c.doNotSkipEncoded);
	      str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
	        + _encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
	        + str;
	    }
	    try {
	      return new Function(c.varname, str);
	    } catch (e) {
	      _log("Could not create a template function: " + str);
	      throw e;
	    }
	  }; // end of _template

	  /**
	   * 在node上编译模板函数
	   * @method _compile
	   * @param  {Function} tmpl 模板函数
	   * @param  {Object} def 数据对象
	   * @return {String} 填充结果
	   */
	  var _compile = function(tmpl, def) {
	    return _template(tmpl, null, def);
	  }; // end of _complie

	  /**
	   * 获取指定Cookie的键值
	   * @method _getCookie
	   * @param  {String} name Cookie键名
	   * @return {String} 键值
	   */
	  function _getCookie(name) {
	    var cookieVal = "";
	    var cookieArr = document.cookie.split(";");
	    for (var i = 0; i < cookieArr.length; i++) {
	      if (-1 != cookieArr[i].indexOf(name + "=")) {
	        var temp = cookieArr[i].trim();
	        cookieVal = temp.substring(name.length + 1, temp.length);
	        break;
	      } //end of if
	    };
	    return cookieVal;
	  }; //end of _getCookie

	  /**
	   * 在数组中查找指定值
	   * @method _findInArray
	   * @param  {Array}          array  待查找数组
	   * @param  {Object||String} valObj 待查找对象
	   * @param  {[type]}         val    待查找值（可选）
	   * @return {boolean}               如果存在，返回true，否则返回false
	   */
	  function _findInArray(array,valObj,val) {
	    var hasOne = false;
	    if(val){
	      for(var i in array){
	        if(array[i][val] == valObj[val]){
	          hasOne = true;
	          break;
	        }//end of if
	      }//end of for
	    }else{
	      for(var i in array){
	        if(array[i] == valObj){
	          hasOne = true;
	          break;
	        }//end of if
	      }//end of for
	    }//end of if
	    return hasOne;
	  };// _end of findInArray

	  /**
	   * 在数组中删除指定值
	   * @method _removeInArray
	   * @param  {Array} array 待查找数组
	   * @param  {Object||String} valObj 待查找对象
	   * @param  {[type]} val 待查找值（可选）
	   * @return {[type]}
	   */
	  function _removeInArray(array, valObj, val) {
	    var newArray = [];
	    if (val) {
	      for (var i in array) {
	        if (array[i][val] == valObj[val]) {

	        } else {
	          newArray.push(array[i]);
	        } //end of if
	      } //end of for
	    } else {
	      for (var i in array) {
	        if (array[i] == valObj) {} else {
	          newArray.push(array[i]);
	        } //end of if
	      } //end of for
	    } //end of if

	    return newArray;
	  }; // end of _removeInArray

	  /**
	   * 反跳动函数,防止执行多次
	   * @method _debounce
	   * @param  {Integer} delay 延迟时长
	   * @param  {Function} callback 回调函数
	   * @param  {Object} debounce_mode 选项
	   * @return {Function}
	   */
	  function _debounce(delay, callback, debounce_mode) {
	    var timeout_id, last_exec = 0;

	    function wrapper() {
	      var that = this,
	        elapsed = +new Date() - last_exec,
	        args = arguments;

	      function exec() {
	        last_exec = +new Date();
	        callback.apply(that, args);
	      } //end of exec

	      function clear() {
	        timeout_id = undefined;
	      } //end of clear

	      if (debounce_mode && !timeout_id) {
	        exec();
	      } //end of if

	      timeout_id && clearTimeout(timeout_id);

	      if (debounce_mode === undefined && elapsed > delay) {
	        exec();
	      } else {
	        timeout_id = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay);
	      } //end of if
	    } //end of wrapper
	    return wrapper;
	  } //end of debounce


	  /**
	   * 获取当前项目根路径地址（主机地址+第一级目录名），以'/'结束
	   * @method _getRootPath
	   * @return {String}
	   */
	  function _getRootPath() {
	    // 获取当前全量地址
	    var currentPath = window.document.location.href;
	    // 获取主机地址后的目录地址，如/test/test.html
	    var docPath = window.document.location.pathname; 
	    var pos = currentPath.indexOf(docPath);
	    // 获取主机地址，如localhost:8080
	    var hostPath = currentPath.substring(0, pos);

	    // 获取第1个'/'与第二个'/'之间的字符串及两个'/'，如/test/
	    var projectName = docPath.substring(0, docPath.substr(1).indexOf('/') + 2);
	    return (hostPath + projectName);
	  }


	  /**
	   * Notice 组件构造函数, initialise everything you need here
	   * @method _notice
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  function _notice($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }

	  //notice组件方法 methods and shared properties
	  $.extend(_notice.prototype, {
	    // Reset constructor
	    constructor: _notice,
	    VERSION: '1.0.0-Beta1',
	    // kendo notification组件对象
	    notice: undefined,

	    /**
	     * 对象初始化方法
	     * @method init
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    init: function() {
	      var options = this.options;
	      var opt = $.extend(true, {}, options, {
	        show: options.onShow,
	        hide: options.onHide,
	        appendTo: $(options.displayZone).appendTo(this.$element)
	      });

	     this.notice = $(options.target).appendTo(this.$element)
	                       .kendoNotification(opt).data('kendoNotification');
	      return this;
	    }, // end of init

	    /**
	     * 展示通知框
	     * @method show
	     * @param  {Object} message 需要展示的消息对象，内含各消息字段
	     * @param  {String} templateCode 指定的模板编号
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    show: function(message, templateCode) {
	      if(!templateCode) {
	        templateCode = 'default';
	      }
	      this.notice.show(message, templateCode);
	      return this;
	    }, // end of show

	    /**
	     * 隐藏所有通知框
	     * @method hideAll
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    hideAll: function() {
	      this.notice.hide();
	      return this;
	    } // end of hideAll

	  }); // end of $.extend



	  // UDesk public properties and methods
	  return $.extend(true, udesk, {
	    'defaults': _defaults,
	    'options': {},
	    'log': function(msg) {
	      _log(msg, this.logOutput);
	      return this;
	    },
	    'warn': function(msg) {
	      _warn(msg, this.logOutput);
	      return this;
	    },
	    'error': function(msg) {
	      _error(msg, this.logOutput)
	      return this;
	    },
	    'template': function(tmpl, c, def) {
	        var opt = $.extend(true, {}, this.defaults.templates.options, c);
	        return _template(tmpl, opt, def);
	      },
	/*    
	    'encodeHTMLSource': _encodeHTMLSource,
	    'compile': _compile,
	 */
	    'getCookie': function(key) {
	      return _getCookie(key);
	    },
	    'findInArray': function(array, valObj, val) {
	      return _findInArray(array, valObj, val);
	    },
	    'removeInArray': function(array, valObj, val) {
	      return _removeInArray(array, valObj, val);
	    },

	    /**
	     * 获取当前项目根路径地址（主机地址+第一级目录名），以'/'结束
	     * @method _getRootPath
	     * @return {String}
	     */
	    'getRootPath': function() {
	      return _getRootPath();
	    }, // end of getRootPath


	    /**
	     * Notice 组件构造函数
	     * @method _notice
	     * @param  {Object} $element jquery对象
	     * @param  {Object} options  用户设置对象
	     * @return {Object}          notice对象实例
	     */
	    'notice': function($element, options) {
	      return new _notice($element, options);
	    },

	    /**
	     * 框架默认ajax方法
	     * @method
	     * @param  {Sting|Object}     url  目标地址，或配置对象
	     * @param  {Object|undefined} opts 可选的配置对象
	     * @return {Object}                udesk全局变量对象
	     */
	    'ajax': function(url, opts) {
	      var _this =this;
	      // 获得默认ajax设置
	      var defaults = this.options.ajax;
	      var _options = {};
	      var _tempUrl;

	      if (typeof url === 'undefined') {
	        console.error('udesk.ajax方法参数错误');
	        return false;
	      } else if ('string' === typeof url) {
	        // 至少传递了1个参数url(默认为相对地址)，opts可有可无
	        _tempUrl = url.match(/(http|ftp|https):+/) ? url : _getRootPath()+url;
	        $.extend(true, _options, defaults, opts, {'url': _tempUrl});
	      } else {
	        _tempUrl = url.url.match(/(http|ftp|https):+/) ? url.url : _getRootPath()+url.url;
	        // 只传递了1个参数，视为对象处理，url.url视为相对地址
	        $.extend(true, _options, defaults, url, {'url': _tempUrl});
	      } //end of if

	      // 保存用户定义的业务success与error的callback
	      var successOpts = (opts && $.isFunction(opts.success)) ? opts.success : function() {};
	      var errorOpts = (opts && $.isFunction(opts.error)) ? opts.error : function() {};

	      // 用_this.options.ajaxSuccessDisplay处理业务success
	      // 用_this.options.ajaxErrorDisplay处理业务error，并执行用户的callback
	      _options.success = function(res, textStatus, jqXHR){
	        switch(res.success) {
	          case true:
	            if(res.message) {
	              // 如果message属性有定义，则调用框架默认成功展示方法
	              _this.options.ajaxSuccessDisplay(res, textStatus, jqXHR);
	            }
	            // 用户定义的成功callback，数据为data字段
	            successOpts(res.data, textStatus, jqXHR);
	            break;
	          case false:
	            // 框架默认失败展示方法
	            _this.options.ajaxErrorDisplay(jqXHR, textStatus, undefined, res);
	            // 用户定义的失败callback
	            errorOpts(jqXHR, textStatus, undefined, res);
	            break;          
	          default:
	            if(_options.showDefaultNotice) {
	              _this.options.ajaxSuccessDisplay(_this.options.ajax.defaultNotice, textStatus, jqXHR);
	            }
	            // 用户定义的成功callback，数据为完整数据
	            successOpts(res, textStatus, jqXHR);
	        } // end of switch

	      }; // end of _options.success
	      
	      // 用_this.options.ajaxErrorDisplay处理技术性error，并执行用户的callback
	      _options.error = function(jqXHR, textStatus, errorThrown) {
	        // 框架默认失败展示方法
	        _this.options.ajaxErrorDisplay(jqXHR, textStatus, errorThrown);
	        // 用户定义的失败callback
	        errorOpts(jqXHR, textStatus, errorThrown);
	      }; // end of _options.error

	      // 调用jquery的ajax
	      $.ajax(_options);
	        
	        return _this;
	      } // end of ajax

	  }); // end of return

	})); // end of function(root, factory)


	// 框架个性设置模块
	;(function(root, factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return (root.udesk = factory(jQuery, window, document));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    root.udesk = factory(root.jQuery, window, document);
	  }
	}(this, function($, window, document, undefined) {
	  'use strict';
	  if(!$) return {};

	  var udesk = window.udesk = window.udesk || {},
	    _defaults = {};

	  /**
	   * 判断某一jquery元素是否存在
	   * @method _isExist
	   * @param  {String}  selector jquery选择器字符串
	   * @return {Boolean}          判断该元素是否存在
	   */  
	  function _isExist(selector) {
	    return $(selector).length > 0;
	  };



	  // UDesk public properties and methods
	  return $.extend(true, udesk, {
	    'defaults': _defaults


	  }); // end of return

	})); // end of function(root, factory)


	// 框架初始配置模块
	;(function(root, factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return (root.udesk = factory(jQuery, window, document));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    root.udesk = factory(root.jQuery, window, document);
	  }
	}(this, function($, window, document, undefined) {
	  'use strict';
	  if(!$) return {};

	  var udesk = window.udesk = window.udesk || {},
	    _version = '0.0.1',
	    _defaults = {
	  //    root: 'http://dev.udesk.abc:9080/framework/3.0.0-beta1/'
	    };

	  /**
	   * 判断某一jquery元素是否存在
	   * @method _isExist
	   * @param  {String}  selector jquery选择器字符串
	   * @return {Boolean}          判断该元素是否存在
	   */  
	  function _isExist(selector) {
	    return $(selector).length > 0;
	  } // end of _isExist

	  /**
	   * 初始化框架消息框API
	   * @method _initNotice
	   * @param  {Object}    udesk udesk对象实例
	   * @return {Object}          udesk对象实例（以支持链式调用）
	   */
	  function _initNotice(udesk) {
	    var options = udesk.options;

	    /**
	     * 输入参数转换
	     * @method _translateMsg
	     * @param  {String|Object} msg message字段内容或消息数据对象
	     * @param  {String}        dtl detail字段内容（可选）
	     * @return {Object}            消息数据对象
	     */
	    function _translateMsg(msg, dtl) {
	      var _message = {message:null, detail:null};
	      if(arguments[1] == undefined) {
	        // 1个参数
	        (typeof arguments[0] == 'object') ? (_message = arguments[0]) : (_message.message = arguments[0] || null);        
	      } else {
	        // 2个参数
	        _message = {
	          message: arguments[0] || null,
	          detail: arguments[1] || null
	        };
	      }

	      return _message;
	    } // end of _translateMsg

	    // 新建一个notice组件实例
	    var nt = udesk.notice($('body'), options.notice);

	    /**
	     * 显示自定义消息框
	     * @method showNotice
	     * @param  {Object}   message      消息数据对象
	     * @param  {String}   templateCode 模板标识符
	     * @return {Object}                udesk对象实例（以支持链式调用）
	     */
	    udesk.showNotice = function(message, templateCode) {
	      var code = templateCode || message.level;
	      nt.show(message, code);
	      return udesk;
	    }; // end of showNotice

	    /**
	     * 隐藏所有通知框
	     * @method hideAllNotice
	     * @return {Object}      udesk对象实例（以支持链式调用）
	     */
	    udesk.hideAllNotice = function() {
	      nt.hideAll();
	      return udesk;
	    }; // end of hideAllNotice

	    /**
	     * 显示成功消息框
	     * @method showSuccess
	     * @param  {String|Object} msg message字段内容或消息数据对象
	     * @param  {String}        dtl detail字段内容（可选）
	     * @return {Object}            udesk对象实例（以支持链式调用）
	     */
	    udesk.showSuccess = function(msg, dtl) {
	      nt.show(_translateMsg(msg, dtl), 'success');
	      return udesk;
	    }; // end of showSuccess

	    /**
	     * 显示错误消息框
	     * @method showError
	     * @param  {String|Object} msg message字段内容或消息数据对象
	     * @param  {String}        dtl detail字段内容（可选）
	     * @return {Object}            udesk对象实例（以支持链式调用）
	     */
	    udesk.showError = function(msg, dtl) {
	      nt.show(_translateMsg(msg, dtl), 'error');
	      return udesk;
	    }; // end of showError

	    /**
	     * 显示警告消息框
	     * @method showWarning
	     * @param  {String|Object} msg message字段内容或消息数据对象
	     * @param  {String}        dtl detail字段内容（可选）
	     * @return {Object}            udesk对象实例（以支持链式调用）
	     */
	    udesk.showWarning = function(msg, dtl) {
	      nt.show(_translateMsg(msg, dtl), 'warning');
	      return udesk;
	    }; // end of showWarning

	    /**
	     * 显示普通消息框
	     * @method showInfo
	     * @param  {String|Object} msg message字段内容或消息数据对象
	     * @param  {String}        dtl detail字段内容（可选）
	     * @return {Object}            udesk对象实例（以支持链式调用）
	     */
	    udesk.showInfo = function(msg, dtl) {
	      nt.show(_translateMsg(msg, dtl), 'info');
	      return udesk;
	    }; // end of showInfo


	    return udesk;
	  } // end of _initNotice

	 /**
	  * 框架初始化函数
	  * @method _init
	  * @param  {Object} udesk udesk对象实例
	  * @return {Object}       udesk对象实例（以支持链式调用）
	  */
	  function _init(udesk) {

	    // 初始化框架消息框API
	    _initNotice(udesk);

	    return udesk;
	  } // end of _init

	  // UDesk public properties and methods
	  return $.extend(true, udesk, {
	    'version': _version,
	    'defaults': _defaults,
	    'options': {},
	    'setDefaults': function(settings) {
	      $.extend(true, this.defaults, settings);
	      return this;
	    },

	    /**
	     * 显示自定义消息框
	     * @method showNotice
	     * @param  {Object}   message      消息数据对象
	     * @param  {String}   templateCode 模板标识符
	     * @return {Object}                udesk对象实例（以支持链式调用）
	     */
	    'showNotice': function(message, templateCode) {},

	    /**
	     * 隐藏所有通知框
	     * @method hideAllNotice
	     * @return {Object}      udesk对象实例（以支持链式调用）
	     */
	    'hideAllNotice': function() {},
	    /**
	     * 显示成功消息框
	     * @method showSuccess
	     * @param  {String|Object} msg message字段内容或消息数据对象
	     * @param  {String}        dtl detail字段内容（可选）
	     * @return {Object}            udesk对象实例（以支持链式调用）
	     */
	    'showSuccess': undefined,
	    'showError': undefined,
	    'showWarning': undefined,
	    'showInfo': undefined,



	    'init': function(options) {
	      this.options = $.extend(true, {}, this.defaults, this.options, options);
	      _init(this);
	      return this;
	    }

	  }); // end of return

	})); // end of function(root, factory)




/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }

/******/ });