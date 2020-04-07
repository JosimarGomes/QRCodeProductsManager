"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ProductLog = function ProductLog(_ref) {
  var productId = _ref.productId,
      date = _ref.date,
      userId = _ref.userId,
      productName = _ref.productName,
      serialCode = _ref.serialCode,
      productDescription = _ref.productDescription,
      productValue = _ref.productValue,
      id = _ref.id;
  (0, _classCallCheck2["default"])(this, ProductLog);
  (0, _defineProperty2["default"])(this, "id", void 0);
  (0, _defineProperty2["default"])(this, "productId", void 0);
  (0, _defineProperty2["default"])(this, "date", void 0);
  (0, _defineProperty2["default"])(this, "userId", void 0);
  (0, _defineProperty2["default"])(this, "productName", void 0);
  (0, _defineProperty2["default"])(this, "serialCode", void 0);
  (0, _defineProperty2["default"])(this, "productDescription", void 0);
  (0, _defineProperty2["default"])(this, "productValue", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vZW50aXRpZXMvcHJvZHVjdC1sb2cudHMiXSwibmFtZXMiOlsiUHJvZHVjdExvZyIsInByb2R1Y3RJZCIsImRhdGUiLCJ1c2VySWQiLCJwcm9kdWN0TmFtZSIsInNlcmlhbENvZGUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwcm9kdWN0VmFsdWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFxQkEsVSxHQVVqQiwwQkFDOEQ7QUFBQSxNQURoREMsU0FDZ0QsUUFEaERBLFNBQ2dEO0FBQUEsTUFEckNDLElBQ3FDLFFBRHJDQSxJQUNxQztBQUFBLE1BRC9CQyxNQUMrQixRQUQvQkEsTUFDK0I7QUFBQSxNQUR2QkMsV0FDdUIsUUFEdkJBLFdBQ3VCO0FBQUEsTUFEVkMsVUFDVSxRQURWQSxVQUNVO0FBQUEsTUFBOURDLGtCQUE4RCxRQUE5REEsa0JBQThEO0FBQUEsTUFBMUNDLFlBQTBDLFFBQTFDQSxZQUEwQztBQUFBLE1BQTVCQyxFQUE0QixRQUE1QkEsRUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUQsT0FBS1AsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsT0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsT0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMb2cge1xuICAgIHB1YmxpYyBpZD86IG51bWJlcjtcbiAgICBwdWJsaWMgcHJvZHVjdElkOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGU6IERhdGU7XG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9kdWN0TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzZXJpYWxDb2RlOiBudW1iZXI7XG4gICAgcHVibGljIHByb2R1Y3REZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9kdWN0VmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHsgcHJvZHVjdElkLCBkYXRlLCB1c2VySWQsIHByb2R1Y3ROYW1lLCBzZXJpYWxDb2RlLFxuICAgIHByb2R1Y3REZXNjcmlwdGlvbiwgcHJvZHVjdFZhbHVlLCBpZCB9OiBQcm9kdWN0TG9nQXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSBwcm9kdWN0TmFtZTtcbiAgICAgICAgdGhpcy5zZXJpYWxDb2RlID0gc2VyaWFsQ29kZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGVzY3JpcHRpb24gPSBwcm9kdWN0RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJvZHVjdFZhbHVlID0gcHJvZHVjdFZhbHVlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufVxuXG50eXBlIFByb2R1Y3RMb2dBdHRyaWJ1dGVzID0ge1xuICAgIGlkPzogbnVtYmVyLFxuICAgIHByb2R1Y3RJZDogbnVtYmVyLFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGRhdGU6IERhdGUsXG4gICAgcHJvZHVjdE5hbWU6IHN0cmluZztcbiAgICBzZXJpYWxDb2RlOiBudW1iZXI7XG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJvZHVjdFZhbHVlOiBudW1iZXI7XG59XG5cbiJdfQ==