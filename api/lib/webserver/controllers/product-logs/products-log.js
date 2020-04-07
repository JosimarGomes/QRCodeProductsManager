"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductLogController = function ProductLogController(productLogUseCase) {
  var _this = this;

  _classCallCheck(this, ProductLogController);

  _defineProperty(this, "productLogUseCase", void 0);

  _defineProperty(this, "index", function (httpRequest, httpResponse) {
    var _httpRequest$query = httpRequest.query,
        productId = _httpRequest$query.productId,
        userId = _httpRequest$query.userId;
    var productLogs = [];

    if (productId) {
      productLogs = _this.productLogUseCase.getProductLogsbyProduct(productId);
    } else if (userId) {
      productLogs = _this.productLogUseCase.getProductLogsByUser(userId);
    }

    return httpResponse.send(productLogs);
  });

  this.productLogUseCase = productLogUseCase;
};

exports["default"] = ProductLogController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWJzZXJ2ZXIvY29udHJvbGxlcnMvcHJvZHVjdC1sb2dzL3Byb2R1Y3RzLWxvZy50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TG9nQ29udHJvbGxlciIsInByb2R1Y3RMb2dVc2VDYXNlIiwiaHR0cFJlcXVlc3QiLCJodHRwUmVzcG9uc2UiLCJxdWVyeSIsInByb2R1Y3RJZCIsInVzZXJJZCIsInByb2R1Y3RMb2dzIiwiZ2V0UHJvZHVjdExvZ3NieVByb2R1Y3QiLCJnZXRQcm9kdWN0TG9nc0J5VXNlciIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBR3FCQSxvQixHQUlqQiw4QkFBWUMsaUJBQVosRUFBa0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxpQ0FJbkMsVUFBQ0MsV0FBRCxFQUEyQkMsWUFBM0IsRUFDZTtBQUFBLDZCQUVJRCxXQUFXLENBQUNFLEtBRmhCO0FBQUEsUUFFbEJDLFNBRmtCLHNCQUVsQkEsU0FGa0I7QUFBQSxRQUVQQyxNQUZPLHNCQUVQQSxNQUZPO0FBSTFCLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFFQSxRQUFJRixTQUFKLEVBQWU7QUFDWEUsTUFBQUEsV0FBVyxHQUFHLEtBQUksQ0FBQ04saUJBQUwsQ0FBdUJPLHVCQUF2QixDQUErQ0gsU0FBL0MsQ0FBZDtBQUNILEtBRkQsTUFFTyxJQUFHQyxNQUFILEVBQVc7QUFDZEMsTUFBQUEsV0FBVyxHQUFHLEtBQUksQ0FBQ04saUJBQUwsQ0FBdUJRLG9CQUF2QixDQUE0Q0gsTUFBNUMsQ0FBZDtBQUNIOztBQUVELFdBQU9ILFlBQVksQ0FBQ08sSUFBYixDQUFrQkgsV0FBbEIsQ0FBUDtBQUNILEdBbEJpRDs7QUFDOUMsT0FBS04saUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnYWRhcHRlcnMnO1xuaW1wb3J0IFByb2R1Y3RMb2dVc2VDYXNlIGZyb20gJ2RvbWFpbi91c2VDYXNlcy9wcm9kdWN0LWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMb2dDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgcHJvZHVjdExvZ1VzZUNhc2U6IFByb2R1Y3RMb2dVc2VDYXNlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0TG9nVXNlQ2FzZTogUHJvZHVjdExvZ1VzZUNhc2UpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0TG9nVXNlQ2FzZSA9IHByb2R1Y3RMb2dVc2VDYXNlXG4gICAgfVxuXG4gICAgcHVibGljIGluZGV4ID0gKGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdCwgaHR0cFJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpXG4gICAgICAgIDpQcm9taXNlPEh0dHBSZXNwb25zZT4gPT4ge1xuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdElkLCB1c2VySWQgfSA9IGh0dHBSZXF1ZXN0LnF1ZXJ5OyBcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9kdWN0TG9ncyA9IFtdO1xuXG4gICAgICAgIGlmIChwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RMb2dzID0gdGhpcy5wcm9kdWN0TG9nVXNlQ2FzZS5nZXRQcm9kdWN0TG9nc2J5UHJvZHVjdChwcm9kdWN0SWQpO1xuICAgICAgICB9IGVsc2UgaWYodXNlcklkKSB7XG4gICAgICAgICAgICBwcm9kdWN0TG9ncyA9IHRoaXMucHJvZHVjdExvZ1VzZUNhc2UuZ2V0UHJvZHVjdExvZ3NCeVVzZXIodXNlcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodHRwUmVzcG9uc2Uuc2VuZChwcm9kdWN0TG9ncyk7XG4gICAgfVxufSJdfQ==