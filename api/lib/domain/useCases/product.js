"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errors = require("errors");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductUseCase = /*#__PURE__*/function () {
  function ProductUseCase(repository, entitie, productLogRepository) {
    _classCallCheck(this, ProductUseCase);

    _defineProperty(this, "productRepository", void 0);

    _defineProperty(this, "productEntitie", void 0);

    _defineProperty(this, "productLogRepository", void 0);

    this.productRepository = repository;
    this.productEntitie = entitie;
    this.productLogRepository = productLogRepository;
  }

  _createClass(ProductUseCase, [{
    key: "createProduct",
    value: function () {
      var _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(product) {
        var newProduct, productCreated;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (product.name) {
                  _context.next = 2;
                  break;
                }

                throw new _errors.BadRequestError('Informe um nome para o produto');

              case 2:
                if (product.value) {
                  _context.next = 4;
                  break;
                }

                throw new _errors.BadRequestError('Informe um valor para o produto');

              case 4:
                newProduct = new this.productEntitie(product);
                _context.next = 7;
                return this.productRepository.persist(newProduct);

              case 7:
                productCreated = _context.sent;
                return _context.abrupt("return", productCreated);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createProduct(_x) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {
        var productToUpdate, updatedProduct;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                productToUpdate = new this.productEntitie(product);
                _context2.next = 3;
                return this.productRepository.merge(productToUpdate);

              case 3:
                updatedProduct = _context2.sent;
                return _context2.abrupt("return", updatedProduct);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateProduct(_x2) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: "getProducts",
    value: function getProducts() {
      return this.productRepository.getAll();
    }
  }, {
    key: "getProductById",
    value: function getProductById(id) {
      return this.productRepository.getById(id);
    }
  }, {
    key: "getProductsBySerialCode",
    value: function getProductsBySerialCode(serialCode, userId) {
      var product = this.productRepository.getBySerialCode(serialCode);

      if (userId) {
        this.productLogRepository.persist({
          productId: product.id,
          userId: userId,
          date: new Date(),
          productName: product.name,
          serialCode: serialCode,
          productValue: product.value,
          productDescription: product.description
        });
      }

      return product;
    }
  }, {
    key: "deleteProduct",
    value: function deleteProduct(productId) {
      this.productRepository.deleteById(productId);
    }
  }]);

  return ProductUseCase;
}();

exports["default"] = ProductUseCase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vdXNlQ2FzZXMvcHJvZHVjdC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VXNlQ2FzZSIsInJlcG9zaXRvcnkiLCJlbnRpdGllIiwicHJvZHVjdExvZ1JlcG9zaXRvcnkiLCJwcm9kdWN0UmVwb3NpdG9yeSIsInByb2R1Y3RFbnRpdGllIiwicHJvZHVjdCIsIm5hbWUiLCJCYWRSZXF1ZXN0RXJyb3IiLCJ2YWx1ZSIsIm5ld1Byb2R1Y3QiLCJwZXJzaXN0IiwicHJvZHVjdENyZWF0ZWQiLCJwcm9kdWN0VG9VcGRhdGUiLCJtZXJnZSIsInVwZGF0ZWRQcm9kdWN0IiwiZ2V0QWxsIiwiaWQiLCJnZXRCeUlkIiwic2VyaWFsQ29kZSIsInVzZXJJZCIsImdldEJ5U2VyaWFsQ29kZSIsInByb2R1Y3RJZCIsImRhdGUiLCJEYXRlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0VmFsdWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImRlbGV0ZUJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7QUFLakIsMEJBQVlDLFVBQVosRUFBMkNDLE9BQTNDLEVBQXlEQyxvQkFBekQsRUFBcUc7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFFakcsU0FBS0MsaUJBQUwsR0FBeUJILFVBQXpCO0FBQ0EsU0FBS0ksY0FBTCxHQUFzQkgsT0FBdEI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0g7Ozs7O29HQUUwQkcsTzs7Ozs7O29CQUVsQkEsT0FBTyxDQUFDQyxJOzs7OztzQkFDSCxJQUFJQyx1QkFBSixDQUFvQixnQ0FBcEIsQzs7O29CQUdMRixPQUFPLENBQUNHLEs7Ozs7O3NCQUNILElBQUlELHVCQUFKLENBQW9CLGlDQUFwQixDOzs7QUFHSkUsZ0JBQUFBLFUsR0FBYSxJQUFJLEtBQUtMLGNBQVQsQ0FBd0JDLE9BQXhCLEM7O3VCQUVXLEtBQUtGLGlCQUFMLENBQXVCTyxPQUF2QixDQUErQkQsVUFBL0IsQzs7O0FBQXhCRSxnQkFBQUEsYztpREFFQ0EsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxR0FHZ0JOLE87Ozs7OztBQUNqQk8sZ0JBQUFBLGUsR0FBa0IsSUFBSSxLQUFLUixjQUFULENBQXdCQyxPQUF4QixDOzt1QkFDSyxLQUFLRixpQkFBTCxDQUF1QlUsS0FBdkIsQ0FBNkJELGVBQTdCLEM7OztBQUF2QkUsZ0JBQUFBLGM7a0RBRUNBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHVTtBQUNqQixhQUFPLEtBQUtYLGlCQUFMLENBQXVCWSxNQUF2QixFQUFQO0FBQ0g7OzttQ0FFcUJDLEUsRUFBWTtBQUM5QixhQUFPLEtBQUtiLGlCQUFMLENBQXVCYyxPQUF2QixDQUErQkQsRUFBL0IsQ0FBUDtBQUNIOzs7NENBRThCRSxVLEVBQW9CQyxNLEVBQWM7QUFDN0QsVUFBTWQsT0FBTyxHQUFHLEtBQUtGLGlCQUFMLENBQXVCaUIsZUFBdkIsQ0FBdUNGLFVBQXZDLENBQWhCOztBQUVBLFVBQUlDLE1BQUosRUFBWTtBQUNSLGFBQUtqQixvQkFBTCxDQUEwQlEsT0FBMUIsQ0FBa0M7QUFDOUJXLFVBQUFBLFNBQVMsRUFBRWhCLE9BQU8sQ0FBQ1csRUFEVztBQUU5QkcsVUFBQUEsTUFBTSxFQUFOQSxNQUY4QjtBQUc5QkcsVUFBQUEsSUFBSSxFQUFFLElBQUlDLElBQUosRUFId0I7QUFJOUJDLFVBQUFBLFdBQVcsRUFBRW5CLE9BQU8sQ0FBQ0MsSUFKUztBQUs5QlksVUFBQUEsVUFBVSxFQUFFQSxVQUxrQjtBQU05Qk8sVUFBQUEsWUFBWSxFQUFFcEIsT0FBTyxDQUFDRyxLQU5RO0FBTzlCa0IsVUFBQUEsa0JBQWtCLEVBQUVyQixPQUFPLENBQUNzQjtBQVBFLFNBQWxDO0FBU0g7O0FBRUQsYUFBT3RCLE9BQVA7QUFDSDs7O2tDQUVvQmdCLFMsRUFBbUI7QUFDcEMsV0FBS2xCLGlCQUFMLENBQXVCeUIsVUFBdkIsQ0FBa0NQLFNBQWxDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICdkb21haW4vZW50aXRpZXMvcHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFJlcG9zaXRvcnkgZnJvbSAncmVwb3NpdG9yaWVzL3Byb2R1Y3RzJztcbmltcG9ydCBQcm9kdWN0bG9nUmVwb3NpdG9yeSBmcm9tICdyZXBvc2l0b3JpZXMvcHJvZHVjdC1sb2cnO1xuaW1wb3J0IHsgQmFkUmVxdWVzdEVycm9yIH0gZnJvbSAnZXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFVzZUNhc2Uge1xuICAgIHByaXZhdGUgcHJvZHVjdFJlcG9zaXRvcnk6IFByb2R1Y3RSZXBvc2l0b3J5O1xuICAgIHByaXZhdGUgcHJvZHVjdEVudGl0aWU6IGFueTtcbiAgICBwcml2YXRlIHByb2R1Y3RMb2dSZXBvc2l0b3J5OiBQcm9kdWN0bG9nUmVwb3NpdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IFByb2R1Y3RSZXBvc2l0b3J5LCBlbnRpdGllOiBhbnksIHByb2R1Y3RMb2dSZXBvc2l0b3J5OiBQcm9kdWN0bG9nUmVwb3NpdG9yeSkge1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLnByb2R1Y3RFbnRpdGllID0gZW50aXRpZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TG9nUmVwb3NpdG9yeSA9IHByb2R1Y3RMb2dSZXBvc2l0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9taXNlPFByb2R1Y3Q+IHtcblxuICAgICAgICBpZiAoIXByb2R1Y3QubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFcnJvcignSW5mb3JtZSB1bSBub21lIHBhcmEgbyBwcm9kdXRvJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJvZHVjdC52YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFcnJvcignSW5mb3JtZSB1bSB2YWxvciBwYXJhIG8gcHJvZHV0bycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IHRoaXMucHJvZHVjdEVudGl0aWUocHJvZHVjdCk7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdENyZWF0ZWQgPSAgYXdhaXQgdGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5wZXJzaXN0KG5ld1Byb2R1Y3QpIGFzIFByb2R1Y3Q7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RDcmVhdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGVQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9taXNlPFByb2R1Y3Q+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdFRvVXBkYXRlID0gbmV3IHRoaXMucHJvZHVjdEVudGl0aWUocHJvZHVjdCk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0ID0gYXdhaXQgdGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5tZXJnZShwcm9kdWN0VG9VcGRhdGUpO1xuXG4gICAgICAgIHJldHVybiB1cGRhdGVkUHJvZHVjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LmdldEFsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9kdWN0QnlJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LmdldEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9kdWN0c0J5U2VyaWFsQ29kZShzZXJpYWxDb2RlOiBudW1iZXIsIHVzZXJJZD86IGFueSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5nZXRCeVNlcmlhbENvZGUoc2VyaWFsQ29kZSk7XG5cbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TG9nUmVwb3NpdG9yeS5wZXJzaXN0KHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgICAgICBzZXJpYWxDb2RlOiBzZXJpYWxDb2RlLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RWYWx1ZTogcHJvZHVjdC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5kZWxldGVCeUlkKHByb2R1Y3RJZCk7XG4gICAgfVxufSJdfQ==