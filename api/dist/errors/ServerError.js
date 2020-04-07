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

var ServerError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ServerError, _Error);

  var _super = _createSuper(ServerError);

  function ServerError(message) {
    var _this;

    (0, _classCallCheck2["default"])(this, ServerError);
    _this = _super.call(this, message || 'Internal Server Error');
    _this.name = 'ServerError';
    return _this;
  }

  return ServerError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = ServerError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvU2VydmVyRXJyb3IudHMiXSwibmFtZXMiOlsiU2VydmVyRXJyb3IiLCJtZXNzYWdlIiwibmFtZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsVzs7Ozs7QUFDakIsdUJBQWFDLE9BQWIsRUFBK0I7QUFBQTs7QUFBQTtBQUMzQiw4QkFBTUEsT0FBTyxJQUFJLHVCQUFqQjtBQUNBLFVBQUtDLElBQUwsR0FBWSxhQUFaO0FBRjJCO0FBRzlCOzs7a0RBSm9DQyxLIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IgKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSB8fCAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdTZXJ2ZXJFcnJvcic7XG4gICAgfVxufSJdfQ==