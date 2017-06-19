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

	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	module.exports = __webpack_require__(46);


/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.modal.js
	 * Version 3.0.0-Beta1
	 * Date 2016-03-22
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.modal.js
	 *
	 * Usage:
	 *   var instance = $('body').udeskModal({}).data('udeskModal');
	 *   instance.show();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	;(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  // Default settings
	  var _pluginName = 'udeskModal',
	    _version = '3.0.0-Beta1',
	    _defaultOptions = {
	      wrapper: '<div class="udeskModal"></div>',
	      backdrop: true,
	      keyboard: true,
	      show: false,
	      remote: false,
	      // 隐藏后是否自动清除内容
	      emptyOnHidden: true,
	      // 事件回调函数
	      onInit: function(e) {}, // e为组件对象实例
	      onShow: function($e) {}, // $e为$dialog
	      onShown: function($e) {}, // $e为$dialog
	      onHide:  function($e) {}, // $e为$dialog
	      onHidden:  function($e) {}, // $e为$dialog
	      // 通知框模板
	      templates: [{
	        type: 'success',
	        template: '<div class="modal fade success-modal" tabindex="-1" role="dialog" aria-labelledby="udeskModalLabel" aria-hidden="true">'
	          + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
	          + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
	          + '<h4 class="modal-title" id="udeskModalLabel"><b>成功</b></h4></div><div class="modal-body">'
	          + '#if(message){# #=message# #}#'
	          + '#if(detail){# </br><div id="detail" class="collapse out">#= detail #</div> #}# </div>'
	          + '<div class="modal-footer">'
	          + '#if(detail){#  <button type="button" class="btn btn-theme"  data-toggle="collapse" data-target="\\#detail">更多</button> #}#'
	          + '<button type="button" class="btn" data-dismiss="modal">关闭</button></div></div></div></div>'
	      }, {
	        type: 'warn',
	        template: '<div class="modal fade success-modal" tabindex="-1" role="dialog" aria-labelledby="udeskModalLabel" aria-hidden="true">'
	          + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
	          + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
	          + '<h4 class="modal-title" id="udeskModalLabel"><b>警告</b></h4></div><div class="modal-body">'
	          + '#if(message){# #=message# #}#'
	          + '#if(detail){# </br><div id="detail" class="collapse out">#= detail #</div> #}# </div>'
	          + '<div class="modal-footer">'
	          + '#if(detail){#  <button type="button" class="btn btn-theme"  data-toggle="collapse" data-target="\\#detail">更多</button> #}#'
	          + '<button type="button" class="btn" data-dismiss="modal">关闭</button></div></div></div></div>'
	      }, {
	        type: 'error',
	        template: '<div class="modal fade error-modal" tabindex="-1" role="dialog" aria-labelledby="udeskModalLabel" aria-hidden="true">'
	          + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
	          + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
	          + '<h4 class="modal-title" id="udeskModalLabel"><b>错误</b></h4></div><div class="modal-body">'
	          + '#if(message){# #=message# #}#'
	          + '#if(detail){# </br><div id="detail" class="collapse out">#= detail #</div> #}# </div>'
	          + '<div class="modal-footer">'
	          + '#if(detail){#  <button type="button" class="btn btn-theme"  data-toggle="collapse" data-target="\\#detail">更多</button> #}#'
	          + '<button type="button" class="btn" data-dismiss="modal">关闭</button></div></div></div></div>'
	      }, {
	        type: 'default',
	        template: '<div class="modal fade error-modal" tabindex="-1" role="dialog" aria-labelledby="udeskModalLabel" aria-hidden="true">'
	          + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
	          + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
	          + '<h4 class="modal-title" id="udeskModalLabel"><b>通知</b></h4></div><div class="modal-body">'
	          + '#if(message){# #=message# #}#'
	          + '#if(detail){# </br><div id="detail" class="collapse out">#= detail #</div> #}# </div>'
	          + '<div class="modal-footer">'
	          + '#if(detail){#  <button type="button" class="btn btn-theme"  data-toggle="collapse" data-target="\\#detail">更多</button> #}#'
	          + '<button type="button" class="btn" data-dismiss="modal">关闭</button></div></div></div></div>'
	      }], // end of templates

	    }; // end of _defaultOptions

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
	   * 绑定组件事件
	   * @method _bindAction
	   * @param  {Object}    object this组件对象
	   * @return {Object}           this对象
	   */
	  function _bindAction(object) {
	    var _this = object;
	    var $dialog = _this.$dialog;

	    // 在调用show后触发事件
	    $dialog.on('show.bs.modal', function () {
	      
	      if($.isFunction(_this.onShow)){
	        _this.options.onShow($dialog);
	      }
	    }); // end of show.bs.modal

	    // 当模态框对用户可见时触发（css效果结束）
	    $dialog.on('shown.bs.modal', function () {
	      
	      if($.isFunction(_this.onShown)){
	        _this.onShown($dialog);
	      }
	    }); // end of shown.bs.modal

	    // 模态框完全隐藏时事件
	    $dialog.on('hide.bs.modal', function () {
	      
	      if($.isFunction(_this.onHide)){
	        _this.onHide($dialog);
	      }
	    }); // end of hide.bs.modal

	    // 模态框完全隐藏时事件
	    $dialog.on('hidden.bs.modal', function () {
	      if($.isFunction(_this.onHidden)){
	        _this.options.onHidden($dialog);
	      }

	      if(_this.options.emptyOnHidden){
	        // 清空dom元素内容
	        _this.$wrapper.empty();      
	      }
	    }); // end of hidden.bs.modal

	  } // end of _bindAction

	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,
	    // 包裹组件对象的外层dom
	    $wrapper: undefined,
	    // bootstrap modal组件对象
	    $dialog: undefined,

	    /**
	     * 对象初始化方法
	     * @method init
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    init: function() {
	      var options = this.options;
	      this.$wrapper = $(options.wrapper).appendTo(this.$element);

	      if($.isFunction(this.onInit)){
	        this.onInit(this);
	      }

	      return this;
	    }, // end of init

	    /**
	     * 手动打开模态框
	     * @method show
	     * @param  {Object} message      需要展示的消息对象，内含各消息字段
	     * @param  {String} templateCode 指定的模板编号
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    show: function(message, templateType) {
	      var options = this.options;
	      var templates = options.templates;
	      var dialog = undefined;

	      for(var t in templates) {
	        if(templates[t].type == templateType) {
	          dialog = kendo.template(templates[t].template)(message);
	          break;
	        }
	      } // end of for
	      // 如果未找到符合的模板编号，则使用最后一个默认模板
	      if(undefined == dialog) {
	          dialog = kendo.template(templates[templates.length-1].template)(message);
	      }

	      // this.$dialog = $(dialog).appendTo(this.$wrapper);
	      this.$dialog = this.$wrapper.append(dialog).children().last();
	      this.$dialog.modal(options).modal('show');

	      _bindAction(this);

	      return this;
	    }, // end of show

	    /**
	     * 手动隐藏模态框
	     * @method hide
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    hide: function() {
	      if(this.dialog) {
	        this.dialog.modal('hide');
	      }

	      return this;
	    }, // end of hide

	    /**
	     * 手动切换模态框
	     * @return {Object} this对象实例（以支持链式调用）
	     */
	    toggle: function() {
	      if(this.dialog) {
	        this.dialog.modal('toggle');
	      }

	      return this;
	    } // end of toggle

	  }); // end of $.extend

	  // Create the udesk plugin based on Jquery Prototype
	  $.fn[_pluginName] = function(options) {
	    // Do a deep copy of the options    
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);

	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));



/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.notice.js
	 * Version 1.0.0-Beta1
	 * Date 2016-03-22
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.notice.js
	 *
	 * Usage:
	 *   var instance = $('body').udeskNotice({}).data('udeskNotice');
	 *   instance.show();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	;(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  // Default settings
	  var _pluginName = 'udeskNotice',
	    _version = '1.0.0-Beta1',
	    _defaultOptions = {
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
	      appendTo: null,
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
	    };

	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,
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

	  // Create the udesk plugin based on Jquery Prototype
	  $.fn[_pluginName] = function(options) {
	    // Do a deep copy of the options    
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);

	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));



/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* 
	 * udesk.dragbox.js
	 * Version 3.0.0-beta1
	 * Date 2016-03-21
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.dragbox.js
	 *
	 * Usage:
	 *   var instance = $('selector').udeskDragbox().data('dragbox');
	 *   instance.addBox(();
	 *   instance.removeBox();
	 *
	 * Copyright Agriculture Bank of China.
	 */

	/*
	 * GridsterCoords
	 * depends on: jQuery
	 * output: root.GridsterCoords
	 */
	;(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));
	  } else {
	    root.GridsterCoords = factory(root.$ || root.jQuery);
	  }

	}(this, function($) {
	    /**
	    * Creates objects with coordinates (x1, y1, x2, y2, cx, cy, width, height)
	    * to simulate DOM elements on the screen.
	    * Coords is used by Gridster to create a faux grid with any DOM element can
	    * collide.
	    *
	    * @class Coords
	    * @param {HTMLElement|Object} obj The jQuery HTMLElement or a object with: left,
	    * top, width and height properties.
	    * @return {Object} Coords instance.
	    * @constructor
	    */
	    function Coords(obj) {
	        if (obj[0] && $.isPlainObject(obj[0])) {
	            this.data = obj[0];
	        }else {
	            this.el = obj;
	        }

	        this.isCoords = true;
	        this.coords = {};
	        this.init();
	        return this;
	    }


	    var fn = Coords.prototype;


	    fn.init = function(){
	        this.set();
	        this.original_coords = this.get();
	    };


	    fn.set = function(update, not_update_offsets) {
	        var el = this.el;

	        if (el && !update) {
	            this.data = el.offset();
	            this.data.width = el.width();
	            this.data.height = el.height();
	        }

	        if (el && update && !not_update_offsets) {
	            var offset = el.offset();
	            this.data.top = offset.top;
	            this.data.left = offset.left;
	        }

	        var d = this.data;

	        typeof d.left === 'undefined' && (d.left = d.x1);
	        typeof d.top === 'undefined' && (d.top = d.y1);

	        this.coords.x1 = d.left;
	        this.coords.y1 = d.top;
	        this.coords.x2 = d.left + d.width;
	        this.coords.y2 = d.top + d.height;
	        this.coords.cx = d.left + (d.width / 2);
	        this.coords.cy = d.top + (d.height / 2);
	        this.coords.width  = d.width;
	        this.coords.height = d.height;
	        this.coords.el  = el || false ;

	        return this;
	    };


	    fn.update = function(data){
	        if (!data && !this.el) {
	            return this;
	        }

	        if (data) {
	            var new_data = $.extend({}, this.data, data);
	            this.data = new_data;
	            return this.set(true, true);
	        }

	        this.set(true);
	        return this;
	    };


	    fn.get = function(){
	        return this.coords;
	    };

	    fn.destroy = function() {
	        this.el.removeData('coords');
	        delete this.el;
	    };

	    //jQuery adapter
	    $.fn.coords = function() {
	        if (this.data('coords') ) {
	            return this.data('coords');
	        }

	        var ins = new Coords(this, arguments[0]);
	        this.data('coords', ins);
	        return ins;
	    };

	    return Coords;

	}));


	/*
	* GridsterCollision
	* depends on jQuery, GridsterCoords
	* output: root.GridsterCollision
	*/
	;(function(root, factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30), __WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));
	    } else {
	        root.GridsterCollision = factory(root.$ || root.jQuery,
	            root.GridsterCoords);
	    }

	}(this, function($, Coords) {

	    var defaults = {
	        colliders_context: document.body,
	        overlapping_region: 'C'
	        // ,on_overlap: function(collider_data){},
	        // on_overlap_start : function(collider_data){},
	        // on_overlap_stop : function(collider_data){}
	    };


	    /**
	    * Detects collisions between a DOM element against other DOM elements or
	    * Coords objects.
	    *
	    * @class Collision
	    * @uses Coords
	    * @param {HTMLElement} el The jQuery wrapped HTMLElement.
	    * @param {HTMLElement|Array} colliders Can be a jQuery collection
	    *  of HTMLElements or an Array of Coords instances.
	    * @param {Object} [options] An Object with all options you want to
	    *        overwrite:
	    *   @param {String} [options.overlapping_region] Determines when collision
	    *    is valid, depending on the overlapped area. Values can be: 'N', 'S',
	    *    'W', 'E', 'C' or 'all'. Default is 'C'.
	    *   @param {Function} [options.on_overlap_start] Executes a function the first
	    *    time each `collider ` is overlapped.
	    *   @param {Function} [options.on_overlap_stop] Executes a function when a
	    *    `collider` is no longer collided.
	    *   @param {Function} [options.on_overlap] Executes a function when the
	    * mouse is moved during the collision.
	    * @return {Object} Collision instance.
	    * @constructor
	    */
	    function Collision(el, colliders, options) {
	        this.options = $.extend(defaults, options);
	        this.$element = el;
	        this.last_colliders = [];
	        this.last_colliders_coords = [];
	        this.set_colliders(colliders);

	        this.init();
	    }

	    Collision.defaults = defaults;

	    var fn = Collision.prototype;


	    fn.init = function() {
	        this.find_collisions();
	    };


	    fn.overlaps = function(a, b) {
	        var x = false;
	        var y = false;

	        if ((b.x1 >= a.x1 && b.x1 <= a.x2) ||
	            (b.x2 >= a.x1 && b.x2 <= a.x2) ||
	            (a.x1 >= b.x1 && a.x2 <= b.x2)
	        ) { x = true; }

	        if ((b.y1 >= a.y1 && b.y1 <= a.y2) ||
	            (b.y2 >= a.y1 && b.y2 <= a.y2) ||
	            (a.y1 >= b.y1 && a.y2 <= b.y2)
	        ) { y = true; }

	        return (x && y);
	    };


	    fn.detect_overlapping_region = function(a, b){
	        var regionX = '';
	        var regionY = '';

	        if (a.y1 > b.cy && a.y1 < b.y2) { regionX = 'N'; }
	        if (a.y2 > b.y1 && a.y2 < b.cy) { regionX = 'S'; }
	        if (a.x1 > b.cx && a.x1 < b.x2) { regionY = 'W'; }
	        if (a.x2 > b.x1 && a.x2 < b.cx) { regionY = 'E'; }

	        return (regionX + regionY) || 'C';
	    };


	    fn.calculate_overlapped_area_coords = function(a, b){
	        var x1 = Math.max(a.x1, b.x1);
	        var y1 = Math.max(a.y1, b.y1);
	        var x2 = Math.min(a.x2, b.x2);
	        var y2 = Math.min(a.y2, b.y2);

	        return $({
	            left: x1,
	            top: y1,
	             width : (x2 - x1),
	            height: (y2 - y1)
	          }).coords().get();
	    };


	    fn.calculate_overlapped_area = function(coords){
	        return (coords.width * coords.height);
	    };


	    fn.manage_colliders_start_stop = function(new_colliders_coords, start_callback, stop_callback){
	        var last = this.last_colliders_coords;

	        for (var i = 0, il = last.length; i < il; i++) {
	            if ($.inArray(last[i], new_colliders_coords) === -1) {
	                start_callback.call(this, last[i]);
	            }
	        }

	        for (var j = 0, jl = new_colliders_coords.length; j < jl; j++) {
	            if ($.inArray(new_colliders_coords[j], last) === -1) {
	                stop_callback.call(this, new_colliders_coords[j]);
	            }

	        }
	    };


	    fn.find_collisions = function(player_data_coords){
	        var self = this;
	        var overlapping_region = this.options.overlapping_region;
	        var colliders_coords = [];
	        var colliders_data = [];
	        var $colliders = (this.colliders || this.$colliders);
	        var count = $colliders.length;
	        var player_coords = self.$element.coords()
	                             .update(player_data_coords || false).get();

	        while(count--){
	          var $collider = self.$colliders ?
	                           $($colliders[count]) : $colliders[count];
	          var $collider_coords_ins = ($collider.isCoords) ?
	                  $collider : $collider.coords();
	          var collider_coords = $collider_coords_ins.get();
	          var overlaps = self.overlaps(player_coords, collider_coords);

	          if (!overlaps) {
	            continue;
	          }

	          var region = self.detect_overlapping_region(
	              player_coords, collider_coords);

	            //todo: make this an option
	            if (region === overlapping_region || overlapping_region === 'all') {

	                var area_coords = self.calculate_overlapped_area_coords(
	                    player_coords, collider_coords);
	                var area = self.calculate_overlapped_area(area_coords);
	                var collider_data = {
	                    area: area,
	                    area_coords : area_coords,
	                    region: region,
	                    coords: collider_coords,
	                    player_coords: player_coords,
	                    el: $collider
	                };

	                if (self.options.on_overlap) {
	                    self.options.on_overlap.call(this, collider_data);
	                }
	                colliders_coords.push($collider_coords_ins);
	                colliders_data.push(collider_data);
	            }
	        }

	        if (self.options.on_overlap_stop || self.options.on_overlap_start) {
	            this.manage_colliders_start_stop(colliders_coords,
	                self.options.on_overlap_start, self.options.on_overlap_stop);
	        }

	        this.last_colliders_coords = colliders_coords;

	        return colliders_data;
	    };


	    fn.get_closest_colliders = function(player_data_coords){
	        var colliders = this.find_collisions(player_data_coords);

	        colliders.sort(function(a, b) {
	            /* if colliders are being overlapped by the "C" (center) region,
	             * we have to set a lower index in the array to which they are placed
	             * above in the grid. */
	            if (a.region === 'C' && b.region === 'C') {
	                if (a.coords.y1 < b.coords.y1 || a.coords.x1 < b.coords.x1) {
	                    return - 1;
	                }else{
	                    return 1;
	                }
	            }

	            if (a.area < b.area) {
	                return 1;
	            }

	            return 1;
	        });
	        return colliders;
	    };


	    fn.set_colliders = function(colliders) {
	        if (typeof colliders === 'string' || colliders instanceof $) {
	            this.$colliders = $(colliders,
	                 this.options.colliders_context).not(this.$element);
	        }else{
	            this.colliders = $(colliders);
	        }
	    };


	    //jQuery adapter
	    $.fn.collision = function(collider, options) {
	          return new Collision( this, collider, options );
	    };

	    return Collision;

	}));


	/*
	* Delay, debounce and throttle functions
	* depends on :
	* output: window.delay, window.debounce, window.throttle
	*/
	;(function(window, undefined) {

	    /* Delay, debounce and throttle functions taken from underscore.js
	     *
	     * Copyright (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and
	     * Investigative Reporters & Editors
	     *
	     * Permission is hereby granted, free of charge, to any person
	     * obtaining a copy of this software and associated documentation
	     * files (the "Software"), to deal in the Software without
	     * restriction, including without limitation the rights to use,
	     * copy, modify, merge, publish, distribute, sublicense, and/or sell
	     * copies of the Software, and to permit persons to whom the
	     * Software is furnished to do so, subject to the following
	     * conditions:
	     *
	     * The above copyright notice and this permission notice shall be
	     * included in all copies or substantial portions of the Software.
	     *
	     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	     * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	     * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	     * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	     * OTHER DEALINGS IN THE SOFTWARE.
	     */

	    window.delay = function(func, wait) {
	        var args = Array.prototype.slice.call(arguments, 2);
	        return setTimeout(function(){ return func.apply(null, args); }, wait);
	    };

	    window.debounce = function(func, wait, immediate) {
	        var timeout;
	        return function() {
	          var context = this, args = arguments;
	          var later = function() {
	            timeout = null;
	            if (!immediate) func.apply(context, args);
	          };
	          if (immediate && !timeout) func.apply(context, args);
	          clearTimeout(timeout);
	          timeout = setTimeout(later, wait);
	        };
	    };

	    window.throttle = function(func, wait) {
	        var context, args, timeout, throttling, more, result;
	        var whenDone = debounce(
	            function(){ more = throttling = false; }, wait);
	        return function() {
	          context = this; args = arguments;
	          var later = function() {
	            timeout = null;
	            if (more) func.apply(context, args);
	            whenDone();
	          };
	          if (!timeout) timeout = setTimeout(later, wait);
	          if (throttling) {
	            more = true;
	          } else {
	            result = func.apply(context, args);
	          }
	          whenDone();
	          throttling = true;
	          return result;
	        };
	    };

	})(window);


	/*
	* GridsterDraggable
	* depends on : jQuery
	* output: root.GridsterDraggable
	*/
	;(function(root, factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_2__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));
	    } else {
	        root.GridsterDraggable = factory(root.$ || root.jQuery);
	    }

	}(this, function($) {

	    var defaults = {
	        items: 'li',
	        distance: 1,
	        limit: true,
	        offset_left: 0,
	        autoscroll: true,
	        ignore_dragging: ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'], // or function
	        handle: null,
	        container_width: 0,  // 0 == auto
	        move_element: true,
	        helper: false,  // or 'clone'
	        remove_helper: true
	        // drag: function(e) {},
	        // start : function(e, ui) {},
	        // stop : function(e) {}
	    };

	    var $window = $(window);
	    var dir_map = { x : 'left', y : 'top' };
	    var isTouch = !!('ontouchstart' in window);

	    var capitalize = function(str) {
	        return str.charAt(0).toUpperCase() + str.slice(1);
	    };

	    var idCounter = 0;
	    var uniqId = function() {
	        return ++idCounter + '';
	    }

	    /**
	    * Basic drag implementation for DOM elements inside a container.
	    * Provide start/stop/drag callbacks.
	    *
	    * @class Draggable
	    * @param {HTMLElement} el The HTMLelement that contains all the widgets
	    *  to be dragged.
	    * @param {Object} [options] An Object with all options you want to
	    *        overwrite:
	    *    @param {HTMLElement|String} [options.items] Define who will
	    *     be the draggable items. Can be a CSS Selector String or a
	    *     collection of HTMLElements.
	    *    @param {Number} [options.distance] Distance in pixels after mousedown
	    *     the mouse must move before dragging should start.
	    *    @param {Boolean} [options.limit] Constrains dragging to the width of
	    *     the container
	    *    @param {Object|Function} [options.ignore_dragging] Array of node names
	    *      that sould not trigger dragging, by default is `['INPUT', 'TEXTAREA',
	    *      'SELECT', 'BUTTON']`. If a function is used return true to ignore dragging.
	    *    @param {offset_left} [options.offset_left] Offset added to the item
	    *     that is being dragged.
	    *    @param {Number} [options.drag] Executes a callback when the mouse is
	    *     moved during the dragging.
	    *    @param {Number} [options.start] Executes a callback when the drag
	    *     starts.
	    *    @param {Number} [options.stop] Executes a callback when the drag stops.
	    * @return {Object} Returns `el`.
	    * @constructor
	    */
	    function Draggable(el, options) {
	      this.options = $.extend({}, defaults, options);
	      this.$document = $(document);
	      this.$container = $(el);
	      this.$dragitems = $(this.options.items, this.$container);
	      this.is_dragging = false;
	      this.player_min_left = 0 + this.options.offset_left;
	      this.id = uniqId();
	      this.ns = '.gridster-draggable-' + this.id;
	      this.init();
	    }

	    Draggable.defaults = defaults;

	    var fn = Draggable.prototype;

	    fn.init = function() {
	        var pos = this.$container.css('position');
	        this.calculate_dimensions();
	        this.$container.css('position', pos === 'static' ? 'relative' : pos);
	        this.disabled = false;
	        this.events();

	        $(window).bind(this.nsEvent('resize'),
	            throttle($.proxy(this.calculate_dimensions, this), 200));
	    };

	    fn.nsEvent = function(ev) {
	        return (ev || '') + this.ns;
	    };

	    fn.events = function() {
	        this.pointer_events = {
	            start: this.nsEvent('touchstart') + ' ' + this.nsEvent('mousedown'),
	            move: this.nsEvent('touchmove') + ' ' + this.nsEvent('mousemove'),
	            end: this.nsEvent('touchend') + ' ' + this.nsEvent('mouseup'),
	        };

	        this.$container.on(this.nsEvent('selectstart'),
	            $.proxy(this.on_select_start, this));

	        this.$container.on(this.pointer_events.start, this.options.items,
	            $.proxy(this.drag_handler, this));

	        this.$document.on(this.pointer_events.end, $.proxy(function(e) {
	            this.is_dragging = false;
	            if (this.disabled) { return; }
	            this.$document.off(this.pointer_events.move);
	            if (this.drag_start) {
	                this.on_dragstop(e);
	            }
	        }, this));
	    };

	    fn.get_actual_pos = function($el) {
	        var pos = $el.position();
	        return pos;
	    };


	    fn.get_mouse_pos = function(e) {
	        if (e.originalEvent && e.originalEvent.touches) {
	            var oe = e.originalEvent;
	            e = oe.touches.length ? oe.touches[0] : oe.changedTouches[0];
	        }

	        return {
	            left: e.clientX,
	            top: e.clientY
	        };
	    };


	    fn.get_offset = function(e) {
	        e.preventDefault();
	        var mouse_actual_pos = this.get_mouse_pos(e);
	        var diff_x = Math.round(
	            mouse_actual_pos.left - this.mouse_init_pos.left);
	        var diff_y = Math.round(mouse_actual_pos.top - this.mouse_init_pos.top);

	        var left = Math.round(this.el_init_offset.left +
	            diff_x - this.baseX + $(window).scrollLeft() - this.win_offset_x);
	        var top = Math.round(this.el_init_offset.top +
	            diff_y - this.baseY + $(window).scrollTop() - this.win_offset_y);

	        if (this.options.limit) {
	            if (left > this.player_max_left) {
	                left = this.player_max_left;
	            } else if(left < this.player_min_left) {
	                left = this.player_min_left;
	            }
	        }

	        return {
	            position: {
	                left: left,
	                top: top
	            },
	            pointer: {
	                left: mouse_actual_pos.left,
	                top: mouse_actual_pos.top,
	                diff_left: diff_x + ($(window).scrollLeft() - this.win_offset_x),
	                diff_top: diff_y + ($(window).scrollTop() - this.win_offset_y)
	            }
	        };
	    };


	    fn.get_drag_data = function(e) {
	        var offset = this.get_offset(e);
	        offset.$player = this.$player;
	        offset.$helper = this.helper ? this.$helper : this.$player;

	        return offset;
	    };


	    fn.set_limits = function(container_width) {
	        container_width || (container_width = this.$container.width());
	        this.player_max_left = (container_width - this.player_width +
	            - this.options.offset_left);

	        this.options.container_width = container_width;

	        return this;
	    };


	    fn.scroll_in = function(axis, data) {
	        var dir_prop = dir_map[axis];

	        var area_size = 50;
	        var scroll_inc = 30;

	        var is_x = axis === 'x';
	        var window_size = is_x ? this.window_width : this.window_height;
	        var doc_size = is_x ? $(document).width() : $(document).height();
	        var player_size = is_x ? this.$player.width() : this.$player.height();

	        var next_scroll;
	        var scroll_offset = $window['scroll' + capitalize(dir_prop)]();
	        var min_window_pos = scroll_offset;
	        var max_window_pos = min_window_pos + window_size;

	        var mouse_next_zone = max_window_pos - area_size;  // down/right
	        var mouse_prev_zone = min_window_pos + area_size;  // up/left

	        var abs_mouse_pos = min_window_pos + data.pointer[dir_prop];

	        var max_player_pos = (doc_size - window_size + player_size);

	        if (abs_mouse_pos >= mouse_next_zone) {
	            next_scroll = scroll_offset + scroll_inc;
	            if (next_scroll < max_player_pos) {
	                $window['scroll' + capitalize(dir_prop)](next_scroll);
	                this['scroll_offset_' + axis] += scroll_inc;
	            }
	        }

	        if (abs_mouse_pos <= mouse_prev_zone) {
	            next_scroll = scroll_offset - scroll_inc;
	            if (next_scroll > 0) {
	                $window['scroll' + capitalize(dir_prop)](next_scroll);
	                this['scroll_offset_' + axis] -= scroll_inc;
	            }
	        }

	        return this;
	    };


	    fn.manage_scroll = function(data) {
	        this.scroll_in('x', data);
	        this.scroll_in('y', data);
	    };


	    fn.calculate_dimensions = function(e) {
	        this.window_height = $window.height();
	        this.window_width = $window.width();
	    };


	    fn.drag_handler = function(e) {
	        var node = e.target.nodeName;
	        // skip if drag is disabled, or click was not done with the mouse primary button
	        if (this.disabled || e.which !== 1 && !isTouch) {
	            return;
	        }

	        if (this.ignore_drag(e)) {
	            return;
	        }

	        var self = this;
	        var first = true;
	        this.$player = $(e.currentTarget);

	        this.el_init_pos = this.get_actual_pos(this.$player);
	        this.mouse_init_pos = this.get_mouse_pos(e);
	        this.offsetY = this.mouse_init_pos.top - this.el_init_pos.top;

	        this.$document.on(this.pointer_events.move, function(mme) {
	            var mouse_actual_pos = self.get_mouse_pos(mme);
	            var diff_x = Math.abs(
	                mouse_actual_pos.left - self.mouse_init_pos.left);
	            var diff_y = Math.abs(
	                mouse_actual_pos.top - self.mouse_init_pos.top);
	            if (!(diff_x > self.options.distance ||
	                diff_y > self.options.distance)
	                ) {
	                return false;
	            }

	            if (first) {
	                first = false;
	                self.on_dragstart.call(self, mme);
	                return false;
	            }

	            if (self.is_dragging === true) {
	                self.on_dragmove.call(self, mme);
	            }

	            return false;
	        });

	        if (!isTouch) { return false; }
	    };


	    fn.on_dragstart = function(e) {
	        e.preventDefault();

	        if (this.is_dragging) { return this; }

	        this.drag_start = this.is_dragging = true;
	        var offset = this.$container.offset();
	        this.baseX = Math.round(offset.left);
	        this.baseY = Math.round(offset.top);
	        this.initial_container_width = this.options.container_width || this.$container.width();

	        if (this.options.helper === 'clone') {
	            this.$helper = this.$player.clone()
	                .appendTo(this.$container).addClass('helper');
	            this.helper = true;
	        } else {
	            this.helper = false;
	        }

	        this.win_offset_y = $(window).scrollTop();
	        this.win_offset_x = $(window).scrollLeft();
	        this.scroll_offset_y = 0;
	        this.scroll_offset_x = 0;
	        this.el_init_offset = this.$player.offset();
	        this.player_width = this.$player.width();
	        this.player_height = this.$player.height();

	        this.set_limits(this.options.container_width);

	        if (this.options.start) {
	            this.options.start.call(this.$player, e, this.get_drag_data(e));
	        }
	        return false;
	    };


	    fn.on_dragmove = function(e) {
	        var data = this.get_drag_data(e);

	        this.options.autoscroll && this.manage_scroll(data);

	        if (this.options.move_element) {
	            (this.helper ? this.$helper : this.$player).css({
	                'position': 'absolute',
	                'left' : data.position.left,
	                'top' : data.position.top
	            });
	        }

	        var last_position = this.last_position || data.position;
	        data.prev_position = last_position;

	        if (this.options.drag) {
	            this.options.drag.call(this.$player, e, data);
	        }

	        this.last_position = data.position;
	        return false;
	    };


	    fn.on_dragstop = function(e) {
	        var data = this.get_drag_data(e);
	        this.drag_start = false;

	        if (this.options.stop) {
	            this.options.stop.call(this.$player, e, data);
	        }

	        if (this.helper && this.options.remove_helper) {
	            this.$helper.remove();
	        }

	        return false;
	    };

	    fn.on_select_start = function(e) {
	        if (this.disabled) { return; }

	        if (this.ignore_drag(e)) {
	            return;
	        }

	        return false;
	    };

	    fn.enable = function() {
	        this.disabled = false;
	    };

	    fn.disable = function() {
	        this.disabled = true;
	    };

	    fn.destroy = function() {
	        this.disable();

	        this.$container.off(this.ns);
	        this.$document.off(this.ns);
	        $(window).off(this.ns);

	        $.removeData(this.$container, 'drag');
	    };

	    fn.ignore_drag = function(event) {
	        if (this.options.handle) {
	            return !$(event.target).is(this.options.handle);
	        }

	        if ($.isFunction(this.options.ignore_dragging)) {
	            return this.options.ignore_dragging(event);
	        }

	        return $(event.target).is(this.options.ignore_dragging.join(', '));
	    };

	    //jQuery adapter
	    $.fn.drag = function ( options ) {
	        return new Draggable(this, options);
	    };

	    return Draggable;

	}));


	/*
	* Gridster
	* depends on : jQuery, GridsterDraggable, Collision
	* output: root.Gridsters
	*/
	;(function(root, factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30), __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        root.Gridster = factory(root.$ || root.jQuery, root.GridsterDraggable,
	            root.GridsterCollision);
	    }

	 }(this, function($, Draggable, Collision) {

	    var defaults = {
	        namespace: '',
	        widget_selector: 'li',
	        widget_margins: [10, 10],
	        widget_base_dimensions: [400, 225],
	        extra_rows: 0,
	        extra_cols: 0,
	        min_cols: 1,
	        max_cols: Infinity,
	        min_rows: 15,
	        max_size_x: false,
	        autogrow_cols: false,
	        autogenerate_stylesheet: true,
	        avoid_overlapped_widgets: true,
	        auto_init: true,
	        serialize_params: function($w, wgd) {
	            return {
	                col: wgd.col,
	                row: wgd.row,
	                size_x: wgd.size_x,
	                size_y: wgd.size_y
	            };
	        },
	        collision: {},
	        draggable: {
	            items: '.gs-w',
	            distance: 4,
	            ignore_dragging: Draggable.defaults.ignore_dragging.slice(0)
	        },
	        resize: {
	            enabled: false,
	            axes: ['both'],
	            handle_append_to: '',
	            handle_class: 'gs-resize-handle',
	            max_size: [Infinity, Infinity],
	            min_size: [1, 1]
	        }
	    };

	    /**
	    * @class Gridster
	    * @uses Draggable
	    * @uses Collision
	    * @param {HTMLElement} el The HTMLelement that contains all the widgets.
	    * @param {Object} [options] An Object with all options you want to
	    *        overwrite:
	    *    @param {HTMLElement|String} [options.widget_selector] Define who will
	    *     be the draggable widgets. Can be a CSS Selector String or a
	    *     collection of HTMLElements
	    *    @param {Array} [options.widget_margins] Margin between widgets.
	    *     The first index for the horizontal margin (left, right) and
	    *     the second for the vertical margin (top, bottom).
	    *    @param {Array} [options.widget_base_dimensions] Base widget dimensions
	    *     in pixels. The first index for the width and the second for the
	    *     height.
	    *    @param {Number} [options.extra_cols] Add more columns in addition to
	    *     those that have been calculated.
	    *    @param {Number} [options.extra_rows] Add more rows in addition to
	    *     those that have been calculated.
	    *    @param {Number} [options.min_cols] The minimum required columns.
	    *    @param {Number} [options.max_cols] The maximum columns possible (set to null
	    *     for no maximum).
	    *    @param {Number} [options.min_rows] The minimum required rows.
	    *    @param {Number} [options.max_size_x] The maximum number of columns
	    *     that a widget can span.
	    *    @param {Boolean} [options.autogenerate_stylesheet] If true, all the
	    *     CSS required to position all widgets in their respective columns
	    *     and rows will be generated automatically and injected to the
	    *     `<head>` of the document. You can set this to false, and write
	    *     your own CSS targeting rows and cols via data-attributes like so:
	    *     `[data-col="1"] { left: 10px; }`
	    *    @param {Boolean} [options.avoid_overlapped_widgets] Avoid that widgets loaded
	    *     from the DOM can be overlapped. It is helpful if the positions were
	    *     bad stored in the database or if there was any conflict.
	    *    @param {Boolean} [options.auto_init] Automatically call gridster init
	    *     method or not when the plugin is instantiated.
	    *    @param {Function} [options.serialize_params] Return the data you want
	    *     for each widget in the serialization. Two arguments are passed:
	    *     `$w`: the jQuery wrapped HTMLElement, and `wgd`: the grid
	    *     coords object (`col`, `row`, `size_x`, `size_y`).
	    *    @param {Object} [options.collision] An Object with all options for
	    *     Collision class you want to overwrite. See Collision docs for
	    *     more info.
	    *    @param {Object} [options.draggable] An Object with all options for
	    *     Draggable class you want to overwrite. See Draggable docs for more
	    *     info.
	    *       @param {Object|Function} [options.draggable.ignore_dragging] Note that
	    *        if you use a Function, and resize is enabled, you should ignore the
	    *        resize handlers manually (options.resize.handle_class).
	    *    @param {Object} [options.resize] An Object with resize config options.
	    *       @param {Boolean} [options.resize.enabled] Set to true to enable
	    *        resizing.
	    *       @param {Array} [options.resize.axes] Axes in which widgets can be
	    *        resized. Possible values: ['x', 'y', 'both'].
	    *       @param {String} [options.resize.handle_append_to] Set a valid CSS
	    *        selector to append resize handles to.
	    *       @param {String} [options.resize.handle_class] CSS class name used
	    *        by resize handles.
	    *       @param {Array} [options.resize.max_size] Limit widget dimensions
	    *        when resizing. Array values should be integers:
	    *        `[max_cols_occupied, max_rows_occupied]`
	    *       @param {Array} [options.resize.min_size] Limit widget dimensions
	    *        when resizing. Array values should be integers:
	    *        `[min_cols_occupied, min_rows_occupied]`
	    *       @param {Function} [options.resize.start] Function executed
	    *        when resizing starts.
	    *       @param {Function} [otions.resize.resize] Function executed
	    *        during the resizing.
	    *       @param {Function} [options.resize.stop] Function executed
	    *        when resizing stops.
	    *
	    * @constructor
	    */
	    function Gridster(el, options) {
	        this.options = $.extend(true, {}, defaults, options);
	        this.$el = $(el);
	        this.$wrapper = this.$el.parent();
	        this.$widgets = this.$el.children(
	            this.options.widget_selector).addClass('gs-w');
	        this.widgets = [];
	        this.$changed = $([]);
	        this.wrapper_width = this.$wrapper.width();
	        this.min_widget_width = (this.options.widget_margins[0] * 2) +
	          this.options.widget_base_dimensions[0];
	        this.min_widget_height = (this.options.widget_margins[1] * 2) +
	          this.options.widget_base_dimensions[1];

	        this.generated_stylesheets = [];
	        this.$style_tags = $([]);

	        this.options.auto_init && this.init();
	    }

	    Gridster.defaults = defaults;
	    Gridster.generated_stylesheets = [];


	    /**
	    * Sorts an Array of grid coords objects (representing the grid coords of
	    * each widget) in ascending way.
	    *
	    * @method sort_by_row_asc
	    * @param {Array} widgets Array of grid coords objects
	    * @return {Array} Returns the array sorted.
	    */
	    Gridster.sort_by_row_asc = function(widgets) {
	        widgets = widgets.sort(function(a, b) {
	            if (!a.row) {
	                a = $(a).coords().grid;
	                b = $(b).coords().grid;
	            }

	           if (a.row > b.row) {
	               return 1;
	           }
	           return -1;
	        });

	        return widgets;
	    };


	    /**
	    * Sorts an Array of grid coords objects (representing the grid coords of
	    * each widget) placing first the empty cells upper left.
	    *
	    * @method sort_by_row_and_col_asc
	    * @param {Array} widgets Array of grid coords objects
	    * @return {Array} Returns the array sorted.
	    */
	    Gridster.sort_by_row_and_col_asc = function(widgets) {
	        widgets = widgets.sort(function(a, b) {
	           if (a.row > b.row || a.row === b.row && a.col > b.col) {
	               return 1;
	           }
	           return -1;
	        });

	        return widgets;
	    };


	    /**
	    * Sorts an Array of grid coords objects by column (representing the grid
	    * coords of each widget) in ascending way.
	    *
	    * @method sort_by_col_asc
	    * @param {Array} widgets Array of grid coords objects
	    * @return {Array} Returns the array sorted.
	    */
	    Gridster.sort_by_col_asc = function(widgets) {
	        widgets = widgets.sort(function(a, b) {
	           if (a.col > b.col) {
	               return 1;
	           }
	           return -1;
	        });

	        return widgets;
	    };


	    /**
	    * Sorts an Array of grid coords objects (representing the grid coords of
	    * each widget) in descending way.
	    *
	    * @method sort_by_row_desc
	    * @param {Array} widgets Array of grid coords objects
	    * @return {Array} Returns the array sorted.
	    */
	    Gridster.sort_by_row_desc = function(widgets) {
	        widgets = widgets.sort(function(a, b) {
	            if (a.row + a.size_y < b.row + b.size_y) {
	                return 1;
	            }
	           return -1;
	        });
	        return widgets;
	    };



	    /** Instance Methods **/

	    var fn = Gridster.prototype;

	    fn.init = function() {
	        this.options.resize.enabled && this.setup_resize();
	        this.generate_grid_and_stylesheet();
	        this.get_widgets_from_DOM();
	        this.set_dom_grid_height();
	        this.set_dom_grid_width();
	        this.$wrapper.addClass('ready');
	        this.draggable();
	        this.options.resize.enabled && this.resizable();

	        $(window).bind('resize.gridster', throttle(
	            $.proxy(this.recalculate_faux_grid, this), 200));
	    };


	    /**
	    * Disables dragging.
	    *
	    * @method disable
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.disable = function() {
	        this.$wrapper.find('.player-revert').removeClass('player-revert');
	        this.drag_api.disable();
	        return this;
	    };


	    /**
	    * Enables dragging.
	    *
	    * @method enable
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.enable = function() {
	        this.drag_api.enable();
	        return this;
	    };



	    /**
	    * Disables drag-and-drop widget resizing.
	    *
	    * @method disable
	    * @return {Class} Returns instance of gridster Class.
	    */
	    fn.disable_resize = function() {
	        this.$el.addClass('gs-resize-disabled');
	        this.resize_api.disable();
	        return this;
	    };


	    /**
	    * Enables drag-and-drop widget resizing.
	    *
	    * @method enable
	    * @return {Class} Returns instance of gridster Class.
	    */
	    fn.enable_resize = function() {
	        this.$el.removeClass('gs-resize-disabled');
	        this.resize_api.enable();
	        return this;
	    };


	    /**
	    * Add a new widget to the grid.
	    *
	    * @method add_widget
	    * @param {String|HTMLElement} html The string representing the HTML of the widget
	    *  or the HTMLElement.
	    * @param {Number} [size_x] The nº of rows the widget occupies horizontally.
	    * @param {Number} [size_y] The nº of columns the widget occupies vertically.
	    * @param {Number} [col] The column the widget should start in.
	    * @param {Number} [row] The row the widget should start in.
	    * @param {Array} [max_size] max_size Maximun size (in units) for width and height.
	    * @param {Array} [min_size] min_size Minimum size (in units) for width and height.
	    * @return {HTMLElement} Returns the jQuery wrapped HTMLElement representing.
	    *  the widget that was just created.
	    */
	    fn.add_widget = function(html, size_x, size_y, col, row, max_size, min_size) {
	        var pos;
	        size_x || (size_x = 1);
	        size_y || (size_y = 1);

	        if (!col & !row) {
	            pos = this.next_position(size_x, size_y);
	        } else {
	            pos = {
	                col: col,
	                row: row,
	                size_x: size_x,
	                size_y: size_y
	            };

	            this.empty_cells(col, row, size_x, size_y);
	        }

	        var $w = $(html).attr({
	                'data-col': pos.col,
	                'data-row': pos.row,
	                'data-sizex' : size_x,
	                'data-sizey' : size_y
	            }).addClass('gs-w').appendTo(this.$el).hide();

	        this.$widgets = this.$widgets.add($w);

	        this.register_widget($w);

	        this.add_faux_rows(pos.size_y);
	        //this.add_faux_cols(pos.size_x);

	        if (max_size) {
	            this.set_widget_max_size($w, max_size);
	        }

	        if (min_size) {
	            this.set_widget_min_size($w, min_size);
	        }

	        this.set_dom_grid_width();
	        this.set_dom_grid_height();

	        this.drag_api.set_limits(this.cols * this.min_widget_width);

	        return $w.fadeIn();
	    };


	    /**
	    * Change widget size limits.
	    *
	    * @method set_widget_min_size
	    * @param {HTMLElement|Number} $widget The jQuery wrapped HTMLElement
	    *  representing the widget or an index representing the desired widget.
	    * @param {Array} min_size Minimum size (in units) for width and height.
	    * @return {HTMLElement} Returns instance of gridster Class.
	    */
	    fn.set_widget_min_size = function($widget, min_size) {
	        $widget = typeof $widget === 'number' ?
	            this.$widgets.eq($widget) : $widget;

	        if (!$widget.length) { return this; }

	        var wgd = $widget.data('coords').grid;
	        wgd.min_size_x = min_size[0];
	        wgd.min_size_y = min_size[1];

	        return this;
	    };


	    /**
	    * Change widget size limits.
	    *
	    * @method set_widget_max_size
	    * @param {HTMLElement|Number} $widget The jQuery wrapped HTMLElement
	    *  representing the widget or an index representing the desired widget.
	    * @param {Array} max_size Maximun size (in units) for width and height.
	    * @return {HTMLElement} Returns instance of gridster Class.
	    */
	    fn.set_widget_max_size = function($widget, max_size) {
	        $widget = typeof $widget === 'number' ?
	            this.$widgets.eq($widget) : $widget;

	        if (!$widget.length) { return this; }

	        var wgd = $widget.data('coords').grid;
	        wgd.max_size_x = max_size[0];
	        wgd.max_size_y = max_size[1];

	        return this;
	    };


	    /**
	    * Append the resize handle into a widget.
	    *
	    * @method add_resize_handle
	    * @param {HTMLElement} $widget The jQuery wrapped HTMLElement
	    *  representing the widget.
	    * @return {HTMLElement} Returns instance of gridster Class.
	    */
	    fn.add_resize_handle = function($w) {
	        var append_to = this.options.resize.handle_append_to;
	        $(this.resize_handle_tpl).appendTo( append_to ? $(append_to, $w) : $w);

	        return this;
	    };


	    /**
	    * Change the size of a widget. Width is limited to the current grid width.
	    *
	    * @method resize_widget
	    * @param {HTMLElement} $widget The jQuery wrapped HTMLElement
	    *  representing the widget.
	    * @param {Number} size_x The number of columns that will occupy the widget.
	    *  By default <code>size_x</code> is limited to the space available from
	    *  the column where the widget begins, until the last column to the right.
	    * @param {Number} size_y The number of rows that will occupy the widget.
	    * @param {Function} [callback] Function executed when the widget is removed.
	    * @return {HTMLElement} Returns $widget.
	    */
	    fn.resize_widget = function($widget, size_x, size_y, callback) {
	        var wgd = $widget.coords().grid;
	        var col = wgd.col;
	        var max_cols = this.options.max_cols;
	        var old_size_y = wgd.size_y;
	        var old_col = wgd.col;
	        var new_col = old_col;

	        size_x || (size_x = wgd.size_x);
	        size_y || (size_y = wgd.size_y);

	        if (max_cols !== Infinity) {
	            size_x = Math.min(size_x, max_cols - col + 1);
	        }

	        if (size_y > old_size_y) {
	            this.add_faux_rows(Math.max(size_y - old_size_y, 0));
	        }

	        var player_rcol = (col + size_x - 1);
	        if (player_rcol > this.cols) {
	            this.add_faux_cols(player_rcol - this.cols);
	        }

	        var new_grid_data = {
	            col: new_col,
	            row: wgd.row,
	            size_x: size_x,
	            size_y: size_y
	        };

	        this.mutate_widget_in_gridmap($widget, wgd, new_grid_data);

	        this.set_dom_grid_height();
	        this.set_dom_grid_width();

	        if (callback) {
	            callback.call(this, new_grid_data.size_x, new_grid_data.size_y);
	        }

	        return $widget;
	    };


	    /**
	    * Mutate widget dimensions and position in the grid map.
	    *
	    * @method mutate_widget_in_gridmap
	    * @param {HTMLElement} $widget The jQuery wrapped HTMLElement
	    *  representing the widget to mutate.
	    * @param {Object} wgd Current widget grid data (col, row, size_x, size_y).
	    * @param {Object} new_wgd New widget grid data.
	    * @return {HTMLElement} Returns instance of gridster Class.
	    */
	    fn.mutate_widget_in_gridmap = function($widget, wgd, new_wgd) {
	        var old_size_x = wgd.size_x;
	        var old_size_y = wgd.size_y;

	        var old_cells_occupied = this.get_cells_occupied(wgd);
	        var new_cells_occupied = this.get_cells_occupied(new_wgd);

	        var empty_cols = [];
	        $.each(old_cells_occupied.cols, function(i, col) {
	            if ($.inArray(col, new_cells_occupied.cols) === -1) {
	                empty_cols.push(col);
	            }
	        });

	        var occupied_cols = [];
	        $.each(new_cells_occupied.cols, function(i, col) {
	            if ($.inArray(col, old_cells_occupied.cols) === -1) {
	                occupied_cols.push(col);
	            }
	        });

	        var empty_rows = [];
	        $.each(old_cells_occupied.rows, function(i, row) {
	            if ($.inArray(row, new_cells_occupied.rows) === -1) {
	                empty_rows.push(row);
	            }
	        });

	        var occupied_rows = [];
	        $.each(new_cells_occupied.rows, function(i, row) {
	            if ($.inArray(row, old_cells_occupied.rows) === -1) {
	                occupied_rows.push(row);
	            }
	        });

	        this.remove_from_gridmap(wgd);

	        if (occupied_cols.length) {
	            var cols_to_empty = [
	                new_wgd.col, new_wgd.row, new_wgd.size_x, Math.min(old_size_y, new_wgd.size_y), $widget
	            ];
	            this.empty_cells.apply(this, cols_to_empty);
	        }

	        if (occupied_rows.length) {
	            var rows_to_empty = [new_wgd.col, new_wgd.row, new_wgd.size_x, new_wgd.size_y, $widget];
	            this.empty_cells.apply(this, rows_to_empty);
	        }

	        // not the same that wgd = new_wgd;
	        wgd.col = new_wgd.col;
	        wgd.row = new_wgd.row;
	        wgd.size_x = new_wgd.size_x;
	        wgd.size_y = new_wgd.size_y;

	        this.add_to_gridmap(new_wgd, $widget);

	        $widget.removeClass('player-revert');

	        //update coords instance attributes
	        $widget.data('coords').update({
	            width: (new_wgd.size_x * this.options.widget_base_dimensions[0] +
	                ((new_wgd.size_x - 1) * this.options.widget_margins[0]) * 2),
	            height: (new_wgd.size_y * this.options.widget_base_dimensions[1] +
	                ((new_wgd.size_y - 1) * this.options.widget_margins[1]) * 2)
	        });

	        $widget.attr({
	            'data-col': new_wgd.col,
	            'data-row': new_wgd.row,
	            'data-sizex': new_wgd.size_x,
	            'data-sizey': new_wgd.size_y
	        });

	        if (empty_cols.length) {
	            var cols_to_remove_holes = [
	                empty_cols[0], new_wgd.row,
	                empty_cols.length,
	                Math.min(old_size_y, new_wgd.size_y),
	                $widget
	            ];

	            this.remove_empty_cells.apply(this, cols_to_remove_holes);
	        }

	        if (empty_rows.length) {
	            var rows_to_remove_holes = [
	                new_wgd.col, new_wgd.row, new_wgd.size_x, new_wgd.size_y, $widget
	            ];
	            this.remove_empty_cells.apply(this, rows_to_remove_holes);
	        }

	        this.move_widget_up($widget);

	        return this;
	    };


	    /**
	    * Move down widgets in cells represented by the arguments col, row, size_x,
	    * size_y
	    *
	    * @method empty_cells
	    * @param {Number} col The column where the group of cells begin.
	    * @param {Number} row The row where the group of cells begin.
	    * @param {Number} size_x The number of columns that the group of cells
	    * occupy.
	    * @param {Number} size_y The number of rows that the group of cells
	    * occupy.
	    * @param {HTMLElement} $exclude Exclude widgets from being moved.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.empty_cells = function(col, row, size_x, size_y, $exclude) {
	        var $nexts = this.widgets_below({
	                col: col,
	                row: row - size_y,
	                size_x: size_x,
	                size_y: size_y
	            });

	        $nexts.not($exclude).each($.proxy(function(i, w) {
	            var wgd = $(w).coords().grid;
	            if ( !(wgd.row <= (row + size_y - 1))) { return; }
	            var diff =  (row + size_y) - wgd.row;
	            this.move_widget_down($(w), diff);
	        }, this));

	        this.set_dom_grid_height();

	        return this;
	    };


	    /**
	    * Move up widgets below cells represented by the arguments col, row, size_x,
	    * size_y.
	    *
	    * @method remove_empty_cells
	    * @param {Number} col The column where the group of cells begin.
	    * @param {Number} row The row where the group of cells begin.
	    * @param {Number} size_x The number of columns that the group of cells
	    * occupy.
	    * @param {Number} size_y The number of rows that the group of cells
	    * occupy.
	    * @param {HTMLElement} exclude Exclude widgets from being moved.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.remove_empty_cells = function(col, row, size_x, size_y, exclude) {
	        var $nexts = this.widgets_below({
	            col: col,
	            row: row,
	            size_x: size_x,
	            size_y: size_y
	        });

	        $nexts.not(exclude).each($.proxy(function(i, widget) {
	            this.move_widget_up( $(widget), size_y );
	        }, this));

	        this.set_dom_grid_height();

	        return this;
	    };


	    /**
	    * Get the most left column below to add a new widget.
	    *
	    * @method next_position
	    * @param {Number} size_x The nº of rows the widget occupies horizontally.
	    * @param {Number} size_y The nº of columns the widget occupies vertically.
	    * @return {Object} Returns a grid coords object representing the future
	    *  widget coords.
	    */
	    fn.next_position = function(size_x, size_y) {
	        size_x || (size_x = 1);
	        size_y || (size_y = 1);
	        var ga = this.gridmap;
	        var cols_l = ga.length;
	        var valid_pos = [];
	        var rows_l;

	        for (var c = 1; c < cols_l; c++) {
	            rows_l = ga[c].length;
	            for (var r = 1; r <= rows_l; r++) {
	                var can_move_to = this.can_move_to({
	                    size_x: size_x,
	                    size_y: size_y
	                }, c, r);

	                if (can_move_to) {
	                    valid_pos.push({
	                        col: c,
	                        row: r,
	                        size_y: size_y,
	                        size_x: size_x
	                    });
	                }
	            }
	        }

	        if (valid_pos.length) {
	            return Gridster.sort_by_row_and_col_asc(valid_pos)[0];
	        }
	        return false;
	    };


	    /**
	    * Remove a widget from the grid.
	    *
	    * @method remove_widget
	    * @param {HTMLElement} el The jQuery wrapped HTMLElement you want to remove.
	    * @param {Boolean|Function} silent If true, widgets below the removed one
	    * will not move up. If a Function is passed it will be used as callback.
	    * @param {Function} callback Function executed when the widget is removed.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.remove_widget = function(el, silent, callback) {
	        var $el = el instanceof $ ? el : $(el);
	        var wgd = $el.coords().grid;

	        // if silent is a function assume it's a callback
	        if ($.isFunction(silent)) {
	            callback = silent;
	            silent = false;
	        }

	        this.cells_occupied_by_placeholder = {};
	        this.$widgets = this.$widgets.not($el);

	        var $nexts = this.widgets_below($el);

	        this.remove_from_gridmap(wgd);

	        $el.fadeOut($.proxy(function() {
	            $el.remove();

	            if (!silent) {
	                $nexts.each($.proxy(function(i, widget) {
	                    this.move_widget_up( $(widget), wgd.size_y );
	                }, this));
	            }

	            this.set_dom_grid_height();

	            if (callback) {
	                callback.call(this, el);
	            }
	        }, this));

	        return this;
	    };


	    /**
	    * Remove all widgets from the grid.
	    *
	    * @method remove_all_widgets
	    * @param {Function} callback Function executed for each widget removed.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.remove_all_widgets = function(callback) {
	        this.$widgets.each($.proxy(function(i, el){
	              this.remove_widget(el, true, callback);
	        }, this));

	        return this;
	    };


	    /**
	    * Returns a serialized array of the widgets in the grid.
	    *
	    * @method serialize
	    * @param {HTMLElement} [$widgets] The collection of jQuery wrapped
	    *  HTMLElements you want to serialize. If no argument is passed all widgets
	    *  will be serialized.
	    * @return {Array} Returns an Array of Objects with the data specified in
	    *  the serialize_params option.
	    */
	    fn.serialize = function($widgets) {
	        $widgets || ($widgets = this.$widgets);

	        return $widgets.map($.proxy(function(i, widget) {
	            var $w = $(widget);
	            return this.options.serialize_params($w, $w.coords().grid);
	        }, this)).get();
	    };


	    /**
	    * Returns a serialized array of the widgets that have changed their
	    *  position.
	    *
	    * @method serialize_changed
	    * @return {Array} Returns an Array of Objects with the data specified in
	    *  the serialize_params option.
	    */
	    fn.serialize_changed = function() {
	        return this.serialize(this.$changed);
	    };


	    /**
	    * Convert widgets from DOM elements to "widget grid data" Objects.
	    *
	    * @method dom_to_coords
	    * @param {HTMLElement} $widget The widget to be converted.
	    */
	    fn.dom_to_coords = function($widget) {
	        return {
	            'col': parseInt($widget.attr('data-col'), 10),
	            'row': parseInt($widget.attr('data-row'), 10),
	            'size_x': parseInt($widget.attr('data-sizex'), 10) || 1,
	            'size_y': parseInt($widget.attr('data-sizey'), 10) || 1,
	            'max_size_x': parseInt($widget.attr('data-max-sizex'), 10) || false,
	            'max_size_y': parseInt($widget.attr('data-max-sizey'), 10) || false,
	            'min_size_x': parseInt($widget.attr('data-min-sizex'), 10) || false,
	            'min_size_y': parseInt($widget.attr('data-min-sizey'), 10) || false,
	            'el': $widget
	        };
	    };


	    /**
	    * Creates the grid coords object representing the widget an add it to the
	    * mapped array of positions.
	    *
	    * @method register_widget
	    * @param {HTMLElement|Object} $el jQuery wrapped HTMLElement representing
	    *  the widget, or an "widget grid data" Object with (col, row, el ...).
	    * @return {Boolean} Returns true if the widget final position is different
	    *  than the original.
	    */
	    fn.register_widget = function($el) {
	        var isDOM = $el instanceof jQuery;
	        var wgd = isDOM ? this.dom_to_coords($el) : $el;
	        var posChanged = false;
	        isDOM || ($el = wgd.el);

	        var empty_upper_row = this.can_go_widget_up(wgd);
	        if (empty_upper_row) {
	            wgd.row = empty_upper_row;
	            $el.attr('data-row', empty_upper_row);
	            this.$el.trigger('gridster:positionchanged', [wgd]);
	            posChanged = true;
	        }

	        if (this.options.avoid_overlapped_widgets &&
	            !this.can_move_to(
	             {size_x: wgd.size_x, size_y: wgd.size_y}, wgd.col, wgd.row)
	        ) {
	            $.extend(wgd, this.next_position(wgd.size_x, wgd.size_y));
	            $el.attr({
	                'data-col': wgd.col,
	                'data-row': wgd.row,
	                'data-sizex': wgd.size_x,
	                'data-sizey': wgd.size_y
	            });
	            posChanged = true;
	        }

	        // attach Coord object to player data-coord attribute
	        $el.data('coords', $el.coords());
	        // Extend Coord object with grid position info
	        $el.data('coords').grid = wgd;

	        this.add_to_gridmap(wgd, $el);

	        this.options.resize.enabled && this.add_resize_handle($el);

	        return posChanged;
	    };


	    /**
	    * Update in the mapped array of positions the value of cells represented by
	    * the grid coords object passed in the `grid_data` param.
	    *
	    * @param {Object} grid_data The grid coords object representing the cells
	    *  to update in the mapped array.
	    * @param {HTMLElement|Boolean} value Pass `false` or the jQuery wrapped
	    *  HTMLElement, depends if you want to delete an existing position or add
	    *  a new one.
	    * @method update_widget_position
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.update_widget_position = function(grid_data, value) {
	        this.for_each_cell_occupied(grid_data, function(col, row) {
	            if (!this.gridmap[col]) { return this; }
	            this.gridmap[col][row] = value;
	        });
	        return this;
	    };


	    /**
	    * Remove a widget from the mapped array of positions.
	    *
	    * @method remove_from_gridmap
	    * @param {Object} grid_data The grid coords object representing the cells
	    *  to update in the mapped array.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.remove_from_gridmap = function(grid_data) {
	        return this.update_widget_position(grid_data, false);
	    };


	    /**
	    * Add a widget to the mapped array of positions.
	    *
	    * @method add_to_gridmap
	    * @param {Object} grid_data The grid coords object representing the cells
	    *  to update in the mapped array.
	    * @param {HTMLElement|Boolean} value The value to set in the specified
	    *  position .
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.add_to_gridmap = function(grid_data, value) {
	        this.update_widget_position(grid_data, value || grid_data.el);

	        if (grid_data.el) {
	            var $widgets = this.widgets_below(grid_data.el);
	            $widgets.each($.proxy(function(i, widget) {
	                this.move_widget_up( $(widget));
	            }, this));
	        }
	    };


	    /**
	    * Make widgets draggable.
	    *
	    * @uses Draggable
	    * @method draggable
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.draggable = function() {
	        var self = this;
	        var draggable_options = $.extend(true, {}, this.options.draggable, {
	            offset_left: this.options.widget_margins[0],
	            offset_top: this.options.widget_margins[1],
	            container_width: this.cols * this.min_widget_width,
	            limit: true,
	            start: function(event, ui) {
	                self.$widgets.filter('.player-revert')
	                    .removeClass('player-revert');

	                self.$player = $(this);
	                self.$helper = $(ui.$helper);

	                self.helper = !self.$helper.is(self.$player);

	                self.on_start_drag.call(self, event, ui);
	                self.$el.trigger('gridster:dragstart');
	            },
	            stop: function(event, ui) {
	                self.on_stop_drag.call(self, event, ui);
	                self.$el.trigger('gridster:dragstop');
	            },
	            drag: throttle(function(event, ui) {
	                self.on_drag.call(self, event, ui);
	                self.$el.trigger('gridster:drag');
	            }, 60)
	          });

	        this.drag_api = this.$el.drag(draggable_options);
	        return this;
	    };


	    /**
	    * Bind resize events to get resize working.
	    *
	    * @method resizable
	    * @return {Class} Returns instance of gridster Class.
	    */
	    fn.resizable = function() {
	        this.resize_api = this.$el.drag({
	            items: '.' + this.options.resize.handle_class,
	            offset_left: this.options.widget_margins[0],
	            container_width: this.container_width,
	            move_element: false,
	            resize: true,
	            limit: this.options.autogrow_cols ? false : true,
	            start: $.proxy(this.on_start_resize, this),
	            stop: $.proxy(function(event, ui) {
	                delay($.proxy(function() {
	                    this.on_stop_resize(event, ui);
	                }, this), 120);
	            }, this),
	            drag: throttle($.proxy(this.on_resize, this), 60)
	        });

	        return this;
	    };


	    /**
	    * Setup things required for resizing. Like build templates for drag handles.
	    *
	    * @method setup_resize
	    * @return {Class} Returns instance of gridster Class.
	    */
	    fn.setup_resize = function() {
	        this.resize_handle_class = this.options.resize.handle_class;
	        var axes = this.options.resize.axes;
	        var handle_tpl = '<span class="' + this.resize_handle_class + ' ' +
	            this.resize_handle_class + '-{type}" />';

	        this.resize_handle_tpl = $.map(axes, function(type) {
	            return handle_tpl.replace('{type}', type);
	        }).join('');

	        if ($.isArray(this.options.draggable.ignore_dragging)) {
	            this.options.draggable.ignore_dragging.push(
	                '.' + this.resize_handle_class);
	        }

	        return this;
	    };


	    /**
	    * This function is executed when the player begins to be dragged.
	    *
	    * @method on_start_drag
	    * @param {Event} event The original browser event
	    * @param {Object} ui A prepared ui object with useful drag-related data
	    */
	    fn.on_start_drag = function(event, ui) {
	        this.$helper.add(this.$player).add(this.$wrapper).addClass('dragging');

	        this.highest_col = this.get_highest_occupied_cell().col;

	        this.$player.addClass('player');
	        this.player_grid_data = this.$player.coords().grid;
	        this.placeholder_grid_data = $.extend({}, this.player_grid_data);

	        this.set_dom_grid_height(this.$el.height() +
	            (this.player_grid_data.size_y * this.min_widget_height));

	        this.set_dom_grid_width(this.cols);

	        var pgd_sizex = this.player_grid_data.size_x;
	        var cols_diff = this.cols - this.highest_col;

	        if (this.options.autogrow_cols && cols_diff <= pgd_sizex) {
	            this.add_faux_cols(Math.min(pgd_sizex - cols_diff, 1));
	        }

	        var colliders = this.faux_grid;
	        var coords = this.$player.data('coords').coords;

	        this.cells_occupied_by_player = this.get_cells_occupied(
	            this.player_grid_data);
	        this.cells_occupied_by_placeholder = this.get_cells_occupied(
	            this.placeholder_grid_data);

	        this.last_cols = [];
	        this.last_rows = [];

	        // see jquery.collision.js
	        this.collision_api = this.$helper.collision(
	            colliders, this.options.collision);

	        this.$preview_holder = $('<' + this.$player.get(0).tagName + ' />', {
	              'class': 'preview-holder',
	              'data-row': this.$player.attr('data-row'),
	              'data-col': this.$player.attr('data-col'),
	              css: {
	                  width: coords.width,
	                  height: coords.height
	              }
	        }).appendTo(this.$el);

	        if (this.options.draggable.start) {
	          this.options.draggable.start.call(this, event, ui);
	        }
	    };


	    /**
	    * This function is executed when the player is being dragged.
	    *
	    * @method on_drag
	    * @param {Event} event The original browser event
	    * @param {Object} ui A prepared ui object with useful drag-related data
	    */
	    fn.on_drag = function(event, ui) {
	        //break if dragstop has been fired
	        if (this.$player === null) {
	            return false;
	        }

	        var abs_offset = {
	            left: ui.position.left + this.baseX,
	            top: ui.position.top + this.baseY
	        };

	        // auto grow cols
	        if (this.options.autogrow_cols) {
	            var prcol = this.placeholder_grid_data.col +
	                this.placeholder_grid_data.size_x - 1;

	            // "- 1" due to adding at least 1 column in on_start_drag
	            if (prcol >= this.cols - 1 && this.options.max_cols >= this.cols + 1) {
	                this.add_faux_cols(1);
	                this.set_dom_grid_width(this.cols + 1);
	                this.drag_api.set_limits(this.container_width);
	            }

	            this.collision_api.set_colliders(this.faux_grid);
	        }

	        this.colliders_data = this.collision_api.get_closest_colliders(
	            abs_offset);

	        this.on_overlapped_column_change(
	            this.on_start_overlapping_column, this.on_stop_overlapping_column);

	        this.on_overlapped_row_change(
	            this.on_start_overlapping_row, this.on_stop_overlapping_row);


	        if (this.helper && this.$player) {
	            this.$player.css({
	                'left': ui.position.left,
	                'top': ui.position.top
	            });
	        }

	        if (this.options.draggable.drag) {
	            this.options.draggable.drag.call(this, event, ui);
	        }
	    };


	    /**
	    * This function is executed when the player stops being dragged.
	    *
	    * @method on_stop_drag
	    * @param {Event} event The original browser event
	    * @param {Object} ui A prepared ui object with useful drag-related data
	    */
	    fn.on_stop_drag = function(event, ui) {
	        this.$helper.add(this.$player).add(this.$wrapper)
	            .removeClass('dragging');

	        ui.position.left = ui.position.left + this.baseX;
	        ui.position.top = ui.position.top + this.baseY;
	        this.colliders_data = this.collision_api.get_closest_colliders(
	            ui.position);

	        this.on_overlapped_column_change(
	            this.on_start_overlapping_column,
	            this.on_stop_overlapping_column
	        );

	        this.on_overlapped_row_change(
	            this.on_start_overlapping_row,
	            this.on_stop_overlapping_row
	        );

	        this.$player.addClass('player-revert').removeClass('player')
	            .attr({
	                'data-col': this.placeholder_grid_data.col,
	                'data-row': this.placeholder_grid_data.row
	            }).css({
	                'left': '',
	                'top': ''
	            });

	        this.$changed = this.$changed.add(this.$player);

	        this.cells_occupied_by_player = this.get_cells_occupied(
	            this.placeholder_grid_data);
	        this.set_cells_player_occupies(
	            this.placeholder_grid_data.col, this.placeholder_grid_data.row);

	        this.$player.coords().grid.row = this.placeholder_grid_data.row;
	        this.$player.coords().grid.col = this.placeholder_grid_data.col;

	        if (this.options.draggable.stop) {
	          this.options.draggable.stop.call(this, event, ui);
	        }

	        this.$preview_holder.remove();

	        this.$player = null;
	        this.$helper = null;
	        this.placeholder_grid_data = {};
	        this.player_grid_data = {};
	        this.cells_occupied_by_placeholder = {};
	        this.cells_occupied_by_player = {};

	        this.set_dom_grid_height();
	        this.set_dom_grid_width();

	        if (this.options.autogrow_cols) {
	            this.drag_api.set_limits(this.cols * this.min_widget_width);
	        }
	    };


	    /**
	    * This function is executed every time a widget starts to be resized.
	    *
	    * @method on_start_resize
	    * @param {Event} event The original browser event
	    * @param {Object} ui A prepared ui object with useful drag-related data
	    */
	    fn.on_start_resize = function(event, ui) {
	        this.$resized_widget = ui.$player.closest('.gs-w');
	        this.resize_coords = this.$resized_widget.coords();
	        this.resize_wgd = this.resize_coords.grid;
	        this.resize_initial_width = this.resize_coords.coords.width;
	        this.resize_initial_height = this.resize_coords.coords.height;
	        this.resize_initial_sizex = this.resize_coords.grid.size_x;
	        this.resize_initial_sizey = this.resize_coords.grid.size_y;
	        this.resize_initial_col = this.resize_coords.grid.col;
	        this.resize_last_sizex = this.resize_initial_sizex;
	        this.resize_last_sizey = this.resize_initial_sizey;

	        this.resize_max_size_x = Math.min(this.resize_wgd.max_size_x ||
	            this.options.resize.max_size[0],
	            this.options.max_cols - this.resize_initial_col + 1);
	        this.resize_max_size_y = this.resize_wgd.max_size_y ||
	            this.options.resize.max_size[1];

	        this.resize_min_size_x = (this.resize_wgd.min_size_x ||
	            this.options.resize.min_size[0] || 1);
	        this.resize_min_size_y = (this.resize_wgd.min_size_y ||
	            this.options.resize.min_size[1] || 1);

	        this.resize_initial_last_col = this.get_highest_occupied_cell().col;

	        this.set_dom_grid_width(this.cols);

	        this.resize_dir = {
	            right: ui.$player.is('.' + this.resize_handle_class + '-x'),
	            bottom: ui.$player.is('.' + this.resize_handle_class + '-y')
	        };

	        this.$resized_widget.css({
	            'min-width': this.options.widget_base_dimensions[0],
	            'min-height': this.options.widget_base_dimensions[1]
	        });

	        var nodeName = this.$resized_widget.get(0).tagName;
	        this.$resize_preview_holder = $('<' + nodeName + ' />', {
	              'class': 'preview-holder resize-preview-holder',
	              'data-row': this.$resized_widget.attr('data-row'),
	              'data-col': this.$resized_widget.attr('data-col'),
	              'css': {
	                  'width': this.resize_initial_width,
	                  'height': this.resize_initial_height
	              }
	        }).appendTo(this.$el);

	        this.$resized_widget.addClass('resizing');

	    if (this.options.resize.start) {
	            this.options.resize.start.call(this, event, ui, this.$resized_widget);
	        }

	        this.$el.trigger('gridster:resizestart');
	    };


	    /**
	    * This function is executed every time a widget stops being resized.
	    *
	    * @method on_stop_resize
	    * @param {Event} event The original browser event
	    * @param {Object} ui A prepared ui object with useful drag-related data
	    */
	    fn.on_stop_resize = function(event, ui) {
	        this.$resized_widget
	            .removeClass('resizing')
	            .css({
	                'width': '',
	                'height': ''
	            });

	        delay($.proxy(function() {
	            this.$resize_preview_holder
	                .remove()
	                .css({
	                    'min-width': '',
	                    'min-height': ''
	                });

	            if (this.options.resize.stop) {
	                this.options.resize.stop.call(this, event, ui, this.$resized_widget);
	            }

	            this.$el.trigger('gridster:resizestop');
	        }, this), 300);

	        this.set_dom_grid_width();

	        if (this.options.autogrow_cols) {
	            this.drag_api.set_limits(this.cols * this.min_widget_width);
	        }
	    };


	    /**
	    * This function is executed when a widget is being resized.
	    *
	    * @method on_resize
	    * @param {Event} event The original browser event
	    * @param {Object} ui A prepared ui object with useful drag-related data
	    */
	    fn.on_resize = function(event, ui) {
	        var rel_x = (ui.pointer.diff_left);
	        var rel_y = (ui.pointer.diff_top);
	        var wbd_x = this.options.widget_base_dimensions[0];
	        var wbd_y = this.options.widget_base_dimensions[1];
	        var margin_x = this.options.widget_margins[0];
	        var margin_y = this.options.widget_margins[1];
	        var max_size_x = this.resize_max_size_x;
	        var min_size_x = this.resize_min_size_x;
	        var max_size_y = this.resize_max_size_y;
	        var min_size_y = this.resize_min_size_y;
	        var autogrow = this.options.autogrow_cols;
	        var width;
	        var max_width = Infinity;
	        var max_height = Infinity;

	        var inc_units_x = Math.ceil((rel_x / (wbd_x + margin_x * 2)) - 0.2);
	        var inc_units_y = Math.ceil((rel_y / (wbd_y + margin_y * 2)) - 0.2);

	        var size_x = Math.max(1, this.resize_initial_sizex + inc_units_x);
	        var size_y = Math.max(1, this.resize_initial_sizey + inc_units_y);

	        var max_cols = (this.container_width / this.min_widget_width) -
	            this.resize_initial_col + 1;
	        var limit_width = ((max_cols * this.min_widget_width) - margin_x * 2);

	        size_x = Math.max(Math.min(size_x, max_size_x), min_size_x);
	        size_x = Math.min(max_cols, size_x);
	        width = (max_size_x * wbd_x) + ((size_x - 1) * margin_x * 2);
	        max_width = Math.min(width, limit_width);
	        min_width = (min_size_x * wbd_x) + ((size_x - 1) * margin_x * 2);

	        size_y = Math.max(Math.min(size_y, max_size_y), min_size_y);
	        max_height = (max_size_y * wbd_y) + ((size_y - 1) * margin_y * 2);
	        min_height = (min_size_y * wbd_y) + ((size_y - 1) * margin_y * 2);

	        if (this.resize_dir.right) {
	            size_y = this.resize_initial_sizey;
	        } else if (this.resize_dir.bottom) {
	            size_x = this.resize_initial_sizex;
	        }

	        if (autogrow) {
	            var last_widget_col = this.resize_initial_col + size_x - 1;
	            if (autogrow && this.resize_initial_last_col <= last_widget_col) {
	                this.set_dom_grid_width(Math.max(last_widget_col + 1, this.cols));

	                if (this.cols < last_widget_col) {
	                    this.add_faux_cols(last_widget_col - this.cols);
	                }
	            }
	        }

	        var css_props = {};
	        !this.resize_dir.bottom && (css_props.width = Math.max(Math.min(
	            this.resize_initial_width + rel_x, max_width), min_width));
	        !this.resize_dir.right && (css_props.height = Math.max(Math.min(
	            this.resize_initial_height + rel_y, max_height), min_height));

	        this.$resized_widget.css(css_props);

	        if (size_x !== this.resize_last_sizex ||
	            size_y !== this.resize_last_sizey) {

	            this.resize_widget(this.$resized_widget, size_x, size_y);
	            this.set_dom_grid_width(this.cols);

	            this.$resize_preview_holder.css({
	                'width': '',
	                'height': ''
	            }).attr({
	                'data-row': this.$resized_widget.attr('data-row'),
	                'data-sizex': size_x,
	                'data-sizey': size_y
	            });
	        }

	        if (this.options.resize.resize) {
	            this.options.resize.resize.call(this, event, ui, this.$resized_widget);
	        }

	        this.$el.trigger('gridster:resize');

	        this.resize_last_sizex = size_x;
	        this.resize_last_sizey = size_y;
	    };


	    /**
	    * Executes the callbacks passed as arguments when a column begins to be
	    * overlapped or stops being overlapped.
	    *
	    * @param {Function} start_callback Function executed when a new column
	    *  begins to be overlapped. The column is passed as first argument.
	    * @param {Function} stop_callback Function executed when a column stops
	    *  being overlapped. The column is passed as first argument.
	    * @method on_overlapped_column_change
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.on_overlapped_column_change = function(start_callback, stop_callback) {
	        if (!this.colliders_data.length) {
	            return this;
	        }
	        var cols = this.get_targeted_columns(
	            this.colliders_data[0].el.data.col);

	        var last_n_cols = this.last_cols.length;
	        var n_cols = cols.length;
	        var i;

	        for (i = 0; i < n_cols; i++) {
	            if ($.inArray(cols[i], this.last_cols) === -1) {
	                (start_callback || $.noop).call(this, cols[i]);
	            }
	        }

	        for (i = 0; i< last_n_cols; i++) {
	            if ($.inArray(this.last_cols[i], cols) === -1) {
	                (stop_callback || $.noop).call(this, this.last_cols[i]);
	            }
	        }

	        this.last_cols = cols;

	        return this;
	    };


	    /**
	    * Executes the callbacks passed as arguments when a row starts to be
	    * overlapped or stops being overlapped.
	    *
	    * @param {Function} start_callback Function executed when a new row begins
	    *  to be overlapped. The row is passed as first argument.
	    * @param {Function} end_callback Function executed when a row stops being
	    *  overlapped. The row is passed as first argument.
	    * @method on_overlapped_row_change
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.on_overlapped_row_change = function(start_callback, end_callback) {
	        if (!this.colliders_data.length) {
	            return this;
	        }
	        var rows = this.get_targeted_rows(this.colliders_data[0].el.data.row);
	        var last_n_rows = this.last_rows.length;
	        var n_rows = rows.length;
	        var i;

	        for (i = 0; i < n_rows; i++) {
	            if ($.inArray(rows[i], this.last_rows) === -1) {
	                (start_callback || $.noop).call(this, rows[i]);
	            }
	        }

	        for (i = 0; i < last_n_rows; i++) {
	            if ($.inArray(this.last_rows[i], rows) === -1) {
	                (end_callback || $.noop).call(this, this.last_rows[i]);
	            }
	        }

	        this.last_rows = rows;
	    };


	    /**
	    * Sets the current position of the player
	    *
	    * @param {Number} col
	    * @param {Number} row
	    * @param {Boolean} no_player
	    * @method set_player
	    * @return {object}
	    */
	    fn.set_player = function(col, row, no_player) {
	        var self = this;
	        if (!no_player) {
	            this.empty_cells_player_occupies();
	        }
	        var cell = !no_player ? self.colliders_data[0].el.data : {col: col};
	        var to_col = cell.col;
	        var to_row = row || cell.row;

	        this.player_grid_data = {
	            col: to_col,
	            row: to_row,
	            size_y : this.player_grid_data.size_y,
	            size_x : this.player_grid_data.size_x
	        };

	        this.cells_occupied_by_player = this.get_cells_occupied(
	            this.player_grid_data);

	        var $overlapped_widgets = this.get_widgets_overlapped(
	            this.player_grid_data);

	        var constraints = this.widgets_constraints($overlapped_widgets);

	        this.manage_movements(constraints.can_go_up, to_col, to_row);
	        this.manage_movements(constraints.can_not_go_up, to_col, to_row);

	        /* if there is not widgets overlapping in the new player position,
	         * update the new placeholder position. */
	        if (!$overlapped_widgets.length) {
	            var pp = this.can_go_player_up(this.player_grid_data);
	            if (pp !== false) {
	                to_row = pp;
	            }
	            this.set_placeholder(to_col, to_row);
	        }

	        return {
	            col: to_col,
	            row: to_row
	        };
	    };


	    /**
	    * See which of the widgets in the $widgets param collection can go to
	    * a upper row and which not.
	    *
	    * @method widgets_contraints
	    * @param {jQuery} $widgets A jQuery wrapped collection of
	    * HTMLElements.
	    * @return {object} Returns a literal Object with two keys: `can_go_up` &
	    * `can_not_go_up`. Each contains a set of HTMLElements.
	    */
	    fn.widgets_constraints = function($widgets) {
	        var $widgets_can_go_up = $([]);
	        var $widgets_can_not_go_up;
	        var wgd_can_go_up = [];
	        var wgd_can_not_go_up = [];

	        $widgets.each($.proxy(function(i, w) {
	            var $w = $(w);
	            var wgd = $w.coords().grid;
	            if (this.can_go_widget_up(wgd)) {
	                $widgets_can_go_up = $widgets_can_go_up.add($w);
	                wgd_can_go_up.push(wgd);
	            } else {
	                wgd_can_not_go_up.push(wgd);
	            }
	        }, this));

	        $widgets_can_not_go_up = $widgets.not($widgets_can_go_up);

	        return {
	            can_go_up: Gridster.sort_by_row_asc(wgd_can_go_up),
	            can_not_go_up: Gridster.sort_by_row_desc(wgd_can_not_go_up)
	        };
	    };


	    /**
	    * Sorts an Array of grid coords objects (representing the grid coords of
	    * each widget) in descending way.
	    *
	    * @method manage_movements
	    * @param {jQuery} $widgets A jQuery collection of HTMLElements
	    *  representing the widgets you want to move.
	    * @param {Number} to_col The column to which we want to move the widgets.
	    * @param {Number} to_row The row to which we want to move the widgets.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.manage_movements = function($widgets, to_col, to_row) {
	        $.each($widgets, $.proxy(function(i, w) {
	            var wgd = w;
	            var $w = wgd.el;

	            var can_go_widget_up = this.can_go_widget_up(wgd);

	            if (can_go_widget_up) {
	                //target CAN go up
	                //so move widget up
	                this.move_widget_to($w, can_go_widget_up);
	                this.set_placeholder(to_col, can_go_widget_up + wgd.size_y);

	            } else {
	                //target can't go up
	                var can_go_player_up = this.can_go_player_up(
	                    this.player_grid_data);

	                if (!can_go_player_up) {
	                    // target can't go up
	                    // player cant't go up
	                    // so we need to move widget down to a position that dont
	                    // overlaps player
	                    var y = (to_row + this.player_grid_data.size_y) - wgd.row;

	                    this.move_widget_down($w, y);
	                    this.set_placeholder(to_col, to_row);
	                }
	            }
	        }, this));

	        return this;
	    };

	    /**
	    * Determines if there is a widget in the row and col given. Or if the
	    * HTMLElement passed as first argument is the player.
	    *
	    * @method is_player
	    * @param {Number|HTMLElement} col_or_el A jQuery wrapped collection of
	    * HTMLElements.
	    * @param {Number} [row] The column to which we want to move the widgets.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_player = function(col_or_el, row) {
	        if (row && !this.gridmap[col_or_el]) { return false; }
	        var $w = row ? this.gridmap[col_or_el][row] : col_or_el;
	        return $w && ($w.is(this.$player) || $w.is(this.$helper));
	    };


	    /**
	    * Determines if the widget that is being dragged is currently over the row
	    * and col given.
	    *
	    * @method is_player_in
	    * @param {Number} col The column to check.
	    * @param {Number} row The row to check.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_player_in = function(col, row) {
	        var c = this.cells_occupied_by_player || {};
	        return $.inArray(col, c.cols) >= 0 && $.inArray(row, c.rows) >= 0;
	    };


	    /**
	    * Determines if the placeholder is currently over the row and col given.
	    *
	    * @method is_placeholder_in
	    * @param {Number} col The column to check.
	    * @param {Number} row The row to check.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_placeholder_in = function(col, row) {
	        var c = this.cells_occupied_by_placeholder || {};
	        return this.is_placeholder_in_col(col) && $.inArray(row, c.rows) >= 0;
	    };


	    /**
	    * Determines if the placeholder is currently over the column given.
	    *
	    * @method is_placeholder_in_col
	    * @param {Number} col The column to check.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_placeholder_in_col = function(col) {
	        var c = this.cells_occupied_by_placeholder || [];
	        return $.inArray(col, c.cols) >= 0;
	    };


	    /**
	    * Determines if the cell represented by col and row params is empty.
	    *
	    * @method is_empty
	    * @param {Number} col The column to check.
	    * @param {Number} row The row to check.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_empty = function(col, row) {
	        if (typeof this.gridmap[col] !== 'undefined') {
	      if(typeof this.gridmap[col][row] !== 'undefined' &&
	         this.gridmap[col][row] === false
	      ) {
	        return true;
	      }
	      return false;
	    }
	    return true;
	    };


	    /**
	    * Determines if the cell represented by col and row params is occupied.
	    *
	    * @method is_occupied
	    * @param {Number} col The column to check.
	    * @param {Number} row The row to check.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_occupied = function(col, row) {
	        if (!this.gridmap[col]) {
	            return false;
	        }

	        if (this.gridmap[col][row]) {
	            return true;
	        }
	        return false;
	    };


	    /**
	    * Determines if there is a widget in the cell represented by col/row params.
	    *
	    * @method is_widget
	    * @param {Number} col The column to check.
	    * @param {Number} row The row to check.
	    * @return {Boolean|HTMLElement} Returns false if there is no widget,
	    * else returns the jQuery HTMLElement
	    */
	    fn.is_widget = function(col, row) {
	        var cell = this.gridmap[col];
	        if (!cell) {
	            return false;
	        }

	        cell = cell[row];

	        if (cell) {
	            return cell;
	        }

	        return false;
	    };


	    /**
	    * Determines if there is a widget in the cell represented by col/row
	    * params and if this is under the widget that is being dragged.
	    *
	    * @method is_widget_under_player
	    * @param {Number} col The column to check.
	    * @param {Number} row The row to check.
	    * @return {Boolean} Returns true or false.
	    */
	    fn.is_widget_under_player = function(col, row) {
	        if (this.is_widget(col, row)) {
	            return this.is_player_in(col, row);
	        }
	        return false;
	    };


	    /**
	    * Get widgets overlapping with the player or with the object passed
	    * representing the grid cells.
	    *
	    * @method get_widgets_under_player
	    * @return {HTMLElement} Returns a jQuery collection of HTMLElements
	    */
	    fn.get_widgets_under_player = function(cells) {
	        cells || (cells = this.cells_occupied_by_player || {cols: [], rows: []});
	        var $widgets = $([]);

	        $.each(cells.cols, $.proxy(function(i, col) {
	            $.each(cells.rows, $.proxy(function(i, row) {
	                if(this.is_widget(col, row)) {
	                    $widgets = $widgets.add(this.gridmap[col][row]);
	                }
	            }, this));
	        }, this));

	        return $widgets;
	    };


	    /**
	    * Put placeholder at the row and column specified.
	    *
	    * @method set_placeholder
	    * @param {Number} col The column to which we want to move the
	    *  placeholder.
	    * @param {Number} row The row to which we want to move the
	    *  placeholder.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.set_placeholder = function(col, row) {
	        var phgd = $.extend({}, this.placeholder_grid_data);
	        var $nexts = this.widgets_below({
	                col: phgd.col,
	                row: phgd.row,
	                size_y: phgd.size_y,
	                size_x: phgd.size_x
	            });

	        // Prevents widgets go out of the grid
	        var right_col = (col + phgd.size_x - 1);
	        if (right_col > this.cols) {
	            col = col - (right_col - col);
	        }

	        var moved_down = this.placeholder_grid_data.row < row;
	        var changed_column = this.placeholder_grid_data.col !== col;

	        this.placeholder_grid_data.col = col;
	        this.placeholder_grid_data.row = row;

	        this.cells_occupied_by_placeholder = this.get_cells_occupied(
	            this.placeholder_grid_data);

	        this.$preview_holder.attr({
	            'data-row' : row,
	            'data-col' : col
	        });

	        if (moved_down || changed_column) {
	            $nexts.each($.proxy(function(i, widget) {
	                this.move_widget_up(
	                 $(widget), this.placeholder_grid_data.col - col + phgd.size_y);
	            }, this));
	        }

	        var $widgets_under_ph = this.get_widgets_under_player(
	            this.cells_occupied_by_placeholder);

	        if ($widgets_under_ph.length) {
	            $widgets_under_ph.each($.proxy(function(i, widget) {
	                var $w = $(widget);
	                this.move_widget_down(
	                 $w, row + phgd.size_y - $w.data('coords').grid.row);
	            }, this));
	        }

	    };


	    /**
	    * Determines whether the player can move to a position above.
	    *
	    * @method can_go_player_up
	    * @param {Object} widget_grid_data The actual grid coords object of the
	    *  player.
	    * @return {Number|Boolean} If the player can be moved to an upper row
	    *  returns the row number, else returns false.
	    */
	    fn.can_go_player_up = function(widget_grid_data) {
	        var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
	        var result = true;
	        var upper_rows = [];
	        var min_row = 10000;
	        var $widgets_under_player = this.get_widgets_under_player();

	        /* generate an array with columns as index and array with upper rows
	         * empty as value */
	        this.for_each_column_occupied(widget_grid_data, function(tcol) {
	            var grid_col = this.gridmap[tcol];
	            var r = p_bottom_row + 1;
	            upper_rows[tcol] = [];

	            while (--r > 0) {
	                if (this.is_empty(tcol, r) || this.is_player(tcol, r) ||
	                    this.is_widget(tcol, r) &&
	                    grid_col[r].is($widgets_under_player)
	                ) {
	                    upper_rows[tcol].push(r);
	                    min_row = r < min_row ? r : min_row;
	                } else {
	                    break;
	                }
	            }

	            if (upper_rows[tcol].length === 0) {
	                result = false;
	                return true; //break
	            }

	            upper_rows[tcol].sort(function(a, b) {
	                return a - b;
	            });
	        });

	        if (!result) { return false; }

	        return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
	    };


	    /**
	    * Determines whether a widget can move to a position above.
	    *
	    * @method can_go_widget_up
	    * @param {Object} widget_grid_data The actual grid coords object of the
	    *  widget we want to check.
	    * @return {Number|Boolean} If the widget can be moved to an upper row
	    *  returns the row number, else returns false.
	    */
	    fn.can_go_widget_up = function(widget_grid_data) {
	        var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
	        var result = true;
	        var upper_rows = [];
	        var min_row = 10000;

	        /* generate an array with columns as index and array with topmost rows
	         * empty as value */
	        this.for_each_column_occupied(widget_grid_data, function(tcol) {
	            var grid_col = this.gridmap[tcol];
	            upper_rows[tcol] = [];

	            var r = p_bottom_row + 1;
	            // iterate over each row
	            while (--r > 0) {
	                if (this.is_widget(tcol, r) && !this.is_player_in(tcol, r)) {
	                    if (!grid_col[r].is(widget_grid_data.el)) {
	                        break;
	                    }
	                }

	                if (!this.is_player(tcol, r) &&
	                    !this.is_placeholder_in(tcol, r) &&
	                    !this.is_player_in(tcol, r)) {
	                    upper_rows[tcol].push(r);
	                }

	                if (r < min_row) {
	                    min_row = r;
	                }
	            }

	            if (upper_rows[tcol].length === 0) {
	                result = false;
	                return true; //break
	            }

	            upper_rows[tcol].sort(function(a, b) {
	                return a - b;
	            });
	        });

	        if (!result) { return false; }

	        return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
	    };


	    /**
	    * Search a valid row for the widget represented by `widget_grid_data' in
	    * the `upper_rows` array. Iteration starts from row specified in `min_row`.
	    *
	    * @method get_valid_rows
	    * @param {Object} widget_grid_data The actual grid coords object of the
	    *  player.
	    * @param {Array} upper_rows An array with columns as index and arrays
	    *  of valid rows as values.
	    * @param {Number} min_row The upper row from which the iteration will start.
	    * @return {Number|Boolean} Returns the upper row valid from the `upper_rows`
	    *  for the widget in question.
	    */
	    fn.get_valid_rows = function(widget_grid_data, upper_rows, min_row) {
	        var p_top_row = widget_grid_data.row;
	        var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
	        var size_y = widget_grid_data.size_y;
	        var r = min_row - 1;
	        var valid_rows = [];

	        while (++r <= p_bottom_row ) {
	            var common = true;
	            $.each(upper_rows, function(col, rows) {
	                if ($.isArray(rows) && $.inArray(r, rows) === -1) {
	                    common = false;
	                }
	            });

	            if (common === true) {
	                valid_rows.push(r);
	                if (valid_rows.length === size_y) {
	                    break;
	                }
	            }
	        }

	        var new_row = false;
	        if (size_y === 1) {
	            if (valid_rows[0] !== p_top_row) {
	                new_row = valid_rows[0] || false;
	            }
	        } else {
	            if (valid_rows[0] !== p_top_row) {
	                new_row = this.get_consecutive_numbers_index(
	                    valid_rows, size_y);
	            }
	        }

	        return new_row;
	    };


	    fn.get_consecutive_numbers_index = function(arr, size_y) {
	        var max = arr.length;
	        var result = [];
	        var first = true;
	        var prev = -1; // or null?

	        for (var i=0; i < max; i++) {
	            if (first || arr[i] === prev + 1) {
	                result.push(i);
	                if (result.length === size_y) {
	                    break;
	                }
	                first = false;
	            } else {
	                result = [];
	                first = true;
	            }

	            prev = arr[i];
	        }

	        return result.length >= size_y ? arr[result[0]] : false;
	    };


	    /**
	    * Get widgets overlapping with the player.
	    *
	    * @method get_widgets_overlapped
	    * @return {jQuery} Returns a jQuery collection of HTMLElements.
	    */
	    fn.get_widgets_overlapped = function() {
	        var $w;
	        var $widgets = $([]);
	        var used = [];
	        var rows_from_bottom = this.cells_occupied_by_player.rows.slice(0);
	        rows_from_bottom.reverse();

	        $.each(this.cells_occupied_by_player.cols, $.proxy(function(i, col) {
	            $.each(rows_from_bottom, $.proxy(function(i, row) {
	                // if there is a widget in the player position
	                if (!this.gridmap[col]) { return true; } //next iteration
	                var $w = this.gridmap[col][row];
	                if (this.is_occupied(col, row) && !this.is_player($w) &&
	                    $.inArray($w, used) === -1
	                ) {
	                    $widgets = $widgets.add($w);
	                    used.push($w);
	                }

	            }, this));
	        }, this));

	        return $widgets;
	    };


	    /**
	    * This callback is executed when the player begins to collide with a column.
	    *
	    * @method on_start_overlapping_column
	    * @param {Number} col The collided column.
	    * @return {jQuery} Returns a jQuery collection of HTMLElements.
	    */
	    fn.on_start_overlapping_column = function(col) {
	        this.set_player(col, false);
	    };


	    /**
	    * A callback executed when the player begins to collide with a row.
	    *
	    * @method on_start_overlapping_row
	    * @param {Number} row The collided row.
	    * @return {jQuery} Returns a jQuery collection of HTMLElements.
	    */
	    fn.on_start_overlapping_row = function(row) {
	        this.set_player(false, row);
	    };


	    /**
	    * A callback executed when the the player ends to collide with a column.
	    *
	    * @method on_stop_overlapping_column
	    * @param {Number} col The collided row.
	    * @return {jQuery} Returns a jQuery collection of HTMLElements.
	    */
	    fn.on_stop_overlapping_column = function(col) {
	        this.set_player(col, false);

	        var self = this;
	        this.for_each_widget_below(col, this.cells_occupied_by_player.rows[0],
	            function(tcol, trow) {
	                self.move_widget_up(this, self.player_grid_data.size_y);
	        });
	    };


	    /**
	    * This callback is executed when the player ends to collide with a row.
	    *
	    * @method on_stop_overlapping_row
	    * @param {Number} row The collided row.
	    * @return {jQuery} Returns a jQuery collection of HTMLElements.
	    */
	    fn.on_stop_overlapping_row = function(row) {
	        this.set_player(false, row);

	        var self = this;
	        var cols = this.cells_occupied_by_player.cols;
	        for (var c = 0, cl = cols.length; c < cl; c++) {
	            this.for_each_widget_below(cols[c], row, function(tcol, trow) {
	                self.move_widget_up(this, self.player_grid_data.size_y);
	            });
	        }
	    };


	    /**
	    * Move a widget to a specific row. The cell or cells must be empty.
	    * If the widget has widgets below, all of these widgets will be moved also
	    * if they can.
	    *
	    * @method move_widget_to
	    * @param {HTMLElement} $widget The jQuery wrapped HTMLElement of the
	    * widget is going to be moved.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.move_widget_to = function($widget, row) {
	        var self = this;
	        var widget_grid_data = $widget.coords().grid;
	        var diff = row - widget_grid_data.row;
	        var $next_widgets = this.widgets_below($widget);

	        var can_move_to_new_cell = this.can_move_to(
	            widget_grid_data, widget_grid_data.col, row, $widget);

	        if (can_move_to_new_cell === false) {
	            return false;
	        }

	        this.remove_from_gridmap(widget_grid_data);
	        widget_grid_data.row = row;
	        this.add_to_gridmap(widget_grid_data);
	        $widget.attr('data-row', row);
	        this.$changed = this.$changed.add($widget);


	        $next_widgets.each(function(i, widget) {
	            var $w = $(widget);
	            var wgd = $w.coords().grid;
	            var can_go_up = self.can_go_widget_up(wgd);
	            if (can_go_up && can_go_up !== wgd.row) {
	                self.move_widget_to($w, can_go_up);
	            }
	        });

	        return this;
	    };


	    /**
	    * Move up the specified widget and all below it.
	    *
	    * @method move_widget_up
	    * @param {HTMLElement} $widget The widget you want to move.
	    * @param {Number} [y_units] The number of cells that the widget has to move.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.move_widget_up = function($widget, y_units) {
	        var el_grid_data = $widget.coords().grid;
	        var actual_row = el_grid_data.row;
	        var moved = [];
	        var can_go_up = true;
	        y_units || (y_units = 1);

	        if (!this.can_go_up($widget)) { return false; } //break;

	        this.for_each_column_occupied(el_grid_data, function(col) {
	            // can_go_up
	            if ($.inArray($widget, moved) === -1) {
	                var widget_grid_data = $widget.coords().grid;
	                var next_row = actual_row - y_units;
	                next_row = this.can_go_up_to_row(
	                    widget_grid_data, col, next_row);

	                if (!next_row) {
	                    return true;
	                }

	                var $next_widgets = this.widgets_below($widget);

	                this.remove_from_gridmap(widget_grid_data);
	                widget_grid_data.row = next_row;
	                this.add_to_gridmap(widget_grid_data);
	                $widget.attr('data-row', widget_grid_data.row);
	                this.$changed = this.$changed.add($widget);

	                moved.push($widget);

	                $next_widgets.each($.proxy(function(i, widget) {
	                    this.move_widget_up($(widget), y_units);
	                }, this));
	            }
	        });

	    };


	    /**
	    * Move down the specified widget and all below it.
	    *
	    * @method move_widget_down
	    * @param {jQuery} $widget The jQuery object representing the widget
	    *  you want to move.
	    * @param {Number} y_units The number of cells that the widget has to move.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.move_widget_down = function($widget, y_units) {
	        var el_grid_data, actual_row, moved, y_diff;

	        if (y_units <= 0) { return false; }

	        el_grid_data = $widget.coords().grid;
	        actual_row = el_grid_data.row;
	        moved = [];
	        y_diff = y_units;

	        if (!$widget) { return false; }

	        if ($.inArray($widget, moved) === -1) {

	            var widget_grid_data = $widget.coords().grid;
	            var next_row = actual_row + y_units;
	            var $next_widgets = this.widgets_below($widget);

	            this.remove_from_gridmap(widget_grid_data);

	            $next_widgets.each($.proxy(function(i, widget) {
	                var $w = $(widget);
	                var wd = $w.coords().grid;
	                var tmp_y = this.displacement_diff(
	                             wd, widget_grid_data, y_diff);

	                if (tmp_y > 0) {
	                    this.move_widget_down($w, tmp_y);
	                }
	            }, this));

	            widget_grid_data.row = next_row;
	            this.update_widget_position(widget_grid_data, $widget);
	            $widget.attr('data-row', widget_grid_data.row);
	            this.$changed = this.$changed.add($widget);

	            moved.push($widget);
	        }
	    };


	    /**
	    * Check if the widget can move to the specified row, else returns the
	    * upper row possible.
	    *
	    * @method can_go_up_to_row
	    * @param {Number} widget_grid_data The current grid coords object of the
	    *  widget.
	    * @param {Number} col The target column.
	    * @param {Number} row The target row.
	    * @return {Boolean|Number} Returns the row number if the widget can move
	    *  to the target position, else returns false.
	    */
	    fn.can_go_up_to_row = function(widget_grid_data, col, row) {
	        var ga = this.gridmap;
	        var result = true;
	        var urc = []; // upper_rows_in_columns
	        var actual_row = widget_grid_data.row;
	        var r;

	        /* generate an array with columns as index and array with
	         * upper rows empty in the column */
	        this.for_each_column_occupied(widget_grid_data, function(tcol) {
	            var grid_col = ga[tcol];
	            urc[tcol] = [];

	            r = actual_row;
	            while (r--) {
	                if (this.is_empty(tcol, r) &&
	                    !this.is_placeholder_in(tcol, r)
	                ) {
	                    urc[tcol].push(r);
	                } else {
	                    break;
	                }
	            }

	            if (!urc[tcol].length) {
	                result = false;
	                return true;
	            }

	        });

	        if (!result) { return false; }

	        /* get common rows starting from upper position in all the columns
	         * that widget occupies */
	        r = row;
	        for (r = 1; r < actual_row; r++) {
	            var common = true;

	            for (var uc = 0, ucl = urc.length; uc < ucl; uc++) {
	                if (urc[uc] && $.inArray(r, urc[uc]) === -1) {
	                    common = false;
	                }
	            }

	            if (common === true) {
	                result = r;
	                break;
	            }
	        }

	        return result;
	    };


	    fn.displacement_diff = function(widget_grid_data, parent_bgd, y_units) {
	        var actual_row = widget_grid_data.row;
	        var diffs = [];
	        var parent_max_y = parent_bgd.row + parent_bgd.size_y;

	        this.for_each_column_occupied(widget_grid_data, function(col) {
	            var temp_y_units = 0;

	            for (var r = parent_max_y; r < actual_row; r++) {
	                if (this.is_empty(col, r)) {
	                    temp_y_units = temp_y_units + 1;
	                }
	            }

	            diffs.push(temp_y_units);
	        });

	        var max_diff = Math.max.apply(Math, diffs);
	        y_units = (y_units - max_diff);

	        return y_units > 0 ? y_units : 0;
	    };


	    /**
	    * Get widgets below a widget.
	    *
	    * @method widgets_below
	    * @param {HTMLElement} $el The jQuery wrapped HTMLElement.
	    * @return {jQuery} A jQuery collection of HTMLElements.
	    */
	    fn.widgets_below = function($el) {
	        var el_grid_data = $.isPlainObject($el) ? $el : $el.coords().grid;
	        var self = this;
	        var ga = this.gridmap;
	        var next_row = el_grid_data.row + el_grid_data.size_y - 1;
	        var $nexts = $([]);

	        this.for_each_column_occupied(el_grid_data, function(col) {
	            self.for_each_widget_below(col, next_row, function(tcol, trow) {
	                if (!self.is_player(this) && $.inArray(this, $nexts) === -1) {
	                    $nexts = $nexts.add(this);
	                    return true; // break
	                }
	            });
	        });

	        return Gridster.sort_by_row_asc($nexts);
	    };


	    /**
	    * Update the array of mapped positions with the new player position.
	    *
	    * @method set_cells_player_occupies
	    * @param {Number} col The new player col.
	    * @param {Number} col The new player row.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.set_cells_player_occupies = function(col, row) {
	        this.remove_from_gridmap(this.placeholder_grid_data);
	        this.placeholder_grid_data.col = col;
	        this.placeholder_grid_data.row = row;
	        this.add_to_gridmap(this.placeholder_grid_data, this.$player);
	        return this;
	    };


	    /**
	    * Remove from the array of mapped positions the reference to the player.
	    *
	    * @method empty_cells_player_occupies
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.empty_cells_player_occupies = function() {
	        this.remove_from_gridmap(this.placeholder_grid_data);
	        return this;
	    };


	    fn.can_go_up = function($el) {
	        var el_grid_data = $el.coords().grid;
	        var initial_row = el_grid_data.row;
	        var prev_row = initial_row - 1;
	        var ga = this.gridmap;
	        var upper_rows_by_column = [];

	        var result = true;
	        if (initial_row === 1) { return false; }

	        this.for_each_column_occupied(el_grid_data, function(col) {
	            var $w = this.is_widget(col, prev_row);

	            if (this.is_occupied(col, prev_row) ||
	                this.is_player(col, prev_row) ||
	                this.is_placeholder_in(col, prev_row) ||
	                this.is_player_in(col, prev_row)
	            ) {
	                result = false;
	                return true; //break
	            }
	        });

	        return result;
	    };


	    /**
	    * Check if it's possible to move a widget to a specific col/row. It takes
	    * into account the dimensions (`size_y` and `size_x` attrs. of the grid
	    *  coords object) the widget occupies.
	    *
	    * @method can_move_to
	    * @param {Object} widget_grid_data The grid coords object that represents
	    *  the widget.
	    * @param {Object} col The col to check.
	    * @param {Object} row The row to check.
	    * @param {Number} [max_row] The max row allowed.
	    * @return {Boolean} Returns true if all cells are empty, else return false.
	    */
	    fn.can_move_to = function(widget_grid_data, col, row, max_row) {
	        var ga = this.gridmap;
	        var $w = widget_grid_data.el;
	        var future_wd = {
	            size_y: widget_grid_data.size_y,
	            size_x: widget_grid_data.size_x,
	            col: col,
	            row: row
	        };
	        var result = true;

	        //Prevents widgets go out of the grid
	        var right_col = col + widget_grid_data.size_x - 1;
	        if (right_col > this.cols) {
	            return false;
	        }

	        if (max_row && max_row < row + widget_grid_data.size_y - 1) {
	            return false;
	        }

	        this.for_each_cell_occupied(future_wd, function(tcol, trow) {
	            var $tw = this.is_widget(tcol, trow);
	            if ($tw && (!widget_grid_data.el || $tw.is($w))) {
	                result = false;
	            }
	        });

	        return result;
	    };


	    /**
	    * Given the leftmost column returns all columns that are overlapping
	    *  with the player.
	    *
	    * @method get_targeted_columns
	    * @param {Number} [from_col] The leftmost column.
	    * @return {Array} Returns an array with column numbers.
	    */
	    fn.get_targeted_columns = function(from_col) {
	        var max = (from_col || this.player_grid_data.col) +
	            (this.player_grid_data.size_x - 1);
	        var cols = [];
	        for (var col = from_col; col <= max; col++) {
	            cols.push(col);
	        }
	        return cols;
	    };


	    /**
	    * Given the upper row returns all rows that are overlapping with the player.
	    *
	    * @method get_targeted_rows
	    * @param {Number} [from_row] The upper row.
	    * @return {Array} Returns an array with row numbers.
	    */
	    fn.get_targeted_rows = function(from_row) {
	        var max = (from_row || this.player_grid_data.row) +
	            (this.player_grid_data.size_y - 1);
	        var rows = [];
	        for (var row = from_row; row <= max; row++) {
	            rows.push(row);
	        }
	        return rows;
	    };

	    /**
	    * Get all columns and rows that a widget occupies.
	    *
	    * @method get_cells_occupied
	    * @param {Object} el_grid_data The grid coords object of the widget.
	    * @return {Object} Returns an object like `{ cols: [], rows: []}`.
	    */
	    fn.get_cells_occupied = function(el_grid_data) {
	        var cells = { cols: [], rows: []};
	        var i;
	        if (arguments[1] instanceof $) {
	            el_grid_data = arguments[1].coords().grid;
	        }

	        for (i = 0; i < el_grid_data.size_x; i++) {
	            var col = el_grid_data.col + i;
	            cells.cols.push(col);
	        }

	        for (i = 0; i < el_grid_data.size_y; i++) {
	            var row = el_grid_data.row + i;
	            cells.rows.push(row);
	        }

	        return cells;
	    };


	    /**
	    * Iterate over the cells occupied by a widget executing a function for
	    * each one.
	    *
	    * @method for_each_cell_occupied
	    * @param {Object} el_grid_data The grid coords object that represents the
	    *  widget.
	    * @param {Function} callback The function to execute on each column
	    *  iteration. Column and row are passed as arguments.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.for_each_cell_occupied = function(grid_data, callback) {
	        this.for_each_column_occupied(grid_data, function(col) {
	            this.for_each_row_occupied(grid_data, function(row) {
	                callback.call(this, col, row);
	            });
	        });
	        return this;
	    };


	    /**
	    * Iterate over the columns occupied by a widget executing a function for
	    * each one.
	    *
	    * @method for_each_column_occupied
	    * @param {Object} el_grid_data The grid coords object that represents
	    *  the widget.
	    * @param {Function} callback The function to execute on each column
	    *  iteration. The column number is passed as first argument.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.for_each_column_occupied = function(el_grid_data, callback) {
	        for (var i = 0; i < el_grid_data.size_x; i++) {
	            var col = el_grid_data.col + i;
	            callback.call(this, col, el_grid_data);
	        }
	    };


	    /**
	    * Iterate over the rows occupied by a widget executing a function for
	    * each one.
	    *
	    * @method for_each_row_occupied
	    * @param {Object} el_grid_data The grid coords object that represents
	    *  the widget.
	    * @param {Function} callback The function to execute on each column
	    *  iteration. The row number is passed as first argument.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.for_each_row_occupied = function(el_grid_data, callback) {
	        for (var i = 0; i < el_grid_data.size_y; i++) {
	            var row = el_grid_data.row + i;
	            callback.call(this, row, el_grid_data);
	        }
	    };



	    fn._traversing_widgets = function(type, direction, col, row, callback) {
	        var ga = this.gridmap;
	        if (!ga[col]) { return; }

	        var cr, max;
	        var action = type + '/' + direction;
	        if (arguments[2] instanceof $) {
	            var el_grid_data = arguments[2].coords().grid;
	            col = el_grid_data.col;
	            row = el_grid_data.row;
	            callback = arguments[3];
	        }
	        var matched = [];
	        var trow = row;


	        var methods = {
	            'for_each/above': function() {
	                while (trow--) {
	                    if (trow > 0 && this.is_widget(col, trow) &&
	                        $.inArray(ga[col][trow], matched) === -1
	                    ) {
	                        cr = callback.call(ga[col][trow], col, trow);
	                        matched.push(ga[col][trow]);
	                        if (cr) { break; }
	                    }
	                }
	            },
	            'for_each/below': function() {
	                for (trow = row + 1, max = ga[col].length; trow < max; trow++) {
	                    if (this.is_widget(col, trow) &&
	                        $.inArray(ga[col][trow], matched) === -1
	                    ) {
	                        cr = callback.call(ga[col][trow], col, trow);
	                        matched.push(ga[col][trow]);
	                        if (cr) { break; }
	                    }
	                }
	            }
	        };

	        if (methods[action]) {
	            methods[action].call(this);
	        }
	    };


	    /**
	    * Iterate over each widget above the column and row specified.
	    *
	    * @method for_each_widget_above
	    * @param {Number} col The column to start iterating.
	    * @param {Number} row The row to start iterating.
	    * @param {Function} callback The function to execute on each widget
	    *  iteration. The value of `this` inside the function is the jQuery
	    *  wrapped HTMLElement.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.for_each_widget_above = function(col, row, callback) {
	        this._traversing_widgets('for_each', 'above', col, row, callback);
	        return this;
	    };


	    /**
	    * Iterate over each widget below the column and row specified.
	    *
	    * @method for_each_widget_below
	    * @param {Number} col The column to start iterating.
	    * @param {Number} row The row to start iterating.
	    * @param {Function} callback The function to execute on each widget
	    *  iteration. The value of `this` inside the function is the jQuery wrapped
	    *  HTMLElement.
	    * @return {Class} Returns the instance of the Gridster Class.
	    */
	    fn.for_each_widget_below = function(col, row, callback) {
	        this._traversing_widgets('for_each', 'below', col, row, callback);
	        return this;
	    };


	    /**
	    * Returns the highest occupied cell in the grid.
	    *
	    * @method get_highest_occupied_cell
	    * @return {Object} Returns an object with `col` and `row` numbers.
	    */
	    fn.get_highest_occupied_cell = function() {
	        var r;
	        var gm = this.gridmap;
	        var rl = gm[1].length;
	        var rows = [], cols = [];
	        var row_in_col = [];
	        for (var c = gm.length - 1; c >= 1; c--) {
	            for (r = rl - 1; r >= 1; r--) {
	                if (this.is_widget(c, r)) {
	                    rows.push(r);
	                    cols.push(c);
	                    break;
	                }
	            }
	        }

	        return {
	            col: Math.max.apply(Math, cols),
	            row: Math.max.apply(Math, rows)
	        };
	    };


	    fn.get_widgets_from = function(col, row) {
	        var ga = this.gridmap;
	        var $widgets = $();

	        if (col) {
	            $widgets = $widgets.add(
	                this.$widgets.filter(function() {
	                    var tcol = $(this).attr('data-col');
	                    return (tcol === col || tcol > col);
	                })
	            );
	        }

	        if (row) {
	            $widgets = $widgets.add(
	                this.$widgets.filter(function() {
	                    var trow = $(this).attr('data-row');
	                    return (trow === row || trow > row);
	                })
	            );
	        }

	        return $widgets;
	    };


	    /**
	    * Set the current height of the parent grid.
	    *
	    * @method set_dom_grid_height
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.set_dom_grid_height = function(height) {
	        if (typeof height === 'undefined') {
	            var r = this.get_highest_occupied_cell().row;
	            height = r * this.min_widget_height;
	        }

	        this.container_height = height;
	        this.$el.css('height', this.container_height);
	        return this;
	    };

	    /**
	    * Set the current width of the parent grid.
	    *
	    * @method set_dom_grid_width
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.set_dom_grid_width = function(cols) {
	        if (typeof cols === 'undefined') {
	            cols = this.get_highest_occupied_cell().col;
	        }

	        var max_cols = (this.options.autogrow_cols ? this.options.max_cols :
	            this.cols);

	        cols = Math.min(max_cols, Math.max(cols, this.options.min_cols));
	        this.container_width = cols * this.min_widget_width;
	        this.$el.css('width', this.container_width);
	        return this;
	    };


	    /**
	    * It generates the neccessary styles to position the widgets.
	    *
	    * @method generate_stylesheet
	    * @param {Number} rows Number of columns.
	    * @param {Number} cols Number of rows.
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.generate_stylesheet = function(opts) {
	        var styles = '';
	        var max_size_x = this.options.max_size_x || this.cols;
	        var max_rows = 0;
	        var max_cols = 0;
	        var i;
	        var rules;

	        opts || (opts = {});
	        opts.cols || (opts.cols = this.cols);
	        opts.rows || (opts.rows = this.rows);
	        opts.namespace || (opts.namespace = this.options.namespace);
	        opts.widget_base_dimensions ||
	            (opts.widget_base_dimensions = this.options.widget_base_dimensions);
	        opts.widget_margins ||
	            (opts.widget_margins = this.options.widget_margins);
	        opts.min_widget_width = (opts.widget_margins[0] * 2) +
	            opts.widget_base_dimensions[0];
	        opts.min_widget_height = (opts.widget_margins[1] * 2) +
	            opts.widget_base_dimensions[1];

	        // don't duplicate stylesheets for the same configuration
	        var serialized_opts = $.param(opts);
	        if ($.inArray(serialized_opts, Gridster.generated_stylesheets) >= 0) {
	            return false;
	        }

	        this.generated_stylesheets.push(serialized_opts);
	        Gridster.generated_stylesheets.push(serialized_opts);

	        /* generate CSS styles for cols */
	        for (i = opts.cols; i >= 0; i--) {
	            styles += (opts.namespace + ' [data-col="'+ (i + 1) + '"] { left:' +
	                ((i * opts.widget_base_dimensions[0]) +
	                (i * opts.widget_margins[0]) +
	                ((i + 1) * opts.widget_margins[0])) + 'px; }\n');
	        }

	        /* generate CSS styles for rows */
	        for (i = opts.rows; i >= 0; i--) {
	            styles += (opts.namespace + ' [data-row="' + (i + 1) + '"] { top:' +
	                ((i * opts.widget_base_dimensions[1]) +
	                (i * opts.widget_margins[1]) +
	                ((i + 1) * opts.widget_margins[1]) ) + 'px; }\n');
	        }

	        for (var y = 1; y <= opts.rows; y++) {
	            styles += (opts.namespace + ' [data-sizey="' + y + '"] { height:' +
	                (y * opts.widget_base_dimensions[1] +
	                (y - 1) * (opts.widget_margins[1] * 2)) + 'px; }\n');
	        }

	        for (var x = 1; x <= max_size_x; x++) {
	            styles += (opts.namespace + ' [data-sizex="' + x + '"] { width:' +
	                (x * opts.widget_base_dimensions[0] +
	                (x - 1) * (opts.widget_margins[0] * 2)) + 'px; }\n');
	        }

	        this.remove_style_tags();

	        return this.add_style_tag(styles);
	    };


	    /**
	    * Injects the given CSS as string to the head of the document.
	    *
	    * @method add_style_tag
	    * @param {String} css The styles to apply.
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.add_style_tag = function(css) {
	        var d = document;
	        var tag = d.createElement('style');

	        d.getElementsByTagName('head')[0].appendChild(tag);
	        tag.setAttribute('type', 'text/css');

	        if (tag.styleSheet) {
	            tag.styleSheet.cssText = css;
	        } else {
	            tag.appendChild(document.createTextNode(css));
	        }

	        this.$style_tags = this.$style_tags.add(tag);

	        return this;
	    };


	    /**
	    * Remove the style tag with the associated id from the head of the document
	    *
	    * @method  remove_style_tag
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.remove_style_tags = function() {
	        var all_styles = Gridster.generated_stylesheets;
	        var ins_styles = this.generated_stylesheets;

	        this.$style_tags.remove();

	        Gridster.generated_stylesheets = $.map(all_styles, function(s) {
	            if ($.inArray(s, ins_styles) === -1) { return s; }
	        });
	    };


	    /**
	    * Generates a faux grid to collide with it when a widget is dragged and
	    * detect row or column that we want to go.
	    *
	    * @method generate_faux_grid
	    * @param {Number} rows Number of columns.
	    * @param {Number} cols Number of rows.
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.generate_faux_grid = function(rows, cols) {
	        this.faux_grid = [];
	        this.gridmap = [];
	        var col;
	        var row;
	        for (col = cols; col > 0; col--) {
	            this.gridmap[col] = [];
	            for (row = rows; row > 0; row--) {
	                this.add_faux_cell(row, col);
	            }
	        }
	        return this;
	    };


	    /**
	    * Add cell to the faux grid.
	    *
	    * @method add_faux_cell
	    * @param {Number} row The row for the new faux cell.
	    * @param {Number} col The col for the new faux cell.
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.add_faux_cell = function(row, col) {
	        var coords = $({
	                        left: this.baseX + ((col - 1) * this.min_widget_width),
	                        top: this.baseY + (row -1) * this.min_widget_height,
	                        width: this.min_widget_width,
	                        height: this.min_widget_height,
	                        col: col,
	                        row: row,
	                        original_col: col,
	                        original_row: row
	                    }).coords();

	        if (!$.isArray(this.gridmap[col])) {
	            this.gridmap[col] = [];
	        }

	        this.gridmap[col][row] = false;
	        this.faux_grid.push(coords);

	        return this;
	    };


	    /**
	    * Add rows to the faux grid.
	    *
	    * @method add_faux_rows
	    * @param {Number} rows The number of rows you want to add to the faux grid.
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.add_faux_rows = function(rows) {
	        var actual_rows = this.rows;
	        var max_rows = actual_rows + (rows || 1);

	        for (var r = max_rows; r > actual_rows; r--) {
	            for (var c = this.cols; c >= 1; c--) {
	                this.add_faux_cell(r, c);
	            }
	        }

	        this.rows = max_rows;

	        if (this.options.autogenerate_stylesheet) {
	            this.generate_stylesheet();
	        }

	        return this;
	    };

	     /**
	    * Add cols to the faux grid.
	    *
	    * @method add_faux_cols
	    * @param {Number} cols The number of cols you want to add to the faux grid.
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.add_faux_cols = function(cols) {
	        var actual_cols = this.cols;
	        var max_cols = actual_cols + (cols || 1);
	        max_cols = Math.min(max_cols, this.options.max_cols);

	        for (var c = actual_cols + 1; c <= max_cols; c++) {
	            for (var r = this.rows; r >= 1; r--) {
	                this.add_faux_cell(r, c);
	            }
	        }

	        this.cols = max_cols;

	        if (this.options.autogenerate_stylesheet) {
	            this.generate_stylesheet();
	        }

	        return this;
	    };


	    /**
	    * Recalculates the offsets for the faux grid. You need to use it when
	    * the browser is resized.
	    *
	    * @method recalculate_faux_grid
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.recalculate_faux_grid = function() {
	        var aw = this.$wrapper.width();
	        this.baseX = ($(window).width() - aw) / 2;
	        this.baseY = this.$wrapper.offset().top;

	        $.each(this.faux_grid, $.proxy(function(i, coords) {
	            this.faux_grid[i] = coords.update({
	                left: this.baseX + (coords.data.col -1) * this.min_widget_width,
	                top: this.baseY + (coords.data.row -1) * this.min_widget_height
	            });
	        }, this));

	        return this;
	    };


	    /**
	    * Get all widgets in the DOM and register them.
	    *
	    * @method get_widgets_from_DOM
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.get_widgets_from_DOM = function() {
	        var widgets_coords = this.$widgets.map($.proxy(function(i, widget) {
	            var $w = $(widget);
	            return this.dom_to_coords($w);
	        }, this));

	        widgets_coords = Gridster.sort_by_row_and_col_asc(widgets_coords);

	        var changes = $(widgets_coords).map($.proxy(function(i, wgd) {
	            return this.register_widget(wgd) || null;
	        }, this));

	        if (changes.length) {
	            this.$el.trigger('gridster:positionschanged');
	        }

	        return this;
	    };


	    /**
	    * Calculate columns and rows to be set based on the configuration
	    *  parameters, grid dimensions, etc ...
	    *
	    * @method generate_grid_and_stylesheet
	    * @return {Object} Returns the instance of the Gridster class.
	    */
	    fn.generate_grid_and_stylesheet = function() {
	        var aw = this.$wrapper.width();
	        var max_cols = this.options.max_cols;

	        var cols = Math.floor(aw / this.min_widget_width) +
	                   this.options.extra_cols;

	        var actual_cols = this.$widgets.map(function() {
	            return $(this).attr('data-col');
	        }).get();

	        //needed to pass tests with phantomjs
	        actual_cols.length || (actual_cols = [0]);

	        var min_cols = Math.max.apply(Math, actual_cols);

	        this.cols = Math.max(min_cols, cols, this.options.min_cols);

	        if (max_cols !== Infinity && max_cols >= min_cols && max_cols < this.cols) {
	            this.cols = max_cols;
	        }

	        // get all rows that could be occupied by the current widgets
	        var max_rows = this.options.extra_rows;
	        this.$widgets.each(function(i, w) {
	            max_rows += (+$(w).attr('data-sizey'));
	        });

	        this.rows = Math.max(max_rows, this.options.min_rows);

	        this.baseX = ($(window).width() - aw) / 2;
	        this.baseY = this.$wrapper.offset().top;

	        if (this.options.autogenerate_stylesheet) {
	            this.generate_stylesheet();
	        }

	        return this.generate_faux_grid(this.rows, this.cols);
	    };

	    /**
	     * Destroy this gridster by removing any sign of its presence, making it easy to avoid memory leaks
	     *
	     * @method destroy
	     * @param {Boolean} remove If true, remove gridster from DOM.
	     * @return {Object} Returns the instance of the Gridster class.
	     */
	    fn.destroy = function(remove) {
	        this.$el.removeData('gridster');

	        // remove bound callback on window resize
	        $(window).unbind('.gridster');

	        if (this.drag_api) {
	            this.drag_api.destroy();
	        }

	        this.remove_style_tags();

	        remove && this.$el.remove();

	        return this;
	    };

	    //jQuery adapter
	    $.fn.gridster = function(options) {
	        return this.each(function() {
	            if (! $(this).data('gridster')) {
	                $(this).data('gridster', new Gridster( this, options ));
	            }
	        });
	    };

	    return Gridster;

	}));

	/*
	* udesk.dragbox
	* depends on : jQuery, GridsterDraggable, Collision
	* output: $.fn.udeskDragbox
	*/
	;(function(root, factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(this, function($, window, document, undefined) {
	  'use strict';
	  if (!$) return {};

	  var udesk = window.udesk = window.udesk || {};

	  // Default settings
	  var _pluginName = 'udeskDragbox',
	    _version = '3.0.0-Beta1',
	    _defaultOptions = {
	      namespace: '',
	      widget_selector: '.dragbox',
	      draggable: {
	        handle: '.dragbox-heading'
	      },
	      selector: {
	        'column': '.dragbox-column',
	        'box': '.dragbox',
	        'heading': '.dragbox-heading',
	        'title': 'h4',
	        'content': '.dragbox-content',
	        'drag-handle': '.dragbox-heading',
	        'refresh': '.refresh-box',
	        'resize': '.maximize-box',
	        'toggle': '.toggle-box',
	        'remove': '.remove-box'
	      },
	      max_cols: 28,
	      widget_base_dimensions: [40, 40],
	      widget_margins: [3, 3],
	      resize: {
	        enabled: false,
	        max_size: [3, 3],
	        min_size: [1, 1]
	      },
	      sizeScaler: [4, 4],
	      icons: {
	        'resize': ['fa fa-expand', 'fa fa-compress'],
	        'toggle': ['fa fa-minus', 'fa fa-plus']
	      },
	      // ajax方法配置
	      'ajax': {},
	      // ajax方法
	      'getData': _getData,
	      // 新建box配置
	      newBox: {
	        id: 'newDragbox',
	        position: [1, 1],
	        size: [1, 1],
	        maxSize: [4, 3],
	        briefUrl: undefined,
	        detailUrl: undefined,
	        title: 'Title',
	        content: '<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>'
	      }, // end of newBox
	      templates: {
	        column: udesk.template ? udesk.template('<div class="dragbox-column"></div>') : undefined,
	        box: udesk.template ? udesk.template('<div class="dragbox" id="{{=it.id}}" data-brief-url="{{=it.briefUrl}}" data-detail-url ="{{=it.detailUrl}}">'
	              +'<div class="dragbox-heading">'
	              +'<h4>{{=it.title}}</h4>'
	              +'<a class="remove-box"><i class="menu-icon fa fa-remove"></i></a>'
	              +'<a class="toggle-box"><i class="menu-icon fa fa-minus"></i></a>'
	              +'<a class="maximize-box"><i class="menu-icon fa fa-expand"></i></a>'
	              +'<a class="refresh-box"><i class="menu-icon fa fa-refresh"></i></a>'
	              +'</div>'
	              +'<div class="dragbox-content" >{{=it.content}}</div>'
	              +'</div>') : undefined
	      }, // end of templates
	      // 内容淡入淡出速度
	      fadeSpeed: 500,
	      // 内容区放下收起速度
	      slideSpeed: 200,
	      // 移除box时是否不改变其余box位置
	      silent: false,
	      // 事件回调函数
	      onInit: function(e) {}, // e为gridster
	      onContendLoaded: function($e) {}, // $e为dragboxContent
	      onBoxAdded: function($e) {}, // $e为$dragbox
	      onBoxRemoved: function(e) {}, // e为gridster
	      onAllRemoved: function(e) {}, // e为gridster
	      onAllFixed: function(e) {}, // e为gridster
	      onAllUnfixed: function(e) {}, // e为gridster
	      onBoxResized: function($e) {}, // $e为$dragbox
	      onBoxRefreshed: function($e) {} // $e为$dragbox
	    }; // end of _defaultOptions

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
	   * 通过ajax获取数据，默认使用udesk.ajax
	   * @method _getData
	   * @param  {String}    url      数据源
	   * @param  {Function}  callback 获取数据成功后调用的回调方法
	   * @return {undefined}          undefined
	   */
	  function _getData(url, args, callback) {
	    var opt = $.extend(true, {}, args, {
	      success: function(res, textStatus, jqXHR) {
	        if($.isFunction(callback)) {
	          callback(res, textStatus, jqXHR);
	        }
	      } // end of success
	    }); // end of opt

	    if ($.isFunction(udesk.ajax)) {
	      udesk.ajax(url, opt);
	    } else if ($.isFunction($.ajax)) {
	      // udesk.ajax不存在，则使用$.ajax
	      $.ajax(opt);
	    } else {
	      console.error('未找到ajax方法定义，加载新建菜单失败');
	    }
	    return;
	  } // end of _getData

	  /**
	   * 生成box结构字符串
	   * @method _createDragbox
	   * @param  {Object} dragboxCfg 设置数据
	   * @param  {Object} options    column区域设置
	   * @return {String}            box结构字符串
	   */
	  function _createDragbox(dragboxCfg, options) {
	    return options.templates.box(dragboxCfg);
	  } // end of _createDragbox

	  /**
	   * 改变Content区域的大小
	   * @method _changeContentSize
	   * @param  {Object} dragbox jQuery对象，dragbox元素
	   * @param  {Number} x       要设置的横向格子个数
	   * @param  {Number} y       要设置的纵向格子个数
	   * @param  {Object} options column区域设置
	   * @return {Number}         返回改变后的高度，如果改变失败则返回false
	   */
	  function _changeContentSize($dragbox, x, y, options) {
	    var selector = options.selector;
	    var dragboxContent = $dragbox.children(selector.content);
	    var dragboxHeading = $dragbox.children(selector.heading);
	//    var gridster = $dragbox.closest(selector.column).gridster().data('gridster');
	    var gridster = $dragbox.closest(selector.column).data('gridster');
	    if (!_isExist($dragbox) || !_isExist(dragboxContent) || !_isExist(dragboxHeading) || !_isExist(gridster)) {
	      return false;
	    }

	    gridster.resize_widget($dragbox, x, y, function(size_x, size_y) {
	      dragboxContent.height(function() {
	        var contHeight = gridster.min_widget_height * size_y 
	        - gridster.options.widget_margins[1] * 2 - dragboxHeading.outerHeight(true) 
	        - dragboxContent.outerHeight(true) + dragboxContent.height();
	        return contHeight;
	      });
	    });
	  } // end of _changeContentSize

	  /**
	   * 收起/展开Content区域
	   * @method _slideContentSize
	   * @param  {Object}  $dragbox jQuery对象，dragbox元素
	   * @param  {Object}  options  column区域设置
	   * @return {Boolean}          判断是否成功执行
	   */
	  function _slideContentSize($dragbox, options) {
	    var selector = options.selector;
	    var dragboxContent = $dragbox.children(selector.content);
	    var dragboxHeading = $dragbox.children(selector.heading);
	    if (!_isExist($dragbox) || !_isExist(dragboxContent) || !_isExist(dragboxHeading)) {
	      return false;
	    }

	    var sizeFlag = $dragbox.data('size') || 'original';
	    var slideFlag = $dragbox.data('slide') || 'down';
	    var x, y;

	    switch (slideFlag) {
	      case 'down':
	      case 'DOWN':
	        // current slide is down
	        switch (sizeFlag) {
	          case 'original':
	          case 'ORIGINAL':
	            x = $dragbox.data('orgSizex') || $dragbox.data('sizex');
	            break;
	          case 'max':
	          case 'MAX':
	            x = $dragbox.data('maxSizex') || $dragbox.data('sizex');
	            break;
	          default:
	            return false;
	        } // end of switch (sizeFlag)
	        _changeContentSize($dragbox, x, 1, options);
	        $dragbox.data('slide', 'up');
	        break;
	      case 'up':
	      case 'UP':
	        // current slide is down
	        switch (sizeFlag) {
	          case 'original':
	          case 'ORIGINAL':
	            x = $dragbox.data('orgSizex') || $dragbox.data('sizex');
	            y = $dragbox.data('orgSizey') || $dragbox.data('sizey');
	            break;
	          case 'max':
	          case 'MAX':
	            x = $dragbox.data('maxSizex') || $dragbox.data('sizex');
	            y = $dragbox.data('maxSizey') || $dragbox.data('sizey');
	            break;
	          default:
	            return false;
	        } // end of switch (sizeFlag) {
	        _changeContentSize($dragbox, x, y, options);
	        $dragbox.data('slide', 'down');
	        break;
	      default:
	        return false;
	    } // end of switch
	    dragboxContent.slideToggle(options.slideSpeed);
	    return true;
	  } // end of _slideContentSize

	  /**
	   * 载入Content区域内容
	   * @method _loadDragboxContent
	   * @param  {Object}  $dragbox jQuery对象，dragbox元素
	   * @param  {Object}  options  column区域设置
	   * @return {Boolean}          判断是否载入成功
	   */
	  function _loadDragboxContent($dragbox, options) {
	    if (!_isExist($dragbox)) {
	      return false;
	    }
	    var selector = options.selector;

	    var maxAnchor = $dragbox.find(selector.resize);
	    var briefUrl = $dragbox.data('briefUrl') || '';
	    var detailUrl = $dragbox.data('detailUrl') || '';
	    var dragboxContent = $dragbox.children(selector.content);
	    var sizeFlag = $dragbox.data('size') || 'original';
	    var url;

	    switch (sizeFlag) {
	      case 'original':
	      case 'ORIGINAL':
	        // loading brief content
	        url = briefUrl || '';
	        break;
	      case 'max':
	      case 'MAX':
	        // loading detail content
	        url = detailUrl || '';
	        break;
	      default:
	        return false;
	    }

	    if (url) {
	      dragboxContent.children().fadeOut(options.fadeSpeed, function() {
	        options.getData(url, options.ajax, function(res, textStatus, jqXHR) {
	          dragboxContent.empty().append(res);
	          // 处理用户定义的事件函数
	          if($.isFunction(options.onContendLoaded)) {
	            options.onContendLoaded(dragboxContent);
	          }  
	        }); // end of options.getData

	      }); // end of fadeOut Callback
	    } // end of if

	    return true;
	  } // end of _loadDragboxContent

	  /**
	   * 添加一个dragbox
	   * @method _addBox
	   * @param  {Object} gridster  column中存放的gridster对象实例
	   * @param  {Object} boxCfg    设置数据
	   * @param  {Object} options   column区域设置
	   * @param  {String} newBoxStr 用户自定义的box模板字符串（可选）
	   * @return {Object}           jQuery对象，包裹新建的doragbox dom元素
	   */
	  function _addBox(gridster, boxCfg, options, newBoxStr) {
	    var nodeStr = newBoxStr || _createDragbox(boxCfg, options);

	    var scaler = options.sizeScaler,
	      size = [
	        boxCfg.size[0] * scaler[0], 
	        boxCfg.size[1] * scaler[1]
	      ],
	      position = boxCfg.position,
	      maxSize = [
	       boxCfg.maxSize[0] * scaler[0], 
	       boxCfg.maxSize[1] * scaler[1]
	      ];

	    var $dragbox = gridster.add_widget(nodeStr, size[0], size[1],
	      position[0], position[1]);
	    $dragbox.data('maxSizex', maxSize[0]).data('maxSizey', maxSize[1]);
	    _changeContentSize($dragbox, $dragbox.data('sizex'), $dragbox.data('sizey'), options);
	    _loadDragboxContent($dragbox, options);

	    return $dragbox;
	  } // end of _addBox

	  /**
	   * 移除一个dragbox
	   * @method _removeBox
	   * @param  {Object}   gridster column中存放的gridster对象实例
	   * @param  {Object}   $dragbox jQuery对象，dragbox元素
	   * @param  {Boolean}  silent   移除后是否不改变其他box的位置（可选），默认为false
	   * @param  {Function} callback 成功移除后执行的回调函数（可选）
	   * @return {Boolean}           判断是否移除成功
	   */
	  function _removeBox(gridster, $dragbox, silent, callback) {
	    if (!_isExist($dragbox) || !_isExist(gridster)) {
	      return false;
	    }
	    gridster.remove_widget($dragbox, silent, function(){
	      // 处理用户定义的事件函数
	      if($.isFunction(callback)) {
	        callback(gridster);
	      } // end of if 

	    }); // end of gridster.remove_widget
	    return true;
	  } // end of _removeBox

	  /**
	   * 移除所有dragbox
	   * @method _removeAll
	   * @param  {Object}   gridster column中存放的gridster对象实例
	   * @param  {Function} callback 成功移除后执行的回调函数
	   * @return {Boolean}           判断是否移除成功
	   */
	  function _removeAll(gridster, callback) {
	    gridster.remove_all_widgets(function() {
	      // 处理用户定义的事件函数
	      if($.isFunction(callback)) {
	        callback(gridster);
	      } // end of if 
	    }); // end of gridster.remove_all_widgets
	    return true;
	  } // end of _removeAll

	  /**
	   * 判断是否可以拖动当前column的dragbox
	   * @method _isDraggable
	   * @param  {Object}  gridster column中存放的gridster对象实例
	   * @return {Boolean}          判断是否可以拖动当前column的dragbox
	   */
	  function _isDraggable(gridster) {
	    return !gridster.drag_api.disabled;
	  } // end of _isDraggable

	  /**
	   * 固定所有dragbox
	   * @method _fixAll
	   * @param  {Object}  gridster column中存放的gridster对象实例
	   * @return {Boolean}          判断是否设置成功
	   */
	  function _fixAll(gridster) {
	    gridster.disable();
	    return true;
	  } // end of _fixAll

	  /**
	   * 允许拖动所有dragbox
	   * @method _unfixAll
	   * @param  {Object}  gridster column中存放的gridster对象实例
	   * @return {Boolean}          判断是否设置成功
	   */
	  function _unfixAll(gridster) {
	    gridster.enable();
	    return true;
	  } // end of _unfixAll

	  /**
	   * 判断box尺寸状态并最大化或复原
	   * @method _resizeBox
	   * @param  {Object}    obj     jQuery对象，包裹object被点击的最大化图标dom元素
	   * @param  {Object}    options column区域设置
	   * @return {undefined}         undefined
	   */
	  function _resizeBox($obj, options) {
	    var $this = $obj;
	    var selector = options.selector;
	    var icons = options.icons;
	    var icon = $this.children('i');
	    var dragbox = $this.closest(selector.box);
	    var dragboxTitle = $this.siblings(selector.title).html();
	    var x, y;

	    var sizeFlag = dragbox.data('size') || 'original';
	    var slideFlag = dragbox.data('slide') || 'down';

	    switch (sizeFlag) {
	      case 'original':
	      case 'ORIGINAL':
	        // current size is the original, change to max
	        dragbox.data('orgSizex', dragbox.data('sizex')).data('orgSizey', dragbox.data('sizey'));
	        x = dragbox.data('maxSizex') || dragbox.data('sizex');
	        switch (slideFlag) {
	          case 'up':
	          case 'UP':
	            y = 1;
	            break;
	          case 'down':
	          case 'DOWN':
	            y = dragbox.data('maxSizey') || dragbox.data('sizey');
	            break;
	          default:
	            return false;
	        }
	        dragbox.data('size', 'max');
	        break;
	      case 'max':
	      case 'MAX':
	        // current size is the max, change to original
	        x = dragbox.data('orgSizex') || dragbox.data('sizex');
	        switch (slideFlag) {
	          case 'up':
	          case 'UP':
	            y = 1;
	            break;
	          case 'down':
	          case 'DOWN':
	            y = dragbox.data('orgSizey') || dragbox.data('sizey');
	            break;
	          default:
	            return false;
	        }
	        dragbox.data('size', 'original');
	        break;
	      default:
	        return false;
	    } // end of switch
	    icon.toggleClass(icons.resize[0]).toggleClass(icons.resize[1]);
	    _changeContentSize(dragbox, x, y, options);
	    _loadDragboxContent(dragbox, options);

	  } // end of _resizeBox

	  /**
	   * 绑定初始化事件与点击事件
	   * @method _dragboxListener
	   * @param  {Object} $element jQuery对象，column的父元素
	   * @param  {Object} options  column区域设置
	   * @return {Boolean}         判断事件绑定是否成功
	   */
	  function _dragboxListener($element, options) {
	    var selector = options.selector;
	    var icons = options.icons;
	    if (!_isExist(selector.column, $element)) {
	      return false;
	    }

	    // init boxes event
	    $element.on('uc:initDragboxes', function() {
	      $(this).find(selector.box).each(function() {
	        var $this = $(this);
	        _changeContentSize($this, $this.data('sizex'), $this.data('sizey'), options);
	        _loadDragboxContent($this, options);
	      });
	    }); // end of uc:initDragboxes

	/*
	    // init box event
	    $(selector.box).on('uc:initDragbox', function() {
	      $(this).each(function() {
	        var $this = $(this);
	        _changeContentSize($this, $this.data('sizex'), $this.data('sizey'), options);
	        _loadDragboxContent($this, options);
	      });
	    }); // end of uc:initDragbox
	*/

	    // Refresh box content event
	    $element.on('click', selector.refresh, function() {
	      _loadDragboxContent($(this).closest(selector.box), options);

	      if($.isFunction(options.onBoxRefreshed)) {
	        options.onBoxRefreshed($(this).closest(selector.box));
	      } // end of if 

	    }); // end of onClick refresh

	    // Maximize or normalize size event
	    $element.on('click', selector.resize, function() {
	      _resizeBox($(this), options);

	      if($.isFunction(options.onBoxResized)) {
	        options.onBoxResized($(this).closest(selector.box));
	      } // end of if 

	    }); // end of onClick resize

	    // Toggle box content event
	    $element.on('click', selector.toggle, function() {
	      var icon = $(this).children('i');
	      //      $(this).parent().siblings('.dragbox-content').slideToggle(200);
	      icon.toggleClass(icons.toggle[0]).toggleClass(icons.toggle[1]);
	      _slideContentSize($(this).closest(selector.box), options);
	      return;
	    }); // end of onClick toggle

	    // Remove box event
	    $element.on('click', selector.remove, function() {
	      //delete code here
	      var $dragbox = $(this).closest(selector.box);
	      var gridster = $dragbox.closest(selector.column).data('gridster');
	      _removeBox(gridster, $dragbox, options.silent);

	      // 处理默认事件函数
	      if($.isFunction(options.onBoxRemoved)) {
	        options.onBoxRemoved(gridster);
	      } // end of if 

	      return;
	    }); // end of onClick remove

	    return true;
	  } //end of _dragboxListener

	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,

	    /**
	     * 对象初始化方法
	     * @method init
	     * @return {Object} this对象实例
	     */
	    init: function() {
	      var options = this.options;
	      var column = options.selector.column;
	      var $ele = this.$element;
	      // 寻找column dom对象，如果不存在则创建它
	      var $column = $ele.children(column) 
	      || $ele.append(options.templates.column(options)).children(column);

	      this.gridster = $column.gridster(options).data('gridster');

	      _dragboxListener($ele, options);
	      $ele.trigger('uc:initDragboxes');

	      // 处理用户定义的事件函数
	      if($.isFunction(options.onInit)) {
	        options.onInit(this.gridster);
	      } // end of if 

	      return this;
	    }, // end of init

	    /**
	     * 添加一个dragbox
	     * @method addBox
	     * @param  {Object}   boxCfg  box配置对象
	     * @param  {Function} boxTmpl box模板
	     * @return {Object}           this对象实例
	     */
	    addBox: function(boxCfg, boxTmpl) {
	      var options = this.options;
	      var config = $.extend(true, {}, options.newBox, boxCfg);
	      var $dragbox;

	      if (typeof boxTmpl == 'Function') {
	        // 使用用户自定义模板
	        $dragbox = _addBox(this.gridster, config, options, boxTmpl(boxCfg));
	      } else {
	        // 使用默认模板
	        $dragbox = _addBox(this.gridster, config, options);
	      }

	      // 处理用户定义的事件函数
	      if($.isFunction(options.onBoxAdded)) {
	        options.onBoxAdded($dragbox);
	      }  

	      return this;
	    }, // end of addBox

	    /**
	     * 移除一个dragbox
	     * @method removeBox
	     * @param  {Object}  $dragbox  jQuery对象，包裹dragbox dom元素
	     * @param  {Boolean}  silent   移除后是否改变其他box的位置
	     * @param  {Function} callback 成功移除后执行的回调函数
	     * @return {Object}            this对象实例
	     */
	    removeBox: function($dragbox, silent, callback) {
	      _removeBox(this.gridster, $dragbox, silent, callback);

	      // 处理用户定义的事件函数
	      if($.isFunction(this.options.onBoxRemoved)) {
	        this.options.onBoxRemoved(this.gridster);
	      } // end of if 

	      return this;
	    }, // end of removeBox

	    /**
	     * 移除所有dragbox
	     * @method removeAll
	     * @param  {Function} callback 成功移除后执行的回调函数
	     * @return {Object}            this对象实例
	     */
	    removeAll: function(callback) {
	      _removeAll(this.gridster, callback);

	      // 处理用户定义的事件函数
	      if($.isFunction(this.options.onAllRemoved)) {
	        this.options.onAllRemoved(this.gridster);
	      } // end of if 

	      return this;
	    }, // end of removeAll

	    /**
	     * 刷新box内容区
	     * @method refrshBox
	     * @param  {Object}   $dragbox jQuery对象，包裹dragbox dom元素
	     * @param  {Function} callback 成功刷新后执行的回调函数
	     * @return {[type]}
	     */
	    refrshBox: function($dragbox, callback) {
	      var options = this.options;
	      _loadDragboxContent($dragbox, options);

	      if($.isFunction(callback)) {
	        callback();
	      } // end of if 

	      // 处理用户定义的事件函数
	      if($.isFunction(options.onBoxRefreshed)) {
	        options.onBoxRefreshed($(this).closest(selector.box));
	      } // end of if 

	    }, // end of refreshBox

	    /**
	     * 判断是否可以拖动当前column的dragbox
	     * @method isDraggable
	     * @return {Boolean} 判断是否可以拖动当前column的dragbox
	     */
	    isDraggable: function() {
	      return _isDraggable(this.gridster);
	    }, // end of isDraggable

	    /**
	     * 固定所有dragbox
	     * @method fixAll
	     * @return {Object} this对象实例
	     */
	    fixAll: function() {
	      _fixAll(this.gridster);

	      // 处理用户定义的事件函数
	      if($.isFunction(this.options.onAllFixed)) {
	        this.options.onAllFixed(this.gridster);
	      } // end of if 

	      return this;
	    }, // end of fixAll

	    /**
	     * 允许拖动所有dragbox
	     * @method unfixAll
	     * @return {Object} this对象实例
	     */
	    unfixAll: function() {
	      _unfixAll(this.gridster);

	      // 处理用户定义的事件函数
	      if($.isFunction(this.options.onAllUnfixed)) {
	        this.options.onAllUnfixed(this.gridster);
	      } // end of if 

	      return this;
	    } // end of unfixAll


	  }); // end of $.extend


	  // Create the udesk plugin based on Jquery
	  $.fn[_pluginName] = function(options) {
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);
	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;
	}));



