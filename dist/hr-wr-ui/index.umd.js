(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["hr-wr-ui"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ".index_tab__CwmPu {\n  font-size: 30px;\n}\n";
  var styles$1 = {"tab":"index_tab__CwmPu"};
  styleInject(css_248z$1);

  var Tab = function (porps) {
      var _a = porps.title, title = _a === void 0 ? "" : _a;
      return React__default["default"].createElement("div", { className: styles$1.tab }, title);
  };

  var css_248z = ".index_text__epVjJ {\n  font-size: 30px;\n  color: #f00;\n}\n";
  var styles = {"text":"index_text__epVjJ"};
  styleInject(css_248z);

  var Text = function (porps) {
      var _a = porps.text, text = _a === void 0 ? "" : _a;
      return React__default["default"].createElement("div", { className: styles.text }, text);
  };

  exports.Tab = Tab;
  exports.Text = Text;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
