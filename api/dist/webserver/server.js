"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Server = /*#__PURE__*/function () {
  function Server(serverAdapter) {
    (0, _classCallCheck2["default"])(this, Server);
    (0, _defineProperty2["default"])(this, "serverAdapter", void 0);
    this.serverAdapter = serverAdapter;
  }

  (0, _createClass2["default"])(Server, [{
    key: "listen",
    value: function listen() {
      this.serverAdapter.serverUp();
      ;
    }
  }]);
  return Server;
}();

exports["default"] = Server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJzZXJ2ZXIvc2VydmVyLnRzIl0sIm5hbWVzIjpbIlNlcnZlciIsInNlcnZlckFkYXB0ZXIiLCJzZXJ2ZXJVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxNO0FBR2pCLGtCQUFZQyxhQUFaLEVBQTRDO0FBQUE7QUFBQTtBQUN4QyxTQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNIOzs7OzZCQUVlO0FBQ1osV0FBS0EsYUFBTCxDQUFtQkMsUUFBbkI7QUFBOEI7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXJJbnRlcmZhY2UgfSBmcm9tICdhZGFwdGVycyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcblxuICAgIHByaXZhdGUgc2VydmVyQWRhcHRlcjogU2VydmVySW50ZXJmYWNlO1xuICAgIGNvbnN0cnVjdG9yKHNlcnZlckFkYXB0ZXI6IFNlcnZlckludGVyZmFjZSkge1xuICAgICAgICB0aGlzLnNlcnZlckFkYXB0ZXIgPSBzZXJ2ZXJBZGFwdGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIHRoaXMuc2VydmVyQWRhcHRlci5zZXJ2ZXJVcCgpOztcbiAgICB9XG4gICAgXG59Il19