/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* 
	 * udesk.loadingmask.js
	 * Version 3.0.0-beta1
	 * Date 2016-03-21
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.loadingmask.js
	 *
	 * Usage:
	 *   var instance = $('selector').udeskLoadingMask({}).data('udeskLoadingMask');
	 *   instance.addMask();
	 *   instance.removeMask();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	;(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  if (!$) return {};

	  var udesk = window.udesk = window.udesk || {};

	  // Default settings
	  var _pluginName = 'udeskLoadingMask',
	    _version = '1.0.0-Beta1',
	    _defaultOptions = {
	      color: '#FFFFFF',
	      template: '<div class="u-loadingmask"><a class="u-loadingimg"></a></div>',
	      fadeSpeed: 500,
	      // 事件回调函数
	      onInit: function($e) {}, // $e为$mask
	      onMaskAdded: function($e) {}, // $e为$mask
	      onMaskRemoved: function($e) {}, // $e为$element
	    }; // end of _defaultOptions

	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function(element, options) {
	    this.$element = element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor : _Plugin,
	    VERSION: _version,
	    // jquery对象，包裹mask dom元素
	    $mask: undefined,

	    /**
	     * 对象初始化方法
	     * @method init
	     * @return {Object} this对象实例
	     */
	    init: function() {
	      var options = this.options;
	      var mask = $(options.template);
	      mask.css({
	          'background-color': options.color,
	          'z-index': '1000'
	        });

	      this.$mask = mask;

	      // 处理用户定义的事件函数
	      if($.isFunction(this.options.onInit)) {
	        this.options.onInit(this.$mask);
	      } // end of if 

	      this.addMask();
	      return this;
	    }, // end of init

	    /**
	     * 添加蒙版
	     * @method addMask
	     * @return {Object} this对象实例
	     */
	    addMask: function() {
	      var $node = this.$element;
	      //    $node.height($node.height());
	      $node.css({
	        'position': 'relative'
	      });

	      this.$mask.prependTo($node);

	      // 处理用户定义的事件函数
	      if($.isFunction(this.options.onMaskAdded)) {
	        this.options.onMaskAdded(this.$mask);
	      } // end of if 

	      return this;
	    }, // end of addMask

	    /**
	     * 删除蒙版
	     * @method removeMask
	     * @return {Object}   this对象实例
	     */
	    removeMask: function() {
	      var options = this.options;
	      var $mask = this.$mask;

	      $mask.fadeOut(options.fadeSpeed, function() {
	        $mask.remove();
	      }); // end of fadeOut

	      // 处理用户定义的事件函数
	      if($.isFunction(options.onMaskRemoved)) {
	        options.onMaskRemoved(this.$element);
	      } // end of if 

	      return this;
	    } // end of removeMask

	  });

	  // Create the udesk plugin based on Jquery
	  $.fn[_pluginName] = function(options) {
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);   
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);
	      if (! $(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    });
	  }; // end of $.fn[_pluginName] 

	  // Expose defaults and Constructor
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));



