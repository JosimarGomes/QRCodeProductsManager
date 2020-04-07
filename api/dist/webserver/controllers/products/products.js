"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ProductController = function ProductController(productUseCase) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ProductController);
  (0, _defineProperty2["default"])(this, "productUseCase", void 0);
  (0, _defineProperty2["default"])(this, "createOrUpdate", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(httpRequest, httpResponse) {
      var _httpRequest$body, name, value, description, id, serialCodes, productCreated;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _httpRequest$body = httpRequest.body, name = _httpRequest$body.name, value = _httpRequest$body.value, description = _httpRequest$body.description, id = _httpRequest$body.id, serialCodes = _httpRequest$body.serialCodes;

              if (!id) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return _this.productUseCase.updateProduct({
                name: name,
                value: value,
                description: description,
                id: id,
                serialCodes: serialCodes
              });

            case 4:
              productCreated = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return _this.productUseCase.createProduct({
                name: name,
                value: value,
                description: description,
                serialCodes: serialCodes
              });

            case 9:
              productCreated = _context.sent;

            case 10:
              return _context.abrupt("return", httpResponse.send(productCreated));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "index", function (httpRequest, httpResponse) {
    var serialCode = httpRequest.query.serialCode;

    if (serialCode) {
      var userId = httpRequest.headers.authorization;

      var productBySerialCode = _this.productUseCase.getProductsBySerialCode(serialCode, userId);

      return httpResponse.send(productBySerialCode);
    }

    var products = _this.productUseCase.getProducts();

    return httpResponse.send(products);
  });
  (0, _defineProperty2["default"])(this, "getById", function (httpRequest, httpResponse) {
    var id = httpRequest.params.id;

    var product = _this.productUseCase.getProductById(id);

    return httpResponse.send(product);
  });
  (0, _defineProperty2["default"])(this, "deleteById", function (httpRequest, httpResponse) {
    var id = httpRequest.params.id;

    _this.productUseCase.deleteProduct(id);

    return httpResponse.send('ok');
  });
  this.productUseCase = productUseCase;
};

