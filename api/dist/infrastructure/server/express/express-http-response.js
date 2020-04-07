"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ExpressHttpResponseAdapter = /*#__PURE__*/function () {
  function ExpressHttpResponseAdapter(httpResponse) {
    (0, _classCallCheck2["default"])(this, ExpressHttpResponseAdapter);
    (0, _defineProperty2["default"])(this, "response", void 0);
    this.response = httpResponse;
  }

  (0, _createClass2["default"])(ExpressHttpResponseAdapter, [{
    key: "status",
    value: function status(_status) {
      return this.response.status(_status);
    }
  }, {
    key: "send",
    value: function send(objResponse) {
      return this.response.send(objResponse);
    }
  }, {
    key: "json",
    value: function json(objResponse) {
      return this.response.json(objResponse);
    }
  }]);
  return ExpressHttpResponseAdapter;
}();

exports["default"] = ExpressHttpResponseAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9zZXJ2ZXIvZXhwcmVzcy9leHByZXNzLWh0dHAtcmVzcG9uc2UudHMiXSwibmFtZXMiOlsiRXhwcmVzc0h0dHBSZXNwb25zZUFkYXB0ZXIiLCJodHRwUmVzcG9uc2UiLCJyZXNwb25zZSIsInN0YXR1cyIsIm9ialJlc3BvbnNlIiwic2VuZCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsMEI7QUFHakIsc0NBQVlDLFlBQVosRUFBb0M7QUFBQTtBQUFBO0FBQ2hDLFNBQUtDLFFBQUwsR0FBZ0JELFlBQWhCO0FBQ0g7Ozs7MkJBRWFFLE8sRUFBMEI7QUFDcEMsYUFBTyxLQUFLRCxRQUFMLENBQWNDLE1BQWQsQ0FBcUJBLE9BQXJCLENBQVA7QUFDSDs7O3lCQUVXQyxXLEVBQWlDO0FBQ3pDLGFBQU8sS0FBS0YsUUFBTCxDQUFjRyxJQUFkLENBQW1CRCxXQUFuQixDQUFQO0FBQ0g7Ozt5QkFFV0EsVyxFQUFpQztBQUN6QyxhQUFPLEtBQUtGLFFBQUwsQ0FBY0ksSUFBZCxDQUFtQkYsV0FBbkIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZUludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc0h0dHBSZXNwb25zZUFkYXB0ZXIgaW1wbGVtZW50cyBIdHRwUmVzcG9uc2VJbnRlcmZhY2Uge1xuICAgIHByaXZhdGUgcmVzcG9uc2U6IFJlc3BvbnNlO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cFJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gaHR0cFJlc3BvbnNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0dXMoc3RhdHVzOiBudW1iZXIpOiBSZXNwb25zZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLnN0YXR1cyhzdGF0dXMpXG4gICAgfVxuXG4gICAgcHVibGljIHNlbmQob2JqUmVzcG9uc2U6IGFueSk6IFJlc3BvbnNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZS5zZW5kKG9ialJlc3BvbnNlKVxuICAgIH1cblxuICAgIHB1YmxpYyBqc29uKG9ialJlc3BvbnNlOiBhbnkpOiBSZXNwb25zZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2UuanNvbihvYmpSZXNwb25zZSlcbiAgICB9XG59Il19