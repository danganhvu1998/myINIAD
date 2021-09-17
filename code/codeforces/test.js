{/* <script src="https://j.wovn.io/1" async="true" data-wovnio="key=Gl5Niu&amp;backend=true&amp;currentLang=ja&amp;defaultLang=en&amp;urlPattern=path&amp;version=1.0.0&amp;backendVersion=WOVNWP_1.5.1&amp;langParamName=wovn" data-wovnio-cache-time="202108170545+0000"> </script> */}

/*! For license information please see _bundle.js.LICENSE.txt */ ! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        t[o].call(r.exports, r, r.exports, n);
        r.l = !0;
        return r.exports
    }
    n.m = t;
    n.c = e;
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    };
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    n.t = function(t, e) {
        1 & e && (t = n(t));
        if (8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        n.r(o);
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    };
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        n.d(e, "a", e);
        return e
    };
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    };
    n.p = "";
    n(n.s = 88)
}([function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, i = o(n(27)),
        a = n(1),
        s = n(28),
        u = [],
        l = [],
        c = new s.AllHtmlEntities;
    var d = function() {
        function t() {}
        t.prototype.pageIsWidgetPreview = function() {
            return /fake_page\/blank/.test(window.location.pathname) && /wovn\.(io|com)/.test(window.location.hostname)
        };
        t.prototype.getMetaElement = function(t, e) {
            e || (e = {});
            for (var n = document.getElementsByTagName("meta"), o = 0; o < n.length; ++o)
                if (n[o].getAttribute("name") === t) {
                    var r = !0;
                    for (var i in e)
                        if (e.hasOwnProperty(i) && e[i] !== n[o].getAttribute(i)) {
                            r = !1;
                            break
                        } if (r) return n[o]
                } return null
        };
        t.prototype.canStyleChange = function(t) {
            if (!(function() {
                    void 0 === r && (r = !!window.getComputedStyle);
                    return r
                }() && t.style && t.style.getPropertyPriority && t.style.getPropertyValue && t.style.setProperty)) return !1;
            var e = t.nodeName;
            return "META" !== e && ("IMG" !== e && ("#text" !== e && "#comment" !== e))
        };
        t.prototype.getReadyState = function() {
            return document.readyState
        };
        t.prototype.onLoadingComplete = function(t) {
            var e = this;
            "complete" === this.getReadyState() ? t() : l.push(setTimeout((function() {
                e.onLoadingComplete(t)
            }), 100))
        };
        t.prototype.onDomReady = function(t) {
            i.default(t)
        };
        t.prototype.sendRequest = function(t, e, n, o, r) {
            var i;
            if (window.XDomainRequest) {
                (i = new window.XDomainRequest).onload = function() {
                    o(i.responseText, null)
                };
                i.onerror = function() {
                    r()
                };
                i.ontimeout = function() {
                    r()
                }
            } else(i = new XMLHttpRequest).onreadystatechange = function() {
                if (4 === i.readyState)
                    if (200 === this.status || 304 === this.status) {
                        for (var t = {}, e = i.getAllResponseHeaders().split("\r\n"), n = 0; n < e.length; n++)
                            if ("" !== e[n]) {
                                var a = e[n].split(": ");
                                t[a[0]] = a[1]
                            } o(i.responseText, t)
                    } else r(i)
            };
            i.open(t, e, !0);
            i.timeout = 6e4;
            i.ontimeout = function(t) {
                r(new Error("Request timeout!"))
            };
            n ? "object" == typeof n ? i.send(a.stringifyJSON(n)) : i.send(n) : i.send()
        };
        t.prototype.pushUnique = function(t, e) {
            for (var n = 0; n < t.length; n++)
                if (e == t[n]) return;
            t.push(e)
        };
        t.prototype.findIndex = function(t, e, n) {
            n = n || function(t, e) {
                return t == e
            };
            for (var o = 0; o < t.length; o++)
                if (n(t[o], e)) return o;
            return -1
        };
        t.prototype.setComplement = function(t, e, n) {
            n = n || function(t, e) {
                return t == e
            };
            var o = [];
            for (var r in t) t.hasOwnProperty(r) && -1 === this.findIndex(e, t[r], n) && o.push(t[r]);
            return o
        };
        t.prototype.decodeHTMLEntities = function(t) {
            return c.decode(t)
        };
        t.prototype.toArrayFromDomList = function(t) {
            return Array.prototype.slice.call(t)
        };
        t.prototype.values = function(t) {
            for (var e = Object.keys(t), n = [], o = 0; o < e.length; o++) n.push(t[e[o]]);
            return n
        };
        t.prototype.each = function(t, e) {
            for (var n = Object.keys(t), o = 0; o < n.length; o++) {
                var r = n[o];
                e(r, t[r])
            }
        };
        t.prototype.includes = function(t, e) {
            for (var n = 0; n < t.length; n++)
                if (t[n] === e) return !0;
            return !1
        };
        t.prototype.isValidURI = function(t) {
            try {
                decodeURIComponent(t);
                return !0
            } catch (t) {
                if ("URIError" === t.name) return !1
            }
        };
        t.prototype.assign = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            if (Object.assign) return Object.assign.apply(null, arguments);
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(t), r = 0; r < e.length; r++) {
                var i = e[r];
                if (null != i)
                    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (o[a] = i[a])
            }
            return o
        };
        t.prototype.onEvent = function(t, e, n, o) {
            void 0 === o && (o = !1);
            e = e.replace(/^on(.)/i, (function(t, e) {
                return e.toLowerCase()
            }));
            t.addEventListener(e, n, o);
            u.push({
                target: t,
                eventName: e,
                handler: n,
                useCapture: o
            })
        };
        t.prototype.removeHandler = function(t, e, n, o) {
            void 0 === o && (o = !1);
            t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent && t.detachEvent("on" + e, n)
        };
        t.prototype.destroy = function() {
            for (var t = 0; t < u.length; t++) {
                var e = u[t];
                this.removeHandler(e.target, e.eventName, e.handler, e.useCapture)
            }
            for (t = 0; t < l.length; t++) clearTimeout(l[t])
        };
        return t
    }();
    e.default = new d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.cloneJSON = e.stringifyJSON = void 0;
    e.stringifyJSON = function(t, e) {
        if (!('["a"]' === JSON.stringify(["a"]))) {
            if (void 0 !== window.Prototype) return Object.toJSON(t);
            if (void 0 !== window.MooTools && void 0 !== JSON.encode) return JSON.encode(t)
        }
        return JSON.stringify(t, null, e)
    };
    e.cloneJSON = function(t) {
        return JSON.parse(e.stringifyJSON(t))
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(0)),
        i = function() {
            function t() {}
            t.prototype.find = function(t, e, n) {
                for (var o = 0; o < t.length; ++o) {
                    var r = t[o];
                    if (e.call(n, r, o, t)) return r
                }
            };
            t.prototype.flatten = function(t) {
                var e = this;
                return this.reduce(t, (function(t, n) {
                    return Array.isArray(n) ? t.concat(e.flatten(n)) : t.concat(n)
                }), [])
            };
            t.prototype.flatMap = function(t, e, n) {
                return this.flatten(t.map(e, n))
            };
            t.prototype.toObject = function(t, e, n) {
                var o = {};
                t.forEach((function(t) {
                    o[e(t)] = n(t)
                }));
                return o
            };
            t.prototype.includes = function(t, e) {
                return -1 !== t.indexOf(e)
            };
            t.prototype.intersect = function(t, e) {
                var n = this;
                return t.filter((function(t) {
                    return n.includes(e, t)
                }))
            };
            t.prototype.difference = function(t, e) {
                var n = this;
                return t.filter((function(t) {
                    return !n.includes(e, t)
                }))
            };
            t.prototype.union = function(t, e) {
                return t.concat(e).filter((function(t, e, n) {
                    return n.indexOf(t) === e
                }))
            };
            t.prototype.reduce = function(t, e, n) {
                for (var o = n, r = 0, i = t; r < i.length; r++) {
                    o = e(o, i[r])
                }
                return o
            };
            t.prototype.distinctBy = function(t, e) {
                var n = {};
                t.forEach((function(o, r) {
                    var i = e(o, r, t);
                    n.hasOwnProperty(i) || (n[i] = o)
                }));
                return r.default.values(n)
            };
            return t
        }();
    e.default = new i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CookieStore = e.WovnCookies = void 0;
    e.WovnCookies = {
        OPTED_OUT_COOKIES: {
            name: "wovn-optedOutCookies",
            expirationDays: 7300
        },
        WAP_ENABLED: {
            name: "wovn-wapEnabled",
            expirationDays: 7300
        },
        REPORTING_ENABLED: {
            name: "wovn-reportingEnabled",
            expirationDays: 7300
        },
        DYNAMIC_LOADING_ENABLED: {
            name: "wovn-dynamicLoadingEnabled",
            expirationDays: 7300
        },
        WAP_USER: {
            name: "wap_user",
            expirationDays: 365
        },
        PARCEL_FORWARDING_LANG: {
            name: "wovn_parcel_forwarding_lang",
            expirationDays: 365
        },
        SELECTED_LANG: {
            name: "wovn_selected_lang",
            expirationDays: 365
        },
        WOVN_MTM_SHOWED_LANGS: {
            name: "wovn_mtm_showed_langs",
            expirationDays: 365
        },
        WOVN_MONITOR_ENABLE: {
            name: "wovn_monitor_enable",
            expirationDays: 365
        },
        WOVN_UUID: {
            name: "wovn_uuid",
            expirationDays: 365
        },
        PREVIEW_SIGNATURE: {
            name: "wovn_preview_signature",
            expirationDays: 365
        },
        AUTO_TRIGGER_REPORT: {
            name: "wovn_auto_trigger_report",
            expirationDays: 30
        },
        LEGACY_SELECTED_LANG: {
            name: "wovn_selected_lang_2017v1",
            expirationDays: 1
        },
        LEGACY_OPTED_OUT_WAP: {
            name: "wovn-optedOutWap",
            expirationDays: 1
        },
        LEGACY_OPTED_OUT_REPORTING: {
            name: "wovn-optedOutReporting",
            expirationDays: 1
        },
        LEGACY_OPTED_OUT_DYNAMIC_LOADING: {
            name: "wovn-optedOutDynamicLoading",
            expirationDays: 1
        }
    };
    var o = function() {
        function t(t, n) {
            void 0 === n && (n = "");
            this.cookieContainer = t;
            this.cookieDomain = n;
            this.isDisabled = !1;
            var o = !!this.cookieContainer.getValue(e.WovnCookies.OPTED_OUT_COOKIES.name);
            o && this.setOptOutCookie();
            this.isDisabled = o
        }
        t.prototype.get = function(t) {
            return this.cookieContainer.getValue(t.name)
        };
        t.prototype.set = function(t, e) {
            if (this.isDisabled) return null;
            this.cookieContainer.setValue(t.name, e, t.expirationDays, this.cookieDomain)
        };
        t.prototype.erase = function(t) {
            this.cookieContainer.eraseValue(t.name, this.cookieDomain)
        };
        t.prototype.disable = function() {
            this.removeAll();
            this.setOptOutCookie();
            this.isDisabled = !0
        };
        t.prototype.destroy = function() {
            this.removeAll()
        };
        t.prototype.removeAll = function() {
            for (var t = 0, n = Object.keys(e.WovnCookies); t < n.length; t++) {
                var o = n[t],
                    r = e.WovnCookies[o];
                r.name !== e.WovnCookies.OPTED_OUT_COOKIES.name && this.erase(r)
            }
        };
        t.prototype.forceConvertAllToInsecure = function() {
            for (var t = 0, n = Object.keys(e.WovnCookies); t < n.length; t++) {
                var o = n[t],
                    r = e.WovnCookies[o],
                    i = this.get(r);
                if (i) {
                    this.erase(r);
                    this.set(r, i)
                }
            }
        };
        t.prototype.setOptOutCookie = function() {
            this.cookieContainer.setValue(e.WovnCookies.OPTED_OUT_COOKIES.name, "true", 7300, this.cookieDomain)
        };
        return t
    }();
    e.CookieStore = o
}, function(t, e, n) {
    (function(e, n) {
        o = function() {
            "use strict";

            function t(t) {
                return "function" == typeof t
            }
            var o = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                r = 0,
                i = void 0,
                a = void 0,
                s = function(t, e) {
                    g[r] = t;
                    g[r + 1] = e;
                    2 === (r += 2) && (a ? a(f) : m())
                },
                u = "undefined" != typeof window ? window : void 0,
                l = u || {},
                c = l.MutationObserver || l.WebKitMutationObserver,
                d = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function h() {
                var t = setTimeout;
                return function() {
                    return t(f, 1)
                }
            }
            var g = new Array(1e3);

            function f() {
                for (var t = 0; t < r; t += 2) {
                    (0, g[t])(g[t + 1]);
                    g[t] = void 0;
                    g[t + 1] = void 0
                }
                r = 0
            }
            var m = void 0;
            m = d ? function() {
                return e.nextTick(f)
            } : c ? function() {
                var t = 0,
                    e = new c(f),
                    n = document.createTextNode("");
                e.observe(n, {
                    characterData: !0
                });
                return function() {
                    n.data = t = ++t % 2
                }
            }() : p ? function() {
                var t = new MessageChannel;
                t.port1.onmessage = f;
                return function() {
                    return t.port2.postMessage(0)
                }
            }() : void 0 === u ? function() {
                try {
                    var t = Function("return this")().require("vertx");
                    return void 0 !== (i = t.runOnLoop || t.runOnContext) ? function() {
                        i(f)
                    } : h()
                } catch (t) {
                    return h()
                }
            }() : h();

            function v(t, e) {
                var n = this,
                    o = new this.constructor(b);
                void 0 === o[w] && k(o);
                var r = n._state;
                if (r) {
                    var i = arguments[r - 1];
                    s((function() {
                        return A(r, o, i, n._result)
                    }))
                } else x(n, o, t, e);
                return o
            }

            function y(t) {
                if (t && "object" == typeof t && t.constructor === this) return t;
                var e = new this(b);
                S(e, t);
                return e
            }
            var w = Math.random().toString(36).substring(2);

            function b() {}
            var _ = void 0;

            function C(e, n, o) {
                n.constructor === e.constructor && o === v && n.constructor.resolve === y ? function(t, e) {
                    1 === e._state ? L(t, e._result) : 2 === e._state ? E(t, e._result) : x(e, void 0, (function(e) {
                        return S(t, e)
                    }), (function(e) {
                        return E(t, e)
                    }))
                }(e, n) : void 0 === o ? L(e, n) : t(o) ? function(t, e, n) {
                    s((function(t) {
                        var o = !1,
                            r = function(t, e, n, o) {
                                try {
                                    t.call(e, n, o)
                                } catch (t) {
                                    return t
                                }
                            }(n, e, (function(n) {
                                if (!o) {
                                    o = !0;
                                    e !== n ? S(t, n) : L(t, n)
                                }
                            }), (function(e) {
                                if (!o) {
                                    o = !0;
                                    E(t, e)
                                }
                            }), t._label);
                        if (!o && r) {
                            o = !0;
                            E(t, r)
                        }
                    }), t)
                }(e, n, o) : L(e, n)
            }

            function S(t, e) {
                if (t === e) E(t, new TypeError("You cannot resolve a promise with itself"));
                else if (r = typeof(o = e), null === o || "object" !== r && "function" !== r) L(t, e);
                else {
                    var n = void 0;
                    try {
                        n = e.then
                    } catch (e) {
                        E(t, e);
                        return
                    }
                    C(t, e, n)
                }
                var o, r
            }

            function T(t) {
                t._onerror && t._onerror(t._result);
                O(t)
            }

            function L(t, e) {
                if (t._state === _) {
                    t._result = e;
                    t._state = 1;
                    0 !== t._subscribers.length && s(O, t)
                }
            }

            function E(t, e) {
                if (t._state === _) {
                    t._state = 2;
                    t._result = e;
                    s(T, t)
                }
            }

            function x(t, e, n, o) {
                var r = t._subscribers,
                    i = r.length;
                t._onerror = null;
                r[i] = e;
                r[i + 1] = n;
                r[i + 2] = o;
                0 === i && t._state && s(O, t)
            }

            function O(t) {
                var e = t._subscribers,
                    n = t._state;
                if (0 !== e.length) {
                    for (var o = void 0, r = void 0, i = t._result, a = 0; a < e.length; a += 3) {
                        o = e[a];
                        r = e[a + n];
                        o ? A(n, o, r, i) : r(i)
                    }
                    t._subscribers.length = 0
                }
            }

            function A(e, n, o, r) {
                var i = t(o),
                    a = void 0,
                    s = void 0,
                    u = !0;
                if (i) {
                    try {
                        a = o(r)
                    } catch (t) {
                        u = !1;
                        s = t
                    }
                    if (n === a) {
                        E(n, new TypeError("A promises callback cannot return that same promise."));
                        return
                    }
                } else a = r;
                n._state !== _ || (i && u ? S(n, a) : !1 === u ? E(n, s) : 1 === e ? L(n, a) : 2 === e && E(n, a))
            }
            var P = 0;

            function k(t) {
                t[w] = P++;
                t._state = void 0;
                t._result = void 0;
                t._subscribers = []
            }
            var D = function() {
                    function t(t, e) {
                        this._instanceConstructor = t;
                        this.promise = new t(b);
                        this.promise[w] || k(this.promise);
                        if (o(e)) {
                            this.length = e.length;
                            this._remaining = e.length;
                            this._result = new Array(this.length);
                            if (0 === this.length) L(this.promise, this._result);
                            else {
                                this.length = this.length || 0;
                                this._enumerate(e);
                                0 === this._remaining && L(this.promise, this._result)
                            }
                        } else E(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    t.prototype._enumerate = function(t) {
                        for (var e = 0; this._state === _ && e < t.length; e++) this._eachEntry(t[e], e)
                    };
                    t.prototype._eachEntry = function(t, e) {
                        var n = this._instanceConstructor,
                            o = n.resolve;
                        if (o === y) {
                            var r = void 0,
                                i = void 0,
                                a = !1;
                            try {
                                r = t.then
                            } catch (t) {
                                a = !0;
                                i = t
                            }
                            if (r === v && t._state !== _) this._settledAt(t._state, e, t._result);
                            else if ("function" != typeof r) {
                                this._remaining--;
                                this._result[e] = t
                            } else if (n === N) {
                                var s = new n(b);
                                a ? E(s, i) : C(s, t, r);
                                this._willSettleAt(s, e)
                            } else this._willSettleAt(new n((function(e) {
                                return e(t)
                            })), e)
                        } else this._willSettleAt(o(t), e)
                    };
                    t.prototype._settledAt = function(t, e, n) {
                        var o = this.promise;
                        if (o._state === _) {
                            this._remaining--;
                            2 === t ? E(o, n) : this._result[e] = n
                        }
                        0 === this._remaining && L(o, this._result)
                    };
                    t.prototype._willSettleAt = function(t, e) {
                        var n = this;
                        x(t, void 0, (function(t) {
                            return n._settledAt(1, e, t)
                        }), (function(t) {
                            return n._settledAt(2, e, t)
                        }))
                    };
                    return t
                }(),
                N = function() {
                    function e(t) {
                        this[w] = P++;
                        this._result = this._state = void 0;
                        this._subscribers = [];
                        if (b !== t) {
                            "function" != typeof t && function() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }();
                            this instanceof e ? function(t, e) {
                                try {
                                    e((function(e) {
                                        S(t, e)
                                    }), (function(e) {
                                        E(t, e)
                                    }))
                                } catch (e) {
                                    E(t, e)
                                }
                            }(this, t) : function() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }()
                        }
                    }
                    e.prototype.catch = function(t) {
                        return this.then(null, t)
                    };
                    e.prototype.finally = function(e) {
                        var n = this,
                            o = n.constructor;
                        return t(e) ? n.then((function(t) {
                            return o.resolve(e()).then((function() {
                                return t
                            }))
                        }), (function(t) {
                            return o.resolve(e()).then((function() {
                                throw t
                            }))
                        })) : n.then(e, e)
                    };
                    return e
                }();
            N.prototype.then = v;
            N.all = function(t) {
                return new D(this, t).promise
            };
            N.race = function(t) {
                var e = this;
                return o(t) ? new e((function(n, o) {
                    for (var r = t.length, i = 0; i < r; i++) e.resolve(t[i]).then(n, o)
                })) : new e((function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                }))
            };
            N.resolve = y;
            N.reject = function(t) {
                var e = new this(b);
                E(e, t);
                return e
            };
            N._setScheduler = function(t) {
                a = t
            };
            N._setAsap = function(t) {
                s = t
            };
            N._asap = s;
            N.polyfill = function() {
                var t = void 0;
                if (void 0 !== n) t = n;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var o = null;
                    try {
                        o = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if ("[object Promise]" === o && !e.cast) return
                }
                t.Promise = N
            };
            N.Promise = N;
            return N
        }, t.exports = o();
        var o
    }).call(this, n(50), n(17))
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isHttpProtocol = e.protocolWithoutSlashes = e.isRelativePath = e.isAbsolutePath = e.isAbsoluteUrl = e.getHostWithPort = e.getHostWithNormalizedPort = e.parseUrl = e.isFilePathUri = e.getNormalizedPathWithQuery = e.getNormalizedPath = e.getHostname = e.changeProtocol = e.getProtocolOrDefault = e.removeSpecifiedHash = e.removeQueryAndHash = e.removeHash = void 0;
    var r = o(n(49)),
        i = "^([a-zA-Z]+://|//)",
        a = "^([a-zA-Z]+):",
        s = {
            PROTOCOL: new RegExp(a),
            PROTOCOL_WITHOUT_SLASHES: new RegExp("^([a-zA-Z]+):[^/]"),
            DOMAIN_AND_PORT: new RegExp("^([a-zA-Z]+://|//)(.[^/]+)/?"),
            ABSOLUTE_URL: new RegExp(i, "i"),
            ABSOLUTE_PATH: /^\//,
            IMAGE_FILE: /^(https?:\/\/)?.*(\.(jpe|jpe?g|bmp|gif|png|btif|tiff?|psd|djvu?|xif|wbmp|webp|p(n|b|g|p)m|rgb|tga|x(b|p)m|xwd|pic|ico|fh(c|4|5|7)?|xif|f(bs|px|st)))(?=([\?#&].*$|$))/i,
            AUDIO_FILE: /^(https?:\/\/)?.*(\.(mp(3|2)|m(p?2|3|p?4|pg)a|midi?|kar|rmi|web(m|a)|aif(f?|c)|w(ma|av|ax)|m(ka|3u)|sil|s3m|og(a|g)|uvv?a))(?=([\?#&].*$|$))/i,
            VIDEO_FILE: /^(https?:\/\/)?.*(\.(m(x|4)u|fl(i|v)|3g(p|2)|jp(gv|g?m)|mp(4v?|g4|e?g)|m(1|2)v|ogv|m(ov|ng)|qt|uvv?(h|m|p|s|v)|dvb|mk(v|3d|s)|f4v|as(x|f)|w(m(v|x)|vx)))(?=([\?#&].*$|$))/i,
            DOC_FILE: /^(https?:\/\/)?.*(\.((g|7)?zip|7z|tar|gz|rar|ez|aw|atom(cat|svc)?|(cc)?xa?ml|cdmi(a|c|d|o|q)?|epub|g(ml|px|xf)|jar|js|ser|class|json(ml)?|do(c|t)(m|x)?|xls(m|x)?|xps|pp(a|tx?|s)m?|potm?|sldm|mp(p|t)|bin|dms|lrf|mar|so|dist|distz|m?pkg|bpk|dump|rtf|tfi|pdf|pgp|apk|o(t|d)(b|c|ft?|g|h|i|p|s|t)))(?=([\?#&].*$|$))/i
        };
    e.removeHash = function(t) {
        return t.replace(/#.*/, "")
    };

    function u(t) {
        return t.replace(/[\#\?].*/, "")
    }
    e.removeQueryAndHash = u;
    e.removeSpecifiedHash = function(t, e) {
        var n = new RegExp("(#.*)" + e + "(=[^#=&]*)?(?:$|&)");
        return t.replace(n, "$1").replace(/[&#].?$/, "")
    };

    function l(t, e) {
        var n = t.match(s.PROTOCOL);
        return n && n[1] ? n[1].toLowerCase() : function(t) {
            return t.protocol.substr(0, t.protocol.length - 1)
        }(e)
    }
    e.getProtocolOrDefault = l;
    e.changeProtocol = function(t, e) {
        var n = e ? e + ":" : "";
        return t.replace(s.PROTOCOL, n)
    };
    e.getHostname = function(t) {
        var e = d(t).match(/^([^\/:?#]+)/);
        return e && e[1] ? e[1].toLowerCase() : null
    };

    function c(t) {
        var e = u(d(t)).replace(/^[^\/]*/, "").toLowerCase();
        return "" !== e ? e : null
    }
    e.getNormalizedPath = c;
    e.getNormalizedPathWithQuery = function(t) {
        var e = d(t),
            n = c(t),
            o = e.match(/^[^?]*(\?[^#]*)/);
        return o && o[1] ? (null !== n ? n : "") + o[1] : n
    };

    function d(t) {
        return t.replace(/^([a-zA-Z]+:)?\/\//, "")
    }
    e.isFilePathUri = function(t) {
        if (!t) return !1;
        var e = u(t);
        return s.IMAGE_FILE.test(e) || s.AUDIO_FILE.test(e) || s.VIDEO_FILE.test(e) || s.DOC_FILE.test(e)
    };
    e.parseUrl = function(t) {
        var e = document.createElement("a");
        e.href = t;
        "" != e.host && "" != e.protocol || (e.href = e.href + "");
        "/" !== e.pathname[0] && e.children;
        var n = p(e.hostname),
            o = e.href.replace(e.protocol + "//" + e.hostname, e.protocol + "//" + n);
        return {
            hash: e.hash,
            href: o,
            host: p(e.host),
            hostname: n,
            search: e.search,
            pathname: e.pathname,
            origin: p(e.origin),
            port: e.port,
            username: e.username,
            password: e.password,
            protocol: e.protocol,
            toString: function() {
                return e.href
            }
        }
    };

    function p(t) {
        return null != t ? r.default.toASCII(t) : t
    }
    e.getHostWithNormalizedPort = function(t) {
        var e = t.host;
        "http:" === t.protocol && /:80$/.test(e) ? e = e.replace(/:80$/, "") : "https:" === t.protocol && /:443$/.test(e) && (e = e.replace(/:443$/, ""));
        return e
    };
    e.getHostWithPort = function(t) {
        var e = s.DOMAIN_AND_PORT.exec(t);
        return e ? e[2] : ""
    };

    function h(t) {
        return s.ABSOLUTE_URL.test(t)
    }
    e.isAbsoluteUrl = h;

    function g(t) {
        return s.ABSOLUTE_PATH.test(t)
    }
    e.isAbsolutePath = g;
    e.isRelativePath = function(t) {
        return !h(t) && !g(t)
    };
    e.protocolWithoutSlashes = function(t) {
        return s.PROTOCOL_WITHOUT_SLASHES.test(t)
    };
    e.isHttpProtocol = function(t, e) {
        var n = l(t, e);
        return "http" === n || "https" === n
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.serializeRequestParameters = e.ContentType = void 0;
    var o, r = n(1);
    ! function(t) {
        t.FormUrlEncoded = "application/x-www-form-urlencoded";
        t.JsonAsText = "text/plain"
    }(o = e.ContentType || (e.ContentType = {}));
    e.serializeRequestParameters = function(t, e) {
        switch (e) {
            case o.FormUrlEncoded:
                return function(t) {
                    return Object.keys(t).map((function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    })).join("&")
                }(t);
            case o.JsonAsText:
                return Object.keys(t).length > 0 ? r.stringifyJSON(t) : "";
            default:
                throw new Error("Unsupported content type")
        }
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.findComments = e.getNextElementSibling = e.getNodeSiblingIndex = e.hasWovnAttribute = e.isComment = e.isTextNode = e.isElement = e.safeQuerySelectorAll = e.createClassNameRegex = e.hasClass = e.removeClass = e.addClass = e.removeNode = e.isHTMLElement = void 0;
    var r = n(8),
        i = o(n(0));
    e.isHTMLElement = function(t) {
        return "function" == typeof t.getAttribute
    };
    e.removeNode = function(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    };
    e.addClass = function(t, e) {
        a(t, e) || (t.className = 0 == t.className.length ? e : t.className + " " + e)
    };
    e.removeClass = function(t, e) {
        var n = r.trimWhitespace(e),
            o = new RegExp("(^| )" + n + "( |$)", "g"),
            i = t.className.replace(o, " ").replace(/\s+/g, " ");
        t.className = r.trimWhitespace(i)
    };

    function a(t, e) {
        return s([r.trimWhitespace(e)]).test(t.className)
    }
    e.hasClass = a;

    function s(t) {
        var e = t.map((function(t) {
            return "(^| )" + t + "( |$)"
        })).join("|");
        return new RegExp(e)
    }
    e.createClassNameRegex = s;
    e.safeQuerySelectorAll = function(t, e) {
        void 0 === e && (e = document);
        try {
            return i.default.toArrayFromDomList(e.querySelectorAll(t))
        } catch (t) {
            return []
        }
    };

    function u(t) {
        return t && t.nodeType == Node.ELEMENT_NODE
    }
    e.isElement = u;
    e.isTextNode = function(t) {
        return t && t.nodeType == Node.TEXT_NODE
    };
    e.isComment = function(t) {
        return t && t.nodeType == Node.COMMENT_NODE
    };
    e.hasWovnAttribute = function(t, e) {
        return t.hasAttribute(e) || t.hasAttribute("data-" + e)
    };
    e.getNodeSiblingIndex = function(t) {
        for (var e = t.previousSibling, n = 0; e;) {
            e.nodeName === t.nodeName && n++;
            e = e.previousSibling
        }
        return n
    };
    e.getNextElementSibling = function(t) {
        for (; t = t.nextSibling;)
            if (u(t)) return t;
        return null
    };
    e.findComments = function(t) {
        function e(t) {
            return t.nodeType === Node.COMMENT_NODE ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
        e.acceptNode = e;
        for (var n = document.createTreeWalker(t, NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_ELEMENT, e, !1), o = []; n.nextNode();) o.push(n.currentNode);
        return o
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.containsSubstring = e.trimEnd = e.removeTextAroundTags = e.trimWhitespace = e.makePersistentWhitespace = e.containsOnlyWhitespace = e.containsOnlySpecialCharacters = e.endsWith = e.startsWith = void 0;
    var o = /^[`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\|;:'",\/\\?]+$/,
        r = /^\s*$/;
    e.startsWith = function(t, e) {
        return "string" == typeof t && "string" == typeof e && t.substr(0, e.length) === e
    };
    e.endsWith = function(t, e, n) {
        if (null == e) return !1;
        (void 0 === n || n > t.length) && (n = t.length);
        return t.substring(n - e.length, n) === e
    };
    e.containsOnlySpecialCharacters = function(t) {
        return "string" == typeof t && o.test(t)
    };
    e.containsOnlyWhitespace = function(t) {
        return "string" == typeof t && r.test(t)
    };
    e.makePersistentWhitespace = function(t) {
        return "​" + t + "​"
    };
    var i = !("".trim && 1 === "​".trim().length);
    e.trimWhitespace = function(t) {
        return i ? t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : t.trim()
    };
    e.removeTextAroundTags = function(t) {
        var e = t,
            n = new RegExp("(<[^/>]+>)[^<]+?(<[^/>]+>)", "g"),
            o = new RegExp("(<\\/[^>]+>)[^<]+?(<[^>]+>)", "g");
        e = a(e, n, "$1$2");
        return e = a(e, o, "$1$2")
    };

    function a(t, e, n) {
        for (var o = t, r = t.replace(e, n); r !== o;) r = (o = r).replace(e, n);
        return o
    }
    e.trimEnd = function(t, e) {
        for (var n = 0, o = t.length - 1; o >= 0 && t[o] == e; o--) n++;
        return n > 0 ? t.slice(0, t.length - n) : t
    };
    e.containsSubstring = function(t, e) {
        return "string" == typeof t && "string" == typeof e && -1 !== t.indexOf(e)
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
        return (o = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }).apply(this, arguments)
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WebService = void 0;
    var r = n(8),
        i = function() {
            function t(t) {
                this.executor = t
            }
            t.prototype.get = function(t, e, n, o, i) {
                void 0 === i && (i = !1);
                return this.executor.get(r.trimEnd(t, "/") + e, n, o, i)
            };
            t.prototype.getAndParseJson = function(t, e, n, r, i) {
                void 0 === i && (i = !1);
                return this.get(t, e, n, r, i).then((function(t) {
                    return o(o({}, t), {
                        body: JSON.parse(t.body)
                    })
                }))
            };
            t.prototype.post = function(t, e, n, o, i) {
                void 0 === i && (i = !1);
                return this.executor.post(r.trimEnd(t, "/") + e, n, o, i)
            };
            t.prototype.postAndParseJson = function(t, e, n, r, i) {
                void 0 === i && (i = !1);
                return this.post(t, e, n, r, i).then((function(t) {
                    return o(o({}, t), {
                        body: JSON.parse(t.body)
                    })
                }))
            };
            return t
        }();
    e.WebService = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.fromCodePoint = String.fromCodePoint || function(t) {
        return String.fromCharCode(Math.floor((t - 65536) / 1024) + 55296, (t - 65536) % 1024 + 56320)
    };
    e.getCodePoint = String.prototype.codePointAt ? function(t, e) {
        return t.codePointAt(e)
    } : function(t, e) {
        return 1024 * (t.charCodeAt(e) - 55296) + t.charCodeAt(e + 1) - 56320 + 65536
    };
    e.highSurrogateFrom = 55296;
    e.highSurrogateTo = 56319
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.deserializeWebCookies = e.decode = e.encode = void 0;
    e.encode = function(t) {
        return encodeURIComponent(t.trim())
    };
    e.decode = function(t) {
        return decodeURIComponent(t)
    };
    e.deserializeWebCookies = function(t) {
        var e = t.split(";").map((function(t) {
                return t.trim().split("=")
            })).filter((function(t) {
                return 2 === t.length
            })),
            n = {};
        e.forEach((function(t) {
            var e = t[0],
                o = t[1];
            n[e] = o
        }));
        return n
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.EventListenerSet = e.removeEventListener = e.addEventListener = e.dispatchEvent = e.createEvent = e.triggerEvent = void 0;
    var r = o(n(0)),
        i = document;
    e.triggerEvent = function(t, e) {
        void 0 === e && (e = {});
        s(a(t, !0, !0, e))
    };

    function a(t, e, n, o) {
        void 0 === o && (o = {});
        var a = i.createEvent("Event");
        a.initEvent(t, e, n);
        r.default.assign(a, o);
        return a
    }
    e.createEvent = a;

    function s(t) {
        return i.dispatchEvent(t)
    }
    e.dispatchEvent = s;
    e.addEventListener = function(t, e) {
        return i.addEventListener(t, e)
    };
    e.removeEventListener = function(t, e) {
        return i.removeEventListener(t, e)
    };
    var u = function() {
        function t() {
            this.listeners = []
        }
        t.prototype.add = function(t, e, n, o) {
            o = o || {
                capture: !1
            };
            t.addEventListener(e, n, o.capture);
            this.listeners.push([t, e, n, o])
        };
        t.prototype.destroyAll = function() {
            for (var t = 0; t < this.listeners.length; t++) {
                var e = this.listeners[t],
                    n = e[0],
                    o = e[1],
                    r = e[2],
                    i = e[3];
                n.removeEventListener(o, r, i.capture)
            }
            this.listeners = []
        };
        return t
    }();
    e.EventListenerSet = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WebCookieContainer = void 0;
    var o = n(11),
        r = function() {
            function t(t, e, n) {
                this.doc = t;
                this.domainOptions = n;
                this.isSecureContext = "https:" === e.protocol
            }
            t.prototype.getValue = function(t) {
                var e = o.deserializeWebCookies(this.doc.cookie || "")[o.encode(t)];
                return e ? o.decode(e) : null
            };
            t.prototype.setValue = function(t, e, n, r) {
                var i = o.encode(t) + "=";
                i += e ? o.encode(e) : "";
                i += "; path=/";
                i += n ? this.formatExpirationDate(n) : "";
                i += r ? "; domain=" + r : "";
                this.isSecureContext && !this.domainOptions.hasFeature("force_insecure_cookies") ? i += "; Secure; SameSite=None" : i += "; SameSite=Lax";
                this.doc.cookie = i
            };
            t.prototype.eraseValue = function(t, e) {
                this.setValue(t, "", -1, "");
                e && this.setValue(t, "", -1, e)
            };
            t.prototype.formatExpirationDate = function(t) {
                var e = new Date;
                e.setTime(e.getTime() + 24 * t * 60 * 60 * 1e3);
                return "; expires=" + e.toUTCString()
            };
            return t
        }();
    e.WebCookieContainer = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
        return (o = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }).apply(this, arguments)
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getNodeIgnoreType = e.isEverythingIgnored = e.isAttributeIgnored = e.isContentIgnored = e.convertStringEnums = e.IgnoreType = void 0;
    var r, i = n(7);
    ! function(t) {
        t[t.None = 0] = "None";
        t[t.TagContent = 1] = "TagContent";
        t[t.Attributes = 2] = "Attributes";
        t[t.All = 3] = "All"
    }(r = e.IgnoreType || (e.IgnoreType = {}));
    e.convertStringEnums = function(t) {
        return o(o({}, t), {
            target: r[t.target]
        })
    };
    e.isContentIgnored = function(t) {
        return t == r.All || t == r.TagContent
    };
    e.isAttributeIgnored = function(t) {
        return t == r.All || t == r.Attributes
    };
    e.isEverythingIgnored = function(t) {
        return t == r.All
    };
    e.getNodeIgnoreType = function(t) {
        return "function" != typeof t.hasAttribute ? r.None : i.hasWovnAttribute(t, "wovn-ignore") ? r.All : (i.hasWovnAttribute(t, "wovn-ignore-content") ? r.TagContent : r.None) | (i.hasWovnAttribute(t, "wovn-ignore-attrs") ? r.Attributes : r.None)
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(32)),
        i = o(n(33)),
        a = o(n(34)),
        s = o(n(35)),
        u = o(n(36)),
        l = o(n(37)),
        c = o(n(38)),
        d = o(n(39)),
        p = o(n(40)),
        h = o(n(41));
    e.default = {
        machineTranslatedModal: {
            css: i.default,
            html: a.default
        },
        tenso: {
            css: s.default,
            bannerHtml: u.default,
            modalHtml: l.default
        },
        languageSelector: {
            commonCss: c.default,
            additionalButtonsCss: d.default,
            standardHtml: p.default,
            newLogoHtml: h.default
        },
        liveEditLoadingOverlay: {
            html: r.default
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getTypeFromXpath = e.isImageXpath = e.ValueCategory = void 0;
    var o;
    ! function(t) {
        t.Text = "text";
        t.Tags = "meta"
    }(o = e.ValueCategory || (e.ValueCategory = {}));
    e.isImageXpath = function(t) {
        var e = t.replace(/iframe\[[^\]]*\]/g, "");
        return /img/.test(e) ? !/\[@alt\]$/.test(e) : /\[@background-image\]$/.test(e) || /\[@image\]$/.test(e) || /\[@srcset\]$/.test(e) || /^custom-image$/.test(e)
    };
    e.getTypeFromXpath = function(t) {
        return function(t) {
            return t.match(/img(\[\d+\])?\[@alt\]$/)
        }(t) ? o.Text : function(t) {
            return t.match(/\/title/) && !t.match(/\/svg/)
        }(t) || function(t) {
            return t.match(/(@value|@placeholder|@alt|@label|@aria-label|title|meta(\[\d+\])?(\[.+?\])?$)/)
        }(t) || function(t) {
            return t.match(/\/\/script\[@type="application\/ld\+json"\]\/text\(\)/)
        }(t) ? o.Tags : o.Text
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Agent = void 0;
    var o, r = window.navigator.userAgent,
        i = window.navigator.vendor,
        a = function() {
            function t() {
                this.isSafariCache = null;
                this.isIECache = null;
                this.isEdgeCache = null
            }
            t.prototype.setVendor = function(t) {
                i = t
            };
            t.prototype.setAgentString = function(t) {
                r = t
            };
            t.prototype.getAgentString = function() {
                return r
            };
            t.prototype.isSafari = function() {
                this.isSafariCache = null == this.isSafariCache ? /Apple/.test(i) : this.isSafariCache;
                return this.isSafariCache
            };
            t.prototype.isIE = function() {
                if (null != this.isIECache) return this.isIECache;
                var t = r.toLowerCase();
                this.isIECache = !(-1 === t.indexOf("msie") && -1 === t.indexOf("trident"));
                return this.isIECache
            };
            t.prototype.isEdge = function() {
                if (null != this.isEdgeCache) return this.isEdgeCache;
                this.isEdgeCache = !!r.match(/Edge/);
                return this.isEdgeCache
            };
            t.prototype.isCrawler = function() {
                return new RegExp("googlebot|slurp|y!j|yahooseeker|bingbot|msnbot|baiduspider|yandex|yeti|naverbot|duckduckbot|360spider|^sogou|dbot", "i").test(r)
            };
            t.prototype.isWovnCrawler = function() {
                return new RegExp("WovnCrawler", "i").test(r)
            };
            t.prototype.isMobile = function() {
                return !!(r.match(/android/i) && r.match(/mobile/i) || r.match(/iphone/i) || r.match(/ipod/i) || r.match(/phone/i) || (r.match(/blackberry/i) || r.match(/bb10/i) || r.match(/rim/i)) && !r.match(/tablet/i) || (r.match(/\(mobile;/i) || r.match(/\(tablet;/i) || r.match(/; rv:/i)) && r.match(/mobile/i) || r.match(/meego/i))
            };
            t.prototype.mutatesTextNodeData = function() {
                if (void 0 !== o) return o;
                var t = document.createElement("p");
                t.innerHTML = "0\n1";
                return o = "0\n1" !== t.firstChild.data
            };
            t.prototype.supportsHistoryApi = function() {
                return history && history.pushState && history.replaceState
            };
            t.prototype.canStoreObjectInNode = function() {
                return !this.isEdge() && !this.isIE()
            };
            t.prototype.isDataHighlighter = function() {
                return !!r.match(/Google PP Default/)
            };
            return t
        }();
    e.Agent = a;
    e.default = new a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getValidWebCookieDomain = e.createCookieStore = void 0;
    var o = n(3),
        r = n(13),
        i = n(20),
        a = n(21),
        s = "__wovn__.Validate";
    e.createCookieStore = function(t, e, n) {
        var s = new r.WebCookieContainer(e, n, t),
            c = n.hostname.split("."),
            d = c.pop(),
            p = u(c, d, s);
        if (p) return new o.CookieStore(s, p);
        var h = new a.NullCookieContainer;
        try {
            var g = window.localStorage,
                f = new i.LocalStorageCookieContainer(g);
            l(f) && (h = f)
        } catch (t) {
            if (!(t instanceof DOMException)) throw t
        }
        return new o.CookieStore(h)
    };

    function u(t, e, n) {
        if (t.length < 1) return null;
        var o = [t.slice(t.length - 1), e].join(".");
        return l(n, o) ? o : u(t.slice(0, t.length - 1), o, n)
    }
    e.getValidWebCookieDomain = u;

    function l(t, e) {
        void 0 === e && (e = "");
        t.eraseValue(s, e);
        if (t.getValue(s)) return !1;
        t.setValue(s, "ok", 1, e);
        var n = "ok" === t.getValue(s);
        t.eraseValue(s, e);
        var o = !t.getValue(s);
        return n && o
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LocalStorageCookieContainer = e.LOCAL_STORAGE_COOKIE_NAME = void 0;
    var o = n(11),
        r = n(1);
    e.LOCAL_STORAGE_COOKIE_NAME = "__wovn__.CookieStore";
    var i = function() {
        function t(t) {
            this.storage = t
        }
        t.prototype.getValue = function(t) {
            var e = this.readAllCookies()[o.encode(t)];
            return e ? o.decode(e) : null
        };
        t.prototype.setValue = function(t, e, n, r) {
            var i = this.readAllCookies();
            i[o.encode(t)] = o.encode(e);
            this.writeAllCookies(i)
        };
        t.prototype.eraseValue = function(t, e) {
            var n = this.readAllCookies();
            delete n[o.encode(t)];
            this.writeAllCookies(n)
        };
        t.prototype.readAllCookies = function() {
            return JSON.parse(this.storage.getItem(e.LOCAL_STORAGE_COOKIE_NAME) || "{}")
        };
        t.prototype.writeAllCookies = function(t) {
            this.storage.setItem(e.LOCAL_STORAGE_COOKIE_NAME, r.stringifyJSON(t))
        };
        return t
    }();
    e.LocalStorageCookieContainer = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.NullCookieContainer = void 0;
    var o = function() {
        function t() {}
        t.prototype.getValue = function(t) {
            return null
        };
        t.prototype.setValue = function(t, e, n, o) {};
        t.prototype.eraseValue = function(t, e) {};
        return t
    }();
    e.NullCookieContainer = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t() {}
        t.prototype.c = function(t) {
            return this.instance().c(t)
        };
        Object.defineProperty(t.prototype, "tag", {
            get: function() {
                if (this.instance()) return this.instance().tag
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.instance = function() {
            return window.WOVN && window.WOVN.io && window.WOVN.io._private ? window.WOVN.io._private.widget : null
        };
        t.prototype.isBackend = function() {
            return this.instance().isBackend()
        };
        t.prototype.getBackendCurrentLang = function() {
            return this.instance().getBackendCurrentLang()
        };
        t.prototype.getBackendDefaultLang = function() {
            return this.instance().getBackendDefaultLang()
        };
        t.prototype.getBackendUrlPattern = function() {
            return this.instance().getBackendUrlPattern()
        };
        t.prototype.isComponentLoaded = function(t) {
            return !!this.instance() && this.instance().isComponentLoaded(t)
        };
        t.prototype.reinstallComponent = function(t) {
            this.instance().reinstallComponent(t)
        };
        t.prototype.getLocation = function(t) {
            return this.instance().getLocation(t)
        };
        t.prototype.getEncodedLocation = function(t) {
            return this.instance().getEncodedLocation(t)
        };
        t.prototype.destroy = function() {
            return this.instance().destroy()
        };
        return t
    }();
    e.default = new o
}, , , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = [
            ["&", "&amp;"],
            ["<", "&lt;"],
            [">", "&gt;"],
            ['"', "&quot;"],
            ["'", "&#39;"]
        ],
        r = function() {
            function t() {}
            t.prototype.escape = function(t) {
                for (var e = t, n = 0; n < o.length; ++n) {
                    var r = o[n][0],
                        i = o[n][1];
                    e = e.replace(new RegExp(r, "g"), i)
                }
                return e
            };
            t.prototype.unescape = function(t) {
                for (var e = t, n = o.length - 1; n >= 0; --n) {
                    var r = o[n][0],
                        i = o[n][1];
                    e = e.replace(new RegExp(i, "g"), r)
                }
                return e
            };
            return t
        }();
    e.default = new r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        BUILD_ID: "154",
        BUILD_HASH: "3eca0c3ce",
        BUILD_TIME: "2021-08-17T05:45:06.882Z",
        CDN_URL: "https://wovn.global.ssl.fastly.net/",
        STAGING_CDN_URLS: ["https://staging-wovn.global.ssl.fastly.net/", "https://staging2-wovn.global.ssl.fastly.net/", "https://staging3-wovn.global.ssl.fastly.net/", "https://staging4-wovn.global.ssl.fastly.net/", "https://staging5-wovn.global.ssl.fastly.net/"],
        S3_IMAGE_BUCKET: "st.wovn.io"
    }
}, function(t, e, n) {
    t.exports = function() {
        var t, e = [],
            n = document,
            o = n.documentElement.doScroll,
            r = "DOMContentLoaded",
            i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
        i || n.addEventListener(r, t = function() {
            n.removeEventListener(r, t);
            i = 1;
            for (; t = e.shift();) t()
        });
        return function(t) {
            i ? setTimeout(t, 0) : e.push(t)
        }
    }()
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(29);
    e.XmlEntities = o.XmlEntities;
    var r = n(30);
    e.Html4Entities = r.Html4Entities;
    var i = n(31);
    e.Html5Entities = i.Html5Entities;
    e.AllHtmlEntities = i.Html5Entities
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(10),
        r = {
            "&lt": "<",
            "&gt": ">",
            "&quot": '"',
            "&apos": "'",
            "&amp": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&amp;": "&"
        },
        i = {
            60: "lt",
            62: "gt",
            34: "quot",
            39: "apos",
            38: "amp"
        },
        a = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
            "&": "&amp;"
        },
        s = function() {
            function t() {}
            t.prototype.encode = function(t) {
                return t && t.length ? t.replace(/[<>"'&]/g, (function(t) {
                    return a[t]
                })) : ""
            };
            t.encode = function(e) {
                return (new t).encode(e)
            };
            t.prototype.decode = function(t) {
                return t && t.length ? t.replace(/&#?[0-9a-zA-Z]+;?/g, (function(t) {
                    if ("#" === t.charAt(1)) {
                        var e = "x" === t.charAt(2).toLowerCase() ? parseInt(t.substr(3), 16) : parseInt(t.substr(2));
                        return !isNaN(e) || e >= -32768 ? e <= 65535 ? String.fromCharCode(e) : o.fromCodePoint(e) : ""
                    }
                    return r[t] || t
                })) : ""
            };
            t.decode = function(e) {
                return (new t).decode(e)
            };
            t.prototype.encodeNonUTF = function(t) {
                if (!t || !t.length) return "";
                for (var e = t.length, n = "", r = 0; r < e;) {
                    var a = t.charCodeAt(r),
                        s = i[a];
                    if (s) {
                        n += "&" + s + ";";
                        r++
                    } else {
                        if (a < 32 || a > 126)
                            if (a >= o.highSurrogateFrom && a <= o.highSurrogateTo) {
                                n += "&#" + o.getCodePoint(t, r) + ";";
                                r++
                            } else n += "&#" + a + ";";
                        else n += t.charAt(r);
                        r++
                    }
                }
                return n
            };
            t.encodeNonUTF = function(e) {
                return (new t).encodeNonUTF(e)
            };
            t.prototype.encodeNonASCII = function(t) {
                if (!t || !t.length) return "";
                for (var e = t.length, n = "", r = 0; r < e;) {
                    var i = t.charCodeAt(r);
                    if (i <= 255) n += t[r++];
                    else {
                        if (i >= o.highSurrogateFrom && i <= o.highSurrogateTo) {
                            n += "&#" + o.getCodePoint(t, r) + ";";
                            r++
                        } else n += "&#" + i + ";";
                        r++
                    }
                }
                return n
            };
            t.encodeNonASCII = function(e) {
                return (new t).encodeNonASCII(e)
            };
            return t
        }();
    e.XmlEntities = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(10),
        r = ["apos", "nbsp", "iexcl", "cent", "pound", "curren", "yen", "brvbar", "sect", "uml", "copy", "ordf", "laquo", "not", "shy", "reg", "macr", "deg", "plusmn", "sup2", "sup3", "acute", "micro", "para", "middot", "cedil", "sup1", "ordm", "raquo", "frac14", "frac12", "frac34", "iquest", "Agrave", "Aacute", "Acirc", "Atilde", "Auml", "Aring", "AElig", "Ccedil", "Egrave", "Eacute", "Ecirc", "Euml", "Igrave", "Iacute", "Icirc", "Iuml", "ETH", "Ntilde", "Ograve", "Oacute", "Ocirc", "Otilde", "Ouml", "times", "Oslash", "Ugrave", "Uacute", "Ucirc", "Uuml", "Yacute", "THORN", "szlig", "agrave", "aacute", "acirc", "atilde", "auml", "aring", "aelig", "ccedil", "egrave", "eacute", "ecirc", "euml", "igrave", "iacute", "icirc", "iuml", "eth", "ntilde", "ograve", "oacute", "ocirc", "otilde", "ouml", "divide", "oslash", "ugrave", "uacute", "ucirc", "uuml", "yacute", "thorn", "yuml", "quot", "amp", "lt", "gt", "OElig", "oelig", "Scaron", "scaron", "Yuml", "circ", "tilde", "ensp", "emsp", "thinsp", "zwnj", "zwj", "lrm", "rlm", "ndash", "mdash", "lsquo", "rsquo", "sbquo", "ldquo", "rdquo", "bdquo", "dagger", "Dagger", "permil", "lsaquo", "rsaquo", "euro", "fnof", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigmaf", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "thetasym", "upsih", "piv", "bull", "hellip", "prime", "Prime", "oline", "frasl", "weierp", "image", "real", "trade", "alefsym", "larr", "uarr", "rarr", "darr", "harr", "crarr", "lArr", "uArr", "rArr", "dArr", "hArr", "forall", "part", "exist", "empty", "nabla", "isin", "notin", "ni", "prod", "sum", "minus", "lowast", "radic", "prop", "infin", "ang", "and", "or", "cap", "cup", "int", "there4", "sim", "cong", "asymp", "ne", "equiv", "le", "ge", "sub", "sup", "nsub", "sube", "supe", "oplus", "otimes", "perp", "sdot", "lceil", "rceil", "lfloor", "rfloor", "lang", "rang", "loz", "spades", "clubs", "hearts", "diams"],
        i = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830],
        a = {},
        s = {};
    ! function() {
        for (var t = 0, e = r.length; t < e;) {
            var n = r[t],
                o = i[t];
            a[n] = String.fromCharCode(o);
            s[o] = n;
            t++
        }
    }();
    var u = function() {
        function t() {}
        t.prototype.decode = function(t) {
            return t && t.length ? t.replace(/&(#?[\w\d]+);?/g, (function(t, e) {
                var n;
                if ("#" === e.charAt(0)) {
                    var r = "x" === e.charAt(1).toLowerCase() ? parseInt(e.substr(2), 16) : parseInt(e.substr(1));
                    (!isNaN(r) || r >= -32768) && (n = r <= 65535 ? String.fromCharCode(r) : o.fromCodePoint(r))
                } else n = a[e];
                return n || t
            })) : ""
        };
        t.decode = function(e) {
            return (new t).decode(e)
        };
        t.prototype.encode = function(t) {
            if (!t || !t.length) return "";
            for (var e = t.length, n = "", o = 0; o < e;) {
                var r = s[t.charCodeAt(o)];
                n += r ? "&" + r + ";" : t.charAt(o);
                o++
            }
            return n
        };
        t.encode = function(e) {
            return (new t).encode(e)
        };
        t.prototype.encodeNonUTF = function(t) {
            if (!t || !t.length) return "";
            for (var e = t.length, n = "", r = 0; r < e;) {
                var i = t.charCodeAt(r),
                    a = s[i];
                if (a) n += "&" + a + ";";
                else if (i < 32 || i > 126)
                    if (i >= o.highSurrogateFrom && i <= o.highSurrogateTo) {
                        n += "&#" + o.getCodePoint(t, r) + ";";
                        r++
                    } else n += "&#" + i + ";";
                else n += t.charAt(r);
                r++
            }
            return n
        };
        t.encodeNonUTF = function(e) {
            return (new t).encodeNonUTF(e)
        };
        t.prototype.encodeNonASCII = function(t) {
            if (!t || !t.length) return "";
            for (var e = t.length, n = "", r = 0; r < e;) {
                var i = t.charCodeAt(r);
                if (i <= 255) n += t[r++];
                else {
                    if (i >= o.highSurrogateFrom && i <= o.highSurrogateTo) {
                        n += "&#" + o.getCodePoint(t, r) + ";";
                        r++
                    } else n += "&#" + i + ";";
                    r++
                }
            }
            return n
        };
        t.encodeNonASCII = function(e) {
            return (new t).encodeNonASCII(e)
        };
        return t
    }();
    e.Html4Entities = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(10),
        r = [
            ["Aacute", [193]],
            ["aacute", [225]],
            ["Abreve", [258]],
            ["abreve", [259]],
            ["ac", [8766]],
            ["acd", [8767]],
            ["acE", [8766, 819]],
            ["Acirc", [194]],
            ["acirc", [226]],
            ["acute", [180]],
            ["Acy", [1040]],
            ["acy", [1072]],
            ["AElig", [198]],
            ["aelig", [230]],
            ["af", [8289]],
            ["Afr", [120068]],
            ["afr", [120094]],
            ["Agrave", [192]],
            ["agrave", [224]],
            ["alefsym", [8501]],
            ["aleph", [8501]],
            ["Alpha", [913]],
            ["alpha", [945]],
            ["Amacr", [256]],
            ["amacr", [257]],
            ["amalg", [10815]],
            ["amp", [38]],
            ["AMP", [38]],
            ["andand", [10837]],
            ["And", [10835]],
            ["and", [8743]],
            ["andd", [10844]],
            ["andslope", [10840]],
            ["andv", [10842]],
            ["ang", [8736]],
            ["ange", [10660]],
            ["angle", [8736]],
            ["angmsdaa", [10664]],
            ["angmsdab", [10665]],
            ["angmsdac", [10666]],
            ["angmsdad", [10667]],
            ["angmsdae", [10668]],
            ["angmsdaf", [10669]],
            ["angmsdag", [10670]],
            ["angmsdah", [10671]],
            ["angmsd", [8737]],
            ["angrt", [8735]],
            ["angrtvb", [8894]],
            ["angrtvbd", [10653]],
            ["angsph", [8738]],
            ["angst", [197]],
            ["angzarr", [9084]],
            ["Aogon", [260]],
            ["aogon", [261]],
            ["Aopf", [120120]],
            ["aopf", [120146]],
            ["apacir", [10863]],
            ["ap", [8776]],
            ["apE", [10864]],
            ["ape", [8778]],
            ["apid", [8779]],
            ["apos", [39]],
            ["ApplyFunction", [8289]],
            ["approx", [8776]],
            ["approxeq", [8778]],
            ["Aring", [197]],
            ["aring", [229]],
            ["Ascr", [119964]],
            ["ascr", [119990]],
            ["Assign", [8788]],
            ["ast", [42]],
            ["asymp", [8776]],
            ["asympeq", [8781]],
            ["Atilde", [195]],
            ["atilde", [227]],
            ["Auml", [196]],
            ["auml", [228]],
            ["awconint", [8755]],
            ["awint", [10769]],
            ["backcong", [8780]],
            ["backepsilon", [1014]],
            ["backprime", [8245]],
            ["backsim", [8765]],
            ["backsimeq", [8909]],
            ["Backslash", [8726]],
            ["Barv", [10983]],
            ["barvee", [8893]],
            ["barwed", [8965]],
            ["Barwed", [8966]],
            ["barwedge", [8965]],
            ["bbrk", [9141]],
            ["bbrktbrk", [9142]],
            ["bcong", [8780]],
            ["Bcy", [1041]],
            ["bcy", [1073]],
            ["bdquo", [8222]],
            ["becaus", [8757]],
            ["because", [8757]],
            ["Because", [8757]],
            ["bemptyv", [10672]],
            ["bepsi", [1014]],
            ["bernou", [8492]],
            ["Bernoullis", [8492]],
            ["Beta", [914]],
            ["beta", [946]],
            ["beth", [8502]],
            ["between", [8812]],
            ["Bfr", [120069]],
            ["bfr", [120095]],
            ["bigcap", [8898]],
            ["bigcirc", [9711]],
            ["bigcup", [8899]],
            ["bigodot", [10752]],
            ["bigoplus", [10753]],
            ["bigotimes", [10754]],
            ["bigsqcup", [10758]],
            ["bigstar", [9733]],
            ["bigtriangledown", [9661]],
            ["bigtriangleup", [9651]],
            ["biguplus", [10756]],
            ["bigvee", [8897]],
            ["bigwedge", [8896]],
            ["bkarow", [10509]],
            ["blacklozenge", [10731]],
            ["blacksquare", [9642]],
            ["blacktriangle", [9652]],
            ["blacktriangledown", [9662]],
            ["blacktriangleleft", [9666]],
            ["blacktriangleright", [9656]],
            ["blank", [9251]],
            ["blk12", [9618]],
            ["blk14", [9617]],
            ["blk34", [9619]],
            ["block", [9608]],
            ["bne", [61, 8421]],
            ["bnequiv", [8801, 8421]],
            ["bNot", [10989]],
            ["bnot", [8976]],
            ["Bopf", [120121]],
            ["bopf", [120147]],
            ["bot", [8869]],
            ["bottom", [8869]],
            ["bowtie", [8904]],
            ["boxbox", [10697]],
            ["boxdl", [9488]],
            ["boxdL", [9557]],
            ["boxDl", [9558]],
            ["boxDL", [9559]],
            ["boxdr", [9484]],
            ["boxdR", [9554]],
            ["boxDr", [9555]],
            ["boxDR", [9556]],
            ["boxh", [9472]],
            ["boxH", [9552]],
            ["boxhd", [9516]],
            ["boxHd", [9572]],
            ["boxhD", [9573]],
            ["boxHD", [9574]],
            ["boxhu", [9524]],
            ["boxHu", [9575]],
            ["boxhU", [9576]],
            ["boxHU", [9577]],
            ["boxminus", [8863]],
            ["boxplus", [8862]],
            ["boxtimes", [8864]],
            ["boxul", [9496]],
            ["boxuL", [9563]],
            ["boxUl", [9564]],
            ["boxUL", [9565]],
            ["boxur", [9492]],
            ["boxuR", [9560]],
            ["boxUr", [9561]],
            ["boxUR", [9562]],
            ["boxv", [9474]],
            ["boxV", [9553]],
            ["boxvh", [9532]],
            ["boxvH", [9578]],
            ["boxVh", [9579]],
            ["boxVH", [9580]],
            ["boxvl", [9508]],
            ["boxvL", [9569]],
            ["boxVl", [9570]],
            ["boxVL", [9571]],
            ["boxvr", [9500]],
            ["boxvR", [9566]],
            ["boxVr", [9567]],
            ["boxVR", [9568]],
            ["bprime", [8245]],
            ["breve", [728]],
            ["Breve", [728]],
            ["brvbar", [166]],
            ["bscr", [119991]],
            ["Bscr", [8492]],
            ["bsemi", [8271]],
            ["bsim", [8765]],
            ["bsime", [8909]],
            ["bsolb", [10693]],
            ["bsol", [92]],
            ["bsolhsub", [10184]],
            ["bull", [8226]],
            ["bullet", [8226]],
            ["bump", [8782]],
            ["bumpE", [10926]],
            ["bumpe", [8783]],
            ["Bumpeq", [8782]],
            ["bumpeq", [8783]],
            ["Cacute", [262]],
            ["cacute", [263]],
            ["capand", [10820]],
            ["capbrcup", [10825]],
            ["capcap", [10827]],
            ["cap", [8745]],
            ["Cap", [8914]],
            ["capcup", [10823]],
            ["capdot", [10816]],
            ["CapitalDifferentialD", [8517]],
            ["caps", [8745, 65024]],
            ["caret", [8257]],
            ["caron", [711]],
            ["Cayleys", [8493]],
            ["ccaps", [10829]],
            ["Ccaron", [268]],
            ["ccaron", [269]],
            ["Ccedil", [199]],
            ["ccedil", [231]],
            ["Ccirc", [264]],
            ["ccirc", [265]],
            ["Cconint", [8752]],
            ["ccups", [10828]],
            ["ccupssm", [10832]],
            ["Cdot", [266]],
            ["cdot", [267]],
            ["cedil", [184]],
            ["Cedilla", [184]],
            ["cemptyv", [10674]],
            ["cent", [162]],
            ["centerdot", [183]],
            ["CenterDot", [183]],
            ["cfr", [120096]],
            ["Cfr", [8493]],
            ["CHcy", [1063]],
            ["chcy", [1095]],
            ["check", [10003]],
            ["checkmark", [10003]],
            ["Chi", [935]],
            ["chi", [967]],
            ["circ", [710]],
            ["circeq", [8791]],
            ["circlearrowleft", [8634]],
            ["circlearrowright", [8635]],
            ["circledast", [8859]],
            ["circledcirc", [8858]],
            ["circleddash", [8861]],
            ["CircleDot", [8857]],
            ["circledR", [174]],
            ["circledS", [9416]],
            ["CircleMinus", [8854]],
            ["CirclePlus", [8853]],
            ["CircleTimes", [8855]],
            ["cir", [9675]],
            ["cirE", [10691]],
            ["cire", [8791]],
            ["cirfnint", [10768]],
            ["cirmid", [10991]],
            ["cirscir", [10690]],
            ["ClockwiseContourIntegral", [8754]],
            ["clubs", [9827]],
            ["clubsuit", [9827]],
            ["colon", [58]],
            ["Colon", [8759]],
            ["Colone", [10868]],
            ["colone", [8788]],
            ["coloneq", [8788]],
            ["comma", [44]],
            ["commat", [64]],
            ["comp", [8705]],
            ["compfn", [8728]],
            ["complement", [8705]],
            ["complexes", [8450]],
            ["cong", [8773]],
            ["congdot", [10861]],
            ["Congruent", [8801]],
            ["conint", [8750]],
            ["Conint", [8751]],
            ["ContourIntegral", [8750]],
            ["copf", [120148]],
            ["Copf", [8450]],
            ["coprod", [8720]],
            ["Coproduct", [8720]],
            ["copy", [169]],
            ["COPY", [169]],
            ["copysr", [8471]],
            ["CounterClockwiseContourIntegral", [8755]],
            ["crarr", [8629]],
            ["cross", [10007]],
            ["Cross", [10799]],
            ["Cscr", [119966]],
            ["cscr", [119992]],
            ["csub", [10959]],
            ["csube", [10961]],
            ["csup", [10960]],
            ["csupe", [10962]],
            ["ctdot", [8943]],
            ["cudarrl", [10552]],
            ["cudarrr", [10549]],
            ["cuepr", [8926]],
            ["cuesc", [8927]],
            ["cularr", [8630]],
            ["cularrp", [10557]],
            ["cupbrcap", [10824]],
            ["cupcap", [10822]],
            ["CupCap", [8781]],
            ["cup", [8746]],
            ["Cup", [8915]],
            ["cupcup", [10826]],
            ["cupdot", [8845]],
            ["cupor", [10821]],
            ["cups", [8746, 65024]],
            ["curarr", [8631]],
            ["curarrm", [10556]],
            ["curlyeqprec", [8926]],
            ["curlyeqsucc", [8927]],
            ["curlyvee", [8910]],
            ["curlywedge", [8911]],
            ["curren", [164]],
            ["curvearrowleft", [8630]],
            ["curvearrowright", [8631]],
            ["cuvee", [8910]],
            ["cuwed", [8911]],
            ["cwconint", [8754]],
            ["cwint", [8753]],
            ["cylcty", [9005]],
            ["dagger", [8224]],
            ["Dagger", [8225]],
            ["daleth", [8504]],
            ["darr", [8595]],
            ["Darr", [8609]],
            ["dArr", [8659]],
            ["dash", [8208]],
            ["Dashv", [10980]],
            ["dashv", [8867]],
            ["dbkarow", [10511]],
            ["dblac", [733]],
            ["Dcaron", [270]],
            ["dcaron", [271]],
            ["Dcy", [1044]],
            ["dcy", [1076]],
            ["ddagger", [8225]],
            ["ddarr", [8650]],
            ["DD", [8517]],
            ["dd", [8518]],
            ["DDotrahd", [10513]],
            ["ddotseq", [10871]],
            ["deg", [176]],
            ["Del", [8711]],
            ["Delta", [916]],
            ["delta", [948]],
            ["demptyv", [10673]],
            ["dfisht", [10623]],
            ["Dfr", [120071]],
            ["dfr", [120097]],
            ["dHar", [10597]],
            ["dharl", [8643]],
            ["dharr", [8642]],
            ["DiacriticalAcute", [180]],
            ["DiacriticalDot", [729]],
            ["DiacriticalDoubleAcute", [733]],
            ["DiacriticalGrave", [96]],
            ["DiacriticalTilde", [732]],
            ["diam", [8900]],
            ["diamond", [8900]],
            ["Diamond", [8900]],
            ["diamondsuit", [9830]],
            ["diams", [9830]],
            ["die", [168]],
            ["DifferentialD", [8518]],
            ["digamma", [989]],
            ["disin", [8946]],
            ["div", [247]],
            ["divide", [247]],
            ["divideontimes", [8903]],
            ["divonx", [8903]],
            ["DJcy", [1026]],
            ["djcy", [1106]],
            ["dlcorn", [8990]],
            ["dlcrop", [8973]],
            ["dollar", [36]],
            ["Dopf", [120123]],
            ["dopf", [120149]],
            ["Dot", [168]],
            ["dot", [729]],
            ["DotDot", [8412]],
            ["doteq", [8784]],
            ["doteqdot", [8785]],
            ["DotEqual", [8784]],
            ["dotminus", [8760]],
            ["dotplus", [8724]],
            ["dotsquare", [8865]],
            ["doublebarwedge", [8966]],
            ["DoubleContourIntegral", [8751]],
            ["DoubleDot", [168]],
            ["DoubleDownArrow", [8659]],
            ["DoubleLeftArrow", [8656]],
            ["DoubleLeftRightArrow", [8660]],
            ["DoubleLeftTee", [10980]],
            ["DoubleLongLeftArrow", [10232]],
            ["DoubleLongLeftRightArrow", [10234]],
            ["DoubleLongRightArrow", [10233]],
            ["DoubleRightArrow", [8658]],
            ["DoubleRightTee", [8872]],
            ["DoubleUpArrow", [8657]],
            ["DoubleUpDownArrow", [8661]],
            ["DoubleVerticalBar", [8741]],
            ["DownArrowBar", [10515]],
            ["downarrow", [8595]],
            ["DownArrow", [8595]],
            ["Downarrow", [8659]],
            ["DownArrowUpArrow", [8693]],
            ["DownBreve", [785]],
            ["downdownarrows", [8650]],
            ["downharpoonleft", [8643]],
            ["downharpoonright", [8642]],
            ["DownLeftRightVector", [10576]],
            ["DownLeftTeeVector", [10590]],
            ["DownLeftVectorBar", [10582]],
            ["DownLeftVector", [8637]],
            ["DownRightTeeVector", [10591]],
            ["DownRightVectorBar", [10583]],
            ["DownRightVector", [8641]],
            ["DownTeeArrow", [8615]],
            ["DownTee", [8868]],
            ["drbkarow", [10512]],
            ["drcorn", [8991]],
            ["drcrop", [8972]],
            ["Dscr", [119967]],
            ["dscr", [119993]],
            ["DScy", [1029]],
            ["dscy", [1109]],
            ["dsol", [10742]],
            ["Dstrok", [272]],
            ["dstrok", [273]],
            ["dtdot", [8945]],
            ["dtri", [9663]],
            ["dtrif", [9662]],
            ["duarr", [8693]],
            ["duhar", [10607]],
            ["dwangle", [10662]],
            ["DZcy", [1039]],
            ["dzcy", [1119]],
            ["dzigrarr", [10239]],
            ["Eacute", [201]],
            ["eacute", [233]],
            ["easter", [10862]],
            ["Ecaron", [282]],
            ["ecaron", [283]],
            ["Ecirc", [202]],
            ["ecirc", [234]],
            ["ecir", [8790]],
            ["ecolon", [8789]],
            ["Ecy", [1069]],
            ["ecy", [1101]],
            ["eDDot", [10871]],
            ["Edot", [278]],
            ["edot", [279]],
            ["eDot", [8785]],
            ["ee", [8519]],
            ["efDot", [8786]],
            ["Efr", [120072]],
            ["efr", [120098]],
            ["eg", [10906]],
            ["Egrave", [200]],
            ["egrave", [232]],
            ["egs", [10902]],
            ["egsdot", [10904]],
            ["el", [10905]],
            ["Element", [8712]],
            ["elinters", [9191]],
            ["ell", [8467]],
            ["els", [10901]],
            ["elsdot", [10903]],
            ["Emacr", [274]],
            ["emacr", [275]],
            ["empty", [8709]],
            ["emptyset", [8709]],
            ["EmptySmallSquare", [9723]],
            ["emptyv", [8709]],
            ["EmptyVerySmallSquare", [9643]],
            ["emsp13", [8196]],
            ["emsp14", [8197]],
            ["emsp", [8195]],
            ["ENG", [330]],
            ["eng", [331]],
            ["ensp", [8194]],
            ["Eogon", [280]],
            ["eogon", [281]],
            ["Eopf", [120124]],
            ["eopf", [120150]],
            ["epar", [8917]],
            ["eparsl", [10723]],
            ["eplus", [10865]],
            ["epsi", [949]],
            ["Epsilon", [917]],
            ["epsilon", [949]],
            ["epsiv", [1013]],
            ["eqcirc", [8790]],
            ["eqcolon", [8789]],
            ["eqsim", [8770]],
            ["eqslantgtr", [10902]],
            ["eqslantless", [10901]],
            ["Equal", [10869]],
            ["equals", [61]],
            ["EqualTilde", [8770]],
            ["equest", [8799]],
            ["Equilibrium", [8652]],
            ["equiv", [8801]],
            ["equivDD", [10872]],
            ["eqvparsl", [10725]],
            ["erarr", [10609]],
            ["erDot", [8787]],
            ["escr", [8495]],
            ["Escr", [8496]],
            ["esdot", [8784]],
            ["Esim", [10867]],
            ["esim", [8770]],
            ["Eta", [919]],
            ["eta", [951]],
            ["ETH", [208]],
            ["eth", [240]],
            ["Euml", [203]],
            ["euml", [235]],
            ["euro", [8364]],
            ["excl", [33]],
            ["exist", [8707]],
            ["Exists", [8707]],
            ["expectation", [8496]],
            ["exponentiale", [8519]],
            ["ExponentialE", [8519]],
            ["fallingdotseq", [8786]],
            ["Fcy", [1060]],
            ["fcy", [1092]],
            ["female", [9792]],
            ["ffilig", [64259]],
            ["fflig", [64256]],
            ["ffllig", [64260]],
            ["Ffr", [120073]],
            ["ffr", [120099]],
            ["filig", [64257]],
            ["FilledSmallSquare", [9724]],
            ["FilledVerySmallSquare", [9642]],
            ["fjlig", [102, 106]],
            ["flat", [9837]],
            ["fllig", [64258]],
            ["fltns", [9649]],
            ["fnof", [402]],
            ["Fopf", [120125]],
            ["fopf", [120151]],
            ["forall", [8704]],
            ["ForAll", [8704]],
            ["fork", [8916]],
            ["forkv", [10969]],
            ["Fouriertrf", [8497]],
            ["fpartint", [10765]],
            ["frac12", [189]],
            ["frac13", [8531]],
            ["frac14", [188]],
            ["frac15", [8533]],
            ["frac16", [8537]],
            ["frac18", [8539]],
            ["frac23", [8532]],
            ["frac25", [8534]],
            ["frac34", [190]],
            ["frac35", [8535]],
            ["frac38", [8540]],
            ["frac45", [8536]],
            ["frac56", [8538]],
            ["frac58", [8541]],
            ["frac78", [8542]],
            ["frasl", [8260]],
            ["frown", [8994]],
            ["fscr", [119995]],
            ["Fscr", [8497]],
            ["gacute", [501]],
            ["Gamma", [915]],
            ["gamma", [947]],
            ["Gammad", [988]],
            ["gammad", [989]],
            ["gap", [10886]],
            ["Gbreve", [286]],
            ["gbreve", [287]],
            ["Gcedil", [290]],
            ["Gcirc", [284]],
            ["gcirc", [285]],
            ["Gcy", [1043]],
            ["gcy", [1075]],
            ["Gdot", [288]],
            ["gdot", [289]],
            ["ge", [8805]],
            ["gE", [8807]],
            ["gEl", [10892]],
            ["gel", [8923]],
            ["geq", [8805]],
            ["geqq", [8807]],
            ["geqslant", [10878]],
            ["gescc", [10921]],
            ["ges", [10878]],
            ["gesdot", [10880]],
            ["gesdoto", [10882]],
            ["gesdotol", [10884]],
            ["gesl", [8923, 65024]],
            ["gesles", [10900]],
            ["Gfr", [120074]],
            ["gfr", [120100]],
            ["gg", [8811]],
            ["Gg", [8921]],
            ["ggg", [8921]],
            ["gimel", [8503]],
            ["GJcy", [1027]],
            ["gjcy", [1107]],
            ["gla", [10917]],
            ["gl", [8823]],
            ["glE", [10898]],
            ["glj", [10916]],
            ["gnap", [10890]],
            ["gnapprox", [10890]],
            ["gne", [10888]],
            ["gnE", [8809]],
            ["gneq", [10888]],
            ["gneqq", [8809]],
            ["gnsim", [8935]],
            ["Gopf", [120126]],
            ["gopf", [120152]],
            ["grave", [96]],
            ["GreaterEqual", [8805]],
            ["GreaterEqualLess", [8923]],
            ["GreaterFullEqual", [8807]],
            ["GreaterGreater", [10914]],
            ["GreaterLess", [8823]],
            ["GreaterSlantEqual", [10878]],
            ["GreaterTilde", [8819]],
            ["Gscr", [119970]],
            ["gscr", [8458]],
            ["gsim", [8819]],
            ["gsime", [10894]],
            ["gsiml", [10896]],
            ["gtcc", [10919]],
            ["gtcir", [10874]],
            ["gt", [62]],
            ["GT", [62]],
            ["Gt", [8811]],
            ["gtdot", [8919]],
            ["gtlPar", [10645]],
            ["gtquest", [10876]],
            ["gtrapprox", [10886]],
            ["gtrarr", [10616]],
            ["gtrdot", [8919]],
            ["gtreqless", [8923]],
            ["gtreqqless", [10892]],
            ["gtrless", [8823]],
            ["gtrsim", [8819]],
            ["gvertneqq", [8809, 65024]],
            ["gvnE", [8809, 65024]],
            ["Hacek", [711]],
            ["hairsp", [8202]],
            ["half", [189]],
            ["hamilt", [8459]],
            ["HARDcy", [1066]],
            ["hardcy", [1098]],
            ["harrcir", [10568]],
            ["harr", [8596]],
            ["hArr", [8660]],
            ["harrw", [8621]],
            ["Hat", [94]],
            ["hbar", [8463]],
            ["Hcirc", [292]],
            ["hcirc", [293]],
            ["hearts", [9829]],
            ["heartsuit", [9829]],
            ["hellip", [8230]],
            ["hercon", [8889]],
            ["hfr", [120101]],
            ["Hfr", [8460]],
            ["HilbertSpace", [8459]],
            ["hksearow", [10533]],
            ["hkswarow", [10534]],
            ["hoarr", [8703]],
            ["homtht", [8763]],
            ["hookleftarrow", [8617]],
            ["hookrightarrow", [8618]],
            ["hopf", [120153]],
            ["Hopf", [8461]],
            ["horbar", [8213]],
            ["HorizontalLine", [9472]],
            ["hscr", [119997]],
            ["Hscr", [8459]],
            ["hslash", [8463]],
            ["Hstrok", [294]],
            ["hstrok", [295]],
            ["HumpDownHump", [8782]],
            ["HumpEqual", [8783]],
            ["hybull", [8259]],
            ["hyphen", [8208]],
            ["Iacute", [205]],
            ["iacute", [237]],
            ["ic", [8291]],
            ["Icirc", [206]],
            ["icirc", [238]],
            ["Icy", [1048]],
            ["icy", [1080]],
            ["Idot", [304]],
            ["IEcy", [1045]],
            ["iecy", [1077]],
            ["iexcl", [161]],
            ["iff", [8660]],
            ["ifr", [120102]],
            ["Ifr", [8465]],
            ["Igrave", [204]],
            ["igrave", [236]],
            ["ii", [8520]],
            ["iiiint", [10764]],
            ["iiint", [8749]],
            ["iinfin", [10716]],
            ["iiota", [8489]],
            ["IJlig", [306]],
            ["ijlig", [307]],
            ["Imacr", [298]],
            ["imacr", [299]],
            ["image", [8465]],
            ["ImaginaryI", [8520]],
            ["imagline", [8464]],
            ["imagpart", [8465]],
            ["imath", [305]],
            ["Im", [8465]],
            ["imof", [8887]],
            ["imped", [437]],
            ["Implies", [8658]],
            ["incare", [8453]],
            ["in", [8712]],
            ["infin", [8734]],
            ["infintie", [10717]],
            ["inodot", [305]],
            ["intcal", [8890]],
            ["int", [8747]],
            ["Int", [8748]],
            ["integers", [8484]],
            ["Integral", [8747]],
            ["intercal", [8890]],
            ["Intersection", [8898]],
            ["intlarhk", [10775]],
            ["intprod", [10812]],
            ["InvisibleComma", [8291]],
            ["InvisibleTimes", [8290]],
            ["IOcy", [1025]],
            ["iocy", [1105]],
            ["Iogon", [302]],
            ["iogon", [303]],
            ["Iopf", [120128]],
            ["iopf", [120154]],
            ["Iota", [921]],
            ["iota", [953]],
            ["iprod", [10812]],
            ["iquest", [191]],
            ["iscr", [119998]],
            ["Iscr", [8464]],
            ["isin", [8712]],
            ["isindot", [8949]],
            ["isinE", [8953]],
            ["isins", [8948]],
            ["isinsv", [8947]],
            ["isinv", [8712]],
            ["it", [8290]],
            ["Itilde", [296]],
            ["itilde", [297]],
            ["Iukcy", [1030]],
            ["iukcy", [1110]],
            ["Iuml", [207]],
            ["iuml", [239]],
            ["Jcirc", [308]],
            ["jcirc", [309]],
            ["Jcy", [1049]],
            ["jcy", [1081]],
            ["Jfr", [120077]],
            ["jfr", [120103]],
            ["jmath", [567]],
            ["Jopf", [120129]],
            ["jopf", [120155]],
            ["Jscr", [119973]],
            ["jscr", [119999]],
            ["Jsercy", [1032]],
            ["jsercy", [1112]],
            ["Jukcy", [1028]],
            ["jukcy", [1108]],
            ["Kappa", [922]],
            ["kappa", [954]],
            ["kappav", [1008]],
            ["Kcedil", [310]],
            ["kcedil", [311]],
            ["Kcy", [1050]],
            ["kcy", [1082]],
            ["Kfr", [120078]],
            ["kfr", [120104]],
            ["kgreen", [312]],
            ["KHcy", [1061]],
            ["khcy", [1093]],
            ["KJcy", [1036]],
            ["kjcy", [1116]],
            ["Kopf", [120130]],
            ["kopf", [120156]],
            ["Kscr", [119974]],
            ["kscr", [12e4]],
            ["lAarr", [8666]],
            ["Lacute", [313]],
            ["lacute", [314]],
            ["laemptyv", [10676]],
            ["lagran", [8466]],
            ["Lambda", [923]],
            ["lambda", [955]],
            ["lang", [10216]],
            ["Lang", [10218]],
            ["langd", [10641]],
            ["langle", [10216]],
            ["lap", [10885]],
            ["Laplacetrf", [8466]],
            ["laquo", [171]],
            ["larrb", [8676]],
            ["larrbfs", [10527]],
            ["larr", [8592]],
            ["Larr", [8606]],
            ["lArr", [8656]],
            ["larrfs", [10525]],
            ["larrhk", [8617]],
            ["larrlp", [8619]],
            ["larrpl", [10553]],
            ["larrsim", [10611]],
            ["larrtl", [8610]],
            ["latail", [10521]],
            ["lAtail", [10523]],
            ["lat", [10923]],
            ["late", [10925]],
            ["lates", [10925, 65024]],
            ["lbarr", [10508]],
            ["lBarr", [10510]],
            ["lbbrk", [10098]],
            ["lbrace", [123]],
            ["lbrack", [91]],
            ["lbrke", [10635]],
            ["lbrksld", [10639]],
            ["lbrkslu", [10637]],
            ["Lcaron", [317]],
            ["lcaron", [318]],
            ["Lcedil", [315]],
            ["lcedil", [316]],
            ["lceil", [8968]],
            ["lcub", [123]],
            ["Lcy", [1051]],
            ["lcy", [1083]],
            ["ldca", [10550]],
            ["ldquo", [8220]],
            ["ldquor", [8222]],
            ["ldrdhar", [10599]],
            ["ldrushar", [10571]],
            ["ldsh", [8626]],
            ["le", [8804]],
            ["lE", [8806]],
            ["LeftAngleBracket", [10216]],
            ["LeftArrowBar", [8676]],
            ["leftarrow", [8592]],
            ["LeftArrow", [8592]],
            ["Leftarrow", [8656]],
            ["LeftArrowRightArrow", [8646]],
            ["leftarrowtail", [8610]],
            ["LeftCeiling", [8968]],
            ["LeftDoubleBracket", [10214]],
            ["LeftDownTeeVector", [10593]],
            ["LeftDownVectorBar", [10585]],
            ["LeftDownVector", [8643]],
            ["LeftFloor", [8970]],
            ["leftharpoondown", [8637]],
            ["leftharpoonup", [8636]],
            ["leftleftarrows", [8647]],
            ["leftrightarrow", [8596]],
            ["LeftRightArrow", [8596]],
            ["Leftrightarrow", [8660]],
            ["leftrightarrows", [8646]],
            ["leftrightharpoons", [8651]],
            ["leftrightsquigarrow", [8621]],
            ["LeftRightVector", [10574]],
            ["LeftTeeArrow", [8612]],
            ["LeftTee", [8867]],
            ["LeftTeeVector", [10586]],
            ["leftthreetimes", [8907]],
            ["LeftTriangleBar", [10703]],
            ["LeftTriangle", [8882]],
            ["LeftTriangleEqual", [8884]],
            ["LeftUpDownVector", [10577]],
            ["LeftUpTeeVector", [10592]],
            ["LeftUpVectorBar", [10584]],
            ["LeftUpVector", [8639]],
            ["LeftVectorBar", [10578]],
            ["LeftVector", [8636]],
            ["lEg", [10891]],
            ["leg", [8922]],
            ["leq", [8804]],
            ["leqq", [8806]],
            ["leqslant", [10877]],
            ["lescc", [10920]],
            ["les", [10877]],
            ["lesdot", [10879]],
            ["lesdoto", [10881]],
            ["lesdotor", [10883]],
            ["lesg", [8922, 65024]],
            ["lesges", [10899]],
            ["lessapprox", [10885]],
            ["lessdot", [8918]],
            ["lesseqgtr", [8922]],
            ["lesseqqgtr", [10891]],
            ["LessEqualGreater", [8922]],
            ["LessFullEqual", [8806]],
            ["LessGreater", [8822]],
            ["lessgtr", [8822]],
            ["LessLess", [10913]],
            ["lesssim", [8818]],
            ["LessSlantEqual", [10877]],
            ["LessTilde", [8818]],
            ["lfisht", [10620]],
            ["lfloor", [8970]],
            ["Lfr", [120079]],
            ["lfr", [120105]],
            ["lg", [8822]],
            ["lgE", [10897]],
            ["lHar", [10594]],
            ["lhard", [8637]],
            ["lharu", [8636]],
            ["lharul", [10602]],
            ["lhblk", [9604]],
            ["LJcy", [1033]],
            ["ljcy", [1113]],
            ["llarr", [8647]],
            ["ll", [8810]],
            ["Ll", [8920]],
            ["llcorner", [8990]],
            ["Lleftarrow", [8666]],
            ["llhard", [10603]],
            ["lltri", [9722]],
            ["Lmidot", [319]],
            ["lmidot", [320]],
            ["lmoustache", [9136]],
            ["lmoust", [9136]],
            ["lnap", [10889]],
            ["lnapprox", [10889]],
            ["lne", [10887]],
            ["lnE", [8808]],
            ["lneq", [10887]],
            ["lneqq", [8808]],
            ["lnsim", [8934]],
            ["loang", [10220]],
            ["loarr", [8701]],
            ["lobrk", [10214]],
            ["longleftarrow", [10229]],
            ["LongLeftArrow", [10229]],
            ["Longleftarrow", [10232]],
            ["longleftrightarrow", [10231]],
            ["LongLeftRightArrow", [10231]],
            ["Longleftrightarrow", [10234]],
            ["longmapsto", [10236]],
            ["longrightarrow", [10230]],
            ["LongRightArrow", [10230]],
            ["Longrightarrow", [10233]],
            ["looparrowleft", [8619]],
            ["looparrowright", [8620]],
            ["lopar", [10629]],
            ["Lopf", [120131]],
            ["lopf", [120157]],
            ["loplus", [10797]],
            ["lotimes", [10804]],
            ["lowast", [8727]],
            ["lowbar", [95]],
            ["LowerLeftArrow", [8601]],
            ["LowerRightArrow", [8600]],
            ["loz", [9674]],
            ["lozenge", [9674]],
            ["lozf", [10731]],
            ["lpar", [40]],
            ["lparlt", [10643]],
            ["lrarr", [8646]],
            ["lrcorner", [8991]],
            ["lrhar", [8651]],
            ["lrhard", [10605]],
            ["lrm", [8206]],
            ["lrtri", [8895]],
            ["lsaquo", [8249]],
            ["lscr", [120001]],
            ["Lscr", [8466]],
            ["lsh", [8624]],
            ["Lsh", [8624]],
            ["lsim", [8818]],
            ["lsime", [10893]],
            ["lsimg", [10895]],
            ["lsqb", [91]],
            ["lsquo", [8216]],
            ["lsquor", [8218]],
            ["Lstrok", [321]],
            ["lstrok", [322]],
            ["ltcc", [10918]],
            ["ltcir", [10873]],
            ["lt", [60]],
            ["LT", [60]],
            ["Lt", [8810]],
            ["ltdot", [8918]],
            ["lthree", [8907]],
            ["ltimes", [8905]],
            ["ltlarr", [10614]],
            ["ltquest", [10875]],
            ["ltri", [9667]],
            ["ltrie", [8884]],
            ["ltrif", [9666]],
            ["ltrPar", [10646]],
            ["lurdshar", [10570]],
            ["luruhar", [10598]],
            ["lvertneqq", [8808, 65024]],
            ["lvnE", [8808, 65024]],
            ["macr", [175]],
            ["male", [9794]],
            ["malt", [10016]],
            ["maltese", [10016]],
            ["Map", [10501]],
            ["map", [8614]],
            ["mapsto", [8614]],
            ["mapstodown", [8615]],
            ["mapstoleft", [8612]],
            ["mapstoup", [8613]],
            ["marker", [9646]],
            ["mcomma", [10793]],
            ["Mcy", [1052]],
            ["mcy", [1084]],
            ["mdash", [8212]],
            ["mDDot", [8762]],
            ["measuredangle", [8737]],
            ["MediumSpace", [8287]],
            ["Mellintrf", [8499]],
            ["Mfr", [120080]],
            ["mfr", [120106]],
            ["mho", [8487]],
            ["micro", [181]],
            ["midast", [42]],
            ["midcir", [10992]],
            ["mid", [8739]],
            ["middot", [183]],
            ["minusb", [8863]],
            ["minus", [8722]],
            ["minusd", [8760]],
            ["minusdu", [10794]],
            ["MinusPlus", [8723]],
            ["mlcp", [10971]],
            ["mldr", [8230]],
            ["mnplus", [8723]],
            ["models", [8871]],
            ["Mopf", [120132]],
            ["mopf", [120158]],
            ["mp", [8723]],
            ["mscr", [120002]],
            ["Mscr", [8499]],
            ["mstpos", [8766]],
            ["Mu", [924]],
            ["mu", [956]],
            ["multimap", [8888]],
            ["mumap", [8888]],
            ["nabla", [8711]],
            ["Nacute", [323]],
            ["nacute", [324]],
            ["nang", [8736, 8402]],
            ["nap", [8777]],
            ["napE", [10864, 824]],
            ["napid", [8779, 824]],
            ["napos", [329]],
            ["napprox", [8777]],
            ["natural", [9838]],
            ["naturals", [8469]],
            ["natur", [9838]],
            ["nbsp", [160]],
            ["nbump", [8782, 824]],
            ["nbumpe", [8783, 824]],
            ["ncap", [10819]],
            ["Ncaron", [327]],
            ["ncaron", [328]],
            ["Ncedil", [325]],
            ["ncedil", [326]],
            ["ncong", [8775]],
            ["ncongdot", [10861, 824]],
            ["ncup", [10818]],
            ["Ncy", [1053]],
            ["ncy", [1085]],
            ["ndash", [8211]],
            ["nearhk", [10532]],
            ["nearr", [8599]],
            ["neArr", [8663]],
            ["nearrow", [8599]],
            ["ne", [8800]],
            ["nedot", [8784, 824]],
            ["NegativeMediumSpace", [8203]],
            ["NegativeThickSpace", [8203]],
            ["NegativeThinSpace", [8203]],
            ["NegativeVeryThinSpace", [8203]],
            ["nequiv", [8802]],
            ["nesear", [10536]],
            ["nesim", [8770, 824]],
            ["NestedGreaterGreater", [8811]],
            ["NestedLessLess", [8810]],
            ["nexist", [8708]],
            ["nexists", [8708]],
            ["Nfr", [120081]],
            ["nfr", [120107]],
            ["ngE", [8807, 824]],
            ["nge", [8817]],
            ["ngeq", [8817]],
            ["ngeqq", [8807, 824]],
            ["ngeqslant", [10878, 824]],
            ["nges", [10878, 824]],
            ["nGg", [8921, 824]],
            ["ngsim", [8821]],
            ["nGt", [8811, 8402]],
            ["ngt", [8815]],
            ["ngtr", [8815]],
            ["nGtv", [8811, 824]],
            ["nharr", [8622]],
            ["nhArr", [8654]],
            ["nhpar", [10994]],
            ["ni", [8715]],
            ["nis", [8956]],
            ["nisd", [8954]],
            ["niv", [8715]],
            ["NJcy", [1034]],
            ["njcy", [1114]],
            ["nlarr", [8602]],
            ["nlArr", [8653]],
            ["nldr", [8229]],
            ["nlE", [8806, 824]],
            ["nle", [8816]],
            ["nleftarrow", [8602]],
            ["nLeftarrow", [8653]],
            ["nleftrightarrow", [8622]],
            ["nLeftrightarrow", [8654]],
            ["nleq", [8816]],
            ["nleqq", [8806, 824]],
            ["nleqslant", [10877, 824]],
            ["nles", [10877, 824]],
            ["nless", [8814]],
            ["nLl", [8920, 824]],
            ["nlsim", [8820]],
            ["nLt", [8810, 8402]],
            ["nlt", [8814]],
            ["nltri", [8938]],
            ["nltrie", [8940]],
            ["nLtv", [8810, 824]],
            ["nmid", [8740]],
            ["NoBreak", [8288]],
            ["NonBreakingSpace", [160]],
            ["nopf", [120159]],
            ["Nopf", [8469]],
            ["Not", [10988]],
            ["not", [172]],
            ["NotCongruent", [8802]],
            ["NotCupCap", [8813]],
            ["NotDoubleVerticalBar", [8742]],
            ["NotElement", [8713]],
            ["NotEqual", [8800]],
            ["NotEqualTilde", [8770, 824]],
            ["NotExists", [8708]],
            ["NotGreater", [8815]],
            ["NotGreaterEqual", [8817]],
            ["NotGreaterFullEqual", [8807, 824]],
            ["NotGreaterGreater", [8811, 824]],
            ["NotGreaterLess", [8825]],
            ["NotGreaterSlantEqual", [10878, 824]],
            ["NotGreaterTilde", [8821]],
            ["NotHumpDownHump", [8782, 824]],
            ["NotHumpEqual", [8783, 824]],
            ["notin", [8713]],
            ["notindot", [8949, 824]],
            ["notinE", [8953, 824]],
            ["notinva", [8713]],
            ["notinvb", [8951]],
            ["notinvc", [8950]],
            ["NotLeftTriangleBar", [10703, 824]],
            ["NotLeftTriangle", [8938]],
            ["NotLeftTriangleEqual", [8940]],
            ["NotLess", [8814]],
            ["NotLessEqual", [8816]],
            ["NotLessGreater", [8824]],
            ["NotLessLess", [8810, 824]],
            ["NotLessSlantEqual", [10877, 824]],
            ["NotLessTilde", [8820]],
            ["NotNestedGreaterGreater", [10914, 824]],
            ["NotNestedLessLess", [10913, 824]],
            ["notni", [8716]],
            ["notniva", [8716]],
            ["notnivb", [8958]],
            ["notnivc", [8957]],
            ["NotPrecedes", [8832]],
            ["NotPrecedesEqual", [10927, 824]],
            ["NotPrecedesSlantEqual", [8928]],
            ["NotReverseElement", [8716]],
            ["NotRightTriangleBar", [10704, 824]],
            ["NotRightTriangle", [8939]],
            ["NotRightTriangleEqual", [8941]],
            ["NotSquareSubset", [8847, 824]],
            ["NotSquareSubsetEqual", [8930]],
            ["NotSquareSuperset", [8848, 824]],
            ["NotSquareSupersetEqual", [8931]],
            ["NotSubset", [8834, 8402]],
            ["NotSubsetEqual", [8840]],
            ["NotSucceeds", [8833]],
            ["NotSucceedsEqual", [10928, 824]],
            ["NotSucceedsSlantEqual", [8929]],
            ["NotSucceedsTilde", [8831, 824]],
            ["NotSuperset", [8835, 8402]],
            ["NotSupersetEqual", [8841]],
            ["NotTilde", [8769]],
            ["NotTildeEqual", [8772]],
            ["NotTildeFullEqual", [8775]],
            ["NotTildeTilde", [8777]],
            ["NotVerticalBar", [8740]],
            ["nparallel", [8742]],
            ["npar", [8742]],
            ["nparsl", [11005, 8421]],
            ["npart", [8706, 824]],
            ["npolint", [10772]],
            ["npr", [8832]],
            ["nprcue", [8928]],
            ["nprec", [8832]],
            ["npreceq", [10927, 824]],
            ["npre", [10927, 824]],
            ["nrarrc", [10547, 824]],
            ["nrarr", [8603]],
            ["nrArr", [8655]],
            ["nrarrw", [8605, 824]],
            ["nrightarrow", [8603]],
            ["nRightarrow", [8655]],
            ["nrtri", [8939]],
            ["nrtrie", [8941]],
            ["nsc", [8833]],
            ["nsccue", [8929]],
            ["nsce", [10928, 824]],
            ["Nscr", [119977]],
            ["nscr", [120003]],
            ["nshortmid", [8740]],
            ["nshortparallel", [8742]],
            ["nsim", [8769]],
            ["nsime", [8772]],
            ["nsimeq", [8772]],
            ["nsmid", [8740]],
            ["nspar", [8742]],
            ["nsqsube", [8930]],
            ["nsqsupe", [8931]],
            ["nsub", [8836]],
            ["nsubE", [10949, 824]],
            ["nsube", [8840]],
            ["nsubset", [8834, 8402]],
            ["nsubseteq", [8840]],
            ["nsubseteqq", [10949, 824]],
            ["nsucc", [8833]],
            ["nsucceq", [10928, 824]],
            ["nsup", [8837]],
            ["nsupE", [10950, 824]],
            ["nsupe", [8841]],
            ["nsupset", [8835, 8402]],
            ["nsupseteq", [8841]],
            ["nsupseteqq", [10950, 824]],
            ["ntgl", [8825]],
            ["Ntilde", [209]],
            ["ntilde", [241]],
            ["ntlg", [8824]],
            ["ntriangleleft", [8938]],
            ["ntrianglelefteq", [8940]],
            ["ntriangleright", [8939]],
            ["ntrianglerighteq", [8941]],
            ["Nu", [925]],
            ["nu", [957]],
            ["num", [35]],
            ["numero", [8470]],
            ["numsp", [8199]],
            ["nvap", [8781, 8402]],
            ["nvdash", [8876]],
            ["nvDash", [8877]],
            ["nVdash", [8878]],
            ["nVDash", [8879]],
            ["nvge", [8805, 8402]],
            ["nvgt", [62, 8402]],
            ["nvHarr", [10500]],
            ["nvinfin", [10718]],
            ["nvlArr", [10498]],
            ["nvle", [8804, 8402]],
            ["nvlt", [60, 8402]],
            ["nvltrie", [8884, 8402]],
            ["nvrArr", [10499]],
            ["nvrtrie", [8885, 8402]],
            ["nvsim", [8764, 8402]],
            ["nwarhk", [10531]],
            ["nwarr", [8598]],
            ["nwArr", [8662]],
            ["nwarrow", [8598]],
            ["nwnear", [10535]],
            ["Oacute", [211]],
            ["oacute", [243]],
            ["oast", [8859]],
            ["Ocirc", [212]],
            ["ocirc", [244]],
            ["ocir", [8858]],
            ["Ocy", [1054]],
            ["ocy", [1086]],
            ["odash", [8861]],
            ["Odblac", [336]],
            ["odblac", [337]],
            ["odiv", [10808]],
            ["odot", [8857]],
            ["odsold", [10684]],
            ["OElig", [338]],
            ["oelig", [339]],
            ["ofcir", [10687]],
            ["Ofr", [120082]],
            ["ofr", [120108]],
            ["ogon", [731]],
            ["Ograve", [210]],
            ["ograve", [242]],
            ["ogt", [10689]],
            ["ohbar", [10677]],
            ["ohm", [937]],
            ["oint", [8750]],
            ["olarr", [8634]],
            ["olcir", [10686]],
            ["olcross", [10683]],
            ["oline", [8254]],
            ["olt", [10688]],
            ["Omacr", [332]],
            ["omacr", [333]],
            ["Omega", [937]],
            ["omega", [969]],
            ["Omicron", [927]],
            ["omicron", [959]],
            ["omid", [10678]],
            ["ominus", [8854]],
            ["Oopf", [120134]],
            ["oopf", [120160]],
            ["opar", [10679]],
            ["OpenCurlyDoubleQuote", [8220]],
            ["OpenCurlyQuote", [8216]],
            ["operp", [10681]],
            ["oplus", [8853]],
            ["orarr", [8635]],
            ["Or", [10836]],
            ["or", [8744]],
            ["ord", [10845]],
            ["order", [8500]],
            ["orderof", [8500]],
            ["ordf", [170]],
            ["ordm", [186]],
            ["origof", [8886]],
            ["oror", [10838]],
            ["orslope", [10839]],
            ["orv", [10843]],
            ["oS", [9416]],
            ["Oscr", [119978]],
            ["oscr", [8500]],
            ["Oslash", [216]],
            ["oslash", [248]],
            ["osol", [8856]],
            ["Otilde", [213]],
            ["otilde", [245]],
            ["otimesas", [10806]],
            ["Otimes", [10807]],
            ["otimes", [8855]],
            ["Ouml", [214]],
            ["ouml", [246]],
            ["ovbar", [9021]],
            ["OverBar", [8254]],
            ["OverBrace", [9182]],
            ["OverBracket", [9140]],
            ["OverParenthesis", [9180]],
            ["para", [182]],
            ["parallel", [8741]],
            ["par", [8741]],
            ["parsim", [10995]],
            ["parsl", [11005]],
            ["part", [8706]],
            ["PartialD", [8706]],
            ["Pcy", [1055]],
            ["pcy", [1087]],
            ["percnt", [37]],
            ["period", [46]],
            ["permil", [8240]],
            ["perp", [8869]],
            ["pertenk", [8241]],
            ["Pfr", [120083]],
            ["pfr", [120109]],
            ["Phi", [934]],
            ["phi", [966]],
            ["phiv", [981]],
            ["phmmat", [8499]],
            ["phone", [9742]],
            ["Pi", [928]],
            ["pi", [960]],
            ["pitchfork", [8916]],
            ["piv", [982]],
            ["planck", [8463]],
            ["planckh", [8462]],
            ["plankv", [8463]],
            ["plusacir", [10787]],
            ["plusb", [8862]],
            ["pluscir", [10786]],
            ["plus", [43]],
            ["plusdo", [8724]],
            ["plusdu", [10789]],
            ["pluse", [10866]],
            ["PlusMinus", [177]],
            ["plusmn", [177]],
            ["plussim", [10790]],
            ["plustwo", [10791]],
            ["pm", [177]],
            ["Poincareplane", [8460]],
            ["pointint", [10773]],
            ["popf", [120161]],
            ["Popf", [8473]],
            ["pound", [163]],
            ["prap", [10935]],
            ["Pr", [10939]],
            ["pr", [8826]],
            ["prcue", [8828]],
            ["precapprox", [10935]],
            ["prec", [8826]],
            ["preccurlyeq", [8828]],
            ["Precedes", [8826]],
            ["PrecedesEqual", [10927]],
            ["PrecedesSlantEqual", [8828]],
            ["PrecedesTilde", [8830]],
            ["preceq", [10927]],
            ["precnapprox", [10937]],
            ["precneqq", [10933]],
            ["precnsim", [8936]],
            ["pre", [10927]],
            ["prE", [10931]],
            ["precsim", [8830]],
            ["prime", [8242]],
            ["Prime", [8243]],
            ["primes", [8473]],
            ["prnap", [10937]],
            ["prnE", [10933]],
            ["prnsim", [8936]],
            ["prod", [8719]],
            ["Product", [8719]],
            ["profalar", [9006]],
            ["profline", [8978]],
            ["profsurf", [8979]],
            ["prop", [8733]],
            ["Proportional", [8733]],
            ["Proportion", [8759]],
            ["propto", [8733]],
            ["prsim", [8830]],
            ["prurel", [8880]],
            ["Pscr", [119979]],
            ["pscr", [120005]],
            ["Psi", [936]],
            ["psi", [968]],
            ["puncsp", [8200]],
            ["Qfr", [120084]],
            ["qfr", [120110]],
            ["qint", [10764]],
            ["qopf", [120162]],
            ["Qopf", [8474]],
            ["qprime", [8279]],
            ["Qscr", [119980]],
            ["qscr", [120006]],
            ["quaternions", [8461]],
            ["quatint", [10774]],
            ["quest", [63]],
            ["questeq", [8799]],
            ["quot", [34]],
            ["QUOT", [34]],
            ["rAarr", [8667]],
            ["race", [8765, 817]],
            ["Racute", [340]],
            ["racute", [341]],
            ["radic", [8730]],
            ["raemptyv", [10675]],
            ["rang", [10217]],
            ["Rang", [10219]],
            ["rangd", [10642]],
            ["range", [10661]],
            ["rangle", [10217]],
            ["raquo", [187]],
            ["rarrap", [10613]],
            ["rarrb", [8677]],
            ["rarrbfs", [10528]],
            ["rarrc", [10547]],
            ["rarr", [8594]],
            ["Rarr", [8608]],
            ["rArr", [8658]],
            ["rarrfs", [10526]],
            ["rarrhk", [8618]],
            ["rarrlp", [8620]],
            ["rarrpl", [10565]],
            ["rarrsim", [10612]],
            ["Rarrtl", [10518]],
            ["rarrtl", [8611]],
            ["rarrw", [8605]],
            ["ratail", [10522]],
            ["rAtail", [10524]],
            ["ratio", [8758]],
            ["rationals", [8474]],
            ["rbarr", [10509]],
            ["rBarr", [10511]],
            ["RBarr", [10512]],
            ["rbbrk", [10099]],
            ["rbrace", [125]],
            ["rbrack", [93]],
            ["rbrke", [10636]],
            ["rbrksld", [10638]],
            ["rbrkslu", [10640]],
            ["Rcaron", [344]],
            ["rcaron", [345]],
            ["Rcedil", [342]],
            ["rcedil", [343]],
            ["rceil", [8969]],
            ["rcub", [125]],
            ["Rcy", [1056]],
            ["rcy", [1088]],
            ["rdca", [10551]],
            ["rdldhar", [10601]],
            ["rdquo", [8221]],
            ["rdquor", [8221]],
            ["CloseCurlyDoubleQuote", [8221]],
            ["rdsh", [8627]],
            ["real", [8476]],
            ["realine", [8475]],
            ["realpart", [8476]],
            ["reals", [8477]],
            ["Re", [8476]],
            ["rect", [9645]],
            ["reg", [174]],
            ["REG", [174]],
            ["ReverseElement", [8715]],
            ["ReverseEquilibrium", [8651]],
            ["ReverseUpEquilibrium", [10607]],
            ["rfisht", [10621]],
            ["rfloor", [8971]],
            ["rfr", [120111]],
            ["Rfr", [8476]],
            ["rHar", [10596]],
            ["rhard", [8641]],
            ["rharu", [8640]],
            ["rharul", [10604]],
            ["Rho", [929]],
            ["rho", [961]],
            ["rhov", [1009]],
            ["RightAngleBracket", [10217]],
            ["RightArrowBar", [8677]],
            ["rightarrow", [8594]],
            ["RightArrow", [8594]],
            ["Rightarrow", [8658]],
            ["RightArrowLeftArrow", [8644]],
            ["rightarrowtail", [8611]],
            ["RightCeiling", [8969]],
            ["RightDoubleBracket", [10215]],
            ["RightDownTeeVector", [10589]],
            ["RightDownVectorBar", [10581]],
            ["RightDownVector", [8642]],
            ["RightFloor", [8971]],
            ["rightharpoondown", [8641]],
            ["rightharpoonup", [8640]],
            ["rightleftarrows", [8644]],
            ["rightleftharpoons", [8652]],
            ["rightrightarrows", [8649]],
            ["rightsquigarrow", [8605]],
            ["RightTeeArrow", [8614]],
            ["RightTee", [8866]],
            ["RightTeeVector", [10587]],
            ["rightthreetimes", [8908]],
            ["RightTriangleBar", [10704]],
            ["RightTriangle", [8883]],
            ["RightTriangleEqual", [8885]],
            ["RightUpDownVector", [10575]],
            ["RightUpTeeVector", [10588]],
            ["RightUpVectorBar", [10580]],
            ["RightUpVector", [8638]],
            ["RightVectorBar", [10579]],
            ["RightVector", [8640]],
            ["ring", [730]],
            ["risingdotseq", [8787]],
            ["rlarr", [8644]],
            ["rlhar", [8652]],
            ["rlm", [8207]],
            ["rmoustache", [9137]],
            ["rmoust", [9137]],
            ["rnmid", [10990]],
            ["roang", [10221]],
            ["roarr", [8702]],
            ["robrk", [10215]],
            ["ropar", [10630]],
            ["ropf", [120163]],
            ["Ropf", [8477]],
            ["roplus", [10798]],
            ["rotimes", [10805]],
            ["RoundImplies", [10608]],
            ["rpar", [41]],
            ["rpargt", [10644]],
            ["rppolint", [10770]],
            ["rrarr", [8649]],
            ["Rrightarrow", [8667]],
            ["rsaquo", [8250]],
            ["rscr", [120007]],
            ["Rscr", [8475]],
            ["rsh", [8625]],
            ["Rsh", [8625]],
            ["rsqb", [93]],
            ["rsquo", [8217]],
            ["rsquor", [8217]],
            ["CloseCurlyQuote", [8217]],
            ["rthree", [8908]],
            ["rtimes", [8906]],
            ["rtri", [9657]],
            ["rtrie", [8885]],
            ["rtrif", [9656]],
            ["rtriltri", [10702]],
            ["RuleDelayed", [10740]],
            ["ruluhar", [10600]],
            ["rx", [8478]],
            ["Sacute", [346]],
            ["sacute", [347]],
            ["sbquo", [8218]],
            ["scap", [10936]],
            ["Scaron", [352]],
            ["scaron", [353]],
            ["Sc", [10940]],
            ["sc", [8827]],
            ["sccue", [8829]],
            ["sce", [10928]],
            ["scE", [10932]],
            ["Scedil", [350]],
            ["scedil", [351]],
            ["Scirc", [348]],
            ["scirc", [349]],
            ["scnap", [10938]],
            ["scnE", [10934]],
            ["scnsim", [8937]],
            ["scpolint", [10771]],
            ["scsim", [8831]],
            ["Scy", [1057]],
            ["scy", [1089]],
            ["sdotb", [8865]],
            ["sdot", [8901]],
            ["sdote", [10854]],
            ["searhk", [10533]],
            ["searr", [8600]],
            ["seArr", [8664]],
            ["searrow", [8600]],
            ["sect", [167]],
            ["semi", [59]],
            ["seswar", [10537]],
            ["setminus", [8726]],
            ["setmn", [8726]],
            ["sext", [10038]],
            ["Sfr", [120086]],
            ["sfr", [120112]],
            ["sfrown", [8994]],
            ["sharp", [9839]],
            ["SHCHcy", [1065]],
            ["shchcy", [1097]],
            ["SHcy", [1064]],
            ["shcy", [1096]],
            ["ShortDownArrow", [8595]],
            ["ShortLeftArrow", [8592]],
            ["shortmid", [8739]],
            ["shortparallel", [8741]],
            ["ShortRightArrow", [8594]],
            ["ShortUpArrow", [8593]],
            ["shy", [173]],
            ["Sigma", [931]],
            ["sigma", [963]],
            ["sigmaf", [962]],
            ["sigmav", [962]],
            ["sim", [8764]],
            ["simdot", [10858]],
            ["sime", [8771]],
            ["simeq", [8771]],
            ["simg", [10910]],
            ["simgE", [10912]],
            ["siml", [10909]],
            ["simlE", [10911]],
            ["simne", [8774]],
            ["simplus", [10788]],
            ["simrarr", [10610]],
            ["slarr", [8592]],
            ["SmallCircle", [8728]],
            ["smallsetminus", [8726]],
            ["smashp", [10803]],
            ["smeparsl", [10724]],
            ["smid", [8739]],
            ["smile", [8995]],
            ["smt", [10922]],
            ["smte", [10924]],
            ["smtes", [10924, 65024]],
            ["SOFTcy", [1068]],
            ["softcy", [1100]],
            ["solbar", [9023]],
            ["solb", [10692]],
            ["sol", [47]],
            ["Sopf", [120138]],
            ["sopf", [120164]],
            ["spades", [9824]],
            ["spadesuit", [9824]],
            ["spar", [8741]],
            ["sqcap", [8851]],
            ["sqcaps", [8851, 65024]],
            ["sqcup", [8852]],
            ["sqcups", [8852, 65024]],
            ["Sqrt", [8730]],
            ["sqsub", [8847]],
            ["sqsube", [8849]],
            ["sqsubset", [8847]],
            ["sqsubseteq", [8849]],
            ["sqsup", [8848]],
            ["sqsupe", [8850]],
            ["sqsupset", [8848]],
            ["sqsupseteq", [8850]],
            ["square", [9633]],
            ["Square", [9633]],
            ["SquareIntersection", [8851]],
            ["SquareSubset", [8847]],
            ["SquareSubsetEqual", [8849]],
            ["SquareSuperset", [8848]],
            ["SquareSupersetEqual", [8850]],
            ["SquareUnion", [8852]],
            ["squarf", [9642]],
            ["squ", [9633]],
            ["squf", [9642]],
            ["srarr", [8594]],
            ["Sscr", [119982]],
            ["sscr", [120008]],
            ["ssetmn", [8726]],
            ["ssmile", [8995]],
            ["sstarf", [8902]],
            ["Star", [8902]],
            ["star", [9734]],
            ["starf", [9733]],
            ["straightepsilon", [1013]],
            ["straightphi", [981]],
            ["strns", [175]],
            ["sub", [8834]],
            ["Sub", [8912]],
            ["subdot", [10941]],
            ["subE", [10949]],
            ["sube", [8838]],
            ["subedot", [10947]],
            ["submult", [10945]],
            ["subnE", [10955]],
            ["subne", [8842]],
            ["subplus", [10943]],
            ["subrarr", [10617]],
            ["subset", [8834]],
            ["Subset", [8912]],
            ["subseteq", [8838]],
            ["subseteqq", [10949]],
            ["SubsetEqual", [8838]],
            ["subsetneq", [8842]],
            ["subsetneqq", [10955]],
            ["subsim", [10951]],
            ["subsub", [10965]],
            ["subsup", [10963]],
            ["succapprox", [10936]],
            ["succ", [8827]],
            ["succcurlyeq", [8829]],
            ["Succeeds", [8827]],
            ["SucceedsEqual", [10928]],
            ["SucceedsSlantEqual", [8829]],
            ["SucceedsTilde", [8831]],
            ["succeq", [10928]],
            ["succnapprox", [10938]],
            ["succneqq", [10934]],
            ["succnsim", [8937]],
            ["succsim", [8831]],
            ["SuchThat", [8715]],
            ["sum", [8721]],
            ["Sum", [8721]],
            ["sung", [9834]],
            ["sup1", [185]],
            ["sup2", [178]],
            ["sup3", [179]],
            ["sup", [8835]],
            ["Sup", [8913]],
            ["supdot", [10942]],
            ["supdsub", [10968]],
            ["supE", [10950]],
            ["supe", [8839]],
            ["supedot", [10948]],
            ["Superset", [8835]],
            ["SupersetEqual", [8839]],
            ["suphsol", [10185]],
            ["suphsub", [10967]],
            ["suplarr", [10619]],
            ["supmult", [10946]],
            ["supnE", [10956]],
            ["supne", [8843]],
            ["supplus", [10944]],
            ["supset", [8835]],
            ["Supset", [8913]],
            ["supseteq", [8839]],
            ["supseteqq", [10950]],
            ["supsetneq", [8843]],
            ["supsetneqq", [10956]],
            ["supsim", [10952]],
            ["supsub", [10964]],
            ["supsup", [10966]],
            ["swarhk", [10534]],
            ["swarr", [8601]],
            ["swArr", [8665]],
            ["swarrow", [8601]],
            ["swnwar", [10538]],
            ["szlig", [223]],
            ["Tab", [9]],
            ["target", [8982]],
            ["Tau", [932]],
            ["tau", [964]],
            ["tbrk", [9140]],
            ["Tcaron", [356]],
            ["tcaron", [357]],
            ["Tcedil", [354]],
            ["tcedil", [355]],
            ["Tcy", [1058]],
            ["tcy", [1090]],
            ["tdot", [8411]],
            ["telrec", [8981]],
            ["Tfr", [120087]],
            ["tfr", [120113]],
            ["there4", [8756]],
            ["therefore", [8756]],
            ["Therefore", [8756]],
            ["Theta", [920]],
            ["theta", [952]],
            ["thetasym", [977]],
            ["thetav", [977]],
            ["thickapprox", [8776]],
            ["thicksim", [8764]],
            ["ThickSpace", [8287, 8202]],
            ["ThinSpace", [8201]],
            ["thinsp", [8201]],
            ["thkap", [8776]],
            ["thksim", [8764]],
            ["THORN", [222]],
            ["thorn", [254]],
            ["tilde", [732]],
            ["Tilde", [8764]],
            ["TildeEqual", [8771]],
            ["TildeFullEqual", [8773]],
            ["TildeTilde", [8776]],
            ["timesbar", [10801]],
            ["timesb", [8864]],
            ["times", [215]],
            ["timesd", [10800]],
            ["tint", [8749]],
            ["toea", [10536]],
            ["topbot", [9014]],
            ["topcir", [10993]],
            ["top", [8868]],
            ["Topf", [120139]],
            ["topf", [120165]],
            ["topfork", [10970]],
            ["tosa", [10537]],
            ["tprime", [8244]],
            ["trade", [8482]],
            ["TRADE", [8482]],
            ["triangle", [9653]],
            ["triangledown", [9663]],
            ["triangleleft", [9667]],
            ["trianglelefteq", [8884]],
            ["triangleq", [8796]],
            ["triangleright", [9657]],
            ["trianglerighteq", [8885]],
            ["tridot", [9708]],
            ["trie", [8796]],
            ["triminus", [10810]],
            ["TripleDot", [8411]],
            ["triplus", [10809]],
            ["trisb", [10701]],
            ["tritime", [10811]],
            ["trpezium", [9186]],
            ["Tscr", [119983]],
            ["tscr", [120009]],
            ["TScy", [1062]],
            ["tscy", [1094]],
            ["TSHcy", [1035]],
            ["tshcy", [1115]],
            ["Tstrok", [358]],
            ["tstrok", [359]],
            ["twixt", [8812]],
            ["twoheadleftarrow", [8606]],
            ["twoheadrightarrow", [8608]],
            ["Uacute", [218]],
            ["uacute", [250]],
            ["uarr", [8593]],
            ["Uarr", [8607]],
            ["uArr", [8657]],
            ["Uarrocir", [10569]],
            ["Ubrcy", [1038]],
            ["ubrcy", [1118]],
            ["Ubreve", [364]],
            ["ubreve", [365]],
            ["Ucirc", [219]],
            ["ucirc", [251]],
            ["Ucy", [1059]],
            ["ucy", [1091]],
            ["udarr", [8645]],
            ["Udblac", [368]],
            ["udblac", [369]],
            ["udhar", [10606]],
            ["ufisht", [10622]],
            ["Ufr", [120088]],
            ["ufr", [120114]],
            ["Ugrave", [217]],
            ["ugrave", [249]],
            ["uHar", [10595]],
            ["uharl", [8639]],
            ["uharr", [8638]],
            ["uhblk", [9600]],
            ["ulcorn", [8988]],
            ["ulcorner", [8988]],
            ["ulcrop", [8975]],
            ["ultri", [9720]],
            ["Umacr", [362]],
            ["umacr", [363]],
            ["uml", [168]],
            ["UnderBar", [95]],
            ["UnderBrace", [9183]],
            ["UnderBracket", [9141]],
            ["UnderParenthesis", [9181]],
            ["Union", [8899]],
            ["UnionPlus", [8846]],
            ["Uogon", [370]],
            ["uogon", [371]],
            ["Uopf", [120140]],
            ["uopf", [120166]],
            ["UpArrowBar", [10514]],
            ["uparrow", [8593]],
            ["UpArrow", [8593]],
            ["Uparrow", [8657]],
            ["UpArrowDownArrow", [8645]],
            ["updownarrow", [8597]],
            ["UpDownArrow", [8597]],
            ["Updownarrow", [8661]],
            ["UpEquilibrium", [10606]],
            ["upharpoonleft", [8639]],
            ["upharpoonright", [8638]],
            ["uplus", [8846]],
            ["UpperLeftArrow", [8598]],
            ["UpperRightArrow", [8599]],
            ["upsi", [965]],
            ["Upsi", [978]],
            ["upsih", [978]],
            ["Upsilon", [933]],
            ["upsilon", [965]],
            ["UpTeeArrow", [8613]],
            ["UpTee", [8869]],
            ["upuparrows", [8648]],
            ["urcorn", [8989]],
            ["urcorner", [8989]],
            ["urcrop", [8974]],
            ["Uring", [366]],
            ["uring", [367]],
            ["urtri", [9721]],
            ["Uscr", [119984]],
            ["uscr", [120010]],
            ["utdot", [8944]],
            ["Utilde", [360]],
            ["utilde", [361]],
            ["utri", [9653]],
            ["utrif", [9652]],
            ["uuarr", [8648]],
            ["Uuml", [220]],
            ["uuml", [252]],
            ["uwangle", [10663]],
            ["vangrt", [10652]],
            ["varepsilon", [1013]],
            ["varkappa", [1008]],
            ["varnothing", [8709]],
            ["varphi", [981]],
            ["varpi", [982]],
            ["varpropto", [8733]],
            ["varr", [8597]],
            ["vArr", [8661]],
            ["varrho", [1009]],
            ["varsigma", [962]],
            ["varsubsetneq", [8842, 65024]],
            ["varsubsetneqq", [10955, 65024]],
            ["varsupsetneq", [8843, 65024]],
            ["varsupsetneqq", [10956, 65024]],
            ["vartheta", [977]],
            ["vartriangleleft", [8882]],
            ["vartriangleright", [8883]],
            ["vBar", [10984]],
            ["Vbar", [10987]],
            ["vBarv", [10985]],
            ["Vcy", [1042]],
            ["vcy", [1074]],
            ["vdash", [8866]],
            ["vDash", [8872]],
            ["Vdash", [8873]],
            ["VDash", [8875]],
            ["Vdashl", [10982]],
            ["veebar", [8891]],
            ["vee", [8744]],
            ["Vee", [8897]],
            ["veeeq", [8794]],
            ["vellip", [8942]],
            ["verbar", [124]],
            ["Verbar", [8214]],
            ["vert", [124]],
            ["Vert", [8214]],
            ["VerticalBar", [8739]],
            ["VerticalLine", [124]],
            ["VerticalSeparator", [10072]],
            ["VerticalTilde", [8768]],
            ["VeryThinSpace", [8202]],
            ["Vfr", [120089]],
            ["vfr", [120115]],
            ["vltri", [8882]],
            ["vnsub", [8834, 8402]],
            ["vnsup", [8835, 8402]],
            ["Vopf", [120141]],
            ["vopf", [120167]],
            ["vprop", [8733]],
            ["vrtri", [8883]],
            ["Vscr", [119985]],
            ["vscr", [120011]],
            ["vsubnE", [10955, 65024]],
            ["vsubne", [8842, 65024]],
            ["vsupnE", [10956, 65024]],
            ["vsupne", [8843, 65024]],
            ["Vvdash", [8874]],
            ["vzigzag", [10650]],
            ["Wcirc", [372]],
            ["wcirc", [373]],
            ["wedbar", [10847]],
            ["wedge", [8743]],
            ["Wedge", [8896]],
            ["wedgeq", [8793]],
            ["weierp", [8472]],
            ["Wfr", [120090]],
            ["wfr", [120116]],
            ["Wopf", [120142]],
            ["wopf", [120168]],
            ["wp", [8472]],
            ["wr", [8768]],
            ["wreath", [8768]],
            ["Wscr", [119986]],
            ["wscr", [120012]],
            ["xcap", [8898]],
            ["xcirc", [9711]],
            ["xcup", [8899]],
            ["xdtri", [9661]],
            ["Xfr", [120091]],
            ["xfr", [120117]],
            ["xharr", [10231]],
            ["xhArr", [10234]],
            ["Xi", [926]],
            ["xi", [958]],
            ["xlarr", [10229]],
            ["xlArr", [10232]],
            ["xmap", [10236]],
            ["xnis", [8955]],
            ["xodot", [10752]],
            ["Xopf", [120143]],
            ["xopf", [120169]],
            ["xoplus", [10753]],
            ["xotime", [10754]],
            ["xrarr", [10230]],
            ["xrArr", [10233]],
            ["Xscr", [119987]],
            ["xscr", [120013]],
            ["xsqcup", [10758]],
            ["xuplus", [10756]],
            ["xutri", [9651]],
            ["xvee", [8897]],
            ["xwedge", [8896]],
            ["Yacute", [221]],
            ["yacute", [253]],
            ["YAcy", [1071]],
            ["yacy", [1103]],
            ["Ycirc", [374]],
            ["ycirc", [375]],
            ["Ycy", [1067]],
            ["ycy", [1099]],
            ["yen", [165]],
            ["Yfr", [120092]],
            ["yfr", [120118]],
            ["YIcy", [1031]],
            ["yicy", [1111]],
            ["Yopf", [120144]],
            ["yopf", [120170]],
            ["Yscr", [119988]],
            ["yscr", [120014]],
            ["YUcy", [1070]],
            ["yucy", [1102]],
            ["yuml", [255]],
            ["Yuml", [376]],
            ["Zacute", [377]],
            ["zacute", [378]],
            ["Zcaron", [381]],
            ["zcaron", [382]],
            ["Zcy", [1047]],
            ["zcy", [1079]],
            ["Zdot", [379]],
            ["zdot", [380]],
            ["zeetrf", [8488]],
            ["ZeroWidthSpace", [8203]],
            ["Zeta", [918]],
            ["zeta", [950]],
            ["zfr", [120119]],
            ["Zfr", [8488]],
            ["ZHcy", [1046]],
            ["zhcy", [1078]],
            ["zigrarr", [8669]],
            ["zopf", [120171]],
            ["Zopf", [8484]],
            ["Zscr", [119989]],
            ["zscr", [120015]],
            ["zwj", [8205]],
            ["zwnj", [8204]]
        ],
        i = [
            ["NewLine", [10]]
        ],
        a = {},
        s = {};
    ! function(t, e) {
        var n = r.length;
        for (; n--;) {
            var o = r[n],
                a = o[0],
                s = o[1],
                u = s[0],
                l = s[1],
                c = u < 32 || u > 126 || 62 === u || 60 === u || 38 === u || 34 === u || 39 === u,
                d = void 0;
            c && (d = e[u] = e[u] || {});
            if (l) {
                t[a] = String.fromCharCode(u) + String.fromCharCode(l);
                c && (d[l] = a)
            } else {
                t[a] = String.fromCharCode(u);
                c && (d[""] = a)
            }
        }
        n = i.length;
        for (; n--;) {
            var p = i[n],
                h = (a = p[0], p[1]);
            u = h[0], l = h[1];
            t[a] = String.fromCharCode(u) + (l ? String.fromCharCode(l) : "")
        }
    }(a, s);
    var u = function() {
        function t() {}
        t.prototype.decode = function(t) {
            return t && t.length ? t.replace(/&(#?[\w\d]+);?/g, (function(t, e) {
                var n;
                if ("#" === e.charAt(0)) {
                    var r = "x" === e.charAt(1) ? parseInt(e.substr(2).toLowerCase(), 16) : parseInt(e.substr(1));
                    (!isNaN(r) || r >= -32768) && (n = r <= 65535 ? String.fromCharCode(r) : o.fromCodePoint(r))
                } else n = a[e];
                return n || t
            })) : ""
        };
        t.decode = function(e) {
            return (new t).decode(e)
        };
        t.prototype.encode = function(t) {
            if (!t || !t.length) return "";
            for (var e = t.length, n = "", o = 0; o < e;) {
                var r = s[t.charCodeAt(o)];
                if (r) {
                    var i = r[t.charCodeAt(o + 1)];
                    i ? o++ : i = r[""];
                    if (i) {
                        n += "&" + i + ";";
                        o++;
                        continue
                    }
                }
                n += t.charAt(o);
                o++
            }
            return n
        };
        t.encode = function(e) {
            return (new t).encode(e)
        };
        t.prototype.encodeNonUTF = function(t) {
            if (!t || !t.length) return "";
            for (var e = t.length, n = "", r = 0; r < e;) {
                var i = t.charCodeAt(r),
                    a = s[i];
                if (a) {
                    var u = a[t.charCodeAt(r + 1)];
                    u ? r++ : u = a[""];
                    if (u) {
                        n += "&" + u + ";";
                        r++;
                        continue
                    }
                }
                if (i < 32 || i > 126)
                    if (i >= o.highSurrogateFrom && i <= o.highSurrogateTo) {
                        n += "&#" + o.getCodePoint(t, r) + ";";
                        r++
                    } else n += "&#" + i + ";";
                else n += t.charAt(r);
                r++
            }
            return n
        };
        t.encodeNonUTF = function(e) {
            return (new t).encodeNonUTF(e)
        };
        t.prototype.encodeNonASCII = function(t) {
            if (!t || !t.length) return "";
            for (var e = t.length, n = "", r = 0; r < e;) {
                var i = t.charCodeAt(r);
                if (i <= 255) n += t[r++];
                else if (i >= o.highSurrogateFrom && i <= o.highSurrogateTo) {
                    n += "&#" + o.getCodePoint(t, r) + ";";
                    r += 2
                } else {
                    n += "&#" + i + ";";
                    r++
                }
            }
            return n
        };
        t.encodeNonASCII = function(e) {
            return (new t).encodeNonASCII(e)
        };
        return t
    }();
    e.Html5Entities = u
}, function(t, e) {
    t.exports = '<div class="wovn-live-edit-loading" wovn-ignore wovn> <div> <div class="wovn-live-edit-loading-spinner"></div> <div class="wovn-live-edit-loading-logo"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="12" viewBox="0 0 19 12"> <defs> <path id="a" d="M.14.153h3.848V4H.141z"/> <path id="c" d="M0 .195h16.854V12H0z"/> </defs> <g fill="none" fill-rule="evenodd"> <g transform="translate(15 8)"> <mask id="b" fill="#fff"> <use xlink:href="#a"/> </mask> <path fill="#38B171" d="M2.065.153a1.924 1.924 0 1 1 0 3.847 1.924 1.924 0 0 1 0-3.847" mask="url(#b)"/> </g> <g> <mask id="d" fill="#fff"> <use xlink:href="#c"/> </mask> <path fill="#FFF" d="M16.552.223h-2.71c-.156 0-.286.11-.338.275L11.81 6.456 9.935.443C9.883.305 9.753.195 9.623.195H7.33c-.156 0-.26.11-.312.248L5.142 6.456 3.449.498C3.397.333 3.266.223 3.11.223H.297A.271.271 0 0 0 .062.36C.01.443-.016.554.01.636L3.5 11.752c.053.138.183.248.313.248h2.319c.13 0 .26-.083.312-.248l1.98-6.013 1.98 6.013c.052.138.182.248.312.248h2.319c.156 0 .26-.11.312-.248L16.838.636c.026-.082.026-.193-.052-.276a.27.27 0 0 0-.234-.137" mask="url(#d)"/> </g> </g> </svg> </div> <div class="wovn-live-edit-loading-text">preparing for live editor...</div> </div> </div> <style>@-moz-keyframes spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.wovn-live-edit-loading[wovn]{position:fixed;top:0;left:0;z-index:2147483646;width:100%;height:100%;background-color:rgba(0,0,0,.8);font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,sans-serif;opacity:1;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;transition:opacity .5s}.wovn-live-edit-loading--fading[wovn]{opacity:0}.wovn-live-edit-loading[wovn]>div{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;font-size:16px;font-weight:400;font-style:normal;line-height:1.5;letter-spacing:.29px;color:#fff}.wovn-live-edit-loading[wovn] .wovn-live-edit-loading-spinner{animation:spin 1s linear infinite;border:2px solid transparent;border-left:2px solid #fff;border-top:2px solid #fff;border-bottom:2px solid #fff;display:inline-block;border-radius:50%;height:64px;width:64px}.wovn-live-edit-loading[wovn] .wovn-live-edit-loading-logo{height:38px;margin-top:-38px}.wovn-live-edit-loading[wovn] .wovn-live-edit-loading-text{margin:16px}</style> '
}, function(t, e, n) {
    "use strict";
    n.r(e);
    e.default = "#wovn-machine-translated-modal .wovn-modal-background {\n  visibility: hidden;\n  opacity: 0;\n  z-index: 99999;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  background: rgba(100, 110, 117, 0.9);\n  overflow-y: auto;\n  transition: opacity 300ms, background 300ms, visibility 300ms;\n  font-family: helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif;\n  pointer-events: initial;\n}\n#wovn-machine-translated-modal .wovn-modal-background.opened {\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  cursor: auto;\n}\n\n#wovn-machine-translated-modal .wovn-modal-background .wovn-modal-container {\n  position: relative;\n  display: inline-block;\n  margin: 200px 200px;\n  padding: 32px 32px 16px;\n  background: white;\n  border-radius: 3px;\n  transform: translateY(0); transition: transform 0ms;\n  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.24), 0 0 12px 0 rgba(0, 0, 0, 0.12);\n}\n@media (max-width: 600px) {\n  #wovn-machine-translated-modal .wovn-modal-background .wovn-modal-container {\n    margin: 24px 24px;\n  }\n}\n@media (min-width: 601px) and (max-width: 800px) {\n  #wovn-machine-translated-modal .wovn-modal-background .wovn-modal-container {\n    margin: 100px 100px;\n  }\n}\n#wovn-machine-translated-modal .wovn-modal-background .wovn-modal-content {\n  text-align: left;\n}\n#wovn-machine-translated-modal .wovn-modal-background .wovn-modal-content h3 {\n  font-size: 20px;\n  font-weight: normal;\n  color: #27313b;\n  margin-top: 0;\n}\n#wovn-machine-translated-modal .wovn-modal-background .wovn-modal-content p {\n  font-size: 14px;\n  color: #27313b;\n  margin-bottom: 32px;\n}\n#wovn-machine-translated-modal .wovn-modal-background .wovn-modal-footer {\n  background-color: #f6f8fa;\n  border-top: solid 1px #eef3f7;\n  margin: 0 -32px -16px -32px;\n  border-radius: 0 0 3px 3px;\n  padding: 16px 30px;\n  position: relative;\n  text-align: right;\n}\n#wovn-machine-translated-modal .wovn-modal-background button {\n  border-radius: 2px;\n  width: 96px;\n  height: 32px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 600;\n}\n#wovn-machine-translated-modal .wovn-modal-background button.wovn-modal-back-button {\n  border: solid 1px #eef3f7;\n  background-color: #ffffff;\n  color: #82959f;\n}\n#wovn-machine-translated-modal .wovn-modal-background button.wovn-modal-ok-button {\n  border: none;\n  background-color: #545f66;\n  border: solid 1px #545f66;\n  cursor: pointer;\n  color: #ffffff;\n}\n#wovn-machine-translated-modal .wovn-modal-background button.wovn-modal-ok-button:hover {\n  background-color: #6e7c89;\n  border: solid 1px #6e7c89;\n}\n"
}, function(t, e) {
    t.exports = '<div class="wovn-modal-background"> <div class="wovn-modal-container"> <div class="wovn-modal-content"> <h3 class="wovn-modal-content-title"></h3> <p class="wovn-modal-content-body"></p> </div> <div class="wovn-modal-footer"> <button class="wovn-modal-ok-button">ok</button> </div> </div> </div> '
}, function(t, e, n) {
    "use strict";
    n.r(e);
    e.default = "div#wovn-tenso-modal {\n  display: none;\n  z-index: 2147483646;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  background: rgba(84,95,102, 0.8);\n  overflow-y: auto;\n  font-family: helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif;\n}\n.tenso-img {\n  display: inline-block;\n}\n.raku-ichiban-img {\n  display: none;\n}\n.raku-ichiban .tenso-img {\n  display: none;\n}\n.raku-ichiban .raku-ichiban-img {\n  display: inline-block;\n}\ndiv#wovn-tenso-modal.opened {\n  display: block;\n}\ndiv.wovn-tenso-dialog {\n  width: 652px;\n  height: 396px;\n  position: relative;\n  margin: 7% auto;\n  padding: 24px 25px 16px;\n  display: inline-block;\n  border-radius: 3px;\n  opacity: 1;\n  background-color: #ffffff;\n  box-shadow: 0 19px 38px 0 rgba(0, 0, 0, 0.3), 0 15px 12px 0 rgba(0, 0, 0, 0.22);\n}\ndiv.wovn-tenso-close {\n  position: absolute;\n  width: 32px;\n  top: 16px;\n  right: 0;\n  margin: 9px;\n  line-height: 14px;\n  font-size: 30px;\n  color: #bdc4c8;\n  cursor: pointer;\n}\ndiv.wovn-tenso-header {\n  text-align: center;\n}\ndiv.wovn-tenso-logo {\n  position: absolute;\n  top: 71px;\n  left: 69px;\n}\ndiv.wovn-tenso-title {\n  text-align: center;\n  color: #545f66;\n  font-size: 20px;\n  margin-top: 27px;\n  margin-bottom: 25px;\n  height: 30px;\n}\ndiv.wovn-tenso-lang-selector {\n  display: inline-block;\n  padding: 0 5px;\n}\ndiv.wovn-tenso-lang-selector:after {\n  content: '|';\n  color: #8f9aa0;\n  font-size: 16px;\n}\ndiv.wovn-tenso-lang-selector:last-child:after {\n  content: '';\n}\nspan.wovn-tenso-lang-selector-name {\n  font-size: 14px;\n  color: #469fd6;\n  cursor: pointer;\n}\nspan.wovn-tenso-lang-selector-name.active {\n  color: #545f66;\n}\ndiv.wovn-tenso-subtitle {\n  text-align: center;\n  font-size: 14px;\n  color: #8f9aa0;\n  margin-bottom: 16px;\n  height: 42px;\n}\ndiv.wovn-tenso-subtitle span {\n  display: block;\n}\ndiv.wovn-tenso-steps {\n  height: 170px;\n  position: relative;\n}\ndiv.wovn-tenso-step {\n  text-align:center;\n  display:inline-block;\n  vertical-align: bottom;\n  width: 160px;\n  height: 140px;\n  margin: 5px 17px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  border: solid 1px #e6e6e6;\n}\ndiv.wovn-tenso-step-content {\n  padding: 5px 10px;\n}\ndiv.wovn-tenso-step-title {\n  padding: 15px 0;\n  font-size: 20px;\n  color: #ff4d09;\n}\n.raku-ichiban div.wovn-tenso-step-title {\n  color: #ab263b;\n}\ndiv.wovn-tenso-step-text {\n  font-size: 14px;\n  color: #545f66;\n}\ndiv.wovn-tenso-step-separator {\n  display: inline-block;\n  color: #ff4d09;\n  position: relative;\n  margin-bottom: 70px;\n}\n.raku-ichiban div.wovn-tenso-step-separator {\n  color: #ab263b;\n}\ndiv.wovn-tenso-footer-border {\n  border-top: 1px solid rgba(0,0,0, 0.12);\n  margin: 2px -25px 0 -25px;\n}\ndiv.wovn-tenso-footer {\n}\ndiv.wovn-tenso-footer-buttons {\n  margin-top: 16px;\n}\ndiv.wovn-tenso-cancel-button {\n  display: inline-block;\n  font-size: 12px;\n  padding: 12px 30px;\n  color: #545f66;\n}\ndiv.wovn-tenso-cancel-button:hover {\n  cursor: pointer;\n}\ndiv.wovn-tenso-ok-button {\n  display: inline-block;\n  font-size: 12px;\n  padding: 12px 30px;\n  color: #ffffff;\n  background-color: #FF4D09;\n  border-radius: 3px;\n}\n.raku-ichiban div.wovn-tenso-ok-button {\n  background-color: #ab263b;\n}\ndiv.wovn-tenso-ok-button:hover {\n  background-color: #FF703A;\n}\n.raku-ichiban div.wovn-tenso-ok-button:hover {\n  background-color: #C55062;\n}\ndiv.wovn-tenso-ok-button:active {\n  background-color: #E54508;\n}\n@media(max-width: 600px) {\n  div.wovn-tenso-step-separator {\n    display:none;\n  }\n  div.wovn-tenso-logo {\n    position: relative;\n    padding-top: 20px;\n    top: initial;\n    left: initial;\n  }\n  div.wovn-tenso-dialog {\n    width: 80%;\n    height: 472px;\n  }\n  div.wovn-tenso-step {\n    width: 100%;\n    height: 61px;\n    margin: 5px auto;\n  }\n  div.wovn-tenso-step-title {\n    margin-top: 5px;\n    padding: 0;\n    font-size: 16px;\n    color: #ff4d09;\n  }\n  div.wovn-tenso-step-text {\n    margin-top: -5px;\n    padding: 8px 0 16px 0;\n    font-size: 11px;\n  }\n  div.wovn-tenso-footer-border {\n    margin: 62px -25px 0 -25px;\n  }\n  div.wovn-tenso-title {\n    margin: 20px 0 0 0;\n    font-size: 16px;\n  }\n  div.wovn-tenso-subtitle {\n    font-size: 12px;\n  }\n  div.wovn-tenso-footer-buttons {\n    margin: 16px 0;\n  }\n}\n@media(max-width: 320px) {\n  div.wovn-tenso-dialog {\n    width: 85%;;\n    height: 478px;\n    padding: 24px 16px 16px;\n  }\n  div.wovn-tenso-subtitle {\n    margin-bottom: 22px;\n  }\n}\n\n/* BANNER */\nbody[wovn-tenso-banner-on] {\n  padding-top: 60px;\n}\ndiv#wovn-tenso-banner {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  color: #3991c9;\n  background-color: #b7e2fd;\n  font-family: helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif;\n  text-align: center;\n  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0);\n}\ndiv#wovn-tenso-banner.raku-ichiban {\n  color: white;\n  background-color: #ab263b;\n}\ndiv#wovn-tenso-banner.opened {\n  display: block;\n}\na.wovn-tenso-banner-content {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n}\ndiv.wovn-tenso-banner-logo {\n  display: inline-block;\n  top: 14px;\n  position: relative;\n}\n.raku-ichiban div.wovn-tenso-banner-logo {\n  top: 12px;\n  width: 72px;\n  height: 33.9px;\n}\ndiv.wovn-tenso-banner-text {\n  display: inline-block;\n  font-size: 14px;\n  top: 7px;\n  position: relative;\n  padding-left: 10px;\n}\n.raku-ichiban div.wovn-tenso-banner-text {\n  color: #ffffff;\n}\ndiv.wovn-tenso-banner-link {\n  display: inline-block;\n  color: #f95c29;\n  font-size: 16px;\n  top: 7px;\n  position: relative;\n  padding-left: 10px;\n}\n\n.raku-ichiban div.wovn-tenso-banner-link {\n  color: #ffffff;\n}\n\n@media (max-width: 440px) {\n  a.wovn-tenso-banner-content {\n    text-decoration: none;\n  }\n  div.wovn-tenso-banner-logo, .raku-ichiban div.wovn-tenso-banner-logo {\n    display: block;\n    top:9px;\n  }\n  .raku-ichiban div.wovn-tenso-banner-logo {\n    width: auto;\n  }\n  div.wovn-tenso-banner-logo img {\n    width: 90px;\n  }\n  .raku-ichiban div.wovn-tenso-banner-logo img {\n    width: 70px;\n  }\n  div.wovn-tenso-banner-text {\n    top: 8px;\n    font-size: 10px;\n  }\n  div.wovn-tenso-banner-link {\n    top: 8px;\n    padding-left: 0;\n    font-size: 12px;\n  }\n}\n"
}, function(t, e) {
    t.exports = '<a class="wovn-tenso-banner-content" target="_blank"> <div class="wovn-tenso-banner-logo"> <div> <img src="//wovn.io/assets/tenso_logo_banner.png" class="tenso-img" alt="Tenso"> <img src="//wovn.io/assets/raku_ichiban_logo_white.png" class="raku-ichiban-img" alt="Tenso"> </div> </div> <div class="wovn-tenso-banner-text"></div> <div class="wovn-tenso-banner-link"></div> </a> '
}, function(t, e) {
    t.exports = '<div class="wovn-tenso-dialog"> <div class="wovn-tenso-content"> <div class="wovn-tenso-close">&times;</div> <div class="wovn-tenso-header"></div> <div class="wovn-tenso-logo"> <div> <img src="//wovn.io/assets/tenso_logo_modal.png" class="tenso-img" alt="Tenso"> <img src="//wovn.io/assets/raku_ichiban_logo_color.png" class="raku-ichiban-img" alt="Tenso"> </div> </div> <div class="wovn-tenso-title"> <span></span> </div> <div class="wovn-tenso-subtitle"> <span></span> <span></span> </div> <div class="wovn-tenso-steps"> <div class="wovn-tenso-step"> <div class="wovn-tenso-step-content"> <div class="wovn-tenso-step-title">STEP 1</div> <div class="wovn-tenso-step-text"></div> </div> </div> <div class="wovn-tenso-step-separator"> <div> <img src="//wovn.io/assets/tenso_next_step.png" class="tenso-img" alt=">"> <img src="//wovn.io/assets/raku_ichiban_next_step.png" class="raku-ichiban-img" alt=">"> </div> </div> <div class="wovn-tenso-step"> <div class="wovn-tenso-step-content"> <div class="wovn-tenso-step-title">STEP 2</div> <div class="wovn-tenso-step-text"></div> </div> </div> <div class="wovn-tenso-step-separator"> <div> <img src="//wovn.io/assets/tenso_next_step.png" class="tenso-img" alt=">"> <img src="//wovn.io/assets/raku_ichiban_next_step.png" class="raku-ichiban-img" alt=">"> </div> </div> <div class="wovn-tenso-step"> <div class="wovn-tenso-step-content"> <div class="wovn-tenso-step-title">STEP 3</div> <div class="wovn-tenso-step-text"></div> </div> </div> </div> <div class="wovn-tenso-footer-border"></div> <div class="wovn-tenso-footer"> <div class="wovn-tenso-footer-buttons"> <div class="wovn-tenso-cancel-button"></div> <a target="_blank"><div class="wovn-tenso-ok-button"></div></a> </div> </div> </div> </div> '
}, function(t, e, n) {
    "use strict";
    n.r(e);
    e.default = '#wovn-translate-widget[wovn],\n#wovn-translate-widget[wovn] a,\n#wovn-translate-widget[wovn] div,\n#wovn-translate-widget[wovn] ul,\n#wovn-translate-widget[wovn] li,\n#wovn-translate-widget[wovn] span,\n#wovn-translate-widget[wovn] svg,\n#wovn-additional-buttons[wovn],\n#wovn-additional-buttons[wovn] a,\n#wovn-additional-buttons[wovn] div,\n#wovn-additional-buttons[wovn] ul,\n#wovn-additional-buttons[wovn] li,\n#wovn-additional-buttons[wovn] span,\n#wovn-additional-buttons[wovn] svg,\n.wovn-report-values-modal-container,\n.wovn-report-values-modal-container a,\n.wovn-report-values-modal-container div,\n.wovn-report-values-modal-container ul,\n.wovn-report-values-modal-container li,\n.wovn-report-values-modal-container span,\n.wovn-report-values-modal-container svg {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n\n  animation : none;\n  animation-delay : 0;\n  animation-direction : normal;\n  animation-duration : 0;\n  animation-fill-mode : none;\n  animation-iteration-count : 1;\n  animation-name : none;\n  animation-play-state : running;\n  animation-timing-function : ease;\n  backface-visibility : visible;\n  background : 0;\n  background-attachment : scroll;\n  background-clip : border-box;\n  background-color : transparent;\n  background-image : none;\n  background-origin : padding-box;\n  background-position : 0 0;\n  background-position-x : 0;\n  background-position-y : 0;\n  background-repeat : repeat;\n  background-size : auto auto;\n  border : 0;\n  border-style : none;\n  border-width : medium;\n  border-color : inherit;\n  border-bottom : 0;\n  border-bottom-color : inherit;\n  border-bottom-left-radius : 0;\n  border-bottom-right-radius : 0;\n  border-bottom-style : none;\n  border-bottom-width : medium;\n  border-collapse : separate;\n  border-image : none;\n  border-left : 0;\n  border-left-color : inherit;\n  border-left-style : none;\n  border-left-width : medium;\n  border-radius : 0;\n  border-right : 0;\n  border-right-color : inherit;\n  border-right-style : none;\n  border-right-width : medium;\n  border-spacing : 0;\n  border-top : 0;\n  border-top-color : inherit;\n  border-top-left-radius : 0;\n  border-top-right-radius : 0;\n  border-top-style : none;\n  border-top-width : medium;\n  bottom : auto;\n  box-shadow : none;\n  box-sizing : content-box;\n  caption-side : top;\n  clear : none;\n  clip : auto;\n  color : inherit;\n  columns : auto;\n  column-count : auto;\n  column-fill : balance;\n  column-gap : normal;\n  column-rule : medium none currentColor;\n  column-rule-color : currentColor;\n  column-rule-style : none;\n  column-rule-width : none;\n  column-span : 1;\n  column-width : auto;\n  content : normal;\n  counter-increment : none;\n  counter-reset : none;\n  cursor : auto;\n  direction : ltr;\n  display : inline;\n  empty-cells : show;\n  float : none;\n  font : normal;\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell, "Helvetica Neue", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", Padauk, sans-serif;\n  font-size : medium;\n  font-style : normal;\n  font-variant : normal;\n  font-weight : normal;\n  height : auto;\n  hyphens : none;\n  left : auto;\n  letter-spacing : normal;\n  line-height : normal;\n  list-style: none;\n  list-style-image : none;\n  list-style-position : inside;\n  list-style-type : none;\n  margin : 0;\n  margin-bottom : 0;\n  margin-left : 0;\n  margin-right : 0;\n  margin-top : 0;\n  max-height : none;\n  max-width : none;\n  min-height : auto;\n  min-width : auto;\n  opacity : 1;\n  orphans : 0;\n  outline : 0;\n  outline-color : invert;\n  outline-style : none;\n  outline-width : medium;\n  overflow : visible;\n  overflow-x : visible;\n  overflow-y : visible;\n  padding : 0;\n  padding-bottom : 0;\n  padding-left : 0;\n  padding-right : 0;\n  padding-top : 0;\n  page-break-after : auto;\n  page-break-before : auto;\n  page-break-inside : auto;\n  perspective : none;\n  perspective-origin : 50% 50%;\n  position : static;\n  quotes : \'\\201C\' \'\\201D\' \'\\2018\' \'\\2019\';\n  right : auto;\n  tab-size : 8;\n  table-layout : auto;\n  text-align : inherit;\n  text-align-last : auto;\n  text-decoration : none;\n  text-decoration-color : inherit;\n  text-decoration-line : none;\n  text-decoration-style : solid;\n  text-indent : 0;\n  text-shadow : none;\n  text-transform : none;\n  top : auto;\n  transform : none;\n  transform-style : flat;\n  transition : none;\n  transition-delay : 0s;\n  transition-duration : 0s;\n  transition-property : none;\n  transition-timing-function : ease;\n  unicode-bidi : normal;\n  vertical-align : baseline;\n  visibility : visible;\n  white-space: normal;\n  widows : 0;\n  width : auto;\n  word-spacing : normal;\n  z-index : auto;\n}\n#wovn-translate-widget[wovn] {\n  max-height : fit-content;\n  pointer-events: auto;\n}\n\n#wovn-translate-widget[wovn] div {\n  display: block;\n}\n\n#wovn-translate-widget[wovn] ul {\n  margin-bottom: 0;\n  margin-right: 0;\n  padding-left: 0;\n  display: block;\n  margin-left: 0;\n  margin-top: 0;\n  padding: 0;\n  margin: 0;\n}\n\n#wovn-translate-widget[wovn] ul::-webkit-scrollbar {\n  display: none;\n}\n\n#wovn-translate-widget[wovn] li {\n  text-align: -webkit-match-parent;\n  display: list-item;\n}\n\n#wovn-translate-widget[wovn]:focus {\n  outline: 0;\n}\n\n#wovn-translate-widget[wovn].hide-logo .wovn-lang-selector .wovn-lang-selector-links .wovn-logo--small {\n  display: none !important;\n}\n\n#wovn-translate-widget[wovn].hide-logo .wovn-lang-container .wovn-logo--big {\n  display: none !important;\n}\n\n#wovn-translate-widget[wovn].show-tbm #translated-by-machine {\n  display: block !important;\n}\n'
}, function(t, e, n) {
    "use strict";
    n.r(e);
    e.default = "/* base styles */\n#wovn-additional-buttons[wovn] .wovn-additional-button[wovn] { \n  width: 144px; \n}\n\n#wovn-additional-buttons[wovn] .wovn-additional-button[wovn], \n#wovn-additional-buttons[wovn] .wovn-additional-button[wovn] * { \n  box-sizing: border-box; \n  cursor: pointer; \n  display: block; \n  color: #ffffff; \n  font-size: 13px; \n  text-align: center; \n  font-weight: 600; \n}\n\n/* live edit button */\n\ndiv#wovn-additional-buttons[wovn] .wovn-live-edit-button[wovn],\ndiv#wovn-additional-buttons[wovn] .wovn-preview-mode-button[wovn] { \n  -webkit-font-smoothing: antialiased; \n  line-height: 32px; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] + .wovn-live-edit-button[wovn] { \n  border-top: 1px solid #27313B; \n}\n\n/* preview button */\n\ndiv#wovn-additional-buttons[wovn] .wovn-live-edit-button[wovn] + .wovn-preview-mode-button[wovn], \ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] + .wovn-preview-mode-button[wovn] { \n  border-top: 1px solid #27313B; \n}\n\n/* report values button */\n\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] { \n  -webkit-font-smoothing: antialiased; padding: 8px; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] .wovn-report-values-button__label { \n  margin: 0 0 8px; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] .wovn-report-values-button__status { \n  border-radius: 3px; \n  overflow: hidden; \n  padding: 4px 0; \n  height: 24px; \n  background-position: 100% 0%; \n  background-size: 200%; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] .wovn-report-values-button__status--loading { \n  transition: background-position 0.7s ease-out; \n  background-position: 0% 0%; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] .wovn-report-values-button__status--success { \n  background-position: 0% 0%; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] .wovn-report-values-button__status--success #wovn-button-check,\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn] .wovn-report-values-button__status--error #wovn-button-refresh\n { \n  display: inline-block; \n  width: 16px; \n  height: 16px; \n  vertical-align: top; \n  fill: #ffffff; \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn].wovn-report-values-button--auto[wovn] .wovn-report-values-button__status { \n  background-image: linear-gradient(to left, #545F66 50%, #40B87C 50%); \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn].wovn-report-values-button--manual[wovn] .wovn-report-values-button__status { \n  background-image: linear-gradient(to left, #3892E5 50%, #3892E5 50%); \n}\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn].wovn-report-values-button--auto[wovn] .wovn-report-values-button__status.wovn-report-values-button__status--error,\ndiv#wovn-additional-buttons[wovn] .wovn-report-values-button[wovn].wovn-report-values-button--manual[wovn] .wovn-report-values-button__status.wovn-report-values-button__status--error { \n  background-image: linear-gradient(to left, #FF5F5F 50%, #FF5F5F 50%); \n}\n"
}, function(t, e) {
    t.exports = '<div class="wovn-lang-container"> <ul class="wovn-lang-list"></ul> <a class="wovn-logo wovn-logo--big" class="wovn-logo-big" href="http://wovn.io" target="_blank"> <svg style="max-height:10px;max-width:61px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.36 64.73"><circle class="color-dot" cx="322.58" cy="53.99" r="10"/><path class="color-letter" id="letter-small-i" d="M343.84,30.31h9.42a1.16,1.16,0,0,1,1.18,1.18V61.79A1.16,1.16,0,0,1,353.26,63h-9.42a1.16,1.16,0,0,1-1.18-1.18V31.48C342.52,30.89,343.11,30.31,343.84,30.31Z"/><path id="letter-small-o" class="color-letter" d="M379,29.28a17.36,17.36,0,1,0,17.36,17.36A17.39,17.39,0,0,0,379,29.28Zm0,24.57a7.21,7.21,0,1,1,7.21-7.21A7.22,7.22,0,0,1,379,53.84Z"/><path id="letter-big-W" class="color-letter" d="M93.48,1.18H78.18a2,2,0,0,0-1.91,1.47L66.7,34.42,56.11,2.35A2.06,2.06,0,0,0,54.34,1H41.4a1.9,1.9,0,0,0-1.77,1.32L29,34.42,19.48,2.65a2,2,0,0,0-1.91-1.47H1.68a1.54,1.54,0,0,0-1.32.74A1.81,1.81,0,0,0,.06,3.38L19.77,62.67A2.06,2.06,0,0,0,21.54,64H34.63a1.85,1.85,0,0,0,1.77-1.32L47.58,30.6,58.76,62.67A2.06,2.06,0,0,0,60.52,64H73.61a1.9,1.9,0,0,0,1.77-1.32L95.09,3.38a1.4,1.4,0,0,0-.29-1.47A1.54,1.54,0,0,0,93.48,1.18Z"/><path id="letter-big-O" class="color-letter" d="M132,0C113.19,0,98.48,14.27,98.48,32.51s14.71,32.22,33.39,32.22,33.54-14.27,33.54-32.51S150.7,0,132,0Zm14.56,32.51C146.58,41.34,140.26,48,132,48s-14.71-6.77-14.71-15.74,6.18-15.45,14.56-15.45S146.58,23.54,146.58,32.51Z"/><path id="letter-big-V" class="color-letter" d="M232.06,1.18H215.73a2.09,2.09,0,0,0-1.91,1.32L201,38,188.22,2.5a2.09,2.09,0,0,0-1.91-1.32H169.53a1.54,1.54,0,0,0-1.32.74,1.58,1.58,0,0,0-.15,1.62L191.9,62.82A1.91,1.91,0,0,0,193.66,64h14.12a1.91,1.91,0,0,0,1.77-1.18L233.38,3.53a1.74,1.74,0,0,0-.15-1.47C233,1.44,232.65,1.18,232.06,1.18Z"/><path id="letter-big-N" class="color-letter" d="M301.05,1.18h-15.3a1.47,1.47,0,0,0-1.47,1.47V32.37L261,1.91a1.81,1.81,0,0,0-1.47-.74H245a1.47,1.47,0,0,0-1.47,1.47V62.52A1.47,1.47,0,0,0,245,64h15.45a1.47,1.47,0,0,0,1.47-1.47V31.63L286,63.26a1.81,1.81,0,0,0,1.47.74h13.53a1.47,1.47,0,0,0,1.47-1.47V2.65A1.47,1.47,0,0,0,301.05,1.18Z"/></svg> </a> </div> <div class="wovn-lang-selector"> <div class="wovn-lang-selector-links"> <svg id="wovn-logo-planet" style="max-width:20px;max-height:20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14.2588,19.6699 C15.1168,18.6319 15.8108,17.4539 16.2858,16.1669 L18.8168,16.1669 C17.7908,17.8369 16.1768,19.1039 14.2588,19.6699 Z M5.1838,16.1669 L7.7138,16.1669 C8.1898,17.4539 8.8828,18.6319 9.7408,19.6699 C7.8228,19.1039 6.2088,17.8369 5.1838,16.1669 Z M9.7408,4.3299 C8.8458,5.4119 8.1388,6.6489 7.6618,7.9999 L5.0818,7.9999 C6.0998,6.2469 7.7598,4.9149 9.7408,4.3299 Z M18.9178,7.9999 L16.3378,7.9999 C15.8618,6.6489 15.1548,5.4119 14.2588,4.3299 C16.2398,4.9149 17.9008,6.2469 18.9178,7.9999 Z M16.8488,9.9999 L19.7368,9.9999 C19.9028,10.6409 19.9998,11.3089 19.9998,11.9999 C19.9998,12.7519 19.8888,13.4769 19.6938,14.1669 L16.8178,14.1669 C16.9468,13.4619 17.0348,12.7429 17.0348,11.9999 C17.0348,11.3159 16.9578,10.6519 16.8488,9.9999 Z M14.1938,7.9999 L9.8068,7.9999 C10.3238,6.8139 11.0648,5.7249 11.9998,4.8069 C12.9358,5.7249 13.6758,6.8139 14.1938,7.9999 Z M3.9998,11.9999 C3.9998,11.3089 4.0978,10.6409 4.2638,9.9999 L7.1518,9.9999 C7.0418,10.6519 6.9648,11.3159 6.9648,11.9999 C6.9648,12.7429 7.0538,13.4619 7.1828,14.1669 L4.3068,14.1669 C4.1118,13.4769 3.9998,12.7519 3.9998,11.9999 Z M9.2108,14.1669 C9.0538,13.4599 8.9648,12.7349 8.9648,11.9999 C8.9648,11.3229 9.0348,10.6529 9.1688,9.9999 L14.8308,9.9999 C14.9648,10.6529 15.0348,11.3229 15.0348,11.9999 C15.0348,12.7349 14.9458,13.4599 14.7888,14.1669 L9.2108,14.1669 Z M9.8868,16.1669 L14.1128,16.1669 C13.5998,17.2879 12.8918,18.3189 11.9998,19.1929 C11.1088,18.3189 10.4008,17.2879 9.8868,16.1669 Z M1.9998,11.9999 C1.9998,17.5229 6.4778,21.9999 11.9998,21.9999 C17.5228,21.9999 21.9998,17.5229 21.9998,11.9999 C21.9998,6.4769 17.5228,1.9999 11.9998,1.9999 C6.4778,1.9999 1.9998,6.4769 1.9998,11.9999 Z"></path></svg> <span class="wovn-current-lang">Loading...</span> <a class="wovn-logo wovn-logo--small" href="http://wovn.io" target="_blank"> <svg style="max-width:21px;max-height:10px" id="wovn-logo--floating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.96 39.35"><circle class="color-dot" cx="60.71" cy="33.1" r="6.25"/><path class="color-letter" d="M58.42.09H48.86a1.27,1.27,0,0,0-1.2.92l-6,19.86L35.06.83A1.29,1.29,0,0,0,34,0H25.87a1.19,1.19,0,0,0-1.1.83l-6.62,20L12.17,1A1.27,1.27,0,0,0,11,.09H1A1,1,0,0,0,.22.55,1.13,1.13,0,0,0,0,1.47L12.36,38.52a1.29,1.29,0,0,0,1.1.83h8.18a1.16,1.16,0,0,0,1.1-.83l7-20,7,20a1.29,1.29,0,0,0,1.1.83H46a1.19,1.19,0,0,0,1.1-.83L59.43,1.47a.88.88,0,0,0-.18-.92A1,1,0,0,0,58.42.09Z"/></svg> <svg style="max-width:56px;max-height:8px" id="wovn-logo--default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.36 64.73"><circle class="color-dot" cx="322.58" cy="53.99" r="10"/><path class="color-letter" id="letter-small-i" d="M343.84,30.31h9.42a1.16,1.16,0,0,1,1.18,1.18V61.79A1.16,1.16,0,0,1,353.26,63h-9.42a1.16,1.16,0,0,1-1.18-1.18V31.48C342.52,30.89,343.11,30.31,343.84,30.31Z"/><path id="letter-small-o" class="color-letter" d="M379,29.28a17.36,17.36,0,1,0,17.36,17.36A17.39,17.39,0,0,0,379,29.28Zm0,24.57a7.21,7.21,0,1,1,7.21-7.21A7.22,7.22,0,0,1,379,53.84Z"/><path id="letter-big-W" class="color-letter" d="M93.48,1.18H78.18a2,2,0,0,0-1.91,1.47L66.7,34.42,56.11,2.35A2.06,2.06,0,0,0,54.34,1H41.4a1.9,1.9,0,0,0-1.77,1.32L29,34.42,19.48,2.65a2,2,0,0,0-1.91-1.47H1.68a1.54,1.54,0,0,0-1.32.74A1.81,1.81,0,0,0,.06,3.38L19.77,62.67A2.06,2.06,0,0,0,21.54,64H34.63a1.85,1.85,0,0,0,1.77-1.32L47.58,30.6,58.76,62.67A2.06,2.06,0,0,0,60.52,64H73.61a1.9,1.9,0,0,0,1.77-1.32L95.09,3.38a1.4,1.4,0,0,0-.29-1.47A1.54,1.54,0,0,0,93.48,1.18Z"/><path id="letter-big-O" class="color-letter" d="M132,0C113.19,0,98.48,14.27,98.48,32.51s14.71,32.22,33.39,32.22,33.54-14.27,33.54-32.51S150.7,0,132,0Zm14.56,32.51C146.58,41.34,140.26,48,132,48s-14.71-6.77-14.71-15.74,6.18-15.45,14.56-15.45S146.58,23.54,146.58,32.51Z"/><path id="letter-big-V" class="color-letter" d="M232.06,1.18H215.73a2.09,2.09,0,0,0-1.91,1.32L201,38,188.22,2.5a2.09,2.09,0,0,0-1.91-1.32H169.53a1.54,1.54,0,0,0-1.32.74,1.58,1.58,0,0,0-.15,1.62L191.9,62.82A1.91,1.91,0,0,0,193.66,64h14.12a1.91,1.91,0,0,0,1.77-1.18L233.38,3.53a1.74,1.74,0,0,0-.15-1.47C233,1.44,232.65,1.18,232.06,1.18Z"/><path id="letter-big-N" class="color-letter" d="M301.05,1.18h-15.3a1.47,1.47,0,0,0-1.47,1.47V32.37L261,1.91a1.81,1.81,0,0,0-1.47-.74H245a1.47,1.47,0,0,0-1.47,1.47V62.52A1.47,1.47,0,0,0,245,64h15.45a1.47,1.47,0,0,0,1.47-1.47V31.63L286,63.26a1.81,1.81,0,0,0,1.47.74h13.53a1.47,1.47,0,0,0,1.47-1.47V2.65A1.47,1.47,0,0,0,301.05,1.18Z"/></svg> </a> </div> <span id="translated-by-machine">Translated by machine</span> </div> '
}, function(t, e) {
    t.exports = '<svg id="wovn-logo--floating" class="wovn-logo--floating--custom" viewBox="0 0 246 246" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="custom"><g id="Group" fill="#FFFFFF"><polygon id="shape" points="246 0 246 246 0 246"></polygon></g><g id="Group" transform="translate(140.629997, 160) scale(0.7)" fill="#812990" fill-rule="nonzero" stroke="#FFFFFF"><path d="M46.2906707,1.92067992 L0.529407432,59.8165151 L37.782713,59.8165151 L37.782713,74.6036803 L46.2891308,74.6036803 L46.2891308,59.8165151 L55.9335361,59.8165151 L55.9335361,57.8307932 L46.2891308,57.8307932 L46.2891308,1.92067992 L46.2906707,1.92067992 Z M37.767314,57.8307932 L5.9945191,57.8307932 L37.767314,17.7902986 L37.767314,57.8307932 Z" id="Shape" stroke-width="4"></path><path d="M89.0922427,26.9316689 C76.5790002,26.4117388 70.8844432,32.0413777 69.4030576,34.0638178 C69.2844852,34.2268467 69.0488802,34.1592852 69.0504201,33.905195 C69.082758,31.2923259 69.5247099,16.4537551 75.7320542,10.0970952 C84.7651185,0.83969525 101.888827,1.92067992 107.606483,19.7304898 C107.745074,20.1637649 109.619134,20.1211718 109.560618,19.6761469 C109.012413,15.5078935 107.588004,12.0519737 104.097046,8.41246285 C90.4781543,-5.77252347 60.6625747,-1.92592178 60.6625747,40.5174138 C60.6625747,67.2820654 72.1179046,74.3569338 86.2249454,75.1441727 C99.1139239,75.8653187 111.787316,65.321312 111.787316,52.4185262 C111.785776,36.2610366 100.690783,27.4119434 89.0922427,26.9316689 Z M86.3019405,72.8588301 C76.7653284,72.8588301 69.0304014,63.0888436 69.0304014,51.0291084 C69.0304014,38.9767169 76.7637885,29.2023242 86.3019405,29.2023242 C95.8400926,29.2023242 103.57194,38.9767169 103.57194,51.0291084 C103.57194,63.0873749 95.8400926,72.8588301 86.3019405,72.8588301 Z" id="Shape" stroke-width="2"></path></g></g></g></svg>'
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PerformanceMonitor = e.MonitorEventType = void 0;
    var o = n(3);
    ! function(t) {
        t.DataLoadStart = "data_load_start";
        t.DataLoadEnd = "data_load_end";
        t.PageDataLoadStart = "page_data_load_start";
        t.PageDataLoadEnd = "page_data_load_end";
        t.FirstSwapStart = "first_swap_start";
        t.FirstSwapEnd = "first_swap_end";
        t.SwapStart = "swap_start";
        t.SwapEnd = "swap_end";
        t.ChangeLangStart = "change_lang_start";
        t.ChangeLangEnd = "change_lang_end"
    }(e.MonitorEventType || (e.MonitorEventType = {}));
    var r = function() {
        function t(t) {
            this.performanceResults = [];
            this.startTimeMs = null;
            this.isEnabled = "true" === t.get(o.WovnCookies.WOVN_MONITOR_ENABLE)
        }
        t.prototype.mark = function(t, e) {
            void 0 === e && (e = {});
            if (this.isEnabled) {
                var n = performance.now();
                this.startTimeMs || (this.startTimeMs = n);
                var o = {
                    event: t,
                    elapsedTimeMs: n - this.startTimeMs,
                    context: e
                };
                this.performanceResults.push(o)
            }
        };
        t.prototype.getResult = function() {
            var t = this;
            return this.isEnabled ? this.performanceResults.map((function(e, n) {
                var o = Object.assign({}, e);
                if (e && e.event && e.event.endsWith("_end")) {
                    var r = e.event.replace("_end", "_start"),
                        i = t.performanceResults.slice(0, n).reverse().find((function(t) {
                            return t.event === r
                        }));
                    i && (o.execTimeMs = e.elapsedTimeMs - i.elapsedTimeMs)
                }
                return o
            })) : []
        };
        return t
    }();
    e.PerformanceMonitor = r
}, , function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getWovnAdditionalButtonsContainer = void 0;
    var r = o(n(64)),
        i = "wovn-additional-buttons";
    e.getWovnAdditionalButtonsContainer = function() {
        return document.getElementById(i)
    };
    var a = function() {
        function t() {}
        t.prototype.setWidgetStyle = function(t) {
            this.widgetStyle = t;
            return this
        };
        t.prototype.buildDomInsertStrategy = function() {
            var t = this;
            return function(e, n) {
                var o = t.getOrCreateButtonsContainer(n);
                o.insertBefore(e, o.firstChild);
                o.style.cssText = t.buildContainerContentDependentStyles(o.style.cssText, o.clientHeight, n);
                t.isStandardWidgetVisible(n) ? t.isTopPositionStandardWidget(n) ? n.appendChild(o) : n.insertBefore(o, n.firstChild) : document.body.appendChild(o)
            }
        };
        t.prototype.isStandardWidgetVisible = function(t) {
            return !!t && !!t.parentNode && "block" === window.getComputedStyle(t).display
        };
        t.prototype.isTopPositionStandardWidget = function(t) {
            return !!t && /(^| )(mobile-)?position-top-(right|left)( |$)/.test(t.className)
        };
        t.prototype.isLeftPositionStandardWidget = function(t) {
            return !!t && /(^| )(mobile-)?position-(bottom|top)-left( |$)/.test(t.className)
        };
        t.prototype.getOrCreateButtonsContainer = function(t) {
            var n = e.getWovnAdditionalButtonsContainer();
            if (!n) {
                (n = document.createElement("div")).id = i;
                n.className = "wovn-additional-buttons";
                n.setAttribute("wovn", "");
                n.style.cssText = this.buildContainerContentIndependentStyles(t);
                if (this.isStandardWidgetVisible(t) && this.isLeftPositionStandardWidget(t)) {
                    n.innerHTML = r.default.ADDITIONAL_BUTTONS_WOVN_LOGO_RIGHT;
                    n.children[0].style.cssText = "position: absolute; right: -32px; top: 0; width: 32px; height: 32px;"
                } else {
                    n.innerHTML = r.default.ADDITIONAL_BUTTONS_WOVN_LOGO_LEFT;
                    n.children[0].style.cssText = "position: absolute; left: -32px; top: 0; width: 32px; height: 32px;"
                }
            }
            return n
        };
        t.prototype.buildContainerContentIndependentStyles = function(t) {
            var e = "box-sizing: border-box; display: block; background-color: #3D454B; width: 144px;";
            if (this.isStandardWidgetVisible(t)) {
                e += "position: relative;";
                switch (this.widgetStyle.type) {
                    case "default":
                    case "slate":
                        e += this.isLeftPositionStandardWidget(t) ? "margin: 24px auto 24px 24px;" : "margin: 24px 24px 24px auto;";
                        break;
                    case "floating":
                        e += this.isLeftPositionStandardWidget(t) ? "margin: 24px 24px 24px 0;" : "margin: 24px 0 24px 24px;"
                }
            } else e += "position: fixed; right: 24px; bottom: 32px; z-index: 2147483646;";
            return e
        };
        t.prototype.buildContainerContentDependentStyles = function(t, e, n) {
            var o;
            o = e > 32 ? this.isStandardWidgetVisible(n) ? "border-radius: " + (this.isLeftPositionStandardWidget(n) ? "3px 0px 3px 3px" : "0px 3px 3px 3px") + ";" : "border-radius: 0px 3px 3px 3px;" : this.isStandardWidgetVisible(n) ? "border-radius: " + (this.isLeftPositionStandardWidget(n) ? "3px 0px 0px 3px" : "0px 3px 3px 0px") + ";" : "border-radius: 0px 3px 3px 0px;";
            return t = t.indexOf("border-radius") > -1 ? t.replace(/border-radius: \dpx \dpx \dpx \dpx;/, o) : t += o
        };
        return t
    }();
    e.default = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.readResponseHeaders = void 0;
    e.readResponseHeaders = function(t) {
        for (var e = {}, n = t.getAllResponseHeaders().split("\r\n"), o = 0; o < n.length; o++)
            if ("" !== n[o]) {
                var r = n[o].split(": ");
                e[r[0]] = r[1]
            } return e
    }
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isTextFragment = void 0;
    var a = i(n(68)),
        s = {
            "'": "&#39;",
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        },
        u = new RegExp("[" + Object.keys(s).join("") + "]", "g"),
        l = function(t) {
            r(e, t);

            function e(e, n, o, r, i, a, s, u, l, c, d) {
                var p = t.call(this, e, n, !1, l) || this;
                p.text = o;
                p.original = r;
                p.nodes = i;
                p.lookahead = a;
                p.skipCount = s;
                p.isHtml = u;
                p.unifiedValueComments = c;
                p.ignoreType = d;
                return p
            }
            Object.defineProperty(e.prototype, "isText", {
                get: function() {
                    return !0
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "escapedSrc", {
                get: function() {
                    return this.htmlEscapeTextForKeyLookup(this.label)
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "escapedLabel", {
                get: function() {
                    return this.isHtml ? this.label : this.htmlEscapeText(this.label)
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "src", {
                get: function() {
                    return this.escapedSrc
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "wasPreviouslyTranslated", {
                get: function() {
                    return this.node && null != this.unifiedValueComments.getOriginalSrcFromComment(this.node)
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "translationDataSrcKey", {
                get: function() {
                    var t = this.node ? this.unifiedValueComments.getOriginalSrcFromComment(this.node) : null;
                    return null !== t ? this.htmlEscapeTextForKeyLookup(this.textNormalizer.normalizeText(t)) : this.src
                },
                enumerable: !1,
                configurable: !0
            });
            e.prototype.removeComment = function() {
                this.node && this.unifiedValueComments.removeOriginalSrcComment(this.node)
            };
            e.prototype.htmlEscapeTextForKeyLookup = function(t) {
                return this.htmlEscapeText(t).replace(/\u200b/g, "")
            };
            e.prototype.htmlEscapeText = function(t) {
                return t.replace(u, (function(t) {
                    return s[t]
                }))
            };
            return e
        }(a.default);
    e.default = l;
    e.isTextFragment = function(t) {
        return t.isText
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SnippetSettings = e.urlPatternAffectsPath = e.urlPatternAffectsDomain = e.UrlLanguagePattern = void 0;
    var o;
    ! function(t) {
        t[t.Path = 0] = "Path";
        t[t.Query = 1] = "Query";
        t[t.Subdomain = 2] = "Subdomain";
        t[t.CustomDomain = 3] = "CustomDomain"
    }(o = e.UrlLanguagePattern || (e.UrlLanguagePattern = {}));
    e.urlPatternAffectsDomain = function(t) {
        return t == o.Subdomain || t == o.CustomDomain
    };
    e.urlPatternAffectsPath = function(t) {
        return t == o.Path || t == o.CustomDomain
    };
    var r = "wovn",
        i = function() {
            function t(t, e) {
                this.token = null;
                this.isBackend = !1;
                this.defaultLang = null;
                this.currentLang = null;
                this.urlPattern = null;
                this.sitePrefixPath = null;
                this.langParamName = r;
                this.customDomainLangs = null;
                this.langCodeAliases = {};
                this.snippetType = e;
                this.token = this.readSetting(t, "key");
                if (!this.token) throw new Error("WovnWidgetError - Missing snippet setting: key (token)");
                this.isCreeper = "true" === this.readSetting(t, "creeper");
                this.isBackend = "true" === this.readSetting(t, "backend");
                this.isCrawlerScrapingEnabled = "true" === this.readSetting(t, "wovnScrape");
                this.isShopify = "true" === this.readSetting(t, "shopify");
                if (this.isBackend) {
                    this.defaultLang = this.readSetting(t, "defaultLang");
                    this.currentLang = this.readSetting(t, "currentLang");
                    switch (this.readSetting(t, "urlPattern")) {
                        case "path":
                            this.urlPattern = o.Path;
                            this.sitePrefixPath = this.readSetting(t, "sitePrefixPath") || this.readSetting(t, "site_prefix_path") || "";
                            break;
                        case "query":
                            this.urlPattern = o.Query;
                            this.langParamName = this.readSetting(t, "langParamName") || r;
                            break;
                        case "subdomain":
                            this.urlPattern = o.Subdomain;
                            break;
                        case "custom_domain":
                            this.urlPattern = o.CustomDomain;
                            this.customDomainLangs = this.readCustomDomainLangs(t);
                            break;
                        default:
                            throw new Error("Invalid urlPattern snippet setting")
                    }
                    this.langCodeAliases = this.readLangCodeAliases(t)
                }
            }
            t.prototype.readSetting = function(t, e) {
                var n = new RegExp(e + "=([^&]+)", "i"),
                    o = t.match(n);
                return o ? o[1] : null
            };
            t.prototype.readLangCodeAliases = function(t) {
                var e = this.readSetting(t, "langCodeAliases");
                return this.parseJsonValue(e)
            };
            t.prototype.readCustomDomainLangs = function(t) {
                var e = this.readSetting(t, "customDomainLangs");
                return this.parseJsonValue(e)
            };
            t.prototype.parseJsonValue = function(t) {
                try {
                    var e = JSON.parse(t);
                    return e && Object.keys(e).length > 0 ? e : {}
                } catch (t) {
                    return {}
                }
            };
            return t
        }();
    e.SnippetSettings = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.StaticLanguages = e.isMatchByCode = e.isMatchByNameOrCode = void 0;
    var r = o(n(179)),
        i = o(n(0)),
        a = o(n(2));

    function s(t, e) {
        return (e = e.toLowerCase()) === t.name.toLowerCase() || e === t.code.toLowerCase() || e === t.en.toLowerCase()
    }
    e.isMatchByNameOrCode = s;
    e.isMatchByCode = function(t, e) {
        return e.toLowerCase() === t.code.toLowerCase()
    };
    var u = r.default,
        l = function() {
            function t(t) {
                this.all = i.default.values(t)
            }
            t.prototype.find = function(t) {
                return a.default.find(this.all, (function(e) {
                    return s(e, t)
                }))
            };
            return t
        }();
    e.StaticLanguages = l;
    e.default = new l(u)
}, function(t, e, n) {
    (function(t, o) {
        var r;
        ! function(i) {
            e && e.nodeType, t && t.nodeType;
            var a = "object" == typeof o && o;
            a.global !== a && a.window !== a && a.self !== a || a;
            var s, u = 2147483647,
                l = 36,
                c = /^xn--/,
                d = /[^\x20-\x7E]/,
                p = /[\x2E\u3002\uFF0E\uFF61]/g,
                h = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                g = Math.floor,
                f = String.fromCharCode;

            function m(t) {
                throw new RangeError(h[t])
            }

            function v(t, e) {
                for (var n = t.length, o = []; n--;) o[n] = e(t[n]);
                return o
            }

            function y(t, e) {
                var n = t.split("@"),
                    o = "";
                if (n.length > 1) {
                    o = n[0] + "@";
                    t = n[1]
                }
                return o + v((t = t.replace(p, ".")).split("."), e).join(".")
            }

            function w(t) {
                for (var e, n, o = [], r = 0, i = t.length; r < i;)
                    if ((e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < i)
                        if (56320 == (64512 & (n = t.charCodeAt(r++)))) o.push(((1023 & e) << 10) + (1023 & n) + 65536);
                        else {
                            o.push(e);
                            r--
                        }
                else o.push(e);
                return o
            }

            function b(t) {
                return v(t, (function(t) {
                    var e = "";
                    if (t > 65535) {
                        e += f((t -= 65536) >>> 10 & 1023 | 55296);
                        t = 56320 | 1023 & t
                    }
                    return e += f(t)
                })).join("")
            }

            function _(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function C(t, e, n) {
                var o = 0;
                t = n ? g(t / 700) : t >> 1;
                t += g(t / e);
                for (; t > 455; o += l) t = g(t / 35);
                return g(o + 36 * t / (t + 38))
            }

            function S(t) {
                var e, n, o, r, i, a, s, c, d, p, h, f = [],
                    v = t.length,
                    y = 0,
                    w = 128,
                    _ = 72;
                (n = t.lastIndexOf("-")) < 0 && (n = 0);
                for (o = 0; o < n; ++o) {
                    t.charCodeAt(o) >= 128 && m("not-basic");
                    f.push(t.charCodeAt(o))
                }
                for (r = n > 0 ? n + 1 : 0; r < v;) {
                    for (i = y, a = 1, s = l;; s += l) {
                        r >= v && m("invalid-input");
                        ((c = (h = t.charCodeAt(r++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : l) >= l || c > g((u - y) / a)) && m("overflow");
                        y += c * a;
                        if (c < (d = s <= _ ? 1 : s >= _ + 26 ? 26 : s - _)) break;
                        a > g(u / (p = l - d)) && m("overflow");
                        a *= p
                    }
                    _ = C(y - i, e = f.length + 1, 0 == i);
                    g(y / e) > u - w && m("overflow");
                    w += g(y / e);
                    y %= e;
                    f.splice(y++, 0, w)
                }
                return b(f)
            }

            function T(t) {
                var e, n, o, r, i, a, s, c, d, p, h, v, y, b, S, T = [];
                v = (t = w(t)).length;
                e = 128;
                n = 0;
                i = 72;
                for (a = 0; a < v; ++a)(h = t[a]) < 128 && T.push(f(h));
                o = r = T.length;
                r && T.push("-");
                for (; o < v;) {
                    for (s = u, a = 0; a < v; ++a)(h = t[a]) >= e && h < s && (s = h);
                    s - e > g((u - n) / (y = o + 1)) && m("overflow");
                    n += (s - e) * y;
                    e = s;
                    for (a = 0; a < v; ++a) {
                        (h = t[a]) < e && ++n > u && m("overflow");
                        if (h == e) {
                            for (c = n, d = l; !(c < (p = d <= i ? 1 : d >= i + 26 ? 26 : d - i)); d += l) {
                                S = c - p;
                                b = l - p;
                                T.push(f(_(p + S % b, 0)));
                                c = g(S / b)
                            }
                            T.push(f(_(c, 0)));
                            i = C(n, y, o == r);
                            n = 0;
                            ++o
                        }
                    }++n;
                    ++e
                }
                return T.join("")
            }
            s = {
                version: "1.4.1",
                ucs2: {
                    decode: w,
                    encode: b
                },
                decode: S,
                encode: T,
                toASCII: function(t) {
                    return y(t, (function(t) {
                        return d.test(t) ? "xn--" + T(t) : t
                    }))
                },
                toUnicode: function(t) {
                    return y(t, (function(t) {
                        return c.test(t) ? S(t.slice(4).toLowerCase()) : t
                    }))
                }
            };
            void 0 !== (r = function() {
                return s
            }.call(e, n, e, t)) && (t.exports = r)
        }()
    }).call(this, n(91)(t), n(17))
}, function(t, e) {
    var n, o, r = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            o = a
        }
    }();

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) {
            n = setTimeout;
            return setTimeout(t, 0)
        }
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }
    var u, l = [],
        c = !1,
        d = -1;

    function p() {
        if (c && u) {
            c = !1;
            u.length ? l = u.concat(l) : d = -1;
            l.length && h()
        }
    }

    function h() {
        if (!c) {
            var t = s(p);
            c = !0;
            for (var e = l.length; e;) {
                u = l;
                l = [];
                for (; ++d < e;) u && u[d].run();
                d = -1;
                e = l.length
            }
            u = null;
            c = !1;
            ! function(t) {
                if (o === clearTimeout) return clearTimeout(t);
                if ((o === a || !o) && clearTimeout) {
                    o = clearTimeout;
                    return clearTimeout(t)
                }
                try {
                    o(t)
                } catch (e) {
                    try {
                        return o.call(null, t)
                    } catch (e) {
                        return o.call(this, t)
                    }
                }
            }(t)
        }
    }
    r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new g(t, e));
        1 !== l.length || c || s(h)
    };

    function g(t, e) {
        this.fun = t;
        this.array = e
    }
    g.prototype.run = function() {
        this.fun.apply(null, this.array)
    };
    r.title = "browser";
    r.browser = !0;
    r.env = {};
    r.argv = [];
    r.version = "";
    r.versions = {};

    function f() {}
    r.on = f;
    r.addListener = f;
    r.once = f;
    r.off = f;
    r.removeListener = f;
    r.removeAllListeners = f;
    r.emit = f;
    r.prependListener = f;
    r.prependOnceListener = f;
    r.listeners = function(t) {
        return []
    };
    r.binding = function(t) {
        throw new Error("process.binding is not supported")
    };
    r.cwd = function() {
        return "/"
    };
    r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    };
    r.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t) {
            this.buttonElement = null;
            this.loadingOverlayElement = null;
            this.domInsertStrategy = t
        }
        t.prototype.appendToDom = function(t) {
            this.buttonElement || (this.buttonElement = this.buildHtmlElement());
            document.body.contains(this.buttonElement) || this.domInsertStrategy(this.buttonElement, t);
            return this.buttonElement
        };
        return t
    }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__spreadArray || function(t, e) {
            for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) t[r] = e[n];
            return t
        },
        r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = r(n(0)),
        a = r(n(2)),
        s = "TranslationStore",
        u = function() {
            function t(t, e, n, o, r, i, a) {
                void 0 === t && (t = null);
                void 0 === e && (e = {});
                void 0 === n && (n = {});
                void 0 === o && (o = {});
                void 0 === r && (r = {});
                this.creationTime = t;
                this.textVals = e;
                this.imgVals = n;
                this.htmlTextVals = o;
                this.pageTextVals = r;
                this.wovnStorage = i;
                this.manualPublishedDate = a
            }
            Object.defineProperty(t.prototype, "isEmpty", {
                get: function() {
                    return 0 === Object.keys(this.textVals).length && 0 === Object.keys(this.imgVals).length && 0 === Object.keys(this.htmlTextVals).length && 0 === Object.keys(this.pageTextVals).length
                },
                enumerable: !1,
                configurable: !0
            });
            t.create = function(e, n, o, r, i, a, s) {
                return new t(e, n, o, r, i, a, s)
            };
            t.onlyShowLangs = function(t, e, n) {
                var o = this.loadFromStoreWithoutFilter(e, n);
                this.localTranslationData = this.create(o.creationTime, this.filterByLangs(t, o.textVals), this.filterByLangs(t, o.imgVals), this.filterByLangs(t, o.htmlTextVals), this.filterByLangs(t, o.pageTextVals), e, n)
            };
            t.loadFromStore = function(t, e) {
                return this.localTranslationData || this.loadFromStoreWithoutFilter(t, e)
            };
            t.loadFromStoreWithoutFilter = function(e, n) {
                var o = Date.now() - 36e5,
                    r = n ? n.getTime() : o;
                r < o && (r = o);
                return t.getStoredTranslationValue(r, e, n)
            };
            t.getStoredTranslationValue = function(e, n, o) {
                var r = t.getStoredTranslation(n, e, o);
                return r || new t(Date.now(), {}, {}, {}, {}, n, o)
            };
            t.getStoredTranslation = function(e, n, o) {
                var r = e.getValue(s, n);
                if (!r) return null;
                var i = r[0],
                    a = r[1];
                return new t(i, a.text_vals || {}, a.img_vals || {}, a.html_text_vals || {}, {}, e, o)
            };
            t.clearData = function(e) {
                new t(1, {}, {}, {}, {}, e, null).storeToStorage()
            };
            t.prototype.storeToStorage = function() {
                var t = this.wovnStorage;
                if (t) {
                    var e = {
                        text_vals: this.textVals,
                        img_vals: this.imgVals,
                        html_text_vals: this.htmlTextVals
                    };
                    t.setValue(s, e, this.creationTime)
                }
            };
            t.prototype.update = function(t) {
                var e = t.textVals,
                    n = t.imgVals,
                    o = t.htmlTextVals,
                    r = t.pageTextVals;
                this.updateTextTranslations(e, o, r);
                this.updateImageTranslations(n);
                t.creationTime < this.creationTime && (this.creationTime = t.creationTime)
            };
            t.prototype.updateTextTranslations = function(t, e, n) {
                var o = this;
                i.default.each(t, (function(t, e) {
                    o.textVals[t] = e
                }));
                i.default.each(e, (function(t, e) {
                    o.htmlTextVals[t] = e
                }));
                i.default.each(n, (function(t, e) {
                    o.pageTextVals[t] = e
                }))
            };
            t.prototype.updateImageTranslations = function(t) {
                var e = this;
                i.default.each(t, (function(t, n) {
                    e.imgVals[t] = n
                }))
            };
            t.prototype.getTextValuesByLangs = function(t) {
                function e(e) {
                    var n = Object.keys(e).map((function(n) {
                        return o = e[n], Object.keys(o).filter((function(e) {
                            return t.indexOf(e) > -1
                        })).map((function(t) {
                            return o[t]
                        }));
                        var o
                    }));
                    return a.default.flatten(n).map((function(t) {
                        return t.data
                    }))
                }
                return o(o(o([], e(this.textVals)), e(this.htmlTextVals)), e(this.pageTextVals))
            };
            t.filterByLangs = function(t, e) {
                var n = {},
                    o = function(o) {
                        var r = e[o],
                            i = Object.keys(r).filter((function(e) {
                                return -1 != t.indexOf(e)
                            })),
                            a = {};
                        i.forEach((function(t) {
                            a[t] = r[t]
                        }));
                        Object.keys(a).length > 0 && (n[o] = a)
                    };
                for (var r in e) o(r);
                return n
            };
            return t
        }();
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isResponseFailedMessage = e.isResponseMessage = e.isRequestMessage = e.isAuthFailedMessage = e.isSyncMessage = e.StallionMessageType = void 0;
    var o, r = n(45),
        i = n(6);
    ! function(t) {
        t.sync = "WOVN_STALLION_READY";
        t.authenticationFailed = "WOVN_STALLION_AUTH_FAILED";
        t.request = "WOVN_STALLION_REQUEST";
        t.response = "WOVN_STALLION_RESPONSE";
        t.responseFailed = "WOVN_STALLION_RESPONSE_FAILED"
    }(o = e.StallionMessageType || (e.StallionMessageType = {}));
    e.isSyncMessage = function(t) {
        return t.messageType == o.sync
    };
    e.isAuthFailedMessage = function(t) {
        return t.messageType == o.authenticationFailed
    };

    function a(t) {
        return t.messageType == o.request
    }
    e.isRequestMessage = a;
    e.isResponseMessage = function(t) {
        return t.messageType == o.response
    };
    e.isResponseFailedMessage = function(t) {
        return t.messageType == o.responseFailed
    };
    var s = function() {
        function t() {
            var t = this;
            this.started = !1;
            this.messageHandler = function(e) {
                return t.onWidgetMessage(e)
            }
        }
        t.prototype.start = function() {
            this.started = !0;
            window.addEventListener("message", this.messageHandler, !1);
            this.notifyWidgetSessionProxy({
                messageType: o.sync
            })
        };
        t.prototype.stop = function() {
            this.started = !1;
            window.removeEventListener("message", this.messageHandler, !1)
        };
        t.prototype.onWidgetMessage = function(t) {
            this.started && a(t.data) && this.sendRequest(t.data)
        };
        t.prototype.notifyWidgetSessionProxy = function(t) {
            window.top.postMessage(t, "*")
        };
        t.prototype.sendRequest = function(t) {
            var e = this,
                n = new XMLHttpRequest,
                a = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
            n.open(t.requestInfo.method, t.requestInfo.url, !0);
            n.setRequestHeader("X-CSRF-Token", a);
            n.setRequestHeader("Content-Type", t.requestInfo.contentType);
            n.onreadystatechange = function() {
                4 === n.readyState && (200 === n.status ? e.notifyWidgetSessionProxy({
                    messageType: o.response,
                    messageId: t.messageId,
                    responseBody: n.responseText,
                    responseStatus: n.status,
                    responseHeaders: r.readResponseHeaders(n)
                }) : e.notifyWidgetSessionProxy({
                    messageType: o.responseFailed,
                    messageId: t.messageId,
                    responseBody: n.responseText,
                    responseStatus: n.status,
                    responseHeaders: {}
                }))
            };
            var s = i.serializeRequestParameters(t.requestInfo.data, t.requestInfo.contentType);
            n.send(s)
        };
        return t
    }();
    e.default = new s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getWovnSrcAttributeName = e.LegacyWovnphpUnifiedValueComments = e.isWovnOriginalSrcComment = e.UnifiedValueComments = void 0;
    var a = i(n(0)),
        s = n(7),
        u = "wovn-src:",
        l = function() {
            function t() {}
            t.prototype.getOriginalSrcFromComment = function(t) {
                var e = this.getOriginalSrcCommentNode(t);
                return e ? this.extractSrcFromComment(e.data) : null
            };
            t.prototype.getOriginalSrcCommentNode = function(t) {
                var e = this.previousNonTextSibling(t);
                if (c(e)) return e
            };
            t.prototype.hasOriginalSrcComment = function(t) {
                return null != this.getOriginalSrcFromComment(t)
            };
            t.prototype.insertOriginalSrcComment = function(t, e) {
                if (!this.hasOriginalSrcComment(t)) {
                    var n = t.parentElement || t.parentNode;
                    if (n) {
                        var o = document.createComment(u + e);
                        "TITLE" === n.nodeName ? n.parentNode.insertBefore(o, n) : n.insertBefore(o, t)
                    }
                }
            };
            t.prototype.removeOriginalSrcComment = function(t) {
                var e = this.getOriginalSrcCommentNode(t);
                e && e.parentNode.removeChild(e)
            };
            t.prototype.previousNonTextSibling = function(t, e) {
                void 0 === e && (e = void 0);
                var n = t.parentElement || t.parentNode;
                if (n && "TITLE" === n.nodeName) return n.previousSibling;
                var o = t.previousSibling;
                return o ? "#text" == o.nodeName ? this.previousNonTextSibling(o, t) : o : e
            };
            t.prototype.extractSrcFromComment = function(t) {
                if (t) {
                    var e = t.indexOf(",wovn-actual-lang:");
                    return -1 == e ? t.substring(u.length) : t.substring(u.length, e)
                }
                return null
            };
            return t
        }();
    e.UnifiedValueComments = l;

    function c(t) {
        return s.isComment(t) && 0 === t.data.indexOf(u)
    }
    e.isWovnOriginalSrcComment = c;
    var d = function(t) {
        r(e, t);

        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        e.prototype.getOriginalSrcFromComment = function(e) {
            var n = t.prototype.getOriginalSrcFromComment.call(this, e);
            return n ? a.default.decodeHTMLEntities(n) : null
        };
        return e
    }(l);
    e.LegacyWovnphpUnifiedValueComments = d;
    e.getWovnSrcAttributeName = function(t) {
        return "data-wovn-src:-original-" + t
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(2)),
        i = function() {
            function t() {}
            t.isImageUrl = function(e, n) {
                return !(!e || !n) && (t.isImage(e) && "src" === n)
            };
            t.isImage = function(e) {
                return !!e && ("IMG" === e.nodeName || t.isInputImage(e))
            };
            t.isSrcsetImage = function(t, e) {
                return !(!t || !e) && (("IMG" === t.nodeName || "SOURCE" === t.nodeName) && "srcset" === e)
            };
            t.isInputImage = function(t) {
                var e = t.getAttribute("type");
                return "INPUT" === t.nodeName && "string" == typeof e && "image" === e.toLowerCase()
            };
            t.isMetaImage = function(t) {
                var e = t.getAttribute("property");
                return r.default.includes(["og:image", "og:image:url", "og:image:secure_url", "twitter:image"], e)
            };
            return t
        }();
    e.default = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isElementIgnored = e.createIgnoreNodeFilter = e.shouldTraverseChildNode = void 0;
    var o = n(69),
        r = n(70),
        i = n(5),
        a = n(7),
        s = n(123),
        u = n(124),
        l = n(14);
    e.shouldTraverseChildNode = function(t, e) {
        var n, o = s.getIgnoredChildNodes(t.nodeName.toLowerCase()),
            r = e.nodeName.toLowerCase();
        return !(o[r] || "iframe" === r && (n = e, i.parseUrl(n.src).host !== window.location.host))
    };
    e.createIgnoreNodeFilter = function(t) {
        return function(e) {
            return a.isHTMLElement(e) ? r.isInstantTranslationElement(e) ? l.IgnoreType.All : c(e, t) : l.IgnoreType.None
        }
    };

    function c(t, e) {
        return function(t) {
            return function(t) {
                return a.hasWovnAttribute(t, "wovn-ignore")
            }(t) || function(t) {
                return 1 === t.naturalWidth && 1 === t.naturalHeight
            }(t) || o.isOnDemandTranslationIgnoreNode(t) || function(t) {
                return u.isAdElement(t, t.nodeName)
            }(t)
        }(t) || function(t, e) {
            return e.ignoreInlineDisplayNoneElements && function(t) {
                var e = t.getAttribute("style"),
                    n = /display:\s*none;?/;
                return null != e && n.test(e)
            }(t)
        }(t, e) ? l.IgnoreType.All : function(t) {
            return a.hasWovnAttribute(t, "wovn-ignore-content")
        }(t) ? l.IgnoreType.TagContent : function(t) {
            return a.hasWovnAttribute(t, "wovn-ignore-attrs")
        }(t) ? l.IgnoreType.Attributes : l.IgnoreType.None
    }
    e.isElementIgnored = c
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.HistoryEvents = e.captureHistoryStateChanges = void 0;
    var r = n(12),
        i = o(n(18));
    e.captureHistoryStateChanges = function() {
        if (i.default.supportsHistoryApi() && !window._wovnWrappedHistoryApi) {
            window._wovnWrappedHistoryApi = !0;
            history.pushState = a(history.pushState);
            history.replaceState = a(history.replaceState);
            window.addEventListener("popstate", (function() {
                r.triggerEvent(e.HistoryEvents.HISTORY_STATE_CHANGED)
            }))
        }
    };

    function a(t) {
        return function(n, o, i) {
            var a = t.apply(this, arguments);
            r.triggerEvent(e.HistoryEvents.HISTORY_STATE_CHANGED, {
                newHistoryState: {
                    data: n,
                    title: o,
                    url: i
                }
            });
            return a
        }
    }
    e.HistoryEvents = {
        HISTORY_STATE_CHANGED: "wovnHistoryStateChanged"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportStatusMonitor = e.ReportStatus = void 0;
    var o;
    ! function(t) {
        t.Idle = "Idle";
        t.Sending = "Sending";
        t.Success = "Success";
        t.Failed = "Failed"
    }(o = e.ReportStatus || (e.ReportStatus = {}));
    var r = function() {
        function t() {
            this._status = o.Idle;
            this._subscribers = []
        }
        Object.defineProperty(t.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.update = function(t) {
            this._status = t;
            this.notifySubscribers()
        };
        t.prototype.subscribe = function(t) {
            this._subscribers.push(t)
        };
        t.prototype.unsubscribe = function(t) {
            this._subscribers = this._subscribers.filter((function(e) {
                return e !== t
            }))
        };
        t.prototype.notifySubscribers = function() {
            var t = this;
            this._subscribers.forEach((function(e) {
                return e(t.status)
            }))
        };
        return t
    }();
    e.ReportStatusMonitor = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.toServerReportSource = e.isCustomReport = e.ServerReportSource = e.ReportSource = void 0;
    var o, r;
    ! function(t) {
        t.Audit = "audit";
        t.ManualCustom = "manual_custom";
        t.AutomaticCustom = "automatic_custom"
    }(o = e.ReportSource || (e.ReportSource = {}));
    ! function(t) {
        t.Audit = "audit";
        t.Custom = "custom"
    }(r = e.ServerReportSource || (e.ServerReportSource = {}));
    e.isCustomReport = function(t) {
        return t === o.ManualCustom || t === o.AutomaticCustom
    };
    e.toServerReportSource = function(t) {
        switch (t) {
            case o.Audit:
                return r.Audit;
            case o.ManualCustom:
            case o.AutomaticCustom:
                return r.Custom;
            default:
                throw new Error("unknown report source '" + t + "'")
        }
    }
}, function(t, e, n) {
    "use strict";
    (function(e) {
        var o = n(162),
            r = n(163),
            i = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
            a = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
            s = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

        function u(t) {
            return (t || "").toString().replace(s, "")
        }
        var l = [
                ["#", "hash"],
                ["?", "query"],
                function(t) {
                    return t.replace("\\", "/")
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            c = {
                hash: 1,
                query: 1
            };

        function d(t) {
            var n, o = ("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}).location || {},
                r = {},
                a = typeof(t = t || o);
            if ("blob:" === t.protocol) r = new h(unescape(t.pathname), {});
            else if ("string" === a) {
                r = new h(t, {});
                for (n in c) delete r[n]
            } else if ("object" === a) {
                for (n in t) n in c || (r[n] = t[n]);
                void 0 === r.slashes && (r.slashes = i.test(t.href))
            }
            return r
        }

        function p(t) {
            t = u(t);
            var e = a.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!(e[2] && e[2].length >= 2),
                rest: e[2] && 1 === e[2].length ? "/" + e[3] : e[3]
            }
        }

        function h(t, e, n) {
            t = u(t);
            if (!(this instanceof h)) return new h(t, e, n);
            var i, a, s, c, g, f, m = l.slice(),
                v = typeof e,
                y = this,
                w = 0;
            if ("object" !== v && "string" !== v) {
                n = e;
                e = null
            }
            n && "function" != typeof n && (n = r.parse);
            e = d(e);
            i = !(a = p(t || "")).protocol && !a.slashes;
            y.slashes = a.slashes || i && e.slashes;
            y.protocol = a.protocol || e.protocol || "";
            t = a.rest;
            a.slashes || (m[3] = [/(.*)/, "pathname"]);
            for (; w < m.length; w++)
                if ("function" != typeof(c = m[w])) {
                    s = c[0];
                    f = c[1];
                    if (s != s) y[f] = t;
                    else if ("string" == typeof s) {
                        if (~(g = t.indexOf(s)))
                            if ("number" == typeof c[2]) {
                                y[f] = t.slice(0, g);
                                t = t.slice(g + c[2])
                            } else {
                                y[f] = t.slice(g);
                                t = t.slice(0, g)
                            }
                    } else if (g = s.exec(t)) {
                        y[f] = g[1];
                        t = t.slice(0, g.index)
                    }
                    y[f] = y[f] || i && c[3] && e[f] || "";
                    c[4] && (y[f] = y[f].toLowerCase())
                } else t = c(t);
            n && (y.query = n(y.query));
            i && e.slashes && "/" !== y.pathname.charAt(0) && ("" !== y.pathname || "" !== e.pathname) && (y.pathname = function(t, e) {
                if ("" === t) return e;
                for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), o = n.length, r = n[o - 1], i = !1, a = 0; o--;)
                    if ("." === n[o]) n.splice(o, 1);
                    else if (".." === n[o]) {
                    n.splice(o, 1);
                    a++
                } else if (a) {
                    0 === o && (i = !0);
                    n.splice(o, 1);
                    a--
                }
                i && n.unshift("");
                "." !== r && ".." !== r || n.push("");
                return n.join("/")
            }(y.pathname, e.pathname));
            "/" !== y.pathname.charAt(0) && y.hostname && (y.pathname = "/" + y.pathname);
            if (!o(y.port, y.protocol)) {
                y.host = y.hostname;
                y.port = ""
            }
            y.username = y.password = "";
            if (y.auth) {
                c = y.auth.split(":");
                y.username = c[0] || "";
                y.password = c[1] || ""
            }
            y.origin = y.protocol && y.host && "file:" !== y.protocol ? y.protocol + "//" + y.host : "null";
            y.href = y.toString()
        }
        h.prototype = {
            set: function(t, e, n) {
                var i = this;
                switch (t) {
                    case "query":
                        "string" == typeof e && e.length && (e = (n || r.parse)(e));
                        i[t] = e;
                        break;
                    case "port":
                        i[t] = e;
                        if (o(e, i.protocol)) e && (i.host = i.hostname + ":" + e);
                        else {
                            i.host = i.hostname;
                            i[t] = ""
                        }
                        break;
                    case "hostname":
                        i[t] = e;
                        i.port && (e += ":" + i.port);
                        i.host = e;
                        break;
                    case "host":
                        i[t] = e;
                        if (/:\d+$/.test(e)) {
                            e = e.split(":");
                            i.port = e.pop();
                            i.hostname = e.join(":")
                        } else {
                            i.hostname = e;
                            i.port = ""
                        }
                        break;
                    case "protocol":
                        i.protocol = e.toLowerCase();
                        i.slashes = !n;
                        break;
                    case "pathname":
                    case "hash":
                        if (e) {
                            var a = "pathname" === t ? "/" : "#";
                            i[t] = e.charAt(0) !== a ? a + e : e
                        } else i[t] = e;
                        break;
                    default:
                        i[t] = e
                }
                for (var s = 0; s < l.length; s++) {
                    var u = l[s];
                    u[4] && (i[u[1]] = i[u[1]].toLowerCase())
                }
                i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null";
                i.href = i.toString();
                return i
            },
            toString: function(t) {
                t && "function" == typeof t || (t = r.stringify);
                var e, n = this,
                    o = n.protocol;
                o && ":" !== o.charAt(o.length - 1) && (o += ":");
                var i = o + (n.slashes ? "//" : "");
                if (n.username) {
                    i += n.username;
                    n.password && (i += ":" + n.password);
                    i += "@"
                }
                i += n.host + n.pathname;
                (e = "object" == typeof n.query ? t(n.query) : n.query) && (i += "?" !== e.charAt(0) ? "?" + e : e);
                n.hash && (i += n.hash);
                return i
            }
        };
        h.extractProtocol = p;
        h.location = d;
        h.trimLeft = u;
        h.qs = r;
        t.exports = h
    }).call(this, n(17))
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.widgetMain = void 0;
    var r = o(n(90)),
        i = n(66),
        a = n(74),
        s = n(62),
        u = n(220),
        l = n(221),
        c = n(222),
        d = n(76),
        p = o(n(18)),
        h = n(7);
    e.widgetMain = function() {
        var t = {},
            e = location.href,
            n = new i.DebugSettings(window.location);
        if (!n.disableWidget) {
            var o = a.findWovnSnippet(document.documentElement);
            if (!o) throw new Error("WovnWidgetError - Snippet not found");
            var g = s.buildWovnContext(o),
                f = new l.ShopifyTokenLoader(new c.ShopifyController(g, new d.WebServiceExecutor));
            u.createSnippetSettings(o, f).then((function(i) {
                if (n.useCreeper && !i.isCreeper) throw new Error("Wovn Creeper Active - Aborting non-creeper widget (token: " + i.token + ")");
                if (p.default.isCrawler() || p.default.isWovnCrawler() && !i.isCrawlerScrapingEnabled) {
                    window.WOVN = null;
                    document.WOVNIO = null
                } else {
                    ! function(t) {
                        var e = document.getElementsByTagName("html")[0];
                        e && h.hasWovnAttribute(e, "wovn-ignore") || t.c("WidgetInit").start()
                    }(r.default(t, n, e, o, i, document, location))
                }
            }))
        }
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.buildWovnContext = e.WovnContext = void 0;
    var r = n(8),
        i = o(n(26)),
        a = n(5),
        s = function() {
            function t(t, e, n, o, r, i, a) {
                this.environment = t;
                this.wovnHost = e;
                this.eeHost = n;
                this.apiHost = a;
                this.jHost = o;
                this.cdnOriginHost = r;
                this.cdnCacheHost = i
            }
            t.prototype.isProduction = function() {
                return "production" === this.environment
            };
            t.prototype.isStaging = function() {
                return r.startsWith(this.environment, "staging")
            };
            t.prototype.isDevelopment = function() {
                return "development" === this.environment || "creeped-development" === this.environment
            };
            t.prototype.isTest = function() {
                return "test" === this.environment || "auto-integration-test" === this.environment
            };
            t.prototype.isProductionLike = function() {
                return this.isProduction() || this.isStaging()
            };
            return t
        }();
    e.WovnContext = s;
    e.buildWovnContext = function(t) {
        var e = a.parseUrl(t.src),
            n = function(t) {
                var e = function(t) {
                    return r.startsWith(t.href, i.default.CDN_URL) ? {
                        name: "production",
                        wovnHost: "wovn.io"
                    } : function(t) {
                        for (var e = 1, n = 0, o = i.default.STAGING_CDN_URLS; n < o.length; n++) {
                            var a = o[n];
                            if (r.startsWith(t.href, a)) return {
                                name: "staging" + e,
                                wovnHost: "staging" + e + "-wovn.com"
                            };
                            e++
                        }
                        return null
                    }(t)
                }(t);
                if (e) return e;
                var n = function(t) {
                    return function(t) {
                        var e = !1;
                        "dev-wovn.io" === location.hostname && "60080" === location.port && (e = !0);
                        !t && /^(test|dev)-wovn.io/.test(location.hostname) && (e = !0);
                        return e ? location.hostname + ":" + location.port : null
                    }(t) || function(t) {
                        if (t) {
                            var e = t.hostname.replace(/^.*\.([^.]+\.[^.]+)/, "$1");
                            return t.port && "80" !== t.port && "443" !== t.port ? e + ":" + t.port : e
                        }
                        return null
                    }(t) || "wovn.io"
                }(t);
                if (r.startsWith(n, "dev-wovn.io")) return /:60080$/.test(n) ? {
                    name: "auto-integration-test",
                    wovnHost: n
                } : t && /(^|[?&])creep=true($|&)/.test(t.search) ? {
                    name: "creeped-development",
                    wovnHost: n
                } : {
                    name: "development",
                    wovnHost: n
                };
                if (r.startsWith(n, "test-wovn.io")) return {
                    name: "test",
                    wovnHost: n
                };
                if (/^staging\d+-wovn\.com/.test(n)) {
                    return {
                        name: n.split("-")[0],
                        wovnHost: n
                    }
                }
                return {
                    name: "production",
                    wovnHost: n
                }
            }(e),
            o = n.name,
            u = n.wovnHost,
            l = u,
            c = "https://",
            d = "wovn.io";
        switch (o) {
            case "development":
            case "test":
            case "auto-integration-test":
                d = (c = e.protocol + "//") + "cdn." + u + "/";
                break;
            case "creeped-development":
                d = (c = e.protocol + "//") + "cdn." + (l = "wovn.io") + "/";
                break;
            case "production":
                d = i.default.CDN_URL;
                break;
            default:
                if (r.startsWith(o, "staging")) {
                    var p = parseInt(o.match(/^staging(\d+)/)[1]);
                    d = i.default.STAGING_CDN_URLS[p - 1]
                }
        }
        return new s(o, c + l + "/", c + "ee." + l + "/", c + "j." + u + "/", c + "cdn." + l + "/", d, c + "api." + l + "/")
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(22)),
        i = n(1),
        a = ["alt", "value", "placeholder", "data-confirm", "data-disable-with", "content", "label", "title"],
        s = function() {
            function t(t) {
                this.node = t;
                this.nodeName = t.nodeName;
                this.data = t.data;
                this.ownerElement = t.ownerElement
            }
            t.prototype.create = function(e) {
                return new t(e)
            };
            Object.defineProperty(t.prototype, "translationDataFallbackAttributeName", {
                get: function() {
                    return "data-wovn-translations:" + this.nodeName
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.getUpperNodeName = function() {
                if (!this.nodeName) return null;
                var t = this.nodeName.charCodeAt(1);
                return !1 == (t >= 65 && t <= 90) ? this.nodeName.toUpperCase() : this.nodeName
            };
            t.prototype.replaceData = function(t, e) {
                this.node.data = t;
                this.data = t;
                this.node.actualLang = e
            };
            t.prototype.refreshData = function() {
                var t = this.node.data;
                t !== this.data && (this.data = t)
            };
            t.prototype.isValueNode = function() {
                return -1 !== a.indexOf(this.nodeName)
            };
            t.prototype.storeTranslationData = function(t) {
                var e = this;
                this.node.wovnTranslation = t;
                if (t && this.needTranslationDataFallbackAttribute()) {
                    var n = this.translationDataFallbackAttributeName;
                    this.ownerElement.wovnMutationObservers = this.ownerElement.wovnMutationObserver || {};
                    this.ownerElement.setAttribute(n, i.stringifyJSON(t));
                    this.ownerElement.wovnMutationObservers[this.nodeName] || (this.ownerElement.wovnMutationObservers[this.nodeName] = new MutationObserver((function(t, o) {
                        for (var r = 0; r < t.length; ++r) {
                            var i = t[r];
                            if ("attributes" === i.type && i.attributeName === e.nodeName) {
                                o.disconnect();
                                e.ownerElement.removeAttribute(n);
                                delete e.ownerElement.wovnMutationObservers[e.nodeName]
                            }
                        }
                    })));
                    this.ownerElement.wovnMutationObservers[this.nodeName].observe(this.ownerElement, {
                        attributes: !0
                    })
                }
            };
            t.prototype.readTranslationData = function() {
                var t = this.node.wovnTranslation;
                if (!t && this.needTranslationDataFallbackAttribute()) {
                    var e = this.translationDataFallbackAttributeName,
                        n = this.ownerElement.getAttribute(e);
                    if (n) {
                        t = JSON.parse(n);
                        this.node.wovnTranslation = t
                    }
                }
                return t
            };
            t.prototype.needTranslationDataFallbackAttribute = function() {
                return this.ownerElement && (r.default.c("Agent").isSafari() || r.default.c("Agent").isMobile())
            };
            return t
        }();
    e.default = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        WOVN_LOGO: '<svg id="wovn-button-logo" viewBox="0 0 27 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.5806923,11.1909615 C25.9083846,11.1909615 26.9853077,12.2675 26.9853077,13.5951923 C26.9853077,14.9236538 25.9083846,15.9998077 24.5806923,15.9998077 C23.2526154,15.9998077 22.1760769,14.9236538 22.1760769,13.5951923 C22.1760769,12.2675 23.2526154,11.1909615 24.5806923,11.1909615" fill="#38B171"></path><path d="M23.36712,0.3153925 L19.54192,0.3153925 C19.32192,0.3153925 19.13792,0.4717925 19.06432,0.7059675 L16.67392,9.1460425 L14.02592,0.6277675 C13.95232,0.4326925 13.76872,0.2762925 13.58472,0.2762925 L10.34832,0.2762925 C10.12752,0.2762925 9.98072,0.4326925 9.90712,0.6277675 L7.25912,9.1460425 L4.86872,0.7059675 C4.79512,0.4717925 4.61112,0.3153925 4.39072,0.3153925 L0.41912,0.3153925 C0.27192,0.3153925 0.16152,0.3935925 0.08792,0.5104675 C0.01432,0.6277675 -0.02248,0.7841675 0.01432,0.9014675 L4.94232,16.6485675 C5.01592,16.8436425 5.19992,17.0000425 5.38352,17.0000425 L8.65672,17.0000425 C8.84072,17.0000425 9.02472,16.8827425 9.09792,16.6485675 L11.89272,8.1302925 L14.68792,16.6485675 C14.76112,16.8436425 14.94512,17.0000425 15.12912,17.0000425 L18.40232,17.0000425 C18.62312,17.0000425 18.76992,16.8436425 18.84352,16.6485675 L23.77152,0.9014675 C23.80832,0.7841675 23.80832,0.6277675 23.69792,0.5104675 C23.62472,0.3935925 23.51392,0.3153925 23.36712,0.3153925" fill="#FFFFFF"></path></svg>',
        ADDITIONAL_BUTTONS_WOVN_LOGO_LEFT: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3C0 1.34315 1.34315 0 3 0H32V32H3C1.34315 32 0 30.6569 0 29V3Z" fill="#27313B"/><path d="M23.088 11.0286H20.4549C20.2995 11.0286 20.1676 11.1336 20.1252 11.2863L18.4766 16.8317L16.6537 11.2338C16.6066 11.1002 16.4889 11.0095 16.3476 11H14.1196C13.9783 11.0048 13.8559 11.0954 13.8135 11.2291L11.9859 16.8364L10.3467 11.2911C10.3043 11.1384 10.1724 11.0382 10.017 11.0334H7.28505C7.19084 11.0334 7.10606 11.0811 7.05895 11.1623C7.00714 11.2338 6.9883 11.3293 7.00714 11.4152L10.3985 21.7662C10.4456 21.895 10.5634 21.9857 10.7047 22H12.9562C13.0975 22 13.22 21.9046 13.2624 21.7709L15.1841 16.1683L17.1059 21.7662C17.153 21.895 17.2708 21.9857 17.4074 22H19.6589C19.8002 21.9952 19.9227 21.9046 19.9651 21.7709L23.3564 11.4152C23.3894 11.3293 23.3706 11.2291 23.3046 11.1575C23.2669 11.0764 23.1822 11.0286 23.088 11.0286Z" fill="white"/><path d="M23.9017 22.0001C24.8538 22.0001 25.6256 21.2181 25.6256 20.2535C25.6256 19.2888 24.8538 18.5068 23.9017 18.5068C22.9496 18.5068 22.1777 19.2888 22.1777 20.2535C22.1777 21.2181 22.9496 22.0001 23.9017 22.0001Z" fill="#42B87C"/></svg>',
        ADDITIONAL_BUTTONS_WOVN_LOGO_RIGHT: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H29C30.6569 0 32 1.34315 32 3V29C32 30.6569 30.6569 32 29 32H0V0Z" fill="#27313B"/><path d="M23.088 11.0286H20.4549C20.2995 11.0286 20.1676 11.1336 20.1252 11.2863L18.4766 16.8317L16.6537 11.2338C16.6066 11.1002 16.4889 11.0095 16.3476 11H14.1196C13.9783 11.0048 13.8559 11.0954 13.8135 11.2291L11.9859 16.8364L10.3467 11.2911C10.3043 11.1384 10.1724 11.0382 10.017 11.0334H7.28505C7.19084 11.0334 7.10606 11.0811 7.05895 11.1623C7.00714 11.2338 6.9883 11.3293 7.00714 11.4152L10.3985 21.7662C10.4456 21.895 10.5634 21.9857 10.7047 22H12.9562C13.0975 22 13.22 21.9046 13.2624 21.7709L15.1841 16.1683L17.1059 21.7662C17.153 21.895 17.2708 21.9857 17.4074 22H19.6589C19.8002 21.9952 19.9227 21.9046 19.9651 21.7709L23.3564 11.4152C23.3894 11.3293 23.3706 11.2291 23.3046 11.1575C23.2669 11.0764 23.1822 11.0286 23.088 11.0286Z" fill="white"/><path d="M23.9036 22C24.8558 22 25.6276 21.218 25.6276 20.2534C25.6276 19.2887 24.8558 18.5067 23.9036 18.5067C22.9515 18.5067 22.1797 19.2887 22.1797 20.2534C22.1797 21.218 22.9515 22 23.9036 22Z" fill="#42B87C"/></svg>',
        RIGHT_ARROW: '<svg id="wovn-button-right-arrow" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8.41421356,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L8.41421356,13 L11.7071068,16.2928932 C12.0976311,16.6834175 12.0976311,17.3165825 11.7071068,17.7071068 C11.3165825,18.0976311 10.6834175,18.0976311 10.2928932,17.7071068 L5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L10.2928932,6.29289322 C10.6834175,5.90236893 11.3165825,5.90236893 11.7071068,6.29289322 C12.0976311,6.68341751 12.0976311,7.31658249 11.7071068,7.70710678 L8.41421356,11 Z" fill-rule="nonzero" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "></path></svg>',
        REFRESH: '<svg id="wovn-button-refresh" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path transform="translate(1.000000, 3.000000)" d="M11.5596442,-1.77635684e-15 C14.3729765,-1.77635684e-15 16.973443,1.30057614 18.6675644,3.47875724 C19.006632,3.91470632 18.9280941,4.54298149 18.492145,4.8820491 C18.0561959,5.22111671 17.4279208,5.14257876 17.0888532,4.70662968 C15.7696978,3.01055335 13.7491239,2 11.5596442,2 C8.32859268,2 5.60883275,4.18909956 4.80261311,7.16505 L7.90150672,7.65654 L3.16858104,11.9692438 L0,6.40506427 L2.8178087,6.85102414 C3.78132973,2.91810662 7.32970681,-1.77635684e-15 11.5596442,-1.77635684e-15 Z M18.8886268,7 L22.0572079,12.5641796 L19.1709644,12.1075645 C18.0524067,15.8055842 14.6181809,18.4980039 10.5551068,18.4980039 C7.58369272,18.4980039 4.85484992,17.0463604 3.18127721,14.6592981 C2.86422851,14.207083 2.97380259,13.5834714 3.42601776,13.2664227 C3.87823294,12.949374 4.50184453,13.058948 4.81889323,13.5111632 C6.12199353,15.3698106 8.24280494,16.4980039 10.5551068,16.4980039 C13.6182709,16.4980039 16.2218971,14.5304878 17.1711605,11.7902804 L14.1557011,11.3127038 L18.8886268,7 Z"></path></svg>',
        CHECK: '<svg id="wovn-button-check" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.875017,9.69938082 L9.94401704,16.6303808 C9.74701704,16.8273808 9.42601704,16.8263808 9.22901704,16.6303808 L6.29901704,13.6993808 C5.90501704,13.3053808 5.89701704,12.6763808 6.29501704,12.2793808 C6.67001704,11.9043808 7.30301704,11.9033808 7.69501704,12.2963808 L9.58701704,14.1873808 L15.478017,8.29638082 C15.870017,7.90438082 16.498017,7.89838082 16.895017,8.29538082 C17.270017,8.67038082 17.264017,9.30938082 16.875017,9.69938082"></path></svg>',
        SPINNER: '<svg id="wovn-button-spinner" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M16.4,18.6C15.2,19.5,13.6,20,12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8c1.6,0,3.1,0.5,4.3,1.3c0.6-0.4,1.3-0.8,2-1C16.6,2.9,14.4,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c2.5,0,4.7-0.9,6.5-2.4C17.7,19.4,17,19.1,16.4,18.6z"/></svg>'
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isCookieSettingEnabled = e.DomainOptionsWrapper = void 0;
    var o = n(103),
        r = n(14),
        i = function() {
            function t() {
                this.domainOptions = null
            }
            t.prototype.getAutoTranslateLangs = function() {
                return this.getOptions().auto_translate_langs || []
            };
            t.prototype.getAutoPublishLangs = function() {
                return this.getOptions().auto_publish_langs || []
            };
            t.prototype.getLinkTranslations = function() {
                return this.getOptions().link_translations || {}
            };
            t.prototype.getDomainCss = function() {
                return this.getOptions().domain_css
            };
            t.prototype.getDomainCssHash = function() {
                return this.getOptions().domain_css_hash
            };
            t.prototype.hasFeature = function(t) {
                return -1 !== (this.getOptions().features || []).indexOf(t)
            };
            t.prototype.getDomainJs = function() {
                return this.getOptions().domain_js
            };
            t.prototype.getSecondaryLang = function() {
                return this.getOptions().secondary_language
            };
            t.prototype.getDesktopPosition = function() {
                return this.getOptions().position
            };
            t.prototype.getMobilePosition = function() {
                return this.getOptions().mobile_position
            };
            t.prototype.notFoundUnpublish = function() {
                return !!this.getOptions().not_found_unpublish
            };
            t.prototype.getWidgetStyle = function() {
                return o.parseWidgetStyle(this.getOptions().style)
            };
            t.prototype.getDomainLangs = function() {
                return this.getOptions().domain_langs || []
            };
            t.prototype.isForceReloadEnabled = function() {
                return this.getOptions().force_reload || this.hasFeature("final_fv_project")
            };
            t.prototype.getParcelForwardingProvider = function() {
                return this.getOptions().parcel_forwarding
            };
            t.prototype.getOptions = function() {
                return this.domainOptions || {}
            };
            t.prototype.setOptions = function(t) {
                ! function(t) {
                    t.mobile_position || (t.mobile_position = "bottom_right")
                }(t);
                this.domainOptions = t
            };
            t.prototype.hasDomainOptions = function() {
                return null !== this.domainOptions
            };
            t.prototype.getCountryCode = function() {
                return this.getOptions().countryCode
            };
            t.prototype.setCountryCode = function(t) {
                this.getOptions().countryCode = t
            };
            t.prototype.getDomainReportingEnabled = function() {
                return !!this.getOptions().dynamic_values
            };
            t.prototype.getDomainExcludedContent = function() {
                return (this.getOptions().excluded_content || []).map((function(t) {
                    return r.convertStringEnums(t)
                }))
            };
            t.prototype.getExcludedPaths = function() {
                return this.getOptions().excluded_paths || []
            };
            t.prototype.getExcludedUrls = function() {
                return this.getOptions().excluded_urls || []
            };
            t.prototype.getDomainIncludedContent = function() {
                return this.getOptions().included_content || []
            };
            t.prototype.getWidgetDisplayType = function() {
                return this.getOptions().type
            };
            t.prototype.getLangPath = function() {
                return this.getOptions().lang_path
            };
            t.prototype.useGenericLangWord = function() {
                return this.getOptions().use_generic_lang_word
            };
            t.prototype.genericLangWord = function() {
                return this.getOptions().generic_lang_word
            };
            t.prototype.hideLogo = function() {
                return this.getOptions().hide_logo
            };
            t.prototype.showTranslatedByMachine = function() {
                return this.getOptions().show_tbm
            };
            t.prototype.autoHideWidget = function() {
                return this.getOptions().auto_hide_widget
            };
            t.prototype.canShowCustomWidgets = function() {
                return "widget" !== this.getWidgetDisplayType()
            };
            t.prototype.useMachineTranslatedModal = function() {
                return !!this.getOptions().show_machine_translated_modal
            };
            t.prototype.getMachineTranslatedModalContent = function() {
                return this.getOptions().machine_translated_modal_content || {}
            };
            t.prototype.getCss = function() {
                return this.getOptions().css || {}
            };
            t.prototype.reportLotRatio = function() {
                var t = this.getOptions().report_lot_ratio;
                t || 0 === t || (t = 1);
                return t
            };
            t.prototype.dynamicLoading = function(t) {
                return a(!!this.getOptions().dynamic_loading, t.get(), this)
            };
            t.prototype.useUnifiedValue = function() {
                return this.hasFeature("unified_values")
            };
            t.prototype.useLiveEditorParameterOnQuery = function() {
                return this.getOptions().live_editor_parameter_on_query
            };
            t.prototype.hasSupervisedDomainFeature = function() {
                return !!this.getOptions().supervised_domain
            };
            t.prototype.canTranslateCssBackgroundImages = function() {
                var t = this.getOptions().translate_css_background_images;
                return void 0 === t || t
            };
            t.prototype.getHostAliases = function() {
                return this.getOptions().host_aliases || []
            };
            t.prototype.getRawHostAliases = function() {
                return this.getOptions().raw_host_aliases || []
            };
            t.prototype.getCustomAttributes = function() {
                return this.getOptions().custom_attributes || {}
            };
            t.prototype.getCustomBlockTags = function() {
                return this.getOptions().custom_block_tags || []
            };
            t.prototype.getCustomBlockClasses = function() {
                return this.getOptions().custom_block_classes || []
            };
            t.prototype.canInstallWap = function(t) {
                return a(!this.getOptions().disable_wap, t.get(), this)
            };
            t.prototype.canUseXhrWidgetSession = function() {
                return this.hasFeature("widget_session_xhr_auth") && "https:" === window.location.protocol
            };
            return t
        }();
    e.DomainOptionsWrapper = i;

    function a(t, e, n) {
        return n.hasFeature("widget_data_collection_cookie_optin") ? !!e : 0 != e && t
    }
    e.isCookieSettingEnabled = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DebugSettings = e.WovnHashes = void 0;
    e.WovnHashes = {
        HALT_REPORTING: "wovn.haltReporting",
        FORCE_REPORTING: "wovn.forceReporting",
        DISABLE_AUDIT: "wovn.disableAudit",
        DISABLE_WIDGET: "wovn.disableWidget",
        DISABLE_NAVIGATION: "wovn.disableNavigation"
    };
    var o = function() {
        function t(t) {
            this.browserLocation = t
        }
        Object.defineProperty(t.prototype, "haltReporting", {
            get: function() {
                return this.hasHash(e.WovnHashes.HALT_REPORTING)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "forceReporting", {
            get: function() {
                return this.hasHash(e.WovnHashes.FORCE_REPORTING)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "disableAudit", {
            get: function() {
                return this.hasHash(e.WovnHashes.DISABLE_AUDIT)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "disableWidget", {
            get: function() {
                return this.hasHash(e.WovnHashes.DISABLE_WIDGET)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "useCreeper", {
            get: function() {
                return /wovn\-activated=true/.test(this.browserLocation.search)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "disableNavigation", {
            get: function() {
                return this.hasHash(e.WovnHashes.DISABLE_NAVIGATION)
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.hasHash = function(t) {
            return new RegExp(t).test(this.browserLocation.hash)
        };
        return t
    }();
    e.DebugSettings = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LiveEditorSettings = e.LiveEditorHashes = void 0;
    var r = o(n(18)),
        i = /wovn\.editing=([A-Za-z0-9-_?=]+)&?/i,
        a = /wovn\.targetLang=([^&]*)&?/i,
        s = /wovn\.widgetLang=([^&]*)&?/i;
    e.LiveEditorHashes = {
        TARGET_LANG: "wovn.targetLang",
        EDITING: "wovn.editing",
        WIDGET_LANG: "wovn.widgetLang"
    };
    var u = function() {
        function t(t, e) {
            this.initialBrowserUrl = t;
            this.domainOptions = e
        }
        Object.defineProperty(t.prototype, "isEnabled", {
            get: function() {
                return !!this.session
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "session", {
            get: function() {
                return this.readParamValueFromBrowserUrl(i)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "targetLangCode", {
            get: function() {
                return this.readParamValueFromBrowserUrl(a)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "widgetLangCode", {
            get: function() {
                return this.readParamValueFromBrowserUrl(s)
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.readParamValueFromBrowserUrl = function(t) {
            var e = this.initialBrowserUrl.match(t) || location.href.match(t);
            return e && e[1] ? e[1] : ""
        };
        t.prototype.removeSettingsFromUrl = function(t) {
            return t.replace(i, "").replace(a, "").replace(s, "").replace(/(#|\?|&)$/, "")
        };
        t.prototype.updateBrowserUrlState = function(t, n, o) {
            void 0 === o && (o = "");
            var i = e.LiveEditorHashes.TARGET_LANG + "=" + n + "&" + e.LiveEditorHashes.EDITING + "=" + t + "&" + e.LiveEditorHashes.WIDGET_LANG + "=" + o;
            if (this.domainOptions.useLiveEditorParameterOnQuery() && r.default.supportsHistoryApi()) {
                var a = this.removeSettingsFromUrl(location.search),
                    s = a ? a + "&" + i : "?" + i;
                history.pushState({
                    wovn: "live_edit"
                }, "", s)
            } else {
                var u = this.removeSettingsFromUrl(location.hash);
                location.hash += u ? "&" + i : i
            }
        };
        t.prototype.removeSettingsFromBrowserUrlState = function() {
            var t = this.removeSettingsFromUrl(window.location.href);
            r.default.supportsHistoryApi() ? history.pushState(null, "", t) : location.replace(t)
        };
        return t
    }();
    e.LiveEditorSettings = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e, n, o) {
            this.label = t;
            this.node = e;
            this.isClose = n;
            this.textNormalizer = o
        }
        Object.defineProperty(t.prototype, "normalizedSrc", {
            get: function() {
                return this.textNormalizer.normalizeText(this.src)
            },
            enumerable: !1,
            configurable: !0
        });
        return t
    }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.OnDemandTranslator = e.isOnDemandTranslationIgnoreNode = void 0;
    var r = o(n(22)),
        i = n(7),
        a = "wovn-on-demand",
        s = "wovn-on-demand-trigger",
        u = "wovn-on-demand-source",
        l = "wovn-on-demand-result";
    e.isOnDemandTranslationIgnoreNode = function(t) {
        return i.hasWovnAttribute(t, l) || i.hasWovnAttribute(t, u)
    };
    var c = function() {
        function t(t, e) {
            this.domainOptions = t;
            this.onDemandTranslationController = e
        }
        t.prototype.bindOdtClickEvent = function(t) {
            var e = this;
            if (this.isOnDemandTranslationActive() && i.isElement(t) && this.isValidOdtElement(t)) {
                t.querySelector("[" + s + "], [data-" + s + "]").onclick = function(t) {
                    return e.onTriggerClick(t)
                }
            }
        };
        t.prototype.isValidOdtElement = function(t) {
            return i.hasWovnAttribute(t, a) && t.querySelectorAll("[" + u + "], [data-" + u + "]").length > 0 && t.querySelectorAll("[" + s + "], [data-" + s + "]").length > 0 && t.querySelectorAll("[" + l + "], [data-" + l + "]").length > 0
        };
        t.prototype.onTriggerClick = function(t) {
            var e = this;
            t.stopPropagation();
            t.preventDefault();
            t.target.setAttribute("disabled", !0);
            var n = this.getOdtContainer(t.target);
            if (n) {
                var o = n.querySelector("[" + u + "], [data-" + u + "]"),
                    i = r.default.c("Lang").getActualLang();
                this.translateNode(o, i).then((function(o) {
                    e.insertTranslationResult(n, o);
                    t.target.removeAttribute("disabled")
                })).catch((function() {
                    t.target.removeAttribute("disabled")
                }))
            }
        };
        t.prototype.getOdtContainer = function(t) {
            if (!this.isOnDemandTranslationActive()) return null;
            for (var e = t.parentElement; e;) {
                if (i.hasWovnAttribute(e, a)) return e;
                e = e.parentElement
            }
        };
        t.prototype.getOdtResultNode = function(t) {
            var e = t.querySelector("[" + l + "], [data-" + l + "]");
            e.setAttribute("style", "");
            return e
        };
        t.prototype.insertTranslationResult = function(t, e) {
            var n = this.getOdtResultNode(t);
            n.innerHTML = e[0].dst;
            n.focus()
        };
        t.prototype.clearOdtResults = function() {
            if (this.isOnDemandTranslationActive())
                for (var t = document.querySelectorAll("[" + l + "], [data-" + l + "]"), e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.innerHTML = "";
                    n.setAttribute("style", "display: none")
                }
        };
        t.prototype.translateNode = function(t, e) {
            if (this.isOnDemandTranslationActive()) {
                var n = [t.innerHTML.replace(/(<\w+)(\s+?)[^>]*/g, "$1")];
                return this.translateTexts(n, e)
            }
        };
        t.prototype.isOnDemandTranslationActive = function() {
            return this.domainOptions.hasFeature("on_demand_translation")
        };
        t.prototype.translateTexts = function(t, e) {
            if (e && t && t.length > 0) return this.onDemandTranslationController.translateTexts(t, e).then((function(t) {
                return t.body.translations
            }))
        };
        return t
    }();
    e.OnDemandTranslator = c
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.createInstantTranslationIgnoreNodeFilter = e.findInstantTranslationNodes = e.isInstantTranslationElement = void 0;
    var r = n(56),
        i = n(7),
        a = o(n(0)),
        s = n(14);
    e.isInstantTranslationElement = function(t) {
        return i.hasWovnAttribute(t, "wovn-instant-translation")
    };
    e.findInstantTranslationNodes = function(t) {
        return a.default.toArrayFromDomList(t.querySelectorAll("[wovn-instant-translation], [data-wovn-instant-translation]") || [])
    };
    e.createInstantTranslationIgnoreNodeFilter = function(t) {
        return function(e) {
            return i.isHTMLElement(e) ? r.isElementIgnored(e, t) : s.IgnoreType.None
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e, n, o) {
            void 0 === o && (o = !1);
            this.xpath = t;
            this.element = e;
            this.ignoreType = n;
            this.isThirdParty = o;
            this._nodeName = null;
            this._computedStyle = null;
            this._backgroundImageProperty = null
        }
        Object.defineProperty(t.prototype, "style", {
            get: function() {
                return this.element.style
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.hasAttribute = function(t) {
            return this.element.hasAttribute(t)
        };
        t.prototype.getAttribute = function(t) {
            return this.element.getAttribute(t)
        };
        t.prototype.setAttribute = function(t, e) {
            this.element.setAttribute(t, e)
        };
        Object.defineProperty(t.prototype, "nodeName", {
            get: function() {
                this._nodeName || (this._nodeName = this.element.nodeName);
                return this._nodeName
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "computedStyle", {
            get: function() {
                this._computedStyle || (this._computedStyle = window.getComputedStyle(this.element));
                return this._computedStyle
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "backgroundImageProperty", {
            get: function() {
                null === this._backgroundImageProperty && (this._backgroundImageProperty = this.computedStyle.getPropertyValue("background-image"));
                return this._backgroundImageProperty
            },
            enumerable: !1,
            configurable: !0
        });
        return t
    }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.UnifiedValueTranslationRepository = e.UnifiedValueTranslationType = void 0;
    var r, i = o(n(0));
    ! function(t) {
        t.PlainText = "text";
        t.Html = "html";
        t.PageSpecificHtml = "page_html"
    }(r = e.UnifiedValueTranslationType || (e.UnifiedValueTranslationType = {}));
    var a = function() {
        function t(t) {
            this.valuesStackGenerator = t;
            this._isLoaded = !1;
            this.textVals = {};
            this.htmlTextVals = {};
            this.pageTextVals = {};
            this.parsedTextVals = {};
            this.parsedHtmlTextVals = {};
            this.parsedPageTextVals = {}
        }
        t.prototype.clear = function() {
            this._isLoaded = !1;
            this.textVals = {};
            this.htmlTextVals = {};
            this.pageTextVals = {};
            this.parsedTextVals = {};
            this.parsedHtmlTextVals = {};
            this.parsedPageTextVals = {}
        };
        Object.defineProperty(t.prototype, "isEmpty", {
            get: function() {
                return 0 === Object.keys(this.textVals).length && 0 === Object.keys(this.htmlTextVals).length && 0 === Object.keys(this.pageTextVals).length
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "isLoaded", {
            get: function() {
                return this._isLoaded
            },
            enumerable: !1,
            configurable: !0
        });
        t.prototype.loadTranslationData = function(t, e) {
            this.textVals = i.default.assign({}, this.textVals, t.textVals, e.text_vals);
            this.htmlTextVals = i.default.assign({}, this.htmlTextVals, t.htmlTextVals, e.html_text_vals);
            this.pageTextVals = i.default.assign({}, this.pageTextVals, t.pageTextVals, e.page_text_vals);
            this.parseUnifiedValues();
            this._isLoaded = !0
        };
        t.prototype.copyTo = function(t) {
            t.updateTextTranslations(this.textVals, this.htmlTextVals, this.pageTextVals)
        };
        t.prototype.parseUnifiedValues = function() {
            var t = this;
            this.parsedTextVals = this.mapServerTranslationHash(this.textVals, (function(e) {
                var n = t.valuesStackGenerator.createValuesStackFromText(e);
                n.is_html = !1;
                n.is_page_translation = !1;
                return n
            }));
            this.parsedHtmlTextVals = this.mapServerTranslationHash(this.htmlTextVals, (function(e) {
                var n = t.valuesStackGenerator.createValuesStackFromHtml(e);
                n.is_html = !0;
                n.is_page_translation = !1;
                return n
            }));
            this.parsedPageTextVals = this.mapServerTranslationHash(this.pageTextVals, (function(e) {
                var n = t.valuesStackGenerator.createValuesStackFromHtml(e);
                n.is_html = !0;
                n.is_page_translation = !0;
                return n
            }))
        };
        t.prototype.getTranslationHash = function(t) {
            switch (t) {
                case r.PlainText:
                    return this.textVals;
                case r.Html:
                    return this.htmlTextVals;
                case r.PageSpecificHtml:
                    return this.pageTextVals
            }
        };
        t.prototype.addTranslation = function(t, e, n, o) {
            var r = this.getTranslationHash(o),
                i = r[t];
            i || (i = r[t] = {});
            var a = i[n];
            a ? a[0].data = e : i[n] = [{
                data: e
            }];
            this.parseUnifiedValues()
        };
        t.prototype.findTranslation = function(t, e) {
            var n = function(t, e) {
                return e[t] || {}
            };
            return n(e, this.parsedPageTextVals)[t] || n(e, this.parsedHtmlTextVals)[t] || n(e, this.parsedTextVals)[t]
        };
        t.prototype.hasTranslation = function(t, e) {
            return void 0 !== this.findTranslation(t, e)
        };
        t.prototype.mapServerTranslationHash = function(t, e) {
            var n = {};
            for (var o in t) {
                var r = t[o];
                for (var i in r) {
                    n[i] = n[i] || {};
                    var a = r[i][0],
                        s = e(a.data || "");
                    s.created_at = a.created_at;
                    s.published_dst = a.published_dst;
                    n[i][o] = s
                }
            }
            return n
        };
        return t
    }();
    e.UnifiedValueTranslationRepository = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isWovnUrlChangedHistoryState = void 0;
    var o = n(8),
        r = n(5),
        i = n(47);
    e.isWovnUrlChangedHistoryState = function(t) {
        return t && "string" == typeof t.wovn
    };
    e.default = function(t, e, n, a) {
        var s = !1;
        this.reset = function() {
            s = !1
        };
        var u = {
            urlPattern: null
        };
        this.getOptions = function() {
            if (s) return u;
            var e = t.c("Data"),
                n = t.getBackendUrlPattern();
            if (null != n) {
                u.urlPattern = n;
                s = !0
            } else {
                var o = e.domainOptions.getLangPath();
                if (o) {
                    switch (o) {
                        case "query":
                            u.urlPattern = "query"
                    }
                    s = !0
                }
            }
            return u
        };
        this.setOptions = function(t) {
            var e = this.getOptions();
            for (var n in t) e.hasOwnProperty(n) && (e[n] = t[n])
        };
        this.getLangCode = function(o) {
            o = r.parseUrl(o || location.href).href;
            var i, a = null,
                s = null;
            switch (this.getOptions().urlPattern) {
                case "query":
                    var u = e.langParamName;
                    i = new RegExp("((\\?.*&)|\\?)" + u + "=([^#&]+)(#|&|$)");
                    s = (a = o.match(i)) ? a[3] : null;
                    break;
                case "hash":
                    u = e.langParamName;
                    i = new RegExp("((\\#.*&)|\\#)" + u + "=([^&]+)(&|$)");
                    s = (a = o.match(i)) ? a[3] : null;
                    break;
                case "subdomain":
                    i = new RegExp("://([^.]+).");
                    s = (a = o.match(i)) ? a[1] : null;
                    break;
                case "custom_domain":
                    s = t.c("CustomDomainUrlHandler").getLanguage(o);
                    break;
                case "path":
                    var l = e.sitePrefixPath;
                    i = l ? new RegExp("(://[^/]+|^)/" + l + "/([^/#?]+)") : new RegExp("(://[^/]+|^)/([^/#?]+)");
                    s = (a = o.match(i)) ? a[2] : null
            }
            var c = t.c("Lang");
            if (s) {
                var d = n.find(s);
                if (d && (!d.alias || s == d.displayLanguage)) return d.languageInfo.code
            }
            return c.getDefaultCodeIfExists()
        };
        this.getFlags = function(t) {
            var n = (t = t || location.href).match(/#[^?]*$/);
            n = n ? n[0] : "#";
            var o = e.langParamName,
                r = new RegExp("(^|#|&)" + o + "=([^#&]*)(&|#|$)"),
                i = n.match(r);
            return !i || i.length < 3 || "" === (i = i[2].replace(/,(,+)/g, ",").replace(/^,|,$/g, "")) ? [] : i.split(",")
        };
        this.hasFlag = function(t, e) {
            e = e || location.href;
            return -1 !== this.getFlags(e).indexOf(t)
        };
        this.getUrl = function(e, n, o) {
            n = n || location.href;
            var i = r.getProtocolOrDefault(n, location);
            if ("http" !== i && "https" !== i) return n;
            if (!o && r.isFilePathUri(n)) return n;
            var a = this.getLangCode(n),
                s = t.c("Lang").getCode(e),
                u = this.getOptions().urlPattern;
            return t.c("UrlFormatter").createFromUrl(n).getConvertedLangUrl(a, s, u)
        };
        this._isTranslatableHref = function(t) {
            var e = r.getProtocolOrDefault(t, location);
            return "http" !== e && "https" !== e ? null : !t.match(/\s*\{\{.+\}\}\s*$/) && !o.startsWith(t, "#")
        };
        this.langUrl = function(n, o, a) {
            void 0 === a && (a = "href");
            var s = o.getAttribute(a),
                u = this.getOptions();
            if (!u.urlPattern || !s || !this._isTranslatableHref(s)) return null;
            var l = t.c("Data"),
                c = r.parseUrl(s),
                d = r.parseUrl(this.getLocationWithoutBackendLanguage(c));
            if (this._isExcludedUrl(d, l.domainOptions.getExcludedPaths(), l.domainOptions.getExcludedUrls()) || r.isFilePathUri(s)) return i.urlPatternAffectsPath(e.urlPattern) && r.isRelativePath(s) || i.urlPatternAffectsDomain(e.urlPattern) && !r.isAbsoluteUrl(s) ? d : null;
            if (t.c("HostAliasMatcher").isMatch(c.host.toLowerCase()) || "subdomain" === u.urlPattern || "custom_domain" === u.urlPattern) {
                if ("" === s || s.match(/^[#?]/)) return null;
                s = c.protocol + "//" + c.host + c.pathname + c.search + c.hash;
                if ("subdomain" === u.urlPattern) {
                    if (c.host.toLowerCase() !== location.host.toLowerCase()) {
                        s = s.replace(new RegExp("://" + t.c("Lang").getLangIdentifier(this.getLangCode(s)) + "\\.", "i"), "://");
                        var p = r.parseUrl(s),
                            h = location.href.replace(new RegExp("://" + t.c("Lang").getLangIdentifier(this.getLangCode(location.href)) + "\\.", "i"), "://"),
                            g = r.parseUrl(h);
                        if (p.host.toLowerCase() !== g.host) return null
                    }
                } else if ("custom_domain" === u.urlPattern) {
                    if (!t.c("CustomDomainUrlHandler").getLanguage(s)) return null
                }
                return this.getUrl(n, s)
            }
            return null
        };
        this._isExcludedUrl = function(t, e, n) {
            return e.some((function(e) {
                return o.startsWith(t.pathname, e)
            }), this) || n.some((function(e) {
                return this._matchesExcludedUrl(e, t)
            }), this)
        };
        this._matchesExcludedUrl = function(e, n) {
            var o = r.parseUrl(e);
            return t.c("HostAliasMatcher").isMatch(n.toString()) && t.c("HostAliasMatcher").isMatch(e) && n.pathname === o.pathname
        };
        this.changeUrl = function(e) {
            if (!t.c("LiveEditorSettings").isEnabled && !a.disableNavigation) {
                var n = this.getUrl(e);
                try {
                    if (t.c("Data").domainOptions.isForceReloadEnabled()) throw new Error("dummy exception");
                    var o = window.history.state || {};
                    o.wovn = e;
                    window.history.replaceState(o, null, n)
                } catch (t) {
                    location.href = n
                }
            }
        };
        this.getEncodedLocation = function(e) {
            return t.getEncodedLocation(e)
        };
        this.getLocationWithoutBackendLanguage = function(e) {
            return t.getLocation(e)
        };
        this.getDomainPort = function(t) {
            return r.getHostWithPort(t)
        };
        this.shouldIgnoreLink = function(e) {
            if (t.isBackend()) {
                e = t.c("UrlFormatter").createFromUrl(e).getNormalizedPageUrl(t.isBackend(), t.getBackendUrlPattern())
            }
            var n = r.parseUrl(e).host;
            return !t.c("HostAliasMatcher").isMatch(n)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.findWovnSnippet = void 0;
    e.findWovnSnippet = function(t) {
        var e = t.querySelector("script[data-wovnio]");
        if (e) return e;
        for (var n = new RegExp("\\/\\/j\\.(dev-|staging[1-5]?-)?wovn\\.(io|com)"), o = t.querySelectorAll("script"), r = 0; r < o.length; r++)
            if (n.test(o[r].getAttribute("src"))) return o[r];
        return null
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.AuditTriggerEvents = e.AuditEventNames = void 0;
    var o = n(12);
    e.AuditEventNames = {
        AUDIT_STARTED: "wovnAuditStarted",
        AUDIT_COMPLETED: "wovnAuditCompleted"
    };
    var r = function() {
        function t() {
            this.auditStartedCallbacks = [];
            this.auditCompletedCallbacks = []
        }
        t.prototype.subscribe = function(t, n) {
            if (t) {
                this.auditStartedCallbacks.push(t);
                addEventListener(e.AuditEventNames.AUDIT_STARTED, t)
            }
            if (n) {
                this.auditCompletedCallbacks.push(n);
                addEventListener(e.AuditEventNames.AUDIT_COMPLETED, n)
            }
        };
        t.prototype.triggerAuditStarted = function(t) {
            this.auditStartedCallbacks.forEach((function(e) {
                return e({
                    auditNumber: t
                })
            }));
            o.triggerEvent(e.AuditEventNames.AUDIT_STARTED, {
                auditNumber: t
            })
        };
        t.prototype.triggerAuditCompleted = function(t) {
            this.auditCompletedCallbacks.forEach((function(e) {
                return e({
                    auditNumber: t
                })
            }));
            o.triggerEvent(e.AuditEventNames.AUDIT_COMPLETED, {
                auditNumber: t
            })
        };
        t.prototype.destroy = function() {
            for (var t = 0; t < this.auditStartedCallbacks.length; t++) removeEventListener(e.AuditEventNames.AUDIT_STARTED, this.auditStartedCallbacks[t]);
            for (t = 0; t < this.auditCompletedCallbacks.length; t++) removeEventListener(e.AuditEventNames.AUDIT_COMPLETED, this.auditCompletedCallbacks[t])
        };
        return t
    }();
    e.AuditTriggerEvents = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
            return (o = Object.assign || function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++) {
                    e = arguments[n];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                return t
            }).apply(this, arguments)
        },
        r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WebServiceExecutor = void 0;
    var i = n(4),
        a = r(n(26)),
        s = n(6),
        u = n(45),
        l = function() {
            function t() {
                this.defaultQueryParams = {
                    v: a.default.BUILD_HASH
                }
            }
            t.prototype.get = function(t, e, n, r) {
                void 0 === r && (r = !1);
                if (n === s.ContentType.JsonAsText) return this.sendWithRequestBody(t, "GET", e, n);
                e = o(o({}, this.defaultQueryParams), e);
                var i = this.addUrlParameters(t, e);
                return this.send(i, "GET", n, "", r)
            };
            t.prototype.post = function(t, e, n, o) {
                void 0 === o && (o = !1);
                return this.sendWithRequestBody(t, "POST", e, n, o)
            };
            t.prototype.sendWithRequestBody = function(t, e, n, o, r) {
                void 0 === r && (r = !1);
                var i = s.serializeRequestParameters(n, o),
                    a = this.addUrlParameters(t, this.defaultQueryParams);
                return this.send(a, e, o, i, r)
            };
            t.prototype.addUrlParameters = function(t, e) {
                var n = s.serializeRequestParameters(e, s.ContentType.FormUrlEncoded);
                return n ? t + "?" + n : t
            };
            t.prototype.send = function(t, e, n, o, r) {
                void 0 === r && (r = !1);
                return new i.Promise((function(i, a) {
                    var s;
                    if (window.XDomainRequest) {
                        (s = new window.XDomainRequest).onload = function() {
                            i({
                                body: s.responseText,
                                headers: {}
                            })
                        };
                        s.onerror = function() {
                            a({
                                body: s.responseText,
                                headers: {}
                            })
                        };
                        s.ontimeout = function() {
                            a({
                                body: "Request timed out",
                                headers: {}
                            })
                        }
                    } else {
                        (s = new XMLHttpRequest).withCredentials = r;
                        s.onreadystatechange = function() {
                            4 === s.readyState && (200 === this.status || 304 === this.status ? i({
                                body: s.responseText,
                                headers: u.readResponseHeaders(s)
                            }) : a({
                                body: s.responseText,
                                status: this.status,
                                headers: {}
                            }))
                        }
                    }
                    s.open(e, t, !0);
                    s.timeout = 6e4;
                    s.ontimeout = function() {
                        a({
                            body: "Request timed out",
                            headers: {}
                        })
                    };
                    s.setRequestHeader && s.setRequestHeader("Content-Type", n);
                    s.send(o)
                }))
            };
            return t
        }();
    e.WebServiceExecutor = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(14),
        r = function() {
            function t(t, e, n, o) {
                void 0 === n && (n = !1);
                void 0 === o && (o = []);
                this.headPath = t;
                this.index = e;
                this.isThirdParty = n;
                this.fragments = o;
                this.created_at = null;
                this.published_dst = "";
                this.is_page_translation = !1;
                this.is_html = !0
            }
            Object.defineProperty(t.prototype, "path", {
                get: function() {
                    if (this.headPath.match(/title$/)) return this.headPath;
                    var t = this.headPath + "/text()";
                    return 1 === this.index ? t : t + "[" + this.index + "]"
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.add = function(t) {
                0 === this.fragments.length && t.isClose || this.fragments.push(t)
            };
            Object.defineProperty(t.prototype, "src", {
                get: function() {
                    return this.unignoredFragments.map((function(t) {
                        return t.src
                    })).join("")
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "normalizedSrc", {
                get: function() {
                    return this.unignoredFragments.map((function(t) {
                        return t.normalizedSrc
                    })).join("")
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "wasPreviouslyTranslated", {
                get: function() {
                    var t = this.textFragments,
                        e = t.filter((function(t) {
                            return t.wasPreviouslyTranslated
                        }));
                    return e.length > 0 && e.length === t.length
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.isTextFragment = function(t) {
                return t.isText
            };
            Object.defineProperty(t.prototype, "translationDataSrcKey", {
                get: function() {
                    return this.unignoredFragments.map((function(t) {
                        return t.translationDataSrcKey
                    })).join("")
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "textFragments", {
                get: function() {
                    return this.unignoredFragments.filter(this.isTextFragment)
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "unignoredFragments", {
                get: function() {
                    return this.removeWovnIgnore(this.fragments)
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "lastFragment", {
                get: function() {
                    return this.fragments[this.fragments.length - 1]
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.removeWovnIgnore = function(t) {
                for (var e = [], n = 0; n < t.length; ++n) {
                    var r = t[n];
                    if (o.isContentIgnored(r.ignoreType)) {
                        e.push(r);
                        for (++n; n < t.length; ++n)
                            if (!(r = t[n]).isText) {
                                e.push(r);
                                break
                            }
                    } else e.push(r)
                }
                return e
            };
            t.prototype.hasText = function() {
                for (var t = 0, e = this.fragments; t < e.length; t++) {
                    if (e[t].isText) return !0
                }
                return !1
            };
            t.prototype.buildNextStack = function() {
                return new t(this.headPath, this.index + 1, this.isThirdParty)
            };
            return t
        }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function(t) {
        r(e, t);

        function e(e, n, o, r, i, a) {
            var s = t.call(this, e, n, r, a) || this;
            s.isOpen = o;
            s.ignoreType = i;
            return s
        }
        Object.defineProperty(e.prototype, "isText", {
            get: function() {
                return !1
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(e.prototype, "src", {
            get: function() {
                return this.label
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(e.prototype, "translationDataSrcKey", {
            get: function() {
                return this.src
            },
            enumerable: !1,
            configurable: !0
        });
        return e
    }(i(n(68)).default);
    e.default = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.hasClosingTag = void 0;
    var r = o(n(153)),
        i = o(n(2)),
        a = r.default;
    e.hasClosingTag = function(t) {
        return !i.default.includes(r.default.emptyElements, t)
    };
    e.default = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.normalizeLinkTranslationsEncoding = void 0;
    e.normalizeLinkTranslationsEncoding = function(t) {
        var e = {};
        for (var n in t) try {
            var o = decodeURIComponent(n).split("-lang=");
            e[o[0].toLowerCase() + "-lang=" + o[1]] = t[n]
        } catch (o) {
            e[n] = t[n]
        }
        return e
    }
}, , , , , , , , function(t, e, n) {
    t.exports = n(89)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(61);
    0;
    if (window._wovnIsQUnitTest) {
        null
    } else document.WOVNIO || o.widgetMain()
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(62),
        r = n(92),
        i = n(216),
        a = n(219);
    e.default = function(t, e, n, s, u, l, c) {
        var d = o.buildWovnContext(s),
            p = i.createClientLocation(window.location, s),
            h = new a.Widget(t, u);
        h.exposeComponentApi();
        r.buildGlobalComponents(h, l, c, t, d, u, p, e, n);
        h.tag = {
            html: s,
            getAttribute: function(t) {
                t = "string" == typeof t ? t : "";
                if (s.hasAttribute ? s.hasAttribute(t) : void 0 !== s[t]) return s.getAttribute(t);
                var e = new RegExp(t + "=([^&]*)", "i"),
                    n = (s.getAttribute("data-wovnio") || "").match(e);
                return n ? "false" !== n[1] && n[1] : ""
            }
        };
        return h
    }
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            t.deprecate = function() {};
            t.paths = [];
            t.children || (t.children = []);
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            });
            Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            });
            t.webpackPolyfill = 1
        }
        return t
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.buildGlobalComponents = void 0;
    var r = o(n(93)),
        i = o(n(63)),
        a = o(n(95)),
        s = o(n(97)),
        u = o(n(18)),
        l = n(98),
        c = o(n(101)),
        d = n(102),
        p = n(104),
        h = n(105),
        g = n(106),
        f = n(42),
        m = o(n(107)),
        v = n(108),
        y = o(n(0)),
        w = n(111),
        b = o(n(113)),
        _ = n(114),
        C = o(n(115)),
        S = o(n(116)),
        T = o(n(117)),
        L = o(n(118)),
        E = n(119),
        x = n(120),
        O = n(121),
        A = o(n(128)),
        P = o(n(129)),
        k = o(n(130)),
        D = o(n(73)),
        N = o(n(131)),
        I = n(132),
        R = n(133),
        M = n(135),
        W = n(136),
        H = n(137),
        j = n(138),
        U = n(76),
        V = n(149),
        F = n(150),
        B = n(151),
        q = n(156),
        z = n(157),
        G = n(158),
        $ = n(67),
        J = n(159),
        Z = n(160),
        K = n(19),
        Y = n(165),
        X = o(n(166)),
        Q = n(167),
        tt = n(168),
        et = n(169),
        nt = o(n(170)),
        ot = n(171),
        rt = n(172),
        it = n(173),
        at = n(174),
        st = n(175),
        ut = n(176),
        lt = n(177),
        ct = o(n(48)),
        dt = n(180),
        pt = n(181),
        ht = n(182),
        gt = n(57),
        ft = n(183),
        mt = n(184),
        vt = o(n(185)),
        yt = n(187),
        wt = n(189),
        bt = n(191),
        _t = o(n(192)),
        Ct = n(193),
        St = n(54),
        Tt = n(194),
        Lt = n(195),
        Et = n(196),
        xt = n(197),
        Ot = n(198),
        At = n(199),
        Pt = n(203),
        kt = n(75),
        Dt = n(204),
        Nt = n(205),
        It = n(206),
        Rt = n(207),
        Mt = n(69),
        Wt = n(209),
        Ht = n(210),
        jt = n(211),
        Ut = n(212),
        Vt = n(58),
        Ft = n(213),
        Bt = n(214),
        qt = n(65),
        zt = n(72),
        Gt = n(215);
    e.buildGlobalComponents = function(t, e, n, o, $t, Jt, Zt, Kt, Yt) {
        0;
        var Xt = new Bt.PageDataWrapper,
            Qt = new qt.DomainOptionsWrapper,
            te = new d.Data(Xt, Qt),
            ee = K.createCookieStore(Qt, e, n),
            ne = new p.LangCookie(ee),
            oe = new Y.UuidCookie(ee),
            re = new It.AutoTriggerReportCookie(ee),
            ie = new Ht.ReportingOptOutCookie(ee),
            ae = new Wt.WapOptOutCookie(ee),
            se = new jt.DynamicLoadingOptOutCookie(ee);
        o.AutoTriggerReportCookie = re;
        var ue = new U.WebServiceExecutor,
            le = new V.TextNormalizer,
            ce = new G.PageDataSanitizer,
            de = new ut.LanguageAliases(Jt, ct.default),
            pe = new lt.SupportedLanguages(ct.default, de),
            he = new et.WidgetPreview(ee),
            ge = new kt.AuditTriggerEvents,
            fe = new C.default(t, $t, Jt),
            me = new T.default(fe),
            ve = new l.AuditTrigger(e.documentElement, me, Kt, ge),
            ye = new b.default(Jt, $t),
            we = new vt.default(he),
            be = new f.PerformanceMonitor(ee),
            _e = new $.LiveEditorSettings(Yt, Qt),
            Ce = new D.default(t, Jt, pe, Kt),
            Se = new v.UrlFormatterFactory(Ce),
            Te = new w.SrcSetUtils(Se),
            Le = new wt.NodeTypeSolverFactory(te),
            Ee = new A.default(t, Ce),
            xe = new yt.BrowserLanguageProvider(te, window.navigator),
            Oe = new Ut.OnDemandTranslationController(this.wovnContext, this.serviceExecutor, this.projectToken),
            Ae = new Mt.OnDemandTranslator(Qt, Oe),
            Pe = new r.default(ne, Jt, pe, de, xe, te, Ae),
            ke = new c.default(te),
            De = new S.default(Jt.token, $t, te, ae),
            Ne = new Dt.SessionProxyHttpRequestExecutor(ye),
            Ie = new Vt.ReportStatusMonitor,
            Re = new j.ServerControllerFactory(te, Jt.token, $t, ue, Ce, Zt, t, oe, Pe, _e, Ne, Ie),
            Me = new Q.ErrorReporter(Jt, t, Re.api),
            We = new m.default(Jt, Me),
            He = new g.PageChecker(Re.pageNotFound),
            je = new h.InSiteSearcher(Re.inSiteSearch),
            Ue = new _.WidgetSessionManager(te, Re, ye),
            Ve = new at.GenericCache,
            Fe = new ht.NormalPageDataLoader(ce, Re.widgetData),
            Be = new st.LiveEditorPageDataLoader(Me, Re.liveEditor),
            qe = new Ft.PreviewPageDataLoader(ce, he, Re.widgetData),
            ze = new rt.SwitchingPageDataLoader(_e, he, Ue, Fe, qe, Be, te),
            Ge = new mt.CancellingPageDataLoader(ze),
            $e = new ot.CachedPageDataLoader(t, Ge, Ve),
            Je = new it.DomainOptionsLoader(Re.widgetData, new Ct.DomainOptionsSanitizer),
            Ze = new ft.PerformanceMonitoringDataLoader(new tt.DataLoader(te, $e, Je, Ue, he, _e), be),
            Ke = new I.CustomDomAccessor,
            Ye = new Nt.WovnElementFilter,
            Xe = new Et.SupervisedContent(te, Ye);
        o.SupervisedContent = Xe;
        o.ReportHelper = function() {
            return new Rt.ReportHelper(te, Kt, Pe, re, Jt, u.default, y.default, Re, Xe, _e, $t, Ce, ie)
        };
        var Qe = new P.default(t, te, le, je, Re.instantTranslation, _e, ve, Pe, ee),
            tn = new nt.default(te, Qe, t, Ye, $t);
        ! function(t, e, n) {
            var o = window;
            o.WOVN = {
                io: e
            };
            o.WOVN.io._private = {
                widget: t,
                isApiReady: function() {
                    return e.isApiReady()
                },
                diagnostics: n
            };
            o.WOVN.io.internal = n;
            o.Wovnio = o.WOVN.io
        }(t, Qe, tn);
        var en = new a.default(Pe, _e, Ue),
            nn = new At.ReportValuesButtonBuilder(tn, fe, re, Ie),
            on = new k.default(t, te, Pe, ke, u.default, be, fe, He, Ce, _e, en, we, xe, nn, Ye, tn),
            rn = new x.SwapIntercom(Pe, on),
            an = new L.default(e.documentElement, ve, ge),
            sn = new dt.WidgetInit(t, te, Pe, ke, be, We, Qe, an, ve, Ee, fe, Ue, De, me, Ce, Ze, he, Ve, _e, on, rn, ee),
            un = Jt.isShopify ? new bt.ShopifyWidgetInit(sn, Pe, new _t.default) : sn,
            ln = new Pt.DomTraversalParsableNodeFilterProvider;
        o.Cookie = ee;
        o.ErrorReporter = Me;
        o.LangCookie = ne;
        o.PerformanceMonitor = be;
        o.WovnContext = $t;
        o.SnippetSettings = Jt;
        o.TextNormalizer = le;
        o.ValuesStackBalancer = function() {
            return new pt.ValuesStackBalancer(le, t.c("UnifiedValueComments"))
        };
        o.ValuesStackGenerator = function() {
            return new Tt.ValuesStackGenerator(le, t.c("UnifiedValueComments"))
        };
        o.Utils = y.default;
        o.WapInstaller = De;
        o.LiveEditorSettings = _e;
        o.DomAuditor = function() {
            return new E.DomAuditor(t, ve, t.c("ReportHelper"), be, se)
        };
        o.UnifiedValueComments = function() {
            return Qt.hasFeature("all_text_translation_into_text_vals") ? new St.LegacyWovnphpUnifiedValueComments : new St.UnifiedValueComments
        };
        o.DomTraversalParsableNodeFilterProvider = ln;
        o.DomTraversalFactory = function() {
            return new B.DomTraversalFactory(t, le, Le, te, t.c("UnifiedValueComments"), ln, Ae)
        };
        o.UnifiedValueTranslationRepository = function() {
            return new zt.UnifiedValueTranslationRepository(t.c("ValuesStackGenerator"))
        };
        o.UnifiedValue = function() {
            var e = new X.default(Qt),
                n = t.c("UnifiedValueTranslationRepository"),
                o = new Gt.ImageTranslationRepository(t.c("HostAliasMatcher")),
                r = new z.TranslationChangeDetector(n);
            return new O.UnifiedValue(t, te, Te, e, le, Re.instantTranslation, Jt, t.c("ValuesStackBalancer"), t.c("DomTraversalFactory"), t.c("UnifiedValueComments"), t.c("ValuesStackGenerator"), t.c("ReportHelper"), Pe, r, Se, t.c("TranslationDataBridge"), Ce, _e, n, o)
        };
        o.Api = Qe;
        o.SPA = Ee;
        o.HistoryApiListener = function() {
            return {
                captureHistoryStateChanges: gt.captureHistoryStateChanges
            }
        };
        o.Interface = on;
        o.WidgetInit = un;
        o.Url = Ce;
        o.NodeContainer = i.default;
        o.Agent = u.default;
        o.Data = te;
        o.PageData = Xt;
        o.DomainOptions = Qt;
        o.Lang = Pe;
        o.CustomDomainUrlHandler = function() {
            var t = Z.deserializeCustomDomainLanguages(Jt.customDomainLangs);
            return new J.CustomDomainUrlHandler(t, Pe)
        };
        o.PageChecker = He;
        o.Storage = function() {
            if (Qt.hasFeature("disable_storage_for_translation_data")) {
                Lt.getSessionStorage().removeItem("__wovn__.TranslationStore");
                Lt.getLocalStorage().removeItem("__wovn__.TranslationStore");
                return new F.WovnStorage(new Lt.NullStorage)
            }
            Lt.getLocalStorage().removeItem("__wovn__.TranslationStore");
            return new F.WovnStorage(Lt.getSessionStorage())
        };
        o.TranslationDataBridge = function() {
            return new s.default(te, t.c("Storage"))
        };
        o.UrlFormatter = Se;
        o.ExternalComponentLoader = fe;
        o.SessionProxy = ye;
        o.AuditTrigger = ve;
        o.DomTraversal = function() {
            return t.c("DomTraversalFactory").create()
        };
        o.HostAliasMatcher = function() {
            return new q.HostAliasMatcher(Qt.getHostAliases())
        };
        o.DynamicLoadingManager = function() {
            return new N.default(Re.dynamicLoading, te, t.c("UnifiedValue"), an)
        };
        o.LinkTranslationsManager = function() {
            var e = new Ot.LinkTranslationsRepository(te, t.c("HostAliasMatcher"));
            return new xt.LinkTranslationsManager(t, Se, e)
        };
        o.CustomDomAccessor = Ke;
        o.SrcChildTextContentExtractor = function() {
            return new M.SrcChildTextContentExtractor(Ke, t.c("UnifiedValueComments"))
        };
        o.PropertyValueTranslationRepository = function() {
            return new H.PropertyValueTranslationRepository(Xt.getPropertyValues(), new W.BestPropertyValueSelector(Ke, t.c("SrcChildTextContentExtractor"), le))
        };
        o.PropertyValueSwapper = function() {
            return new R.PropertyValueSwapper(t.c("PropertyValueTranslationRepository"))
        };
        o.WovnElementFilter = Ye
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(22)),
        i = o(n(18)),
        a = o(n(0)),
        s = n(94),
        u = n(4),
        l = null,
        c = null,
        d = !1,
        p = null,
        h = !1,
        g = function() {
            function t(t, e, n, o, r, i, a) {
                this.langCookie = t;
                this.snippetSettings = e;
                this.supportedLanguages = n;
                this.languageAliases = o;
                this.browserLanguageProvider = r;
                this.data = i;
                this.onDemandTranslator = a;
                this.convertedCodes = null;
                l = null;
                c = null;
                d = !1;
                p = null
            }
            t.prototype.get = function(t) {
                var e = this.supportedLanguages.find(t);
                return e ? e.languageInfo : null
            };
            t.prototype.iso6391Normalization = function(t) {
                return t.replace(/zh-CHT/i, "zh-Hant").replace(/zh-CHS/i, "zh-Hans")
            };
            t.prototype.getCode = function(t) {
                var e = this.get(t);
                return e && e.code
            };
            t.prototype.clearDocLang = function() {
                p = null;
                this.convertedCodes = null
            };
            t.prototype.hasAlias = function(t) {
                return null != this.languageAliases.findAlias(t)
            };
            t.prototype.setDefaultCodeAndRecomputeSecondaryCode = function(t) {
                l = t;
                c = this.computeSecondaryCode()
            };
            t.prototype.getDefaultCodeIfExists = function() {
                l || (l = (l = this.snippetSettings.isBackend && this.snippetSettings.defaultLang) || this.data.pageData.getLang());
                return l
            };
            t.prototype.getSecondaryCode = function() {
                null === c && (c = this.computeSecondaryCode());
                return c
            };
            t.prototype.computeSecondaryCode = function() {
                var t = this.data.domainOptions.getSecondaryLang(),
                    e = this.data.getTranslatableLangs();
                t && -1 !== e.indexOf(t) || (t = this.getDefaultCodeIfExists());
                return t
            };
            t.prototype.missingAutoTranslateLangs = function() {
                var t = this.data.getTranslatableLangs(),
                    e = this.data.domainOptions.getAutoTranslateLangs();
                return a.default.setComplement(e, t).length > 0
            };
            t.prototype.missingAutoPublishLangs = function() {
                var t = this.data.getTranslatableLangs(),
                    e = this.data.domainOptions.getAutoPublishLangs();
                return a.default.setComplement(e, t).length > 0
            };
            t.prototype.isNeedChangeUrlForSetDocLang = function(t) {
                return !this.data.domainOptions.hasFeature("no_automatic_redirection") && (("query" === this.data.domainOptions.getLangPath() || this.snippetSettings.isBackend && null != this.snippetSettings.urlPattern) && r.default.c("Url").getLangCode() !== t)
            };
            t.prototype.isNeedChangeUrlForSetDocLangWithoutSwap = function(t) {
                return !this.data.domainOptions.hasFeature("no_automatic_redirection") && (("query" === this.data.domainOptions.getLangPath() || this.snippetSettings.isBackend && null != this.snippetSettings.urlPattern) && r.default.c("Url").getLangCode() !== t)
            };
            t.prototype.setDocLang = function(t) {
                var e = this;
                return new u.Promise((function(n, o) {
                    var i = e.getCurrentLang();
                    t = t || e.getDocLang();
                    var s = e.data.getTranslatableLangs();
                    if (!1 !== a.default.includes(s, t)) {
                        if (e.data.pageData.hasPublishedLang()) {
                            e.setHtmlLangAttribute(t);
                            e.langCookie.set(t)
                        }
                        e.data.domainOptions.hasFeature("final_fv_project") || r.default.c("DomAuditor").supervisedSwapVals(t);
                        e.isNeedChangeUrlForSetDocLang(t) && r.default.c("Url").changeUrl(t);
                        p = t;
                        d = !0;
                        e.onDemandTranslator.clearOdtResults();
                        i !== t ? setTimeout((function() {
                            r.default.c("Api").dispatchLangChangedEvent();
                            n()
                        }), 0) : n()
                    } else n()
                }))
            };
            t.prototype.setHtmlLangAttribute = function(t) {
                document.getElementsByTagName("html")[0].setAttribute("lang", this.iso6391Normalization(t))
            };
            t.prototype.getCurrentLang = function() {
                return d ? this.getDocLang() : this.getDefaultCodeIfExists()
            };
            t.prototype.setDocLangWithoutSwap = function(t) {
                var e = this.getCurrentLang();
                t = t || this.getDocLang();
                var n = this.data.getTranslatableLangs();
                if (!1 !== a.default.includes(n, t)) {
                    this.data.pageData.hasPublishedLang() && this.setHtmlLangAttribute(t);
                    this.isNeedChangeUrlForSetDocLangWithoutSwap(t) && r.default.c("Url").changeUrl(t);
                    this.data.pageData.hasPublishedLang() && this.langCookie.set(t);
                    p = t;
                    e !== t && setTimeout((function() {
                        r.default.c("Api").dispatchLangChangedEvent()
                    }), 0);
                    d = !0
                }
            };
            t.prototype.isValidLangCode = function(t) {
                if (null === t) return !1;
                if (t === this.getDefaultCodeIfExists()) return !0;
                if (!this.convertedCodes) {
                    this.convertedCodes = {};
                    for (var e = this.data.pageData.getConvertedLangs(), n = 0; n < e.length; n++) this.convertedCodes[e[n].code] = !0
                }
                return this.convertedCodes[t] || !1
            };
            t.prototype.getActualLang = function() {
                return d ? this.getDocLang() : this.snippetSettings.isBackend && this.isValidLangCode(this.snippetSettings.currentLang) ? this.snippetSettings.currentLang : this.getDefaultCodeIfExists()
            };
            t.prototype.ignoreBackendLang = function() {
                h = !0
            };
            t.prototype._getDocLang = function() {
                var t = this.getDefaultCodeIfExists(),
                    e = this.getSecondaryCode(),
                    n = this.langCookie.get(),
                    o = !!n,
                    a = r.default.c("Url").getLangCode(),
                    s = this.browserLanguageProvider.getLanguage(),
                    u = !r.default.c("DomainOptions").hasFeature("ignore_browser_lang") && !o && null != s;
                if (i.default.isWovnCrawler() || i.default.isDataHighlighter()) return this.snippetSettings.isBackend && this.isValidLangCode(a) ? a : t;
                if (this.snippetSettings.isBackend && !h) {
                    var l = this.snippetSettings.currentLang;
                    return r.default.c("DomainOptions").hasFeature("no_automatic_redirection") ? u ? s.code : l : u ? s.code : (l !== t || o) && this.isValidLangCode(l) ? l : e
                }
                return t !== a && this.isValidLangCode(a) ? a : this.isValidLangCode(n) ? n : u ? s.code : e
            };
            t.prototype.getDocLang = function() {
                return p || (p = this._getDocLang())
            };
            t.prototype.getLangIdentifier = function(t) {
                var e = this.supportedLanguages.find(t);
                return e ? e.displayLanguage : null
            };
            t.prototype.getBackendLangIdentifier = function() {
                var t = p || this.snippetSettings.currentLang;
                return t ? this.getLangIdentifier(t) : null
            };
            t.prototype.isKoreanText = function(t) {
                return s.isKoreanText(t)
            };
            t.prototype.defaultLangAlias = function() {
                var t = this.languageAliases.findAlias(this.snippetSettings.defaultLang);
                return t ? t.langCodeAlias : null
            };
            return t
        }();
    e.default = g
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isKoreanText = void 0;
    var r, i = o(n(2)),
        a = (r = [" \f\n\r\t\v   - \u2028\u2029  　\ufeff", "0123456789", "!\"#$%&'()*+,\\-ー./\\:;<=>?@\\[\\]^_`{|}~"], i.default.reduce(r, (function(t, e) {
            for (var n = 0; n < e.length; ++n) t[e[n]] = !0;
            return t
        }), {}));
    e.isKoreanText = function(t) {
        if (t) {
            for (var e = 0, n = 0, o = 0; o < t.length; ++o) {
                var r = t[o],
                    i = t.charCodeAt(o);
                i >= 44032 && i <= 55203 ? e += 1 : a[r] && (n += 1)
            }
            if (n < t.length) {
                return e / (t.length - n) >= .9
            }
        }
        return !1
    }
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(96)),
        s = function(t) {
            r(e, t);

            function e(e, n, o) {
                var r = t.call(this) || this;
                r.languageService = e;
                r.liveEditorSettings = n;
                r.widgetSessionManager = o;
                return r
            }
            e.prototype.build = function(t) {
                return new a.default(this.languageService, t, this.buildDomInsertStrategy(), this.liveEditorSettings, this.widgetSessionManager)
            };
            return e
        }(i(n(44)).default);
    e.default = s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(15)),
        s = function(t) {
            r(e, t);

            function e(e, n, o, r, i) {
                var a = t.call(this, o) || this;
                a.languageService = e;
                a.widgetInit = n;
                a.liveEditorSettings = r;
                a.widgetSessionManager = i;
                return a
            }
            e.prototype.buildHtmlElement = function() {
                var t = this,
                    e = document.createElement("span");
                e.className = "wovn-additional-button wovn-live-edit-button";
                e.setAttribute("wovn", "");
                e.setAttribute("wovn-ignore", "");
                e.onclick = function() {
                    t.widgetSessionManager.createSession().then((function(e) {
                        if (e.body.error) {
                            console.log("WOVN: you are not logged in.");
                            window.location.reload()
                        } else {
                            t.startLoading();
                            var n = t.languageService.getCurrentLang();
                            t.liveEditorSettings.updateBrowserUrlState(e.body.token, n);
                            t.widgetInit.start((function() {
                                return t.stopLoading()
                            }))
                        }
                    }))
                };
                e.innerText = "Live Editor";
                return e
            };
            e.prototype.startLoading = function() {
                if (!this.loadingOverlayElement) {
                    this.loadingOverlayElement = document.createElement("DIV");
                    this.loadingOverlayElement.innerHTML = a.default.liveEditLoadingOverlay.html;
                    document.body.appendChild(this.loadingOverlayElement)
                }
            };
            e.prototype.stopLoading = function() {
                var t = this;
                if (this.loadingOverlayElement) {
                    this.loadingOverlayElement.querySelector(".wovn-live-edit-loading").className += " wovn-live-edit-loading--fading";
                    setTimeout((function() {
                        document.body.removeChild(t.loadingOverlayElement);
                        t.loadingOverlayElement = null
                    }), 600)
                }
            };
            return e
        }(i(n(51)).default);
    e.default = s
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(52)),
        i = function() {
            function t(t, e) {
                this.data = t;
                this.wovnStorage = e
            }
            t.prototype.loadFromStore = function() {
                var t = r.default.loadFromStore(this.wovnStorage, this.data.pageData.getManualPublishedDate());
                return t.isEmpty ? this.data.getTranslationData() : t
            };
            t.prototype.onlyShowLangs = function(t) {
                r.default.onlyShowLangs(t, this.wovnStorage, this.data.pageData.getManualPublishedDate())
            };
            t.prototype.create = function(t, e, n, o, i) {
                void 0 === e && (e = {});
                void 0 === n && (n = {});
                void 0 === o && (o = {});
                void 0 === i && (i = {});
                return new r.default(t, e, n, o, i, this.wovnStorage, this.data.pageData.getManualPublishedDate())
            };
            t.prototype.clearData = function() {
                r.default.clearData(this.wovnStorage)
            };
            return t
        }();
    e.default = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.AuditTrigger = void 0;
    var r = n(99),
        i = o(n(0)),
        a = o(n(100)),
        s = n(12),
        u = function() {
            function t(e, n, o, r) {
                this.documentRoot = e;
                this.liveEditorInstaller = n;
                this.debugSettings = o;
                this.auditTriggerEvents = r;
                this.auditWorker = new a.default(t.minimumCooldownTimeMs);
                this.eventListeners = new s.EventListenerSet;
                this.hasInitializedEvents = !1;
                this.inspectingMode = !1;
                this.auditor = function(t, e) {}
            }
            t.prototype.setAuditor = function(t) {
                this.auditor = t
            };
            t.prototype.start = function() {
                if (!this.debugSettings.disableAudit) {
                    if (!this.hasInitializedEvents) {
                        this.resetEventListeners();
                        this.hasInitializedEvents = !0
                    }
                    this.isRunning = !0;
                    this.refresh()
                }
            };
            t.prototype.stop = function() {
                this.isRunning = !1;
                clearTimeout(this.timeout)
            };
            t.prototype.getInspectingMode = function() {
                return this.inspectingMode
            };
            t.prototype.setInspectingMode = function(t) {
                this.inspectingMode = t
            };
            t.prototype.restart = function() {
                this.stop();
                this.resetEventListeners();
                this.start()
            };
            t.prototype.destroy = function() {
                this.eventListeners.destroyAll();
                this.stop()
            };
            t.prototype.refresh = function() {
                this.renewTimeout()
            };
            t.prototype.renewTimeout = function() {
                var e = this,
                    n = 0,
                    o = function(t) {
                        e.auditTriggerEvents.triggerAuditStarted(t);
                        e.auditor((function() {
                            e.auditTriggerEvents.triggerAuditCompleted(t)
                        }), t)
                    },
                    r = function() {
                        if (!(n >= t.totalAuditCount) && e.isRunning) {
                            n++;
                            var i = t.maxTimeoutIntervalMs * Math.pow(n, 2) / Math.pow(t.totalAuditCount, 2);
                            e.timeout = e.auditWorker.setTimeout((function() {
                                o(n)
                            }), r, i)
                        }
                    };
                this.isRunning && (this.timeout = this.auditWorker.setTimeout((function() {
                    o(n)
                }), r, 0))
            };
            t.prototype.resetEventListeners = function() {
                var t = this;
                this.eventListeners.destroyAll();
                var e = "ontouchstart" in this.documentRoot,
                    n = this.getClickNodes();
                this.addClickListenersToNodes(n, "click");
                e && this.addClickListenersToNodes(n, "touchend");
                this.eventListeners.add(window, "resize", r.debounce((function(e) {
                    return t.triggerAudit(e)
                }), 250))
            };
            t.prototype.getClickNodes = function() {
                return [this.documentRoot].concat(i.default.toArrayFromDomList(this.documentRoot.getElementsByTagName("a"))).concat(i.default.toArrayFromDomList(this.documentRoot.getElementsByTagName("button"))).concat(i.default.toArrayFromDomList(this.documentRoot.getElementsByTagName("input")))
            };
            t.prototype.addClickListenersToNodes = function(t, e) {
                for (var n = this, o = 0; o < t.length; o++) this.eventListeners.add(t[o], e, (function(t) {
                    return n.triggerAudit(t)
                }), {
                    capture: !0
                })
            };
            t.prototype.triggerAudit = function(t) {
                if (this.isRunning) this.renewTimeout();
                else if (this.liveEditorInstaller.isInstalled() && !this.inspectingMode) {
                    var e = s.createEvent("audit-trigger-node-click", !1, !0);
                    s.dispatchEvent(e)
                }
            };
            t.minimumCooldownTimeMs = 1e3;
            t.totalAuditCount = 5;
            t.maxTimeoutIntervalMs = 25e3;
            return t
        }();
    e.AuditTrigger = u
}, function(t, e) {
    function n(t, e, n) {
        var o, r, i, a, s;
        null == e && (e = 100);

        function u() {
            var l = Date.now() - a;
            if (l < e && l >= 0) o = setTimeout(u, e - l);
            else {
                o = null;
                if (!n) {
                    s = t.apply(i, r);
                    i = r = null
                }
            }
        }
        var l = function() {
            i = this;
            r = arguments;
            a = Date.now();
            var l = n && !o;
            o || (o = setTimeout(u, e));
            if (l) {
                s = t.apply(i, r);
                i = r = null
            }
            return s
        };
        l.clear = function() {
            if (o) {
                clearTimeout(o);
                o = null
            }
        };
        l.flush = function() {
            if (o) {
                s = t.apply(i, r);
                i = r = null;
                clearTimeout(o);
                o = null
            }
        };
        return l
    }
    n.debounce = n;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t) {
            void 0 === t && (t = 1e3);
            this.coolDownTime = t;
            this.workableId = 0;
            this.isExecuting = !1;
            this.previousExecutedTime = null
        }
        t.prototype.isCoolingDown = function(t) {
            return this.previousExecutedTime && this.previousExecutedTime + this.coolDownTime > t
        };
        t.prototype.executeSetTimeout = function(t, e, n, o, r) {
            var i, a, s = this;
            return i = o, a = r, setTimeout((function() {
                ! function(n, o) {
                    if (n === s.workableId) {
                        s.isExecuting = !0;
                        s.previousExecutedTime = null;
                        t.apply(s, o);
                        s.previousExecutedTime = (new Date).getTime();
                        s.isExecuting = !1;
                        e()
                    }
                }(i, a)
            }), n)
        };
        t.prototype.setTimeout = function(t, e, n) {
            for (var o = [], r = 3; r < arguments.length; r++) o[r - 3] = arguments[r];
            var i = (new Date).getTime();
            if (!this.isExecuting) {
                if (this.isCoolingDown(i)) {
                    var a = this.previousExecutedTime + this.coolDownTime;
                    n = Math.max(a + 100, n + i) - i
                }
                this.workableId = (this.workableId + 1) % 1e4;
                return this.executeSetTimeout(t, e, n, this.workableId, o)
            }
        };
        return t
    }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.TagCustomizationID = void 0;
    e.TagCustomizationID = {
        domainCss: "wovn-domain-css",
        pageCss: "wovn-page-css",
        domainJs: "wovn-domain-js",
        pageJs: "wovn-page-js"
    };
    var o = "wovn-page-id",
        r = "wovn-page-css-hash",
        i = "wovn-domain-css-hash",
        a = function() {
            function t(t) {
                this.data = t
            }
            t.prototype.load = function() {
                var t = document.head || document.body;
                this.loadCss(t);
                this.loadJs(t)
            };
            t.prototype.loadCss = function(t) {
                var n, a, s = document.getElementById(e.TagCustomizationID.pageCss),
                    u = document.getElementById(e.TagCustomizationID.domainCss);
                if (this.data.pageData.hasPublishedLang()) {
                    if (this.shouldInsertDomainCss(u, this.data.domainOptions.getDomainCssHash())) {
                        this.removeExistingTag(t, u);
                        var l = ((n = {})[i] = this.data.domainOptions.getDomainCssHash(), n);
                        this.insertCssTag(t, "style", e.TagCustomizationID.domainCss, this.data.domainOptions.getDomainCss(), l)
                    }
                    if (this.shouldInsertPageCss(s, this.data.pageData.getPageCssHash())) {
                        this.removeExistingTag(t, s);
                        l = ((a = {})[o] = this.data.pageData.getPageId(), a[r] = this.data.pageData.getPageCssHash(), a);
                        this.insertCssTag(t, "style", e.TagCustomizationID.pageCss, this.data.pageData.getPageCss(), l)
                    }
                } else {
                    this.removeExistingTag(t, s);
                    this.removeExistingTag(t, u)
                }
            };
            t.prototype.loadJs = function(t) {
                var n = document.getElementById(e.TagCustomizationID.pageJs),
                    o = document.getElementById(e.TagCustomizationID.domainJs);
                this.removeExistingTag(t, o);
                this.removeExistingTag(t, n);
                if (this.data.domainOptions.hasFeature("js_customization")) {
                    this.insertTag(t, "script", e.TagCustomizationID.domainJs, this.data.domainOptions.getDomainJs());
                    this.insertTag(t, "script", e.TagCustomizationID.pageJs, this.data.pageData.getPageJs())
                }
            };
            t.prototype.insertTag = function(t, e, n, o) {
                if (o) {
                    var r = document.createElement(e);
                    r.setAttribute("id", n);
                    r.appendChild(document.createTextNode(o));
                    t.appendChild(r);
                    return r
                }
            };
            t.prototype.insertCssTag = function(t, e, n, o, r) {
                if (o) {
                    var i = this.insertTag(t, e, n, o);
                    if (i)
                        for (var a in r) r[a] && i.setAttribute(a, r[a])
                }
            };
            t.prototype.removeExistingTag = function(t, e) {
                e && t.removeChild(e)
            };
            t.prototype.shouldInsertPageCss = function(t, e) {
                return !t || t.getAttribute(o) !== this.data.pageData.getPageId() || e && t.getAttribute(r) !== e
            };
            t.prototype.shouldInsertDomainCss = function(t, e) {
                return !t || e && t.getAttribute(i) !== e
            };
            return t
        }();
    e.default = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
            return (o = Object.assign || function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++) {
                    e = arguments[n];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                return t
            }).apply(this, arguments)
        },
        r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Data = void 0;
    var i = r(n(52)),
        a = r(n(2)),
        s = r(n(22)),
        u = n(65),
        l = function() {
            function t(t, e) {
                this.pageData = t;
                this.domainOptions = e
            }
            t.prototype.getTranslationData = function() {
                var t = this.pageData.getTextValues(),
                    e = this.pageData.getImageValues(),
                    n = this.pageData.getHTMLTextValues(),
                    o = this.pageData.getPageTextValues(),
                    r = this.pageData.getManualPublishedDate();
                return new i.default(Date.now(), t, e, n, o, s.default.c("Storage"), r)
            };
            t.prototype.getLinkTranslations = function() {
                return o(o({}, this.domainOptions.getLinkTranslations()), this.pageData.getLinkTranslations())
            };
            t.prototype.getConvertedLangs = function() {
                var t = this.pageData.getConvertedLangs(),
                    e = this.domainOptions.getDomainLangs();
                return 0 === e.length ? t : a.default.reduce(t, (function(t, n) {
                    e.indexOf(n.code) > -1 && t.push(n);
                    return t
                }), [])
            };
            t.prototype.getTranslatableLangs = function() {
                return this.getTranslatableLangsAsLangInfo().map((function(t) {
                    return t.code
                }))
            };
            t.prototype.getTranslatableLangsAsLangInfo = function() {
                return this.getConvertedLangs().concat(this.pageData.getSourceLangs())
            };
            t.prototype.getExcludedContent = function() {
                return a.default.distinctBy(this.pageData.getPageExcludedContent().concat(this.domainOptions.getDomainExcludedContent()), (function(t) {
                    return t.selector
                }))
            };
            t.prototype.getIgnoredPatterns = function() {
                return {
                    selectors: this.getExcludedContent(),
                    ignoreInlineDisplayNoneElements: this.domainOptions.hasFeature("ignore_inline_display_none_elements")
                }
            };
            t.prototype.getIncludedContent = function() {
                return a.default.distinctBy(this.pageData.getPageIncludedContent().concat(this.domainOptions.getDomainIncludedContent()), (function(t) {
                    return t.selector
                }))
            };
            t.prototype.isReportingEnabled = function(t) {
                return u.isCookieSettingEnabled(this.isReportingEnabledFromServerData(), t.get(), this.domainOptions)
            };
            t.prototype.isReportingEnabledFromServerData = function() {
                var t = this.pageData.getPageReportingEnabled();
                return null !== t ? t : this.domainOptions.getDomainReportingEnabled()
            };
            return t
        }();
    e.Data = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.parseWidgetStyle = void 0;
    e.parseWidgetStyle = function(t) {
        var e = (t = t || "").split(" "),
            n = e[1] || "default";
        return {
            type: e[0] || "default",
            color: o(n)
        }
    };

    function o(t) {
        var e = t.split("_");
        return {
            name: e[0],
            isTransparent: "transparent" === e[1]
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LangCookie = void 0;
    var o = n(3),
        r = o.WovnCookies.SELECTED_LANG,
        i = o.WovnCookies.LEGACY_SELECTED_LANG,
        a = function() {
            function t(t) {
                this.cookieStore = t
            }
            t.prototype.set = function(t) {
                this.cookieStore.set(r, t)
            };
            t.prototype.get = function() {
                this.migrateOldCookie();
                return this.cookieStore.get(r)
            };
            t.prototype.erase = function() {
                this.cookieStore.erase(r)
            };
            t.prototype.destroy = function() {
                this.erase()
            };
            t.prototype.migrateOldCookie = function() {
                var t = this.cookieStore.get(i);
                if (t) {
                    this.cookieStore.erase(i);
                    this.setLangToCookie(t)
                }
            };
            t.prototype.setLangToCookie = function(t) {
                this.cookieStore.set(r, t)
            };
            return t
        }();
    e.LangCookie = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.InSiteSearcher = void 0;
    var o = function() {
        function t(t) {
            this.inSiteSearchController = t
        }
        t.prototype.search = function(t, e) {
            return this.inSiteSearchController.search(t, e).then((function(t) {
                return t.body.results
            }))
        };
        return t
    }();
    e.InSiteSearcher = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PageChecker = e.notFoundOccurrences = void 0;
    var r = o(n(0));

    function i() {
        return -1 !== document.title.search(a) || (t = document.body.innerText) && -1 !== t.search(a);
        var t
    }
    e.notFoundOccurrences = ["404", "410", "не е намерена", "未找到", "未找到", "ikke fundet", "niet gevonden", "not found", "ei löydetty", "pas trouvé", "non trouvé", "introuvable", "nicht gefunden", "δεν βρέθηκε", "לא נמצא", "नहीं मिला", "tidak ditemukan", "non trovato", "見つかりません", "찾을 수 없음", "tidak ditemui", "ikke funnet", "nie znaleziono", "não encontrado", "не обнаружена", "extraviado", "no encontrada", "hittades inte", "ไม่พบ", "bulunamadı", "не знайдено", "không tìm thấy"];
    var a = new RegExp("(" + e.notFoundOccurrences.join("|") + ")", "i");
    var s = function() {
        function t(t) {
            this.pageNotFoundController = t
        }
        t.prototype.notifyWovnIfNotFound = function() {
            var t, e = this;
            i() && (t = function() {
                e.pageNotFoundController.notifyCurrentPageNotFound()
            }, r.default.sendRequest("HEAD", window.location.href, null, (function() {}), (function(e) {
                404 !== e.status && 410 !== e.status || t()
            })))
        };
        return t
    }();
    e.PageChecker = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            this.snippetSettings = t;
            this.errorReporter = e;
            this.setBackendState(t.snippetType || "")
        }
        t.prototype.runDiagnostic = function() {
            this.checkBackendSanity()
        };
        t.prototype.checkBackendSanity = function() {
            this.backendWithoutApiSnippetDetected && this.backendOriginalLanguage !== this.backendTargetLanguage && this.errorReporter.reportError("Content not translated by translation API.")
        };
        t.prototype.setBackendState = function(t) {
            this.backendDetected = this.snippetSettings.isBackend;
            this.backendWithoutApiSnippetDetected = !1;
            if (this.backendDetected) {
                this.backendOriginalLanguage = this.snippetSettings.defaultLang;
                this.backendTargetLanguage = this.snippetSettings.currentLang;
                this.backendWithoutApiSnippetDetected = t.length > 0 && (/fallback|without_api/.test(t) || !/^api/.test(t))
            }
        };
        return t
    }();
    e.default = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.UrlFormatterFactory = void 0;
    var r = o(n(109)),
        i = o(n(110)),
        a = n(5),
        s = function() {
            function t(t) {
                this.urlComponent = t;
                this.parseUrlCached = r.default((function(t, e) {
                    return a.parseUrl(t)
                }), {
                    serializer: function(t) {
                        return t[0] + "," + t[1]
                    }
                })
            }
            t.prototype.convertToFullUrl = function(t) {
                return this.createFromUrl(t).setShowFullUrl().getOriginalUrl()
            };
            t.prototype.createFromUrl = function(t) {
                var e = this.getLocation(t),
                    n = a.getHostWithNormalizedPort(e),
                    o = a.isAbsoluteUrl(t),
                    r = this.generatePath(o, e.pathname, t),
                    s = new i.default(e.protocol, n, r, e.search, e.hash, t);
                if (!o)
                    if (a.isAbsolutePath(t)) s.setToShowUrlFromPath();
                    else {
                        var u = s.getOriginalUrl();
                        s.setBaseIgnorePath(u.substr(0, u.indexOf(t)))
                    } return s
            };
            t.prototype.getLocation = function(t) {
                var e = this.urlComponent.getLangCode(t);
                return e ? this.parseUrlCached(t, e) : a.parseUrl(t)
            };
            t.prototype.generatePath = function(t, e, n) {
                var o = "/" !== e.charAt(0) ? "/" : "" + e,
                    r = null === a.getNormalizedPath(n);
                t && r && (o = "");
                return o
            };
            t.prototype.create = function(t, e, n, o, r, a) {
                return new i.default(t, e, n, o, r, a)
            };
            return t
        }();
    e.UrlFormatterFactory = s
}, function(t, e) {
    function n(t, e, n, o) {
        var r, i = null == (r = o) || "number" == typeof r || "boolean" == typeof r ? o : n(o),
            a = e.get(i);
        if (void 0 === a) {
            a = t.call(this, o);
            e.set(i, a)
        }
        return a
    }

    function o(t, e, n) {
        var o = Array.prototype.slice.call(arguments, 3),
            r = n(o),
            i = e.get(r);
        if (void 0 === i) {
            i = t.apply(this, o);
            e.set(r, i)
        }
        return i
    }

    function r(t, e, n, o, r) {
        return n.bind(e, t, o, r)
    }

    function i(t, e) {
        return r(t, this, 1 === t.length ? n : o, e.cache.create(), e.serializer)
    }

    function a() {
        return JSON.stringify(arguments)
    }

    function s() {
        this.cache = Object.create(null)
    }
    s.prototype.has = function(t) {
        return t in this.cache
    };
    s.prototype.get = function(t) {
        return this.cache[t]
    };
    s.prototype.set = function(t, e) {
        this.cache[t] = e
    };
    var u = {
        create: function() {
            return new s
        }
    };
    t.exports = function(t, e) {
        var n = e && e.cache ? e.cache : u,
            o = e && e.serializer ? e.serializer : a;
        return (e && e.strategy ? e.strategy : i)(t, {
            cache: n,
            serializer: o
        })
    };
    t.exports.strategies = {
        variadic: function(t, e) {
            return r(t, this, o, e.cache.create(), e.serializer)
        },
        monadic: function(t, e) {
            return r(t, this, n, e.cache.create(), e.serializer)
        }
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__spreadArray || function(t, e) {
            for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) t[r] = e[n];
            return t
        },
        r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        a = r(n(22)),
        s = n(66),
        u = n(67),
        l = r(n(0)),
        c = n(5),
        d = function() {
            function t(t, e, n, o, r, i) {
                this.protocol = t;
                this.host = e;
                this.pathname = n;
                this.search = o;
                this.hash = r;
                this.originalUrl = i;
                this.fromPath = !1;
                this.baseIgnorePath = null
            }
            t.prototype.setShowFullUrl = function() {
                this.fromPath = !1;
                this.baseIgnorePath = null;
                return this
            };
            t.prototype.setToShowUrlFromPath = function() {
                this.fromPath = !0;
                return this
            };
            t.prototype.setBaseIgnorePath = function(t) {
                this.baseIgnorePath = t;
                return this
            };
            t.prototype.getOriginalUrl = function() {
                return i.startsWith(this.protocol.toLowerCase(), "http") ? this.createUrl(this.protocol, this.host, this.pathname, this.search, this.hash) : this.originalUrl
            };
            t.prototype.getNormalizedPageUrl = function(t, e, n) {
                void 0 === n && (n = null);
                var o = this.getOriginalUrl();
                if (t && i.startsWith(this.protocol.toLowerCase(), "http")) {
                    var r = a.default.c("Lang").getLangIdentifier(n) || a.default.c("Lang").getBackendLangIdentifier(),
                        s = a.default.c("SnippetSettings");
                    switch (e) {
                        case "query":
                            var u = s.langParamName,
                                l = this.search.replace(new RegExp("(\\?|&)" + u + "=" + r + "(&|$)"), "$1").replace(/(\?|&)$/, "");
                            o = this.createUrl(this.protocol, this.host, this.pathname, l, this.hash);
                            break;
                        case "subdomain":
                            o = o.replace(new RegExp("//" + r + "\\.", "i"), "//");
                            break;
                        case "custom_domain":
                            o = a.default.c("CustomDomainUrlHandler").removeLanguage(o, r);
                            break;
                        case "path":
                            var c = a.default.c("Lang").defaultLangAlias(),
                                d = c ? "/" + c : "",
                                p = s.sitePrefixPath,
                                h = this.pathname;
                            h = p ? this.pathname.replace(new RegExp("^/(" + p + ")/" + r + "(/|$)", "i"), "/$1" + d + "$2") : this.pathname.replace(new RegExp("^(/)?" + r + "(/|$)", "i"), d + "$2");
                            o = this.createUrl(this.protocol, this.host, h, this.search, this.hash)
                    }
                }
                return o
            };
            t.prototype.getConvertedLangUrl = function(t, e, n) {
                var o, r = this.getOriginalUrl(),
                    i = a.default.c("Lang").getLangIdentifier(t),
                    s = a.default.c("Lang").getLangIdentifier(e),
                    u = a.default.c("Lang").getDefaultCodeIfExists();
                switch (n) {
                    case "query":
                        var l = a.default.c("SnippetSettings").langParamName,
                            c = RegExp("[\\?&]" + l + "=[^&#]*");
                        if (e === u) {
                            var d = RegExp("([\\?&])" + l + "=[^#&]*&?");
                            o = r.replace(d, "$1")
                        } else if (r.match(c)) {
                            var p = RegExp("([\\?&])" + l + "=[^&#]*");
                            o = r.replace(p, "$1" + l + "=" + s)
                        } else o = r.match(/\?/) ? r.replace(/\?/, "?" + l + "=" + s + "&") : r.replace(/(#|$)/, "?" + l + "=" + s + "$1");
                        o = (o = o.replace(/&$/, "")).replace(/\?$/, "");
                        break;
                    case "custom_domain":
                        o = a.default.c("CustomDomainUrlHandler").addLanguage(r, s);
                        break;
                    case "subdomain":
                        o = e === u ? r.replace(new RegExp("://" + i.toLowerCase() + "\\.", "i"), "://") : t === u ? r.replace(new RegExp("://", "i"), "://" + s.toLowerCase() + ".") : r.replace(new RegExp("://" + i.toLowerCase() + "\\.", "i"), "://" + s.toLowerCase() + ".");
                        break;
                    case "path":
                        var h = this.removeLangFromPathname(n, this.pathname, t);
                        h = this.addLangToPathname(n, h, e, u);
                        o = this.createUrl(this.protocol, this.host, h, this.search, this.hash);
                        break;
                    default:
                        o = r
                }
                return o
            };
            t.prototype.removeLangFromPathname = function(t, e, n) {
                if ("path" !== t) return e;
                var o = a.default.c("Lang").getLangIdentifier(n),
                    r = a.default.c("SnippetSettings").sitePrefixPath;
                return r ? e.replace(new RegExp("^(/" + r + ")/" + o + "(/|$)"), "$1$2") : e.replace(new RegExp("^/" + o + "(/|$)"), "$1")
            };
            t.prototype.addLangToPathname = function(t, e, n, o) {
                if ("path" !== t) return e;
                if (n === o && !a.default.c("Lang").hasAlias(o)) return e;
                var r = a.default.c("Lang").getLangIdentifier(n),
                    i = a.default.c("SnippetSettings").sitePrefixPath;
                return i ? e.replace(new RegExp("^(/" + i + ")(/|$)"), "$1/" + r + "$2") : "/" + r + e
            };
            t.prototype.createUrl = function(t, e, n, o, r) {
                var a = this.removeWovnHash(r),
                    s = t + "//" + e + n + o + a;
                this.baseIgnorePath ? s = i.startsWith(s, this.baseIgnorePath) ? s.replace(this.baseIgnorePath, "") : n + o + a : this.fromPath && (s = n + o + a);
                return s
            };
            t.prototype.removeWovnHash = function(t) {
                if (!t) return "";
                var e = t;
                o(o([], l.default.values(s.WovnHashes)), l.default.values(u.LiveEditorHashes)).forEach((function(t) {
                    e = c.removeSpecifiedHash(e, t)
                }));
                return e
            };
            return t
        }();
    e.default = d
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SrcSetUtils = void 0;
    var r = o(n(2)),
        i = o(n(112)),
        a = function() {
            function t(t) {
                this.urlFormatter = t
            }
            t.prototype.parseSrcSetUrls = function(t) {
                return i.default(t).map((function(t) {
                    return t.url
                }))
            };
            t.prototype.parseAndResolveSrcSetUrls = function(t) {
                var e = this;
                return r.default.toObject(this.parseSrcSetUrls(t), (function(t) {
                    return e.urlFormatter.convertToFullUrl(t)
                }), (function(t) {
                    return t
                }))
            };
            return t
        }();
    e.SrcSetUtils = a
}, function(t, e, n) {
    var o, r, i;
    r = [], void 0 !== (i = "function" == typeof(o = function() {
        return function(t) {
            function e(t) {
                return " " === t || "\t" === t || "\n" === t || "\f" === t || "\r" === t
            }

            function n(e) {
                var n, o = e.exec(t.substring(f));
                if (o) {
                    n = o[0];
                    f += n.length;
                    return n
                }
            }
            for (var o, r, i, a, s, u = t.length, l = /^[ \t\n\r\u000c]+/, c = /^[, \t\n\r\u000c]+/, d = /^[^ \t\n\r\u000c]+/, p = /[,]+$/, h = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, f = 0, m = [];;) {
                n(c);
                if (f >= u) return m;
                o = n(d);
                r = [];
                if ("," === o.slice(-1)) {
                    o = o.replace(p, "");
                    y()
                } else v()
            }

            function v() {
                n(l);
                i = "";
                a = "in descriptor";
                for (;;) {
                    s = t.charAt(f);
                    if ("in descriptor" === a)
                        if (e(s)) {
                            if (i) {
                                r.push(i);
                                i = "";
                                a = "after descriptor"
                            }
                        } else {
                            if ("," === s) {
                                f += 1;
                                i && r.push(i);
                                y();
                                return
                            }
                            if ("(" === s) {
                                i += s;
                                a = "in parens"
                            } else {
                                if ("" === s) {
                                    i && r.push(i);
                                    y();
                                    return
                                }
                                i += s
                            }
                        }
                    else if ("in parens" === a)
                        if (")" === s) {
                            i += s;
                            a = "in descriptor"
                        } else {
                            if ("" === s) {
                                r.push(i);
                                y();
                                return
                            }
                            i += s
                        }
                    else if ("after descriptor" === a)
                        if (e(s));
                        else {
                            if ("" === s) {
                                y();
                                return
                            }
                            a = "in descriptor";
                            f -= 1
                        } f += 1
                }
            }

            function y() {
                var e, n, i, a, s, u, l, c, d, p = !1,
                    f = {};
                for (a = 0; a < r.length; a++) {
                    u = (s = r[a])[s.length - 1];
                    l = s.substring(0, s.length - 1);
                    c = parseInt(l, 10);
                    d = parseFloat(l);
                    if (h.test(l) && "w" === u) {
                        (e || n) && (p = !0);
                        0 === c ? p = !0 : e = c
                    } else if (g.test(l) && "x" === u) {
                        (e || n || i) && (p = !0);
                        d < 0 ? p = !0 : n = d
                    } else if (h.test(l) && "h" === u) {
                        (i || n) && (p = !0);
                        0 === c ? p = !0 : i = c
                    } else p = !0
                }
                if (p) console && console.log && console.log("Invalid srcset descriptor found in '" + t + "' at '" + s + "'.");
                else {
                    f.url = o;
                    e && (f.w = e);
                    n && (f.d = n);
                    i && (f.h = i);
                    m.push(f)
                }
            }
        }
    }) ? o.apply(e, r) : o) && (t.exports = i)
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(0)),
        i = n(12),
        a = n(53),
        s = "wovn-stallion-iframe",
        u = function() {
            function t(t, e) {
                var n = this;
                this.snippetSettings = t;
                this.wovnContext = e;
                this.pendingRequests = {};
                this.stallion = null;
                this.started = !1;
                this.messageHandler = function(t) {
                    return n.onStallionMessage(t)
                };
                this.lastMessageId = 0
            }
            t.prototype.start = function() {
                this.started = !0;
                r.default.onEvent(window.self, "message", this.messageHandler);
                this.startRPC()
            };
            t.prototype.stop = function() {
                this.started = !1;
                this.stallion = null;
                r.default.removeHandler(window.self, "message", this.messageHandler);
                this.stopRPC()
            };
            t.prototype.destroy = function() {
                this.stop()
            };
            t.prototype.sendRequest = function(t, e, n, o, r, i) {
                if (this.stallion) {
                    var s = ++this.lastMessageId;
                    this.pendingRequests[s] = {
                        successCallback: r,
                        failedCallback: i
                    };
                    this.stallion.postMessage({
                        messageId: s,
                        messageType: a.StallionMessageType.request,
                        requestInfo: {
                            method: t,
                            url: e,
                            data: n,
                            contentType: o
                        }
                    }, "*");
                    return !0
                }
                return !1
            };
            t.prototype.onStallionMessage = function(t) {
                if (this.started) {
                    var e = t.data;
                    a.isAuthFailedMessage(e) && i.triggerEvent("wovnSessionFailed");
                    if (!this.stallion && a.isSyncMessage(e)) {
                        this.setStallionFromEvent(t);
                        this.stallion && i.triggerEvent("wovnSessionReady")
                    } else if (a.isResponseMessage(e)) {
                        (n = this.pendingRequests[e.messageId]).successCallback && n.successCallback(e.responseBody, e.responseStatus, e.responseHeaders);
                        delete this.pendingRequests[e.messageId]
                    } else if (a.isResponseFailedMessage(e)) {
                        var n;
                        (n = this.pendingRequests[e.messageId]).failedCallback && n.failedCallback(e.responseBody, e.responseStatus, e.responseHeaders);
                        delete this.pendingRequests[e.messageId]
                    }
                }
            };
            t.prototype.startRPC = function() {
                var t = document.createElement("IFRAME"),
                    e = this.wovnContext.jHost,
                    n = this.snippetSettings.token;
                t.setAttribute("id", s);
                t.setAttribute("style", "display: none");
                t.setAttribute("src", e + "stallion_loader?token=" + n);
                document.body.appendChild(t)
            };
            t.prototype.stopRPC = function() {
                var t = this.getStallionIframe();
                t && t.remove()
            };
            t.prototype.setStallionFromEvent = function(t) {
                this.stallion = t.source;
                this.stallion || ("http://test-wovn.io" === location.origin ? this.stallion = window : this.stallion = this.getStallionIframe().contentWindow)
            };
            t.prototype.getStallionIframe = function() {
                return document.getElementById(s)
            };
            return t
        }();
    e.default = u
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WidgetSessionManager = void 0;
    var r = n(4),
        i = o(n(0)),
        a = function() {
            function t(t, e, n) {
                this.widgetData = t;
                this.serverControllerFactory = e;
                this.sessionProxy = n;
                this._isLoggedIn = null
            }
            Object.defineProperty(t.prototype, "isLoggedIn", {
                get: function() {
                    return !!this._isLoggedIn
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.startAndAuthenticate = function() {
                return null !== this._isLoggedIn ? r.Promise.resolve(this._isLoggedIn) : this.authenticate()
            };
            t.prototype.authenticate = function() {
                return this.widgetData.domainOptions.canUseXhrWidgetSession() ? this.authenticateXHR() : this.authenticateStallion()
            };
            t.prototype.authenticateStallion = function() {
                var t = this;
                return new r.Promise((function(e) {
                    i.default.onEvent(document, "wovnSessionReady", (function(n) {
                        t._isLoggedIn = !0;
                        e(!0)
                    }));
                    i.default.onEvent(document, "wovnSessionFailed", (function(n) {
                        t._isLoggedIn = !1;
                        e(!1)
                    }));
                    t.sessionProxy.start()
                }))
            };
            t.prototype.authenticateXHR = function() {
                var t = this;
                return new r.Promise((function(e) {
                    t.serverControllerFactory.xhrWidgetSession.authenticate().then((function() {
                        t._isLoggedIn = !0;
                        e(!0)
                    })).catch((function() {
                        t._isLoggedIn = !1;
                        e(!1)
                    }))
                }))
            };
            t.prototype.createSession = function() {
                return this.widgetData.domainOptions.canUseXhrWidgetSession() ? this.serverControllerFactory.xhrWidgetSession.createSession() : this.serverControllerFactory.inPageSession.createSession()
            };
            return t
        }();
    e.WidgetSessionManager = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(4),
        i = o(n(26)),
        a = n(12),
        s = function() {
            function t(t, e, n) {
                this.widget = t;
                this.wovnContext = e;
                this.snippetSettings = n
            }
            t.prototype.isLoadedComponent = function(t) {
                return this.widget.isComponentLoaded(t)
            };
            t.prototype.loadExternalComponents = function(t) {
                var e = this;
                return new r.Promise((function(n) {
                    var o = e.filterOutLoadedComponents(t);
                    o.length ? e.loadComponents(o).then((function() {
                        n(e.getLoadedComponents(t))
                    })) : n(e.getLoadedComponents(t))
                }))
            };
            t.prototype.loadComponents = function(t) {
                var e = this,
                    n = t.map((function(t) {
                        e.insertLoadingScript(t);
                        return e.waitComponentLoaded(t)
                    }));
                return r.Promise.all(n)
            };
            t.prototype.waitComponentLoaded = function(t) {
                return new r.Promise((function(e) {
                    a.addEventListener(t + "Loaded", e)
                }))
            };
            t.prototype.filterOutLoadedComponents = function(t) {
                var e = this;
                return t.filter((function(t) {
                    return !e.isLoadedComponent(t)
                }))
            };
            t.prototype.insertLoadingScript = function(t) {
                var e = document.createElement("SCRIPT");
                e.setAttribute("type", "text/javascript");
                e.setAttribute("src", this.buildComponentsUrl(t));
                e.setAttribute("async", "");
                document.head.appendChild(e)
            };
            t.prototype.buildComponentsUrl = function(t) {
                return this.widget.c("DomainOptions").hasFeature("widget_versioning") ? this.wovnContext.cdnCacheHost + "widget/" + this.snippetSettings.token + "/components/" + t + "?v=" + i.default.BUILD_HASH : this.wovnContext.jHost + "components/" + t + "?v=" + i.default.BUILD_HASH
            };
            t.prototype.getLoadedComponents = function(t) {
                var e = this;
                return t.map((function(t) {
                    return e.widget.c(t)
                }))
            };
            return t
        }();
    e.default = s
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isWapInstalled = e.getInstalledWapScriptElement = void 0;
    var r = o(n(2)),
        i = "//wap.wovn.io/1.js";

    function a() {
        return document.querySelector('script[src="' + i + '"]')
    }
    e.getInstalledWapScriptElement = a;

    function s() {
        return !!a()
    }
    e.isWapInstalled = s;
    var u = function() {
        function t(t, e, n, o) {
            this.token = t;
            this.wovnContext = e;
            this.data = n;
            this.wapOptOutCookie = o
        }
        t.prototype.installIfNeeded = function() {
            if (!this.wovnContext.isProduction() || !this.isWapAuthorized() || s()) return !1;
            var t = document.createElement("script");
            t.async = !0;
            t.src = i;
            document.head.appendChild(t);
            return !0
        };
        t.prototype.isWapAuthorized = function() {
            return this.data.domainOptions.canInstallWap(this.wapOptOutCookie) && !this.isTokenBlackListed()
        };
        t.prototype.isTokenBlackListed = function() {
            return r.default.includes(["nNUR6x", "_v4hMP"], this.token)
        };
        return t
    }();
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(4),
        r = function() {
            function t(t) {
                this.externalComponentLoader = t;
                this.installed = !1
            }
            t.prototype.installIfNeeded = function() {
                var t = this;
                return this.isInstalled() ? o.Promise.resolve(!1) : this.externalComponentLoader.loadExternalComponents(["LiveEditor"]).then((function() {
                    t.installed = !0;
                    return !0
                }))
            };
            t.prototype.isInstalled = function() {
                return this.installed
            };
            return t
        }();
    e.default = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(0)),
        i = n(12),
        a = function() {
            function t(t, e, n) {
                var o = this;
                this.documentRoot = t;
                this.auditTrigger = e;
                this.auditTriggerEvents = n;
                this.onAuditStartedListener = function(t) {
                    return o.onAuditStarted()
                };
                this.onAuditCompletedListener = function(t) {
                    return o.onAuditCompleted()
                }
            }
            t.prototype.listen = function() {
                var t = this;
                if (!this.isStarted) {
                    this.auditTriggerEvents.subscribe((function(e) {
                        return t.onAuditStartedListener(e)
                    }), (function(e) {
                        return t.onAuditCompletedListener(e)
                    }));
                    this.isStarted = !0
                }
            };
            t.prototype.pause = function() {
                this.isPaused = !0
            };
            t.prototype.resumeOnNextAudit = function() {
                this.willResumeOnNextAudit = !0;
                this.auditTrigger.refresh()
            };
            t.prototype.onAuditStarted = function() {
                if (this.isPaused && this.willResumeOnNextAudit) {
                    this.isPaused = !1;
                    this.willResumeOnNextAudit = !1
                }
            };
            t.prototype.onAuditCompleted = function() {
                if (!this.isPaused) {
                    this.removeWovnWait();
                    i.triggerEvent("wovnWaitAuditCompleted")
                }
            };
            t.prototype.removeWovnWait = function() {
                r.default.toArrayFromDomList(this.documentRoot.querySelectorAll("[wovn-wait], [data-wovn-wait]")).forEach((function(t) {
                    t.removeAttribute("wovn-wait");
                    t.removeAttribute("data-wovn-wait")
                }));
                this.documentRoot.removeAttribute("wovn-isLoading");
                this.documentRoot.removeAttribute("data-wovn-isLoading")
            };
            t.prototype.destroy = function() {
                this.removeWovnWait()
            };
            return t
        }();
    e.default = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DomAuditor = void 0;
    var o = n(8),
        r = n(1),
        i = n(42),
        a = function() {
            function t(t, e, n, o, r) {
                var i = this;
                this.widget = t;
                this.auditTrigger = e;
                this.reportHelper = n;
                this.performanceMonitor = o;
                this.dynamicLoadingOptOutCookie = r;
                this.currentLang = void 0;
                e.setAuditor((function(t, e) {
                    return i.audit(t, e)
                }))
            }
            t.prototype.getInternalCurrentLang = function() {
                return this.currentLang
            };
            t.prototype.isAddableSrc = function(t) {
                try {
                    encodeURIComponent(r.stringifyJSON(t))
                } catch (t) {
                    return !1
                }
                var e = o.trimWhitespace(t);
                return "" !== e && !/^(%([a-f]|[0-9]){2})+$/i.test(e) && this.isAcceptableLanguage(e)
            };
            t.prototype.isAcceptableLanguage = function(t) {
                var e = this.widget.c("Lang");
                return "ko" === e.getDefaultCodeIfExists() || !e.isKoreanText(t)
            };
            t.prototype.supervisedSwapVals = function(t, e, n) {
                this.performanceMonitor.mark(i.MonitorEventType.SwapStart);
                if (this.widget.c("SupervisedContent").isSupervisedPage())
                    for (var o = this.widget.c("SupervisedContent").getSupervisedNodes(), r = 0; r < o.length; r++) {
                        var a = o[r].firstChild || o[r];
                        this.widget.c("DomainOptions").hasFeature("unified_values") && (a = o[r]);
                        this.swapVals(t, {
                            head: a
                        }, n || !0)
                    } else this.swapVals(t, e, n || !0);
                this.currentLang = t;
                this.performanceMonitor.mark(i.MonitorEventType.SwapEnd);
                this.reportHelper.onAuditComplete();
                this.widget.c("DomainOptions").dynamicLoading(this.dynamicLoadingOptOutCookie) && this.widget.c("DynamicLoadingManager").loadRequestedTranslations()
            };
            t.prototype.swapVals = function(t, e, n) {
                e || (e = {});
                return this.widget.c("UnifiedValue").swapUnifiedValue(e.head || document.head.parentNode, this.currentLang, t)
            };
            t.prototype.audit = function(t, e) {
                var n = 0 !== e,
                    o = this.widget.c("Lang").getDefaultCodeIfExists();
                if (this.currentLang !== o || e % 2 != 0) {
                    var r = this.widget.c("Lang").getDocLang() || o;
                    this.supervisedSwapVals(r, null, n || !0);
                    if (this.containsThirdPartyContents()) {
                        this.reportHelper.haltReporting();
                        this.reportHelper.removeNewSrcs()
                    }
                    this.reportHelper.triggerReportIfNecessary();
                    t && t()
                }
            };
            t.prototype.containsThirdPartyContents = function() {
                return !!this.isChromeTranslating() || (!!this.isLanguageTranslated() || !!this.isGoogleAnalyticsExtensionWorking())
            };
            t.prototype.isChromeTranslating = function() {
                return document.documentElement.className.match("translated")
            };
            t.prototype.isLanguageTranslated = function(t) {
                void 0 === t && (t = null);
                var e = this.widget.c("Interface").getStandardWidgetElement();
                if ((t = t || e && e.querySelectorAll(".wovn-switch")) && t.length > 0)
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n].getAttribute("data-value"),
                            r = o && this.widget.c("Lang").get(o),
                            i = r && r.name;
                        if (i && i !== t[n].innerHTML) return !0
                    }
                return !1
            };
            t.prototype.isGoogleAnalyticsExtensionWorking = function() {
                for (var t = document.getElementsByClassName("view-in-ga-link-logo"), e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (/chrome-extension:\/\/.+analytics_logo\.png/.test(getComputedStyle(n)["background-image"])) return !0
                }
                return !1
            };
            t.prototype.stop = function() {
                this.reportHelper.reset();
                this.auditTrigger.stop()
            };
            t.prototype.destroy = function() {
                this.stop()
            };
            return t
        }();
    e.DomAuditor = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SwapIntercom = e.MESSAGES = void 0;
    var r = n(12),
        i = o(n(0));
    e.MESSAGES = {
        subscribe: "WOVNIO_SWAP_INTERCOM_SUBSCRIBE",
        unsubscribe: "WOVNIO_SWAP_INTERCOM_UNSUBSCRIBE",
        acknowledge: "WOVNIO_SWAP_INTERCOM_ACKNOWLEDGE",
        swap: "WOVNIO_SWAP_INTERCOM_SWAP"
    };
    var a = function() {
        function t(t, e) {
            this.lang = t;
            this.widgetInterface = e
        }
        t.prototype.start = function() {
            if (!i.default.pageIsWidgetPreview()) {
                this.intercomNode = this.isMasterIntercom() ? this.createParentNode() : this.createChildNode();
                this.intercomNode.start()
            }
        };
        t.prototype.stop = function() {
            this.intercomNode && this.intercomNode.stop()
        };
        t.prototype.destroy = function() {
            this.stop()
        };
        t.prototype.isMasterIntercom = function() {
            return window.self === window.top
        };
        t.prototype.createParentNode = function() {
            return new s(this.lang)
        };
        t.prototype.createChildNode = function() {
            return new u(this.lang, this.widgetInterface)
        };
        return t
    }();
    e.SwapIntercom = a;
    var s = function() {
            function t(t) {
                var e = this;
                this.lang = t;
                this.childNodes = [];
                this.onMessage = function(t) {
                    return e.listen(t)
                };
                this.onWovnLangChanged = function() {
                    return e.dispatchSwappingRequestToEveryChild()
                }
            }
            t.prototype.start = function() {
                i.default.onEvent(window.self, "message", this.onMessage);
                r.addEventListener("wovnLangChanged", this.onWovnLangChanged)
            };
            t.prototype.stop = function() {
                i.default.removeHandler(window.self, "message", this.onMessage);
                r.removeEventListener("wovnLangChanged", this.onWovnLangChanged)
            };
            t.prototype.listen = function(t) {
                switch (t.data) {
                    case e.MESSAGES.subscribe:
                        var n = t.source;
                        if (this.addChildNode(n)) {
                            var o = this.lang.getDocLang();
                            this.dispatchSwappingRequest(n, o)
                        }
                        break;
                    case e.MESSAGES.unsubscribe:
                        this.removeChildNode(t.source)
                }
            };
            t.prototype.addChildNode = function(t) {
                if (!t) return !1;
                i.default.includes(this.childNodes, t) || this.childNodes.push(t);
                t.postMessage(e.MESSAGES.acknowledge, "*");
                return !0
            };
            t.prototype.removeChildNode = function(t) {
                var e = this.childNodes.indexOf(t);
                if (e < 0) return !1;
                this.childNodes.splice(e, 1);
                return !0
            };
            t.prototype.dispatchSwappingRequest = function(t, n) {
                t && t.postMessage(e.MESSAGES.swap + ":" + n, "*")
            };
            t.prototype.dispatchSwappingRequestToEveryChild = function() {
                for (var t = this.lang.getDocLang(), e = 0; e < this.childNodes.length; ++e) this.dispatchSwappingRequest(this.childNodes[e], t)
            };
            return t
        }(),
        u = function() {
            function t(t, e) {
                var n = this;
                this.lang = t;
                this.widgetInterface = e;
                this.parentNode = window.top;
                this.subscribeTimeoutID = null;
                this.subscriptionTryCount = 0;
                this.onMessage = function(t) {
                    return n.listen(t)
                };
                this.onBeforeunload = function() {
                    return n.unsubscribe()
                }
            }
            t.prototype.start = function() {
                i.default.onEvent(window.self, "message", this.onMessage);
                i.default.onEvent(window.self, "beforeunload", this.onBeforeunload);
                this.subscriptionTryCount = 0;
                this.subscribe()
            };
            t.prototype.stop = function() {
                i.default.removeHandler(window.self, "message", this.onMessage);
                i.default.removeHandler(window.self, "beforeunload", this.onBeforeunload);
                this.unsubscribe()
            };
            t.prototype.listen = function(t) {
                if ("string" == typeof t.data) {
                    var n = t.data.split(":");
                    switch (n[0]) {
                        case e.MESSAGES.acknowledge:
                            clearTimeout(this.subscribeTimeoutID);
                            this.widgetInterface.hide();
                            break;
                        case e.MESSAGES.swap:
                            var o = n[1];
                            this.lang.setDocLang(o)
                    }
                }
            };
            t.prototype.subscribe = function() {
                var t = this;
                if (this.parentNode) {
                    this.subscriptionTryCount += 1;
                    this.parentNode.postMessage(e.MESSAGES.subscribe, "*");
                    this.subscribeTimeoutID = setTimeout((function() {
                        t.subscribe()
                    }), 1e3 * this.subscriptionTryCount)
                }
            };
            t.prototype.unsubscribe = function() {
                clearTimeout(this.subscribeTimeoutID);
                this.parentNode.postMessage(e.MESSAGES.unsubscribe, "*")
            };
            return t
        }()
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.UnifiedValue = void 0;
    var r = o(n(0)),
        i = o(n(2)),
        a = n(122),
        s = n(46),
        u = n(54),
        l = o(n(25)),
        c = o(n(55)),
        d = n(8),
        p = n(12),
        h = n(7),
        g = n(5),
        f = n(56),
        m = n(70),
        v = n(47),
        y = n(125),
        w = n(126),
        b = n(14),
        _ = o(n(71)),
        C = n(72),
        S = function() {
            function t(t, e, n, o, r, i, a, s, u, l, c, d, p, h, g, f, m, v, y, w) {
                this.widget = t;
                this.widgetData = e;
                this.srcSetUtils = n;
                this.attributes = o;
                this.textNormalizer = r;
                this.instantTranslationController = i;
                this.snippetSettings = a;
                this.valuesStackBalancer = s;
                this.domTraversalFactory = u;
                this.unifiedValueComments = l;
                this.valuesStackGenerator = c;
                this.reportHelper = d;
                this.lang = p;
                this.translationChangeDetector = h;
                this.urlFormatterFactory = g;
                this.translationDataBridge = f;
                this.url = m;
                this.liveEditorSettings = v;
                this.translationRepository = y;
                this.imageTranslationRepository = w
            }
            t.prototype.clearCache = function() {
                this.translationRepository.clear();
                this.imageTranslationRepository.clear()
            };
            t.prototype.refreshTranslation = function(t) {
                this.refreshCache(t)
            };
            t.prototype.swapUnifiedValue = function(t, e, n) {
                this.beforeSwapUnifiedValue(t);
                return this._swapUnifiedValue(t, e, n, this.widgetData.getIgnoredPatterns())
            };
            t.prototype._swapUnifiedValue = function(t, e, n, o) {
                var r = this,
                    i = this.lang.getDefaultCodeIfExists();
                e === n && (e = i);
                e = e || this.lang.getActualLang();
                var a = this.setup(e, n, i);
                if (a) {
                    var s = this.domTraversalFactory.create(),
                        u = new y.ReportedValues;
                    if (this.widgetData.domainOptions.hasFeature("schema_translation")) {
                        (new w.SchemaTranslation).reportSchemaTags(t).forEach((function(t) {
                            r.translationRepository.hasTranslation(t, n) || r.reportHelper.markHasNewMissedSrcIfFirstSeen(t);
                            r.addSrcOfReportHelper(t, '//script[@type="application/ld+json"]/text()', !1, !0, u)
                        }))
                    }
                    this.widgetData.domainOptions.hasFeature("instant_translation") && this.swapInstantTranslationNodes(t, s, o, a, n, u);
                    var l = f.createIgnoreNodeFilter(o),
                        c = s.run(t, l);
                    if (this.widgetData.domainOptions.hasFeature("widget_translation_change_detection")) {
                        this.translationChangeDetector.removeOrphanedComments(document.body);
                        this.translationChangeDetector.removeCommentsFromModifiedTextNodes(c.valuesStacks, a)
                    }
                    if (n === a.defaultLangCode) {
                        c.tags.forEach((function(t) {
                            r.restoreOriginalTag(a, t)
                        }));
                        c.texts.forEach((function(t) {
                            return r.restoreOriginalText(t)
                        }));
                        c.valuesStacks.forEach((function(t) {
                            r.reportValueStack(t, a, u)
                        }))
                    } else {
                        c.tags.forEach((function(t) {
                            r.storeOriginalTag(a, t)
                        }));
                        c.valuesStacks.forEach((function(t) {
                            var e = t.path,
                                o = t.translationDataSrcKey;
                            if (!t.wasPreviouslyTranslated)
                                if (r.translationRepository.hasTranslation(o, n)) r.storeOriginalValueStackTexts(t);
                                else {
                                    r.reportHelper.markHasNewMissedSrcIfFirstSeen(o);
                                    r.widget.c("DynamicLoadingManager").addTranslationRequest(o, n)
                                } r.addSrcOfReportHelper(o, e, t.isThirdParty, !0, u)
                        }))
                    }
                    this.reportTags(c, a, u);
                    c.tags.forEach((function(t) {
                        b.isAttributeIgnored(t.ignoreType) || r.widget.c("PropertyValueSwapper").swap(t.element, n, n !== e)
                    }));
                    if (n !== a.defaultLangCode) {
                        c.tags.forEach((function(t) {
                            r.changeTag(a, t)
                        }));
                        c.valuesStacks.forEach((function(t) {
                            r.changeUv(a, t)
                        }))
                    }
                    return u
                }
            };
            t.prototype.swapInstantTranslationNodes = function(t, e, n, o, r, i) {
                var a = this,
                    s = m.findInstantTranslationNodes(t);
                if (!(s.length < 1)) {
                    var u = m.createInstantTranslationIgnoreNodeFilter(n);
                    s.forEach((function(t) {
                        var n = e.run(t, u);
                        if (r === o.defaultLangCode) {
                            n.texts.forEach((function(t) {
                                return a.restoreOriginalText(t)
                            }));
                            n.valuesStacks.forEach((function(t) {
                                a.reportValueStack(t, o, i)
                            }))
                        } else n.valuesStacks.forEach((function(t) {
                            var e = t.path,
                                n = t.translationDataSrcKey;
                            t.wasPreviouslyTranslated || a.translationRepository.hasTranslation(n, r) || a.reportHelper.markHasNewMissedSrcIfFirstSeen(n);
                            a.addSrcOfReportHelper(n, e, t.isThirdParty, !0, i);
                            a.changeInstantUv(r, t)
                        }))
                    }))
                }
            };
            t.prototype.reportValueStack = function(t, e, n) {
                var o = t.path,
                    r = t.translationDataSrcKey;
                this.translationRepository.hasTranslation(r, e.toLangCode) || this.reportHelper.markHasNewMissedSrcIfFirstSeen(r);
                this.addSrcOfReportHelper(r, o, t.isThirdParty, !0, n)
            };
            t.prototype.reportTags = function(t, e, n) {
                var o = this;
                t.tags.forEach((function(t) {
                    if (!b.isAttributeIgnored(t.ignoreType)) {
                        o.reportBackgroundImages(t, e, n);
                        o.attributes.getSwappableAttributes(t).forEach((function(r) {
                            var i = o.getAttr(t, r, e.defaultLangCode, e);
                            if (i) {
                                var a = c.default.isSrcsetImage(t, r),
                                    s = c.default.isInputImage(t),
                                    u = c.default.isMetaImage(t);
                                if (u || a || c.default.isImageUrl(t, r)) {
                                    (a ? o.srcSetUtils.parseSrcSetUrls(i) : [i]).forEach((function(r) {
                                        var l = t.xpath;
                                        (u || s) && (l += "[@image]");
                                        a && (l += "[@srcset]");
                                        var c = o.urlFormatterFactory.convertToFullUrl(r);
                                        !!o.imageTranslationRepository.find(c, e.toLangCode) || o.reportHelper.markHasNewMissedSrcIfFirstSeen(i);
                                        o.addSrcOfReportHelper(c, l, t.isThirdParty, !1, n)
                                    }), o)
                                } else {
                                    var l = t.xpath + "[@" + r + "]";
                                    if (!o.translationRepository.hasTranslation(i, e.toLangCode)) {
                                        o.reportHelper.markHasNewMissedSrcIfFirstSeen(i);
                                        o.widget.c("DynamicLoadingManager").addTranslationRequest(i, e.toLangCode)
                                    }
                                    o.addSrcOfReportHelper(i, l, t.isThirdParty, !1, n)
                                }
                            }
                        }), o)
                    }
                }), this)
            };
            t.prototype.reportBackgroundImages = function(t, e, n) {
                var o = this;
                if (this.widgetData.domainOptions.canTranslateCssBackgroundImages() && r.default.canStyleChange(t)) {
                    this.getBackgroundImagesForKeyLookup(t).forEach((function(r) {
                        var i = o.urlFormatterFactory.convertToFullUrl(r);
                        o.imageTranslationRepository.find(i, e.toLangCode) || o.reportHelper.markHasNewMissedSrcIfFirstSeen(i);
                        o.addSrcOfReportHelper(i, t.xpath + "[@background-image]", t.isThirdParty, !1, n)
                    }))
                }
            };
            t.prototype.findTranslation = function(t, e, n) {
                var o = this.lang.getDefaultCodeIfExists();
                this.setup(e, n, o);
                var r = this.translationRepository.findTranslation(t, n);
                return r ? {
                    src: r.src,
                    created_at: r.created_at
                } : null
            };
            t.prototype.findImageTranslation = function(t, e, n) {
                var o = this.lang.getDefaultCodeIfExists(),
                    r = this.setup(e, n, o),
                    i = this.imageTranslationRepository.find(t, r.toLangCode);
                if (i) return {
                    src: i.dst_url,
                    created_at: i.created_at
                }
            };
            t.prototype.findDstFragments = function(t, e, n) {
                var o = this.lang.getDefaultCodeIfExists();
                this.setup(e, n, o);
                var r = t,
                    i = null,
                    a = "",
                    s = !1,
                    u = !0,
                    l = this.translationRepository.findTranslation(t.src, n);
                if (l) {
                    u = l.is_html;
                    s = l.is_page_translation;
                    i = (r = l).created_at;
                    a = r.published_dst;
                    r.fragments.length !== t.fragments.length && (r = this.valuesStackBalancer.addEmptyTextNodes(r))
                }
                return {
                    is_html: u,
                    published_dst: a,
                    is_page_translation: s,
                    created_at: i,
                    fragments: r.fragments,
                    src: r.src
                }
            };
            t.prototype.setup = function(t, e, n) {
                var o = this,
                    r = this.liveEditorSettings.isEnabled,
                    i = t === e && t === n;
                if (!this.isCacheValid()) {
                    var a = this.widget.c("DynamicLoadingManager");
                    this.refreshCache(a.getLoadedTranslations())
                }
                return {
                    defaultLangCode: n,
                    fromLangCode: t,
                    toLangCode: e,
                    tags: {
                        a: r || i ? this.noop : function(t) {
                            return o.replaceHref(e, t)
                        },
                        area: r || i ? this.noop : function(t) {
                            return o.replaceHref(e, t)
                        },
                        form: function(t) {
                            return o.replaceForm(e, t)
                        }
                    }
                }
            };
            t.prototype.getAttr = function(t, e, n, o) {
                var r = this.getOriginalStoredAttrValue(o, t, e);
                if ("src" === e) {
                    if (null !== r) return r;
                    var i = t.getAttribute("src");
                    return d.startsWith(i, "#") ? null : this.snippetSettings.urlPattern !== v.UrlLanguagePattern.Path || /^(https?:\/\/|\/)/.test(i) ? i : this.url.getUrl(n, i, !0)
                }
                return null !== r ? r : t.getAttribute(e)
            };
            t.prototype.changeTag = function(e, n) {
                var o = this;
                if (!b.isAttributeIgnored(n.ignoreType)) {
                    var i = n.nodeName.toLowerCase(),
                        a = e.tags[i];
                    a && a(n);
                    for (var s = this.attributes.getSwappableAttributes(n), u = 0; u < s.length; ++u) {
                        var l = s[u],
                            d = c.default.isSrcsetImage(n, l),
                            p = d || c.default.isImageUrl(n, l);
                        if (!p || !this.imageTranslationRepository.isEmpty) {
                            var h = this.getAttr(n, l, e.defaultLangCode, e);
                            if (h) {
                                var g = this.textNormalizer.normalizeText(h);
                                if (p)
                                    if (d) {
                                        var f = this.translateSrcset(h, e.toLangCode);
                                        n.setAttribute("srcset", f)
                                    } else {
                                        var m = this.findImageTranslationWithNormalization(g, e.toLangCode);
                                        if (!m) {
                                            this.restoreOriginalAttribute(e, n, l);
                                            continue
                                        }
                                        n.setAttribute(l, m)
                                    }
                                else {
                                    var v = this.translationRepository.findTranslation(g, e.toLangCode);
                                    if (!v) {
                                        this.restoreOriginalAttribute(e, n, l);
                                        continue
                                    }
                                    var y = t.toText(v);
                                    n.setAttribute(l, y)
                                }
                            }
                        }
                    }
                    if (this.widgetData.domainOptions.canTranslateCssBackgroundImages() && r.default.canStyleChange(n)) {
                        var w = this.getBackgroundImagesForKeyLookup(n);
                        if (w.length > 0) {
                            var _ = !1,
                                C = w.map((function(t) {
                                    var n = o.imageTranslationRepository.find(t, e.toLangCode);
                                    n && (_ = !0);
                                    return n ? n.dst_url : t
                                }));
                            _ ? this.replaceBackgroundImages(n, C) : this.restoreBackgroundImage(n)
                        }
                    }
                }
            };
            t.prototype.replaceBackgroundImages = function(t, e) {
                var n = t.style.getPropertyPriority("background-image"),
                    o = e.map((function(t) {
                        return "url(" + t + ")"
                    })).join(", ");
                t.style.setProperty("background-image", o, n)
            };
            t.prototype.setOriginalBackgroundImageAttributeIfNeeded = function(t) {
                var e = u.getWovnSrcAttributeName("background-image");
                if (!t.hasAttribute(e)) {
                    var n = t.style.getPropertyValue("background-image") || "";
                    if (n || !/^(none)?$/.test(t.backgroundImageProperty)) {
                        "important" === t.style.getPropertyPriority("background-image") && (n += "!important");
                        t.setAttribute(e, n)
                    }
                }
            };
            t.prototype.forceBackgroundImages = function(t, e) {
                var n = new _.default("", t, b.IgnoreType.None),
                    o = "";
                this.setOriginalBackgroundImageAttributeIfNeeded(n);
                e.length > 0 && (o = e.map((function(t) {
                    return "url(" + t + ")"
                })).join(", "));
                n.style.backgroundImage = o
            };
            t.prototype.getBackgroundImagesForKeyLookup = function(t) {
                var e = t.style.getPropertyValue("background-image") || "",
                    n = t.style.getPropertyPriority("background-image");
                this.restoreBackgroundImage(t);
                var o = u.getWovnSrcAttributeName("background-image"),
                    r = t.hasAttribute(o) ? t.getAttribute(o).split("!")[0] : "",
                    i = r.length > 0 ? r : t.backgroundImageProperty;
                t.style.setProperty("background-image", e, n);
                return i ? a.backgroundImageToUrlArray(i).map((function(t) {
                    return g.parseUrl(t).href
                })) : []
            };
            t.prototype.changeUv = function(t, e) {
                var n = e.translationDataSrcKey,
                    o = this.translationRepository.findTranslation(n, t.toLangCode);
                o ? this.unifiedValuesReplace(e, o) : this.fragmentedValueReplace(e, t)
            };
            t.prototype.changeInstantUv = function(t, e) {
                var n = this,
                    o = e.translationDataSrcKey,
                    r = this.translationRepository.findTranslation(o, t);
                if (r) {
                    this.storeOriginalValueStackTexts(e);
                    this.unifiedValuesReplace(e, r)
                } else this.instantTranslationController.translate(o, t).then((function(i) {
                    var a = i.body;
                    r = n.valuesStackGenerator.createValuesStackFromHtml(a.dst);
                    n.translationRepository.addTranslation(o, a.dst, t, C.UnifiedValueTranslationType.Html);
                    n.storeOriginalValueStackTexts(e);
                    n.unifiedValuesReplace(e, r)
                }))
            };
            t.prototype.unifiedValuesReplace = function(e, n) {
                var o = t.extractTextNodes(e),
                    r = t.extractTextNodes(n);
                if (o.length === r.length)
                    for (var i = e.fragments[0].node.parentNode, a = 0; a < o.length; ++a) {
                        var s = o[a],
                            u = r[a];
                        if (s.isText) {
                            s.lookahead.forEach((function(t) {
                                t.nodeValue = ""
                            }));
                            var l = u.isText ? u.label : "​",
                                c = u ? t.keepWhiteSpace(s.original, l) : "​";
                            s.node.nodeValue !== c && (s.node.nodeValue = c)
                        } else if (u.isText) {
                            l = d.containsOnlyWhitespace(u.label) ? d.makePersistentWhitespace(u.label) : u.label;
                            var p = document.createTextNode(l);
                            if (s.isOpen || s.isSentinel) {
                                var g = s.node ? s.node.parentNode : i;
                                if (s.isOpen) g.insertBefore(p, s.node);
                                else if (s.isSentinel) {
                                    var f = h.getNextElementSibling(s.fragment.node);
                                    g.insertBefore(p, f)
                                }
                            } else s.isClose && s.node.appendChild(p);
                            this.putComment(p, "")
                        }
                    }
            };
            t.prototype.fragmentedValueReplace = function(e, n) {
                var o = this;
                e.fragments.forEach((function(e) {
                    if (s.isTextFragment(e)) {
                        var r = e.translationDataSrcKey,
                            i = o.translationRepository.findTranslation(r, n.toLangCode);
                        if (i && 0 !== i.fragments.length) {
                            var a = i.fragments[0].label;
                            if (a) {
                                o.storeOriginalText(e.nodes);
                                var u = t.keepWhiteSpace(e.original, a);
                                e.node.nodeValue !== u && (e.node.nodeValue = u)
                            }
                        } else o.restoreOriginalText([e.node])
                    }
                }))
            };
            t.keepWhiteSpace = function(t, e) {
                return !e && d.containsOnlyWhitespace(t) ? t : e && d.containsOnlyWhitespace(e) ? d.makePersistentWhitespace(e) : l.default.unescape(e) || "​"
            };
            t.extractTextNodes = function(t) {
                if (0 == t.fragments.length) return [];
                for (var e = [], n = 0; n < t.fragments.length; ++n) {
                    var o = t.fragments[n];
                    e.push(o);
                    o.isText && ++n
                }
                t.lastFragment.isText || e.push({
                    isSentinel: !0,
                    fragment: t.lastFragment,
                    node: t.lastFragment.node
                });
                return e
            };
            t.prototype.getOriginalStoredAttrValue = function(t, e, n) {
                var o = this.getStoredAttrValue(t, e, n);
                return !o.hasOriginal || o.changed ? null : o.original
            };
            t.prototype.getStoredAttrValue = function(t, e, n) {
                var o, r = u.getWovnSrcAttributeName(n),
                    i = e.getAttribute(r),
                    a = !!i,
                    s = e.getAttribute(n),
                    l = this.translationRepository.findTranslation(i, t.fromLangCode),
                    d = c.default.isSrcsetImage(e, n),
                    p = c.default.isImage(e) || d;
                if (!l && a && p) {
                    if ("src" === n) {
                        var h = this.findImageTranslationWithNormalization(i, t.fromLangCode);
                        h && (l = h)
                    } else d && (l = this.translateSrcset(i, t.fromLangCode));
                    o = a && l !== s
                } else o = a && l && l.fragments[0] && l.fragments[0].label !== s;
                return {
                    attr: r,
                    hasOriginal: a,
                    changed: o,
                    current: s,
                    original: i
                }
            };
            t.prototype.storeOriginalTag = function(t, e) {
                if (!b.isAttributeIgnored(e.ignoreType)) {
                    for (var n = this.attributes.getSwappableAttributes(e), o = 0; o < n.length; ++o) {
                        var i = n[o],
                            a = c.default.isSrcsetImage(e, i);
                        if (!(c.default.isMetaImage(e) || a || c.default.isImageUrl(e, i)) || !this.imageTranslationRepository.isEmpty) {
                            var s = this.getStoredAttrValue(t, e, i);
                            !s.hasOriginal && s.current && e.setAttribute(s.attr, s.current)
                        }
                    }
                    this.widgetData.domainOptions.canTranslateCssBackgroundImages() && r.default.canStyleChange(e) && this.setOriginalBackgroundImageAttributeIfNeeded(e)
                }
            };
            t.prototype.restoreOriginalTag = function(t, e) {
                if (!b.isAttributeIgnored(e.ignoreType)) {
                    var n = t.tags[e.nodeName.toLowerCase()];
                    n && n(e);
                    for (var o = this.attributes.getSwappableAttributes(e), r = 0; r < o.length; ++r) this.restoreOriginalAttribute(t, e, o[r]);
                    this.restoreBackgroundImage(e)
                }
            };
            t.prototype.restoreOriginalAttribute = function(t, e, n) {
                var o = this.getOriginalStoredAttrValue(t, e, n);
                null !== o && e.setAttribute(n, o)
            };
            t.prototype.restoreBackgroundImage = function(t) {
                if (r.default.canStyleChange(t)) {
                    var e = u.getWovnSrcAttributeName("background-image");
                    if (t.hasAttribute(e)) {
                        var n = t.getAttribute(e).split("!"),
                            o = n[0],
                            i = n[1] || "";
                        o !== (t.style.getPropertyValue("background-image") || "") && t.style.setProperty("background-image", o, i)
                    }
                }
            };
            t.prototype.storeOriginalValueStackTexts = function(t) {
                var e = this;
                t.fragments.forEach((function(t) {
                    s.isTextFragment(t) && e.storeOriginalText(t.nodes)
                }))
            };
            t.prototype.storeOriginalText = function(t) {
                var e = t[0];
                this.putComment(e, i.default.reduce(t, (function(t, e) {
                    return t + e.data
                }), ""))
            };
            t.prototype.putComment = function(t, e) {
                this.unifiedValueComments.insertOriginalSrcComment(t, e)
            };
            t.prototype.restoreOriginalText = function(e) {
                var n = e[0],
                    o = this.unifiedValueComments.getOriginalSrcFromComment(n);
                if (null !== o) {
                    n.data = t.keepWhiteSpace(n.data, o);
                    for (var r = 1; r < e.length; ++r) e[r].data = "";
                    this.unifiedValueComments.removeOriginalSrcComment(n)
                }
            };
            t.prototype.addSrcOfReportHelper = function(t, e, n, o, r) {
                this.textNormalizer.isNormalizedEmpty(t) || this.widget.c("ReportHelper").addSrc(t, e, n, o, r)
            };
            t.prototype.isCacheValid = function() {
                return this.translationRepository.isLoaded && this.imageTranslationRepository.isLoaded
            };
            t.prototype.readWidgetTranslationData = function() {
                var t = this.widgetData.getTranslationData(),
                    e = this.translationDataBridge.loadFromStore();
                e.update(t);
                return e
            };
            t.prototype.refreshCache = function(t) {
                var e = this.readWidgetTranslationData();
                this.translationRepository.loadTranslationData(e, t);
                this.imageTranslationRepository.loadTranslationData(e.imgVals, t.img_vals);
                var n = this.translationDataBridge.create((new Date).getTime());
                this.translationRepository.copyTo(n);
                this.imageTranslationRepository.copyTo(n);
                n.storeToStorage()
            };
            t.toText = function(t) {
                return t.fragments.filter((function(t) {
                    return t.isText
                })).map((function(t) {
                    return t.label
                })).join("")
            };
            t.prototype.replaceHref = function(t, e) {
                this.replaceLinkTag(t, e, "href")
            };
            t.prototype.replaceLinkTag = function(t, e, n) {
                void 0 === n && (n = "href");
                var o = e.element,
                    r = this.widget.c("LinkTranslationsManager"),
                    i = r.isPreviouslyTranslated(o),
                    a = r.findTranslation(o, t, n);
                if (a) r.applyTranslation(o, a, n);
                else if (i) r.removeTranslation(o, n);
                else {
                    var s = this.url.langUrl(t, o, n);
                    s && e.setAttribute(n, s)
                }
            };
            t.prototype.translateSrcset = function(t, e) {
                var n = this,
                    o = this.srcSetUtils.parseAndResolveSrcSetUrls(t),
                    r = t;
                Object.keys(o).forEach((function(t) {
                    var i = n.findImageTranslationWithNormalization(t, e);
                    if (i) {
                        var a = o[t];
                        r = r.replace(a, i)
                    }
                }));
                return r
            };
            t.prototype.findImageTranslationWithNormalization = function(t, e) {
                var n = this.urlFormatterFactory.convertToFullUrl(t),
                    o = this.urlFormatterFactory.createFromUrl(n).getNormalizedPageUrl(this.widget.isBackend(), this.widget.getBackendUrlPattern()),
                    r = this.imageTranslationRepository.find(o, e);
                return r ? r.dst_url : null
            };
            t.prototype.replaceForm = function(t, e) {
                var n = e.getAttribute("method"),
                    o = e.getAttribute("action");
                if (!o || 0 == o.length) {
                    e.setAttribute("action", this.urlFormatterFactory.convertToFullUrl(location.href));
                    o = location.href
                }
                if (this.snippetSettings.urlPattern !== v.UrlLanguagePattern.Query || n && "GET" !== n.toUpperCase()) this.replaceLinkTag(t, e, "action");
                else {
                    if (this.url.shouldIgnoreLink(o)) return;
                    for (var r = this.snippetSettings.langParamName, i = e.element.children, a = i.length - 1; a >= 0; a--) {
                        var s = i[a];
                        if ("INPUT" === s.tagName && s.getAttribute("name") === r && "hidden" === s.getAttribute("type")) {
                            s.setAttribute("value", t);
                            return
                        }
                    }
                    var u = document.createElement("input");
                    u.setAttribute("type", "hidden");
                    u.setAttribute("name", r);
                    u.setAttribute("value", t);
                    e.element.appendChild(u)
                }
            };
            t.prototype.noop = function() {};
            t.prototype.beforeSwapUnifiedValue = function(t) {
                p.triggerEvent("beforeSwapUnifiedValue", {
                    rootNode: t
                })
            };
            return t
        }();
    e.UnifiedValue = S
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.backgroundImageToUrlArray = void 0;
    e.backgroundImageToUrlArray = function(t) {
        var e = [];
        t.split(/,\s+/).forEach((function(t) {
            var n = /^url\(["']?([^"']+?)["']?\)?$/.exec(t);
            n && e.push(n[1])
        }));
        return e
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getIgnoredChildNodes = void 0;
    var o = {
        symbol: {
            title: !0,
            desc: !0
        }
    };
    e.getIgnoredChildNodes = function(t) {
        return o[t] || {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isAdElement = void 0;
    var o = n(8);
    e.isAdElement = function(t, e) {
        return [r, i].some((function(n) {
            return n(t, e)
        }))
    };

    function r(t, e) {
        return "IMG" === e && /googlesyndication\.com/i.test(t.getAttribute("src"))
    }

    function i(t, e) {
        if ("A" !== e) return !1;
        var n = t.hostname;
        return o.endsWith(n, "buysellads.com")
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportedValues = void 0;
    var o = function() {
        function t() {
            this._values = []
        }
        t.prototype.addValue = function(t) {
            this._values.push(t)
        };
        t.prototype.getValues = function() {
            return this._values
        };
        return t
    }();
    e.ReportedValues = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SchemaTranslation = void 0;
    var r = n(5),
        i = n(127),
        a = o(n(0)),
        s = function() {
            function t() {}
            t.prototype.reportSchemaTags = function(t) {
                var e = this,
                    n = [];
                a.default.toArrayFromDomList(t.querySelectorAll('script[type="application/ld+json"]:not([data-wovn-ignore]):not([wovn-ignore])')).forEach((function(t) {
                    try {
                        var o = JSON.parse(t.textContent);
                        n = n.concat(e.recursiveTraverse(o))
                    } catch (t) {}
                }));
                return n
            };
            t.prototype.recursiveTraverse = function(t) {
                var e = this,
                    n = [];
                this.isArray(t) ? t.forEach((function(t) {
                    n = n.concat(e.recursiveTraverse(t))
                })) : this.isObject(t) ? Object.keys(t).forEach((function(o) {
                    if (e.isTranslatableKey(o)) {
                        var r = t[o];
                        n = n.concat(e.recursiveTraverse(r))
                    }
                })) : this.isTranslatableContent(t) && n.push(t);
                return n
            };
            t.prototype.isTranslatableKey = function(t) {
                return !t.startsWith("@")
            };
            t.prototype.isArray = function(t) {
                return Array.isArray(t)
            };
            t.prototype.isObject = function(t) {
                return "object" == typeof t
            };
            t.prototype.isTranslatableContent = function(t) {
                return "string" == typeof t && !r.isAbsoluteUrl(t) && !this.isNumber(t) && !this.isDate(t)
            };
            t.prototype.isNumber = function(t) {
                return /^[0-9.]+$/.test(t)
            };
            t.prototype.isDate = function(t) {
                return i.isIso8601FullDate(t)
            };
            return t
        }();
    e.SchemaTranslation = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isIso8601FullDate = void 0;
    var o = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(([+-]\d{2}:\d{2})|Z)?$/i;
    e.isIso8601FullDate = function(t) {
        return o.test(t)
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(0)),
        i = n(5),
        a = n(57),
        s = n(73),
        u = function() {
            function t(t, e) {
                var n = this;
                this.widget = t;
                this.urlComponent = e;
                this.lastHref = null;
                this.onUrlChangedCallback = function() {};
                this.onHistoryStateChanged = function(t) {
                    t.newHistoryState && s.isWovnUrlChangedHistoryState(t.newHistoryState.data) || n.refreshWidget()
                };
                this.onTurbolinksPageChanged = function() {
                    return n.refreshWidget()
                };
                this.onHashChanged = function() {
                    return n.refreshWidget()
                }
            }
            t.prototype.refreshWidget = function() {
                var t = this.widget.getLocation();
                if (!this.hasUrlNotChanged(t)) {
                    this.lastHref = t;
                    this.onUrlChangedCallback()
                }
            };
            t.prototype.hasUrlNotChanged = function(t) {
                return this.lastHref === t || this.isUrlLanguageUnchanged(t)
            };
            t.prototype.listen = function(t) {
                this.onUrlChangedCallback = t;
                this.lastHref || (this.lastHref = this.widget.getLocation());
                r.default.onEvent(window, "hashchange", this.onHashChanged);
                window.Turbolinks ? r.default.onEvent(document, "turbolinks:load", this.onTurbolinksPageChanged) : r.default.onEvent(document, a.HistoryEvents.HISTORY_STATE_CHANGED, this.onHistoryStateChanged)
            };
            t.prototype.stop = function() {
                r.default.removeHandler(document, a.HistoryEvents.HISTORY_STATE_CHANGED, this.onHistoryStateChanged);
                r.default.removeHandler(document, "turbolinks:load", this.onTurbolinksPageChanged);
                r.default.removeHandler(window, "hashchange", this.onHashChanged)
            };
            t.prototype.destroy = function() {
                this.stop()
            };
            t.prototype.isUrlLanguageUnchanged = function(t) {
                var e = this.urlComponent.getLangCode(t),
                    n = this.urlComponent.getUrl(e, this.lastHref);
                return this.urlsAreEquivalentIgnoringTrailingSlash(t, n)
            };
            t.prototype.urlsAreEquivalentIgnoringTrailingSlash = function(t, e) {
                var n = i.parseUrl(t),
                    o = i.parseUrl(e),
                    r = "/" == n.pathname ? "" : n.pathname,
                    a = "/" == o.pathname ? "" : o.pathname;
                return n.protocol === o.protocol && n.host === o.host && r === a && n.search === o.search && n.hash === o.hash
            };
            return t
        }();
    e.default = u
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.API_READY_EVENT_NAME = e.LANG_CHANGED_EVENT_NAME = void 0;
    var r = n(12),
        i = o(n(2)),
        a = o(n(26)),
        s = n(61),
        u = n(74);
    e.LANG_CHANGED_EVENT_NAME = "wovnLangChanged";
    e.API_READY_EVENT_NAME = "wovnApiReady";
    var l = function() {
        function t(t, n, o, i, a, s, u, l, c) {
            this.widget = t;
            this.data = n;
            this.textNormalizer = o;
            this.inSiteSearcher = i;
            this.instantTranslationController = a;
            this.liveEditorSettings = s;
            this.auditTrigger = u;
            this.lang = l;
            this.cookieStore = c;
            this.apiReady = !1;
            this.langChangedEvent = r.createEvent(e.LANG_CHANGED_EVENT_NAME, !0, !0);
            this.wovnApiReadyEvent = r.createEvent(e.API_READY_EVENT_NAME, !0, !0)
        }
        t.prototype.changeLang = function(t) {
            var e = this;
            if (!this.apiReady) return !1;
            var n = this.lang.getCode(t);
            if (!n) return !1;
            this.widget.c("Interface").changeLangByCode(n, (function(t) {
                e.widget.c("Url").changeUrl(t)
            }));
            return !0
        };
        t.prototype.getCurrentLang = function() {
            return this.apiReady ? this.lang.get(this.lang.getActualLang()) : this.lang.get("en")
        };
        t.prototype.getWovnUrl = function(t) {
            if (!this.apiReady) return t;
            var e = this.widget.c("Lang").getActualLang();
            return this.widget.c("Url").getUrl(e, t)
        };
        t.prototype.swap = function(t) {
            if (this.apiReady) {
                var e = this.getCurrentLang();
                if (e) {
                    var n = e.code;
                    this.widget.c("DomAuditor").supervisedSwapVals(n, {
                        head: t
                    }, !0)
                }
            }
        };
        t.prototype.manualStart = function() {
            var t = this;
            this.apiReady ? this.widget.c("WidgetInit").startSwapping() : addEventListener("wovnApiReady", (function(e) {
                t.widget.c("WidgetInit").startSwapping()
            }))
        };
        t.prototype.optOut = function() {
            var t = this,
                e = function() {
                    var e = r.createEvent("wovn-wap-optOutCookies", !0, !0);
                    r.dispatchEvent(e);
                    t.cookieStore.disable()
                };
            this.apiReady ? e() : addEventListener("wovnApiReady", (function(t) {
                return e()
            }))
        };
        t.prototype.getTextTranslation = function(t, e) {
            if (!this.apiReady) return t;
            for (var n = this.textNormalizer.normalizeText(t, !0), o = this.data.getTranslationData(), r = [o.htmlTextVals, o.textVals], i = 0; i < r.length; ++i) {
                var a = r[i];
                if (a[n] && a[n][e]) return a[n][e][0].data
            }
            return t
        };
        t.prototype.translateTexts = function(t, e, n) {
            var o = this;
            if (!this.apiReady) return i.default.toObject(n, (function(t) {
                return t
            }), (function(t) {
                return t
            }));
            var r = this.widget.c("Lang").getDefaultCodeIfExists();
            if (t !== r) {
                console.warn("Deprecated API usage. fromLang must be the source language of the page (" + r + ")");
                return i.default.toObject(n, (function(t) {
                    return t
                }), (function(t) {
                    return t
                }))
            }
            return i.default.toObject(n, (function(t) {
                return t
            }), (function(t) {
                return o.getTextTranslation(t, e)
            }))
        };
        t.prototype.ruleBaseTranslation = function(t, e, n) {
            return this.ruleBaseTranslationReady() ? this.widget.c("RuleBaseTranslation").translate(t, e, n) : null
        };
        t.prototype.dynamicTranslate = function(t, e, n, o) {
            this.instantTranslationController.translate(e, t).then((function(t) {
                return n(t.body, t.headers)
            }), o)
        };
        t.prototype.search = function(t, e, n, o) {
            if (!o) throw new Error("errorCallback is required");
            if (n)
                if (e) {
                    if (t) return this.inSiteSearcher.search(t, e).then((function(t) {
                        n(t);
                        return t
                    }), o);
                    o("query is required")
                } else o("language is required");
            else o("callback is required")
        };
        t.prototype.ruleBaseTranslationReady = function() {
            if (!this.isApiReady()) return !1;
            var t = null != this.widget.c("RuleBaseTranslation"),
                e = this.data.pageData.getPublishedLangs().length > 0;
            return t && e
        };
        t.prototype.makeReady = function() {
            this.apiReady = !0;
            this.dispatchWovnApiReadyEvent()
        };
        t.prototype.isApiReady = function() {
            return this.apiReady
        };
        t.prototype.dispatchWovnApiReadyEvent = function() {
            this.liveEditorSettings.isEnabled || r.dispatchEvent(this.wovnApiReadyEvent);
            this.dispatchWovnApiReadyEvent = function() {}
        };
        t.prototype.dispatchLangChangedEvent = function() {
            r.dispatchEvent(this.langChangedEvent)
        };
        t.prototype.triggerAudit = function() {
            this.apiReady && this.auditTrigger.refresh()
        };
        t.prototype.version = function() {
            return {
                hash: a.default.BUILD_HASH,
                build_id: a.default.BUILD_ID,
                build_time: a.default.BUILD_TIME
            }
        };
        t.prototype.stop = function() {
            var t = this;
            return this.lang.setDocLang(this.lang.getDefaultCodeIfExists()).then((function() {
                t.widget.destroy();
                t.destroyWidgetApi()
            }))
        };
        t.prototype.destroyWidgetApi = function() {
            var t = window;
            t.WOVN = void 0;
            t.Wovnio = void 0;
            document.WOVNIO = void 0
        };
        t.prototype.start = function() {
            s.widgetMain()
        };
        t.prototype.restart = function(t) {
            var e = this;
            return this.stop().then((function() {
                t && e.replaceToken(t);
                e.start()
            }))
        };
        t.prototype.replaceToken = function(t) {
            var e = u.findWovnSnippet(document.documentElement),
                n = e.getAttribute("data-wovnio");
            if (n) {
                n = n.replace(/key=[^&]+/, "key=" + t);
                e.setAttribute("data-wovnio", n)
            }
        };
        return t
    }();
    e.default = l
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(0)),
        i = o(n(15)),
        a = n(44),
        s = n(12),
        u = n(75),
        l = n(42),
        c = n(7),
        d = "wovn-translate-widget",
        p = "wovn-languages",
        h = function() {
            function t(t, e, n, o, r, i, a, s, u, l, c, h, g, f, m, v) {
                var y = this;
                this.widget = t;
                this.data = e;
                this.lang = n;
                this.tagCustomization = o;
                this.agent = r;
                this.performanceMonitor = i;
                this.externalComponentLoader = a;
                this.pageChecker = s;
                this.url = u;
                this.liveEditorSettings = l;
                this.liveEditButtonBuilder = c;
                this.previewModeButtonBuilder = h;
                this.browserLanguageProvider = g;
                this.reportValuesButtonBuilder = f;
                this.wovnElementProvider = m;
                this.diagnostics = v;
                this.WIDGET_ID = d;
                this.CUSTOM_WIDGET_ID = p;
                this.appendedChildren = [];
                this.scrollTop = 0;
                this.scrollTopBefore = 0;
                this.documentScrollTop = 0;
                this.onHoldAnim = null;
                this.isChangingLang = !1;
                this.renderedAdditionalButtons = [];
                this.wovnElementProvider.registerWovnElement((function() {
                    return y.getWidgetElements()
                }))
            }
            t.prototype.hide = function() {
                var t = this.getStandardWidgetElement();
                t && (t.style.display = "none")
            };
            t.prototype.setWidgetLangChangeWord = function(t, e) {
                if (this.data.domainOptions.useGenericLangWord()) {
                    var n = this.data.domainOptions.genericLangWord();
                    this.setInnerHTMLByClass(t, "wovn-current-lang", n || "Language")
                } else this.setInnerHTMLByClass(t, "wovn-current-lang", e || "Language")
            };
            t.prototype.setInnerHTMLByClass = function(t, e, n) {
                r.default.toArrayFromDomList(t.getElementsByClassName(e)).forEach((function(t) {
                    t.innerHTML = n
                }))
            };
            t.prototype.insertStyles = function(t) {
                var e = Array.isArray(t) ? t.join("\n") : t;
                if (e) {
                    var n = document.createElement("style");
                    n.type = "text/css";
                    n.className = "wovn-style";
                    n.innerHTML = e;
                    document.getElementsByTagName("head")[0].appendChild(n);
                    this.appendedChildren.push(n)
                }
            };
            t.prototype.disableBrowserTranslation = function() {
                if (!r.default.getMetaElement("google", {
                        value: "notranslate"
                    })) {
                    var t = document.createElement("meta");
                    t.setAttribute("name", "google");
                    t.setAttribute("value", "notranslate");
                    document.getElementsByTagName("head")[0].appendChild(t);
                    this.appendedChildren.push(t)
                }
            };
            t.prototype.animHideWidget = function(t) {
                t && (t.className = t.className.replace(/slide-in/, "slide-out"))
            };
            t.prototype.animShowWidget = function(t) {
                t && (t.className = t.className.replace(/slid-out/, "").replace(/slide-out/, "slide-in"))
            };
            t.prototype.scrollWidgetAction = function() {
                this.documentScrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
                var t = this.getStandardWidgetElement(),
                    e = document.getElementsByClassName("wovn-lang-container")[0];
                this.documentScrollTop <= this.scrollTop ? this.animScrollUp(t, e) : this.animScrollDown(t, e);
                this.scrollTop = this.documentScrollTop
            };
            t.prototype.scrollStopWidgetAction = function() {
                this.documentScrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
                var t = this.getStandardWidgetElement(),
                    e = document.getElementsByClassName("wovn-lang-container")[0];
                this.documentScrollTop <= this.scrollTopBefore ? this.animScrollUpThenStop(t, e) : this.animScrollDownThenStop(t, e);
                this.scrollTopBefore = this.scrollTop;
                this.scrollTop = this.documentScrollTop
            };
            t.prototype.animScrollUp = function(t, e) {
                var n = this;
                null !== this.onHoldAnim && clearTimeout(this.onHoldAnim);
                if (t && !c.hasClass(e, "is-open")) {
                    this.animShowWidget(t);
                    this.onHoldAnim = setTimeout((function() {
                        n.animHideWidget(t)
                    }), 1e3)
                }
            };
            t.prototype.animScrollDown = function(t, e) {
                var n = this;
                null !== this.onHoldAnim && clearTimeout(this.onHoldAnim);
                t && (c.hasClass(e, "is-open") || (this.onHoldAnim = setTimeout((function() {
                    n.animHideWidget(t)
                }), 1e3)))
            };
            t.prototype.animScrollUpThenStop = function(t, e) {
                var n = this;
                null !== this.onHoldAnim && clearTimeout(this.onHoldAnim);
                if (t && !c.hasClass(e, "is-open")) {
                    this.animShowWidget(t);
                    this.onHoldAnim = setTimeout((function() {
                        n.animHideWidget(t)
                    }), 4e3)
                }
            };
            t.prototype.animScrollDownThenStop = function(t, e) {
                var n = this;
                null !== this.onHoldAnim && clearTimeout(this.onHoldAnim);
                if (t && !c.hasClass(e, "is-open")) {
                    this.animShowWidget(t);
                    this.onHoldAnim = setTimeout((function() {
                        n.animHideWidget(t)
                    }), 4e3)
                }
            };
            t.prototype.scrollStop = function(t) {
                if (t && "[object Function]" === Object.prototype.toString.call(t)) {
                    var e;
                    r.default.onEvent(window, "scroll", (function() {
                        window.clearTimeout(e);
                        e = setTimeout((function() {
                            t()
                        }), 300)
                    }), !0)
                }
            };
            t.prototype.ensureDefaultLangInList = function(t) {
                var e = this.data.pageData.getLang();
                if (e) {
                    var n = this.lang.get(e);
                    t.some((function(t) {
                        return t.code === n.code
                    })) || t.unshift(n)
                }
                return t
            };
            t.prototype.buildWidgetLangList = function(t, e) {
                if (t) {
                    var n = t.className.match(/\bwovn-lang-list\b/) ? t : t.getElementsByClassName("wovn-lang-list")[0];
                    if (n) {
                        e = this.ensureDefaultLangInList(e || []);
                        var o, i, a = this.url.getLangCode();
                        a != this.lang.getDocLang() && (a = this.lang.getDocLang()); - 1 === r.default.findIndex(e, a, (function(t, e) {
                            return t.code === e
                        })) && (a = this.lang.getDefaultCodeIfExists());
                        for (var s = 0; s < e.length; s++) {
                            var u = e[s];
                            (o = document.createElement("li")).setAttribute("class", "wovn-switch");
                            o.innerHTML = u.name;
                            o.setAttribute("data-value", u.code);
                            if (u.code == a) {
                                o.setAttribute("class", "wovn-switch selected");
                                i = u.name
                            }
                            n.appendChild(o)
                        }
                        this.setWidgetLangChangeWord(t, i)
                    }
                }
            };
            t.prototype.changeLangByCode = function(t, e) {
                this.changeLang(t, e, !1)
            };
            t.prototype.onLanguageSwitchClicked = function(t) {
                var e = t.getAttribute("data-value");
                this.changeLang(e, null, !0)
            };
            t.prototype.changeLang = function(t, e, n) {
                var o = this;
                this.performanceMonitor.mark(l.MonitorEventType.ChangeLangStart, {
                    newLang: t
                });
                if (this.isChangingLang) setTimeout((function() {
                    o.changeLang(t, e, n)
                }), 100);
                else {
                    this.isChangingLang = !0;
                    this.lang.setDocLang(t);
                    this.performanceMonitor.mark(l.MonitorEventType.ChangeLangEnd, {
                        newLang: t
                    });
                    e && e(t);
                    var r = this.widget.c("MachineTranslatedModal");
                    this.data.domainOptions.useMachineTranslatedModal() && r && r.start(n);
                    var i = this.widget.c("ParcelForwarding");
                    i && i.updateBannerLanguage();
                    this.tagCustomization.load();
                    for (var a = 0, s = this.getWidgetElements(); a < s.length; a++) {
                        var u = s[a];
                        this.updateSelectedLanguage(u, t)
                    }
                    this.isChangingLang = !1
                }
            };
            t.prototype.updateSelectedLanguage = function(t, e) {
                for (var n = t.getElementsByClassName("wovn-switch"), o = null, r = 0; r < n.length; r++) {
                    c.removeClass(n[r], "selected");
                    if (n[r].getAttribute("data-value") === e) {
                        c.addClass(n[r], "selected");
                        o = n[r]
                    }
                }
                o && this.isStandardWidgetElement(t) && this.setWidgetLangChangeWord(t, o.textContent || o.innerText)
            };
            t.prototype.attachLangClickHandlers = function(t) {
                var e = this;
                if (t) {
                    var n = r.default.toArrayFromDomList(t.getElementsByClassName("wovn-switch"));
                    0 === n.length && (n = r.default.toArrayFromDomList(t.getElementsByTagName("a")));
                    0 === n.length && (n = r.default.toArrayFromDomList(t.getElementsByTagName("li")));
                    if (0 !== n.length)
                        for (var o = function(t) {
                                r.default.onEvent(t, "click", (function() {
                                    e.onLanguageSwitchClicked(t)
                                }))
                            }, i = 0, a = n; i < a.length; i++) {
                            o(a[i])
                        }
                }
            };
            t.prototype.listenForDynamicallyAddedCustomWidget = function(t) {
                var e = this;
                this.dynamicallyAddedCustomWidgetDetector || (this.dynamicallyAddedCustomWidgetDetector = function(n) {
                    e.checkForDynamicallyAddedCustomWidget(t)
                });
                s.addEventListener(u.AuditEventNames.AUDIT_COMPLETED, this.dynamicallyAddedCustomWidgetDetector)
            };
            t.prototype.checkForDynamicallyAddedCustomWidget = function(t) {
                var e = this.getCustomWidgetElements().filter((function(t) {
                        return !t.getAttribute("data-ready")
                    })),
                    n = this.getStandardWidgetElement();
                if (e.length > 0) {
                    n && c.removeNode(n);
                    this.shouldInsertWidgetElement() && this.configureCustomWidget();
                    this.renderedAdditionalButtons.forEach((function(t) {
                        return t.appendToDom(n)
                    }))
                }
            };
            t.prototype.configureCustomWidget = function() {
                for (var t = 0, e = this.getCustomWidgetElements(); t < e.length; t++) {
                    var n = e[t];
                    this.renderCustomWidget(n)
                }
            };
            t.prototype.renderCustomWidget = function(t) {
                if (!("true" === t.getAttribute("data-ready"))) {
                    t.setAttribute("data-ready", "true");
                    t.setAttribute("data-theme", "built-in");
                    if (0 !== t.getElementsByClassName("wovn-switch-template").length) {
                        var e = t.getElementsByClassName("wovn-switch-template")[0];
                        e.className.match(/(^| )wovn-switch( |$)/i) || function() {
                            for (var t = 0; t < e.children.length; t++)
                                if (e.children[t].className.match(/(^| )wovn-switch( |$)/i)) return !0;
                            return !1
                        }() || c.addClass(e, "wovn-switch");
                        var n = document.createElement("div");
                        n.appendChild(e.cloneNode(!0));
                        for (var o = void 0, r = this.ensureDefaultLangInList(this.data.getConvertedLangs()), i = 0; i < r.length; i++) {
                            (o = document.createElement("div")).innerHTML = n.innerHTML.replace(/wovn-lang-name/g, r[i].name);
                            o.getElementsByClassName("wovn-switch")[0].setAttribute("data-value", r[i].code);
                            e.parentNode.insertBefore(o.children[0], e)
                        }
                        c.removeNode(e)
                    } else if (0 === t.getElementsByClassName("wovn-switch").length)
                        if (0 === t.getElementsByTagName("a").length) {
                            t.innerHTML = "";
                            if ("ul" === t.nodeName.toLowerCase() || "ol" === t.nodeName.toLowerCase()) {
                                var a = t;
                                c.addClass(a, "wovn-lang-list")
                            } else {
                                (a = document.createElement("ul")).className = "wovn-lang-list";
                                t.appendChild(a)
                            }
                            this.buildWidgetLangList(t, this.data.getConvertedLangs())
                        } else {
                            var s = t.getElementsByTagName("a");
                            for (i = 0; i < s.length; i++) s[i].className = s[i].className + (s[i].className.length > 0 ? s[i].className + " " : "") + "wovn-switch"
                        } this.attachLangClickHandlers(t);
                    this.updateSelectedLanguage(t, this.lang.getDocLang())
                }
            };
            t.prototype.applyPosition = function(t, e) {
                this.addPositionClass(t, e)
            };
            t.prototype.applyMobilePosition = function(t, e) {
                this.addPositionClass(t, e, "mobile-")
            };
            t.prototype.addPositionClass = function(t, e, n) {
                n = n || "";
                "default" !== e && c.addClass(t, n + "position-" + e.replace(/[ _]/g, "-"))
            };
            t.prototype.shouldAutoHideWidget = function() {
                var t = this.data.pageData.getLang(),
                    e = this.browserLanguageProvider.getLanguage(),
                    n = this.lang.getDocLang();
                return this.data.domainOptions.autoHideWidget() && null !== e && t === e.code && t === n && e.isFirstUserPreference
            };
            t.prototype.applyStandardWidgetOptions = function(t) {
                var e = this.data.domainOptions.getCss();
                this.insertStyles(e.style);
                if (this.agent.isMobile()) {
                    this.insertStyles(e.mobile_position);
                    this.applyMobilePosition(t, this.data.domainOptions.getMobilePosition())
                } else {
                    this.insertStyles(e.position);
                    this.applyPosition(t, this.data.domainOptions.getDesktopPosition())
                }
                this.data.domainOptions.hideLogo() && c.addClass(t, "hide-logo");
                this.data.domainOptions.showTranslatedByMachine() && c.addClass(t, "show-tbm");
                this.buildWidgetLangList(t, this.data.getConvertedLangs());
                this.attachLangClickHandlers(t);
                var n = this.data.domainOptions.getWidgetStyle();
                if ("floating" === n.type && "custom" == n.color.name) {
                    var o = t.getElementsByClassName("wovn-logo wovn-logo--small"),
                        r = document.createElement("a");
                    r.setAttribute("class", "wovn-logo wovn-logo--small wovn-logo--custom");
                    r.innerHTML = i.default.languageSelector.newLogoHtml;
                    var a = o[0].parentNode;
                    c.removeNode(o[0]);
                    a.appendChild(r)
                }
            };
            t.prototype.applyUniversalWidgetOptions = function() {
                var t = this.data.domainOptions.getParcelForwardingProvider();
                t && "JP" !== this.data.domainOptions.getCountryCode() && this.externalComponentLoader.loadExternalComponents(["ParcelForwarding"]).then((function(e) {
                    e[0].start(t)
                }));
                this.data.domainOptions.notFoundUnpublish() && this.data.pageData.getPublishedLangs().length > 0 && this.pageChecker.notifyWovnIfNotFound()
            };
            t.prototype.shouldInsertWidgetElement = function() {
                return this.data.pageData.hasPublishedLang() && !this.liveEditorSettings.isEnabled
            };
            t.prototype.build = function() {
                c.removeNode(this.getStandardWidgetElement());
                c.removeNode(a.getWovnAdditionalButtonsContainer());
                for (;;) {
                    var t = document.getElementsByClassName("wovn-style");
                    if (0 == t.length) break;
                    c.removeNode(t[0])
                }
                var e = this.data.domainOptions.getWidgetDisplayType(),
                    n = "widget" === e || "auto" === e && 0 == this.getCustomWidgetElements().length;
                this.insertStyles(i.default.languageSelector.commonCss);
                this.insertStyles(i.default.languageSelector.additionalButtonsCss);
                if (this.shouldInsertWidgetElement()) {
                    this.applyUniversalWidgetOptions();
                    n ? this.shouldAutoHideWidget() || this.insertStandardWidgetElementsAndStyles() : this.configureCustomWidget();
                    this.refresh()
                }
            };
            t.prototype.insertStandardWidgetElementsAndStyles = function() {
                var t = this,
                    e = (this.data.domainOptions.getWidgetStyle(), document.createElement("div"));
                e.id = d;
                e.setAttribute("wovn", "");
                e.innerHTML = i.default.languageSelector.standardHtml;
                this.configureStandardWidgetHtml(e);
                var n = e.getElementsByClassName("wovn-lang-selector")[0],
                    o = e.getElementsByClassName("wovn-lang-container")[0],
                    a = document.querySelector(".wovn-click-catcher");
                setTimeout((function() {
                    t.animShowWidget(e)
                }), 1e3);
                if (this.agent.isMobile()) {
                    e.className += " mobile slide-out";
                    r.default.onEvent(window, "scroll", (function() {
                        return t.scrollWidgetAction()
                    }), !0);
                    this.scrollStop((function() {
                        return t.scrollStopWidgetAction()
                    }));
                    r.default.pageIsWidgetPreview() || (this.onHoldAnim = setTimeout((function() {
                        t.animHideWidget(e)
                    }), 5e3))
                }
                r.default.onEvent(n, "click", (function(e) {
                    return t.openDropdown(e, o, a)
                }));
                r.default.onEvent(o, "click", (function(n) {
                    return t.closeDropDown(n, o, a, e)
                }));
                e.setAttribute("data-ready", "true");
                this.applyStandardWidgetOptions(e);
                this.hideWidgetIfNeeded(e);
                document.body.appendChild(e);
                this.hasRenderedStandardWidget = !0;
                this.appendedChildren.push(e);
                a || (a = this.addClickCatcher(e, o))
            };
            t.prototype.configureStandardWidgetHtml = function(t) {
                "floating" == this.data.domainOptions.getWidgetStyle().type ? c.removeNode(t.querySelector("#wovn-logo--default")) : c.removeNode(t.querySelector("#wovn-logo--floating"))
            };
            t.prototype.openDropdown = function(t, e, n) {
                null !== this.onHoldAnim && clearTimeout(this.onHoldAnim);
                t.stopPropagation ? t.stopPropagation() : t.returnValue = !1;
                if (c.hasClass(e, "is-open")) {
                    c.removeClass(e, "is-open");
                    n.style.display = "none"
                } else {
                    c.addClass(e, "is-open");
                    n.style.display = "block"
                }
            };
            t.prototype.closeDropDown = function(t, e, n, o) {
                var r = this;
                this.onHoldAnim = setTimeout((function() {
                    r.animHideWidget(o)
                }), 4e3);
                t.stopPropagation ? t.stopPropagation() : t.returnValue = !1;
                c.removeClass(e, "is-open");
                n.style.display = "none"
            };
            t.prototype.addClickCatcher = function(t, e) {
                var n = this,
                    o = document.createElement("div");
                o.setAttribute("style", "z-index:2147483646;position:fixed;display:none;top:0;right:0;bottom:0;left:0;background:transparent;pointer-events: auto;");
                o.setAttribute("class", "wovn-click-catcher");
                r.default.onEvent(o, "click", (function(r) {
                    return n.closeDropDown(r, e, o, t)
                }));
                t.parentNode.insertBefore(o, t);
                return o
            };
            t.prototype.getWidgetElements = function() {
                return [this.getStandardWidgetElement()].concat(this.getCustomWidgetElements()).filter((function(t) {
                    return null !== t
                }))
            };
            t.prototype.getStandardWidgetElement = function() {
                return document.getElementById(d)
            };
            t.prototype.getCustomWidgetElements = function() {
                return this.data.domainOptions.canShowCustomWidgets() ? r.default.toArrayFromDomList(document.querySelectorAll("#wovn-languages,.wovn-languages")) : []
            };
            t.prototype.clearStandardWidgetLangList = function() {
                var t = this.getStandardWidgetElement();
                if (t)
                    for (var e = 0, n = r.default.toArrayFromDomList(t.getElementsByTagName("li")); e < n.length; e++) {
                        var o = n[e];
                        c.removeNode(o)
                    }
            };
            t.prototype.reload = function() {
                this.clearStandardWidgetLangList();
                this.hasRenderedStandardWidget && !this.getStandardWidgetElement() && this.build();
                this.refresh()
            };
            t.prototype.refresh = function() {
                for (var t = this, e = 0, n = this.getWidgetElements(); e < n.length; e++) {
                    var o = n[e];
                    if (0 === o.getElementsByClassName("wovn-switch").length) {
                        this.buildWidgetLangList(o, this.data.getConvertedLangs());
                        this.attachLangClickHandlers(o)
                    }
                    this.hideWidgetIfNeeded(o)
                }
                this.renderedAdditionalButtons.forEach((function(e) {
                    return e.appendToDom(t.getStandardWidgetElement())
                }))
            };
            t.prototype.hideWidgetIfNeeded = function(t) {
                if (this.shouldShowWidget(t)) {
                    t.style.display = "block";
                    this.disableBrowserTranslation()
                } else t.style.display = "none"
            };
            t.prototype.shouldShowWidget = function(t) {
                return t.getElementsByClassName("wovn-switch").length > 1 && !this.shouldAutoHideWidget() && this.data.domainOptions.hasDomainOptions()
            };
            t.prototype.isWidgetElement = function(t) {
                return this.isStandardWidgetElement(t) || this.isCustomWidgetElement(t)
            };
            t.prototype.isStandardWidgetElement = function(t) {
                return t.id === d
            };
            t.prototype.isCustomWidgetElement = function(t) {
                if (t.id === p) return !0;
                var e = t.getAttribute ? t.getAttribute("class") : null;
                return e && !!e.match(new RegExp("(^|\\s)wovn-languages($|\\s)", "i"))
            };
            t.prototype.destroy = function() {
                r.default.destroy();
                for (var t = 0; t < this.appendedChildren.length; t++) {
                    c.removeNode(this.appendedChildren[t]);
                    c.removeNode(document.querySelector(".wovn-live-edit-button"))
                }
                s.removeEventListener(u.AuditEventNames.AUDIT_COMPLETED, this.dynamicallyAddedCustomWidgetDetector)
            };
            t.prototype.addExitPreviewModeButton = function() {
                var t = this.getStandardWidgetElement(),
                    e = this.previewModeButtonBuilder.setWidgetStyle(this.data.domainOptions.getWidgetStyle()).build();
                e.appendToDom(t);
                this.renderedAdditionalButtons.push(e)
            };
            t.prototype.addSessionTools = function(t) {
                var e = this.diagnostics.getTranslatePageLink();
                this.setWovnLink(e);
                this.addEditButton(t);
                this.data.domainOptions.hasFeature("manual_report") && this.addReportButton()
            };
            t.prototype.setWovnLink = function(t) {
                var e = this.getStandardWidgetElement();
                if (e)
                    for (var n = e.querySelectorAll("a.wovn-logo"), o = 0; o < n.length; ++o) {
                        n[o].href = t
                    }
            };
            t.prototype.addEditButton = function(t) {
                var e = this.getStandardWidgetElement();
                e && c.addClass(e, "show-live-edit-button");
                var n = this.liveEditButtonBuilder.setWidgetStyle(this.data.domainOptions.getWidgetStyle()).build(t);
                n.appendToDom(e);
                this.renderedAdditionalButtons.push(n)
            };
            t.prototype.addReportButton = function() {
                var t = this.getStandardWidgetElement();
                t && c.addClass(t, "show-report-value-button");
                var e = this.reportValuesButtonBuilder.setWidgetStyle(this.data.domainOptions.getWidgetStyle()).build();
                e.appendToDom(t);
                this.renderedAdditionalButtons.push(e)
            };
            return t
        }();
    e.default = h
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(0)),
        i = function() {
            function t(t, e, n, o) {
                this.dynamicLoadingController = t;
                this.data = e;
                this.unifiedValue = n;
                this.wovnWaitAuditListener = o;
                this.resetState()
            }
            t.prototype.resetState = function() {
                this.pendingTranslations = {};
                this.loadedTranslations = {};
                this.allDynamicLoadingResults = {
                    img_vals: {},
                    text_vals: {},
                    html_text_vals: {},
                    page_text_vals: {}
                };
                clearTimeout(this.fallbackTimeout)
            };
            t.prototype.destroy = function() {
                this.resetState()
            };
            Object.defineProperty(t.prototype, "pendingSrcTexts", {
                get: function() {
                    return Object.keys(this.pendingTranslations)
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.getLoadedTranslations = function() {
                return this.allDynamicLoadingResults
            };
            Object.defineProperty(t.prototype, "handledSrcTexts", {
                get: function() {
                    return Object.keys(this.loadedTranslations)
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.addTranslationRequest = function(t, e) {
                e !== this.data.pageData.getLang() && this.data.pageData.isPublished(e) && (this.loadedTranslations[t] || null != this.pendingTranslations[t] || (this.pendingTranslations[t] = !0))
            };
            t.prototype.loadRequestedTranslations = function() {
                for (var t = this, e = Object.keys(this.pendingTranslations), n = [], o = 0, r = e; o < r.length; o++) {
                    var i = r[o];
                    if (n.length >= 100) break;
                    if (this.pendingTranslations[i]) {
                        n.push(i);
                        this.pendingTranslations[i] = !1
                    }
                }
                if (n.length > 0) {
                    this.wovnWaitAuditListener.pause();
                    this.fallbackTimeout = setTimeout((function() {
                        t.wovnWaitAuditListener.removeWovnWait()
                    }), 5e3);
                    return this.dynamicLoadingController.findTranslations(n).then((function(e) {
                        n.forEach((function(e) {
                            t.loadedTranslations[e] = !0;
                            delete t.pendingTranslations[e]
                        }));
                        var o = e.body;
                        t.allDynamicLoadingResults = t.mergeDynamicLoadingResults(t.allDynamicLoadingResults, o);
                        t.unifiedValue.refreshTranslation(o)
                    })).catch((function() {
                        n.forEach((function(e) {
                            t.pendingTranslations[e] = !0
                        }))
                    })).finally((function() {
                        t.wovnWaitAuditListener.resumeOnNextAudit();
                        clearTimeout(t.fallbackTimeout)
                    }))
                }
            };
            t.prototype.mergeDynamicLoadingResults = function(t, e) {
                return {
                    img_vals: r.default.assign({}, t.img_vals, e.img_vals),
                    text_vals: r.default.assign({}, t.text_vals, e.text_vals),
                    html_text_vals: r.default.assign({}, t.html_text_vals, e.html_text_vals),
                    page_text_vals: r.default.assign({}, t.page_text_vals, e.page_text_vals)
                }
            };
            return t
        }();
    e.default = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CustomDomAccessor = void 0;
    var r = o(n(0)),
        i = function() {
            function t() {
                this.domAccessStrategy = null
            }
            t.prototype.setDomAccessStrategy = function(t) {
                if (t && this.domAccessStrategy) throw new Error("Concurrent use of CustomDomAccessor.");
                this.domAccessStrategy = t
            };
            t.prototype.getParentNode = function(t) {
                return this.domAccessStrategy ? this.domAccessStrategy.getParentNode(t) : t.parentNode
            };
            t.prototype.getChildNodes = function(t) {
                return this.domAccessStrategy ? this.domAccessStrategy.getChildNodes(t) : r.default.toArrayFromDomList(t.childNodes || [])
            };
            return t
        }();
    e.CustomDomAccessor = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PropertyValueSwapper = void 0;
    var o = n(134),
        r = function() {
            function t(t) {
                this.translationRepository = t
            }
            t.prototype.swap = function(t, e, n) {
                n && o.revertProperty(t);
                var r = this.translationRepository.find(t, e);
                r && o.replaceProperty(r, t, null)
            };
            return t
        }();
    e.PropertyValueSwapper = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.setProperty = e.revertProperty = e.getOriginalProperties = e.replaceProperty = void 0;
    var o = n(1),
        r = "data-wovn-original-property";

    function i(t, e, n) {
        s(e);
        var i = t.style;
        n = n || {
            style: {}
        };
        for (var a = 0, l = Object.keys(i); a < l.length; a++) {
            var c = l[a];
            0 == n.style.hasOwnProperty(c) && (n.style[c] = e.style[c]);
            e.style[c] = i[c];
            u(e, c)
        }! function(t, e) {
            e.setAttribute(r, o.stringifyJSON(t))
        }(n, e)
    }
    e.replaceProperty = i;

    function a(t) {
        if (t.getAttribute) {
            var e = t.getAttribute(r);
            if (e) return JSON.parse(e)
        }
        return null
    }
    e.getOriginalProperties = a;

    function s(t) {
        var e = a(t);
        if (e && e.style)
            for (var n = e.style, o = 0, r = Object.keys(n); o < r.length; o++) {
                var i = r[o];
                t.style[i] = n[i]
            }
    }
    e.revertProperty = s;
    e.setProperty = function(t, e) {
        i(t, e, a(e))
    };

    function u(t, e) {
        var n = e.replace(/([A-Z])/, "-$1").toLowerCase(),
            o = new RegExp("((" + n + ": [^;]+?)( !important)?);", "g");
        t.style.cssText = t.style.cssText.replace(o, "$1 !important;")
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SrcChildTextContentExtractor = void 0;
    var r = o(n(63)),
        i = function() {
            function t(t, e) {
                this.customDomAccessor = t;
                this.unifiedValueComments = e
            }
            t.prototype.extract = function(t) {
                for (var e = "", n = 0, o = this.customDomAccessor.getChildNodes(t); n < o.length; n++) {
                    var i = o[n],
                        a = new r.default(i);
                    "#text" === a.nodeName && (e += this.unifiedValueComments.getOriginalSrcFromComment(i) || a.data || "")
                }
                return e
            };
            return t
        }();
    e.SrcChildTextContentExtractor = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.BestPropertyValueSelector = void 0;
    var r = o(n(2)),
        i = function() {
            function t(t, e, n) {
                this.customDomAccessor = t;
                this.srcChildTextContentExtractor = e;
                this.textNormalizer = n
            }
            t.prototype.select = function(t, e) {
                var n = this,
                    o = -1,
                    r = null;
                t.forEach((function(t) {
                    if (n.isValidCandidatePropertyValue(t, e)) {
                        var i = t.dst.selectors,
                            a = n.getEstimationPoint(i, e);
                        if (a > 0 && o <= a) {
                            o = a;
                            r = t
                        }
                    }
                }));
                return r || null
            };
            t.prototype.isValidCandidatePropertyValue = function(t, e) {
                for (var n = 0, o = Object.keys(t.src_property); n < o.length; n++) {
                    var r = o[n],
                        i = t.src_property[r];
                    if ("childTextContent" === r) {
                        var a = this.srcChildTextContentExtractor.extract(e),
                            s = this.textNormalizer.removeNormalizedWhitespace(a);
                        return this.textNormalizer.removeNormalizedWhitespace(i) === s
                    }
                    if (i !== window.getComputedStyle(e)[r]) return !1
                }
                return !0
            };
            t.prototype.getEstimationPoint = function(t, e) {
                for (var n = e, o = 0, i = 0, a = t; i < a.length; i++) {
                    var s = a[i];
                    if ((n = this.customDomAccessor.getParentNode(n)).nodeName.toUpperCase() !== s.tag_name.toUpperCase()) return -1;
                    if (n.parentNode && n.parentNode.children)
                        for (var u = n.parentNode.children, l = s.position || 0, c = 0, d = 0; d < u.length; d++) {
                            var p = u[d];
                            if (p.nodeName.toUpperCase() == s.tag_name.toUpperCase()) {
                                if (c === l) {
                                    if (n !== p) return -1;
                                    break
                                }
                                c++
                            }
                        }
                    o++;
                    n.getAttribute && n.getAttribute("id") == s.element_id && (o += 10);
                    if (s.classes && n.className)
                        for (var h = s.classes, g = r.default.toObject(n.className.split(/\s+/), (function(t) {
                                return t
                            }), (function(t) {
                                return !0
                            })), f = 0, m = h; f < m.length; f++) {
                            g[m[f]] && (o += 10 / h.length)
                        }
                }
                return o
            };
            return t
        }();
    e.BestPropertyValueSelector = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PropertyValueTranslationRepository = void 0;
    var r = o(n(2)),
        i = function() {
            function t(t, e) {
                this.propertyValues = t;
                this.bestPropertyValueSelector = e;
                this.supportedTags = this.buildSupportedTags()
            }
            t.prototype.find = function(t, e) {
                var n = this.findPropertyValue(t, e);
                return n ? n.dst : null
            };
            t.prototype.findPropertyValue = function(t, e) {
                var n = (this.propertyValues[e] || {})[t.nodeName] || [];
                return this.bestPropertyValueSelector.select(n, t)
            };
            t.prototype.addSupportedTag = function(t) {
                r.default.includes(this.supportedTags, t) || this.supportedTags.push(t)
            };
            t.prototype.buildSupportedTags = function() {
                var t = this,
                    e = {};
                Object.keys(this.propertyValues).forEach((function(n) {
                    Object.keys(t.propertyValues[n]).forEach((function(t) {
                        e[t] = !0
                    }))
                }));
                return Object.keys(e)
            };
            return t
        }();
    e.PropertyValueTranslationRepository = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ServerControllerFactory = e.ReportPaths = void 0;
    var r = o(n(139)),
        i = o(n(140)),
        a = n(141),
        s = n(142),
        u = n(143),
        l = n(144),
        c = n(145),
        d = n(146),
        p = n(147),
        h = n(148),
        g = n(6);
    e.ReportPaths = {
        report_via_audit: "/report_values/",
        secure_report: "/report/",
        secure_xhr_report: "/xhr_report/"
    };
    var f = function() {
        function t(t, e, n, o, r, i, a, s, u, l, c, d) {
            this.data = t;
            this.projectToken = e;
            this.wovnContext = n;
            this.serviceExecutor = o;
            this.url = r;
            this.clientLocation = i;
            this.widget = a;
            this.uuidCookie = s;
            this.lang = u;
            this.liveEditorSettings = l;
            this.sessionProxyHttpRequestExecutor = c;
            this.reportStatusMonitor = d
        }
        Object.defineProperty(t.prototype, "instantTranslation", {
            get: function() {
                return new r.default(this.wovnContext, this.serviceExecutor, this.projectToken)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "api", {
            get: function() {
                return new i.default(this.wovnContext, this.serviceExecutor)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "dynamicLoading", {
            get: function() {
                return new a.DynamicLoadingController(this.wovnContext, this.serviceExecutor, this.projectToken, this.lang, this.widget)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "report", {
            get: function() {
                var t = new s.ReportController(this.serviceExecutor, e.ReportPaths.report_via_audit, this.projectToken, this.url, this.clientLocation, this.uuidCookie, this.wovnContext.eeHost, g.ContentType.FormUrlEncoded, !1),
                    n = this.data.domainOptions.canUseXhrWidgetSession(),
                    o = new s.ReportController(n ? this.serviceExecutor : this.sessionProxyHttpRequestExecutor, n ? e.ReportPaths.secure_xhr_report : e.ReportPaths.secure_report, this.projectToken, this.url, this.clientLocation, this.uuidCookie, this.wovnContext.cdnOriginHost, g.ContentType.JsonAsText, n);
                return new s.StatusUpdatingReportController(new s.SwitchingReportController(o, t), this.reportStatusMonitor)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "pageNotFound", {
            get: function() {
                return new u.PageNotFoundController(this.wovnContext, this.serviceExecutor, this.projectToken, this.url, this.clientLocation)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "widgetData", {
            get: function() {
                return new l.WidgetDataController(this.wovnContext, this.serviceExecutor, this.projectToken, this.clientLocation, this.widget)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "inSiteSearch", {
            get: function() {
                return new c.InSiteSearchController(this.wovnContext, this.serviceExecutor, this.projectToken)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "liveEditor", {
            get: function() {
                return new d.LiveEditorController(this.wovnContext, this.serviceExecutor, this.projectToken, this.clientLocation, this.widget, this.liveEditorSettings)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "inPageSession", {
            get: function() {
                return new p.InPageSessionController(this.sessionProxyHttpRequestExecutor, this.wovnContext)
            },
            enumerable: !1,
            configurable: !0
        });
        Object.defineProperty(t.prototype, "xhrWidgetSession", {
            get: function() {
                return new h.XhrWidgetSessionController(this.serviceExecutor, this.wovnContext, this.projectToken)
            },
            enumerable: !1,
            configurable: !0
        });
        return t
    }();
    e.ServerControllerFactory = f
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(6),
        a = function(t) {
            r(e, t);

            function e(e, n, o) {
                var r = t.call(this, n) || this;
                r.wovnContext = e;
                r.projectToken = o;
                return r
            }
            e.prototype.translate = function(t, e) {
                return this.getAndParseJson(this.wovnContext.cdnCacheHost, "/v0/instant_translate", {
                    token: this.projectToken,
                    src: t,
                    tgt_lang: e,
                    unified: !0
                }, i.ContentType.FormUrlEncoded)
            };
            return e
        }(n(9).WebService);
    e.default = a
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(6),
        a = function(t) {
            r(e, t);

            function e(e, n) {
                var o = t.call(this, n) || this;
                o.wovnContext = e;
                return o
            }
            e.prototype.reportError = function(t, e, n, o) {
                return this.post(this.wovnContext.eeHost, "/v0/errors", {
                    error_message: t,
                    url: e,
                    user_token: n,
                    error_info: o
                }, i.ContentType.FormUrlEncoded)
            };
            return e
        }(n(9).WebService);
    e.default = a
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DynamicLoadingController = void 0;
    var i = n(6),
        a = n(9),
        s = n(5),
        u = function(t) {
            r(e, t);

            function e(e, n, o, r, i) {
                var a = t.call(this, n) || this;
                a.wovnContext = e;
                a.projectToken = o;
                a.lang = r;
                a.widget = i;
                return a
            }
            e.prototype.findTranslations = function(t) {
                var e = this.lang.getDefaultCodeIfExists(),
                    n = s.parseUrl(this.widget.getLocation()).hostname;
                return this.postAndParseJson(this.wovnContext.eeHost, "/values/translate", {
                    token: this.projectToken,
                    srcs: t,
                    defaultLang: e,
                    host: n
                }, i.ContentType.JsonAsText)
            };
            return e
        }(a.WebService);
    e.DynamicLoadingController = u
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportController = e.SwitchingReportController = e.StatusUpdatingReportController = void 0;
    var i = n(9),
        a = n(1),
        s = n(58),
        u = n(59),
        l = function() {
            function t(t, e) {
                this.inner = t;
                this.reportStatusMonitor = e
            }
            t.prototype.reportValues = function(t, e, n, o, r) {
                var i = this;
                this.reportStatusMonitor.update(s.ReportStatus.Sending);
                return this.inner.reportValues(t, e, n, o, r).then((function() {
                    i.reportStatusMonitor.update(s.ReportStatus.Success)
                })).catch((function() {
                    i.reportStatusMonitor.update(s.ReportStatus.Failed)
                })).finally((function() {
                    i.reportStatusMonitor.update(s.ReportStatus.Idle)
                }))
            };
            return t
        }();
    e.StatusUpdatingReportController = l;
    var c = function() {
        function t(t, e) {
            this.secureReportController = t;
            this.reportController = e
        }
        t.prototype.reportValues = function(t, e, n, o, r) {
            return u.isCustomReport(r) ? this.secureReportController.reportValues(t, e, n, o, r) : this.reportController.reportValues(t, e, n, o, r)
        };
        return t
    }();
    e.SwitchingReportController = c;
    var d = function(t) {
        r(e, t);

        function e(e, n, o, r, i, a, s, u, l) {
            var c = t.call(this, e) || this;
            c.api_path = n;
            c.projectToken = o;
            c.url = r;
            c.clientLocation = i;
            c.uuidCookie = a;
            c.baseUrl = s;
            c.contentType = u;
            c.canUseXhrWidgetSession = l;
            return c
        }
        e.prototype.reportValues = function(t, e, n, o, r) {
            var i = this.buildRequestParameters(t, e, n, o, r),
                a = this.api_path + this.projectToken;
            return this.post(this.baseUrl, a, i, this.contentType, this.canUseXhrWidgetSession).then((function() {}))
        };
        e.prototype.buildRequestParameters = function(t, e, n, o, r) {
            var i = this.clientLocation ? this.clientLocation.hrefWithoutLangCode : this.url.getLocationWithoutBackendLanguage(),
                s = {
                    session_id: this.uuidCookie.cookie || "",
                    browser_id: window.navigator.userAgent,
                    timestamp: (new Date).getTime()
                },
                l = {
                    url: i,
                    no_record_vals: a.stringifyJSON(t, 4),
                    finger_print: a.stringifyJSON(s, 4),
                    report_count: n,
                    source: u.toServerReportSource(r)
                };
            o && (l.supervised_detected = !0);
            e && (l.high_priority = !0);
            return l
        };
        return e
    }(i.WebService);
    e.ReportController = d
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PageNotFoundController = void 0;
    var i = n(9),
        a = n(6),
        s = function(t) {
            r(e, t);

            function e(e, n, o, r, i) {
                var a = t.call(this, n) || this;
                a.wovnContext = e;
                a.projectToken = o;
                a.url = r;
                a.clientLocation = i;
                return a
            }
            e.prototype.notifyCurrentPageNotFound = function() {
                var t = {
                    url: this.clientLocation ? this.clientLocation.hrefWithoutLangCode : this.url.getLocationWithoutBackendLanguage()
                };
                return this.post(this.wovnContext.eeHost, "/page_not_found/" + this.projectToken, t, a.ContentType.FormUrlEncoded)
            };
            return e
        }(i.WebService);
    e.PageNotFoundController = s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WidgetDataController = void 0;
    var a = n(4),
        s = i(n(49)),
        u = n(6),
        l = n(9),
        c = n(5),
        d = function(t) {
            r(e, t);

            function e(e, n, o, r, i) {
                var a = t.call(this, n) || this;
                a.wovnContext = e;
                a.projectToken = o;
                a.clientLocation = r;
                a.widget = i;
                return a
            }
            e.prototype.pageData = function() {
                var t = this,
                    e = {
                        u: this.clientLocation ? this.widget.getLocation(this.clientLocation.href) : this.widget.getLocation()
                    },
                    n = "/js_data/json/1/" + this.projectToken + "/";
                return this.getAndParseJson(this.wovnContext.cdnCacheHost, n, e, u.ContentType.FormUrlEncoded).catch((function(o) {
                    return 204 !== o.status ? t.getAndParseJson(t.wovnContext.cdnOriginHost, n, e, u.ContentType.FormUrlEncoded) : a.Promise.reject(o)
                }))
            };
            e.prototype.previewData = function(t) {
                var e = {
                        u: this.clientLocation ? this.widget.getLocation(this.clientLocation.href) : this.widget.getLocation(),
                        signature: t
                    },
                    n = "/js_preview_data/" + this.projectToken;
                return this.getAndParseJson(this.wovnContext.eeHost, n, e, u.ContentType.FormUrlEncoded)
            };
            e.prototype.domainOptions = function() {
                var t = this,
                    e = this.clientLocation ? this.clientLocation.host : c.parseUrl(this.widget.getLocation()).hostname,
                    n = {
                        host: s.default.toASCII(e)
                    },
                    o = "/domain/options/" + this.projectToken;
                return this.getAndParseJson(this.wovnContext.cdnCacheHost, o, n, u.ContentType.FormUrlEncoded).catch((function() {
                    return t.getAndParseJson(t.wovnContext.cdnOriginHost, o, n, u.ContentType.FormUrlEncoded)
                }))
            };
            return e
        }(l.WebService);
    e.WidgetDataController = d
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.InSiteSearchController = void 0;
    var i = n(4),
        a = n(6),
        s = function(t) {
            r(e, t);

            function e(e, n, o) {
                var r = t.call(this, n) || this;
                r.wovnContext = e;
                r.projectToken = o;
                return r
            }
            e.prototype.search = function(t, e) {
                var n = {
                        q: t,
                        lang: e
                    },
                    o = "/domains/" + this.projectToken + "/search";
                return this.getAndParseJson(this.wovnContext.eeHost, o, n, a.ContentType.FormUrlEncoded).catch((function(t) {
                    if (!(t.status >= 400 && t.status < 500)) return i.Promise.reject("Server error");
                    try {
                        var e = JSON.parse(t.body);
                        return i.Promise.reject(e.message || "Server error")
                    } catch (t) {
                        return i.Promise.reject("Server error")
                    }
                }))
            };
            return e
        }(n(9).WebService);
    e.InSiteSearchController = s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LiveEditorController = void 0;
    var i = n(6),
        a = function(t) {
            r(e, t);

            function e(e, n, o, r, i, a) {
                var s = t.call(this, n) || this;
                s.wovnContext = e;
                s.projectToken = o;
                s.clientLocation = r;
                s.widget = i;
                s.liveEditorSettings = a;
                return s
            }
            e.prototype.liveEditorSavedJsonData = function() {
                var t = {
                        u: this.clientLocation ? this.widget.getLocation(this.clientLocation.href) : this.widget.getLocation(),
                        session_token: this.liveEditorSettings.session
                    },
                    e = "/in_page/saved_json_data/" + this.projectToken;
                return this.getAndParseJson(this.wovnContext.eeHost, e, t, i.ContentType.FormUrlEncoded)
            };
            return e
        }(n(9).WebService);
    e.LiveEditorController = a
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.InPageSessionController = void 0;
    var i = n(9),
        a = n(6),
        s = function(t) {
            r(e, t);

            function e(e, n) {
                var o = t.call(this, e) || this;
                o.wovnContext = n;
                return o
            }
            e.prototype.createSession = function() {
                return this.postAndParseJson(this.wovnContext.cdnOriginHost, "/in_page/sessions", {}, a.ContentType.FormUrlEncoded)
            };
            return e
        }(i.WebService);
    e.InPageSessionController = s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.XhrWidgetSessionController = void 0;
    var i = n(9),
        a = n(6),
        s = function(t) {
            r(e, t);

            function e(e, n, o) {
                var r = t.call(this, e) || this;
                r.wovnContext = n;
                r.projectToken = o;
                return r
            }
            e.prototype.authenticate = function() {
                var t = {
                    token: this.projectToken
                };
                return this.get(this.wovnContext.eeHost, "/widget_session_auth", t, a.ContentType.FormUrlEncoded, !0)
            };
            e.prototype.createSession = function() {
                return this.postAndParseJson(this.wovnContext.eeHost, "/in_page/xhr_sessions", {}, a.ContentType.FormUrlEncoded, !0)
            };
            return e
        }(i.WebService);
    e.XhrWidgetSessionController = s
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.TextNormalizer = void 0;
    var r = o(n(18)),
        i = /[\n \t\u0020\u0009\u000C\u200B\u000D\u000A]+/g,
        a = /[\n \t\u0020\u0009\u000C\u000D\u000A]+/g,
        s = function() {
            function t() {
                this.wovnEmptyCharacter = "​";
                this.normalizeTextCache = {};
                this.normalizeTextCacheWithoutZeroWidthSpace = {}
            }
            t.prototype.isNormalizedEmpty = function(t) {
                return this.normalizeText(t) === this.wovnEmptyCharacter
            };
            t.prototype.normalizeText = function(t, e) {
                void 0 === e && (e = !1);
                if (null == t) return null;
                if (this.normalizeTextCache[t]) {
                    var n = this.normalizeTextCache[t];
                    e && n === this.wovnEmptyCharacter ? n = "" : e || "" !== n || (n = this.wovnEmptyCharacter);
                    return n
                }
                var o = this.trimText(t, i);
                !1 === e && 0 === o.length && (o = this.wovnEmptyCharacter);
                this.normalizeTextCache[t] = o;
                return o
            };
            t.prototype.normalizeTextWithoutZeroWidthSpace = function(t) {
                if (null == t) return null;
                if (this.normalizeTextCacheWithoutZeroWidthSpace[t]) return this.normalizeTextCacheWithoutZeroWidthSpace[t];
                var e = this.trimText(t, a);
                this.normalizeTextCacheWithoutZeroWidthSpace[t] = e;
                return e
            };
            t.prototype.removeNormalizedWhitespace = function(t) {
                return null == t ? t : this.trimText(t, i, "")
            };
            t.prototype.trimText = function(t, e, n) {
                void 0 === n && (n = " ");
                var o = t;
                r.default.mutatesTextNodeData() && (o = o.replace(/([^\u0000-\u007F])\n([^\u0000-\u007F])/g, "$1$2"));
                return o.replace(e, n).replace(/^[\s\u00A0\uFEFF\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]+|[\s\u00A0\uFEFF\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]+$/g, "")
            };
            return t
        }();
    e.TextNormalizer = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WovnStorage = void 0;
    var o = n(1);

    function r(t) {
        return "__wovn__." + t
    }
    var i = function() {
        function t(t) {
            this.storage = t
        }
        t.prototype.getValue = function(t, e) {
            var n = r(t),
                o = this.getItem(n);
            if (!o) return null;
            var i = null;
            try {
                i = JSON.parse(o)
            } catch (t) {
                this.removeItem(n);
                return null
            }
            var a = i.creationTime,
                s = i.value;
            if (!a || !s) {
                this.removeItem(n);
                return null
            }
            if (a < e || (new Date).getTime() < a) {
                this.removeItem(n);
                return null
            }
            return [a, s]
        };
        t.prototype.setValue = function(t, e, n) {
            var i = {
                creationTime: n,
                value: e
            };
            this.setItem(r(t), o.stringifyJSON(i))
        };
        t.prototype.getItem = function(t) {
            try {
                return this.storage.getItem(t)
            } catch (t) {
                return null
            }
        };
        t.prototype.setItem = function(t, e) {
            try {
                this.storage.setItem(t, e)
            } catch (e) {
                this.removeItem(t)
            }
        };
        t.prototype.removeItem = function(t) {
            try {
                this.storage.removeItem(t)
            } catch (t) {}
        };
        t.prototype.destroy = function() {
            this.storage.clear()
        };
        return t
    }();
    e.WovnStorage = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DomTraversalFactory = void 0;
    var o = n(152),
        r = function() {
            function t(t, e, n, o, r, i, a) {
                this.widget = t;
                this.textNormalizer = e;
                this.nodeTypeSolverFactory = n;
                this.data = o;
                this.unifiedValueComments = r;
                this.domTraversalParsableNodeFilterProvider = i;
                this.onDemandTranslator = a
            }
            t.prototype.create = function() {
                var t = this.nodeTypeSolverFactory.create();
                return new o.DomTraversal(this.widget, this.textNormalizer, t, this.data, this.unifiedValueComments, this.domTraversalParsableNodeFilterProvider, this.onDemandTranslator)
            };
            return t
        }();
    e.DomTraversalFactory = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DomTraversal = void 0;
    var r = o(n(0)),
        i = o(n(71)),
        a = o(n(77)),
        s = o(n(78)),
        u = o(n(46)),
        l = n(56),
        c = n(79),
        d = n(154),
        p = o(n(2)),
        h = o(n(55)),
        g = n(14),
        f = n(7),
        m = n(155),
        v = function() {},
        y = function() {
            function t(t, e, n, o, r, i, a) {
                this.widget = t;
                this.textNormalizer = e;
                this.nodeTypeSolver = n;
                this.data = o;
                this.unifiedValueComments = r;
                this.domTraversalParsableNodeFilterProvider = i;
                this.onDemandTranslator = a
            }
            t.prototype.run = function(t, e) {
                var n = this.markUserIgnoredElements(),
                    o = m.getXpath(t.parentNode),
                    r = this.startTraversal(t, e, o);
                this.unmarkUserIgnoredElements(n);
                return r
            };
            t.prototype.markUserIgnoredElements = function(t) {
                void 0 === t && (t = document);
                var e = this.data.getExcludedContent(),
                    n = this.queryExcludedSelectors(e, t);
                return this.addWovnIgnores(n)
            };
            t.prototype.queryExcludedSelectors = function(t, e) {
                var n;
                void 0 === e && (e = document);
                var o = p.default.flatMap(t.filter((function(t) {
                        return t.target == g.IgnoreType.TagContent
                    })), (function(t) {
                        return f.safeQuerySelectorAll(t.selector, e)
                    })),
                    r = p.default.flatMap(t.filter((function(t) {
                        return t.target == g.IgnoreType.Attributes
                    })), (function(t) {
                        return f.safeQuerySelectorAll(t.selector, e)
                    })),
                    i = p.default.flatMap(t.filter((function(t) {
                        return t.target == g.IgnoreType.All
                    })), (function(t) {
                        return f.safeQuerySelectorAll(t.selector, e)
                    }));
                return (n = {})[g.IgnoreType.TagContent] = o, n[g.IgnoreType.Attributes] = r, n[g.IgnoreType.All] = i, n
            };
            t.prototype.addWovnIgnores = function(t) {
                var e, n = ((e = {})[g.IgnoreType.TagContent] = [], e[g.IgnoreType.Attributes] = [], e[g.IgnoreType.All] = [], e);
                for (var o in t)
                    for (var r = t[o], i = parseInt(o) === g.IgnoreType.All ? "wovn-ignore" : parseInt(o) === g.IgnoreType.TagContent ? "wovn-ignore-content" : "wovn-ignore-attrs", a = 0; a < r.length; a++)
                        if (!f.hasWovnAttribute(r[a], "wovn-ignore") && !f.hasWovnAttribute(r[a], i)) {
                            r[a].setAttribute(i, "");
                            n[o].push(r[a])
                        } return n
            };
            t.prototype.unmarkUserIgnoredElements = function(t) {
                for (var e in t)
                    for (var n = t[e], o = parseInt(e) === g.IgnoreType.All ? "wovn-ignore" : parseInt(e) === g.IgnoreType.TagContent ? "wovn-ignore-content" : "wovn-ignore-attrs", r = 0; r < n.length; r++) n[r].removeAttribute(o)
            };
            t.prototype.startTraversal = function(t, e, n) {
                var o = this,
                    r = [],
                    i = [],
                    s = {
                        nodeName: "",
                        hasAttribute: v
                    },
                    u = new a.default(n, 1),
                    l = [],
                    c = this.traversalLoop(s, [t], n, l, u, r, i, e, {
                        ignoreState: g.IgnoreType.None,
                        isThirdPartyNode: !1
                    });
                c.hasText() && l.push(c);
                return {
                    tags: r.filter((function(t) {
                        return !o.isThirdPartyImage(t) && !g.isAttributeIgnored(t.ignoreType)
                    })),
                    texts: i,
                    valuesStacks: l
                }
            };
            t.prototype.isThirdPartyImage = function(t) {
                try {
                    return t.isThirdParty && h.default.isImage(t)
                } catch (t) {
                    return !0
                }
            };
            t.prototype.traversalLoop = function(t, e, n, o, s, p, h, m, v) {
                if (v.ignoreState === g.IgnoreType.All || m(t) === g.IgnoreType.All) return s;
                if (this.widget.c("Interface").isWidgetElement(t)) return s;
                for (var y = t.nodeName.toLowerCase(), w = e.length, b = 0; b < w; ++b) {
                    var _ = e[b],
                        C = m(_) | v.ignoreState;
                    this.onDemandTranslator.bindOdtClickEvent(_);
                    var S = _.nodeName.toLowerCase(),
                        T = f.getNodeSiblingIndex(_),
                        L = n + "/" + S + (T > 0 ? "[" + (T + 1) + "]" : "");
                    if (l.shouldTraverseChildNode(t, _) && !this.domTraversalParsableNodeFilterProvider.isNodeFilteredOut(_)) {
                        var E = void 0;
                        if (_.shadowRoot) {
                            _.setAttribute("data-wovn-shadow-host", "");
                            E = "shadow-host"
                        } else E = this.nodeTypeSolver.getType(S, _.className);
                        var x = !1;
                        switch (E) {
                            case 1:
                                break;
                            case 5:
                                x = v.isThirdPartyNode || d.isIdentifiableThirdPartyNode(_);
                                p.push(new i.default(L, _, C, x));
                                break;
                            case 3:
                                s.add(this.createUVOpenTag(_, S, g.IgnoreType.All));
                                c.hasClosingTag(S) && s.add(this.createUVCloseTag(_, S));
                                break;
                            case 2:
                                x = v.isThirdPartyNode || d.isIdentifiableThirdPartyNode(_);
                                p.push(new i.default(L, _, C, x));
                                s.add(this.createUVOpenTag(_, S, C));
                                s = this.traversalLoop(_, _.childNodes, L, o, s, p, h, m, {
                                    ignoreState: C,
                                    isThirdPartyNode: x
                                });
                                c.hasClosingTag(S) && s.add(this.createUVCloseTag(_, S));
                                break;
                            case 4:
                                if (0 == this.textNormalizer.normalizeTextWithoutZeroWidthSpace(_.data).length) break;
                                if (!g.isContentIgnored(C)) {
                                    var O = this.concatContinuousTextNodes(e, b + 1, [_]);
                                    b += O.skipCount;
                                    if (O.nodes.length > 0) {
                                        h.push(O.nodes);
                                        var A = O.text.length > 0 ? this.textNormalizer.normalizeText(O.text) : O.text;
                                        s.add(new u.default(A, _, O.text, O.original, O.nodes, O.lookahead, O.skipCount, !0, this.textNormalizer, this.unifiedValueComments, C))
                                    }
                                }
                                break;
                            case "shadow-host":
                            case 6:
                            default:
                                x = v.isThirdPartyNode || d.isIdentifiableThirdPartyNode(_);
                                p.push(new i.default(L, _, C, x));
                                s.hasText() && o.push(s);
                                var P = s.buildNextStack();
                                s = new a.default(L, 1, x);
                                var k = _.shadowRoot ? [_.shadowRoot] : _.childNodes;
                                (s = this.traversalLoop(_, k, L, o, s, p, h, m, {
                                    ignoreState: C,
                                    isThirdPartyNode: x
                                })).hasText() && o.push(s);
                                s = P
                        }
                    }
                }
                if ("iframe" == y) try {
                    C = m(t) | v.ignoreState, x = v.isThirdPartyNode || d.isIdentifiableThirdPartyNode(t);
                    var D = t.contentDocument;
                    if (D) {
                        var N = this.markUserIgnoredElements(D),
                            I = r.default.toArrayFromDomList(D.childNodes).filter((function(t) {
                                return t.childNodes.length > 0
                            }))[0];
                        if (I) {
                            var R = n + "[@src='" + t.getAttribute("src") + "']",
                                M = this.traversalLoop(I, I.childNodes, R, o, s, p, h, m, {
                                    ignoreState: C,
                                    isThirdPartyNode: x
                                });
                            this.unmarkUserIgnoredElements(N);
                            return M
                        }
                    }
                } catch (t) {}
                return s
            };
            t.prototype.createUVOpenTag = function(t, e, n) {
                var o;
                o = g.isContentIgnored(n) ? "<" + e + " wovn-ignore>" : "<" + e + ">";
                return new s.default(o, t, !0, !1, n, this.textNormalizer)
            };
            t.prototype.createUVCloseTag = function(t, e) {
                return new s.default("</" + e + ">", t, !1, !0, g.IgnoreType.None, this.textNormalizer)
            };
            t.prototype.concatContinuousTextNodes = function(t, e, n) {
                for (var o = "", r = [], i = [], a = 0, s = 0; s < n.length; ++s) {
                    o += (u = n[s]).data;
                    r.push(u)
                }
                for (s = e; s < t.length; ++s) {
                    var u, l = (u = t[s]).nodeName.toLowerCase();
                    if ("#text" == l) {
                        o += u.data;
                        r.push(u);
                        i.push(u);
                        ++a
                    } else {
                        if ("#comment" != l) break;
                        if (this.unifiedValueComments.hasOriginalSrcComment(u)) {
                            ++a;
                            break
                        }++a
                    }
                }
                return {
                    text: o.trim(),
                    original: o,
                    nodes: r,
                    lookahead: i,
                    skipCount: a
                }
            };
            return t
        }();
    e.DomTraversal = y
}, function(t) {
    t.exports = JSON.parse('{"inlineElements":["a","abbr","b","bdi","bdo","button","cite","code","data","dfn","em","i","kbd","label","legend","mark","meter","option","q","rb","rp","rt","rtc","s","samp","small","span","strong","sub","sup","time","u","var"],"inlineIgnoredElements":["script"],"emptyElements":["br","input","param","source","track","wbr"],"skipElements":["base","command","link","noscript","style","template"],"skipElementsWithoutAttributes":["textarea"]}')
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.isIdentifiableThirdPartyNode = void 0;
    var o = n(7),
        r = function() {
            function t(t, e, n) {
                this.nodeName = t;
                this.attributeName = e;
                this.attributeValue = n
            }
            t.prototype.matchesElement = function(t) {
                return t.nodeName === this.nodeName && t.getAttribute(this.attributeName) === this.attributeValue
            };
            return t
        }(),
        i = [new r("DIV", "id", "intercom-container"), new r("IFRAME", "id", "intercom-frame"), new r("DIV", "class", "gm-style"), new r("IFRAME", "id", "pop-veritrans")];

    function a(t) {
        return !!o.isElement(t) && i.some((function(e) {
            return e.matchesElement(t)
        }))
    }
    e.isIdentifiableThirdPartyNode = a;
    e.default = {
        isIdentifiableThirdPartyNode: a
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getXpath = void 0;
    e.getXpath = function(t) {
        for (var e = t, n = "", o = 0; e && "#document" !== e.nodeName;) {
            for (var r = e.previousSibling; r;) {
                r.nodeName === e.nodeName && o++;
                r = r.previousSibling
            }
            n = "/" + e.nodeName.toLowerCase() + (o > 0 ? "[" + (o + 1) + "]" : "") + n;
            e = e.parentNode;
            o = 0
        }
        return n
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.HostAliasMatcher = void 0;
    var o = n(5),
        r = function() {
            function t(t) {
                var e = this;
                this.hostAliases = t.map((function(t) {
                    return e.toRegex(t)
                }))
            }
            t.prototype.isMatch = function(t) {
                var e = o.getHostname(t);
                if (e)
                    for (var n = 0, r = this.hostAliases; n < r.length; n++) {
                        if (r[n].test(e)) return !0
                    }
                return !1
            };
            t.prototype.toRegex = function(t) {
                return new RegExp(t.replace(/\.\*/, "[^\\.]*"))
            };
            return t
        }();
    e.HostAliasMatcher = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.TranslationChangeDetector = void 0;
    var r = o(n(25)),
        i = n(7),
        a = n(54),
        s = function() {
            function t(t) {
                this.repository = t
            }
            t.prototype.removeOrphanedComments = function(t) {
                for (var e = 0, n = i.findComments(t); e < n.length; e++) {
                    var o = n[e];
                    a.isWovnOriginalSrcComment(o) && ((!o.nextSibling || i.isTextNode(o.nextSibling) && !o.nextSibling.data) && o.remove())
                }
            };
            t.prototype.removeCommentsFromModifiedTextNodes = function(t, e) {
                var n = this;
                t.filter((function(t) {
                    return t.wasPreviouslyTranslated
                })).forEach((function(t) {
                    var o = n.findOriginalTranslationValueStack(e, t.translationDataSrcKey);
                    if (o) n.detectChangesInValueStack(t, o);
                    else if (1 === t.textFragments.length) {
                        var r = t.textFragments[0];
                        (o = n.findOriginalTranslationValueStack(e, r.translationDataSrcKey)) && n.detectChangesInValueStack(t, o)
                    }
                }))
            };
            t.prototype.findOriginalTranslationValueStack = function(t, e) {
                return this.repository.findTranslation(e, t.fromLangCode) || this.repository.findTranslation(e, t.toLangCode)
            };
            t.prototype.detectChangesInValueStack = function(t, e) {
                var n = this,
                    o = e.textFragments,
                    r = t.textFragments;
                if (o.length === r.length && 0 === o.filter((function(t) {
                        return n.containsZeroWidthSpace(t)
                    })).length) {
                    var i = r.filter((function(t, e) {
                        return !n.isSameAsOriginal(t, o[e])
                    }));
                    i.length > 0 && i.forEach((function(t) {
                        return n.removeCommentFromFragment(t)
                    }))
                }
            };
            t.prototype.containsZeroWidthSpace = function(t) {
                return -1 !== t.label.indexOf("​")
            };
            t.prototype.isSameAsOriginal = function(t, e) {
                return t.normalizedSrc === e.normalizedSrc || t.normalizedSrc === r.default.unescape(e.normalizedSrc)
            };
            t.prototype.removeCommentFromFragment = function(t) {
                t.removeComment()
            };
            return t
        }();
    e.TranslationChangeDetector = s
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
        return (o = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }).apply(this, arguments)
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PageDataSanitizer = void 0;
    var r = n(8),
        i = n(80),
        a = function() {
            function t() {}
            t.prototype.sanitize = function(t) {
                return o(o({}, t), {
                    html_text_vals: this.sanitizeHtmlTextVals(t.html_text_vals),
                    page_text_vals: this.sanitizeHtmlTextVals(t.page_text_vals),
                    link_translations: i.normalizeLinkTranslationsEncoding(t.link_translations)
                })
            };
            t.prototype.sanitizeHtmlTextVals = function(t) {
                var e = this,
                    n = {};
                for (var o in t) {
                    n[o] = {};
                    var r = t[o];
                    for (var i in r) {
                        var a = r[i].map((function(t) {
                            return e.sanitizeUnifiedValueTranslation(t)
                        }));
                        n[o][i] = a
                    }
                }
                return n
            };
            t.prototype.sanitizeUnifiedValueTranslation = function(t) {
                var e = this,
                    n = [t.data].map((function(t) {
                        return e.removeSpacesAroundOptionElements(t)
                    })).map((function(t) {
                        return e.removeContentOfWovnIgnoreTags(t)
                    }))[0];
                return o(o({}, t), {
                    data: n
                })
            };
            t.prototype.removeSpacesAroundOptionElements = function(t) {
                var e = t.trim(),
                    n = e.indexOf("<option>"),
                    o = e.indexOf("</option>");
                return 0 === n && o > n ? r.removeTextAroundTags(e) : t
            };
            t.prototype.removeContentOfWovnIgnoreTags = function(t) {
                return t.replace(/(<\w+\s+wovn-ignore(?:=['"][^'"]*['"])?\s*>)[^>]*(<[^>]+>)/g, "$1$2")
            };
            return t
        }();
    e.PageDataSanitizer = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CustomDomainUrlHandler = void 0;
    var o = n(5),
        r = n(8),
        i = function() {
            function t(t, e) {
                this.customDomainLanguages = t;
                this.langComponent = e
            }
            t.prototype.getLanguage = function(t) {
                return this.getLanguageFromUrl(o.parseUrl(t))
            };
            t.prototype.getLanguageFromUrl = function(t) {
                var e = this.customDomainLanguages.getCustomDomainLanguageByUrl(t);
                return e ? e.language : null
            };
            t.prototype.removeLanguage = function(t, e) {
                return this.removeLanguageFromUrl(o.parseUrl(t), e).href
            };
            t.prototype.removeLanguageFromUrl = function(t, e) {
                var n = this.langComponent.getDefaultCodeIfExists(),
                    o = this.customDomainLanguages.getCustomDomainLanguageByLang(e);
                if (o && o.language != n) {
                    var r = this.customDomainLanguages.getCustomDomainLanguageByLang(n);
                    return this.changeToNewCustomDomainLanguage(t, o, r)
                }
                return t
            };
            t.prototype.addLanguage = function(t, e) {
                var n = o.parseUrl(t),
                    r = this.customDomainLanguages.getCustomDomainLanguageByUrl(n),
                    i = this.customDomainLanguages.getCustomDomainLanguageByLang(e);
                if (r && i && r.language != i.language) {
                    return this.changeToNewCustomDomainLanguage(n, r, i).href
                }
                return n.href
            };
            t.prototype.changeToNewCustomDomainLanguage = function(t, e, n) {
                var i = t.host.replace(e.domain, n.domain),
                    a = new RegExp("^" + r.trimEnd(e.path, "/") + "(/|$)"),
                    s = t.pathname.replace(a, r.trimEnd(n.path, "/") + "$1"),
                    u = t.search ? "" + t.search : "",
                    l = t.hash;
                return o.parseUrl(t.protocol + "//" + i + s + u + l)
            };
            return t
        }();
    e.CustomDomainUrlHandler = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.deserializeCustomDomainLanguages = void 0;
    var r = n(161),
        i = o(n(60)),
        a = n(164);
    e.deserializeCustomDomainLanguages = function(t) {
        t = t || {};
        var e = Object.keys(t).map((function(e) {
            var n = t[e],
                o = new i.default("http://" + e);
            return new a.CustomDomainLanguage(o.hostname, o.pathname, n)
        }));
        return new r.CustomDomainLanguages(e)
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CustomDomainLanguages = void 0;
    var r = o(n(2)),
        i = function() {
            function t(t) {
                this.customDomainLanguages = t
            }
            Object.defineProperty(t.prototype, "all", {
                get: function() {
                    return this.customDomainLanguages
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.getCustomDomainLanguageByLang = function(t) {
                return r.default.find(this.customDomainLanguages, (function(e) {
                    return e.language == t
                }))
            };
            t.prototype.getCustomDomainLanguageByUrl = function(t) {
                var e = this.customDomainLanguages.slice().sort((function(t, e) {
                    return e.path.length - t.path.length
                }));
                return r.default.find(e, (function(e) {
                    return e.isMatch(t)
                }))
            };
            return t
        }();
    e.CustomDomainLanguages = i
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        e = e.split(":")[0];
        if (!(t = +t)) return !1;
        switch (e) {
            case "http":
            case "ws":
                return 80 !== t;
            case "https":
            case "wss":
                return 443 !== t;
            case "ftp":
                return 21 !== t;
            case "gopher":
                return 70 !== t;
            case "file":
                return !1
        }
        return 0 !== t
    }
}, function(t, e, n) {
    "use strict";
    var o = Object.prototype.hasOwnProperty;

    function r(t) {
        try {
            return decodeURIComponent(t.replace(/\+/g, " "))
        } catch (t) {
            return null
        }
    }
    e.stringify = function(t, e) {
        var n, r, i = [];
        "string" != typeof(e = e || "") && (e = "?");
        for (r in t)
            if (o.call(t, r)) {
                (n = t[r]) || null != n && !isNaN(n) || (n = "");
                r = encodeURIComponent(r);
                n = encodeURIComponent(n);
                if (null === r || null === n) continue;
                i.push(r + "=" + n)
            } return i.length ? e + i.join("&") : ""
    };
    e.parse = function(t) {
        for (var e, n = /([^=?&]+)=?([^&]*)/g, o = {}; e = n.exec(t);) {
            var i = r(e[1]),
                a = r(e[2]);
            null === i || null === a || i in o || (o[i] = a)
        }
        return o
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CustomDomainLanguage = void 0;
    var o = n(8),
        r = function() {
            function t(t, e, n) {
                this.domain = t;
                this.path = e;
                this.language = n;
                this.path = o.endsWith(e, "/") ? e : e + "/"
            }
            t.prototype.isMatch = function(t) {
                return this.domain.toLowerCase() == t.hostname.toLowerCase() && this.pathIsEqualOrSubsetOf(this.path, t.pathname)
            };
            t.prototype.pathIsEqualOrSubsetOf = function(t, e) {
                for (var n = t.split("/").filter((function(t) {
                        return t.length > 0
                    })), o = e.split("/").filter((function(t) {
                        return t.length > 0
                    })), r = 0; r < n.length; r++)
                    if (o[r] !== n[r]) return !1;
                return !0
            };
            return t
        }();
    e.CustomDomainLanguage = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.UuidCookie = void 0;
    var o = n(3).WovnCookies.WOVN_UUID,
        r = function() {
            function t(t) {
                this.cookieStore = t
            }
            Object.defineProperty(t.prototype, "cookie", {
                get: function() {
                    var t = this.cookieStore.get(o);
                    if (t) return t;
                    this.cookieStore.set(o, this.createUniqueId());
                    return this.cookieStore.get(o)
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.erase = function() {
                this.cookieStore.erase(o)
            };
            t.prototype.createUniqueId = function() {
                return Math.random().toString(36).substr(2, 9)
            };
            return t
        }();
    e.UuidCookie = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(2)),
        i = o(n(55)),
        a = o(n(0)),
        s = ["description", "title", "og:description", "og:title", "twitter:description", "twitter:title"],
        u = ["og:description", "og:title", "twitter:description", "twitter:title"],
        l = ["placeholder"],
        c = {
            search: ["value", "placeholder"],
            button: ["value", "placeholder", "data-confirm", "data-disable-with"],
            submit: ["value", "placeholder", "data-confirm", "data-disable-with"],
            image: ["src", "alt", "placeholder", "data-confirm", "data-disable-with"],
            reset: ["value"]
        },
        d = {
            option: ["label"],
            a: ["title"],
            optgroup: ["label"],
            img: ["alt", "srcset", "src"],
            textarea: ["placeholder"],
            source: ["srcset"]
        },
        p = function() {
            function t(t) {
                this.domainOptionsWrapper = t;
                this.attrs = this.buildAttrs();
                this.tagAttrs = this.buildTagAttrs();
                this.tagAttrsCondition = this.buildTagAttrsCondition()
            }
            t.prototype.getSwappableAttributes = function(t) {
                var e = t.nodeName.toLowerCase(),
                    n = [];

                function o(t) {
                    n.push(t)
                }
                this.attrs.forEach(o);
                (this.tagAttrs[e] || []).forEach(o);
                ((this.tagAttrsCondition[e] || function() {})(t) || []).forEach(o);
                return n
            };
            t.prototype.buildTagAttrsCondition = function() {
                return {
                    meta: this.metaAttrs,
                    input: this.inputAttrs
                }
            };
            t.prototype.metaAttrs = function(t) {
                var e = r.default.includes(s, t.getAttribute("name")) || r.default.includes(u, t.getAttribute("property")),
                    n = i.default.isMetaImage(t);
                return e || n ? ["content"] : []
            };
            t.prototype.inputAttrs = function(t) {
                var e = t.getAttribute("type"),
                    n = l;
                e && (e = e.toLowerCase()) in c && (n = c[e]);
                return n
            };
            t.prototype.buildAttrs = function() {
                return [].concat(this.commonCustomAttributes)
            };
            t.prototype.buildTagAttrs = function() {
                var t = a.default.assign({}, d),
                    e = this.tagSpecificCustomAttributes;
                for (var n in e) {
                    var o = e[n];
                    t[n] = (t[n] || []).concat(o)
                }
                return t
            };
            Object.defineProperty(t.prototype, "customTagAttributes", {
                get: function() {
                    return this.domainOptionsWrapper.getCustomAttributes()
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "commonCustomAttributes", {
                get: function() {
                    return this.customTagAttributes["*"] || []
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "tagSpecificCustomAttributes", {
                get: function() {
                    var t = {};
                    for (var e in this.customTagAttributes) "*" !== e && (t[e] = this.customTagAttributes[e]);
                    return t
                },
                enumerable: !1,
                configurable: !0
            });
            return t
        }();
    e.default = p
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ErrorReporter = void 0;
    var o = n(1),
        r = function() {
            function t(t, e, n) {
                this.snippetSettings = t;
                this.widget = e;
                this.apiController = n
            }
            t.prototype.reportError = function(t) {
                this.apiController.reportError(t, window.location.href, this.snippetSettings.token, "Snippet: " + o.stringifyJSON(this.snippetSettings))
            };
            return t
        }();
    e.ErrorReporter = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DataLoader = void 0;
    var o = n(4),
        r = function() {
            function t(t, e, n, o, r, i) {
                this.data = t;
                this.pageDataLoader = e;
                this.domainOptionsLoader = n;
                this.widgetSessionManager = o;
                this.widgetPreview = r;
                this.liveEditorSettings = i
            }
            t.prototype.loadInitialPageAndDomainData = function() {
                var t = this;
                return this.widgetPreview.getSignature() || this.liveEditorSettings.isEnabled ? this.loadDomainOptions().then((function() {
                    return t.data.domainOptions.hasFeature("widget_session") ? t.widgetSessionManager.startAndAuthenticate().then((function() {})) : o.Promise.resolve()
                })).then((function() {
                    return t.loadPageData()
                })) : o.Promise.all([this.loadDomainOptions(), this.loadPageData()]).then((function() {}))
            };
            t.prototype.loadPageData = function() {
                var t = this;
                return this.pageDataLoader.loadPageData().then((function(e) {
                    return t.data.pageData.set(e)
                }))
            };
            t.prototype.loadDomainOptions = function() {
                var t = this;
                return this.domainOptionsLoader.loadDomainOptions().then((function(e) {
                    return t.data.domainOptions.setOptions(e)
                }))
            };
            return t
        }();
    e.DataLoader = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WidgetPreview = void 0;
    var r = n(3),
        i = o(n(18)),
        a = "wovn_preview_signature=([^&]+)",
        s = new RegExp(a),
        u = function() {
            function t(t) {
                this.cookieStore = t
            }
            t.prototype.loadSignatureFromUrl = function(t) {
                var e = t.search.match(s);
                if (e) {
                    var n = e[1];
                    this.cookieStore.set(r.WovnCookies.PREVIEW_SIGNATURE, n);
                    if (i.default.supportsHistoryApi()) {
                        var o = t.pathname + t.search.replace(new RegExp("&?" + a), "").replace(/^\?&/, "?").replace(/^\?$/, "") + t.hash;
                        window.history.replaceState(window.history.state, "", o)
                    }
                }
            };
            t.prototype.getSignature = function() {
                return this.cookieStore.get(r.WovnCookies.PREVIEW_SIGNATURE)
            };
            t.prototype.removeSignature = function() {
                return this.cookieStore.erase(r.WovnCookies.PREVIEW_SIGNATURE)
            };
            return t
        }();
    e.WidgetPreview = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(4),
        r = n(7),
        i = n(59),
        a = function() {
            function t(t, e, n, o, r) {
                this.data = t;
                this.api = e;
                this.widget = n;
                this.wovnElementFilter = o;
                this.wovnContext = r;
                this.IGNORED_STYLE = {
                    backgroundColor: "orange",
                    color: "black",
                    border: "2px solid red"
                };
                this.ENABLED_STYLE = {
                    backgroundColor: "purple",
                    color: "yellow",
                    border: "2px solid blue"
                }
            }
            t.prototype.showIgnoredTags = function(t) {
                void 0 === t && (t = this.IGNORED_STYLE);
                var e = this.data.getIgnoredPatterns().selectors,
                    n = [];
                n = n.concat(r.safeQuerySelectorAll("[wovn-ignore], [data-wovn-ignore]"));
                this.data.getExcludedContent().forEach((function(t) {
                    n = n.concat(r.safeQuerySelectorAll(t.selector))
                }));
                e.forEach((function(t) {
                    n = n.concat(r.safeQuerySelectorAll(t.selector))
                }));
                n.forEach((function(e) {
                    Object.keys(t).forEach((function(n) {
                        e.style[n] = t[n]
                    }))
                }))
            };
            t.prototype.showEnabledTags = function(t) {
                void 0 === t && (t = this.ENABLED_STYLE);
                var e = this.data.getIncludedContent().map((function(t) {
                        return t.selector
                    })),
                    n = r.safeQuerySelectorAll(["[wovn-enable]", "[data-wovn-enable]"].concat(e).join(", "));
                this.wovnElementFilter.filterOutWovnElements(n).forEach((function(e) {
                    Object.keys(t).forEach((function(n) {
                        e.style[n] = t[n]
                    }))
                }))
            };
            t.prototype.customReport = function(t) {
                return this.api.isApiReady() && this.data.domainOptions.hasFeature("manual_report") ? this.reportHelper.reportVals(i.ReportSource.ManualCustom, t) : o.Promise.resolve()
            };
            t.prototype.getNormalizedPageUrl = function() {
                return this.widget.getLocation()
            };
            t.prototype.pageReportedAtLeastOnce = function() {
                return this.api.isApiReady() && this.reportHelper.getReportSuccessCount() > 0
            };
            t.prototype.printUnifiedValuesReport = function() {
                if (this.api.isApiReady()) {
                    var t = this.api.getCurrentLang().code;
                    this.reportHelper.haltReporting();
                    return this.widget.c("UnifiedValue").swapUnifiedValue(document.head.parentNode, t, t).getValues()
                }
            };
            t.prototype.getTranslatePageLink = function() {
                return this.wovnContext.wovnHost + "pages/translate?page=" + this.data.pageData.getPageId()
            };
            t.prototype.addTranslation = function(t, e, n, o) {
                this.unifiedValueTranslationRepository.addTranslation(t, e, n, o);
                this.api.triggerAudit()
            };
            Object.defineProperty(t.prototype, "reportHelper", {
                get: function() {
                    return this.widget.c("ReportHelper")
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "unifiedValueTranslationRepository", {
                get: function() {
                    return this.widget.c("UnifiedValueTranslationRepository")
                },
                enumerable: !1,
                configurable: !0
            });
            return t
        }();
    e.default = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CachedPageDataLoader = void 0;
    var o = n(4),
        r = function() {
            function t(t, e, n) {
                this.widget = t;
                this.dataLoader = e;
                this.cache = n
            }
            t.prototype.loadPageData = function() {
                var t = this,
                    e = this.widget.getEncodedLocation(),
                    n = this.cache.get(e);
                return n ? o.Promise.resolve(n) : this.dataLoader.loadPageData().then((function(n) {
                    t.cache.insert(e, n);
                    return n
                }))
            };
            return t
        }();
    e.CachedPageDataLoader = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SwitchingPageDataLoader = void 0;
    var o = function() {
        function t(t, e, n, o, r, i, a) {
            this.liveEditorSettings = t;
            this.widgetPreview = e;
            this.widgetSessionManager = n;
            this.normalPageDataLoader = o;
            this.previewPageDataLoader = r;
            this.liveEditPageDataLoader = i;
            this.widgetData = a
        }
        t.prototype.loadPageData = function() {
            var t = this,
                e = !this.widgetData.domainOptions.hasFeature("widget_session") || this.widgetSessionManager.isLoggedIn;
            return this.liveEditorSettings.isEnabled && e ? this.liveEditPageDataLoader.loadPageData() : this.widgetPreview.getSignature() && e ? this.previewPageDataLoader.loadPageData().catch((function() {
                return t.normalPageDataLoader.loadPageData()
            })) : this.normalPageDataLoader.loadPageData()
        };
        return t
    }();
    e.SwitchingPageDataLoader = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DomainOptionsLoader = void 0;
    var o = function() {
        function t(t, e) {
            this.widgetDataController = t;
            this.domainOptionsSanitizer = e
        }
        t.prototype.loadDomainOptions = function() {
            var t = this;
            return this.widgetDataController.domainOptions().then((function(e) {
                return t.addCountryCodeToDomainOptions(e)
            })).then((function(t) {
                return t.body
            })).then((function(e) {
                return t.domainOptionsSanitizer.sanitize(e)
            }))
        };
        t.prototype.addCountryCodeToDomainOptions = function(t) {
            var e = t.headers,
                n = e["Country-Code"] || e["country-code"];
            n && (t.body.countryCode = n);
            return t
        };
        return t
    }();
    e.DomainOptionsLoader = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.GenericCache = void 0;
    var r = o(n(2)),
        i = function() {
            function t(t) {
                void 0 === t && (t = 50);
                this.cacheSize = t;
                this.cache = []
            }
            t.prototype.clear = function() {
                this.cache = []
            };
            t.prototype.insert = function(t, e) {
                this.cache.unshift({
                    key: t,
                    data: e
                });
                this.cache.length > this.cacheSize && this.cache.pop()
            };
            t.prototype.get = function(t) {
                var e = r.default.find(this.cache, (function(e) {
                    return e.key == t
                }));
                return e ? e.data : null
            };
            return t
        }();
    e.GenericCache = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LiveEditorPageDataLoader = void 0;
    var o = n(4),
        r = function() {
            function t(t, e) {
                this.errorReporter = t;
                this.liveEditorController = e
            }
            t.prototype.loadPageData = function() {
                var t = this;
                return this.liveEditorController.liveEditorSavedJsonData().then((function(t) {
                    return t.body
                })).catch((function(e) {
                    var n = e.body;
                    t.errorReporter.reportError(n);
                    return o.Promise.reject(e)
                }))
            };
            return t
        }();
    e.LiveEditorPageDataLoader = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LanguageAliases = void 0;
    var r = o(n(2)),
        i = function() {
            function t(t, e) {
                this.snippetSettings = t;
                this.staticLanguages = e
            }
            t.prototype.sanitizedLangAliases = function(t) {
                for (var e = [], n = 0, o = Object.keys(t.langCodeAliases); n < o.length; n++) {
                    var r = o[n],
                        i = t.langCodeAliases[r],
                        a = this.staticLanguages.find(r);
                    "" !== i && null != a && e.push({
                        originalLanguage: a,
                        langCodeAlias: i
                    })
                }
                return e
            };
            Object.defineProperty(t.prototype, "langAliases", {
                get: function() {
                    return this._langAliases || (this._langAliases = this.sanitizedLangAliases(this.snippetSettings))
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.findAlias = function(t) {
                if (!t) return null;
                t = t.toLowerCase();
                return r.default.find(this.langAliases, (function(e) {
                    return e.originalLanguage.code.toLowerCase() === t
                }))
            };
            t.prototype.findFromAlias = function(t) {
                if (!t) return null;
                t = t.toLowerCase();
                return r.default.find(this.langAliases, (function(e) {
                    return e.langCodeAlias.toLowerCase() === t
                }))
            };
            return t
        }();
    e.LanguageAliases = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SupportedLanguages = void 0;
    var o = n(178),
        r = function() {
            function t(t, e) {
                this.staticLanguages = t;
                this.languageAliases = e
            }
            t.prototype.find = function(t) {
                if (!t) return null;
                t = t.toLowerCase();
                var e = this.staticLanguages.find(t),
                    n = this.languageAliases.findAlias(t) || this.languageAliases.findFromAlias(t);
                return e ? new o.ResolvedLanguage(e, n) : n ? new o.ResolvedLanguage(n.originalLanguage, n) : null
            };
            return t
        }();
    e.SupportedLanguages = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ResolvedLanguage = void 0;
    var o = function() {
        function t(t, e) {
            this.languageInfo = t;
            this.alias = e
        }
        Object.defineProperty(t.prototype, "displayLanguage", {
            get: function() {
                return this.alias ? this.alias.langCodeAlias : this.languageInfo.code
            },
            enumerable: !1,
            configurable: !0
        });
        return t
    }();
    e.ResolvedLanguage = o
}, function(t) {
    t.exports = JSON.parse('{"ar":{"name":"العربية","tag":{"language":"ar"},"code":"ar","en":"Arabic","use_word_boundary":true,"unit_type":"word","candidates":["ar"]},"eu":{"name":"Euskara","tag":{"language":"eu"},"code":"eu","en":"Basque","use_word_boundary":true,"unit_type":"word","candidates":["eu"]},"bn":{"name":"বাংলা ভাষা","tag":{"language":"bn"},"code":"bn","en":"Bengali","use_word_boundary":true,"unit_type":"word","candidates":["bn"]},"bg":{"name":"Български","tag":{"language":"bg"},"code":"bg","en":"Bulgarian","use_word_boundary":true,"unit_type":"word","candidates":["bg"]},"ca":{"name":"Català","tag":{"language":"ca"},"code":"ca","en":"Catalan","use_word_boundary":true,"unit_type":"word","candidates":["ca"]},"zh-Hant-HK":{"name":"繁體中文（香港）","tag":{"language":"zh","region":"HK","script":"Hant"},"code":"zh-Hant-HK","en":"Traditional Chinese (Hong Kong)","use_word_boundary":false,"unit_type":"character","candidates":["zh-Hant-HK","zh-HK","zh-Hant","zh-CHT"]},"zh-Hant-TW":{"name":"繁體中文（台湾）","tag":{"language":"zh","region":"TW","script":"Hant"},"code":"zh-Hant-TW","en":"Traditional Chinese (Taiwan)","use_word_boundary":false,"unit_type":"character","candidates":["zh-Hant-TW","zh-TW","zh-Hant","zh-CHT"]},"zh-CHT":{"name":"繁體中文","tag":{"language":"zh","script":"Hant"},"code":"zh-CHT","en":"Traditional Chinese","use_word_boundary":false,"unit_type":"character","candidates":["zh-CHT","zh-Hant"]},"zh-CN":{"name":"简体中文（中国）","tag":{"language":"zh","region":"CN"},"code":"zh-CN","en":"Simplified Chinese (China)","use_word_boundary":false,"unit_type":"character","candidates":["zh-CN","zh","zh-CHS"]},"zh-CHS":{"name":"简体中文","tag":{"language":"zh"},"code":"zh-CHS","en":"Simplified Chinese","use_word_boundary":false,"unit_type":"character","candidates":["zh-Hans","zh-CHS","zh"]},"da":{"name":"Dansk","tag":{"language":"da"},"code":"da","en":"Danish","use_word_boundary":true,"unit_type":"word","candidates":["da"]},"nl":{"name":"Nederlands","tag":{"language":"nl"},"code":"nl","en":"Dutch","use_word_boundary":true,"unit_type":"word","candidates":["nl"]},"en-AU":{"name":"English (Australia)","tag":{"language":"en","region":"AU"},"code":"en-AU","en":"English (Australia)","use_word_boundary":true,"unit_type":"word","candidates":["en-AU","en"]},"en-CA":{"name":"English (Canada)","tag":{"language":"en","region":"CA"},"code":"en-CA","en":"English (Canada)","use_word_boundary":true,"unit_type":"word","candidates":["en-CA","en"]},"en-IN":{"name":"English (India)","tag":{"language":"en","region":"IN"},"code":"en-IN","en":"English (India)","use_word_boundary":true,"unit_type":"word","candidates":["en-IN","en"]},"en-NZ":{"name":"English (New Zealand)","tag":{"language":"en","region":"NZ"},"code":"en-NZ","en":"English (New Zealand)","use_word_boundary":true,"unit_type":"word","candidates":["en-NZ","en"]},"en-ZA":{"name":"English (South Africa)","tag":{"language":"en","region":"ZA"},"code":"en-ZA","en":"English (South Africa)","use_word_boundary":true,"unit_type":"word","candidates":["en-ZA","en"]},"en-GB":{"name":"English (United Kingdom)","tag":{"language":"en","region":"GB"},"code":"en-GB","en":"English (United Kingdom)","use_word_boundary":true,"unit_type":"word","candidates":["en-GB","en"]},"en-SG":{"name":"English (Singapore)","tag":{"language":"en","region":"SG"},"code":"en-SG","en":"English (Singapore)","use_word_boundary":true,"unit_type":"word","candidates":["en-SG","en"]},"en-US":{"name":"English (United States)","tag":{"language":"en","region":"US"},"code":"en-US","en":"English (United States)","use_word_boundary":true,"unit_type":"word","candidates":["en-US","en"]},"en":{"name":"English","tag":{"language":"en"},"code":"en","en":"English","use_word_boundary":true,"unit_type":"word","candidates":["en"]},"fi":{"name":"Suomi","tag":{"language":"fi"},"code":"fi","en":"Finnish","use_word_boundary":true,"unit_type":"word","candidates":["fi"]},"fr-CA":{"name":"Français (Canada)","tag":{"language":"fr","region":"CA"},"code":"fr-CA","en":"French (Canada)","use_word_boundary":true,"unit_type":"word","candidates":["fr-CA","fr"]},"fr-FR":{"name":"Français (France)","tag":{"language":"fr","region":"FR"},"code":"fr-FR","en":"French (France)","use_word_boundary":true,"unit_type":"word","candidates":["fr-FR","fr"]},"fr-CH":{"name":"Français (Suisse)","tag":{"language":"fr","region":"CH"},"code":"fr-CH","en":"French (Switzerland)","use_word_boundary":true,"unit_type":"word","candidates":["fr-CH","fr"]},"fr":{"name":"Français","tag":{"language":"fr"},"code":"fr","en":"French","use_word_boundary":true,"unit_type":"word","candidates":["fr"]},"gl":{"name":"Galego","tag":{"language":"gl"},"code":"gl","en":"Galician","use_word_boundary":true,"unit_type":"word","candidates":["gl"]},"de-AT":{"name":"Deutsch (Österreich)","tag":{"language":"de","region":"AT"},"code":"de-AT","en":"German (Austria)","use_word_boundary":true,"unit_type":"word","candidates":["de-AT","de"]},"de-DE":{"name":"Deutsch (Deutschland)","tag":{"language":"de","region":"DE"},"code":"de-DE","en":"German (Germany)","use_word_boundary":true,"unit_type":"word","candidates":["de-DE","de"]},"de-LI":{"name":"Deutsch (Liechtenstein)","tag":{"language":"de","region":"LI"},"code":"de-LI","en":"German (Liechtenstein)","use_word_boundary":true,"unit_type":"word","candidates":["de-LI","de"]},"de-CH":{"name":"Deutsch (Schweiz)","tag":{"language":"de","region":"CH"},"code":"de-CH","en":"German (Switzerland)","use_word_boundary":true,"unit_type":"word","candidates":["de-CH","de"]},"de":{"name":"Deutsch","tag":{"language":"de"},"code":"de","en":"German","use_word_boundary":true,"unit_type":"word","candidates":["de"]},"el":{"name":"Ελληνικά","tag":{"language":"el"},"code":"el","en":"Greek","use_word_boundary":true,"unit_type":"word","candidates":["el"]},"he":{"name":"עברית","tag":{"language":"he"},"code":"he","en":"Hebrew","use_word_boundary":true,"unit_type":"word","candidates":["iw","he"]},"hu":{"name":"Magyar","tag":{"language":"hu"},"code":"hu","en":"Hungarian","use_word_boundary":true,"unit_type":"word","candidates":["hu"]},"id":{"name":"Bahasa Indonesia","tag":{"language":"id"},"code":"id","en":"Indonesian","use_word_boundary":true,"unit_type":"word","candidates":["id"]},"it-IT":{"name":"Italiano (Italia)","tag":{"language":"it","region":"IT"},"code":"it-IT","en":"Italian (Italy)","use_word_boundary":true,"unit_type":"word","candidates":["it-IT","it"]},"it-CH":{"name":"Italiano (Svizzera)","tag":{"language":"it","region":"CH"},"code":"it-CH","en":"Italian (Switzerland)","use_word_boundary":true,"unit_type":"word","candidates":["it-CH","it"]},"it":{"name":"Italiano","tag":{"language":"it"},"code":"it","en":"Italian","use_word_boundary":true,"unit_type":"word","candidates":["it"]},"ja":{"name":"日本語","tag":{"language":"ja"},"code":"ja","en":"Japanese","use_word_boundary":false,"unit_type":"character","candidates":["ja"]},"km":{"name":"ភាសាខ្មែរ","tag":{"language":"km"},"code":"km","en":"Khmer","use_word_boundary":false,"unit_type":"character","candidates":["km"]},"ko":{"name":"한국어","tag":{"language":"ko"},"code":"ko","en":"Korean","use_word_boundary":false,"unit_type":"character","candidates":["ko"]},"lv":{"name":"Latviešu","tag":{"language":"lv"},"code":"lv","en":"Latvian","use_word_boundary":true,"unit_type":"word","candidates":["lv"]},"ms":{"name":"Bahasa Melayu","tag":{"language":"ms"},"code":"ms","en":"Malay","use_word_boundary":true,"unit_type":"word","candidates":["ms"]},"my":{"name":"ဗမာစာ","tag":{"language":"my"},"code":"my","en":"Burmese","use_word_boundary":true,"unit_type":"word","candidates":["my"]},"ne":{"name":"नेपाली भाषा","tag":{"language":"ne"},"code":"ne","en":"Nepali","use_word_boundary":true,"unit_type":"word","candidates":["ne"]},"no":{"name":"Norsk","tag":{"language":"no"},"code":"no","en":"Norwegian","use_word_boundary":true,"unit_type":"word","candidates":["no"]},"fa":{"name":"زبان_فارسی","tag":{"language":"fa"},"code":"fa","en":"Persian","use_word_boundary":true,"unit_type":"word","candidates":["fa"]},"pl":{"name":"Polski","tag":{"language":"pl"},"code":"pl","en":"Polish","use_word_boundary":true,"unit_type":"word","candidates":["pl"]},"pt-BR":{"name":"Português (Brasil)","tag":{"language":"pt","region":"BR"},"code":"pt-BR","en":"Portuguese (Brazil)","use_word_boundary":true,"unit_type":"word","candidates":["pt-BR","pt"]},"pt-PT":{"name":"Português (Portugal)","tag":{"language":"pt","region":"PT"},"code":"pt-PT","en":"Portuguese (Portugal)","use_word_boundary":true,"unit_type":"word","candidates":["pt-PT","pt"]},"pt":{"name":"Português","tag":{"language":"pt"},"code":"pt","en":"Portuguese","use_word_boundary":true,"unit_type":"word","candidates":["pt"]},"ru":{"name":"Русский","tag":{"language":"ru"},"code":"ru","en":"Russian","use_word_boundary":true,"unit_type":"word","candidates":["ru"]},"si":{"name":"සිංහල","tag":{"language":"si"},"code":"si","en":"Sinhala","use_word_boundary":true,"unit_type":"word","candidates":["si"]},"es-RA":{"name":"Español (Argentina)","tag":{"language":"es","region":"RA"},"code":"es-RA","en":"Spanish (Argentina)","use_word_boundary":true,"unit_type":"word","candidates":["es-RA","es"]},"es-CL":{"name":"Español (Chile)","tag":{"language":"es","region":"CL"},"code":"es-CL","en":"Spanish (Chile)","use_word_boundary":true,"unit_type":"word","candidates":["es-CL","es"]},"es-CO":{"name":"Español (Colombia)","tag":{"language":"es","region":"CO"},"code":"es-CO","en":"Spanish (Colombia)","use_word_boundary":true,"unit_type":"word","candidates":["es-CO","es"]},"es-CR":{"name":"Español (Costa Rica)","tag":{"language":"es","region":"CR"},"code":"es-CR","en":"Spanish (Costa Rica)","use_word_boundary":true,"unit_type":"word","candidates":["es-CR","es"]},"es-HN":{"name":"Español (Honduras)","tag":{"language":"es","region":"HN"},"code":"es-HN","en":"Spanish (Honduras)","use_word_boundary":true,"unit_type":"word","candidates":["es-HN","es"]},"es-419":{"name":"Español (Latinoamérica)","tag":{"language":"es","region":"419"},"code":"es-419","en":"Spanish (Latin America)","use_word_boundary":true,"unit_type":"word","candidates":["es-419","es"]},"es-MX":{"name":"Español (México)","tag":{"language":"es","region":"MX"},"code":"es-MX","en":"Spanish (Mexico)","use_word_boundary":true,"unit_type":"word","candidates":["es-MX","es"]},"es-PE":{"name":"Español (Perú)","tag":{"language":"es","region":"PE"},"code":"es-PE","en":"Spanish (Peru)","use_word_boundary":true,"unit_type":"word","candidates":["es-PE","es"]},"es-ES":{"name":"Español (España)","tag":{"language":"es","region":"ES"},"code":"es-ES","en":"Spanish (Spain)","use_word_boundary":true,"unit_type":"word","candidates":["es-ES","es"]},"es-US":{"name":"Español (Estados Unidos)","tag":{"language":"es","region":"US"},"code":"es-US","en":"Spanish (United States)","use_word_boundary":true,"unit_type":"word","candidates":["es-US","es"]},"es-UY":{"name":"Español (Uruguay)","tag":{"language":"es","region":"UY"},"code":"es-UY","en":"Spanish (Uruguay)","use_word_boundary":true,"unit_type":"word","candidates":["es-UY","es"]},"es-VE":{"name":"Español (Venezuela)","tag":{"language":"es","region":"VE"},"code":"es-VE","en":"Spanish (Venezuela)","use_word_boundary":true,"unit_type":"word","candidates":["es-VE","es"]},"es":{"name":"Español","tag":{"language":"es"},"code":"es","en":"Spanish","use_word_boundary":true,"unit_type":"word","candidates":["es"]},"sw":{"name":"Kiswahili","tag":{"language":"sw"},"code":"sw","en":"Swahili","use_word_boundary":true,"unit_type":"word","candidates":["sw"]},"sv":{"name":"Svensk","tag":{"language":"sv"},"code":"sv","en":"Swedish","use_word_boundary":true,"unit_type":"word","candidates":["sv"]},"tl":{"name":"Tagalog","tag":{"language":"tl"},"code":"tl","en":"Tagalog","use_word_boundary":true,"unit_type":"word","candidates":["tl"]},"ta":{"name":"தமிழ்","tag":{"language":"ta"},"code":"ta","en":"Tamil","use_word_boundary":true,"unit_type":"word","candidates":["ta"]},"th":{"name":"ภาษาไทย","tag":{"language":"th"},"code":"th","en":"Thai","use_word_boundary":false,"unit_type":"character","candidates":["th"]},"hi":{"name":"हिन्दी","tag":{"language":"hi"},"code":"hi","en":"Hindi","use_word_boundary":true,"unit_type":"word","candidates":["hi"]},"tr":{"name":"Türkçe","tag":{"language":"tr"},"code":"tr","en":"Turkish","use_word_boundary":true,"unit_type":"word","candidates":["tr"]},"uk":{"name":"Українська","tag":{"language":"uk"},"code":"uk","en":"Ukrainian","use_word_boundary":true,"unit_type":"word","candidates":["uk"]},"ur":{"name":"اردو","tag":{"language":"ur"},"code":"ur","en":"Urdu","use_word_boundary":true,"unit_type":"word","candidates":["ur"]},"vi":{"name":"Tiếng Việt","tag":{"language":"vi"},"code":"vi","en":"Vietnamese","use_word_boundary":true,"unit_type":"word","candidates":["vi"]}}')
}, function(t, e, n) {
    "use strict";
    var o = this && this.__spreadArray || function(t, e) {
            for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) t[r] = e[n];
            return t
        },
        r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WidgetInit = void 0;
    var i = r(n(0)),
        a = n(42),
        s = n(57),
        u = function() {
            function t(t, e, n, o, r, i, a, s, u, l, c, d, p, h, g, f, m, v, y, w, b, _) {
                this.widget = t;
                this.data = e;
                this.lang = n;
                this.tagCustomization = o;
                this.performanceMonitor = r;
                this.sanityChecker = i;
                this.api = a;
                this.wovnWaitAuditListener = s;
                this.auditTrigger = u;
                this.singlePageApp = l;
                this.externalComponentLoader = c;
                this.widgetSessionManager = d;
                this.wapInstaller = p;
                this.liveEditorInstaller = h;
                this.url = g;
                this.dataLoader = f;
                this.widgetPreview = m;
                this.pageDataCache = v;
                this.liveEditorSettings = y;
                this.widgetInterface = w;
                this.swapIntercom = b;
                this.cookieStore = _;
                this.hasInitialized = !1
            }
            t.prototype.start = function(t) {
                var e = this;
                s.captureHistoryStateChanges();
                this.pageDataCache.clear();
                this.widgetPreview.loadSignatureFromUrl(window.location);
                this.dataLoader.loadInitialPageAndDomainData().then((function() {
                    return e.onInitialPageDataLoaded()
                })).finally((function() {
                    e.data.domainOptions.hasFeature("widget_kill_switch") || e.singlePageApp.listen((function() {
                        return e.reload()
                    }));
                    t && t()
                }))
            };
            t.prototype.onInitialPageDataLoaded = function() {
                var t = this;
                if (!this.data.domainOptions.hasFeature("widget_kill_switch")) {
                    this.data.domainOptions.hasFeature("immediate_widget") || this.widget.c("ReportHelper").mustEnsureOneReport() ? i.default.onDomReady((function() {
                        return t.onDocumentLoaded()
                    })) : i.default.onLoadingComplete((function() {
                        return t.onDocumentLoaded()
                    }));
                    this.data.domainOptions.hasFeature("force_insecure_cookies") && this.cookieStore.forceConvertAllToInsecure()
                }
            };
            t.prototype.onDocumentLoaded = function() {
                this.initialize()
            };
            t.prototype.initialize = function() {
                var t = this;
                this.sanityChecker.runDiagnostic();
                this.wapInstaller.installIfNeeded();
                window.Turbolinks && i.default.onEvent(window.document, "turbolinks:load", (function() {
                    return t.widgetInterface.build()
                }));
                this.performanceMonitor.mark(a.MonitorEventType.FirstSwapStart);
                if (this.data.domainOptions.hasFeature("no_automatic_redirection")) {
                    var e = this.data.pageData.getPublishedLangs();
                    this.widget.c("TranslationDataBridge").onlyShowLangs(e)
                }
                this.data.domainOptions.hasFeature("final_fv_project") && this.lang.getDocLang() !== this.lang.getDefaultCodeIfExists() && this.widget.c("ReportHelper").haltReporting();
                this.insertHreflangLinks();
                this.data.domainOptions.hasFeature("widget_manual_start") || this.startSwapping();
                this.api.makeReady();
                this.tagCustomization.load();
                this.data.domainOptions.useMachineTranslatedModal() && this.externalComponentLoader.loadExternalComponents(["MachineTranslatedModal"]).then((function(t) {
                    t[0].start(!1)
                }));
                this.performanceMonitor.mark(a.MonitorEventType.FirstSwapEnd);
                this.data.domainOptions.hasFeature("widget_session") ? this.widgetSessionManager.startAndAuthenticate().then((function(e) {
                    e ? t.checkLiveEditorAndPreview() : t.liveEditorSettings.isEnabled && t.liveEditorSettings.removeSettingsFromBrowserUrlState()
                })) : this.checkLiveEditorAndPreview();
                this.widgetInterface.listenForDynamicallyAddedCustomWidget(this);
                this.swapIntercom.start();
                this.hasInitialized = !0
            };
            t.prototype.checkLiveEditorAndPreview = function() {
                var t = this;
                if (this.liveEditorSettings.isEnabled) this.loadLiveEditor();
                else {
                    this.widgetPreview.getSignature() && this.widgetInterface.addExitPreviewModeButton();
                    this.data.domainOptions.hasFeature("widget_session") && this.widgetSessionManager.startAndAuthenticate().then((function(e) {
                        e && t.widgetInterface.addSessionTools(t)
                    }))
                }
            };
            t.prototype.startSwapping = function() {
                this.widgetInterface.build();
                this.wovnWaitAuditListener.listen();
                this.lang.setDocLang();
                this.auditTrigger.start()
            };
            t.prototype.stopWidget = function() {
                this.widget.c("DomAuditor").stop();
                this.auditTrigger.stop();
                this.lang.ignoreBackendLang();
                this.data.pageData.clearPageData()
            };
            t.prototype.reload = function() {
                var t = this;
                this.stopWidget();
                return this.dataLoader.loadPageData().then((function() {
                    t.hasInitialized || t.initialize();
                    t.lang.clearDocLang();
                    t.widget.reinstallComponent("DomAuditor");
                    t.widget.c("UnifiedValue").clearCache();
                    t.tagCustomization.load();
                    t.auditTrigger.restart()
                })).catch((function() {
                    t.widget.c("DomAuditor").supervisedSwapVals(t.lang.getDefaultCodeIfExists())
                })).finally((function() {
                    t.widgetInterface.reload()
                }))
            };
            t.prototype.destroy = function() {
                this.stopWidget()
            };
            t.prototype.insertHreflangLinks = function() {
                var t = this.data.domainOptions.getLangPath();
                if (!this.widget.isBackend() && "query" === t) {
                    var e = this.lang.getDefaultCodeIfExists(),
                        n = o(o([], this.data.pageData.getPublishedLangs()), [e]),
                        r = document.getElementsByTagName("head").length > 0 ? document.getElementsByTagName("head")[0] : null;
                    if (r)
                        for (var i = 0; i < n.length; i++)
                            if (n[i]) {
                                var a = this.url.getUrl(n[i], document.location.href),
                                    s = document.createElement("link");
                                s.rel = "alternate";
                                s.hreflang = this.lang.iso6391Normalization(n[i]);
                                s.href = a;
                                r.appendChild(s)
                            }
                }
            };
            t.prototype.loadLiveEditor = function() {
                this.liveEditorInstaller.installIfNeeded()
            };
            return t
        }();
    e.WidgetInit = u
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ValuesStackBalancer = void 0;
    var r = o(n(46)),
        i = n(14),
        a = function() {
            function t(t, e) {
                this.textNormalizer = t;
                this.unifiedValueComments = e
            }
            t.prototype.addEmptyTextNodes = function(t, e) {
                void 0 === e && (e = !1);
                var n = t.fragments;
                if (n.length > 0)
                    for (var o = n.length - 1; o >= -1; --o) {
                        var a = -1 === o ? null : n[o],
                            s = !a || !a.isText,
                            u = o === n.length - 1 ? null : n[o + 1],
                            l = !u || !u.isText;
                        if (s && l) {
                            var c = e ? document.createTextNode("") : null;
                            e && (u ? u.node.parentNode.insertBefore(c, u.node) : a.node.parentNode.appendChild(c));
                            t.fragments.splice(o + 1, 0, new r.default("", c, "", "", [c], [], 0, !1, this.textNormalizer, this.unifiedValueComments, i.IgnoreType.None))
                        }
                    }
                return t
            };
            return t
        }();
    e.ValuesStackBalancer = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.NormalPageDataLoader = void 0;
    var o = function() {
        function t(t, e) {
            this.pageDataSanitizer = t;
            this.widgetDataController = e
        }
        t.prototype.loadPageData = function() {
            var t = this;
            return this.fetchPageData().then((function(e) {
                return t.pageDataSanitizer.sanitize(e)
            }))
        };
        t.prototype.fetchPageData = function() {
            return this.widgetDataController.pageData().then((function(t) {
                return t.body
            }))
        };
        return t
    }();
    e.NormalPageDataLoader = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PerformanceMonitoringDataLoader = void 0;
    var o = n(42),
        r = function() {
            function t(t, e) {
                this.dataLoader = t;
                this.performanceMonitor = e
            }
            t.prototype.loadInitialPageAndDomainData = function() {
                var t = this;
                this.performanceMonitor.mark(o.MonitorEventType.DataLoadStart);
                return this.dataLoader.loadInitialPageAndDomainData().then((function() {
                    return t.performanceMonitor.mark(o.MonitorEventType.DataLoadEnd)
                }))
            };
            t.prototype.loadPageData = function() {
                var t = this;
                this.performanceMonitor.mark(o.MonitorEventType.PageDataLoadStart);
                return this.dataLoader.loadPageData().then((function() {
                    return t.performanceMonitor.mark(o.MonitorEventType.PageDataLoadEnd)
                }))
            };
            return t
        }();
    e.PerformanceMonitoringDataLoader = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CancellingPageDataLoader = void 0;
    var o = n(4),
        r = function() {
            function t(t) {
                this.pageDataLoader = t;
                this.nextReloadRequestId = 0
            }
            t.prototype.loadPageData = function() {
                var t = this,
                    e = this.nextReloadRequestId++;
                return this.pageDataLoader.loadPageData().then((function(n) {
                    return t.nextReloadRequestId - 1 !== e ? o.Promise.reject("request was cancelled") : n
                }))
            };
            return t
        }();
    e.CancellingPageDataLoader = r
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(n(186)),
        s = function(t) {
            r(e, t);

            function e(e) {
                var n = t.call(this) || this;
                n.widgetPreview = e;
                return n
            }
            e.prototype.build = function() {
                return new a.default(this.buildDomInsertStrategy(), this.widgetPreview, window.location)
            };
            return e
        }(i(n(44)).default);
    e.default = s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function(t) {
        r(e, t);

        function e(e, n, o) {
            var r = t.call(this, e) || this;
            r.widgetPreview = n;
            r.location = o;
            return r
        }
        e.prototype.buildHtmlElement = function() {
            var t = this,
                e = document.createElement("span");
            e.className = "wovn-additional-button wovn-preview-mode-button";
            e.setAttribute("wovn", "");
            e.setAttribute("wovn-ignore", "");
            e.onclick = function() {
                t.widgetPreview.removeSignature();
                t.location.reload()
            };
            e.innerText = "Exit preview";
            return e
        };
        return e
    }(i(n(51)).default);
    e.default = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
            return (o = Object.assign || function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++) {
                    e = arguments[n];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                return t
            }).apply(this, arguments)
        },
        r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.BrowserLanguageProvider = void 0;
    var i = n(48),
        a = r(n(2)),
        s = n(188),
        u = n(8),
        l = function() {
            function t(t, e) {
                this.data = t;
                this.navigator = e
            }
            t.prototype.getLanguage = function() {
                var t = this,
                    e = this.sortedProjectLanguages,
                    n = this.allBrowserLanguages().map((function(n) {
                        return t.findSupportedProjectLanguage(e, n)
                    })),
                    r = n.filter((function(t) {
                        return null != t
                    }))[0];
                return r ? o(o({}, r), {
                    isFirstUserPreference: 0 === n.indexOf(r)
                }) : null
            };
            t.prototype.findSupportedProjectLanguage = function(t, e) {
                return this.findProjectLanguage(t, e) || this.findProjectLanguageWithSameGenericLanguage(t, e)
            };
            Object.defineProperty(t.prototype, "sortedProjectLanguages", {
                get: function() {
                    return this.data.getTranslatableLangsAsLangInfo().slice().sort((function(t, e) {
                        return e.code.length - t.code.length
                    }))
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.findProjectLanguage = function(t, e) {
                return this.findProjectLanguageExactMatch(t, e) || this.findProjectLanguageByCandidates(t, e)
            };
            t.prototype.findProjectLanguageExactMatch = function(t, e) {
                return a.default.find(t, (function(t) {
                    return i.isMatchByCode(t, e)
                }))
            };
            t.prototype.findProjectLanguageByCandidates = function(t, e) {
                return a.default.find(t, (function(t) {
                    return (t.candidates || []).some((function(t) {
                        return t.toLowerCase() === e.toLowerCase()
                    }))
                }))
            };
            t.prototype.findProjectLanguageWithSameGenericLanguage = function(t, e) {
                var n = s.parseBCP47PrimarySubtag(e);
                return n ? this.findProjectLanguage(t, n) : null
            };
            t.prototype.allBrowserLanguages = function() {
                var t = this,
                    e = this.nativeBrowserLanguages(),
                    n = e.map((function(e) {
                        return t.fallbackLanguageCode(e)
                    })).filter((function(t) {
                        return null !== t
                    }));
                return e.concat(n)
            };
            t.prototype.nativeBrowserLanguages = function() {
                if (this.navigator.languages && this.navigator.languages.length > 0) return this.navigator.languages;
                var t = this.navigator.language || this.navigator.userLanguage || this.navigator.browserLanguage;
                return t ? [t] : []
            };
            t.prototype.fallbackLanguageCode = function(t) {
                t = t.toLowerCase();
                if (u.startsWith(t, "zh-hant")) return "zh-CHT";
                if (u.startsWith(t, "zh-hans")) return "zh-CHS";
                switch (t.toLowerCase()) {
                    case "zh-tw":
                    case "zh-hk":
                        return "zh-CHT";
                    case "zh-cn":
                    case "zh-sg":
                    case "zh":
                        return "zh-CHS";
                    case "iw":
                        return "he";
                    default:
                        return null
                }
            };
            return t
        }();
    e.BrowserLanguageProvider = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.parseBCP47PrimarySubtag = void 0;
    var o = /^(\w+)(-?|$)/i;
    e.parseBCP47PrimarySubtag = function(t) {
        var e = o.exec(t);
        return e && e[1]
    }
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.NodeTypeSolverFactory = void 0;
    var r = o(n(79)),
        i = o(n(2)),
        a = n(190),
        s = function() {
            function t(t) {
                this.widgetData = t
            }
            t.prototype.create = function() {
                var t = this.buildNodeTypeTable();
                return new a.NodeTypeSolver(t, this.widgetData.domainOptions.getCustomBlockClasses())
            };
            t.prototype.buildNodeTypeTable = function() {
                var t = this,
                    e = this.widgetData.domainOptions.getCustomBlockTags(),
                    n = {
                        "#comment": 1,
                        "#text": 4
                    };
                r.default.skipElements.forEach((function(t) {
                    n[t] = 1
                }));
                r.default.skipElementsWithoutAttributes.forEach((function(t) {
                    n[t] = 5
                }));
                r.default.emptyElements.forEach((function(o) {
                    t.isCustomBlockTag(o, e) || (n[o] = 2)
                }));
                r.default.inlineElements.forEach((function(o) {
                    t.isCustomBlockTag(o, e) || (n[o] = 2)
                }));
                r.default.inlineIgnoredElements.forEach((function(t) {
                    n[t] = 3
                }));
                this.widgetData.domainOptions.hasFeature("option_tag_as_block") && delete n.option;
                return n
            };
            t.prototype.isCustomBlockTag = function(t, e) {
                return i.default.includes(e, t)
            };
            return t
        }();
    e.NodeTypeSolverFactory = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.NodeTypeSolver = void 0;
    var o = n(7),
        r = function() {
            function t(t, e) {
                this.nodeTypeTable = t;
                this.customBlockClassRegex = e.length > 0 ? o.createClassNameRegex(e) : null
            }
            t.prototype.getType = function(t, e) {
                return this.isCustomBlockClass(e) ? 6 : this.nodeTypeTable[t] || 6
            };
            t.prototype.isCustomBlockClass = function(t) {
                return t && this.customBlockClassRegex && this.customBlockClassRegex.test(t)
            };
            return t
        }();
    e.NodeTypeSolver = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ShopifyWidgetInit = void 0;
    var r = o(n(60)),
        i = o(n(48)),
        a = function() {
            function t(t, e, n) {
                this.widgetInit = t;
                this.lang = e;
                this.shopifyLanguageConverter = n
            }
            t.prototype.start = function(t) {
                var e = this;
                window.addEventListener("wovnLangChanged", (function() {
                    return e.setShopifyCartLocale(e.shopifyLanguageConverter)
                }));
                this.widgetInit.start(t)
            };
            t.prototype.startSwapping = function() {
                this.widgetInit.startSwapping()
            };
            t.prototype.reload = function() {
                this.widgetInit.reload()
            };
            t.prototype.setShopifyCartLocale = function(t) {
                var e = i.default.find(this.lang.getDocLang());
                if (e) {
                    var n = t.getShopifyCompatibleLangCode(e);
                    if (n)
                        for (var o = document.querySelectorAll("form[action^='/cart']"), a = 0; a < o.length; ++a) {
                            var s = new r.default(o[a].getAttribute("action"), !0);
                            s.query.locale = n;
                            o[a].setAttribute("action", s.toString().replace(s.origin, ""))
                        }
                }
            };
            return t
        }();
    e.ShopifyWidgetInit = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(n(2)),
        i = function() {
            function t() {
                this.shopifyLangCodes = ["pt-BR", "da", "nl", "en", "fi", "fr", "de", "hi", "it", "ja", "ko", "nb", "zh-CN", "es", "sv", "th", "zh-TW"]
            }
            t.prototype.getShopifyCompatibleLangCode = function(t) {
                var e = t.code;
                if ("zh-CHT" === e) return "zh-TW";
                if ("zh-CHS" === e) return "zh-CN";
                if ("no" === e) return "nb";
                for (var n = 0, o = this.shopifyLangCodes; n < o.length; n++) {
                    var i = o[n];
                    if (e === i || r.default.includes(t.candidates, i)) return i
                }
                return null
            };
            return t
        }();
    e.default = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__assign || function() {
        return (o = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }).apply(this, arguments)
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DomainOptionsSanitizer = void 0;
    var r = n(80),
        i = function() {
            function t() {}
            t.prototype.sanitize = function(t) {
                return o(o({}, t), {
                    link_translations: r.normalizeLinkTranslationsEncoding(t.link_translations)
                })
            };
            return t
        }();
    e.DomainOptionsSanitizer = i
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ValuesStackGenerator = void 0;
    var r = o(n(77)),
        i = o(n(78)),
        a = o(n(46)),
        s = n(14),
        u = function() {
            function t(t, e) {
                this.textNormalizer = t;
                this.unifiedValueComments = e
            }
            t.prototype.createValuesStackFromText = function(t) {
                return new r.default("", 1, !1, [this.createDummyUVText(t)])
            };
            t.prototype.createValuesStackFromHtml = function(t) {
                var e = t.split(/(<\/?[0-9a-zA-Z\-]+.*?>)/);
                if (1 == e.length && "" == e[0]) return this.createValuesStackFromText(e[0]);
                for (var n = [], o = 0; o < e.length; ++o) {
                    var a = e[o];
                    if ("" != a)
                        if (this.isOpenTag(a)) {
                            var u = a.toLowerCase(),
                                l = s.IgnoreType.None; - 1 !== u.indexOf("wovn-ignore-content") && (l |= s.IgnoreType.TagContent); - 1 !== u.indexOf("wovn-ignore-attrs") && (l |= s.IgnoreType.Attributes);
                            u.match(/wovn-ignore[^-]/) && (l |= s.IgnoreType.All);
                            n.push(new i.default(u, null, !0, !1, l, this.textNormalizer))
                        } else if (this.isCloseTag(a)) {
                        u = a.toLowerCase();
                        n.push(new i.default(u, null, !1, !0, s.IgnoreType.None, this.textNormalizer))
                    } else n.push(this.createDummyUVText(a))
                }
                return new r.default("", 1, !1, n)
            };
            t.prototype.isOpenTag = function(t) {
                return "<" == t[0] && "/" != t[1] && ">" == t[t.length - 1]
            };
            t.prototype.isCloseTag = function(t) {
                return "<" == t[0] && "/" == t[1] && ">" == t[t.length - 1]
            };
            t.prototype.createDummyUVText = function(t) {
                return new a.default(t, null, t, t, null, null, 0, !0, this.textNormalizer, this.unifiedValueComments, s.IgnoreType.None)
            };
            return t
        }();
    e.ValuesStackGenerator = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getSessionStorage = e.getLocalStorage = e.NullStorage = void 0;
    var o = function() {
        function t() {
            this.length = 0
        }
        t.prototype.clear = function() {};
        t.prototype.getItem = function(t) {
            return null
        };
        t.prototype.key = function(t) {
            return null
        };
        t.prototype.removeItem = function(t) {};
        t.prototype.setItem = function(t, e) {};
        return t
    }();
    e.NullStorage = o;
    e.getLocalStorage = function() {
        try {
            if (window.localStorage) return window.localStorage
        } catch (t) {
            return new o
        }
        return new o
    };
    e.getSessionStorage = function() {
        try {
            if (window.sessionStorage) return window.sessionStorage
        } catch (t) {
            return new o
        }
        return new o
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SupervisedContent = void 0;
    var o = n(7),
        r = function() {
            function t(t, e) {
                this.data = t;
                this.wovnElementFilter = e;
                this._isSupervisedPage = null
            }
            t.prototype.getSupervisedNodes = function() {
                var t = this.data.getIncludedContent().map((function(t) {
                        return t.selector
                    })),
                    e = o.safeQuerySelectorAll(["[wovn-enable]", "[data-wovn-enable]"].concat(t).join(", "));
                return this.wovnElementFilter.filterOutWovnElements(e)
            };
            t.prototype.isSupervisedPage = function() {
                null === this._isSupervisedPage && (this._isSupervisedPage = this.data.domainOptions.hasSupervisedDomainFeature() || o.hasWovnAttribute(document.documentElement, "wovn-supervised"));
                return this._isSupervisedPage
            };
            return t
        }();
    e.SupervisedContent = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LinkTranslationsManager = void 0;
    var o = n(5),
        r = function() {
            function t(t, e, n) {
                this.widget = t;
                this.urlFormatterFactory = e;
                this.linkTranslationsRepository = n
            }
            t.prototype.findTranslation = function(t, e, n) {
                void 0 === n && (n = "href");
                var r = this.isPreviouslyTranslated(t);
                try {
                    var i = r ? t.getAttribute("data-wovn-link-src-href") : t.getAttribute(n),
                        a = this.urlFormatterFactory.createFromUrl(i).getNormalizedPageUrl(this.widget.isBackend(), this.widget.getBackendUrlPattern()),
                        s = o.parseUrl(a);
                    return this.linkTranslationsRepository.lookupTranslation(s, e)
                } catch (t) {
                    return null
                }
            };
            t.prototype.isPreviouslyTranslated = function(t) {
                return !!t.getAttribute("data-wovn-link-src-href")
            };
            t.prototype.applyTranslation = function(t, e, n) {
                void 0 === n && (n = "href");
                if (e.isDisabled) {
                    t.setAttribute(n, "javascript:void(0)");
                    t.setAttribute("disabled", "disabled")
                } else {
                    t.setAttribute(n, e.translatedHref);
                    t.removeAttribute("disabled")
                }
                t.setAttribute("data-wovn-link-src-href", e.srcAbsoluteHref)
            };
            t.prototype.removeTranslation = function(t, e) {
                void 0 === e && (e = "href");
                var n = t.getAttribute("data-wovn-link-src-href");
                if (n) {
                    t.setAttribute(e, n);
                    t.removeAttribute("data-wovn-link-src-href");
                    t.removeAttribute("disabled")
                }
            };
            return t
        }();
    e.LinkTranslationsManager = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LinkTranslationsRepository = void 0;
    var o = n(5),
        r = function() {
            function t(t, e) {
                this.widgetData = t;
                this.hostAliasMatcher = e
            }
            t.prototype.lookupTranslation = function(t, e) {
                var n;
                try {
                    n = decodeURIComponent(t.href)
                } catch (e) {
                    n = t.href
                }
                return this.absoluteUrlLookup(t, n, e) || this.internalDomainAbsolutePathLookup(t, n, e)
            };
            t.prototype.internalDomainAbsolutePathLookup = function(t, e, n) {
                if (this.hostAliasMatcher.isMatch(e)) {
                    var r = (o.getNormalizedPathWithQuery(e) + "-lang=").toLowerCase() + n,
                        i = this.widgetData.getLinkTranslations()[r];
                    if (i) return this.createLinkTranslationResult(t, i, n)
                }
                return null
            };
            t.prototype.absoluteUrlLookup = function(t, e, n) {
                var r = [e],
                    i = "http:" === t.protocol || "https:" === t.protocol;
                if (i) {
                    r.push(o.changeProtocol(e, "http:" === t.protocol ? "https" : "http"));
                    r.push(o.changeProtocol(e, ""))
                }
                for (var a = 0, s = r; a < s.length; a++) {
                    var u = (s[a] + "-lang=").toLowerCase() + n,
                        l = this.widgetData.getLinkTranslations()[u];
                    if (l) return this.createLinkTranslationResult(t, l, n, i)
                }
            };
            t.prototype.createLinkTranslationResult = function(t, e, n, o) {
                void 0 === o && (o = !0);
                var r = "disabled" === e;
                return {
                    srcAbsoluteHref: t.href,
                    isDisabled: r,
                    translatedHref: r ? "" : o ? this.createTranslatedHref(t, e) : e,
                    targetLang: n
                }
            };
            t.prototype.createTranslatedHref = function(t, e) {
                if (o.isAbsoluteUrl(e)) return e;
                var n = t.href,
                    r = t.pathname + t.search;
                return n.replace(r, e)
            };
            return t
        }();
    e.LinkTranslationsRepository = r
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportValuesButtonBuilder = void 0;
    var a = n(200),
        s = function(t) {
            r(e, t);

            function e(e, n, o, r) {
                var i = t.call(this) || this;
                i.diagnostics = e;
                i.externalComponentLoader = n;
                i.autoTriggerReportCookie = o;
                i.reportStatusMonitor = r;
                return i
            }
            e.prototype.build = function() {
                return new a.ReportValuesButton(this.diagnostics, this.buildDomInsertStrategy(), this.externalComponentLoader, this.autoTriggerReportCookie, this.reportStatusMonitor)
            };
            return e
        }(i(n(44)).default);
    e.ReportValuesButtonBuilder = s
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            o(t, e);

            function n() {
                this.constructor = t
            }
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportValuesButton = void 0;
    var a = i(n(51)),
        s = i(n(64)),
        u = n(58),
        l = n(201),
        c = n(202),
        d = function(t) {
            r(e, t);

            function e(e, n, o, r, i) {
                var a = t.call(this, n) || this;
                a.diagnostics = e;
                a.externalComponentLoader = o;
                a.autoTriggerReportCookie = r;
                a.reportStatusMonitor = i;
                a.statusUpdateRenderDelay = 1e3;
                a.buttonTemplates = {
                    loading: {
                        html: "Sending report...",
                        className: "wovn-report-values-button__status--loading"
                    },
                    success: {
                        html: "Report sent" + s.default.CHECK,
                        className: "wovn-report-values-button__status--success"
                    },
                    error: {
                        html: "Error. Try again " + s.default.REFRESH,
                        className: "wovn-report-values-button__status--error"
                    }
                };
                a.queuedPromises = new l.PromiseQueue;
                a.subscribedReport = function(t) {
                    return a.onReportStatusUpdated(t)
                };
                a.hasAutoTriggerReportCookie() && a.reportStatusMonitor.subscribe(a.subscribedReport);
                return a
            }
            e.prototype.buildHtmlElement = function() {
                var t = this;
                this.buttonElement = document.createElement("div");
                var e = document.createElement("span");
                e.classList.add("wovn-report-values-button__label");
                e.innerText = "Custom Report";
                this.actionButtonElement = document.createElement("span");
                this.actionButtonElement.classList.add("wovn-report-values-button__status");
                this.resetButtonLabel();
                this.buttonElement.className = this.hasAutoTriggerReportCookie() ? "wovn-additional-button wovn-report-values-button wovn-report-values-button--auto" : "wovn-additional-button wovn-report-values-button wovn-report-values-button--manual";
                this.buttonElement.setAttribute("wovn", "");
                this.buttonElement.setAttribute("wovn-ignore", "");
                this.buttonElement.appendChild(e);
                this.buttonElement.appendChild(this.actionButtonElement);
                this.buttonElement.onclick = function() {
                    t.externalComponentLoader.loadExternalComponents(["WidgetVue"]).then((function(e) {
                        e[0].start(t)
                    }))
                };
                return this.buttonElement
            };
            e.prototype.setToAutomatic = function() {
                var t = this;
                this.queuedPromises.clear();
                this.queuedPromises.restart();
                this.reportStatusMonitor.subscribe(this.subscribedReport);
                this.queueStatusUpdateRender((function() {
                    t.resetButtonStatus();
                    t.actionButtonElement.innerHTML = "Automatic";
                    t.buttonElement.classList.remove("wovn-report-values-button--manual");
                    t.buttonElement.classList.add("wovn-report-values-button--auto")
                }))
            };
            e.prototype.setToManual = function() {
                var t = this;
                this.queuedPromises.clear();
                this.reportStatusMonitor.unsubscribe(this.subscribedReport);
                this.queueStatusUpdateRender((function() {
                    t.resetButtonStatus();
                    t.buttonElement.classList.remove("wovn-report-values-button--auto");
                    t.buttonElement.classList.add("wovn-report-values-button--manual");
                    t.actionButtonElement.innerHTML = "Manual";
                    t.queuedPromises.stop()
                }))
            };
            e.prototype.triggerReport = function(t) {
                var e = this;
                this.queuedPromises.restart();
                this.reportStatusMonitor.subscribe(this.subscribedReport);
                return this.diagnostics.customReport(t).finally((function() {
                    e.reportStatusMonitor.unsubscribe(e.subscribedReport)
                }))
            };
            e.prototype.onReportStatusUpdated = function(t) {
                var e = this;
                switch (t) {
                    case u.ReportStatus.Idle:
                        this.queueStatusUpdateRender((function() {
                            e.resetButtonLabel();
                            e.resetButtonStatus()
                        }));
                        break;
                    case u.ReportStatus.Sending:
                        this.queueStatusUpdateRender((function() {
                            return e.showLoadingStatus()
                        }));
                        break;
                    case u.ReportStatus.Success:
                        this.queueStatusUpdateRender((function() {
                            return e.showSuccessStatus()
                        }));
                        break;
                    case u.ReportStatus.Failed:
                        this.queueStatusUpdateRender((function() {
                            return e.showFailedStatus()
                        }))
                }
            };
            e.prototype.queueStatusUpdateRender = function(t) {
                var e = this;
                this.queuedPromises.enqueue((function() {
                    return c.sleep(e.statusUpdateRenderDelay).then((function() {
                        return t()
                    }))
                }))
            };
            e.prototype.resetButtonLabel = function() {
                this.actionButtonElement.innerHTML = this.hasAutoTriggerReportCookie() ? "Automatic" : "Manual"
            };
            e.prototype.resetButtonStatus = function() {
                this.actionButtonElement.classList.remove(this.buttonTemplates.loading.className);
                this.actionButtonElement.classList.remove(this.buttonTemplates.success.className);
                this.actionButtonElement.classList.remove(this.buttonTemplates.error.className)
            };
            e.prototype.showLoadingStatus = function() {
                this.actionButtonElement.classList.add(this.buttonTemplates.loading.className);
                this.actionButtonElement.innerHTML = this.buttonTemplates.loading.html
            };
            e.prototype.showSuccessStatus = function() {
                this.actionButtonElement.classList.add(this.buttonTemplates.success.className);
                this.actionButtonElement.innerHTML = this.buttonTemplates.success.html
            };
            e.prototype.showFailedStatus = function() {
                this.actionButtonElement.classList.add(this.buttonTemplates.error.className);
                this.actionButtonElement.innerHTML = this.buttonTemplates.error.html
            };
            e.prototype.hasAutoTriggerReportCookie = function() {
                return !!this.autoTriggerReportCookie.get()
            };
            return e
        }(a.default);
    e.ReportValuesButton = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PromiseQueue = void 0;
    var o = n(4),
        r = function() {
            function t() {
                this.workingOnPromise = !1;
                this.isStopped = !1;
                this.queue = []
            }
            t.prototype.enqueue = function(t) {
                var e = this;
                return new o.Promise((function(n, o) {
                    if (!e.isStopped) {
                        e.queue.push({
                            promiseFunc: t,
                            resolve: n,
                            reject: o
                        });
                        e.dequeue()
                    }
                }))
            };
            t.prototype.dequeue = function() {
                var t = this;
                if (this.workingOnPromise) return !1;
                var e = this.queue.shift();
                if (!e) return !1;
                try {
                    this.workingOnPromise = !0;
                    e.promiseFunc().then((function() {
                        t.workingOnPromise = !1;
                        e.resolve();
                        t.dequeue()
                    })).catch((function(n) {
                        t.workingOnPromise = !1;
                        e.reject(n);
                        t.dequeue()
                    }))
                } catch (t) {
                    this.workingOnPromise = !1;
                    e.reject(t);
                    this.dequeue()
                }
                return !0
            };
            t.prototype.clear = function() {
                this.queue = []
            };
            t.prototype.length = function() {
                return this.queue.length
            };
            t.prototype.stop = function() {
                this.isStopped = !0
            };
            t.prototype.restart = function() {
                this.isStopped = !1
            };
            return t
        }();
    e.PromiseQueue = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.sleep = void 0;
    var o = n(4);
    e.sleep = function(t) {
        void 0 === t && (t = 0);
        return new o.Promise((function(e, n) {
            return setTimeout(e, t)
        }))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DomTraversalParsableNodeFilterProvider = void 0;
    var o = function() {
        function t() {
            this.nodeFilters = []
        }
        t.prototype.addFilter = function(t) {
            this.nodeFilters.push(t)
        };
        t.prototype.isNodeFilteredOut = function(t) {
            return this.nodeFilters.some((function(e) {
                return e(t)
            }))
        };
        return t
    }();
    e.DomTraversalParsableNodeFilterProvider = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.SessionProxyHttpRequestExecutor = void 0;
    var o = n(4),
        r = function() {
            function t(t) {
                this.sessionProxy = t
            }
            t.prototype.get = function(t, e, n) {
                var r = this;
                return new o.Promise((function(o, i) {
                    r.sessionProxy.sendRequest("GET", t, e, n, (function(t, e, n) {
                        return o({
                            body: t,
                            headers: n
                        })
                    }), (function(t, e, n) {
                        return i({
                            body: t,
                            status: e,
                            headers: n
                        })
                    }))
                }))
            };
            t.prototype.post = function(t, e, n) {
                var r = this;
                return new o.Promise((function(o, i) {
                    r.sessionProxy.sendRequest("POST", t, e, n, (function(t, e, n) {
                        return o({
                            body: t,
                            headers: n
                        })
                    }), (function(t, e, n) {
                        return i({
                            body: t,
                            status: e,
                            headers: n
                        })
                    }))
                }))
            };
            return t
        }();
    e.SessionProxyHttpRequestExecutor = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WovnElementFilter = void 0;
    var r = o(n(2)),
        i = function() {
            function t() {
                this.rootElementProviders = []
            }
            t.prototype.registerWovnElement = function(t) {
                this.rootElementProviders.push(t)
            };
            t.prototype.filterOutWovnElements = function(t) {
                var e = this.getRootElements();
                return t.filter((function(t) {
                    return !e.some((function(e) {
                        return e.contains(t)
                    }))
                }))
            };
            t.prototype.getRootElements = function() {
                return r.default.flatMap(this.rootElementProviders, (function(t) {
                    return t()
                })).filter((function(t) {
                    return null !== t
                }))
            };
            return t
        }();
    e.WovnElementFilter = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.AutoTriggerReportCookie = void 0;
    var o = n(3).WovnCookies.AUTO_TRIGGER_REPORT,
        r = function() {
            function t(t) {
                this.cookieStore = t
            }
            t.prototype.set = function(t) {
                var e = t.toString();
                this.cookieStore.set(o, e)
            };
            t.prototype.get = function() {
                return "true" === this.cookieStore.get(o)
            };
            t.prototype.erase = function() {
                this.cookieStore.erase(o)
            };
            t.prototype.destroy = function() {
                this.erase()
            };
            return t
        }();
    e.AutoTriggerReportCookie = r
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportHelper = void 0;
    var r = n(16),
        i = n(8),
        a = n(5),
        s = n(4),
        u = o(n(26)),
        l = n(208),
        c = n(59),
        d = function() {
            function t(t, e, n, o, r, i, a, s, u, l, c, d, p) {
                this.data = t;
                this.debugSettings = e;
                this.lang = n;
                this.autoTriggerReportCookie = o;
                this.snippetSettings = r;
                this.agent = i;
                this.utils = a;
                this.webServices = s;
                this.supervisedContent = u;
                this.liveEditorSettings = l;
                this.wovnContext = c;
                this.url = d;
                this.reportingOptOutCookie = p;
                this.reportLotResult = void 0;
                this.reportCount = 0;
                this.reportTimerResetCount = 0;
                this._hasReportedOnce = !1;
                this.scrapeNumber = 0;
                this._reportSuccessCount = 0;
                this.shouldHaltReporting = !1;
                this.hasNewMissedSrc = !1;
                this.reset();
                this.bootstrapingReport = this.mustEnsureOneReport();
                this.bootstrapingReport && (this.reportTime = 1e3);
                this.shouldHaltReporting = this.agent.mutatesTextNodeData();
                this.initializeReportTime()
            }
            t.prototype.getReportCandidates = function() {
                return this.srcs
            };
            t.prototype.triggerReportIfNecessary = function() {
                var t = {
                    shouldReport: this.needsReport(this.hasNewSrc(), this.getHasNewMissedSrc()),
                    reportSource: this.getReportSource()
                };
                if (t.shouldReport) {
                    this.triggerReport(t.reportSource);
                    this._hasReportedOnce = !0
                }
            };
            t.prototype.incrementReportCount = function() {
                this.reportCount += 1
            };
            t.prototype.resetReportCount = function() {
                this.reportCount = 0;
                clearTimeout(this.reportTimer)
            };
            t.prototype.getReportCount = function() {
                return this.reportCount
            };
            t.prototype.incrementReportTimerResetCount = function() {
                this.reportTimerResetCount += 1
            };
            t.prototype.resetReportTimerResetCount = function() {
                this.reportTimerResetCount = 0
            };
            t.prototype.setReportTime = function(t) {
                this.reportTime = t
            };
            t.prototype.reset = function() {
                this.srcs = {};
                this.newSrcs = {};
                this.hasNewMissedSrc = !1;
                clearTimeout(this.reportTimer);
                this.reportTimer = void 0;
                this.resetReportTimerResetCount();
                this.resetReportCount();
                this._reportSuccessCount = 0
            };
            t.prototype.markHasNewMissedSrcIfFirstSeen = function(t) {
                this.srcs.hasOwnProperty(t) || (this.hasNewMissedSrc = !0)
            };
            t.prototype.removeNewSrcs = function() {
                for (var t in this.newSrcs) this.srcs.hasOwnProperty(t) && delete this.srcs[t];
                this.newSrcs = {};
                this.hasNewMissedSrc = !1
            };
            t.prototype.addSrc = function(e, n, o, s, l) {
                var c = this.lang.getDefaultCodeIfExists();
                if (!r.isImageXpath(n) || !i.containsSubstring(e, u.default.S3_IMAGE_BUCKET) && a.isHttpProtocol(e, location)) {
                    l.addValue(e);
                    if (this.lang.getActualLang() === c || this.data.domainOptions.hasFeature("widget_backend_report_translated_pages")) {
                        var d = this.createDataObject(e, n, o, s);
                        this.hasSrcEntry(e) || this.hasNewSrcEntry(e) && !t.needsUpdate(this.getNewSrc(e)) || this.setNewSrc(e, d);
                        this.hasSrcEntry(e) && !t.needsUpdate(this.getSrc(e)) || this.setSrc(e, d)
                    }
                }
            };
            t.prototype.triggerReport = function(t, e, n) {
                void 0 === e && (e = null);
                void 0 === n && (n = null);
                e = null != e ? e : this.reportTime;
                return this.resetReportTimer(e, t, n)
            };
            t.prototype.haltReporting = function() {
                this.shouldHaltReporting = !0
            };
            t.prototype.onAuditComplete = function() {
                this.scrapeNumber += 1
            };
            t.prototype.getReportSuccessCount = function() {
                return this._reportSuccessCount
            };
            t.prototype.getReportSource = function() {
                return this.autoTriggerReportCookie.get() ? c.ReportSource.AutomaticCustom : c.ReportSource.Audit
            };
            t.prototype.needsReport = function(t, e) {
                if (this.shouldForceReport()) return !0;
                if (this.getReportSource() === c.ReportSource.Audit) {
                    if (!this.data.isReportingEnabled(this.reportingOptOutCookie)) return !1;
                    if (!this.isSelectedForReport()) return !1;
                    if (this.hasMissingLangs()) return !0;
                    if (this.reportCount >= 10) return !1;
                    if (this.reportTimerResetCount >= 10) return !1
                }
                return t && e
            };
            t.prototype.createDataObject = function(t, e, n, o) {
                return {
                    src: t,
                    xpath: e,
                    unified: Boolean(o),
                    is_third_party: n,
                    exists: !0,
                    scrape_number: this.scrapeNumber
                }
            };
            t.needsUpdate = function(t) {
                return /meta/.test(t.xpath) || t.is_third_party
            };
            t.prototype.mustEnsureOneReport = function() {
                return !!this.data.domainOptions.hasFeature("fast_report_new_pages") && (this.lang.missingAutoTranslateLangs() || this.lang.missingAutoPublishLangs())
            };
            t.prototype.postSrcs = function(t, e) {
                var n = this;
                if (0 == t.length) return s.Promise.resolve();
                if (!this.utils.isValidURI(location.href)) return s.Promise.resolve();
                var o = this.webServices.report,
                    r = this.supervisedContent.isSupervisedPage();
                return o.reportValues(t, this.bootstrapingReport, this.getReportCount(), r, e).then((function() {
                    n._reportSuccessCount++
                }))
            };
            t.prototype.reportVals = function(t, e) {
                if (this.debugSettings.haltReporting || this.liveEditorSettings.isEnabled || this.shouldHaltReporting) return s.Promise.resolve();
                this.incrementReportCount();
                return this.postSrcs(e, t)
            };
            t.prototype.buildSrcValues = function(t) {
                void 0 === t && (t = !0);
                this.mergeNewSrcs();
                var e = this.getReportValueList();
                t && (e = l.filterValuesByTranslationData(e, this.data.getTranslationData(), this.data.pageData.getPublishedLangs()));
                return e
            };
            t.prototype.resetReportTimer = function(t, e, n) {
                var o = this;
                if (!this.isReportable()) return s.Promise.resolve();
                this.incrementReportTimerResetCount();
                clearTimeout(this.reportTimer);
                return new s.Promise((function(r, i) {
                    o.mergeNewSrcs();
                    o.reportTimer = setTimeout((function() {
                        o.resetReportTimerResetCount();
                        o.reportVals(e, o.buildSrcValues(n)).then(r, i)
                    }), t)
                }))
            };
            t.prototype.initializeReportTime = function() {
                this.wovnContext.isProductionLike() ? this.reportTime = this.url.hasFlag("instantReport") ? 1e3 : 5e3 : this.reportTime = 1e3
            };
            t.prototype.shouldForceReport = function() {
                return !this._hasReportedOnce && !!this.debugSettings.forceReporting
            };
            t.prototype.isSelectedForReport = function() {
                if (void 0 === this.reportLotResult) {
                    var t = this.data.domainOptions.reportLotRatio();
                    this.reportLotResult = t > Math.random()
                }
                return this.reportLotResult
            };
            t.prototype.hasMissingLangs = function() {
                return !this._hasReportedOnce && !(!this.lang.missingAutoTranslateLangs() && !this.lang.missingAutoPublishLangs())
            };
            t.prototype.hasNewSrcEntry = function(t) {
                return this.newSrcs.hasOwnProperty(t)
            };
            t.prototype.hasNewSrc = function() {
                for (var t in this.newSrcs)
                    if (this.newSrcs.hasOwnProperty(t)) return !0;
                return !1
            };
            t.prototype.getNewSrc = function(t) {
                return this.newSrcs[t]
            };
            t.prototype.setNewSrc = function(t, e) {
                this.newSrcs[t] = e
            };
            t.prototype.hasSrcEntry = function(t) {
                return this.srcs.hasOwnProperty(t)
            };
            t.prototype.setSrc = function(t, e) {
                this.srcs[t] = e
            };
            t.prototype.getSrc = function(t) {
                return this.srcs[t]
            };
            t.prototype.getHasNewMissedSrc = function() {
                return this.hasNewMissedSrc
            };
            t.prototype.getReportValueList = function() {
                var t = this;
                return Object.keys(this.srcs).map((function(e) {
                    return t.srcs[e]
                }))
            };
            t.prototype.mergeNewSrcs = function() {
                for (var t in this.newSrcs)
                    if (this.newSrcs.hasOwnProperty(t)) {
                        var e = this.srcs[t];
                        this.srcs.hasOwnProperty(t) && !/meta/.test(e.xpath) || (this.srcs[t] = this.newSrcs[t])
                    } this.newSrcs = {};
                this.hasNewMissedSrc = !1
            };
            t.prototype.isReportable = function() {
                var t = this.lang.getDocLang();
                if (!t) return !1;
                var e = this.lang.getDefaultCodeIfExists(),
                    n = this.snippetSettings.isBackend && t !== e;
                return this.data.domainOptions.hasFeature("widget_backend_report_translated_pages") || !n
            };
            return t
        }();
    e.ReportHelper = d
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.filterValuesByTranslationData = void 0;
    var r = o(n(25)),
        i = o(n(2));
    e.filterValuesByTranslationData = function(t, e, n) {
        return function(t, e) {
            var n = function(t) {
                return function(e) {
                    return i.default.includes(t, e) || i.default.includes(t, r.default.unescape(e))
                }
            }(e);
            return t.filter((function(t) {
                return !n(t.src)
            }))
        }(t, e.getTextValuesByLangs(n))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.WapOptOutCookie = void 0;
    var o = n(3),
        r = o.WovnCookies.WAP_ENABLED,
        i = o.WovnCookies.LEGACY_OPTED_OUT_WAP,
        a = function() {
            function t(t) {
                this.cookieStore = t
            }
            t.prototype.set = function(t) {
                var e = t.toString();
                this.cookieStore.set(r, e)
            };
            t.prototype.get = function() {
                this.migrateOldCookie();
                var t = this.cookieStore.get(r);
                return null == t ? null : "true" === t
            };
            t.prototype.erase = function() {
                this.cookieStore.erase(r)
            };
            t.prototype.destroy = function() {
                this.erase()
            };
            t.prototype.migrateOldCookie = function() {
                var t = this.cookieStore.get(i);
                if (t) {
                    this.cookieStore.erase(i);
                    this.set("0" === t)
                }
            };
            return t
        }();
    e.WapOptOutCookie = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ReportingOptOutCookie = void 0;
    var o = n(3),
        r = o.WovnCookies.REPORTING_ENABLED,
        i = o.WovnCookies.LEGACY_OPTED_OUT_REPORTING,
        a = function() {
            function t(t) {
                this.cookieStore = t
            }
            t.prototype.set = function(t) {
                var e = t.toString();
                this.cookieStore.set(r, e)
            };
            t.prototype.get = function() {
                this.migrateOldCookie();
                var t = this.cookieStore.get(r);
                return null == t ? null : "true" === t
            };
            t.prototype.erase = function() {
                this.cookieStore.erase(r)
            };
            t.prototype.destroy = function() {
                this.erase()
            };
            t.prototype.migrateOldCookie = function() {
                var t = this.cookieStore.get(i);
                if (t) {
                    this.cookieStore.erase(i);
                    this.set("0" === t)
                }
            };
            return t
        }();
    e.ReportingOptOutCookie = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DynamicLoadingOptOutCookie = void 0;
    var o = n(3),
        r = o.WovnCookies.DYNAMIC_LOADING_ENABLED,
        i = o.WovnCookies.LEGACY_OPTED_OUT_DYNAMIC_LOADING,
        a = function() {
            function t(t) {
                this.cookieStore = t
            }
            t.prototype.set = function(t) {
                var e = t.toString();
                this.cookieStore.set(r, e)
            };
            t.prototype.get = function() {
                this.migrateOldCookie();
                var t = this.cookieStore.get(r);
                return null == t ? null : "true" === t
            };
            t.prototype.erase = function() {
                this.cookieStore.erase(r)
            };
            t.prototype.destroy = function() {
                this.erase()
            };
            t.prototype.migrateOldCookie = function() {
                var t = this.cookieStore.get(i);
                if (t) {
                    this.cookieStore.erase(i);
                    this.set("0" === t)
                }
            };
            return t
        }();
    e.DynamicLoadingOptOutCookie = a
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.OnDemandTranslationController = void 0;
    var i = n(6),
        a = function(t) {
            r(e, t);

            function e(e, n, o) {
                var r = t.call(this, n) || this;
                r.wovnContext = e;
                r.projectToken = o;
                return r
            }
            e.prototype.translateTexts = function(t, e) {
                var n = {
                    token: this.projectToken,
                    tgt_lang: e,
                    texts: t
                };
                return this.postAndParseJson(this.wovnContext.apiHost, "/v0/on_demand_translation", n, i.ContentType.JsonAsText)
            };
            return e
        }(n(9).WebService);
    e.OnDemandTranslationController = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PreviewPageDataLoader = void 0;
    var o = function() {
        function t(t, e, n) {
            this.pageDataSanitizer = t;
            this.widgetPreview = e;
            this.widgetDataController = n
        }
        t.prototype.loadPageData = function() {
            var t = this;
            return this.widgetDataController.previewData(this.widgetPreview.getSignature()).then((function(e) {
                return t.pageDataSanitizer.sanitize(e.body)
            }))
        };
        return t
    }();
    e.PreviewPageDataLoader = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PageDataWrapper = void 0;
    var r = o(n(52)),
        i = o(n(48)),
        a = n(14),
        s = o(n(22)),
        u = function() {
            function t() {
                this.pageData = null
            }
            t.prototype.set = function(t) {
                this.pageData = t
            };
            t.prototype.clearPageData = function() {
                this.pageData = null
            };
            t.prototype.getConvertedLangs = function() {
                return this.get().convert_langs || []
            };
            t.prototype.getValuesInfo = function() {
                return this.get().values_info || {}
            };
            t.prototype.getProTranslatingValues = function() {
                return this.get().pro_translating || []
            };
            t.prototype.getLinkTranslations = function() {
                return this.get().link_translations || {}
            };
            t.prototype.get = function() {
                return this.pageData || {}
            };
            t.prototype.getLang = function() {
                return this.get().language
            };
            t.prototype.getPageCss = function() {
                return this.get().page_css
            };
            t.prototype.getPageCssHash = function() {
                return this.get().page_css_hash
            };
            t.prototype.getPageJs = function() {
                return this.get().page_js
            };
            t.prototype.getPageId = function() {
                return this.get().id
            };
            t.prototype.getManualPublishedDate = function() {
                var t = this.get().manual_published_time;
                return t ? new Date(1e3 * t) : null
            };
            t.prototype.getTranslationData = function() {
                var t = this.getTextValues(),
                    e = this.getImageValues(),
                    n = this.getHTMLTextValues(),
                    o = this.getPageTextValues(),
                    i = this.getManualPublishedDate();
                return new r.default(Date.now(), t, e, n, o, s.default.c("Storage"), i)
            };
            t.prototype.getTextValues = function() {
                return this.get().text_vals || {}
            };
            t.prototype.getHTMLTextValues = function() {
                return this.get().html_text_vals || {}
            };
            t.prototype.getPageTextValues = function() {
                return this.get().page_text_vals || {}
            };
            t.prototype.getImageValues = function() {
                return this.get().img_vals || {}
            };
            t.prototype.getRemovedTextValues = function() {
                return this.get().removed_text_vals || []
            };
            t.prototype.getRemovedTextValuesHash = function() {
                return this.get().removed_text_vals_hash || {}
            };
            t.prototype.getUntranslatedValues = function() {
                return this.get().untranslated_values || {}
            };
            t.prototype.getPublishedLangs = function() {
                return this.get().published_langs || []
            };
            t.prototype.isPublished = function(t) {
                return -1 !== this.getPublishedLangs().indexOf(t)
            };
            t.prototype.hasPublishedLang = function() {
                return this.getPublishedLangs().length > 0
            };
            t.prototype.isExceedMachineTranslationLimit = function() {
                return !!this.get().is_exceed_machine_translation_limit
            };
            t.prototype.getPropertyValues = function() {
                return this.get().prop_vals || {}
            };
            t.prototype.getDomainLanguageMax = function() {
                return this.get().language_max
            };
            t.prototype.getDomainPublishedPagesMax = function() {
                return this.get().published_pages_max
            };
            t.prototype.getDomainPublishedPagesNum = function() {
                return this.get().published_pages_num
            };
            t.prototype.getSourceLangs = function() {
                return this.get().source_langs || []
            };
            t.prototype.getPageReportingEnabled = function() {
                var t = this.get().dynamic_values;
                return null != t ? t : null
            };
            t.prototype.getPageExcludedContentRules = function() {
                return this.get().excluded_content_rules || []
            };
            t.prototype.getPageExcludedContent = function() {
                return (this.get().excluded_content || []).map((function(t) {
                    return a.convertStringEnums(t)
                }))
            };
            t.prototype.getPageIncludedContent = function() {
                return this.get().included_content || []
            };
            t.prototype.availableTargetLangs = function() {
                var t = this.getLang();
                return i.default.all.filter((function(e) {
                    return e.code !== t
                }), this)
            };
            return t
        }();
    e.PageDataWrapper = u
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ImageTranslationRepository = void 0;
    var r = n(5),
        i = o(n(0)),
        a = function() {
            function t(t) {
                this.hostAliasMatcher = t;
                this._isLoaded = !1;
                this.externalImages = {};
                this.internalImages = {};
                this.rawImgTranslations = {}
            }
            Object.defineProperty(t.prototype, "isEmpty", {
                get: function() {
                    return 0 === Object.keys(this.rawImgTranslations).length
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(t.prototype, "isLoaded", {
                get: function() {
                    return this._isLoaded
                },
                enumerable: !1,
                configurable: !0
            });
            t.prototype.clear = function() {
                this._isLoaded = !1;
                this.externalImages = {};
                this.internalImages = {};
                this.rawImgTranslations = {}
            };
            t.prototype.loadTranslationData = function(t, e) {
                var n = i.default.assign({}, this.rawImgTranslations, t, e),
                    o = this.buildImageTranslationMap(n),
                    r = o[0],
                    a = o[1];
                this.externalImages = r;
                this.internalImages = a;
                this.rawImgTranslations = n;
                this._isLoaded = !0
            };
            t.prototype.copyTo = function(t) {
                t.updateImageTranslations(this.rawImgTranslations)
            };
            t.prototype.find = function(t, e) {
                var n = this.externalImages[t];
                if (n) return n[e] || null;
                if (!this.hostAliasMatcher.isMatch(t)) return null;
                var o = r.getNormalizedPathWithQuery(t),
                    i = this.internalImages[o];
                return i && i[e] || null
            };
            t.prototype.buildImageTranslationMap = function(t) {
                var e = {},
                    n = {};
                for (var o in t)
                    if (this.hostAliasMatcher.isMatch(o)) {
                        n[r.getNormalizedPathWithQuery(o)] = this.convertTranslations(t[o])
                    } else e[o] = this.convertTranslations(t[o]);
                return [e, n]
            };
            t.prototype.convertTranslations = function(t) {
                var e = {};
                for (var n in t) e[n] = {
                    dst_url: t[n][0].data,
                    created_at: t[n][0].created_at
                };
                return e
            };
            return t
        }();
    e.ImageTranslationRepository = a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.createClientLocation = e.ClientLocation = void 0;
    var o = n(217),
        r = function(t, e, n, o, r) {
            this.host = e;
            this.href = t + "//" + e + n + o + r;
            this.hostWithoutLangCode = this.host;
            this.hrefWithoutLangCode = this.href
        };
    e.ClientLocation = r;
    e.createClientLocation = function(t, e) {
        var n = e.getAttribute("data-domain-override");
        if (n) {
            var i = o.getLocationOverride(t, n);
            return new r(i.protocol, i.host, i.path, i.query, i.hash)
        }
        return null
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.getLocationOverride = void 0;
    var o = n(218);
    e.getLocationOverride = function(t, e) {
        var n = e.split("="),
            r = n[0],
            i = n[1];
        if (!r || !i) throw new Error("Invalid format for data-domain-override attribute in Wovn script tag");
        if ("cordova" === r.toLowerCase()) return new o.CordovaLocationOverride(t, i);
        throw new Error("Unrecognized domain override type: " + r)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.CordovaLocationOverride = void 0;
    var o = function() {
        function t(t, e) {
            this.protocol = "http:";
            this.host = e;
            this.path = this.computePath(t);
            this.query = t.search;
            this.hash = t.hash
        }
        t.prototype.computePath = function(t) {
            var e = new RegExp("^.*?/www(/.*)$", "i"),
                n = t.pathname.match(e);
            if (n && n[1]) return n[1];
            throw new Error("Location Error: Could not parse Cordova resource path")
        };
        return t
    }();
    e.CordovaLocationOverride = o
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Widget = void 0;
    var r = o(n(49)),
        i = n(47),
        a = function() {
            function t(t, e) {
                this.components = t;
                this.snippetSettings = e;
                this.installedComponents = {}
            }
            t.prototype.exposeComponentApi = function() {
                var t = this;
                document.WOVNIO = {
                    registerComponent: function(e, n, o) {
                        if (!t.components[e] || !o) {
                            t.components[e] = n;
                            delete t.installedComponents[e];
                            var r = document.createEvent("Event"),
                                i = e + "Loaded";
                            r.initEvent(i, !0, !0);
                            document.dispatchEvent(r)
                        }
                    },
                    components: this.components
                }
            };
            t.prototype.isBackend = function() {
                return this.snippetSettings.isBackend
            };
            t.prototype.getComponent = function(t) {
                var e = this.installedComponents[t];
                if (e) return e;
                if (this.components[t]) {
                    this.installComponent(t);
                    return this.installedComponents[t]
                }
                return null
            };
            t.prototype.installComponent = function(t) {
                this.installedComponents[t] || void 0 === this.components[t] || ("function" == typeof this.components[t] ? this.installedComponents[t] = new this.components[t](this) : this.installedComponents[t] = this.components[t])
            };
            t.prototype.c = function(t) {
                return this.getComponent(t)
            };
            t.prototype.isComponentLoaded = function(t) {
                return this.installedComponents.hasOwnProperty(t) || this.components.hasOwnProperty(t)
            };
            t.prototype.destroyComponent = function(t) {
                if (this.installedComponents[t] && "function" == typeof this.installedComponents[t].destroy) {
                    this.installedComponents[t].destroy();
                    delete this.installedComponents[t]
                }
            };
            t.prototype.destroy = function() {
                for (var t in this.installedComponents) this.installedComponents.hasOwnProperty(t) && this.destroyComponent(t)
            };
            t.prototype.reinstallComponent = function(t) {
                this.destroyComponent(t);
                this.installComponent(t)
            };
            t.prototype.getBackendCurrentLang = function() {
                return this.snippetSettings.currentLang
            };
            t.prototype.getBackendDefaultLang = function() {
                return this.snippetSettings.defaultLang
            };
            t.prototype.getBackendUrlPattern = function() {
                return null == this.snippetSettings.urlPattern ? null : this.snippetSettings.urlPattern == i.UrlLanguagePattern.CustomDomain ? "custom_domain" : i.UrlLanguagePattern[this.snippetSettings.urlPattern].toLowerCase()
            };
            t.prototype.getEncodedLocation = function(t) {
                return encodeURIComponent(this.getLocation(t))
            };
            t.prototype.getLocation = function(t) {
                t || (t = location);
                if ("string" != typeof t) {
                    var e = r.default.toASCII(t.host);
                    t = t.protocol + "//" + e + t.pathname + t.search + t.hash
                }
                return this.c("UrlFormatter").createFromUrl(t).getNormalizedPageUrl(this.isBackend(), this.getBackendUrlPattern())
            };
            return t
        }();
    e.Widget = a
}, function(t, e, n) {
    "use strict";
    var o = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.createSnippetSettings = void 0;
    var r = o(n(60)),
        i = n(4),
        a = n(47),
        s = "data-wovnio";
    e.createSnippetSettings = function(t, e) {
        if (t.hasAttribute(s)) return i.Promise.resolve(u(t));
        var n = new r.default(t.src, !0),
            o = n.query.token;
        if (o) {
            t.setAttribute(s, "key=" + o);
            return i.Promise.resolve(u(t))
        }
        return e.getToken(n).then((function(e) {
            t.setAttribute(s, "key=" + e + "&shopify=true");
            return u(t)
        }))
    };

    function u(t) {
        return new a.SnippetSettings(t.getAttribute(s), t.getAttribute("data-wovnio-type"))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ShopifyTokenLoader = void 0;
    var o = n(4),
        r = function() {
            function t(t) {
                this.shopifyController = t
            }
            t.prototype.getToken = function(t) {
                var e = this.getShopName(t);
                return e ? this.shopifyController.token(e).then((function(t) {
                    return t.body.token
                })).catch((function(t) {
                    throw new Error(t.body)
                })) : o.Promise.reject(new Error("Shop name not found in snippet source"))
            };
            t.prototype.getShopName = function(t) {
                return t.query.shop
            };
            return t
        }();
    e.ShopifyTokenLoader = r
}, function(t, e, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function(t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        o(t, e);

        function n() {
            this.constructor = t
        }
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ShopifyController = void 0;
    var i = n(6),
        a = function(t) {
            r(e, t);

            function e(e, n) {
                var o = t.call(this, n) || this;
                o.wovnContext = e;
                return o
            }
            e.prototype.token = function(t) {
                var e = {
                    shop: t
                };
                return this.getAndParseJson(this.wovnContext.cdnOriginHost, "/shopify/token", e, i.ContentType.FormUrlEncoded)
            };
            return e
        }(n(9).WebService);
    e.ShopifyController = a
}]);