(function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module'
        }), Object.defineProperty(e, '__esModule', {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, 'default', {
                enumerable: !0,
                value: e
            }), 2 & n && 'string' != typeof e)
            for (var a in e) t.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e['default']
        } : function() {
            return e
        };
        return t.d(n, 'a', n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = '/js/dist/', t(t.s = 22)
})([function(e, t, n) {
    (function(t) {
        e.exports = t.jQuery = n(4)
    }).call(this, n(2))
}, function(e) {
    'use strict'; /*! npm.im/object-fit-images 3.2.4 */
    function t(e, t) {
        return 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + e + '\' height=\'' + t + '\'%3E%3C/svg%3E'
    }

    function n(e) {
        if (e.srcset && !h && window.picturefill) {
            var t = window.picturefill._;
            e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
                reselect: !0
            }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
                reselect: !0
            })), e.currentSrc = e[t.ns].curSrc || e.src
        }
    }

    function o(e) {
        for (var t = getComputedStyle(e).fontFamily, n = {}, o; null !== (o = p.exec(t));) n[o[1]] = o[2];
        return n
    }

    function a(e, n, o) {
        var a = t(n || 1, o || 0);
        m.call(e, 'src') !== a && y.call(e, 'src', a)
    }

    function i(e, t) {
        e.naturalWidth ? t(e) : setTimeout(i, 100, e, t)
    }

    function s(e) {
        var t = o(e),
            s = e[l];
        if (t['object-fit'] = t['object-fit'] || 'fill', !s.img) {
            if ('fill' === t['object-fit']) return;
            if (!s.skipTest && u && !t['object-position']) return
        }
        if (!s.img) {
            s.img = new Image(e.width, e.height), s.img.srcset = m.call(e, 'data-ofi-srcset') || e.srcset, s.img.src = m.call(e, 'data-ofi-src') || e.src, y.call(e, 'data-ofi-src', e.src), e.srcset && y.call(e, 'data-ofi-srcset', e.srcset), a(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = '');
            try {
                r(e)
            } catch (e) {
                window.console && console.warn('https://bit.ly/ofi-old-browser')
            }
        }
        n(s.img), e.style.backgroundImage = 'url("' + (s.img.currentSrc || s.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = t['object-position'] || 'center', e.style.backgroundRepeat = 'no-repeat', e.style.backgroundOrigin = 'content-box', /scale-down/.test(t['object-fit']) ? i(s.img, function() {
            e.style.backgroundSize = s.img.naturalWidth > e.width || s.img.naturalHeight > e.height ? 'contain' : 'auto'
        }) : e.style.backgroundSize = t['object-fit'].replace('none', 'auto').replace('fill', '100% 100%'), i(s.img, function(t) {
            a(e, t.naturalWidth, t.naturalHeight)
        })
    }

    function r(e) {
        var t = {
            get: function(t) {
                return e[l].img[t ? t : 'src']
            },
            set: function(t, n) {
                return e[l].img[n ? n : 'src'] = t, y.call(e, 'data-ofi-' + n, t), s(e), t
            }
        };
        Object.defineProperty(e, 'src', t), Object.defineProperty(e, 'currentSrc', {
            get: function() {
                return t.get('currentSrc')
            }
        }), Object.defineProperty(e, 'srcset', {
            get: function() {
                return t.get('srcset')
            },
            set: function(e) {
                return t.set(e, 'srcset')
            }
        })
    }

    function d(e, t) {
        var n = !b && !e;
        if (t = t || {}, e = e || 'img', f && !t.skipTest || !g) return !1;
        'img' === e ? e = document.getElementsByTagName('img') : 'string' == typeof e ? e = document.querySelectorAll(e) : !('length' in e) && (e = [e]);
        for (var o = 0; o < e.length; o++) e[o][l] = e[o][l] || {
            skipTest: t.skipTest
        }, s(e[o]);
        n && (document.body.addEventListener('load', function(n) {
            'IMG' === n.target.tagName && d(n.target, {
                skipTest: t.skipTest
            })
        }, !0), b = !0, e = 'img'), t.watchMQ && window.addEventListener('resize', d.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    var l = 'bfred-it:object-fit-images',
        p = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
        c = 'undefined' == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        u = 'object-fit' in c.style,
        f = 'object-position' in c.style,
        g = 'background-size' in c.style,
        h = 'string' == typeof c.currentSrc,
        m = c.getAttribute,
        y = c.setAttribute,
        b = !1;
    d.supportsObjectFit = u, d.supportsObjectPosition = f,
        function() {
            function e(e, t) {
                return e[l] && e[l].img && ('src' === t || 'srcset' === t) ? e[l].img : e
            }
            f || (HTMLImageElement.prototype.getAttribute = function(t) {
                return m.call(e(this, t), t)
            }, HTMLImageElement.prototype.setAttribute = function(t, n) {
                return y.call(e(this, t), t, n + '')
            })
        }(), e.exports = d
}, function(e) {
    var t = function() {
        return this
    }();
    try {
        t = t || new Function('return this')()
    } catch (n) {
        'object' == typeof window && (t = window)
    }
    e.exports = t
}, function(e, a, s) {
    'use strict';
    (function(d) {
        function l(t, a) {
            var e = {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                        "User-Agent": 'Pexels/JavaScript',
                        Authorization: t
                    }
                },
                n = c[a];
            return function(o, t) {
                return fetch('' + n + o + '?' + function(e) {
                    return Object.keys(e).map(function(t) {
                        return t + '=' + e[t]
                    }).join('&')
                }(t || {}), e).then(function(e) {
                    if (!e.ok) throw new Error(e.statusText);
                    return e.json()
                })
            }
        }

        function r(n) {
            var o = l(n, 'collections');
            return {
                all: function(e) {
                    return void 0 === e && (e = {}), o('', e)
                },
                media: function(e) {
                    var t = e.id,
                        a = function(a, t) {
                            if (null == a) return {};
                            var s = {},
                                o = Object.keys(a),
                                i, e;
                            for (e = 0; e < o.length; e++) 0 <= t.indexOf(i = o[e]) || (s[i] = a[i]);
                            return s
                        }(e, ['id']);
                    return o('' + t, a)
                },
                featured: function(e) {
                    return void 0 === e && (e = {}), o('featured', e)
                }
            }
        }

        function e(e) {
            return e && e.photos
        }

        function p(n) {
            var o = l(n, 'photo');
            return {
                search: function(e) {
                    return o('/search', e)
                },
                curated: function(e) {
                    return void 0 === e && (e = {}), o('/curated', e)
                },
                show: function(e) {
                    return o('/photos/' + e.id)
                },
                random: function() {
                    try {
                        var n = Math.floor(1e3 * Math.random());
                        return Promise.resolve(this.curated({
                            page: n,
                            per_page: 1
                        })).then(function(n) {
                            return e(n) ? n.photos[0] : n
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
            }
        }

        function i(n) {
            var o = l(n, 'video');
            return {
                search: function(e) {
                    return o('/search', e)
                },
                popular: function(e) {
                    return void 0 === e && (e = {}), o('/popular', e)
                },
                show: function(e) {
                    return o('/videos/' + e.id)
                }
            }
        }

        function u(e) {
            if (!e || 'string' != typeof e) throw new TypeError('An ApiKey must be provided when initiating the Pexel\'s client.');
            return {
                typeCheckers: f,
                photos: p(e),
                videos: i(e),
                collections: r(e)
            }
        }
        s.d(a, 'a', function() {
            return u
        }), d;
        var c = {
                photo: 'https://api.pexels.com/v1/',
                video: 'https://api.pexels.com/videos/',
                collections: 'https://api.pexels.com/v1/collections/'
            },
            f = {
                __proto__: null,
                isPhotos: e,
                isVideos: function(e) {
                    return e && e.videos
                },
                isError: function(e) {
                    return !!e.error
                }
            };
        s(20)
    }).call(this, s(19))
}, function(e, t, n) {
    (function(t) {
        e.exports = t.$ = n(5)
    }).call(this, n(2))
}, function(e, t) {
    var n = Math.max,
        o = String.fromCharCode,
        a, i;
    /*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */
    (function(t, n) {
        'use strict';
        'object' == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return n(e)
        } : n(t)
    })('undefined' == typeof window ? this : window, function(r, s) {
        'use strict';

        function d(e, t, n) {
            n = n || De;
            var o = n.createElement('script'),
                a, i;
            if (o.text = e, t)
                for (a in Ne) i = t[a] || t.getAttribute && t.getAttribute(a), i && o.setAttribute(a, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function p(e) {
            return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? ve[Te.call(e)] || 'object' : typeof e
        }

        function l(e) {
            var t = !!e && 'length' in e && e.length,
                n = p(e);
            return !(ke(e) || Ae(e)) && ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e)
        }

        function c(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function u(e, t, n) {
            return ke(t) ? $e.grep(e, function(e, o) {
                return !!t.call(e, o, e) !== n
            }) : t.nodeType ? $e.grep(e, function(e) {
                return e === t !== n
            }) : 'string' == typeof t ? $e.filter(t, e, n) : $e.grep(e, function(e) {
                return -1 < xe.call(t, e) !== n
            })
        }

        function f(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function g(e) {
            var t = {};
            return $e.each(e.match(Ue) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function h(e) {
            return e
        }

        function m(e) {
            throw e
        }

        function y(e, t, n, o) {
            var a;
            try {
                e && ke(a = e.promise) ? a.call(e).done(t).fail(n) : e && ke(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(o))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function b() {
            De.removeEventListener('DOMContentLoaded', b), r.removeEventListener('load', b), $e.ready()
        }

        function x(e, t) {
            return t.toUpperCase()
        }

        function v(e) {
            return e.replace(Ve, 'ms-').replace(Xe, x)
        }

        function T() {
            this.expando = $e.expando + T.uid++
        }

        function w(e) {
            return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : Ke.test(e) ? JSON.parse(e) : e)
        }

        function C(e, t, n) {
            var o;
            if (void 0 === n && 1 === e.nodeType)
                if (o = 'data-' + t.replace(Je, '-$&').toLowerCase(), n = e.getAttribute(o), 'string' == typeof n) {
                    try {
                        n = w(n)
                    } catch (t) {}
                    Qe.set(e, t, n)
                } else n = void 0;
            return n
        }

        function E(e, t, n, o) {
            var a = 20,
                i = o ? function() {
                    return o.cur()
                } : function() {
                    return $e.css(e, t, '')
                },
                s = i(),
                r = n && n[3] || ($e.cssNumber[t] ? '' : 'px'),
                d = e.nodeType && ($e.cssNumber[t] || 'px' !== r && +s) && et.exec($e.css(e, t)),
                l, p;
            if (d && d[3] !== r) {
                for (s /= 2, r = r || d[3], d = +s || 1; a--;) $e.style(e, t, d + r), 0 >= (1 - p) * (1 - (p = i() / s || .5)) && (a = 0), d /= p;
                d *= 2, $e.style(e, t, d + r), n = n || []
            }
            return n && (d = +d || +s || 0, l = n[1] ? d + (n[1] + 1) * n[2] : +n[2], o && (o.unit = r, o.start = d, o.end = l)), l
        }

        function S(e) {
            var t = e.ownerDocument,
                n = e.nodeName,
                o = st[n],
                a;
            return o ? o : (a = t.body.appendChild(t.createElement(n)), o = $e.css(a, 'display'), a.parentNode.removeChild(a), 'none' === o && (o = 'block'), st[n] = o, o)
        }

        function k(e, t) {
            for (var n = [], o = 0, a = e.length, i, s; o < a; o++)(s = e[o], !!s.style) && (i = s.style.display, t ? ('none' === i && (n[o] = Ye.get(s, 'display') || null, !n[o] && (s.style.display = '')), '' === s.style.display && it(s) && (n[o] = S(s))) : 'none' !== i && (n[o] = 'none', Ye.set(s, 'display', i)));
            for (o = 0; o < a; o++) null != n[o] && (e[o].style.display = n[o]);
            return e
        }

        function A(e, t) {
            var n;
            return n = 'undefined' == typeof e.getElementsByTagName ? 'undefined' == typeof e.querySelectorAll ? [] : e.querySelectorAll(t || '*') : e.getElementsByTagName(t || '*'), void 0 === t || t && c(e, t) ? $e.merge([e], n) : n
        }

        function D(e, t) {
            for (var n = 0, o = e.length; n < o; n++) Ye.set(e[n], 'globalEval', !t || Ye.get(t[n], 'globalEval'))
        }

        function N(e, t, n, o, a) {
            for (var s = t.createDocumentFragment(), r = [], d = 0, i = e.length, l, c, u, f, g, h; d < i; d++)
                if (l = e[d], l || 0 === l)
                    if ('object' === p(l)) $e.merge(r, l.nodeType ? [l] : l);
                    else if (!ct.test(l)) r.push(t.createTextNode(l));
            else {
                for (c = c || s.appendChild(t.createElement('div')), u = (dt.exec(l) || ['', ''])[1].toLowerCase(), f = pt[u] || pt._default, c.innerHTML = f[1] + $e.htmlPrefilter(l) + f[2], h = f[0]; h--;) c = c.lastChild;
                $e.merge(r, c.childNodes), c = s.firstChild, c.textContent = ''
            }
            for (s.textContent = '', d = 0; l = r[d++];) {
                if (o && -1 < $e.inArray(l, o)) {
                    a && a.push(l);
                    continue
                }
                if (g = ot(l), c = A(s.appendChild(l), 'script'), g && D(c), n)
                    for (h = 0; l = c[h++];) lt.test(l.type || '') && n.push(l)
            }
            return s
        }

        function j() {
            return !0
        }

        function $() {
            return !1
        }

        function O(e, t) {
            return e === I() == ('focus' === t)
        }

        function I() {
            try {
                return De.activeElement
            } catch (e) {}
        }

        function L(e, t, n, o, a, i) {
            var s, r;
            if ('object' == typeof t) {
                for (r in 'string' != typeof n && (o = o || n, n = void 0), t) L(e, r, n, o, t[r], i);
                return e
            }
            if (null == o && null == a ? (a = n, o = n = void 0) : null == a && ('string' == typeof n ? (a = o, o = void 0) : (a = o, o = n, n = void 0)), !1 === a) a = $;
            else if (!a) return e;
            return 1 === i && (s = a, a = function(e) {
                return $e().off(e), s.apply(this, arguments)
            }, a.guid = s.guid || (s.guid = $e.guid++)), e.each(function() {
                $e.event.add(this, t, a, o, n)
            })
        }

        function _(e, t, n) {
            return n ? void(Ye.set(e, t, !1), $e.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var o = Ye.get(this, t),
                        a, i;
                    if (!(1 & e.isTrigger && this[t])) o.length && (Ye.set(this, t, {
                        value: $e.event.trigger($e.extend(o[0], $e.Event.prototype), o.slice(1), this)
                    }), e.stopImmediatePropagation());
                    else if (!!o.length)($e.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (o = me.call(arguments), Ye.set(this, t, o), a = n(this, t), this[t](), i = Ye.get(this, t), o !== i || a ? Ye.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                }
            })) : void(void 0 === Ye.get(e, t) && $e.event.add(e, t, j))
        }

        function P(e, t) {
            return c(e, 'table') && c(11 === t.nodeType ? t.firstChild : t, 'tr') ? $e(e).children('tbody')[0] || e : e
        }

        function q(e) {
            return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e
        }

        function H(e) {
            return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), e
        }

        function R(e, t) {
            var n, o, a, i, s, r, d;
            if (1 === t.nodeType) {
                if (Ye.hasData(e) && (i = Ye.get(e), d = i.events, d))
                    for (a in Ye.remove(t, 'handle events'), d)
                        for (n = 0, o = d[a].length; n < o; n++) $e.event.add(t, a, d[a][n]);
                Qe.hasData(e) && (s = Qe.access(e), r = $e.extend({}, s), Qe.set(t, r))
            }
        }

        function B(e, t) {
            var n = t.nodeName.toLowerCase();
            'input' === n && rt.test(e.type) ? t.checked = e.checked : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue)
        }

        function F(e, t, n, o) {
            t = ye(t);
            var a = 0,
                i = e.length,
                s = t[0],
                r = ke(s),
                l, p, c, u, f, g;
            if (r || 1 < i && 'string' == typeof s && !Se.checkClone && gt.test(s)) return e.each(function(a) {
                var i = e.eq(a);
                r && (t[0] = s.call(this, a, i.html())), F(i, t, n, o)
            });
            if (i && (l = N(t, e[0].ownerDocument, !1, e, o), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || o)) {
                for (c = $e.map(A(l, 'script'), q), u = c.length; a < i; a++) f = l, a != i - 1 && (f = $e.clone(f, !0, !0), u && $e.merge(c, A(f, 'script'))), n.call(e[a], f, a);
                if (u)
                    for (g = c[c.length - 1].ownerDocument, $e.map(c, H), a = 0; a < u; a++) f = c[a], lt.test(f.type || '') && !Ye.access(f, 'globalEval') && $e.contains(g, f) && (f.src && 'module' !== (f.type || '').toLowerCase() ? $e._evalUrl && !f.noModule && $e._evalUrl(f.src, {
                        nonce: f.nonce || f.getAttribute('nonce')
                    }, g) : d(f.textContent.replace(ht, ''), f, g))
            }
            return e
        }

        function U(e, t, n) {
            for (var o = t ? $e.filter(t, e) : e, a = 0, i; null != (i = o[a]); a++) n || 1 !== i.nodeType || $e.cleanData(A(i)), i.parentNode && (n && ot(i) && D(A(i, 'script')), i.parentNode.removeChild(i));
            return e
        }

        function M(e, t, n) {
            var o = e.style,
                a, i, s, r;
            return n = n || yt(e), n && (r = n.getPropertyValue(t) || n[t], '' === r && !ot(e) && (r = $e.style(e, t)), !Se.pixelBoxStyles() && mt.test(r) && xt.test(t) && (a = o.width, i = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = a, o.minWidth = i, o.maxWidth = s)), void 0 === r ? r : r + ''
        }

        function W(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function z(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
                if (e = vt[n] + t, e in Tt) return e
        }

        function V(e) {
            var t = $e.cssProps[e] || wt[e];
            return t ? t : e in Tt ? e : wt[e] = z(e) || e
        }

        function X(e, t, o) {
            var a = et.exec(t);
            return a ? n(0, a[2] - (o || 0)) + (a[3] || 'px') : t
        }

        function G(e, t, o, a, s, r) {
            var d = 'width' === t ? 1 : 0,
                i = 0,
                l = 0;
            if (o === (a ? 'border' : 'content')) return 0;
            for (; 4 > d; d += 2) 'margin' === o && (l += $e.css(e, o + tt[d], !0, s)), a ? ('content' === o && (l -= $e.css(e, 'padding' + tt[d], !0, s)), 'margin' !== o && (l -= $e.css(e, 'border' + tt[d] + 'Width', !0, s))) : (l += $e.css(e, 'padding' + tt[d], !0, s), 'padding' === o ? i += $e.css(e, 'border' + tt[d] + 'Width', !0, s) : l += $e.css(e, 'border' + tt[d] + 'Width', !0, s));
            return !a && 0 <= r && (l += n(0, fe(e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - i - .5)) || 0), l
        }

        function Y(e, t, n) {
            var o = yt(e),
                a = !Se.boxSizingReliable() || n,
                i = a && 'border-box' === $e.css(e, 'boxSizing', !1, o),
                s = i,
                r = M(e, t, o),
                d = 'offset' + t[0].toUpperCase() + t.slice(1);
            if (mt.test(r)) {
                if (!n) return r;
                r = 'auto'
            }
            return (!Se.boxSizingReliable() && i || !Se.reliableTrDimensions() && c(e, 'tr') || 'auto' === r || !parseFloat(r) && 'inline' === $e.css(e, 'display', !1, o)) && e.getClientRects().length && (i = 'border-box' === $e.css(e, 'boxSizing', !1, o), s = d in e, s && (r = e[d])), r = parseFloat(r) || 0, r + G(e, t, n || (i ? 'border' : 'content'), s, o, r) + 'px'
        }

        function Q(e, t, n, o, a) {
            return new Q.prototype.init(e, t, n, o, a)
        }

        function K() {
            jt && (!1 === De.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(K) : r.setTimeout(K, $e.fx.interval), $e.fx.tick())
        }

        function J() {
            return r.setTimeout(function() {
                Nt = void 0
            }), Nt = Date.now()
        }

        function Z(e, t) {
            var n = 0,
                o = {
                    height: e
                },
                a;
            for (t = t ? 1 : 0; 4 > n; n += 2 - t) a = tt[n], o['margin' + a] = o['padding' + a] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ee(e, t, n) {
            for (var o = (oe.tweeners[t] || []).concat(oe.tweeners['*']), a = 0, i = o.length, s; a < i; a++)
                if (s = o[a].call(n, t, e)) return s
        }

        function te(e, t, n) {
            var o = 'width' in t || 'height' in t,
                a = this,
                i = {},
                s = e.style,
                r = e.nodeType && it(e),
                d = Ye.get(e, 'fxshow'),
                l, p, c, u, f, g, h, m;
            for (l in n.queue || (u = $e._queueHooks(e, 'fx'), null == u.unqueued && (u.unqueued = 0, f = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || f()
                }), u.unqueued++, a.always(function() {
                    a.always(function() {
                        u.unqueued--, $e.queue(e, 'fx').length || u.empty.fire()
                    })
                })), t)
                if (p = t[l], At.test(p)) {
                    if (delete t[l], c = c || 'toggle' === p, p === (r ? 'hide' : 'show'))
                        if ('show' === p && d && void 0 !== d[l]) r = !0;
                        else continue;
                    i[l] = d && d[l] || $e.style(e, l)
                }
            if (g = !$e.isEmptyObject(t), g || !$e.isEmptyObject(i))
                for (l in o && 1 === e.nodeType && (n.overflow = [s.overflow, s.overflowX, s.overflowY], h = d && d.display, null == h && (h = Ye.get(e, 'display')), m = $e.css(e, 'display'), 'none' === m && (h ? m = h : (k([e], !0), h = e.style.display || h, m = $e.css(e, 'display'), k([e]))), ('inline' === m || 'inline-block' === m && null != h) && 'none' === $e.css(e, 'float') && (!g && (a.done(function() {
                        s.display = h
                    }), null == h && (m = s.display, h = 'none' === m ? '' : m)), s.display = 'inline-block')), n.overflow && (s.overflow = 'hidden', a.always(function() {
                        s.overflow = n.overflow[0], s.overflowX = n.overflow[1], s.overflowY = n.overflow[2]
                    })), g = !1, i) g || (d ? 'hidden' in d && (r = d.hidden) : d = Ye.access(e, 'fxshow', {
                    display: h
                }), c && (d.hidden = !r), r && k([e], !0), a.done(function() {
                    for (l in r || k([e]), Ye.remove(e, 'fxshow'), i) $e.style(e, l, i[l])
                })), g = ee(r ? d[l] : 0, l, a), l in d || (d[l] = g.start, r && (g.end = g.start, g.start = 0))
        }

        function ne(e, t) {
            var n, o, a, i, s;
            for (n in e)
                if (o = v(n), a = t[o], i = e[n], Array.isArray(i) && (a = i[1], i = e[n] = i[0]), n != o && (e[o] = i, delete e[n]), s = $e.cssHooks[o], s && 'expand' in s)
                    for (n in i = s.expand(i), delete e[o], i) n in e || (e[n] = i[n], t[n] = a);
                else t[o] = a
        }

        function oe(e, t, o) {
            var a = 0,
                i = oe.prefilters.length,
                s = $e.Deferred().always(function() {
                    delete r.elem
                }),
                r = function() {
                    if (c) return !1;
                    for (var t = Nt || J(), o = n(0, d.startTime + d.duration - t), a = o / d.duration || 0, i = 1 - a, r = 0, l = d.tweens.length; r < l; r++) d.tweens[r].run(i);
                    return (s.notifyWith(e, [d, i, o]), 1 > i && l) ? o : (l || s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d]), !1)
                },
                d = s.promise({
                    elem: e,
                    props: $e.extend({}, t),
                    opts: $e.extend(!0, {
                        specialEasing: {},
                        easing: $e.easing._default
                    }, o),
                    originalProperties: t,
                    originalOptions: o,
                    startTime: Nt || J(),
                    duration: o.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var o = $e.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(o), o
                    },
                    stop: function(t) {
                        var n = 0,
                            o = t ? d.tweens.length : 0;
                        if (c) return this;
                        for (c = !0; n < o; n++) d.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d, t])) : s.rejectWith(e, [d, t]), this
                    }
                }),
                l = d.props,
                p, c;
            for (ne(l, d.opts.specialEasing); a < i; a++)
                if (p = oe.prefilters[a].call(d, e, l, d.opts), p) return ke(p.stop) && ($e._queueHooks(d.elem, d.opts.queue).stop = p.stop.bind(p)), p;
            return $e.map(l, ee, d), ke(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), $e.fx.timer($e.extend(r, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }

        function ae(e) {
            var t = e.match(Ue) || [];
            return t.join(' ')
        }

        function ie(e) {
            return e.getAttribute && e.getAttribute('class') || ''
        }

        function se(e) {
            return Array.isArray(e) ? e : 'string' == typeof e ? e.match(Ue) || [] : []
        }

        function re(e, t, n, o) {
            if (Array.isArray(t)) $e.each(t, function(t, a) {
                n || Ft.test(e) ? o(e, a) : re(e + '[' + ('object' == typeof a && null != a ? t : '') + ']', a, n, o)
            });
            else if (!n && 'object' === p(t))
                for (var a in t) re(e + '[' + a + ']', t[a], n, o);
            else o(e, t)
        }

        function de(e) {
            return function(t, n) {
                'string' != typeof t && (n = t, t = '*');
                var o = 0,
                    a = t.toLowerCase().match(Ue) || [],
                    i;
                if (ke(n))
                    for (; i = a[o++];) '+' === i[0] ? (i = i.slice(1) || '*', (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function le(e, t, n, o) {
            function a(r) {
                var d;
                return i[r] = !0, $e.each(e[r] || [], function(e, r) {
                    var l = r(t, n, o);
                    return 'string' != typeof l || s || i[l] ? s ? !(d = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                }), d
            }
            var i = {},
                s = e === Zt;
            return a(t.dataTypes[0]) || !i['*'] && a('*')
        }

        function pe(e, t) {
            var n = $e.ajaxSettings.flatOptions || {},
                o, a;
            for (o in t) void 0 !== t[o] && ((n[o] ? e : a || (a = {}))[o] = t[o]);
            return a && $e.extend(!0, e, a), e
        }

        function ce(e, t, n) {
            for (var o = e.contents, a = e.dataTypes, i, s, r, d;
                '*' === a[0];) a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
            if (i)
                for (s in o)
                    if (o[s] && o[s].test(i)) {
                        a.unshift(s);
                        break
                    }
            if (a[0] in n) r = a[0];
            else {
                for (s in n) {
                    if (!a[0] || e.converters[s + ' ' + a[0]]) {
                        r = s;
                        break
                    }
                    d || (d = s)
                }
                r = r || d
            }
            return r ? (r !== a[0] && a.unshift(r), n[r]) : void 0
        }

        function ue(e, t, n, o) {
            var a = {},
                i = e.dataTypes.slice(),
                s, r, d, l, p;
            if (i[1])
                for (d in e.converters) a[d.toLowerCase()] = e.converters[d];
            for (r = i.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !p && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), p = r, r = i.shift(), r)
                    if ('*' === r) r = p;
                    else if ('*' !== p && p != r) {
                if (d = a[p + ' ' + r] || a['* ' + r], !d)
                    for (s in a)
                        if (l = s.split(' '), l[1] === r && (d = a[p + ' ' + l[0]] || a['* ' + l[0]], d)) {
                            !0 === d ? d = a[s] : !0 !== a[s] && (r = l[0], i.unshift(l[1]));
                            break
                        }
                if (!0 !== d)
                    if (d && e.throws) t = d(t);
                    else try {
                        t = d(t)
                    } catch (t) {
                        return {
                            state: 'parsererror',
                            error: d ? t : 'No conversion from ' + p + ' to ' + r
                        }
                    }
            }
            return {
                state: 'success',
                data: t
            }
        }
        var fe = Math.ceil,
            ge = [],
            he = Object.getPrototypeOf,
            me = ge.slice,
            ye = ge.flat ? function(e) {
                return ge.flat.call(e)
            } : function(e) {
                return ge.concat.apply([], e)
            },
            be = ge.push,
            xe = ge.indexOf,
            ve = {},
            Te = ve.toString,
            we = ve.hasOwnProperty,
            Ce = we.toString,
            Ee = Ce.call(Object),
            Se = {},
            ke = function(e) {
                return 'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item
            },
            Ae = function(e) {
                return null != e && e === e.window
            },
            De = r.document,
            Ne = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            },
            je = '3.6.0',
            $e = function(e, t) {
                return new $e.fn.init(e, t)
            };
        $e.fn = $e.prototype = {
            jquery: je,
            constructor: $e,
            length: 0,
            toArray: function() {
                return me.call(this)
            },
            get: function(e) {
                return null == e ? me.call(this) : 0 > e ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = $e.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return $e.each(this, e)
            },
            map: function(e) {
                return this.pushStack($e.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(me.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack($e.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack($e.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: be,
            sort: ge.sort,
            splice: ge.splice
        }, $e.extend = $e.fn.extend = function() {
            var e = arguments[0] || {},
                t = 1,
                n = arguments.length,
                o = !1,
                a, i, s, r, d, l;
            for ('boolean' == typeof e && (o = e, e = arguments[t] || {}, t++), 'object' == typeof e || ke(e) || (e = {}), t === n && (e = this, t--); t < n; t++)
                if (null != (a = arguments[t]))
                    for (i in a)(r = a[i], '__proto__' !== i && e !== r) && (o && r && ($e.isPlainObject(r) || (d = Array.isArray(r))) ? (s = e[i], l = d && !Array.isArray(s) ? [] : d || $e.isPlainObject(s) ? s : {}, d = !1, e[i] = $e.extend(o, l, r)) : void 0 !== r && (e[i] = r));
            return e
        }, $e.extend({
            expando: 'jQuery' + (je + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !!(e && '[object Object]' === Te.call(e)) && ((t = he(e), !!!t) || (n = we.call(t, 'constructor') && t.constructor, 'function' == typeof n && Ce.call(n) === Ee))
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                d(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n = 0,
                    o;
                if (l(e))
                    for (o = e.length; n < o && !1 !== t.call(e[n], n, e[n]); n++);
                else
                    for (n in e)
                        if (!1 === t.call(e[n], n, e[n])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (l(Object(e)) ? $e.merge(n, 'string' == typeof e ? [e] : e) : be.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : xe.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, o = 0, a = e.length; o < n; o++) e[a++] = t[o];
                return e.length = a, e
            },
            grep: function(e, t, n) {
                for (var o = [], a = 0, i = e.length, s; a < i; a++) s = !t(e[a], a), s !== !n && o.push(e[a]);
                return o
            },
            map: function(e, t, n) {
                var o = 0,
                    a = [],
                    i, s;
                if (l(e))
                    for (i = e.length; o < i; o++) s = t(e[o], o, n), null != s && a.push(s);
                else
                    for (o in e) s = t(e[o], o, n), null != s && a.push(s);
                return ye(a)
            },
            guid: 1,
            support: Se
        }), 'function' == typeof Symbol && ($e.fn[Symbol.iterator] = ge[Symbol.iterator]), $e.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'], function(e, t) {
            ve['[object ' + t + ']'] = t.toLowerCase()
        });
        var Oe =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            function(e) {
                function t(e, t, n, o) {
                    var a = t && t.ownerDocument,
                        s = t ? t.nodeType : 9,
                        r, d, i, l, p, c, u;
                    if (n = n || [], 'string' != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!o && (be(t), t = t || xe, Te)) {
                        if (11 !== s && (p = ee.exec(e)))
                            if (!(r = p[1])) {
                                if (p[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = p[3]) && le.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(r)), n
                            } else if (9 === s) {
                            if (!(i = t.getElementById(r))) return n;
                            if (i.id === r) return n.push(i), n
                        } else if (a && (i = a.getElementById(r)) && Se(t, i) && i.id === r) return n.push(i), n;
                        if (le.qsa && !j[e + ' '] && (!we || !we.test(e)) && (1 !== s || 'object' !== t.nodeName.toLowerCase())) {
                            if (u = e, a = t, 1 === s && (V.test(e) || z.test(e))) {
                                for (a = te.test(e) && f(t.parentNode) || t, a === t && le.scope || ((l = t.getAttribute('id')) ? l = l.replace(ae, ie) : t.setAttribute('id', l = C)), c = ue(e), d = c.length; d--;) c[d] = (l ? '#' + l : ':scope') + ' ' + h(c[d]);
                                u = c.join(',')
                            }
                            try {
                                return P.apply(n, a.querySelectorAll(u)), n
                            } catch (t) {
                                j(e, !0)
                            } finally {
                                l === C && t.removeAttribute('id')
                            }
                        }
                    }
                    return ge(e.replace(M, '$1'), t, n, o)
                }

                function n() {
                    function e(n, o) {
                        return t.push(n + ' ') > pe.cacheLength && delete e[t.shift()], e[n + ' '] = o
                    }
                    var t = [];
                    return e
                }

                function a(e) {
                    return e[C] = !0, e
                }

                function s(e) {
                    var t = xe.createElement('fieldset');
                    try {
                        return !!e(t)
                    } catch (t) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var n = e.split('|'), o = n.length; o--;) pe.attrHandle[n[o]] = t
                }

                function d(e, t) {
                    var n = t && e,
                        o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (o) return o;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return 'input' === n && t.type === e
                    }
                }

                function p(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ('input' === n || 'button' === n) && t.type === e
                    }
                }

                function c(e) {
                    return function(t) {
                        return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : !!('label' in t) && t.disabled === e
                    }
                }

                function u(e) {
                    return a(function(t) {
                        return t = +t, a(function(n, o) {
                            for (var a = e([], n.length, t), s = a.length, i; s--;) n[i = a[s]] && (n[i] = !(o[i] = n[i]))
                        })
                    })
                }

                function f(e) {
                    return e && 'undefined' != typeof e.getElementsByTagName && e
                }

                function g() {}

                function h(e) {
                    for (var t = 0, n = e.length, o = ''; t < n; t++) o += e[t].value;
                    return o
                }

                function m(e, t, n) {
                    var o = t.dir,
                        a = t.next,
                        i = a || o,
                        s = n && 'parentNode' === i,
                        r = k++;
                    return t.first ? function(t, n, a) {
                        for (; t = t[o];)
                            if (1 === t.nodeType || s) return e(t, n, a);
                        return !1
                    } : function(t, n, d) {
                        var l = [S, r],
                            p, c, u;
                        if (d) {
                            for (; t = t[o];)
                                if ((1 === t.nodeType || s) && e(t, n, d)) return !0;
                        } else
                            for (; t = t[o];)
                                if (1 === t.nodeType || s)
                                    if (u = t[C] || (t[C] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[o] || t;
                                    else {
                                        if ((p = c[i]) && p[0] === S && p[1] === r) return l[2] = p[2];
                                        if (c[i] = l, l[2] = e(t, n, d)) return !0
                                    } return !1
                    }
                }

                function y(e) {
                    return 1 < e.length ? function(t, n, o) {
                        for (var a = e.length; a--;)
                            if (!e[a](t, n, o)) return !1;
                        return !0
                    } : e[0]
                }

                function b(e, n, o) {
                    for (var a = 0, i = n.length; a < i; a++) t(e, n[a], o);
                    return o
                }

                function x(e, t, n, o, a) {
                    for (var s = [], r = 0, i = e.length, d; r < i; r++)(d = e[r]) && (!n || n(d, o, a)) && (s.push(d), null != t && t.push(r));
                    return s
                }

                function v(e, t, n, o, s, i) {
                    return o && !o[C] && (o = v(o)), s && !s[C] && (s = v(s, i)), a(function(a, r, d, l) {
                        var p = [],
                            c = [],
                            u = r.length,
                            f = a || b(t || '*', d.nodeType ? [d] : d, []),
                            g = e && (a || !t) ? x(f, p, e, d, l) : f,
                            h = n ? s || (a ? e : u || o) ? [] : r : g,
                            m, y, i;
                        if (n && n(g, h, d, l), o)
                            for (m = x(h, c), o(m, [], d, l), y = m.length; y--;)(i = m[y]) && (h[c[y]] = !(g[c[y]] = i));
                        if (!a) h = x(h === r ? h.splice(u, h.length) : h), s ? s(null, r, h, l) : P.apply(r, h);
                        else if (s || e) {
                            if (s) {
                                for (m = [], y = h.length; y--;)(i = h[y]) && m.push(g[y] = i);
                                s(null, h = [], m, l)
                            }
                            for (y = h.length; y--;)(i = h[y]) && -1 < (m = s ? H(a, i) : p[y]) && (a[m] = !(r[m] = i))
                        }
                    })
                }

                function T(e) {
                    for (var t = e.length, n = pe.relative[e[0].type], o = n || pe.relative[' '], a = n ? 1 : 0, i = m(function(e) {
                            return e === d
                        }, o, !0), s = m(function(e) {
                            return -1 < H(d, e)
                        }, o, !0), r = [function(e, t, o) {
                            var a = !n && (o || t !== he) || ((d = t).nodeType ? i(e, t, o) : s(e, t, o));
                            return d = null, a
                        }], d, l, p; a < t; a++)
                        if (l = pe.relative[e[a].type]) r = [m(y(r), l)];
                        else {
                            if (l = pe.filter[e[a].type].apply(null, e[a].matches), l[C]) {
                                for (p = ++a; p < t && !pe.relative[e[p].type]; p++);
                                return v(1 < a && y(r), 1 < a && h(e.slice(0, a - 1).concat({
                                    value: ' ' === e[a - 2].type ? '*' : ''
                                })).replace(M, '$1'), l, a < p && T(e.slice(a, p)), p < t && T(e = e.slice(p)), p < t && h(e))
                            }
                            r.push(l)
                        }
                    return y(r)
                }

                function w(e, n) {
                    var o = 0 < n.length,
                        s = 0 < e.length,
                        i = function(a, r, d, l, p) {
                            var c = 0,
                                u = '0',
                                i = a && [],
                                f = [],
                                g = he,
                                h = a || s && pe.find.TAG('*', p),
                                m = S += null == g ? 1 : Math.random() || .1,
                                y = h.length,
                                b, v, T;
                            for (p && (he = r == xe || r || p); u !== y && null != (b = h[u]); u++) {
                                if (s && b) {
                                    for (v = 0, r || b.ownerDocument == xe || (be(b), d = !Te); T = e[v++];)
                                        if (T(b, r || xe, d)) {
                                            l.push(b);
                                            break
                                        }
                                    p && (S = m)
                                }
                                o && ((b = !T && b) && c--, a && i.push(b))
                            }
                            if (c += u, o && u !== c) {
                                for (v = 0; T = n[v++];) T(i, f, r, d);
                                if (a) {
                                    if (0 < c)
                                        for (; u--;) i[u] || f[u] || (f[u] = L.call(l));
                                    f = x(f)
                                }
                                P.apply(l, f), p && !a && 0 < f.length && 1 < c + n.length && t.uniqueSort(l)
                            }
                            return p && (S = m, he = g), i
                        };
                    return o ? a(i) : i
                }
                var C = 'sizzle' + 1 * new Date,
                    E = e.document,
                    S = 0,
                    k = 0,
                    A = n(),
                    D = n(),
                    N = n(),
                    j = n(),
                    $ = function(e, t) {
                        return e === t && (ye = !0), 0
                    },
                    O = {}.hasOwnProperty,
                    I = [],
                    L = I.pop,
                    _ = I.push,
                    P = I.push,
                    q = I.slice,
                    H = function(e, t) {
                        for (var n = 0, o = e.length; n < o; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                    B = '[\\x20\\t\\r\\n\\f]',
                    F = '(?:\\\\[\\da-fA-F]{1,6}' + B + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                    U = /[\x20\t\r\n\f]+/g,
                    M = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                    W = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                    z = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                    V = /[\x20\t\r\n\f]|>/,
                    X = /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    G = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+$/,
                    Y = {
                        ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
                        CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
                        TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+|[*])/,
                        ATTR: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\]/,
                        PSEUDO: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                        CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                        needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                    },
                    Q = /HTML$/i,
                    K = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    te = /[+~]/,
                    ne = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g,
                    oe = function(e, t) {
                        var n = '0x' + e.slice(1) - 65536;
                        return t ? t : 0 > n ? o(n + 65536) : o(55296 | n >> 10, 56320 | 1023 & n)
                    },
                    ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? '\0' === e ? '\uFFFD' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e
                    },
                    se = function() {
                        be()
                    },
                    re = m(function(e) {
                        return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
                    }, {
                        dir: 'parentNode',
                        next: 'legend'
                    }),
                    de, le, pe, ce, i, ue, fe, ge, he, me, ye, be, xe, ve, Te, we, Ce, Ee, Se;
                try {
                    P.apply(I = q.call(E.childNodes), E.childNodes), I[E.childNodes.length].nodeType
                } catch (t) {
                    P = {
                        apply: I.length ? function(e, t) {
                            _.apply(e, q.call(t))
                        } : function(e, t) {
                            for (var n = e.length, o = 0; e[n++] = t[o++];);
                            e.length = n - 1
                        }
                    }
                }
                for (de in le = t.support = {}, i = t.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !Q.test(t || n && n.nodeName || 'HTML')
                    }, be = t.setDocument = function(e) {
                        var t = e ? e.ownerDocument || e : E,
                            n, o;
                        return t != xe && 9 === t.nodeType && t.documentElement ? (xe = t, ve = xe.documentElement, Te = !i(xe), E != xe && (o = xe.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener('unload', se, !1) : o.attachEvent && o.attachEvent('onunload', se)), le.scope = s(function(e) {
                            return ve.appendChild(e).appendChild(xe.createElement('div')), 'undefined' != typeof e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length
                        }), le.attributes = s(function(e) {
                            return e.className = 'i', !e.getAttribute('className')
                        }), le.getElementsByTagName = s(function(e) {
                            return e.appendChild(xe.createComment('')), !e.getElementsByTagName('*').length
                        }), le.getElementsByClassName = Z.test(xe.getElementsByClassName), le.getById = s(function(e) {
                            return ve.appendChild(e).id = C, !xe.getElementsByName || !xe.getElementsByName(C).length
                        }), le.getById ? (pe.filter.ID = function(e) {
                            var t = e.replace(ne, oe);
                            return function(e) {
                                return e.getAttribute('id') === t
                            }
                        }, pe.find.ID = function(e, t) {
                            if ('undefined' != typeof t.getElementById && Te) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (pe.filter.ID = function(e) {
                            var t = e.replace(ne, oe);
                            return function(e) {
                                var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                                return n && n.value === t
                            }
                        }, pe.find.ID = function(e, t) {
                            if ('undefined' != typeof t.getElementById && Te) {
                                var n = t.getElementById(e),
                                    o, a, i;
                                if (n) {
                                    if (o = n.getAttributeNode('id'), o && o.value === e) return [n];
                                    for (i = t.getElementsByName(e), a = 0; n = i[a++];)
                                        if (o = n.getAttributeNode('id'), o && o.value === e) return [n]
                                }
                                return []
                            }
                        }), pe.find.TAG = le.getElementsByTagName ? function(e, t) {
                            return 'undefined' == typeof t.getElementsByTagName ? le.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n = [],
                                o = 0,
                                a = t.getElementsByTagName(e),
                                i;
                            if ('*' === e) {
                                for (; i = a[o++];) 1 === i.nodeType && n.push(i);
                                return n
                            }
                            return a
                        }, pe.find.CLASS = le.getElementsByClassName && function(e, t) {
                            if ('undefined' != typeof t.getElementsByClassName && Te) return t.getElementsByClassName(e)
                        }, Ce = [], we = [], (le.qsa = Z.test(xe.querySelectorAll)) && (s(function(e) {
                            var t;
                            ve.appendChild(e).innerHTML = '<a id=\'' + C + '\'></a><select id=\'' + C + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && we.push('[*^$]=' + B + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || we.push('\\[' + B + '*(?:value|' + R + ')'), e.querySelectorAll('[id~=' + C + '-]').length || we.push('~='), t = xe.createElement('input'), t.setAttribute('name', ''), e.appendChild(t), e.querySelectorAll('[name=\'\']').length || we.push('\\[' + B + '*name' + B + '*=' + B + '*(?:\'\'|"")'), e.querySelectorAll(':checked').length || we.push(':checked'), e.querySelectorAll('a#' + C + '+*').length || we.push('.#.+[+~]'), e.querySelectorAll('\\\f'), we.push('[\\r\\n\\f]')
                        }), s(function(e) {
                            e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
                            var t = xe.createElement('input');
                            t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && we.push('name' + B + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && we.push(':enabled', ':disabled'), ve.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && we.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), we.push(',.*:')
                        })), (le.matchesSelector = Z.test(Ee = ve.matches || ve.webkitMatchesSelector || ve.mozMatchesSelector || ve.oMatchesSelector || ve.msMatchesSelector)) && s(function(e) {
                            le.disconnectedMatch = Ee.call(e, '*'), Ee.call(e, '[s!=\'\']:x'), Ce.push('!=', ':(' + F + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ('\\[' + B + '*(' + F + ')(?:' + B + '*([*^$|!~]?=)' + B + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + F + '))|)' + B + '*\\]') + ')*)|.*)\\)|)')
                        }), we = we.length && new RegExp(we.join('|')), Ce = Ce.length && new RegExp(Ce.join('|')), n = Z.test(ve.compareDocumentPosition), Se = n || Z.test(ve.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                o = t && t.parentNode;
                            return e === o || !!(o && 1 === o.nodeType && (n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, $ = n ? function(e, t) {
                            if (e === t) return ye = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !le.sortDetached && t.compareDocumentPosition(e) === n ? e == xe || e.ownerDocument == E && Se(E, e) ? -1 : t == xe || t.ownerDocument == E && Se(E, t) ? 1 : me ? H(me, e) - H(me, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return ye = !0, 0;
                            var n = 0,
                                o = e.parentNode,
                                a = t.parentNode,
                                i = [e],
                                s = [t],
                                r;
                            if (!o || !a) return e == xe ? -1 : t == xe ? 1 : o ? -1 : a ? 1 : me ? H(me, e) - H(me, t) : 0;
                            if (o === a) return d(e, t);
                            for (r = e; r = r.parentNode;) i.unshift(r);
                            for (r = t; r = r.parentNode;) s.unshift(r);
                            for (; i[n] === s[n];) n++;
                            return n ? d(i[n], s[n]) : i[n] == E ? -1 : s[n] == E ? 1 : 0
                        }, xe) : xe
                    }, t.matches = function(e, n) {
                        return t(e, null, null, n)
                    }, t.matchesSelector = function(e, n) {
                        if (be(e), le.matchesSelector && Te && !j[n + ' '] && (!Ce || !Ce.test(n)) && (!we || !we.test(n))) try {
                            var o = Ee.call(e, n);
                            if (o || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
                        } catch (t) {
                            j(n, !0)
                        }
                        return 0 < t(n, xe, null, [e]).length
                    }, t.contains = function(e, t) {
                        return (e.ownerDocument || e) != xe && be(e), Se(e, t)
                    }, t.attr = function(e, t) {
                        (e.ownerDocument || e) != xe && be(e);
                        var n = pe.attrHandle[t.toLowerCase()],
                            o = n && O.call(pe.attrHandle, t.toLowerCase()) ? n(e, t, !Te) : void 0;
                        return void 0 === o ? le.attributes || !Te ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
                    }, t.escape = function(e) {
                        return (e + '').replace(ae, ie)
                    }, t.error = function(e) {
                        throw new Error('Syntax error, unrecognized expression: ' + e)
                    }, t.uniqueSort = function(e) {
                        var t = [],
                            n = 0,
                            o = 0,
                            a;
                        if (ye = !le.detectDuplicates, me = !le.sortStable && e.slice(0), e.sort($), ye) {
                            for (; a = e[o++];) a === e[o] && (n = t.push(o));
                            for (; n--;) e.splice(t[n], 1)
                        }
                        return me = null, e
                    }, ce = t.getText = function(e) {
                        var t = '',
                            n = 0,
                            o = e.nodeType,
                            a;
                        if (!o)
                            for (; a = e[n++];) t += ce(a);
                        else if (1 === o || 9 === o || 11 === o) {
                            if ('string' == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) t += ce(e)
                        } else if (3 === o || 4 === o) return e.nodeValue;
                        return t
                    }, pe = t.selectors = {
                        cacheLength: 50,
                        createPseudo: a,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: 'parentNode',
                                first: !0
                            },
                            " ": {
                                dir: 'parentNode'
                            },
                            "+": {
                                dir: 'previousSibling',
                                first: !0
                            },
                            "~": {
                                dir: 'previousSibling'
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ne, oe), e[3] = (e[3] || e[4] || e[5] || '').replace(ne, oe), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t = !e[6] && e[2],
                                    n;
                                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : t && X.test(t) && (n = ue(t, !0)) && (n = t.indexOf(')', t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ne, oe).toLowerCase();
                                return '*' === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = A[e + ' '];
                                return t || (t = new RegExp('(^|' + B + ')' + e + '(' + B + '|$)')) && A(e, function(e) {
                                    return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '')
                                })
                            },
                            ATTR: function(e, n, o) {
                                return function(a) {
                                    var i = t.attr(a, e);
                                    return null == i ? '!=' === n : !n || (i += '', '=' === n ? i === o : '!=' === n ? i !== o : '^=' === n ? o && 0 === i.indexOf(o) : '*=' === n ? o && -1 < i.indexOf(o) : '$=' === n ? o && i.slice(-o.length) === o : '~=' === n ? -1 < (' ' + i.replace(U, ' ') + ' ').indexOf(o) : '|=' == n && (i === o || i.slice(0, o.length + 1) === o + '-'))
                                }
                            },
                            CHILD: function(e, t, n, o, a) {
                                var i = 'nth' !== e.slice(0, 3),
                                    s = 'last' !== e.slice(-4),
                                    r = 'of-type' === t;
                                return 1 === o && 0 === a ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, d) {
                                    var l = i == s ? 'previousSibling' : 'nextSibling',
                                        p = t.parentNode,
                                        c = r && t.nodeName.toLowerCase(),
                                        u = !d && !r,
                                        f = !1,
                                        g, h, m, y, b, x;
                                    if (p) {
                                        if (i) {
                                            for (; l;) {
                                                for (y = t; y = y[l];)
                                                    if (r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) return !1;
                                                x = l = 'only' === e && !x && 'nextSibling'
                                            }
                                            return !0
                                        }
                                        if (x = [s ? p.firstChild : p.lastChild], s && u) {
                                            for (y = p, m = y[C] || (y[C] = {}), h = m[y.uniqueID] || (m[y.uniqueID] = {}), g = h[e] || [], b = g[0] === S && g[1], f = b && g[2], y = b && p.childNodes[b]; y = ++b && y && y[l] || (f = b = 0) || x.pop();)
                                                if (1 === y.nodeType && ++f && y === t) {
                                                    h[e] = [S, b, f];
                                                    break
                                                }
                                        } else if (u && (y = t, m = y[C] || (y[C] = {}), h = m[y.uniqueID] || (m[y.uniqueID] = {}), g = h[e] || [], b = g[0] === S && g[1], f = b), !1 === f)
                                            for (;
                                                (y = ++b && y && y[l] || (f = b = 0) || x.pop()) && !((r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) && ++f && (u && (m = y[C] || (y[C] = {}), h = m[y.uniqueID] || (m[y.uniqueID] = {}), h[e] = [S, f]), y === t)););
                                        return f -= a, f === o || 0 == f % o && 0 <= f / o
                                    }
                                }
                            },
                            PSEUDO: function(e, n) {
                                var o = pe.pseudos[e] || pe.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e),
                                    i;
                                return o[C] ? o(n) : 1 < o.length ? (i = [e, e, '', n], pe.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                                    for (var a = o(e, n), s = a.length, i; s--;) i = H(e, a[s]), e[i] = !(t[i] = a[s])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: a(function(e) {
                                var t = [],
                                    n = [],
                                    o = fe(e.replace(M, '$1'));
                                return o[C] ? a(function(e, t, n, a) {
                                    for (var s = o(e, null, a, []), r = e.length, i; r--;)(i = s[r]) && (e[r] = !(t[r] = i))
                                }) : function(e, a, i) {
                                    return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: a(function(e) {
                                return function(n) {
                                    return 0 < t(e, n).length
                                }
                            }),
                            contains: a(function(e) {
                                return e = e.replace(ne, oe),
                                    function(t) {
                                        return -1 < (t.textContent || ce(t)).indexOf(e)
                                    }
                            }),
                            lang: a(function(e) {
                                return G.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ne, oe).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do
                                            if (n = Te ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-'); while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === ve
                            },
                            focus: function(e) {
                                return e === xe.activeElement && (!xe.hasFocus || xe.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: c(!1),
                            disabled: c(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return 'input' === t && !!e.checked || 'option' === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (6 > e.nodeType) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !pe.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return K.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return 'input' === t && 'button' === e.type || 'button' === t
                            },
                            text: function(e) {
                                var t;
                                return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                            },
                            first: u(function() {
                                return [0]
                            }),
                            last: u(function(e, t) {
                                return [t - 1]
                            }),
                            eq: u(function(e, t, n) {
                                return [0 > n ? n + t : n]
                            }),
                            even: u(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: u(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: u(function(e, t, n) {
                                for (var o = 0 > n ? n + t : n > t ? t : n; 0 <= --o;) e.push(o);
                                return e
                            }),
                            gt: u(function(e, t, n) {
                                for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
                                return e
                            })
                        }
                    }, pe.pseudos.nth = pe.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) pe.pseudos[de] = l(de);
                for (de in {
                        submit: !0,
                        reset: !0
                    }) pe.pseudos[de] = p(de);
                return g.prototype = pe.filters = pe.pseudos, pe.setFilters = new g, ue = t.tokenize = function(e, n) {
                    var o = D[e + ' '],
                        a, i, s, r, d, l, p;
                    if (o) return n ? 0 : o.slice(0);
                    for (d = e, l = [], p = pe.preFilter; d;) {
                        for (r in (!a || (i = W.exec(d))) && (i && (d = d.slice(i[0].length) || d), l.push(s = [])), a = !1, (i = z.exec(d)) && (a = i.shift(), s.push({
                                value: a,
                                type: i[0].replace(M, ' ')
                            }), d = d.slice(a.length)), pe.filter)(i = Y[r].exec(d)) && (!p[r] || (i = p[r](i))) && (a = i.shift(), s.push({
                            value: a,
                            type: r,
                            matches: i
                        }), d = d.slice(a.length));
                        if (!a) break
                    }
                    return n ? d.length : d ? t.error(e) : D(e, l).slice(0)
                }, fe = t.compile = function(e, t) {
                    var n = [],
                        o = [],
                        a = N[e + ' '],
                        s;
                    if (!a) {
                        for (t || (t = ue(e)), s = t.length; s--;) a = T(t[s]), a[C] ? n.push(a) : o.push(a);
                        a = N(e, w(o, n)), a.selector = e
                    }
                    return a
                }, ge = t.select = function(e, t, n, o) {
                    var a = 'function' == typeof e && e,
                        s = !o && ue(e = a.selector || e),
                        r, i, d, l, p;
                    if (n = n || [], 1 === s.length) {
                        if (i = s[0] = s[0].slice(0), 2 < i.length && 'ID' === (d = i[0]).type && 9 === t.nodeType && Te && pe.relative[i[1].type]) {
                            if (t = (pe.find.ID(d.matches[0].replace(ne, oe), t) || [])[0], !t) return n;
                            a && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (r = Y.needsContext.test(e) ? 0 : i.length; r-- && (d = i[r], !pe.relative[l = d.type]);)
                            if ((p = pe.find[l]) && (o = p(d.matches[0].replace(ne, oe), te.test(i[0].type) && f(t.parentNode) || t))) {
                                if (i.splice(r, 1), e = o.length && h(i), !e) return P.apply(n, o), n;
                                break
                            }
                    }
                    return (a || fe(e, s))(o, t, !Te, n, !t || te.test(e) && f(t.parentNode) || t), n
                }, le.sortStable = C.split('').sort($).join('') === C, le.detectDuplicates = !!ye, be(), le.sortDetached = s(function(e) {
                    return 1 & e.compareDocumentPosition(xe.createElement('fieldset'))
                }), s(function(e) {
                    return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href')
                }) || r('type|href|height|width', function(e, t, n) {
                    if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
                }), le.attributes && s(function(e) {
                    return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value')
                }) || r('value', function(e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
                }), s(function(e) {
                    return null == e.getAttribute('disabled')
                }) || r(R, function(e, t, n) {
                    var o;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }), t
            }(r);
        $e.find = Oe, $e.expr = Oe.selectors, $e.expr[':'] = $e.expr.pseudos, $e.uniqueSort = $e.unique = Oe.uniqueSort, $e.text = Oe.getText, $e.isXMLDoc = Oe.isXML, $e.contains = Oe.contains, $e.escapeSelector = Oe.escape;
        var Ie = function(e, t, n) {
                for (var o = [];
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (void 0 !== n && $e(e).is(n)) break;
                        o.push(e)
                    }
                return o
            },
            Le = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            _e = $e.expr.match.needsContext,
            Pe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        $e.filter = function(e, t, n) {
            var o = t[0];
            return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === o.nodeType ? $e.find.matchesSelector(o, e) ? [o] : [] : $e.find.matches(e, $e.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, $e.fn.extend({
            find: function(e) {
                var t = this.length,
                    n = this,
                    o, a;
                if ('string' != typeof e) return this.pushStack($e(e).filter(function() {
                    for (o = 0; o < t; o++)
                        if ($e.contains(n[o], this)) return !0
                }));
                for (a = this.pushStack([]), o = 0; o < t; o++) $e.find(e, n[o], a);
                return 1 < t ? $e.uniqueSort(a) : a
            },
            filter: function(e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function(e) {
                return !!u(this, 'string' == typeof e && _e.test(e) ? $e(e) : e || [], !1).length
            }
        });
        var qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            He = $e.fn.init = function(e, t, n) {
                var o, a;
                if (!e) return this;
                if (n = n || Re, 'string' == typeof e) {
                    if (o = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : qe.exec(e), o && (o[1] || !t)) {
                        if (o[1]) {
                            if (t = t instanceof $e ? t[0] : t, $e.merge(this, $e.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : De, !0)), Pe.test(o[1]) && $e.isPlainObject(t))
                                for (o in t) ke(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                            return this
                        }
                        return a = De.getElementById(o[2]), a && (this[0] = a, this.length = 1), this
                    }
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : ke(e) ? void 0 === n.ready ? e($e) : n.ready(e) : $e.makeArray(e, this)
            },
            Re;
        He.prototype = $e.fn, Re = $e(De);
        var Be = /^(?:parents|prev(?:Until|All))/,
            Fe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        $e.fn.extend({
            has: function(e) {
                var t = $e(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if ($e.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n = 0,
                    o = this.length,
                    a = [],
                    i = 'string' != typeof e && $e(e),
                    s;
                if (!_e.test(e))
                    for (; n < o; n++)
                        for (s = this[n]; s && s !== t; s = s.parentNode)
                            if (11 > s.nodeType && (i ? -1 < i.index(s) : 1 === s.nodeType && $e.find.matchesSelector(s, e))) {
                                a.push(s);
                                break
                            }
                return this.pushStack(1 < a.length ? $e.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? 'string' == typeof e ? xe.call($e(e), this[0]) : xe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack($e.uniqueSort($e.merge(this.get(), $e(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), $e.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Ie(e, 'parentNode')
            },
            parentsUntil: function(e, t, n) {
                return Ie(e, 'parentNode', n)
            },
            next: function(e) {
                return f(e, 'nextSibling')
            },
            prev: function(e) {
                return f(e, 'previousSibling')
            },
            nextAll: function(e) {
                return Ie(e, 'nextSibling')
            },
            prevAll: function(e) {
                return Ie(e, 'previousSibling')
            },
            nextUntil: function(e, t, n) {
                return Ie(e, 'nextSibling', n)
            },
            prevUntil: function(e, t, n) {
                return Ie(e, 'previousSibling', n)
            },
            siblings: function(e) {
                return Le((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Le(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && he(e.contentDocument) ? e.contentDocument : (c(e, 'template') && (e = e.content || e), $e.merge([], e.childNodes))
            }
        }, function(e, t) {
            $e.fn[e] = function(n, o) {
                var a = $e.map(this, t, n);
                return 'Until' !== e.slice(-5) && (o = n), o && 'string' == typeof o && (a = $e.filter(o, a)), 1 < this.length && (!Fe[e] && $e.uniqueSort(a), Be.test(e) && a.reverse()), this.pushStack(a)
            }
        });
        var Ue = /[^\x20\t\r\n\f]+/g;
        $e.Callbacks = function(e) {
            e = 'string' == typeof e ? g(e) : $e.extend({}, e);
            var t = [],
                n = [],
                o = -1,
                a = function() {
                    for (l = l || e.once, d = s = !0; n.length; o = -1)
                        for (r = n.shift(); ++o < t.length;) !1 === t[o].apply(r[0], r[1]) && e.stopOnFalse && (o = t.length, r = !1);
                    e.memory || (r = !1), s = !1, l && (r ? t = [] : t = '')
                },
                i = {
                    add: function() {
                        return t && (r && !s && (o = t.length - 1, n.push(r)), function n(o) {
                            $e.each(o, function(o, a) {
                                ke(a) ? (!e.unique || !i.has(a)) && t.push(a) : a && a.length && 'string' !== p(a) && n(a)
                            })
                        }(arguments), r && !s && a()), this
                    },
                    remove: function() {
                        return $e.each(arguments, function(e, n) {
                            for (var a; - 1 < (a = $e.inArray(n, t, a));) t.splice(a, 1), a <= o && o--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < $e.inArray(e, t) : 0 < t.length
                    },
                    empty: function() {
                        return t && (t = []), this
                    },
                    disable: function() {
                        return l = n = [], t = r = '', this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return l = n = [], r || s || (t = r = ''), this
                    },
                    locked: function() {
                        return !!l
                    },
                    fireWith: function(e, t) {
                        return l || (t = t || [], t = [e, t.slice ? t.slice() : t], n.push(t), !s && a()), this
                    },
                    fire: function() {
                        return i.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                },
                s, r, d, l;
            return i
        }, $e.extend({
            Deferred: function(e) {
                var t = [
                        ['notify', 'progress', $e.Callbacks('memory'), $e.Callbacks('memory'), 2],
                        ['resolve', 'done', $e.Callbacks('once memory'), $e.Callbacks('once memory'), 0, 'resolved'],
                        ['reject', 'fail', $e.Callbacks('once memory'), $e.Callbacks('once memory'), 1, 'rejected']
                    ],
                    n = 'pending',
                    o = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return $e.Deferred(function(n) {
                                $e.each(t, function(t, o) {
                                    var i = ke(e[o[4]]) && e[o[4]];
                                    a[o[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && ke(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + 'With'](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, n, o) {
                            function a(t, n, o, e) {
                                return function() {
                                    var s = this,
                                        d = arguments,
                                        l = function() {
                                            var r, l;
                                            if (!(t < i)) {
                                                if (r = o.apply(s, d), r === n.promise()) throw new TypeError('Thenable self-resolution');
                                                l = r && ('object' == typeof r || 'function' == typeof r) && r.then, ke(l) ? e ? l.call(r, a(i, n, h, e), a(i, n, m, e)) : (i++, l.call(r, a(i, n, h, e), a(i, n, m, e), a(i, n, h, n.notifyWith))) : (o !== h && (s = void 0, d = [r]), (e || n.resolveWith)(s, d))
                                            }
                                        },
                                        p = e ? l : function() {
                                            try {
                                                l()
                                            } catch (a) {
                                                $e.Deferred.exceptionHook && $e.Deferred.exceptionHook(a, p.stackTrace), t + 1 >= i && (o !== m && (s = void 0, d = [a]), n.rejectWith(s, d))
                                            }
                                        };
                                    t ? p() : ($e.Deferred.getStackHook && (p.stackTrace = $e.Deferred.getStackHook()), r.setTimeout(p))
                                }
                            }
                            var i = 0;
                            return $e.Deferred(function(i) {
                                t[0][3].add(a(0, i, ke(o) ? o : h, i.notifyWith)), t[1][3].add(a(0, i, ke(e) ? e : h)), t[2][3].add(a(0, i, ke(n) ? n : m))
                            }).promise()
                        },
                        promise: function(e) {
                            return null == e ? o : $e.extend(e, o)
                        }
                    },
                    a = {};
                return $e.each(t, function(e, i) {
                    var s = i[2],
                        r = i[5];
                    o[i[1]] = s.add, r && s.add(function() {
                        n = r
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(i[3].fire), a[i[0]] = function() {
                        return a[i[0] + 'With'](this === a ? void 0 : this, arguments), this
                    }, a[i[0] + 'With'] = s.fireWith
                }), o.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    o = Array(n),
                    a = me.call(arguments),
                    s = $e.Deferred(),
                    i = function(e) {
                        return function(n) {
                            o[e] = this, a[e] = 1 < arguments.length ? me.call(arguments) : n, --t || s.resolveWith(o, a)
                        }
                    };
                if (1 >= t && (y(e, s.done(i(n)).resolve, s.reject, !t), 'pending' === s.state() || ke(a[n] && a[n].then))) return s.then();
                for (; n--;) y(a[n], i(n), s.reject);
                return s.promise()
            }
        });
        var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        $e.Deferred.exceptionHook = function(e, t) {
            r.console && r.console.warn && e && Me.test(e.name) && r.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
        }, $e.readyException = function(e) {
            r.setTimeout(function() {
                throw e
            })
        };
        var We = $e.Deferred();
        $e.fn.ready = function(e) {
            return We.then(e).catch(function(e) {
                $e.readyException(e)
            }), this
        }, $e.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? !--$e.readyWait : !$e.isReady) && ($e.isReady = !0, !0 !== e && 0 < --$e.readyWait || We.resolveWith(De, [$e]))
            }
        }), $e.ready.then = We.then, 'complete' !== De.readyState && ('loading' === De.readyState || De.documentElement.doScroll) ? (De.addEventListener('DOMContentLoaded', b), r.addEventListener('load', b)) : r.setTimeout($e.ready);
        var ze = function(e, t, n, o, a, s, r) {
                var d = 0,
                    i = e.length,
                    l = null == n;
                if ('object' === p(n))
                    for (d in a = !0, n) ze(e, t, d, n[d], !0, s, r);
                else if (void 0 !== o && (a = !0, ke(o) || (r = !0), l && (r ? (t.call(e, o), t = null) : (l = t, t = function(e, t, n) {
                        return l.call($e(e), n)
                    })), t))
                    for (; d < i; d++) t(e[d], n, r ? o : o.call(e[d], d, t(e[d], n)));
                return a ? e : l ? t.call(e) : i ? t(e[0], n) : s
            },
            Ve = /^-ms-/,
            Xe = /-([a-z])/g,
            Ge = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        T.uid = 1, T.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Ge(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var o = this.cache(e),
                    a;
                if ('string' == typeof t) o[v(t)] = n;
                else
                    for (a in t) o[v(a)] = t[a];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 === n ? t : n)
            },
            remove: function(e, t) {
                var n = e[this.expando],
                    o;
                if (void 0 !== n) {
                    if (void 0 !== t)
                        for (Array.isArray(t) ? t = t.map(v) : (t = v(t), t = (t in n) ? [t] : t.match(Ue) || []), o = t.length; o--;) delete n[t[o]];
                    (void 0 === t || $e.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !$e.isEmptyObject(t)
            }
        };
        var Ye = new T,
            Qe = new T,
            Ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Je = /[A-Z]/g;
        $e.extend({
            hasData: function(e) {
                return Qe.hasData(e) || Ye.hasData(e)
            },
            data: function(e, t, n) {
                return Qe.access(e, t, n)
            },
            removeData: function(e, t) {
                Qe.remove(e, t)
            },
            _data: function(e, t, n) {
                return Ye.access(e, t, n)
            },
            _removeData: function(e, t) {
                Ye.remove(e, t)
            }
        }), $e.fn.extend({
            data: function(e, t) {
                var n = this[0],
                    o = n && n.attributes,
                    a, i, s;
                if (void 0 === e) {
                    if (this.length && (s = Qe.get(n), 1 === n.nodeType && !Ye.get(n, 'hasDataAttrs'))) {
                        for (a = o.length; a--;) o[a] && (i = o[a].name, 0 === i.indexOf('data-') && (i = v(i.slice(5)), C(n, i, s[i])));
                        Ye.set(n, 'hasDataAttrs', !0)
                    }
                    return s
                }
                return 'object' == typeof e ? this.each(function() {
                    Qe.set(this, e)
                }) : ze(this, function(t) {
                    var o;
                    return n && void 0 === t ? (o = Qe.get(n, e), void 0 !== o) ? o : (o = C(n, e), void 0 === o ? void 0 : o) : void this.each(function() {
                        Qe.set(this, e, t)
                    })
                }, null, t, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Qe.remove(this, e)
                })
            }
        }), $e.extend({
            queue: function(e, t, n) {
                var o;
                if (e) return t = (t || 'fx') + 'queue', o = Ye.get(e, t), n && (!o || Array.isArray(n) ? o = Ye.access(e, t, $e.makeArray(n)) : o.push(n)), o || []
            },
            dequeue: function(e, t) {
                t = t || 'fx';
                var n = $e.queue(e, t),
                    o = n.length,
                    a = n.shift(),
                    i = $e._queueHooks(e, t),
                    s = function() {
                        $e.dequeue(e, t)
                    };
                'inprogress' === a && (a = n.shift(), o--), a && ('fx' === t && n.unshift('inprogress'), delete i.stop, a.call(e, s, i)), !o && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + 'queueHooks';
                return Ye.get(e, n) || Ye.access(e, n, {
                    empty: $e.Callbacks('once memory').add(function() {
                        Ye.remove(e, [t + 'queue', n])
                    })
                })
            }
        }), $e.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? $e.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = $e.queue(this, e, t);
                    $e._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && $e.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    $e.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || 'fx', [])
            },
            promise: function(e, t) {
                var n = 1,
                    o = $e.Deferred(),
                    a = this,
                    s = this.length,
                    i = function() {
                        --n || o.resolveWith(a, [a])
                    },
                    r;
                for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; s--;) r = Ye.get(a[s], e + 'queueHooks'), r && r.empty && (n++, r.empty.add(i));
                return i(), o.promise(t)
            }
        });
        var Ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            et = new RegExp('^(?:([+-])=|)(' + Ze + ')([a-z%]*)$', 'i'),
            tt = ['Top', 'Right', 'Bottom', 'Left'],
            nt = De.documentElement,
            ot = function(e) {
                return $e.contains(e.ownerDocument, e)
            },
            at = {
                composed: !0
            };
        nt.getRootNode && (ot = function(e) {
            return $e.contains(e.ownerDocument, e) || e.getRootNode(at) === e.ownerDocument
        });
        var it = function(e, t) {
                return e = t || e, 'none' === e.style.display || '' === e.style.display && ot(e) && 'none' === $e.css(e, 'display')
            },
            st = {};
        $e.fn.extend({
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    it(this) ? $e(this).show() : $e(this).hide()
                })
            }
        });
        var rt = /^(?:checkbox|radio)$/i,
            dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            lt = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var e = De.createDocumentFragment(),
                t = e.appendChild(De.createElement('div')),
                n = De.createElement('input');
            n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), t.appendChild(n), Se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = '<textarea>x</textarea>', Se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = '<option></option>', Se.option = !!t.lastChild
        })();
        var pt = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', '']
        };
        pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead, pt.th = pt.td, Se.option || (pt.optgroup = pt.option = [1, '<select multiple=\'multiple\'>', '</select>']);
        var ct = /<|&#?\w+;/,
            ut = /^([^.]*)(?:\.(.+)|)/;
        $e.event = {
            global: {},
            add: function(n, e, o, a, i) {
                var s = Ye.get(n),
                    r, d, l, p, c, t, u, f, g, h, m;
                if (Ge(n))
                    for (o.handler && (r = o, o = r.handler, i = r.selector), i && $e.find.matchesSelector(nt, i), o.guid || (o.guid = $e.guid++), (p = s.events) || (p = s.events = Object.create(null)), (d = s.handle) || (d = s.handle = function(t) {
                            return 'undefined' != typeof $e && $e.event.triggered !== t.type ? $e.event.dispatch.apply(n, arguments) : void 0
                        }), e = (e || '').match(Ue) || [''], c = e.length; c--;)(l = ut.exec(e[c]) || [], g = m = l[1], h = (l[2] || '').split('.').sort(), !!g) && (u = $e.event.special[g] || {}, g = (i ? u.delegateType : u.bindType) || g, u = $e.event.special[g] || {}, t = $e.extend({
                        type: g,
                        origType: m,
                        data: a,
                        handler: o,
                        guid: o.guid,
                        selector: i,
                        needsContext: i && $e.expr.match.needsContext.test(i),
                        namespace: h.join('.')
                    }, r), (f = p[g]) || (f = p[g] = [], f.delegateCount = 0, (!u.setup || !1 === u.setup.call(n, a, h, d)) && n.addEventListener && n.addEventListener(g, d)), u.add && (u.add.call(n, t), !t.handler.guid && (t.handler.guid = o.guid)), i ? f.splice(f.delegateCount++, 0, t) : f.push(t), $e.event.global[g] = !0)
            },
            remove: function(e, n, o, a, i) {
                var s = Ye.hasData(e) && Ye.get(e),
                    r, d, l, p, c, t, u, f, g, h, m;
                if (s && (p = s.events)) {
                    for (n = (n || '').match(Ue) || [''], c = n.length; c--;) {
                        if (l = ut.exec(n[c]) || [], g = m = l[1], h = (l[2] || '').split('.').sort(), !g) {
                            for (g in p) $e.event.remove(e, g + n[c], o, a, !0);
                            continue
                        }
                        for (u = $e.event.special[g] || {}, g = (a ? u.delegateType : u.bindType) || g, f = p[g] || [], l = l[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), d = r = f.length; r--;) t = f[r], (i || m === t.origType) && (!o || o.guid === t.guid) && (!l || l.test(t.namespace)) && (!a || a === t.selector || '**' === a && t.selector) && (f.splice(r, 1), t.selector && f.delegateCount--, u.remove && u.remove.call(e, t));
                        d && !f.length && ((!u.teardown || !1 === u.teardown.call(e, h, s.handle)) && $e.removeEvent(e, g, s.handle), delete p[g])
                    }
                    $e.isEmptyObject(p) && Ye.remove(e, 'handle events')
                }
            },
            dispatch: function(e) {
                var t = Array(arguments.length),
                    n = $e.event.fix(e),
                    o = (Ye.get(this, 'events') || Object.create(null))[n.type] || [],
                    a = $e.event.special[n.type] || {},
                    s, i, r, d, l, p;
                for (t[0] = n, s = 1; s < arguments.length; s++) t[s] = arguments[s];
                if (n.delegateTarget = this, !(a.preDispatch && !1 === a.preDispatch.call(this, n))) {
                    for (p = $e.event.handlers.call(this, n, o), s = 0;
                        (d = p[s++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = d.elem, i = 0;
                            (l = d.handlers[i++]) && !n.isImmediatePropagationStopped();)(!n.rnamespace || !1 === l.namespace || n.rnamespace.test(l.namespace)) && (n.handleObj = l, n.data = l.data, r = (($e.event.special[l.origType] || {}).handle || l.handler).apply(d.elem, t), void 0 !== r && !1 === (n.result = r) && (n.preventDefault(), n.stopPropagation()));
                    return a.postDispatch && a.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(e, t) {
                var n = [],
                    o = t.delegateCount,
                    a = e.target,
                    s, i, r, d, l;
                if (o && a.nodeType && !('click' === e.type && 1 <= e.button))
                    for (; a !== this; a = a.parentNode || this)
                        if (1 === a.nodeType && ('click' !== e.type || !0 !== a.disabled)) {
                            for (d = [], l = {}, s = 0; s < o; s++) i = t[s], r = i.selector + ' ', void 0 === l[r] && (l[r] = i.needsContext ? -1 < $e(r, this).index(a) : $e.find(r, this, null, [a]).length), l[r] && d.push(i);
                            d.length && n.push({
                                elem: a,
                                handlers: d
                            })
                        }
                return a = this, o < t.length && n.push({
                    elem: a,
                    handlers: t.slice(o)
                }), n
            },
            addProp: function(e, t) {
                Object.defineProperty($e.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: ke(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[$e.expando] ? e : new $e.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return rt.test(t.type) && t.click && c(t, 'input') && _(t, 'click', j), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return rt.test(t.type) && t.click && c(t, 'input') && _(t, 'click'), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return rt.test(t.type) && t.click && c(t, 'input') && Ye.get(t, 'click') || c(t, 'a')
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, $e.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, $e.Event = function(e, t) {
            return this instanceof $e.Event ? void(e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? j : $, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && $e.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[$e.expando] = !0) : new $e.Event(e, t)
        }, $e.Event.prototype = {
            constructor: $e.Event,
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = j, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = j, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = j, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, $e.each({
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
            char: !0,
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
        }, $e.event.addProp), $e.each({
            focus: 'focusin',
            blur: 'focusout'
        }, function(e, t) {
            $e.event.special[e] = {
                setup: function() {
                    return _(this, e, O), !1
                },
                trigger: function() {
                    return _(this, e), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        }), $e.each({
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout'
        }, function(e, t) {
            $e.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n = this,
                        o = e.relatedTarget,
                        a = e.handleObj,
                        i;
                    return o && (o === n || $e.contains(n, o)) || (e.type = a.origType, i = a.handler.apply(this, arguments), e.type = t), i
                }
            }
        }), $e.fn.extend({
            on: function(e, t, n, o) {
                return L(this, e, t, n, o)
            },
            one: function(e, t, n, o) {
                return L(this, e, t, n, o, 1)
            },
            off: function(e, t, n) {
                var o, a;
                if (e && e.preventDefault && e.handleObj) return o = e.handleObj, $e(e.delegateTarget).off(o.namespace ? o.origType + '.' + o.namespace : o.origType, o.selector, o.handler), this;
                if ('object' == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return (!1 === t || 'function' == typeof t) && (n = t, t = void 0), !1 === n && (n = $), this.each(function() {
                    $e.event.remove(this, e, n, t)
                })
            }
        });
        var ft = /<script|<style|<link/i,
            gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        $e.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var o = e.cloneNode(!0),
                    a = ot(e),
                    s, i, r, d;
                if (!Se.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !$e.isXMLDoc(e))
                    for (d = A(o), r = A(e), (s = 0, i = r.length); s < i; s++) B(r[s], d[s]);
                if (t)
                    if (n)
                        for (r = r || A(e), d = d || A(o), (s = 0, i = r.length); s < i; s++) R(r[s], d[s]);
                    else R(e, o);
                return d = A(o, 'script'), 0 < d.length && D(d, !a && A(e, 'script')), o
            },
            cleanData: function(e) {
                for (var t = $e.event.special, n = 0, o, a, i; void 0 !== (a = e[n]); n++)
                    if (Ge(a)) {
                        if (o = a[Ye.expando]) {
                            if (o.events)
                                for (i in o.events) t[i] ? $e.event.remove(a, i) : $e.removeEvent(a, i, o.handle);
                            a[Ye.expando] = void 0
                        }
                        a[Qe.expando] && (a[Qe.expando] = void 0)
                    }
            }
        }), $e.fn.extend({
            detach: function(e) {
                return U(this, e, !0)
            },
            remove: function(e) {
                return U(this, e)
            },
            text: function(e) {
                return ze(this, function(e) {
                    return void 0 === e ? $e.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return F(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = P(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return F(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = P(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return F(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return F(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e = 0, t; null != (t = this[e]); e++) 1 === t.nodeType && ($e.cleanData(A(t, !1)), t.textContent = '');
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return $e.clone(this, e, t)
                })
            },
            html: function(e) {
                return ze(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        o = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ('string' == typeof e && !ft.test(e) && !pt[(dt.exec(e) || ['', ''])[1].toLowerCase()]) {
                        e = $e.htmlPrefilter(e);
                        try {
                            for (; n < o; n++) t = this[n] || {}, 1 === t.nodeType && ($e.cleanData(A(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (t) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return F(this, arguments, function(t) {
                    var n = this.parentNode;
                    0 > $e.inArray(this, e) && ($e.cleanData(A(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), $e.each({
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
        }, function(e, t) {
            $e.fn[e] = function(e) {
                for (var n = [], o = $e(e), a = o.length - 1, s = 0, i; s <= a; s++) i = s === a ? this : this.clone(!0), $e(o[s])[t](i), be.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var mt = new RegExp('^(' + Ze + ')(?!px)[a-z%]+$', 'i'),
            yt = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = r), t.getComputedStyle(e)
            },
            bt = function(e, t, n) {
                var o = {},
                    a, i;
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in a = n.call(e), t) e.style[i] = o[i];
                return a
            },
            xt = new RegExp(tt.join('|'), 'i');
        (function() {
            function e() {
                if (o) {
                    n.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', o.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', nt.appendChild(n).appendChild(o);
                    var e = r.getComputedStyle(o);
                    a = '1%' !== e.top, p = 12 === t(e.marginLeft), o.style.right = '60%', d = 36 === t(e.right), i = 36 === t(e.width), o.style.position = 'absolute', s = 12 === t(o.offsetWidth / 3), nt.removeChild(n), o = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n = De.createElement('div'),
                o = De.createElement('div'),
                a, i, s, d, l, p;
            o.style && (o.style.backgroundClip = 'content-box', o.cloneNode(!0).style.backgroundClip = '', Se.clearCloneStyle = 'content-box' === o.style.backgroundClip, $e.extend(Se, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), d
                },
                pixelPosition: function() {
                    return e(), a
                },
                reliableMarginLeft: function() {
                    return e(), p
                },
                scrollboxSize: function() {
                    return e(), s
                },
                reliableTrDimensions: function() {
                    var e, t, n, o;
                    return null == l && (e = De.createElement('table'), t = De.createElement('tr'), n = De.createElement('div'), e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate', t.style.cssText = 'border:1px solid', t.style.height = '1px', n.style.height = '9px', n.style.display = 'block', nt.appendChild(e).appendChild(t).appendChild(n), o = r.getComputedStyle(t), l = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, nt.removeChild(e)), l
                }
            }))
        })();
        var vt = ['Webkit', 'Moz', 'ms'],
            Tt = De.createElement('div').style,
            wt = {},
            Ct = /^(none|table(?!-c[ea]).+)/,
            Et = /^--/,
            St = {
                position: 'absolute',
                visibility: 'hidden',
                display: 'block'
            },
            kt = {
                letterSpacing: '0',
                fontWeight: '400'
            };
        $e.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = M(e, 'opacity');
                            return '' === n ? '1' : n
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
            style: function(e, t, n, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a = v(t),
                        i = Et.test(t),
                        s = e.style,
                        r, d, l;
                    if (i || (t = V(a)), l = $e.cssHooks[t] || $e.cssHooks[a], void 0 !== n) {
                        if (d = typeof n, 'string' === d && (r = et.exec(n)) && r[1] && (n = E(e, t, r), d = 'number'), null == n || n !== n) return;
                        'number' !== d || i || (n += r && r[3] || ($e.cssNumber[a] ? '' : 'px')), Se.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (s[t] = 'inherit'), l && 'set' in l && void 0 === (n = l.set(e, n, o)) || (i ? s.setProperty(t, n) : s[t] = n)
                    } else return l && 'get' in l && void 0 !== (r = l.get(e, !1, o)) ? r : s[t]
                }
            },
            css: function(e, t, n, o) {
                var a = v(t),
                    i = Et.test(t),
                    s, r, d;
                return i || (t = V(a)), d = $e.cssHooks[t] || $e.cssHooks[a], d && 'get' in d && (s = d.get(e, !0, n)), void 0 === s && (s = M(e, t, o)), 'normal' === s && t in kt && (s = kt[t]), '' === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
            }
        }), $e.each(['height', 'width'], function(e, t) {
            $e.cssHooks[t] = {
                get: function(e, n, o) {
                    if (n) return !Ct.test($e.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? Y(e, t, o) : bt(e, St, function() {
                        return Y(e, t, o)
                    })
                },
                set: function(e, n, o) {
                    var a = yt(e),
                        i = !Se.scrollboxSize() && 'absolute' === a.position,
                        s = (i || o) && 'border-box' === $e.css(e, 'boxSizing', !1, a),
                        r = o ? G(e, t, o, s, a) : 0,
                        d;
                    return s && i && (r -= fe(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - G(e, t, 'border', !1, a) - .5)), r && (d = et.exec(n)) && 'px' !== (d[3] || 'px') && (e.style[t] = n, n = $e.css(e, t)), X(e, n, r)
                }
            }
        }), $e.cssHooks.marginLeft = W(Se.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(M(e, 'marginLeft')) || e.getBoundingClientRect().left - bt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + 'px'
        }), $e.each({
            margin: '',
            padding: '',
            border: 'Width'
        }, function(e, t) {
            $e.cssHooks[e + t] = {
                expand: function(n) {
                    for (var o = 0, a = {}, i = 'string' == typeof n ? n.split(' ') : [n]; 4 > o; o++) a[e + tt[o] + t] = i[o] || i[o - 2] || i[0];
                    return a
                }
            }, 'margin' !== e && ($e.cssHooks[e + t].set = X)
        }), $e.fn.extend({
            css: function(e, t) {
                return ze(this, function(e, t, n) {
                    var o = {},
                        a = 0,
                        i, s;
                    if (Array.isArray(t)) {
                        for (i = yt(e), s = t.length; a < s; a++) o[t[a]] = $e.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 === n ? $e.css(e, t) : $e.style(e, t, n)
                }, e, t, 1 < arguments.length)
            }
        }), $e.Tween = Q, Q.prototype = {
            constructor: Q,
            init: function(e, t, n, o, a, i) {
                this.elem = e, this.prop = n, this.easing = a || $e.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = i || ($e.cssNumber[n] ? '' : 'px')
            },
            cur: function() {
                var e = Q.propHooks[this.prop];
                return e && e.get ? e.get(this) : Q.propHooks._default.get(this)
            },
            run: function(e) {
                var t = Q.propHooks[this.prop],
                    n;
                return this.pos = this.options.duration ? n = $e.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : Q.propHooks._default.set(this), this
            }
        }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = $e.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0)
                },
                set: function(e) {
                    $e.fx.step[e.prop] ? $e.fx.step[e.prop](e) : 1 === e.elem.nodeType && ($e.cssHooks[e.prop] || null != e.elem.style[V(e.prop)]) ? $e.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, $e.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: 'swing'
        }, $e.fx = Q.prototype.init, $e.fx.step = {};
        var At = /^(?:toggle|show|hide)$/,
            Dt = /queueHooks$/,
            Nt, jt;
        $e.Animation = $e.extend(oe, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return E(n.elem, e, et.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    ke(e) ? (t = e, e = ['*']) : e = e.match(Ue);
                    for (var n = 0, o = e.length, a; n < o; n++) a = e[n], oe.tweeners[a] = oe.tweeners[a] || [], oe.tweeners[a].unshift(t)
                },
                prefilters: [te],
                prefilter: function(e, t) {
                    t ? oe.prefilters.unshift(e) : oe.prefilters.push(e)
                }
            }), $e.speed = function(e, t, n) {
                var o = e && 'object' == typeof e ? $e.extend({}, e) : {
                    complete: n || !n && t || ke(e) && e,
                    duration: e,
                    easing: n && t || t && !ke(t) && t
                };
                return $e.fx.off ? o.duration = 0 : 'number' != typeof o.duration && (o.duration in $e.fx.speeds ? o.duration = $e.fx.speeds[o.duration] : o.duration = $e.fx.speeds._default), (null == o.queue || !0 === o.queue) && (o.queue = 'fx'), o.old = o.complete, o.complete = function() {
                    ke(o.old) && o.old.call(this), o.queue && $e.dequeue(this, o.queue)
                }, o
            }, $e.fn.extend({
                fadeTo: function(e, t, n, o) {
                    return this.filter(it).css('opacity', 0).show().end().animate({
                        opacity: t
                    }, e, n, o)
                },
                animate: function(e, t, n, o) {
                    var a = $e.isEmptyObject(e),
                        i = $e.speed(t, n, o),
                        s = function() {
                            var t = oe(this, $e.extend({}, e), i);
                            (a || Ye.get(this, 'finish')) && t.stop(!0)
                        };
                    return s.finish = s, a || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
                },
                stop: function(e, t, n) {
                    var o = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return 'string' != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || 'fx', []), this.each(function() {
                        var t = !0,
                            a = null != e && e + 'queueHooks',
                            i = $e.timers,
                            s = Ye.get(this);
                        if (a) s[a] && s[a].stop && o(s[a]);
                        else
                            for (a in s) s[a] && s[a].stop && Dt.test(a) && o(s[a]);
                        for (a = i.length; a--;) i[a].elem === this && (null == e || i[a].queue === e) && (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                        (t || !n) && $e.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || 'fx'), this.each(function() {
                        var t = Ye.get(this),
                            n = t[e + 'queue'],
                            o = t[e + 'queueHooks'],
                            a = $e.timers,
                            i = n ? n.length : 0,
                            s;
                        for (t.finish = !0, $e.queue(this, e, []), o && o.stop && o.stop.call(this, !0), s = a.length; s--;) a[s].elem === this && a[s].queue === e && (a[s].anim.stop(!0), a.splice(s, 1));
                        for (s = 0; s < i; s++) n[s] && n[s].finish && n[s].finish.call(this);
                        delete t.finish
                    })
                }
            }), $e.each(['toggle', 'show', 'hide'], function(e, t) {
                var n = $e.fn[t];
                $e.fn[t] = function(e, o, a) {
                    return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(Z(t, !0), e, o, a)
                }
            }), $e.each({
                slideDown: Z('show'),
                slideUp: Z('hide'),
                slideToggle: Z('toggle'),
                fadeIn: {
                    opacity: 'show'
                },
                fadeOut: {
                    opacity: 'hide'
                },
                fadeToggle: {
                    opacity: 'toggle'
                }
            }, function(e, t) {
                $e.fn[e] = function(e, n, o) {
                    return this.animate(t, e, n, o)
                }
            }), $e.timers = [], $e.fx.tick = function() {
                var e = 0,
                    t = $e.timers,
                    n;
                for (Nt = Date.now(); e < t.length; e++) n = t[e], n() || t[e] !== n || t.splice(e--, 1);
                t.length || $e.fx.stop(), Nt = void 0
            }, $e.fx.timer = function(e) {
                $e.timers.push(e), $e.fx.start()
            }, $e.fx.interval = 13, $e.fx.start = function() {
                jt || (jt = !0, K())
            }, $e.fx.stop = function() {
                jt = null
            }, $e.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, $e.fn.delay = function(e, t) {
                return e = $e.fx ? $e.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function(t, n) {
                    var o = r.setTimeout(t, e);
                    n.stop = function() {
                        r.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = De.createElement('input'),
                    t = De.createElement('select'),
                    n = t.appendChild(De.createElement('option'));
                e.type = 'checkbox', Se.checkOn = '' !== e.value, Se.optSelected = n.selected, e = De.createElement('input'), e.value = 't', e.type = 'radio', Se.radioValue = 't' === e.value
            }();
        var $t = $e.expr.attrHandle,
            Ot;
        $e.fn.extend({
            attr: function(e, t) {
                return ze(this, $e.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    $e.removeAttr(this, e)
                })
            }
        }), $e.extend({
            attr: function(e, t, n) {
                var o = e.nodeType,
                    a, i;
                if (3 !== o && 8 !== o && 2 !== o) return 'undefined' == typeof e.getAttribute ? $e.prop(e, t, n) : (1 === o && $e.isXMLDoc(e) || (i = $e.attrHooks[t.toLowerCase()] || ($e.expr.match.bool.test(t) ? Ot : void 0)), void 0 !== n) ? null === n ? void $e.removeAttr(e, t) : i && 'set' in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ''), n) : i && 'get' in i && null !== (a = i.get(e, t)) ? a : (a = $e.find.attr(e, t), null == a ? void 0 : a)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!Se.radioValue && 'radio' === t && c(e, 'input')) {
                            var n = e.value;
                            return e.setAttribute('type', t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n = 0,
                    o = t && t.match(Ue),
                    a;
                if (o && 1 === e.nodeType)
                    for (; a = o[n++];) e.removeAttribute(a)
            }
        }), Ot = {
            set: function(e, t, n) {
                return !1 === t ? $e.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, $e.each($e.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = $t[t] || $e.find.attr;
            $t[t] = function(e, t, o) {
                var a = t.toLowerCase(),
                    i, s;
                return o || (s = $t[a], $t[a] = i, i = null == n(e, t, o) ? null : a, $t[a] = s), i
            }
        });
        var It = /^(?:input|select|textarea|button)$/i,
            Lt = /^(?:a|area)$/i;
        $e.fn.extend({
            prop: function(e, t) {
                return ze(this, $e.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[$e.propFix[e] || e]
                })
            }
        }), $e.extend({
            prop: function(e, t, n) {
                var o = e.nodeType,
                    a, i;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && $e.isXMLDoc(e) || (t = $e.propFix[t] || t, i = $e.propHooks[t]), void 0 === n ? i && 'get' in i && null !== (a = i.get(e, t)) ? a : e[t] : i && 'set' in i && void 0 !== (a = i.set(e, n, t)) ? a : e[t] = n
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = $e.find.attr(e, 'tabindex');
                        return t ? parseInt(t, 10) : It.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: 'htmlFor',
                class: 'className'
            }
        }), Se.optSelected || ($e.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), $e.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function() {
            $e.propFix[this.toLowerCase()] = this
        }), $e.fn.extend({
            addClass: function(e) {
                var t = 0,
                    n, o, a, i, s, r, d;
                if (ke(e)) return this.each(function(t) {
                    $e(this).addClass(e.call(this, t, ie(this)))
                });
                if (n = se(e), n.length)
                    for (; o = this[t++];)
                        if (i = ie(o), a = 1 === o.nodeType && ' ' + ae(i) + ' ', a) {
                            for (r = 0; s = n[r++];) 0 > a.indexOf(' ' + s + ' ') && (a += s + ' ');
                            d = ae(a), i !== d && o.setAttribute('class', d)
                        }
                return this
            },
            removeClass: function(e) {
                var t = 0,
                    n, o, a, i, s, r, d;
                if (ke(e)) return this.each(function(t) {
                    $e(this).removeClass(e.call(this, t, ie(this)))
                });
                if (!arguments.length) return this.attr('class', '');
                if (n = se(e), n.length)
                    for (; o = this[t++];)
                        if (i = ie(o), a = 1 === o.nodeType && ' ' + ae(i) + ' ', a) {
                            for (r = 0; s = n[r++];)
                                for (; - 1 < a.indexOf(' ' + s + ' ');) a = a.replace(' ' + s + ' ', ' ');
                            d = ae(a), i !== d && o.setAttribute('class', d)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    o = 'string' == n || Array.isArray(e);
                return 'boolean' == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : ke(e) ? this.each(function(n) {
                    $e(this).toggleClass(e.call(this, n, ie(this), t), t)
                }) : this.each(function() {
                    var t, a, i, s;
                    if (o)
                        for (a = 0, i = $e(this), s = se(e); t = s[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else(void 0 === e || 'boolean' == n) && (t = ie(this), t && Ye.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : Ye.get(this, '__className__') || ''))
                })
            },
            hasClass: function(e) {
                var t = 0,
                    n, o;
                for (n = ' ' + e + ' '; o = this[t++];)
                    if (1 === o.nodeType && -1 < (' ' + ae(ie(o)) + ' ').indexOf(n)) return !0;
                return !1
            }
        });
        var _t = /\r/g;
        $e.fn.extend({
            val: function(e) {
                var t = this[0],
                    n, o, a;
                return arguments.length ? (a = ke(e), this.each(function(t) {
                    var o;
                    1 !== this.nodeType || (o = a ? e.call(this, t, $e(this).val()) : e, null == o ? o = '' : 'number' == typeof o ? o += '' : Array.isArray(o) && (o = $e.map(o, function(e) {
                        return null == e ? '' : e + ''
                    })), n = $e.valHooks[this.type] || $e.valHooks[this.nodeName.toLowerCase()], (!n || !('set' in n) || void 0 === n.set(this, o, 'value')) && (this.value = o))
                })) : t ? (n = $e.valHooks[t.type] || $e.valHooks[t.nodeName.toLowerCase()], n && 'get' in n && void 0 !== (o = n.get(t, 'value'))) ? o : (o = t.value, 'string' == typeof o ? o.replace(_t, '') : null == o ? '' : o) : void 0
            }
        }), $e.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = $e.find.attr(e, 'value');
                        return null == t ? ae($e.text(e)) : t
                    }
                },
                select: {
                    get: function(e) {
                        var t = e.options,
                            n = e.selectedIndex,
                            o = 'select-one' === e.type,
                            a = o ? null : [],
                            s = o ? n + 1 : t.length,
                            r, d, l;
                        for (l = 0 > n ? s : o ? n : 0; l < s; l++)
                            if (d = t[l], (d.selected || l === n) && !d.disabled && (!d.parentNode.disabled || !c(d.parentNode, 'optgroup'))) {
                                if (r = $e(d).val(), o) return r;
                                a.push(r)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n = e.options, o = $e.makeArray(t), a = n.length, i, s; a--;) s = n[a], (s.selected = -1 < $e.inArray($e.valHooks.option.get(s), o)) && (i = !0);
                        return i || (e.selectedIndex = -1), o
                    }
                }
            }
        }), $e.each(['radio', 'checkbox'], function() {
            $e.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < $e.inArray($e(e).val(), t)
                }
            }, Se.checkOn || ($e.valHooks[this].get = function(e) {
                return null === e.getAttribute('value') ? 'on' : e.value
            })
        }), Se.focusin = 'onfocusin' in r;
        var Pt = /^(?:focusinfocus|focusoutblur)$/,
            qt = function(t) {
                t.stopPropagation()
            };
        $e.extend($e.event, {
            trigger: function(e, t, n, o) {
                var a = [n || De],
                    s = we.call(e, 'type') ? e.type : e,
                    d = we.call(e, 'namespace') ? e.namespace.split('.') : [],
                    l, i, p, c, u, f, g, h;
                if ((i = h = p = n = n || De, 3 !== n.nodeType && 8 !== n.nodeType) && !Pt.test(s + $e.event.triggered) && (-1 < s.indexOf('.') && (d = s.split('.'), s = d.shift(), d.sort()), u = 0 > s.indexOf(':') && 'on' + s, e = e[$e.expando] ? e : new $e.Event(s, 'object' == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = d.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : $e.makeArray(t, [e]), g = $e.event.special[s] || {}, o || !g.trigger || !1 !== g.trigger.apply(n, t))) {
                    if (!o && !g.noBubble && !Ae(n)) {
                        for (c = g.delegateType || s, Pt.test(c + s) || (i = i.parentNode); i; i = i.parentNode) a.push(i), p = i;
                        p === (n.ownerDocument || De) && a.push(p.defaultView || p.parentWindow || r)
                    }
                    for (l = 0;
                        (i = a[l++]) && !e.isPropagationStopped();) h = i, e.type = 1 < l ? c : g.bindType || s, f = (Ye.get(i, 'events') || Object.create(null))[e.type] && Ye.get(i, 'handle'), f && f.apply(i, t), f = u && i[u], f && f.apply && Ge(i) && (e.result = f.apply(i, t), !1 === e.result && e.preventDefault());
                    return e.type = s, o || e.isDefaultPrevented() || g._default && !1 !== g._default.apply(a.pop(), t) || !Ge(n) || !u || !ke(n[s]) || Ae(n) || (p = n[u], p && (n[u] = null), $e.event.triggered = s, e.isPropagationStopped() && h.addEventListener(s, qt), n[s](), e.isPropagationStopped() && h.removeEventListener(s, qt), $e.event.triggered = void 0, p && (n[u] = p)), e.result
                }
            },
            simulate: function(t, n, o) {
                var a = $e.extend(new $e.Event, o, {
                    type: t,
                    isSimulated: !0
                });
                $e.event.trigger(a, null, n)
            }
        }), $e.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    $e.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return $e.event.trigger(e, t, n, !0)
            }
        }), Se.focusin || $e.each({
            focus: 'focusin',
            blur: 'focusout'
        }, function(e, t) {
            var n = function(e) {
                $e.event.simulate(t, e.target, $e.event.fix(e))
            };
            $e.event.special[t] = {
                setup: function() {
                    var o = this.ownerDocument || this.document || this,
                        a = Ye.access(o, t);
                    a || o.addEventListener(e, n, !0), Ye.access(o, t, (a || 0) + 1)
                },
                teardown: function() {
                    var o = this.ownerDocument || this.document || this,
                        a = Ye.access(o, t) - 1;
                    a ? Ye.access(o, t, a) : (o.removeEventListener(e, n, !0), Ye.remove(o, t))
                }
            }
        });
        var Ht = r.location,
            Rt = {
                guid: Date.now()
            },
            Bt = /\?/;
        $e.parseXML = function(e) {
            var t, n;
            if (!e || 'string' != typeof e) return null;
            try {
                t = new r.DOMParser().parseFromString(e, 'text/xml')
            } catch (t) {}
            return n = t && t.getElementsByTagName('parsererror')[0], (!t || n) && $e.error('Invalid XML: ' + (n ? $e.map(n.childNodes, function(e) {
                return e.textContent
            }).join('\n') : e)), t
        };
        var Ft = /\[\]$/,
            Ut = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset|file)$/i,
            Wt = /^(?:input|select|textarea|keygen)/i;
        $e.param = function(e, t) {
            var n = [],
                o = function(e, t) {
                    var o = ke(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == o ? '' : o)
                },
                a;
            if (null == e) return '';
            if (Array.isArray(e) || e.jquery && !$e.isPlainObject(e)) $e.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (a in e) re(a, e[a], t, o);
            return n.join('&')
        }, $e.fn.extend({
            serialize: function() {
                return $e.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = $e.prop(this, 'elements');
                    return e ? $e.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !$e(this).is(':disabled') && Wt.test(this.nodeName) && !Mt.test(e) && (this.checked || !rt.test(e))
                }).map(function(e, t) {
                    var n = $e(this).val();
                    return null == n ? null : Array.isArray(n) ? $e.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ut, '\r\n')
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ut, '\r\n')
                    }
                }).get()
            }
        });
        var zt = /%20/g,
            Vt = /#.*$/,
            Xt = /([?&])_=[^&]*/,
            Gt = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Qt = /^(?:GET|HEAD)$/,
            Kt = /^\/\//,
            Jt = {},
            Zt = {},
            en = '*/'.concat('*'),
            tn = De.createElement('a');
        tn.href = Ht.href, $e.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ht.href,
                type: 'GET',
                isLocal: Yt.test(Ht.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    "*": en,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript'
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON'
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": $e.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? pe(pe(e, $e.ajaxSettings), t) : pe($e.ajaxSettings, e)
            },
            ajaxPrefilter: de(Jt),
            ajaxTransport: de(Zt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var c = t,
                        u, f, b, v, C;
                    T || (T = !0, x && r.clearTimeout(x), h = void 0, y = i || '', g.readyState = 0 < e ? 4 : 0, u = 200 <= e && 300 > e || 304 === e, n && (v = ce(o, g, n)), !u && -1 < $e.inArray('script', o.dataTypes) && 0 > $e.inArray('json', o.dataTypes) && (o.converters['text script'] = function() {}), v = ue(o, v, g, u), u ? (o.ifModified && (C = g.getResponseHeader('Last-Modified'), C && ($e.lastModified[m] = C), C = g.getResponseHeader('etag'), C && ($e.etag[m] = C)), 204 === e || 'HEAD' === o.type ? c = 'nocontent' : 304 === e ? c = 'notmodified' : (c = v.state, f = v.data, b = v.error, u = !b)) : (b = c, (e || !c) && (c = 'error', 0 > e && (e = 0))), g.status = e, g.statusText = (t || c) + '', u ? d.resolveWith(a, [f, c, g]) : d.rejectWith(a, [g, c, b]), g.statusCode(p), p = void 0, w && s.trigger(u ? 'ajaxSuccess' : 'ajaxError', [g, o, u ? f : b]), l.fireWith(a, [g, c]), w && (s.trigger('ajaxComplete', [g, o]), !--$e.active && $e.event.trigger('ajaxStop')))
                }
                'object' == typeof e && (t = e, e = void 0), t = t || {};
                var o = $e.ajaxSetup({}, t),
                    a = o.context || o,
                    s = o.context && (a.nodeType || a.jquery) ? $e(a) : $e.event,
                    d = $e.Deferred(),
                    l = $e.Callbacks('once memory'),
                    p = o.statusCode || {},
                    c = {},
                    u = {},
                    f = 'canceled',
                    g = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (T) {
                                if (!b)
                                    for (b = {}; t = Gt.exec(y);) b[t[1].toLowerCase() + ' '] = (b[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                                t = b[e.toLowerCase() + ' ']
                            }
                            return null == t ? null : t.join(', ')
                        },
                        getAllResponseHeaders: function() {
                            return T ? y : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == T && (e = u[e.toLowerCase()] = u[e.toLowerCase()] || e, c[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == T && (o.mimeType = e), this
                        },
                        statusCode: function(e) {
                            if (e)
                                if (T) g.always(e[g.status]);
                                else
                                    for (var t in e) p[t] = [p[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || f;
                            return h && h.abort(t), n(0, t), this
                        }
                    },
                    h, m, y, b, x, v, T, w, C, i;
                if (d.promise(g), o.url = ((e || o.url || Ht.href) + '').replace(Kt, Ht.protocol + '//'), o.type = t.method || t.type || o.method || o.type, o.dataTypes = (o.dataType || '*').toLowerCase().match(Ue) || [''], null == o.crossDomain) {
                    v = De.createElement('a');
                    try {
                        v.href = o.url, v.href = v.href, o.crossDomain = tn.protocol + '//' + tn.host != v.protocol + '//' + v.host
                    } catch (t) {
                        o.crossDomain = !0
                    }
                }
                if (o.data && o.processData && 'string' != typeof o.data && (o.data = $e.param(o.data, o.traditional)), le(Jt, o, t, g), T) return g;
                for (C in w = $e.event && o.global, w && 0 == $e.active++ && $e.event.trigger('ajaxStart'), o.type = o.type.toUpperCase(), o.hasContent = !Qt.test(o.type), m = o.url.replace(Vt, ''), o.hasContent ? o.data && o.processData && 0 === (o.contentType || '').indexOf('application/x-www-form-urlencoded') && (o.data = o.data.replace(zt, '+')) : (i = o.url.slice(m.length), o.data && (o.processData || 'string' == typeof o.data) && (m += (Bt.test(m) ? '&' : '?') + o.data, delete o.data), !1 === o.cache && (m = m.replace(Xt, '$1'), i = (Bt.test(m) ? '&' : '?') + '_=' + Rt.guid++ + i), o.url = m + i), o.ifModified && ($e.lastModified[m] && g.setRequestHeader('If-Modified-Since', $e.lastModified[m]), $e.etag[m] && g.setRequestHeader('If-None-Match', $e.etag[m])), (o.data && o.hasContent && !1 !== o.contentType || t.contentType) && g.setRequestHeader('Content-Type', o.contentType), g.setRequestHeader('Accept', o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ('*' === o.dataTypes[0] ? '' : ', ' + en + '; q=0.01') : o.accepts['*']), o.headers) g.setRequestHeader(C, o.headers[C]);
                if (o.beforeSend && (!1 === o.beforeSend.call(a, g, o) || T)) return g.abort();
                if (f = 'abort', l.add(o.complete), g.done(o.success), g.fail(o.error), h = le(Zt, o, t, g), !h) n(-1, 'No Transport');
                else {
                    if (g.readyState = 1, w && s.trigger('ajaxSend', [g, o]), T) return g;
                    o.async && 0 < o.timeout && (x = r.setTimeout(function() {
                        g.abort('timeout')
                    }, o.timeout));
                    try {
                        T = !1, h.send(c, n)
                    } catch (t) {
                        if (T) throw t;
                        n(-1, t)
                    }
                }
                return g
            },
            getJSON: function(e, t, n) {
                return $e.get(e, t, n, 'json')
            },
            getScript: function(e, t) {
                return $e.get(e, void 0, t, 'script')
            }
        }), $e.each(['get', 'post'], function(e, t) {
            $e[t] = function(e, n, o, a) {
                return ke(n) && (a = a || o, o = n, n = void 0), $e.ajax($e.extend({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: o
                }, $e.isPlainObject(e) && e))
            }
        }), $e.ajaxPrefilter(function(e) {
            for (var t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '')
        }), $e._evalUrl = function(e, t, n) {
            return $e.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    $e.globalEval(e, t, n)
                }
            })
        }, $e.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (ke(e) && (e = e.call(this[0])), t = $e(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return ke(e) ? this.each(function(t) {
                    $e(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = $e(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ke(e);
                return this.each(function(n) {
                    $e(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not('body').each(function() {
                    $e(this).replaceWith(this.childNodes)
                }), this
            }
        }), $e.expr.pseudos.hidden = function(e) {
            return !$e.expr.pseudos.visible(e)
        }, $e.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, $e.ajaxSettings.xhr = function() {
            try {
                return new r.XMLHttpRequest
            } catch (t) {}
        };
        var nn = {
                0: 200,
                1223: 204
            },
            on = $e.ajaxSettings.xhr();
        Se.cors = !!on && 'withCredentials' in on, Se.ajax = on = !!on, $e.ajaxTransport(function(e) {
            var t, n;
            if (Se.cors || on && !e.crossDomain) return {
                send: function(o, a) {
                    var s = e.xhr(),
                        d;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (d in e.xhrFields) s[d] = e.xhrFields[d];
                    for (d in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'), o) s.setRequestHeader(d, o[d]);
                    t = function(e) {
                        return function() {
                            t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' == typeof s.status ? a(s.status, s.statusText) : a(0, 'error') : a(nn[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), n = s.onerror = s.ontimeout = t('error'), void 0 === s.onabort ? s.onreadystatechange = function() {
                        4 === s.readyState && r.setTimeout(function() {
                            t && n()
                        })
                    } : s.onabort = n, t = t('abort');
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (n) {
                        if (t) throw n
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), $e.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), $e.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return $e.globalEval(e), e
                }
            }
        }), $e.ajaxPrefilter('script', function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
        }), $e.ajaxTransport('script', function(e) {
            if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                    send: function(o, a) {
                        t = $e('<script>').attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on('load error', n = function(e) {
                            t.remove(), n = null, e && a('error' === e.type ? 404 : 200, e.type)
                        }), De.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var an = [],
            sn = /(=)\?(?=&|$)|\?\?/;
        $e.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function() {
                var e = an.pop() || $e.expando + '_' + Rt.guid++;
                return this[e] = !0, e
            }
        }), $e.ajaxPrefilter('json jsonp', function(e, t, n) {
            var o = !1 !== e.jsonp && (sn.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && sn.test(e.data) && 'data'),
                a, i, s;
            if (o || 'jsonp' === e.dataTypes[0]) return a = e.jsonpCallback = ke(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(sn, '$1' + a) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? '&' : '?') + e.jsonp + '=' + a), e.converters['script json'] = function() {
                return s || $e.error(a + ' was not called'), s[0]
            }, e.dataTypes[0] = 'json', i = r[a], r[a] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === i ? $e(r).removeProp(a) : r[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, an.push(a)), s && ke(i) && i(s[0]), s = i = void 0
            }), 'script'
        }), Se.createHTMLDocument = function() {
            var e = De.implementation.createHTMLDocument('').body;
            return e.innerHTML = '<form></form><form></form>', 2 === e.childNodes.length
        }(), $e.parseHTML = function(e, t, n) {
            if ('string' != typeof e) return [];
            'boolean' == typeof t && (n = t, t = !1);
            var o, a, i;
            return (t || (Se.createHTMLDocument ? (t = De.implementation.createHTMLDocument(''), o = t.createElement('base'), o.href = De.location.href, t.head.appendChild(o)) : t = De), a = Pe.exec(e), i = !n && [], a) ? [t.createElement(a[1])] : (a = N([e], t, i), i && i.length && $e(i).remove(), $e.merge([], a.childNodes))
        }, $e.fn.load = function(e, t, n) {
            var o = this,
                a = e.indexOf(' '),
                i, s, r;
            return -1 < a && (i = ae(e.slice(a)), e = e.slice(0, a)), ke(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (s = 'POST'), 0 < o.length && $e.ajax({
                url: e,
                type: s || 'GET',
                dataType: 'html',
                data: t
            }).done(function(e) {
                r = arguments, o.html(i ? $e('<div>').append($e.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, $e.expr.pseudos.animated = function(e) {
            return $e.grep($e.timers, function(t) {
                return e === t.elem
            }).length
        }, $e.offset = {
            setOffset: function(e, t, n) {
                var o = $e.css(e, 'position'),
                    a = $e(e),
                    i = {},
                    s, r, d, l, p, c, u;
                'static' === o && (e.style.position = 'relative'), p = a.offset(), d = $e.css(e, 'top'), c = $e.css(e, 'left'), u = ('absolute' === o || 'fixed' === o) && -1 < (d + c).indexOf('auto'), u ? (s = a.position(), l = s.top, r = s.left) : (l = parseFloat(d) || 0, r = parseFloat(c) || 0), ke(t) && (t = t.call(e, n, $e.extend({}, p))), null != t.top && (i.top = t.top - p.top + l), null != t.left && (i.left = t.left - p.left + r), 'using' in t ? t.using.call(e, i) : a.css(i)
            }
        }, $e.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    $e.offset.setOffset(this, e, t)
                });
                var t = this[0],
                    n, o;
                if (t) return t.getClientRects().length ? (n = t.getBoundingClientRect(), o = t.ownerDocument.defaultView, {
                    top: n.top + o.pageYOffset,
                    left: n.left + o.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e = this[0],
                        t = {
                            top: 0,
                            left: 0
                        },
                        n, o, a;
                    if ('fixed' === $e.css(e, 'position')) o = e.getBoundingClientRect();
                    else {
                        for (o = this.offset(), a = e.ownerDocument, n = e.offsetParent || a.documentElement; n && (n === a.body || n === a.documentElement) && 'static' === $e.css(n, 'position');) n = n.parentNode;
                        n && n !== e && 1 === n.nodeType && (t = $e(n).offset(), t.top += $e.css(n, 'borderTopWidth', !0), t.left += $e.css(n, 'borderLeftWidth', !0))
                    }
                    return {
                        top: o.top - t.top - $e.css(e, 'marginTop', !0),
                        left: o.left - t.left - $e.css(e, 'marginLeft', !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && 'static' === $e.css(e, 'position');) e = e.offsetParent;
                    return e || nt
                })
            }
        }), $e.each({
            scrollLeft: 'pageXOffset',
            scrollTop: 'pageYOffset'
        }, function(e, t) {
            var n = 'pageYOffset' === t;
            $e.fn[e] = function(o) {
                return ze(this, function(e, o, a) {
                    var i;
                    return Ae(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === a ? i ? i[t] : e[o] : void(i ? i.scrollTo(n ? i.pageXOffset : a, n ? a : i.pageYOffset) : e[o] = a)
                }, e, o, arguments.length)
            }
        }), $e.each(['top', 'left'], function(e, t) {
            $e.cssHooks[t] = W(Se.pixelPosition, function(e, n) {
                if (n) return n = M(e, t), mt.test(n) ? $e(e).position()[t] + 'px' : n
            })
        }), $e.each({
            Height: 'height',
            Width: 'width'
        }, function(e, t) {
            $e.each({
                padding: 'inner' + e,
                content: t,
                "": 'outer' + e
            }, function(o, a) {
                $e.fn[a] = function(i, s) {
                    var r = arguments.length && (o || 'boolean' != typeof i),
                        d = o || (!0 === i || !0 === s ? 'margin' : 'border');
                    return ze(this, function(t, o, i) {
                        var s;
                        return Ae(t) ? 0 === a.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (s = t.documentElement, n(t.body['scroll' + e], s['scroll' + e], t.body['offset' + e], s['offset' + e], s['client' + e])) : void 0 === i ? $e.css(t, o, d) : $e.style(t, o, i, d)
                    }, t, r ? i : void 0, r)
                }
            })
        }), $e.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
            $e.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), $e.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, o) {
                return this.on(t, e, n, o)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), $e.each(['blur', 'focus', 'focusin', 'focusout', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu'], function(e, t) {
            $e.fn[t] = function(e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        $e.proxy = function(e, t) {
            var n, o, a;
            if ('string' == typeof t && (n = e[t], t = e, e = n), !!ke(e)) return o = me.call(arguments, 2), a = function() {
                return e.apply(t || this, o.concat(me.call(arguments)))
            }, a.guid = e.guid = e.guid || $e.guid++, a
        }, $e.holdReady = function(e) {
            e ? $e.readyWait++ : $e.ready(!0)
        }, $e.isArray = Array.isArray, $e.parseJSON = JSON.parse, $e.nodeName = c, $e.isFunction = ke, $e.isWindow = Ae, $e.camelCase = v, $e.type = p, $e.now = Date.now, $e.isNumeric = function(e) {
            var t = $e.type(e);
            return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
        }, $e.trim = function(e) {
            return null == e ? '' : (e + '').replace(rn, '')
        }, a = [], i = function() {
            return $e
        }.apply(t, a), !(void 0 !== i && (e.exports = i));
        var dn = r.jQuery,
            ln = r.$;
        return $e.noConflict = function(e) {
            return r.$ === $e && (r.$ = ln), e && r.jQuery === $e && (r.jQuery = dn), $e
        }, 'undefined' == typeof s && (r.jQuery = r.$ = $e), $e
    })
}, function(e, t, n) {
    n(7), n(8), n(9), n(10), n(11), n(12), n(13), n(14), n(15), n(16), n(17), n(18)
}, function() {
    + function(t) {
        'use strict';

        function e() {
            var e = document.createElement('bootstrap'),
                t = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };
            for (var n in t)
                if (e.style[n] !== void 0) return {
                    end: t[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                o = this;
            t(this).one('bsTransitionEnd', function() {
                n = !0
            });
            var a = function() {
                n || t(o).trigger(t.support.transition.end)
            };
            return setTimeout(a, e), this
        }, t(function() {
            t.support.transition = e();
            t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(n) {
                    if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';
        var e = '[data-dismiss="alert"]',
            n = function(n) {
                t(n).on('click', e, this.close)
            };
        n.VERSION = '3.4.1', n.TRANSITION_DURATION = 150, n.prototype.close = function(o) {
            function e() {
                s.detach().trigger('closed.bs.alert').remove()
            }
            var a = t(this),
                i = a.attr('data-target');
            i || (i = a.attr('href'), i = i && i.replace(/.*(?=#[^\s]*$)/, '')), i = '#' === i ? [] : i;
            var s = t(document).find(i);
            o && o.preventDefault(), s.length || (s = a.closest('.alert')), s.trigger(o = t.Event('close.bs.alert'));
            o.isDefaultPrevented() || (s.removeClass('in'), t.support.transition && s.hasClass('fade') ? s.one('bsTransitionEnd', e).emulateTransitionEnd(n.TRANSITION_DURATION) : e())
        };
        var o = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.alert');
                a || o.data('bs.alert', a = new n(this)), 'string' == typeof e && a[e].call(o)
            })
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = o, this
        }, t(document).on('click.bs.alert.data-api', e, n.prototype.close)
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function n(n) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.button');
                a || o.data('bs.button', a = new e(this, 'object' == typeof n && n)), 'toggle' == n ? a.toggle() : n && a.setState(n)
            })
        }
        var e = function(n, o) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, o), this.isLoading = !1
        };
        e.VERSION = '3.4.1', e.DEFAULTS = {
            loadingText: 'loading...'
        }, e.prototype.setState = function(e) {
            var n = 'disabled',
                o = this.$element,
                a = o.is('input') ? 'val' : 'html',
                i = o.data();
            e += 'Text', null == i.resetText && o.data('resetText', o[a]()), setTimeout(t.proxy(function() {
                o[a](null == i[e] ? this.options[e] : i[e]), 'loadingText' == e ? (this.isLoading = !0, o.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }, e.prototype.toggle = function() {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find('input');
                'radio' == n.prop('type') ? (n.prop('checked') && (e = !1), t.find('.active').removeClass('active'), this.$element.addClass('active')) : 'checkbox' == n.prop('type') && (n.prop('checked') !== this.$element.hasClass('active') && (e = !1), this.$element.toggleClass('active')), n.prop('checked', this.$element.hasClass('active')), e && n.trigger('change')
            } else this.$element.attr('aria-pressed', !this.$element.hasClass('active')), this.$element.toggleClass('active')
        };
        var o = t.fn.button;
        t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
            return t.fn.button = o, this
        }, t(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function(o) {
            var e = t(o.target).closest('.btn');
            n.call(e, 'toggle'), t(o.target).is('input[type="radio"], input[type="checkbox"]') || (o.preventDefault(), e.is('input,button') ? e.trigger('focus') : e.find('input:visible,button:visible').first().trigger('focus'))
        }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function(n) {
            t(n.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(n.type))
        })
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function n(n) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.carousel'),
                    i = t.extend({}, e.DEFAULTS, o.data(), 'object' == typeof n && n),
                    s = 'string' == typeof n ? n : i.slide;
                a || o.data('bs.carousel', a = new e(this, i)), 'number' == typeof n ? a.to(n) : s ? a[s]() : i.interval && a.pause().cycle()
            })
        }
        var e = function(e, n) {
            this.$element = t(e), this.$indicators = this.$element.find('.carousel-indicators'), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on('keydown.bs.carousel', t.proxy(this.keydown, this)), 'hover' != this.options.pause || 'ontouchstart' in document.documentElement || this.$element.on('mouseenter.bs.carousel', t.proxy(this.pause, this)).on('mouseleave.bs.carousel', t.proxy(this.cycle, this))
        };
        e.VERSION = '3.4.1', e.TRANSITION_DURATION = 600, e.DEFAULTS = {
            interval: 5e3,
            pause: 'hover',
            wrap: !0,
            keyboard: !0
        }, e.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return;
                }
                t.preventDefault()
            }
        }, e.prototype.cycle = function(n) {
            return n || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, e.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children('.item'), this.$items.index(e || this.$active)
        }, e.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t),
                o = 'prev' == e && 0 === n || 'next' == e && n == this.$items.length - 1;
            if (o && !this.options.wrap) return t;
            var a = 'prev' == e ? -1 : 1,
                i = (n + a) % this.$items.length;
            return this.$items.eq(i)
        }, e.prototype.to = function(e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find('.item.active'));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one('slid.bs.carousel', function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? 'next' : 'prev', this.$items.eq(e))
        }, e.prototype.pause = function(n) {
            return n || (this.paused = !0), this.$element.find('.next, .prev').length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, e.prototype.next = function() {
            return this.sliding ? void 0 : this.slide('next')
        }, e.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide('prev')
        }, e.prototype.slide = function(n, o) {
            var a = this.$element.find('.item.active'),
                i = o || this.getItemForDirection(n, a),
                s = this.interval,
                r = 'next' == n ? 'left' : 'right',
                d = this;
            if (i.hasClass('active')) return this.sliding = !1;
            var l = i[0],
                p = t.Event('slide.bs.carousel', {
                    relatedTarget: l,
                    direction: r
                });
            if (this.$element.trigger(p), !p.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find('.active').removeClass('active');
                    var c = t(this.$indicators.children()[this.getItemIndex(i)]);
                    c && c.addClass('active')
                }
                var u = t.Event('slid.bs.carousel', {
                    relatedTarget: l,
                    direction: r
                });
                return t.support.transition && this.$element.hasClass('slide') ? (i.addClass(n), 'object' == typeof i && i.length && i[0].offsetWidth, a.addClass(r), i.addClass(r), a.one('bsTransitionEnd', function() {
                    i.removeClass([n, r].join(' ')).addClass('active'), a.removeClass(['active', r].join(' ')), d.sliding = !1, setTimeout(function() {
                        d.$element.trigger(u)
                    }, 0)
                }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (a.removeClass('active'), i.addClass('active'), this.sliding = !1, this.$element.trigger(u)), s && this.cycle(), this
            }
        };
        var o = t.fn.carousel;
        t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = o, this
        };
        var a = function(o) {
            var e = t(this),
                a = e.attr('href');
            a && (a = a.replace(/.*(?=#[^\s]+$)/, ''));
            var i = e.attr('data-target') || a,
                s = t(document).find(i);
            if (s.hasClass('carousel')) {
                var r = t.extend({}, s.data(), e.data()),
                    d = e.attr('data-slide-to');
                d && (r.interval = !1), n.call(s, r), d && s.data('bs.carousel').to(d), o.preventDefault()
            }
        };
        t(document).on('click.bs.carousel.data-api', '[data-slide]', a).on('click.bs.carousel.data-api', '[data-slide-to]', a), t(window).on('load', function() {
            t('[data-ride="carousel"]').each(function() {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function n(e) {
            var n = e.attr('data-target') || (o = e.attr('href')) && o.replace(/.*(?=#[^\s]+$)/, ''),
                o;
            return t(document).find(n)
        }

        function o(n) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.collapse'),
                    i = t.extend({}, e.DEFAULTS, o.data(), 'object' == typeof n && n);
                !a && i.toggle && /show|hide/.test(n) && (i.toggle = !1), a || o.data('bs.collapse', a = new e(this, i)), 'string' == typeof n && a[n]()
            })
        }
        var e = function(n, o) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, o), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        e.VERSION = '3.4.1', e.TRANSITION_DURATION = 350, e.DEFAULTS = {
            toggle: !0
        }, e.prototype.dimension = function() {
            var e = this.$element.hasClass('width');
            return e ? 'width' : 'height'
        }, e.prototype.show = function() {
            if (!(this.transitioning || this.$element.hasClass('in'))) {
                var n = this.$parent && this.$parent.children('.panel').children('.in, .collapsing'),
                    a;
                if (!(n && n.length && (a = n.data('bs.collapse'), a && a.transitioning))) {
                    var i = t.Event('show.bs.collapse');
                    if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                        n && n.length && (o.call(n, 'hide'), a || n.data('bs.collapse', null));
                        var s = this.dimension();
                        this.$element.removeClass('collapse').addClass('collapsing')[s](0).attr('aria-expanded', !0), this.$trigger.removeClass('collapsed').attr('aria-expanded', !0), this.transitioning = 1;
                        var r = function() {
                            this.$element.removeClass('collapsing').addClass('collapse in')[s](''), this.transitioning = 0, this.$element.trigger('shown.bs.collapse')
                        };
                        if (!t.support.transition) return r.call(this);
                        var d = t.camelCase(['scroll', s].join('-'));
                        this.$element.one('bsTransitionEnd', t.proxy(r, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][d])
                    }
                }
            }
        }, e.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass('in')) {
                var n = t.Event('hide.bs.collapse');
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    var o = this.dimension();
                    this.$element[o](this.$element[o]())[0].offsetHeight, this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1), this.$trigger.addClass('collapsed').attr('aria-expanded', !1), this.transitioning = 1;
                    var a = function() {
                        this.transitioning = 0, this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
                    };
                    return t.support.transition ? void this.$element[o](0).one('bsTransitionEnd', t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : a.call(this)
                }
            }
        }, e.prototype.toggle = function() {
            this[this.$element.hasClass('in') ? 'hide' : 'show']()
        }, e.prototype.getParent = function() {
            return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, o) {
                var a = t(o);
                this.addAriaAndCollapsedClass(n(a), a)
            }, this)).end()
        }, e.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass('in');
            e.attr('aria-expanded', n), t.toggleClass('collapsed', !n).attr('aria-expanded', n)
        };
        var a = t.fn.collapse;
        t.fn.collapse = o, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = a, this
        }, t(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(a) {
            var e = t(this);
            e.attr('data-target') || a.preventDefault();
            var i = n(e),
                s = i.data('bs.collapse'),
                r = s ? 'toggle' : e.data();
            o.call(i, r)
        })
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function n(e) {
            var n = e.attr('data-target');
            n || (n = e.attr('href'), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ''));
            var o = '#' === n ? null : t(document).find(n);
            return o && o.length ? o : e.parent()
        }

        function o(o) {
            o && 3 === o.which || (t(a).remove(), t(i).each(function() {
                var e = t(this),
                    a = n(e),
                    i = {
                        relatedTarget: this
                    };
                a.hasClass('open') && (o && 'click' == o.type && /input|textarea/i.test(o.target.tagName) && t.contains(a[0], o.target) || (a.trigger(o = t.Event('hide.bs.dropdown', i)), o.isDefaultPrevented() || (e.attr('aria-expanded', 'false'), a.removeClass('open').trigger(t.Event('hidden.bs.dropdown', i)))))
            }))
        }
        var a = '.dropdown-backdrop',
            i = '[data-toggle="dropdown"]',
            e = function(e) {
                t(e).on('click.bs.dropdown', this.toggle)
            };
        e.VERSION = '3.4.1', e.prototype.toggle = function(a) {
            var e = t(this);
            if (!e.is('.disabled, :disabled')) {
                var i = n(e),
                    s = i.hasClass('open');
                if (o(), !s) {
                    'ontouchstart' in document.documentElement && !i.closest('.navbar-nav').length && t(document.createElement('div')).addClass('dropdown-backdrop').insertAfter(t(this)).on('click', o);
                    var r = {
                        relatedTarget: this
                    };
                    if (i.trigger(a = t.Event('show.bs.dropdown', r)), a.isDefaultPrevented()) return;
                    e.trigger('focus').attr('aria-expanded', 'true'), i.toggleClass('open').trigger(t.Event('shown.bs.dropdown', r))
                }
                return !1
            }
        }, e.prototype.keydown = function(o) {
            if (/(38|40|27|32)/.test(o.which) && !/input|textarea/i.test(o.target.tagName)) {
                var e = t(this);
                if (o.preventDefault(), o.stopPropagation(), !e.is('.disabled, :disabled')) {
                    var a = n(e),
                        s = a.hasClass('open');
                    if (!s && 27 != o.which || s && 27 == o.which) return 27 == o.which && a.find(i).trigger('focus'), e.trigger('click');
                    var r = a.find('.dropdown-menu' + ' li:not(.disabled):visible a');
                    if (r.length) {
                        var d = r.index(o.target);
                        38 == o.which && 0 < d && d--, 40 == o.which && d < r.length - 1 && d++, ~d || (d = 0), r.eq(d).trigger('focus')
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function(n) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.dropdown');
                a || o.data('bs.dropdown', a = new e(this)), 'string' == typeof n && a[n].call(o)
            })
        }, t.fn.dropdown.Constructor = e, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = s, this
        }, t(document).on('click.bs.dropdown.data-api', o).on('click.bs.dropdown.data-api', '.dropdown form', function(t) {
            t.stopPropagation()
        }).on('click.bs.dropdown.data-api', i, e.prototype.toggle).on('keydown.bs.dropdown.data-api', i, e.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', e.prototype.keydown)
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function n(e, n) {
            return this.each(function() {
                var a = t(this),
                    i = a.data('bs.modal'),
                    s = t.extend({}, o.DEFAULTS, a.data(), 'object' == typeof e && e);
                i || a.data('bs.modal', i = new o(this, s)), 'string' == typeof e ? i[e](n) : s.show && i.show(n)
            })
        }
        var o = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find('.modal-dialog'), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = '.navbar-fixed-top, .navbar-fixed-bottom', this.options.remote && this.$element.find('.modal-content').load(this.options.remote, t.proxy(function() {
                this.$element.trigger('loaded.bs.modal')
            }, this))
        };
        o.VERSION = '3.4.1', o.TRANSITION_DURATION = 300, o.BACKDROP_TRANSITION_DURATION = 150, o.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, o.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, o.prototype.show = function(n) {
            var a = this,
                i = t.Event('show.bs.modal', {
                    relatedTarget: n
                });
            this.$element.trigger(i);
            this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass('modal-open'), this.escape(), this.resize(), this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on('mousedown.dismiss.bs.modal', function() {
                a.$element.one('mouseup.dismiss.bs.modal', function(n) {
                    t(n.target).is(a.$element) && (a.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var i = t.support.transition && a.$element.hasClass('fade');
                a.$element.parent().length || a.$element.appendTo(a.$body), a.$element.show().scrollTop(0), a.adjustDialog(), i && a.$element[0].offsetWidth, a.$element.addClass('in'), a.enforceFocus();
                var s = t.Event('shown.bs.modal', {
                    relatedTarget: n
                });
                i ? a.$dialog.one('bsTransitionEnd', function() {
                    a.$element.trigger('focus').trigger(s)
                }).emulateTransitionEnd(o.TRANSITION_DURATION) : a.$element.trigger('focus').trigger(s)
            }))
        }, o.prototype.hide = function(n) {
            n && n.preventDefault(), n = t.Event('hide.bs.modal'), this.$element.trigger(n);
            !this.isShown || n.isDefaultPrevented() || (this.isShown = !1, this.escape(), this.resize(), t(document).off('focusin.bs.modal'), this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal'), this.$dialog.off('mousedown.dismiss.bs.modal'), t.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', t.proxy(this.hideModal, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : this.hideModal())
        }, o.prototype.enforceFocus = function() {
            t(document).off('focusin.bs.modal').on('focusin.bs.modal', t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger('focus')
            }, this))
        }, o.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on('keydown.dismiss.bs.modal', t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : !this.isShown && this.$element.off('keydown.dismiss.bs.modal')
        }, o.prototype.resize = function() {
            this.isShown ? t(window).on('resize.bs.modal', t.proxy(this.handleUpdate, this)) : t(window).off('resize.bs.modal')
        }, o.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass('modal-open'), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger('hidden.bs.modal')
            })
        }, o.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, o.prototype.backdrop = function(e) {
            var n = this,
                a = this.$element.hasClass('fade') ? 'fade' : '';
            if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && a;
                if (this.$backdrop = t(document.createElement('div')).addClass('modal-backdrop ' + a).appendTo(this.$body), this.$element.on('click.dismiss.bs.modal', t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target !== t.currentTarget || ('static' == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), !e) return;
                i ? this.$backdrop.one('bsTransitionEnd', e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in');
                var s = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', s).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : s()
            } else e && e()
        }, o.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, o.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : '',
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ''
            })
        }, o.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: '',
                paddingRight: ''
            })
        }, o.prototype.checkScrollbar = function() {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
        }, o.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css('padding-right') || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || '';
            var n = this.scrollbarWidth;
            this.bodyIsOverflowing && (this.$body.css('padding-right', e + n), t(this.fixedContent).each(function(e, o) {
                var a = o.style.paddingRight,
                    i = t(o).css('padding-right');
                t(o).data('padding-right', a).css('padding-right', parseFloat(i) + n + 'px')
            }))
        }, o.prototype.resetScrollbar = function() {
            this.$body.css('padding-right', this.originalBodyPad), t(this.fixedContent).each(function(e, n) {
                var o = t(n).data('padding-right');
                t(n).removeData('padding-right'), n.style.paddingRight = o ? o : ''
            })
        }, o.prototype.measureScrollbar = function() {
            var e = document.createElement('div');
            e.className = 'modal-scrollbar-measure', this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var e = t.fn.modal;
        t.fn.modal = n, t.fn.modal.Constructor = o, t.fn.modal.noConflict = function() {
            return t.fn.modal = e, this
        }, t(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(o) {
            var e = t(this),
                a = e.attr('href'),
                i = e.attr('data-target') || a && a.replace(/.*(?=#[^\s]+$)/, ''),
                s = t(document).find(i),
                r = s.data('bs.modal') ? 'toggle' : t.extend({
                    remote: !/#/.test(a) && a
                }, s.data(), e.data());
            e.is('a') && o.preventDefault(), s.one('show.bs.modal', function(t) {
                t.isDefaultPrevented() || s.one('hidden.bs.modal', function() {
                    e.is(':visible') && e.trigger('focus')
                })
            }), n.call(s, r, this)
        })
    }(jQuery)
}, function() {
    var e = Math.round; + function(t) {
        'use strict';

        function n(e, n) {
            var o = e.nodeName.toLowerCase();
            if (-1 !== t.inArray(o, n)) return -1 === t.inArray(o, s) || !!(e.nodeValue.match(r) || e.nodeValue.match(d));
            for (var a = t(n).filter(function(e, t) {
                    return t instanceof RegExp
                }), p = 0, i = a.length; p < i; p++)
                if (o.match(a[p])) return !0;
            return !1
        }

        function o(e, o, a) {
            if (0 === e.length) return e;
            if (a && 'function' == typeof a) return a(e);
            if (!document.implementation || !document.implementation.createHTMLDocument) return e;
            var s = document.implementation.createHTMLDocument('sanitization');
            s.body.innerHTML = e;
            for (var r = t.map(o, function(e, t) {
                    return t
                }), d = t(s.body).find('*'), l = 0, i = d.length; l < i; l++) {
                var p = d[l],
                    c = p.nodeName.toLowerCase();
                if (-1 === t.inArray(c, r)) {
                    p.parentNode.removeChild(p);
                    continue
                }
                for (var u = t.map(p.attributes, function(e) {
                        return e
                    }), f = [].concat(o['*'] || [], o[c] || []), g = 0, h = u.length; g < h; g++) n(u[g], f) || p.removeAttribute(u[g].nodeName)
            }
            return s.body.innerHTML
        }
        var a = ['sanitize', 'whiteList', 'sanitizeFn'],
            s = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
            i = /^aria-[\w-]*$/i,
            r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            d = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
            l = function(e, t) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init('tooltip', e, t)
            };
        l.VERSION = '3.4.1', l.TRANSITION_DURATION = 150, l.DEFAULTS = {
            animation: !0,
            placement: 'top',
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: 'body',
                padding: 0
            },
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ['class', 'dir', 'id', 'lang', 'role', i],
                a: ['target', 'href', 'title', 'rel'],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ['src', 'alt', 'title', 'width', 'height'],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        }, l.prototype.init = function(e, n, o) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
            for (var a = this.options.trigger.split(' '), s = a.length, i; s--;)
                if (i = a[s], 'click' == i) this.$element.on('click.' + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ('manual' != i) {
                var r = 'hover' == i ? 'mouseenter' : 'focusin',
                    d = 'hover' == i ? 'mouseleave' : 'focusout';
                this.$element.on(r + '.' + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(d + '.' + this.type, this.options.selector, t.proxy(this.leave, this))
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: 'manual',
                selector: ''
            }) : this.fixTitle()
        }, l.prototype.getDefaults = function() {
            return l.DEFAULTS
        }, l.prototype.getOptions = function(e) {
            var n = this.$element.data();
            for (var i in n) n.hasOwnProperty(i) && -1 !== t.inArray(i, a) && delete n[i];
            return e = t.extend({}, this.getDefaults(), n, e), e.delay && 'number' == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e.sanitize && (e.template = o(e.template, e.whiteList, e.sanitizeFn)), e
        }, l.prototype.getDelegateOptions = function() {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function(t, o) {
                n[t] != o && (e[t] = o)
            }), e
        }, l.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
            return (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data('bs.' + this.type, n)), e instanceof t.Event && (n.inState['focusin' == e.type ? 'focus' : 'hover'] = !0), n.tip().hasClass('in') || 'in' == n.hoverState) ? void(n.hoverState = 'in') : (clearTimeout(n.timeout), n.hoverState = 'in', n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                'in' == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, l.prototype.isInStateTrue = function() {
            for (var e in this.inState)
                if (this.inState[e]) return !0;
            return !1
        }, l.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data('bs.' + this.type, n)), e instanceof t.Event && (n.inState['focusout' == e.type ? 'focus' : 'hover'] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = 'out', n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                'out' == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
        }, l.prototype.show = function() {
            var n = t.Event('show.bs.' + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(n);
                var e = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (n.isDefaultPrevented() || !e) return;
                var o = this,
                    a = this.tip(),
                    i = this.getUID(this.type);
                this.setContent(), a.attr('id', i), this.$element.attr('aria-describedby', i), this.options.animation && a.addClass('fade');
                var s = 'function' == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                    r = /\s?auto?\s?/i,
                    d = r.test(s);
                d && (s = s.replace(r, '') || 'top'), a.detach().css({
                    top: 0,
                    left: 0,
                    display: 'block'
                }).addClass(s).data('bs.' + this.type, this), this.options.container ? a.appendTo(t(document).find(this.options.container)) : a.insertAfter(this.$element), this.$element.trigger('inserted.bs.' + this.type);
                var p = this.getPosition(),
                    c = a[0].offsetWidth,
                    u = a[0].offsetHeight;
                if (d) {
                    var f = s,
                        g = this.getPosition(this.$viewport);
                    s = 'bottom' == s && p.bottom + u > g.bottom ? 'top' : 'top' == s && p.top - u < g.top ? 'bottom' : 'right' == s && p.right + c > g.width ? 'left' : 'left' == s && p.left - c < g.left ? 'right' : s, a.removeClass(f).addClass(s)
                }
                var h = this.getCalculatedOffset(s, p, c, u);
                this.applyPlacement(h, s);
                var m = function() {
                    var e = o.hoverState;
                    o.$element.trigger('shown.bs.' + o.type), o.hoverState = null, 'out' == e && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass('fade') ? a.one('bsTransitionEnd', m).emulateTransitionEnd(l.TRANSITION_DURATION) : m()
            }
        }, l.prototype.applyPlacement = function(n, o) {
            var a = this.tip(),
                i = a[0].offsetWidth,
                s = a[0].offsetHeight,
                r = parseInt(a.css('margin-top'), 10),
                d = parseInt(a.css('margin-left'), 10);
            isNaN(r) && (r = 0), isNaN(d) && (d = 0), n.top += r, n.left += d, t.offset.setOffset(a[0], t.extend({
                using: function(t) {
                    a.css({
                        top: e(t.top),
                        left: e(t.left)
                    })
                }
            }, n), 0), a.addClass('in');
            var l = a[0].offsetWidth,
                p = a[0].offsetHeight;
            'top' == o && p != s && (n.top = n.top + s - p);
            var c = this.getViewportAdjustedDelta(o, n, l, p);
            c.left ? n.left += c.left : n.top += c.top;
            var u = /top|bottom/.test(o),
                f = u ? 2 * c.left - i + l : 2 * c.top - s + p,
                g = u ? 'offsetWidth' : 'offsetHeight';
            a.offset(n), this.replaceArrow(f, a[0][g], u)
        }, l.prototype.replaceArrow = function(e, t, n) {
            this.arrow().css(n ? 'left' : 'top', 50 * (1 - e / t) + '%').css(n ? 'top' : 'left', '')
        }, l.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle();
            this.options.html ? (this.options.sanitize && (t = o(t, this.options.whiteList, this.options.sanitizeFn)), e.find('.tooltip-inner').html(t)) : e.find('.tooltip-inner').text(t), e.removeClass('fade in top bottom left right')
        }, l.prototype.hide = function(n) {
            function o() {
                'in' != a.hoverState && i.detach(), a.$element && a.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + a.type), n && n()
            }
            var a = this,
                i = t(this.$tip),
                s = t.Event('hide.bs.' + this.type);
            if (this.$element.trigger(s), !s.isDefaultPrevented()) return i.removeClass('in'), t.support.transition && i.hasClass('fade') ? i.one('bsTransitionEnd', o).emulateTransitionEnd(l.TRANSITION_DURATION) : o(), this.hoverState = null, this
        }, l.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr('title') || 'string' != typeof e.attr('data-original-title')) && e.attr('data-original-title', e.attr('title') || '').attr('title', '')
        }, l.prototype.hasContent = function() {
            return this.getTitle()
        }, l.prototype.getPosition = function(e) {
            e = e || this.$element;
            var n = e[0],
                o = 'BODY' == n.tagName,
                a = n.getBoundingClientRect();
            null == a.width && (a = t.extend({}, a, {
                width: a.right - a.left,
                height: a.bottom - a.top
            }));
            var i = window.SVGElement && n instanceof window.SVGElement,
                s = o ? {
                    top: 0,
                    left: 0
                } : i ? null : e.offset(),
                r = {
                    scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                d = o ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, a, r, d, s)
        }, l.prototype.getCalculatedOffset = function(e, t, n, o) {
            return 'bottom' == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - n / 2
            } : 'top' == e ? {
                top: t.top - o,
                left: t.left + t.width / 2 - n / 2
            } : 'left' == e ? {
                top: t.top + t.height / 2 - o / 2,
                left: t.left - n
            } : {
                top: t.top + t.height / 2 - o / 2,
                left: t.left + t.width
            }
        }, l.prototype.getViewportAdjustedDelta = function(e, t, n, o) {
            var a = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return a;
            var i = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var r = t.top - i - s.scroll,
                    d = t.top + i - s.scroll + o;
                r < s.top ? a.top = s.top - r : d > s.top + s.height && (a.top = s.top + s.height - d)
            } else {
                var l = t.left - i,
                    p = t.left + i + n;
                l < s.left ? a.left = s.left - l : p > s.right && (a.left = s.left + s.width - p)
            }
            return a
        }, l.prototype.getTitle = function() {
            var e = this.$element,
                t = this.options,
                n;
            return n = e.attr('data-original-title') || ('function' == typeof t.title ? t.title.call(e[0]) : t.title), n
        }, l.prototype.getUID = function(e) {
            do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
            return e
        }, l.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
            return this.$tip
        }, l.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
        }, l.prototype.enable = function() {
            this.enabled = !0
        }, l.prototype.disable = function() {
            this.enabled = !1
        }, l.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, l.prototype.toggle = function(n) {
            var e = this;
            n && (e = t(n.currentTarget).data('bs.' + this.type), !e && (e = new this.constructor(n.currentTarget, this.getDelegateOptions()), t(n.currentTarget).data('bs.' + this.type, e))), n ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass('in') ? e.leave(e) : e.enter(e)
        }, l.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$element.off('.' + e.type).removeData('bs.' + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
            })
        }, l.prototype.sanitizeHtml = function(e) {
            return o(e, this.options.whiteList, this.options.sanitizeFn)
        };
        var p = t.fn.tooltip;
        t.fn.tooltip = function(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data('bs.tooltip');
                !o && /destroy|hide/.test(e) || (!o && n.data('bs.tooltip', o = new l(this, 'object' == typeof e && e)), 'string' == typeof e && o[e]())
            })
        }, t.fn.tooltip.Constructor = l, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = p, this
        }
    }(jQuery)
}, function() {
    + function(e) {
        'use strict';
        var t = function(e, t) {
            this.init('popover', e, t)
        };
        if (!e.fn.tooltip) throw new Error('Popover requires tooltip.js');
        t.VERSION = '3.4.1', t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
            return t.DEFAULTS
        }, t.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            if (this.options.html) {
                var o = typeof n;
                this.options.sanitize && (t = this.sanitizeHtml(t), 'string' == o && (n = this.sanitizeHtml(n))), e.find('.popover-title').html(t), e.find('.popover-content').children().detach().end()['string' == o ? 'html' : 'append'](n)
            } else e.find('.popover-title').text(t), e.find('.popover-content').children().detach().end().text(n);
            e.removeClass('fade top bottom left right in'), e.find('.popover-title').html() || e.find('.popover-title').hide()
        }, t.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, t.prototype.getContent = function() {
            var e = this.$element,
                t = this.options;
            return e.attr('data-content') || ('function' == typeof t.content ? t.content.call(e[0]) : t.content)
        }, t.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find('.arrow')
        };
        var n = e.fn.popover;
        e.fn.popover = function(n) {
            return this.each(function() {
                var o = e(this),
                    a = o.data('bs.popover');
                !a && /destroy|hide/.test(n) || (!a && o.data('bs.popover', a = new t(this, 'object' == typeof n && n)), 'string' == typeof n && a[n]())
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
            return e.fn.popover = n, this
        }
    }(jQuery)
}, function() {
    + function(e) {
        'use strict';

        function t(n, o) {
            this.$body = e(document.body), this.$scrollElement = e(n).is(document.body) ? e(window) : e(n), this.options = e.extend({}, t.DEFAULTS, o), this.selector = (this.options.target || '') + ' .nav li > a', this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on('scroll.bs.scrollspy', e.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function() {
                var o = e(this),
                    a = o.data('bs.scrollspy');
                a || o.data('bs.scrollspy', a = new t(this, 'object' == typeof n && n)), 'string' == typeof n && a[n]()
            })
        }
        t.VERSION = '3.4.1', t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function() {
            var t = this,
                n = 'offset',
                o = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = 'position', o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var t = e(this),
                    a = t.data('target') || t.attr('href'),
                    i = /^#./.test(a) && e(a);
                return i && i.length && i.is(':visible') && [
                    [i[n]().top + o, a]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e = this.$scrollElement.scrollTop() + this.options.offset,
                t = this.getScrollHeight(),
                n = this.options.offset + t - this.$scrollElement.height(),
                o = this.offsets,
                a = this.targets,
                s = this.activeTarget,
                r;
            if (this.scrollHeight != t && this.refresh(), e >= n) return s != (r = a[a.length - 1]) && this.activate(r);
            if (s && e < o[0]) return this.activeTarget = null, this.clear();
            for (r = o.length; r--;) s != a[r] && e >= o[r] && (void 0 === o[r + 1] || e < o[r + 1]) && this.activate(a[r])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, this.clear();
            var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                o = e(n).parents('li').addClass('active');
            o.parent('.dropdown-menu').length && (o = o.closest('li.dropdown').addClass('active')), o.trigger('activate.bs.scrollspy')
        }, t.prototype.clear = function() {
            e(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
        };
        var o = e.fn.scrollspy;
        e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = o, this
        }, e(window).on('load.bs.scrollspy.data-api', function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                n.call(t, t.data())
            })
        })
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function n(n) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.tab');
                a || o.data('bs.tab', a = new e(this)), 'string' == typeof n && a[n]()
            })
        }
        var e = function(e) {
            this.element = t(e)
        };
        e.VERSION = '3.4.1', e.TRANSITION_DURATION = 150, e.prototype.show = function() {
            var e = this.element,
                n = e.closest('ul:not(.dropdown-menu)'),
                o = e.data('target');
            if (o || (o = e.attr('href'), o = o && o.replace(/.*(?=#[^\s]*$)/, '')), !e.parent('li').hasClass('active')) {
                var a = n.find('.active:last a'),
                    i = t.Event('hide.bs.tab', {
                        relatedTarget: e[0]
                    }),
                    s = t.Event('show.bs.tab', {
                        relatedTarget: a[0]
                    });
                if (a.trigger(i), e.trigger(s), !(s.isDefaultPrevented() || i.isDefaultPrevented())) {
                    var r = t(document).find(o);
                    this.activate(e.closest('li'), n), this.activate(r, r.parent(), function() {
                        a.trigger({
                            type: 'hidden.bs.tab',
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: 'shown.bs.tab',
                            relatedTarget: a[0]
                        })
                    })
                }
            }
        }, e.prototype.activate = function(n, o, a) {
            function i() {
                s.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !1), n.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0), r ? (n[0].offsetWidth, n.addClass('in')) : n.removeClass('fade'), n.parent('.dropdown-menu').length && n.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0), a && a()
            }
            var s = o.find('> .active'),
                r = a && t.support.transition && (s.length && s.hasClass('fade') || !!o.find('> .fade').length);
            s.length && r ? s.one('bsTransitionEnd', i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), s.removeClass('in')
        };
        var o = t.fn.tab;
        t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
            return t.fn.tab = o, this
        };
        var a = function(o) {
            o.preventDefault(), n.call(t(this), 'show')
        };
        t(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', a).on('click.bs.tab.data-api', '[data-toggle="pill"]', a)
    }(jQuery)
}, function() {
    + function(t) {
        'use strict';

        function e(e) {
            return this.each(function() {
                var o = t(this),
                    a = o.data('bs.affix');
                a || o.data('bs.affix', a = new n(this, 'object' == typeof e && e)), 'string' == typeof e && a[e]()
            })
        }
        var n = function(e, o) {
            this.options = t.extend({}, n.DEFAULTS, o);
            var a = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
            this.$target = a.on('scroll.bs.affix.data-api', t.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = '3.4.1', n.RESET = 'affix affix-top affix-bottom', n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function(e, t, n, o) {
            var a = this.$target.scrollTop(),
                i = this.$element.offset(),
                s = this.$target.height();
            if (null != n && 'top' == this.affixed) return !!(a < n) && 'top';
            if ('bottom' == this.affixed) return null == n ? !(a + s <= e - o) && 'bottom' : !(a + this.unpin <= i.top) && 'bottom';
            var r = null == this.affixed,
                d = r ? a : i.top,
                l = r ? s : t;
            return null != n && a <= n ? 'top' : !!(null != o && d + l >= e - o) && 'bottom'
        }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass('affix');
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e
        }, n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function() {
            if (this.$element.is(':visible')) {
                var o = this.$element.height(),
                    a = this.options.offset,
                    i = a.top,
                    s = a.bottom,
                    r = Math.max(t(document).height(), t(document.body).height());
                'object' != typeof a && (s = i = a), 'function' == typeof i && (i = a.top(this.$element)), 'function' == typeof s && (s = a.bottom(this.$element));
                var d = this.getState(r, o, i, s);
                if (this.affixed != d) {
                    null != this.unpin && this.$element.css('top', '');
                    var l = 'affix' + (d ? '-' + d : ''),
                        p = t.Event(l + '.bs.affix');
                    if (this.$element.trigger(p), p.isDefaultPrevented()) return;
                    this.affixed = d, this.unpin = 'bottom' == d ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace('affix', 'affixed') + '.bs.affix')
                }
                'bottom' == d && this.$element.offset({
                    top: r - o - s
                })
            }
        };
        var o = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
            return t.fn.affix = o, this
        }, t(window).on('load', function() {
            t('[data-spy="affix"]').each(function() {
                var n = t(this),
                    o = n.data();
                o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(n, o)
            })
        })
    }(jQuery)
}, function(e) {
    function t() {
        throw new Error('setTimeout has not been defined')
    }

    function n() {
        throw new Error('clearTimeout has not been defined')
    }

    function o(e) {
        if (p === setTimeout) return setTimeout(e, 0);
        if ((p === t || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
        try {
            return p(e, 0)
        } catch (t) {
            try {
                return p.call(null, e, 0)
            } catch (t) {
                return p.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (c === clearTimeout) return clearTimeout(e);
        if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
        try {
            return c(e)
        } catch (t) {
            try {
                return c.call(null, e)
            } catch (t) {
                return c.call(this, e)
            }
        }
    }

    function i() {
        f && h && (f = !1, h.length ? u = h.concat(u) : g = -1, u.length && s())
    }

    function s() {
        if (!f) {
            var e = o(i);
            f = !0;
            for (var t = u.length; t;) {
                for (h = u, u = []; ++g < t;) h && h[g].run();
                g = -1, t = u.length
            }
            h = null, f = !1, a(e)
        }
    }

    function r(e, t) {
        this.fun = e, this.array = t
    }

    function d() {}
    var l = e.exports = {},
        p, c;
    (function() {
        try {
            p = 'function' == typeof setTimeout ? setTimeout : t
        } catch (n) {
            p = t
        }
        try {
            c = 'function' == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            c = n
        }
    })();
    var u = [],
        f = !1,
        g = -1,
        h;
    l.nextTick = function(e) {
        var t = Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new r(e, t)), 1 !== u.length || f || o(s)
    }, r.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, l.title = 'browser', l.browser = !0, l.env = {}, l.argv = [], l.version = '', l.versions = {}, l.on = d, l.addListener = d, l.once = d, l.off = d, l.removeListener = d, l.removeAllListeners = d, l.emit = d, l.prependListener = d, l.prependOnceListener = d, l.listeners = function() {
        return []
    }, l.binding = function() {
        throw new Error('process.binding is not supported')
    }, l.cwd = function() {
        return '/'
    }, l.chdir = function() {
        throw new Error('process.chdir is not supported')
    }, l.umask = function() {
        return 0
    }
}, function(e, t, n) {
    n(21), e.exports = self.fetch.bind(self)
}, function(e, t, n) {
    'use strict';

    function o(e) {
        return e && DataView.prototype.isPrototypeOf(e)
    }

    function a(e) {
        if ('string' != typeof e && (e += ''), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase()
    }

    function i(e) {
        return 'string' != typeof e && (e += ''), e
    }

    function s(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return w.iterable && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function r(e) {
        this.map = {}, e instanceof r ? e.forEach(function(e, t) {
            this.append(t, e)
        }, this) : Array.isArray(e) ? e.forEach(function(e) {
            this.append(e[0], e[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function d(e) {
        return e.bodyUsed ? Promise.reject(new TypeError('Already read')) : void(e.bodyUsed = !0)
    }

    function l(e) {
        return new Promise(function(t, n) {
            e.onload = function() {
                t(e.result)
            }, e.onerror = function() {
                n(e.error)
            }
        })
    }

    function p(e) {
        var t = new FileReader,
            n = l(t);
        return t.readAsArrayBuffer(e), n
    }

    function c(e) {
        var t = new FileReader,
            n = l(t);
        return t.readAsText(e), n
    }

    function u(e) {
        for (var t = new Uint8Array(e), n = Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
        return n.join('')
    }

    function f(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
    }

    function g() {
        return this.bodyUsed = !1, this._initBody = function(e) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? 'string' == typeof e ? this._bodyText = e : w.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : w.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : w.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : w.arrayBuffer && w.blob && o(e) ? (this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : w.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || E(e)) ? this._bodyArrayBuffer = f(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = '', this.headers.get('content-type') || ('string' == typeof e ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : w.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'))
        }, w.blob && (this.blob = function() {
            var e = d(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error('could not read FormData body as blob');
            else return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var e = d(this);
                return e ? e : ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)
            }
            return this.blob().then(p)
        }), this.text = function() {
            var e = d(this);
            if (e) return e;
            if (this._bodyBlob) return c(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(u(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            else return Promise.resolve(this._bodyText)
        }, w.formData && (this.formData = function() {
            return this.text().then(y)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }

    function h(e) {
        var t = e.toUpperCase();
        return -1 < S.indexOf(t) ? t : e
    }

    function m(e, t) {
        if (!(this instanceof m)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t = t || {};
        var n = t.body;
        if (e instanceof m) {
            if (e.bodyUsed) throw new TypeError('Already read');
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new r(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
        } else this.url = e + '';
        if (this.credentials = t.credentials || this.credentials || 'same-origin', (t.headers || !this.headers) && (this.headers = new r(t.headers)), this.method = h(t.method || this.method || 'GET'), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ('GET' === this.method || 'HEAD' === this.method) && n) throw new TypeError('Body not allowed for GET or HEAD requests');
        if (this._initBody(n), ('GET' === this.method || 'HEAD' === this.method) && ('no-store' === t.cache || 'no-cache' === t.cache)) {
            var o = /([?&])_=[^&]*/;
            if (o.test(this.url)) this.url = this.url.replace(o, '$1_=' + new Date().getTime());
            else {
                var a = /\?/;
                this.url += (a.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
            }
        }
    }

    function y(e) {
        var t = new FormData;
        return e.trim().split('&').forEach(function(e) {
            if (e) {
                var n = e.split('='),
                    o = n.shift().replace(/\+/g, ' '),
                    a = n.join('=').replace(/\+/g, ' ');
                t.append(decodeURIComponent(o), decodeURIComponent(a))
            }
        }), t
    }

    function b(e) {
        var t = new r,
            n = e.replace(/\r?\n[\t ]+/g, ' ');
        return n.split('\r').map(function(e) {
            return 0 === e.indexOf('\n') ? e.substr(1, e.length) : e
        }).forEach(function(e) {
            var n = e.split(':'),
                o = n.shift().trim();
            if (o) {
                var a = n.join(':').trim();
                t.append(o, a)
            }
        }), t
    }

    function x(e, t) {
        if (!(this instanceof x)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}), this.type = 'default', this.status = t.status === void 0 ? 200 : t.status, this.ok = 200 <= this.status && 300 > this.status, this.statusText = t.statusText === void 0 ? '' : '' + t.statusText, this.headers = new r(t.headers), this.url = t.url || '', this._initBody(e)
    }

    function v(e, t) {
        return new Promise(function(n, o) {
            function a() {
                d.abort()
            }
            var s = new m(e, t);
            if (s.signal && s.signal.aborted) return o(new A('Aborted', 'AbortError'));
            var d = new XMLHttpRequest;
            d.onload = function() {
                var e = {
                    status: d.status,
                    statusText: d.statusText,
                    headers: b(d.getAllResponseHeaders() || '')
                };
                e.url = 'responseURL' in d ? d.responseURL : e.headers.get('X-Request-URL');
                var t = 'response' in d ? d.response : d.responseText;
                setTimeout(function() {
                    n(new x(t, e))
                }, 0)
            }, d.onerror = function() {
                setTimeout(function() {
                    o(new TypeError('Network request failed'))
                }, 0)
            }, d.ontimeout = function() {
                setTimeout(function() {
                    o(new TypeError('Network request failed'))
                }, 0)
            }, d.onabort = function() {
                setTimeout(function() {
                    o(new A('Aborted', 'AbortError'))
                }, 0)
            }, d.open(s.method, function(e) {
                try {
                    return '' === e && T.location.href ? T.location.href : e
                } catch (t) {
                    return e
                }
            }(s.url), !0), 'include' === s.credentials ? d.withCredentials = !0 : 'omit' === s.credentials && (d.withCredentials = !1), 'responseType' in d && (w.blob ? d.responseType = 'blob' : w.arrayBuffer && s.headers.get('Content-Type') && -1 !== s.headers.get('Content-Type').indexOf('application/octet-stream') && (d.responseType = 'arraybuffer')), t && 'object' == typeof t.headers && !(t.headers instanceof r) ? Object.getOwnPropertyNames(t.headers).forEach(function(e) {
                d.setRequestHeader(e, i(t.headers[e]))
            }) : s.headers.forEach(function(e, t) {
                d.setRequestHeader(t, e)
            }), s.signal && (s.signal.addEventListener('abort', a), d.onreadystatechange = function() {
                4 === d.readyState && s.signal.removeEventListener('abort', a)
            }), d.send('undefined' == typeof s._bodyInit ? null : s._bodyInit)
        })
    }
    n.r(t), n.d(t, 'Headers', function() {
        return r
    }), n.d(t, 'Request', function() {
        return m
    }), n.d(t, 'Response', function() {
        return x
    }), n.d(t, 'DOMException', function() {
        return A
    }), n.d(t, 'fetch', function() {
        return v
    });
    var T = 'undefined' != typeof globalThis && globalThis || 'undefined' != typeof self && self || 'undefined' != typeof T && T,
        w = {
            searchParams: 'URLSearchParams' in T,
            iterable: 'Symbol' in T && 'iterator' in Symbol,
            blob: 'FileReader' in T && 'Blob' in T && function() {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            formData: 'FormData' in T,
            arrayBuffer: 'ArrayBuffer' in T
        };
    if (w.arrayBuffer) var C = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'],
        E = ArrayBuffer.isView || function(e) {
            return e && -1 < C.indexOf(Object.prototype.toString.call(e))
        };
    r.prototype.append = function(e, t) {
        e = a(e), t = i(t);
        var n = this.map[e];
        this.map[e] = n ? n + ', ' + t : t
    }, r.prototype['delete'] = function(e) {
        delete this.map[a(e)]
    }, r.prototype.get = function(e) {
        return e = a(e), this.has(e) ? this.map[e] : null
    }, r.prototype.has = function(e) {
        return this.map.hasOwnProperty(a(e))
    }, r.prototype.set = function(e, t) {
        this.map[a(e)] = i(t)
    }, r.prototype.forEach = function(e, t) {
        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }, r.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, n) {
            e.push(n)
        }), s(e)
    }, r.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), s(e)
    }, r.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, n) {
            e.push([n, t])
        }), s(e)
    }, w.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
    var S = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    m.prototype.clone = function() {
        return new m(this, {
            body: this._bodyInit
        })
    }, g.call(m.prototype), g.call(x.prototype), x.prototype.clone = function() {
        return new x(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new r(this.headers),
            url: this.url
        })
    }, x.error = function() {
        var e = new x(null, {
            status: 0,
            statusText: ''
        });
        return e.type = 'error', e
    };
    var k = [301, 302, 303, 307, 308];
    x.redirect = function(e, t) {
        if (-1 === k.indexOf(t)) throw new RangeError('Invalid status code');
        return new x(null, {
            status: t,
            headers: {
                location: e
            }
        })
    };
    var A = T.DOMException;
    try {
        new A
    } catch (e) {
        A = function(e, t) {
            this.message = e, this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }, A.prototype = Object.create(Error.prototype), A.prototype.constructor = A
    }
    v.polyfill = !0, T.fetch || (T.fetch = v, T.Headers = r, T.Request = m, T.Response = x)
}, function(e, t, n) {
    'use strict';

    function a(e) {
        '@babel/helpers - typeof';
        return a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }, a(e)
    }

    function o(e) {
        s('#lc_shop_cart_icon > .lc-shop-products-count').text(e), s('#lc_shop_cart_icon').toggle(!!+e), s('body').toggleClass('lc-shop-cart-enabled', !!+e)
    }
    n.r(t);
    var s = n(0),
        i = n(6),
        r = n(1),
        d = n.n(r),
        l = n(3);
    window.objectFitImages = d.a, window.createClient = l.a, window.fillSelectKeyVal = function(e, t, n) {
        var o = 'object' == a(e) ? e : document.getElementById(e);
        for (var s in o.options.length = 0, t) addOption(o, t[s], s, !1, n == s)
    }, window.clear_form = function(e) {
        var t = 'object' == a(e) ? s(e) : s('#' + e);
        t.find('input:text').val(''), t.find('textarea').html(''), t.find('input:checkbox').each(function() {
            this.checked = !1
        }), t.find('input:radio').each(function() {
            this.checked = !1
        }), t.find('select').each(function() {
            s(this).val(s(this).find('option:first').val())
        }), 0 < s('.selectpicker').length && s('.selectpicker').selectpicker('render')
    }, window.get_form_params = function(e) {
        var t = {},
            n = 'object' == a(e) ? e : document.getElementById(e);
        if (n)
            for (var s = 0, i = n.elements.length; s < i; s++) {
                var r = n.elements[s],
                    d = n.elements[s].type;
                if ('FIELDSET' != n.elements[s].tagName && 'checkbox' != n.elements[s].type && 'radio' != n.elements[s].type && (t[n.elements[s].name] = n.elements[s].value), 'textarea' != n.elements[s].type || n.elements[s].value || (t[n.elements[s].name] = n.elements[s].value), 'checkbox' == n.elements[s].type && n.elements[s].checked ? t[n.elements[s].name] = n.elements[s].value : 'checkbox' == n.elements[s].type && !n.elements[s].checked && (t[n.elements[s].name] = ''), 'radio' == n.elements[s].type && n.elements[s].checked && (t[n.elements[s].name] = n.elements[s].value), 'select-multiple' == n.elements[s].type) {
                    for (var l = [], p = 0; p < n.elements[s].options.length; p++) n.elements[s].options[p].selected && (l[l.length] = n.elements[s].options[p].value);
                    t[n.elements[s].name] = l
                }
            }
        return t
    }, window.pop_up = function(e, t, n) {
        t = t || 400, n = n || 400;
        var o = window.open(e, 'name', 'height=' + n + ',width=' + t);
        return window.focus && o.focus(), !1
    }, window.addOption = function(e, t, n, o, a) {
        var i = document.createElement('option');
        i.appendChild(document.createTextNode(t)), i.setAttribute('value', n), o ? i.defaultSelected = !0 : a && (i.selected = !0), null != e && e.appendChild(i)
    }, window.image_resizer = function(e) {
        var t = '';
        return -1 !== e.file_path.indexOf('root') || -1 !== e.file_path.indexOf('central') ? (t = ajax_prefix + 'modules/fm/thumb.php?hash=' + domain_hash + '&file=' + encodeURIComponent(e.file_path) + ('undefined' == typeof e.resize_mode ? '&fit=cover' : '&fit=' + e.resize_mode) + ('undefined' == typeof e.width ? '' : '&w=' + e.width) + ('undefined' == typeof e.height ? '' : '&h=' + e.height), 'undefined' != typeof e.lcc && (t += '&lcc=' + +new Date)) : (t = ajax_prefix + 'pe_image_resizer', 'undefined' != typeof e.file_path && (t += '/' + base64encode(e.file_path)), 'undefined' != typeof e.resize_mode && (t += '/' + e.resize_mode), 'undefined' != typeof e.width && (t += '/' + e.width), 'undefined' != typeof e.height && (t += '/' + e.height), 'undefined' != typeof e.lcc && (t += '?lcc=' + +new Date)), t
    }, document.addEventListener('DOMContentLoaded', function() {
        function e(e) {
            s(e).data('lazy-loaded') || (s(e).trigger('image_lazy_loaded', e), e.dataset.objectFit && d()(e), s(e).data('lazy-loaded', 1))
        }
        var t = [].slice.call(document.querySelectorAll('img.lazy'));
        if ('IntersectionObserver' in window) window.lazyImageObserver = new IntersectionObserver(function(t) {
            t.forEach(function(t) {
                if (t.isIntersecting) {
                    var n = t.target;
                    if (s(n).on('load', function() {
                            e(n)
                        }), 'PICTURE' == n.parentNode.tagName)
                        for (var o = n.parentNode.querySelectorAll('source'), a = 0, i = o.length; a < i; a++) o[a].srcset = o[a].dataset.srcset;
                    n.src = n.dataset.src, void 0 !== n.dataset.srcset && (n.srcset = n.dataset.srcset), n.classList.remove('lazy'), window.lazyImageObserver.unobserve(n)
                }
            }), s(window).trigger('resize').trigger('scroll');
            var n = window.navigator.userAgent;
            if (-1 !== n.indexOf('MSIE') || -1 !== n.indexOf('Trident/')) {
                var o = window.document.createEvent('UIEvents');
                o.initUIEvent('resize', !0, !1, window, 0), window.dispatchEvent(o)
            } else window.dispatchEvent(new Event('resize'))
        }, {
            rootMargin: '100px 0px',
            threshold: [0, .1, .2, .5, 1]
        }), t.forEach(function(e) {
            window.lazyImageObserver.observe(e)
        });
        else {
            var n = function t() {
                    o && clearTimeout(o), o = setTimeout(function() {
                        var n = document.querySelectorAll('.lazy'),
                            o = window.pageYOffset,
                            a = function(t) {
                                if (!n.hasOwnProperty(t)) return 'continue';
                                var a = n[t];
                                s(a).offset().top < window.innerHeight + o && (s(a).on('load', function() {
                                    e(a)
                                }), a.src = a.dataset.src, a.classList.remove('lazy'))
                            };
                        for (var r in n) {
                            var i = a(r)
                        }
                        0 === n.length && (document.removeEventListener('scroll', t), window.removeEventListener('resize', t), window.removeEventListener('orientationChange', t))
                    }, 20)
                },
                o;
            document.addEventListener('scroll', n), window.addEventListener('resize', n), window.addEventListener('orientationChange', n), n()
        }
        s(window).scroll(function() {
            s('body').hasClass('fixed-header') && (200 < s(document).scrollTop() ? s('body').addClass('qms-scrolled') : s('body').removeClass('qms-scrolled'))
        })
    }), window.lc_shop_cart_add_product = function(e, t) {
        s.ajax({
            method: 'POST',
            url: ajax_prefix + 'lc-shop-cart-add-product',
            dataType: 'json',
            data: e,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(e) {
            e.hasOwnProperty('products_count') && o(e.products_count), 'function' == typeof t && t.call(this, e)
        })
    }, window.lc_shop_cart_update_product = function(e, t) {
        s.ajax({
            method: 'POST',
            url: ajax_prefix + 'lc-shop-cart-update-product',
            dataType: 'json',
            data: e,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(e) {
            e.hasOwnProperty('products_count') && o(e.products_count), 'function' == typeof t && t.call(this, e)
        })
    }, window.lc_shop_cart_remove_product = function(e, t) {
        s.ajax({
            method: 'POST',
            url: ajax_prefix + 'lc-shop-cart-remove-product',
            dataType: 'json',
            data: e,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(e) {
            e.hasOwnProperty('products_count') && o(e.products_count), 'function' == typeof t && t.call(this, e)
        })
    }, window.lc_shop_cart_shipping_select = function(e, t) {
        s.ajax({
            method: 'POST',
            url: ajax_prefix + 'lc-shop-cart-shipping-select',
            dataType: 'json',
            data: {
                shipping: e
            },
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(e) {
            'function' == typeof t && t.call(this, e)
        })
    }, window.lc_shop_cart_shipping_country_select = function(e, t) {
        s.ajax({
            method: 'POST',
            url: ajax_prefix + 'lc-shop-cart-shipping-country-select',
            dataType: 'json',
            data: {
                country: e
            },
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(e) {
            'function' == typeof t && t.call(this, e)
        })
    }, window.lc_shop_cart_status = function() {
        s.ajax({
            method: 'POST',
            url: ajax_prefix + 'lc-shop-cart-status',
            dataType: 'json',
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(e) {
            e.hasOwnProperty('products_count') && o(e.products_count)
        })
    }
}]);
//# sourceMappingURL=scripts.single.bundle.js.map