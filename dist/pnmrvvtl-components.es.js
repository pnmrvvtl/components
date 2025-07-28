import tr, { Fragment as ar } from "react";
import './index.css';var _ = { exports: {} }, y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function or() {
  if (M) return y;
  M = 1;
  var n = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function o(t, s, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      l = {};
      for (var E in s)
        E !== "key" && (l[E] = s[E]);
    } else l = s;
    return s = l.ref, {
      $$typeof: n,
      type: t,
      key: f,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return y.Fragment = c, y.jsx = o, y.jsxs = o, y;
}
var p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function sr() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && function() {
    function n(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === rr ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case v:
          return "Fragment";
        case z:
          return "Profiler";
        case q:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (r.displayName || "Context") + ".Provider";
          case J:
            return (r._context.displayName || "Context") + ".Consumer";
          case X:
            var e = r.render;
            return r = r.displayName, r || (r = e.displayName || e.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Q:
            return e = r.displayName || null, e !== null ? e : n(r.type) || "Memo";
          case S:
            e = r._payload, r = r._init;
            try {
              return n(r(e));
            } catch {
            }
        }
      return null;
    }
    function c(r) {
      return "" + r;
    }
    function o(r) {
      try {
        c(r);
        var e = !1;
      } catch {
        e = !0;
      }
      if (e) {
        e = console;
        var a = e.error, i = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return a.call(
          e,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), c(r);
      }
    }
    function t(r) {
      if (r === v) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === S)
        return "<...>";
      try {
        var e = n(r);
        return e ? "<" + e + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var r = T.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(r) {
      if (h.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function E(r, e) {
      function a() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          e
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: a,
        configurable: !0
      });
    }
    function b() {
      var r = n(this.type);
      return N[r] || (N[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function R(r, e, a, i, m, d, C, w) {
      return a = d.ref, r = {
        $$typeof: B,
        type: r,
        key: e,
        props: d,
        _owner: m
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function j(r, e, a, i, m, d, C, w) {
      var u = e.children;
      if (u !== void 0)
        if (i)
          if (er(u)) {
            for (i = 0; i < u.length; i++)
              x(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(u);
      if (h.call(e, "key")) {
        u = n(r);
        var F = Object.keys(e).filter(function(nr) {
          return nr !== "key";
        });
        i = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", I[u + i] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          F,
          u
        ), I[u + i] = !0);
      }
      if (u = null, a !== void 0 && (o(a), u = "" + a), f(e) && (o(e.key), u = "" + e.key), "key" in e) {
        a = {};
        for (var k in e)
          k !== "key" && (a[k] = e[k]);
      } else a = e;
      return u && E(
        a,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), R(
        r,
        u,
        d,
        m,
        s(),
        a,
        C,
        w
      );
    }
    function x(r) {
      typeof r == "object" && r !== null && r.$$typeof === B && r._store && (r._store.validated = 1);
    }
    var A = tr, B = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), V = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), rr = Symbol.for("react.client.reference"), T = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, er = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var P, N = {}, Y = A["react-stack-bottom-frame"].bind(
      A,
      l
    )(), $ = D(t(l)), I = {};
    p.Fragment = v, p.jsx = function(r, e, a, i, m) {
      var d = 1e4 > T.recentlyCreatedOwnerStacks++;
      return j(
        r,
        e,
        a,
        !1,
        i,
        m,
        d ? Error("react-stack-top-frame") : Y,
        d ? D(t(r)) : $
      );
    }, p.jsxs = function(r, e, a, i, m) {
      var d = 1e4 > T.recentlyCreatedOwnerStacks++;
      return j(
        r,
        e,
        a,
        !0,
        i,
        m,
        d ? Error("react-stack-top-frame") : Y,
        d ? D(t(r)) : $
      );
    };
  }()), p;
}
var W;
function cr() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? _.exports = or() : _.exports = sr()), _.exports;
}
var O = cr();
const ir = "_button_i05og_93", ur = "_primary_i05og_105", lr = "_secondary_i05og_113", fr = "_disabled_i05og_121", g = {
  button: ir,
  primary: ur,
  secondary: lr,
  disabled: fr
};
function G(n) {
  var c, o, t = "";
  if (typeof n == "string" || typeof n == "number") t += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (c = 0; c < s; c++) n[c] && (o = G(n[c])) && (t && (t += " "), t += o);
  } else for (o in n) n[o] && (t && (t += " "), t += o);
  return t;
}
function Er() {
  for (var n, c, o = 0, t = "", s = arguments.length; o < s; o++) (n = arguments[o]) && (c = G(n)) && (t && (t += " "), t += c);
  return t;
}
const dr = {
  primary: "#2563EB",
  primary50: "#EFF6FF",
  primary100: "#DBEAFE",
  primary200: "#BFDBFE",
  primary300: "#93C5FD",
  primary400: "#60A5FA",
  primary500: "#3B82F6",
  primary600: "#2563EB",
  primary700: "#1D4ED8",
  primary800: "#1E40AF",
  primary900: "#1E3A8A",
  secondary: "#7C3AED",
  secondary50: "#F5F3FF",
  secondary100: "#EDE9FE",
  secondary200: "#DDD6FE",
  secondary300: "#C4B5FD",
  secondary400: "#A78BFA",
  secondary500: "#8B5CF6",
  secondary600: "#7C3AED",
  secondary700: "#6D28D9",
  secondary800: "#5B21B6",
  secondary900: "#4C1D95",
  accent: "#F59E0B",
  accent50: "#FFFBEB",
  accent100: "#FEF3C7",
  accent200: "#FDE68A",
  accent300: "#FCD34D",
  accent400: "#FBBF24",
  accent500: "#F59E0B",
  accent600: "#D97706",
  accent700: "#B45309",
  accent800: "#92400E",
  accent900: "#78350F",
  success: "#22C55E",
  success50: "#F0FDF4",
  success100: "#DCFCE7",
  success200: "#BBF7D0",
  success300: "#86EFAC",
  success400: "#4ADE80",
  success500: "#22C55E",
  success600: "#16A34A",
  success700: "#15803D",
  success800: "#166534",
  success900: "#14532D",
  error: "#EF4444",
  error50: "#FEF2F2",
  error100: "#FEE2E2",
  error200: "#FECACA",
  error300: "#FCA5A5",
  error400: "#F87171",
  error500: "#EF4444",
  error600: "#DC2626",
  error700: "#B91C1C",
  error800: "#991B1B",
  error900: "#7F1D1D",
  warning: "#F97316",
  warning50: "#FFF7ED",
  warning100: "#FFEDD5",
  warning200: "#FED7AA",
  warning300: "#FDBA74",
  warning400: "#FB923C",
  warning500: "#F97316",
  warning600: "#EA580C",
  warning700: "#C2410C",
  warning800: "#9A3412",
  warning900: "#7C2D12",
  info: "#3B82F6",
  info50: "#EFF6FF",
  info100: "#DBEAFE",
  info200: "#BFDBFE",
  info300: "#93C5FD",
  info400: "#60A5FA",
  info500: "#3B82F6",
  info600: "#2563EB",
  info700: "#1D4ED8",
  info800: "#1E40AF",
  info900: "#1E3A8A",
  white: "#FFFFFF",
  black: "#000000",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827"
}, mr = {
  primary: g.primary,
  secondary: g.secondary
};
function pr(n) {
  const { children: c, variant: o = "primary", disabled: t, className: s, style: l, backgroundColor: f, ...E } = n;
  return /* @__PURE__ */ O.jsx(
    "button",
    {
      className: Er(
        g.button,
        mr[o],
        t && g.disabled,
        s
      ),
      style: {
        backgroundColor: f ? dr[f] : void 0,
        ...l
      },
      disabled: t,
      ...E,
      children: c
    }
  );
}
const Fr = {};
function br(n) {
  const {
    items: c,
    renderItem: o,
    className: t,
    columnsNumber: s,
    rowGap: l,
    columnGap: f,
    ...E
  } = n;
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: Fr.container,
      ...E,
      style: {
        ...E.style,
        display: "grid",
        gridTemplateColumns: `repeat(${s || 1}, 1fr)`,
        gridRowGap: l || "1rem",
        gridColumnGap: f || "1rem"
      },
      children: c.map((b, R) => /* @__PURE__ */ O.jsx(ar, { children: o(b, R) }, b.id))
    }
  );
}
export {
  pr as Button,
  br as Virtualize
};