/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.newmenu.js
	 * Version 3.0.0-beta1
	 * Date 2016-03-21
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.newmenu.js
	 *
	 * Usage:
	 *   var instance = $('#newMenu').udeskNewMenu().data('udeskNewMenu');
	 *   instance.refreshMenu();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	//var module = {}, window = this, document = this.document;
	;(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  var udesk = window.udesk = window.udesk || {};

	  // Default settings
	  var _pluginName = 'udeskNewMenu',
	    _version = '1.0.0-Beta1',
	    _defaultOptions = {
	      // 本地数据源，优先级高于ajax
	      'localData': undefined,            
	      'openOnClick': true,
	      // 一级菜单json数据获取地址
	      'url': '',
	      // ajax方法配置
	      'ajax': {},
	      // ajax方法
	      'getData': _getData,
	      'templates': {
	        // 菜单项模板方法
	        'itemText': udesk.template ? udesk.template('<a data-sys-id="#=data[i].sysId#" data-submenu-url="{{=it.submenuUrl}}" data-tab-url="{{=it.tabUrl}}" data-tab-mode="{{=it.tabMode}}" data-loaded="false">{{=it.shortName}}</a>') : undefined
	      },
	      // 事件回调函数
	      'onOpen':  function($e){}, // $e为$(e.item)
	      'onClick': function($e){}, // $e为$('span.k-link a')
	      'onHover': function($e){}, // $e为$('span.k-link a')
	    }; // end of _defaultOptions

	  /**
	   * 生成菜单dom元素字符串
	   * @method _createDomString
	   * @param  {Object} data     菜单item数据
	   * @param  {Object} template 菜单模板方法
	   * @return {String}          dom元素字符串
	   */
	  function _createDomString(data, template) {
	    if (!$.isFunction(template)) {
	      udesk.error('菜单项模板方法错误');
	      return undefined;
	    }
	    return template(data);
	  }; // end of _createDomString

	  /**
	   * 递归生成菜单item对象数组
	   * @method _createItem
	   * @param  {Object} data    菜单item数据
	   * @param  {Object} options 用户设置
	   * @return {Array}          菜单item对象数组
	   */
	  function _createItem(data, options, isFirstClass) {
	    var i, item, itemS = [];
	    for (i = 0; i < data.length; i++) {
	      var placeholder = isFirstClass ? [] : undefined;
	      item = {
	        'text': _createDomString(data[i], options.templates.itemText),
	        'encoded': false,
	        'items': data[i].items ? _createItem(data[i].items, options) : placeholder
	      };
	      itemS.push(item);
	    };
	    return itemS;
	  } // end of _createItem

	  /**
	   * 通过ajax获取json数据，默认使用udesk.ajax
	   * @method _getData
	   * @param  {String}    url      json数据源
	   * @param  {Function}  callback 获取数据成功后调用的回调方法
	   * @return {undefined}          undefined
	   */
	  function _getData(url, args, callback) {
	    var opt = $.extend(true, {}, args, {
	      success: function(data, textStatus, jqXHR) {
	        if($.isFunction(callback)) {
	          callback(data, textStatus, jqXHR);
	        }
	      } // end of success
	    }); // end of opt

	    if ($.isFunction(udesk.ajax)) {
	      udesk.ajax(url, opt);
	    } else if ($.isFunction($.ajax)) {
	      $.ajax(opt);
	    } else {
	      console.error('未找到ajax方法定义，加载新建菜单失败');
	    }
	    return;
	  } // end of _getData

	  /**
	   * 绑定叶菜单条目点击、划过事件
	   * @method _bindAction
	   * @param  {Object}  object this组件对象
	   * @return {Object}         this对象
	   */
	  function _bindAction(object) {
	    var _this = object;
	    var options = _this.options;

	    // 菜单条目点击事件
	    _this.$element.on('click', 'span.k-link a', function() {
	      if($.isFunction(options.onClick)) {
	        // onClick方法可由开发者定制
	        options.onClick($(this));
	      }
	    }); // end of onClick

	    // 菜单条目划过事件
	    _this.$element.on('hover', 'span.k-link a', function() {
	      if($.isFunction(options.onHover)) {
	        // onHover方法可由开发者定制
	        options.onHover($(this));
	      }
	    }); // end of onHover

	    return _this;
	  } //end of _bindAction

	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,
	    // kendoMenu对象实例
	    newMenu: null,

	    /**
	     * 初始化newmenu组件
	     * @method init
	     * @return {Object} this对象实例
	     */
	    init : function(){
	      var _this = this,
	      options = _this.options,

	      opt = $.extend(true, {}, options, {
	        open: function(e) {
	          _this.openSubMenu(e.item);
	          // 加载传入的用户onOpen方法
	          if($.isFunction(options.onOpen)) {
	            options.onOpen($(e.item));
	          }
	        } // end of open
	      }); // end of opt

	      _this.newMenu = this.$element.kendoMenu(opt).data('kendoMenu');      
	      _this.refreshMenu(function() {
	        _bindAction(_this);
	      });
	      return _this;      
	    },//end of init

	    /**
	     * 刷新加载一级菜单信息
	     * @method refreshMenu
	     * @param  {Function} callback 在刷新菜单后执行的回调函数
	     * @return {Object}            this对象实例
	     */
	    refreshMenu: function(callback) {
	      var _this = this;
	      var options = _this.options;
	      // 优先加载本地一级菜单数据
	      if (options.localData) {

	        _this.renderMenu(options.localData.data);
	        if ($.isFunction(callback)) {
	          callback();
	        }
	      } else {

	        options.getData(options.url, options.ajax, function(data, textStatus, jqXHR) {
	          _this.renderMenu(data);
	          if ($.isFunction(callback)) {
	            callback();
	          }
	        });
	      } // end of else
	      return this;
	    }, //end of refreshMenu

	    /**
	     * 渲染一级菜单信息
	     * @method renderMenu
	     * @param  {Object} data 一级菜单json数据
	     * @return {Object}      this对象实例
	     */
	    renderMenu: function(data) {
	      var itemS = _createItem(data, this.options, true);
	      var newMenu = this.newMenu;
	      // 移除所有已存在的菜单，并载入新菜单
	      newMenu.remove($('li', $('li[data-main]', newMenu.element)))
	             .append(itemS, $('li[data-main]', newMenu.element));

	      //将mainMenu设置标志
	      $('li[data-main]', newMenu.element).data('main', 'true');
	      return this;
	    }, //end of renderMenu

	    /**
	     * 展开子菜单
	     * @method openSubMenu
	     * @param  {HTMLElement} liItem 菜单li元素
	     * @return {Object}             this对象实例
	     */
	    openSubMenu: function(liItem) {
	      var _this = this;
	      var options = _this.options;
	      var $li = $(liItem);
	      var $a = $li.children('span').children('a');

	      //判断是否为主菜单
	      if ($li.data('main') != undefined && $li.data('main') == false) {
	        // 是主菜单, 未加载一级菜单，则开始加载一级菜单并渲染
	        // 默认item数据保存在返回的json格式对象的data属性
	        // getData方法可由开发者定制
	        options.getData(options.url, options.ajax, function(data, textStatus, jqXHR) {
	          var itemS = _createItem(data, options, true);
	          _this.newMenu.append(itemS, $li);
	        });

	        $li.data('main', 'true');
	        $a.data('loaded', 'true');
	        return _this;
	      } //end of if

	      // 判断是否已加载了子菜单
	      if ($a.data('loaded') != undefined && $a.data('loaded') == false) {
	        // 未加载子菜单，则开始加载
	        // 从ajax获取子菜单json数据
	              
	        var url = $a.data('submenuUrl');   
	        if (!url) {
	          // set loaded and return
	          $a.data('loaded', 'true');
	          return _this;
	        } // end of if

	        options.getData(url, options.ajax, function(data, textStatus, jqXHR) {
	          var itemS = _createItem(data, options, false);
	          _this.newMenu.append(itemS, $li);
	        });

	        $a.data('loaded', 'true');
	      } //end of if
	    } //end of openSubMenu

	  }); // end of $.extend

	  // Create the udesk plugin based on Jquery
	  $.fn[_pluginName] = function(options) {
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);
	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));



