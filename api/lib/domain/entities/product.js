"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Product = function Product(_ref) {
  var name = _ref.name,
      value = _ref.value,
      description = _ref.description,
      id = _ref.id,
      _ref$serialCodes = _ref.serialCodes,
      serialCodes = _ref$serialCodes === void 0 ? [] : _ref$serialCodes;

  _classCallCheck(this, Product);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "value", void 0);

  _defineProperty(this, "description", void 0);

  _defineProperty(this, "serialCodes", void 0);

  this.id = id;
  this.name = name;
  this.value = value;
  this.description = description;
  this.serialCodes = serialCodes;
};

exports["default"] = Product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vZW50aXRpZXMvcHJvZHVjdC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwibmFtZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJpZCIsInNlcmlhbENvZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFxQkEsTyxHQU9qQix1QkFBbUY7QUFBQSxNQUFyRUMsSUFBcUUsUUFBckVBLElBQXFFO0FBQUEsTUFBL0RDLEtBQStELFFBQS9EQSxLQUErRDtBQUFBLE1BQXhEQyxXQUF3RCxRQUF4REEsV0FBd0Q7QUFBQSxNQUEzQ0MsRUFBMkMsUUFBM0NBLEVBQTJDO0FBQUEsOEJBQXZDQyxXQUF1QztBQUFBLE1BQXZDQSxXQUF1QyxpQ0FBekIsRUFBeUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQy9FLE9BQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLE9BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBS0UsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCB7XG4gICAgcHVibGljIGlkPzogbnVtYmVyO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIHNlcmlhbENvZGVzPzogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIHZhbHVlLCBkZXNjcmlwdGlvbiwgaWQsIHNlcmlhbENvZGVzID0gW10gfTogUHJvZHVjdEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZXJpYWxDb2RlcyA9IHNlcmlhbENvZGVzO1xuICAgIH1cbn1cblxudHlwZSBQcm9kdWN0QXR0cmlidXRlcyA9IHtcbiAgICBpZD86IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdmFsdWU6IG51bWJlcixcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHNlcmlhbENvZGVzPzogbnVtYmVyW11cbn1cblxuIl19