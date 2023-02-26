(function () {
  var d = 16,
    os = false;
  function of() {
    var d = document.createElement("div");
    return "undefined" !== typeof d.style["opacity"];
  }
  function g(a) {
    a();
  }
  function h() {
    var a = Object.create(null);
    for (type in {
      Top: "",
      Left: "",
    }) {
      var b = type == "Top" ? "Y" : "X";
      if (typeof window["page" + b + "Offset"] !== "undefined") {
        a[type.toLowerCase()] = window["page" + b + "Offset"];
      } else {
        b = document.documentElement.clientHeight
          ? document.documentElement
          : document.body;
        a[type.toLowerCase()] = b["scroll" + type];
      }
    }
    return a;
  }
  function l(s) {
    var a = document.body,
      b;
    if (window.innerHeight) {
      b = window.innerHeight;
    } else if (a.parentElement.clientHeight) {
      b = a.parentElement.clientHeight;
    } else if (a && a.clientHeight) {
      b = a.clientHeight;
    }
    return b - (s || 0) - d; // 安全距离，避免滚动条闪现
  }
  function w(s) {
    return document.documentElement.clientWidth - (s || 0) - d; //安全距离，避免滚动条闪现
  }
  function i(a) {
    this.create(a);
  }
  var j = false;
  g(function () {
    j = true;
  });
  var f = true,
    m,
    c = [];
  window.mtfWeather = function (a, b) {
    if (a === "play") {
      f = true;
    } else if (a === "stop") {
      f = false;
    } else {
      if (j) {
        os = of();
        if (m) {
          clearInterval(m);
        }
        m = setInterval(function () {
          f && c.length < b && Math.random() < 0.1 && c.push(new i(a));
          for (var e = h().top, d = c.length - 1; d >= 0; d--)
            if (c[d])
              if (
                c[d].top < e ||
                c[d].top > e + c[d].maxTop ||
                (os && c[d].el.style.opacity < 0.01)
              ) {
                c[d].remove();
                c[d] = null;
                c.splice(d, 1);
              } else {
                c[d].move();
                c[d].draw();
              }
        }, 60);
      } else
        g(function () {
          mtfWeather(a, b);
        });
    }
  };
  i.prototype = {
    common: function (o) {
      o.style.cssText =
        "position:absolute;display:block;z-index:99999;width:" +
        o.size +
        "px;height:" +
        o.size +
        "px";
    },
    create: function (a) {
      switch (a) {
        case "雪":
          this.el = cache.get(
            "./mtf/mtfWeatherPic/snow" + Math.floor(Math.random() * 5) + ".gif"
          );
          this.el.size = (Math.random() * 40 + 10) | 0;
          this.common(this.el);
          this.maxLeft = w(this.el.size);
          this.maxTop = l(this.el.size);
          this.left = Math.random() * this.maxLeft;
          this.top = h().top + 1;
          this.angle = 1.5;
          this.minAngle = 1.35;
          this.maxAngle = 1.65;
          this.angleDelta = 0.01;
          this.speed = 2 + Math.random();
          break;
        case "蝴蝶":
          this.el = cache.get(
            "./mtf/mtfWeatherPic/butterfly" +
              Math.floor(Math.random() * 5) +
              ".gif"
          );
          this.el.size = (Math.random() * 10 + 8) | 0;
          this.common(this.el);
          this.maxLeft = w(this.el.size);
          this.maxTop = l(this.el.size);
          this.left = Math.random() * this.maxLeft;
          this.top = h().top + l() / Math.floor(1 + Math.random() * 3);
          this.angle = 0;
          this.minAngle = 0;
          this.maxAngle = 2;
          this.angleDelta = 0.01;
          this.speed = 2.5 + Math.random();
          break;
        case "光":
          this.el = document.createElement("div");
          this.el.size = (parseInt(Math.random() * 20) + 20) | 0;
          this.common(this.el);
          this.el.innerHTML = "●";
          this.el.style.color = "#f9f7bd";
          this.el.style.fontSize = this.el.size + "px";
          this.maxLeft = w(this.el.size);
          this.maxTop = 99999999;
          this.left = Math.random() * this.maxLeft;
          this.top = h().top + l(this.el.size * 1.25);
          this.angle = 0.5;
          this.minAngle = 0.35;
          this.maxAngle = 0.65;
          this.angleDelta = 0.01 * Math.random();
          this.speed = 2 + Math.random();
          break;
        case "雨":
          this.el = document.createElement("div");
          this.el.size = 12;
          this.common(this.el);
          this.el.innerHTML = "|";
          this.el.style.color = "#FFFFFF";
          this.el.style.fontSize = this.el.size + "px";
          this.maxLeft = w(this.el.size);
          this.maxTop = l(this.el.size);
          this.left = Math.random() * this.maxLeft;
          this.top = h().top + 1;
          this.angle = 1.5;
          this.minAngle = -0.25;
          this.maxAngle = 0.25;
          this.angleDelta = 0.01 * Math.random();
          this.speed = 5 + Math.random();
          break;
        case "樱花":
        default:
          //默认樱花
          this.el = cache.get(
            "./mtf/mtfWeatherPic/sakura" +
              Math.floor(Math.random() * 8) +
              ".gif"
          );
          this.el.size = (Math.random() * 8 + 10) | 0;
          this.common(this.el);
          this.maxLeft = w(this.el.size);
          this.maxTop = l(this.el.size);
          this.left = Math.random() * this.maxLeft;
          this.top = h().top + 1;
          this.angle = 1.5;
          this.minAngle = 1.2;
          this.maxAngle = 1.7;
          this.angleDelta = 0.01 * Math.random();
          this.speed = 2 + 1.5 * Math.random();
          break;
      }
      if (os) {
        this.el.style.opacity = 0.5 + Math.random() * 0.5;
      }
      document.body.appendChild(this.el);
    },
    move: function () {
      if (this.angle < this.minAngle || this.angle > this.maxAngle) {
        this.angleDelta = -this.angleDelta;
      }
      this.angle += this.angleDelta;
      this.left += this.speed * Math.cos(this.angle * Math.PI);
      this.top -= this.speed * Math.sin(this.angle * Math.PI);
      if (this.left < 0) {
        this.left = this.maxLeft;
      } else if (this.left > this.maxLeft) {
        this.left = 0;
      }
    },
    draw: function () {
      this.el.style.top = Math.round(this.top) + "px";
      this.el.style.left = Math.round(this.left) + "px";
      if (os) {
        this.el.style.opacity -= 0.003;
      }
    },
    remove: function () {
      document.body.removeChild(this.el);
      this.el = null;
    },
  };
  var cache = {
    h: Object.create(null),
    get: function (src) {
      var el = this.h[src];
      if (!el) {
        el = document.createElement("img");
        el.src = src;
        this.h[src] = el;
      }
      return el.cloneNode();
    },
  };
})();