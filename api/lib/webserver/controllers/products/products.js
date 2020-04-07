"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductController = function ProductController(productUseCase) {
  var _this = this;

  _classCallCheck(this, ProductController);

  _defineProperty(this, "productUseCase", void 0);

  _defineProperty(this, "createOrUpdate", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(httpRequest, httpResponse) {
      var _httpRequest$body, name, value, description, id, serialCodes, productCreated;

      return regeneratorRuntime.wrap(function _callee$(_context) {
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

  _defineProperty(this, "index", function (httpRequest, httpResponse) {
    var serialCode = httpRequest.query.serialCode;

    if (serialCode) {
      var userId = httpRequest.headers.authorization;

      var productBySerialCode = _this.productUseCase.getProductsBySerialCode(serialCode, userId);

      return httpResponse.send(productBySerialCode);
    }

    var products = _this.productUseCase.getProducts();

    return httpResponse.send(products);
  });

  _defineProperty(this, "getById", function (httpRequest, httpResponse) {
    var id = httpRequest.params.id;

    var product = _this.productUseCase.getProductById(id);

    return httpResponse.send(product);
  });

  _defineProperty(this, "deleteById", function (httpRequest, httpResponse) {
    var id = httpRequest.params.id;

    _this.productUseCase.deleteProduct(id);

    return httpResponse.send('ok');
  });

  this.productUseCase = productUseCase;
};

exports["default"] = ProductController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWJzZXJ2ZXIvY29udHJvbGxlcnMvcHJvZHVjdHMvcHJvZHVjdHMudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbnRyb2xsZXIiLCJwcm9kdWN0VXNlQ2FzZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFJlc3BvbnNlIiwiYm9keSIsIm5hbWUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJzZXJpYWxDb2RlcyIsInVwZGF0ZVByb2R1Y3QiLCJwcm9kdWN0Q3JlYXRlZCIsImNyZWF0ZVByb2R1Y3QiLCJzZW5kIiwic2VyaWFsQ29kZSIsInF1ZXJ5IiwidXNlcklkIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJwcm9kdWN0QnlTZXJpYWxDb2RlIiwiZ2V0UHJvZHVjdHNCeVNlcmlhbENvZGUiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RzIiwicGFyYW1zIiwicHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiZGVsZXRlUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxpQixHQUlqQiwyQkFBWUMsY0FBWixFQUE0QztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUEsdUVBSXBCLGlCQUFPQyxXQUFQLEVBQWlDQyxZQUFqQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBR2tDRCxXQUFXLENBQUNFLElBSDlDLEVBR1pDLElBSFkscUJBR1pBLElBSFksRUFHTkMsS0FITSxxQkFHTkEsS0FITSxFQUdDQyxXQUhELHFCQUdDQSxXQUhELEVBR2NDLEVBSGQscUJBR2NBLEVBSGQsRUFHa0JDLFdBSGxCLHFCQUdrQkEsV0FIbEI7O0FBQUEsbUJBTWpCRCxFQU5pQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQU9PLEtBQUksQ0FBQ1AsY0FBTCxDQUFvQlMsYUFBcEIsQ0FBa0M7QUFBRUwsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxnQkFBQUEsS0FBSyxFQUFMQSxLQUFSO0FBQWVDLGdCQUFBQSxXQUFXLEVBQVhBLFdBQWY7QUFBNEJDLGdCQUFBQSxFQUFFLEVBQUZBLEVBQTVCO0FBQWdDQyxnQkFBQUEsV0FBVyxFQUFYQTtBQUFoQyxlQUFsQyxDQVBQOztBQUFBO0FBT2hCRSxjQUFBQSxjQVBnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQVNPLEtBQUksQ0FBQ1YsY0FBTCxDQUFvQlcsYUFBcEIsQ0FBa0M7QUFBRVAsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxnQkFBQUEsS0FBSyxFQUFMQSxLQUFSO0FBQWVDLGdCQUFBQSxXQUFXLEVBQVhBLFdBQWY7QUFBNEJFLGdCQUFBQSxXQUFXLEVBQVhBO0FBQTVCLGVBQWxDLENBVFA7O0FBQUE7QUFTaEJFLGNBQUFBLGNBVGdCOztBQUFBO0FBQUEsK0NBWWJSLFlBQVksQ0FBQ1UsSUFBYixDQUFrQkYsY0FBbEIsQ0FaYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQ0FtQjdCLFVBQUNULFdBQUQsRUFBMkJDLFlBQTNCLEVBQ2U7QUFBQSxRQUVsQlcsVUFGa0IsR0FFSFosV0FBVyxDQUFDYSxLQUZULENBRWxCRCxVQUZrQjs7QUFJMUIsUUFBSUEsVUFBSixFQUFnQjtBQUNaLFVBQU1FLE1BQU0sR0FBR2QsV0FBVyxDQUFDZSxPQUFaLENBQXFCQyxhQUFwQzs7QUFDQSxVQUFNQyxtQkFBbUIsR0FBRyxLQUFJLENBQUNsQixjQUFMLENBQW9CbUIsdUJBQXBCLENBQTRDTixVQUE1QyxFQUF3REUsTUFBeEQsQ0FBNUI7O0FBQ0EsYUFBT2IsWUFBWSxDQUFDVSxJQUFiLENBQWtCTSxtQkFBbEIsQ0FBUDtBQUNIOztBQUVELFFBQU1FLFFBQVEsR0FBRyxLQUFJLENBQUNwQixjQUFMLENBQW9CcUIsV0FBcEIsRUFBakI7O0FBRUEsV0FBT25CLFlBQVksQ0FBQ1UsSUFBYixDQUFrQlEsUUFBbEIsQ0FBUDtBQUNILEdBakMyQzs7QUFBQSxtQ0FtQzNCLFVBQUNuQixXQUFELEVBQTJCQyxZQUEzQixFQUNhO0FBQUEsUUFFbEJLLEVBRmtCLEdBRVhOLFdBQVcsQ0FBQ3FCLE1BRkQsQ0FFbEJmLEVBRmtCOztBQUkxQixRQUFNZ0IsT0FBTyxHQUFHLEtBQUksQ0FBQ3ZCLGNBQUwsQ0FBb0J3QixjQUFwQixDQUFtQ2pCLEVBQW5DLENBQWhCOztBQUVBLFdBQU9MLFlBQVksQ0FBQ1UsSUFBYixDQUFrQlcsT0FBbEIsQ0FBUDtBQUNILEdBM0MyQzs7QUFBQSxzQ0E2Q3hCLFVBQUN0QixXQUFELEVBQTJCQyxZQUEzQixFQUNVO0FBQUEsUUFFbEJLLEVBRmtCLEdBRVhOLFdBQVcsQ0FBQ3FCLE1BRkQsQ0FFbEJmLEVBRmtCOztBQUkxQixJQUFBLEtBQUksQ0FBQ1AsY0FBTCxDQUFvQnlCLGFBQXBCLENBQWtDbEIsRUFBbEM7O0FBRUEsV0FBT0wsWUFBWSxDQUFDVSxJQUFiLENBQWtCLElBQWxCLENBQVA7QUFDSCxHQXJEMkM7O0FBQ3hDLE9BQUtaLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdhZGFwdGVycyc7XG5pbXBvcnQgUHJvZHVjdFVzZUNhc2UgZnJvbSAnZG9tYWluL3VzZUNhc2VzL3Byb2R1Y3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0Q29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHByb2R1Y3RVc2VDYXNlOiBQcm9kdWN0VXNlQ2FzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RVc2VDYXNlOiBQcm9kdWN0VXNlQ2FzZSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RVc2VDYXNlID0gcHJvZHVjdFVzZUNhc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU9yVXBkYXRlID0gYXN5bmMgKGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdCwgaHR0cFJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpXG4gICAgICAgIDpQcm9taXNlPEh0dHBSZXNwb25zZT4gPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZGVzY3JpcHRpb24sIGlkLCBzZXJpYWxDb2RlcyB9ID0gaHR0cFJlcXVlc3QuYm9keTtcbiAgICAgICAgbGV0IHByb2R1Y3RDcmVhdGVkO1xuICAgICAgICBcbiAgICAgICAgaWYoaWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RDcmVhdGVkID0gYXdhaXQgdGhpcy5wcm9kdWN0VXNlQ2FzZS51cGRhdGVQcm9kdWN0KHsgbmFtZSwgdmFsdWUsIGRlc2NyaXB0aW9uLCBpZCwgc2VyaWFsQ29kZXMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0Q3JlYXRlZCA9IGF3YWl0IHRoaXMucHJvZHVjdFVzZUNhc2UuY3JlYXRlUHJvZHVjdCh7IG5hbWUsIHZhbHVlLCBkZXNjcmlwdGlvbiwgc2VyaWFsQ29kZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHR0cFJlc3BvbnNlLnNlbmQocHJvZHVjdENyZWF0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmRleCA9IChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsIGh0dHBSZXNwb25zZTogSHR0cFJlc3BvbnNlKVxuICAgICAgICA6UHJvbWlzZTxIdHRwUmVzcG9uc2U+ID0+IHtcblxuICAgICAgICBjb25zdCB7IHNlcmlhbENvZGUgfSA9IGh0dHBSZXF1ZXN0LnF1ZXJ5O1xuXG4gICAgICAgIGlmIChzZXJpYWxDb2RlKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBodHRwUmVxdWVzdC5oZWFkZXJzLiBhdXRob3JpemF0aW9uO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEJ5U2VyaWFsQ29kZSA9IHRoaXMucHJvZHVjdFVzZUNhc2UuZ2V0UHJvZHVjdHNCeVNlcmlhbENvZGUoc2VyaWFsQ29kZSwgdXNlcklkKTtcbiAgICAgICAgICAgIHJldHVybiBodHRwUmVzcG9uc2Uuc2VuZChwcm9kdWN0QnlTZXJpYWxDb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0VXNlQ2FzZS5nZXRQcm9kdWN0cygpO1xuXG4gICAgICAgIHJldHVybiBodHRwUmVzcG9uc2Uuc2VuZChwcm9kdWN0cyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJ5SWQgPSAoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LCBodHRwUmVzcG9uc2U6IEh0dHBSZXNwb25zZSlcbiAgICAgICAgOlByb21pc2U8SHR0cFJlc3BvbnNlPiA9PiB7XG5cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gaHR0cFJlcXVlc3QucGFyYW1zO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb2R1Y3RVc2VDYXNlLmdldFByb2R1Y3RCeUlkKGlkKTtcblxuICAgICAgICByZXR1cm4gaHR0cFJlc3BvbnNlLnNlbmQocHJvZHVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZUJ5SWQgPSAoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LCBodHRwUmVzcG9uc2U6IEh0dHBSZXNwb25zZSlcbiAgICAgICAgOlByb21pc2U8SHR0cFJlc3BvbnNlPiA9PiB7XG5cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gaHR0cFJlcXVlc3QucGFyYW1zO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFVzZUNhc2UuZGVsZXRlUHJvZHVjdChpZCk7XG5cbiAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5zZW5kKCdvaycpO1xuICAgIH1cbn1cbiJdfQ==