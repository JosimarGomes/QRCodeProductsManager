"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _adapters = require("../../../adapters");

var _expressHttpResponse = _interopRequireDefault(require("./express-http-response"));

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
    (0, _classCallCheck2["default"])(this, ExpressServer);
    (0, _defineProperty2["default"])(this, "port", void 0);
    (0, _defineProperty2["default"])(this, "express", void 0);
    this.port = port;
    this.express = (0, _express["default"])();
    this.setup(routes);
  }

  (0, _createClass2["default"])(ExpressServer, [{
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
      var _serverUp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9zZXJ2ZXIvZXhwcmVzcy9leHByZXNzLnRzIl0sIm5hbWVzIjpbInNldEh0dHBBZGFwdGVycyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImhhbmRsZXIiLCJodHRwUmVxdWVzdCIsIkh0dHBSZXF1ZXN0IiwiYm9keSIsInBhcmFtcyIsInF1ZXJ5IiwiaGVhZGVycyIsImV4cHJlc3NSZXNwb25zZUFkYXB0ZXIiLCJFeHByZXNzSHR0cFJlc3BvbnNlQWRhcHRlciIsImh0dHBSZXNwb25zZSIsIkh0dHBSZXNwb25zZSIsIkV4cHJlc3NTZXJ2ZXIiLCJwb3J0Iiwicm91dGVzIiwiZXhwcmVzcyIsInNldHVwIiwibWlkZGxld2FyZXMiLCJpbml0aWFsaXplUm91dGVzIiwidXNlIiwianNvbiIsImVycm9yIiwiX3JlcSIsIl9yZXMiLCJfbmV4dCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwicm91dGUiLCJodHRwTWV0aG9kIiwibWV0aG9kIiwidG9Mb3dlckNhc2UiLCJnZXQiLCJwYXRoIiwicG9zdCIsInB1dCIsInBhdGNoIiwib3B0aW9ucyIsIkVycm9yIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTUE7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQW1CQyxRQUFuQixFQUNwQkMsT0FEb0IsRUFDZ0Q7QUFFcEUsTUFBTUMsV0FBVyxHQUFHLElBQUlDLHFCQUFKLENBQWdCO0FBQ2hDQyxJQUFBQSxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0ssSUFEa0I7QUFFaENDLElBQUFBLE1BQU0sRUFBRU4sT0FBTyxDQUFDTSxNQUZnQjtBQUdoQ0MsSUFBQUEsS0FBSyxFQUFFUCxPQUFPLENBQUNPLEtBSGlCO0FBSWhDQyxJQUFBQSxPQUFPLEVBQUVSLE9BQU8sQ0FBQ1E7QUFKZSxHQUFoQixDQUFwQjtB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ZUFBSyxRQUFMO0FBQ0ksWUFBQSxLQUFJLENBQUNjLE9BQUwsQ0FBYXNCLE9BQWIsQ0FBcUJULEtBQUssQ0FBQ0ssSUFBM0IsRUFDSSxVQUFDbEMsT0FBRCxFQUFVQyxRQUFWO0FBQUEscUJBQXVCRixlQUFlLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUFvQjRCLEtBQUssQ0FBQzNCLE9BQTFCLENBQXRDO0FBQUEsYUFESjs7QUFFQTs7QUFDSjtBQUNJLGtCQUFNcUMsS0FBSyxDQUFDLDZCQUFELENBQVg7QUExQlI7QUE0QkgsT0EvQkQ7QUFnQ0g7Ozs7Ozs7Ozs7O0FBR0cscUJBQUt2QixPQUFMLENBQWF3QixNQUFiLENBQW9CLEtBQUsxQixJQUF6QixFQUErQixZQUFNO0FBQ2pDWSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLHFDQUF5QyxNQUFJLENBQUNiLElBQTlDO0FBQ0gsaUJBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5cbmltcG9ydCB7XG4gICAgU2VydmVySW50ZXJmYWNlLFxuICAgIEh0dHBSZXF1ZXN0LFxuICAgIEh0dHBSZXNwb25zZVxufSBmcm9tICdhZGFwdGVycyc7XG5pbXBvcnQgeyBSb3V0ZUFwcCB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCBFeHByZXNzSHR0cFJlc3BvbnNlQWRhcHRlciBmcm9tICcuL2V4cHJlc3MtaHR0cC1yZXNwb25zZSc7XG5cblxuY29uc3Qgc2V0SHR0cEFkYXB0ZXJzID0gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSxcbiAgICBoYW5kbGVyOiAocmVxdWVzdDogSHR0cFJlcXVlc3QsIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpID0+IHZvaWQpID0+IHtcbiAgICBcbiAgICBjb25zdCBodHRwUmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdCh7XG4gICAgICAgIGJvZHk6IHJlcXVlc3QuYm9keSxcbiAgICAgICAgcGFyYW1zOiByZXF1ZXN0LnBhcmFtcyxcbiAgICAgICAgcXVlcnk6IHJlcXVlc3QucXVlcnksXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cHJlc3NSZXNwb25zZUFkYXB0ZXIgPSBuZXcgRXhwcmVzc0h0dHBSZXNwb25zZUFkYXB0ZXIocmVzcG9uc2UpO1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UoZXhwcmVzc1Jlc3BvbnNlQWRhcHRlcik7XG5cbiAgICByZXR1cm4gaGFuZGxlcihodHRwUmVxdWVzdCwgaHR0cFJlc3BvbnNlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIGltcGxlbWVudHMgU2VydmVySW50ZXJmYWNlIHtcbiAgICBwdWJsaWMgcG9ydDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBleHByZXNzOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBvcnQ6IG51bWJlciwgcm91dGVzOlJvdXRlQXBwW10pIHtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgdGhpcy5leHByZXNzID0gZXhwcmVzcygpO1xuICAgICAgICB0aGlzLnNldHVwKHJvdXRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKHJvdXRlczpSb3V0ZUFwcFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUm91dGVzKHJvdXRlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtaWRkbGV3YXJlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShleHByZXNzLmpzb24oKSk7XG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoY29ycygpKTtcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShtb3JnYW4oJ3RpbnknKSk7XG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoKGVycm9yOiBFcnJvcixfcmVxOiBSZXF1ZXN0LCBfcmVzOiBSZXNwb25zZSwgX25leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVSb3V0ZXMocm91dGVzOiBSb3V0ZUFwcFtdKTogdm9pZCB7XG4gICAgICAgIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHR0cE1ldGhvZCA9IHJvdXRlLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBzd2l0Y2goaHR0cE1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzcy5nZXQocm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0LCByZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cHJlc3MucG9zdChyb3V0ZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzcy5wdXQocm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0LCByZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwcmVzcy5kZWxldGUocm91dGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0LCByZXNwb25zZSkgPT4gc2V0SHR0cEFkYXB0ZXJzKHJlcXVlc3QsIHJlc3BvbnNlLCByb3V0ZS5oYW5kbGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHByZXNzLnBhdGNoKHJvdXRlLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHNldEh0dHBBZGFwdGVycyhyZXF1ZXN0LCByZXNwb25zZSwgcm91dGUuaGFuZGxlcikpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cHJlc3Mub3B0aW9ucyhyb3V0ZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiBzZXRIdHRwQWRhcHRlcnMocmVxdWVzdCwgcmVzcG9uc2UsIHJvdXRlLmhhbmRsZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0h0dHAgTWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2VydmVyVXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuZXhwcmVzcy5saXN0ZW4odGhpcy5wb3J0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQXBwIGxpc3RlbmluZyBvbiB0aGUgcG9ydCAke3RoaXMucG9ydH1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiXX0=