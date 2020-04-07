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

var _errors = require("../../errors");

var ProductUseCase = /*#__PURE__*/function () {
  function ProductUseCase(repository, entitie, productLogRepository) {
    (0, _classCallCheck2["default"])(this, ProductUseCase);
    (0, _defineProperty2["default"])(this, "productRepository", void 0);
    (0, _defineProperty2["default"])(this, "productEntitie", void 0);
    (0, _defineProperty2["default"])(this, "productLogRepository", void 0);
    this.productRepository = repository;
    this.productEntitie = entitie;
    this.productLogRepository = productLogRepository;
  }

  (0, _createClass2["default"])(ProductUseCase, [{
    key: "createProduct",
    value: function () {
      var _createProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(product) {
        var newProduct, productCreated;
        return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(product) {
        var productToUpdate, updatedProduct;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vdXNlQ2FzZXMvcHJvZHVjdC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VXNlQ2FzZSIsInJlcG9zaXRvcnkiLCJlbnRpdGllIiwicHJvZHVjdExvZ1JlcG9zaXRvcnkiLCJwcm9kdWN0UmVwb3NpdG9yeSIsInByb2R1Y3RFbnRpdGllIiwicHJvZHVjdCIsIm5hbWUiLCJCYWRSZXF1ZXN0RXJyb3IiLCJ2YWx1ZSIsIm5ld1Byb2R1Y3QiLCJwZXJzaXN0IiwicHJvZHVjdENyZWF0ZWQiLCJwcm9kdWN0VG9VcGRhdGUiLCJtZXJnZSIsInVwZGF0ZWRQcm9kdWN0IiwiZ2V0QWxsIiwiaWQiLCJnZXRCeUlkIiwic2VyaWFsQ29kZSIsInVzZXJJZCIsImdldEJ5U2VyaWFsQ29kZSIsInByb2R1Y3RJZCIsImRhdGUiLCJEYXRlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0VmFsdWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImRlbGV0ZUJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7SUFFcUJBLGM7QUFLakIsMEJBQVlDLFVBQVosRUFBMkNDLE9BQTNDLEVBQXlEQyxvQkFBekQsRUFBcUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVqRyxTQUFLQyxpQkFBTCxHQUF5QkgsVUFBekI7QUFDQSxTQUFLSSxjQUFMLEdBQXNCSCxPQUF0QjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDSDs7Ozs7MEhBRTBCRyxPOzs7Ozs7b0JBRWxCQSxPQUFPLENBQUNDLEk7Ozs7O3NCQUNILElBQUlDLHVCQUFKLENBQW9CLGdDQUFwQixDOzs7b0JBR0xGLE9BQU8sQ0FBQ0csSzs7Ozs7c0JBQ0gsSUFBSUQsdUJBQUosQ0FBb0IsaUNBQXBCLEM7OztBQUdKRSxnQkFBQUEsVSxHQUFhLElBQUksS0FBS0wsY0FBVCxDQUF3QkMsT0FBeEIsQzs7dUJBRVcsS0FBS0YsaUJBQUwsQ0FBdUJPLE9BQXZCLENBQStCRCxVQUEvQixDOzs7QUFBeEJFLGdCQUFBQSxjO2lEQUVDQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJIQUdnQk4sTzs7Ozs7O0FBQ2pCTyxnQkFBQUEsZSxHQUFrQixJQUFJLEtBQUtSLGNBQVQsQ0FBd0JDLE9BQXhCLEM7O3VCQUNLLEtBQUtGLGlCQUFMLENBQXVCVSxLQUF2QixDQUE2QkQsZUFBN0IsQzs7O0FBQXZCRSxnQkFBQUEsYztrREFFQ0EsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdVO0FBQ2pCLGFBQU8sS0FBS1gsaUJBQUwsQ0FBdUJZLE1BQXZCLEVBQVA7QUFDSDs7O21DQUVxQkMsRSxFQUFZO0FBQzlCLGFBQU8sS0FBS2IsaUJBQUwsQ0FBdUJjLE9BQXZCLENBQStCRCxFQUEvQixDQUFQO0FBQ0g7Ozs0Q0FFOEJFLFUsRUFBb0JDLE0sRUFBYztBQUM3RCxVQUFNZCxPQUFPLEdBQUcsS0FBS0YsaUJBQUwsQ0FBdUJpQixlQUF2QixDQUF1Q0YsVUFBdkMsQ0FBaEI7O0FBRUEsVUFBSUMsTUFBSixFQUFZO0FBQ1IsYUFBS2pCLG9CQUFMLENBQTBCUSxPQUExQixDQUFrQztBQUM5QlcsVUFBQUEsU0FBUyxFQUFFaEIsT0FBTyxDQUFDVyxFQURXO0FBRTlCRyxVQUFBQSxNQUFNLEVBQU5BLE1BRjhCO0FBRzlCRyxVQUFBQSxJQUFJLEVBQUUsSUFBSUMsSUFBSixFQUh3QjtBQUk5QkMsVUFBQUEsV0FBVyxFQUFFbkIsT0FBTyxDQUFDQyxJQUpTO0FBSzlCWSxVQUFBQSxVQUFVLEVBQUVBLFVBTGtCO0FBTTlCTyxVQUFBQSxZQUFZLEVBQUVwQixPQUFPLENBQUNHLEtBTlE7QUFPOUJrQixVQUFBQSxrQkFBa0IsRUFBRXJCLE9BQU8sQ0FBQ3NCO0FBUEUsU0FBbEM7QUFTSDs7QUFFRCxhQUFPdEIsT0FBUDtBQUNIOzs7a0NBRW9CZ0IsUyxFQUFtQjtBQUNwQyxXQUFLbEIsaUJBQUwsQ0FBdUJ5QixVQUF2QixDQUFrQ1AsU0FBbEM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJ2RvbWFpbi9lbnRpdGllcy9wcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0UmVwb3NpdG9yeSBmcm9tICdyZXBvc2l0b3JpZXMvcHJvZHVjdHMnO1xuaW1wb3J0IFByb2R1Y3Rsb2dSZXBvc2l0b3J5IGZyb20gJ3JlcG9zaXRvcmllcy9wcm9kdWN0LWxvZyc7XG5pbXBvcnQgeyBCYWRSZXF1ZXN0RXJyb3IgfSBmcm9tICdlcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VXNlQ2FzZSB7XG4gICAgcHJpdmF0ZSBwcm9kdWN0UmVwb3NpdG9yeTogUHJvZHVjdFJlcG9zaXRvcnk7XG4gICAgcHJpdmF0ZSBwcm9kdWN0RW50aXRpZTogYW55O1xuICAgIHByaXZhdGUgcHJvZHVjdExvZ1JlcG9zaXRvcnk6IFByb2R1Y3Rsb2dSZXBvc2l0b3J5O1xuXG4gICAgY29uc3RydWN0b3IocmVwb3NpdG9yeTogUHJvZHVjdFJlcG9zaXRvcnksIGVudGl0aWU6IGFueSwgcHJvZHVjdExvZ1JlcG9zaXRvcnk6IFByb2R1Y3Rsb2dSZXBvc2l0b3J5KSB7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMucHJvZHVjdEVudGl0aWUgPSBlbnRpdGllO1xuICAgICAgICB0aGlzLnByb2R1Y3RMb2dSZXBvc2l0b3J5ID0gcHJvZHVjdExvZ1JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZVByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4ge1xuXG4gICAgICAgIGlmICghcHJvZHVjdC5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKCdJbmZvcm1lIHVtIG5vbWUgcGFyYSBvIHByb2R1dG8nKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0LnZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKCdJbmZvcm1lIHVtIHZhbG9yIHBhcmEgbyBwcm9kdXRvJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgdGhpcy5wcm9kdWN0RW50aXRpZShwcm9kdWN0KTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0Q3JlYXRlZCA9ICBhd2FpdCB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LnBlcnNpc3QobmV3UHJvZHVjdCkgYXMgUHJvZHVjdDtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdENyZWF0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZVByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0VG9VcGRhdGUgPSBuZXcgdGhpcy5wcm9kdWN0RW50aXRpZShwcm9kdWN0KTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5Lm1lcmdlKHByb2R1Y3RUb1VwZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFJlcG9zaXRvcnkuZ2V0QWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb2R1Y3RCeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFJlcG9zaXRvcnkuZ2V0QnlJZChpZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb2R1Y3RzQnlTZXJpYWxDb2RlKHNlcmlhbENvZGU6IG51bWJlciwgdXNlcklkPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LmdldEJ5U2VyaWFsQ29kZShzZXJpYWxDb2RlKTtcblxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMb2dSZXBvc2l0b3J5LnBlcnNpc3Qoe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgICAgIHNlcmlhbENvZGU6IHNlcmlhbENvZGUsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFZhbHVlOiBwcm9kdWN0LnZhbHVlLFxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvZHVjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlUHJvZHVjdChwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LmRlbGV0ZUJ5SWQocHJvZHVjdElkKTtcbiAgICB9XG59Il19