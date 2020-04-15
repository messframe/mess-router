function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var router = createCommonjsModule(function (module, exports) {
  var Router = /*#__PURE__*/function () {
    function Router(type) {
      _classCallCheck(this, Router);

      this.type = type;
      this.routeArr = [];
      if (type === 'hash') this.routeArr.push(window.location.hash.split('#')[1]);
      this.tempArr = [];
    }

    _createClass(Router, [{
      key: "push",
      value: function push(location) {
        if (this.type === 'hash') {
          if (location === this.routeArr[this.routeArr.length - 1]) return;
          this.routeArr.push(location);
          this.tempArr = [];
          window.location.href = '/#' + location;
        } else if (this.type === 'history') {
          window.history.pushState({}, document.title, location);
        }
      }
    }, {
      key: "back",
      value: function back() {
        if (this.type === 'hash') {
          var tempRoute = this.routeArr.pop();
          var backRoute = this.routeArr[this.routeArr.length - 1];
          if (!backRoute) return;
          window.location.href = '/#' + backRoute;
          this.tempArr.push(tempRoute);
        } else if (this.type === 'history') {
          window.history.back(-1);
        }
      }
    }, {
      key: "forward",
      value: function forward() {
        if (this.type === 'hash') {
          if (this.tempArr.length === 0) return;
          var route = this.tempArr.shift();
          if (!route || this.routeArr[this.routeArr.length - 1] === route) return;
          this.routeArr.push(route);
          window.location.href = '/#' + route;
        } else if (this.type === 'history') {
          window.history.forward();
        }
      }
    }, {
      key: "go",
      value: function go(n) {
        n = n || 0;

        if (this.type === 'hash') {
          var index = this.routeArr.length - 1 + n;
          var route = this.routeArr[index];

          if (index >= this.routeArr.length) {
            index = index - this.routeArr.length;
            route = this.tempArr[index];
          } else if (index < 0) {
            index = 0;
            route = this.routeArr[index];
          }

          if (!route || this.routeArr[this.routeArr.length - 1] === route) return;
          this.routeArr.push(route);
          window.location.href = '/#' + route;
        } else if (this.type === 'history') {
          window.history.go(n);
        }
      }
    }]);

    return Router;
  }();

  exports = exports["default"] = Router;
});

var messRouter = createCommonjsModule(function (module, exports) {
  exports = exports["default"] = router;
});

export default messRouter.default.default;
