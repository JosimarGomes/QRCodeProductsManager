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

var ProductLogRepository = /*#__PURE__*/function () {
  function ProductLogRepository(databaseAccess) {
    _classCallCheck(this, ProductLogRepository);

    _defineProperty(this, "databaseAccess", void 0);

    this.databaseAccess = databaseAccess;
  }

  _createClass(ProductLogRepository, [{
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
      console.log("vou mergear nesse produto:", product);
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
    value: function getById(id) {
      return this.databaseAccess.getById(id);
    }
  }, {
    key: "getByUserId",
    value: function getByUserId(userId) {
      return this.databaseAccess.getByUserId(userId);
    }
  }, {
    key: "getByProductId",
    value: function getByProductId(productId) {
      return this.databaseAccess.getByProductId(productId);
    }
  }, {
    key: "countByProductId",
    value: function countByProductId(productId) {
      return this.databaseAccess.countByProductId(productId);
    }
  }]);

  return ProductLogRepository;
}();

exports["default"] = ProductLogRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdC1sb2cudHMiXSwibmFtZXMiOlsiUHJvZHVjdExvZ1JlcG9zaXRvcnkiLCJkYXRhYmFzZUFjY2VzcyIsInByb2R1Y3QiLCJjcmVhdGUiLCJuZXdQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJZCIsImdldEFsbCIsImlkIiwiZ2V0QnlJZCIsInVzZXJJZCIsImdldEJ5VXNlcklkIiwiZ2V0QnlQcm9kdWN0SWQiLCJjb3VudEJ5UHJvZHVjdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxvQjtBQUlqQixnQ0FBWUMsY0FBWixFQUFzRDtBQUFBOztBQUFBOztBQUNsRCxTQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNIOzs7Ozs4RkFFYUMsTzs7Ozs7Ozt1QkFDZSxLQUFLRCxjQUFMLENBQW9CRSxNQUFwQixDQUEyQkQsT0FBM0IsQzs7O0FBQW5CRSxnQkFBQUEsVTtpREFDQ0EsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdMRixPLEVBQXFCO0FBQ3ZCRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0osT0FBMUM7QUFDSDs7OzJCQUVNSyxTLEVBQW1CO0FBQ3RCRixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0MsU0FBekM7QUFDSDs7OzZCQUVRO0FBQ0wsYUFBTyxLQUFLTixjQUFMLENBQW9CTyxNQUFwQixFQUFQO0FBQ0g7Ozs0QkFFT0MsRSxFQUFZO0FBQ2hCLGFBQU8sS0FBS1IsY0FBTCxDQUFvQlMsT0FBcEIsQ0FBNEJELEVBQTVCLENBQVA7QUFDSDs7O2dDQUVXRSxNLEVBQWdCO0FBQ3hCLGFBQU8sS0FBS1YsY0FBTCxDQUFvQlcsV0FBcEIsQ0FBZ0NELE1BQWhDLENBQVA7QUFDSDs7O21DQUVjSixTLEVBQW1CO0FBQzlCLGFBQU8sS0FBS04sY0FBTCxDQUFvQlksY0FBcEIsQ0FBbUNOLFNBQW5DLENBQVA7QUFDSDs7O3FDQUVnQkEsUyxFQUFtQjtBQUNoQyxhQUFPLEtBQUtOLGNBQUwsQ0FBb0JhLGdCQUFwQixDQUFxQ1AsU0FBckMsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwb3NpdG9yeUludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcbmltcG9ydCBQcm9kdWN0TG9nIGZyb20gJ2RvbWFpbi9lbnRpdGllcy9wcm9kdWN0LWxvZyc7XG5pbXBvcnQgUHJvZHVjdExvZ0VudGl0aWVBZGFwdGVyIGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL21lbW9yeS9wcm9kdWN0LWxvZy1lbnRpdGllJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExvZ1JlcG9zaXRvcnkgaW1wbGVtZW50cyBSZXBvc2l0b3J5SW50ZXJmYWNlIHtcblxuICAgIHByaXZhdGUgZGF0YWJhc2VBY2Nlc3M6IFByb2R1Y3RMb2dFbnRpdGllQWRhcHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFiYXNlQWNjZXNzOiBQcm9kdWN0TG9nRW50aXRpZUFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhYmFzZUFjY2VzcyA9IGRhdGFiYXNlQWNjZXNzO1xuICAgIH1cblxuICAgIGFzeW5jIHBlcnNpc3QocHJvZHVjdDogUHJvZHVjdExvZykge1xuICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0gYXdhaXQgdGhpcy5kYXRhYmFzZUFjY2Vzcy5jcmVhdGUocHJvZHVjdCk7XG4gICAgICAgIHJldHVybiBuZXdQcm9kdWN0O1xuICAgIH1cblxuICAgIG1lcmdlKHByb2R1Y3Q6IFByb2R1Y3RMb2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2b3UgbWVyZ2VhciBuZXNzZSBwcm9kdXRvOlwiLCBwcm9kdWN0KVxuICAgIH1cblxuICAgIHJlbW92ZShwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZvdSByZW1vdmVyIGVzc2UgcHJvZHV0bzpcIiwgcHJvZHVjdElkKVxuICAgIH1cblxuICAgIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VBY2Nlc3MuZ2V0QWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0QnlJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIGdldEJ5VXNlcklkKHVzZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmdldEJ5VXNlcklkKHVzZXJJZClcbiAgICB9XG5cbiAgICBnZXRCeVByb2R1Y3RJZChwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZUFjY2Vzcy5nZXRCeVByb2R1Y3RJZChwcm9kdWN0SWQpO1xuICAgIH1cblxuICAgIGNvdW50QnlQcm9kdWN0SWQocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VBY2Nlc3MuY291bnRCeVByb2R1Y3RJZChwcm9kdWN0SWQpO1xuICAgIH1cbn0gIl19