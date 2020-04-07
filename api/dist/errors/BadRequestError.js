"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BadRequestError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(BadRequestError, _Error);

  var _super = _createSuper(BadRequestError);

  function BadRequestError(message) {
    var _this;

    (0, _classCallCheck2["default"])(this, BadRequestError);
    _this = _super.call(this, message || 'Bad Request Error');
    _this.name = 'BadRequestError';
    return _this;
  }

  return BadRequestError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = BadRequestError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvQmFkUmVxdWVzdEVycm9yLnRzIl0sIm5hbWVzIjpbIkJhZFJlcXVlc3RFcnJvciIsIm1lc3NhZ2UiLCJuYW1lIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxlOzs7OztBQUNqQiwyQkFBYUMsT0FBYixFQUErQjtBQUFBOztBQUFBO0FBQzNCLDhCQUFNQSxPQUFPLElBQUksbUJBQWpCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLGlCQUFaO0FBRjJCO0FBRzlCOzs7a0RBSndDQyxLIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFkUmVxdWVzdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yIChtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UgfHwgJ0JhZCBSZXF1ZXN0IEVycm9yJyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdCYWRSZXF1ZXN0RXJyb3InO1xuICAgIH1cbn0iXX0=