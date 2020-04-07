"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Server = /*#__PURE__*/function () {
  function Server(serverAdapter) {
    _classCallCheck(this, Server);

    _defineProperty(this, "serverAdapter", void 0);

    this.serverAdapter = serverAdapter;
  }

  _createClass(Server, [{
    key: "listen",
    value: function listen() {
      this.serverAdapter.serverUp();
      ;
    }
  }]);

  return Server;
}();

exports["default"] = Server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJzZXJ2ZXIvc2VydmVyLnRzIl0sIm5hbWVzIjpbIlNlcnZlciIsInNlcnZlckFkYXB0ZXIiLCJzZXJ2ZXJVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxNO0FBR2pCLGtCQUFZQyxhQUFaLEVBQTRDO0FBQUE7O0FBQUE7O0FBQ3hDLFNBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7Ozs7NkJBRWU7QUFDWixXQUFLQSxhQUFMLENBQW1CQyxRQUFuQjtBQUE4QjtBQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlckludGVyZmFjZSB9IGZyb20gJ2FkYXB0ZXJzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXIge1xuXG4gICAgcHJpdmF0ZSBzZXJ2ZXJBZGFwdGVyOiBTZXJ2ZXJJbnRlcmZhY2U7XG4gICAgY29uc3RydWN0b3Ioc2VydmVyQWRhcHRlcjogU2VydmVySW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmVyQWRhcHRlciA9IHNlcnZlckFkYXB0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJBZGFwdGVyLnNlcnZlclVwKCk7O1xuICAgIH1cbiAgICBcbn0iXX0=