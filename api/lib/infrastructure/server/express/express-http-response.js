"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExpressHttpResponseAdapter = /*#__PURE__*/function () {
  function ExpressHttpResponseAdapter(httpResponse) {
    _classCallCheck(this, ExpressHttpResponseAdapter);

    _defineProperty(this, "response", void 0);

    this.response = httpResponse;
  }

  _createClass(ExpressHttpResponseAdapter, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9zZXJ2ZXIvZXhwcmVzcy9leHByZXNzLWh0dHAtcmVzcG9uc2UudHMiXSwibmFtZXMiOlsiRXhwcmVzc0h0dHBSZXNwb25zZUFkYXB0ZXIiLCJodHRwUmVzcG9uc2UiLCJyZXNwb25zZSIsInN0YXR1cyIsIm9ialJlc3BvbnNlIiwic2VuZCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsMEI7QUFHakIsc0NBQVlDLFlBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsUUFBTCxHQUFnQkQsWUFBaEI7QUFDSDs7OzsyQkFFYUUsTyxFQUEwQjtBQUNwQyxhQUFPLEtBQUtELFFBQUwsQ0FBY0MsTUFBZCxDQUFxQkEsT0FBckIsQ0FBUDtBQUNIOzs7eUJBRVdDLFcsRUFBaUM7QUFDekMsYUFBTyxLQUFLRixRQUFMLENBQWNHLElBQWQsQ0FBbUJELFdBQW5CLENBQVA7QUFDSDs7O3lCQUVXQSxXLEVBQWlDO0FBQ3pDLGFBQU8sS0FBS0YsUUFBTCxDQUFjSSxJQUFkLENBQW1CRixXQUFuQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlSW50ZXJmYWNlIH0gZnJvbSAnYWRhcHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzSHR0cFJlc3BvbnNlQWRhcHRlciBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUludGVyZmFjZSB7XG4gICAgcHJpdmF0ZSByZXNwb25zZTogUmVzcG9uc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwUmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBodHRwUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXR1cyhzdGF0dXM6IG51bWJlcik6IFJlc3BvbnNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2Uuc3RhdHVzKHN0YXR1cylcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZChvYmpSZXNwb25zZTogYW55KTogUmVzcG9uc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLnNlbmQob2JqUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgcHVibGljIGpzb24ob2JqUmVzcG9uc2U6IGFueSk6IFJlc3BvbnNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZS5qc29uKG9ialJlc3BvbnNlKVxuICAgIH1cbn0iXX0=