"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _adapters = require("adapters");

var _expressHttpResponse = _interopRequireDefault(require("./express-http-response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setHttpAdapters = function setHttpAdapters(request, response, handler) {
  var httpRequest = new _adapters.HttpRequest({
    body: request.body,
    params: request.params,
    query: request.query,
    headers: request.headers
  });
  var expressResponseAdapter = new _expressHttpResponse["default"](response);
  var httpResponse = new _adapters.HttpResponse(expressResponseAdapter);
  return handler(httpRequest, httpResponse);
};

var ExpressServer = /*#__PURE__*/function () {
  function ExpressServer(port, routes) {
    _classCallCheck(this, ExpressServer);

    _defineProperty(this, "port", void 0);

    _defineProperty(this, "express", void 0);

    this.port = port;
    this.express = (0, _express["default"])();
    this.setup(routes);
  }

  _createClass(ExpressServer, [{
    key: "setup",
    value: function setup(routes) {
      this.middlewares();
      this.initializeRoutes(routes);
    }
  }, {
    key: "middlewares",
    value: function middlewares() {
      this.express.use(_express["default"].json());
      this.express.use((0, _cors["default"])());
      this.express.use((0, _morgan["default"])('tiny'));
      this.express.use(function (error, _req, _res, _next) {
        console.log("error", error);
      });
    }
  }, {
    key: "initializeRoutes",
    value: function initializeRoutes(routes) {
      var _this = this;

      routes.forEach(function (route) {
        var httpMethod = route.method.toLowerCase();

        switch (httpMethod) {
          case 'get':
            _this.express.get(route.path, function (request, response) {
              return setHttpAdapters(request, response, route.handler);
            });

            break;

          case 'post':
            _this.express.post(route.path, function (request, response) {
              return setHttpAdapters(request, response, route.handler);
            });

            break;

          case 'put':
            _this.express.put(route.path, function (request, response) {
              return setHttpAdapters(request, response, route.handler);
            });

            break;

          case 'delete':
            _this.express["delete"](route.path, function (request, response) {
              return setHttpAdapters(request, response, route.handler);
            });

            break;

          case 'patch':
            _this.express.patch(route.path, function (request, response) {
              return setHttpAdapters(request, response, route.handler);
            });

            break;

          case 'option':
            _this.express.options(route.path, function (request, response) {
              return setHttpAdapters(request, response, route.handler);
            });

            break;

          default:
            throw Error('Http Method not implemented');
        }
      });
    }
  }, {
    key: "serverUp",
    value: function () {
      var _serverUp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.express.listen(this.port, function () {
                  console.log("App listening on the port ".concat(_this2.port));
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function serverUp() {
        return _serverUp.apply(this, arguments);
      }

      return serverUp;
    }()
  }]);

  return ExpressServer;
}();

exports["default"] = ExpressServer;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9zZXJ2ZXIvZXhwcmVzcy9leHByZXNzLnRzIl0sIm5hbWVzIjpbInNldEh0dHBBZGFwdGVycyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImhhbmRsZXIiLCJodHRwUmVxdWVzdCIsIkh0dHBSZXF1ZXN0IiwiYm9keSIsInBhcmFtcyIsInF1ZXJ5IiwiaGVhZGVycyIsImV4cHJlc3NSZXNwb25zZUFkYXB0ZXIiLCJFeHByZXNzSHR0cFJlc3BvbnNlQWRhcHRlciIsImh0dHBSZXNwb25zZSIsIkh0dHBSZXNwb25zZSIsIkV4cHJlc3NTZXJ2ZXIiLCJwb3J0Iiwicm91dGVzIiwiZXhwcmVzcyIsInNldHVwIiwibWlkZGxld2FyZXMiLCJpbml0aWFsaXplUm91dGVzIiwidXNlIiwianNvbiIsImVycm9yIiwiX3JlcSIsIl9yZXMiLCJfbmV4dCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwicm91dGUiLCJodHRwTWV0aG9kIiwibWV0aG9kIiwidG9Mb3dlckNhc2UiLCJnZXQiLCJwYXRoIiwicG9zdCIsInB1dCIsInBhdGNoIiwib3B0aW9ucyIsIkVycm9yIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLE9BQUQsRUFBbUJDLFFBQW5CLEVBQ3BCQyxPQURvQixFQUNnRDtBQUVwRSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMscUJBQUosQ0FBZ0I7QUFDaENDLElBQUFBLElBQUksRUFBRUwsT0FBTyxDQUFDSyxJQURrQjtBQUVoQ0MsSUFBQUEsTUFBTSxFQUFFTixPQUFPLENBQUNNLE1BRmdCO0FBR2hDQyxJQUFBQSxLQUFLLEVBQUVQLE9BQU8sQ0FBQ08sS0FIaUI7QUFJaENDLElBQUFBLE9BQU8sRUFBRVIsT0FBTyxDQUFDUTtBQUplLEdBQWhCLENBQXBC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QUFDSixlQUFLLFFBQUw7QUFDSSxZQUFBLEtBQUksQ0FBQ2MsT0FBTCxDQUFhc0IsT0FBYixDQUFxQlQsS0FBSyxDQUFDSyxJQUEzQixFQUNJLFVBQUNsQyxPQUFELEVBQVVDLFFBQVY7QUFBQSxxQkFBdUJGLGVBQWUsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQW9CNEIsS0FBSyxDQUFDM0IsT0FBMUIsQ0FBdEM7QUFBQSxhQURKOztBQUVBOztBQUNKO0FBQ0ksa0JBQU1xQyxLQUFLLENBQUMsNkJBQUQsQ0FBWDtBQTFCUjtBQTRCSCxPQS9CRDtBQWdDSDs7Ozs7Ozs7Ozs7QUFHRyxxQkFBS3ZCLE9BQUwsQ0FBYXdCLE1BQWIsQ0FBb0IsS0FBSzFCLElBQXpCLEVBQStCLFlBQU07QUFDakNZLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIscUNBQXlDLE1BQUksQ0FBQ2IsSUFBOUM7QUFDSCxpQkFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5cbmltcG9ydCB7XG4gICAgU2VydmVySW50ZXJmYWNlLFxuICAgIEh0dHBSZXF1ZXN0LFxuICAgIEh0dHBSZXNwb25zZVxufSBmcm9tICdhZGFwdGVycyc7XG5pbXBvcnQgeyBSb3V0ZUFwcCB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCBFeHByZXNzSHR0cFJlc3BvbnNlQWRhcHRlciBmcm9tICcuL2V4cHJlc3MtaHR0cC1yZXNwb25zZSc7XG5cblxuY29uc3Qgc2V0SHR0cEFkYXB0ZXJzID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSxcbiAgICBoYW5kbGVyOiAocmVxdWVzdDogSHR0cFJlcXVlc3QsIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpID0+IHZvaWQpID0+IHtcbiAgICBcbiAgICBjb25zdCBodHRwUmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdCh7XG4gICAgICAgIGJvZHk6IHJlcXVlc3QuYm9keSxcbiAgICAgICAgcGFyYW1zOiByZXF1ZXN0LnBhcmFtcyxcbiAgICAgICAgcXVlcnk6IHJlcXVlc3QucXVlcnksXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cHJlc3NSZXNwb25zZUFkYXB0ZXIgPSBuZXcgRXhwcmVzc0h0dHBSZXNwb25zZUFkYXB0ZXIocmVzcG9uc2UpO1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UoZXhwcmVzc1Jlc3BvbnNlQWRhcHRlcik7XG5cbiAgICByZXR1cm4gaGFuZGxlcihodHRwUmVxdWVzdCwgaHR0cFJlc3BvbnNlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIGltcGxlbWVudHMgU2VydmVySW50ZXJmYWNlIHtcbiAgICBwdWJsaWMgcG9ydDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBleHByZXNzOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBvcnQ6IG51bWJlciwgcm91dGVzOlJvdXRlQXBwW10pIHtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgdGhpcy5leHByZXNzID0gZXhwcmVzcygpO1xuICAgICAgICB0aGlzLnNldHVwKHJvdXRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKHJvdXRlczpSb3V0ZUFwcFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUm91dGVzKHJvdXRlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtaWRkbGV3YXJlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShleHByZXNzLmpzb24oKSk7XG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoY29ycygpKTtcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShtb3JnYW4oJ3RpbnknKSk7XG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoKGVycm9yOiBFcnJvcixfcmVxOiBSZXF1ZXN0LCBfcmVzOiBSZXNwb25zZSwgX25leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVSb3V0ZXMocm91dGVzOiBSb3V0ZUFwcFtdKTogdm9pZCB7XG4gICAgICAgIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHR0cE1ldGhvZCA9IHJvdXRlLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBzd2l0Y2goaHR0cE1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzcy5nZXQocm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0LCByZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cHJlc3MucG9zdChyb3V0ZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzcy5wdXQocm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0LCByZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzcy5kZWxldGUocm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0LCByZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHByZXNzLnBhdGNoKHJvdXRlLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHNldEh0dHBBZGFwdGVycyhyZXF1ZXN0LCByZXNwb25zZSwgcm91dGUuaGFuZGxlcikpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cHJlc3Mub3B0aW9ucyhyb3V0ZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiBzZXRIdHRwQWRhcHRlcnMocmVxdWVzdCwgcmVzcG9uc2UsIHJvdXRlLmhhbmRsZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0h0dHAgTWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2VydmVyVXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuZXhwcmVzcy5saXN0ZW4odGhpcy5wb3J0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQXBwIGxpc3RlbmluZyBvbiB0aGUgcG9ydCAke3RoaXMucG9ydH1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiXX0=