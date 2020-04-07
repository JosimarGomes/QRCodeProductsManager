"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductRepository = /*#__PURE__*/function () {
  function ProductRepository(databaseAccess) {
    _classCallCheck(this, ProductRepository);

    _defineProperty(this, "databaseAccess", void 0);

    this.databaseAccess = databaseAccess;
  }

  _createClass(ProductRepository, [{
    key: "persist",
    value: function () {
      var _persist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(product) {
        var newProduct;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdHMudHMiXSwibmFtZXMiOlsiUHJvZHVjdFJlcG9zaXRvcnkiLCJkYXRhYmFzZUFjY2VzcyIsInByb2R1Y3QiLCJjcmVhdGUiLCJuZXdQcm9kdWN0IiwidXBkYXRlZFByb2R1Y3QiLCJ1cGRhdGUiLCJwcm9kdWN0SWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsIiwiZ2V0QnlJZCIsInNlcmlhbENvZGUiLCJieVNlcmlhbENvZGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQkEsaUI7QUFJakIsNkJBQVlDLGNBQVosRUFBbUQ7QUFBQTs7QUFBQTs7QUFDL0MsU0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSDs7Ozs7OEZBRWFDLE87Ozs7Ozs7dUJBQ2UsS0FBS0QsY0FBTCxDQUFvQkUsTUFBcEIsQ0FBMkJELE9BQTNCLEM7OztBQUFuQkUsZ0JBQUFBLFU7aURBQ0NBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHTEYsTyxFQUFrQjtBQUNwQixVQUFNRyxjQUFjLEdBQUcsS0FBS0osY0FBTCxDQUFvQkssTUFBcEIsQ0FBMkJKLE9BQTNCLENBQXZCO0FBQ0EsYUFBT0csY0FBUDtBQUNIOzs7MkJBRU1FLFMsRUFBbUI7QUFDdEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixTQUF6QztBQUNIOzs7NkJBRVE7QUFDTCxhQUFPLEtBQUtOLGNBQUwsQ0FBb0JTLE1BQXBCLEVBQVA7QUFDSDs7OzRCQUVPSCxTLEVBQW1CO0FBQ3ZCLGFBQU8sS0FBS04sY0FBTCxDQUFvQlUsT0FBcEIsQ0FBNEJKLFNBQTVCLENBQVA7QUFDSDs7O29DQUVlSyxVLEVBQW9CO0FBQ2hDLGFBQU8sS0FBS1gsY0FBTCxDQUFvQlMsTUFBcEIsQ0FBMkI7QUFBRUcsUUFBQUEsWUFBWSxFQUFFRDtBQUFoQixPQUEzQixDQUFQO0FBQ0g7OzsrQkFFVUUsRSxFQUFZO0FBQ25CLGFBQU8sS0FBS2IsY0FBTCxXQUEyQmEsRUFBM0IsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwb3NpdG9yeUludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ2RvbWFpbi9lbnRpdGllcy9wcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0RW50aXRpZUFkYXB0ZXIgZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvbWVtb3J5L3Byb2R1Y3QtZW50aXRpZSc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0UmVwb3NpdG9yeSBpbXBsZW1lbnRzIFJlcG9zaXRvcnlJbnRlcmZhY2Uge1xuXG4gICAgcHJpdmF0ZSBkYXRhYmFzZUFjY2VzczogUHJvZHVjdEVudGl0aWVBZGFwdGVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2VBY2Nlc3M6IFByb2R1Y3RFbnRpdGllQWRhcHRlcikge1xuICAgICAgICB0aGlzLmRhdGFiYXNlQWNjZXNzID0gZGF0YWJhc2VBY2Nlc3M7XG4gICAgfVxuXG4gICAgYXN5bmMgcGVyc2lzdChwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCB0aGlzLmRhdGFiYXNlQWNjZXNzLmNyZWF0ZShwcm9kdWN0KTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG4gICAgfVxuXG4gICAgbWVyZ2UocHJvZHVjdDogUHJvZHVjdCkge1xuICAgICAgICBjb25zdCB1cGRhdGVkUHJvZHVjdCA9IHRoaXMuZGF0YWJhc2VBY2Nlc3MudXBkYXRlKHByb2R1Y3QpO1xuICAgICAgICByZXR1cm4gdXBkYXRlZFByb2R1Y3Q7XG4gICAgfVxuXG4gICAgcmVtb3ZlKHByb2R1Y3RJZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidm91IHJlbW92ZXIgZXNzZSBwcm9kdXRvOlwiLCBwcm9kdWN0SWQpXG4gICAgfVxuXG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZUFjY2Vzcy5nZXRBbGwoKTtcbiAgICB9XG5cbiAgICBnZXRCeUlkKHByb2R1Y3RJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmdldEJ5SWQocHJvZHVjdElkKTtcbiAgICB9XG5cbiAgICBnZXRCeVNlcmlhbENvZGUoc2VyaWFsQ29kZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmdldEFsbCh7IGJ5U2VyaWFsQ29kZTogc2VyaWFsQ29kZSB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVCeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VBY2Nlc3MuZGVsZXRlKGlkKTtcbiAgICB9XG59ICJdfQ==