"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var database = _interopRequireWildcard(require("./database"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductLogEntitieAdapter = /*#__PURE__*/function () {
  function ProductLogEntitieAdapter() {
    _classCallCheck(this, ProductLogEntitieAdapter);

    _defineProperty(this, "database", void 0);

    _defineProperty(this, "tableName", void 0);

    this.database = database;
    this.tableName = 'products_log';
  }

  _createClass(ProductLogEntitieAdapter, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newProductLog) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tZW1vcnkvcHJvZHVjdC1sb2ctZW50aXRpZS50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TG9nRW50aXRpZUFkYXB0ZXIiLCJkYXRhYmFzZSIsInRhYmxlTmFtZSIsIm5ld1Byb2R1Y3RMb2ciLCJpZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIlByb21pc2UiLCJyZXMiLCJzZXRUaW1lb3V0IiwicHVzaCIsInByb2R1Y3RJZCIsImZpbHRlciIsInByb2R1Y3RMb2ciLCJsZW5ndGgiLCJmaW5kIiwidXNlcklkIiwicHJvZHVjdExvZ3MiLCJzb3J0IiwiYSIsImIiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3QjtBQUtqQixzQ0FBYztBQUFBOztBQUFBOztBQUFBOztBQUNWLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixjQUFqQjtBQUNIOzs7Ozs2RkFFWUMsYTs7Ozs7OztBQUVUQSxnQkFBQUEsYUFBYSxDQUFDQyxFQUFkLEdBQW1CQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLElBQTNCLENBQW5CLEMsQ0FFQTs7aURBQ08sSUFBSUMsT0FBSixDQUFZLFVBQUNDLEdBQUQsRUFBUztBQUN4QkMsa0JBQUFBLFVBQVUsQ0FBQyxZQUFLO0FBQ1osb0JBQUEsS0FBSSxDQUFDVCxRQUFMLENBQWMsS0FBSSxDQUFDQyxTQUFuQixFQUE4QlMsSUFBOUIsQ0FBbUNSLGFBQW5DOztBQUNBTSxvQkFBQUEsR0FBRyxDQUFDTixhQUFELENBQUg7QUFDSCxtQkFIUyxFQUdQLElBSE8sQ0FBVjtBQUlILGlCQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRRixDQUVSOzs7OEJBRVEsQ0FFUjs7OzZCQUVRO0FBQ0wsYUFBTyxLQUFLRixRQUFMLENBQWMsS0FBS0MsU0FBbkIsQ0FBUDtBQUNIOzs7cUNBRWdCVSxTLEVBQW1CO0FBQ2hDLGFBQU8sS0FBS1gsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCVyxNQUE5QixDQUFxQyxVQUFDQyxVQUFEO0FBQUEsZUFBcUJBLFVBQVUsQ0FBQ0YsU0FBWCxJQUF3QkEsU0FBN0M7QUFBQSxPQUFyQyxFQUE2RkcsTUFBcEc7QUFDSDs7OzRCQUVPWCxFLEVBQVk7QUFDaEIsYUFBTyxLQUFLSCxRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJjLElBQTlCLENBQW1DLFVBQUNGLFVBQUQ7QUFBQSxlQUFxQkEsVUFBVSxDQUFDVixFQUFYLElBQWlCQSxFQUF0QztBQUFBLE9BQW5DLENBQVA7QUFDSDs7O2dDQUVXYSxNLEVBQWdCO0FBQ3hCLFVBQU1DLFdBQVcsR0FBRyxLQUFLakIsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCVyxNQUE5QixDQUFxQyxVQUFDQyxVQUFEO0FBQUEsZUFBcUJBLFVBQVUsQ0FBQ0csTUFBWCxJQUFxQkEsTUFBMUM7QUFBQSxPQUFyQyxDQUFwQjtBQUNBQyxNQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFTQyxDQUFULEVBQW9CO0FBQ2pDLFlBQUlELENBQUMsQ0FBQ0UsSUFBRixHQUFTRCxDQUFDLENBQUNDLElBQWYsRUFBcUI7QUFDakIsaUJBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBRUQsWUFBSUYsQ0FBQyxDQUFDRSxJQUFGLEdBQVNELENBQUMsQ0FBQ0MsSUFBZixFQUFxQjtBQUNqQixpQkFBTyxDQUFQO0FBQ0g7O0FBRUQsZUFBTyxDQUFQO0FBQ0gsT0FWRDtBQVlBLGFBQU9KLFdBQVA7QUFDSDs7O21DQUVjTixTLEVBQW1CO0FBQzlCLGFBQU8sS0FBS1gsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCVyxNQUE5QixDQUFxQyxVQUFDQyxVQUFEO0FBQUEsZUFBcUJBLFVBQVUsQ0FBQ0YsU0FBWCxJQUF3QkEsU0FBN0M7QUFBQSxPQUFyQyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhQmFzZUFjY2Vzc0ludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMb2dFbnRpdGllQWRhcHRlciBpbXBsZW1lbnRzIERhdGFCYXNlQWNjZXNzSW50ZXJmYWNlIHtcblxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcbiAgICBwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy50YWJsZU5hbWUgPSAncHJvZHVjdHNfbG9nJztcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUobmV3UHJvZHVjdExvZzogYW55KSB7XG5cbiAgICAgICAgbmV3UHJvZHVjdExvZy5pZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApXG5cbiAgICAgICAgLy8gc2ltdWxhdGUgYXN5bmMgZGF0YWJhc2UgYWNjZXNzXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLnB1c2gobmV3UHJvZHVjdExvZyk7XG4gICAgICAgICAgICAgICAgcmVzKG5ld1Byb2R1Y3RMb2cpXG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdO1xuICAgIH1cblxuICAgIGNvdW50QnlQcm9kdWN0SWQocHJvZHVjdElkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbHRlcigocHJvZHVjdExvZzogYW55KSA9PiBwcm9kdWN0TG9nLnByb2R1Y3RJZCA9PSBwcm9kdWN0SWQpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXRCeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbmQoKHByb2R1Y3RMb2c6IGFueSkgPT4gcHJvZHVjdExvZy5pZCA9PSBpZCk7XG4gICAgfVxuXG4gICAgZ2V0QnlVc2VySWQodXNlcklkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdExvZ3MgPSB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXS5maWx0ZXIoKHByb2R1Y3RMb2c6IGFueSkgPT4gcHJvZHVjdExvZy51c2VySWQgPT0gdXNlcklkKTtcbiAgICAgICAgcHJvZHVjdExvZ3Muc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmRhdGUgPiBiLmRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhLmRhdGUgPCBiLmRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RMb2dzO1xuICAgIH1cblxuICAgIGdldEJ5UHJvZHVjdElkKHByb2R1Y3RJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXS5maWx0ZXIoKHByb2R1Y3RMb2c6IGFueSkgPT4gcHJvZHVjdExvZy5wcm9kdWN0SWQgPT0gcHJvZHVjdElkKTtcbiAgICB9XG59Il19