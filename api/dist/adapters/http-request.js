"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var HttpRequest = function HttpRequest(_ref) {
  var body = _ref.body,
      params = _ref.params,
      query = _ref.query,
      headers = _ref.headers;
  (0, _classCallCheck2["default"])(this, HttpRequest);
  (0, _defineProperty2["default"])(this, "body", void 0);
  (0, _defineProperty2["default"])(this, "params", void 0);
  (0, _defineProperty2["default"])(this, "query", void 0);
  (0, _defineProperty2["default"])(this, "headers", void 0);
  this.body = body;
  this.params = params;
  this.query = query;
  this.headers = headers;
};

exports["default"] = HttpRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVycy9odHRwLXJlcXVlc3QudHMiXSwibmFtZXMiOlsiSHR0cFJlcXVlc3QiLCJib2R5IiwicGFyYW1zIiwicXVlcnkiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBU3FCQSxXLEdBT2pCLDJCQUEyRDtBQUFBLE1BQTdDQyxJQUE2QyxRQUE3Q0EsSUFBNkM7QUFBQSxNQUF2Q0MsTUFBdUMsUUFBdkNBLE1BQXVDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZELE9BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RMaXRlcmFsIH0gZnJvbSAndHlwZXMnO1xuXG50eXBlIGh0dHBSZXF1ZXN0ID0ge1xuICAgIGJvZHk/OiBPYmplY3RMaXRlcmFsLFxuICAgIHBhcmFtcz86IE9iamVjdExpdGVyYWwsXG4gICAgcXVlcnk/OiBPYmplY3RMaXRlcmFsLFxuICAgIGhlYWRlcnM6IE9iamVjdExpdGVyYWxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3QgeyAgICBcbiAgICBwdWJsaWMgYm9keT86IGFueTtcbiAgICBwdWJsaWMgcGFyYW1zPzogT2JqZWN0TGl0ZXJhbCB8IGFueTtcbiAgICBwdWJsaWMgcXVlcnk/OiBPYmplY3RMaXRlcmFsIHwgYW55O1xuICAgIHB1YmxpYyBoZWFkZXJzOiBPYmplY3RMaXRlcmFsO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcih7IGJvZHksIHBhcmFtcywgcXVlcnksIGhlYWRlcnMgfTogaHR0cFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB9XG5cbn0iXX0=