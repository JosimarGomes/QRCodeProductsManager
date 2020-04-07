"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var database = _interopRequireWildcard(require("./database"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductEntitieAdapter = /*#__PURE__*/function () {
  function ProductEntitieAdapter() {
    _classCallCheck(this, ProductEntitieAdapter);

    _defineProperty(this, "database", void 0);

    _defineProperty(this, "tableName", void 0);

    this.database = database;
    this.tableName = 'products';
  }

  _createClass(ProductEntitieAdapter, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newProduct) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tZW1vcnkvcHJvZHVjdC1lbnRpdGllLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RFbnRpdGllQWRhcHRlciIsImRhdGFiYXNlIiwidGFibGVOYW1lIiwibmV3UHJvZHVjdCIsImlkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJwdXNoIiwicHJvZHVjdFRvVXBkYXRlIiwicHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicHJvZHVjdCIsIkVycm9yIiwib2xkUHJvZHVjdCIsInVwZGF0ZWRQcm9kdWN0Iiwib3B0aW9ucyIsImJ5U2VyaWFsQ29kZSIsImZpbmQiLCJzZXJpYWxDb2RlcyIsInNlcmlhbCIsIml0ZW0iLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEscUI7QUFLakIsbUNBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsVUFBakI7QUFDSDs7Ozs7NkZBRVlDLFU7Ozs7Ozs7QUFFVEEsZ0JBQUFBLFVBQVUsQ0FBQ0MsRUFBWCxHQUFnQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUEzQixDQUFoQixDLENBRUE7O2lEQUNPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQVM7QUFDeEJDLGtCQUFBQSxVQUFVLENBQUMsWUFBSztBQUNaLG9CQUFBLEtBQUksQ0FBQ1QsUUFBTCxDQUFjLEtBQUksQ0FBQ0MsU0FBbkIsRUFBOEJTLElBQTlCLENBQW1DUixVQUFuQzs7QUFDQU0sb0JBQUFBLEdBQUcsQ0FBQ04sVUFBRCxDQUFIO0FBQ0gsbUJBSFMsRUFHUCxJQUhPLENBQVY7QUFJSCxpQkFMTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBUUpTLGUsRUFBc0I7QUFDekIsVUFBTUMsWUFBWSxHQUFHLEtBQUtaLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixFQUE4QlksU0FBOUIsQ0FBd0MsVUFDekRDLE9BRHlEO0FBQUEsZUFDeENBLE9BQU8sQ0FBQ1gsRUFBUixLQUFlUSxlQUFlLENBQUNSLEVBRFM7QUFBQSxPQUF4QyxDQUFyQjs7QUFHQSxVQUFHUyxZQUFZLEtBQUssQ0FBQyxDQUFyQixFQUF3QjtBQUNwQixjQUFNRyxLQUFLLENBQUMsbUJBQUQsQ0FBWDtBQUNIOztBQUVELFVBQU1DLFVBQVUsR0FBRyxLQUFLaEIsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCVyxZQUE5QixDQUFuQjtBQUVBLFdBQUtaLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixFQUE4QlcsWUFBOUIsc0JBQWtESSxVQUFsRCxNQUFpRUwsZUFBakU7QUFFQSxVQUFNTSxjQUFjLEdBQUcsS0FBS2pCLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixFQUE4QlcsWUFBOUIsQ0FBdkI7QUFDQSxhQUFPSyxjQUFQO0FBQ0g7Ozs2QkFFb0I7QUFBQSxVQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFBQSxpQkFFUUEsT0FGUjtBQUFBLFVBRVRDLFlBRlMsUUFFVEEsWUFGUzs7QUFJakIsVUFBSUEsWUFBSixFQUFrQjtBQUNkLFlBQU1MLE9BQU8sR0FBRyxLQUFLZCxRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJtQixJQUE5QixDQUFtQyxVQUFDTixPQUFELEVBQWtCO0FBQ2pFLGlCQUFPQSxPQUFPLENBQUNPLFdBQVIsQ0FBb0JELElBQXBCLENBQXlCLFVBQUNFLE1BQUQ7QUFBQSxtQkFBaUJBLE1BQU0sSUFBSUgsWUFBM0I7QUFBQSxXQUF6QixDQUFQO0FBQ0gsU0FGZSxDQUFoQjtBQUlBLGVBQU9MLE9BQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUtkLFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixDQUFQO0FBQ0g7Ozs0QkFFT0UsRSxFQUFZO0FBQ2hCLGFBQU8sS0FBS0gsUUFBTCxDQUFjLEtBQUtDLFNBQW5CLEVBQThCbUIsSUFBOUIsQ0FBbUMsVUFBQ0csSUFBRDtBQUFBLGVBQWVBLElBQUksQ0FBQ3BCLEVBQUwsSUFBV0EsRUFBMUI7QUFBQSxPQUFuQyxDQUFQO0FBQ0g7Ozs0QkFFTUEsRSxFQUFZO0FBQ2YsVUFBTXFCLGdCQUFnQixHQUFHLEtBQUt4QixRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFDcEJ3QixNQURvQixDQUNiLFVBQUNYLE9BQUQ7QUFBQSxlQUFrQkEsT0FBTyxDQUFDWCxFQUFSLElBQWNBLEVBQWhDO0FBQUEsT0FEYSxDQUF6QjtBQUdBLFdBQUtILFFBQUwsQ0FBYyxLQUFLQyxTQUFuQixJQUFnQ3VCLGdCQUFoQztBQUVBLGFBQU8sSUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUJhc2VBY2Nlc3NJbnRlcmZhY2UgfSBmcm9tICdhZGFwdGVycyc7XG5pbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tICcuL2RhdGFiYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RW50aXRpZUFkYXB0ZXIgaW1wbGVtZW50cyBEYXRhQmFzZUFjY2Vzc0ludGVyZmFjZSB7XG5cbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG4gICAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gICAgICAgIHRoaXMudGFibGVOYW1lID0gJ3Byb2R1Y3RzJztcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUobmV3UHJvZHVjdDogYW55KSB7XG5cbiAgICAgICAgbmV3UHJvZHVjdC5pZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gICAgICAgIC8vIHNpbXVsYXRlIGFzeW5jIGRhdGFiYXNlIGFjY2Vzc1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXS5wdXNoKG5ld1Byb2R1Y3QpO1xuICAgICAgICAgICAgICAgIHJlcyhuZXdQcm9kdWN0KVxuICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHByb2R1Y3RUb1VwZGF0ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdLmZpbmRJbmRleCgoXG4gICAgICAgICAgICBwcm9kdWN0OiBhbnkpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RUb1VwZGF0ZS5pZCk7XG4gICAgICAgXG4gICAgICAgIGlmKHByb2R1Y3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IHByb2R1Y3QgdmFsaWRcIilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2xkUHJvZHVjdCA9IHRoaXMuZGF0YWJhc2VbdGhpcy50YWJsZU5hbWVdW3Byb2R1Y3RJbmRleF07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXVtwcm9kdWN0SW5kZXhdID0gey4uLm9sZFByb2R1Y3QsIC4uLnByb2R1Y3RUb1VwZGF0ZX07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXVtwcm9kdWN0SW5kZXhdO1xuICAgICAgICByZXR1cm4gdXBkYXRlZFByb2R1Y3Q7XG4gICAgfVxuXG4gICAgZ2V0QWxsKG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAgIGNvbnN0IHsgYnlTZXJpYWxDb2RlIH0gPSBvcHRpb25zIGFzIGFueTtcbiAgICAgICAgXG4gICAgICAgIGlmIChieVNlcmlhbENvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXS5maW5kKChwcm9kdWN0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5zZXJpYWxDb2Rlcy5maW5kKChzZXJpYWw6IGFueSkgPT4gc2VyaWFsID09IGJ5U2VyaWFsQ29kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV07XG4gICAgfVxuXG4gICAgZ2V0QnlJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT0gaWQpO1xuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSB0aGlzLmRhdGFiYXNlW3RoaXMudGFibGVOYW1lXVxuICAgICAgICAgICAgLmZpbHRlcigocHJvZHVjdDogYW55KSA9PiBwcm9kdWN0LmlkICE9IGlkICk7XG5cbiAgICAgICAgdGhpcy5kYXRhYmFzZVt0aGlzLnRhYmxlTmFtZV0gPSBmaWx0ZXJlZFByb2R1Y3RzO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iXX0=