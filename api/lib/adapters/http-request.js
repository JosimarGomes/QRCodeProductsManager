"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HttpRequest = function HttpRequest(_ref) {
  var body = _ref.body,
      params = _ref.params,
      query = _ref.query,
      headers = _ref.headers;

  _classCallCheck(this, HttpRequest);

  _defineProperty(this, "body", void 0);

  _defineProperty(this, "params", void 0);

  _defineProperty(this, "query", void 0);

  _defineProperty(this, "headers", void 0);

  this.body = body;
  this.params = params;
  this.query = query;
  this.headers = headers;
};

exports["default"] = HttpRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVycy9odHRwLXJlcXVlc3QudHMiXSwibmFtZXMiOlsiSHR0cFJlcXVlc3QiLCJib2R5IiwicGFyYW1zIiwicXVlcnkiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVNxQkEsVyxHQU9qQiwyQkFBMkQ7QUFBQSxNQUE3Q0MsSUFBNkMsUUFBN0NBLElBQTZDO0FBQUEsTUFBdkNDLE1BQXVDLFFBQXZDQSxNQUF1QztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUN2RCxPQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0TGl0ZXJhbCB9IGZyb20gJ3R5cGVzJztcblxudHlwZSBodHRwUmVxdWVzdCA9IHtcbiAgICBib2R5PzogT2JqZWN0TGl0ZXJhbCxcbiAgICBwYXJhbXM/OiBPYmplY3RMaXRlcmFsLFxuICAgIHF1ZXJ5PzogT2JqZWN0TGl0ZXJhbCxcbiAgICBoZWFkZXJzOiBPYmplY3RMaXRlcmFsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0IHsgICAgXG4gICAgcHVibGljIGJvZHk/OiBhbnk7XG4gICAgcHVibGljIHBhcmFtcz86IE9iamVjdExpdGVyYWwgfCBhbnk7XG4gICAgcHVibGljIHF1ZXJ5PzogT2JqZWN0TGl0ZXJhbCB8IGFueTtcbiAgICBwdWJsaWMgaGVhZGVyczogT2JqZWN0TGl0ZXJhbDtcblxuXG4gICAgY29uc3RydWN0b3IoeyBib2R5LCBwYXJhbXMsIHF1ZXJ5LCBoZWFkZXJzIH06IGh0dHBSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgfVxuXG59Il19