"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var database = _interopRequireWildcard(require("./database"));

var ProductLogEntitieAdapter = /*#__PURE__*/function () {
  function ProductLogEntitieAdapter() {
    (0, _classCallCheck2["default"])(this, ProductLogEntitieAdapter);
    (0, _defineProperty2["default"])(this, "database", void 0);
    (0, _defineProperty2["default"])(this, "tableName", void 0);
    this.database = database;
    this.tableName = 'products_log';
  }

  (0, _createClass2["default"])(ProductLogEntitieAdapter, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(newProductLog) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newProductLog.id = Math.round(Math.random() * 1000); // simulate async database access

                return _context.abrupt("return", new Promise(function (res) {
                  setTimeout(function () {
                    _this.database[_this.tableName].push(newProductLog);

                    res(newProductLog);
                  }, 2000);
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "delete",
    value: function _delete() {}
  }, {
    key: "getAll",
    value: function getAll() {
      return this.database[this.tableName];
    }
  }, {
    key: "countByProductId",
    value: function countByProductId(productId) {
      return this.database[this.tableName].filter(function (productLog) {
        return productLog.productId == productId;
      }).length;
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return this.database[this.tableName].find(function (productLog) {
        return productLog.id == id;
      });
    }
  }, {
    key: "getByUserId",
    value: function getByUserId(userId) {
      var productLogs = this.database[this.tableName].filter(function (productLog) {
        return productLog.userId == userId;
      });
      productLogs.sort(function (a, b) {
        if (a.date > b.date) {
          return -1;
        }

        if (a.date < b.date) {
          return 1;
        }

        return 0;
      });
      return productLogs;
    }
  }, {
    key: "getByProductId",
    value: function getByProductId(productId) {
      return this.database[this.tableName].filter(function (productLog) {
        return productLog.productId == productId;
      });
    }
  }]);
  return ProductLogEntitieAdapter;
}();

exports["default"] = ProductLogEntitieAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tZW1vcnkvcHJvZHVjdC1sb2ctZW50aXRpZS50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TG9nRW50aXRpZUFkYXB0ZXIiLCJkYXRhYmFzZSIsInRhYmxlTmFtZSIsIm5ld1Byb2R1Y3RMb2ciLCJpZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIlByb21pc2UiLCJyZXMiLCJzZXRUaW1lb3V0IiwicHVzaCIsInByb2R1Y3RJZCIsImZpbHRlciIsInByb2R1Y3RMb2ciLCJsZW5ndGgiLCJmaW5kIiwidXNlcklkIiwicHJvZHVjdExvZ3MiLCJzb3J0IiwiYSIsImIiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLHdCO0FBS2pCLHNDQUFjO0FBQUE7QUFBQTtBQUFBO0FBQ1YsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLGNBQWpCO0FBQ0g7Ozs7O21IQUVZQyxhOzs7Ozs7O0FBRVRBLGdCQUFBQSxhQUFhLENBQUNDLEVBQWQsR0FBbUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsSUFBM0IsQ0FBbkIsQyxDQUVBOztpREFDTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFTO0FBQ3hCQyxrQkFBQUEsVUFBVSxDQUFDLFlBQUs7QUFDWixvQkFBQSxLQUFJLENBQUNULFFBQUwsQ0FBYyxLQUFJLENBQUNDLFNBQW5CLEVBQThCUyxJQUE5QixDQUFtQ1IsYUFBbkM7O0FBQ0FNLG9CQUFBQSxHQUFHLENBQUNOLGFBQUQsQ0FBSDtBQUNILG1CQUhTLEVBR1AsSUFITyxDQUFWO0FBSUgsaUJBTE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVFGLENBRVI7Ozs4QkFFUSxDQUVSOzs7NkJBRVE7QUFDTCxhQUFPLEtBQUtGLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixDQUFQO0FBQ0g7OztxQ0FFZ0JVLFMsRUFBbUI7QUFDaEMsYUFBTyxLQUFLWCxRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJXLE1BQTlCLENBQXFDLFVBQUNDLFVBQUQ7QUFBQSxlQUFxQkEsVUFBVSxDQUFDRixTQUFYLElBQXdCQSxTQUE3QztBQUFBLE9BQXJDLEVBQTZGRyxNQUFwRztBQUNIOzs7NEJBRU9YLEUsRUFBWTtBQUNoQixhQUFPLEtBQUtILFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixFQUE4QmMsSUFBOUIsQ0FBbUMsVUFBQ0YsVUFBRDtBQUFBLGVBQXFCQSxVQUFVLENBQUNWLEVBQVgsSUFBaUJBLEVBQXRDO0FBQUEsT0FBbkMsQ0FBUDtBQUNIOzs7Z0NBRVdhLE0sRUFBZ0I7QUFDeEIsVUFBTUMsV0FBVyxHQUFHLEtBQUtqQixRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJXLE1BQTlCLENBQXFDLFVBQUNDLFVBQUQ7QUFBQSxlQUFxQkEsVUFBVSxDQUFDRyxNQUFYLElBQXFCQSxNQUExQztBQUFBLE9BQXJDLENBQXBCO0FBQ0FDLE1BQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQVNDLENBQVQsRUFBb0I7QUFDakMsWUFBSUQsQ0FBQyxDQUFDRSxJQUFGLEdBQVNELENBQUMsQ0FBQ0MsSUFBZixFQUFxQjtBQUNqQixpQkFBTyxDQUFDLENBQVI7QUFDSDs7QUFFRCxZQUFJRixDQUFDLENBQUNFLElBQUYsR0FBU0QsQ0FBQyxDQUFDQyxJQUFmLEVBQXFCO0FBQ2pCLGlCQUFPLENBQVA7QUFDSDs7QUFFRCxlQUFPLENBQVA7QUFDSCxPQVZEO0FBWUEsYUFBT0osV0FBUDtBQUNIOzs7bUNBRWNOLFMsRUFBbUI7QUFDOUIsYUFBTyxLQUFLWCxRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJXLE1BQTlCLENBQXFDLFVBQUNDLFVBQUQ7QUFBQSxlQUFxQkEsVUFBVSxDQUFDRixTQUFYLElBQXdCQSxTQUE3QztBQUFBLE9BQXJDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFCYXNlQWNjZXNzSW50ZXJmYWNlIH0gZnJvbSAnYWRhcHRlcnMnO1xuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9kYXRhYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExvZ0VudGl0aWVBZGFwdGVyIGltcGxlbWVudHMgRGF0YUJhc2VBY2Nlc3NJbnRlcmZhY2Uge1xuXG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICAgIHByaXZhdGUgdGFibGVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuICAgICAgICB0aGlzLnRhYmxlTmFtZSA9ICdwcm9kdWN0c19sb2cnO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZShuZXdQcm9kdWN0TG9nOiBhbnkpIHtcblxuICAgICAgICBuZXdQcm9kdWN0TG9nLmlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMClcblxuICAgICAgICAvLyBzaW11bGF0ZSBhc3luYyBkYXRhYmFzZSBhY2Nlc3NcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV0ucHVzaChuZXdQcm9kdWN0TG9nKTtcbiAgICAgICAgICAgICAgICByZXMobmV3UHJvZHVjdExvZylcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV07XG4gICAgfVxuXG4gICAgY291bnRCeVByb2R1Y3RJZChwcm9kdWN0SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV0uZmlsdGVyKChwcm9kdWN0TG9nOiBhbnkpID0+IHByb2R1Y3RMb2cucHJvZHVjdElkID09IHByb2R1Y3RJZCkubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldEJ5SWQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV0uZmluZCgocHJvZHVjdExvZzogYW55KSA9PiBwcm9kdWN0TG9nLmlkID09IGlkKTtcbiAgICB9XG5cbiAgICBnZXRCeVVzZXJJZCh1c2VySWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBwcm9kdWN0TG9ncyA9IHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbHRlcigocHJvZHVjdExvZzogYW55KSA9PiBwcm9kdWN0TG9nLnVzZXJJZCA9PSB1c2VySWQpO1xuICAgICAgICBwcm9kdWN0TG9ncy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGEuZGF0ZSA+IGIuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGEuZGF0ZSA8IGIuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdExvZ3M7XG4gICAgfVxuXG4gICAgZ2V0QnlQcm9kdWN0SWQocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbHRlcigocHJvZHVjdExvZzogYW55KSA9PiBwcm9kdWN0TG9nLnByb2R1Y3RJZCA9PSBwcm9kdWN0SWQpO1xuICAgIH1cbn0iXX0=