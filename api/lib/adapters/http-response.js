"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { UnauthorizedError, ServerError } from 'errors';
var HttpResponse = /*#__PURE__*/function () {
  function HttpResponse(adapter) {
    _classCallCheck(this, HttpResponse);

    _defineProperty(this, "adapter", void 0);

    this.adapter = adapter;
  }

  _createClass(HttpResponse, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVycy9odHRwLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbIkh0dHBSZXNwb25zZSIsImFkYXB0ZXIiLCJyZXNwb25zZSIsInNlbmQiLCJzdGF0dXMiLCJvYmplY3QiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdxQkEsWTtBQUlqQix3QkFBWUMsT0FBWixFQUE0QztBQUFBOztBQUFBOztBQUN4QyxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7Ozt5QkFFV0MsUSxFQUFvQjtBQUM1QixhQUFPLEtBQUtELE9BQUwsQ0FBYUUsSUFBYixDQUFrQkQsUUFBbEIsQ0FBUDtBQUNIOzs7MkJBRWFFLE8sRUFBZ0I7QUFDMUIsYUFBTyxLQUFLSCxPQUFMLENBQWFHLE1BQWIsQ0FBb0JBLE9BQXBCLENBQVA7QUFDSDs7O3lCQUVXQyxNLEVBQWtCO0FBQzFCLGFBQU8sS0FBS0osT0FBTCxDQUFhSyxJQUFiLENBQWtCRCxNQUFsQixDQUFQO0FBQ0gsSyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVW5hdXRob3JpemVkRXJyb3IsIFNlcnZlckVycm9yIH0gZnJvbSAnZXJyb3JzJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZUludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlc3BvbnNlIHtcblxuICAgIHByaXZhdGUgYWRhcHRlcjogSHR0cFJlc3BvbnNlSW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogSHR0cFJlc3BvbnNlSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmQocmVzcG9uc2U6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2VuZChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXR1cyhzdGF0dXM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnN0YXR1cyhzdGF0dXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBqc29uKG9iamVjdDogYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5qc29uKG9iamVjdClcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgc3RhdHVzXG5cbiAgICAvLyBzZW5kXG4gICAgLy8gY29va2llXG4gICAgLy8gc3RhdHVzXG4gICAgLy8gaGVhZGVyXG5cbiAgICAvLyBwdWJsaWMgc3RhdGljIG9rKGJvZHk6IE9iamVjdCB8IE9iamVjdFtdKSB7XG4gICAgLy8gICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgLy8gICAgICAgICBib2R5XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgc3RhdGljIG5vQ29udGVudCAoKSB7XG4gICAgLy8gICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICBzdGF0dXNDb2RlOiAyMDRcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyBzdGF0aWMgYmFkUmVxdWVzdCAoZXJyb3I6IEVycm9yKSB7XG4gICAgLy8gICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgICBzdGF0dXNDb2RlOiA0MDAsXG4gICAgLy8gICAgICAgICBib2R5OiB7XG4gICAgLy8gICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyBzdGF0aWMgdW5hdXRob3JpemVkRXJyb3IgKCkge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgc3RhdHVzQ29kZTogNDAxLFxuICAgIC8vICAgICAgICAgYm9keToge1xuICAgIC8vICAgICAgICAgICAgIGVycm9yOiBuZXcgVW5hdXRob3JpemVkRXJyb3IoKS5tZXNzYWdlXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgc3RhdGljIHNlcnZlckVycm9yICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICAvLyAgICAgICAgIGJvZHk6IHtcbiAgICAvLyAgICAgICAgICAgICBlcnJvcjogbmV3IFNlcnZlckVycm9yKCkubWVzc2FnZVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxufSJdfQ==