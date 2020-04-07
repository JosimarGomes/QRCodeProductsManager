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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ProductEntitieAdapter = /*#__PURE__*/function () {
  function ProductEntitieAdapter() {
    (0, _classCallCheck2["default"])(this, ProductEntitieAdapter);
    (0, _defineProperty2["default"])(this, "database", void 0);
    (0, _defineProperty2["default"])(this, "tableName", void 0);
    this.database = database;
    this.tableName = 'products';
  }

  (0, _createClass2["default"])(ProductEntitieAdapter, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(newProduct) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newProduct.id = Math.round(Math.random() * 1000); // simulate async database access

                return _context.abrupt("return", new Promise(function (res) {
                  setTimeout(function () {
                    _this.database[_this.tableName].push(newProduct);

                    res(newProduct);
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
    value: function update(productToUpdate) {
      var productIndex = this.database[this.tableName].findIndex(function (product) {
        return product.id === productToUpdate.id;
      });

      if (productIndex === -1) {
        throw Error("Not product valid");
      }

      var oldProduct = this.database[this.tableName][productIndex];
      this.database[this.tableName][productIndex] = _objectSpread({}, oldProduct, {}, productToUpdate);
      var updatedProduct = this.database[this.tableName][productIndex];
      return updatedProduct;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = options,
          bySerialCode = _ref.bySerialCode;

      if (bySerialCode) {
        var product = this.database[this.tableName].find(function (product) {
          return product.serialCodes.find(function (serial) {
            return serial == bySerialCode;
          });
        });
        return product;
      }

      return this.database[this.tableName];
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return this.database[this.tableName].find(function (item) {
        return item.id == id;
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var filteredProducts = this.database[this.tableName].filter(function (product) {
        return product.id != id;
      });
      this.database[this.tableName] = filteredProducts;
      return true;
    }
  }]);
  return ProductEntitieAdapter;
}();

exports["default"] = ProductEntitieAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tZW1vcnkvcHJvZHVjdC1lbnRpdGllLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RFbnRpdGllQWRhcHRlciIsImRhdGFiYXNlIiwidGFibGVOYW1lIiwibmV3UHJvZHVjdCIsImlkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJwdXNoIiwicHJvZHVjdFRvVXBkYXRlIiwicHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicHJvZHVjdCIsIkVycm9yIiwib2xkUHJvZHVjdCIsInVwZGF0ZWRQcm9kdWN0Iiwib3B0aW9ucyIsImJ5U2VyaWFsQ29kZSIsImZpbmQiLCJzZXJpYWxDb2RlcyIsInNlcmlhbCIsIml0ZW0iLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxxQjtBQUtqQixtQ0FBYztBQUFBO0FBQUE7QUFBQTtBQUNWLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixVQUFqQjtBQUNIOzs7OzttSEFFWUMsVTs7Ozs7OztBQUVUQSxnQkFBQUEsVUFBVSxDQUFDQyxFQUFYLEdBQWdCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLElBQTNCLENBQWhCLEMsQ0FFQTs7aURBQ08sSUFBSUMsT0FBSixDQUFZLFVBQUNDLEdBQUQsRUFBUztBQUN4QkMsa0JBQUFBLFVBQVUsQ0FBQyxZQUFLO0FBQ1osb0JBQUEsS0FBSSxDQUFDVCxRQUFMLENBQWMsS0FBSSxDQUFDQyxTQUFuQixFQUE4QlMsSUFBOUIsQ0FBbUNSLFVBQW5DOztBQUNBTSxvQkFBQUEsR0FBRyxDQUFDTixVQUFELENBQUg7QUFDSCxtQkFIUyxFQUdQLElBSE8sQ0FBVjtBQUlILGlCQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFRSlMsZSxFQUFzQjtBQUN6QixVQUFNQyxZQUFZLEdBQUcsS0FBS1osUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCWSxTQUE5QixDQUF3QyxVQUN6REMsT0FEeUQ7QUFBQSxlQUN4Q0EsT0FBTyxDQUFDWCxFQUFSLEtBQWVRLGVBQWUsQ0FBQ1IsRUFEUztBQUFBLE9BQXhDLENBQXJCOztBQUdBLFVBQUdTLFlBQVksS0FBSyxDQUFDLENBQXJCLEVBQXdCO0FBQ3BCLGNBQU1HLEtBQUssQ0FBQyxtQkFBRCxDQUFYO0FBQ0g7O0FBRUQsVUFBTUMsVUFBVSxHQUFHLEtBQUtoQixRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJXLFlBQTlCLENBQW5CO0FBRUEsV0FBS1osUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCVyxZQUE5QixzQkFBa0RJLFVBQWxELE1BQWlFTCxlQUFqRTtBQUVBLFVBQU1NLGNBQWMsR0FBRyxLQUFLakIsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCVyxZQUE5QixDQUF2QjtBQUNBLGFBQU9LLGNBQVA7QUFDSDs7OzZCQUVvQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGlCQUVRQSxPQUZSO0FBQUEsVUFFVEMsWUFGUyxRQUVUQSxZQUZTOztBQUlqQixVQUFJQSxZQUFKLEVBQWtCO0FBQ2QsWUFBTUwsT0FBTyxHQUFHLEtBQUtkLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixFQUE4Qm1CLElBQTlCLENBQW1DLFVBQUNOLE9BQUQsRUFBa0I7QUFDakUsaUJBQU9BLE9BQU8sQ0FBQ08sV0FBUixDQUFvQkQsSUFBcEIsQ0FBeUIsVUFBQ0UsTUFBRDtBQUFBLG1CQUFpQkEsTUFBTSxJQUFJSCxZQUEzQjtBQUFBLFdBQXpCLENBQVA7QUFDSCxTQUZlLENBQWhCO0FBSUEsZUFBT0wsT0FBUDtBQUNIOztBQUVELGFBQU8sS0FBS2QsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLENBQVA7QUFDSDs7OzRCQUVPRSxFLEVBQVk7QUFDaEIsYUFBTyxLQUFLSCxRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJtQixJQUE5QixDQUFtQyxVQUFDRyxJQUFEO0FBQUEsZUFBZUEsSUFBSSxDQUFDcEIsRUFBTCxJQUFXQSxFQUExQjtBQUFBLE9BQW5DLENBQVA7QUFDSDs7OzRCQUVNQSxFLEVBQVk7QUFDZixVQUFNcUIsZ0JBQWdCLEdBQUcsS0FBS3hCLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixFQUNwQndCLE1BRG9CLENBQ2IsVUFBQ1gsT0FBRDtBQUFBLGVBQWtCQSxPQUFPLENBQUNYLEVBQVIsSUFBY0EsRUFBaEM7QUFBQSxPQURhLENBQXpCO0FBR0EsV0FBS0gsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLElBQWdDdUIsZ0JBQWhDO0FBRUEsYUFBTyxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhQmFzZUFjY2Vzc0ludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RFbnRpdGllQWRhcHRlciBpbXBsZW1lbnRzIERhdGFCYXNlQWNjZXNzSW50ZXJmYWNlIHtcblxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcbiAgICBwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy50YWJsZU5hbWUgPSAncHJvZHVjdHMnO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZShuZXdQcm9kdWN0OiBhbnkpIHtcblxuICAgICAgICBuZXdQcm9kdWN0LmlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgICAgICAgLy8gc2ltdWxhdGUgYXN5bmMgZGF0YWJhc2UgYWNjZXNzXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLnB1c2gobmV3UHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgcmVzKG5ld1Byb2R1Y3QpXG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUocHJvZHVjdFRvVXBkYXRlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdEluZGV4ID0gdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV0uZmluZEluZGV4KChcbiAgICAgICAgICAgIHByb2R1Y3Q6IGFueSkgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZHVjdFRvVXBkYXRlLmlkKTtcbiAgICAgICBcbiAgICAgICAgaWYocHJvZHVjdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOb3QgcHJvZHVjdCB2YWxpZFwiKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBvbGRQcm9kdWN0ID0gdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV1bcHJvZHVjdEluZGV4XTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdW3Byb2R1Y3RJbmRleF0gPSB7Li4ub2xkUHJvZHVjdCwgLi4ucHJvZHVjdFRvVXBkYXRlfTtcblxuICAgICAgICBjb25zdCB1cGRhdGVkUHJvZHVjdCA9IHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdW3Byb2R1Y3RJbmRleF07XG4gICAgICAgIHJldHVybiB1cGRhdGVkUHJvZHVjdDtcbiAgICB9XG5cbiAgICBnZXRBbGwob3B0aW9ucyA9IHt9KSB7XG5cbiAgICAgICAgY29uc3QgeyBieVNlcmlhbENvZGUgfSA9IG9wdGlvbnMgYXMgYW55O1xuICAgICAgICBcbiAgICAgICAgaWYgKGJ5U2VyaWFsQ29kZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbmQoKHByb2R1Y3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnNlcmlhbENvZGVzLmZpbmQoKHNlcmlhbDogYW55KSA9PiBzZXJpYWwgPT0gYnlTZXJpYWxDb2RlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXTtcbiAgICB9XG5cbiAgICBnZXRCeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbmQoKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PSBpZCk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdXG4gICAgICAgICAgICAuZmlsdGVyKChwcm9kdWN0OiBhbnkpID0+IHByb2R1Y3QuaWQgIT0gaWQgKTtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXSA9IGZpbHRlcmVkUHJvZHVjdHM7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdfQ==