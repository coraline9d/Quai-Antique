(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/script/ajax.js":
/*!*******************************!*\
  !*** ./assets/script/ajax.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
//Méthode pour la date et la capcité de personnes formulaire de réservation

document.addEventListener("DOMContentLoaded", function () {
  // Votre code JavaScript existant ici

  // Sélectionnez les champs "Nombre de personnes", "Heure de la réservation" et "Date"
  var numberOfGuestsField = document.querySelector("#reservation_number_of_guest");
  var hourField = document.querySelector("#reservation_hour");
  var dateField = document.querySelector("#reservation_date");

  // Créez une fonction pour mettre à jour les horaires
  function updateHours() {
    // Récupérez la valeur du champ "Nombre de personnes"
    var numberOfGuests = numberOfGuestsField.value;

    // Récupérez la valeur du champ "Date"
    var date = dateField.value;

    // Envoyez une requête AJAX au serveur pour récupérer les heures disponibles
    fetch("/reservation/available-hours?number_of_guest=".concat(numberOfGuests, "&date=").concat(date)).then(function (response) {
      return response.json();
    }).then(function (availableHours) {
      // Supprimez toutes les options du champ "Heure de la réservation"
      while (hourField.firstChild) {
        hourField.removeChild(hourField.firstChild);
      }

      // Ajoutez une option vide au champ "Heure de la réservation"
      var placeholderOption = document.createElement("option");
      placeholderOption.textContent = "Choisir une heure";
      placeholderOption.value = "";
      hourField.appendChild(placeholderOption);

      // Ajoutez les heures disponibles en tant qu'options du champ "Heure de la réservation"
      var _iterator = _createForOfIteratorHelper(availableHours),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var hour = _step.value;
          var option = document.createElement("option");
          option.textContent = hour;
          option.value = hour;
          hourField.appendChild(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  // Ajoutez un écouteur d'événements pour détecter les changements de valeur du champ "Nombre de personnes"
  numberOfGuestsField.addEventListener("change", updateHours);

  // Ajoutez un écouteur d'événements pour détecter les changements de valeur du champ "Date"
  dateField.addEventListener("change", updateHours);
});

/***/ }),

/***/ "./assets/script/app.js":
/*!******************************!*\
  !*** ./assets/script/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

__webpack_require__(/*! ./jquery.min.js */ "./assets/script/jquery.min.js");
__webpack_require__(/*! ./ajax.js */ "./assets/script/ajax.js");
__webpack_require__(/*! ./cookie.js */ "./assets/script/cookie.js");

document.querySelector(".navbar-toggler").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("opaque");
  document.querySelector("body").classList.toggle("navbar-expanded");
});

/***/ }),

/***/ "./assets/script/cookie.js":
/*!*********************************!*\
  !*** ./assets/script/cookie.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
// Vérifier si l'utilisateur a déjà fait un choix
if (!document.cookie.includes("accept_cookies")) {
  // Afficher la bannière de cookies
  document.getElementById("cookie-banner").style.display = "block";
}

// Gérer le clic sur le bouton "Accepter"
document.getElementById("accept-cookies").addEventListener("click", function () {
  // L'utilisateur a accepté les cookies
  document.cookie = "accept_cookies=true; expires=" + new Date(Date.now() + 86400000).toUTCString() + "; path=/";

  // Masquer la bannière de cookies
  document.getElementById("cookie-banner").style.display = "none";
});

// Gérer le clic sur le bouton "Refuser"
document.getElementById("refuse-cookies").addEventListener("click", function () {
  // L'utilisateur a refusé les cookies
  document.cookie = "accept_cookies=false; expires=" + new Date(Date.now() + 86400000).toUTCString() + "; path=/";

  // Masquer la bannière de cookies
  document.getElementById("cookie-banner").style.display = "none";
});

/***/ }),

/***/ "./assets/script/jquery.min.js":
/*!*************************************!*\
  !*** ./assets/script/jquery.min.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.flat.js */ "./node_modules/core-js/modules/es.array.flat.js");
__webpack_require__(/*! core-js/modules/es.array.unscopables.flat.js */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.unshift.js */ "./node_modules/core-js/modules/es.array.unshift.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (e, t) {
  "use strict";

  "object" == ( false ? 0 : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (g, e) {
  "use strict";

  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    v = t.flat ? function (e) {
      return t.flat.call(e);
    } : function (e) {
      return t.concat.apply([], e);
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    m = {},
    b = function b(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    x = function x(e) {
      return null != e && e === e.window;
    },
    w = g.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function C(e, t, n) {
    var r,
      i,
      o = (n = n || w).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function T(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }
  var f = "3.6.4 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween",
    E = function E(e, t) {
      return new E.fn.init(e, t);
    };
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = T(e);
    return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  E.fn = E.prototype = {
    jquery: f,
    constructor: E,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = E.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return E.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(E.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(E.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(E.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, E.extend = E.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, E.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      C(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (d(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return v(a);
    },
    guid: 1,
    support: m
  }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var p = function (n) {
    var e,
      p,
      x,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      C,
      T,
      a,
      E,
      v,
      s,
      c,
      y,
      A = "sizzle" + 1 * new Date(),
      d = n.document,
      N = 0,
      r = 0,
      m = ue(),
      b = ue(),
      S = ue(),
      k = ue(),
      D = function D(e, t) {
        return e === t && (l = !0), 0;
      },
      L = {}.hasOwnProperty,
      t = [],
      j = t.pop,
      q = t.push,
      O = t.push,
      P = t.slice,
      H = function H(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
      W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      F = new RegExp(R + "+", "g"),
      $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      z = new RegExp("^" + R + "*," + R + "*"),
      _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      U = new RegExp(R + "|>"),
      V = new RegExp(W),
      X = new RegExp("^" + B + "$"),
      Q = {
        ID: new RegExp("^#(" + B + ")"),
        CLASS: new RegExp("^\\.(" + B + ")"),
        TAG: new RegExp("^(" + B + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function ie(e, t) {
        return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = function oe() {
        C();
      },
      ae = xe(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      O.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType;
    } catch (e) {
      O = {
        apply: t.length ? function (e, t) {
          q.apply(e, P.call(t));
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        d = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
      if (!r && (C(e), e = e || T, E)) {
        if (11 !== d && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === d) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n;
        }
        if (p.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === d && (U.test(t) || _.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = A)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
            c = l.join(",");
          }
          try {
            return O.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            k(t, !0);
          } finally {
            s === A && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function le(e) {
      return e[A] = !0, e;
    }
    function ce(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) x.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in p = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, C = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : d;
      return r != T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), d != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ce(function (e) {
        return a.appendChild(e).appendChild(T.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), p.cssHas = ce(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), p.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), p.getElementsByTagName = ce(function (e) {
        return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
      }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function (e) {
        return a.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length;
      }), p.getById ? (x.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, x.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (x.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, x.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), x.find.TAG = p.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, x.find.CLASS = p.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = T.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W);
      }), p.cssHas || v.push(":has"), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType && e.documentElement || e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == d && y(d, e) ? -1 : t == T || t.ownerDocument == d && y(d, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
          r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          s = [t];
        if (!i || !o) return e == T ? -1 : t == T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
        if (i === o) return de(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? de(a[r], s[r]) : a[r] == d ? -1 : s[r] == d ? 1 : 0;
      }), T;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (C(e), p.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        k(t, !0);
      }
      return 0 < se(t, T, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != T && C(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != T && C(e);
      var n = x.attrHandle[t.toLowerCase()],
        r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);
      return n;
    }, (x = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: Q,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            b = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = y !== m ? "nextSibling" : "previousSibling",
              c = e.parentNode,
              f = b && e.nodeName.toLowerCase(),
              d = !n && !b,
              p = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = l = "only" === h && !u && "nextSibling";
                }
                return !0;
              }
              if (u = [m ? c.firstChild : c.lastChild], m && d) {
                p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (p = s = 0) || u.pop()) if (1 === a.nodeType && ++p && a === e) {
                  i[h] = [N, s, p];
                  break;
                }
              } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p) while (a = ++s && a && a[l] || (p = s = 0) || u.pop()) if ((b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++p && (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a === e)) break;
              return (p -= v) === g || p % g == 0 && 0 <= p / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = H(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace($, "$1"));
          return s[A] ? le(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(e) {
          return !x.pseudos.empty(e);
        },
        header: function header(e) {
          return K.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = x.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) x.pseudos[e] = pe(e);
    for (e in {
      submit: !0,
      reset: !0
    }) x.pseudos[e] = he(e);
    function me() {}
    function be(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function xe(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        d = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o,
          a = [N, d];
        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === N && r[1] === d) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Ce(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(p, h, g, v, y, e) {
      return v && !v[A] && (v = Te(v)), y && !y[A] && (y = Te(y, e)), le(function (e, t, n, r) {
        var i,
          o,
          a,
          s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !p || !e && h ? c : Ce(c, s, p, n, r),
          d = g ? y || (e ? p : l || v) ? [] : t : f;
        if (g && g(f, d, n, r), v) {
          i = Ce(d, u), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
        }
        if (e) {
          if (y || p) {
            if (y) {
              i = [], o = d.length;
              while (o--) (a = d[o]) && i.push(f[o] = a);
              y(null, d = [], i, r);
            }
            o = d.length;
            while (o--) (a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d);
      });
    }
    function Ee(e) {
      for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function (e) {
          return e === i;
        }, a, !0), l = xe(function (e) {
          return -1 < H(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = x.relative[e[s].type]) c = [xe(we(c), t)];else {
        if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
          for (n = ++s; n < r; n++) if (x.relative[e[n].type]) break;
          return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e));
        }
        c.push(t);
      }
      return we(c);
    }
    return me.prototype = x.filters = x.pseudos, x.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = b[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = x.preFilter;
      while (a) {
        for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? se.error(e) : b(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
        v,
        y,
        m,
        b,
        r,
        i = [],
        o = [],
        a = S[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) (a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
        (a = S(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            d = w,
            p = e || b && x.find.TAG("*", i),
            h = N += null == d ? 1 : Math.random() || 0.1,
            g = p.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = p[l]); l++) {
            if (b && o) {
              a = 0, t || o.ownerDocument == T || (C(o), n = !E);
              while (s = v[a++]) if (s(o, t || T, n)) {
                _r.push(o);
                break;
              }
              i && (N = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = j.call(_r));
              f = Ce(f);
            }
            O.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }
          return i && (N = h, w = d), c;
        }, m ? le(r) : r))).selector = e;
      }
      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
          if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = Q.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], x.relative[s = a.type]) break;
          if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n;
            break;
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), p.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(I, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(g);
  E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
  var h = function h(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    A = function A(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = E.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return b(n) ? E.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? E.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? E.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : E.filter(n, e, r);
  }
  E.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, E.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
        for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
      return 1 < r ? E.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length;
    }
  });
  var L,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || L, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), k.test(r[1]) && E.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = w.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
  }).prototype = E.fn, L = E(w);
  var q = /^(?:parents|prev(?:Until|All))/,
    O = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function has(e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && E(e);
      if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), E.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return A((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return A(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
    }
  }, function (r, i) {
    E.fn[r] = function (e, t) {
      var n = E.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var H = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function B(e, t, n, r) {
    var i;
    try {
      e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  E.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function (e, t) {
      n[t] = !0;
    }), n) : E.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            E.each(e, function (e, t) {
              b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return E.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function has(e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, E.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return E.Deferred(function (r) {
              E.each(o, function (e, t) {
                var n = b(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, R, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t));
              };
            }
            return E.Deferred(function (e) {
              o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : I)), o[2][3].add(l(0, e, b(n) ? n : R));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? E.extend(e, a) : a;
          }
        },
        s = {};
      return E.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = E.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();
      while (t--) B(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  E.Deferred.exceptionHook = function (e, t) {
    g.console && g.console.warn && e && M.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, E.readyException = function (e) {
    g.setTimeout(function () {
      throw e;
    });
  };
  var W = E.Deferred();
  function F() {
    w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready();
  }
  E.fn.ready = function (e) {
    return W.then(e)["catch"](function (e) {
      E.readyException(e);
    }), this;
  }, E.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(w, [E]);
    }
  }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
  var $ = function $(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === T(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t, n) {
        return l.call(E(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    _ = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(_, U);
  }
  var X = function X(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = E.expando + Q.uid++;
  }
  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) i[V(r)] = t[r];
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !E.isEmptyObject(t);
    }
  };
  var Y = new Q(),
    G = new Q(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      G.set(e, t, n);
    } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function hasData(e) {
      return G.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      G.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), E.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        G.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          G.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        G.remove(this, e);
      });
    }
  }), E.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = E.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = E._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        E.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: E.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), E.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = E.queue(this, t, n);
        E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        E.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = E.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = w.documentElement,
    ie = function ie(e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function ie(e) {
    return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });
  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display");
  };
  var se = {};
  function ue(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = se[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function show() {
      return ue(this, !0);
    },
    hide: function hide() {
      return ue(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? E(this).show() : E(this).hide();
      });
    }
  });
  var le,
    ce,
    fe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;
  var he = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function ge(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n;
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function me(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);else if (ye.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      E.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
    } else d.push(t.createTextNode(o));
    f.textContent = "", p = 0;
    while (o = d[p++]) if (r && -1 < E.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n) {
      c = 0;
      while (o = a[c++]) pe.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function we() {
    return !1;
  }
  function Ce(e, t) {
    return e === function () {
      try {
        return w.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function Te(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return E().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
      E.event.add(this, t, i, r, n);
    });
  }
  function Ee(e, i, o) {
    o ? (Y.set(e, i, !1), E.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n,
          r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe);
  }
  E.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.get(t);
      if (X(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(H) || [""]).length;
        while (l--) p = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({
          type: p,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && E.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0);
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(H) || [""]).length;
        while (l--) if (p = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
          f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;
          while (o--) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
          a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p]);
        } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = E.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return fe.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, E.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, E.Event = function (e, t) {
    if (!(this instanceof E.Event)) return new E.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
  }, E.Event.prototype = {
    constructor: E.Event,
    isDefaultPrevented: we,
    isPropagationStopped: we,
    isImmediatePropagationStopped: we,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, E.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, E.event.addProp), E.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    E.event.special[t] = {
      setup: function setup() {
        return Ee(this, t, Ce), !1;
      },
      trigger: function trigger() {
        return Ee(this, t), !0;
      },
      _default: function _default(e) {
        return Y.get(e.target, t);
      },
      delegateType: e
    };
  }), E.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    E.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), E.fn.extend({
    on: function on(e, t, n, r) {
      return Te(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Te(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function () {
        E.event.remove(this, e, n, t);
      });
    }
  });
  var Ae = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function ke(e, t) {
    return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
  }
  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function je(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      G.hasData(e) && (o = G.access(e), a = E.extend({}, o), G.set(t, a));
    }
  }
  function qe(n, r, i, o) {
    r = v(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      p = r[0],
      h = b(p);
    if (h || 1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o);
    });
    if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : C(u.textContent.replace(Se, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) je(o[r], a[r]);else je(e, c);
      return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (X(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }
        n[G.expando] && (n[G.expando] = void 0);
      }
    }
  }), E.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? E.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return qe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return qe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ke(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return qe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return qe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return E.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ae.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = E.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return qe(this, arguments, function (e) {
        var t = this.parentNode;
        E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), E.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    E.fn[e] = function (e) {
      for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = /^--/,
    Ie = function Ie(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = g), t.getComputedStyle(e);
    },
    Re = function Re(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Be = new RegExp(ne.join("|"), "i"),
    Me = "[\\x20\\t\\r\\n\\f]",
    We = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$", "g");
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = He.test(t),
      u = e.style;
    return (n = n || Ie(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(We, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Pe.test(a) && Be.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = g.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = w.createElement("div"),
      l = w.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = g.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var ze = ["Webkit", "Moz", "ms"],
    _e = w.createElement("div").style,
    Ue = {};
  function Ve(e) {
    var t = E.cssProps[e] || Ue[e];
    return t || (e in _e ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = ze.length;
      while (n--) if ((e = ze[n] + t) in _e) return e;
    }(e) || e);
  }
  var Xe,
    Qe,
    Ye = /^(none|table(?!-c[ea]).+)/,
    Ge = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ke = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
  }
  function et(e, t, n) {
    var r = Ie(e),
      i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
      o = i,
      a = Fe(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = He.test(t),
          l = e.style;
        if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = function (e, t, n, r) {
          var i,
            o,
            a = 20,
            s = r ? function () {
              return r.cur();
            } : function () {
              return E.css(e, t, "");
            },
            u = s(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
          if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), c /= o;
            c *= 2, E.style(e, t, c + l), n = n || [];
          }
          return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
        }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return He.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), E.each(["height", "width"], function (e, u) {
    E.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, u, n) : Re(e, Ge, function () {
          return et(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Ie(e),
          o = !m.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
          s = n ? Ze(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ze(e, u, "border", !1, i) - 0.5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s);
      }
    };
  }), E.cssHooks.marginLeft = $e(m.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), E.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    E.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (E.cssHooks[i + o].set = Je);
  }), E.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), E.fn.delay = function (r, e) {
    return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = g.setTimeout(e, r);
      t.stop = function () {
        g.clearTimeout(n);
      };
    });
  }, Xe = w.createElement("input"), Qe = w.createElement("select").appendChild(w.createElement("option")), Xe.type = "checkbox", m.checkOn = "" !== Xe.value, m.optSelected = Qe.selected, (Xe = w.createElement("input")).value = "t", Xe.type = "radio", m.radioValue = "t" === Xe.value;
  var tt,
    nt = E.expr.attrHandle;
  E.fn.extend({
    attr: function attr(e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    }
  }), E.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!m.radioValue && "radio" === t && S(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(H);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), tt = {
    set: function set(e, t, n) {
      return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = nt[t] || E.find.attr;
    nt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = nt[o], nt[o] = r, r = null != a(e, t, n) ? o : null, nt[o] = i), r;
    };
  });
  var rt = /^(?:input|select|textarea|button)$/i,
    it = /^(?:a|area)$/i;
  function ot(e) {
    return (e.match(H) || []).join(" ");
  }
  function at(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function st(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
  }
  E.fn.extend({
    prop: function prop(e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    }
  }), E.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = E.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), m.optSelected || (E.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    E.propFix[this.toLowerCase()] = this;
  }), E.fn.extend({
    addClass: function addClass(t) {
      var e, n, r, i, o, a;
      return b(t) ? this.each(function (e) {
        E(this).addClass(t.call(this, e, at(this)));
      }) : (e = st(t)).length ? this.each(function () {
        if (r = at(this), n = 1 === this.nodeType && " " + ot(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = ot(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function removeClass(t) {
      var e, n, r, i, o, a;
      return b(t) ? this.each(function (e) {
        E(this).removeClass(t.call(this, e, at(this)));
      }) : arguments.length ? (e = st(t)).length ? this.each(function () {
        if (r = at(this), n = 1 === this.nodeType && " " + ot(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = ot(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function toggleClass(t, n) {
      var e,
        r,
        i,
        o,
        a = _typeof(t),
        s = "string" === a || Array.isArray(t);
      return b(t) ? this.each(function (e) {
        E(this).toggleClass(t.call(this, e, at(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = st(t), this.each(function () {
        if (s) for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = at(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""));
      }));
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ot(at(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var ut = /\r/g;
  E.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = b(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ut, "") : null == e ? "" : e : void 0;
    }
  }), E.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = E.find.attr(e, "value");
          return null != t ? t : ot(E.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
            if (t = E(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = E.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), E.each(["radio", "checkbox"], function () {
    E.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t);
      }
    }, m.checkOn || (E.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), m.focusin = "onfocusin" in g;
  var lt = /^(?:focusinfocus|focusoutblur)$/,
    ct = function ct(e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [n || w],
        p = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || p, lt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
          a === (n.ownerDocument || w) && d.push(a.defaultView || a.parentWindow || g);
        }
        i = 0;
        while ((o = d[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && b(n[p]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, ct), n[p](), e.isPropagationStopped() && f.removeEventListener(p, ct), E.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = E.extend(new E.Event(), n, {
        type: e,
        isSimulated: !0
      });
      E.event.trigger(r, null, t);
    }
  }), E.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        E.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return E.event.trigger(e, t, n, !0);
    }
  }), m.focusin || E.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      E.event.simulate(r, e.target, E.event.fix(e));
    };
    E.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  }), E.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new g.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var ft,
    dt = /\[\]$/,
    pt = /\r?\n/g,
    ht = /^(?:submit|button|image|reset|file)$/i,
    gt = /^(?:input|select|textarea|keygen)/i;
  function vt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) E.each(e, function (e, t) {
      r || dt.test(n) ? i(n, t) : vt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== T(e)) i(n, e);else for (t in e) vt(n + "[" + t + "]", e[t], r, i);
  }
  E.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = b(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) vt(n, e[n], t, i);
    return r.join("&");
  }, E.fn.extend({
    serialize: function serialize() {
      return E.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = E.prop(this, "elements");
        return e ? E.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !E(this).is(":disabled") && gt.test(this.nodeName) && !ht.test(e) && (this.checked || !fe.test(e));
      }).map(function (e, t) {
        var n = E(this).val();
        return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(pt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(pt, "\r\n")
        };
      }).get();
    }
  }), E.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return b(n) ? this.each(function (e) {
        E(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = E(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = b(t);
      return this.each(function (e) {
        E(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        E(this).replaceWith(this.childNodes);
      }), this;
    }
  }), E.expr.pseudos.hidden = function (e) {
    return !E.expr.pseudos.visible(e);
  }, E.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, m.createHTMLDocument = ((ft = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ft.childNodes.length), E.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
    var r, i, o;
  }, E.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = E.css(e, "position"),
        c = E(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, E.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        E.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - E.css(r, "marginTop", !0),
          left: t.left - i.left - E.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === E.css(e, "position")) e = e.offsetParent;
        return e || re;
      });
    }
  }), E.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    E.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), E.each(["top", "left"], function (e, n) {
    E.cssHooks[n] = $e(m.pixelPosition, function (e, t) {
      if (t) return t = Fe(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t;
    });
  }), E.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    E.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      E.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), E.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    E.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var yt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  E.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || E.guid++, i;
  }, E.holdReady = function (e) {
    e ? E.readyWait++ : E.ready(!0);
  }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function (e) {
    var t = E.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, E.trim = function (e) {
    return null == e ? "" : (e + "").replace(yt, "$1");
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return E;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var mt = g.jQuery,
    bt = g.$;
  return E.noConflict = function (e) {
    return g.$ === E && (g.$ = bt), e && g.jQuery === E && (g.jQuery = mt), E;
  }, "undefined" == typeof e && (g.jQuery = g.$ = E), E;
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-1f1c24"], () => (__webpack_exec__("./assets/script/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vYXNzZXRzL3NjcmlwdC9hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHQvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHQvY29va2llLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHQvanF1ZXJ5Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Nw6l0aG9kZSBwb3VyIGxhIGRhdGUgZXQgbGEgY2FwY2l0w6kgZGUgcGVyc29ubmVzIGZvcm11bGFpcmUgZGUgcsOpc2VydmF0aW9uXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gVm90cmUgY29kZSBKYXZhU2NyaXB0IGV4aXN0YW50IGljaVxuXG4gIC8vIFPDqWxlY3Rpb25uZXogbGVzIGNoYW1wcyBcIk5vbWJyZSBkZSBwZXJzb25uZXNcIiwgXCJIZXVyZSBkZSBsYSByw6lzZXJ2YXRpb25cIiBldCBcIkRhdGVcIlxuICBjb25zdCBudW1iZXJPZkd1ZXN0c0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNyZXNlcnZhdGlvbl9udW1iZXJfb2ZfZ3Vlc3RcIlxuICApO1xuICBjb25zdCBob3VyRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2VydmF0aW9uX2hvdXJcIik7XG4gIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXJ2YXRpb25fZGF0ZVwiKTtcblxuICAvLyBDcsOpZXogdW5lIGZvbmN0aW9uIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGVzIGhvcmFpcmVzXG4gIGZ1bmN0aW9uIHVwZGF0ZUhvdXJzKCkge1xuICAgIC8vIFLDqWN1cMOpcmV6IGxhIHZhbGV1ciBkdSBjaGFtcCBcIk5vbWJyZSBkZSBwZXJzb25uZXNcIlxuICAgIGNvbnN0IG51bWJlck9mR3Vlc3RzID0gbnVtYmVyT2ZHdWVzdHNGaWVsZC52YWx1ZTtcblxuICAgIC8vIFLDqWN1cMOpcmV6IGxhIHZhbGV1ciBkdSBjaGFtcCBcIkRhdGVcIlxuICAgIGNvbnN0IGRhdGUgPSBkYXRlRmllbGQudmFsdWU7XG5cbiAgICAvLyBFbnZveWV6IHVuZSByZXF1w6p0ZSBBSkFYIGF1IHNlcnZldXIgcG91ciByw6ljdXDDqXJlciBsZXMgaGV1cmVzIGRpc3BvbmlibGVzXG4gICAgZmV0Y2goXG4gICAgICBgL3Jlc2VydmF0aW9uL2F2YWlsYWJsZS1ob3Vycz9udW1iZXJfb2ZfZ3Vlc3Q9JHtudW1iZXJPZkd1ZXN0c30mZGF0ZT0ke2RhdGV9YFxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGF2YWlsYWJsZUhvdXJzKSA9PiB7XG4gICAgICAgIC8vIFN1cHByaW1leiB0b3V0ZXMgbGVzIG9wdGlvbnMgZHUgY2hhbXAgXCJIZXVyZSBkZSBsYSByw6lzZXJ2YXRpb25cIlxuICAgICAgICB3aGlsZSAoaG91ckZpZWxkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBob3VyRmllbGQucmVtb3ZlQ2hpbGQoaG91ckZpZWxkLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWpvdXRleiB1bmUgb3B0aW9uIHZpZGUgYXUgY2hhbXAgXCJIZXVyZSBkZSBsYSByw6lzZXJ2YXRpb25cIlxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnRleHRDb250ZW50ID0gXCJDaG9pc2lyIHVuZSBoZXVyZVwiO1xuICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGhvdXJGaWVsZC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XG5cbiAgICAgICAgLy8gQWpvdXRleiBsZXMgaGV1cmVzIGRpc3BvbmlibGVzIGVuIHRhbnQgcXUnb3B0aW9ucyBkdSBjaGFtcCBcIkhldXJlIGRlIGxhIHLDqXNlcnZhdGlvblwiXG4gICAgICAgIGZvciAoY29uc3QgaG91ciBvZiBhdmFpbGFibGVIb3Vycykge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaG91cjtcbiAgICAgICAgICBvcHRpb24udmFsdWUgPSBob3VyO1xuICAgICAgICAgIGhvdXJGaWVsZC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIEFqb3V0ZXogdW4gw6ljb3V0ZXVyIGQnw6l2w6luZW1lbnRzIHBvdXIgZMOpdGVjdGVyIGxlcyBjaGFuZ2VtZW50cyBkZSB2YWxldXIgZHUgY2hhbXAgXCJOb21icmUgZGUgcGVyc29ubmVzXCJcbiAgbnVtYmVyT2ZHdWVzdHNGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUhvdXJzKTtcblxuICAvLyBBam91dGV6IHVuIMOpY291dGV1ciBkJ8OpdsOpbmVtZW50cyBwb3VyIGTDqXRlY3RlciBsZXMgY2hhbmdlbWVudHMgZGUgdmFsZXVyIGR1IGNoYW1wIFwiRGF0ZVwiXG4gIGRhdGVGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUhvdXJzKTtcbn0pO1xuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCBcIi4uL3N0eWxlcy9hcHAuc2Nzc1wiO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCBcImJvb3RzdHJhcFwiO1xuXG5yZXF1aXJlKFwiLi9qcXVlcnkubWluLmpzXCIpO1xucmVxdWlyZShcIi4vYWpheC5qc1wiKTtcbnJlcXVpcmUoXCIuL2Nvb2tpZS5qc1wiKTtcblxuaW1wb3J0IHsgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXIgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci10b2dnbGVyXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGFxdWVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdmJhci1leHBhbmRlZFwiKTtcbiAgfSk7XG4iLCIvLyBWw6lyaWZpZXIgc2kgbCd1dGlsaXNhdGV1ciBhIGTDqWrDoCBmYWl0IHVuIGNob2l4XG5pZiAoIWRvY3VtZW50LmNvb2tpZS5pbmNsdWRlcyhcImFjY2VwdF9jb29raWVzXCIpKSB7XG4gIC8vIEFmZmljaGVyIGxhIGJhbm5pw6hyZSBkZSBjb29raWVzXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBHw6lyZXIgbGUgY2xpYyBzdXIgbGUgYm91dG9uIFwiQWNjZXB0ZXJcIlxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBMJ3V0aWxpc2F0ZXVyIGEgYWNjZXB0w6kgbGVzIGNvb2tpZXNcbiAgZG9jdW1lbnQuY29va2llID1cbiAgICBcImFjY2VwdF9jb29raWVzPXRydWU7IGV4cGlyZXM9XCIgK1xuICAgIG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9VVENTdHJpbmcoKSArXG4gICAgXCI7IHBhdGg9L1wiO1xuXG4gIC8vIE1hc3F1ZXIgbGEgYmFubmnDqHJlIGRlIGNvb2tpZXNcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vLyBHw6lyZXIgbGUgY2xpYyBzdXIgbGUgYm91dG9uIFwiUmVmdXNlclwiXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIEwndXRpbGlzYXRldXIgYSByZWZ1c8OpIGxlcyBjb29raWVzXG4gIGRvY3VtZW50LmNvb2tpZSA9XG4gICAgXCJhY2NlcHRfY29va2llcz1mYWxzZTsgZXhwaXJlcz1cIiArXG4gICAgbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b1VUQ1N0cmluZygpICtcbiAgICBcIjsgcGF0aD0vXCI7XG5cbiAgLy8gTWFzcXVlciBsYSBiYW5uacOocmUgZGUgY29va2llc1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG4iLCIhKGZ1bmN0aW9uIChlLCB0KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlLmV4cG9ydHNcbiAgICA/IChtb2R1bGUuZXhwb3J0cyA9IGUuZG9jdW1lbnRcbiAgICAgICAgPyB0KGUsICEwKVxuICAgICAgICA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIWUuZG9jdW1lbnQpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gdChlKTtcbiAgICAgICAgICB9KVxuICAgIDogdChlKTtcbn0pKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uIChnLCBlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgdCA9IFtdLFxuICAgIHIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgcyA9IHQuc2xpY2UsXG4gICAgdiA9IHQuZmxhdFxuICAgICAgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiB0LmZsYXQuY2FsbChlKTtcbiAgICAgICAgfVxuICAgICAgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiB0LmNvbmNhdC5hcHBseShbXSwgZSk7XG4gICAgICAgIH0sXG4gICAgdSA9IHQucHVzaCxcbiAgICBpID0gdC5pbmRleE9mLFxuICAgIG4gPSB7fSxcbiAgICBvID0gbi50b1N0cmluZyxcbiAgICB5ID0gbi5oYXNPd25Qcm9wZXJ0eSxcbiAgICBhID0geS50b1N0cmluZyxcbiAgICBsID0gYS5jYWxsKE9iamVjdCksXG4gICAgbSA9IHt9LFxuICAgIGIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlICYmXG4gICAgICAgIFwibnVtYmVyXCIgIT0gdHlwZW9mIGUubm9kZVR5cGUgJiZcbiAgICAgICAgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLml0ZW1cbiAgICAgICk7XG4gICAgfSxcbiAgICB4ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBudWxsICE9IGUgJiYgZSA9PT0gZS53aW5kb3c7XG4gICAgfSxcbiAgICB3ID0gZy5kb2N1bWVudCxcbiAgICBjID0geyB0eXBlOiAhMCwgc3JjOiAhMCwgbm9uY2U6ICEwLCBub01vZHVsZTogITAgfTtcbiAgZnVuY3Rpb24gQyhlLCB0LCBuKSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgbyA9IChuID0gbiB8fCB3KS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGlmICgoKG8udGV4dCA9IGUpLCB0KSlcbiAgICAgIGZvciAociBpbiBjKVxuICAgICAgICAoaSA9IHRbcl0gfHwgKHQuZ2V0QXR0cmlidXRlICYmIHQuZ2V0QXR0cmlidXRlKHIpKSkgJiZcbiAgICAgICAgICBvLnNldEF0dHJpYnV0ZShyLCBpKTtcbiAgICBuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKTtcbiAgfVxuICBmdW5jdGlvbiBUKGUpIHtcbiAgICByZXR1cm4gbnVsbCA9PSBlXG4gICAgICA/IGUgKyBcIlwiXG4gICAgICA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlXG4gICAgICA/IG5bby5jYWxsKGUpXSB8fCBcIm9iamVjdFwiXG4gICAgICA6IHR5cGVvZiBlO1xuICB9XG4gIHZhciBmID1cbiAgICAgIFwiMy42LjQgLWFqYXgsLWFqYXgvanNvbnAsLWFqYXgvbG9hZCwtYWpheC9zY3JpcHQsLWFqYXgvdmFyL2xvY2F0aW9uLC1hamF4L3Zhci9ub25jZSwtYWpheC92YXIvcnF1ZXJ5LC1hamF4L3hociwtbWFuaXB1bGF0aW9uL19ldmFsVXJsLC1kZXByZWNhdGVkL2FqYXgtZXZlbnQtYWxpYXMsLWVmZmVjdHMsLWVmZmVjdHMvYW5pbWF0ZWRTZWxlY3RvciwtZWZmZWN0cy9Ud2VlblwiLFxuICAgIEUgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIG5ldyBFLmZuLmluaXQoZSwgdCk7XG4gICAgfTtcbiAgZnVuY3Rpb24gZChlKSB7XG4gICAgdmFyIHQgPSAhIWUgJiYgXCJsZW5ndGhcIiBpbiBlICYmIGUubGVuZ3RoLFxuICAgICAgbiA9IFQoZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICFiKGUpICYmXG4gICAgICAheChlKSAmJlxuICAgICAgKFwiYXJyYXlcIiA9PT0gbiB8fFxuICAgICAgICAwID09PSB0IHx8XG4gICAgICAgIChcIm51bWJlclwiID09IHR5cGVvZiB0ICYmIDAgPCB0ICYmIHQgLSAxIGluIGUpKVxuICAgICk7XG4gIH1cbiAgKEUuZm4gPSBFLnByb3RvdHlwZSA9XG4gICAge1xuICAgICAganF1ZXJ5OiBmLFxuICAgICAgY29uc3RydWN0b3I6IEUsXG4gICAgICBsZW5ndGg6IDAsXG4gICAgICB0b0FycmF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzLmNhbGwodGhpcyk7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlXG4gICAgICAgICAgPyBzLmNhbGwodGhpcylcbiAgICAgICAgICA6IGUgPCAwXG4gICAgICAgICAgPyB0aGlzW2UgKyB0aGlzLmxlbmd0aF1cbiAgICAgICAgICA6IHRoaXNbZV07XG4gICAgICB9LFxuICAgICAgcHVzaFN0YWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IEUubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLCBlKTtcbiAgICAgICAgcmV0dXJuICh0LnByZXZPYmplY3QgPSB0aGlzKSwgdDtcbiAgICAgIH0sXG4gICAgICBlYWNoOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gRS5lYWNoKHRoaXMsIGUpO1xuICAgICAgfSxcbiAgICAgIG1hcDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKFxuICAgICAgICAgIEUubWFwKHRoaXMsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gbi5jYWxsKGUsIHQsIGUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgc2xpY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9LFxuICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXEoMCk7XG4gICAgICB9LFxuICAgICAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcSgtMSk7XG4gICAgICB9LFxuICAgICAgZXZlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soXG4gICAgICAgICAgRS5ncmVwKHRoaXMsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gKHQgKyAxKSAlIDI7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBvZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKFxuICAgICAgICAgIEUuZ3JlcCh0aGlzLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgJSAyO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZXE6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgbiA9ICtlICsgKGUgPCAwID8gdCA6IDApO1xuICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soMCA8PSBuICYmIG4gPCB0ID8gW3RoaXNbbl1dIDogW10pO1xuICAgICAgfSxcbiAgICAgIGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmV2T2JqZWN0IHx8IHRoaXMuY29uc3RydWN0b3IoKTtcbiAgICAgIH0sXG4gICAgICBwdXNoOiB1LFxuICAgICAgc29ydDogdC5zb3J0LFxuICAgICAgc3BsaWNlOiB0LnNwbGljZSxcbiAgICB9KSxcbiAgICAoRS5leHRlbmQgPSBFLmZuLmV4dGVuZCA9XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgbixcbiAgICAgICAgICByLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbyxcbiAgICAgICAgICBhID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuICAgICAgICAgIHMgPSAxLFxuICAgICAgICAgIHUgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgIGwgPSAhMTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBcImJvb2xlYW5cIiA9PSB0eXBlb2YgYSAmJiAoKGwgPSBhKSwgKGEgPSBhcmd1bWVudHNbc10gfHwge30pLCBzKyspLFxuICAgICAgICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgYSB8fCBiKGEpIHx8IChhID0ge30pLFxuICAgICAgICAgICAgcyA9PT0gdSAmJiAoKGEgPSB0aGlzKSwgcy0tKTtcbiAgICAgICAgICBzIDwgdTtcbiAgICAgICAgICBzKytcbiAgICAgICAgKVxuICAgICAgICAgIGlmIChudWxsICE9IChlID0gYXJndW1lbnRzW3NdKSlcbiAgICAgICAgICAgIGZvciAodCBpbiBlKVxuICAgICAgICAgICAgICAociA9IGVbdF0pLFxuICAgICAgICAgICAgICAgIFwiX19wcm90b19fXCIgIT09IHQgJiZcbiAgICAgICAgICAgICAgICAgIGEgIT09IHIgJiZcbiAgICAgICAgICAgICAgICAgIChsICYmIHIgJiYgKEUuaXNQbGFpbk9iamVjdChyKSB8fCAoaSA9IEFycmF5LmlzQXJyYXkocikpKVxuICAgICAgICAgICAgICAgICAgICA/ICgobiA9IGFbdF0pLFxuICAgICAgICAgICAgICAgICAgICAgIChvID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgJiYgIUFycmF5LmlzQXJyYXkobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGkgfHwgRS5pc1BsYWluT2JqZWN0KG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gblxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAoaSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAoYVt0XSA9IEUuZXh0ZW5kKGwsIG8sIHIpKSlcbiAgICAgICAgICAgICAgICAgICAgOiB2b2lkIDAgIT09IHIgJiYgKGFbdF0gPSByKSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSksXG4gICAgRS5leHRlbmQoe1xuICAgICAgZXhwYW5kbzogXCJqUXVlcnlcIiArIChmICsgTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxuICAgICAgaXNSZWFkeTogITAsXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgICAgfSxcbiAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgaXNQbGFpbk9iamVjdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQsIG47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgISghZSB8fCBcIltvYmplY3QgT2JqZWN0XVwiICE9PSBvLmNhbGwoZSkpICYmXG4gICAgICAgICAgKCEodCA9IHIoZSkpIHx8XG4gICAgICAgICAgICAoXCJmdW5jdGlvblwiID09XG4gICAgICAgICAgICAgIHR5cGVvZiAobiA9IHkuY2FsbCh0LCBcImNvbnN0cnVjdG9yXCIpICYmIHQuY29uc3RydWN0b3IpICYmXG4gICAgICAgICAgICAgIGEuY2FsbChuKSA9PT0gbCkpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIGZvciAodCBpbiBlKSByZXR1cm4gITE7XG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIH0sXG4gICAgICBnbG9iYWxFdmFsOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICBDKGUsIHsgbm9uY2U6IHQgJiYgdC5ub25jZSB9LCBuKTtcbiAgICAgIH0sXG4gICAgICBlYWNoOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICByID0gMDtcbiAgICAgICAgaWYgKGQoZSkpIHtcbiAgICAgICAgICBmb3IgKG4gPSBlLmxlbmd0aDsgciA8IG47IHIrKylcbiAgICAgICAgICAgIGlmICghMSA9PT0gdC5jYWxsKGVbcl0sIHIsIGVbcl0pKSBicmVhaztcbiAgICAgICAgfSBlbHNlIGZvciAociBpbiBlKSBpZiAoITEgPT09IHQuY2FsbChlW3JdLCByLCBlW3JdKSkgYnJlYWs7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfSxcbiAgICAgIG1ha2VBcnJheTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG4gPSB0IHx8IFtdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG51bGwgIT0gZSAmJlxuICAgICAgICAgICAgKGQoT2JqZWN0KGUpKVxuICAgICAgICAgICAgICA/IEUubWVyZ2UobiwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IFtlXSA6IGUpXG4gICAgICAgICAgICAgIDogdS5jYWxsKG4sIGUpKSxcbiAgICAgICAgICBuXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgaW5BcnJheTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdCA/IC0xIDogaS5jYWxsKHQsIGUsIG4pO1xuICAgICAgfSxcbiAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBmb3IgKHZhciBuID0gK3QubGVuZ3RoLCByID0gMCwgaSA9IGUubGVuZ3RoOyByIDwgbjsgcisrKSBlW2krK10gPSB0W3JdO1xuICAgICAgICByZXR1cm4gKGUubGVuZ3RoID0gaSksIGU7XG4gICAgICB9LFxuICAgICAgZ3JlcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgZm9yICh2YXIgciA9IFtdLCBpID0gMCwgbyA9IGUubGVuZ3RoLCBhID0gIW47IGkgPCBvOyBpKyspXG4gICAgICAgICAgIXQoZVtpXSwgaSkgIT09IGEgJiYgci5wdXNoKGVbaV0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sXG4gICAgICBtYXA6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIHZhciByLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbyA9IDAsXG4gICAgICAgICAgYSA9IFtdO1xuICAgICAgICBpZiAoZChlKSlcbiAgICAgICAgICBmb3IgKHIgPSBlLmxlbmd0aDsgbyA8IHI7IG8rKylcbiAgICAgICAgICAgIG51bGwgIT0gKGkgPSB0KGVbb10sIG8sIG4pKSAmJiBhLnB1c2goaSk7XG4gICAgICAgIGVsc2UgZm9yIChvIGluIGUpIG51bGwgIT0gKGkgPSB0KGVbb10sIG8sIG4pKSAmJiBhLnB1c2goaSk7XG4gICAgICAgIHJldHVybiB2KGEpO1xuICAgICAgfSxcbiAgICAgIGd1aWQ6IDEsXG4gICAgICBzdXBwb3J0OiBtLFxuICAgIH0pLFxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIChFLmZuW1N5bWJvbC5pdGVyYXRvcl0gPSB0W1N5bWJvbC5pdGVyYXRvcl0pLFxuICAgIEUuZWFjaChcbiAgICAgIFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcbiAgICAgICAgXCIgXCJcbiAgICAgICksXG4gICAgICBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBuW1wiW29iamVjdCBcIiArIHQgKyBcIl1cIl0gPSB0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgKTtcbiAgdmFyIHAgPSAoZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgZSxcbiAgICAgIHAsXG4gICAgICB4LFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICBoLFxuICAgICAgZixcbiAgICAgIGcsXG4gICAgICB3LFxuICAgICAgdSxcbiAgICAgIGwsXG4gICAgICBDLFxuICAgICAgVCxcbiAgICAgIGEsXG4gICAgICBFLFxuICAgICAgdixcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgeSxcbiAgICAgIEEgPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG4gICAgICBkID0gbi5kb2N1bWVudCxcbiAgICAgIE4gPSAwLFxuICAgICAgciA9IDAsXG4gICAgICBtID0gdWUoKSxcbiAgICAgIGIgPSB1ZSgpLFxuICAgICAgUyA9IHVlKCksXG4gICAgICBrID0gdWUoKSxcbiAgICAgIEQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSA9PT0gdCAmJiAobCA9ICEwKSwgMDtcbiAgICAgIH0sXG4gICAgICBMID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgICB0ID0gW10sXG4gICAgICBqID0gdC5wb3AsXG4gICAgICBxID0gdC5wdXNoLFxuICAgICAgTyA9IHQucHVzaCxcbiAgICAgIFAgPSB0LnNsaWNlLFxuICAgICAgSCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGZvciAodmFyIG4gPSAwLCByID0gZS5sZW5ndGg7IG4gPCByOyBuKyspIGlmIChlW25dID09PSB0KSByZXR1cm4gbjtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSxcbiAgICAgIEkgPVxuICAgICAgICBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG4gICAgICBSID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxuICAgICAgQiA9XG4gICAgICAgIFwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIiArXG4gICAgICAgIFIgK1xuICAgICAgICBcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFxuICAgICAgTSA9XG4gICAgICAgIFwiXFxcXFtcIiArXG4gICAgICAgIFIgK1xuICAgICAgICBcIiooXCIgK1xuICAgICAgICBCICtcbiAgICAgICAgXCIpKD86XCIgK1xuICAgICAgICBSICtcbiAgICAgICAgXCIqKFsqXiR8IX5dPz0pXCIgK1xuICAgICAgICBSICtcbiAgICAgICAgXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIiArXG4gICAgICAgIEIgK1xuICAgICAgICBcIikpfClcIiArXG4gICAgICAgIFIgK1xuICAgICAgICBcIipcXFxcXVwiLFxuICAgICAgVyA9XG4gICAgICAgIFwiOihcIiArXG4gICAgICAgIEIgK1xuICAgICAgICBcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIgK1xuICAgICAgICBNICtcbiAgICAgICAgXCIpKil8LiopXFxcXCl8KVwiLFxuICAgICAgRiA9IG5ldyBSZWdFeHAoUiArIFwiK1wiLCBcImdcIiksXG4gICAgICAkID0gbmV3IFJlZ0V4cChcIl5cIiArIFIgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyBSICsgXCIrJFwiLCBcImdcIiksXG4gICAgICB6ID0gbmV3IFJlZ0V4cChcIl5cIiArIFIgKyBcIiosXCIgKyBSICsgXCIqXCIpLFxuICAgICAgXyA9IG5ldyBSZWdFeHAoXCJeXCIgKyBSICsgXCIqKFs+K35dfFwiICsgUiArIFwiKVwiICsgUiArIFwiKlwiKSxcbiAgICAgIFUgPSBuZXcgUmVnRXhwKFIgKyBcInw+XCIpLFxuICAgICAgViA9IG5ldyBSZWdFeHAoVyksXG4gICAgICBYID0gbmV3IFJlZ0V4cChcIl5cIiArIEIgKyBcIiRcIiksXG4gICAgICBRID0ge1xuICAgICAgICBJRDogbmV3IFJlZ0V4cChcIl4jKFwiICsgQiArIFwiKVwiKSxcbiAgICAgICAgQ0xBU1M6IG5ldyBSZWdFeHAoXCJeXFxcXC4oXCIgKyBCICsgXCIpXCIpLFxuICAgICAgICBUQUc6IG5ldyBSZWdFeHAoXCJeKFwiICsgQiArIFwifFsqXSlcIiksXG4gICAgICAgIEFUVFI6IG5ldyBSZWdFeHAoXCJeXCIgKyBNKSxcbiAgICAgICAgUFNFVURPOiBuZXcgUmVnRXhwKFwiXlwiICsgVyksXG4gICAgICAgIENISUxEOiBuZXcgUmVnRXhwKFxuICAgICAgICAgIFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIiArXG4gICAgICAgICAgICBSICtcbiAgICAgICAgICAgIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgK1xuICAgICAgICAgICAgUiArXG4gICAgICAgICAgICBcIiooPzooWystXXwpXCIgK1xuICAgICAgICAgICAgUiArXG4gICAgICAgICAgICBcIiooXFxcXGQrKXwpKVwiICtcbiAgICAgICAgICAgIFIgK1xuICAgICAgICAgICAgXCIqXFxcXCl8KVwiLFxuICAgICAgICAgIFwiaVwiXG4gICAgICAgICksXG4gICAgICAgIGJvb2w6IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBJICsgXCIpJFwiLCBcImlcIiksXG4gICAgICAgIG5lZWRzQ29udGV4dDogbmV3IFJlZ0V4cChcbiAgICAgICAgICBcIl5cIiArXG4gICAgICAgICAgICBSICtcbiAgICAgICAgICAgIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArXG4gICAgICAgICAgICBSICtcbiAgICAgICAgICAgIFwiKigoPzotXFxcXGQpP1xcXFxkKilcIiArXG4gICAgICAgICAgICBSICtcbiAgICAgICAgICAgIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXG4gICAgICAgICAgXCJpXCJcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBZID0gL0hUTUwkL2ksXG4gICAgICBHID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcbiAgICAgIEsgPSAvXmhcXGQkL2ksXG4gICAgICBKID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcbiAgICAgIFogPSAvXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxcbiAgICAgIGVlID0gL1srfl0vLFxuICAgICAgdGUgPSBuZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIiArIFIgKyBcIj98XFxcXFxcXFwoW15cXFxcclxcXFxuXFxcXGZdKVwiLCBcImdcIiksXG4gICAgICBuZSA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBuID0gXCIweFwiICsgZS5zbGljZSgxKSAtIDY1NTM2O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHQgfHxcbiAgICAgICAgICAobiA8IDBcbiAgICAgICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShuICsgNjU1MzYpXG4gICAgICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoKG4gPj4gMTApIHwgNTUyOTYsICgxMDIzICYgbikgfCA1NjMyMCkpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgcmUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxcbiAgICAgIGllID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHRcbiAgICAgICAgICA/IFwiXFwwXCIgPT09IGVcbiAgICAgICAgICAgID8gXCJcXHVmZmZkXCJcbiAgICAgICAgICAgIDogZS5zbGljZSgwLCAtMSkgK1xuICAgICAgICAgICAgICBcIlxcXFxcIiArXG4gICAgICAgICAgICAgIGUuY2hhckNvZGVBdChlLmxlbmd0aCAtIDEpLnRvU3RyaW5nKDE2KSArXG4gICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgOiBcIlxcXFxcIiArIGU7XG4gICAgICB9LFxuICAgICAgb2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEMoKTtcbiAgICAgIH0sXG4gICAgICBhZSA9IHhlKFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAhMCA9PT0gZS5kaXNhYmxlZCAmJiBcImZpZWxkc2V0XCIgPT09IGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH1cbiAgICAgICk7XG4gICAgdHJ5IHtcbiAgICAgIE8uYXBwbHkoKHQgPSBQLmNhbGwoZC5jaGlsZE5vZGVzKSksIGQuY2hpbGROb2RlcyksXG4gICAgICAgIHRbZC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgTyA9IHtcbiAgICAgICAgYXBwbHk6IHQubGVuZ3RoXG4gICAgICAgICAgPyBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICBxLmFwcGx5KGUsIFAuY2FsbCh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICB2YXIgbiA9IGUubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHIgPSAwO1xuICAgICAgICAgICAgICB3aGlsZSAoKGVbbisrXSA9IHRbcisrXSkpO1xuICAgICAgICAgICAgICBlLmxlbmd0aCA9IG4gLSAxO1xuICAgICAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlKHQsIGUsIG4sIHIpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICBvLFxuICAgICAgICBhLFxuICAgICAgICBzLFxuICAgICAgICB1LFxuICAgICAgICBsLFxuICAgICAgICBjLFxuICAgICAgICBmID0gZSAmJiBlLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIGQgPSBlID8gZS5ub2RlVHlwZSA6IDk7XG4gICAgICBpZiAoXG4gICAgICAgICgobiA9IG4gfHwgW10pLFxuICAgICAgICBcInN0cmluZ1wiICE9IHR5cGVvZiB0IHx8ICF0IHx8ICgxICE9PSBkICYmIDkgIT09IGQgJiYgMTEgIT09IGQpKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gbjtcbiAgICAgIGlmICghciAmJiAoQyhlKSwgKGUgPSBlIHx8IFQpLCBFKSkge1xuICAgICAgICBpZiAoMTEgIT09IGQgJiYgKHUgPSBaLmV4ZWModCkpKVxuICAgICAgICAgIGlmICgoaSA9IHVbMV0pKSB7XG4gICAgICAgICAgICBpZiAoOSA9PT0gZCkge1xuICAgICAgICAgICAgICBpZiAoIShhID0gZS5nZXRFbGVtZW50QnlJZChpKSkpIHJldHVybiBuO1xuICAgICAgICAgICAgICBpZiAoYS5pZCA9PT0gaSkgcmV0dXJuIG4ucHVzaChhKSwgbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZiAmJiAoYSA9IGYuZ2V0RWxlbWVudEJ5SWQoaSkpICYmIHkoZSwgYSkgJiYgYS5pZCA9PT0gaSlcbiAgICAgICAgICAgICAgcmV0dXJuIG4ucHVzaChhKSwgbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHVbMl0pIHJldHVybiBPLmFwcGx5KG4sIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLCBuO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoaSA9IHVbM10pICYmXG4gICAgICAgICAgICAgIHAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJlxuICAgICAgICAgICAgICBlLmdldEVsZW1lbnRzQnlDbGFzc05hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIE8uYXBwbHkobiwgZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSwgbjtcbiAgICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwLnFzYSAmJlxuICAgICAgICAgICFrW3QgKyBcIiBcIl0gJiZcbiAgICAgICAgICAoIXYgfHwgIXYudGVzdCh0KSkgJiZcbiAgICAgICAgICAoMSAhPT0gZCB8fCBcIm9iamVjdFwiICE9PSBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICgoKGMgPSB0KSwgKGYgPSBlKSwgMSA9PT0gZCAmJiAoVS50ZXN0KHQpIHx8IF8udGVzdCh0KSkpKSB7XG4gICAgICAgICAgICAoKGYgPSAoZWUudGVzdCh0KSAmJiB5ZShlLnBhcmVudE5vZGUpKSB8fCBlKSA9PT0gZSAmJiBwLnNjb3BlKSB8fFxuICAgICAgICAgICAgICAoKHMgPSBlLmdldEF0dHJpYnV0ZShcImlkXCIpKVxuICAgICAgICAgICAgICAgID8gKHMgPSBzLnJlcGxhY2UocmUsIGllKSlcbiAgICAgICAgICAgICAgICA6IGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgKHMgPSBBKSkpLFxuICAgICAgICAgICAgICAobyA9IChsID0gaCh0KSkubGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlIChvLS0pIGxbb10gPSAocyA/IFwiI1wiICsgcyA6IFwiOnNjb3BlXCIpICsgXCIgXCIgKyBiZShsW29dKTtcbiAgICAgICAgICAgIGMgPSBsLmpvaW4oXCIsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIE8uYXBwbHkobiwgZi5xdWVyeVNlbGVjdG9yQWxsKGMpKSwgbjtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBrKHQsICEwKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgcyA9PT0gQSAmJiBlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGcodC5yZXBsYWNlKCQsIFwiJDFcIiksIGUsIG4sIHIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1ZSgpIHtcbiAgICAgIHZhciByID0gW107XG4gICAgICByZXR1cm4gZnVuY3Rpb24gZSh0LCBuKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgci5wdXNoKHQgKyBcIiBcIikgPiB4LmNhY2hlTGVuZ3RoICYmIGRlbGV0ZSBlW3Iuc2hpZnQoKV0sXG4gICAgICAgICAgKGVbdCArIFwiIFwiXSA9IG4pXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsZShlKSB7XG4gICAgICByZXR1cm4gKGVbQV0gPSAhMCksIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNlKGUpIHtcbiAgICAgIHZhciB0ID0gVC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFlKHQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0LnBhcmVudE5vZGUgJiYgdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLCAodCA9IG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBmZShlLCB0KSB7XG4gICAgICB2YXIgbiA9IGUuc3BsaXQoXCJ8XCIpLFxuICAgICAgICByID0gbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoci0tKSB4LmF0dHJIYW5kbGVbbltyXV0gPSB0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZShlLCB0KSB7XG4gICAgICB2YXIgbiA9IHQgJiYgZSxcbiAgICAgICAgciA9XG4gICAgICAgICAgbiAmJlxuICAgICAgICAgIDEgPT09IGUubm9kZVR5cGUgJiZcbiAgICAgICAgICAxID09PSB0Lm5vZGVUeXBlICYmXG4gICAgICAgICAgZS5zb3VyY2VJbmRleCAtIHQuc291cmNlSW5kZXg7XG4gICAgICBpZiAocikgcmV0dXJuIHI7XG4gICAgICBpZiAobikgd2hpbGUgKChuID0gbi5uZXh0U2libGluZykpIGlmIChuID09PSB0KSByZXR1cm4gLTE7XG4gICAgICByZXR1cm4gZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGUodCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBcImlucHV0XCIgPT09IGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiBlLnR5cGUgPT09IHQ7XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBoZShuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAoXCJpbnB1dFwiID09PSB0IHx8IFwiYnV0dG9uXCIgPT09IHQpICYmIGUudHlwZSA9PT0gbjtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlKHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJmb3JtXCIgaW4gZVxuICAgICAgICAgID8gZS5wYXJlbnROb2RlICYmICExID09PSBlLmRpc2FibGVkXG4gICAgICAgICAgICA/IFwibGFiZWxcIiBpbiBlXG4gICAgICAgICAgICAgID8gXCJsYWJlbFwiIGluIGUucGFyZW50Tm9kZVxuICAgICAgICAgICAgICAgID8gZS5wYXJlbnROb2RlLmRpc2FibGVkID09PSB0XG4gICAgICAgICAgICAgICAgOiBlLmRpc2FibGVkID09PSB0XG4gICAgICAgICAgICAgIDogZS5pc0Rpc2FibGVkID09PSB0IHx8IChlLmlzRGlzYWJsZWQgIT09ICF0ICYmIGFlKGUpID09PSB0KVxuICAgICAgICAgICAgOiBlLmRpc2FibGVkID09PSB0XG4gICAgICAgICAgOiBcImxhYmVsXCIgaW4gZSAmJiBlLmRpc2FibGVkID09PSB0O1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmUoYSkge1xuICAgICAgcmV0dXJuIGxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKG8gPSArbyksXG4gICAgICAgICAgbGUoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgICByID0gYShbXSwgZS5sZW5ndGgsIG8pLFxuICAgICAgICAgICAgICBpID0gci5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSBlWyhuID0gcltpXSldICYmIChlW25dID0gISh0W25dID0gZVtuXSkpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24geWUoZSkge1xuICAgICAgcmV0dXJuIGUgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSAmJiBlO1xuICAgIH1cbiAgICBmb3IgKGUgaW4gKChwID0gc2Uuc3VwcG9ydCA9IHt9KSxcbiAgICAoaSA9IHNlLmlzWE1MID1cbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gZSAmJiBlLm5hbWVzcGFjZVVSSSxcbiAgICAgICAgICBuID0gZSAmJiAoZS5vd25lckRvY3VtZW50IHx8IGUpLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuICFZLnRlc3QodCB8fCAobiAmJiBuLm5vZGVOYW1lKSB8fCBcIkhUTUxcIik7XG4gICAgICB9KSxcbiAgICAoQyA9IHNlLnNldERvY3VtZW50ID1cbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LFxuICAgICAgICAgIG4sXG4gICAgICAgICAgciA9IGUgPyBlLm93bmVyRG9jdW1lbnQgfHwgZSA6IGQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgciAhPSBUICYmXG4gICAgICAgICAgICA5ID09PSByLm5vZGVUeXBlICYmXG4gICAgICAgICAgICByLmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAgICAgKChhID0gKFQgPSByKS5kb2N1bWVudEVsZW1lbnQpLFxuICAgICAgICAgICAgKEUgPSAhaShUKSksXG4gICAgICAgICAgICBkICE9IFQgJiZcbiAgICAgICAgICAgICAgKG4gPSBULmRlZmF1bHRWaWV3KSAmJlxuICAgICAgICAgICAgICBuLnRvcCAhPT0gbiAmJlxuICAgICAgICAgICAgICAobi5hZGRFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAgICAgPyBuLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgb2UsICExKVxuICAgICAgICAgICAgICAgIDogbi5hdHRhY2hFdmVudCAmJiBuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgb2UpKSxcbiAgICAgICAgICAgIChwLnNjb3BlID0gY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKFQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXG4gICAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsICYmXG4gICAgICAgICAgICAgICAgICAhZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIGZpZWxkc2V0IGRpdlwiKS5sZW5ndGhcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIChwLmNzc0hhcyA9IGNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVC5xdWVyeVNlbGVjdG9yKFwiOmhhcygqLDpqcWZha2UpXCIpLCAhMTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKHAuYXR0cmlidXRlcyA9IGNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoZS5jbGFzc05hbWUgPSBcImlcIiksICFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKTtcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIChwLmdldEVsZW1lbnRzQnlUYWdOYW1lID0gY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlLmFwcGVuZENoaWxkKFQuY3JlYXRlQ29tbWVudChcIlwiKSksXG4gICAgICAgICAgICAgICAgIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKHAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IEoudGVzdChULmdldEVsZW1lbnRzQnlDbGFzc05hbWUpKSxcbiAgICAgICAgICAgIChwLmdldEJ5SWQgPSBjZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChhLmFwcGVuZENoaWxkKGUpLmlkID0gQSksXG4gICAgICAgICAgICAgICAgIVQuZ2V0RWxlbWVudHNCeU5hbWUgfHwgIVQuZ2V0RWxlbWVudHNCeU5hbWUoQSkubGVuZ3RoXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBwLmdldEJ5SWRcbiAgICAgICAgICAgICAgPyAoKHguZmlsdGVyLklEID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5yZXBsYWNlKHRlLCBuZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IHQ7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICh4LmZpbmQuSUQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQgJiYgRSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQuZ2V0RWxlbWVudEJ5SWQoZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuID8gW25dIDogW107XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIDogKCh4LmZpbHRlci5JRCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IGUucmVwbGFjZSh0ZSwgbmUpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID1cbiAgICAgICAgICAgICAgICAgICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICBlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgJiYgdC52YWx1ZSA9PT0gbjtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKHguZmluZC5JRCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdC5nZXRFbGVtZW50QnlJZCAmJiBFKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICBvID0gdC5nZXRFbGVtZW50QnlJZChlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKG4gPSBvLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkgJiYgbi52YWx1ZSA9PT0gZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbb107XG4gICAgICAgICAgICAgICAgICAgICAgKGkgPSB0LmdldEVsZW1lbnRzQnlOYW1lKGUpKSwgKHIgPSAwKTtcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG8gPSBpW3IrK10pKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChuID0gby5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpICYmIG4udmFsdWUgPT09IGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbb107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICh4LmZpbmQuVEFHID0gcC5nZXRFbGVtZW50c0J5VGFnTmFtZVxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZVxuICAgICAgICAgICAgICAgICAgICA/IHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSlcbiAgICAgICAgICAgICAgICAgICAgOiBwLnFzYVxuICAgICAgICAgICAgICAgICAgICA/IHQucXVlcnlTZWxlY3RvckFsbChlKVxuICAgICAgICAgICAgICAgICAgICA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgICAgICAgICByID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBvID0gdC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChcIipcIiA9PT0gZSkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG4gPSBvW2krK10pKSAxID09PSBuLm5vZGVUeXBlICYmIHIucHVzaChuKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICh4LmZpbmQuQ0xBU1MgPVxuICAgICAgICAgICAgICBwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiZcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIEUpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIChzID0gW10pLFxuICAgICAgICAgICAgKHYgPSBbXSksXG4gICAgICAgICAgICAocC5xc2EgPSBKLnRlc3QoVC5xdWVyeVNlbGVjdG9yQWxsKSkgJiZcbiAgICAgICAgICAgICAgKGNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgKGEuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgIFwiPGEgaWQ9J1wiICtcbiAgICAgICAgICAgICAgICAgIEEgK1xuICAgICAgICAgICAgICAgICAgXCInPjwvYT48c2VsZWN0IGlkPSdcIiArXG4gICAgICAgICAgICAgICAgICBBICtcbiAgICAgICAgICAgICAgICAgIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIpLFxuICAgICAgICAgICAgICAgICAgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIHYucHVzaChcIlsqXiRdPVwiICsgUiArIFwiKig/OicnfFxcXCJcXFwiKVwiKSxcbiAgICAgICAgICAgICAgICAgIGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgIHYucHVzaChcIlxcXFxbXCIgKyBSICsgXCIqKD86dmFsdWV8XCIgKyBJICsgXCIpXCIpLFxuICAgICAgICAgICAgICAgICAgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIiArIEEgKyBcIi1dXCIpLmxlbmd0aCB8fCB2LnB1c2goXCJ+PVwiKSxcbiAgICAgICAgICAgICAgICAgICh0ID0gVC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJcIiksXG4gICAgICAgICAgICAgICAgICBlLmFwcGVuZENoaWxkKHQpLFxuICAgICAgICAgICAgICAgICAgZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9JyddXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICB2LnB1c2goXCJcXFxcW1wiICsgUiArIFwiKm5hbWVcIiArIFIgKyBcIio9XCIgKyBSICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIpLFxuICAgICAgICAgICAgICAgICAgZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoIHx8IHYucHVzaChcIjpjaGVja2VkXCIpLFxuICAgICAgICAgICAgICAgICAgZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIiArIEEgKyBcIisqXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICB2LnB1c2goXCIuIy4rWyt+XVwiKSxcbiAgICAgICAgICAgICAgICAgIGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIiksXG4gICAgICAgICAgICAgICAgICB2LnB1c2goXCJbXFxcXHJcXFxcblxcXFxmXVwiKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IFQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKSxcbiAgICAgICAgICAgICAgICAgIGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkRcIiksXG4gICAgICAgICAgICAgICAgICBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgdi5wdXNoKFwibmFtZVwiICsgUiArIFwiKlsqXiR8IX5dPz1cIiksXG4gICAgICAgICAgICAgICAgICAyICE9PSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgdi5wdXNoKFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiksXG4gICAgICAgICAgICAgICAgICAoYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgIDIgIT09IGUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgdi5wdXNoKFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiksXG4gICAgICAgICAgICAgICAgICBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLFxuICAgICAgICAgICAgICAgICAgdi5wdXNoKFwiLC4qOlwiKTtcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKHAubWF0Y2hlc1NlbGVjdG9yID0gSi50ZXN0KFxuICAgICAgICAgICAgICAoYyA9XG4gICAgICAgICAgICAgICAgYS5tYXRjaGVzIHx8XG4gICAgICAgICAgICAgICAgYS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICBhLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgIGEub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgIGEubXNNYXRjaGVzU2VsZWN0b3IpXG4gICAgICAgICAgICApKSAmJlxuICAgICAgICAgICAgICBjZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIChwLmRpc2Nvbm5lY3RlZE1hdGNoID0gYy5jYWxsKGUsIFwiKlwiKSksXG4gICAgICAgICAgICAgICAgICBjLmNhbGwoZSwgXCJbcyE9JyddOnhcIiksXG4gICAgICAgICAgICAgICAgICBzLnB1c2goXCIhPVwiLCBXKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwLmNzc0hhcyB8fCB2LnB1c2goXCI6aGFzXCIpLFxuICAgICAgICAgICAgKHYgPSB2Lmxlbmd0aCAmJiBuZXcgUmVnRXhwKHYuam9pbihcInxcIikpKSxcbiAgICAgICAgICAgIChzID0gcy5sZW5ndGggJiYgbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSksXG4gICAgICAgICAgICAodCA9IEoudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSksXG4gICAgICAgICAgICAoeSA9XG4gICAgICAgICAgICAgIHQgfHwgSi50ZXN0KGEuY29udGFpbnMpXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9ICg5ID09PSBlLm5vZGVUeXBlICYmIGUuZG9jdW1lbnRFbGVtZW50KSB8fCBlLFxuICAgICAgICAgICAgICAgICAgICAgIHIgPSB0ICYmIHQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICBlID09PSByIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICFyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAxICE9PSByLm5vZGVUeXBlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhKG4uY29udGFpbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuLmNvbnRhaW5zKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE2ICYgZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCkgd2hpbGUgKCh0ID0gdC5wYXJlbnROb2RlKSkgaWYgKHQgPT09IGUpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAoRCA9IHRcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGUgPT09IHQpIHJldHVybiAobCA9ICEwKSwgMDtcbiAgICAgICAgICAgICAgICAgIHZhciBuID1cbiAgICAgICAgICAgICAgICAgICAgIWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIG4gfHxcbiAgICAgICAgICAgICAgICAgICAgKDEgJlxuICAgICAgICAgICAgICAgICAgICAgIChuID1cbiAgICAgICAgICAgICAgICAgICAgICAgIChlLm93bmVyRG9jdW1lbnQgfHwgZSkgPT0gKHQub3duZXJEb2N1bWVudCB8fCB0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24odClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxKSB8fFxuICAgICAgICAgICAgICAgICAgICAoIXAuc29ydERldGFjaGVkICYmIHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSkgPT09IG4pXG4gICAgICAgICAgICAgICAgICAgICAgPyBlID09IFQgfHwgKGUub3duZXJEb2N1bWVudCA9PSBkICYmIHkoZCwgZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHQgPT0gVCB8fCAodC5vd25lckRvY3VtZW50ID09IGQgJiYgeShkLCB0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1XG4gICAgICAgICAgICAgICAgICAgICAgICA/IEgodSwgZSkgLSBIKHUsIHQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgICAgICAgICA6IDQgJiBuXG4gICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgIDogMSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZSA9PT0gdCkgcmV0dXJuIChsID0gITApLCAwO1xuICAgICAgICAgICAgICAgICAgdmFyIG4sXG4gICAgICAgICAgICAgICAgICAgIHIgPSAwLFxuICAgICAgICAgICAgICAgICAgICBpID0gZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICBvID0gdC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICBhID0gW2VdLFxuICAgICAgICAgICAgICAgICAgICBzID0gW3RdO1xuICAgICAgICAgICAgICAgICAgaWYgKCFpIHx8ICFvKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9PSBUXG4gICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgIDogdCA9PSBUXG4gICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgOiBpXG4gICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgIDogb1xuICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgIDogdVxuICAgICAgICAgICAgICAgICAgICAgID8gSCh1LCBlKSAtIEgodSwgdClcbiAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gbykgcmV0dXJuIGRlKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgbiA9IGU7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoKG4gPSBuLnBhcmVudE5vZGUpKSBhLnVuc2hpZnQobik7XG4gICAgICAgICAgICAgICAgICBuID0gdDtcbiAgICAgICAgICAgICAgICAgIHdoaWxlICgobiA9IG4ucGFyZW50Tm9kZSkpIHMudW5zaGlmdChuKTtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChhW3JdID09PSBzW3JdKSByKys7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gclxuICAgICAgICAgICAgICAgICAgICA/IGRlKGFbcl0sIHNbcl0pXG4gICAgICAgICAgICAgICAgICAgIDogYVtyXSA9PSBkXG4gICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgOiBzW3JdID09IGRcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgVFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgKHNlLm1hdGNoZXMgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIHNlKGUsIG51bGwsIG51bGwsIHQpO1xuICAgIH0pLFxuICAgIChzZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKFxuICAgICAgICAoQyhlKSxcbiAgICAgICAgcC5tYXRjaGVzU2VsZWN0b3IgJiZcbiAgICAgICAgICBFICYmXG4gICAgICAgICAgIWtbdCArIFwiIFwiXSAmJlxuICAgICAgICAgICghcyB8fCAhcy50ZXN0KHQpKSAmJlxuICAgICAgICAgICghdiB8fCAhdi50ZXN0KHQpKSlcbiAgICAgIClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgbiA9IGMuY2FsbChlLCB0KTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBuIHx8XG4gICAgICAgICAgICBwLmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG4gICAgICAgICAgICAoZS5kb2N1bWVudCAmJiAxMSAhPT0gZS5kb2N1bWVudC5ub2RlVHlwZSlcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGsodCwgITApO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gMCA8IHNlKHQsIFQsIG51bGwsIFtlXSkubGVuZ3RoO1xuICAgIH0pLFxuICAgIChzZS5jb250YWlucyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gKGUub3duZXJEb2N1bWVudCB8fCBlKSAhPSBUICYmIEMoZSksIHkoZSwgdCk7XG4gICAgfSksXG4gICAgKHNlLmF0dHIgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgKGUub3duZXJEb2N1bWVudCB8fCBlKSAhPSBUICYmIEMoZSk7XG4gICAgICB2YXIgbiA9IHguYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLFxuICAgICAgICByID0gbiAmJiBMLmNhbGwoeC5hdHRySGFuZGxlLCB0LnRvTG93ZXJDYXNlKCkpID8gbihlLCB0LCAhRSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSByXG4gICAgICAgID8gclxuICAgICAgICA6IHAuYXR0cmlidXRlcyB8fCAhRVxuICAgICAgICA/IGUuZ2V0QXR0cmlidXRlKHQpXG4gICAgICAgIDogKHIgPSBlLmdldEF0dHJpYnV0ZU5vZGUodCkpICYmIHIuc3BlY2lmaWVkXG4gICAgICAgID8gci52YWx1ZVxuICAgICAgICA6IG51bGw7XG4gICAgfSksXG4gICAgKHNlLmVzY2FwZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gKGUgKyBcIlwiKS5yZXBsYWNlKHJlLCBpZSk7XG4gICAgfSksXG4gICAgKHNlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiICsgZSk7XG4gICAgfSksXG4gICAgKHNlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQsXG4gICAgICAgIG4gPSBbXSxcbiAgICAgICAgciA9IDAsXG4gICAgICAgIGkgPSAwO1xuICAgICAgaWYgKFxuICAgICAgICAoKGwgPSAhcC5kZXRlY3REdXBsaWNhdGVzKSxcbiAgICAgICAgKHUgPSAhcC5zb3J0U3RhYmxlICYmIGUuc2xpY2UoMCkpLFxuICAgICAgICBlLnNvcnQoRCksXG4gICAgICAgIGwpXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKCh0ID0gZVtpKytdKSkgdCA9PT0gZVtpXSAmJiAociA9IG4ucHVzaChpKSk7XG4gICAgICAgIHdoaWxlIChyLS0pIGUuc3BsaWNlKG5bcl0sIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh1ID0gbnVsbCksIGU7XG4gICAgfSksXG4gICAgKG8gPSBzZS5nZXRUZXh0ID1cbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LFxuICAgICAgICAgIG4gPSBcIlwiLFxuICAgICAgICAgIHIgPSAwLFxuICAgICAgICAgIGkgPSBlLm5vZGVUeXBlO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIGlmICgxID09PSBpIHx8IDkgPT09IGkgfHwgMTEgPT09IGkpIHtcbiAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlLnRleHRDb250ZW50KSByZXR1cm4gZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGZvciAoZSA9IGUuZmlyc3RDaGlsZDsgZTsgZSA9IGUubmV4dFNpYmxpbmcpIG4gKz0gbyhlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKDMgPT09IGkgfHwgNCA9PT0gaSkgcmV0dXJuIGUubm9kZVZhbHVlO1xuICAgICAgICB9IGVsc2Ugd2hpbGUgKCh0ID0gZVtyKytdKSkgbiArPSBvKHQpO1xuICAgICAgICByZXR1cm4gbjtcbiAgICAgIH0pLFxuICAgICgoeCA9IHNlLnNlbGVjdG9ycyA9XG4gICAgICB7XG4gICAgICAgIGNhY2hlTGVuZ3RoOiA1MCxcbiAgICAgICAgY3JlYXRlUHNldWRvOiBsZSxcbiAgICAgICAgbWF0Y2g6IFEsXG4gICAgICAgIGF0dHJIYW5kbGU6IHt9LFxuICAgICAgICBmaW5kOiB7fSxcbiAgICAgICAgcmVsYXRpdmU6IHtcbiAgICAgICAgICBcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogITAgfSxcbiAgICAgICAgICBcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG4gICAgICAgICAgXCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogITAgfSxcbiAgICAgICAgICBcIn5cIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlRmlsdGVyOiB7XG4gICAgICAgICAgQVRUUjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIChlWzFdID0gZVsxXS5yZXBsYWNlKHRlLCBuZSkpLFxuICAgICAgICAgICAgICAoZVszXSA9IChlWzNdIHx8IGVbNF0gfHwgZVs1XSB8fCBcIlwiKS5yZXBsYWNlKHRlLCBuZSkpLFxuICAgICAgICAgICAgICBcIn49XCIgPT09IGVbMl0gJiYgKGVbM10gPSBcIiBcIiArIGVbM10gKyBcIiBcIiksXG4gICAgICAgICAgICAgIGUuc2xpY2UoMCwgNClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBDSElMRDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIChlWzFdID0gZVsxXS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgXCJudGhcIiA9PT0gZVsxXS5zbGljZSgwLCAzKVxuICAgICAgICAgICAgICAgID8gKGVbM10gfHwgc2UuZXJyb3IoZVswXSksXG4gICAgICAgICAgICAgICAgICAoZVs0XSA9ICsoZVs0XVxuICAgICAgICAgICAgICAgICAgICA/IGVbNV0gKyAoZVs2XSB8fCAxKVxuICAgICAgICAgICAgICAgICAgICA6IDIgKiAoXCJldmVuXCIgPT09IGVbM10gfHwgXCJvZGRcIiA9PT0gZVszXSkpKSxcbiAgICAgICAgICAgICAgICAgIChlWzVdID0gKyhlWzddICsgZVs4XSB8fCBcIm9kZFwiID09PSBlWzNdKSkpXG4gICAgICAgICAgICAgICAgOiBlWzNdICYmIHNlLmVycm9yKGVbMF0pLFxuICAgICAgICAgICAgICBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgUFNFVURPOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICAgIG4gPSAhZVs2XSAmJiBlWzJdO1xuICAgICAgICAgICAgcmV0dXJuIFEuQ0hJTEQudGVzdChlWzBdKVxuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiAoZVszXVxuICAgICAgICAgICAgICAgICAgPyAoZVsyXSA9IGVbNF0gfHwgZVs1XSB8fCBcIlwiKVxuICAgICAgICAgICAgICAgICAgOiBuICYmXG4gICAgICAgICAgICAgICAgICAgIFYudGVzdChuKSAmJlxuICAgICAgICAgICAgICAgICAgICAodCA9IGgobiwgITApKSAmJlxuICAgICAgICAgICAgICAgICAgICAodCA9IG4uaW5kZXhPZihcIilcIiwgbi5sZW5ndGggLSB0KSAtIG4ubGVuZ3RoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoKGVbMF0gPSBlWzBdLnNsaWNlKDAsIHQpKSwgKGVbMl0gPSBuLnNsaWNlKDAsIHQpKSksXG4gICAgICAgICAgICAgICAgZS5zbGljZSgwLCAzKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgVEFHOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLnJlcGxhY2UodGUsIG5lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiKlwiID09PSBlXG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubm9kZU5hbWUgJiYgZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBDTEFTUzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gbVtlICsgXCIgXCJdO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdCB8fFxuICAgICAgICAgICAgICAoKHQgPSBuZXcgUmVnRXhwKFwiKF58XCIgKyBSICsgXCIpXCIgKyBlICsgXCIoXCIgKyBSICsgXCJ8JClcIikpICYmXG4gICAgICAgICAgICAgICAgbShlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHQudGVzdChcbiAgICAgICAgICAgICAgICAgICAgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUuY2xhc3NOYW1lICYmIGUuY2xhc3NOYW1lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBlLmdldEF0dHJpYnV0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIEFUVFI6IGZ1bmN0aW9uIChuLCByLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBzZS5hdHRyKGUsIG4pO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PSB0XG4gICAgICAgICAgICAgICAgPyBcIiE9XCIgPT09IHJcbiAgICAgICAgICAgICAgICA6ICFyIHx8XG4gICAgICAgICAgICAgICAgICAgICgodCArPSBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCI9XCIgPT09IHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHQgPT09IGlcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiIT1cIiA9PT0gclxuICAgICAgICAgICAgICAgICAgICAgID8gdCAhPT0gaVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJePVwiID09PSByXG4gICAgICAgICAgICAgICAgICAgICAgPyBpICYmIDAgPT09IHQuaW5kZXhPZihpKVxuICAgICAgICAgICAgICAgICAgICAgIDogXCIqPVwiID09PSByXG4gICAgICAgICAgICAgICAgICAgICAgPyBpICYmIC0xIDwgdC5pbmRleE9mKGkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIiQ9XCIgPT09IHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGkgJiYgdC5zbGljZSgtaS5sZW5ndGgpID09PSBpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIn49XCIgPT09IHJcbiAgICAgICAgICAgICAgICAgICAgICA/IC0xIDwgKFwiIFwiICsgdC5yZXBsYWNlKEYsIFwiIFwiKSArIFwiIFwiKS5pbmRleE9mKGkpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInw9XCIgPT09IHIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0ID09PSBpIHx8IHQuc2xpY2UoMCwgaS5sZW5ndGggKyAxKSA9PT0gaSArIFwiLVwiKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgQ0hJTEQ6IGZ1bmN0aW9uIChoLCBlLCB0LCBnLCB2KSB7XG4gICAgICAgICAgICB2YXIgeSA9IFwibnRoXCIgIT09IGguc2xpY2UoMCwgMyksXG4gICAgICAgICAgICAgIG0gPSBcImxhc3RcIiAhPT0gaC5zbGljZSgtNCksXG4gICAgICAgICAgICAgIGIgPSBcIm9mLXR5cGVcIiA9PT0gZTtcbiAgICAgICAgICAgIHJldHVybiAxID09PSBnICYmIDAgPT09IHZcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgdmFyIHIsXG4gICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgICAgIHUsXG4gICAgICAgICAgICAgICAgICAgIGwgPSB5ICE9PSBtID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgYyA9IGUucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgJiYgZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICBkID0gIW4gJiYgIWIsXG4gICAgICAgICAgICAgICAgICAgIHAgPSAhMTtcbiAgICAgICAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChhID0gYVtsXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxID09PSBhLm5vZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB1ID0gbCA9IFwib25seVwiID09PSBoICYmICF1ICYmIFwibmV4dFNpYmxpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKHUgPSBbbSA/IGMuZmlyc3RDaGlsZCA6IGMubGFzdENoaWxkXSksIG0gJiYgZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAocCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAocyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobyA9IChhID0gYylbQV0gfHwgKGFbQV0gPSB7fSkpW2EudW5pcXVlSURdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob1thLnVuaXF1ZUlEXSA9IHt9KSlbaF0gfHwgW10pWzBdID09PSBOICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJbMV0pICYmIHJbMl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSBzICYmIGMuY2hpbGROb2Rlc1tzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChhID0gKCsrcyAmJiBhICYmIGFbbF0pIHx8IChwID0gcyA9IDApIHx8IHUucG9wKCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IGEubm9kZVR5cGUgJiYgKytwICYmIGEgPT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaVtoXSA9IFtOLCBzLCBwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgKGQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChwID0gcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobyA9IChhID0gZSlbQV0gfHwgKGFbQV0gPSB7fSkpW2EudW5pcXVlSURdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob1thLnVuaXF1ZUlEXSA9IHt9KSlbaF0gfHwgW10pWzBdID09PSBOICYmIHJbMV0pLFxuICAgICAgICAgICAgICAgICAgICAgICExID09PSBwKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChhID0gKCsrcyAmJiBhICYmIGFbbF0pIHx8IChwID0gcyA9IDApIHx8IHUucG9wKCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxID09PSBhLm5vZGVUeXBlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICArK3AgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8gPSBhW0FdIHx8IChhW0FdID0ge30pKVthLnVuaXF1ZUlEXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9bYS51bmlxdWVJRF0gPSB7fSkpW2hdID0gW04sIHBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9PT0gZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocCAtPSB2KSA9PT0gZyB8fCAocCAlIGcgPT0gMCAmJiAwIDw9IHAgLyBnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgUFNFVURPOiBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICAgIGEgPVxuICAgICAgICAgICAgICAgIHgucHNldWRvc1tlXSB8fFxuICAgICAgICAgICAgICAgIHguc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldIHx8XG4gICAgICAgICAgICAgICAgc2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgZSk7XG4gICAgICAgICAgICByZXR1cm4gYVtBXVxuICAgICAgICAgICAgICA/IGEobylcbiAgICAgICAgICAgICAgOiAxIDwgYS5sZW5ndGhcbiAgICAgICAgICAgICAgPyAoKHQgPSBbZSwgZSwgXCJcIiwgb10pLFxuICAgICAgICAgICAgICAgIHguc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICA/IGxlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG4sXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gYShlLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSByLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSBlWyhuID0gSChlLCByW2ldKSldID0gISh0W25dID0gcltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEoZSwgMCwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogYTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwc2V1ZG9zOiB7XG4gICAgICAgICAgbm90OiBsZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHIgPSBbXSxcbiAgICAgICAgICAgICAgaSA9IFtdLFxuICAgICAgICAgICAgICBzID0gZihlLnJlcGxhY2UoJCwgXCIkMVwiKSk7XG4gICAgICAgICAgICByZXR1cm4gc1tBXVxuICAgICAgICAgICAgICA/IGxlKGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgICAgICAgbyA9IHMoZSwgbnVsbCwgciwgW10pLFxuICAgICAgICAgICAgICAgICAgICBhID0gZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoYS0tKSAoaSA9IG9bYV0pICYmIChlW2FdID0gISh0W2FdID0gaSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoclswXSA9IGUpLCBzKHIsIG51bGwsIG4sIGkpLCAoclswXSA9IG51bGwpLCAhaS5wb3AoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhhczogbGUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gMCA8IHNlKHQsIGUpLmxlbmd0aDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29udGFpbnM6IGxlKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAodCA9IHQucmVwbGFjZSh0ZSwgbmUpKSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgPCAoZS50ZXh0Q29udGVudCB8fCBvKGUpKS5pbmRleE9mKHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhbmc6IGxlKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBYLnRlc3QobiB8fCBcIlwiKSB8fCBzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbiksXG4gICAgICAgICAgICAgIChuID0gbi5yZXBsYWNlKHRlLCBuZSkudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAodCA9IEVcbiAgICAgICAgICAgICAgICAgICAgICA/IGUubGFuZ1xuICAgICAgICAgICAgICAgICAgICAgIDogZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcImxhbmdcIikpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgKHQgPSB0LnRvTG93ZXJDYXNlKCkpID09PSBuIHx8IDAgPT09IHQuaW5kZXhPZihuICsgXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoKGUgPSBlLnBhcmVudE5vZGUpICYmIDEgPT09IGUubm9kZVR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0YXJnZXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IG4ubG9jYXRpb24gJiYgbi5sb2NhdGlvbi5oYXNoO1xuICAgICAgICAgICAgcmV0dXJuIHQgJiYgdC5zbGljZSgxKSA9PT0gZS5pZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJvb3Q6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gYTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZSA9PT0gVC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgICAgICghVC5oYXNGb2N1cyB8fCBULmhhc0ZvY3VzKCkpICYmXG4gICAgICAgICAgICAgICEhKGUudHlwZSB8fCBlLmhyZWYgfHwgfmUudGFiSW5kZXgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5hYmxlZDogZ2UoITEpLFxuICAgICAgICAgIGRpc2FibGVkOiBnZSghMCksXG4gICAgICAgICAgY2hlY2tlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgKFwiaW5wdXRcIiA9PT0gdCAmJiAhIWUuY2hlY2tlZCkgfHwgKFwib3B0aW9uXCIgPT09IHQgJiYgISFlLnNlbGVjdGVkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZS5wYXJlbnROb2RlICYmIGUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCAhMCA9PT0gZS5zZWxlY3RlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yIChlID0gZS5maXJzdENoaWxkOyBlOyBlID0gZS5uZXh0U2libGluZylcbiAgICAgICAgICAgICAgaWYgKGUubm9kZVR5cGUgPCA2KSByZXR1cm4gITE7XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gIXgucHNldWRvcy5lbXB0eShlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBLLnRlc3QoZS5ub2RlTmFtZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBHLnRlc3QoZS5ub2RlTmFtZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBidXR0b246IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiAoXCJpbnB1dFwiID09PSB0ICYmIFwiYnV0dG9uXCIgPT09IGUudHlwZSkgfHwgXCJidXR0b25cIiA9PT0gdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFwiaW5wdXRcIiA9PT0gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgICAgICAgIFwidGV4dFwiID09PSBlLnR5cGUgJiZcbiAgICAgICAgICAgICAgKG51bGwgPT0gKHQgPSBlLmdldEF0dHJpYnV0ZShcInR5cGVcIikpIHx8XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIgPT09IHQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaXJzdDogdmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFswXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0OiB2ZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIFt0IC0gMV07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZXE6IHZlKGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgICByZXR1cm4gW24gPCAwID8gbiArIHQgOiBuXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBldmVuOiB2ZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0OyBuICs9IDIpIGUucHVzaChuKTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9kZDogdmUoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAxOyBuIDwgdDsgbiArPSAyKSBlLnB1c2gobik7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsdDogdmUoZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSBuIDwgMCA/IG4gKyB0IDogdCA8IG4gPyB0IDogbjsgMCA8PSAtLXI7ICkgZS5wdXNoKHIpO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZ3Q6IHZlKGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gbiA8IDAgPyBuICsgdCA6IG47ICsrciA8IHQ7ICkgZS5wdXNoKHIpO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICB9KS5wc2V1ZG9zLm50aCA9IHgucHNldWRvcy5lcSksXG4gICAgeyByYWRpbzogITAsIGNoZWNrYm94OiAhMCwgZmlsZTogITAsIHBhc3N3b3JkOiAhMCwgaW1hZ2U6ICEwIH0pKVxuICAgICAgeC5wc2V1ZG9zW2VdID0gcGUoZSk7XG4gICAgZm9yIChlIGluIHsgc3VibWl0OiAhMCwgcmVzZXQ6ICEwIH0pIHgucHNldWRvc1tlXSA9IGhlKGUpO1xuICAgIGZ1bmN0aW9uIG1lKCkge31cbiAgICBmdW5jdGlvbiBiZShlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMCwgbiA9IGUubGVuZ3RoLCByID0gXCJcIjsgdCA8IG47IHQrKykgciArPSBlW3RdLnZhbHVlO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHhlKHMsIGUsIHQpIHtcbiAgICAgIHZhciB1ID0gZS5kaXIsXG4gICAgICAgIGwgPSBlLm5leHQsXG4gICAgICAgIGMgPSBsIHx8IHUsXG4gICAgICAgIGYgPSB0ICYmIFwicGFyZW50Tm9kZVwiID09PSBjLFxuICAgICAgICBkID0gcisrO1xuICAgICAgcmV0dXJuIGUuZmlyc3RcbiAgICAgICAgPyBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgd2hpbGUgKChlID0gZVt1XSkpIGlmICgxID09PSBlLm5vZGVUeXBlIHx8IGYpIHJldHVybiBzKGUsIHQsIG4pO1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgdmFyIHIsXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgIGEgPSBbTiwgZF07XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICB3aGlsZSAoKGUgPSBlW3VdKSlcbiAgICAgICAgICAgICAgICBpZiAoKDEgPT09IGUubm9kZVR5cGUgfHwgZikgJiYgcyhlLCB0LCBuKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgIHdoaWxlICgoZSA9IGVbdV0pKVxuICAgICAgICAgICAgICAgIGlmICgxID09PSBlLm5vZGVUeXBlIHx8IGYpXG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICgoaSA9XG4gICAgICAgICAgICAgICAgICAgICAgKG8gPSBlW0FdIHx8IChlW0FdID0ge30pKVtlLnVuaXF1ZUlEXSB8fFxuICAgICAgICAgICAgICAgICAgICAgIChvW2UudW5pcXVlSURdID0ge30pKSxcbiAgICAgICAgICAgICAgICAgICAgbCAmJiBsID09PSBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGUgPSBlW3VdIHx8IGU7XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyID0gaVtjXSkgJiYgclswXSA9PT0gTiAmJiByWzFdID09PSBkKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYVsyXSA9IHJbMl0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChpW2NdID0gYSlbMl0gPSBzKGUsIHQsIG4pKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdlKGkpIHtcbiAgICAgIHJldHVybiAxIDwgaS5sZW5ndGhcbiAgICAgICAgPyBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgdmFyIHIgPSBpLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChyLS0pIGlmICghaVtyXShlLCB0LCBuKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgIH1cbiAgICAgICAgOiBpWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDZShlLCB0LCBuLCByLCBpKSB7XG4gICAgICBmb3IgKHZhciBvLCBhID0gW10sIHMgPSAwLCB1ID0gZS5sZW5ndGgsIGwgPSBudWxsICE9IHQ7IHMgPCB1OyBzKyspXG4gICAgICAgIChvID0gZVtzXSkgJiYgKChuICYmICFuKG8sIHIsIGkpKSB8fCAoYS5wdXNoKG8pLCBsICYmIHQucHVzaChzKSkpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRlKHAsIGgsIGcsIHYsIHksIGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHYgJiYgIXZbQV0gJiYgKHYgPSBUZSh2KSksXG4gICAgICAgIHkgJiYgIXlbQV0gJiYgKHkgPSBUZSh5LCBlKSksXG4gICAgICAgIGxlKGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBvLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHMgPSBbXSxcbiAgICAgICAgICAgIHUgPSBbXSxcbiAgICAgICAgICAgIGwgPSB0Lmxlbmd0aCxcbiAgICAgICAgICAgIGMgPVxuICAgICAgICAgICAgICBlIHx8XG4gICAgICAgICAgICAgIChmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gdC5sZW5ndGg7IHIgPCBpOyByKyspIHNlKGUsIHRbcl0sIG4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICB9KShoIHx8IFwiKlwiLCBuLm5vZGVUeXBlID8gW25dIDogbiwgW10pLFxuICAgICAgICAgICAgZiA9ICFwIHx8ICghZSAmJiBoKSA/IGMgOiBDZShjLCBzLCBwLCBuLCByKSxcbiAgICAgICAgICAgIGQgPSBnID8gKHkgfHwgKGUgPyBwIDogbCB8fCB2KSA/IFtdIDogdCkgOiBmO1xuICAgICAgICAgIGlmICgoZyAmJiBnKGYsIGQsIG4sIHIpLCB2KSkge1xuICAgICAgICAgICAgKGkgPSBDZShkLCB1KSksIHYoaSwgW10sIG4sIHIpLCAobyA9IGkubGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlIChvLS0pIChhID0gaVtvXSkgJiYgKGRbdVtvXV0gPSAhKGZbdVtvXV0gPSBhKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBpZiAoeSB8fCBwKSB7XG4gICAgICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICAgICAgKGkgPSBbXSksIChvID0gZC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvLS0pIChhID0gZFtvXSkgJiYgaS5wdXNoKChmW29dID0gYSkpO1xuICAgICAgICAgICAgICAgIHkobnVsbCwgKGQgPSBbXSksIGksIHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG8gPSBkLmxlbmd0aDtcbiAgICAgICAgICAgICAgd2hpbGUgKG8tLSlcbiAgICAgICAgICAgICAgICAoYSA9IGRbb10pICYmXG4gICAgICAgICAgICAgICAgICAtMSA8IChpID0geSA/IEgoZSwgYSkgOiBzW29dKSAmJlxuICAgICAgICAgICAgICAgICAgKGVbaV0gPSAhKHRbaV0gPSBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIChkID0gQ2UoZCA9PT0gdCA/IGQuc3BsaWNlKGwsIGQubGVuZ3RoKSA6IGQpKSwgeSA/IHkobnVsbCwgdCwgZCwgcikgOiBPLmFwcGx5KHQsIGQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRWUoZSkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgdCxcbiAgICAgICAgICBuLFxuICAgICAgICAgIHIgPSBlLmxlbmd0aCxcbiAgICAgICAgICBvID0geC5yZWxhdGl2ZVtlWzBdLnR5cGVdLFxuICAgICAgICAgIGEgPSBvIHx8IHgucmVsYXRpdmVbXCIgXCJdLFxuICAgICAgICAgIHMgPSBvID8gMSA6IDAsXG4gICAgICAgICAgdSA9IHhlKFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUgPT09IGk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICEwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBsID0geGUoXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gLTEgPCBIKGksIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAhMFxuICAgICAgICAgICksXG4gICAgICAgICAgYyA9IFtcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgICAgIHZhciByID1cbiAgICAgICAgICAgICAgICAoIW8gJiYgKG4gfHwgdCAhPT0gdykpIHx8XG4gICAgICAgICAgICAgICAgKChpID0gdCkubm9kZVR5cGUgPyB1KGUsIHQsIG4pIDogbChlLCB0LCBuKSk7XG4gICAgICAgICAgICAgIHJldHVybiAoaSA9IG51bGwpLCByO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdO1xuICAgICAgICBzIDwgcjtcbiAgICAgICAgcysrXG4gICAgICApXG4gICAgICAgIGlmICgodCA9IHgucmVsYXRpdmVbZVtzXS50eXBlXSkpIGMgPSBbeGUod2UoYyksIHQpXTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKCh0ID0geC5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLCBlW3NdLm1hdGNoZXMpKVtBXSkge1xuICAgICAgICAgICAgZm9yIChuID0gKytzOyBuIDwgcjsgbisrKSBpZiAoeC5yZWxhdGl2ZVtlW25dLnR5cGVdKSBicmVhaztcbiAgICAgICAgICAgIHJldHVybiBUZShcbiAgICAgICAgICAgICAgMSA8IHMgJiYgd2UoYyksXG4gICAgICAgICAgICAgIDEgPCBzICYmXG4gICAgICAgICAgICAgICAgYmUoXG4gICAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBzIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh7IHZhbHVlOiBcIiBcIiA9PT0gZVtzIC0gMl0udHlwZSA/IFwiKlwiIDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICkucmVwbGFjZSgkLCBcIiQxXCIpLFxuICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICBzIDwgbiAmJiBFZShlLnNsaWNlKHMsIG4pKSxcbiAgICAgICAgICAgICAgbiA8IHIgJiYgRWUoKGUgPSBlLnNsaWNlKG4pKSksXG4gICAgICAgICAgICAgIG4gPCByICYmIGJlKGUpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjLnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIHJldHVybiB3ZShjKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIChtZS5wcm90b3R5cGUgPSB4LmZpbHRlcnMgPSB4LnBzZXVkb3MpLFxuICAgICAgKHguc2V0RmlsdGVycyA9IG5ldyBtZSgpKSxcbiAgICAgIChoID0gc2UudG9rZW5pemUgPVxuICAgICAgICBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBvLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICB1LFxuICAgICAgICAgICAgbCA9IGJbZSArIFwiIFwiXTtcbiAgICAgICAgICBpZiAobCkgcmV0dXJuIHQgPyAwIDogbC5zbGljZSgwKTtcbiAgICAgICAgICAoYSA9IGUpLCAocyA9IFtdKSwgKHUgPSB4LnByZUZpbHRlcik7XG4gICAgICAgICAgd2hpbGUgKGEpIHtcbiAgICAgICAgICAgIGZvciAobyBpbiAoKG4gJiYgIShyID0gei5leGVjKGEpKSkgfHxcbiAgICAgICAgICAgICAgKHIgJiYgKGEgPSBhLnNsaWNlKHJbMF0ubGVuZ3RoKSB8fCBhKSwgcy5wdXNoKChpID0gW10pKSksXG4gICAgICAgICAgICAobiA9ICExKSxcbiAgICAgICAgICAgIChyID0gXy5leGVjKGEpKSAmJlxuICAgICAgICAgICAgICAoKG4gPSByLnNoaWZ0KCkpLFxuICAgICAgICAgICAgICBpLnB1c2goeyB2YWx1ZTogbiwgdHlwZTogclswXS5yZXBsYWNlKCQsIFwiIFwiKSB9KSxcbiAgICAgICAgICAgICAgKGEgPSBhLnNsaWNlKG4ubGVuZ3RoKSkpLFxuICAgICAgICAgICAgeC5maWx0ZXIpKVxuICAgICAgICAgICAgICAhKHIgPSBRW29dLmV4ZWMoYSkpIHx8XG4gICAgICAgICAgICAgICAgKHVbb10gJiYgIShyID0gdVtvXShyKSkpIHx8XG4gICAgICAgICAgICAgICAgKChuID0gci5zaGlmdCgpKSxcbiAgICAgICAgICAgICAgICBpLnB1c2goeyB2YWx1ZTogbiwgdHlwZTogbywgbWF0Y2hlczogciB9KSxcbiAgICAgICAgICAgICAgICAoYSA9IGEuc2xpY2Uobi5sZW5ndGgpKSk7XG4gICAgICAgICAgICBpZiAoIW4pIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdCA/IGEubGVuZ3RoIDogYSA/IHNlLmVycm9yKGUpIDogYihlLCBzKS5zbGljZSgwKTtcbiAgICAgICAgfSksXG4gICAgICAoZiA9IHNlLmNvbXBpbGUgPVxuICAgICAgICBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgdixcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgYixcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBpID0gW10sXG4gICAgICAgICAgICBvID0gW10sXG4gICAgICAgICAgICBhID0gU1tlICsgXCIgXCJdO1xuICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgdCB8fCAodCA9IGgoZSkpLCAobiA9IHQubGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIChhID0gRWUodFtuXSkpW0FdID8gaS5wdXNoKGEpIDogby5wdXNoKGEpO1xuICAgICAgICAgICAgKGEgPSBTKFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICAoKHYgPSBvKSxcbiAgICAgICAgICAgICAgKG0gPSAwIDwgKHkgPSBpKS5sZW5ndGgpLFxuICAgICAgICAgICAgICAoYiA9IDAgPCB2Lmxlbmd0aCksXG4gICAgICAgICAgICAgIChyID0gZnVuY3Rpb24gKGUsIHQsIG4sIHIsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgICAgdSA9IDAsXG4gICAgICAgICAgICAgICAgICBsID0gXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjID0gZSAmJiBbXSxcbiAgICAgICAgICAgICAgICAgIGYgPSBbXSxcbiAgICAgICAgICAgICAgICAgIGQgPSB3LFxuICAgICAgICAgICAgICAgICAgcCA9IGUgfHwgKGIgJiYgeC5maW5kLlRBRyhcIipcIiwgaSkpLFxuICAgICAgICAgICAgICAgICAgaCA9IChOICs9IG51bGwgPT0gZCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSksXG4gICAgICAgICAgICAgICAgICBnID0gcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgIGkgJiYgKHcgPSB0ID09IFQgfHwgdCB8fCBpKTtcbiAgICAgICAgICAgICAgICAgIGwgIT09IGcgJiYgbnVsbCAhPSAobyA9IHBbbF0pO1xuICAgICAgICAgICAgICAgICAgbCsrXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYiAmJiBvKSB7XG4gICAgICAgICAgICAgICAgICAgIChhID0gMCksIHQgfHwgby5vd25lckRvY3VtZW50ID09IFQgfHwgKEMobyksIChuID0gIUUpKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChzID0gdlthKytdKSlcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocyhvLCB0IHx8IFQsIG4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgJiYgKE4gPSBoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG0gJiYgKChvID0gIXMgJiYgbykgJiYgdS0tLCBlICYmIGMucHVzaChvKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoKHUgKz0gbCksIG0gJiYgbCAhPT0gdSkpIHtcbiAgICAgICAgICAgICAgICAgIGEgPSAwO1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKChzID0geVthKytdKSkgcyhjLCBmLCB0LCBuKTtcbiAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwIDwgdSkgd2hpbGUgKGwtLSkgY1tsXSB8fCBmW2xdIHx8IChmW2xdID0gai5jYWxsKHIpKTtcbiAgICAgICAgICAgICAgICAgICAgZiA9IENlKGYpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgTy5hcHBseShyLCBmKSxcbiAgICAgICAgICAgICAgICAgICAgaSAmJlxuICAgICAgICAgICAgICAgICAgICAgICFlICYmXG4gICAgICAgICAgICAgICAgICAgICAgMCA8IGYubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgMSA8IHUgKyB5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgIHNlLnVuaXF1ZVNvcnQocik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpICYmICgoTiA9IGgpLCAodyA9IGQpKSwgYztcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG0gPyBsZShyKSA6IHIpXG4gICAgICAgICAgICApKS5zZWxlY3RvciA9IGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9KSxcbiAgICAgIChnID0gc2Uuc2VsZWN0ID1cbiAgICAgICAgZnVuY3Rpb24gKGUsIHQsIG4sIHIpIHtcbiAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIG8sXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIHUsXG4gICAgICAgICAgICBsID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlICYmIGUsXG4gICAgICAgICAgICBjID0gIXIgJiYgaCgoZSA9IGwuc2VsZWN0b3IgfHwgZSkpO1xuICAgICAgICAgIGlmICgoKG4gPSBuIHx8IFtdKSwgMSA9PT0gYy5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIDIgPCAobyA9IGNbMF0gPSBjWzBdLnNsaWNlKDApKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgXCJJRFwiID09PSAoYSA9IG9bMF0pLnR5cGUgJiZcbiAgICAgICAgICAgICAgOSA9PT0gdC5ub2RlVHlwZSAmJlxuICAgICAgICAgICAgICBFICYmXG4gICAgICAgICAgICAgIHgucmVsYXRpdmVbb1sxXS50eXBlXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICghKHQgPSAoeC5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLCBuZSksIHQpIHx8IFtdKVswXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgIGwgJiYgKHQgPSB0LnBhcmVudE5vZGUpLCAoZSA9IGUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IFEubmVlZHNDb250ZXh0LnRlc3QoZSkgPyAwIDogby5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgIGlmICgoKGEgPSBvW2ldKSwgeC5yZWxhdGl2ZVsocyA9IGEudHlwZSldKSkgYnJlYWs7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodSA9IHguZmluZFtzXSkgJiZcbiAgICAgICAgICAgICAgICAociA9IHUoXG4gICAgICAgICAgICAgICAgICBhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSwgbmUpLFxuICAgICAgICAgICAgICAgICAgKGVlLnRlc3Qob1swXS50eXBlKSAmJiB5ZSh0LnBhcmVudE5vZGUpKSB8fCB0XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKChvLnNwbGljZShpLCAxKSwgIShlID0gci5sZW5ndGggJiYgYmUobykpKSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiBPLmFwcGx5KG4sIHIpLCBuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAobCB8fCBmKGUsIGMpKShcbiAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgIUUsXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICF0IHx8IChlZS50ZXN0KGUpICYmIHllKHQucGFyZW50Tm9kZSkpIHx8IHRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAocC5zb3J0U3RhYmxlID0gQS5zcGxpdChcIlwiKS5zb3J0KEQpLmpvaW4oXCJcIikgPT09IEEpLFxuICAgICAgKHAuZGV0ZWN0RHVwbGljYXRlcyA9ICEhbCksXG4gICAgICBDKCksXG4gICAgICAocC5zb3J0RGV0YWNoZWQgPSBjZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gMSAmIGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oVC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpO1xuICAgICAgfSkpLFxuICAgICAgY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoZS5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPjwvYT5cIiksXG4gICAgICAgICAgXCIjXCIgPT09IGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgICk7XG4gICAgICB9KSB8fFxuICAgICAgICBmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwgZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICBpZiAoIW4pIHJldHVybiBlLmdldEF0dHJpYnV0ZSh0LCBcInR5cGVcIiA9PT0gdC50b0xvd2VyQ2FzZSgpID8gMSA6IDIpO1xuICAgICAgICB9KSxcbiAgICAgIChwLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGUuaW5uZXJIVE1MID0gXCI8aW5wdXQvPlwiKSxcbiAgICAgICAgICAgIGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKSxcbiAgICAgICAgICAgIFwiXCIgPT09IGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pKSB8fFxuICAgICAgICBmZShcInZhbHVlXCIsIGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgaWYgKCFuICYmIFwiaW5wdXRcIiA9PT0gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSByZXR1cm4gZS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH0pLFxuICAgICAgY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIH0pIHx8XG4gICAgICAgIGZlKEksIGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgaWYgKCFuKVxuICAgICAgICAgICAgcmV0dXJuICEwID09PSBlW3RdXG4gICAgICAgICAgICAgID8gdC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIDogKHIgPSBlLmdldEF0dHJpYnV0ZU5vZGUodCkpICYmIHIuc3BlY2lmaWVkXG4gICAgICAgICAgICAgID8gci52YWx1ZVxuICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0pLFxuICAgICAgc2VcbiAgICApO1xuICB9KShnKTtcbiAgKEUuZmluZCA9IHApLFxuICAgIChFLmV4cHIgPSBwLnNlbGVjdG9ycyksXG4gICAgKEUuZXhwcltcIjpcIl0gPSBFLmV4cHIucHNldWRvcyksXG4gICAgKEUudW5pcXVlU29ydCA9IEUudW5pcXVlID0gcC51bmlxdWVTb3J0KSxcbiAgICAoRS50ZXh0ID0gcC5nZXRUZXh0KSxcbiAgICAoRS5pc1hNTERvYyA9IHAuaXNYTUwpLFxuICAgIChFLmNvbnRhaW5zID0gcC5jb250YWlucyksXG4gICAgKEUuZXNjYXBlU2VsZWN0b3IgPSBwLmVzY2FwZSk7XG4gIHZhciBoID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIHZhciByID0gW10sXG4gICAgICAgIGkgPSB2b2lkIDAgIT09IG47XG4gICAgICB3aGlsZSAoKGUgPSBlW3RdKSAmJiA5ICE9PSBlLm5vZGVUeXBlKVxuICAgICAgICBpZiAoMSA9PT0gZS5ub2RlVHlwZSkge1xuICAgICAgICAgIGlmIChpICYmIEUoZSkuaXMobikpIGJyZWFrO1xuICAgICAgICAgIHIucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfSxcbiAgICBBID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGZvciAodmFyIG4gPSBbXTsgZTsgZSA9IGUubmV4dFNpYmxpbmcpXG4gICAgICAgIDEgPT09IGUubm9kZVR5cGUgJiYgZSAhPT0gdCAmJiBuLnB1c2goZSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuICAgIE4gPSBFLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xuICBmdW5jdGlvbiBTKGUsIHQpIHtcbiAgICByZXR1cm4gZS5ub2RlTmFtZSAmJiBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHQudG9Mb3dlckNhc2UoKTtcbiAgfVxuICB2YXIgayA9IC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO1xuICBmdW5jdGlvbiBEKGUsIG4sIHIpIHtcbiAgICByZXR1cm4gYihuKVxuICAgICAgPyBFLmdyZXAoZSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gISFuLmNhbGwoZSwgdCwgZSkgIT09IHI7XG4gICAgICAgIH0pXG4gICAgICA6IG4ubm9kZVR5cGVcbiAgICAgID8gRS5ncmVwKGUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIChlID09PSBuKSAhPT0gcjtcbiAgICAgICAgfSlcbiAgICAgIDogXCJzdHJpbmdcIiAhPSB0eXBlb2YgblxuICAgICAgPyBFLmdyZXAoZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gLTEgPCBpLmNhbGwobiwgZSkgIT09IHI7XG4gICAgICAgIH0pXG4gICAgICA6IEUuZmlsdGVyKG4sIGUsIHIpO1xuICB9XG4gIChFLmZpbHRlciA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgdmFyIHIgPSB0WzBdO1xuICAgIHJldHVybiAoXG4gICAgICBuICYmIChlID0gXCI6bm90KFwiICsgZSArIFwiKVwiKSxcbiAgICAgIDEgPT09IHQubGVuZ3RoICYmIDEgPT09IHIubm9kZVR5cGVcbiAgICAgICAgPyBFLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsIGUpXG4gICAgICAgICAgPyBbcl1cbiAgICAgICAgICA6IFtdXG4gICAgICAgIDogRS5maW5kLm1hdGNoZXMoXG4gICAgICAgICAgICBlLFxuICAgICAgICAgICAgRS5ncmVwKHQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxID09PSBlLm5vZGVUeXBlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgKTtcbiAgfSksXG4gICAgRS5mbi5leHRlbmQoe1xuICAgICAgZmluZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQsXG4gICAgICAgICAgbixcbiAgICAgICAgICByID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgaSA9IHRoaXM7XG4gICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBlKVxuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhcbiAgICAgICAgICAgIEUoZSkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZm9yICh0ID0gMDsgdCA8IHI7IHQrKykgaWYgKEUuY29udGFpbnMoaVt0XSwgdGhpcykpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgZm9yIChuID0gdGhpcy5wdXNoU3RhY2soW10pLCB0ID0gMDsgdCA8IHI7IHQrKykgRS5maW5kKGUsIGlbdF0sIG4pO1xuICAgICAgICByZXR1cm4gMSA8IHIgPyBFLnVuaXF1ZVNvcnQobikgOiBuO1xuICAgICAgfSxcbiAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcywgZSB8fCBbXSwgITEpKTtcbiAgICAgIH0sXG4gICAgICBub3Q6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsIGUgfHwgW10sICEwKSk7XG4gICAgICB9LFxuICAgICAgaXM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhIUQodGhpcywgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiBOLnRlc3QoZSkgPyBFKGUpIDogZSB8fCBbXSwgITEpXG4gICAgICAgICAgLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIHZhciBMLFxuICAgIGogPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLztcbiAgKChFLmZuLmluaXQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgIHZhciByLCBpO1xuICAgIGlmICghZSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKCgobiA9IG4gfHwgTCksIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpKSB7XG4gICAgICBpZiAoXG4gICAgICAgICEociA9XG4gICAgICAgICAgXCI8XCIgPT09IGVbMF0gJiYgXCI+XCIgPT09IGVbZS5sZW5ndGggLSAxXSAmJiAzIDw9IGUubGVuZ3RoXG4gICAgICAgICAgICA/IFtudWxsLCBlLCBudWxsXVxuICAgICAgICAgICAgOiBqLmV4ZWMoZSkpIHx8XG4gICAgICAgICghclsxXSAmJiB0KVxuICAgICAgKVxuICAgICAgICByZXR1cm4gIXQgfHwgdC5qcXVlcnkgPyAodCB8fCBuKS5maW5kKGUpIDogdGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO1xuICAgICAgaWYgKHJbMV0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgodCA9IHQgaW5zdGFuY2VvZiBFID8gdFswXSA6IHQpLFxuICAgICAgICAgIEUubWVyZ2UoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgRS5wYXJzZUhUTUwoclsxXSwgdCAmJiB0Lm5vZGVUeXBlID8gdC5vd25lckRvY3VtZW50IHx8IHQgOiB3LCAhMClcbiAgICAgICAgICApLFxuICAgICAgICAgIGsudGVzdChyWzFdKSAmJiBFLmlzUGxhaW5PYmplY3QodCkpXG4gICAgICAgIClcbiAgICAgICAgICBmb3IgKHIgaW4gdCkgYih0aGlzW3JdKSA/IHRoaXNbcl0odFtyXSkgOiB0aGlzLmF0dHIociwgdFtyXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGkgPSB3LmdldEVsZW1lbnRCeUlkKHJbMl0pKSAmJiAoKHRoaXNbMF0gPSBpKSwgKHRoaXMubGVuZ3RoID0gMSkpLCB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZS5ub2RlVHlwZVxuICAgICAgPyAoKHRoaXNbMF0gPSBlKSwgKHRoaXMubGVuZ3RoID0gMSksIHRoaXMpXG4gICAgICA6IGIoZSlcbiAgICAgID8gdm9pZCAwICE9PSBuLnJlYWR5XG4gICAgICAgID8gbi5yZWFkeShlKVxuICAgICAgICA6IGUoRSlcbiAgICAgIDogRS5tYWtlQXJyYXkoZSwgdGhpcyk7XG4gIH0pLnByb3RvdHlwZSA9IEUuZm4pLFxuICAgIChMID0gRSh3KSk7XG4gIHZhciBxID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG4gICAgTyA9IHsgY2hpbGRyZW46ICEwLCBjb250ZW50czogITAsIG5leHQ6ICEwLCBwcmV2OiAhMCB9O1xuICBmdW5jdGlvbiBQKGUsIHQpIHtcbiAgICB3aGlsZSAoKGUgPSBlW3RdKSAmJiAxICE9PSBlLm5vZGVUeXBlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBFLmZuLmV4dGVuZCh7XG4gICAgaGFzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBFKGUsIHRoaXMpLFxuICAgICAgICBuID0gdC5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IG47IGUrKykgaWYgKEUuY29udGFpbnModGhpcywgdFtlXSkpIHJldHVybiAhMDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xvc2VzdDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBuLFxuICAgICAgICByID0gMCxcbiAgICAgICAgaSA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBvID0gW10sXG4gICAgICAgIGEgPSBcInN0cmluZ1wiICE9IHR5cGVvZiBlICYmIEUoZSk7XG4gICAgICBpZiAoIU4udGVzdChlKSlcbiAgICAgICAgZm9yICg7IHIgPCBpOyByKyspXG4gICAgICAgICAgZm9yIChuID0gdGhpc1tyXTsgbiAmJiBuICE9PSB0OyBuID0gbi5wYXJlbnROb2RlKVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBuLm5vZGVUeXBlIDwgMTEgJiZcbiAgICAgICAgICAgICAgKGFcbiAgICAgICAgICAgICAgICA/IC0xIDwgYS5pbmRleChuKVxuICAgICAgICAgICAgICAgIDogMSA9PT0gbi5ub2RlVHlwZSAmJiBFLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sIGUpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG8ucHVzaChuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soMSA8IG8ubGVuZ3RoID8gRS51bmlxdWVTb3J0KG8pIDogbyk7XG4gICAgfSxcbiAgICBpbmRleDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlXG4gICAgICAgID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZVxuICAgICAgICAgID8gaS5jYWxsKEUoZSksIHRoaXNbMF0pXG4gICAgICAgICAgOiBpLmNhbGwodGhpcywgZS5qcXVlcnkgPyBlWzBdIDogZSlcbiAgICAgICAgOiB0aGlzWzBdICYmIHRoaXNbMF0ucGFyZW50Tm9kZVxuICAgICAgICA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoXG4gICAgICAgIDogLTE7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soRS51bmlxdWVTb3J0KEUubWVyZ2UodGhpcy5nZXQoKSwgRShlLCB0KSkpKTtcbiAgICB9LFxuICAgIGFkZEJhY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQobnVsbCA9PSBlID8gdGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSk7XG4gICAgfSxcbiAgfSksXG4gICAgRS5lYWNoKFxuICAgICAge1xuICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnBhcmVudE5vZGU7XG4gICAgICAgICAgcmV0dXJuIHQgJiYgMTEgIT09IHQubm9kZVR5cGUgPyB0IDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50czogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gaChlLCBcInBhcmVudE5vZGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmVudHNVbnRpbDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICByZXR1cm4gaChlLCBcInBhcmVudE5vZGVcIiwgbik7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIFAoZSwgXCJuZXh0U2libGluZ1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gUChlLCBcInByZXZpb3VzU2libGluZ1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dEFsbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gaChlLCBcIm5leHRTaWJsaW5nXCIpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2QWxsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBoKGUsIFwicHJldmlvdXNTaWJsaW5nXCIpO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0VW50aWw6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgcmV0dXJuIGgoZSwgXCJuZXh0U2libGluZ1wiLCBuKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldlVudGlsOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgIHJldHVybiBoKGUsIFwicHJldmlvdXNTaWJsaW5nXCIsIG4pO1xuICAgICAgICB9LFxuICAgICAgICBzaWJsaW5nczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gQSgoZS5wYXJlbnROb2RlIHx8IHt9KS5maXJzdENoaWxkLCBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIEEoZS5maXJzdENoaWxkKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudHM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGwgIT0gZS5jb250ZW50RG9jdW1lbnQgJiYgcihlLmNvbnRlbnREb2N1bWVudClcbiAgICAgICAgICAgID8gZS5jb250ZW50RG9jdW1lbnRcbiAgICAgICAgICAgIDogKFMoZSwgXCJ0ZW1wbGF0ZVwiKSAmJiAoZSA9IGUuY29udGVudCB8fCBlKSxcbiAgICAgICAgICAgICAgRS5tZXJnZShbXSwgZS5jaGlsZE5vZGVzKSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKHIsIGkpIHtcbiAgICAgICAgRS5mbltyXSA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4gPSBFLm1hcCh0aGlzLCBpLCBlKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJVbnRpbFwiICE9PSByLnNsaWNlKC01KSAmJiAodCA9IGUpLFxuICAgICAgICAgICAgdCAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB0ICYmIChuID0gRS5maWx0ZXIodCwgbikpLFxuICAgICAgICAgICAgMSA8IHRoaXMubGVuZ3RoICYmXG4gICAgICAgICAgICAgIChPW3JdIHx8IEUudW5pcXVlU29ydChuKSwgcS50ZXN0KHIpICYmIG4ucmV2ZXJzZSgpKSxcbiAgICAgICAgICAgIHRoaXMucHVzaFN0YWNrKG4pXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICB2YXIgSCA9IC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztcbiAgZnVuY3Rpb24gSShlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gUihlKSB7XG4gICAgdGhyb3cgZTtcbiAgfVxuICBmdW5jdGlvbiBCKGUsIHQsIG4sIHIpIHtcbiAgICB2YXIgaTtcbiAgICB0cnkge1xuICAgICAgZSAmJiBiKChpID0gZS5wcm9taXNlKSlcbiAgICAgICAgPyBpLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pXG4gICAgICAgIDogZSAmJiBiKChpID0gZS50aGVuKSlcbiAgICAgICAgPyBpLmNhbGwoZSwgdCwgbilcbiAgICAgICAgOiB0LmFwcGx5KHZvaWQgMCwgW2VdLnNsaWNlKHIpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuLmFwcGx5KHZvaWQgMCwgW2VdKTtcbiAgICB9XG4gIH1cbiAgKEUuQ2FsbGJhY2tzID0gZnVuY3Rpb24gKHIpIHtcbiAgICB2YXIgZSwgbjtcbiAgICByID1cbiAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIHJcbiAgICAgICAgPyAoKGUgPSByKSxcbiAgICAgICAgICAobiA9IHt9KSxcbiAgICAgICAgICBFLmVhY2goZS5tYXRjaChIKSB8fCBbXSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIG5bdF0gPSAhMDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuKVxuICAgICAgICA6IEUuZXh0ZW5kKHt9LCByKTtcbiAgICB2YXIgaSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgYSxcbiAgICAgIHMgPSBbXSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIGwgPSAtMSxcbiAgICAgIGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoYSA9IGEgfHwgci5vbmNlLCBvID0gaSA9ICEwOyB1Lmxlbmd0aDsgbCA9IC0xKSB7XG4gICAgICAgICAgdCA9IHUuc2hpZnQoKTtcbiAgICAgICAgICB3aGlsZSAoKytsIDwgcy5sZW5ndGgpXG4gICAgICAgICAgICAhMSA9PT0gc1tsXS5hcHBseSh0WzBdLCB0WzFdKSAmJlxuICAgICAgICAgICAgICByLnN0b3BPbkZhbHNlICYmXG4gICAgICAgICAgICAgICgobCA9IHMubGVuZ3RoKSwgKHQgPSAhMSkpO1xuICAgICAgICB9XG4gICAgICAgIHIubWVtb3J5IHx8ICh0ID0gITEpLCAoaSA9ICExKSwgYSAmJiAocyA9IHQgPyBbXSA6IFwiXCIpO1xuICAgICAgfSxcbiAgICAgIGYgPSB7XG4gICAgICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzICYmXG4gICAgICAgICAgICAgICh0ICYmICFpICYmICgobCA9IHMubGVuZ3RoIC0gMSksIHUucHVzaCh0KSksXG4gICAgICAgICAgICAgIChmdW5jdGlvbiBuKGUpIHtcbiAgICAgICAgICAgICAgICBFLmVhY2goZSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgIGIodClcbiAgICAgICAgICAgICAgICAgICAgPyAoci51bmlxdWUgJiYgZi5oYXModCkpIHx8IHMucHVzaCh0KVxuICAgICAgICAgICAgICAgICAgICA6IHQgJiYgdC5sZW5ndGggJiYgXCJzdHJpbmdcIiAhPT0gVCh0KSAmJiBuKHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KShhcmd1bWVudHMpLFxuICAgICAgICAgICAgICB0ICYmICFpICYmIGMoKSksXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIEUuZWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICB3aGlsZSAoLTEgPCAobiA9IEUuaW5BcnJheSh0LCBzLCBuKSkpXG4gICAgICAgICAgICAgICAgcy5zcGxpY2UobiwgMSksIG4gPD0gbCAmJiBsLS07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBoYXM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUgPyAtMSA8IEUuaW5BcnJheShlLCBzKSA6IDAgPCBzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcyAmJiAocyA9IFtdKSwgdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAoYSA9IHUgPSBbXSksIChzID0gdCA9IFwiXCIpLCB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAhcztcbiAgICAgICAgfSxcbiAgICAgICAgbG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAoYSA9IHUgPSBbXSksIHQgfHwgaSB8fCAocyA9IHQgPSBcIlwiKSwgdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgbG9ja2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuICEhYTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlyZVdpdGg6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGEgfHxcbiAgICAgICAgICAgICAgKCh0ID0gW2UsICh0ID0gdCB8fCBbXSkuc2xpY2UgPyB0LnNsaWNlKCkgOiB0XSksXG4gICAgICAgICAgICAgIHUucHVzaCh0KSxcbiAgICAgICAgICAgICAgaSB8fCBjKCkpLFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZi5maXJlV2l0aCh0aGlzLCBhcmd1bWVudHMpLCB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBmaXJlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAhIW87XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIHJldHVybiBmO1xuICB9KSxcbiAgICBFLmV4dGVuZCh7XG4gICAgICBEZWZlcnJlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG8gPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFwibm90aWZ5XCIsXG4gICAgICAgICAgICAgIFwicHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgRS5DYWxsYmFja3MoXCJtZW1vcnlcIiksXG4gICAgICAgICAgICAgIEUuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLFxuICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgXCJyZXNvbHZlXCIsXG4gICAgICAgICAgICAgIFwiZG9uZVwiLFxuICAgICAgICAgICAgICBFLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxuICAgICAgICAgICAgICBFLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICBcInJlc29sdmVkXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBcInJlamVjdFwiLFxuICAgICAgICAgICAgICBcImZhaWxcIixcbiAgICAgICAgICAgICAgRS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcbiAgICAgICAgICAgICAgRS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgXCJyZWplY3RlZFwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGkgPSBcInBlbmRpbmdcIixcbiAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgc3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx3YXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0Y2g6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLnRoZW4obnVsbCwgZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgcmV0dXJuIEUuRGVmZXJyZWQoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBFLmVhY2gobywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0gYihpW3RbNF1dKSAmJiBpW3RbNF1dO1xuICAgICAgICAgICAgICAgICAgc1t0WzFdXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gbiAmJiBuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGUgJiYgYihlLnByb21pc2UpXG4gICAgICAgICAgICAgICAgICAgICAgPyBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9taXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2dyZXNzKHIubm90aWZ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9uZShyLnJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5mYWlsKHIucmVqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgIDogclt0WzBdICsgXCJXaXRoXCJdKHRoaXMsIG4gPyBbZV0gOiBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAoaSA9IG51bGwpO1xuICAgICAgICAgICAgICB9KS5wcm9taXNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHQsIG4sIHIpIHtcbiAgICAgICAgICAgICAgdmFyIHUgPSAwO1xuICAgICAgICAgICAgICBmdW5jdGlvbiBsKGksIG8sIGEsIHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICByID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlLCB0O1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCB1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlID0gYS5hcHBseShuLCByKSkgPT09IG8ucHJvbWlzZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChcIm9iamVjdFwiID09IHR5cGVvZiBlIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS50aGVuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYih0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0LmNhbGwoZSwgbCh1LCBvLCBJLCBzKSwgbCh1LCBvLCBSLCBzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHUrKyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCh1LCBvLCBJLCBzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKHUsIG8sIFIsIHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwodSwgbywgSSwgby5ub3RpZnlXaXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGEgIT09IEkgJiYgKChuID0gdm9pZCAwKSwgKHIgPSBbZV0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzIHx8IG8ucmVzb2x2ZVdpdGgpKG4sIHIpKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHQgPSBzXG4gICAgICAgICAgICAgICAgICAgICAgPyBlXG4gICAgICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRS5EZWZlcnJlZC5leGNlcHRpb25Ib29rICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSwgdC5zdGFja1RyYWNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPD0gaSArIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgIT09IFIgJiYgKChuID0gdm9pZCAwKSwgKHIgPSBbZV0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5yZWplY3RXaXRoKG4sIHIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgPyB0KClcbiAgICAgICAgICAgICAgICAgICAgOiAoRS5EZWZlcnJlZC5nZXRTdGFja0hvb2sgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0LnN0YWNrVHJhY2UgPSBFLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxcbiAgICAgICAgICAgICAgICAgICAgICBnLnNldFRpbWVvdXQodCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIEUuRGVmZXJyZWQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBvWzBdWzNdLmFkZChsKDAsIGUsIGIocikgPyByIDogSSwgZS5ub3RpZnlXaXRoKSksXG4gICAgICAgICAgICAgICAgICBvWzFdWzNdLmFkZChsKDAsIGUsIGIodCkgPyB0IDogSSkpLFxuICAgICAgICAgICAgICAgICAgb1syXVszXS5hZGQobCgwLCBlLCBiKG4pID8gbiA6IFIpKTtcbiAgICAgICAgICAgICAgfSkucHJvbWlzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb21pc2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsICE9IGUgPyBFLmV4dGVuZChlLCBhKSA6IGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcyA9IHt9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIEUuZWFjaChvLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0WzJdLFxuICAgICAgICAgICAgICByID0gdFs1XTtcbiAgICAgICAgICAgIChhW3RbMV1dID0gbi5hZGQpLFxuICAgICAgICAgICAgICByICYmXG4gICAgICAgICAgICAgICAgbi5hZGQoXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSByO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9bMyAtIGVdWzJdLmRpc2FibGUsXG4gICAgICAgICAgICAgICAgICBvWzMgLSBlXVszXS5kaXNhYmxlLFxuICAgICAgICAgICAgICAgICAgb1swXVsyXS5sb2NrLFxuICAgICAgICAgICAgICAgICAgb1swXVszXS5sb2NrXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbi5hZGQodFszXS5maXJlKSxcbiAgICAgICAgICAgICAgKHNbdFswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIHNbdFswXSArIFwiV2l0aFwiXSh0aGlzID09PSBzID8gdm9pZCAwIDogdGhpcywgYXJndW1lbnRzKSwgdGhpc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAoc1t0WzBdICsgXCJXaXRoXCJdID0gbi5maXJlV2l0aCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYS5wcm9taXNlKHMpLFxuICAgICAgICAgIGUgJiYgZS5jYWxsKHMsIHMpLFxuICAgICAgICAgIHNcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB3aGVuOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgdCA9IG4sXG4gICAgICAgICAgciA9IEFycmF5KHQpLFxuICAgICAgICAgIGkgPSBzLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICBvID0gRS5EZWZlcnJlZCgpLFxuICAgICAgICAgIGEgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIChyW3RdID0gdGhpcyksXG4gICAgICAgICAgICAgICAgKGlbdF0gPSAxIDwgYXJndW1lbnRzLmxlbmd0aCA/IHMuY2FsbChhcmd1bWVudHMpIDogZSksXG4gICAgICAgICAgICAgICAgLS1uIHx8IG8ucmVzb2x2ZVdpdGgociwgaSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBuIDw9IDEgJiZcbiAgICAgICAgICAoQihlLCBvLmRvbmUoYSh0KSkucmVzb2x2ZSwgby5yZWplY3QsICFuKSxcbiAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gby5zdGF0ZSgpIHx8IGIoaVt0XSAmJiBpW3RdLnRoZW4pKVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG8udGhlbigpO1xuICAgICAgICB3aGlsZSAodC0tKSBCKGlbdF0sIGEodCksIG8ucmVqZWN0KTtcbiAgICAgICAgcmV0dXJuIG8ucHJvbWlzZSgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgdmFyIE0gPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcbiAgKEUuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgZy5jb25zb2xlICYmXG4gICAgICBnLmNvbnNvbGUud2FybiAmJlxuICAgICAgZSAmJlxuICAgICAgTS50ZXN0KGUubmFtZSkgJiZcbiAgICAgIGcuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIgKyBlLm1lc3NhZ2UsIGUuc3RhY2ssIHQpO1xuICB9KSxcbiAgICAoRS5yZWFkeUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBnLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIHZhciBXID0gRS5EZWZlcnJlZCgpO1xuICBmdW5jdGlvbiBGKCkge1xuICAgIHcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgRiksXG4gICAgICBnLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIEYpLFxuICAgICAgRS5yZWFkeSgpO1xuICB9XG4gIChFLmZuLnJlYWR5ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgVy50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgRS5yZWFkeUV4Y2VwdGlvbihlKTtcbiAgICAgIH0pLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH0pLFxuICAgIEUuZXh0ZW5kKHtcbiAgICAgIGlzUmVhZHk6ICExLFxuICAgICAgcmVhZHlXYWl0OiAxLFxuICAgICAgcmVhZHk6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICghMCA9PT0gZSA/IC0tRS5yZWFkeVdhaXQgOiBFLmlzUmVhZHkpIHx8XG4gICAgICAgICAgKChFLmlzUmVhZHkgPSAhMCkgIT09IGUgJiYgMCA8IC0tRS5yZWFkeVdhaXQpIHx8XG4gICAgICAgICAgVy5yZXNvbHZlV2l0aCh3LCBbRV0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICAoRS5yZWFkeS50aGVuID0gVy50aGVuKSxcbiAgICBcImNvbXBsZXRlXCIgPT09IHcucmVhZHlTdGF0ZSB8fFxuICAgIChcImxvYWRpbmdcIiAhPT0gdy5yZWFkeVN0YXRlICYmICF3LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbClcbiAgICAgID8gZy5zZXRUaW1lb3V0KEUucmVhZHkpXG4gICAgICA6ICh3LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIEYpLFxuICAgICAgICBnLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIEYpKTtcbiAgdmFyICQgPSBmdW5jdGlvbiAoZSwgdCwgbiwgciwgaSwgbywgYSkge1xuICAgICAgdmFyIHMgPSAwLFxuICAgICAgICB1ID0gZS5sZW5ndGgsXG4gICAgICAgIGwgPSBudWxsID09IG47XG4gICAgICBpZiAoXCJvYmplY3RcIiA9PT0gVChuKSlcbiAgICAgICAgZm9yIChzIGluICgoaSA9ICEwKSwgbikpICQoZSwgdCwgcywgbltzXSwgITAsIG8sIGEpO1xuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIHZvaWQgMCAhPT0gciAmJlxuICAgICAgICAoKGkgPSAhMCksXG4gICAgICAgIGIocikgfHwgKGEgPSAhMCksXG4gICAgICAgIGwgJiZcbiAgICAgICAgICAoYVxuICAgICAgICAgICAgPyAodC5jYWxsKGUsIHIpLCAodCA9IG51bGwpKVxuICAgICAgICAgICAgOiAoKGwgPSB0KSxcbiAgICAgICAgICAgICAgKHQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsLmNhbGwoRShlKSwgbik7XG4gICAgICAgICAgICAgIH0pKSksXG4gICAgICAgIHQpXG4gICAgICApXG4gICAgICAgIGZvciAoOyBzIDwgdTsgcysrKSB0KGVbc10sIG4sIGEgPyByIDogci5jYWxsKGVbc10sIHMsIHQoZVtzXSwgbikpKTtcbiAgICAgIHJldHVybiBpID8gZSA6IGwgPyB0LmNhbGwoZSkgOiB1ID8gdChlWzBdLCBuKSA6IG87XG4gICAgfSxcbiAgICB6ID0gL14tbXMtLyxcbiAgICBfID0gLy0oW2Etel0pL2c7XG4gIGZ1bmN0aW9uIFUoZSwgdCkge1xuICAgIHJldHVybiB0LnRvVXBwZXJDYXNlKCk7XG4gIH1cbiAgZnVuY3Rpb24gVihlKSB7XG4gICAgcmV0dXJuIGUucmVwbGFjZSh6LCBcIm1zLVwiKS5yZXBsYWNlKF8sIFUpO1xuICB9XG4gIHZhciBYID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gMSA9PT0gZS5ub2RlVHlwZSB8fCA5ID09PSBlLm5vZGVUeXBlIHx8ICErZS5ub2RlVHlwZTtcbiAgfTtcbiAgZnVuY3Rpb24gUSgpIHtcbiAgICB0aGlzLmV4cGFuZG8gPSBFLmV4cGFuZG8gKyBRLnVpZCsrO1xuICB9XG4gIChRLnVpZCA9IDEpLFxuICAgIChRLnByb3RvdHlwZSA9IHtcbiAgICAgIGNhY2hlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IGVbdGhpcy5leHBhbmRvXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0IHx8XG4gICAgICAgICAgICAoKHQgPSB7fSksXG4gICAgICAgICAgICBYKGUpICYmXG4gICAgICAgICAgICAgIChlLm5vZGVUeXBlXG4gICAgICAgICAgICAgICAgPyAoZVt0aGlzLmV4cGFuZG9dID0gdClcbiAgICAgICAgICAgICAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0aGlzLmV4cGFuZG8sIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICB9KSkpLFxuICAgICAgICAgIHRcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIHZhciByLFxuICAgICAgICAgIGkgPSB0aGlzLmNhY2hlKGUpO1xuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCkgaVtWKHQpXSA9IG47XG4gICAgICAgIGVsc2UgZm9yIChyIGluIHQpIGlbVihyKV0gPSB0W3JdO1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0sXG4gICAgICBnZXQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiB2b2lkIDAgPT09IHRcbiAgICAgICAgICA/IHRoaXMuY2FjaGUoZSlcbiAgICAgICAgICA6IGVbdGhpcy5leHBhbmRvXSAmJiBlW3RoaXMuZXhwYW5kb11bVih0KV07XG4gICAgICB9LFxuICAgICAgYWNjZXNzOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICByZXR1cm4gdm9pZCAwID09PSB0IHx8ICh0ICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgdm9pZCAwID09PSBuKVxuICAgICAgICAgID8gdGhpcy5nZXQoZSwgdClcbiAgICAgICAgICA6ICh0aGlzLnNldChlLCB0LCBuKSwgdm9pZCAwICE9PSBuID8gbiA6IHQpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG4sXG4gICAgICAgICAgciA9IGVbdGhpcy5leHBhbmRvXTtcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gcikge1xuICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQpIHtcbiAgICAgICAgICAgIG4gPSAodCA9IEFycmF5LmlzQXJyYXkodClcbiAgICAgICAgICAgICAgPyB0Lm1hcChWKVxuICAgICAgICAgICAgICA6ICh0ID0gVih0KSkgaW4gclxuICAgICAgICAgICAgICA/IFt0XVxuICAgICAgICAgICAgICA6IHQubWF0Y2goSCkgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIGRlbGV0ZSByW3Rbbl1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICAodm9pZCAwID09PSB0IHx8IEUuaXNFbXB0eU9iamVjdChyKSkgJiZcbiAgICAgICAgICAgIChlLm5vZGVUeXBlID8gKGVbdGhpcy5leHBhbmRvXSA9IHZvaWQgMCkgOiBkZWxldGUgZVt0aGlzLmV4cGFuZG9dKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhc0RhdGE6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gZVt0aGlzLmV4cGFuZG9dO1xuICAgICAgICByZXR1cm4gdm9pZCAwICE9PSB0ICYmICFFLmlzRW1wdHlPYmplY3QodCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB2YXIgWSA9IG5ldyBRKCksXG4gICAgRyA9IG5ldyBRKCksXG4gICAgSyA9IC9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxcbiAgICBKID0gL1tBLVpdL2c7XG4gIGZ1bmN0aW9uIFooZSwgdCwgbikge1xuICAgIHZhciByLCBpO1xuICAgIGlmICh2b2lkIDAgPT09IG4gJiYgMSA9PT0gZS5ub2RlVHlwZSlcbiAgICAgIGlmIChcbiAgICAgICAgKChyID0gXCJkYXRhLVwiICsgdC5yZXBsYWNlKEosIFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiAobiA9IGUuZ2V0QXR0cmlidXRlKHIpKSlcbiAgICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG4gPVxuICAgICAgICAgICAgXCJ0cnVlXCIgPT09IChpID0gbikgfHxcbiAgICAgICAgICAgIChcImZhbHNlXCIgIT09IGkgJiZcbiAgICAgICAgICAgICAgKFwibnVsbFwiID09PSBpXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBpID09PSAraSArIFwiXCJcbiAgICAgICAgICAgICAgICA/ICtpXG4gICAgICAgICAgICAgICAgOiBLLnRlc3QoaSlcbiAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UoaSlcbiAgICAgICAgICAgICAgICA6IGkpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgRy5zZXQoZSwgdCwgbik7XG4gICAgICB9IGVsc2UgbiA9IHZvaWQgMDtcbiAgICByZXR1cm4gbjtcbiAgfVxuICBFLmV4dGVuZCh7XG4gICAgaGFzRGF0YTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBHLmhhc0RhdGEoZSkgfHwgWS5oYXNEYXRhKGUpO1xuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIHJldHVybiBHLmFjY2VzcyhlLCB0LCBuKTtcbiAgICB9LFxuICAgIHJlbW92ZURhdGE6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBHLnJlbW92ZShlLCB0KTtcbiAgICB9LFxuICAgIF9kYXRhOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgcmV0dXJuIFkuYWNjZXNzKGUsIHQsIG4pO1xuICAgIH0sXG4gICAgX3JlbW92ZURhdGE6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBZLnJlbW92ZShlLCB0KTtcbiAgICB9LFxuICB9KSxcbiAgICBFLmZuLmV4dGVuZCh7XG4gICAgICBkYXRhOiBmdW5jdGlvbiAobiwgZSkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICByLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbyA9IHRoaXNbMF0sXG4gICAgICAgICAgYSA9IG8gJiYgby5hdHRyaWJ1dGVzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBuKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5sZW5ndGggJiZcbiAgICAgICAgICAgICgoaSA9IEcuZ2V0KG8pKSwgMSA9PT0gby5ub2RlVHlwZSAmJiAhWS5nZXQobywgXCJoYXNEYXRhQXR0cnNcIikpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0ID0gYS5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAodC0tKVxuICAgICAgICAgICAgICBhW3RdICYmXG4gICAgICAgICAgICAgICAgMCA9PT0gKHIgPSBhW3RdLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSAmJlxuICAgICAgICAgICAgICAgICgociA9IFYoci5zbGljZSg1KSkpLCBaKG8sIHIsIGlbcl0pKTtcbiAgICAgICAgICAgIFkuc2V0KG8sIFwiaGFzRGF0YUF0dHJzXCIsICEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIG5cbiAgICAgICAgICA/IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIEcuc2V0KHRoaXMsIG4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6ICQoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgaWYgKG8gJiYgdm9pZCAwID09PSBlKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gKHQgPSBHLmdldChvLCBuKSlcbiAgICAgICAgICAgICAgICAgICAgPyB0XG4gICAgICAgICAgICAgICAgICAgIDogdm9pZCAwICE9PSAodCA9IFoobywgbikpXG4gICAgICAgICAgICAgICAgICAgID8gdFxuICAgICAgICAgICAgICAgICAgICA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgRy5zZXQodGhpcywgbiwgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgIDEgPCBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAhMFxuICAgICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVEYXRhOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBHLnJlbW92ZSh0aGlzLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIEUuZXh0ZW5kKHtcbiAgICAgIHF1ZXVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0ID0gKHQgfHwgXCJmeFwiKSArIFwicXVldWVcIiksXG4gICAgICAgICAgICAociA9IFkuZ2V0KGUsIHQpKSxcbiAgICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICAgKCFyIHx8IEFycmF5LmlzQXJyYXkobilcbiAgICAgICAgICAgICAgICA/IChyID0gWS5hY2Nlc3MoZSwgdCwgRS5tYWtlQXJyYXkobikpKVxuICAgICAgICAgICAgICAgIDogci5wdXNoKG4pKSxcbiAgICAgICAgICAgIHIgfHwgW11cbiAgICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGRlcXVldWU6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHQgPSB0IHx8IFwiZnhcIjtcbiAgICAgICAgdmFyIG4gPSBFLnF1ZXVlKGUsIHQpLFxuICAgICAgICAgIHIgPSBuLmxlbmd0aCxcbiAgICAgICAgICBpID0gbi5zaGlmdCgpLFxuICAgICAgICAgIG8gPSBFLl9xdWV1ZUhvb2tzKGUsIHQpO1xuICAgICAgICBcImlucHJvZ3Jlc3NcIiA9PT0gaSAmJiAoKGkgPSBuLnNoaWZ0KCkpLCByLS0pLFxuICAgICAgICAgIGkgJiZcbiAgICAgICAgICAgIChcImZ4XCIgPT09IHQgJiYgbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxcbiAgICAgICAgICAgIGRlbGV0ZSBvLnN0b3AsXG4gICAgICAgICAgICBpLmNhbGwoXG4gICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBFLmRlcXVldWUoZSwgdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICkpLFxuICAgICAgICAgICFyICYmIG8gJiYgby5lbXB0eS5maXJlKCk7XG4gICAgICB9LFxuICAgICAgX3F1ZXVlSG9va3M6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBuID0gdCArIFwicXVldWVIb29rc1wiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFkuZ2V0KGUsIG4pIHx8XG4gICAgICAgICAgWS5hY2Nlc3MoZSwgbiwge1xuICAgICAgICAgICAgZW1wdHk6IEUuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgWS5yZW1vdmUoZSwgW3QgKyBcInF1ZXVlXCIsIG5dKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIEUuZm4uZXh0ZW5kKHtcbiAgICAgIHF1ZXVlOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB2YXIgZSA9IDI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCAmJiAoKG4gPSB0KSwgKHQgPSBcImZ4XCIpLCBlLS0pLFxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPCBlXG4gICAgICAgICAgICA/IEUucXVldWUodGhpc1swXSwgdClcbiAgICAgICAgICAgIDogdm9pZCAwID09PSBuXG4gICAgICAgICAgICA/IHRoaXNcbiAgICAgICAgICAgIDogdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IEUucXVldWUodGhpcywgdCwgbik7XG4gICAgICAgICAgICAgICAgRS5fcXVldWVIb29rcyh0aGlzLCB0KSxcbiAgICAgICAgICAgICAgICAgIFwiZnhcIiA9PT0gdCAmJiBcImlucHJvZ3Jlc3NcIiAhPT0gZVswXSAmJiBFLmRlcXVldWUodGhpcywgdCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZGVxdWV1ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgRS5kZXF1ZXVlKHRoaXMsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjbGVhclF1ZXVlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZShlIHx8IFwiZnhcIiwgW10pO1xuICAgICAgfSxcbiAgICAgIHByb21pc2U6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBuLFxuICAgICAgICAgIHIgPSAxLFxuICAgICAgICAgIGkgPSBFLkRlZmVycmVkKCksXG4gICAgICAgICAgbyA9IHRoaXMsXG4gICAgICAgICAgYSA9IHRoaXMubGVuZ3RoLFxuICAgICAgICAgIHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAtLXIgfHwgaS5yZXNvbHZlV2l0aChvLCBbb10pO1xuICAgICAgICAgIH07XG4gICAgICAgIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUgJiYgKCh0ID0gZSksIChlID0gdm9pZCAwKSksIChlID0gZSB8fCBcImZ4XCIpO1xuICAgICAgICB3aGlsZSAoYS0tKVxuICAgICAgICAgIChuID0gWS5nZXQob1thXSwgZSArIFwicXVldWVIb29rc1wiKSkgJiZcbiAgICAgICAgICAgIG4uZW1wdHkgJiZcbiAgICAgICAgICAgIChyKyssIG4uZW1wdHkuYWRkKHMpKTtcbiAgICAgICAgcmV0dXJuIHMoKSwgaS5wcm9taXNlKHQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgdmFyIGVlID0gL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFxuICAgIHRlID0gbmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIgKyBlZSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIpLFxuICAgIG5lID0gW1wiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCJdLFxuICAgIHJlID0gdy5kb2N1bWVudEVsZW1lbnQsXG4gICAgaWUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIEUuY29udGFpbnMoZS5vd25lckRvY3VtZW50LCBlKTtcbiAgICB9LFxuICAgIG9lID0geyBjb21wb3NlZDogITAgfTtcbiAgcmUuZ2V0Um9vdE5vZGUgJiZcbiAgICAoaWUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgRS5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsIGUpIHx8IGUuZ2V0Um9vdE5vZGUob2UpID09PSBlLm93bmVyRG9jdW1lbnRcbiAgICAgICk7XG4gICAgfSk7XG4gIHZhciBhZSA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwibm9uZVwiID09PSAoZSA9IHQgfHwgZSkuc3R5bGUuZGlzcGxheSB8fFxuICAgICAgKFwiXCIgPT09IGUuc3R5bGUuZGlzcGxheSAmJiBpZShlKSAmJiBcIm5vbmVcIiA9PT0gRS5jc3MoZSwgXCJkaXNwbGF5XCIpKVxuICAgICk7XG4gIH07XG4gIHZhciBzZSA9IHt9O1xuICBmdW5jdGlvbiB1ZShlLCB0KSB7XG4gICAgZm9yICh2YXIgbiwgciwgaSwgbywgYSwgcywgdSwgbCA9IFtdLCBjID0gMCwgZiA9IGUubGVuZ3RoOyBjIDwgZjsgYysrKVxuICAgICAgKHIgPSBlW2NdKS5zdHlsZSAmJlxuICAgICAgICAoKG4gPSByLnN0eWxlLmRpc3BsYXkpLFxuICAgICAgICB0XG4gICAgICAgICAgPyAoXCJub25lXCIgPT09IG4gJiZcbiAgICAgICAgICAgICAgKChsW2NdID0gWS5nZXQociwgXCJkaXNwbGF5XCIpIHx8IG51bGwpLFxuICAgICAgICAgICAgICBsW2NdIHx8IChyLnN0eWxlLmRpc3BsYXkgPSBcIlwiKSksXG4gICAgICAgICAgICBcIlwiID09PSByLnN0eWxlLmRpc3BsYXkgJiZcbiAgICAgICAgICAgICAgYWUocikgJiZcbiAgICAgICAgICAgICAgKGxbY10gPVxuICAgICAgICAgICAgICAgICgodSA9IGEgPSBvID0gdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAoYSA9IChpID0gcikub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgICAgICAgKHMgPSBpLm5vZGVOYW1lKSxcbiAgICAgICAgICAgICAgICAodSA9IHNlW3NdKSB8fFxuICAgICAgICAgICAgICAgICAgKChvID0gYS5ib2R5LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChzKSkpLFxuICAgICAgICAgICAgICAgICAgKHUgPSBFLmNzcyhvLCBcImRpc3BsYXlcIikpLFxuICAgICAgICAgICAgICAgICAgby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFxuICAgICAgICAgICAgICAgICAgXCJub25lXCIgPT09IHUgJiYgKHUgPSBcImJsb2NrXCIpLFxuICAgICAgICAgICAgICAgICAgKHNlW3NdID0gdSkpKSkpXG4gICAgICAgICAgOiBcIm5vbmVcIiAhPT0gbiAmJiAoKGxbY10gPSBcIm5vbmVcIiksIFkuc2V0KHIsIFwiZGlzcGxheVwiLCBuKSkpO1xuICAgIGZvciAoYyA9IDA7IGMgPCBmOyBjKyspIG51bGwgIT0gbFtjXSAmJiAoZVtjXS5zdHlsZS5kaXNwbGF5ID0gbFtjXSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgRS5mbi5leHRlbmQoe1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1ZSh0aGlzLCAhMCk7XG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdWUodGhpcyk7XG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gXCJib29sZWFuXCIgPT0gdHlwZW9mIGVcbiAgICAgICAgPyBlXG4gICAgICAgICAgPyB0aGlzLnNob3coKVxuICAgICAgICAgIDogdGhpcy5oaWRlKClcbiAgICAgICAgOiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWUodGhpcykgPyBFKHRoaXMpLnNob3coKSA6IEUodGhpcykuaGlkZSgpO1xuICAgICAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICB2YXIgbGUsXG4gICAgY2UsXG4gICAgZmUgPSAvXig/OmNoZWNrYm94fHJhZGlvKSQvaSxcbiAgICBkZSA9IC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxcbiAgICBwZSA9IC9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7XG4gIChsZSA9IHcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKHcuY3JlYXRlRWxlbWVudChcImRpdlwiKSkpLFxuICAgIChjZSA9IHcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIiksXG4gICAgY2Uuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIiksXG4gICAgY2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRcIiksXG4gICAgbGUuYXBwZW5kQ2hpbGQoY2UpLFxuICAgIChtLmNoZWNrQ2xvbmUgPSBsZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQpLFxuICAgIChsZS5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIiksXG4gICAgKG0ubm9DbG9uZUNoZWNrZWQgPSAhIWxlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZSksXG4gICAgKGxlLmlubmVySFRNTCA9IFwiPG9wdGlvbj48L29wdGlvbj5cIiksXG4gICAgKG0ub3B0aW9uID0gISFsZS5sYXN0Q2hpbGQpO1xuICB2YXIgaGUgPSB7XG4gICAgdGhlYWQ6IFsxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiXSxcbiAgICBjb2w6IFsyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSxcbiAgICB0cjogWzIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCJdLFxuICAgIHRkOiBbMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sXG4gICAgX2RlZmF1bHQ6IFswLCBcIlwiLCBcIlwiXSxcbiAgfTtcbiAgZnVuY3Rpb24gZ2UoZSwgdCkge1xuICAgIHZhciBuO1xuICAgIHJldHVybiAoXG4gICAgICAobiA9XG4gICAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVcbiAgICAgICAgICA/IGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCB8fCBcIipcIilcbiAgICAgICAgICA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgID8gZS5xdWVyeVNlbGVjdG9yQWxsKHQgfHwgXCIqXCIpXG4gICAgICAgICAgOiBbXSksXG4gICAgICB2b2lkIDAgPT09IHQgfHwgKHQgJiYgUyhlLCB0KSkgPyBFLm1lcmdlKFtlXSwgbikgOiBuXG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiB2ZShlLCB0KSB7XG4gICAgZm9yICh2YXIgbiA9IDAsIHIgPSBlLmxlbmd0aDsgbiA8IHI7IG4rKylcbiAgICAgIFkuc2V0KGVbbl0sIFwiZ2xvYmFsRXZhbFwiLCAhdCB8fCBZLmdldCh0W25dLCBcImdsb2JhbEV2YWxcIikpO1xuICB9XG4gIChoZS50Ym9keSA9IGhlLnRmb290ID0gaGUuY29sZ3JvdXAgPSBoZS5jYXB0aW9uID0gaGUudGhlYWQpLFxuICAgIChoZS50aCA9IGhlLnRkKSxcbiAgICBtLm9wdGlvbiB8fFxuICAgICAgKGhlLm9wdGdyb3VwID0gaGUub3B0aW9uID1cbiAgICAgICAgWzEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiXSk7XG4gIHZhciB5ZSA9IC88fCYjP1xcdys7LztcbiAgZnVuY3Rpb24gbWUoZSwgdCwgbiwgciwgaSkge1xuICAgIGZvciAoXG4gICAgICB2YXIgbyxcbiAgICAgICAgYSxcbiAgICAgICAgcyxcbiAgICAgICAgdSxcbiAgICAgICAgbCxcbiAgICAgICAgYyxcbiAgICAgICAgZiA9IHQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICBkID0gW10sXG4gICAgICAgIHAgPSAwLFxuICAgICAgICBoID0gZS5sZW5ndGg7XG4gICAgICBwIDwgaDtcbiAgICAgIHArK1xuICAgIClcbiAgICAgIGlmICgobyA9IGVbcF0pIHx8IDAgPT09IG8pXG4gICAgICAgIGlmIChcIm9iamVjdFwiID09PSBUKG8pKSBFLm1lcmdlKGQsIG8ubm9kZVR5cGUgPyBbb10gOiBvKTtcbiAgICAgICAgZWxzZSBpZiAoeWUudGVzdChvKSkge1xuICAgICAgICAgIChhID0gYSB8fCBmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkpLFxuICAgICAgICAgICAgKHMgPSAoZGUuZXhlYyhvKSB8fCBbXCJcIiwgXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgKHUgPSBoZVtzXSB8fCBoZS5fZGVmYXVsdCksXG4gICAgICAgICAgICAoYS5pbm5lckhUTUwgPSB1WzFdICsgRS5odG1sUHJlZmlsdGVyKG8pICsgdVsyXSksXG4gICAgICAgICAgICAoYyA9IHVbMF0pO1xuICAgICAgICAgIHdoaWxlIChjLS0pIGEgPSBhLmxhc3RDaGlsZDtcbiAgICAgICAgICBFLm1lcmdlKGQsIGEuY2hpbGROb2RlcyksICgoYSA9IGYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQgPSBcIlwiKTtcbiAgICAgICAgfSBlbHNlIGQucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtcbiAgICAoZi50ZXh0Q29udGVudCA9IFwiXCIpLCAocCA9IDApO1xuICAgIHdoaWxlICgobyA9IGRbcCsrXSkpXG4gICAgICBpZiAociAmJiAtMSA8IEUuaW5BcnJheShvLCByKSkgaSAmJiBpLnB1c2gobyk7XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgKChsID0gaWUobykpLCAoYSA9IGdlKGYuYXBwZW5kQ2hpbGQobyksIFwic2NyaXB0XCIpKSwgbCAmJiB2ZShhKSwgbilcbiAgICAgICkge1xuICAgICAgICBjID0gMDtcbiAgICAgICAgd2hpbGUgKChvID0gYVtjKytdKSkgcGUudGVzdChvLnR5cGUgfHwgXCJcIikgJiYgbi5wdXNoKG8pO1xuICAgICAgfVxuICAgIHJldHVybiBmO1xuICB9XG4gIHZhciBiZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG4gIGZ1bmN0aW9uIHhlKCkge1xuICAgIHJldHVybiAhMDtcbiAgfVxuICBmdW5jdGlvbiB3ZSgpIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbiAgZnVuY3Rpb24gQ2UoZSwgdCkge1xuICAgIHJldHVybiAoXG4gICAgICAoZSA9PT1cbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHcuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9KSgpKSA9PVxuICAgICAgKFwiZm9jdXNcIiA9PT0gdClcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIFRlKGUsIHQsIG4sIHIsIGksIG8pIHtcbiAgICB2YXIgYSwgcztcbiAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgdCkge1xuICAgICAgZm9yIChzIGluIChcInN0cmluZ1wiICE9IHR5cGVvZiBuICYmICgociA9IHIgfHwgbiksIChuID0gdm9pZCAwKSksIHQpKVxuICAgICAgICBUZShlLCBzLCBuLCByLCB0W3NdLCBvKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAobnVsbCA9PSByICYmIG51bGwgPT0gaVxuICAgICAgICA/ICgoaSA9IG4pLCAociA9IG4gPSB2b2lkIDApKVxuICAgICAgICA6IG51bGwgPT0gaSAmJlxuICAgICAgICAgIChcInN0cmluZ1wiID09IHR5cGVvZiBuXG4gICAgICAgICAgICA/ICgoaSA9IHIpLCAociA9IHZvaWQgMCkpXG4gICAgICAgICAgICA6ICgoaSA9IHIpLCAociA9IG4pLCAobiA9IHZvaWQgMCkpKSxcbiAgICAgICExID09PSBpKVxuICAgIClcbiAgICAgIGkgPSB3ZTtcbiAgICBlbHNlIGlmICghaSkgcmV0dXJuIGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDEgPT09IG8gJiZcbiAgICAgICAgKChhID0gaSksXG4gICAgICAgICgoaSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIEUoKS5vZmYoZSksIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSkuZ3VpZCA9IGEuZ3VpZCB8fCAoYS5ndWlkID0gRS5ndWlkKyspKSksXG4gICAgICBlLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBFLmV2ZW50LmFkZCh0aGlzLCB0LCBpLCByLCBuKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBFZShlLCBpLCBvKSB7XG4gICAgb1xuICAgICAgPyAoWS5zZXQoZSwgaSwgITEpLFxuICAgICAgICBFLmV2ZW50LmFkZChlLCBpLCB7XG4gICAgICAgICAgbmFtZXNwYWNlOiAhMSxcbiAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgIHIgPSBZLmdldCh0aGlzLCBpKTtcbiAgICAgICAgICAgIGlmICgxICYgZS5pc1RyaWdnZXIgJiYgdGhpc1tpXSkge1xuICAgICAgICAgICAgICBpZiAoci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgKEUuZXZlbnQuc3BlY2lhbFtpXSB8fCB7fSkuZGVsZWdhdGVUeXBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICgociA9IHMuY2FsbChhcmd1bWVudHMpKSxcbiAgICAgICAgICAgICAgICBZLnNldCh0aGlzLCBpLCByKSxcbiAgICAgICAgICAgICAgICAodCA9IG8odGhpcywgaSkpLFxuICAgICAgICAgICAgICAgIHRoaXNbaV0oKSxcbiAgICAgICAgICAgICAgICByICE9PSAobiA9IFkuZ2V0KHRoaXMsIGkpKSB8fCB0ID8gWS5zZXQodGhpcywgaSwgITEpIDogKG4gPSB7fSksXG4gICAgICAgICAgICAgICAgciAhPT0gbilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLCBlLnByZXZlbnREZWZhdWx0KCksIG4gJiYgbi52YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgci5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAoWS5zZXQodGhpcywgaSwge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IEUuZXZlbnQudHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgRS5leHRlbmQoclswXSwgRS5FdmVudC5wcm90b3R5cGUpLFxuICAgICAgICAgICAgICAgICAgICByLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuICAgICAgOiB2b2lkIDAgPT09IFkuZ2V0KGUsIGkpICYmIEUuZXZlbnQuYWRkKGUsIGksIHhlKTtcbiAgfVxuICAoRS5ldmVudCA9IHtcbiAgICBnbG9iYWw6IHt9LFxuICAgIGFkZDogZnVuY3Rpb24gKHQsIGUsIG4sIHIsIGkpIHtcbiAgICAgIHZhciBvLFxuICAgICAgICBhLFxuICAgICAgICBzLFxuICAgICAgICB1LFxuICAgICAgICBsLFxuICAgICAgICBjLFxuICAgICAgICBmLFxuICAgICAgICBkLFxuICAgICAgICBwLFxuICAgICAgICBoLFxuICAgICAgICBnLFxuICAgICAgICB2ID0gWS5nZXQodCk7XG4gICAgICBpZiAoWCh0KSkge1xuICAgICAgICBuLmhhbmRsZXIgJiYgKChuID0gKG8gPSBuKS5oYW5kbGVyKSwgKGkgPSBvLnNlbGVjdG9yKSksXG4gICAgICAgICAgaSAmJiBFLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJlLCBpKSxcbiAgICAgICAgICBuLmd1aWQgfHwgKG4uZ3VpZCA9IEUuZ3VpZCsrKSxcbiAgICAgICAgICAodSA9IHYuZXZlbnRzKSB8fCAodSA9IHYuZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSksXG4gICAgICAgICAgKGEgPSB2LmhhbmRsZSkgfHxcbiAgICAgICAgICAgIChhID0gdi5oYW5kbGUgPVxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBFICYmIEUuZXZlbnQudHJpZ2dlcmVkICE9PSBlLnR5cGVcbiAgICAgICAgICAgICAgICAgID8gRS5ldmVudC5kaXNwYXRjaC5hcHBseSh0LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgKGwgPSAoZSA9IChlIHx8IFwiXCIpLm1hdGNoKEgpIHx8IFtcIlwiXSkubGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGwtLSlcbiAgICAgICAgICAocCA9IGcgPSAocyA9IGJlLmV4ZWMoZVtsXSkgfHwgW10pWzFdKSxcbiAgICAgICAgICAgIChoID0gKHNbMl0gfHwgXCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSksXG4gICAgICAgICAgICBwICYmXG4gICAgICAgICAgICAgICgoZiA9IEUuZXZlbnQuc3BlY2lhbFtwXSB8fCB7fSksXG4gICAgICAgICAgICAgIChwID0gKGkgPyBmLmRlbGVnYXRlVHlwZSA6IGYuYmluZFR5cGUpIHx8IHApLFxuICAgICAgICAgICAgICAoZiA9IEUuZXZlbnQuc3BlY2lhbFtwXSB8fCB7fSksXG4gICAgICAgICAgICAgIChjID0gRS5leHRlbmQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogcCxcbiAgICAgICAgICAgICAgICAgIG9yaWdUeXBlOiBnLFxuICAgICAgICAgICAgICAgICAgZGF0YTogcixcbiAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IG4sXG4gICAgICAgICAgICAgICAgICBndWlkOiBuLmd1aWQsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogaSxcbiAgICAgICAgICAgICAgICAgIG5lZWRzQ29udGV4dDogaSAmJiBFLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksXG4gICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IGguam9pbihcIi5cIiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAoZCA9IHVbcF0pIHx8XG4gICAgICAgICAgICAgICAgKCgoZCA9IHVbcF0gPSBbXSkuZGVsZWdhdGVDb3VudCA9IDApLFxuICAgICAgICAgICAgICAgIChmLnNldHVwICYmICExICE9PSBmLnNldHVwLmNhbGwodCwgciwgaCwgYSkpIHx8XG4gICAgICAgICAgICAgICAgICAodC5hZGRFdmVudExpc3RlbmVyICYmIHQuYWRkRXZlbnRMaXN0ZW5lcihwLCBhKSkpLFxuICAgICAgICAgICAgICBmLmFkZCAmJlxuICAgICAgICAgICAgICAgIChmLmFkZC5jYWxsKHQsIGMpLCBjLmhhbmRsZXIuZ3VpZCB8fCAoYy5oYW5kbGVyLmd1aWQgPSBuLmd1aWQpKSxcbiAgICAgICAgICAgICAgaSA/IGQuc3BsaWNlKGQuZGVsZWdhdGVDb3VudCsrLCAwLCBjKSA6IGQucHVzaChjKSxcbiAgICAgICAgICAgICAgKEUuZXZlbnQuZ2xvYmFsW3BdID0gITApKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gKGUsIHQsIG4sIHIsIGkpIHtcbiAgICAgIHZhciBvLFxuICAgICAgICBhLFxuICAgICAgICBzLFxuICAgICAgICB1LFxuICAgICAgICBsLFxuICAgICAgICBjLFxuICAgICAgICBmLFxuICAgICAgICBkLFxuICAgICAgICBwLFxuICAgICAgICBoLFxuICAgICAgICBnLFxuICAgICAgICB2ID0gWS5oYXNEYXRhKGUpICYmIFkuZ2V0KGUpO1xuICAgICAgaWYgKHYgJiYgKHUgPSB2LmV2ZW50cykpIHtcbiAgICAgICAgbCA9ICh0ID0gKHQgfHwgXCJcIikubWF0Y2goSCkgfHwgW1wiXCJdKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChwID0gZyA9IChzID0gYmUuZXhlYyh0W2xdKSB8fCBbXSlbMV0pLFxuICAgICAgICAgICAgKGggPSAoc1syXSB8fCBcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpKSxcbiAgICAgICAgICAgIHApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAoZiA9IEUuZXZlbnQuc3BlY2lhbFtwXSB8fCB7fSksXG4gICAgICAgICAgICAgIChkID0gdVsocCA9IChyID8gZi5kZWxlZ2F0ZVR5cGUgOiBmLmJpbmRUeXBlKSB8fCBwKV0gfHwgW10pLFxuICAgICAgICAgICAgICAocyA9XG4gICAgICAgICAgICAgICAgc1syXSAmJlxuICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIiArIGguam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIikpLFxuICAgICAgICAgICAgICAoYSA9IG8gPSBkLmxlbmd0aCk7XG4gICAgICAgICAgICB3aGlsZSAoby0tKVxuICAgICAgICAgICAgICAoYyA9IGRbb10pLFxuICAgICAgICAgICAgICAgICghaSAmJiBnICE9PSBjLm9yaWdUeXBlKSB8fFxuICAgICAgICAgICAgICAgICAgKG4gJiYgbi5ndWlkICE9PSBjLmd1aWQpIHx8XG4gICAgICAgICAgICAgICAgICAocyAmJiAhcy50ZXN0KGMubmFtZXNwYWNlKSkgfHxcbiAgICAgICAgICAgICAgICAgIChyICYmIHIgIT09IGMuc2VsZWN0b3IgJiYgKFwiKipcIiAhPT0gciB8fCAhYy5zZWxlY3RvcikpIHx8XG4gICAgICAgICAgICAgICAgICAoZC5zcGxpY2UobywgMSksXG4gICAgICAgICAgICAgICAgICBjLnNlbGVjdG9yICYmIGQuZGVsZWdhdGVDb3VudC0tLFxuICAgICAgICAgICAgICAgICAgZi5yZW1vdmUgJiYgZi5yZW1vdmUuY2FsbChlLCBjKSk7XG4gICAgICAgICAgICBhICYmXG4gICAgICAgICAgICAgICFkLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAoKGYudGVhcmRvd24gJiYgITEgIT09IGYudGVhcmRvd24uY2FsbChlLCBoLCB2LmhhbmRsZSkpIHx8XG4gICAgICAgICAgICAgICAgRS5yZW1vdmVFdmVudChlLCBwLCB2LmhhbmRsZSksXG4gICAgICAgICAgICAgIGRlbGV0ZSB1W3BdKTtcbiAgICAgICAgICB9IGVsc2UgZm9yIChwIGluIHUpIEUuZXZlbnQucmVtb3ZlKGUsIHAgKyB0W2xdLCBuLCByLCAhMCk7XG4gICAgICAgIEUuaXNFbXB0eU9iamVjdCh1KSAmJiBZLnJlbW92ZShlLCBcImhhbmRsZSBldmVudHNcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0LFxuICAgICAgICBuLFxuICAgICAgICByLFxuICAgICAgICBpLFxuICAgICAgICBvLFxuICAgICAgICBhLFxuICAgICAgICBzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLFxuICAgICAgICB1ID0gRS5ldmVudC5maXgoZSksXG4gICAgICAgIGwgPSAoWS5nZXQodGhpcywgXCJldmVudHNcIikgfHwgT2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXSB8fCBbXSxcbiAgICAgICAgYyA9IEUuZXZlbnQuc3BlY2lhbFt1LnR5cGVdIHx8IHt9O1xuICAgICAgZm9yIChzWzBdID0gdSwgdCA9IDE7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIHNbdF0gPSBhcmd1bWVudHNbdF07XG4gICAgICBpZiAoXG4gICAgICAgICgodS5kZWxlZ2F0ZVRhcmdldCA9IHRoaXMpLFxuICAgICAgICAhYy5wcmVEaXNwYXRjaCB8fCAhMSAhPT0gYy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsIHUpKVxuICAgICAgKSB7XG4gICAgICAgIChhID0gRS5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsIHUsIGwpKSwgKHQgPSAwKTtcbiAgICAgICAgd2hpbGUgKChpID0gYVt0KytdKSAmJiAhdS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgKHUuY3VycmVudFRhcmdldCA9IGkuZWxlbSksIChuID0gMCk7XG4gICAgICAgICAgd2hpbGUgKChvID0gaS5oYW5kbGVyc1tuKytdKSAmJiAhdS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKVxuICAgICAgICAgICAgKHUucm5hbWVzcGFjZSAmJlxuICAgICAgICAgICAgICAhMSAhPT0gby5uYW1lc3BhY2UgJiZcbiAgICAgICAgICAgICAgIXUucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKSkgfHxcbiAgICAgICAgICAgICAgKCh1LmhhbmRsZU9iaiA9IG8pLFxuICAgICAgICAgICAgICAodS5kYXRhID0gby5kYXRhKSxcbiAgICAgICAgICAgICAgdm9pZCAwICE9PVxuICAgICAgICAgICAgICAgIChyID0gKFxuICAgICAgICAgICAgICAgICAgKEUuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXSB8fCB7fSkuaGFuZGxlIHx8IG8uaGFuZGxlclxuICAgICAgICAgICAgICAgICkuYXBwbHkoaS5lbGVtLCBzKSkgJiZcbiAgICAgICAgICAgICAgICAhMSA9PT0gKHUucmVzdWx0ID0gcikgJiZcbiAgICAgICAgICAgICAgICAodS5wcmV2ZW50RGVmYXVsdCgpLCB1LnN0b3BQcm9wYWdhdGlvbigpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGMucG9zdERpc3BhdGNoICYmIGMucG9zdERpc3BhdGNoLmNhbGwodGhpcywgdSksIHUucmVzdWx0O1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlcnM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB2YXIgbixcbiAgICAgICAgcixcbiAgICAgICAgaSxcbiAgICAgICAgbyxcbiAgICAgICAgYSxcbiAgICAgICAgcyA9IFtdLFxuICAgICAgICB1ID0gdC5kZWxlZ2F0ZUNvdW50LFxuICAgICAgICBsID0gZS50YXJnZXQ7XG4gICAgICBpZiAodSAmJiBsLm5vZGVUeXBlICYmICEoXCJjbGlja1wiID09PSBlLnR5cGUgJiYgMSA8PSBlLmJ1dHRvbikpXG4gICAgICAgIGZvciAoOyBsICE9PSB0aGlzOyBsID0gbC5wYXJlbnROb2RlIHx8IHRoaXMpXG4gICAgICAgICAgaWYgKDEgPT09IGwubm9kZVR5cGUgJiYgKFwiY2xpY2tcIiAhPT0gZS50eXBlIHx8ICEwICE9PSBsLmRpc2FibGVkKSkge1xuICAgICAgICAgICAgZm9yIChvID0gW10sIGEgPSB7fSwgbiA9IDA7IG4gPCB1OyBuKyspXG4gICAgICAgICAgICAgIHZvaWQgMCA9PT0gYVsoaSA9IChyID0gdFtuXSkuc2VsZWN0b3IgKyBcIiBcIildICYmXG4gICAgICAgICAgICAgICAgKGFbaV0gPSByLm5lZWRzQ29udGV4dFxuICAgICAgICAgICAgICAgICAgPyAtMSA8IEUoaSwgdGhpcykuaW5kZXgobClcbiAgICAgICAgICAgICAgICAgIDogRS5maW5kKGksIHRoaXMsIG51bGwsIFtsXSkubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICBhW2ldICYmIG8ucHVzaChyKTtcbiAgICAgICAgICAgIG8ubGVuZ3RoICYmIHMucHVzaCh7IGVsZW06IGwsIGhhbmRsZXJzOiBvIH0pO1xuICAgICAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChsID0gdGhpcyksIHUgPCB0Lmxlbmd0aCAmJiBzLnB1c2goeyBlbGVtOiBsLCBoYW5kbGVyczogdC5zbGljZSh1KSB9KSwgc1xuICAgICAgKTtcbiAgICB9LFxuICAgIGFkZFByb3A6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRS5FdmVudC5wcm90b3R5cGUsIHQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgIGdldDogYihlKVxuICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50KSByZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50KSByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCB0LCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICB2YWx1ZTogZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZml4OiBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGVbRS5leHBhbmRvXSA/IGUgOiBuZXcgRS5FdmVudChlKTtcbiAgICB9LFxuICAgIHNwZWNpYWw6IHtcbiAgICAgIGxvYWQ6IHsgbm9CdWJibGU6ICEwIH0sXG4gICAgICBjbGljazoge1xuICAgICAgICBzZXR1cDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMgfHwgZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZmUudGVzdCh0LnR5cGUpICYmIHQuY2xpY2sgJiYgUyh0LCBcImlucHV0XCIpICYmIEVlKHQsIFwiY2xpY2tcIiwgeGUpLFxuICAgICAgICAgICAgITFcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcyB8fCBlO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBmZS50ZXN0KHQudHlwZSkgJiYgdC5jbGljayAmJiBTKHQsIFwiaW5wdXRcIikgJiYgRWUodCwgXCJjbGlja1wiKSwgITBcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBfZGVmYXVsdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGUudGFyZ2V0O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoZmUudGVzdCh0LnR5cGUpICYmXG4gICAgICAgICAgICAgIHQuY2xpY2sgJiZcbiAgICAgICAgICAgICAgUyh0LCBcImlucHV0XCIpICYmXG4gICAgICAgICAgICAgIFkuZ2V0KHQsIFwiY2xpY2tcIikpIHx8XG4gICAgICAgICAgICBTKHQsIFwiYVwiKVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmVmb3JldW5sb2FkOiB7XG4gICAgICAgIHBvc3REaXNwYXRjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2b2lkIDAgIT09IGUucmVzdWx0ICYmXG4gICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQgJiZcbiAgICAgICAgICAgIChlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBlLnJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICAgIChFLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lciAmJiBlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCwgbik7XG4gICAgfSksXG4gICAgKEUuRXZlbnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEUuRXZlbnQpKSByZXR1cm4gbmV3IEUuRXZlbnQoZSwgdCk7XG4gICAgICBlICYmIGUudHlwZVxuICAgICAgICA/ICgodGhpcy5vcmlnaW5hbEV2ZW50ID0gZSksXG4gICAgICAgICAgKHRoaXMudHlwZSA9IGUudHlwZSksXG4gICAgICAgICAgKHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID1cbiAgICAgICAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCB8fFxuICAgICAgICAgICAgKHZvaWQgMCA9PT0gZS5kZWZhdWx0UHJldmVudGVkICYmICExID09PSBlLnJldHVyblZhbHVlKVxuICAgICAgICAgICAgICA/IHhlXG4gICAgICAgICAgICAgIDogd2UpLFxuICAgICAgICAgICh0aGlzLnRhcmdldCA9XG4gICAgICAgICAgICBlLnRhcmdldCAmJiAzID09PSBlLnRhcmdldC5ub2RlVHlwZVxuICAgICAgICAgICAgICA/IGUudGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgOiBlLnRhcmdldCksXG4gICAgICAgICAgKHRoaXMuY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgKHRoaXMucmVsYXRlZFRhcmdldCA9IGUucmVsYXRlZFRhcmdldCkpXG4gICAgICAgIDogKHRoaXMudHlwZSA9IGUpLFxuICAgICAgICB0ICYmIEUuZXh0ZW5kKHRoaXMsIHQpLFxuICAgICAgICAodGhpcy50aW1lU3RhbXAgPSAoZSAmJiBlLnRpbWVTdGFtcCkgfHwgRGF0ZS5ub3coKSksXG4gICAgICAgICh0aGlzW0UuZXhwYW5kb10gPSAhMCk7XG4gICAgfSksXG4gICAgKEUuRXZlbnQucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IEUuRXZlbnQsXG4gICAgICBpc0RlZmF1bHRQcmV2ZW50ZWQ6IHdlLFxuICAgICAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHdlLFxuICAgICAgaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHdlLFxuICAgICAgaXNTaW11bGF0ZWQ6ICExLFxuICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICh0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHhlKSxcbiAgICAgICAgICBlICYmICF0aGlzLmlzU2ltdWxhdGVkICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICh0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0geGUpLFxuICAgICAgICAgIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgJiYgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICh0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0geGUpLFxuICAgICAgICAgIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgJiYgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBFLmVhY2goXG4gICAgICB7XG4gICAgICAgIGFsdEtleTogITAsXG4gICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICBjYW5jZWxhYmxlOiAhMCxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6ICEwLFxuICAgICAgICBjdHJsS2V5OiAhMCxcbiAgICAgICAgZGV0YWlsOiAhMCxcbiAgICAgICAgZXZlbnRQaGFzZTogITAsXG4gICAgICAgIG1ldGFLZXk6ICEwLFxuICAgICAgICBwYWdlWDogITAsXG4gICAgICAgIHBhZ2VZOiAhMCxcbiAgICAgICAgc2hpZnRLZXk6ICEwLFxuICAgICAgICB2aWV3OiAhMCxcbiAgICAgICAgY2hhcjogITAsXG4gICAgICAgIGNvZGU6ICEwLFxuICAgICAgICBjaGFyQ29kZTogITAsXG4gICAgICAgIGtleTogITAsXG4gICAgICAgIGtleUNvZGU6ICEwLFxuICAgICAgICBidXR0b246ICEwLFxuICAgICAgICBidXR0b25zOiAhMCxcbiAgICAgICAgY2xpZW50WDogITAsXG4gICAgICAgIGNsaWVudFk6ICEwLFxuICAgICAgICBvZmZzZXRYOiAhMCxcbiAgICAgICAgb2Zmc2V0WTogITAsXG4gICAgICAgIHBvaW50ZXJJZDogITAsXG4gICAgICAgIHBvaW50ZXJUeXBlOiAhMCxcbiAgICAgICAgc2NyZWVuWDogITAsXG4gICAgICAgIHNjcmVlblk6ICEwLFxuICAgICAgICB0YXJnZXRUb3VjaGVzOiAhMCxcbiAgICAgICAgdG9FbGVtZW50OiAhMCxcbiAgICAgICAgdG91Y2hlczogITAsXG4gICAgICAgIHdoaWNoOiAhMCxcbiAgICAgIH0sXG4gICAgICBFLmV2ZW50LmFkZFByb3BcbiAgICApLFxuICAgIEUuZWFjaCh7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBFLmV2ZW50LnNwZWNpYWxbdF0gPSB7XG4gICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIEVlKHRoaXMsIHQsIENlKSwgITE7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gRWUodGhpcywgdCksICEwO1xuICAgICAgICB9LFxuICAgICAgICBfZGVmYXVsdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gWS5nZXQoZS50YXJnZXQsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBkZWxlZ2F0ZVR5cGU6IGUsXG4gICAgICB9O1xuICAgIH0pLFxuICAgIEUuZWFjaChcbiAgICAgIHtcbiAgICAgICAgbW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcbiAgICAgICAgbW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuICAgICAgICBwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcbiAgICAgICAgcG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIixcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBFLmV2ZW50LnNwZWNpYWxbZV0gPSB7XG4gICAgICAgICAgZGVsZWdhdGVUeXBlOiBpLFxuICAgICAgICAgIGJpbmRUeXBlOiBpLFxuICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0LFxuICAgICAgICAgICAgICBuID0gZS5yZWxhdGVkVGFyZ2V0LFxuICAgICAgICAgICAgICByID0gZS5oYW5kbGVPYmo7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAobiAmJiAobiA9PT0gdGhpcyB8fCBFLmNvbnRhaW5zKHRoaXMsIG4pKSkgfHxcbiAgICAgICAgICAgICAgICAoKGUudHlwZSA9IHIub3JpZ1R5cGUpLFxuICAgICAgICAgICAgICAgICh0ID0gci5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLFxuICAgICAgICAgICAgICAgIChlLnR5cGUgPSBpKSksXG4gICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLFxuICAgIEUuZm4uZXh0ZW5kKHtcbiAgICAgIG9uOiBmdW5jdGlvbiAoZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gVGUodGhpcywgZSwgdCwgbiwgcik7XG4gICAgICB9LFxuICAgICAgb25lOiBmdW5jdGlvbiAoZSwgdCwgbiwgcikge1xuICAgICAgICByZXR1cm4gVGUodGhpcywgZSwgdCwgbiwgciwgMSk7XG4gICAgICB9LFxuICAgICAgb2ZmOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICB2YXIgciwgaTtcbiAgICAgICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLmhhbmRsZU9iailcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHIgPSBlLmhhbmRsZU9iaiksXG4gICAgICAgICAgICBFKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihcbiAgICAgICAgICAgICAgci5uYW1lc3BhY2UgPyByLm9yaWdUeXBlICsgXCIuXCIgKyByLm5hbWVzcGFjZSA6IHIub3JpZ1R5cGUsXG4gICAgICAgICAgICAgIHIuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHIuaGFuZGxlclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICApO1xuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZSkge1xuICAgICAgICAgIGZvciAoaSBpbiBlKSB0aGlzLm9mZihpLCB0LCBlW2ldKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICghMSAhPT0gdCAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQpIHx8ICgobiA9IHQpLCAodCA9IHZvaWQgMCkpLFxuICAgICAgICAgICExID09PSBuICYmIChuID0gd2UpLFxuICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBFLmV2ZW50LnJlbW92ZSh0aGlzLCBlLCBuLCB0KTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgdmFyIEFlID0gLzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksXG4gICAgTmUgPSAvY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLFxuICAgIFNlID0gL15cXHMqPCFcXFtDREFUQVxcW3xcXF1cXF0+XFxzKiQvZztcbiAgZnVuY3Rpb24ga2UoZSwgdCkge1xuICAgIHJldHVybiAoXG4gICAgICAoUyhlLCBcInRhYmxlXCIpICYmXG4gICAgICAgIFMoMTEgIT09IHQubm9kZVR5cGUgPyB0IDogdC5maXJzdENoaWxkLCBcInRyXCIpICYmXG4gICAgICAgIEUoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXSkgfHxcbiAgICAgIGVcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIERlKGUpIHtcbiAgICByZXR1cm4gKGUudHlwZSA9IChudWxsICE9PSBlLmdldEF0dHJpYnV0ZShcInR5cGVcIikpICsgXCIvXCIgKyBlLnR5cGUpLCBlO1xuICB9XG4gIGZ1bmN0aW9uIExlKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgXCJ0cnVlL1wiID09PSAoZS50eXBlIHx8IFwiXCIpLnNsaWNlKDAsIDUpXG4gICAgICAgID8gKGUudHlwZSA9IGUudHlwZS5zbGljZSg1KSlcbiAgICAgICAgOiBlLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksXG4gICAgICBlXG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBqZShlLCB0KSB7XG4gICAgdmFyIG4sIHIsIGksIG8sIGEsIHM7XG4gICAgaWYgKDEgPT09IHQubm9kZVR5cGUpIHtcbiAgICAgIGlmIChZLmhhc0RhdGEoZSkgJiYgKHMgPSBZLmdldChlKS5ldmVudHMpKVxuICAgICAgICBmb3IgKGkgaW4gKFkucmVtb3ZlKHQsIFwiaGFuZGxlIGV2ZW50c1wiKSwgcykpXG4gICAgICAgICAgZm9yIChuID0gMCwgciA9IHNbaV0ubGVuZ3RoOyBuIDwgcjsgbisrKSBFLmV2ZW50LmFkZCh0LCBpLCBzW2ldW25dKTtcbiAgICAgIEcuaGFzRGF0YShlKSAmJiAoKG8gPSBHLmFjY2VzcyhlKSksIChhID0gRS5leHRlbmQoe30sIG8pKSwgRy5zZXQodCwgYSkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBxZShuLCByLCBpLCBvKSB7XG4gICAgciA9IHYocik7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgYSxcbiAgICAgIHMsXG4gICAgICB1LFxuICAgICAgbCxcbiAgICAgIGMgPSAwLFxuICAgICAgZiA9IG4ubGVuZ3RoLFxuICAgICAgZCA9IGYgLSAxLFxuICAgICAgcCA9IHJbMF0sXG4gICAgICBoID0gYihwKTtcbiAgICBpZiAoaCB8fCAoMSA8IGYgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgcCAmJiAhbS5jaGVja0Nsb25lICYmIE5lLnRlc3QocCkpKVxuICAgICAgcmV0dXJuIG4uZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IG4uZXEoZSk7XG4gICAgICAgIGggJiYgKHJbMF0gPSBwLmNhbGwodGhpcywgZSwgdC5odG1sKCkpKSwgcWUodCwgciwgaSwgbyk7XG4gICAgICB9KTtcbiAgICBpZiAoXG4gICAgICBmICYmXG4gICAgICAoKHQgPSAoZSA9IG1lKHIsIG5bMF0ub3duZXJEb2N1bWVudCwgITEsIG4sIG8pKS5maXJzdENoaWxkKSxcbiAgICAgIDEgPT09IGUuY2hpbGROb2Rlcy5sZW5ndGggJiYgKGUgPSB0KSxcbiAgICAgIHQgfHwgbylcbiAgICApIHtcbiAgICAgIGZvciAocyA9IChhID0gRS5tYXAoZ2UoZSwgXCJzY3JpcHRcIiksIERlKSkubGVuZ3RoOyBjIDwgZjsgYysrKVxuICAgICAgICAodSA9IGUpLFxuICAgICAgICAgIGMgIT09IGQgJiZcbiAgICAgICAgICAgICgodSA9IEUuY2xvbmUodSwgITAsICEwKSksIHMgJiYgRS5tZXJnZShhLCBnZSh1LCBcInNjcmlwdFwiKSkpLFxuICAgICAgICAgIGkuY2FsbChuW2NdLCB1LCBjKTtcbiAgICAgIGlmIChzKVxuICAgICAgICBmb3IgKGwgPSBhW2EubGVuZ3RoIC0gMV0ub3duZXJEb2N1bWVudCwgRS5tYXAoYSwgTGUpLCBjID0gMDsgYyA8IHM7IGMrKylcbiAgICAgICAgICAodSA9IGFbY10pLFxuICAgICAgICAgICAgcGUudGVzdCh1LnR5cGUgfHwgXCJcIikgJiZcbiAgICAgICAgICAgICAgIVkuYWNjZXNzKHUsIFwiZ2xvYmFsRXZhbFwiKSAmJlxuICAgICAgICAgICAgICBFLmNvbnRhaW5zKGwsIHUpICYmXG4gICAgICAgICAgICAgICh1LnNyYyAmJiBcIm1vZHVsZVwiICE9PSAodS50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICA/IEUuX2V2YWxVcmwgJiZcbiAgICAgICAgICAgICAgICAgICF1Lm5vTW9kdWxlICYmXG4gICAgICAgICAgICAgICAgICBFLl9ldmFsVXJsKFxuICAgICAgICAgICAgICAgICAgICB1LnNyYyxcbiAgICAgICAgICAgICAgICAgICAgeyBub25jZTogdS5ub25jZSB8fCB1LmdldEF0dHJpYnV0ZShcIm5vbmNlXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IEModS50ZXh0Q29udGVudC5yZXBsYWNlKFNlLCBcIlwiKSwgdSwgbCkpO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBmdW5jdGlvbiBPZShlLCB0LCBuKSB7XG4gICAgZm9yICh2YXIgciwgaSA9IHQgPyBFLmZpbHRlcih0LCBlKSA6IGUsIG8gPSAwOyBudWxsICE9IChyID0gaVtvXSk7IG8rKylcbiAgICAgIG4gfHwgMSAhPT0gci5ub2RlVHlwZSB8fCBFLmNsZWFuRGF0YShnZShyKSksXG4gICAgICAgIHIucGFyZW50Tm9kZSAmJlxuICAgICAgICAgIChuICYmIGllKHIpICYmIHZlKGdlKHIsIFwic2NyaXB0XCIpKSwgci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBFLmV4dGVuZCh7XG4gICAgaHRtbFByZWZpbHRlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICB2YXIgcixcbiAgICAgICAgaSxcbiAgICAgICAgbyxcbiAgICAgICAgYSxcbiAgICAgICAgcyxcbiAgICAgICAgdSxcbiAgICAgICAgbCxcbiAgICAgICAgYyA9IGUuY2xvbmVOb2RlKCEwKSxcbiAgICAgICAgZiA9IGllKGUpO1xuICAgICAgaWYgKFxuICAgICAgICAhKFxuICAgICAgICAgIG0ubm9DbG9uZUNoZWNrZWQgfHxcbiAgICAgICAgICAoMSAhPT0gZS5ub2RlVHlwZSAmJiAxMSAhPT0gZS5ub2RlVHlwZSkgfHxcbiAgICAgICAgICBFLmlzWE1MRG9jKGUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgZm9yIChhID0gZ2UoYyksIHIgPSAwLCBpID0gKG8gPSBnZShlKSkubGVuZ3RoOyByIDwgaTsgcisrKVxuICAgICAgICAgIChzID0gb1tyXSksXG4gICAgICAgICAgICAodSA9IGFbcl0pLFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgXCJpbnB1dFwiID09PSAobCA9IHUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgJiYgZmUudGVzdChzLnR5cGUpXG4gICAgICAgICAgICAgID8gKHUuY2hlY2tlZCA9IHMuY2hlY2tlZClcbiAgICAgICAgICAgICAgOiAoXCJpbnB1dFwiICE9PSBsICYmIFwidGV4dGFyZWFcIiAhPT0gbCkgfHxcbiAgICAgICAgICAgICAgICAodS5kZWZhdWx0VmFsdWUgPSBzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICBpZiAodClcbiAgICAgICAgaWYgKG4pXG4gICAgICAgICAgZm9yIChvID0gbyB8fCBnZShlKSwgYSA9IGEgfHwgZ2UoYyksIHIgPSAwLCBpID0gby5sZW5ndGg7IHIgPCBpOyByKyspXG4gICAgICAgICAgICBqZShvW3JdLCBhW3JdKTtcbiAgICAgICAgZWxzZSBqZShlLCBjKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDAgPCAoYSA9IGdlKGMsIFwic2NyaXB0XCIpKS5sZW5ndGggJiYgdmUoYSwgIWYgJiYgZ2UoZSwgXCJzY3JpcHRcIikpLCBjXG4gICAgICApO1xuICAgIH0sXG4gICAgY2xlYW5EYXRhOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZm9yICh2YXIgdCwgbiwgciwgaSA9IEUuZXZlbnQuc3BlY2lhbCwgbyA9IDA7IHZvaWQgMCAhPT0gKG4gPSBlW29dKTsgbysrKVxuICAgICAgICBpZiAoWChuKSkge1xuICAgICAgICAgIGlmICgodCA9IG5bWS5leHBhbmRvXSkpIHtcbiAgICAgICAgICAgIGlmICh0LmV2ZW50cylcbiAgICAgICAgICAgICAgZm9yIChyIGluIHQuZXZlbnRzKVxuICAgICAgICAgICAgICAgIGlbcl0gPyBFLmV2ZW50LnJlbW92ZShuLCByKSA6IEUucmVtb3ZlRXZlbnQobiwgciwgdC5oYW5kbGUpO1xuICAgICAgICAgICAgbltZLmV4cGFuZG9dID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuW0cuZXhwYW5kb10gJiYgKG5bRy5leHBhbmRvXSA9IHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICB9LFxuICB9KSxcbiAgICBFLmZuLmV4dGVuZCh7XG4gICAgICBkZXRhY2g6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBPZSh0aGlzLCBlLCAhMCk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gT2UodGhpcywgZSk7XG4gICAgICB9LFxuICAgICAgdGV4dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuICQoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gZVxuICAgICAgICAgICAgICA/IEUudGV4dCh0aGlzKVxuICAgICAgICAgICAgICA6IHRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICgxICE9PSB0aGlzLm5vZGVUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgIDExICE9PSB0aGlzLm5vZGVUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgIDkgIT09IHRoaXMubm9kZVR5cGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnRleHRDb250ZW50ID0gZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGUsXG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGFwcGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcWUodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICgxICE9PSB0aGlzLm5vZGVUeXBlICYmXG4gICAgICAgICAgICAxMSAhPT0gdGhpcy5ub2RlVHlwZSAmJlxuICAgICAgICAgICAgOSAhPT0gdGhpcy5ub2RlVHlwZSkgfHxcbiAgICAgICAgICAgIGtlKHRoaXMsIGUpLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBwcmVwZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBxZSh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgMSA9PT0gdGhpcy5ub2RlVHlwZSB8fFxuICAgICAgICAgICAgMTEgPT09IHRoaXMubm9kZVR5cGUgfHxcbiAgICAgICAgICAgIDkgPT09IHRoaXMubm9kZVR5cGVcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciB0ID0ga2UodGhpcywgZSk7XG4gICAgICAgICAgICB0Lmluc2VydEJlZm9yZShlLCB0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYmVmb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBxZSh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFmdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBxZSh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGUsIHQgPSAwOyBudWxsICE9IChlID0gdGhpc1t0XSk7IHQrKylcbiAgICAgICAgICAxID09PSBlLm5vZGVUeXBlICYmIChFLmNsZWFuRGF0YShnZShlLCAhMSkpLCAoZS50ZXh0Q29udGVudCA9IFwiXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgY2xvbmU6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGUgPSBudWxsICE9IGUgJiYgZSksXG4gICAgICAgICAgKHQgPSBudWxsID09IHQgPyBlIDogdCksXG4gICAgICAgICAgdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEUuY2xvbmUodGhpcywgZSwgdCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBodG1sOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gJChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXNbMF0gfHwge30sXG4gICAgICAgICAgICAgIG4gPSAwLFxuICAgICAgICAgICAgICByID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBlICYmIDEgPT09IHQubm9kZVR5cGUpIHJldHVybiB0LmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJlxuICAgICAgICAgICAgICAhQWUudGVzdChlKSAmJlxuICAgICAgICAgICAgICAhaGVbKGRlLmV4ZWMoZSkgfHwgW1wiXCIsIFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGUgPSBFLmh0bWxQcmVmaWx0ZXIoZSk7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IG4gPCByOyBuKyspXG4gICAgICAgICAgICAgICAgICAxID09PSAodCA9IHRoaXNbbl0gfHwge30pLm5vZGVUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgIChFLmNsZWFuRGF0YShnZSh0LCAhMSkpLCAodC5pbm5lckhUTUwgPSBlKSk7XG4gICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ICYmIHRoaXMuZW1wdHkoKS5hcHBlbmQoZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGUsXG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIHJldHVybiBxZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50cyxcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBFLmluQXJyYXkodGhpcywgbikgPCAwICYmXG4gICAgICAgICAgICAgIChFLmNsZWFuRGF0YShnZSh0aGlzKSksIHQgJiYgdC5yZXBsYWNlQ2hpbGQoZSwgdGhpcykpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgblxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBFLmVhY2goXG4gICAgICB7XG4gICAgICAgIGFwcGVuZFRvOiBcImFwcGVuZFwiLFxuICAgICAgICBwcmVwZW5kVG86IFwicHJlcGVuZFwiLFxuICAgICAgICBpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXG4gICAgICAgIGluc2VydEFmdGVyOiBcImFmdGVyXCIsXG4gICAgICAgIHJlcGxhY2VBbGw6IFwicmVwbGFjZVdpdGhcIixcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZSwgYSkge1xuICAgICAgICBFLmZuW2VdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBmb3IgKHZhciB0LCBuID0gW10sIHIgPSBFKGUpLCBpID0gci5sZW5ndGggLSAxLCBvID0gMDsgbyA8PSBpOyBvKyspXG4gICAgICAgICAgICAodCA9IG8gPT09IGkgPyB0aGlzIDogdGhpcy5jbG9uZSghMCkpLFxuICAgICAgICAgICAgICBFKHJbb10pW2FdKHQpLFxuICAgICAgICAgICAgICB1LmFwcGx5KG4sIHQuZ2V0KCkpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhuKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICB2YXIgUGUgPSBuZXcgUmVnRXhwKFwiXihcIiArIGVlICsgXCIpKD8hcHgpW2EteiVdKyRcIiwgXCJpXCIpLFxuICAgIEhlID0gL14tLS8sXG4gICAgSWUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICByZXR1cm4gKHQgJiYgdC5vcGVuZXIpIHx8ICh0ID0gZyksIHQuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcbiAgICB9LFxuICAgIFJlID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIHZhciByLFxuICAgICAgICBpLFxuICAgICAgICBvID0ge307XG4gICAgICBmb3IgKGkgaW4gdCkgKG9baV0gPSBlLnN0eWxlW2ldKSwgKGUuc3R5bGVbaV0gPSB0W2ldKTtcbiAgICAgIGZvciAoaSBpbiAoKHIgPSBuLmNhbGwoZSkpLCB0KSkgZS5zdHlsZVtpXSA9IG9baV07XG4gICAgICByZXR1cm4gcjtcbiAgICB9LFxuICAgIEJlID0gbmV3IFJlZ0V4cChuZS5qb2luKFwifFwiKSwgXCJpXCIpLFxuICAgIE1lID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxuICAgIFdlID0gbmV3IFJlZ0V4cChcIl5cIiArIE1lICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgTWUgKyBcIiskXCIsIFwiZ1wiKTtcbiAgZnVuY3Rpb24gRmUoZSwgdCwgbikge1xuICAgIHZhciByLFxuICAgICAgaSxcbiAgICAgIG8sXG4gICAgICBhLFxuICAgICAgcyA9IEhlLnRlc3QodCksXG4gICAgICB1ID0gZS5zdHlsZTtcbiAgICByZXR1cm4gKFxuICAgICAgKG4gPSBuIHx8IEllKGUpKSAmJlxuICAgICAgICAoKGEgPSBuLmdldFByb3BlcnR5VmFsdWUodCkgfHwgblt0XSksXG4gICAgICAgIHMgJiYgYSAmJiAoYSA9IGEucmVwbGFjZShXZSwgXCIkMVwiKSB8fCB2b2lkIDApLFxuICAgICAgICBcIlwiICE9PSBhIHx8IGllKGUpIHx8IChhID0gRS5zdHlsZShlLCB0KSksXG4gICAgICAgICFtLnBpeGVsQm94U3R5bGVzKCkgJiZcbiAgICAgICAgICBQZS50ZXN0KGEpICYmXG4gICAgICAgICAgQmUudGVzdCh0KSAmJlxuICAgICAgICAgICgociA9IHUud2lkdGgpLFxuICAgICAgICAgIChpID0gdS5taW5XaWR0aCksXG4gICAgICAgICAgKG8gPSB1Lm1heFdpZHRoKSxcbiAgICAgICAgICAodS5taW5XaWR0aCA9IHUubWF4V2lkdGggPSB1LndpZHRoID0gYSksXG4gICAgICAgICAgKGEgPSBuLndpZHRoKSxcbiAgICAgICAgICAodS53aWR0aCA9IHIpLFxuICAgICAgICAgICh1Lm1pbldpZHRoID0gaSksXG4gICAgICAgICAgKHUubWF4V2lkdGggPSBvKSkpLFxuICAgICAgdm9pZCAwICE9PSBhID8gYSArIFwiXCIgOiBhXG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiAkZShlLCB0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWUoKSkgcmV0dXJuICh0aGlzLmdldCA9IHQpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICAhKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgKHUuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIpLFxuICAgICAgICAgIChsLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgXCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIpLFxuICAgICAgICAgIHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO1xuICAgICAgICB2YXIgZSA9IGcuZ2V0Q29tcHV0ZWRTdHlsZShsKTtcbiAgICAgICAgKG4gPSBcIjElXCIgIT09IGUudG9wKSxcbiAgICAgICAgICAocyA9IDEyID09PSB0KGUubWFyZ2luTGVmdCkpLFxuICAgICAgICAgIChsLnN0eWxlLnJpZ2h0ID0gXCI2MCVcIiksXG4gICAgICAgICAgKG8gPSAzNiA9PT0gdChlLnJpZ2h0KSksXG4gICAgICAgICAgKHIgPSAzNiA9PT0gdChlLndpZHRoKSksXG4gICAgICAgICAgKGwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCIpLFxuICAgICAgICAgIChpID0gMTIgPT09IHQobC5vZmZzZXRXaWR0aCAvIDMpKSxcbiAgICAgICAgICByZS5yZW1vdmVDaGlsZCh1KSxcbiAgICAgICAgICAobCA9IG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0KGUpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpO1xuICAgIH1cbiAgICB2YXIgbixcbiAgICAgIHIsXG4gICAgICBpLFxuICAgICAgbyxcbiAgICAgIGEsXG4gICAgICBzLFxuICAgICAgdSA9IHcuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgIGwgPSB3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbC5zdHlsZSAmJlxuICAgICAgKChsLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiKSxcbiAgICAgIChsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiKSxcbiAgICAgIChtLmNsZWFyQ2xvbmVTdHlsZSA9IFwiY29udGVudC1ib3hcIiA9PT0gbC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCksXG4gICAgICBFLmV4dGVuZChtLCB7XG4gICAgICAgIGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUoKSwgcjtcbiAgICAgICAgfSxcbiAgICAgICAgcGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZSgpLCBvO1xuICAgICAgICB9LFxuICAgICAgICBwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUoKSwgbjtcbiAgICAgICAgfSxcbiAgICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUoKSwgcztcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlKCksIGk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbGlhYmxlVHJEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUsIHQsIG4sIHI7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG51bGwgPT0gYSAmJlxuICAgICAgICAgICAgICAoKGUgPSB3LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSksXG4gICAgICAgICAgICAgICh0ID0gdy5jcmVhdGVFbGVtZW50KFwidHJcIikpLFxuICAgICAgICAgICAgICAobiA9IHcuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXG4gICAgICAgICAgICAgIChlLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgICAgIFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGVcIiksXG4gICAgICAgICAgICAgICh0LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjoxcHggc29saWRcIiksXG4gICAgICAgICAgICAgICh0LnN0eWxlLmhlaWdodCA9IFwiMXB4XCIpLFxuICAgICAgICAgICAgICAobi5zdHlsZS5oZWlnaHQgPSBcIjlweFwiKSxcbiAgICAgICAgICAgICAgKG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiksXG4gICAgICAgICAgICAgIHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLFxuICAgICAgICAgICAgICAociA9IGcuZ2V0Q29tcHV0ZWRTdHlsZSh0KSksXG4gICAgICAgICAgICAgIChhID1cbiAgICAgICAgICAgICAgICBwYXJzZUludChyLmhlaWdodCwgMTApICtcbiAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHIuYm9yZGVyVG9wV2lkdGgsIDEwKSArXG4gICAgICAgICAgICAgICAgICBwYXJzZUludChyLmJvcmRlckJvdHRvbVdpZHRoLCAxMCkgPT09XG4gICAgICAgICAgICAgICAgdC5vZmZzZXRIZWlnaHQpLFxuICAgICAgICAgICAgICByZS5yZW1vdmVDaGlsZChlKSksXG4gICAgICAgICAgICBhXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgfSkoKTtcbiAgdmFyIHplID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sXG4gICAgX2UgPSB3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXG4gICAgVWUgPSB7fTtcbiAgZnVuY3Rpb24gVmUoZSkge1xuICAgIHZhciB0ID0gRS5jc3NQcm9wc1tlXSB8fCBVZVtlXTtcbiAgICByZXR1cm4gKFxuICAgICAgdCB8fFxuICAgICAgKGUgaW4gX2VcbiAgICAgICAgPyBlXG4gICAgICAgIDogKFVlW2VdID1cbiAgICAgICAgICAgIChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGVbMF0udG9VcHBlckNhc2UoKSArIGUuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgbiA9IHplLmxlbmd0aDtcbiAgICAgICAgICAgICAgd2hpbGUgKG4tLSkgaWYgKChlID0gemVbbl0gKyB0KSBpbiBfZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICB9KShlKSB8fCBlKSlcbiAgICApO1xuICB9XG4gIHZhciBYZSxcbiAgICBRZSxcbiAgICBZZSA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcbiAgICBHZSA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG4gICAgS2UgPSB7IGxldHRlclNwYWNpbmc6IFwiMFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH07XG4gIGZ1bmN0aW9uIEplKGUsIHQsIG4pIHtcbiAgICB2YXIgciA9IHRlLmV4ZWModCk7XG4gICAgcmV0dXJuIHIgPyBNYXRoLm1heCgwLCByWzJdIC0gKG4gfHwgMCkpICsgKHJbM10gfHwgXCJweFwiKSA6IHQ7XG4gIH1cbiAgZnVuY3Rpb24gWmUoZSwgdCwgbiwgciwgaSwgbykge1xuICAgIHZhciBhID0gXCJ3aWR0aFwiID09PSB0ID8gMSA6IDAsXG4gICAgICBzID0gMCxcbiAgICAgIHUgPSAwO1xuICAgIGlmIChuID09PSAociA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIikpIHJldHVybiAwO1xuICAgIGZvciAoOyBhIDwgNDsgYSArPSAyKVxuICAgICAgXCJtYXJnaW5cIiA9PT0gbiAmJiAodSArPSBFLmNzcyhlLCBuICsgbmVbYV0sICEwLCBpKSksXG4gICAgICAgIHJcbiAgICAgICAgICA/IChcImNvbnRlbnRcIiA9PT0gbiAmJiAodSAtPSBFLmNzcyhlLCBcInBhZGRpbmdcIiArIG5lW2FdLCAhMCwgaSkpLFxuICAgICAgICAgICAgXCJtYXJnaW5cIiAhPT0gbiAmJlxuICAgICAgICAgICAgICAodSAtPSBFLmNzcyhlLCBcImJvcmRlclwiICsgbmVbYV0gKyBcIldpZHRoXCIsICEwLCBpKSkpXG4gICAgICAgICAgOiAoKHUgKz0gRS5jc3MoZSwgXCJwYWRkaW5nXCIgKyBuZVthXSwgITAsIGkpKSxcbiAgICAgICAgICAgIFwicGFkZGluZ1wiICE9PSBuXG4gICAgICAgICAgICAgID8gKHUgKz0gRS5jc3MoZSwgXCJib3JkZXJcIiArIG5lW2FdICsgXCJXaWR0aFwiLCAhMCwgaSkpXG4gICAgICAgICAgICAgIDogKHMgKz0gRS5jc3MoZSwgXCJib3JkZXJcIiArIG5lW2FdICsgXCJXaWR0aFwiLCAhMCwgaSkpKTtcbiAgICByZXR1cm4gKFxuICAgICAgIXIgJiZcbiAgICAgICAgMCA8PSBvICYmXG4gICAgICAgICh1ICs9XG4gICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICBlW1wib2Zmc2V0XCIgKyB0WzBdLnRvVXBwZXJDYXNlKCkgKyB0LnNsaWNlKDEpXSAtIG8gLSB1IC0gcyAtIDAuNVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgfHwgMCksXG4gICAgICB1XG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBldChlLCB0LCBuKSB7XG4gICAgdmFyIHIgPSBJZShlKSxcbiAgICAgIGkgPVxuICAgICAgICAoIW0uYm94U2l6aW5nUmVsaWFibGUoKSB8fCBuKSAmJlxuICAgICAgICBcImJvcmRlci1ib3hcIiA9PT0gRS5jc3MoZSwgXCJib3hTaXppbmdcIiwgITEsIHIpLFxuICAgICAgbyA9IGksXG4gICAgICBhID0gRmUoZSwgdCwgciksXG4gICAgICBzID0gXCJvZmZzZXRcIiArIHRbMF0udG9VcHBlckNhc2UoKSArIHQuc2xpY2UoMSk7XG4gICAgaWYgKFBlLnRlc3QoYSkpIHtcbiAgICAgIGlmICghbikgcmV0dXJuIGE7XG4gICAgICBhID0gXCJhdXRvXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAoKCFtLmJveFNpemluZ1JlbGlhYmxlKCkgJiYgaSkgfHxcbiAgICAgICAgKCFtLnJlbGlhYmxlVHJEaW1lbnNpb25zKCkgJiYgUyhlLCBcInRyXCIpKSB8fFxuICAgICAgICBcImF1dG9cIiA9PT0gYSB8fFxuICAgICAgICAoIXBhcnNlRmxvYXQoYSkgJiYgXCJpbmxpbmVcIiA9PT0gRS5jc3MoZSwgXCJkaXNwbGF5XCIsICExLCByKSkpICYmXG4gICAgICAgIGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggJiZcbiAgICAgICAgKChpID0gXCJib3JkZXItYm94XCIgPT09IEUuY3NzKGUsIFwiYm94U2l6aW5nXCIsICExLCByKSksXG4gICAgICAgIChvID0gcyBpbiBlKSAmJiAoYSA9IGVbc10pKSxcbiAgICAgIChhID0gcGFyc2VGbG9hdChhKSB8fCAwKSArXG4gICAgICAgIFplKGUsIHQsIG4gfHwgKGkgPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIpLCBvLCByLCBhKSArXG4gICAgICAgIFwicHhcIlxuICAgICk7XG4gIH1cbiAgRS5leHRlbmQoe1xuICAgIGNzc0hvb2tzOiB7XG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdmFyIG4gPSBGZShlLCBcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiA9PT0gbiA/IFwiMVwiIDogbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzTnVtYmVyOiB7XG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogITAsXG4gICAgICBjb2x1bW5Db3VudDogITAsXG4gICAgICBmaWxsT3BhY2l0eTogITAsXG4gICAgICBmbGV4R3JvdzogITAsXG4gICAgICBmbGV4U2hyaW5rOiAhMCxcbiAgICAgIGZvbnRXZWlnaHQ6ICEwLFxuICAgICAgZ3JpZEFyZWE6ICEwLFxuICAgICAgZ3JpZENvbHVtbjogITAsXG4gICAgICBncmlkQ29sdW1uRW5kOiAhMCxcbiAgICAgIGdyaWRDb2x1bW5TdGFydDogITAsXG4gICAgICBncmlkUm93OiAhMCxcbiAgICAgIGdyaWRSb3dFbmQ6ICEwLFxuICAgICAgZ3JpZFJvd1N0YXJ0OiAhMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICEwLFxuICAgICAgb3BhY2l0eTogITAsXG4gICAgICBvcmRlcjogITAsXG4gICAgICBvcnBoYW5zOiAhMCxcbiAgICAgIHdpZG93czogITAsXG4gICAgICB6SW5kZXg6ICEwLFxuICAgICAgem9vbTogITAsXG4gICAgfSxcbiAgICBjc3NQcm9wczoge30sXG4gICAgc3R5bGU6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XG4gICAgICBpZiAoZSAmJiAzICE9PSBlLm5vZGVUeXBlICYmIDggIT09IGUubm9kZVR5cGUgJiYgZS5zdHlsZSkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICBvLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgcyA9IFYodCksXG4gICAgICAgICAgdSA9IEhlLnRlc3QodCksXG4gICAgICAgICAgbCA9IGUuc3R5bGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAodSB8fCAodCA9IFZlKHMpKSwgKGEgPSBFLmNzc0hvb2tzW3RdIHx8IEUuY3NzSG9va3Nbc10pLCB2b2lkIDAgPT09IG4pXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gYSAmJiBcImdldFwiIGluIGEgJiYgdm9pZCAwICE9PSAoaSA9IGEuZ2V0KGUsICExLCByKSkgPyBpIDogbFt0XTtcbiAgICAgICAgXCJzdHJpbmdcIiA9PT0gKG8gPSB0eXBlb2YgbikgJiZcbiAgICAgICAgICAoaSA9IHRlLmV4ZWMobikpICYmXG4gICAgICAgICAgaVsxXSAmJlxuICAgICAgICAgICgobiA9IChmdW5jdGlvbiAoZSwgdCwgbiwgcikge1xuICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgIGEgPSAyMCxcbiAgICAgICAgICAgICAgcyA9IHJcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIuY3VyKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBFLmNzcyhlLCB0LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHUgPSBzKCksXG4gICAgICAgICAgICAgIGwgPSAobiAmJiBuWzNdKSB8fCAoRS5jc3NOdW1iZXJbdF0gPyBcIlwiIDogXCJweFwiKSxcbiAgICAgICAgICAgICAgYyA9XG4gICAgICAgICAgICAgICAgZS5ub2RlVHlwZSAmJlxuICAgICAgICAgICAgICAgIChFLmNzc051bWJlclt0XSB8fCAoXCJweFwiICE9PSBsICYmICt1KSkgJiZcbiAgICAgICAgICAgICAgICB0ZS5leGVjKEUuY3NzKGUsIHQpKTtcbiAgICAgICAgICAgIGlmIChjICYmIGNbM10gIT09IGwpIHtcbiAgICAgICAgICAgICAgKHUgLz0gMiksIChsID0gbCB8fCBjWzNdKSwgKGMgPSArdSB8fCAxKTtcbiAgICAgICAgICAgICAgd2hpbGUgKGEtLSlcbiAgICAgICAgICAgICAgICBFLnN0eWxlKGUsIHQsIGMgKyBsKSxcbiAgICAgICAgICAgICAgICAgICgxIC0gbykgKiAoMSAtIChvID0gcygpIC8gdSB8fCAwLjUpKSA8PSAwICYmIChhID0gMCksXG4gICAgICAgICAgICAgICAgICAoYyAvPSBvKTtcbiAgICAgICAgICAgICAgKGMgKj0gMiksIEUuc3R5bGUoZSwgdCwgYyArIGwpLCAobiA9IG4gfHwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgbiAmJlxuICAgICAgICAgICAgICAgICgoYyA9ICtjIHx8ICt1IHx8IDApLFxuICAgICAgICAgICAgICAgIChpID0gblsxXSA/IGMgKyAoblsxXSArIDEpICogblsyXSA6ICtuWzJdKSxcbiAgICAgICAgICAgICAgICByICYmICgoci51bml0ID0gbCksIChyLnN0YXJ0ID0gYyksIChyLmVuZCA9IGkpKSksXG4gICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkoZSwgdCwgaSkpLFxuICAgICAgICAgIChvID0gXCJudW1iZXJcIikpLFxuICAgICAgICAgIG51bGwgIT0gbiAmJlxuICAgICAgICAgICAgbiA9PSBuICYmXG4gICAgICAgICAgICAoXCJudW1iZXJcIiAhPT0gbyB8fFxuICAgICAgICAgICAgICB1IHx8XG4gICAgICAgICAgICAgIChuICs9IChpICYmIGlbM10pIHx8IChFLmNzc051bWJlcltzXSA/IFwiXCIgOiBcInB4XCIpKSxcbiAgICAgICAgICAgIG0uY2xlYXJDbG9uZVN0eWxlIHx8XG4gICAgICAgICAgICAgIFwiXCIgIT09IG4gfHxcbiAgICAgICAgICAgICAgMCAhPT0gdC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKSB8fFxuICAgICAgICAgICAgICAobFt0XSA9IFwiaW5oZXJpdFwiKSxcbiAgICAgICAgICAgIChhICYmIFwic2V0XCIgaW4gYSAmJiB2b2lkIDAgPT09IChuID0gYS5zZXQoZSwgbiwgcikpKSB8fFxuICAgICAgICAgICAgICAodSA/IGwuc2V0UHJvcGVydHkodCwgbikgOiAobFt0XSA9IG4pKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjc3M6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgbyxcbiAgICAgICAgYSxcbiAgICAgICAgcyA9IFYodCk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBIZS50ZXN0KHQpIHx8ICh0ID0gVmUocykpLFxuICAgICAgICAoYSA9IEUuY3NzSG9va3NbdF0gfHwgRS5jc3NIb29rc1tzXSkgJiZcbiAgICAgICAgICBcImdldFwiIGluIGEgJiZcbiAgICAgICAgICAoaSA9IGEuZ2V0KGUsICEwLCBuKSksXG4gICAgICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9IEZlKGUsIHQsIHIpKSxcbiAgICAgICAgXCJub3JtYWxcIiA9PT0gaSAmJiB0IGluIEtlICYmIChpID0gS2VbdF0pLFxuICAgICAgICBcIlwiID09PSBuIHx8IG5cbiAgICAgICAgICA/ICgobyA9IHBhcnNlRmxvYXQoaSkpLCAhMCA9PT0gbiB8fCBpc0Zpbml0ZShvKSA/IG8gfHwgMCA6IGkpXG4gICAgICAgICAgOiBpXG4gICAgICApO1xuICAgIH0sXG4gIH0pLFxuICAgIEUuZWFjaChbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXSwgZnVuY3Rpb24gKGUsIHUpIHtcbiAgICAgIEUuY3NzSG9va3NbdV0gPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICBpZiAodClcbiAgICAgICAgICAgIHJldHVybiAhWWUudGVzdChFLmNzcyhlLCBcImRpc3BsYXlcIikpIHx8XG4gICAgICAgICAgICAgIChlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICYmIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXG4gICAgICAgICAgICAgID8gZXQoZSwgdSwgbilcbiAgICAgICAgICAgICAgOiBSZShlLCBHZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGV0KGUsIHUsIG4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgdmFyIHIsXG4gICAgICAgICAgICBpID0gSWUoZSksXG4gICAgICAgICAgICBvID0gIW0uc2Nyb2xsYm94U2l6ZSgpICYmIFwiYWJzb2x1dGVcIiA9PT0gaS5wb3NpdGlvbixcbiAgICAgICAgICAgIGEgPSAobyB8fCBuKSAmJiBcImJvcmRlci1ib3hcIiA9PT0gRS5jc3MoZSwgXCJib3hTaXppbmdcIiwgITEsIGkpLFxuICAgICAgICAgICAgcyA9IG4gPyBaZShlLCB1LCBuLCBhLCBpKSA6IDA7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGEgJiZcbiAgICAgICAgICAgICAgbyAmJlxuICAgICAgICAgICAgICAocyAtPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgZVtcIm9mZnNldFwiICsgdVswXS50b1VwcGVyQ2FzZSgpICsgdS5zbGljZSgxKV0gLVxuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChpW3VdKSAtXG4gICAgICAgICAgICAgICAgICBaZShlLCB1LCBcImJvcmRlclwiLCAhMSwgaSkgLVxuICAgICAgICAgICAgICAgICAgMC41XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgcyAmJlxuICAgICAgICAgICAgICAociA9IHRlLmV4ZWModCkpICYmXG4gICAgICAgICAgICAgIFwicHhcIiAhPT0gKHJbM10gfHwgXCJweFwiKSAmJlxuICAgICAgICAgICAgICAoKGUuc3R5bGVbdV0gPSB0KSwgKHQgPSBFLmNzcyhlLCB1KSkpLFxuICAgICAgICAgICAgSmUoMCwgdCwgcylcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICAoRS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gJGUobS5yZWxpYWJsZU1hcmdpbkxlZnQsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAodClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAocGFyc2VGbG9hdChGZShlLCBcIm1hcmdpbkxlZnRcIikpIHx8XG4gICAgICAgICAgICBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuICAgICAgICAgICAgICBSZShlLCB7IG1hcmdpbkxlZnQ6IDAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgIH0pKSArIFwicHhcIlxuICAgICAgICApO1xuICAgIH0pKSxcbiAgICBFLmVhY2goeyBtYXJnaW46IFwiXCIsIHBhZGRpbmc6IFwiXCIsIGJvcmRlcjogXCJXaWR0aFwiIH0sIGZ1bmN0aW9uIChpLCBvKSB7XG4gICAgICAoRS5jc3NIb29rc1tpICsgb10gPSB7XG4gICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIHQgPSAwLCBuID0ge30sIHIgPSBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZS5zcGxpdChcIiBcIikgOiBbZV07XG4gICAgICAgICAgICB0IDwgNDtcbiAgICAgICAgICAgIHQrK1xuICAgICAgICAgIClcbiAgICAgICAgICAgIG5baSArIG5lW3RdICsgb10gPSByW3RdIHx8IHJbdCAtIDJdIHx8IHJbMF07XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgICAgXCJtYXJnaW5cIiAhPT0gaSAmJiAoRS5jc3NIb29rc1tpICsgb10uc2V0ID0gSmUpO1xuICAgIH0pLFxuICAgIEUuZm4uZXh0ZW5kKHtcbiAgICAgIGNzczogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuICQoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgdmFyIHIsXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIG8gPSB7fSxcbiAgICAgICAgICAgICAgYSA9IDA7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgICAgICAgICBmb3IgKHIgPSBJZShlKSwgaSA9IHQubGVuZ3RoOyBhIDwgaTsgYSsrKVxuICAgICAgICAgICAgICAgIG9bdFthXV0gPSBFLmNzcyhlLCB0W2FdLCAhMSwgcik7XG4gICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gbiA/IEUuc3R5bGUoZSwgdCwgbikgOiBFLmNzcyhlLCB0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGUsXG4gICAgICAgICAgdCxcbiAgICAgICAgICAxIDwgYXJndW1lbnRzLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICAoRS5mbi5kZWxheSA9IGZ1bmN0aW9uIChyLCBlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAociA9IChFLmZ4ICYmIEUuZnguc3BlZWRzW3JdKSB8fCByKSxcbiAgICAgICAgKGUgPSBlIHx8IFwiZnhcIiksXG4gICAgICAgIHRoaXMucXVldWUoZSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiA9IGcuc2V0VGltZW91dChlLCByKTtcbiAgICAgICAgICB0LnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnLmNsZWFyVGltZW91dChuKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KSxcbiAgICAoWGUgPSB3LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSksXG4gICAgKFFlID0gdy5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKHcuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkpLFxuICAgIChYZS50eXBlID0gXCJjaGVja2JveFwiKSxcbiAgICAobS5jaGVja09uID0gXCJcIiAhPT0gWGUudmFsdWUpLFxuICAgIChtLm9wdFNlbGVjdGVkID0gUWUuc2VsZWN0ZWQpLFxuICAgICgoWGUgPSB3LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWUgPSBcInRcIiksXG4gICAgKFhlLnR5cGUgPSBcInJhZGlvXCIpLFxuICAgIChtLnJhZGlvVmFsdWUgPSBcInRcIiA9PT0gWGUudmFsdWUpO1xuICB2YXIgdHQsXG4gICAgbnQgPSBFLmV4cHIuYXR0ckhhbmRsZTtcbiAgRS5mbi5leHRlbmQoe1xuICAgIGF0dHI6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gJCh0aGlzLCBFLmF0dHIsIGUsIHQsIDEgPCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICB9LFxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRS5yZW1vdmVBdHRyKHRoaXMsIGUpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG4gICAgRS5leHRlbmQoe1xuICAgICAgYXR0cjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgdmFyIHIsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBvID0gZS5ub2RlVHlwZTtcbiAgICAgICAgaWYgKDMgIT09IG8gJiYgOCAhPT0gbyAmJiAyICE9PSBvKVxuICAgICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBlLmdldEF0dHJpYnV0ZVxuICAgICAgICAgICAgPyBFLnByb3AoZSwgdCwgbilcbiAgICAgICAgICAgIDogKCgxID09PSBvICYmIEUuaXNYTUxEb2MoZSkpIHx8XG4gICAgICAgICAgICAgICAgKGkgPVxuICAgICAgICAgICAgICAgICAgRS5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXSB8fFxuICAgICAgICAgICAgICAgICAgKEUuZXhwci5tYXRjaC5ib29sLnRlc3QodCkgPyB0dCA6IHZvaWQgMCkpLFxuICAgICAgICAgICAgICB2b2lkIDAgIT09IG5cbiAgICAgICAgICAgICAgICA/IG51bGwgPT09IG5cbiAgICAgICAgICAgICAgICAgID8gdm9pZCBFLnJlbW92ZUF0dHIoZSwgdClcbiAgICAgICAgICAgICAgICAgIDogaSAmJiBcInNldFwiIGluIGkgJiYgdm9pZCAwICE9PSAociA9IGkuc2V0KGUsIG4sIHQpKVxuICAgICAgICAgICAgICAgICAgPyByXG4gICAgICAgICAgICAgICAgICA6IChlLnNldEF0dHJpYnV0ZSh0LCBuICsgXCJcIiksIG4pXG4gICAgICAgICAgICAgICAgOiBpICYmIFwiZ2V0XCIgaW4gaSAmJiBudWxsICE9PSAociA9IGkuZ2V0KGUsIHQpKVxuICAgICAgICAgICAgICAgID8gclxuICAgICAgICAgICAgICAgIDogbnVsbCA9PSAociA9IEUuZmluZC5hdHRyKGUsIHQpKVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiByKTtcbiAgICAgIH0sXG4gICAgICBhdHRySG9va3M6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghbS5yYWRpb1ZhbHVlICYmIFwicmFkaW9cIiA9PT0gdCAmJiBTKGUsIFwiaW5wdXRcIikpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSBlLnZhbHVlO1xuICAgICAgICAgICAgICByZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHQpLCBuICYmIChlLnZhbHVlID0gbiksIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICByID0gMCxcbiAgICAgICAgICBpID0gdCAmJiB0Lm1hdGNoKEgpO1xuICAgICAgICBpZiAoaSAmJiAxID09PSBlLm5vZGVUeXBlKSB3aGlsZSAoKG4gPSBpW3IrK10pKSBlLnJlbW92ZUF0dHJpYnV0ZShuKTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgKHR0ID0ge1xuICAgICAgc2V0OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICByZXR1cm4gITEgPT09IHQgPyBFLnJlbW92ZUF0dHIoZSwgbikgOiBlLnNldEF0dHJpYnV0ZShuLCBuKSwgbjtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgRS5lYWNoKEUuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBhID0gbnRbdF0gfHwgRS5maW5kLmF0dHI7XG4gICAgICBudFt0XSA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIHZhciByLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbyA9IHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBuIHx8XG4gICAgICAgICAgICAoKGkgPSBudFtvXSksXG4gICAgICAgICAgICAobnRbb10gPSByKSxcbiAgICAgICAgICAgIChyID0gbnVsbCAhPSBhKGUsIHQsIG4pID8gbyA6IG51bGwpLFxuICAgICAgICAgICAgKG50W29dID0gaSkpLFxuICAgICAgICAgIHJcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIHZhciBydCA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG4gICAgaXQgPSAvXig/OmF8YXJlYSkkL2k7XG4gIGZ1bmN0aW9uIG90KGUpIHtcbiAgICByZXR1cm4gKGUubWF0Y2goSCkgfHwgW10pLmpvaW4oXCIgXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGF0KGUpIHtcbiAgICByZXR1cm4gKGUuZ2V0QXR0cmlidXRlICYmIGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpIHx8IFwiXCI7XG4gIH1cbiAgZnVuY3Rpb24gc3QoZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGUpID8gZSA6IChcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIGUubWF0Y2goSCkpIHx8IFtdO1xuICB9XG4gIEUuZm4uZXh0ZW5kKHtcbiAgICBwcm9wOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuICQodGhpcywgRS5wcm9wLCBlLCB0LCAxIDwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgfSxcbiAgICByZW1vdmVQcm9wOiBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW0UucHJvcEZpeFtlXSB8fCBlXTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pLFxuICAgIEUuZXh0ZW5kKHtcbiAgICAgIHByb3A6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIHZhciByLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbyA9IGUubm9kZVR5cGU7XG4gICAgICAgIGlmICgzICE9PSBvICYmIDggIT09IG8gJiYgMiAhPT0gbylcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKDEgPT09IG8gJiYgRS5pc1hNTERvYyhlKSkgfHxcbiAgICAgICAgICAgICAgKCh0ID0gRS5wcm9wRml4W3RdIHx8IHQpLCAoaSA9IEUucHJvcEhvb2tzW3RdKSksXG4gICAgICAgICAgICB2b2lkIDAgIT09IG5cbiAgICAgICAgICAgICAgPyBpICYmIFwic2V0XCIgaW4gaSAmJiB2b2lkIDAgIT09IChyID0gaS5zZXQoZSwgbiwgdCkpXG4gICAgICAgICAgICAgICAgPyByXG4gICAgICAgICAgICAgICAgOiAoZVt0XSA9IG4pXG4gICAgICAgICAgICAgIDogaSAmJiBcImdldFwiIGluIGkgJiYgbnVsbCAhPT0gKHIgPSBpLmdldChlLCB0KSlcbiAgICAgICAgICAgICAgPyByXG4gICAgICAgICAgICAgIDogZVt0XVxuICAgICAgICAgICk7XG4gICAgICB9LFxuICAgICAgcHJvcEhvb2tzOiB7XG4gICAgICAgIHRhYkluZGV4OiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBFLmZpbmQuYXR0cihlLCBcInRhYmluZGV4XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRcbiAgICAgICAgICAgICAgPyBwYXJzZUludCh0LCAxMClcbiAgICAgICAgICAgICAgOiBydC50ZXN0KGUubm9kZU5hbWUpIHx8IChpdC50ZXN0KGUubm9kZU5hbWUpICYmIGUuaHJlZilcbiAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgIDogLTE7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwcm9wRml4OiB7IGZvcjogXCJodG1sRm9yXCIsIGNsYXNzOiBcImNsYXNzTmFtZVwiIH0sXG4gICAgfSksXG4gICAgbS5vcHRTZWxlY3RlZCB8fFxuICAgICAgKEUucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnBhcmVudE5vZGU7XG4gICAgICAgICAgcmV0dXJuIHQgJiYgdC5wYXJlbnROb2RlICYmIHQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnBhcmVudE5vZGU7XG4gICAgICAgICAgdCAmJiAodC5zZWxlY3RlZEluZGV4LCB0LnBhcmVudE5vZGUgJiYgdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgRS5lYWNoKFxuICAgICAgW1xuICAgICAgICBcInRhYkluZGV4XCIsXG4gICAgICAgIFwicmVhZE9ubHlcIixcbiAgICAgICAgXCJtYXhMZW5ndGhcIixcbiAgICAgICAgXCJjZWxsU3BhY2luZ1wiLFxuICAgICAgICBcImNlbGxQYWRkaW5nXCIsXG4gICAgICAgIFwicm93U3BhblwiLFxuICAgICAgICBcImNvbFNwYW5cIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImNvbnRlbnRFZGl0YWJsZVwiLFxuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV0gPSB0aGlzO1xuICAgICAgfVxuICAgICksXG4gICAgRS5mbi5leHRlbmQoe1xuICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlLCBuLCByLCBpLCBvLCBhO1xuICAgICAgICByZXR1cm4gYih0KVxuICAgICAgICAgID8gdGhpcy5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIEUodGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsIGUsIGF0KHRoaXMpKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogKGUgPSBzdCh0KSkubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKChyID0gYXQodGhpcykpLCAobiA9IDEgPT09IHRoaXMubm9kZVR5cGUgJiYgXCIgXCIgKyBvdChyKSArIFwiIFwiKSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspXG4gICAgICAgICAgICAgICAgICAoaSA9IGVbb10pLCBuLmluZGV4T2YoXCIgXCIgKyBpICsgXCIgXCIpIDwgMCAmJiAobiArPSBpICsgXCIgXCIpO1xuICAgICAgICAgICAgICAgIChhID0gb3QobikpLCByICE9PSBhICYmIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSwgbiwgciwgaSwgbywgYTtcbiAgICAgICAgcmV0dXJuIGIodClcbiAgICAgICAgICA/IHRoaXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBFKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLCBlLCBhdCh0aGlzKSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICAgICA/IChlID0gc3QodCkpLmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICgociA9IGF0KHRoaXMpKSxcbiAgICAgICAgICAgICAgICAgIChuID0gMSA9PT0gdGhpcy5ub2RlVHlwZSAmJiBcIiBcIiArIG90KHIpICsgXCIgXCIpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGVbb107XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgtMSA8IG4uaW5kZXhPZihcIiBcIiArIGkgKyBcIiBcIikpXG4gICAgICAgICAgICAgICAgICAgICAgbiA9IG4ucmVwbGFjZShcIiBcIiArIGkgKyBcIiBcIiwgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKGEgPSBvdChuKSksIHIgIT09IGEgJiYgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHRoaXNcbiAgICAgICAgICA6IHRoaXMuYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgICAgfSxcbiAgICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICB2YXIgZSxcbiAgICAgICAgICByLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbyxcbiAgICAgICAgICBhID0gdHlwZW9mIHQsXG4gICAgICAgICAgcyA9IFwic3RyaW5nXCIgPT09IGEgfHwgQXJyYXkuaXNBcnJheSh0KTtcbiAgICAgICAgcmV0dXJuIGIodClcbiAgICAgICAgICA/IHRoaXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBFKHRoaXMpLnRvZ2dsZUNsYXNzKHQuY2FsbCh0aGlzLCBlLCBhdCh0aGlzKSwgbiksIG4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IFwiYm9vbGVhblwiID09IHR5cGVvZiBuICYmIHNcbiAgICAgICAgICA/IG5cbiAgICAgICAgICAgID8gdGhpcy5hZGRDbGFzcyh0KVxuICAgICAgICAgICAgOiB0aGlzLnJlbW92ZUNsYXNzKHQpXG4gICAgICAgICAgOiAoKGUgPSBzdCh0KSksXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAocylcbiAgICAgICAgICAgICAgICBmb3IgKG8gPSBFKHRoaXMpLCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAociA9IGVbaV0pLCBvLmhhc0NsYXNzKHIpID8gby5yZW1vdmVDbGFzcyhyKSA6IG8uYWRkQ2xhc3Mocik7XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAodm9pZCAwICE9PSB0ICYmIFwiYm9vbGVhblwiICE9PSBhKSB8fFxuICAgICAgICAgICAgICAgICAgKChyID0gYXQodGhpcykpICYmIFkuc2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCByKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICByIHx8ICExID09PSB0ID8gXCJcIiA6IFkuZ2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiKSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICBuLFxuICAgICAgICAgIHIgPSAwO1xuICAgICAgICB0ID0gXCIgXCIgKyBlICsgXCIgXCI7XG4gICAgICAgIHdoaWxlICgobiA9IHRoaXNbcisrXSkpXG4gICAgICAgICAgaWYgKDEgPT09IG4ubm9kZVR5cGUgJiYgLTEgPCAoXCIgXCIgKyBvdChhdChuKSkgKyBcIiBcIikuaW5kZXhPZih0KSlcbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfSxcbiAgICB9KTtcbiAgdmFyIHV0ID0gL1xcci9nO1xuICBFLmZuLmV4dGVuZCh7XG4gICAgdmFsOiBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIHIsXG4gICAgICAgIGUsXG4gICAgICAgIGksXG4gICAgICAgIHQgPSB0aGlzWzBdO1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICAgPyAoKGkgPSBiKG4pKSxcbiAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgMSA9PT0gdGhpcy5ub2RlVHlwZSAmJlxuICAgICAgICAgICAgICAobnVsbCA9PSAodCA9IGkgPyBuLmNhbGwodGhpcywgZSwgRSh0aGlzKS52YWwoKSkgOiBuKVxuICAgICAgICAgICAgICAgID8gKHQgPSBcIlwiKVxuICAgICAgICAgICAgICAgIDogXCJudW1iZXJcIiA9PSB0eXBlb2YgdFxuICAgICAgICAgICAgICAgID8gKHQgKz0gXCJcIilcbiAgICAgICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkodCkgJiZcbiAgICAgICAgICAgICAgICAgICh0ID0gRS5tYXAodCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgPT0gZSA/IFwiXCIgOiBlICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgKChyID1cbiAgICAgICAgICAgICAgICBFLnZhbEhvb2tzW3RoaXMudHlwZV0gfHxcbiAgICAgICAgICAgICAgICBFLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pICYmXG4gICAgICAgICAgICAgICAgXCJzZXRcIiBpbiByICYmXG4gICAgICAgICAgICAgICAgdm9pZCAwICE9PSByLnNldCh0aGlzLCB0LCBcInZhbHVlXCIpKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnZhbHVlID0gdCkpO1xuICAgICAgICAgIH0pKVxuICAgICAgICA6IHRcbiAgICAgICAgPyAociA9IEUudmFsSG9va3NbdC50eXBlXSB8fCBFLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pICYmXG4gICAgICAgICAgXCJnZXRcIiBpbiByICYmXG4gICAgICAgICAgdm9pZCAwICE9PSAoZSA9IHIuZ2V0KHQsIFwidmFsdWVcIikpXG4gICAgICAgICAgPyBlXG4gICAgICAgICAgOiBcInN0cmluZ1wiID09IHR5cGVvZiAoZSA9IHQudmFsdWUpXG4gICAgICAgICAgPyBlLnJlcGxhY2UodXQsIFwiXCIpXG4gICAgICAgICAgOiBudWxsID09IGVcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGVcbiAgICAgICAgOiB2b2lkIDA7XG4gICAgfSxcbiAgfSksXG4gICAgRS5leHRlbmQoe1xuICAgICAgdmFsSG9va3M6IHtcbiAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBFLmZpbmQuYXR0cihlLCBcInZhbHVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGwgIT0gdCA/IHQgOiBvdChFLnRleHQoZSkpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0LFxuICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICBpID0gZS5vcHRpb25zLFxuICAgICAgICAgICAgICBvID0gZS5zZWxlY3RlZEluZGV4LFxuICAgICAgICAgICAgICBhID0gXCJzZWxlY3Qtb25lXCIgPT09IGUudHlwZSxcbiAgICAgICAgICAgICAgcyA9IGEgPyBudWxsIDogW10sXG4gICAgICAgICAgICAgIHUgPSBhID8gbyArIDEgOiBpLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAociA9IG8gPCAwID8gdSA6IGEgPyBvIDogMDsgciA8IHU7IHIrKylcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICgobiA9IGlbcl0pLnNlbGVjdGVkIHx8IHIgPT09IG8pICYmXG4gICAgICAgICAgICAgICAgIW4uZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fCAhUyhuLnBhcmVudE5vZGUsIFwib3B0Z3JvdXBcIikpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICgoKHQgPSBFKG4pLnZhbCgpKSwgYSkpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgIHMucHVzaCh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbixcbiAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgaSA9IGUub3B0aW9ucyxcbiAgICAgICAgICAgICAgbyA9IEUubWFrZUFycmF5KHQpLFxuICAgICAgICAgICAgICBhID0gaS5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoYS0tKVxuICAgICAgICAgICAgICAoKHIgPSBpW2FdKS5zZWxlY3RlZCA9XG4gICAgICAgICAgICAgICAgLTEgPCBFLmluQXJyYXkoRS52YWxIb29rcy5vcHRpb24uZ2V0KHIpLCBvKSkgJiYgKG4gPSAhMCk7XG4gICAgICAgICAgICByZXR1cm4gbiB8fCAoZS5zZWxlY3RlZEluZGV4ID0gLTEpLCBvO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEUuZWFjaChbXCJyYWRpb1wiLCBcImNoZWNrYm94XCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAoRS52YWxIb29rc1t0aGlzXSA9IHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHQpKVxuICAgICAgICAgICAgcmV0dXJuIChlLmNoZWNrZWQgPSAtMSA8IEUuaW5BcnJheShFKGUpLnZhbCgpLCB0KSk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgICAgbS5jaGVja09uIHx8XG4gICAgICAgICAgKEUudmFsSG9va3NbdGhpc10uZ2V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsID09PSBlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID8gXCJvblwiIDogZS52YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICB9KSxcbiAgICAobS5mb2N1c2luID0gXCJvbmZvY3VzaW5cIiBpbiBnKTtcbiAgdmFyIGx0ID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuICAgIGN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgRS5leHRlbmQoRS5ldmVudCwge1xuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgbyxcbiAgICAgICAgYSxcbiAgICAgICAgcyxcbiAgICAgICAgdSxcbiAgICAgICAgbCxcbiAgICAgICAgYyxcbiAgICAgICAgZixcbiAgICAgICAgZCA9IFtuIHx8IHddLFxuICAgICAgICBwID0geS5jYWxsKGUsIFwidHlwZVwiKSA/IGUudHlwZSA6IGUsXG4gICAgICAgIGggPSB5LmNhbGwoZSwgXCJuYW1lc3BhY2VcIikgPyBlLm5hbWVzcGFjZS5zcGxpdChcIi5cIikgOiBbXTtcbiAgICAgIGlmIChcbiAgICAgICAgKChvID0gZiA9IGEgPSBuID0gbiB8fCB3KSxcbiAgICAgICAgMyAhPT0gbi5ub2RlVHlwZSAmJlxuICAgICAgICAgIDggIT09IG4ubm9kZVR5cGUgJiZcbiAgICAgICAgICAhbHQudGVzdChwICsgRS5ldmVudC50cmlnZ2VyZWQpICYmXG4gICAgICAgICAgKC0xIDwgcC5pbmRleE9mKFwiLlwiKSAmJiAoKHAgPSAoaCA9IHAuc3BsaXQoXCIuXCIpKS5zaGlmdCgpKSwgaC5zb3J0KCkpLFxuICAgICAgICAgICh1ID0gcC5pbmRleE9mKFwiOlwiKSA8IDAgJiYgXCJvblwiICsgcCksXG4gICAgICAgICAgKChlID0gZVtFLmV4cGFuZG9dXG4gICAgICAgICAgICA/IGVcbiAgICAgICAgICAgIDogbmV3IEUuRXZlbnQocCwgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlKSkuaXNUcmlnZ2VyID0gciA/IDIgOiAzKSxcbiAgICAgICAgICAoZS5uYW1lc3BhY2UgPSBoLmpvaW4oXCIuXCIpKSxcbiAgICAgICAgICAoZS5ybmFtZXNwYWNlID0gZS5uYW1lc3BhY2VcbiAgICAgICAgICAgID8gbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiICsgaC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikgKyBcIihcXFxcLnwkKVwiKVxuICAgICAgICAgICAgOiBudWxsKSxcbiAgICAgICAgICAoZS5yZXN1bHQgPSB2b2lkIDApLFxuICAgICAgICAgIGUudGFyZ2V0IHx8IChlLnRhcmdldCA9IG4pLFxuICAgICAgICAgICh0ID0gbnVsbCA9PSB0ID8gW2VdIDogRS5tYWtlQXJyYXkodCwgW2VdKSksXG4gICAgICAgICAgKGMgPSBFLmV2ZW50LnNwZWNpYWxbcF0gfHwge30pLFxuICAgICAgICAgIHIgfHwgIWMudHJpZ2dlciB8fCAhMSAhPT0gYy50cmlnZ2VyLmFwcGx5KG4sIHQpKSlcbiAgICAgICkge1xuICAgICAgICBpZiAoIXIgJiYgIWMubm9CdWJibGUgJiYgIXgobikpIHtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgcyA9IGMuZGVsZWdhdGVUeXBlIHx8IHAsIGx0LnRlc3QocyArIHApIHx8IChvID0gby5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIG87XG4gICAgICAgICAgICBvID0gby5wYXJlbnROb2RlXG4gICAgICAgICAgKVxuICAgICAgICAgICAgZC5wdXNoKG8pLCAoYSA9IG8pO1xuICAgICAgICAgIGEgPT09IChuLm93bmVyRG9jdW1lbnQgfHwgdykgJiZcbiAgICAgICAgICAgIGQucHVzaChhLmRlZmF1bHRWaWV3IHx8IGEucGFyZW50V2luZG93IHx8IGcpO1xuICAgICAgICB9XG4gICAgICAgIGkgPSAwO1xuICAgICAgICB3aGlsZSAoKG8gPSBkW2krK10pICYmICFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpXG4gICAgICAgICAgKGYgPSBvKSxcbiAgICAgICAgICAgIChlLnR5cGUgPSAxIDwgaSA/IHMgOiBjLmJpbmRUeXBlIHx8IHApLFxuICAgICAgICAgICAgKGwgPVxuICAgICAgICAgICAgICAoWS5nZXQobywgXCJldmVudHNcIikgfHwgT2JqZWN0LmNyZWF0ZShudWxsKSlbZS50eXBlXSAmJlxuICAgICAgICAgICAgICBZLmdldChvLCBcImhhbmRsZVwiKSkgJiYgbC5hcHBseShvLCB0KSxcbiAgICAgICAgICAgIChsID0gdSAmJiBvW3VdKSAmJlxuICAgICAgICAgICAgICBsLmFwcGx5ICYmXG4gICAgICAgICAgICAgIFgobykgJiZcbiAgICAgICAgICAgICAgKChlLnJlc3VsdCA9IGwuYXBwbHkobywgdCkpLFxuICAgICAgICAgICAgICAhMSA9PT0gZS5yZXN1bHQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoZS50eXBlID0gcCksXG4gICAgICAgICAgciB8fFxuICAgICAgICAgICAgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxuICAgICAgICAgICAgKGMuX2RlZmF1bHQgJiYgITEgIT09IGMuX2RlZmF1bHQuYXBwbHkoZC5wb3AoKSwgdCkpIHx8XG4gICAgICAgICAgICAhWChuKSB8fFxuICAgICAgICAgICAgKHUgJiZcbiAgICAgICAgICAgICAgYihuW3BdKSAmJlxuICAgICAgICAgICAgICAheChuKSAmJlxuICAgICAgICAgICAgICAoKGEgPSBuW3VdKSAmJiAoblt1XSA9IG51bGwpLFxuICAgICAgICAgICAgICAoRS5ldmVudC50cmlnZ2VyZWQgPSBwKSxcbiAgICAgICAgICAgICAgZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICYmIGYuYWRkRXZlbnRMaXN0ZW5lcihwLCBjdCksXG4gICAgICAgICAgICAgIG5bcF0oKSxcbiAgICAgICAgICAgICAgZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICYmIGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihwLCBjdCksXG4gICAgICAgICAgICAgIChFLmV2ZW50LnRyaWdnZXJlZCA9IHZvaWQgMCksXG4gICAgICAgICAgICAgIGEgJiYgKG5bdV0gPSBhKSkpLFxuICAgICAgICAgIGUucmVzdWx0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaW11bGF0ZTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIHZhciByID0gRS5leHRlbmQobmV3IEUuRXZlbnQoKSwgbiwgeyB0eXBlOiBlLCBpc1NpbXVsYXRlZDogITAgfSk7XG4gICAgICBFLmV2ZW50LnRyaWdnZXIociwgbnVsbCwgdCk7XG4gICAgfSxcbiAgfSksXG4gICAgRS5mbi5leHRlbmQoe1xuICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgRS5ldmVudC50cmlnZ2VyKGUsIHQsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzWzBdO1xuICAgICAgICBpZiAobikgcmV0dXJuIEUuZXZlbnQudHJpZ2dlcihlLCB0LCBuLCAhMCk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIG0uZm9jdXNpbiB8fFxuICAgICAgRS5lYWNoKHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24gKG4sIHIpIHtcbiAgICAgICAgdmFyIGkgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIEUuZXZlbnQuc2ltdWxhdGUociwgZS50YXJnZXQsIEUuZXZlbnQuZml4KGUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgRS5ldmVudC5zcGVjaWFsW3JdID0ge1xuICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgIHQgPSBZLmFjY2VzcyhlLCByKTtcbiAgICAgICAgICAgIHQgfHwgZS5hZGRFdmVudExpc3RlbmVyKG4sIGksICEwKSwgWS5hY2Nlc3MoZSwgciwgKHQgfHwgMCkgKyAxKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRlYXJkb3duOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgIHQgPSBZLmFjY2VzcyhlLCByKSAtIDE7XG4gICAgICAgICAgICB0XG4gICAgICAgICAgICAgID8gWS5hY2Nlc3MoZSwgciwgdClcbiAgICAgICAgICAgICAgOiAoZS5yZW1vdmVFdmVudExpc3RlbmVyKG4sIGksICEwKSwgWS5yZW1vdmUoZSwgcikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAoRS5wYXJzZVhNTCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCwgbjtcbiAgICAgIGlmICghZSB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSByZXR1cm4gbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHQgPSBuZXcgZy5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZSwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAobiA9IHQgJiYgdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdKSxcbiAgICAgICAgKHQgJiYgIW4pIHx8XG4gICAgICAgICAgRS5lcnJvcihcbiAgICAgICAgICAgIFwiSW52YWxpZCBYTUw6IFwiICtcbiAgICAgICAgICAgICAgKG5cbiAgICAgICAgICAgICAgICA/IEUubWFwKG4uY2hpbGROb2RlcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICB9KS5qb2luKFwiXFxuXCIpXG4gICAgICAgICAgICAgICAgOiBlKVxuICAgICAgICAgICksXG4gICAgICAgIHRcbiAgICAgICk7XG4gICAgfSk7XG4gIHZhciBmdCxcbiAgICBkdCA9IC9cXFtcXF0kLyxcbiAgICBwdCA9IC9cXHI/XFxuL2csXG4gICAgaHQgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksXG4gICAgZ3QgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG4gIGZ1bmN0aW9uIHZ0KG4sIGUsIHIsIGkpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSlcbiAgICAgIEUuZWFjaChlLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByIHx8IGR0LnRlc3QobilcbiAgICAgICAgICA/IGkobiwgdClcbiAgICAgICAgICA6IHZ0KFxuICAgICAgICAgICAgICBuICsgXCJbXCIgKyAoXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiBudWxsICE9IHQgPyBlIDogXCJcIikgKyBcIl1cIixcbiAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIGVsc2UgaWYgKHIgfHwgXCJvYmplY3RcIiAhPT0gVChlKSkgaShuLCBlKTtcbiAgICBlbHNlIGZvciAodCBpbiBlKSB2dChuICsgXCJbXCIgKyB0ICsgXCJdXCIsIGVbdF0sIHIsIGkpO1xuICB9XG4gIChFLnBhcmFtID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICB2YXIgbixcbiAgICAgIHIgPSBbXSxcbiAgICAgIGkgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICB2YXIgbiA9IGIodCkgPyB0KCkgOiB0O1xuICAgICAgICByW3IubGVuZ3RoXSA9XG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobnVsbCA9PSBuID8gXCJcIiA6IG4pO1xuICAgICAgfTtcbiAgICBpZiAobnVsbCA9PSBlKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSB8fCAoZS5qcXVlcnkgJiYgIUUuaXNQbGFpbk9iamVjdChlKSkpXG4gICAgICBFLmVhY2goZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpKHRoaXMubmFtZSwgdGhpcy52YWx1ZSk7XG4gICAgICB9KTtcbiAgICBlbHNlIGZvciAobiBpbiBlKSB2dChuLCBlW25dLCB0LCBpKTtcbiAgICByZXR1cm4gci5qb2luKFwiJlwiKTtcbiAgfSksXG4gICAgRS5mbi5leHRlbmQoe1xuICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBFLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSk7XG4gICAgICB9LFxuICAgICAgc2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZSA9IEUucHJvcCh0aGlzLCBcImVsZW1lbnRzXCIpO1xuICAgICAgICAgIHJldHVybiBlID8gRS5tYWtlQXJyYXkoZSkgOiB0aGlzO1xuICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnR5cGU7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICB0aGlzLm5hbWUgJiZcbiAgICAgICAgICAgICAgIUUodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikgJiZcbiAgICAgICAgICAgICAgZ3QudGVzdCh0aGlzLm5vZGVOYW1lKSAmJlxuICAgICAgICAgICAgICAhaHQudGVzdChlKSAmJlxuICAgICAgICAgICAgICAodGhpcy5jaGVja2VkIHx8ICFmZS50ZXN0KGUpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gRSh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IG5cbiAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShuKVxuICAgICAgICAgICAgICA/IEUubWFwKG4sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiB0Lm5hbWUsIHZhbHVlOiBlLnJlcGxhY2UocHQsIFwiXFxyXFxuXCIpIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiB7IG5hbWU6IHQubmFtZSwgdmFsdWU6IG4ucmVwbGFjZShwdCwgXCJcXHJcXG5cIikgfTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5nZXQoKTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgRS5mbi5leHRlbmQoe1xuICAgICAgd3JhcEFsbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpc1swXSAmJlxuICAgICAgICAgICAgKGIoZSkgJiYgKGUgPSBlLmNhbGwodGhpc1swXSkpLFxuICAgICAgICAgICAgKHQgPSBFKGUsIHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApKSxcbiAgICAgICAgICAgIHRoaXNbMF0ucGFyZW50Tm9kZSAmJiB0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSxcbiAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlLmZpcnN0RWxlbWVudENoaWxkKSBlID0gZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzKSksXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHdyYXBJbm5lcjogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIGIobilcbiAgICAgICAgICA/IHRoaXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBFKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcywgZSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gRSh0aGlzKSxcbiAgICAgICAgICAgICAgICB0ID0gZS5jb250ZW50cygpO1xuICAgICAgICAgICAgICB0Lmxlbmd0aCA/IHQud3JhcEFsbChuKSA6IGUuYXBwZW5kKG4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgd3JhcDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSBiKHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgRSh0aGlzKS53cmFwQWxsKG4gPyB0LmNhbGwodGhpcywgZSkgOiB0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdW53cmFwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMucGFyZW50KGUpXG4gICAgICAgICAgICAubm90KFwiYm9keVwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBFKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIChFLmV4cHIucHNldWRvcy5oaWRkZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuICFFLmV4cHIucHNldWRvcy52aXNpYmxlKGUpO1xuICAgIH0pLFxuICAgIChFLmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhIShlLm9mZnNldFdpZHRoIHx8IGUub2Zmc2V0SGVpZ2h0IHx8IGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xuICAgIH0pLFxuICAgIChtLmNyZWF0ZUhUTUxEb2N1bWVudCA9XG4gICAgICAoKChmdCA9IHcuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTCA9XG4gICAgICAgIFwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiksXG4gICAgICAyID09PSBmdC5jaGlsZE5vZGVzLmxlbmd0aCkpLFxuICAgIChFLnBhcnNlSFRNTCA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICByZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgZVxuICAgICAgICA/IFtdXG4gICAgICAgIDogKFwiYm9vbGVhblwiID09IHR5cGVvZiB0ICYmICgobiA9IHQpLCAodCA9ICExKSksXG4gICAgICAgICAgdCB8fFxuICAgICAgICAgICAgKG0uY3JlYXRlSFRNTERvY3VtZW50XG4gICAgICAgICAgICAgID8gKCgociA9ICh0ID1cbiAgICAgICAgICAgICAgICAgIHcuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgXCJiYXNlXCJcbiAgICAgICAgICAgICAgICApKS5ocmVmID0gdy5sb2NhdGlvbi5ocmVmKSxcbiAgICAgICAgICAgICAgICB0LmhlYWQuYXBwZW5kQ2hpbGQocikpXG4gICAgICAgICAgICAgIDogKHQgPSB3KSksXG4gICAgICAgICAgKG8gPSAhbiAmJiBbXSksXG4gICAgICAgICAgKGkgPSBrLmV4ZWMoZSkpXG4gICAgICAgICAgICA/IFt0LmNyZWF0ZUVsZW1lbnQoaVsxXSldXG4gICAgICAgICAgICA6ICgoaSA9IG1lKFtlXSwgdCwgbykpLFxuICAgICAgICAgICAgICBvICYmIG8ubGVuZ3RoICYmIEUobykucmVtb3ZlKCksXG4gICAgICAgICAgICAgIEUubWVyZ2UoW10sIGkuY2hpbGROb2RlcykpKTtcbiAgICAgIHZhciByLCBpLCBvO1xuICAgIH0pLFxuICAgIChFLm9mZnNldCA9IHtcbiAgICAgIHNldE9mZnNldDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgdmFyIHIsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBvLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgcyxcbiAgICAgICAgICB1LFxuICAgICAgICAgIGwgPSBFLmNzcyhlLCBcInBvc2l0aW9uXCIpLFxuICAgICAgICAgIGMgPSBFKGUpLFxuICAgICAgICAgIGYgPSB7fTtcbiAgICAgICAgXCJzdGF0aWNcIiA9PT0gbCAmJiAoZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIiksXG4gICAgICAgICAgKHMgPSBjLm9mZnNldCgpKSxcbiAgICAgICAgICAobyA9IEUuY3NzKGUsIFwidG9wXCIpKSxcbiAgICAgICAgICAodSA9IEUuY3NzKGUsIFwibGVmdFwiKSksXG4gICAgICAgICAgKFwiYWJzb2x1dGVcIiA9PT0gbCB8fCBcImZpeGVkXCIgPT09IGwpICYmIC0xIDwgKG8gKyB1KS5pbmRleE9mKFwiYXV0b1wiKVxuICAgICAgICAgICAgPyAoKGEgPSAociA9IGMucG9zaXRpb24oKSkudG9wKSwgKGkgPSByLmxlZnQpKVxuICAgICAgICAgICAgOiAoKGEgPSBwYXJzZUZsb2F0KG8pIHx8IDApLCAoaSA9IHBhcnNlRmxvYXQodSkgfHwgMCkpLFxuICAgICAgICAgIGIodCkgJiYgKHQgPSB0LmNhbGwoZSwgbiwgRS5leHRlbmQoe30sIHMpKSksXG4gICAgICAgICAgbnVsbCAhPSB0LnRvcCAmJiAoZi50b3AgPSB0LnRvcCAtIHMudG9wICsgYSksXG4gICAgICAgICAgbnVsbCAhPSB0LmxlZnQgJiYgKGYubGVmdCA9IHQubGVmdCAtIHMubGVmdCArIGkpLFxuICAgICAgICAgIFwidXNpbmdcIiBpbiB0ID8gdC51c2luZy5jYWxsKGUsIGYpIDogYy5jc3MoZik7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIEUuZm4uZXh0ZW5kKHtcbiAgICAgIG9mZnNldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gdFxuICAgICAgICAgICAgPyB0aGlzXG4gICAgICAgICAgICA6IHRoaXMuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIEUub2Zmc2V0LnNldE9mZnNldCh0aGlzLCB0LCBlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIHZhciBlLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgciA9IHRoaXNbMF07XG4gICAgICAgIHJldHVybiByXG4gICAgICAgICAgPyByLmdldENsaWVudFJlY3RzKCkubGVuZ3RoXG4gICAgICAgICAgICA/ICgoZSA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxuICAgICAgICAgICAgICAobiA9IHIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyksXG4gICAgICAgICAgICAgIHsgdG9wOiBlLnRvcCArIG4ucGFnZVlPZmZzZXQsIGxlZnQ6IGUubGVmdCArIG4ucGFnZVhPZmZzZXQgfSlcbiAgICAgICAgICAgIDogeyB0b3A6IDAsIGxlZnQ6IDAgfVxuICAgICAgICAgIDogdm9pZCAwO1xuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgdmFyIGUsXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHIgPSB0aGlzWzBdLFxuICAgICAgICAgICAgaSA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgICAgICAgaWYgKFwiZml4ZWRcIiA9PT0gRS5jc3MociwgXCJwb3NpdGlvblwiKSkgdCA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAodCA9IHRoaXMub2Zmc2V0KCkpLFxuICAgICAgICAgICAgICAobiA9IHIub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgICAgIChlID0gci5vZmZzZXRQYXJlbnQgfHwgbi5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICBlICYmXG4gICAgICAgICAgICAgIChlID09PSBuLmJvZHkgfHwgZSA9PT0gbi5kb2N1bWVudEVsZW1lbnQpICYmXG4gICAgICAgICAgICAgIFwic3RhdGljXCIgPT09IEUuY3NzKGUsIFwicG9zaXRpb25cIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgZSA9IGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGUgJiZcbiAgICAgICAgICAgICAgZSAhPT0gciAmJlxuICAgICAgICAgICAgICAxID09PSBlLm5vZGVUeXBlICYmXG4gICAgICAgICAgICAgICgoKGkgPSBFKGUpLm9mZnNldCgpKS50b3AgKz0gRS5jc3MoZSwgXCJib3JkZXJUb3BXaWR0aFwiLCAhMCkpLFxuICAgICAgICAgICAgICAoaS5sZWZ0ICs9IEUuY3NzKGUsIFwiYm9yZGVyTGVmdFdpZHRoXCIsICEwKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0LnRvcCAtIGkudG9wIC0gRS5jc3MociwgXCJtYXJnaW5Ub3BcIiwgITApLFxuICAgICAgICAgICAgbGVmdDogdC5sZWZ0IC0gaS5sZWZ0IC0gRS5jc3MociwgXCJtYXJnaW5MZWZ0XCIsICEwKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLm9mZnNldFBhcmVudDtcbiAgICAgICAgICB3aGlsZSAoZSAmJiBcInN0YXRpY1wiID09PSBFLmNzcyhlLCBcInBvc2l0aW9uXCIpKSBlID0gZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgcmV0dXJuIGUgfHwgcmU7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBFLmVhY2goXG4gICAgICB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSxcbiAgICAgIGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICAgIHZhciBvID0gXCJwYWdlWU9mZnNldFwiID09PSBpO1xuICAgICAgICBFLmZuW3RdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gJChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh4KGUpID8gKHIgPSBlKSA6IDkgPT09IGUubm9kZVR5cGUgJiYgKHIgPSBlLmRlZmF1bHRWaWV3KSxcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IG4pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gciA/IHJbaV0gOiBlW3RdO1xuICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgPyByLnNjcm9sbFRvKG8gPyByLnBhZ2VYT2Zmc2V0IDogbiwgbyA/IG4gOiByLnBhZ2VZT2Zmc2V0KVxuICAgICAgICAgICAgICAgIDogKGVbdF0gPSBuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICksXG4gICAgRS5lYWNoKFtcInRvcFwiLCBcImxlZnRcIl0sIGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICBFLmNzc0hvb2tzW25dID0gJGUobS5waXhlbFBvc2l0aW9uLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBpZiAodClcbiAgICAgICAgICByZXR1cm4gKHQgPSBGZShlLCBuKSksIFBlLnRlc3QodCkgPyBFKGUpLnBvc2l0aW9uKClbbl0gKyBcInB4XCIgOiB0O1xuICAgICAgfSk7XG4gICAgfSksXG4gICAgRS5lYWNoKHsgSGVpZ2h0OiBcImhlaWdodFwiLCBXaWR0aDogXCJ3aWR0aFwiIH0sIGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgICBFLmVhY2goXG4gICAgICAgIHsgcGFkZGluZzogXCJpbm5lclwiICsgYSwgY29udGVudDogcywgXCJcIjogXCJvdXRlclwiICsgYSB9LFxuICAgICAgICBmdW5jdGlvbiAociwgbykge1xuICAgICAgICAgIEUuZm5bb10gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoICYmIChyIHx8IFwiYm9vbGVhblwiICE9IHR5cGVvZiBlKSxcbiAgICAgICAgICAgICAgaSA9IHIgfHwgKCEwID09PSBlIHx8ICEwID09PSB0ID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIpO1xuICAgICAgICAgICAgcmV0dXJuICQoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgoZSlcbiAgICAgICAgICAgICAgICAgID8gMCA9PT0gby5pbmRleE9mKFwib3V0ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgPyBlW1wiaW5uZXJcIiArIGFdXG4gICAgICAgICAgICAgICAgICAgIDogZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIGFdXG4gICAgICAgICAgICAgICAgICA6IDkgPT09IGUubm9kZVR5cGVcbiAgICAgICAgICAgICAgICAgID8gKChyID0gZS5kb2N1bWVudEVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICBlLmJvZHlbXCJzY3JvbGxcIiArIGFdLFxuICAgICAgICAgICAgICAgICAgICAgIHJbXCJzY3JvbGxcIiArIGFdLFxuICAgICAgICAgICAgICAgICAgICAgIGUuYm9keVtcIm9mZnNldFwiICsgYV0sXG4gICAgICAgICAgICAgICAgICAgICAgcltcIm9mZnNldFwiICsgYV0sXG4gICAgICAgICAgICAgICAgICAgICAgcltcImNsaWVudFwiICsgYV1cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIDogdm9pZCAwID09PSBuXG4gICAgICAgICAgICAgICAgICA/IEUuY3NzKGUsIHQsIGkpXG4gICAgICAgICAgICAgICAgICA6IEUuc3R5bGUoZSwgdCwgbiwgaSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgIG4gPyBlIDogdm9pZCAwLFxuICAgICAgICAgICAgICBuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSksXG4gICAgRS5mbi5leHRlbmQoe1xuICAgICAgYmluZDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub24oZSwgbnVsbCwgdCwgbik7XG4gICAgICB9LFxuICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmYoZSwgbnVsbCwgdCk7XG4gICAgICB9LFxuICAgICAgZGVsZWdhdGU6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uKHQsIGUsIG4sIHIpO1xuICAgICAgfSxcbiAgICAgIHVuZGVsZWdhdGU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIHJldHVybiAxID09PSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLm9mZihlLCBcIioqXCIpXG4gICAgICAgICAgOiB0aGlzLm9mZih0LCBlIHx8IFwiKipcIiwgbik7XG4gICAgICB9LFxuICAgICAgaG92ZXI6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0IHx8IGUpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBFLmVhY2goXG4gICAgICBcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcbiAgICAgICAgXCIgXCJcbiAgICAgICksXG4gICAgICBmdW5jdGlvbiAoZSwgbikge1xuICAgICAgICBFLmZuW25dID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gMCA8IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICAgICAgID8gdGhpcy5vbihuLCBudWxsLCBlLCB0KVxuICAgICAgICAgICAgOiB0aGlzLnRyaWdnZXIobik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKTtcbiAgdmFyIHl0ID0gL15bXFxzXFx1RkVGRlxceEEwXSt8KFteXFxzXFx1RkVGRlxceEEwXSlbXFxzXFx1RkVGRlxceEEwXSskL2c7XG4gIChFLnByb3h5ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICB2YXIgbiwgciwgaTtcbiAgICBpZiAoKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgKChuID0gZVt0XSksICh0ID0gZSksIChlID0gbikpLCBiKGUpKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChyID0gcy5jYWxsKGFyZ3VtZW50cywgMikpLFxuICAgICAgICAoKGkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYXBwbHkodCB8fCB0aGlzLCByLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9KS5ndWlkID0gZS5ndWlkID1cbiAgICAgICAgICBlLmd1aWQgfHwgRS5ndWlkKyspLFxuICAgICAgICBpXG4gICAgICApO1xuICB9KSxcbiAgICAoRS5ob2xkUmVhZHkgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZSA/IEUucmVhZHlXYWl0KysgOiBFLnJlYWR5KCEwKTtcbiAgICB9KSxcbiAgICAoRS5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSksXG4gICAgKEUucGFyc2VKU09OID0gSlNPTi5wYXJzZSksXG4gICAgKEUubm9kZU5hbWUgPSBTKSxcbiAgICAoRS5pc0Z1bmN0aW9uID0gYiksXG4gICAgKEUuaXNXaW5kb3cgPSB4KSxcbiAgICAoRS5jYW1lbENhc2UgPSBWKSxcbiAgICAoRS50eXBlID0gVCksXG4gICAgKEUubm93ID0gRGF0ZS5ub3cpLFxuICAgIChFLmlzTnVtZXJpYyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IEUudHlwZShlKTtcbiAgICAgIHJldHVybiAoXCJudW1iZXJcIiA9PT0gdCB8fCBcInN0cmluZ1wiID09PSB0KSAmJiAhaXNOYU4oZSAtIHBhcnNlRmxvYXQoZSkpO1xuICAgIH0pLFxuICAgIChFLnRyaW0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG51bGwgPT0gZSA/IFwiXCIgOiAoZSArIFwiXCIpLnJlcGxhY2UoeXQsIFwiJDFcIik7XG4gICAgfSksXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiZcbiAgICAgIGRlZmluZS5hbWQgJiZcbiAgICAgIGRlZmluZShcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRTtcbiAgICAgIH0pO1xuICB2YXIgbXQgPSBnLmpRdWVyeSxcbiAgICBidCA9IGcuJDtcbiAgcmV0dXJuIChcbiAgICAoRS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBnLiQgPT09IEUgJiYgKGcuJCA9IGJ0KSwgZSAmJiBnLmpRdWVyeSA9PT0gRSAmJiAoZy5qUXVlcnkgPSBtdCksIEU7XG4gICAgfSksXG4gICAgXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZSAmJiAoZy5qUXVlcnkgPSBnLiQgPSBFKSxcbiAgICBFXG4gICk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJudW1iZXJPZkd1ZXN0c0ZpZWxkIiwicXVlcnlTZWxlY3RvciIsImhvdXJGaWVsZCIsImRhdGVGaWVsZCIsInVwZGF0ZUhvdXJzIiwibnVtYmVyT2ZHdWVzdHMiLCJ2YWx1ZSIsImRhdGUiLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJhdmFpbGFibGVIb3VycyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInBsYWNlaG9sZGVyT3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaG91ciIsIm9wdGlvbiIsImVyciIsImUiLCJmIiwicmVxdWlyZSIsIlRvb2x0aXAiLCJUb2FzdCIsIlBvcG92ZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb29raWUiLCJpbmNsdWRlcyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiRGF0ZSIsIm5vdyIsInRvVVRDU3RyaW5nIiwidCIsIm1vZHVsZSIsIl90eXBlb2YiLCJleHBvcnRzIiwiRXJyb3IiLCJ3aW5kb3ciLCJnIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwic2xpY2UiLCJ2IiwiZmxhdCIsImNhbGwiLCJhcHBseSIsInUiLCJwdXNoIiwiaSIsImluZGV4T2YiLCJvIiwidG9TdHJpbmciLCJ5IiwiaGFzT3duUHJvcGVydHkiLCJhIiwibCIsIm0iLCJiIiwibm9kZVR5cGUiLCJpdGVtIiwieCIsInciLCJjIiwidHlwZSIsInNyYyIsIm5vbmNlIiwibm9Nb2R1bGUiLCJDIiwidGV4dCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJwYXJlbnROb2RlIiwiVCIsIkUiLCJmbiIsImluaXQiLCJkIiwibGVuZ3RoIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJ0b0FycmF5IiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiZWFjaCIsIm1hcCIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZXZlbiIsImdyZXAiLCJvZGQiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNQbGFpbk9iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJpc0VtcHR5T2JqZWN0IiwiZ2xvYmFsRXZhbCIsIm1ha2VBcnJheSIsImluQXJyYXkiLCJndWlkIiwic3VwcG9ydCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsInAiLCJoIiwiQSIsIk4iLCJ1ZSIsIlMiLCJrIiwiRCIsIkwiLCJqIiwicG9wIiwicSIsIk8iLCJQIiwiSCIsIkkiLCJSIiwiQiIsIk0iLCJXIiwiRiIsIlJlZ0V4cCIsIiQiLCJ6IiwiXyIsIlUiLCJWIiwiWCIsIlEiLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlkiLCJHIiwiSyIsIkoiLCJaIiwiZWUiLCJ0ZSIsIm5lIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmUiLCJpZSIsImNoYXJDb2RlQXQiLCJvZSIsImFlIiwieGUiLCJkaXNhYmxlZCIsIm5vZGVOYW1lIiwiZGlyIiwibmV4dCIsImNoaWxkTm9kZXMiLCJzZSIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiaWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJxc2EiLCJ0ZXN0IiwieWUiLCJzY29wZSIsImJlIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYWNoZUxlbmd0aCIsInNoaWZ0IiwibGUiLCJjZSIsImZlIiwiYXR0ckhhbmRsZSIsImRlIiwic291cmNlSW5kZXgiLCJuZXh0U2libGluZyIsInBlIiwiaGUiLCJnZSIsImlzRGlzYWJsZWQiLCJ2ZSIsImlzWE1MIiwibmFtZXNwYWNlVVJJIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInRvcCIsImF0dGFjaEV2ZW50IiwiY3NzSGFzIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaWx0ZXIiLCJmaW5kIiwiZ2V0QXR0cmlidXRlTm9kZSIsImlubmVySFRNTCIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJkaXNjb25uZWN0ZWRNYXRjaCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiY29udGFpbnMiLCJzb3J0RGV0YWNoZWQiLCJ1bnNoaWZ0IiwiYXR0ciIsInNwZWNpZmllZCIsImVzY2FwZSIsInVuaXF1ZVNvcnQiLCJkZXRlY3REdXBsaWNhdGVzIiwic29ydFN0YWJsZSIsImdldFRleHQiLCJub2RlVmFsdWUiLCJzZWxlY3RvcnMiLCJjcmVhdGVQc2V1ZG8iLCJtYXRjaCIsInJlbGF0aXZlIiwicHJlRmlsdGVyIiwibGFzdENoaWxkIiwidW5pcXVlSUQiLCJwc2V1ZG9zIiwic2V0RmlsdGVycyIsIm5vdCIsImhhcyIsImxhbmciLCJ0YXJnZXQiLCJsb2NhdGlvbiIsImhhc2giLCJyb290IiwiZm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiaGFzRm9jdXMiLCJocmVmIiwidGFiSW5kZXgiLCJlbmFibGVkIiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsImVtcHR5IiwicGFyZW50IiwiaGVhZGVyIiwiaW5wdXQiLCJidXR0b24iLCJsdCIsImd0IiwibnRoIiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJtZSIsIndlIiwiQ2UiLCJUZSIsIkVlIiwiZmlsdGVycyIsInRva2VuaXplIiwiY29tcGlsZSIsInNlbGVjdG9yIiwic2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZXhwciIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJpcyIsInBhcnNlSFRNTCIsInJlYWR5IiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50IiwicmV2ZXJzZSIsInByb21pc2UiLCJmYWlsIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJfY2F0Y2giLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJjc3MiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIm9mZiIsImV2ZW50IiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIkFlIiwiTmUiLCJTZSIsImtlIiwiRGUiLCJMZSIsImplIiwicWUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIk9lIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIlBlIiwiSGUiLCJJZSIsIm9wZW5lciIsImdldENvbXB1dGVkU3R5bGUiLCJSZSIsIkJlIiwiTWUiLCJXZSIsIkZlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiemUiLCJfZSIsIlVlIiwiVmUiLCJjc3NQcm9wcyIsIlhlIiwiUWUiLCJZZSIsIkdlIiwidmlzaWJpbGl0eSIsIktlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIlplIiwiY2VpbCIsImV0IiwiZ2V0Q2xpZW50UmVjdHMiLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJjc3NOdW1iZXIiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJncmlkQXJlYSIsImdyaWRDb2x1bW4iLCJncmlkQ29sdW1uRW5kIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZFJvdyIsImdyaWRSb3dFbmQiLCJncmlkUm93U3RhcnQiLCJsaW5lSGVpZ2h0Iiwib3JkZXIiLCJvcnBoYW5zIiwid2lkb3dzIiwiekluZGV4Iiwiem9vbSIsImN1ciIsInVuaXQiLCJzdGFydCIsInNldFByb3BlcnR5IiwiaXNGaW5pdGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImV4cGFuZCIsImRlbGF5IiwiZngiLCJzcGVlZHMiLCJjbGVhclRpbWVvdXQiLCJjaGVja09uIiwib3B0U2VsZWN0ZWQiLCJyYWRpb1ZhbHVlIiwidHQiLCJudCIsInJlbW92ZUF0dHIiLCJwcm9wIiwiYXR0ckhvb2tzIiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsInJlbW92ZVByb3AiLCJwcm9wRml4IiwicHJvcEhvb2tzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJ1dCIsInZhbCIsInZhbEhvb2tzIiwib3B0aW9ucyIsImZvY3VzaW4iLCJjdCIsInBhcmVudFdpbmRvdyIsInNpbXVsYXRlIiwidHJpZ2dlckhhbmRsZXIiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImZ0IiwiZHQiLCJwdCIsImh0IiwidnQiLCJwYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsImhpZGRlbiIsInZpc2libGUiLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxUbyIsIkhlaWdodCIsIldpZHRoIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwieXQiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIm10IiwialF1ZXJ5IiwiYnQiLCJub0NvbmZsaWN0Il0sInNvdXJjZVJvb3QiOiIifQ==