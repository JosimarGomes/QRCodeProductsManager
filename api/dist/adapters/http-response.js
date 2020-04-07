"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

// import { UnauthorizedError, ServerError } from 'errors';
var HttpResponse = /*#__PURE__*/function () {
  function HttpResponse(adapter) {
    (0, _classCallCheck2["default"])(this, HttpResponse);
    (0, _defineProperty2["default"])(this, "adapter", void 0);
    this.adapter = adapter;
  }

  (0, _createClass2["default"])(HttpResponse, [{
    key: "send",
    value: function send(response) {
      return this.adapter.send(response);
    }
  }, {
    key: "status",
    value: function status(_status) {
      return this.adapter.status(_status);
    }
  }, {
    key: "json",
    value: function json(object) {
      return this.adapter.json(object);
    } // public status
    // send
    // cookie
    // status
    // header
    // public static ok(body: Object | Object[]) {
    //     return {
    //         statusCode: 200,
    //         body
    //     }
    // }
    // public static noContent () {
    //     return {
    //         statusCode: 204
    //     }
    // }
    // public static badRequest (error: Error) {
    //     return {
    //         statusCode: 400,
    //         body: {
    //             error: error.message
    //         }
    //     }
    // }
    // public static unauthorizedError () {
    //     return {
    //         statusCode: 401,
    //         body: {
    //             error: new UnauthorizedError().message
    //         }
    //     }
    // }
    // public static serverError () {
    //     return {
    //         statusCode: 500,
    //         body: {
    //             error: new ServerError().message
    //         }
    //     }
    // }

  }]);
  return HttpResponse;
}();

exports["default"] = HttpResponse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVycy9odHRwLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbIkh0dHBSZXNwb25zZSIsImFkYXB0ZXIiLCJyZXNwb25zZSIsInNlbmQiLCJzdGF0dXMiLCJvYmplY3QiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdxQkEsWTtBQUlqQix3QkFBWUMsT0FBWixFQUE0QztBQUFBO0FBQUE7QUFDeEMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7Ozs7eUJBRVdDLFEsRUFBb0I7QUFDNUIsYUFBTyxLQUFLRCxPQUFMLENBQWFFLElBQWIsQ0FBa0JELFFBQWxCLENBQVA7QUFDSDs7OzJCQUVhRSxPLEVBQWdCO0FBQzFCLGFBQU8sS0FBS0gsT0FBTCxDQUFhRyxNQUFiLENBQW9CQSxPQUFwQixDQUFQO0FBQ0g7Ozt5QkFFV0MsTSxFQUFrQjtBQUMxQixhQUFPLEtBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQkQsTUFBbEIsQ0FBUDtBQUNILEssQ0FFRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFVuYXV0aG9yaXplZEVycm9yLCBTZXJ2ZXJFcnJvciB9IGZyb20gJ2Vycm9ycyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VJbnRlcmZhY2UgfSBmcm9tICdhZGFwdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXNwb25zZSB7XG5cbiAgICBwcml2YXRlIGFkYXB0ZXI6IEh0dHBSZXNwb25zZUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IEh0dHBSZXNwb25zZUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKHJlc3BvbnNlOiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNlbmQocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0dXMoc3RhdHVzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zdGF0dXMoc3RhdHVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMganNvbihvYmplY3Q6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuanNvbihvYmplY3QpXG4gICAgfVxuXG4gICAgLy8gcHVibGljIHN0YXR1c1xuXG4gICAgLy8gc2VuZFxuICAgIC8vIGNvb2tpZVxuICAgIC8vIHN0YXR1c1xuICAgIC8vIGhlYWRlclxuXG4gICAgLy8gcHVibGljIHN0YXRpYyBvayhib2R5OiBPYmplY3QgfCBPYmplY3RbXSkge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIC8vICAgICAgICAgYm9keVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIHN0YXRpYyBub0NvbnRlbnQgKCkge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgc3RhdHVzQ29kZTogMjA0XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgc3RhdGljIGJhZFJlcXVlc3QgKGVycm9yOiBFcnJvcikge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgc3RhdHVzQ29kZTogNDAwLFxuICAgIC8vICAgICAgICAgYm9keToge1xuICAgIC8vICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgc3RhdGljIHVuYXV0aG9yaXplZEVycm9yICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIHN0YXR1c0NvZGU6IDQwMSxcbiAgICAvLyAgICAgICAgIGJvZHk6IHtcbiAgICAvLyAgICAgICAgICAgICBlcnJvcjogbmV3IFVuYXV0aG9yaXplZEVycm9yKCkubWVzc2FnZVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIHN0YXRpYyBzZXJ2ZXJFcnJvciAoKSB7XG4gICAgLy8gICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgLy8gICAgICAgICBib2R5OiB7XG4gICAgLy8gICAgICAgICAgICAgZXJyb3I6IG5ldyBTZXJ2ZXJFcnJvcigpLm1lc3NhZ2VcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iXX0=