exports["default"] = ProductController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWJzZXJ2ZXIvY29udHJvbGxlcnMvcHJvZHVjdHMvcHJvZHVjdHMudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbnRyb2xsZXIiLCJwcm9kdWN0VXNlQ2FzZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFJlc3BvbnNlIiwiYm9keSIsIm5hbWUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJzZXJpYWxDb2RlcyIsInVwZGF0ZVByb2R1Y3QiLCJwcm9kdWN0Q3JlYXRlZCIsImNyZWF0ZVByb2R1Y3QiLCJzZW5kIiwic2VyaWFsQ29kZSIsInF1ZXJ5IiwidXNlcklkIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJwcm9kdWN0QnlTZXJpYWxDb2RlIiwiZ2V0UHJvZHVjdHNCeVNlcmlhbENvZGUiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RzIiwicGFyYW1zIiwicHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiZGVsZXRlUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGlCLEdBSWpCLDJCQUFZQyxjQUFaLEVBQTRDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBSXBCLGlCQUFPQyxXQUFQLEVBQWlDQyxZQUFqQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBR2tDRCxXQUFXLENBQUNFLElBSDlDLEVBR1pDLElBSFkscUJBR1pBLElBSFksRUFHTkMsS0FITSxxQkFHTkEsS0FITSxFQUdDQyxXQUhELHFCQUdDQSxXQUhELEVBR2NDLEVBSGQscUJBR2NBLEVBSGQsRUFHa0JDLFdBSGxCLHFCQUdrQkEsV0FIbEI7O0FBQUEsbUJBTWpCRCxFQU5pQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQU9PLEtBQUksQ0FBQ1AsY0FBTCxDQUFvQlMsYUFBcEIsQ0FBa0M7QUFBRUwsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxnQkFBQUEsS0FBSyxFQUFMQSxLQUFSO0FBQWVDLGdCQUFBQSxXQUFXLEVBQVhBLFdBQWY7QUFBNEJDLGdCQUFBQSxFQUFFLEVBQUZBLEVBQTVCO0FBQWdDQyxnQkFBQUEsV0FBVyxFQUFYQTtBQUFoQyxlQUFsQyxDQVBQOztBQUFBO0FBT2hCRSxjQUFBQSxjQVBnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQVNPLEtBQUksQ0FBQ1YsY0FBTCxDQUFvQlcsYUFBcEIsQ0FBa0M7QUFBRVAsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxnQkFBQUEsS0FBSyxFQUFMQSxLQUFSO0FBQWVDLGdCQUFBQSxXQUFXLEVBQVhBLFdBQWY7QUFBNEJFLGdCQUFBQSxXQUFXLEVBQVhBO0FBQTVCLGVBQWxDLENBVFA7O0FBQUE7QUFTaEJFLGNBQUFBLGNBVGdCOztBQUFBO0FBQUEsK0NBWWJSLFlBQVksQ0FBQ1UsSUFBYixDQUFrQkYsY0FBbEIsQ0FaYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQW1CN0IsVUFBQ1QsV0FBRCxFQUEyQkMsWUFBM0IsRUFDZTtBQUFBLFFBRWxCVyxVQUZrQixHQUVIWixXQUFXLENBQUNhLEtBRlQsQ0FFbEJELFVBRmtCOztBQUkxQixRQUFJQSxVQUFKLEVBQWdCO0FBQ1osVUFBTUUsTUFBTSxHQUFHZCxXQUFXLENBQUNlLE9BQVosQ0FBcUJDLGFBQXBDOztBQUNBLFVBQU1DLG1CQUFtQixHQUFHLEtBQUksQ0FBQ2xCLGNBQUwsQ0FBb0JtQix1QkFBcEIsQ0FBNENOLFVBQTVDLEVBQXdERSxNQUF4RCxDQUE1Qjs7QUFDQSxhQUFPYixZQUFZLENBQUNVLElBQWIsQ0FBa0JNLG1CQUFsQixDQUFQO0FBQ0g7O0FBRUQsUUFBTUUsUUFBUSxHQUFHLEtBQUksQ0FBQ3BCLGNBQUwsQ0FBb0JxQixXQUFwQixFQUFqQjs7QUFFQSxXQUFPbkIsWUFBWSxDQUFDVSxJQUFiLENBQWtCUSxRQUFsQixDQUFQO0FBQ0gsR0FqQzJDO0FBQUEsb0RBbUMzQixVQUFDbkIsV0FBRCxFQUEyQkMsWUFBM0IsRUFDYTtBQUFBLFFBRWxCSyxFQUZrQixHQUVYTixXQUFXLENBQUNxQixNQUZELENBRWxCZixFQUZrQjs7QUFJMUIsUUFBTWdCLE9BQU8sR0FBRyxLQUFJLENBQUN2QixjQUFMLENBQW9Cd0IsY0FBcEIsQ0FBbUNqQixFQUFuQyxDQUFoQjs7QUFFQSxXQUFPTCxZQUFZLENBQUNVLElBQWIsQ0FBa0JXLE9BQWxCLENBQVA7QUFDSCxHQTNDMkM7QUFBQSx1REE2Q3hCLFVBQUN0QixXQUFELEVBQTJCQyxZQUEzQixFQUNVO0FBQUEsUUFFbEJLLEVBRmtCLEdBRVhOLFdBQVcsQ0FBQ3FCLE1BRkQsQ0FFbEJmLEVBRmtCOztBQUkxQixJQUFBLEtBQUksQ0FBQ1AsY0FBTCxDQUFvQnlCLGFBQXBCLENBQWtDbEIsRUFBbEM7O0FBRUEsV0FBT0wsWUFBWSxDQUFDVSxJQUFiLENBQWtCLElBQWxCLENBQVA7QUFDSCxHQXJEMkM7QUFDeEMsT0FBS1osY0FBTCxHQUFzQkEsY0FBdEI7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJ2FkYXB0ZXJzJztcbmltcG9ydCBQcm9kdWN0VXNlQ2FzZSBmcm9tICdkb21haW4vdXNlQ2FzZXMvcHJvZHVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgcHJvZHVjdFVzZUNhc2U6IFByb2R1Y3RVc2VDYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJvZHVjdFVzZUNhc2U6IFByb2R1Y3RVc2VDYXNlKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFVzZUNhc2UgPSBwcm9kdWN0VXNlQ2FzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlT3JVcGRhdGUgPSBhc3luYyAoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LCBodHRwUmVzcG9uc2U6IEh0dHBSZXNwb25zZSlcbiAgICAgICAgOlByb21pc2U8SHR0cFJlc3BvbnNlPiA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBkZXNjcmlwdGlvbiwgaWQsIHNlcmlhbENvZGVzIH0gPSBodHRwUmVxdWVzdC5ib2R5O1xuICAgICAgICBsZXQgcHJvZHVjdENyZWF0ZWQ7XG4gICAgICAgIFxuICAgICAgICBpZihpZCkge1xuICAgICAgICAgICAgcHJvZHVjdENyZWF0ZWQgPSBhd2FpdCB0aGlzLnByb2R1Y3RVc2VDYXNlLnVwZGF0ZVByb2R1Y3QoeyBuYW1lLCB2YWx1ZSwgZGVzY3JpcHRpb24sIGlkLCBzZXJpYWxDb2RlcyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3RDcmVhdGVkID0gYXdhaXQgdGhpcy5wcm9kdWN0VXNlQ2FzZS5jcmVhdGVQcm9kdWN0KHsgbmFtZSwgdmFsdWUsIGRlc2NyaXB0aW9uLCBzZXJpYWxDb2RlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodHRwUmVzcG9uc2Uuc2VuZChwcm9kdWN0Q3JlYXRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZGV4ID0gKGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdCwgaHR0cFJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpXG4gICAgICAgIDpQcm9taXNlPEh0dHBSZXNwb25zZT4gPT4ge1xuXG4gICAgICAgIGNvbnN0IHsgc2VyaWFsQ29kZSB9ID0gaHR0cFJlcXVlc3QucXVlcnk7XG5cbiAgICAgICAgaWYgKHNlcmlhbENvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGh0dHBSZXF1ZXN0LmhlYWRlcnMuIGF1dGhvcml6YXRpb247XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QnlTZXJpYWxDb2RlID0gdGhpcy5wcm9kdWN0VXNlQ2FzZS5nZXRQcm9kdWN0c0J5U2VyaWFsQ29kZShzZXJpYWxDb2RlLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5zZW5kKHByb2R1Y3RCeVNlcmlhbENvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RVc2VDYXNlLmdldFByb2R1Y3RzKCk7XG5cbiAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5zZW5kKHByb2R1Y3RzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QnlJZCA9IChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsIGh0dHBSZXNwb25zZTogSHR0cFJlc3BvbnNlKVxuICAgICAgICA6UHJvbWlzZTxIdHRwUmVzcG9uc2U+ID0+IHtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSBodHRwUmVxdWVzdC5wYXJhbXM7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHRoaXMucHJvZHVjdFVzZUNhc2UuZ2V0UHJvZHVjdEJ5SWQoaWQpO1xuXG4gICAgICAgIHJldHVybiBodHRwUmVzcG9uc2Uuc2VuZChwcm9kdWN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlQnlJZCA9IChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsIGh0dHBSZXNwb25zZTogSHR0cFJlc3BvbnNlKVxuICAgICAgICA6UHJvbWlzZTxIdHRwUmVzcG9uc2U+ID0+IHtcblxuICAgICAgICBjb25zdCB7IGlkIH0gPSBodHRwUmVxdWVzdC5wYXJhbXM7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0VXNlQ2FzZS5kZWxldGVQcm9kdWN0KGlkKTtcblxuICAgICAgICByZXR1cm4gaHR0cFJlc3BvbnNlLnNlbmQoJ29rJyk7XG4gICAgfVxufVxuIl19