/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.treemenu.js
	 * Version 1.0.0 Beta 1.1
	 * Date 2016-03-11
	 * Author Liu Jiajie
	 * http://10.230.135.90:9080/udesk/components/treemenu/1.0.0/udesk.treemenu.js
	 *
	 * Usage:
	 *   var instance = $('.sidebar').udeskTreeMenu({}).data('udeskTreeMenu');
	 *   instance.someMethod();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	//var module = {}, window = this, document = this.document;
	;
	(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  var udesk = window.udesk = window.udesk || {};
	  var kendoConsole = window.kendoConsole || function(s) {};

	  // Default settings
	  var _pluginName = 'udeskTreeMenu',
	    _version = '3.0.0-Beta1.1',
	    _defaultOptions = {
	      //本地数据源，优先级高于ajax
	      'localData': undefined,
	      // 菜单获取地址
	      'url': undefined,
	      // ajax方法配置
	      'ajax': {},
	      // ajax方法
	      'getData': _getData,
	      'templates': {
	        // 菜单项模板方法
	        'menuItem': udesk.template ? udesk.template('{{var data=it; for(var i=0;i<data.length;i++){ }}<li class="treeview" data-menu-id="{{=data[i].menuId}}" data-sys-id="{{=data[i].sysId}}" data-submenu-url="{{= data[i].submenuUrl}}" data-tab-url="{{= data[i].tabUrl}}" data-tab-mode="{{=data[i].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=data[i].icon}}"></i><span data-treemenu-type="title">{{=data[i].shortName}}</span>{{if(data[i].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a>{{if(data[i].items) {var sdata=data[i].items;}}<ul class="treeview-menu" style="display:none;"> {{for(var j=0;j<sdata.length;j++){ }} <li data-menu-id="{{=sdata[j].menuId}}" data-sys-id="{{=sdata[j].sysId}}" data-submenu-url="{{=sdata[j].submenuUrl}}" data-tab-url="{{=sdata[j].tabUrl}}" data-tab-mode="{{=sdata[j].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=sdata[j].icon}}"></i><span data-treemenu-type="title">{{=sdata[j].shortName}}</span>{{if(sdata[j].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a>{{if(sdata[j].items){var ssdata=sdata[j].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var k=0;k<ssdata.length;k++){ }} <li data-menu-id="{{=ssdata[k].menuId}}" data-sys-id="{{=ssdata[k].sysId}}" data-submenu-url="{{=ssdata[k].submenuUrl}}" data-tab-url="{{=ssdata[k].tabUrl}}" data-tab-mode="{{=ssdata[k].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=ssdata[k].icon}}"></i><span data-treemenu-type="title">{{=ssdata[k].shortName}}</span>{{if(ssdata[k].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> {{if(ssdata[k].items){var sssdata=ssdata[k].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var l=0;l<sssdata.length;l++){ }} <li data-menu-id="{{=sssdata[l].menuId}}" data-sys-id="{{=sssdata[l].sysId}}" data-submenu-url="{{=sssdata[l].submenuUrl}}" data-tab-url="{{=sssdata[l].tabUrl}}" data-tab-mode="{{=sssdata[l].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=sssdata[l].icon}}"></i><span data-treemenu-type="title">{{=sssdata[l].shortName}}</span>{{if(sssdata[l].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> {{if(sssdata[l].items){var ssssdata=sssdata[l].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var m=0;m<ssssdata.length;m++){ }} <li data-menu-id="{{=ssssdata[m].menuId}}" data-sys-id="{{=ssssdata[m].sysId}}" data-submenu-url="{{=ssssdata[m].submenuUrl}}" data-tab-url="{{=ssssdata[m].tabUrl}}" data-tab-mode="{{=ssssdata[m].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=ssssdata[m].icon}}"></i><span data-treemenu-type="title">{{=ssssdata[m].shortName}}</span>{{if(ssssdata[m].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul> {{ } }} </li> {{ } }}') : undefined,
	        // 子菜单项模板方法
	        'submenuItem': udesk.template ? udesk.template('<ul class="treeview-menu" style="display:none;" > {{var data=it; for(var i=0;i<data.length;i++){ }} <li data-sys-id="{{=data[i].sysId}}" data-submenu-url="{{=data[i].submenuUrl}}" data-tab-url="{{=data[i].tabUrl}}" data-tab-mode="{{=data[i].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=data[i].icon}}"></i><span data-treemenu-type="title">{{= data[i].shortName}}</span>{{if(data[i].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> {{if(data[i].items) {var sdata=data[i].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var j=0;j<sdata.length;j++){ }} <li data-menu-id="{{=sdata[j].menuId}}" data-sys-id="{{=sdata[j].sysId}}" data-submenu-url="{{=sdata[j].submenuUrl}}" data-tab-url="{{=sdata[j].tabUrl}}" data-tab-mode="{{=sdata[j].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=sdata[j].icon}}"></i><span data-treemenu-type="title">{{=sdata[j].shortName}}</span>{{if(sdata[j].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> {{if(sdata[j].items){var ssdata=sdata[j].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var k=0;k<ssdata.length;k++){ }} <li data-menu-id="{{=ssdata[k].menuId}}" data-sys-id="{{=ssdata[k].sysId}}" data-submenu-url="{{=ssdata[k].submenuUrl}}" data-tab-url="{{=ssdata[k].tabUrl}}" data-tab-mode="{{=ssdata[k].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=ssdata[k].icon}}"></i><span data-treemenu-type="title">{{=ssdata[k].shortName}}</span>{{if(ssdata[k].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> {{if(ssdata[k].items){var sssdata=ssdata[k].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var l=0;l<sssdata.length;l++){ }} <li data-menu-id="{{=sssdata[l].menuId}}" data-sys-id="{{=sssdata[l].sysId}}" data-submenu-url="{{=sssdata[l].submenuUrl}}" data-tab-url="{{=sssdata[l].tabUrl}}" data-tab-mode="{{=sssdata[l].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=sssdata[l].icon}}"></i><span data-treemenu-type="title">{{=sssdata[l].shortName}}</span>{{if(sssdata[l].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> {{if(sssdata[l].items){var ssssdata=sssdata[l].items;}} <ul class="treeview-menu" style="display:none;"> {{for(var m=0;m<ssssdata.length;m++){ }} <li data-menu-id="{{=ssssdata[m].menuId}}" data-sys-id="{{=ssssdata[m].sysId}}" data-submenu-url="{{=ssssdata[m].submenuUrl}}" data-tab-url="{{=ssssdata[m].tabUrl}}" data-tab-mode="{{=ssssdata[m].tabMode}}" data-loaded="false"> <a><i class="icon-sidebar {{=ssssdata[m].icon}}"></i><span data-treemenu-type="title">{{=ssssdata[m].shortName}}</span>{{if(ssssdata[m].items){ }}<i class="icon-menu-expand"></i>{{ } }}</a> </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul> {{ } }} </li> {{ } }} </ul>') : undefined,
	        // 缩减版菜单项模板方法
	        'reducedmenuItem': kendo.template ? kendo.template('# for(var i=0;i<data.length;i++){ #'
	            + '<li class="clearfix" data-sys-id="#=data[i].sysId#" data-submenu-url="#= data[i].submenuUrl#" data-tab-url="#=data[i].tabUrl#" data-tab-mode="#=data[i].tabMode#" data-title="#= data[i].shortName#" data-loaded="false">'
	            + '<i class="icon-sidebar #=data[i].icon#"></i>'
	            + ' </li># } #') : undefined
	      }, // end of templates
	      'selector': {
	        'wrapper': '.main-sidebar',
	        'mainRoot': '#mainSideBarMenu',
	        'reducedRoot': '#reducedSideBarMenu',  
	        'treeMenu': '.treeview-menu',
	        'gradeOneItem': '.treeview',
	        'indexItem': 'li[data-treemenu-role="index"]',
	        'expandIcon': 'icon-menu-expand',
	        'loadingIcon': 'icon-loadingimg'
	      }, // end of selector
	      // 菜单动画速度
	      'speed': 200,
	      // 树形区域相对窗口底部需要减去的高度
	      'heightReduced': 50,
	      // 初始化事件
	      'onInit' : function($e) {}, // $e为$(options.selector.mainRoot).children().first()
	      'onClick': function($e) {}, // $e为$('li')
	      'onMouseover': function($e) {}, // $e为$('li a')
	      'onRefresh':  function($e) {} // $e为$e为新建组件时引用的jQuery对象
	    }; // end of _defaultOptions

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
	   * 生成菜单dom元素字符串
	   * @method _createDomString
	   * @param  {Object} data     菜单item数据
	   * @param  {Object} template 菜单模板方法
	   * @return {String}          dom元素字符串
	   */
	  function _createDomString(data, template) {
	    if (!$.isFunction(template)) {
	      udesk.error('菜单项模板方法错误');
	      return undefined;
	    }
	    return template(data);
	  } // end of _createDomString

	  /**
	   * 通过ajax获取json数据，默认使用udesk.ajax
	   * @method _getData
	   * @param  {String}    url      json数据源
	   * @param  {Function}  callback 获取数据成功后的回调方法
	   * @param  {Function}  errorCb  获取数据失败后的回调方法
	   * @return {undefined}          undefined
	   */
	  function _getData(url, args, callback, errorCb) {
	    var opt = $.extend(true, {}, args, {
	      success: function(data, textStatus, jqXHR) {
	        if($.isFunction(callback)) {
	          callback(data, textStatus, jqXHR);
	        }
	      }, // end of success
	      error: function(XHR, textStatus, errorThrown) {
	        if($.isFunction(errorCb)) {
	          errorCb(XHR, textStatus, errorThrown);
	        }
	      } // end of error
	    }); // end of opt

	    if ($.isFunction(udesk.ajax)) {
	      udesk.ajax(url, opt);
	    } else if ($.isFunction($.ajax)) {
	      $.ajax(opt);
	    } else {
	      console.error('未找到ajax方法定义，加载树形菜单失败');
	    }
	    return;
	  } // end of _getData

	  /**
	   * 根据class调整dom元素高度(dom元素需要设置为position:relative)
	   * @method _adaptHeightByClass
	   * @param  {String} selector      jQuery选择器字符串
	   * @param  {Number} heightReduced 相对窗口底部需要减去的高度
	   * @return {Object}               jQuery对象
	   */
	  function _adaptHeightByClass(selector, heightReduced){
	    // 获得当前窗口高度
	    var heightWindow = document.documentElement.clientHeight;
	    // 设置相对高度
	    return $(selector).css({
	      'height': heightWindow-heightReduced
	    //'position': 'relative'
	    });
	  } // end of _adaptHeightByClass

	  /**
	   * 绑定树形菜单事件
	   * @method _bindAction
	   * @param  {object}    object      this组件对象实例
	   * @param  {String}    menu        菜单根元素selector
	   * @param  {String}    reducedmenu 缩略菜单根元素selector
	   * @param  {Integer}   speed       动画速率
	   * @return {Object}                this对象实例
	   */
	  function _bindAction(object, menu, reducedMenu, speed) {
	    var _this = object;
	    var options = _this.options;
	    var treeClass = _this.options.selector.treeMenu;
	    // click event
	    $(menu, _this.$element).on('click', 'li a', function(e) {
	      //Get the clicked anchor element and the next element
	      var $this = $(this); // <a>
	      var parentLi = $this.parent(); // 父li <li>

	      _this.loadSubmenu(parentLi, function() {
	          _this.toggleMenu($this, function() {
	            if($.isFunction(options.onClick)) {
	              // onClick方法可由开发者定制
	              options.onClick(parentLi);
	            } // end of if
	          }); // end of toggleMenu
	        }); // end of _this.loadSubmenu
	      return;
	    }); // end of onClick

	    // mouseover event
	    $(menu, _this.$element).on('mouseover', 'li a', function(e) {
	      if($.isFunction(options.onMouseover)) {
	        // onClick方法可由开发者定制
	        options.onMouseover($(this).parent());
	      }
	      return;
	    }); // end of onMouseover

	    // 根据窗口大小变化，自适应调整菜单区域高度
	    $(window).resize(function() {
	      _adaptHeightByClass(options.selector.mainRoot, options.heightReduced); // 原为wrapper
	      return;
	    }); // end of window onResize 

	  } //end of _bindAction


	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,

	    /**
	     * 初始化treemenu组件
	     * @method init
	     * @return {Object} this对象实例
	     */
	    init: function() {
	      var _this = this;
	      var options = _this.options;
	      var selector = options.selector;

	      // 如果不存在
	      if(!$(selector.mainRoot, _this.$element).length) {
	        $('<ul/>', {
	          'class': 'sidebar-menu',
	          'id': selector.mainRoot.slice(1, selector.mainRoot.length)
	        }).appendTo(_this.$element);
	      }

	      _this.refreshMenu(function() {
	        // 调整菜单区域高度使之充满窗口
	        _adaptHeightByClass(options.selector.mainRoot, options.heightReduced); // 原为wrapper

	        _bindAction(_this, selector.mainRoot, selector.reducedRoot, options.speed);
	        // 初始化事件，参数为第一个一级菜单的<li>元素
	        if ($.isFunction(options.onInit)) {
	          options.onInit($(selector.mainRoot, _this.$element).children().first());
	        }        
	      }); // end of _this.refreshMenu

	      return _this;   
	    }, // end of init

	    /**
	     * 刷新加载一级菜单信息
	     * @method refreshMenu
	     * @param  {Function}  callback 在刷新菜单后执行的回调函数
	     * @return {Object}             this对象实例
	     */
	    refreshMenu: function(callback) {
	      var _this = this;
	      var options = _this.options;
	      var $ele = _this.$element;
	      // 优先加载本地一级菜单数据
	      if(options.localData) {
	        _this.renderMenu(options.localData.data, function() {
	          if($.isFunction(callback)) {
	            callback($ele);
	          }
	          if($.isFunction(options.onRefresh)) {
	            options.onRefresh($ele);
	          }
	        }); // end of renderMenu

	      } else if(options.url) {
	        options.getData(options.url, options.ajax, function(data, textStatus, jqXHR) {
	          _this.renderMenu(data, function() {
	            if($.isFunction(callback)) {
	              callback($ele);
	            }
	            if($.isFunction(options.onRefresh)) {
	              options.onRefresh($ele);
	            }
	          }); // end of renderMenu
	        }); // end of getData
	      } // end of else if
	      return _this;
	    }, // end of refreshMenu

	    /**
	     * 加载子菜单
	     * @method loadSubmenu
	     * @param  {Object}    $liNode  jquery对象 父<li>元素
	     * @param  {Function}  callback 加载子菜单后执行的回调方法
	     * @return {Object}             this对象实例
	     */   
	    loadSubmenu: function($liNode, callback) {
	      var _this = this;
	      var options = _this.options;
	      var selector = options.selector;
	      var menuExpandIcon = selector.expandIcon;
	      var loadingIcon = selector.loadingIcon;      
	      var url = $liNode.data('submenuUrl'); // data-submenu-url='xx'
	      var childA = $liNode.children('a');
	      var loadFlag = $liNode.data('loaded'); // data-loaded

	      if('loading' == loadFlag) {
	        // 处于加载中状态，不做处理并返回
	        return false;
	      } else if('true' == loadFlag || true == loadFlag) {
	        // 已加载完毕，只执行回调并返回
	        if($.isFunction(callback)) {
	          callback($liNode);          
	        }
	        return _this;
	      } else if(!url) {
	        // data-submenu-url为空时，只执行回调并返回
	        if($.isFunction(callback)) {
	          callback($liNode);          
	        }
	        return _this;
	      } else {
	        // data-submenu-url不为空，且未定义data-loaded或loaded为false('false')时
	        $liNode.data('loaded', 'loading');
	        if(childA.find('.'+menuExpandIcon).length) {
	          // 存在展开图标，则将第一个替换为载入图标，并删除其他展开图标
	          childA.find('.'+menuExpandIcon).first().removeClass(menuExpandIcon).addClass(loadingIcon).html('    ').siblings('.'+menuExpandIcon).remove();
	        } else if(childA.find('.'+loadingIcon).length) {
	          // 不存在展开图标，存在载入图标，只保留第一个图标
	          childA.find('.'+loadingIcon).first().siblings('.'+loadingIcon).remove();
	        } else {
	          // 不在展开图标或载入图标，新建一个载入图标
	          childA.children('span').after('<i class="'+ loadingIcon +'">    </i>');
	        } // end of else

	        options.getData(url, options.ajax, function(data, textStatus, jqXHR) {
	          // 成功回调方法
	          // 将第一个载入图标替换为展开图标，并删除其他载入图标
	          $liNode.children('a').find('.'+loadingIcon).first().removeClass(loadingIcon).addClass(menuExpandIcon).siblings('.'+loadingIcon).remove();
	          $liNode.data('loaded', true);
	          _this.renderSubmenu(data, $liNode);        
	          if($.isFunction(callback)) {
	            callback(data, textStatus, jqXHR);          
	          }
	        }, function(XHR, textStatus, errorThrown) {
	          // 失败回调方法
	          $liNode.data('loaded', false);
	        }); // end of getData
	      } // end of else

	      return _this;
	    }, // end of loadSubmenu

	    /**
	     * 加载指定menu-id菜单项的子菜单
	     * @method loadSubmenuById
	     * @param  {String}     menuId   指定菜单项的data-menu-id值
	     * @param  {Function}   callback 打开指定菜单项后执行的回调方法
	     * @return {[type]}
	     */
	    loadSubmenuById: function(menuId, callback) {
	      return this.loadSubmenu($('li[data-menu-id='+ menuId +']', this.$element), callback);
	    }, // end of loadSubmenuById

	    /**
	     * 渲染首页菜单项之外的所有一级菜单项
	     * @method renderMenu
	     * @param  {Object}   data     一级菜单数据
	     * @param  {Function} callback 打开指定菜单项后执行的回调方法
	     * @return {Object}            this对象实例
	     */
	    renderMenu: function(data, callback) {
	      var _this = this;
	      var options = _this.options;
	      var selector = options.selector;
	      var $mainRoot = $(selector.mainRoot, _this.$element); //'#mainSideBarMenu'
	      var $redocedRoot = $(selector.redocedRoot, _this.$element);
	      var indexItem = selector.indexItem;
	      var templates = options.templates;
	      var speed = options.speed;

	      // 如果主菜单栏存在indexItem
	      if (_isExist($mainRoot.children(indexItem))) {
	        //清空一级菜单节点，只保留首页菜单项 [data-treemenu-role='index']        
	        $mainRoot.children(indexItem).siblings().remove();
	        $mainRoot.append(_createDomString(data, templates.menuItem));
	      } else {
	        //清空所有一级菜单节点
	        $mainRoot.empty().append(_createDomString(data, templates.menuItem));
	      } // end of else
	        if($.isFunction(callback)) {
	          callback();          
	        }

	/*
	      //如果缩减菜单栏存在indexItem
	      if (_isExist($redocedRoot.children(indexItem))) {
	        //清空一级菜单节点，只保留首页菜单项 [data-treemenu-role='index']        
	        $redocedRoot.children(indexItem).siblings().remove();
	      } else {
	        //清空所有一级菜单节点
	        $redocedRoot.children().remove();
	      }      
	      $redocedRoot.append(_createDomString(data, templates.reducedmenuItem));
	*/
	      return _this;
	    }, //end of renderMenu

	    /**
	     * 渲染某个一级菜单项下的所有子菜单
	     * @method renderSubmenu
	     * @param  {Object}      data     子菜单数据
	     * @param  {Object}      $node    包裹待渲染的一级菜单项li dom元素的jQuery对象
	     * @param  {Function}    callback 打开指定菜单项后执行的回调方法
	     * @return {Object}               this对象实例
	     */
	    renderSubmenu: function(data, $node, callback) {
	      var _this = this;
	      //清空子菜单的节点
	      $($node, _this.$element).find(_this.options.selector.treeMenu).remove();
	      var submenuNode = _createDomString(data, _this.options.templates.submenuItem);
	      $($node, _this.$element).append(submenuNode);

	      if($.isFunction(callback)) {
	        callback();          
	      }

	      return _this;
	    }, //end of renderSubmenu

	    /**
	     * 渲染指定menu-id菜单项的子菜单
	     * @method renderSubmenuById
	     * @param  {String}     menuId   指定菜单项的data-menu-id值
	     * @param  {Function}   callback 打开指定菜单项后执行的回调方法
	     * @return {[type]}
	     */
	    renderSubmenuById: function(data, menuId, callback) {
	      return this.renderSubmenu($('li[data-menu-id='+ menuId +']', this.$element), callback);
	    }, // end of renderSubmenuById

	    /**
	     * 打开指定菜单项
	     * @method openMenu
	     * @param  {Object}   $nodeA   jQuery对象，包裹要打开的菜单项<li>元素的子元素<a>
	     * @param  {Function} callback 打开指定菜单项后执行的回调方法
	     * @return {Object}            this对象实例   
	     */
	    openMenu: function($nodeA, callback) {
	      var _this = this;
	      var options = this.options;
	      var selector = options.selector;
	      var treeClass = selector.treeMenu; // .treeview-menu
	      var speed = options.speed;

	      var parentLi = $nodeA.parent(); // 父li <li>
	      var parentsUl = $nodeA.parentsUntil(selector.gradeOneClass, treeClass); // 查找所有祖辈ul元素（至一级菜单）

	      // 打开指定的<li>元素，$li是一个jQuery对象，cb是回调方法
	      var openLiInUl = function($li, cb) {
	        var $ul = $li.parent();
	        var $subUl = $li.children(treeClass);
	        if(!$li.hasClass('active')) {
	          // 该li元素未打开，则关闭其他已打开的菜单项
	          $ul.children().each(function() {
	            // 此处this为<li.treeview.active> 或 <li.active>, 不为父Li
	            $(this).removeClass('active').find(treeClass + '.menu-open').removeClass('menu-open').stop(true).slideUp(speed, function() {
	              // 此处this为<ul.treeview-menu.menu-open>
	              $(this).find('.active').removeClass('active');
	            });            
	          }); // end of each

	          // 给父li加上唯一的 .active 标记
	          $li.addClass('active');
	          // 展开指定的菜单项子菜单
	          if($subUl.length) {
	            // 存在子菜单项
	            if(!$subUl.is(':visible')) {
	              // 如果子菜单未打开
	              $subUl.stop(true).slideDown(speed, function(){
	                $subUl.addClass('menu-open');
	                if($.isFunction(cb)) {
	                  cb();          
	                }
	              }); // end of slideDown  
	              
	            } else {
	              // 如果子菜单已打开，则移除所有子孙菜单项的 .active 标记
	              $subUl.find('.active').removeClass('active');
	              if($.isFunction(cb)) {
	                cb();          
	              }
	            } // end of else
	          
	          } else {
	            // 不存在子菜单项
	            $li.addClass('active');
	            if($.isFunction(cb)) {
	              cb();          
	            }
	          } // end of else
	        } else {
	          // 该li元素已经打开（具有.active类），则移除所有子孙菜单项的 .active 标记
	          $subUl.find('.active').removeClass('active');
	          if($.isFunction(cb)) {
	            cb();          
	          }
	        } // end of else
	        return;
	      }; // end of function openLiInUl

	      // 递归方法执行openLiInUl
	      var recursion = function(ulArray, j) {
	        if(j < 0 || !ulArray[j]) {

	          // 打开目标菜单项，并执行openMenu方法的回调
	          openLiInUl(parentLi, callback);
	          return;
	        } else {
	          if(!$(ulArray[j]).is(':visible')) {
	            // 如果本级ul未展开
	            openLiInUl($(ulArray[j].parentNode), function(){
	              recursion(ulArray, j-1);
	            });
	          } else {
	            // 如果本级ul已展开
	            recursion(ulArray, j-1);
	          }
	        }
	        return;
	      }; // end of recursion

	      recursion(parentsUl, parentsUl.length-1);

	      return _this;
	    }, //end of openMenu

	    /**
	     * 打开指定menu-id的菜单项，并展开其未展开的子菜单（如果有）
	     * @method openMenuById
	     * @param  {String}     menuId   指定菜单项的data-menu-id值
	     * @param  {Function}   callback 打开指定菜单项后执行的回调方法
	     * @return {Object}              this对象实例 
	     */
	    openMenuById: function(menuId, callback) {
	      return this.openMenu($('[data-menu-id='+ menuId +'] > a', this.$element), callback);
	    }, //end of openMenuById

	    /**
	     * 收起指定菜单项
	     * @method closeMenu
	     * @param  {Object}   $nodeA   jQuery对象，包裹要收起的菜单项<li>元素的子元素<a>
	     * @param  {Function} callback 收起指定菜单项后执行的回调方法
	     * @return {Object}            this对象实例   
	     */
	    closeMenu: function($nodeA, callback) {
	      var _this = this;
	      var options = this.options;
	      var speed = options.speed;

	      // 此处this为<li.treeview.active> 或 <li.active>, 不为父Li
	      $nodeA.parent().removeClass('active').find(options.selector.treeMenu + '.menu-open').stop(true).removeClass('menu-open').slideUp(speed, function() {
	        // 此处this为<ul.treeview-menu.menu-open>
	        $(this).children('.active').removeClass('active');
	        // 执行回调函数
	        if($.isFunction(callback)) {
	          callback();          
	        }
	      }); // end of slideUp

	      return _this;
	    }, //end of closeMenu

	    /**
	     * 收起指定menu-id的菜单项，并收起其所有展开的子孙菜单（如果有）
	     * @method closeMenuById
	     * @param  {String}      menuId   指定菜单项的data-menu-id值
	     * @param  {Function}    callback 收起指定菜单项后执行的回调方法
	     * @return {Object}               this对象实例         
	     */
	    closeMenuById: function(menuId, callback) {
	      return this.closeMenu($('[data-menu-id='+ menuId +'] > a', this.$element), callback);
	    }, //end of closeMenuById

	    /**
	     * 切换指定菜单项的开闭状态
	     * @method toggleMenu
	     * @param  {Object}    $nodeA   jQuery对象，包裹菜单项<li>中的<a>元素
	     * @param  {Funciton}  callback 切换动画后执行的用户回调函数
	     * @return {Object}             this对象实例 
	     */
	    toggleMenu: function($nodeA, callback) {
	      var treeClass = this.options.selector.treeMenu; // .treeview-menu      
	      var submenuUl = $nodeA.siblings(treeClass); // 子菜单集合<ul.treeview-menu>    

	      return (submenuUl.is(treeClass) && submenuUl.is(':visible')) ? this.closeMenu($nodeA, callback) : this.openMenu($nodeA, callback);
	    }, // end of toggleMenu

	    /**
	     * 切换指定menu-id的菜单项，并切换其所有子孙菜单（如果有）
	     * @method toggleMenuById
	     * @param  {String}      menuId   指定菜单项的data-menu-id值
	     * @param  {Function}    callback 切换指定菜单项后执行的回调方法
	     * @return {Object}               this对象实例         
	     */
	    toggleMenuById: function(menuId, callback) {
	      return this.toggleMenu($('[data-menu-id='+ menuId +'] > a', this.$element), callback);
	    } //end of toggleMenuById

	  }); // end of $.extend

	  // Create the udesk plugin based on Jquery
	  $.fn[_pluginName] = function(options) {
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);
	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.tab.js
	 * Version 1.0.0-beta1
	 * Date 2016-03-21
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.tab.js
	 *
	 * Usage:
	 *   var instance = $('.content-wrapper').udeskTab().data('udeskTab');
	 *   instance.changeTab();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	;(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  var udesk = window.udesk = window.udesk || {};

	  // Default settings
	  var _pluginName = 'udeskTab',
	    _version = '1.0.0-Beta1',
	    _defaultOptions = {
	      // 载入蒙版组件相关设置
	      'loadingMask': {
	        color: '#FFFFFF',
	        template: '<div class="u-loadingmask"><a class="u-loadingimg"></a></div>',
	        fadeSpeed: 500
	      }, // end of loadingMask
	      // 本地数据源，优先级高于ajax
	      'localData': undefined,            
	      // 一级菜单json数据获取地址
	      'url': '',
	      // ajax方法配置
	      'ajax': {},
	      // ajax方法
	      'getData': _getData,
	      // maxTabs:允许的最大tab数量
	      'maxTabs': 15,
	      // 是否固定显示首页tab
	      'isIndexFixed':false,
	      'dataBase':{
	        // 固定首页tab的数据
	        data: undefined,
	        schema: {
	          model: {
	            id: 'idx',
	            fields: {
	              url: {type: 'string'},
	              idx: {type: 'number', defaultValue: null},
	              title: {type: 'string', defaultValue: '新标签页'},
	              menuId: {type: 'string', defaultValue: null},
	              sysId: {type: 'string', defaultValue: null},
	              mode: {type: 'string', defaultValue: 'iframe'},            
	              tdId: {type: 'string', defaultValue: null},
	              sndUrl: {type: 'string', defaultValue: null}
	            }
	          }
	        }
	      }, // end of dataBase
	      // tabWidth: tab头的默认宽度
	      'tabWidth': 125,
	      // tabMarginR: tab头的默认间距值
	      'tabMarginR': 10,
	      // Tab区域相对窗口底部需要减去的高度
	      'heightReduced': 50,
	      'templates': {
	        // 页签头<li>元素模板
	        header: kendo.template ? kendo.template('<li data-tab-id="#=idx#" class="pr" title="#=title#"><a title="#=title#"><span>#=title#</span></a><a class="icon-remove tab-close"></a></li>') : undefined,        
	        // 页签体<div.tab-content-wrapper>元素模板
	        content: kendo.template ? kendo.template('<div class="tab-content-wrapper pr hidden" data-tab-id="#=idx#"></div>') : undefined,        
	        // 页签内容Div模式<div.udesk-tab-content>元素模板
	        contentDiv: kendo.template ? kendo.template('<div class="udesk-tab-div"><div>') : undefined,
	        
	        // 页签内容iframe模式<iframe>元素模板
	        contentIframe: kendo.template ? kendo.template('<iframe src="#=url#" name="udesk-tab-iframe-#=idx#" frameborder="no" height="100%" width="100%"></iframe>') : undefined,
	        /*
	        '<iframe src="#=url#" name="udesk-tab-iframe-#=idx#" data-tdlp-tdId="#=tdId#" frameborder="no" height="100%" width="100%"></iframe>'

	        */
	      }, // end of templates
	      'selector': {
	        'wrapper': '.content-wrapper', // 右侧展示区最外层dom
	        'headerRoot': 'ul.tabsite', // <ul class="tabsite clearfix">
	        'contentRoot': '#mainApplyContent', // <div class="content pt0" id="mainApplyContent">
	        'sidebar': '.main-sidebar' // 侧边栏dom元素
	      }, // end of selector
	      // 事件回调函数
	      // 初始化事件，参数为this
	      'onInit': function($e) {}, //$e为_this
	      'onTabCreate': function($e) {}, // $e为_this.$element
	      'onTabOpen': function($e) {}, // $e为_this.$element
	      'onTabChange': function($e) {}, // $e为_this.$element
	      'onTabClose': function($e) {}, // $e为_this.$element
	      'onClick': function($e) {}, // $e为$('li')
	      'onHover': function($e) {}, // $e为$('li')
	      'onTabsFull': function(e) {} // e为_this
	    }; // end of _defaultOptions

	  /**
	   * 通过ajax获取json数据，默认使用udesk.ajax
	   * @method _getData
	   * @param  {String}    url      json数据源
	   * @param  {Function}  callback 获取数据成功后调用的回调方法
	   * @return {undefined}          undefined
	   */
	  function _getData(url, args, callback) {
	    var opt = $.extend(true, {}, {
	      success: function(res, textStatus, jqXHR) {
	        if($.isFunction(callback)) {
	          callback(res, textStatus, jqXHR);
	        }
	      } // end of success
	    }, args); // end of opt

	    if ($.isFunction(udesk.ajax)) {
	      udesk.ajax(url, opt);
	    } else if ($.isFunction($.ajax)) {
	      $.ajax(opt);
	    } else {
	      console.error('未找到ajax方法定义，加载侧边栏菜单失败');
	    }
	  } // end of _getData

	  /**
	   * 根据class调整dom元素高度(dom元素需要设置为position:relative)
	   * @method _adaptHeightByClass
	   * @param  {String} selector      jQuery选择器字符串
	   * @param  {Number} heightReduced 相对窗口底部需要减去的高度
	   * @return {Object}               jQuery对象
	   */
	  function _adaptHeightByClass(selector, heightReduced){
	    // 获得当前窗口高度
	    var heightWindow = document.documentElement.clientHeight;
	    // 设置相对高度
	    return $(selector).css({
	      'height': heightWindow-heightReduced,
	      'position': 'relative'
	    });
	  }; // end of _adaptHeightByClass

	  /**
	   * 绑定事件处理方法
	   * @method _bindAction
	   * @param  {Object}    object 控件对象
	   * @return {Object}           this控件对象
	   */
	  function _bindAction(object) {
	    var _this = object;
	    var options = _this.options;
	    var selector = _this.options.selector;
	    //增加点击代理
	    $(selector.headerRoot).on('click', 'li', function() {
	      var idx = parseInt($(this).data('tabId'));
	      _this.changeTab(idx);
	      // 处理事件函数
	      if ($.isFunction(options.onClick)) {
	        options.onClick($(this));
	      }
	      return;
	    }); // end of headerRoot li onClick 

	    //增加滑动代理
	    $(selector.headerRoot).on('hover', 'li', function() {
	      // 处理事件函数
	      if ($.isFunction(options.onHover)) {
	        options.onHover($(this));
	      }
	      return;
	    }); // end of headerRoot li onHover 

	    //关闭按钮的点击事件
	    $(selector.headerRoot).on('click', 'a.tab-close', function(e) {
	      e.stopPropagation();
	      var tabIdx = parseInt($(this).closest('li').data('tabId'));
	      _this.closeTab(tabIdx);
	      return;
	    }); // end of headerRoot a.tab-close onClick 

	    // 根据窗口大小变化，自适应调整tab头宽度和间距，调整Tab区域高度
	    $(window).resize(function() {
	      _this.adjustTabsWidth();
	      _adaptHeightByClass(selector.wrapper, options.heightReduced);
	      return;
	    }); // end of window onResize 

	    return _this;
	  } // end of _bindAction

	  /**
	   * Plugin Class Constructor
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,
	    //currentTab:当前tab序号
	    currentTabIdx: 0,
	    // tabsCount:当前所有打开过的tab总数
	    tabsCount: 0,
	    //dataSource: 内置数据库，用于存放固定数据
	    dataSource: undefined, 

	    /**
	     * 初始化tab组件
	     * @method init
	     * @return {Object} this对象实例
	     */
	    init: function(){
	      var _this = this;
	      var options = _this.options;

	      // 调整Tab区域高度使之充满窗口
	      _adaptHeightByClass(options.selector.wrapper, options.heightReduced);
	      // 初始化数据库
	      _this.dataSource = new kendo.data.DataSource(options.dataBase);
	      // 给数据库内数据排序
	      _this.dataSource.sort({field:'idx',dir:'asc'});
	      // 判断是否固定首页，如果固定，则Tab计数时忽略首页
	      _this.tabsCount = options.isIndexFixed ? (_this.getDisplayCount()-1) : _this.getDisplayCount();

	      // 绑定事件处理方法
	      _bindAction(_this);

	      // 初始化事件，参数为this
	      if ($.isFunction(options.onInit)) {
	        options.onInit(_this);
	      }

	      return _this;      
	    }, //end of init

	    /**
	     * 获得当前实际打开的tab总数（不包含已关闭的tab数量）
	     * @method getDisplayCount
	     * @return {Nmuber}        当前实际打开的tab总数
	     */
	    getDisplayCount: function() {
	      return this.dataSource.data().length;
	    }, // end of getDisplayCount

	    /**
	     * 转到指定index的tab页并显示它
	     * @method changeTab
	     * @param  {Nmuber}  tabIdx tab页索引号
	     * @return {Object}  this对象实例
	     */
	    changeTab: function(tabIdx){
	      var _this = this;
	      var options = _this.options;
	      var selector = _this.options.selector;

	      if(tabIdx == _this.currentTabIdx){
	        // 切换的标签就是当前标签，则不作处理
	      }else{        
	        //切换标签头和标签体的显示
	        $('li[data-tab-id="'+tabIdx+'"]', selector.headerRoot).addClass('active').siblings().removeClass('active');
	        $('div[data-tab-id="'+tabIdx+'"]', selector.contentRoot).removeClass('hidden').siblings().addClass('hidden');

	        _this.currentTabIdx = tabIdx;
	        // 处理用户定义的事件函数
	        if($.isFunction(options.onTabChange)) {
	          options.onTabChange(_this.$element);
	        }  
	      } // end of if
	      return _this;
	    }, // end of changeTab
	    
	    /**
	     * 创建一个tab 
	     * @method createTab
	     * @param  {Object}  tabModel dataSource中存放的tab数据对象
	     * @return {Object}           this对象实例
	     */
	    createTab : function(tabModel){
	      var _this = this;
	      var options = _this.options;
	      var templates = options.templates;
	      var selector = options.selector;
	      // 根据数据对象，新增一个tab头和一个tab体（kendo模板）
	      var $newHeader  = $(templates.header(tabModel)).appendTo(selector.headerRoot);
	      var $newContent = $(templates.content(tabModel)).appendTo(selector.contentRoot);
	      // 新建加载蒙版组件
	      var loadingMask = $newContent.udeskLoadingMask(options.loadingMask).data('udeskLoadingMask');

	      //加载页面内容
	      if(tabModel.mode && tabModel.mode == 'div'){
	        // 使用div模式
	        options.getData(tabModel.url, options.ajax, function(res, textStatus, jqXHR) {
	          $(templates.contentDiv(tabModel)).append(res).appendTo($newContent);
	          loadingMask.removeMask();
	          // 处理用户定义的事件函数
	          if($.isFunction(options.onTabCreate)) {
	            options.onTabCreate(_this.$element);
	          }  
	        }); // end of options.getData
	      } else {
	        // 使用iframe模式
	        $(templates.contentIframe(tabModel)).load(function() {
	            // onload加载事件回调函数
	            if (tabModel.sndUrl && tabModel.sndUrl != 'null') {
	              $(this).unbind('');
	              $(this)[0].onload = function() {
	                // load加载事件回调函数
	                loadingMask.removeMask();
	               };
	              $(this).prop('src', tabModel.sndUrl);
	            } else {
	              loadingMask.removeMask();
	              // 处理用户定义的事件函数
	              if ($.isFunction(options.onTabCreate)) {
	                options.onTabCreate(_this.$element);
	              }
	            } // end of if
	        }).appendTo($newContent);
	      } // end of 
	      
	      // 重新计算Tabs的长度
	      _this.adjustTabsWidth();
	      return _this;
	    }, // end of createTab

	    /**
	     * 打开一个tab页，如果已存在则转到它，如果不存在则创建后再转到它
	     * @method openTab
	     * @param  {Object} data 外部传入的tab页数据，idx将会被数据库实际值覆盖
	     *                       格式 {url:'xxxxx.action',mode:'', sysId:'', title:'xxx', }
	     * @return {Object}      this对象实例
	     */
	    openTab : function(data){
	      var _this = this;
	      var options = _this.options;

	      _this.dataSource.filter({field:'url',operator:'eq',value:data.url});
	      var view = _this.dataSource.view();

	      var tabModel = null;
	      if(view.length <= 0){
	        // 没有符合此url的Tab
	        //刷新数据库（使数据库加载默认数组）
	        if(_this.getDisplayCount() >= options.maxTabs){//当已打开的tabs的数量大于最大数量限制
	        // 处理用户定义的事件函数
	        if($.isFunction(options.onTabsFull)) {
	          options.onTabsFull(_this);
	        }    
	          return _this;
	        }//end of if
	        
	        // 当前所有打开过的tab总数+1, 将新tab排在最后一位index
	        data.idx = (_this.tabsCount += 1);
	        // 如果未指定sysId，则默认为空字符串
	        data.sysId = data.sysId || '';
	        // 将输入参数赋入数据库，获得tab数据对象
	        tabModel = _this.dataSource.add(data);
	        //创建此tab
	        _this.createTab(tabModel); 
	      }else{
	        // 找到符合此url的Tab对象，载入第一个符合条件的tab
	        tabModel = _this.dataSource.get(view[0].idx);
	      }//end of if
	      // 处理用户定义的事件函数
	      if($.isFunction(options.onTabOpen)) {
	        options.onTabOpen(_this.$element);
	      }       
	      _this.changeTab(tabModel.idx);
	      return _this;
	    },//end of openTab
	    
	    /**
	     * 计算页签头栏宽度，并修改显示样式
	     * @method adjustTabsWidth
	     * @return {Object} this对象实例
	     */
	    adjustTabsWidth : function(){
	      var _this = this;
	      var options = _this.options;
	      var selector = _this.options.selector;
	      var $ul = $(selector.headerRoot);
	      var $msb = $(selector.sidebar);

	      // tab头列表总宽度
	      var ulW = $ul[0].offsetWidth;
	      var tabsNum = _this.getDisplayCount();
	      // 左右border共计为2，包含在width里
	      var wholeWidth = options.tabWidth - 2 + options.tabMarginR; 
	      var setWidth, setMarginR;
	      if(ulW > (tabsNum*wholeWidth)){
	        // 实际空间宽度有富余，采用默认宽度和间距
	        setWidth = options.tabWidth - 2;
	        setMarginR = options.tabMarginR;
	      }else{
	        // 实际空间宽度狭小，采用压缩的宽度和间距
	        setWidth = (ulW/(tabsNum))-3; //减去左右border与右边距
	        setMarginR = 1;
	      }//end of if

	      $('li[data-tab-id]', selector.headerRoot).width(setWidth)
	        .css('marginRight', setMarginR);

	      return _this;
	    },//end of adjustTabsWidth
	    
	    /**
	     * 关闭tab页，并将tab数据从dataSource中移除
	     * @method closeTab
	     * @param  {Nmuber} tabIdx tab页索引号
	     * @return {Object} this对象实例
	     */
	    closeTab: function(tabIdx){
	      var _this = this;
	      var options = _this.options;
	      var selector = _this.options.selector;

	      if(0 == tabIdx && true == options.isIndexFixed){
	        // 设置了首页不可关闭的选项，则不做处理
	      }else{
	        // 如果tabIdx是当前的页则需要切换到后一个tab
	        if(tabIdx == _this.currentTabIdx){
	          var prevTabIdx = parseInt( $('li[data-tab-id="'+tabIdx+'"]').prev().data('tabId') );
	          var nextTabIdx = parseInt( $('li[data-tab-id="'+tabIdx+'"]').next().data('tabId') );
	          var changeTo = nextTabIdx || prevTabIdx;

	          _this.changeTab(changeTo);
	          _this.currentTabIdx = changeTo;
	        }//end of if

	        //删除对应的content节点
	        $('div[data-tab-id="'+tabIdx+'"]', selector.contentRoot).remove();
	        //删除对应的li节点
	        $('li[data-tab-id="'+tabIdx+'"]', selector.headerRoot).remove();
	        // 从dataSource中除去对应的数据项
	        _this.dataSource.remove(_this.dataSource.get(tabIdx));
	        //重新计算tabs的宽度
	        _this.adjustTabsWidth();
	      } // end of else

	      // 处理事件函数
	      if($.isFunction(options.onTabClose)) {
	        options.onTabClose(_this.$element);
	      }
	       return _this;
	    } // end of closeTab

	  }); // end of $.extend

	  // Create the udesk plugin based on Jquery
	  $.fn[_pluginName] = function(options) {
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);
	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));



