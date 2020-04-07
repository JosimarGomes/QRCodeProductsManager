"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductLog = function ProductLog(_ref) {
  var productId = _ref.productId,
      date = _ref.date,
      userId = _ref.userId,
      productName = _ref.productName,
      serialCode = _ref.serialCode,
      productDescription = _ref.productDescription,
      productValue = _ref.productValue,
      id = _ref.id;

  _classCallCheck(this, ProductLog);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "productId", void 0);

  _defineProperty(this, "date", void 0);

  _defineProperty(this, "userId", void 0);

  _defineProperty(this, "productName", void 0);

  _defineProperty(this, "serialCode", void 0);

  _defineProperty(this, "productDescription", void 0);

  _defineProperty(this, "productValue", void 0);

  this.productId = productId;
  this.date = date;
  this.userId = userId;
  this.productName = productName;
  this.serialCode = serialCode;
  this.productDescription = productDescription;
  this.productValue = productValue;
  this.id = id;
};

exports["default"] = ProductLog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vZW50aXRpZXMvcHJvZHVjdC1sb2cudHMiXSwibmFtZXMiOlsiUHJvZHVjdExvZyIsInByb2R1Y3RJZCIsImRhdGUiLCJ1c2VySWQiLCJwcm9kdWN0TmFtZSIsInNlcmlhbENvZGUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwcm9kdWN0VmFsdWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBcUJBLFUsR0FVakIsMEJBQzhEO0FBQUEsTUFEaERDLFNBQ2dELFFBRGhEQSxTQUNnRDtBQUFBLE1BRHJDQyxJQUNxQyxRQURyQ0EsSUFDcUM7QUFBQSxNQUQvQkMsTUFDK0IsUUFEL0JBLE1BQytCO0FBQUEsTUFEdkJDLFdBQ3VCLFFBRHZCQSxXQUN1QjtBQUFBLE1BRFZDLFVBQ1UsUUFEVkEsVUFDVTtBQUFBLE1BQTlEQyxrQkFBOEQsUUFBOURBLGtCQUE4RDtBQUFBLE1BQTFDQyxZQUEwQyxRQUExQ0EsWUFBMEM7QUFBQSxNQUE1QkMsRUFBNEIsUUFBNUJBLEVBQTRCOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUMxRCxPQUFLUCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxPQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExvZyB7XG4gICAgcHVibGljIGlkPzogbnVtYmVyO1xuICAgIHB1YmxpYyBwcm9kdWN0SWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgZGF0ZTogRGF0ZTtcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gICAgcHVibGljIHByb2R1Y3ROYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHNlcmlhbENvZGU6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvZHVjdERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIHByb2R1Y3RWYWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeyBwcm9kdWN0SWQsIGRhdGUsIHVzZXJJZCwgcHJvZHVjdE5hbWUsIHNlcmlhbENvZGUsXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0VmFsdWUsIGlkIH06IFByb2R1Y3RMb2dBdHRyaWJ1dGVzKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9IHByb2R1Y3ROYW1lO1xuICAgICAgICB0aGlzLnNlcmlhbENvZGUgPSBzZXJpYWxDb2RlO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXNjcmlwdGlvbiA9IHByb2R1Y3REZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9kdWN0VmFsdWUgPSBwcm9kdWN0VmFsdWU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59XG5cbnR5cGUgUHJvZHVjdExvZ0F0dHJpYnV0ZXMgPSB7XG4gICAgaWQ/OiBudW1iZXIsXG4gICAgcHJvZHVjdElkOiBudW1iZXIsXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgZGF0ZTogRGF0ZSxcbiAgICBwcm9kdWN0TmFtZTogc3RyaW5nO1xuICAgIHNlcmlhbENvZGU6IG51bWJlcjtcbiAgICBwcm9kdWN0RGVzY3JpcHRpb246IHN0cmluZztcbiAgICBwcm9kdWN0VmFsdWU6IG51bWJlcjtcbn1cblxuIl19