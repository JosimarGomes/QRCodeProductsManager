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

var ProductRepository = /*#__PURE__*/function () {
  function ProductRepository(databaseAccess) {
    (0, _classCallCheck2["default"])(this, ProductRepository);
    (0, _defineProperty2["default"])(this, "databaseAccess", void 0);
    this.databaseAccess = databaseAccess;
  }

  (0, _createClass2["default"])(ProductRepository, [{
    key: "persist",
    value: function () {
      var _persist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(product) {
        var newProduct;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.databaseAccess.create(product);

              case 2:
                newProduct = _context.sent;
                return _context.abrupt("return", newProduct);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function persist(_x) {
        return _persist.apply(this, arguments);
      }

      return persist;
    }()
  }, {
    key: "merge",
    value: function merge(product) {
      var updatedProduct = this.databaseAccess.update(product);
      return updatedProduct;
    }
  }, {
    key: "remove",
    value: function remove(productId) {
      console.log("vou remover esse produto:", productId);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.databaseAccess.getAll();
    }
  }, {
    key: "getById",
    value: function getById(productId) {
      return this.databaseAccess.getById(productId);
    }
  }, {
    key: "getBySerialCode",
    value: function getBySerialCode(serialCode) {
      return this.databaseAccess.getAll({
        bySerialCode: serialCode
      });
    }
  }, {
    key: "deleteById",
    value: function deleteById(id) {
      return this.databaseAccess["delete"](id);
    }
  }]);
  return ProductRepository;
}();

exports["default"] = ProductRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdHMudHMiXSwibmFtZXMiOlsiUHJvZHVjdFJlcG9zaXRvcnkiLCJkYXRhYmFzZUFjY2VzcyIsInByb2R1Y3QiLCJjcmVhdGUiLCJuZXdQcm9kdWN0IiwidXBkYXRlZFByb2R1Y3QiLCJ1cGRhdGUiLCJwcm9kdWN0SWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsIiwiZ2V0QnlJZCIsInNlcmlhbENvZGUiLCJieVNlcmlhbENvZGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQkEsaUI7QUFJakIsNkJBQVlDLGNBQVosRUFBbUQ7QUFBQTtBQUFBO0FBQy9DLFNBQUtBLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0g7Ozs7O29IQUVhQyxPOzs7Ozs7O3VCQUNlLEtBQUtELGNBQUwsQ0FBb0JFLE1BQXBCLENBQTJCRCxPQUEzQixDOzs7QUFBbkJFLGdCQUFBQSxVO2lEQUNDQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR0xGLE8sRUFBa0I7QUFDcEIsVUFBTUcsY0FBYyxHQUFHLEtBQUtKLGNBQUwsQ0FBb0JLLE1BQXBCLENBQTJCSixPQUEzQixDQUF2QjtBQUNBLGFBQU9HLGNBQVA7QUFDSDs7OzJCQUVNRSxTLEVBQW1CO0FBQ3RCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0YsU0FBekM7QUFDSDs7OzZCQUVRO0FBQ0wsYUFBTyxLQUFLTixjQUFMLENBQW9CUyxNQUFwQixFQUFQO0FBQ0g7Ozs0QkFFT0gsUyxFQUFtQjtBQUN2QixhQUFPLEtBQUtOLGNBQUwsQ0FBb0JVLE9BQXBCLENBQTRCSixTQUE1QixDQUFQO0FBQ0g7OztvQ0FFZUssVSxFQUFvQjtBQUNoQyxhQUFPLEtBQUtYLGNBQUwsQ0FBb0JTLE1BQXBCLENBQTJCO0FBQUVHLFFBQUFBLFlBQVksRUFBRUQ7QUFBaEIsT0FBM0IsQ0FBUDtBQUNIOzs7K0JBRVVFLEUsRUFBWTtBQUNuQixhQUFPLEtBQUtiLGNBQUwsV0FBMkJhLEVBQTNCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcG9zaXRvcnlJbnRlcmZhY2UgfSBmcm9tICdhZGFwdGVycyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdkb21haW4vZW50aXRpZXMvcHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEVudGl0aWVBZGFwdGVyIGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL21lbW9yeS9wcm9kdWN0LWVudGl0aWUnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFJlcG9zaXRvcnkgaW1wbGVtZW50cyBSZXBvc2l0b3J5SW50ZXJmYWNlIHtcblxuICAgIHByaXZhdGUgZGF0YWJhc2VBY2Nlc3M6IFByb2R1Y3RFbnRpdGllQWRhcHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFiYXNlQWNjZXNzOiBQcm9kdWN0RW50aXRpZUFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhYmFzZUFjY2VzcyA9IGRhdGFiYXNlQWNjZXNzO1xuICAgIH1cblxuICAgIGFzeW5jIHBlcnNpc3QocHJvZHVjdDogUHJvZHVjdCkge1xuICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0gYXdhaXQgdGhpcy5kYXRhYmFzZUFjY2Vzcy5jcmVhdGUocHJvZHVjdCk7XG4gICAgICAgIHJldHVybiBuZXdQcm9kdWN0O1xuICAgIH1cblxuICAgIG1lcmdlKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSB0aGlzLmRhdGFiYXNlQWNjZXNzLnVwZGF0ZShwcm9kdWN0KTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0O1xuICAgIH1cblxuICAgIHJlbW92ZShwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZvdSByZW1vdmVyIGVzc2UgcHJvZHV0bzpcIiwgcHJvZHVjdElkKVxuICAgIH1cblxuICAgIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VBY2Nlc3MuZ2V0QWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0QnlJZChwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZUFjY2Vzcy5nZXRCeUlkKHByb2R1Y3RJZCk7XG4gICAgfVxuXG4gICAgZ2V0QnlTZXJpYWxDb2RlKHNlcmlhbENvZGU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZUFjY2Vzcy5nZXRBbGwoeyBieVNlcmlhbENvZGU6IHNlcmlhbENvZGUgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlQnlJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmRlbGV0ZShpZCk7XG4gICAgfVxufSAiXX0=