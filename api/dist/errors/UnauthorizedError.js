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

var UnauthorizedError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(UnauthorizedError, _Error);

  var _super = _createSuper(UnauthorizedError);

  function UnauthorizedError(message) {
    var _this;

    (0, _classCallCheck2["default"])(this, UnauthorizedError);
    _this = _super.call(this, message || 'Unauthorized');
    _this.name = 'UnauthorizedError';
    return _this;
  }

  return UnauthorizedError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = UnauthorizedError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IudHMiXSwibmFtZXMiOlsiVW5hdXRob3JpemVkRXJyb3IiLCJtZXNzYWdlIiwibmFtZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsaUI7Ozs7O0FBQ2pCLDZCQUFhQyxPQUFiLEVBQStCO0FBQUE7O0FBQUE7QUFDM0IsOEJBQU1BLE9BQU8sSUFBSSxjQUFqQjtBQUNBLFVBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUYyQjtBQUc5Qjs7O2tEQUowQ0MsSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuYXV0aG9yaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yIChtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UgfHwgJ1VuYXV0aG9yaXplZCcpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5hdXRob3JpemVkRXJyb3InO1xuICAgIH1cbiAgfSJdfQ==