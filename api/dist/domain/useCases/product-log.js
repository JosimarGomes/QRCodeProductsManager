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

var ProductLogUseCase = /*#__PURE__*/function () {
  function ProductLogUseCase(repository, entitie) {
    (0, _classCallCheck2["default"])(this, ProductLogUseCase);
    (0, _defineProperty2["default"])(this, "productLogRepository", void 0);
    (0, _defineProperty2["default"])(this, "productLogEntitie", void 0);
    this.productLogRepository = repository;
    this.productLogEntitie = entitie;
  }

  (0, _createClass2["default"])(ProductLogUseCase, [{
    key: "createProductLog",
    value: function () {
      var _createProductLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(productLog) {
        var newProductLog, productLogCreated;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newProductLog = new this.productLogEntitie(productLog);
                console.log("vai criar productLog", newProductLog);
                _context.next = 4;
                return this.productLogRepository.persist(newProductLog);

              case 4:
                productLogCreated = _context.sent;
                return _context.abrupt("return", productLogCreated);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createProductLog(_x) {
        return _createProductLog.apply(this, arguments);
      }

      return createProductLog;
    }()
  }, {
    key: "getCountProductLogsbyProduct",
    value: function getCountProductLogsbyProduct(productId) {
      return this.productLogRepository.countByProductId(productId);
    }
  }, {
    key: "getProductLogsbyProduct",
    value: function getProductLogsbyProduct(productId) {
      return this.productLogRepository.getByProductId(productId);
    }
  }, {
    key: "getProductLogsByUser",
    value: function getProductLogsByUser(id) {
      return this.productLogRepository.getByUserId(id);
    }
  }]);
  return ProductLogUseCase;
}();

exports["default"] = ProductLogUseCase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vdXNlQ2FzZXMvcHJvZHVjdC1sb2cudHMiXSwibmFtZXMiOlsiUHJvZHVjdExvZ1VzZUNhc2UiLCJyZXBvc2l0b3J5IiwiZW50aXRpZSIsInByb2R1Y3RMb2dSZXBvc2l0b3J5IiwicHJvZHVjdExvZ0VudGl0aWUiLCJwcm9kdWN0TG9nIiwibmV3UHJvZHVjdExvZyIsImNvbnNvbGUiLCJsb2ciLCJwZXJzaXN0IiwicHJvZHVjdExvZ0NyZWF0ZWQiLCJwcm9kdWN0SWQiLCJjb3VudEJ5UHJvZHVjdElkIiwiZ2V0QnlQcm9kdWN0SWQiLCJpZCIsImdldEJ5VXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxpQjtBQUlqQiw2QkFBWUMsVUFBWixFQUE4Q0MsT0FBOUMsRUFBNEQ7QUFBQTtBQUFBO0FBQUE7QUFFeEQsU0FBS0Msb0JBQUwsR0FBNEJGLFVBQTVCO0FBQ0EsU0FBS0csaUJBQUwsR0FBeUJGLE9BQXpCO0FBQ0g7Ozs7OzZIQUU2QkcsVTs7Ozs7O0FBRXBCQyxnQkFBQUEsYSxHQUFnQixJQUFJLEtBQUtGLGlCQUFULENBQTJCQyxVQUEzQixDO0FBQ3RCRSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NGLGFBQXBDOzt1QkFFaUMsS0FBS0gsb0JBQUwsQ0FBMEJNLE9BQTFCLENBQWtDSCxhQUFsQyxDOzs7QUFBM0JJLGdCQUFBQSxpQjtpREFFQ0EsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREFHeUJDLFMsRUFBbUI7QUFDbkQsYUFBTyxLQUFLUixvQkFBTCxDQUEwQlMsZ0JBQTFCLENBQTJDRCxTQUEzQyxDQUFQO0FBQ0g7Ozs0Q0FFOEJBLFMsRUFBbUI7QUFDOUMsYUFBTyxLQUFLUixvQkFBTCxDQUEwQlUsY0FBMUIsQ0FBeUNGLFNBQXpDLENBQVA7QUFDSDs7O3lDQUUyQkcsRSxFQUFZO0FBQ3BDLGFBQU8sS0FBS1gsb0JBQUwsQ0FBMEJZLFdBQTFCLENBQXNDRCxFQUF0QyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdExvZyBmcm9tICdkb21haW4vZW50aXRpZXMvcHJvZHVjdC1sb2cnO1xuaW1wb3J0IFByb2R1Y3RMb2dSZXBvc2l0b3J5IGZyb20gJ3JlcG9zaXRvcmllcy9wcm9kdWN0LWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMb2dVc2VDYXNlIHtcbiAgICBwcml2YXRlIHByb2R1Y3RMb2dSZXBvc2l0b3J5OiBQcm9kdWN0TG9nUmVwb3NpdG9yeTtcbiAgICBwcml2YXRlIHByb2R1Y3RMb2dFbnRpdGllOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihyZXBvc2l0b3J5OiBQcm9kdWN0TG9nUmVwb3NpdG9yeSwgZW50aXRpZTogYW55KSB7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0TG9nUmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMucHJvZHVjdExvZ0VudGl0aWUgPSBlbnRpdGllO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVQcm9kdWN0TG9nKHByb2R1Y3RMb2c6IFByb2R1Y3RMb2cpIHtcblxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0TG9nID0gbmV3IHRoaXMucHJvZHVjdExvZ0VudGl0aWUocHJvZHVjdExvZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFpIGNyaWFyIHByb2R1Y3RMb2dcIiwgbmV3UHJvZHVjdExvZylcblxuICAgICAgICBjb25zdCBwcm9kdWN0TG9nQ3JlYXRlZCA9ICBhd2FpdCB0aGlzLnByb2R1Y3RMb2dSZXBvc2l0b3J5LnBlcnNpc3QobmV3UHJvZHVjdExvZyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RMb2dDcmVhdGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb3VudFByb2R1Y3RMb2dzYnlQcm9kdWN0KHByb2R1Y3RJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMb2dSZXBvc2l0b3J5LmNvdW50QnlQcm9kdWN0SWQocHJvZHVjdElkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvZHVjdExvZ3NieVByb2R1Y3QocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdExvZ1JlcG9zaXRvcnkuZ2V0QnlQcm9kdWN0SWQocHJvZHVjdElkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvZHVjdExvZ3NCeVVzZXIoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TG9nUmVwb3NpdG9yeS5nZXRCeVVzZXJJZChpZCk7XG4gICAgfVxufSJdfQ==