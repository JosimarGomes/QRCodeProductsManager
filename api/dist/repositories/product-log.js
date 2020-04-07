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

var ProductLogRepository = /*#__PURE__*/function () {
  function ProductLogRepository(databaseAccess) {
    (0, _classCallCheck2["default"])(this, ProductLogRepository);
    (0, _defineProperty2["default"])(this, "databaseAccess", void 0);
    this.databaseAccess = databaseAccess;
  }

  (0, _createClass2["default"])(ProductLogRepository, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdC1sb2cudHMiXSwibmFtZXMiOlsiUHJvZHVjdExvZ1JlcG9zaXRvcnkiLCJkYXRhYmFzZUFjY2VzcyIsInByb2R1Y3QiLCJjcmVhdGUiLCJuZXdQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJZCIsImdldEFsbCIsImlkIiwiZ2V0QnlJZCIsInVzZXJJZCIsImdldEJ5VXNlcklkIiwiZ2V0QnlQcm9kdWN0SWQiLCJjb3VudEJ5UHJvZHVjdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxvQjtBQUlqQixnQ0FBWUMsY0FBWixFQUFzRDtBQUFBO0FBQUE7QUFDbEQsU0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSDs7Ozs7b0hBRWFDLE87Ozs7Ozs7dUJBQ2UsS0FBS0QsY0FBTCxDQUFvQkUsTUFBcEIsQ0FBMkJELE9BQTNCLEM7OztBQUFuQkUsZ0JBQUFBLFU7aURBQ0NBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHTEYsTyxFQUFxQjtBQUN2QkcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRUFBMENKLE9BQTFDO0FBQ0g7OzsyQkFFTUssUyxFQUFtQjtBQUN0QkYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNDLFNBQXpDO0FBQ0g7Ozs2QkFFUTtBQUNMLGFBQU8sS0FBS04sY0FBTCxDQUFvQk8sTUFBcEIsRUFBUDtBQUNIOzs7NEJBRU9DLEUsRUFBWTtBQUNoQixhQUFPLEtBQUtSLGNBQUwsQ0FBb0JTLE9BQXBCLENBQTRCRCxFQUE1QixDQUFQO0FBQ0g7OztnQ0FFV0UsTSxFQUFnQjtBQUN4QixhQUFPLEtBQUtWLGNBQUwsQ0FBb0JXLFdBQXBCLENBQWdDRCxNQUFoQyxDQUFQO0FBQ0g7OzttQ0FFY0osUyxFQUFtQjtBQUM5QixhQUFPLEtBQUtOLGNBQUwsQ0FBb0JZLGNBQXBCLENBQW1DTixTQUFuQyxDQUFQO0FBQ0g7OztxQ0FFZ0JBLFMsRUFBbUI7QUFDaEMsYUFBTyxLQUFLTixjQUFMLENBQW9CYSxnQkFBcEIsQ0FBcUNQLFNBQXJDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcG9zaXRvcnlJbnRlcmZhY2UgfSBmcm9tICdhZGFwdGVycyc7XG5pbXBvcnQgUHJvZHVjdExvZyBmcm9tICdkb21haW4vZW50aXRpZXMvcHJvZHVjdC1sb2cnO1xuaW1wb3J0IFByb2R1Y3RMb2dFbnRpdGllQWRhcHRlciBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tZW1vcnkvcHJvZHVjdC1sb2ctZW50aXRpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMb2dSZXBvc2l0b3J5IGltcGxlbWVudHMgUmVwb3NpdG9yeUludGVyZmFjZSB7XG5cbiAgICBwcml2YXRlIGRhdGFiYXNlQWNjZXNzOiBQcm9kdWN0TG9nRW50aXRpZUFkYXB0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZUFjY2VzczogUHJvZHVjdExvZ0VudGl0aWVBZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VBY2Nlc3MgPSBkYXRhYmFzZUFjY2VzcztcbiAgICB9XG5cbiAgICBhc3luYyBwZXJzaXN0KHByb2R1Y3Q6IFByb2R1Y3RMb2cpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHRoaXMuZGF0YWJhc2VBY2Nlc3MuY3JlYXRlKHByb2R1Y3QpO1xuICAgICAgICByZXR1cm4gbmV3UHJvZHVjdDtcbiAgICB9XG5cbiAgICBtZXJnZShwcm9kdWN0OiBQcm9kdWN0TG9nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidm91IG1lcmdlYXIgbmVzc2UgcHJvZHV0bzpcIiwgcHJvZHVjdClcbiAgICB9XG5cbiAgICByZW1vdmUocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2b3UgcmVtb3ZlciBlc3NlIHByb2R1dG86XCIsIHByb2R1Y3RJZClcbiAgICB9XG5cbiAgICBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmdldEFsbCgpO1xuICAgIH1cblxuICAgIGdldEJ5SWQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZUFjY2Vzcy5nZXRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICBnZXRCeVVzZXJJZCh1c2VySWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZUFjY2Vzcy5nZXRCeVVzZXJJZCh1c2VySWQpXG4gICAgfVxuXG4gICAgZ2V0QnlQcm9kdWN0SWQocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VBY2Nlc3MuZ2V0QnlQcm9kdWN0SWQocHJvZHVjdElkKTtcbiAgICB9XG5cbiAgICBjb3VudEJ5UHJvZHVjdElkKHByb2R1Y3RJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlQWNjZXNzLmNvdW50QnlQcm9kdWN0SWQocHJvZHVjdElkKTtcbiAgICB9XG59ICJdfQ==