/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * udesk.sidebar.js
	 * Version 1.0.0-beta 1.1
	 * Date 2016-03-21
	 * Author Liu Jiajie
	 * http://dev.udesk.abc:9080/framework/3.0.0-beta1/udesk.sidebar.js
	 *
	 * Usage:
	 *   var instance = $('.main-sidebar').udeskSidebar({}).data('udeskSidebar');
	 *   instance.refreshAllSysMenu();
	 *
	 * Copyright Agriculture Bank of China.
	 */
	;(function(factory) {
	  if (true) {
	    // AMD. Register as anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(jQuery) {
	      return factory(jQuery, window, document);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'), window, document);
	  } else {
	    // Browser globals.
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined) {
	  'use strict';

	  var udesk = window.udesk = window.udesk || {};

	  // Default settings
	  var _pluginName = 'udeskSidebar',
	    _version = '3.0.0-Beta1.1',
	    _defaultOptions = {
	      // 本地数据，优先级高于ajax
	      'localData': undefined, 
	      // 异步加载的菜单项数据源URL
	      'url': '',
	      // 新建菜单组件相关设置
	      'newMenu': {
	        // 指定的新建菜单组件对象
	        'newMenu': null,
	        // 本地数据源，优先级高于ajax
	        'localData': undefined, 
	        // 控件json数据获取地址
	        'url': ''
	      },
	      // 树形菜单组件相关设置
	      'treeMenu': {
	        // 指定的树形菜单组件对象
	        'treeMenu': null,
	        // 本地数据源，优先级高于ajax
	        'localData': undefined, 
	        // 控件json数据获取地址
	        'url': ''
	      }, // end of treeMenu
	      // dom元素jQuery选择器
	      'selector': {
	        // 新建菜单
	        'newMenu': '#newMenu',
	        // 树形菜单
	        'treeMenu': '.sidebar', // 原为'.main-sidebar'
	        // 侧边栏主菜单
	        'mainSidebar': '.main-sidebar',
	        // 侧边栏缩减版菜单
	        'reducedSidebar': '.sidebar-reduced',
	        // 切换按钮
	        'toggle': '.sidebar-toggle',
	        // 页签区域
	        'content': '.content-wrapper'
	      }, // end of selector
	      // ajax方法配置
	      'ajax': null,
	      // 异步加载菜单数据使用的方法
	      'getData': _getData,
	      'templates': null,
	      // 浏览器窗口宽度阈值，当窗口宽度小于toggleWidth时自动收起侧边栏，大于时则展开
	      'toggleWidth': 800,
	      // 侧边栏开闭状态标志位，存放在selector.mainSidebar dom元素的data-属性里
	      'slideFlag': 'slideOpen',
	      // 侧边栏与页签区切换的样式
	      'slideCss': [
	        // 侧边栏收缩后的样式
	        {'marginLeft':'-230px'},
	        // 侧边栏展开后的样式；侧边栏收缩后页签区的样式
	        {'marginLeft':'0'},
	        // 侧边栏展开后页签区的样式
	        {'marginLeft':'230px'}
	      ],
	      // 侧边栏切换动画速度（毫秒）
	      'slideSpeed': 200,
	      // 侧边栏切换动画缓动函数
	      'slideEasing': 'linear',
	      // 组件对象初始化事件回调方法
	      'onInit': function($e){}, // $为this.$element
	      // 刷新所有菜单数据事件回调方法
	      'onRefreshAll': function($e){}, // $为this.$element
	      // 侧边栏切换事件回调方法      
	      'onSlideToggle': function($e){}, // $为this.$element
	      // 侧边栏展开事件回调方法
	      'onSlideOpen':  function($e){}, // $为this.$element
	      // 侧边栏收缩事件回调方法
	      'onSlideClose': function($e){} // $为this.$element
	    }; // end of _defaultOptions

	  /**
	   * 生成菜单dom元素字符串
	   * @method _createDomString
	   * @param  {Object} data     菜单item数据
	   * @param  {Object} template 菜单模板方法
	   * @return {String}          dom元素字符串
	   */
	  function _createDomString(data, template) {
	    if (!$.isFunction(template)) {
	      udesk.error('菜单项模板方法错误');
	      return undefined;
	    }
	    return template(data);
	  }; // end of _createDomString

	  /**
	   * 通过ajax获取json数据，默认使用udesk.ajax
	   * @method _getData
	   * @param  {String}    url       json数据源
	   * @param  {Function}  callback  获取数据成功后调用的回调方法
	   * @return {undefined} undefined
	   */
	  function _getData(url, args, callback) {
	    var opt = $.extend(true, {}, {
	      success: function(res, textStatus, jqXHR) {
	        if($.isFunction(callback)) {
	          callback(res, textStatus, jqXHR);
	        }
	      } // end of success
	    }, args); // end of opt

	    if ($.isFunction(udesk.ajax)) {
	      udesk.ajax(url, opt);
	    } else if ($.isFunction($.ajax)) {
	      $.ajax(opt);
	    } else {
	      console.error('未找到ajax方法定义，加载侧边栏菜单失败');
	    }
	    return;
	  } // end of _getData

	  /**
	   * 根据窗口大小，响应式调整侧边栏开闭状态
	   * @method _responseWidth
	   * @param  {Object} object 组件对象实例
	   * @return {Object}        this组件对象实例
	   */
	  function _responseWidth(object) {
	    var _this = object;
	    var options = _this.options;
	    var $msb = $(options.selector.mainSidebar); // 主菜单区
	    var sysWidth = document.documentElement.clientWidth;
	    var openFlag = $msb.data(options.slideFlag);

	    // 窗口宽度小于800px且侧边栏处于开启状态，则自动收起侧边栏
	    if (sysWidth < options.toggleWidth && (true === openFlag || 'true' == openFlag)) { 
	      _this.slideClose();
	    } else if(sysWidth > options.toggleWidth && (false === openFlag || 'false' == openFlag)) {
	      _this.slideOpen();
	    } // end of else if

	  } // end of _responseWidth

	  /**
	   * 绑定侧边栏伸缩按钮点击事件
	   * @method _bindAction
	   * @param  {Object} object 组件对象实例
	   * @return {Object}        this组件对象实例
	   */
	  function _bindAction(object) {
	    var _this = object;

	    //收缩控制
	    $(_this.options.selector.toggle).click(function() {
	      _this.slideToggle();
	    }); // end of onclick

	    $(window).resize(function() {
	      _responseWidth(_this);
	    }); // end of window onResize 
	    return _this;
	  } //end of _bindAction

	  /**
	   * Plugin Class Constructor, initialise everything you need here
	   * @method _Plugin
	   * @param  {Object} $element jquery对象
	   * @param  {Object} options  用户设置对象
	   * @return {Object}          this对象实例
	   */
	  var _Plugin = function($element, options) {
	    this.$element = $element;
	    this.options = options;
	    this.init();
	    return this;
	  }; // end of _Plugin

	  //_Plugin methods and shared properties
	  $.extend(_Plugin.prototype, {
	    // Reset constructor
	    constructor: _Plugin,
	    VERSION: _version,
	    // 新建菜单组件对象
	    newMenu: null,
	    // 树形菜单组件对象
	    treeMenu: null,

	    /**
	     * 初始化sidebar组件与子组件
	     * @method init
	     * @return {Object} this对象实例
	     */
	    init: function(){
	      var _this   = this;
	      var options = _this.options;
	      var selector = options.selector;

	      // 子组件配置项
	      var nmOpt = options.newMenu;
	      var tmOpt = options.treeMenu;

	      var $newMenu = $(selector.newMenu, _this.$element);
	      var $treeMenu = $(selector.treeMenu, _this.$element);

	      // 如果用户未指定新建菜单或树形菜单的localData，默认使用侧边栏的localData
	      nmOpt.localData = nmOpt.localData || options.localData;
	      tmOpt.localData = tmOpt.localData || options.localData;

	      // 如果用户未指定新建菜单或树形菜单的url，默认使用侧边栏的url
	      nmOpt.url = nmOpt.url || options.url;
	      tmOpt.url = tmOpt.url || options.url;

	      // 如果jQuery对象存在，则初始化新建菜单，优先使用用户自定义的组件对象
	      if($newMenu.length > 0) {
	        _this.newMenu  = $.isFunction(nmOpt.newMenu)  ? nmOpt.newMenu  : $newMenu.udeskNewMenu(nmOpt).data('udeskNewMenu');        
	      }
	      // 如果jQuery对象存在，则初始化树形导航菜单，优先使用用户自定义的组件对象      
	      if($treeMenu.length > 0) {
	        _this.treeMenu = $.isFunction(tmOpt.treeMenu) ? tmOpt.treeMenu : $treeMenu.udeskTreeMenu(tmOpt).data('udeskTreeMenu');
	      }

	      // 响应式调整侧边栏开闭状态
	      _responseWidth(_this);
	      _bindAction(_this);

	      if($.isFunction(options.onInit)) {
	        options.onInit(_this.$element);
	      }
	      return _this;      
	    }, // end of init

	    /**
	     * 刷新所有新建菜单和树形菜单的菜单数据
	     * @method refreshAllSysMenu
	     * @param  {Function} callback 刷新后执行的回调函数
	     * @return {Object}            this对象实例
	     */
	    refreshAllSysMenu: function(callback) {
	      var options = this.options;
	      //初始化新建菜单一级项目
	      if(this.newMenu) {
	        this.newMenu.refreshMenu();        
	      }
	      //初始化树形菜单一级项目      
	      if(this.treeMenu) {
	        this.treeMenu.refreshMenu();
	      }
	      if($.isFunction(callback)) {
	        callback(this.$element);
	      }
	      if($.isFunction(options.onRefreshAll)) {
	        options.onRefreshAll(this.$element);
	      }
	      return this;
	    }, // end of refreshAllSysMenu

	    /**
	     * 展开主侧边栏，收缩tab区，隐藏缩略版侧边栏
	     * @method slideOpen
	     * @param  {Function} callback 动画效果完成后执行的回调函数，执行顺序先于onSlideOpen事件回调方法
	     * @return {Object}            this对象实例
	     */
	    slideOpen: function(callback) {
	      var _this = this;
	      var options = _this.options;
	      var selector = options.selector;
	      var $ele = _this.$element;
	      var slideCss = options.slideCss;

	      var $main = $(selector.mainSidebar); // 主菜单区
	      var $reduced = $(selector.reducedSidebar); // 缩略版菜单区
	      var $content = $(selector.content); // app展示区
	      var flag = $main.data(options.slideFlag);

	      // 如果标志位显示已展开或正在展开，则执行回调后返回
	      if(true == flag || 'true' == flag || 'opening' == flag) {
	        if($.isFunction(callback)) {
	          callback($ele);
	        }
	        if($.isFunction(options.onSlideOpen)) {
	          options.onSlideOpen($ele);
	        }
	        return _this;
	      };
	      // 将标志位置为正在展开状态
	      $main.data(options.slideFlag, 'opening');
	      // 收缩tab区
	      $content.stop(true).animate(slideCss[2], {
	        queue: false,
	        duration: options.slideSpeed,
	        easing: options.slideEasing
	      }); // end of animate
	      // 隐藏缩略版
	      $reduced.addClass('hidden');
	      // 展开主侧边栏
	      $main.stop(true).animate(slideCss[1], {
	        queue: false,
	        duration: options.slideSpeed,
	        easing: options.slideEasing,
	        complete: function(e) {
	          // 将标志位置为已展开状态
	          $main.data(options.slideFlag, true);
	          if($.isFunction(callback)) {
	            callback($ele);
	          }
	          if($.isFunction(options.onSlideOpen)) {
	            options.onSlideOpen($ele);
	          }
	        } // end of complete
	      }); // end of animate
	      return this;
	    }, // end of slideOpen

	    /**
	     * 关闭主侧边栏，扩展tab区，展开缩略版侧边栏
	     * @method slideOpen
	     * @param  {Function} callback 动画效果完成后执行的回调函数，执行顺序先于onSlideClose事件回调方法
	     * @return {Object}            this对象实例
	     */
	    slideClose: function(callback) {
	      var _this = this;
	      var options = _this.options;
	      var selector = _this.options.selector;
	      var $ele = _this.$element;
	      var slideCss = options.slideCss;

	      var $main = $(selector.mainSidebar); // 主菜单区
	      var $reduced = $(selector.reducedSidebar); // 缩略版菜单区
	      var $content = $(selector.content); // app展示区
	      var flag = $main.data(options.slideFlag);

	      // 如果标志位显示已关闭或正在关闭状态，则直接执行回调后返回
	      if(false == flag || 'false' == flag || 'closing' == flag) {
	        if($.isFunction(callback)) {
	          callback($ele);
	        }
	        if($.isFunction(options.onSlideClose)) {
	          options.onSlideClose($ele);
	        }
	        return _this;
	      };
	      // 将标志位置为正在关闭状态
	      $main.data(options.slideFlag, 'closing');
	      // 扩展app区域
	      $content.stop(true).animate(slideCss[1],{
	        queue: false,
	        duration: options.slideSpeed,
	        easing: options.slideEasing,
	        complete:function(){
	         // 展现缩略版
	         // $reduced.removeClass('hidden');
	        } // end of complete
	      }); // end of animate
	      // 主侧边栏收缩
	      $main.stop(true).animate(slideCss[0],{
	        queue: false,
	        duration: options.slideSpeed,
	        easing: options.slideEasing,
	        complete: function() {
	          // 将标志位置为已关闭状态
	          $main.data(options.slideFlag, false);          
	          if($.isFunction(callback)) {
	            callback($ele);
	          }
	          if($.isFunction(options.onSlideClose)) {
	            options.onSlideClose($ele);
	          }
	        } // end of complete
	      }); // end of animate

	      return this;
	    }, // end of slideClose

	    /**
	     * 切换侧边栏开闭状态
	     * @method slideToggle
	     * @param  {Function}  callback 执行扩展或关闭动作后的回调函数
	     * @return {Object}             this对象实例
	     */
	    slideToggle: function(callback) {
	      var _this = this;
	      var options = _this.options;
	      var selector = _this.options.selector;
	      var $ele = _this.$element;
	      var $msb = $ele; // 主菜单区
	      var flag = $msb.data(options.slideFlag);

	      // 如果未定义data-slide-open， 则当做侧栏边已展开处理
	      if(true == flag || 'true' == flag || undefined == flag){
	        _this.slideClose(function() {
	          // 处理用户定义的事件函数
	          if($.isFunction(callback)) {
	            callback($ele);
	          }
	          if($.isFunction(options.onSlideToggle)) {
	            options.onSlideToggle($ele);
	          }  
	        }); // end of slideClose

	      }else{
	        // 其他情况当做侧栏边未展开处理
	        _this.slideOpen(function() {
	        // 处理用户定义的事件函数
	          if($.isFunction(callback)) {
	            callback($ele);
	          }
	          if($.isFunction(options.onSlideToggle)) {
	            options.onSlideToggle($ele);
	          }       

	        }); // end of slideOpen

	      }//end of else
	      return this;
	    } // end of slideToggle

	  }); // end of $.extend

	  // Create the udesk plugin based on Jquery
	  $.fn[_pluginName] = function(options) {
	    var opt = $.extend(true, {}, $.fn[_pluginName].defaults, options);
	    // Use return to support jQuery chaining method
	    return this.each(function() {
	      var $this = $(this);
	      if (!$(this).data(_pluginName)) {
	        $this.data(_pluginName, new $.fn[_pluginName].constructor($this, opt));
	      }
	    }); // end of return
	  }; // end of $.fn[_pluginName]

	  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
	  $.fn[_pluginName].defaults = _defaultOptions;
	  $.fn[_pluginName].constructor = _Plugin;

	}));



/***/ }

/******/ });