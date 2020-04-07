"use strict";

var _express = _interopRequireDefault(require("../infrastructure/server/express/express"));

var _routes = _interopRequireDefault(require("./routes"));

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var serverAdapter = new _express["default"](3333, _routes["default"]);
var server = new _server["default"](serverAdapter);
server.listen();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJzZXJ2ZXIvaW5kZXgudHMiXSwibmFtZXMiOlsic2VydmVyQWRhcHRlciIsIkV4cHJlc3NTZXJ2ZXIiLCJhcHBSb3V0ZXMiLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsSUFBSUMsbUJBQUosQ0FBa0IsSUFBbEIsRUFBd0JDLGtCQUF4QixDQUF0QjtBQUVBLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxrQkFBSixDQUFXSixhQUFYLENBQWY7QUFFQUcsTUFBTSxDQUFDRSxNQUFQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cHJlc3NTZXJ2ZXIgZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvc2VydmVyL2V4cHJlc3MvZXhwcmVzcyc7XG5pbXBvcnQgYXBwUm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xuXG5jb25zdCBzZXJ2ZXJBZGFwdGVyID0gbmV3IEV4cHJlc3NTZXJ2ZXIoMzMzMywgYXBwUm91dGVzKTtcblxuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihzZXJ2ZXJBZGFwdGVyKTtcblxuc2VydmVyLmxpc3RlbigpOyJdfQ==