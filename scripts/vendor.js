/*! For license information please see vendor.js.LICENSE.txt */
(globalThis.webpackChunkp5aholic_me =
  globalThis.webpackChunkp5aholic_me || []).push([
  [736],
  {
    306: (t, e, n) => {
      'use strict';
      n.d(e, { Z: () => ge });
      var i,
        r,
        a,
        s,
        o = Object.create,
        l = Object.defineProperty,
        c = Object.getPrototypeOf,
        u = Object.prototype.hasOwnProperty,
        h = Object.getOwnPropertyNames,
        d = Object.getOwnPropertyDescriptor,
        p = (t, e) => () => (
          e || t((e = { exports: {} }).exports, e), e.exports
        ),
        f = p((t) => {
          function e(t, e) {
            const n = Object.create(null),
              i = t.split(',');
            for (let t = 0; t < i.length; t++) n[i[t]] = !0;
            return e ? (t) => !!n[t.toLowerCase()] : (t) => !!n[t];
          }
          Object.defineProperty(t, '__esModule', { value: !0 });
          var i = {
              1: 'TEXT',
              2: 'CLASS',
              4: 'STYLE',
              8: 'PROPS',
              16: 'FULL_PROPS',
              32: 'HYDRATE_EVENTS',
              64: 'STABLE_FRAGMENT',
              128: 'KEYED_FRAGMENT',
              256: 'UNKEYED_FRAGMENT',
              512: 'NEED_PATCH',
              1024: 'DYNAMIC_SLOTS',
              2048: 'DEV_ROOT_FRAGMENT',
              [-1]: 'HOISTED',
              [-2]: 'BAIL',
            },
            r = e(
              'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'
            ),
            a =
              'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
            s = e(a),
            o = e(
              a +
                ',async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected'
            ),
            l = /[>/="'\u0009\u000a\u000c\u0020]/,
            c = {},
            u = e(
              'animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width'
            ),
            h = e(
              'accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap'
            ),
            d = /;(?![^(]*\))/g,
            p = /:(.+)/;
          function f(t) {
            const e = {};
            return (
              t.split(d).forEach((t) => {
                if (t) {
                  const n = t.split(p);
                  n.length > 1 && (e[n[0].trim()] = n[1].trim());
                }
              }),
              e
            );
          }
          var m = e(
              'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot'
            ),
            g = e(
              'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view'
            ),
            _ = e(
              'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'
            ),
            v = /["'&<>]/,
            x = /^-?>|<!--|-->|--!>|<!-$/g;
          function y(t, e) {
            if (t === e) return !0;
            let n = P(t),
              i = P(e);
            if (n || i) return !(!n || !i) && t.getTime() === e.getTime();
            if (((n = R(t)), (i = R(e)), n || i))
              return (
                !(!n || !i) &&
                (function (t, e) {
                  if (t.length !== e.length) return !1;
                  let n = !0;
                  for (let i = 0; n && i < t.length; i++) n = y(t[i], e[i]);
                  return n;
                })(t, e)
              );
            if (((n = N(t)), (i = N(e)), n || i)) {
              if (!n || !i) return !1;
              if (Object.keys(t).length !== Object.keys(e).length) return !1;
              for (const n in t) {
                const i = t.hasOwnProperty(n),
                  r = e.hasOwnProperty(n);
                if ((i && !r) || (!i && r) || !y(t[n], e[n])) return !1;
              }
            }
            return String(t) === String(e);
          }
          var b,
            M = (t, e) =>
              L(e)
                ? {
                    [`Map(${e.size})`]: [...e.entries()].reduce(
                      (t, [e, n]) => ((t[`${e} =>`] = n), t),
                      {}
                    ),
                  }
                : C(e)
                ? { [`Set(${e.size})`]: [...e.values()] }
                : !N(e) || R(e) || F(e)
                ? e
                : String(e),
            w = Object.freeze({}),
            S = Object.freeze([]),
            E = /^on[^a-z]/,
            T = Object.assign,
            A = Object.prototype.hasOwnProperty,
            R = Array.isArray,
            L = (t) => '[object Map]' === U(t),
            C = (t) => '[object Set]' === U(t),
            P = (t) => t instanceof Date,
            D = (t) => 'function' == typeof t,
            O = (t) => 'string' == typeof t,
            N = (t) => null !== t && 'object' == typeof t,
            I = Object.prototype.toString,
            U = (t) => I.call(t),
            F = (t) => '[object Object]' === U(t),
            z = e(
              ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
            ),
            B = (t) => {
              const e = Object.create(null);
              return (n) => e[n] || (e[n] = t(n));
            },
            k = /-(\w)/g,
            G = B((t) => t.replace(k, (t, e) => (e ? e.toUpperCase() : ''))),
            H = /\B([A-Z])/g,
            V = B((t) => t.replace(H, '-$1').toLowerCase()),
            W = B((t) => t.charAt(0).toUpperCase() + t.slice(1)),
            X = B((t) => (t ? `on${W(t)}` : ''));
          (t.EMPTY_ARR = S),
            (t.EMPTY_OBJ = w),
            (t.NO = () => !1),
            (t.NOOP = () => {}),
            (t.PatchFlagNames = i),
            (t.babelParserDefaultPlugins = [
              'bigInt',
              'optionalChaining',
              'nullishCoalescingOperator',
            ]),
            (t.camelize = G),
            (t.capitalize = W),
            (t.def = (t, e, n) => {
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: n,
              });
            }),
            (t.escapeHtml = function (t) {
              const e = '' + t,
                n = v.exec(e);
              if (!n) return e;
              let i,
                r,
                a = '',
                s = 0;
              for (r = n.index; r < e.length; r++) {
                switch (e.charCodeAt(r)) {
                  case 34:
                    i = '&quot;';
                    break;
                  case 38:
                    i = '&amp;';
                    break;
                  case 39:
                    i = '&#39;';
                    break;
                  case 60:
                    i = '&lt;';
                    break;
                  case 62:
                    i = '&gt;';
                    break;
                  default:
                    continue;
                }
                s !== r && (a += e.substring(s, r)), (s = r + 1), (a += i);
              }
              return s !== r ? a + e.substring(s, r) : a;
            }),
            (t.escapeHtmlComment = function (t) {
              return t.replace(x, '');
            }),
            (t.extend = T),
            (t.generateCodeFrame = function (t, e = 0, n = t.length) {
              const i = t.split(/\r?\n/);
              let r = 0;
              const a = [];
              for (let t = 0; t < i.length; t++)
                if (((r += i[t].length + 1), r >= e)) {
                  for (let s = t - 2; s <= t + 2 || n > r; s++) {
                    if (s < 0 || s >= i.length) continue;
                    const o = s + 1;
                    a.push(
                      `${o}${' '.repeat(Math.max(3 - String(o).length, 0))}|  ${
                        i[s]
                      }`
                    );
                    const l = i[s].length;
                    if (s === t) {
                      const t = e - (r - l) + 1,
                        i = Math.max(1, n > r ? l - t : n - e);
                      a.push('   |  ' + ' '.repeat(t) + '^'.repeat(i));
                    } else if (s > t) {
                      if (n > r) {
                        const t = Math.max(Math.min(n - r, l), 1);
                        a.push('   |  ' + '^'.repeat(t));
                      }
                      r += l + 1;
                    }
                  }
                  break;
                }
              return a.join('\n');
            }),
            (t.getGlobalThis = () =>
              b ||
              (b =
                'undefined' != typeof globalThis
                  ? globalThis
                  : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                  ? window
                  : void 0 !== n.g
                  ? n.g
                  : {})),
            (t.hasChanged = (t, e) => t !== e && (t == t || e == e)),
            (t.hasOwn = (t, e) => A.call(t, e)),
            (t.hyphenate = V),
            (t.invokeArrayFns = (t, e) => {
              for (let n = 0; n < t.length; n++) t[n](e);
            }),
            (t.isArray = R),
            (t.isBooleanAttr = o),
            (t.isDate = P),
            (t.isFunction = D),
            (t.isGloballyWhitelisted = r),
            (t.isHTMLTag = m),
            (t.isIntegerKey = (t) =>
              O(t) &&
              'NaN' !== t &&
              '-' !== t[0] &&
              '' + parseInt(t, 10) === t),
            (t.isKnownAttr = h),
            (t.isMap = L),
            (t.isModelListener = (t) => t.startsWith('onUpdate:')),
            (t.isNoUnitNumericStyleProp = u),
            (t.isObject = N),
            (t.isOn = (t) => E.test(t)),
            (t.isPlainObject = F),
            (t.isPromise = (t) => N(t) && D(t.then) && D(t.catch)),
            (t.isReservedProp = z),
            (t.isSSRSafeAttrName = function (t) {
              if (c.hasOwnProperty(t)) return c[t];
              const e = l.test(t);
              return (
                e && console.error(`unsafe attribute name: ${t}`), (c[t] = !e)
              );
            }),
            (t.isSVGTag = g),
            (t.isSet = C),
            (t.isSpecialBooleanAttr = s),
            (t.isString = O),
            (t.isSymbol = (t) => 'symbol' == typeof t),
            (t.isVoidTag = _),
            (t.looseEqual = y),
            (t.looseIndexOf = function (t, e) {
              return t.findIndex((t) => y(t, e));
            }),
            (t.makeMap = e),
            (t.normalizeClass = function t(e) {
              let n = '';
              if (O(e)) n = e;
              else if (R(e))
                for (let i = 0; i < e.length; i++) {
                  const r = t(e[i]);
                  r && (n += r + ' ');
                }
              else if (N(e)) for (const t in e) e[t] && (n += t + ' ');
              return n.trim();
            }),
            (t.normalizeStyle = function t(e) {
              if (R(e)) {
                const n = {};
                for (let i = 0; i < e.length; i++) {
                  const r = e[i],
                    a = t(O(r) ? f(r) : r);
                  if (a) for (const t in a) n[t] = a[t];
                }
                return n;
              }
              if (N(e)) return e;
            }),
            (t.objectToString = I),
            (t.parseStringStyle = f),
            (t.propsToAttrMap = {
              acceptCharset: 'accept-charset',
              className: 'class',
              htmlFor: 'for',
              httpEquiv: 'http-equiv',
            }),
            (t.remove = (t, e) => {
              const n = t.indexOf(e);
              n > -1 && t.splice(n, 1);
            }),
            (t.slotFlagsText = { 1: 'STABLE', 2: 'DYNAMIC', 3: 'FORWARDED' }),
            (t.stringifyStyle = function (t) {
              let e = '';
              if (!t) return e;
              for (const n in t) {
                const i = t[n],
                  r = n.startsWith('--') ? n : V(n);
                (O(i) || ('number' == typeof i && u(r))) && (e += `${r}:${i};`);
              }
              return e;
            }),
            (t.toDisplayString = (t) =>
              null == t ? '' : N(t) ? JSON.stringify(t, M, 2) : String(t)),
            (t.toHandlerKey = X),
            (t.toNumber = (t) => {
              const e = parseFloat(t);
              return isNaN(e) ? t : e;
            }),
            (t.toRawType = (t) => U(t).slice(8, -1)),
            (t.toTypeString = U);
        }),
        m = p((t, e) => {
          e.exports = f();
        }),
        g = p((t) => {
          Object.defineProperty(t, '__esModule', { value: !0 });
          var e,
            n = m(),
            i = new WeakMap(),
            r = [],
            a = Symbol('iterate'),
            s = Symbol('Map key iterate');
          function o(t, i = n.EMPTY_OBJ) {
            (function (t) {
              return t && !0 === t._isEffect;
            })(t) && (t = t.raw);
            const a = (function (t, n) {
              const i = function () {
                if (!i.active) return t();
                if (!r.includes(i)) {
                  c(i);
                  try {
                    return p(), r.push(i), (e = i), t();
                  } finally {
                    r.pop(), f(), (e = r[r.length - 1]);
                  }
                }
              };
              return (
                (i.id = l++),
                (i.allowRecurse = !!n.allowRecurse),
                (i._isEffect = !0),
                (i.active = !0),
                (i.raw = t),
                (i.deps = []),
                (i.options = n),
                i
              );
            })(t, i);
            return i.lazy || a(), a;
          }
          var l = 0;
          function c(t) {
            const { deps: e } = t;
            if (e.length) {
              for (let n = 0; n < e.length; n++) e[n].delete(t);
              e.length = 0;
            }
          }
          var u = !0,
            h = [];
          function d() {
            h.push(u), (u = !1);
          }
          function p() {
            h.push(u), (u = !0);
          }
          function f() {
            const t = h.pop();
            u = void 0 === t || t;
          }
          function g(t, n, r) {
            if (!u || void 0 === e) return;
            let a = i.get(t);
            a || i.set(t, (a = new Map()));
            let s = a.get(r);
            s || a.set(r, (s = new Set())),
              s.has(e) ||
                (s.add(e),
                e.deps.push(s),
                e.options.onTrack &&
                  e.options.onTrack({ effect: e, target: t, type: n, key: r }));
          }
          function _(t, r, o, l, c, u) {
            const h = i.get(t);
            if (!h) return;
            const d = new Set(),
              p = (t) => {
                t &&
                  t.forEach((t) => {
                    (t !== e || t.allowRecurse) && d.add(t);
                  });
              };
            if ('clear' === r) h.forEach(p);
            else if ('length' === o && n.isArray(t))
              h.forEach((t, e) => {
                ('length' === e || e >= l) && p(t);
              });
            else
              switch ((void 0 !== o && p(h.get(o)), r)) {
                case 'add':
                  n.isArray(t)
                    ? n.isIntegerKey(o) && p(h.get('length'))
                    : (p(h.get(a)), n.isMap(t) && p(h.get(s)));
                  break;
                case 'delete':
                  n.isArray(t) || (p(h.get(a)), n.isMap(t) && p(h.get(s)));
                  break;
                case 'set':
                  n.isMap(t) && p(h.get(a));
              }
            d.forEach((e) => {
              e.options.onTrigger &&
                e.options.onTrigger({
                  effect: e,
                  target: t,
                  key: o,
                  type: r,
                  newValue: l,
                  oldValue: c,
                  oldTarget: u,
                }),
                e.options.scheduler ? e.options.scheduler(e) : e();
            });
          }
          var v = n.makeMap('__proto__,__v_isRef,__isVue'),
            x = new Set(
              Object.getOwnPropertyNames(Symbol)
                .map((t) => Symbol[t])
                .filter(n.isSymbol)
            ),
            y = E(),
            b = E(!1, !0),
            M = E(!0),
            w = E(!0, !0),
            S = {};
          function E(t = !1, e = !1) {
            return function (i, r, a) {
              if ('__v_isReactive' === r) return !t;
              if ('__v_isReadonly' === r) return t;
              if (
                '__v_raw' === r &&
                a === (t ? (e ? st : at) : e ? rt : it).get(i)
              )
                return i;
              const s = n.isArray(i);
              if (!t && s && n.hasOwn(S, r)) return Reflect.get(S, r, a);
              const o = Reflect.get(i, r, a);
              return (n.isSymbol(r) ? x.has(r) : v(r))
                ? o
                : (t || g(i, 'get', r),
                  e
                    ? o
                    : mt(o)
                    ? s && n.isIntegerKey(r)
                      ? o
                      : o.value
                    : n.isObject(o)
                    ? t
                      ? lt(o)
                      : ot(o)
                    : o);
            };
          }
          ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
            const e = Array.prototype[t];
            S[t] = function (...t) {
              const n = pt(this);
              for (let t = 0, e = this.length; t < e; t++) g(n, 'get', t + '');
              const i = e.apply(n, t);
              return -1 === i || !1 === i ? e.apply(n, t.map(pt)) : i;
            };
          }),
            ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
              const e = Array.prototype[t];
              S[t] = function (...t) {
                d();
                const n = e.apply(this, t);
                return f(), n;
              };
            });
          var T = R(),
            A = R(!0);
          function R(t = !1) {
            return function (e, i, r, a) {
              let s = e[i];
              if (
                !t &&
                ((r = pt(r)), (s = pt(s)), !n.isArray(e) && mt(s) && !mt(r))
              )
                return (s.value = r), !0;
              const o =
                  n.isArray(e) && n.isIntegerKey(i)
                    ? Number(i) < e.length
                    : n.hasOwn(e, i),
                l = Reflect.set(e, i, r, a);
              return (
                e === pt(a) &&
                  (o
                    ? n.hasChanged(r, s) && _(e, 'set', i, r, s)
                    : _(e, 'add', i, r)),
                l
              );
            };
          }
          var L = {
              get: y,
              set: T,
              deleteProperty: function (t, e) {
                const i = n.hasOwn(t, e),
                  r = t[e],
                  a = Reflect.deleteProperty(t, e);
                return a && i && _(t, 'delete', e, void 0, r), a;
              },
              has: function (t, e) {
                const i = Reflect.has(t, e);
                return (n.isSymbol(e) && x.has(e)) || g(t, 'has', e), i;
              },
              ownKeys: function (t) {
                return (
                  g(t, 'iterate', n.isArray(t) ? 'length' : a),
                  Reflect.ownKeys(t)
                );
              },
            },
            C = {
              get: M,
              set: (t, e) => (
                console.warn(
                  `Set operation on key "${String(
                    e
                  )}" failed: target is readonly.`,
                  t
                ),
                !0
              ),
              deleteProperty: (t, e) => (
                console.warn(
                  `Delete operation on key "${String(
                    e
                  )}" failed: target is readonly.`,
                  t
                ),
                !0
              ),
            },
            P = n.extend({}, L, { get: b, set: A }),
            D = n.extend({}, C, { get: w }),
            O = (t) => (n.isObject(t) ? ot(t) : t),
            N = (t) => (n.isObject(t) ? lt(t) : t),
            I = (t) => t,
            U = (t) => Reflect.getPrototypeOf(t);
          function F(t, e, n = !1, i = !1) {
            const r = pt((t = t.__v_raw)),
              a = pt(e);
            e !== a && !n && g(r, 'get', e), !n && g(r, 'get', a);
            const { has: s } = U(r),
              o = i ? I : n ? N : O;
            return s.call(r, e)
              ? o(t.get(e))
              : s.call(r, a)
              ? o(t.get(a))
              : void (t !== r && t.get(e));
          }
          function z(t, e = !1) {
            const n = this.__v_raw,
              i = pt(n),
              r = pt(t);
            return (
              t !== r && !e && g(i, 'has', t),
              !e && g(i, 'has', r),
              t === r ? n.has(t) : n.has(t) || n.has(r)
            );
          }
          function B(t, e = !1) {
            return (
              (t = t.__v_raw),
              !e && g(pt(t), 'iterate', a),
              Reflect.get(t, 'size', t)
            );
          }
          function k(t) {
            t = pt(t);
            const e = pt(this);
            return U(e).has.call(e, t) || (e.add(t), _(e, 'add', t, t)), this;
          }
          function G(t, e) {
            e = pt(e);
            const i = pt(this),
              { has: r, get: a } = U(i);
            let s = r.call(i, t);
            s ? nt(i, r, t) : ((t = pt(t)), (s = r.call(i, t)));
            const o = a.call(i, t);
            return (
              i.set(t, e),
              s
                ? n.hasChanged(e, o) && _(i, 'set', t, e, o)
                : _(i, 'add', t, e),
              this
            );
          }
          function H(t) {
            const e = pt(this),
              { has: n, get: i } = U(e);
            let r = n.call(e, t);
            r ? nt(e, n, t) : ((t = pt(t)), (r = n.call(e, t)));
            const a = i ? i.call(e, t) : void 0,
              s = e.delete(t);
            return r && _(e, 'delete', t, void 0, a), s;
          }
          function V() {
            const t = pt(this),
              e = 0 !== t.size,
              i = n.isMap(t) ? new Map(t) : new Set(t),
              r = t.clear();
            return e && _(t, 'clear', void 0, void 0, i), r;
          }
          function W(t, e) {
            return function (n, i) {
              const r = this,
                s = r.__v_raw,
                o = pt(s),
                l = e ? I : t ? N : O;
              return (
                !t && g(o, 'iterate', a),
                s.forEach((t, e) => n.call(i, l(t), l(e), r))
              );
            };
          }
          function X(t, e, i) {
            return function (...r) {
              const o = this.__v_raw,
                l = pt(o),
                c = n.isMap(l),
                u = 'entries' === t || (t === Symbol.iterator && c),
                h = 'keys' === t && c,
                d = o[t](...r),
                p = i ? I : e ? N : O;
              return (
                !e && g(l, 'iterate', h ? s : a),
                {
                  next() {
                    const { value: t, done: e } = d.next();
                    return e
                      ? { value: t, done: e }
                      : { value: u ? [p(t[0]), p(t[1])] : p(t), done: e };
                  },
                  [Symbol.iterator]() {
                    return this;
                  },
                }
              );
            };
          }
          function j(t) {
            return function (...e) {
              {
                const i = e[0] ? `on key "${e[0]}" ` : '';
                console.warn(
                  `${n.capitalize(
                    t
                  )} operation ${i}failed: target is readonly.`,
                  pt(this)
                );
              }
              return 'delete' !== t && this;
            };
          }
          var q = {
              get(t) {
                return F(this, t);
              },
              get size() {
                return B(this);
              },
              has: z,
              add: k,
              set: G,
              delete: H,
              clear: V,
              forEach: W(!1, !1),
            },
            Y = {
              get(t) {
                return F(this, t, !1, !0);
              },
              get size() {
                return B(this);
              },
              has: z,
              add: k,
              set: G,
              delete: H,
              clear: V,
              forEach: W(!1, !0),
            },
            Z = {
              get(t) {
                return F(this, t, !0);
              },
              get size() {
                return B(this, !0);
              },
              has(t) {
                return z.call(this, t, !0);
              },
              add: j('add'),
              set: j('set'),
              delete: j('delete'),
              clear: j('clear'),
              forEach: W(!0, !1),
            },
            K = {
              get(t) {
                return F(this, t, !0, !0);
              },
              get size() {
                return B(this, !0);
              },
              has(t) {
                return z.call(this, t, !0);
              },
              add: j('add'),
              set: j('set'),
              delete: j('delete'),
              clear: j('clear'),
              forEach: W(!0, !0),
            };
          function J(t, e) {
            const i = e ? (t ? K : Y) : t ? Z : q;
            return (e, r, a) =>
              '__v_isReactive' === r
                ? !t
                : '__v_isReadonly' === r
                ? t
                : '__v_raw' === r
                ? e
                : Reflect.get(n.hasOwn(i, r) && r in e ? i : e, r, a);
          }
          ['keys', 'values', 'entries', Symbol.iterator].forEach((t) => {
            (q[t] = X(t, !1, !1)),
              (Z[t] = X(t, !0, !1)),
              (Y[t] = X(t, !1, !0)),
              (K[t] = X(t, !0, !0));
          });
          var $ = { get: J(!1, !1) },
            Q = { get: J(!1, !0) },
            tt = { get: J(!0, !1) },
            et = { get: J(!0, !0) };
          function nt(t, e, i) {
            const r = pt(i);
            if (r !== i && e.call(t, r)) {
              const e = n.toRawType(t);
              console.warn(
                `Reactive ${e} contains both the raw and reactive versions of the same object${
                  'Map' === e ? ' as keys' : ''
                }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
              );
            }
          }
          var it = new WeakMap(),
            rt = new WeakMap(),
            at = new WeakMap(),
            st = new WeakMap();
          function ot(t) {
            return t && t.__v_isReadonly ? t : ct(t, !1, L, $, it);
          }
          function lt(t) {
            return ct(t, !0, C, tt, at);
          }
          function ct(t, e, i, r, a) {
            if (!n.isObject(t))
              return (
                console.warn(`value cannot be made reactive: ${String(t)}`), t
              );
            if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
            const s = a.get(t);
            if (s) return s;
            const o =
              (l = t).__v_skip || !Object.isExtensible(l)
                ? 0
                : (function (t) {
                    switch (t) {
                      case 'Object':
                      case 'Array':
                        return 1;
                      case 'Map':
                      case 'Set':
                      case 'WeakMap':
                      case 'WeakSet':
                        return 2;
                      default:
                        return 0;
                    }
                  })(n.toRawType(l));
            var l;
            if (0 === o) return t;
            const c = new Proxy(t, 2 === o ? r : i);
            return a.set(t, c), c;
          }
          function ut(t) {
            return ht(t) ? ut(t.__v_raw) : !(!t || !t.__v_isReactive);
          }
          function ht(t) {
            return !(!t || !t.__v_isReadonly);
          }
          function dt(t) {
            return ut(t) || ht(t);
          }
          function pt(t) {
            return (t && pt(t.__v_raw)) || t;
          }
          var ft = (t) => (n.isObject(t) ? ot(t) : t);
          function mt(t) {
            return Boolean(t && !0 === t.__v_isRef);
          }
          function gt(t, e = !1) {
            return mt(t)
              ? t
              : new (class {
                  constructor(t, e = !1) {
                    (this._rawValue = t),
                      (this._shallow = e),
                      (this.__v_isRef = !0),
                      (this._value = e ? t : ft(t));
                  }
                  get value() {
                    return g(pt(this), 'get', 'value'), this._value;
                  }
                  set value(t) {
                    n.hasChanged(pt(t), this._rawValue) &&
                      ((this._rawValue = t),
                      (this._value = this._shallow ? t : ft(t)),
                      _(pt(this), 'set', 'value', t));
                  }
                })(t, e);
          }
          function _t(t) {
            return mt(t) ? t.value : t;
          }
          var vt = {
            get: (t, e, n) => _t(Reflect.get(t, e, n)),
            set: (t, e, n, i) => {
              const r = t[e];
              return mt(r) && !mt(n)
                ? ((r.value = n), !0)
                : Reflect.set(t, e, n, i);
            },
          };
          function xt(t, e) {
            return mt(t[e])
              ? t[e]
              : new (class {
                  constructor(t, e) {
                    (this._object = t), (this._key = e), (this.__v_isRef = !0);
                  }
                  get value() {
                    return this._object[this._key];
                  }
                  set value(t) {
                    this._object[this._key] = t;
                  }
                })(t, e);
          }
          (t.ITERATE_KEY = a),
            (t.computed = function (t) {
              let e, i;
              return (
                n.isFunction(t)
                  ? ((e = t),
                    (i = () => {
                      console.warn(
                        'Write operation failed: computed value is readonly'
                      );
                    }))
                  : ((e = t.get), (i = t.set)),
                new (class {
                  constructor(t, e, n) {
                    (this._setter = e),
                      (this._dirty = !0),
                      (this.__v_isRef = !0),
                      (this.effect = o(t, {
                        lazy: !0,
                        scheduler: () => {
                          this._dirty ||
                            ((this._dirty = !0), _(pt(this), 'set', 'value'));
                        },
                      })),
                      (this.__v_isReadonly = n);
                  }
                  get value() {
                    const t = pt(this);
                    return (
                      t._dirty && ((t._value = this.effect()), (t._dirty = !1)),
                      g(t, 'get', 'value'),
                      t._value
                    );
                  }
                  set value(t) {
                    this._setter(t);
                  }
                })(e, i, n.isFunction(t) || !t.set)
              );
            }),
            (t.customRef = function (t) {
              return new (class {
                constructor(t) {
                  this.__v_isRef = !0;
                  const { get: e, set: n } = t(
                    () => g(this, 'get', 'value'),
                    () => _(this, 'set', 'value')
                  );
                  (this._get = e), (this._set = n);
                }
                get value() {
                  return this._get();
                }
                set value(t) {
                  this._set(t);
                }
              })(t);
            }),
            (t.effect = o),
            (t.enableTracking = p),
            (t.isProxy = dt),
            (t.isReactive = ut),
            (t.isReadonly = ht),
            (t.isRef = mt),
            (t.markRaw = function (t) {
              return n.def(t, '__v_skip', !0), t;
            }),
            (t.pauseTracking = d),
            (t.proxyRefs = function (t) {
              return ut(t) ? t : new Proxy(t, vt);
            }),
            (t.reactive = ot),
            (t.readonly = lt),
            (t.ref = function (t) {
              return gt(t);
            }),
            (t.resetTracking = f),
            (t.shallowReactive = function (t) {
              return ct(t, !1, P, Q, rt);
            }),
            (t.shallowReadonly = function (t) {
              return ct(t, !0, D, et, st);
            }),
            (t.shallowRef = function (t) {
              return gt(t, !0);
            }),
            (t.stop = function (t) {
              t.active &&
                (c(t), t.options.onStop && t.options.onStop(), (t.active = !1));
            }),
            (t.toRaw = pt),
            (t.toRef = xt),
            (t.toRefs = function (t) {
              dt(t) ||
                console.warn(
                  'toRefs() expects a reactive object but received a plain one.'
                );
              const e = n.isArray(t) ? new Array(t.length) : {};
              for (const n in t) e[n] = xt(t, n);
              return e;
            }),
            (t.track = g),
            (t.trigger = _),
            (t.triggerRef = function (t) {
              _(pt(t), 'set', 'value', t.value);
            }),
            (t.unref = _t);
        }),
        _ = p((t, e) => {
          e.exports = g();
        }),
        v = !1,
        x = !1,
        y = [];
      function b(t) {
        let e = y.indexOf(t);
        -1 !== e && y.splice(e, 1);
      }
      function M() {
        (v = !1), (x = !0);
        for (let t = 0; t < y.length; t++) y[t]();
        (y.length = 0), (x = !1);
      }
      var w = !0;
      function S(t) {
        r = t;
      }
      var E = [],
        T = [],
        A = [];
      function R(t, e) {
        'function' == typeof e
          ? (t._x_cleanups || (t._x_cleanups = []), t._x_cleanups.push(e))
          : ((e = t), T.push(e));
      }
      function L(t, e) {
        t._x_attributeCleanups &&
          Object.entries(t._x_attributeCleanups).forEach(([n, i]) => {
            (void 0 === e || e.includes(n)) &&
              (i.forEach((t) => t()), delete t._x_attributeCleanups[n]);
          });
      }
      var C = new MutationObserver(z),
        P = !1;
      function D() {
        C.observe(document, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeOldValue: !0,
        }),
          (P = !0);
      }
      var O = [],
        N = !1;
      function I(t) {
        if (!P) return t();
        (O = O.concat(C.takeRecords())).length &&
          !N &&
          ((N = !0),
          queueMicrotask(() => {
            z(O), (O.length = 0), (N = !1);
          })),
          C.disconnect(),
          (P = !1);
        let e = t();
        return D(), e;
      }
      var U = !1,
        F = [];
      function z(t) {
        if (U) return void (F = F.concat(t));
        let e = [],
          n = [],
          i = new Map(),
          r = new Map();
        for (let a = 0; a < t.length; a++)
          if (
            !t[a].target._x_ignoreMutationObserver &&
            ('childList' === t[a].type &&
              (t[a].addedNodes.forEach((t) => 1 === t.nodeType && e.push(t)),
              t[a].removedNodes.forEach((t) => 1 === t.nodeType && n.push(t))),
            'attributes' === t[a].type)
          ) {
            let e = t[a].target,
              n = t[a].attributeName,
              s = t[a].oldValue,
              o = () => {
                i.has(e) || i.set(e, []),
                  i.get(e).push({ name: n, value: e.getAttribute(n) });
              },
              l = () => {
                r.has(e) || r.set(e, []), r.get(e).push(n);
              };
            e.hasAttribute(n) && null === s
              ? o()
              : e.hasAttribute(n)
              ? (l(), o())
              : l();
          }
        r.forEach((t, e) => {
          L(e, t);
        }),
          i.forEach((t, e) => {
            E.forEach((n) => n(e, t));
          });
        for (let t of n)
          if (!e.includes(t) && (T.forEach((e) => e(t)), t._x_cleanups))
            for (; t._x_cleanups.length; ) t._x_cleanups.pop()();
        e.forEach((t) => {
          (t._x_ignoreSelf = !0), (t._x_ignore = !0);
        });
        for (let t of e)
          n.includes(t) ||
            (t.isConnected &&
              (delete t._x_ignoreSelf,
              delete t._x_ignore,
              A.forEach((e) => e(t)),
              (t._x_ignore = !0),
              (t._x_ignoreSelf = !0)));
        e.forEach((t) => {
          delete t._x_ignoreSelf, delete t._x_ignore;
        }),
          (e = null),
          (n = null),
          (i = null),
          (r = null);
      }
      function B(t) {
        return V(H(t));
      }
      function k(t, e, n) {
        return (
          (t._x_dataStack = [e, ...H(n || t)]),
          () => {
            t._x_dataStack = t._x_dataStack.filter((t) => t !== e);
          }
        );
      }
      function G(t, e) {
        let n = t._x_dataStack[0];
        Object.entries(e).forEach(([t, e]) => {
          n[t] = e;
        });
      }
      function H(t) {
        return t._x_dataStack
          ? t._x_dataStack
          : 'function' == typeof ShadowRoot && t instanceof ShadowRoot
          ? H(t.host)
          : t.parentNode
          ? H(t.parentNode)
          : [];
      }
      function V(t) {
        let e = new Proxy(
          {},
          {
            ownKeys: () =>
              Array.from(new Set(t.flatMap((t) => Object.keys(t)))),
            has: (e, n) => t.some((t) => t.hasOwnProperty(n)),
            get: (n, i) =>
              (t.find((t) => {
                if (t.hasOwnProperty(i)) {
                  let n = Object.getOwnPropertyDescriptor(t, i);
                  if (
                    (n.get && n.get._x_alreadyBound) ||
                    (n.set && n.set._x_alreadyBound)
                  )
                    return !0;
                  if ((n.get || n.set) && n.enumerable) {
                    let r = n.get,
                      a = n.set,
                      s = n;
                    (r = r && r.bind(e)),
                      (a = a && a.bind(e)),
                      r && (r._x_alreadyBound = !0),
                      a && (a._x_alreadyBound = !0),
                      Object.defineProperty(t, i, { ...s, get: r, set: a });
                  }
                  return !0;
                }
                return !1;
              }) || {})[i],
            set: (e, n, i) => {
              let r = t.find((t) => t.hasOwnProperty(n));
              return r ? (r[n] = i) : (t[t.length - 1][n] = i), !0;
            },
          }
        );
        return e;
      }
      function W(t) {
        let e = (n, i = '') => {
          Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
            ([r, { value: a, enumerable: s }]) => {
              if (!1 === s || void 0 === a) return;
              let o = '' === i ? r : `${i}.${r}`;
              var l;
              'object' == typeof a && null !== a && a._x_interceptor
                ? (n[r] = a.initialize(t, o, r))
                : 'object' != typeof (l = a) ||
                  Array.isArray(l) ||
                  null === l ||
                  a === n ||
                  a instanceof Element ||
                  e(a, o);
            }
          );
        };
        return e(t);
      }
      function X(t, e = () => {}) {
        let n = {
          initialValue: void 0,
          _x_interceptor: !0,
          initialize(e, n, i) {
            return t(
              this.initialValue,
              () =>
                (function (t, e) {
                  return e.split('.').reduce((t, e) => t[e], t);
                })(e, n),
              (t) => j(e, n, t),
              n,
              i
            );
          },
        };
        return (
          e(n),
          (t) => {
            if ('object' == typeof t && null !== t && t._x_interceptor) {
              let e = n.initialize.bind(n);
              n.initialize = (i, r, a) => {
                let s = t.initialize(i, r, a);
                return (n.initialValue = s), e(i, r, a);
              };
            } else n.initialValue = t;
            return n;
          }
        );
      }
      function j(t, e, n) {
        if (('string' == typeof e && (e = e.split('.')), 1 !== e.length)) {
          if (0 === e.length) throw error;
          return t[e[0]] || (t[e[0]] = {}), j(t[e[0]], e.slice(1), n);
        }
        t[e[0]] = n;
      }
      var q = {};
      function Y(t, e) {
        q[t] = e;
      }
      function Z(t, e) {
        return (
          Object.entries(q).forEach(([n, i]) => {
            Object.defineProperty(t, `$${n}`, {
              get() {
                let [t, n] = dt(e);
                return (t = { interceptor: X, ...t }), R(e, n), i(e, t);
              },
              enumerable: !1,
            });
          }),
          t
        );
      }
      function K(t, e, n, ...i) {
        try {
          return n(...i);
        } catch (n) {
          J(n, t, e);
        }
      }
      function J(t, e, n) {
        Object.assign(t, { el: e, expression: n }),
          console.warn(
            `Alpine Expression Error: ${t.message}\n\n${
              n ? 'Expression: "' + n + '"\n\n' : ''
            }`,
            e
          ),
          setTimeout(() => {
            throw t;
          }, 0);
      }
      function $(t, e, n = {}) {
        let i;
        return Q(t, e)((t) => (i = t), n), i;
      }
      function Q(...t) {
        return tt(...t);
      }
      var tt = et;
      function et(t, e) {
        let n = {};
        Z(n, t);
        let i = [n, ...H(t)];
        if ('function' == typeof e)
          return (function (t, e) {
            return (n = () => {}, { scope: i = {}, params: r = [] } = {}) => {
              it(n, e.apply(V([i, ...t]), r));
            };
          })(i, e);
        let r = (function (t, e, n) {
          let i = (function (t, e) {
            if (nt[t]) return nt[t];
            let n = Object.getPrototypeOf(async function () {}).constructor,
              i =
                /^[\n\s]*if.*\(.*\)/.test(t) || /^(let|const)\s/.test(t)
                  ? `(() => { ${t} })()`
                  : t,
              r = (() => {
                try {
                  return new n(
                    ['__self', 'scope'],
                    `with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`
                  );
                } catch (n) {
                  return J(n, e, t), Promise.resolve();
                }
              })();
            return (nt[t] = r), r;
          })(e, n);
          return (r = () => {}, { scope: a = {}, params: s = [] } = {}) => {
            (i.result = void 0), (i.finished = !1);
            let o = V([a, ...t]);
            if ('function' == typeof i) {
              let t = i(i, o).catch((t) => J(t, n, e));
              i.finished
                ? (it(r, i.result, o, s, n), (i.result = void 0))
                : t
                    .then((t) => {
                      it(r, t, o, s, n);
                    })
                    .catch((t) => J(t, n, e))
                    .finally(() => (i.result = void 0));
            }
          };
        })(i, e, t);
        return K.bind(null, t, e, r);
      }
      var nt = {};
      function it(t, e, n, i, r) {
        if ('function' == typeof e) {
          let a = e.apply(n, i);
          a instanceof Promise
            ? a.then((e) => it(t, e, n, i)).catch((t) => J(t, r, e))
            : t(a);
        } else t(e);
      }
      var rt = 'x-';
      function at(t = '') {
        return rt + t;
      }
      var st = {};
      function ot(t, e) {
        st[t] = e;
      }
      function lt(t, e, n) {
        let i = {},
          r = Array.from(e)
            .map(ft((t, e) => (i[t] = e)))
            .filter(_t)
            .map(
              (function (t, e) {
                return ({ name: n, value: i }) => {
                  let r = n.match(vt()),
                    a = n.match(/:([a-zA-Z0-9\-:]+)/),
                    s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                    o = e || t[n] || n;
                  return {
                    type: r ? r[1] : null,
                    value: a ? a[1] : null,
                    modifiers: s.map((t) => t.replace('.', '')),
                    expression: i,
                    original: o,
                  };
                };
              })(i, n)
            )
            .sort(bt);
        return r.map((e) =>
          (function (t, e) {
            let n = st[e.type] || (() => {}),
              [i, r] = dt(t);
            !(function (t, e, n) {
              t._x_attributeCleanups || (t._x_attributeCleanups = {}),
                t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
                t._x_attributeCleanups[e].push(n);
            })(t, e.original, r);
            let a = () => {
              t._x_ignore ||
                t._x_ignoreSelf ||
                (n.inline && n.inline(t, e, i),
                (n = n.bind(n, t, e, i)),
                ct ? ut.get(ht).push(n) : n());
            };
            return (a.runCleanups = r), a;
          })(t, e)
        );
      }
      var ct = !1,
        ut = new Map(),
        ht = Symbol();
      function dt(t) {
        let e = [],
          [n, i] = (function (t) {
            let e = () => {};
            return [
              (n) => {
                let i = r(n);
                t._x_effects ||
                  ((t._x_effects = new Set()),
                  (t._x_runEffects = () => {
                    t._x_effects.forEach((t) => t());
                  })),
                  t._x_effects.add(i),
                  (e = () => {
                    void 0 !== i && (t._x_effects.delete(i), a(i));
                  });
              },
              () => {
                e();
              },
            ];
          })(t);
        return (
          e.push(i),
          [
            {
              Alpine: ae,
              effect: n,
              cleanup: (t) => e.push(t),
              evaluateLater: Q.bind(Q, t),
              evaluate: $.bind($, t),
            },
            () => e.forEach((t) => t()),
          ]
        );
      }
      var pt =
        (t, e) =>
        ({ name: n, value: i }) => (
          n.startsWith(t) && (n = n.replace(t, e)), { name: n, value: i }
        );
      function ft(t = () => {}) {
        return ({ name: e, value: n }) => {
          let { name: i, value: r } = mt.reduce((t, e) => e(t), {
            name: e,
            value: n,
          });
          return i !== e && t(i, e), { name: i, value: r };
        };
      }
      var mt = [];
      function gt(t) {
        mt.push(t);
      }
      function _t({ name: t }) {
        return vt().test(t);
      }
      var vt = () => new RegExp(`^${rt}([^:^.]+)\\b`),
        xt = 'DEFAULT',
        yt = [
          'ignore',
          'ref',
          'data',
          'id',
          'bind',
          'init',
          'for',
          'model',
          'modelable',
          'transition',
          'show',
          'if',
          xt,
          'teleport',
          'element',
        ];
      function bt(t, e) {
        let n = -1 === yt.indexOf(t.type) ? xt : t.type,
          i = -1 === yt.indexOf(e.type) ? xt : e.type;
        return yt.indexOf(n) - yt.indexOf(i);
      }
      function Mt(t, e, n = {}) {
        t.dispatchEvent(
          new CustomEvent(e, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
          })
        );
      }
      var wt = [],
        St = !1;
      function Et(t) {
        wt.push(t),
          queueMicrotask(() => {
            St ||
              setTimeout(() => {
                Tt();
              });
          });
      }
      function Tt() {
        for (St = !1; wt.length; ) wt.shift()();
      }
      function At(t, e) {
        if ('function' == typeof ShadowRoot && t instanceof ShadowRoot)
          return void Array.from(t.children).forEach((t) => At(t, e));
        let n = !1;
        if ((e(t, () => (n = !0)), n)) return;
        let i = t.firstElementChild;
        for (; i; ) At(i, e), (i = i.nextElementSibling);
      }
      function Rt(t, ...e) {
        console.warn(`Alpine Warning: ${t}`, ...e);
      }
      var Lt = [],
        Ct = [];
      function Pt() {
        return Lt.map((t) => t());
      }
      function Dt() {
        return Lt.concat(Ct).map((t) => t());
      }
      function Ot(t) {
        Lt.push(t);
      }
      function Nt(t) {
        Ct.push(t);
      }
      function It(t, e = !1) {
        return Ut(t, (t) => {
          if ((e ? Dt() : Pt()).some((e) => t.matches(e))) return !0;
        });
      }
      function Ut(t, e) {
        if (t) {
          if (e(t)) return t;
          if ((t._x_teleportBack && (t = t._x_teleportBack), t.parentElement))
            return Ut(t.parentElement, e);
        }
      }
      function Ft(t, e = At) {
        !(function (n) {
          ct = !0;
          let i = Symbol();
          (ht = i), ut.set(i, []);
          let r = () => {
            for (; ut.get(i).length; ) ut.get(i).shift()();
            ut.delete(i);
          };
          e(t, (t, e) => {
            lt(t, t.attributes).forEach((t) => t()), t._x_ignore && e();
          }),
            (ct = !1),
            r();
        })();
      }
      function zt(t, e) {
        return Array.isArray(e)
          ? Bt(t, e.join(' '))
          : 'object' == typeof e && null !== e
          ? (function (t, e) {
              let n = (t) => t.split(' ').filter(Boolean),
                i = Object.entries(e)
                  .flatMap(([t, e]) => !!e && n(t))
                  .filter(Boolean),
                r = Object.entries(e)
                  .flatMap(([t, e]) => !e && n(t))
                  .filter(Boolean),
                a = [],
                s = [];
              return (
                r.forEach((e) => {
                  t.classList.contains(e) && (t.classList.remove(e), s.push(e));
                }),
                i.forEach((e) => {
                  t.classList.contains(e) || (t.classList.add(e), a.push(e));
                }),
                () => {
                  s.forEach((e) => t.classList.add(e)),
                    a.forEach((e) => t.classList.remove(e));
                }
              );
            })(t, e)
          : 'function' == typeof e
          ? zt(t, e())
          : Bt(t, e);
      }
      function Bt(t, e) {
        return (
          (e = !0 === e ? (e = '') : e || ''),
          (n = e
            .split(' ')
            .filter((e) => !t.classList.contains(e))
            .filter(Boolean)),
          t.classList.add(...n),
          () => {
            t.classList.remove(...n);
          }
        );
        var n;
      }
      function kt(t, e) {
        return 'object' == typeof e && null !== e
          ? (function (t, e) {
              let n = {};
              return (
                Object.entries(e).forEach(([e, i]) => {
                  (n[e] = t.style[e]),
                    e.startsWith('--') ||
                      (e = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()),
                    t.style.setProperty(e, i);
                }),
                setTimeout(() => {
                  0 === t.style.length && t.removeAttribute('style');
                }),
                () => {
                  kt(t, n);
                }
              );
            })(t, e)
          : (function (t, e) {
              let n = t.getAttribute('style', e);
              return (
                t.setAttribute('style', e),
                () => {
                  t.setAttribute('style', n || '');
                }
              );
            })(t, e);
      }
      function Gt(t, e = () => {}) {
        let n = !1;
        return function () {
          n ? e.apply(this, arguments) : ((n = !0), t.apply(this, arguments));
        };
      }
      function Ht(t, e, n = {}) {
        t._x_transition ||
          (t._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(n = () => {}, i = () => {}) {
              Wt(
                t,
                e,
                {
                  during: this.enter.during,
                  start: this.enter.start,
                  end: this.enter.end,
                },
                n,
                i
              );
            },
            out(n = () => {}, i = () => {}) {
              Wt(
                t,
                e,
                {
                  during: this.leave.during,
                  start: this.leave.start,
                  end: this.leave.end,
                },
                n,
                i
              );
            },
          });
      }
      function Vt(t) {
        let e = t.parentNode;
        if (e) return e._x_hidePromise ? e : Vt(e);
      }
      function Wt(
        t,
        e,
        { during: n, start: i, end: r } = {},
        a = () => {},
        s = () => {}
      ) {
        if (
          (t._x_transitioning && t._x_transitioning.cancel(),
          0 === Object.keys(n).length &&
            0 === Object.keys(i).length &&
            0 === Object.keys(r).length)
        )
          return a(), void s();
        let o, l, c;
        !(function (t, e) {
          let n,
            i,
            r,
            a = Gt(() => {
              I(() => {
                (n = !0),
                  i || e.before(),
                  r || (e.end(), Tt()),
                  e.after(),
                  t.isConnected && e.cleanup(),
                  delete t._x_transitioning;
              });
            });
          (t._x_transitioning = {
            beforeCancels: [],
            beforeCancel(t) {
              this.beforeCancels.push(t);
            },
            cancel: Gt(function () {
              for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
              a();
            }),
            finish: a,
          }),
            I(() => {
              e.start(), e.during();
            }),
            (St = !0),
            requestAnimationFrame(() => {
              if (n) return;
              let a =
                  1e3 *
                  Number(
                    getComputedStyle(t)
                      .transitionDuration.replace(/,.*/, '')
                      .replace('s', '')
                  ),
                s =
                  1e3 *
                  Number(
                    getComputedStyle(t)
                      .transitionDelay.replace(/,.*/, '')
                      .replace('s', '')
                  );
              0 === a &&
                (a =
                  1e3 *
                  Number(
                    getComputedStyle(t).animationDuration.replace('s', '')
                  )),
                I(() => {
                  e.before();
                }),
                (i = !0),
                requestAnimationFrame(() => {
                  n ||
                    (I(() => {
                      e.end();
                    }),
                    Tt(),
                    setTimeout(t._x_transitioning.finish, a + s),
                    (r = !0));
                });
            });
        })(t, {
          start() {
            o = e(t, i);
          },
          during() {
            l = e(t, n);
          },
          before: a,
          end() {
            o(), (c = e(t, r));
          },
          after: s,
          cleanup() {
            l(), c();
          },
        });
      }
      function Xt(t, e, n) {
        if (-1 === t.indexOf(e)) return n;
        const i = t[t.indexOf(e) + 1];
        if (!i) return n;
        if ('scale' === e && isNaN(i)) return n;
        if ('duration' === e) {
          let t = i.match(/([0-9]+)ms/);
          if (t) return t[1];
        }
        return 'origin' === e &&
          ['top', 'right', 'left', 'center', 'bottom'].includes(
            t[t.indexOf(e) + 2]
          )
          ? [i, t[t.indexOf(e) + 2]].join(' ')
          : i;
      }
      ot(
        'transition',
        (t, { value: e, modifiers: n, expression: i }, { evaluate: r }) => {
          'function' == typeof i && (i = r(i)),
            i
              ? (function (t, e, n) {
                  Ht(t, zt, ''),
                    {
                      enter: (e) => {
                        t._x_transition.enter.during = e;
                      },
                      'enter-start': (e) => {
                        t._x_transition.enter.start = e;
                      },
                      'enter-end': (e) => {
                        t._x_transition.enter.end = e;
                      },
                      leave: (e) => {
                        t._x_transition.leave.during = e;
                      },
                      'leave-start': (e) => {
                        t._x_transition.leave.start = e;
                      },
                      'leave-end': (e) => {
                        t._x_transition.leave.end = e;
                      },
                    }[n](e);
                })(t, i, e)
              : (function (t, e, n) {
                  Ht(t, kt);
                  let i = !e.includes('in') && !e.includes('out') && !n,
                    r = i || e.includes('in') || ['enter'].includes(n),
                    a = i || e.includes('out') || ['leave'].includes(n);
                  e.includes('in') &&
                    !i &&
                    (e = e.filter((t, n) => n < e.indexOf('out'))),
                    e.includes('out') &&
                      !i &&
                      (e = e.filter((t, n) => n > e.indexOf('out')));
                  let s = !e.includes('opacity') && !e.includes('scale'),
                    o = s || e.includes('opacity') ? 0 : 1,
                    l = s || e.includes('scale') ? Xt(e, 'scale', 95) / 100 : 1,
                    c = Xt(e, 'delay', 0),
                    u = Xt(e, 'origin', 'center'),
                    h = 'opacity, transform',
                    d = Xt(e, 'duration', 150) / 1e3,
                    p = Xt(e, 'duration', 75) / 1e3,
                    f = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
                  r &&
                    ((t._x_transition.enter.during = {
                      transformOrigin: u,
                      transitionDelay: c,
                      transitionProperty: h,
                      transitionDuration: `${d}s`,
                      transitionTimingFunction: f,
                    }),
                    (t._x_transition.enter.start = {
                      opacity: o,
                      transform: `scale(${l})`,
                    }),
                    (t._x_transition.enter.end = {
                      opacity: 1,
                      transform: 'scale(1)',
                    })),
                    a &&
                      ((t._x_transition.leave.during = {
                        transformOrigin: u,
                        transitionDelay: c,
                        transitionProperty: h,
                        transitionDuration: `${p}s`,
                        transitionTimingFunction: f,
                      }),
                      (t._x_transition.leave.start = {
                        opacity: 1,
                        transform: 'scale(1)',
                      }),
                      (t._x_transition.leave.end = {
                        opacity: o,
                        transform: `scale(${l})`,
                      }));
                })(t, n, e);
        }
      ),
        (window.Element.prototype._x_toggleAndCascadeWithTransitions =
          function (t, e, n, i) {
            let r = () => {
              'visible' === document.visibilityState
                ? requestAnimationFrame(n)
                : setTimeout(n);
            };
            e
              ? t._x_transition &&
                (t._x_transition.enter || t._x_transition.leave)
                ? t._x_transition.enter &&
                  (Object.entries(t._x_transition.enter.during).length ||
                    Object.entries(t._x_transition.enter.start).length ||
                    Object.entries(t._x_transition.enter.end).length)
                  ? t._x_transition.in(n)
                  : r()
                : t._x_transition
                ? t._x_transition.in(n)
                : r()
              : ((t._x_hidePromise = t._x_transition
                  ? new Promise((e, n) => {
                      t._x_transition.out(
                        () => {},
                        () => e(i)
                      ),
                        t._x_transitioning.beforeCancel(() =>
                          n({ isFromCancelledTransition: !0 })
                        );
                    })
                  : Promise.resolve(i)),
                queueMicrotask(() => {
                  let e = Vt(t);
                  e
                    ? (e._x_hideChildren || (e._x_hideChildren = []),
                      e._x_hideChildren.push(t))
                    : queueMicrotask(() => {
                        let e = (t) => {
                          let n = Promise.all([
                            t._x_hidePromise,
                            ...(t._x_hideChildren || []).map(e),
                          ]).then(([t]) => t());
                          return (
                            delete t._x_hidePromise, delete t._x_hideChildren, n
                          );
                        };
                        e(t).catch((t) => {
                          if (!t.isFromCancelledTransition) throw t;
                        });
                      });
                }));
          });
      var jt = !1;
      function qt(t, e = () => {}) {
        return (...n) => (jt ? e(...n) : t(...n));
      }
      function Yt(t, e, n, r = []) {
        switch (
          (t._x_bindings || (t._x_bindings = i({})),
          (t._x_bindings[e] = n),
          (e = r.includes('camel')
            ? e.toLowerCase().replace(/-(\w)/g, (t, e) => e.toUpperCase())
            : e))
        ) {
          case 'value':
            !(function (t, e) {
              if ('radio' === t.type)
                void 0 === t.attributes.value && (t.value = e),
                  window.fromModel && (t.checked = Zt(t.value, e));
              else if ('checkbox' === t.type)
                Number.isInteger(e)
                  ? (t.value = e)
                  : Number.isInteger(e) ||
                    Array.isArray(e) ||
                    'boolean' == typeof e ||
                    [null, void 0].includes(e)
                  ? Array.isArray(e)
                    ? (t.checked = e.some((e) => Zt(e, t.value)))
                    : (t.checked = !!e)
                  : (t.value = String(e));
              else if ('SELECT' === t.tagName)
                !(function (t, e) {
                  const n = [].concat(e).map((t) => t + '');
                  Array.from(t.options).forEach((t) => {
                    t.selected = n.includes(t.value);
                  });
                })(t, e);
              else {
                if (t.value === e) return;
                t.value = e;
              }
            })(t, n);
            break;
          case 'style':
            !(function (t, e) {
              t._x_undoAddedStyles && t._x_undoAddedStyles(),
                (t._x_undoAddedStyles = kt(t, e));
            })(t, n);
            break;
          case 'class':
            !(function (t, e) {
              t._x_undoAddedClasses && t._x_undoAddedClasses(),
                (t._x_undoAddedClasses = zt(t, e));
            })(t, n);
            break;
          default:
            !(function (t, e, n) {
              [null, void 0, !1].includes(n) &&
              (function (t) {
                return ![
                  'aria-pressed',
                  'aria-checked',
                  'aria-expanded',
                  'aria-selected',
                ].includes(t);
              })(e)
                ? t.removeAttribute(e)
                : (Kt(e) && (n = e),
                  (function (t, e, n) {
                    t.getAttribute(e) != n && t.setAttribute(e, n);
                  })(t, e, n));
            })(t, e, n);
        }
      }
      function Zt(t, e) {
        return t == e;
      }
      function Kt(t) {
        return [
          'disabled',
          'checked',
          'required',
          'readonly',
          'hidden',
          'open',
          'selected',
          'autofocus',
          'itemscope',
          'multiple',
          'novalidate',
          'allowfullscreen',
          'allowpaymentrequest',
          'formnovalidate',
          'autoplay',
          'controls',
          'loop',
          'muted',
          'playsinline',
          'default',
          'ismap',
          'reversed',
          'async',
          'defer',
          'nomodule',
        ].includes(t);
      }
      function Jt(t, e) {
        var n;
        return function () {
          var i = this,
            r = arguments,
            a = function () {
              (n = null), t.apply(i, r);
            };
          clearTimeout(n), (n = setTimeout(a, e));
        };
      }
      function $t(t, e) {
        let n;
        return function () {
          let i = this,
            r = arguments;
          n || (t.apply(i, r), (n = !0), setTimeout(() => (n = !1), e));
        };
      }
      var Qt,
        te,
        ee = {},
        ne = !1,
        ie = {},
        re = {},
        ae = {
          get reactive() {
            return i;
          },
          get release() {
            return a;
          },
          get effect() {
            return r;
          },
          get raw() {
            return s;
          },
          version: '3.9.1',
          flushAndStopDeferringMutations: function () {
            (U = !1), z(F), (F = []);
          },
          disableEffectScheduling: function (t) {
            (w = !1), t(), (w = !0);
          },
          setReactivityEngine: function (t) {
            (i = t.reactive),
              (a = t.release),
              (r = (e) =>
                t.effect(e, {
                  scheduler: (t) => {
                    w
                      ? (function (t) {
                          var e;
                          (e = t),
                            y.includes(e) || y.push(e),
                            x || v || ((v = !0), queueMicrotask(M));
                        })(t)
                      : t();
                  },
                })),
              (s = t.raw);
          },
          closestDataStack: H,
          skipDuringClone: qt,
          addRootSelector: Ot,
          addInitSelector: Nt,
          addScopeToNode: k,
          deferMutations: function () {
            U = !0;
          },
          mapAttributes: gt,
          evaluateLater: Q,
          setEvaluator: function (t) {
            tt = t;
          },
          mergeProxies: V,
          findClosest: Ut,
          closestRoot: It,
          interceptor: X,
          transition: Wt,
          setStyles: kt,
          mutateDom: I,
          directive: ot,
          throttle: $t,
          debounce: Jt,
          evaluate: $,
          initTree: Ft,
          nextTick: Et,
          prefixed: at,
          prefix: function (t) {
            rt = t;
          },
          plugin: function (t) {
            t(ae);
          },
          magic: Y,
          store: function (t, e) {
            if ((ne || ((ee = i(ee)), (ne = !0)), void 0 === e)) return ee[t];
            (ee[t] = e),
              'object' == typeof e &&
                null !== e &&
                e.hasOwnProperty('init') &&
                'function' == typeof e.init &&
                ee[t].init(),
              W(ee[t]);
          },
          start: function () {
            var t;
            document.body ||
              Rt(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
              ),
              Mt(document, 'alpine:init'),
              Mt(document, 'alpine:initializing'),
              D(),
              (t = (t) => Ft(t, At)),
              A.push(t),
              R((t) => {
                At(t, (t) => L(t));
              }),
              E.push((t, e) => {
                lt(t, e).forEach((t) => t());
              }),
              Array.from(document.querySelectorAll(Dt()))
                .filter((t) => !It(t.parentElement, !0))
                .forEach((t) => {
                  Ft(t);
                }),
              Mt(document, 'alpine:initialized');
          },
          clone: function (t, e) {
            e._x_dataStack || (e._x_dataStack = t._x_dataStack),
              (jt = !0),
              (function (t) {
                let n = r;
                S((t, e) => {
                  let i = n(t);
                  return a(i), () => {};
                }),
                  (function (t) {
                    let e = !1;
                    Ft(t, (t, n) => {
                      At(t, (t, i) => {
                        if (
                          e &&
                          (function (t) {
                            return Pt().some((e) => t.matches(e));
                          })(t)
                        )
                          return i();
                        (e = !0), n(t, i);
                      });
                    });
                  })(e),
                  S(n);
              })(),
              (jt = !1);
          },
          bound: function (t, e, n) {
            if (t._x_bindings && void 0 !== t._x_bindings[e])
              return t._x_bindings[e];
            let i = t.getAttribute(e);
            return null === i
              ? 'function' == typeof n
                ? n()
                : n
              : Kt(e)
              ? !![e, 'true'].includes(i)
              : '' === i || i;
          },
          $data: B,
          data: function (t, e) {
            re[t] = e;
          },
          bind: function (t, e) {
            ie[t] = 'function' != typeof e ? () => e : e;
          },
        },
        se =
          ((Qt = _()),
          ((t, e, n) => {
            if ((e && 'object' == typeof e) || 'function' == typeof e)
              for (let i of h(e))
                u.call(t, i) ||
                  'default' === i ||
                  l(t, i, {
                    get: () => e[i],
                    enumerable: !(n = d(e, i)) || n.enumerable,
                  });
            return t;
          })(
            ((te = l(
              null != Qt ? o(c(Qt)) : {},
              'default',
              Qt && Qt.__esModule && 'default' in Qt
                ? { get: () => Qt.default, enumerable: !0 }
                : { value: Qt, enumerable: !0 }
            )),
            l(te, '__esModule', { value: !0 })),
            Qt
          ));
      Y('nextTick', () => Et),
        Y('dispatch', (t) => Mt.bind(Mt, t)),
        Y('watch', (t, { evaluateLater: e, effect: n }) => (t, i) => {
          let r,
            a = e(t),
            s = !0;
          n(() =>
            a((t) => {
              JSON.stringify(t),
                s
                  ? (r = t)
                  : queueMicrotask(() => {
                      i(t, r), (r = t);
                    }),
                (s = !1);
            })
          );
        }),
        Y('store', function () {
          return ee;
        }),
        Y('data', (t) => B(t)),
        Y('root', (t) => It(t)),
        Y(
          'refs',
          (t) => (
            t._x_refs_proxy ||
              (t._x_refs_proxy = V(
                (function (t) {
                  let e = [],
                    n = t;
                  for (; n; )
                    n._x_refs && e.push(n._x_refs), (n = n.parentNode);
                  return e;
                })(t)
              )),
            t._x_refs_proxy
          )
        );
      var oe = {};
      function le(t) {
        return oe[t] || (oe[t] = 0), ++oe[t];
      }
      Y('id', (t) => (e, n = null) => {
        let i = (function (t, e) {
            return Ut(t, (t) => {
              if (t._x_ids && t._x_ids[e]) return !0;
            });
          })(t, e),
          r = i ? i._x_ids[e] : le(e);
        return n ? `${e}-${r}-${n}` : `${e}-${r}`;
      }),
        Y('el', (t) => t),
        ot(
          'modelable',
          (
            t,
            { expression: e },
            { effect: n, evaluate: i, evaluateLater: r }
          ) => {
            let a = r(e),
              s = () => {
                let t;
                return a((e) => (t = e)), t;
              },
              o = r(`${e} = __placeholder`),
              l = (t) => o(() => {}, { scope: { __placeholder: t } }),
              c = s();
            t._x_modelable_hook && (c = t._x_modelable_hook(c)),
              l(c),
              queueMicrotask(() => {
                if (!t._x_model) return;
                let e = t._x_model.get,
                  i = t._x_model.set;
                n(() => l(e())), n(() => i(s()));
              });
          }
        ),
        ot('teleport', (t, { expression: e }, { cleanup: n }) => {
          'template' !== t.tagName.toLowerCase() &&
            Rt('x-teleport can only be used on a <template> tag', t);
          let i = document.querySelector(e);
          i || Rt(`Cannot find x-teleport element for selector: "${e}"`);
          let r = t.content.cloneNode(!0).firstElementChild;
          (t._x_teleport = r),
            (r._x_teleportBack = t),
            t._x_forwardEvents &&
              t._x_forwardEvents.forEach((e) => {
                r.addEventListener(e, (e) => {
                  e.stopPropagation(),
                    t.dispatchEvent(new e.constructor(e.type, e));
                });
              }),
            k(r, {}, t),
            I(() => {
              i.appendChild(r), Ft(r), (r._x_ignore = !0);
            }),
            n(() => r.remove());
        });
      var ce = () => {};
      function ue(t, e, n, i) {
        let r = t,
          a = (t) => i(t),
          s = {},
          o = (t, e) => (n) => e(t, n);
        if (
          (n.includes('dot') && (e = e.replace(/-/g, '.')),
          n.includes('camel') &&
            (e = e.toLowerCase().replace(/-(\w)/g, (t, e) => e.toUpperCase())),
          n.includes('passive') && (s.passive = !0),
          n.includes('capture') && (s.capture = !0),
          n.includes('window') && (r = window),
          n.includes('document') && (r = document),
          n.includes('prevent') &&
            (a = o(a, (t, e) => {
              e.preventDefault(), t(e);
            })),
          n.includes('stop') &&
            (a = o(a, (t, e) => {
              e.stopPropagation(), t(e);
            })),
          n.includes('self') &&
            (a = o(a, (e, n) => {
              n.target === t && e(n);
            })),
          (n.includes('away') || n.includes('outside')) &&
            ((r = document),
            (a = o(a, (e, n) => {
              t.contains(n.target) ||
                (t.offsetWidth < 1 && t.offsetHeight < 1) ||
                (!1 !== t._x_isShown && e(n));
            }))),
          (a = o(a, (t, i) => {
            ((function (t) {
              return ['keydown', 'keyup'].includes(t);
            })(e) &&
              (function (t, e) {
                let n = e.filter(
                  (t) =>
                    !['window', 'document', 'prevent', 'stop', 'once'].includes(
                      t
                    )
                );
                if (n.includes('debounce')) {
                  let t = n.indexOf('debounce');
                  n.splice(
                    t,
                    he((n[t + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1
                  );
                }
                if (0 === n.length) return !1;
                if (1 === n.length && de(t.key).includes(n[0])) return !1;
                const i = [
                  'ctrl',
                  'shift',
                  'alt',
                  'meta',
                  'cmd',
                  'super',
                ].filter((t) => n.includes(t));
                return (
                  (n = n.filter((t) => !i.includes(t))),
                  !(
                    i.length > 0 &&
                    i.filter(
                      (e) => (
                        ('cmd' !== e && 'super' !== e) || (e = 'meta'),
                        t[`${e}Key`]
                      )
                    ).length === i.length &&
                    de(t.key).includes(n[0])
                  )
                );
              })(i, n)) ||
              t(i);
          })),
          n.includes('debounce'))
        ) {
          let t = n[n.indexOf('debounce') + 1] || 'invalid-wait',
            e = he(t.split('ms')[0]) ? Number(t.split('ms')[0]) : 250;
          a = Jt(a, e);
        }
        if (n.includes('throttle')) {
          let t = n[n.indexOf('throttle') + 1] || 'invalid-wait',
            e = he(t.split('ms')[0]) ? Number(t.split('ms')[0]) : 250;
          a = $t(a, e);
        }
        return (
          n.includes('once') &&
            (a = o(a, (t, n) => {
              t(n), r.removeEventListener(e, a, s);
            })),
          r.addEventListener(e, a, s),
          () => {
            r.removeEventListener(e, a, s);
          }
        );
      }
      function he(t) {
        return !Array.isArray(t) && !isNaN(t);
      }
      function de(t) {
        if (!t) return [];
        t = t
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[_\s]/, '-')
          .toLowerCase();
        let e = {
          ctrl: 'control',
          slash: '/',
          space: '-',
          spacebar: '-',
          cmd: 'meta',
          esc: 'escape',
          up: 'arrow-up',
          down: 'arrow-down',
          left: 'arrow-left',
          right: 'arrow-right',
          period: '.',
          equal: '=',
        };
        return (
          (e[t] = t),
          Object.keys(e)
            .map((n) => {
              if (e[n] === t) return n;
            })
            .filter((t) => t)
        );
      }
      function pe(t) {
        let e = t ? parseFloat(t) : null;
        return (n = e), Array.isArray(n) || isNaN(n) ? t : e;
        var n;
      }
      function fe(t, e, n, i) {
        let r = {};
        return (
          /^\[.*\]$/.test(t.item) && Array.isArray(e)
            ? t.item
                .replace('[', '')
                .replace(']', '')
                .split(',')
                .map((t) => t.trim())
                .forEach((t, n) => {
                  r[t] = e[n];
                })
            : /^\{.*\}$/.test(t.item) &&
              !Array.isArray(e) &&
              'object' == typeof e
            ? t.item
                .replace('{', '')
                .replace('}', '')
                .split(',')
                .map((t) => t.trim())
                .forEach((t) => {
                  r[t] = e[t];
                })
            : (r[t.item] = e),
          t.index && (r[t.index] = n),
          t.collection && (r[t.collection] = i),
          r
        );
      }
      function me() {}
      (ce.inline = (t, { modifiers: e }, { cleanup: n }) => {
        e.includes('self') ? (t._x_ignoreSelf = !0) : (t._x_ignore = !0),
          n(() => {
            e.includes('self') ? delete t._x_ignoreSelf : delete t._x_ignore;
          });
      }),
        ot('ignore', ce),
        ot('effect', (t, { expression: e }, { effect: n }) => n(Q(t, e))),
        ot(
          'model',
          (t, { modifiers: e, expression: n }, { effect: i, cleanup: r }) => {
            let a = Q(t, n),
              s = Q(t, `${n} = rightSideOfExpression($event, ${n})`);
            var o =
              'select' === t.tagName.toLowerCase() ||
              ['checkbox', 'radio'].includes(t.type) ||
              e.includes('lazy')
                ? 'change'
                : 'input';
            let l = (function (t, e, n) {
                return (
                  'radio' === t.type &&
                    I(() => {
                      t.hasAttribute('name') || t.setAttribute('name', n);
                    }),
                  (n, i) =>
                    I(() => {
                      if (n instanceof CustomEvent && void 0 !== n.detail)
                        return n.detail || n.target.value;
                      if ('checkbox' === t.type) {
                        if (Array.isArray(i)) {
                          let t = e.includes('number')
                            ? pe(n.target.value)
                            : n.target.value;
                          return n.target.checked
                            ? i.concat([t])
                            : i.filter((e) => !(e == t));
                        }
                        return n.target.checked;
                      }
                      if ('select' === t.tagName.toLowerCase() && t.multiple)
                        return e.includes('number')
                          ? Array.from(n.target.selectedOptions).map((t) =>
                              pe(t.value || t.text)
                            )
                          : Array.from(n.target.selectedOptions).map(
                              (t) => t.value || t.text
                            );
                      {
                        let t = n.target.value;
                        return e.includes('number')
                          ? pe(t)
                          : e.includes('trim')
                          ? t.trim()
                          : t;
                      }
                    })
                );
              })(t, e, n),
              c = ue(t, o, e, (t) => {
                s(() => {}, { scope: { $event: t, rightSideOfExpression: l } });
              });
            r(() => c());
            let u = Q(t, `${n} = __placeholder`);
            (t._x_model = {
              get() {
                let t;
                return a((e) => (t = e)), t;
              },
              set(t) {
                u(() => {}, { scope: { __placeholder: t } });
              },
            }),
              (t._x_forceModelUpdate = () => {
                a((e) => {
                  void 0 === e && n.match(/\./) && (e = ''),
                    (window.fromModel = !0),
                    I(() => Yt(t, 'value', e)),
                    delete window.fromModel;
                });
              }),
              i(() => {
                (e.includes('unintrusive') &&
                  document.activeElement.isSameNode(t)) ||
                  t._x_forceModelUpdate();
              });
          }
        ),
        ot('cloak', (t) =>
          queueMicrotask(() => I(() => t.removeAttribute(at('cloak'))))
        ),
        Nt(() => `[${at('init')}]`),
        ot(
          'init',
          qt((t, { expression: e }, { evaluate: n }) =>
            'string' == typeof e ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)
          )
        ),
        ot('text', (t, { expression: e }, { effect: n, evaluateLater: i }) => {
          let r = i(e);
          n(() => {
            r((e) => {
              I(() => {
                t.textContent = e;
              });
            });
          });
        }),
        ot('html', (t, { expression: e }, { effect: n, evaluateLater: i }) => {
          let r = i(e);
          n(() => {
            r((e) => {
              t.innerHTML = e;
            });
          });
        }),
        gt(pt(':', at('bind:'))),
        ot(
          'bind',
          (
            t,
            { value: e, modifiers: n, expression: i, original: r },
            { effect: a }
          ) => {
            if (!e)
              return (function (t, e, n, i) {
                let r = {};
                var a;
                (a = r),
                  Object.entries(ie).forEach(([t, e]) => {
                    Object.defineProperty(a, t, {
                      get:
                        () =>
                        (...t) =>
                          e(...t),
                    });
                  });
                let s = Q(t, e),
                  o = [];
                for (; o.length; ) o.pop()();
                s(
                  (e) => {
                    let i = Object.entries(e).map(([t, e]) => ({
                        name: t,
                        value: e,
                      })),
                      r = (function (t) {
                        return Array.from(t)
                          .map(ft())
                          .filter((t) => !_t(t));
                      })(i);
                    (i = i.map((t) =>
                      r.find((e) => e.name === t.name)
                        ? { name: `x-bind:${t.name}`, value: `"${t.value}"` }
                        : t
                    )),
                      lt(t, i, n).map((t) => {
                        o.push(t.runCleanups), t();
                      });
                  },
                  { scope: r }
                );
              })(t, i, r);
            if ('key' === e)
              return (function (t, e) {
                t._x_keyExpression = e;
              })(t, i);
            let s = Q(t, i);
            a(() =>
              s((r) => {
                void 0 === r && i.match(/\./) && (r = ''),
                  I(() => Yt(t, e, r, n));
              })
            );
          }
        ),
        Ot(() => `[${at('data')}]`),
        ot(
          'data',
          qt((t, { expression: e }, { cleanup: n }) => {
            e = '' === e ? '{}' : e;
            let r = {};
            Z(r, t);
            let a = {};
            var s, o;
            (s = a),
              (o = r),
              Object.entries(re).forEach(([t, e]) => {
                Object.defineProperty(s, t, {
                  get:
                    () =>
                    (...t) =>
                      e.bind(o)(...t),
                  enumerable: !1,
                });
              });
            let l = $(t, e, { scope: a });
            void 0 === l && (l = {}), Z(l, t);
            let c = i(l);
            W(c);
            let u = k(t, c);
            c.init && $(t, c.init),
              n(() => {
                u(), c.destroy && $(t, c.destroy);
              });
          })
        ),
        ot('show', (t, { modifiers: e, expression: n }, { effect: i }) => {
          let r,
            a = Q(t, n),
            s = () =>
              I(() => {
                (t.style.display = 'none'), (t._x_isShown = !1);
              }),
            o = () =>
              I(() => {
                1 === t.style.length && 'none' === t.style.display
                  ? t.removeAttribute('style')
                  : t.style.removeProperty('display'),
                  (t._x_isShown = !0);
              }),
            l = () => setTimeout(o),
            c = Gt(
              (t) => (t ? o() : s()),
              (e) => {
                'function' == typeof t._x_toggleAndCascadeWithTransitions
                  ? t._x_toggleAndCascadeWithTransitions(t, e, o, s)
                  : e
                  ? l()
                  : s();
              }
            ),
            u = !0;
          i(() =>
            a((t) => {
              (u || t !== r) &&
                (e.includes('immediate') && (t ? l() : s()),
                c(t),
                (r = t),
                (u = !1));
            })
          );
        }),
        ot('for', (t, { expression: e }, { effect: n, cleanup: r }) => {
          let a = (function (t) {
              let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                n = t.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
              if (!n) return;
              let i = {};
              i.items = n[2].trim();
              let r = n[1].replace(/^\s*\(|\)\s*$/g, '').trim(),
                a = r.match(e);
              return (
                a
                  ? ((i.item = r.replace(e, '').trim()),
                    (i.index = a[1].trim()),
                    a[2] && (i.collection = a[2].trim()))
                  : (i.item = r),
                i
              );
            })(e),
            s = Q(t, a.items),
            o = Q(t, t._x_keyExpression || 'index');
          (t._x_prevKeys = []),
            (t._x_lookup = {}),
            n(() =>
              (function (t, e, n, r) {
                let a = t;
                n((n) => {
                  var s;
                  (s = n),
                    !Array.isArray(s) &&
                      !isNaN(s) &&
                      n >= 0 &&
                      (n = Array.from(Array(n).keys(), (t) => t + 1)),
                    void 0 === n && (n = []);
                  let o = t._x_lookup,
                    l = t._x_prevKeys,
                    c = [],
                    u = [];
                  if ('object' != typeof (h = n) || Array.isArray(h))
                    for (let t = 0; t < n.length; t++) {
                      let i = fe(e, n[t], t, n);
                      r((t) => u.push(t), { scope: { index: t, ...i } }),
                        c.push(i);
                    }
                  else
                    n = Object.entries(n).map(([t, i]) => {
                      let a = fe(e, i, t, n);
                      r((t) => u.push(t), { scope: { index: t, ...a } }),
                        c.push(a);
                    });
                  var h;
                  let d = [],
                    p = [],
                    f = [],
                    m = [];
                  for (let t = 0; t < l.length; t++) {
                    let e = l[t];
                    -1 === u.indexOf(e) && f.push(e);
                  }
                  l = l.filter((t) => !f.includes(t));
                  let g = 'template';
                  for (let t = 0; t < u.length; t++) {
                    let e = u[t],
                      n = l.indexOf(e);
                    if (-1 === n) l.splice(t, 0, e), d.push([g, t]);
                    else if (n !== t) {
                      let e = l.splice(t, 1)[0],
                        i = l.splice(n - 1, 1)[0];
                      l.splice(t, 0, i), l.splice(n, 0, e), p.push([e, i]);
                    } else m.push(e);
                    g = e;
                  }
                  for (let t = 0; t < f.length; t++) {
                    let e = f[t];
                    o[e]._x_effects && o[e]._x_effects.forEach(b),
                      o[e].remove(),
                      (o[e] = null),
                      delete o[e];
                  }
                  for (let t = 0; t < p.length; t++) {
                    let [e, n] = p[t],
                      i = o[e],
                      r = o[n],
                      a = document.createElement('div');
                    I(() => {
                      r.after(a),
                        i.after(r),
                        r._x_currentIfEl && r.after(r._x_currentIfEl),
                        a.before(i),
                        i._x_currentIfEl && i.after(i._x_currentIfEl),
                        a.remove();
                    }),
                      G(r, c[u.indexOf(n)]);
                  }
                  for (let t = 0; t < d.length; t++) {
                    let [e, n] = d[t],
                      r = 'template' === e ? a : o[e];
                    r._x_currentIfEl && (r = r._x_currentIfEl);
                    let s = c[n],
                      l = u[n],
                      h = document.importNode(a.content, !0).firstElementChild;
                    k(h, i(s), a),
                      I(() => {
                        r.after(h), Ft(h);
                      }),
                      'object' == typeof l &&
                        Rt(
                          'x-for key cannot be an object, it must be a string or an integer',
                          a
                        ),
                      (o[l] = h);
                  }
                  for (let t = 0; t < m.length; t++)
                    G(o[m[t]], c[u.indexOf(m[t])]);
                  a._x_prevKeys = u;
                });
              })(t, a, s, o)
            ),
            r(() => {
              Object.values(t._x_lookup).forEach((t) => t.remove()),
                delete t._x_prevKeys,
                delete t._x_lookup;
            });
        }),
        (me.inline = (t, { expression: e }, { cleanup: n }) => {
          let i = It(t);
          i._x_refs || (i._x_refs = {}),
            (i._x_refs[e] = t),
            n(() => delete i._x_refs[e]);
        }),
        ot('ref', me),
        ot('if', (t, { expression: e }, { effect: n, cleanup: i }) => {
          let r = Q(t, e);
          n(() =>
            r((e) => {
              e
                ? (() => {
                    if (t._x_currentIfEl) return t._x_currentIfEl;
                    let e = t.content.cloneNode(!0).firstElementChild;
                    k(e, {}, t),
                      I(() => {
                        t.after(e), Ft(e);
                      }),
                      (t._x_currentIfEl = e),
                      (t._x_undoIf = () => {
                        At(e, (t) => {
                          t._x_effects && t._x_effects.forEach(b);
                        }),
                          e.remove(),
                          delete t._x_currentIfEl;
                      });
                  })()
                : t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf);
            })
          ),
            i(() => t._x_undoIf && t._x_undoIf());
        }),
        ot('id', (t, { expression: e }, { evaluate: n }) => {
          n(e).forEach((e) =>
            (function (t, e) {
              t._x_ids || (t._x_ids = {}), t._x_ids[e] || (t._x_ids[e] = le(e));
            })(t, e)
          );
        }),
        gt(pt('@', at('on:'))),
        ot(
          'on',
          qt((t, { value: e, modifiers: n, expression: i }, { cleanup: r }) => {
            let a = i ? Q(t, i) : () => {};
            'template' === t.tagName.toLowerCase() &&
              (t._x_forwardEvents || (t._x_forwardEvents = []),
              t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
            let s = ue(t, e, n, (t) => {
              a(() => {}, { scope: { $event: t }, params: [t] });
            });
            r(() => s());
          })
        ),
        ae.setEvaluator(et),
        ae.setReactivityEngine({
          reactive: se.reactive,
          effect: se.effect,
          release: se.stop,
          raw: se.toRaw,
        });
      var ge = ae;
    },
    358: (t, e, n) => {
      'use strict';
      function i(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      n.d(e, { p8: () => Ui });
      var a,
        s,
        o,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        m,
        g,
        _,
        v,
        x,
        y,
        b,
        M,
        w,
        S,
        E,
        T,
        A,
        R,
        L,
        C,
        P,
        D,
        O = {
          autoSleep: 120,
          force3D: 'auto',
          nullTargetWarn: 1,
          units: { lineHeight: '' },
        },
        N = { duration: 0.5, overwrite: !1, delay: 0 },
        I = 1e8,
        U = 1e-8,
        F = 2 * Math.PI,
        z = F / 4,
        B = 0,
        k = Math.sqrt,
        G = Math.cos,
        H = Math.sin,
        V = function (t) {
          return 'string' == typeof t;
        },
        W = function (t) {
          return 'function' == typeof t;
        },
        X = function (t) {
          return 'number' == typeof t;
        },
        j = function (t) {
          return void 0 === t;
        },
        q = function (t) {
          return 'object' == typeof t;
        },
        Y = function (t) {
          return !1 !== t;
        },
        Z = function () {
          return 'undefined' != typeof window;
        },
        K = function (t) {
          return W(t) || V(t);
        },
        J =
          ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        $ = Array.isArray,
        Q = /(?:-?\.?\d|\.)+/gi,
        tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        nt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        it = /[+-]=-?[.\d]+/,
        rt = /[^,'"\[\]\s]+/gi,
        at = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        st = {},
        ot = {},
        lt = function (t) {
          return (ot = Ot(t, st)) && bn;
        },
        ct = function (t, e) {
          return console.warn(
            'Invalid property',
            t,
            'set to',
            e,
            'Missing plugin? gsap.registerPlugin()'
          );
        },
        ut = function (t, e) {
          return !e && console.warn(t);
        },
        ht = function (t, e) {
          return (t && (st[t] = e) && ot && (ot[t] = e)) || st;
        },
        dt = function () {
          return 0;
        },
        pt = {},
        ft = [],
        mt = {},
        gt = {},
        _t = {},
        vt = 30,
        xt = [],
        yt = '',
        bt = function (t) {
          var e,
            n,
            i = t[0];
          if ((q(i) || W(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (n = xt.length; n-- && !xt[n].targetTest(i); );
            e = xt[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new We(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        Mt = function (t) {
          return t._gsap || bt(ce(t))[0]._gsap;
        },
        wt = function (t, e, n) {
          return (n = t[e]) && W(n)
            ? t[e]()
            : (j(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        St = function (t, e) {
          return (t = t.split(',')).forEach(e) || t;
        },
        Et = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Tt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        At = function (t, e) {
          for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
          return i < n;
        },
        Rt = function () {
          var t,
            e,
            n = ft.length,
            i = ft.slice(0);
          for (mt = {}, ft.length = 0, t = 0; t < n; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Lt = function (t, e, n, i) {
          ft.length && Rt(), t.render(e, n, i), ft.length && Rt();
        },
        Ct = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + '').match(rt).length < 2
            ? e
            : V(t)
            ? t.trim()
            : t;
        },
        Pt = function (t) {
          return t;
        },
        Dt = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        Ot = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        Nt = function t(e, n) {
          for (var i in n)
            '__proto__' !== i &&
              'constructor' !== i &&
              'prototype' !== i &&
              (e[i] = q(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
          return e;
        },
        It = function (t, e) {
          var n,
            i = {};
          for (n in t) n in e || (i[n] = t[n]);
          return i;
        },
        Ut = function (t) {
          var e,
            n = t.parent || s,
            i = t.keyframes
              ? ((e = $(t.keyframes)),
                function (t, n) {
                  for (var i in n)
                    i in t ||
                      ('duration' === i && e) ||
                      'ease' === i ||
                      (t[i] = n[i]);
                })
              : Dt;
          if (Y(t.inherit))
            for (; n; ) i(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        Ft = function (t, e, n, i) {
          void 0 === n && (n = '_first'), void 0 === i && (i = '_last');
          var r = e._prev,
            a = e._next;
          r ? (r._next = a) : t[n] === e && (t[n] = a),
            a ? (a._prev = r) : t[i] === e && (t[i] = r),
            (e._next = e._prev = e.parent = null);
        },
        zt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        Bt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        kt = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        Gt = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Ht = function (t) {
          return t._repeat
            ? Vt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Vt = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        Wt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Xt = function (t) {
          return (t._end = Tt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0)
          ));
        },
        jt = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = Tt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Xt(t),
              n._dirty || Bt(n, t)),
            t
          );
        },
        qt = function (t, e) {
          var n;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((n = Wt(t.rawTime(), e)),
              (!e._dur || ae(0, e.totalDuration(), n) - e._tTime > U) &&
                e.render(n, !0)),
            Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        Yt = function (t, e, n, i) {
          return (
            e.parent && zt(e),
            (e._start = Tt(
              (X(n) ? n : n || t !== s ? ne(t, n, e) : t._time) + e._delay
            )),
            (e._end = Tt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            (function (t, e, n, i, r) {
              void 0 === n && (n = '_first'), void 0 === i && (i = '_last');
              var a,
                s = t[i];
              if (r) for (a = e[r]; s && s[r] > a; ) s = s._prev;
              s
                ? ((e._next = s._next), (s._next = e))
                : ((e._next = t[n]), (t[n] = e)),
                e._next ? (e._next._prev = e) : (t[i] = e),
                (e._prev = s),
                (e.parent = e._dp = t);
            })(t, e, '_first', '_last', t._sort ? '_start' : 0),
            $t(e) || (t._recent = e),
            i || qt(t, e),
            t
          );
        },
        Zt = function (t, e) {
          return (
            (st.ScrollTrigger || ct('scrollTrigger', e)) &&
            st.ScrollTrigger.create(e, t)
          );
        },
        Kt = function (t, e, n, i) {
          return (
            Je(t, e),
            t._initted
              ? !n &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                h !== Pe.frame
                ? (ft.push(t), (t._lazy = [e, i]), 1)
                : void 0
              : 1
          );
        },
        Jt = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        $t = function (t) {
          var e = t.data;
          return 'isFromStart' === e || 'isStart' === e;
        },
        Qt = function (t, e, n, i) {
          var r = t._repeat,
            a = Tt(e) || 0,
            s = t._tTime / t._tDur;
          return (
            s && !i && (t._time *= a / t._dur),
            (t._dur = a),
            (t._tDur = r
              ? r < 0
                ? 1e10
                : Tt(a * (r + 1) + t._rDelay * r)
              : a),
            s > 0 && !i ? jt(t, (t._tTime = t._tDur * s)) : t.parent && Xt(t),
            n || Bt(t.parent, t),
            t
          );
        },
        te = function (t) {
          return t instanceof je ? Bt(t) : Qt(t, t._dur);
        },
        ee = { _start: 0, endTime: dt, totalDuration: dt },
        ne = function t(e, n, i) {
          var r,
            a,
            s,
            o = e.labels,
            l = e._recent || ee,
            c = e.duration() >= I ? l.endTime(!1) : e._dur;
          return V(n) && (isNaN(n) || n in o)
            ? ((a = n.charAt(0)),
              (s = '%' === n.substr(-1)),
              (r = n.indexOf('=')),
              '<' === a || '>' === a
                ? (r >= 0 && (n = n.replace(/=/, '')),
                  ('<' === a ? l._start : l.endTime(l._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (s ? (r < 0 ? l : i).totalDuration() / 100 : 1))
                : r < 0
                ? (n in o || (o[n] = c), o[n])
                : ((a = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
                  s && i && (a = (a / 100) * ($(i) ? i[0] : i).totalDuration()),
                  r > 1 ? t(e, n.substr(0, r - 1), i) + a : c + a))
            : null == n
            ? c
            : +n;
        },
        ie = function (t, e, n) {
          var i,
            r,
            a = X(e[1]),
            s = (a ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[s];
          if ((a && (o.duration = e[1]), (o.parent = n), t)) {
            for (i = o, r = n; r && !('immediateRender' in i); )
              (i = r.vars.defaults || {}), (r = Y(r.vars.inherit) && r.parent);
            (o.immediateRender = Y(i.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
          }
          return new nn(e[0], o, e[s + 1]);
        },
        re = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        ae = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        se = function (t, e) {
          return V(t) && (e = at.exec(t))
            ? t.substr(e.index + e[0].length)
            : '';
        },
        oe = [].slice,
        le = function (t, e) {
          return (
            t &&
            q(t) &&
            'length' in t &&
            ((!e && !t.length) || (t.length - 1 in t && q(t[0]))) &&
            !t.nodeType &&
            t !== o
          );
        },
        ce = function (t, e, n) {
          return !V(t) || n || (!l && De())
            ? $(t)
              ? (function (t, e, n) {
                  return (
                    void 0 === n && (n = []),
                    t.forEach(function (t) {
                      var i;
                      return (V(t) && !e) || le(t, 1)
                        ? (i = n).push.apply(i, ce(t))
                        : n.push(t);
                    }) || n
                  );
                })(t, n)
              : le(t)
              ? oe.call(t, 0)
              : t
              ? [t]
              : []
            : oe.call((e || c).querySelectorAll(t), 0);
        },
        ue = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        he = function (t) {
          if (W(t)) return t;
          var e = q(t) ? t : { each: t },
            n = Be(e.ease),
            i = e.from || 0,
            r = parseFloat(e.base) || 0,
            a = {},
            s = i > 0 && i < 1,
            o = isNaN(i) || s,
            l = e.axis,
            c = i,
            u = i;
          return (
            V(i)
              ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !s && o && ((c = i[0]), (u = i[1])),
            function (t, s, h) {
              var d,
                p,
                f,
                m,
                g,
                _,
                v,
                x,
                y,
                b = (h || e).length,
                M = a[b];
              if (!M) {
                if (!(y = 'auto' === e.grid ? 0 : (e.grid || [1, I])[1])) {
                  for (
                    v = -I;
                    v < (v = h[y++].getBoundingClientRect().left) && y < b;

                  );
                  y--;
                }
                for (
                  M = a[b] = [],
                    d = o ? Math.min(y, b) * c - 0.5 : i % y,
                    p = y === I ? 0 : o ? (b * u) / y - 0.5 : (i / y) | 0,
                    v = 0,
                    x = I,
                    _ = 0;
                  _ < b;
                  _++
                )
                  (f = (_ % y) - d),
                    (m = p - ((_ / y) | 0)),
                    (M[_] = g =
                      l ? Math.abs('y' === l ? m : f) : k(f * f + m * m)),
                    g > v && (v = g),
                    g < x && (x = g);
                'random' === i && ue(M),
                  (M.max = v - x),
                  (M.min = x),
                  (M.v = b =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (y > b
                          ? b - 1
                          : l
                          ? 'y' === l
                            ? b / y
                            : y
                          : Math.max(y, b / y)) ||
                      0) * ('edges' === i ? -1 : 1)),
                  (M.b = b < 0 ? r - b : r),
                  (M.u = se(e.amount || e.each) || 0),
                  (n = n && b < 0 ? Fe(n) : n);
              }
              return (
                (b = (M[t] - M.min) / M.max || 0),
                Tt(M.b + (n ? n(b) : b) * M.v) + M.u
              );
            }
          );
        },
        de = function (t) {
          var e = Math.pow(10, ((t + '').split('.')[1] || '').length);
          return function (n) {
            var i = Math.round(parseFloat(n) / t) * t * e;
            return (i - (i % 1)) / e + (X(n) ? 0 : se(n));
          };
        },
        pe = function (t, e) {
          var n,
            i,
            r = $(t);
          return (
            !r &&
              q(t) &&
              ((n = r = t.radius || I),
              t.values
                ? ((t = ce(t.values)), (i = !X(t[0])) && (n *= n))
                : (t = de(t.increment))),
            re(
              e,
              r
                ? W(t)
                  ? function (e) {
                      return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                    }
                  : function (e) {
                      for (
                        var r,
                          a,
                          s = parseFloat(i ? e.x : e),
                          o = parseFloat(i ? e.y : 0),
                          l = I,
                          c = 0,
                          u = t.length;
                        u--;

                      )
                        (r = i
                          ? (r = t[u].x - s) * r + (a = t[u].y - o) * a
                          : Math.abs(t[u] - s)) < l && ((l = r), (c = u));
                      return (
                        (c = !n || l <= n ? t[c] : e),
                        i || c === e || X(e) ? c : c + se(e)
                      );
                    }
                : de(t)
            )
          );
        },
        fe = function (t, e, n, i) {
          return re($(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
            return $(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (i = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                    ) *
                      n *
                      i
                  ) / i;
          });
        },
        me = function (t, e, n) {
          return re(n, function (n) {
            return t[~~e(n)];
          });
        },
        ge = function (t) {
          for (var e, n, i, r, a = 0, s = ''; ~(e = t.indexOf('random(', a)); )
            (i = t.indexOf(')', e)),
              (r = '[' === t.charAt(e + 7)),
              (n = t.substr(e + 7, i - e - 7).match(r ? rt : Q)),
              (s +=
                t.substr(a, e - a) +
                fe(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
              (a = i + 1);
          return s + t.substr(a, t.length - a);
        },
        _e = function (t, e, n, i, r) {
          var a = e - t,
            s = i - n;
          return re(r, function (e) {
            return n + (((e - t) / a) * s || 0);
          });
        },
        ve = function (t, e, n) {
          var i,
            r,
            a,
            s = t.labels,
            o = I;
          for (i in s)
            (r = s[i] - e) < 0 == !!n &&
              r &&
              o > (r = Math.abs(r)) &&
              ((a = i), (o = r));
          return a;
        },
        xe = function (t, e, n) {
          var i,
            r,
            a = t.vars,
            s = a[e];
          if (s)
            return (
              (i = a[e + 'Params']),
              (r = a.callbackScope || t),
              n && ft.length && Rt(),
              i ? s.apply(r, i) : s.call(r)
            );
        },
        ye = function (t) {
          return (
            zt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!1),
            t.progress() < 1 && xe(t, 'onInterrupt'),
            t
          );
        },
        be = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            n = W(t),
            i =
              e && !n && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            r = {
              init: dt,
              render: dn,
              add: Ze,
              kill: fn,
              modifier: pn,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: ln,
              aliases: {},
              register: 0,
            };
          if ((De(), t !== i)) {
            if (gt[e]) return;
            Dt(i, Dt(It(t, r), a)),
              Ot(i.prototype, Ot(r, It(t, a))),
              (gt[(i.prop = e)] = i),
              t.targetTest && (xt.push(i), (pt[e] = 1)),
              (e =
                ('css' === e
                  ? 'CSS'
                  : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
          }
          ht(e, i), t.register && t.register(bn, i, _n);
        },
        Me = 255,
        we = {
          aqua: [0, Me, Me],
          lime: [0, Me, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Me],
          navy: [0, 0, 128],
          white: [Me, Me, Me],
          olive: [128, 128, 0],
          yellow: [Me, Me, 0],
          orange: [Me, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Me, 0, 0],
          pink: [Me, 192, 203],
          cyan: [0, Me, Me],
          transparent: [Me, Me, Me, 0],
        },
        Se = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) *
              Me +
              0.5) |
            0
          );
        },
        Ee = function (t, e, n) {
          var i,
            r,
            a,
            s,
            o,
            l,
            c,
            u,
            h,
            d,
            p = t ? (X(t) ? [t >> 16, (t >> 8) & Me, t & Me] : 0) : we.black;
          if (!p) {
            if (
              (',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), we[t])
            )
              p = we[t];
            else if ('#' === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((i = t.charAt(1)),
                  (r = t.charAt(2)),
                  (a = t.charAt(3)),
                  (t =
                    '#' +
                    i +
                    i +
                    r +
                    r +
                    a +
                    a +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & Me,
                  p & Me,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & Me,
                t & Me,
              ];
            } else if ('hsl' === t.substr(0, 3))
              if (((p = d = t.match(Q)), e)) {
                if (~t.indexOf('='))
                  return (p = t.match(tt)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (s = (+p[0] % 360) / 360),
                  (o = +p[1] / 100),
                  (i =
                    2 * (l = +p[2] / 100) -
                    (r = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = Se(s + 1 / 3, i, r)),
                  (p[1] = Se(s, i, r)),
                  (p[2] = Se(s - 1 / 3, i, r));
            else p = t.match(Q) || we.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !d &&
              ((i = p[0] / Me),
              (r = p[1] / Me),
              (a = p[2] / Me),
              (l = ((c = Math.max(i, r, a)) + (u = Math.min(i, r, a))) / 2),
              c === u
                ? (s = o = 0)
                : ((h = c - u),
                  (o = l > 0.5 ? h / (2 - c - u) : h / (c + u)),
                  (s =
                    c === i
                      ? (r - a) / h + (r < a ? 6 : 0)
                      : c === r
                      ? (a - i) / h + 2
                      : (i - r) / h + 4),
                  (s *= 60)),
              (p[0] = ~~(s + 0.5)),
              (p[1] = ~~(100 * o + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        Te = function (t) {
          var e = [],
            n = [],
            i = -1;
          return (
            t.split(Re).forEach(function (t) {
              var r = t.match(et) || [];
              e.push.apply(e, r), n.push((i += r.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        Ae = function (t, e, n) {
          var i,
            r,
            a,
            s,
            o = '',
            l = (t + o).match(Re),
            c = e ? 'hsla(' : 'rgba(',
            u = 0;
          if (!l) return t;
          if (
            ((l = l.map(function (t) {
              return (
                (t = Ee(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3]
                    : t.join(',')) +
                  ')'
              );
            })),
            n && ((a = Te(t)), (i = n.c).join(o) !== a.c.join(o)))
          )
            for (s = (r = t.replace(Re, '1').split(et)).length - 1; u < s; u++)
              o +=
                r[u] +
                (~i.indexOf(u)
                  ? l.shift() || c + '0,0,0,0)'
                  : (a.length ? a : l.length ? l : n).shift());
          if (!r)
            for (s = (r = t.split(Re)).length - 1; u < s; u++) o += r[u] + l[u];
          return o + r[s];
        },
        Re = (function () {
          var t,
            e =
              '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
          for (t in we) e += '|' + t + '\\b';
          return new RegExp(e + ')', 'gi');
        })(),
        Le = /hsl[a]?\(/,
        Ce = function (t) {
          var e,
            n = t.join(' ');
          if (((Re.lastIndex = 0), Re.test(n)))
            return (
              (e = Le.test(n)),
              (t[1] = Ae(t[1], e)),
              (t[0] = Ae(t[0], e, Te(t[1]))),
              !0
            );
        },
        Pe =
          ((y = Date.now),
          (b = 500),
          (M = 33),
          (w = y()),
          (S = w),
          (T = E = 1e3 / 240),
          (R = function t(e) {
            var n,
              i,
              r,
              a,
              s = y() - S,
              o = !0 === e;
            if (
              (s > b && (w += s - M),
              ((n = (r = (S += s) - w) - T) > 0 || o) &&
                ((a = ++_.frame),
                (v = r - 1e3 * _.time),
                (_.time = r /= 1e3),
                (T += n + (n >= E ? 4 : E - n)),
                (i = 1)),
              o || (f = m(t)),
              i)
            )
              for (x = 0; x < A.length; x++) A[x](r, v, a, e);
          }),
          (_ = {
            time: 0,
            frame: 0,
            tick: function () {
              R(!0);
            },
            deltaRatio: function (t) {
              return v / (1e3 / (t || 60));
            },
            wake: function () {
              u &&
                (!l &&
                  Z() &&
                  ((o = l = window),
                  (c = o.document || {}),
                  (st.gsap = bn),
                  (o.gsapVersions || (o.gsapVersions = [])).push(bn.version),
                  lt(ot || o.GreenSockGlobals || (!o.gsap && o) || {}),
                  (g = o.requestAnimationFrame)),
                f && _.sleep(),
                (m =
                  g ||
                  function (t) {
                    return setTimeout(t, (T - 1e3 * _.time + 1) | 0);
                  }),
                (p = 1),
                R(2));
            },
            sleep: function () {
              (g ? o.cancelAnimationFrame : clearTimeout)(f), (p = 0), (m = dt);
            },
            lagSmoothing: function (t, e) {
              (b = t || 1e8), (M = Math.min(e, b, 0));
            },
            fps: function (t) {
              (E = 1e3 / (t || 240)), (T = 1e3 * _.time + E);
            },
            add: function (t) {
              A.indexOf(t) < 0 && A.push(t), De();
            },
            remove: function (t, e) {
              ~(e = A.indexOf(t)) && A.splice(e, 1) && x >= e && x--;
            },
            _listeners: (A = []),
          })),
        De = function () {
          return !p && Pe.wake();
        },
        Oe = {},
        Ne = /^[\d.\-M][\d.\-,\s]/,
        Ie = /["']/g,
        Ue = function (t) {
          for (
            var e,
              n,
              i,
              r = {},
              a = t.substr(1, t.length - 3).split(':'),
              s = a[0],
              o = 1,
              l = a.length;
            o < l;
            o++
          )
            (n = a[o]),
              (e = o !== l - 1 ? n.lastIndexOf(',') : n.length),
              (i = n.substr(0, e)),
              (r[s] = isNaN(i) ? i.replace(Ie, '').trim() : +i),
              (s = n.substr(e + 1).trim());
          return r;
        },
        Fe = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        ze = function t(e, n) {
          for (var i, r = e._first; r; )
            r instanceof je
              ? t(r, n)
              : !r.vars.yoyoEase ||
                (r._yoyo && r._repeat) ||
                r._yoyo === n ||
                (r.timeline
                  ? t(r.timeline, n)
                  : ((i = r._ease),
                    (r._ease = r._yEase),
                    (r._yEase = i),
                    (r._yoyo = n))),
              (r = r._next);
        },
        Be = function (t, e) {
          return (
            (t &&
              (W(t)
                ? t
                : Oe[t] ||
                  (function (t) {
                    var e,
                      n,
                      i,
                      r,
                      a = (t + '').split('('),
                      s = Oe[a[0]];
                    return s && a.length > 1 && s.config
                      ? s.config.apply(
                          null,
                          ~t.indexOf('{')
                            ? [Ue(a[1])]
                            : ((e = t),
                              (n = e.indexOf('(') + 1),
                              (i = e.indexOf(')')),
                              (r = e.indexOf('(', n)),
                              e.substring(
                                n,
                                ~r && r < i ? e.indexOf(')', i + 1) : i
                              ))
                                .split(',')
                                .map(Ct)
                        )
                      : Oe._CE && Ne.test(t)
                      ? Oe._CE('', t)
                      : s;
                  })(t))) ||
            e
          );
        },
        ke = function (t, e, n, i) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var r,
            a = { easeIn: e, easeOut: n, easeInOut: i };
          return (
            St(t, function (t) {
              for (var e in ((Oe[t] = st[t] = a),
              (Oe[(r = t.toLowerCase())] = n),
              a))
                Oe[
                  r +
                    ('easeIn' === e
                      ? '.in'
                      : 'easeOut' === e
                      ? '.out'
                      : '.inOut')
                ] = Oe[t + '.' + e] = a[e];
            }),
            a
          );
        },
        Ge = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        He = function t(e, n, i) {
          var r = n >= 1 ? n : 1,
            a = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            s = (a / F) * (Math.asin(1 / r) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : r * Math.pow(2, -10 * t) * H((t - s) * a) + 1;
            },
            l =
              'out' === e
                ? o
                : 'in' === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : Ge(o);
          return (
            (a = F / a),
            (l.config = function (n, i) {
              return t(e, n, i);
            }),
            l
          );
        },
        Ve = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            r =
              'out' === e
                ? i
                : 'in' === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : Ge(i);
          return (
            (r.config = function (n) {
              return t(e, n);
            }),
            r
          );
        };
      St('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
        var n = e < 5 ? e + 1 : e;
        ke(
          t + ',Power' + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          }
        );
      }),
        (Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn),
        ke('Elastic', He('in'), He('out'), He()),
        (L = 7.5625),
        (P = 1 / (C = 2.75)),
        ke(
          'Bounce',
          function (t) {
            return 1 - D(1 - t);
          },
          (D = function (t) {
            return t < P
              ? L * t * t
              : t < 0.7272727272727273
              ? L * Math.pow(t - 1.5 / C, 2) + 0.75
              : t < 0.9090909090909092
              ? L * (t -= 2.25 / C) * t + 0.9375
              : L * Math.pow(t - 2.625 / C, 2) + 0.984375;
          })
        ),
        ke('Expo', function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        ke('Circ', function (t) {
          return -(k(1 - t * t) - 1);
        }),
        ke('Sine', function (t) {
          return 1 === t ? 1 : 1 - G(t * z);
        }),
        ke('Back', Ve('in'), Ve('out'), Ve()),
        (Oe.SteppedEase =
          Oe.steps =
          st.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  i = t + (e ? 0 : 1),
                  r = e ? 1 : 0;
                return function (t) {
                  return (((i * ae(0, 0.99999999, t)) | 0) + r) * n;
                };
              },
            }),
        (N.ease = Oe['quad.out']),
        St(
          'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
          function (t) {
            return (yt += t + ',' + t + 'Params,');
          }
        );
      var We = function (t, e) {
          (this.id = B++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : wt),
            (this.set = e ? e.getSetter : ln);
        },
        Xe = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Qt(this, +t.duration, 1, 1),
              (this.data = t.data),
              p || Pe.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Qt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((De(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  jt(this, t), !n._dp || n.parent || qt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Yt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === U) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Lt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Ht(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Ht(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                ? Vt(this._tTime, n) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Wt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                kt(this.totalTime(ae(-this._delay, this._tDur, e), !0)),
                Xt(this),
                this
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (De(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== U &&
                            (this._tTime -= U)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Yt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (Y(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Wt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (e._ts || 1)), (e = e._dp);
              return n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), te(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), te(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(ne(this, t), Y(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, Y(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - U
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      n && (i[t + 'Params'] = n),
                      'onUpdate' === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var i = W(t) ? t : Pt,
                  r = function () {
                    var t = e.then;
                    (e.then = null),
                      W(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      n(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? r()
                  : (e._prom = r);
              });
            }),
            (e.kill = function () {
              ye(this);
            }),
            t
          );
        })();
      Dt(Xe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var je = (function (t) {
        function e(e, n) {
          var r;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this, e) || this).labels = {}),
            (r.smoothChildTiming = !!e.smoothChildTiming),
            (r.autoRemoveChildren = !!e.autoRemoveChildren),
            (r._sort = Y(e.sortChildren)),
            s && Yt(e.parent || s, i(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            e.scrollTrigger && Zt(i(r), e.scrollTrigger),
            r
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.to = function (t, e, n) {
            return ie(0, arguments, this), this;
          }),
          (n.from = function (t, e, n) {
            return ie(1, arguments, this), this;
          }),
          (n.fromTo = function (t, e, n, i) {
            return ie(2, arguments, this), this;
          }),
          (n.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Ut(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new nn(t, e, ne(this, n), 1),
              this
            );
          }),
          (n.call = function (t, e, n) {
            return Yt(this, nn.delayedCall(0, t, e), n);
          }),
          (n.staggerTo = function (t, e, n, i, r, a, s) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || i),
              (n.onComplete = a),
              (n.onCompleteParams = s),
              (n.parent = this),
              new nn(t, n, ne(this, r)),
              this
            );
          }),
          (n.staggerFrom = function (t, e, n, i, r, a, s) {
            return (
              (n.runBackwards = 1),
              (Ut(n).immediateRender = Y(n.immediateRender)),
              this.staggerTo(t, e, n, i, r, a, s)
            );
          }),
          (n.staggerFromTo = function (t, e, n, i, r, a, s, o) {
            return (
              (i.startAt = n),
              (Ut(i).immediateRender = Y(i.immediateRender)),
              this.staggerTo(t, e, i, r, a, s, o)
            );
          }),
          (n.render = function (t, e, n) {
            var i,
              r,
              a,
              o,
              l,
              c,
              u,
              h,
              d,
              p,
              f,
              m,
              g = this._time,
              _ = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              x = t <= 0 ? 0 : Tt(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== s && x > _ && t >= 0 && (x = _),
              x !== this._tTime || n || y)
            ) {
              if (
                (g !== this._time &&
                  v &&
                  ((x += this._time - g), (t += this._time - g)),
                (i = x),
                (d = this._start),
                (c = !(h = this._ts)),
                y && (v || (g = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((f = this._yoyo),
                  (l = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * l + t, e, n);
                if (
                  ((i = Tt(x % l)),
                  x === _
                    ? ((o = this._repeat), (i = v))
                    : ((o = ~~(x / l)) && o === x / l && ((i = v), o--),
                      i > v && (i = v)),
                  (p = Vt(this._tTime, l)),
                  !g && this._tTime && p !== o && (p = o),
                  f && 1 & o && ((i = v - i), (m = 1)),
                  o !== p && !this._lock)
                ) {
                  var b = f && 1 & p,
                    M = b === (f && 1 & o);
                  if (
                    (o < p && (b = !b),
                    (g = b ? 0 : v),
                    (this._lock = 1),
                    (this.render(g || (m ? 0 : Tt(o * l)), e, !v)._lock = 0),
                    (this._tTime = x),
                    !e && this.parent && xe(this, 'onRepeat'),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (g && g !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (_ = this._tDur),
                    M &&
                      ((this._lock = 2),
                      (g = b ? v : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                  )
                    return this;
                  ze(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((u = (function (t, e, n) {
                    var i;
                    if (n > e)
                      for (i = t._first; i && i._start <= n; ) {
                        if ('isPause' === i.data && i._start > e) return i;
                        i = i._next;
                      }
                    else
                      for (i = t._last; i && i._start >= n; ) {
                        if ('isPause' === i.data && i._start < e) return i;
                        i = i._prev;
                      }
                  })(this, Tt(g), Tt(i))),
                  u && (x -= i - (i = u._start))),
                (this._tTime = x),
                (this._time = i),
                (this._act = !h),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (g = 0)),
                !g && i && !e && (xe(this, 'onStart'), this._tTime !== x))
              )
                return this;
              if (i >= g && t >= 0)
                for (r = this._first; r; ) {
                  if (
                    ((a = r._next),
                    (r._act || i >= r._start) && r._ts && u !== r)
                  ) {
                    if (r.parent !== this) return this.render(t, e, n);
                    if (
                      (r.render(
                        r._ts > 0
                          ? (i - r._start) * r._ts
                          : (r._dirty ? r.totalDuration() : r._tDur) +
                              (i - r._start) * r._ts,
                        e,
                        n
                      ),
                      i !== this._time || (!this._ts && !c))
                    ) {
                      (u = 0), a && (x += this._zTime = -1e-8);
                      break;
                    }
                  }
                  r = a;
                }
              else {
                r = this._last;
                for (var w = t < 0 ? t : i; r; ) {
                  if (
                    ((a = r._prev), (r._act || w <= r._end) && r._ts && u !== r)
                  ) {
                    if (r.parent !== this) return this.render(t, e, n);
                    if (
                      (r.render(
                        r._ts > 0
                          ? (w - r._start) * r._ts
                          : (r._dirty ? r.totalDuration() : r._tDur) +
                              (w - r._start) * r._ts,
                        e,
                        n
                      ),
                      i !== this._time || (!this._ts && !c))
                    ) {
                      (u = 0), a && (x += this._zTime = w ? -1e-8 : U);
                      break;
                    }
                  }
                  r = a;
                }
              }
              if (
                u &&
                !e &&
                (this.pause(),
                (u.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
                this._ts)
              )
                return (this._start = d), Xt(this), this.render(t, e, n);
              this._onUpdate && !e && xe(this, 'onUpdate', !0),
                ((x === _ && _ >= this.totalDuration()) || (!x && g)) &&
                  ((d !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((x === _ && this._ts > 0) || (!x && this._ts < 0)) &&
                      zt(this, 1),
                    e ||
                      (t < 0 && !g) ||
                      (!x && !g && _) ||
                      (xe(
                        this,
                        x === _ && t >= 0 ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(x < _ && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (t, e) {
            var n = this;
            if ((X(e) || (e = ne(this, e, t)), !(t instanceof Xe))) {
              if ($(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (V(t)) return this.addLabel(t, e);
              if (!W(t)) return this;
              t = nn.delayedCall(0, t);
            }
            return this !== t ? Yt(this, t, e) : this;
          }),
          (n.getChildren = function (t, e, n, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === i && (i = -I);
            for (var r = [], a = this._first; a; )
              a._start >= i &&
                (a instanceof nn
                  ? e && r.push(a)
                  : (n && r.push(a),
                    t && r.push.apply(r, a.getChildren(!0, e, n)))),
                (a = a._next);
            return r;
          }),
          (n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (n.remove = function (t) {
            return V(t)
              ? this.removeLabel(t)
              : W(t)
              ? this.killTweensOf(t)
              : (Ft(this, t),
                t === this._recent && (this._recent = this._last),
                Bt(this));
          }),
          (n.totalTime = function (e, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Tt(
                    Pe.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (t, e) {
            return (this.labels[t] = ne(this, e)), this;
          }),
          (n.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (n.addPause = function (t, e, n) {
            var i = nn.delayedCall(0, e || dt, n);
            return (
              (i.data = 'isPause'),
              (this._hasPause = 1),
              Yt(this, i, ne(this, t))
            );
          }),
          (n.removePause = function (t) {
            var e = this._first;
            for (t = ne(this, t); e; )
              e._start === t && 'isPause' === e.data && zt(e), (e = e._next);
          }),
          (n.killTweensOf = function (t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--; )
              qe !== i[r] && i[r].kill(t, e);
            return this;
          }),
          (n.getTweensOf = function (t, e) {
            for (var n, i = [], r = ce(t), a = this._first, s = X(e); a; )
              a instanceof nn
                ? At(a._targets, r) &&
                  (s
                    ? (!qe || (a._initted && a._ts)) &&
                      a.globalTime(0) <= e &&
                      a.globalTime(a.totalDuration()) > e
                    : !e || a.isActive()) &&
                  i.push(a)
                : (n = a.getTweensOf(r, e)).length && i.push.apply(i, n),
                (a = a._next);
            return i;
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var n,
              i = this,
              r = ne(i, t),
              a = e,
              s = a.startAt,
              o = a.onStart,
              l = a.onStartParams,
              c = a.immediateRender,
              u = nn.to(
                i,
                Dt(
                  {
                    ease: e.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: 'auto',
                    duration:
                      e.duration ||
                      Math.abs(
                        (r - (s && 'time' in s ? s.time : i._time)) /
                          i.timeScale()
                      ) ||
                      U,
                    onStart: function () {
                      if ((i.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (r - (s && 'time' in s ? s.time : i._time)) /
                              i.timeScale()
                          );
                        u._dur !== t && Qt(u, t, 0, 1).render(u._time, !0, !0),
                          (n = 1);
                      }
                      o && o.apply(u, l || []);
                    },
                  },
                  e
                )
              );
            return c ? u.render(0) : u;
          }),
          (n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Dt({ startAt: { time: ne(this, t) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ve(this, ne(this, t));
          }),
          (n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ve(this, ne(this, t), 1);
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + U);
          }),
          (n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, a = this.labels; r; )
              r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
            if (e) for (i in a) a[i] >= n && (a[i] += t);
            return Bt(this);
          }),
          (n.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Bt(this)
            );
          }),
          (n.totalDuration = function (t) {
            var e,
              n,
              i,
              r = 0,
              a = this,
              o = a._last,
              l = I;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                  (a.reversed() ? -t : t)
              );
            if (a._dirty) {
              for (i = a.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start) > l && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (Yt(a, o, n - o._delay, 1)._lock = 0))
                    : (l = n),
                  n < 0 &&
                    o._ts &&
                    ((r -= n),
                    ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                      ((a._start += n / a._ts),
                      (a._time -= n),
                      (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -Infinity),
                    (l = 0)),
                  o._end > r && o._ts && (r = o._end),
                  (o = e);
              Qt(a, a === s && a._time > r ? a._time : r, 1, 1), (a._dirty = 0);
            }
            return a._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((s._ts && (Lt(s, Wt(t, s)), (h = Pe.frame)), Pe.frame >= vt)) {
              vt += O.autoSleep || 120;
              var e = s._first;
              if ((!e || !e._ts) && O.autoSleep && Pe._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Pe.sleep();
              }
            }
          }),
          e
        );
      })(Xe);
      Dt(je.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var qe,
        Ye = function (t, e, n, i, r, a, s) {
          var o,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            m = new _n(this._pt, t, e, 0, 1, hn, null, r),
            g = 0,
            _ = 0;
          for (
            m.b = n,
              m.e = i,
              n += '',
              (p = ~(i += '').indexOf('random(')) && (i = ge(i)),
              a && (a((f = [n, i]), t, e), (n = f[0]), (i = f[1])),
              l = n.match(nt) || [];
            (o = nt.exec(i));

          )
            (u = o[0]),
              (h = i.substring(g, o.index)),
              c ? (c = (c + 1) % 5) : 'rgba(' === h.substr(-5) && (c = 1),
              u !== l[_++] &&
                ((d = parseFloat(l[_ - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: h || 1 === _ ? h : ',',
                  s: d,
                  c:
                    '=' === u.charAt(1)
                      ? parseFloat(u.substr(2)) * ('-' === u.charAt(0) ? -1 : 1)
                      : parseFloat(u) - d,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = nt.lastIndex));
          return (
            (m.c = g < i.length ? i.substring(g, i.length) : ''),
            (m.fp = s),
            (it.test(i) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Ze = function (t, e, n, i, r, a, s, o, l) {
          W(i) && (i = i(r || 0, t, a));
          var c,
            u = t[e],
            h =
              'get' !== n
                ? n
                : W(u)
                ? l
                  ? t[
                      e.indexOf('set') || !W(t['get' + e.substr(3)])
                        ? e
                        : 'get' + e.substr(3)
                    ](l)
                  : t[e]()
                : u,
            d = W(u) ? (l ? sn : an) : rn;
          if (
            (V(i) &&
              (~i.indexOf('random(') && (i = ge(i)),
              '=' === i.charAt(1) &&
                ((c =
                  parseFloat(h) +
                  parseFloat(i.substr(2)) * ('-' === i.charAt(0) ? -1 : 1) +
                  (se(h) || 0)) ||
                  0 === c) &&
                (i = c)),
            h !== i)
          )
            return isNaN(h * i) || '' === i
              ? (!u && !(e in t) && ct(e, i),
                Ye.call(this, t, e, h, i, d, o || O.stringFilter, l))
              : ((c = new _n(
                  this._pt,
                  t,
                  e,
                  +h || 0,
                  i - (h || 0),
                  'boolean' == typeof u ? un : cn,
                  0,
                  d
                )),
                l && (c.fp = l),
                s && c.modifier(s, this, t),
                (this._pt = c));
        },
        Ke = function (t, e, n, i, r, a) {
          var s, o, l, c;
          if (
            gt[t] &&
            !1 !==
              (s = new gt[t]()).init(
                r,
                s.rawVars
                  ? e[t]
                  : (function (t, e, n, i, r) {
                      if (
                        (W(t) && (t = Qe(t, r, e, n, i)),
                        !q(t) || (t.style && t.nodeType) || $(t) || J(t))
                      )
                        return V(t) ? Qe(t, r, e, n, i) : t;
                      var a,
                        s = {};
                      for (a in t) s[a] = Qe(t[a], r, e, n, i);
                      return s;
                    })(e[t], i, r, a, n),
                n,
                i,
                a
              ) &&
            ((n._pt = o =
              new _n(n._pt, r, t, 0, 1, s.render, s, 0, s.priority)),
            n !== d)
          )
            for (
              l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length;
              c--;

            )
              l[s._props[c]] = o;
          return s;
        },
        Je = function t(e, n) {
          var i,
            r,
            o,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            m,
            g,
            _,
            v = e.vars,
            x = v.ease,
            y = v.startAt,
            b = v.immediateRender,
            M = v.lazy,
            w = v.onUpdate,
            S = v.onUpdateParams,
            E = v.callbackScope,
            T = v.runBackwards,
            A = v.yoyoEase,
            R = v.keyframes,
            L = v.autoRevert,
            C = e._dur,
            P = e._startAt,
            D = e._targets,
            O = e.parent,
            F = O && 'nested' === O.data ? O.parent._targets : D,
            z = 'auto' === e._overwrite && !a,
            B = e.timeline;
          if (
            (B && (!R || !x) && (x = 'none'),
            (e._ease = Be(x, N.ease)),
            (e._yEase = A ? Fe(Be(!0 === A ? x : A, N.ease)) : 0),
            A &&
              e._yoyo &&
              !e._repeat &&
              ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
            (e._from = !B && !!v.runBackwards),
            !B || (R && !v.stagger))
          ) {
            if (
              ((g = (d = D[0] ? Mt(D[0]).harness : 0) && v[d.prop]),
              (i = It(v, pt)),
              P && zt(P.render(-1, !0)),
              y)
            )
              if (
                (zt(
                  (e._startAt = nn.set(
                    D,
                    Dt(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: O,
                        immediateRender: !0,
                        lazy: Y(M),
                        startAt: null,
                        delay: 0,
                        onUpdate: w,
                        onUpdateParams: S,
                        callbackScope: E,
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                n < 0 && !b && !L && e._startAt.render(-1, !0),
                b)
              ) {
                if ((n > 0 && !L && (e._startAt = 0), C && n <= 0))
                  return void (n && (e._zTime = n));
              } else !1 === L && (e._startAt = 0);
            else if (T && C)
              if (P) !L && (e._startAt = 0);
              else if (
                (n && (b = !1),
                (o = Dt(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: b && Y(M),
                    immediateRender: b,
                    stagger: 0,
                    parent: O,
                  },
                  i
                )),
                g && (o[d.prop] = g),
                zt((e._startAt = nn.set(D, o))),
                n < 0 && e._startAt.render(-1, !0),
                (e._zTime = n),
                b)
              ) {
                if (!n) return;
              } else t(e._startAt, U);
            for (
              e._pt = 0, M = (C && Y(M)) || (M && !C), r = 0;
              r < D.length;
              r++
            ) {
              if (
                ((h = (c = D[r])._gsap || bt(D)[r]._gsap),
                (e._ptLookup[r] = f = {}),
                mt[h.id] && ft.length && Rt(),
                (m = F === D ? r : F.indexOf(c)),
                d &&
                  !1 !== (p = new d()).init(c, g || i, e, m, F) &&
                  ((e._pt = l =
                    new _n(e._pt, c, p.name, 0, 1, p.render, p, 0, p.priority)),
                  p._props.forEach(function (t) {
                    f[t] = l;
                  }),
                  p.priority && (u = 1)),
                !d || g)
              )
                for (o in i)
                  gt[o] && (p = Ke(o, i, e, m, c, F))
                    ? p.priority && (u = 1)
                    : (f[o] = l =
                        Ze.call(e, c, o, 'get', i[o], m, F, 0, v.stringFilter));
              e._op && e._op[r] && e.kill(c, e._op[r]),
                z &&
                  e._pt &&
                  ((qe = e),
                  s.killTweensOf(c, f, e.globalTime(n)),
                  (_ = !e.parent),
                  (qe = 0)),
                e._pt && M && (mt[h.id] = 1);
            }
            u && gn(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = w),
            (e._initted = (!e._op || e._pt) && !_),
            R && n <= 0 && B.render(I, !0, !0);
        },
        $e = function (t, e, n, i) {
          var r,
            a,
            s = e.ease || i || 'power1.inOut';
          if ($(e))
            (a = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return a.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
              });
          else
            for (r in e)
              (a = n[r] || (n[r] = [])),
                'ease' === r || a.push({ t: parseFloat(t), v: e[r], e: s });
        },
        Qe = function (t, e, n, i, r) {
          return W(t)
            ? t.call(e, n, i, r)
            : V(t) && ~t.indexOf('random(')
            ? ge(t)
            : t;
        },
        tn = yt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
        en = {};
      St(tn + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
        return (en[t] = 1);
      });
      var nn = (function (t) {
        function e(e, n, r, o) {
          var l;
          'number' == typeof n && ((r.duration = n), (n = r), (r = null));
          var c,
            u,
            h,
            d,
            p,
            f,
            m,
            g,
            _ = (l = t.call(this, o ? n : Ut(n)) || this).vars,
            v = _.duration,
            x = _.delay,
            y = _.immediateRender,
            b = _.stagger,
            M = _.overwrite,
            w = _.keyframes,
            S = _.defaults,
            E = _.scrollTrigger,
            T = _.yoyoEase,
            A = n.parent || s,
            R = ($(e) || J(e) ? X(e[0]) : 'length' in n) ? [e] : ce(e);
          if (
            ((l._targets = R.length
              ? bt(R)
              : ut(
                  'GSAP target ' + e + ' not found. https://greensock.com',
                  !O.nullTargetWarn
                ) || []),
            (l._ptLookup = []),
            (l._overwrite = M),
            w || b || K(v) || K(x))
          ) {
            if (
              ((n = l.vars),
              (c = l.timeline =
                new je({ data: 'nested', defaults: S || {} })).kill(),
              (c.parent = c._dp = i(l)),
              (c._start = 0),
              b || K(v) || K(x))
            ) {
              if (((d = R.length), (m = b && he(b)), q(b)))
                for (p in b) ~tn.indexOf(p) && (g || (g = {}), (g[p] = b[p]));
              for (u = 0; u < d; u++)
                ((h = It(n, en)).stagger = 0),
                  T && (h.yoyoEase = T),
                  g && Ot(h, g),
                  (f = R[u]),
                  (h.duration = +Qe(v, i(l), u, f, R)),
                  (h.delay = (+Qe(x, i(l), u, f, R) || 0) - l._delay),
                  !b &&
                    1 === d &&
                    h.delay &&
                    ((l._delay = x = h.delay), (l._start += x), (h.delay = 0)),
                  c.to(f, h, m ? m(u, f, R) : 0),
                  (c._ease = Oe.none);
              c.duration() ? (v = x = 0) : (l.timeline = 0);
            } else if (w) {
              Ut(Dt(c.vars.defaults, { ease: 'none' })),
                (c._ease = Be(w.ease || n.ease || 'none'));
              var L,
                C,
                P,
                D = 0;
              if ($(w))
                w.forEach(function (t) {
                  return c.to(R, t, '>');
                });
              else {
                for (p in ((h = {}), w))
                  'ease' === p ||
                    'easeEach' === p ||
                    $e(p, w[p], h, w.easeEach);
                for (p in h)
                  for (
                    L = h[p].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      D = 0,
                      u = 0;
                    u < L.length;
                    u++
                  )
                    ((P = {
                      ease: (C = L[u]).e,
                      duration: ((C.t - (u ? L[u - 1].t : 0)) / 100) * v,
                    })[p] = C.v),
                      c.to(R, P, D),
                      (D += P.duration);
                c.duration() < v && c.to({}, { duration: v - c.duration() });
              }
            }
            v || l.duration((v = c.duration()));
          } else l.timeline = 0;
          return (
            !0 !== M || a || ((qe = i(l)), s.killTweensOf(R), (qe = 0)),
            Yt(A, i(l), r),
            n.reversed && l.reverse(),
            n.paused && l.paused(!0),
            (y ||
              (!v &&
                !w &&
                l._start === Tt(A._time) &&
                Y(y) &&
                Gt(i(l)) &&
                'nested' !== A.data)) &&
              ((l._tTime = -1e-8), l.render(Math.max(0, -x))),
            E && Zt(i(l), E),
            l
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var i,
              r,
              a,
              s,
              o,
              l,
              c,
              u,
              h,
              d = this._time,
              p = this._tDur,
              f = this._dur,
              m = t > p - U && t >= 0 ? p : t < U ? 0 : t;
            if (f) {
              if (
                m !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((i = m), (u = this.timeline), this._repeat)) {
                  if (((s = f + this._rDelay), this._repeat < -1 && t < 0))
                    return this.totalTime(100 * s + t, e, n);
                  if (
                    ((i = Tt(m % s)),
                    m === p
                      ? ((a = this._repeat), (i = f))
                      : ((a = ~~(m / s)) && a === m / s && ((i = f), a--),
                        i > f && (i = f)),
                    (l = this._yoyo && 1 & a) &&
                      ((h = this._yEase), (i = f - i)),
                    (o = Vt(this._tTime, s)),
                    i === d && !n && this._initted)
                  )
                    return this;
                  a !== o &&
                    (u && this._yEase && ze(u, l),
                    !this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(Tt(s * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Kt(this, t < 0 ? t : i, n, e))
                    return (this._tTime = 0), this;
                  if (f !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = m),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (h || this._ease)(i / f)),
                  this._from && (this.ratio = c = 1 - c),
                  i && !d && !e && (xe(this, 'onStart'), this._tTime !== m))
                )
                  return this;
                for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
                (u &&
                  u.render(
                    t < 0
                      ? t
                      : !i && l
                      ? -1e-8
                      : u._dur * u._ease(i / this._dur),
                    e,
                    n
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    xe(this, 'onUpdate')),
                  this._repeat &&
                    a !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    xe(this, 'onRepeat'),
                  (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !f) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      zt(this, 1),
                    e ||
                      (t < 0 && !d) ||
                      (!m && !d) ||
                      (xe(
                        this,
                        m === p ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(m < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, i) {
                var r,
                  a,
                  s,
                  o = t.ratio,
                  l =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Jt(t) && (t._initted || !$t(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !$t(t))))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  u = 0;
                if (
                  (c &&
                    t._repeat &&
                    ((u = ae(0, t._tDur, e)),
                    (a = Vt(u, c)),
                    t._yoyo && 1 & a && (l = 1 - l),
                    a !== Vt(t._tTime, c) &&
                      ((o = 1 - l),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  l !== o || i || t._zTime === U || (!e && t._zTime))
                ) {
                  if (!t._initted && Kt(t, e, i, n)) return;
                  for (
                    s = t._zTime,
                      t._zTime = e || (n ? U : 0),
                      n || (n = e && !s),
                      t.ratio = l,
                      t._from && (l = 1 - l),
                      t._time = 0,
                      t._tTime = u,
                      r = t._pt;
                    r;

                  )
                    r.r(l, r.d), (r = r._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !n && xe(t, 'onUpdate'),
                    u && t._repeat && !n && t.parent && xe(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === l &&
                      (l && zt(t, 1),
                      n ||
                        (xe(t, l ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
              return (this._lazy = this._pt = 0), this.parent ? ye(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, qe && !0 !== qe.vars.overwrite)
                  ._first || ye(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Qt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var i,
              r,
              a,
              s,
              o,
              l,
              c,
              u = this._targets,
              h = t ? ce(t) : u,
              d = this._ptLookup,
              p = this._pt;
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (
                  var n = t.length, i = n === e.length;
                  i && n-- && t[n] === e[n];

                );
                return n < 0;
              })(u, h)
            )
              return 'all' === e && (this._pt = 0), ye(this);
            for (
              i = this._op = this._op || [],
                'all' !== e &&
                  (V(e) &&
                    ((o = {}),
                    St(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var n,
                      i,
                      r,
                      a,
                      s = t[0] ? Mt(t[0]).harness : 0,
                      o = s && s.aliases;
                    if (!o) return e;
                    for (i in ((n = Ot({}, e)), o))
                      if ((i in n))
                        for (r = (a = o[i].split(',')).length; r--; )
                          n[a[r]] = n[i];
                    return n;
                  })(u, e))),
                c = u.length;
              c--;

            )
              if (~h.indexOf(u[c]))
                for (o in ((r = d[c]),
                'all' === e
                  ? ((i[c] = e), (s = r), (a = {}))
                  : ((a = i[c] = i[c] || {}), (s = e)),
                s))
                  (l = r && r[o]) &&
                    (('kill' in l.d && !0 !== l.d.kill(o)) ||
                      Ft(this, l, '_pt'),
                    delete r[o]),
                    'all' !== a && (a[o] = 1);
            return this._initted && !this._pt && p && ye(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return ie(1, arguments);
          }),
          (e.delayedCall = function (t, n, i, r) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: r,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return ie(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return s.killTweensOf(t, e, n);
          }),
          e
        );
      })(Xe);
      Dt(nn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        St('staggerTo,staggerFrom,staggerFromTo', function (t) {
          nn[t] = function () {
            var e = new je(),
              n = oe.call(arguments, 0);
            return (
              n.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var rn = function (t, e, n) {
          return (t[e] = n);
        },
        an = function (t, e, n) {
          return t[e](n);
        },
        sn = function (t, e, n, i) {
          return t[e](i.fp, n);
        },
        on = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        ln = function (t, e) {
          return W(t[e]) ? an : j(t[e]) && t.setAttribute ? on : rn;
        },
        cn = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        un = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        hn = function (t, e) {
          var n = e._pt,
            i = '';
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; n; )
              (i =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                i),
                (n = n._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        dn = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        pn = function (t, e, n, i) {
          for (var r, a = this._pt; a; )
            (r = a._next), a.p === i && a.modifier(t, e, n), (a = r);
        },
        fn = function (t) {
          for (var e, n, i = this._pt; i; )
            (n = i._next),
              (i.p === t && !i.op) || i.op === t
                ? Ft(this, i, '_pt')
                : i.dep || (e = 1),
              (i = n);
          return !e;
        },
        mn = function (t, e, n, i) {
          i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
        },
        gn = function (t) {
          for (var e, n, i, r, a = t._pt; a; ) {
            for (e = a._next, n = i; n && n.pr > a.pr; ) n = n._next;
            (a._prev = n ? n._prev : r) ? (a._prev._next = a) : (i = a),
              (a._next = n) ? (n._prev = a) : (r = a),
              (a = e);
          }
          t._pt = i;
        },
        _n = (function () {
          function t(t, e, n, i, r, a, s, o, l) {
            (this.t = e),
              (this.s = i),
              (this.c = r),
              (this.p = n),
              (this.r = a || cn),
              (this.d = s || this),
              (this.set = o || rn),
              (this.pr = l || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = mn),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      St(
        yt +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (t) {
          return (pt[t] = 1);
        }
      ),
        (st.TweenMax = st.TweenLite = nn),
        (st.TimelineLite = st.TimelineMax = je),
        (s = new je({
          sortChildren: !1,
          defaults: N,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0,
        })),
        (O.stringFilter = Ce);
      var vn = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          e.forEach(function (t) {
            return be(t);
          });
        },
        timeline: function (t) {
          return new je(t);
        },
        getTweensOf: function (t, e) {
          return s.getTweensOf(t, e);
        },
        getProperty: function (t, e, n, i) {
          V(t) && (t = ce(t)[0]);
          var r = Mt(t || {}).get,
            a = n ? Pt : Ct;
          return (
            'native' === n && (n = ''),
            t
              ? e
                ? a(((gt[e] && gt[e].get) || r)(t, e, n, i))
                : function (e, n, i) {
                    return a(((gt[e] && gt[e].get) || r)(t, e, n, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, n) {
          if ((t = ce(t)).length > 1) {
            var i = t.map(function (t) {
                return bn.quickSetter(t, e, n);
              }),
              r = i.length;
            return function (t) {
              for (var e = r; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var a = gt[e],
            s = Mt(t),
            o = (s.harness && (s.harness.aliases || {})[e]) || e,
            l = a
              ? function (e) {
                  var i = new a();
                  (d._pt = 0),
                    i.init(t, n ? e + n : e, d, 0, [t]),
                    i.render(1, i),
                    d._pt && dn(1, d);
                }
              : s.set(t, o);
          return a
            ? l
            : function (e) {
                return l(t, o, n ? e + n : e, s, 1);
              };
        },
        isTweening: function (t) {
          return s.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Be(t.ease, N.ease)), Nt(N, t || {});
        },
        config: function (t) {
          return Nt(O, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            n = t.effect,
            i = t.plugins,
            r = t.defaults,
            a = t.extendTimeline;
          (i || '').split(',').forEach(function (t) {
            return (
              t &&
              !gt[t] &&
              !st[t] &&
              ut(e + ' effect requires ' + t + ' plugin.')
            );
          }),
            (_t[e] = function (t, e, i) {
              return n(ce(t), Dt(e || {}, r), i);
            }),
            a &&
              (je.prototype[e] = function (t, n, i) {
                return this.add(_t[e](t, q(n) ? n : (i = n) && {}, this), i);
              });
        },
        registerEase: function (t, e) {
          Oe[t] = Be(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? Be(t, e) : Oe;
        },
        getById: function (t) {
          return s.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var n,
            i,
            r = new je(t);
          for (
            r.smoothChildTiming = Y(t.smoothChildTiming),
              s.remove(r),
              r._dp = 0,
              r._time = r._tTime = s._time,
              n = s._first;
            n;

          )
            (i = n._next),
              (!e &&
                !n._dur &&
                n instanceof nn &&
                n.vars.onComplete === n._targets[0]) ||
                Yt(r, n, n._start - n._delay),
              (n = i);
          return Yt(s, r, 0), r;
        },
        utils: {
          wrap: function t(e, n, i) {
            var r = n - e;
            return $(e)
              ? me(e, t(0, e.length), n)
              : re(i, function (t) {
                  return ((r + ((t - e) % r)) % r) + e;
                });
          },
          wrapYoyo: function t(e, n, i) {
            var r = n - e,
              a = 2 * r;
            return $(e)
              ? me(e, t(0, e.length - 1), n)
              : re(i, function (t) {
                  return (
                    e + ((t = (a + ((t - e) % a)) % a || 0) > r ? a - t : t)
                  );
                });
          },
          distribute: he,
          random: fe,
          snap: pe,
          normalize: function (t, e, n) {
            return _e(t, e, 0, 1, n);
          },
          getUnit: se,
          clamp: function (t, e, n) {
            return re(n, function (n) {
              return ae(t, e, n);
            });
          },
          splitColor: Ee,
          toArray: ce,
          selector: function (t) {
            return (
              (t = ce(t)[0] || ut('Invalid scope') || {}),
              function (e) {
                var n = t.current || t.nativeElement || t;
                return ce(
                  e,
                  n.querySelectorAll
                    ? n
                    : n === t
                    ? ut('Invalid scope') || c.createElement('div')
                    : t
                );
              }
            );
          },
          mapRange: _e,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (n) {
              return t(parseFloat(n)) + (e || se(n));
            };
          },
          interpolate: function t(e, n, i, r) {
            var a = isNaN(e + n)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * n;
                };
            if (!a) {
              var s,
                o,
                l,
                c,
                u,
                h = V(e),
                d = {};
              if ((!0 === i && (r = 1) && (i = null), h))
                (e = { p: e }), (n = { p: n });
              else if ($(e) && !$(n)) {
                for (l = [], c = e.length, u = c - 2, o = 1; o < c; o++)
                  l.push(t(e[o - 1], e[o]));
                c--,
                  (a = function (t) {
                    t *= c;
                    var e = Math.min(u, ~~t);
                    return l[e](t - e);
                  }),
                  (i = n);
              } else r || (e = Ot($(e) ? [] : {}, e));
              if (!l) {
                for (s in n) Ze.call(d, e, s, 'get', n[s]);
                a = function (t) {
                  return dn(t, d) || (h ? e.p : e);
                };
              }
            }
            return re(i, a);
          },
          shuffle: ue,
        },
        install: lt,
        effects: _t,
        ticker: Pe,
        updateRoot: je.updateRoot,
        plugins: gt,
        globalTimeline: s,
        core: {
          PropTween: _n,
          globals: ht,
          Tween: nn,
          Timeline: je,
          Animation: Xe,
          getCache: Mt,
          _removeLinkedListItem: Ft,
          suppressOverwrites: function (t) {
            return (a = t);
          },
        },
      };
      St('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
        return (vn[t] = nn[t]);
      }),
        Pe.add(je.updateRoot),
        (d = vn.to({}, { duration: 0 }));
      var xn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        yn = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, i) {
              i._onInit = function (t) {
                var i, r;
                if (
                  (V(n) &&
                    ((i = {}),
                    St(n, function (t) {
                      return (i[t] = 1);
                    }),
                    (n = i)),
                  e)
                ) {
                  for (r in ((i = {}), n)) i[r] = e(n[r]);
                  n = i;
                }
                !(function (t, e) {
                  var n,
                    i,
                    r,
                    a = t._targets;
                  for (n in e)
                    for (i = a.length; i--; )
                      (r = t._ptLookup[i][n]) &&
                        (r = r.d) &&
                        (r._pt && (r = xn(r, n)),
                        r && r.modifier && r.modifier(e[n], t, a[i], n));
                })(t, n);
              };
            },
          };
        },
        bn =
          vn.registerPlugin(
            {
              name: 'attr',
              init: function (t, e, n, i, r) {
                var a, s;
                for (a in e)
                  (s = this.add(
                    t,
                    'setAttribute',
                    (t.getAttribute(a) || 0) + '',
                    e[a],
                    i,
                    r,
                    0,
                    0,
                    a
                  )) && (s.op = a),
                    this._props.push(a);
              },
            },
            {
              name: 'endArray',
              init: function (t, e) {
                for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
              },
            },
            yn('roundProps', de),
            yn('modifiers'),
            yn('snap', pe)
          ) || vn;
      (nn.version = je.version = bn.version = '3.9.1'),
        (u = 1),
        Z() && De(),
        Oe.Power0,
        Oe.Power1,
        Oe.Power2,
        Oe.Power3,
        Oe.Power4,
        Oe.Linear,
        Oe.Quad,
        Oe.Cubic,
        Oe.Quart,
        Oe.Quint,
        Oe.Strong,
        Oe.Elastic,
        Oe.Back,
        Oe.SteppedEase,
        Oe.Bounce,
        Oe.Sine,
        Oe.Expo,
        Oe.Circ;
      var Mn,
        wn,
        Sn,
        En,
        Tn,
        An,
        Rn,
        Ln = {},
        Cn = 180 / Math.PI,
        Pn = Math.PI / 180,
        Dn = Math.atan2,
        On = /([A-Z])/g,
        Nn = /(?:left|right|width|margin|padding|x)/i,
        In = /[\s,\(]\S/,
        Un = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity',
        },
        Fn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        zn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Bn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        kn = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Gn = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Hn = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Vn = function (t, e, n) {
          return (t.style[e] = n);
        },
        Wn = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        Xn = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        jn = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        qn = function (t, e, n, i, r) {
          var a = t._gsap;
          (a.scaleX = a.scaleY = n), a.renderTransform(r, a);
        },
        Yn = function (t, e, n, i, r) {
          var a = t._gsap;
          (a[e] = n), a.renderTransform(r, a);
        },
        Zn = 'transform',
        Kn = Zn + 'Origin',
        Jn = function (t, e) {
          var n = wn.createElementNS
            ? wn.createElementNS(
                (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                t
              )
            : wn.createElement(t);
          return n.style ? n : wn.createElement(t);
        },
        $n = function t(e, n, i) {
          var r = getComputedStyle(e);
          return (
            r[n] ||
            r.getPropertyValue(n.replace(On, '-$1').toLowerCase()) ||
            r.getPropertyValue(n) ||
            (!i && t(e, ti(n) || n, 1)) ||
            ''
          );
        },
        Qn = 'O,Moz,ms,Ms,Webkit'.split(','),
        ti = function (t, e, n) {
          var i = (e || Tn).style,
            r = 5;
          if (t in i && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            r-- && !(Qn[r] + t in i);

          );
          return r < 0 ? null : (3 === r ? 'ms' : r >= 0 ? Qn[r] : '') + t;
        },
        ei = function () {
          'undefined' != typeof window &&
            window.document &&
            ((Mn = window),
            (wn = Mn.document),
            (Sn = wn.documentElement),
            (Tn = Jn('div') || { style: {} }),
            Jn('div'),
            (Zn = ti(Zn)),
            (Kn = Zn + 'Origin'),
            (Tn.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (Rn = !!ti('perspective')),
            (En = 1));
        },
        ni = function t(e) {
          var n,
            i = Jn(
              'svg',
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg'
            ),
            r = this.parentNode,
            a = this.nextSibling,
            s = this.style.cssText;
          if (
            (Sn.appendChild(i),
            i.appendChild(this),
            (this.style.display = 'block'),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            r && (a ? r.insertBefore(this, a) : r.appendChild(this)),
            Sn.removeChild(i),
            (this.style.cssText = s),
            n
          );
        },
        ii = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        ri = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = ni.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === ni ||
              (e = ni.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +ii(t, ['x', 'cx', 'x1']) || 0,
                  y: +ii(t, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        ai = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ri(t));
        },
        si = function (t, e) {
          if (e) {
            var n = t.style;
            e in Ln && e !== Kn && (e = Zn),
              n.removeProperty
                ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) ||
                    (e = '-' + e),
                  n.removeProperty(e.replace(On, '-$1').toLowerCase()))
                : n.removeAttribute(e);
          }
        },
        oi = function (t, e, n, i, r, a) {
          var s = new _n(t._pt, e, n, 0, 1, a ? Hn : Gn);
          return (t._pt = s), (s.b = i), (s.e = r), t._props.push(n), s;
        },
        li = { deg: 1, rad: 1, turn: 1 },
        ci = function t(e, n, i, r) {
          var a,
            s,
            o,
            l,
            c = parseFloat(i) || 0,
            u = (i + '').trim().substr((c + '').length) || 'px',
            h = Tn.style,
            d = Nn.test(n),
            p = 'svg' === e.tagName.toLowerCase(),
            f = (p ? 'client' : 'offset') + (d ? 'Width' : 'Height'),
            m = 100,
            g = 'px' === r,
            _ = '%' === r;
          return r === u || !c || li[r] || li[u]
            ? c
            : ('px' !== u && !g && (c = t(e, n, i, 'px')),
              (l = e.getCTM && ai(e)),
              (!_ && '%' !== u) || (!Ln[n] && !~n.indexOf('adius'))
                ? ((h[d ? 'width' : 'height'] = m + (g ? u : r)),
                  (s =
                    ~n.indexOf('adius') || ('em' === r && e.appendChild && !p)
                      ? e
                      : e.parentNode),
                  l && (s = (e.ownerSVGElement || {}).parentNode),
                  (s && s !== wn && s.appendChild) || (s = wn.body),
                  (o = s._gsap) && _ && o.width && d && o.time === Pe.time
                    ? Et((c / o.width) * m)
                    : ((_ || '%' === u) && (h.position = $n(e, 'position')),
                      s === e && (h.position = 'static'),
                      s.appendChild(Tn),
                      (a = Tn[f]),
                      s.removeChild(Tn),
                      (h.position = 'absolute'),
                      d &&
                        _ &&
                        (((o = Mt(s)).time = Pe.time), (o.width = s[f])),
                      Et(g ? (a * c) / m : a && c ? (m / a) * c : 0)))
                : ((a = l ? e.getBBox()[d ? 'width' : 'height'] : e[f]),
                  Et(_ ? (c / a) * m : (c / 100) * a)));
        },
        ui = function (t, e, n, i) {
          var r;
          return (
            En || ei(),
            e in Un &&
              'transform' !== e &&
              ~(e = Un[e]).indexOf(',') &&
              (e = e.split(',')[0]),
            Ln[e] && 'transform' !== e
              ? ((r = bi(t, i)),
                (r =
                  'transformOrigin' !== e
                    ? r[e]
                    : r.svg
                    ? r.origin
                    : Mi($n(t, Kn)) + ' ' + r.zOrigin + 'px'))
              : (!(r = t.style[e]) ||
                  'auto' === r ||
                  i ||
                  ~(r + '').indexOf('calc(')) &&
                (r =
                  (fi[e] && fi[e](t, e, n)) ||
                  $n(t, e) ||
                  wt(t, e) ||
                  ('opacity' === e ? 1 : 0)),
            n && !~(r + '').trim().indexOf(' ') ? ci(t, e, r, n) + n : r
          );
        },
        hi = function (t, e, n, i) {
          if (!n || 'none' === n) {
            var r = ti(e, t, 1),
              a = r && $n(t, r, 1);
            a && a !== n
              ? ((e = r), (n = a))
              : 'borderColor' === e && (n = $n(t, 'borderTopColor'));
          }
          var s,
            o,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            m,
            g,
            _,
            v = new _n(this._pt, t.style, e, 0, 1, hn),
            x = 0,
            y = 0;
          if (
            ((v.b = n),
            (v.e = i),
            (n += ''),
            'auto' == (i += '') &&
              ((t.style[e] = i), (i = $n(t, e) || i), (t.style[e] = n)),
            Ce((s = [n, i])),
            (i = s[1]),
            (l = (n = s[0]).match(et) || []),
            (i.match(et) || []).length)
          ) {
            for (; (o = et.exec(i)); )
              (d = o[0]),
                (f = i.substring(x, o.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ('rgba(' !== f.substr(-5) && 'hsla(' !== f.substr(-5)) ||
                    (u = 1),
                d !== (h = l[y++] || '') &&
                  ((c = parseFloat(h) || 0),
                  (g = h.substr((c + '').length)),
                  (_ = '=' === d.charAt(1) ? +(d.charAt(0) + '1') : 0) &&
                    (d = d.substr(2)),
                  (p = parseFloat(d)),
                  (m = d.substr((p + '').length)),
                  (x = et.lastIndex - m.length),
                  m ||
                    ((m = m || O.units[e] || g),
                    x === i.length && ((i += m), (v.e += m))),
                  g !== m && (c = ci(t, e, h, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: f || 1 === y ? f : ',',
                    s: c,
                    c: _ ? _ * p : p - c,
                    m: (u && u < 4) || 'zIndex' === e ? Math.round : 0,
                  }));
            v.c = x < i.length ? i.substring(x, i.length) : '';
          } else v.r = 'display' === e && 'none' === i ? Hn : Gn;
          return it.test(i) && (v.e = 0), (this._pt = v), v;
        },
        di = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%',
        },
        pi = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              i,
              r,
              a = e.t,
              s = a.style,
              o = e.u,
              l = a._gsap;
            if ('all' === o || !0 === o) (s.cssText = ''), (i = 1);
            else
              for (r = (o = o.split(',')).length; --r > -1; )
                (n = o[r]),
                  Ln[n] && ((i = 1), (n = 'transformOrigin' === n ? Kn : Zn)),
                  si(a, n);
            i &&
              (si(a, Zn),
              l &&
                (l.svg && a.removeAttribute('transform'),
                bi(a, 1),
                (l.uncache = 1)));
          }
        },
        fi = {
          clearProps: function (t, e, n, i, r) {
            if ('isFromStart' !== r.data) {
              var a = (t._pt = new _n(t._pt, e, n, 0, 0, pi));
              return (
                (a.u = i), (a.pr = -10), (a.tween = r), t._props.push(n), 1
              );
            }
          },
        },
        mi = [1, 0, 0, 1, 0, 0],
        gi = {},
        _i = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
        },
        vi = function (t) {
          var e = $n(t, Zn);
          return _i(e) ? mi : e.substr(7).match(tt).map(Et);
        },
        xi = function (t, e) {
          var n,
            i,
            r,
            a,
            s = t._gsap || Mt(t),
            o = t.style,
            l = vi(t);
          return s.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (l = [
                (r = t.transform.baseVal.consolidate().matrix).a,
                r.b,
                r.c,
                r.d,
                r.e,
                r.f,
              ]).join(',')
              ? mi
              : l
            : (l !== mi ||
                t.offsetParent ||
                t === Sn ||
                s.svg ||
                ((r = o.display),
                (o.display = 'block'),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((a = 1), (i = t.nextSibling), Sn.appendChild(t)),
                (l = vi(t)),
                r ? (o.display = r) : si(t, 'display'),
                a &&
                  (i
                    ? n.insertBefore(t, i)
                    : n
                    ? n.appendChild(t)
                    : Sn.removeChild(t))),
              e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        yi = function (t, e, n, i, r, a) {
          var s,
            o,
            l,
            c = t._gsap,
            u = r || xi(t, !0),
            h = c.xOrigin || 0,
            d = c.yOrigin || 0,
            p = c.xOffset || 0,
            f = c.yOffset || 0,
            m = u[0],
            g = u[1],
            _ = u[2],
            v = u[3],
            x = u[4],
            y = u[5],
            b = e.split(' '),
            M = parseFloat(b[0]) || 0,
            w = parseFloat(b[1]) || 0;
          n
            ? u !== mi &&
              (o = m * v - g * _) &&
              ((l = M * (-g / o) + w * (m / o) - (m * y - g * x) / o),
              (M = M * (v / o) + w * (-_ / o) + (_ * y - v * x) / o),
              (w = l))
            : ((M =
                (s = ri(t)).x + (~b[0].indexOf('%') ? (M / 100) * s.width : M)),
              (w =
                s.y +
                (~(b[1] || b[0]).indexOf('%') ? (w / 100) * s.height : w))),
            i || (!1 !== i && c.smooth)
              ? ((x = M - h),
                (y = w - d),
                (c.xOffset = p + (x * m + y * _) - x),
                (c.yOffset = f + (x * g + y * v) - y))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = M),
            (c.yOrigin = w),
            (c.smooth = !!i),
            (c.origin = e),
            (c.originIsAbsolute = !!n),
            (t.style[Kn] = '0px 0px'),
            a &&
              (oi(a, c, 'xOrigin', h, M),
              oi(a, c, 'yOrigin', d, w),
              oi(a, c, 'xOffset', p, c.xOffset),
              oi(a, c, 'yOffset', f, c.yOffset)),
            t.setAttribute('data-svg-origin', M + ' ' + w);
        },
        bi = function (t, e) {
          var n = t._gsap || new We(t);
          if ('x' in n && !e && !n.uncache) return n;
          var i,
            r,
            a,
            s,
            o,
            l,
            c,
            u,
            h,
            d,
            p,
            f,
            m,
            g,
            _,
            v,
            x,
            y,
            b,
            M,
            w,
            S,
            E,
            T,
            A,
            R,
            L,
            C,
            P,
            D,
            N,
            I,
            U = t.style,
            F = n.scaleX < 0,
            z = 'px',
            B = 'deg',
            k = $n(t, Kn) || '0';
          return (
            (i = r = a = l = c = u = h = d = p = 0),
            (s = o = 1),
            (n.svg = !(!t.getCTM || !ai(t))),
            (g = xi(t, n.svg)),
            n.svg &&
              ((T =
                (!n.uncache || '0px 0px' === k) &&
                !e &&
                t.getAttribute('data-svg-origin')),
              yi(t, T || k, !!T || n.originIsAbsolute, !1 !== n.smooth, g)),
            (f = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            g !== mi &&
              ((y = g[0]),
              (b = g[1]),
              (M = g[2]),
              (w = g[3]),
              (i = S = g[4]),
              (r = E = g[5]),
              6 === g.length
                ? ((s = Math.sqrt(y * y + b * b)),
                  (o = Math.sqrt(w * w + M * M)),
                  (l = y || b ? Dn(b, y) * Cn : 0),
                  (h = M || w ? Dn(M, w) * Cn + l : 0) &&
                    (o *= Math.abs(Math.cos(h * Pn))),
                  n.svg &&
                    ((i -= f - (f * y + m * M)), (r -= m - (f * b + m * w))))
                : ((I = g[6]),
                  (D = g[7]),
                  (L = g[8]),
                  (C = g[9]),
                  (P = g[10]),
                  (N = g[11]),
                  (i = g[12]),
                  (r = g[13]),
                  (a = g[14]),
                  (c = (_ = Dn(I, P)) * Cn),
                  _ &&
                    ((T = S * (v = Math.cos(-_)) + L * (x = Math.sin(-_))),
                    (A = E * v + C * x),
                    (R = I * v + P * x),
                    (L = S * -x + L * v),
                    (C = E * -x + C * v),
                    (P = I * -x + P * v),
                    (N = D * -x + N * v),
                    (S = T),
                    (E = A),
                    (I = R)),
                  (u = (_ = Dn(-M, P)) * Cn),
                  _ &&
                    ((v = Math.cos(-_)),
                    (N = w * (x = Math.sin(-_)) + N * v),
                    (y = T = y * v - L * x),
                    (b = A = b * v - C * x),
                    (M = R = M * v - P * x)),
                  (l = (_ = Dn(b, y)) * Cn),
                  _ &&
                    ((T = y * (v = Math.cos(_)) + b * (x = Math.sin(_))),
                    (A = S * v + E * x),
                    (b = b * v - y * x),
                    (E = E * v - S * x),
                    (y = T),
                    (S = A)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (s = Et(Math.sqrt(y * y + b * b + M * M))),
                  (o = Et(Math.sqrt(E * E + I * I))),
                  (_ = Dn(S, E)),
                  (h = Math.abs(_) > 2e-4 ? _ * Cn : 0),
                  (p = N ? 1 / (N < 0 ? -N : N) : 0)),
              n.svg &&
                ((T = t.getAttribute('transform')),
                (n.forceCSS =
                  t.setAttribute('transform', '') || !_i($n(t, Zn))),
                T && t.setAttribute('transform', T))),
            Math.abs(h) > 90 &&
              Math.abs(h) < 270 &&
              (F
                ? ((s *= -1),
                  (h += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((o *= -1), (h += h <= 0 ? 180 : -180))),
            (n.x =
              i -
              ((n.xPercent =
                i &&
                (n.xPercent ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              z),
            (n.y =
              r -
              ((n.yPercent =
                r &&
                (n.yPercent ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-r)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              z),
            (n.z = a + z),
            (n.scaleX = Et(s)),
            (n.scaleY = Et(o)),
            (n.rotation = Et(l) + B),
            (n.rotationX = Et(c) + B),
            (n.rotationY = Et(u) + B),
            (n.skewX = h + B),
            (n.skewY = d + B),
            (n.transformPerspective = p + z),
            (n.zOrigin = parseFloat(k.split(' ')[2]) || 0) && (U[Kn] = Mi(k)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = O.force3D),
            (n.renderTransform = n.svg ? Li : Rn ? Ri : Si),
            (n.uncache = 0),
            n
          );
        },
        Mi = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1];
        },
        wi = function (t, e, n) {
          var i = se(e);
          return Et(parseFloat(e) + parseFloat(ci(t, 'x', n + 'px', i))) + i;
        },
        Si = function (t, e) {
          (e.z = '0px'),
            (e.rotationY = e.rotationX = '0deg'),
            (e.force3D = 0),
            Ri(t, e);
        },
        Ei = '0deg',
        Ti = '0px',
        Ai = ') ',
        Ri = function (t, e) {
          var n = e || this,
            i = n.xPercent,
            r = n.yPercent,
            a = n.x,
            s = n.y,
            o = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            h = n.skewX,
            d = n.skewY,
            p = n.scaleX,
            f = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            _ = n.target,
            v = n.zOrigin,
            x = '',
            y = ('auto' === g && t && 1 !== t) || !0 === g;
          if (v && (u !== Ei || c !== Ei)) {
            var b,
              M = parseFloat(c) * Pn,
              w = Math.sin(M),
              S = Math.cos(M);
            (M = parseFloat(u) * Pn),
              (b = Math.cos(M)),
              (a = wi(_, a, w * b * -v)),
              (s = wi(_, s, -Math.sin(M) * -v)),
              (o = wi(_, o, S * b * -v + v));
          }
          m !== Ti && (x += 'perspective(' + m + Ai),
            (i || r) && (x += 'translate(' + i + '%, ' + r + '%) '),
            (y || a !== Ti || s !== Ti || o !== Ti) &&
              (x +=
                o !== Ti || y
                  ? 'translate3d(' + a + ', ' + s + ', ' + o + ') '
                  : 'translate(' + a + ', ' + s + Ai),
            l !== Ei && (x += 'rotate(' + l + Ai),
            c !== Ei && (x += 'rotateY(' + c + Ai),
            u !== Ei && (x += 'rotateX(' + u + Ai),
            (h === Ei && d === Ei) || (x += 'skew(' + h + ', ' + d + Ai),
            (1 === p && 1 === f) || (x += 'scale(' + p + ', ' + f + Ai),
            (_.style[Zn] = x || 'translate(0, 0)');
        },
        Li = function (t, e) {
          var n,
            i,
            r,
            a,
            s,
            o = e || this,
            l = o.xPercent,
            c = o.yPercent,
            u = o.x,
            h = o.y,
            d = o.rotation,
            p = o.skewX,
            f = o.skewY,
            m = o.scaleX,
            g = o.scaleY,
            _ = o.target,
            v = o.xOrigin,
            x = o.yOrigin,
            y = o.xOffset,
            b = o.yOffset,
            M = o.forceCSS,
            w = parseFloat(u),
            S = parseFloat(h);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
            d || p
              ? ((d *= Pn),
                (p *= Pn),
                (n = Math.cos(d) * m),
                (i = Math.sin(d) * m),
                (r = Math.sin(d - p) * -g),
                (a = Math.cos(d - p) * g),
                p &&
                  ((f *= Pn),
                  (s = Math.tan(p - f)),
                  (r *= s = Math.sqrt(1 + s * s)),
                  (a *= s),
                  f &&
                    ((s = Math.tan(f)),
                    (n *= s = Math.sqrt(1 + s * s)),
                    (i *= s))),
                (n = Et(n)),
                (i = Et(i)),
                (r = Et(r)),
                (a = Et(a)))
              : ((n = m), (a = g), (i = r = 0)),
            ((w && !~(u + '').indexOf('px')) ||
              (S && !~(h + '').indexOf('px'))) &&
              ((w = ci(_, 'x', u, 'px')), (S = ci(_, 'y', h, 'px'))),
            (v || x || y || b) &&
              ((w = Et(w + v - (v * n + x * r) + y)),
              (S = Et(S + x - (v * i + x * a) + b))),
            (l || c) &&
              ((s = _.getBBox()),
              (w = Et(w + (l / 100) * s.width)),
              (S = Et(S + (c / 100) * s.height))),
            (s =
              'matrix(' +
              n +
              ',' +
              i +
              ',' +
              r +
              ',' +
              a +
              ',' +
              w +
              ',' +
              S +
              ')'),
            _.setAttribute('transform', s),
            M && (_.style[Zn] = s);
        },
        Ci = function (t, e, n, i, r, a) {
          var s,
            o,
            l = 360,
            c = V(r),
            u = parseFloat(r) * (c && ~r.indexOf('rad') ? Cn : 1),
            h = a ? u * a : u - i,
            d = i + h + 'deg';
          return (
            c &&
              ('short' === (s = r.split('_')[1]) &&
                (h %= l) != h % 180 &&
                (h += h < 0 ? l : -360),
              'cw' === s && h < 0
                ? (h = ((h + 36e9) % l) - ~~(h / l) * l)
                : 'ccw' === s &&
                  h > 0 &&
                  (h = ((h - 36e9) % l) - ~~(h / l) * l)),
            (t._pt = o = new _n(t._pt, e, n, i, h, zn)),
            (o.e = d),
            (o.u = 'deg'),
            t._props.push(n),
            o
          );
        },
        Pi = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        Di = function (t, e, n) {
          var i,
            r,
            a,
            s,
            o,
            l,
            c,
            u = Pi({}, n._gsap),
            h = n.style;
          for (r in (u.svg
            ? ((a = n.getAttribute('transform')),
              n.setAttribute('transform', ''),
              (h[Zn] = e),
              (i = bi(n, 1)),
              si(n, Zn),
              n.setAttribute('transform', a))
            : ((a = getComputedStyle(n)[Zn]),
              (h[Zn] = e),
              (i = bi(n, 1)),
              (h[Zn] = a)),
          Ln))
            (a = u[r]) !== (s = i[r]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(r) < 0 &&
              ((o = se(a) !== (c = se(s)) ? ci(n, r, a, c) : parseFloat(a)),
              (l = parseFloat(s)),
              (t._pt = new _n(t._pt, i, r, o, l - o, Fn)),
              (t._pt.u = c || 0),
              t._props.push(r));
          Pi(i, u);
        };
      St('padding,margin,Width,Radius', function (t, e) {
        var n = 'Top',
          i = 'Right',
          r = 'Bottom',
          a = 'Left',
          s = (e < 3 ? [n, i, r, a] : [n + a, n + i, r + i, r + a]).map(
            function (n) {
              return e < 2 ? t + n : 'border' + n + t;
            }
          );
        fi[e > 1 ? 'border' + t : t] = function (t, e, n, i, r) {
          var a, o;
          if (arguments.length < 4)
            return (
              (a = s.map(function (e) {
                return ui(t, e, n);
              })),
              5 === (o = a.join(' ')).split(a[0]).length ? a[0] : o
            );
          (a = (i + '').split(' ')),
            (o = {}),
            s.forEach(function (t, e) {
              return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, r);
        };
      });
      var Oi,
        Ni,
        Ii = {
          name: 'css',
          register: ei,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, i, r) {
            var a,
              s,
              o,
              l,
              c,
              u,
              h,
              d,
              p,
              f,
              m,
              g,
              _,
              v,
              x,
              y,
              b,
              M,
              w,
              S = this._props,
              E = t.style,
              T = n.vars.startAt;
            for (h in (En || ei(), e))
              if (
                'autoRound' !== h &&
                ((s = e[h]), !gt[h] || !Ke(h, e, n, i, t, r))
              )
                if (
                  ((c = typeof s),
                  (u = fi[h]),
                  'function' === c && (c = typeof (s = s.call(n, i, t, r))),
                  'string' === c && ~s.indexOf('random(') && (s = ge(s)),
                  u)
                )
                  u(this, t, h, s, n) && (x = 1);
                else if ('--' === h.substr(0, 2))
                  (a = (getComputedStyle(t).getPropertyValue(h) + '').trim()),
                    (s += ''),
                    (Re.lastIndex = 0),
                    Re.test(a) || ((d = se(a)), (p = se(s))),
                    p ? d !== p && (a = ci(t, h, a, p) + p) : d && (s += d),
                    this.add(E, 'setProperty', a, s, i, r, 0, 0, h),
                    S.push(h);
                else if ('undefined' !== c) {
                  if (
                    (T && h in T
                      ? ((a =
                          'function' == typeof T[h]
                            ? T[h].call(n, i, t, r)
                            : T[h]),
                        V(a) && ~a.indexOf('random(') && (a = ge(a)),
                        se(a + '') || (a += O.units[h] || se(ui(t, h)) || ''),
                        '=' === (a + '').charAt(1) && (a = ui(t, h)))
                      : (a = ui(t, h)),
                    (l = parseFloat(a)),
                    (f =
                      'string' === c && '=' === s.charAt(1)
                        ? +(s.charAt(0) + '1')
                        : 0) && (s = s.substr(2)),
                    (o = parseFloat(s)),
                    h in Un &&
                      ('autoAlpha' === h &&
                        (1 === l &&
                          'hidden' === ui(t, 'visibility') &&
                          o &&
                          (l = 0),
                        oi(
                          this,
                          E,
                          'visibility',
                          l ? 'inherit' : 'hidden',
                          o ? 'inherit' : 'hidden',
                          !o
                        )),
                      'scale' !== h &&
                        'transform' !== h &&
                        ~(h = Un[h]).indexOf(',') &&
                        (h = h.split(',')[0])),
                    (m = h in Ln))
                  )
                    if (
                      (g ||
                        (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                          bi(t, e.parseTransform),
                        (v = !1 !== e.smoothOrigin && _.smooth),
                        ((g = this._pt =
                          new _n(
                            this._pt,
                            E,
                            Zn,
                            0,
                            1,
                            _.renderTransform,
                            _,
                            0,
                            -1
                          )).dep = 1)),
                      'scale' === h)
                    )
                      (this._pt = new _n(
                        this._pt,
                        _,
                        'scaleY',
                        _.scaleY,
                        (f ? f * o : o - _.scaleY) || 0
                      )),
                        S.push('scaleY', h),
                        (h += 'X');
                    else {
                      if ('transformOrigin' === h) {
                        (b = void 0),
                          (M = void 0),
                          (w = void 0),
                          (M = (b = (y = s).split(' '))[0]),
                          (w = b[1] || '50%'),
                          ('top' !== M &&
                            'bottom' !== M &&
                            'left' !== w &&
                            'right' !== w) ||
                            ((y = M), (M = w), (w = y)),
                          (b[0] = di[M] || M),
                          (b[1] = di[w] || w),
                          (s = b.join(' ')),
                          _.svg
                            ? yi(t, s, 0, v, 0, this)
                            : ((p = parseFloat(s.split(' ')[2]) || 0) !==
                                _.zOrigin &&
                                oi(this, _, 'zOrigin', _.zOrigin, p),
                              oi(this, E, h, Mi(a), Mi(s)));
                        continue;
                      }
                      if ('svgOrigin' === h) {
                        yi(t, s, 1, v, 0, this);
                        continue;
                      }
                      if (h in gi) {
                        Ci(this, _, h, l, s, f);
                        continue;
                      }
                      if ('smoothOrigin' === h) {
                        oi(this, _, 'smooth', _.smooth, s);
                        continue;
                      }
                      if ('force3D' === h) {
                        _[h] = s;
                        continue;
                      }
                      if ('transform' === h) {
                        Di(this, s, t);
                        continue;
                      }
                    }
                  else h in E || (h = ti(h) || h);
                  if (
                    m ||
                    ((o || 0 === o) && (l || 0 === l) && !In.test(s) && h in E)
                  )
                    o || (o = 0),
                      (d = (a + '').substr((l + '').length)) !==
                        (p = se(s) || (h in O.units ? O.units[h] : d)) &&
                        (l = ci(t, h, a, p)),
                      (this._pt = new _n(
                        this._pt,
                        m ? _ : E,
                        h,
                        l,
                        f ? f * o : o - l,
                        m ||
                        ('px' !== p && 'zIndex' !== h) ||
                        !1 === e.autoRound
                          ? Fn
                          : kn
                      )),
                      (this._pt.u = p || 0),
                      d !== p &&
                        '%' !== p &&
                        ((this._pt.b = a), (this._pt.r = Bn));
                  else if (h in E) hi.call(this, t, h, a, s);
                  else {
                    if (!(h in t)) {
                      ct(h, s);
                      continue;
                    }
                    this.add(t, h, a || t[h], s, i, r);
                  }
                  S.push(h);
                }
            x && gn(this);
          },
          get: ui,
          aliases: Un,
          getSetter: function (t, e, n) {
            var i = Un[e];
            return (
              i && i.indexOf(',') < 0 && (e = i),
              e in Ln && e !== Kn && (t._gsap.x || ui(t, 'x'))
                ? n && An === n
                  ? 'scale' === e
                    ? jn
                    : Xn
                  : (An = n || {}) && ('scale' === e ? qn : Yn)
                : t.style && !j(t.style[e])
                ? Vn
                : ~e.indexOf('-')
                ? Wn
                : ln(t, e)
            );
          },
          core: { _removeProperty: si, _getMatrix: xi },
        };
      (bn.utils.checkPrefix = ti),
        (Ni = St(
          'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
            ',' +
            (Oi = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            Ln[t] = 1;
          }
        )),
        St(Oi, function (t) {
          (O.units[t] = 'deg'), (gi[t] = 1);
        }),
        (Un[Ni[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + Oi),
        St(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (t) {
            var e = t.split(':');
            Un[e[1]] = Ni[e[0]];
          }
        ),
        St(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (t) {
            O.units[t] = 'px';
          }
        ),
        bn.registerPlugin(Ii);
      var Ui = bn.registerPlugin(Ii) || bn;
      Ui.core.Tween;
    },
    238: function (t, e, n) {
      var i;
      !(function (r, a) {
        'use strict';
        var s = 'function',
          o = 'undefined',
          l = 'object',
          c = 'string',
          u = 'model',
          h = 'name',
          d = 'type',
          p = 'vendor',
          f = 'version',
          m = 'architecture',
          g = 'console',
          _ = 'mobile',
          v = 'tablet',
          x = 'smarttv',
          y = 'wearable',
          b = 'embedded',
          M = 'Amazon',
          w = 'Apple',
          S = 'ASUS',
          E = 'BlackBerry',
          T = 'Google',
          A = 'Huawei',
          R = 'LG',
          L = 'Microsoft',
          C = 'Motorola',
          P = 'Samsung',
          D = 'Sony',
          O = 'Xiaomi',
          N = 'Zebra',
          I = 'Facebook',
          U = function (t) {
            for (var e = {}, n = 0; n < t.length; n++)
              e[t[n].toUpperCase()] = t[n];
            return e;
          },
          F = function (t, e) {
            return typeof t === c && -1 !== z(e).indexOf(z(t));
          },
          z = function (t) {
            return t.toLowerCase();
          },
          B = function (t, e) {
            if (typeof t === c)
              return (
                (t = t.replace(/^\s\s*/, '').replace(/\s\s*$/, '')),
                typeof e === o ? t : t.substring(0, 255)
              );
          },
          k = function (t, e) {
            for (var n, i, r, o, c, u, h = 0; h < e.length && !c; ) {
              var d = e[h],
                p = e[h + 1];
              for (n = i = 0; n < d.length && !c; )
                if ((c = d[n++].exec(t)))
                  for (r = 0; r < p.length; r++)
                    (u = c[++i]),
                      typeof (o = p[r]) === l && o.length > 0
                        ? 2 === o.length
                          ? typeof o[1] == s
                            ? (this[o[0]] = o[1].call(this, u))
                            : (this[o[0]] = o[1])
                          : 3 === o.length
                          ? typeof o[1] !== s || (o[1].exec && o[1].test)
                            ? (this[o[0]] = u ? u.replace(o[1], o[2]) : a)
                            : (this[o[0]] = u ? o[1].call(this, u, o[2]) : a)
                          : 4 === o.length &&
                            (this[o[0]] = u
                              ? o[3].call(this, u.replace(o[1], o[2]))
                              : a)
                        : (this[o] = u || a);
              h += 2;
            }
          },
          G = function (t, e) {
            for (var n in e)
              if (typeof e[n] === l && e[n].length > 0) {
                for (var i = 0; i < e[n].length; i++)
                  if (F(e[n][i], t)) return '?' === n ? a : n;
              } else if (F(e[n], t)) return '?' === n ? a : n;
            return t;
          },
          H = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2e3: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM',
          },
          V = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [f, [h, 'Chrome']],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [h, 'Edge']],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [h, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [h, 'Opera Mini']],
              [/\bopr\/([\w\.]+)/i],
              [f, [h, 'Opera']],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [h, f],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [h, 'UCBrowser']],
              [/\bqbcore\/([\w\.]+)/i],
              [f, [h, 'WeChat(Win) Desktop']],
              [/micromessenger\/([\w\.]+)/i],
              [f, [h, 'WeChat']],
              [/konqueror\/([\w\.]+)/i],
              [f, [h, 'Konqueror']],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [h, 'IE']],
              [/yabrowser\/([\w\.]+)/i],
              [f, [h, 'Yandex']],
              [/(avast|avg)\/([\w\.]+)/i],
              [[h, /(.+)/, '$1 Secure Browser'], f],
              [/\bfocus\/([\w\.]+)/i],
              [f, [h, 'Firefox Focus']],
              [/\bopt\/([\w\.]+)/i],
              [f, [h, 'Opera Touch']],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [h, 'Coc Coc']],
              [/dolfin\/([\w\.]+)/i],
              [f, [h, 'Dolphin']],
              [/coast\/([\w\.]+)/i],
              [f, [h, 'Opera Coast']],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [h, 'MIUI Browser']],
              [/fxios\/([-\w\.]+)/i],
              [f, [h, 'Firefox']],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[h, '360 Browser']],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [[h, /(.+)/, '$1 Browser'], f],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[h, /_/g, ' '], f],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [h, f],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
              [h],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[h, I], f],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [h, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [h, 'GSA']],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [h, 'Chrome Headless']],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[h, 'Chrome WebView'], f],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [h, 'Android Browser']],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [h, f],
              [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
              [f, [h, 'Mobile Safari']],
              [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
              [f, h],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                h,
                [
                  f,
                  G,
                  {
                    '1.0': '/8',
                    1.2: '/1',
                    1.3: '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/',
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [h, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[h, 'Netscape'], f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [h, 'Firefox Reality']],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [h, f],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, 'amd64']],
              [/(ia32(?=;))/i],
              [[m, z]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, 'ia32']],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, 'arm64']],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, 'armhf']],
              [/windows (ce|mobile); ppc;/i],
              [[m, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, '', z]],
              [/(sun4\w)[;\)]/i],
              [[m, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, z]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [u, [p, P], [d, v]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [u, [p, P], [d, _]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [u, [p, w], [d, _]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [u, [p, w], [d, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [u, [p, A], [d, v]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
              ],
              [u, [p, A], [d, _]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [u, /_/g, ' '],
                [p, O],
                [d, _],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [u, /_/g, ' '],
                [p, O],
                [d, v],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [u, [p, 'OPPO'], [d, _]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [u, [p, 'Vivo'], [d, _]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [u, [p, 'Realme'], [d, _]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [u, [p, C], [d, _]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [u, [p, C], [d, v]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [u, [p, R], [d, v]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [u, [p, R], [d, _]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [u, [p, 'Lenovo'], [d, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [u, /_/g, ' '],
                [p, 'Nokia'],
                [d, _],
              ],
              [/(pixel c)\b/i],
              [u, [p, T], [d, v]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [u, [p, T], [d, _]],
              [
                /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [u, [p, D], [d, _]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [u, 'Xperia Tablet'],
                [p, D],
                [d, v],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [u, [p, 'OnePlus'], [d, _]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [u, [p, M], [d, v]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [u, /(.+)/g, 'Fire Phone $1'],
                [p, M],
                [d, _],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [u, p, [d, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [u, [p, E], [d, _]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [u, [p, S], [d, v]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [u, [p, S], [d, _]],
              [/(nexus 9)/i],
              [u, [p, 'HTC'], [d, v]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
              ],
              [p, [u, /_/g, ' '], [d, _]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [u, [p, 'Acer'], [d, v]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [u, [p, 'Meizu'], [d, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [u, [p, 'Sharp'], [d, _]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, u, [d, _]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [p, u, [d, v]],
              [/(surface duo)/i],
              [u, [p, L], [d, v]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [u, [p, 'Fairphone'], [d, _]],
              [/(u304aa)/i],
              [u, [p, 'AT&T'], [d, _]],
              [/\bsie-(\w*)/i],
              [u, [p, 'Siemens'], [d, _]],
              [/\b(rct\w+) b/i],
              [u, [p, 'RCA'], [d, v]],
              [/\b(venue[\d ]{2,7}) b/i],
              [u, [p, 'Dell'], [d, v]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [u, [p, 'Verizon'], [d, v]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [u, [p, 'Barnes & Noble'], [d, v]],
              [/\b(tm\d{3}\w+) b/i],
              [u, [p, 'NuVision'], [d, v]],
              [/\b(k88) b/i],
              [u, [p, 'ZTE'], [d, v]],
              [/\b(nx\d{3}j) b/i],
              [u, [p, 'ZTE'], [d, _]],
              [/\b(gen\d{3}) b.+49h/i],
              [u, [p, 'Swiss'], [d, _]],
              [/\b(zur\d{3}) b/i],
              [u, [p, 'Swiss'], [d, v]],
              [/\b((zeki)?tb.*\b) b/i],
              [u, [p, 'Zeki'], [d, v]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, 'Dragon Touch'], u, [d, v]],
              [/\b(ns-?\w{0,9}) b/i],
              [u, [p, 'Insignia'], [d, v]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [u, [p, 'NextBook'], [d, v]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, 'Voice'], u, [d, _]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, 'LvTel'], u, [d, _]],
              [/\b(ph-1) /i],
              [u, [p, 'Essential'], [d, _]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [u, [p, 'Envizen'], [d, v]],
              [/\b(trio[-\w\. ]+) b/i],
              [u, [p, 'MachSpeed'], [d, v]],
              [/\btu_(1491) b/i],
              [u, [p, 'Rotor'], [d, v]],
              [/(shield[\w ]+) b/i],
              [u, [p, 'Nvidia'], [d, v]],
              [/(sprint) (\w+)/i],
              [p, u, [d, _]],
              [/(kin\.[onetw]{3})/i],
              [
                [u, /\./g, ' '],
                [p, L],
                [d, _],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [u, [p, N], [d, v]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [u, [p, N], [d, _]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, u, [d, g]],
              [/droid.+; (shield) bui/i],
              [u, [p, 'Nvidia'], [d, g]],
              [/(playstation [345portablevi]+)/i],
              [u, [p, D], [d, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [u, [p, L], [d, g]],
              [/smart-tv.+(samsung)/i],
              [p, [d, x]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [u, /^/, 'SmartTV'],
                [p, P],
                [d, x],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, R],
                [d, x],
              ],
              [/(apple) ?tv/i],
              [p, [u, 'Apple TV'], [d, x]],
              [/crkey/i],
              [
                [u, 'Chromecast'],
                [p, T],
                [d, x],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [u, [p, M], [d, x]],
              [/\(dtv[\);].+(aquos)/i],
              [u, [p, 'Sharp'], [d, x]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                [p, B],
                [u, B],
                [d, x],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, x]],
              [/((pebble))app/i],
              [p, u, [d, y]],
              [/droid.+; (glass) \d/i],
              [u, [p, T], [d, y]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [u, [p, N], [d, y]],
              [/(quest( 2)?)/i],
              [u, [p, I], [d, y]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [d, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [u, [d, _]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [u, [d, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[d, v]],
              [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
              [[d, _]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [u, [p, 'Generic']],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [h, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [h, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [h, f],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, h],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [h, f],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [h, [f, G, H]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [h, 'Windows'],
                [f, G, H],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [f, /_/g, '.'],
                [h, 'iOS'],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [h, 'Mac OS'],
                [f, /_/g, '.'],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
              [f, h],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [h, f],
              [/\(bb(10);/i],
              [f, [h, E]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [f, [h, 'Symbian']],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [f, [h, 'Firefox OS']],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [h, 'webOS']],
              [/crkey\/([\d\.]+)/i],
              [f, [h, 'Chromecast']],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[h, 'Chromium OS'], f],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [h, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [[h, 'Solaris'], f],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [h, f],
            ],
          },
          W = function (t, e) {
            if ((typeof t === l && ((e = t), (t = a)), !(this instanceof W)))
              return new W(t, e).getResult();
            var n =
                t ||
                (typeof r !== o && r.navigator && r.navigator.userAgent
                  ? r.navigator.userAgent
                  : ''),
              i = e
                ? (function (t, e) {
                    var n = {};
                    for (var i in t)
                      e[i] && e[i].length % 2 == 0
                        ? (n[i] = e[i].concat(t[i]))
                        : (n[i] = t[i]);
                    return n;
                  })(V, e)
                : V;
            return (
              (this.getBrowser = function () {
                var t,
                  e = {};
                return (
                  (e.name = a),
                  (e.version = a),
                  k.call(e, n, i.browser),
                  (e.major =
                    typeof (t = e.version) === c
                      ? t.replace(/[^\d\.]/g, '').split('.')[0]
                      : a),
                  e
                );
              }),
              (this.getCPU = function () {
                var t = {};
                return (t.architecture = a), k.call(t, n, i.cpu), t;
              }),
              (this.getDevice = function () {
                var t = {};
                return (
                  (t.vendor = a),
                  (t.model = a),
                  (t.type = a),
                  k.call(t, n, i.device),
                  t
                );
              }),
              (this.getEngine = function () {
                var t = {};
                return (t.name = a), (t.version = a), k.call(t, n, i.engine), t;
              }),
              (this.getOS = function () {
                var t = {};
                return (t.name = a), (t.version = a), k.call(t, n, i.os), t;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (t) {
                return (
                  (n = typeof t === c && t.length > 255 ? B(t, 255) : t), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (W.VERSION = '1.0.2'),
          (W.BROWSER = U([h, f, 'major'])),
          (W.CPU = U([m])),
          (W.DEVICE = U([u, p, d, g, _, x, v, y, b])),
          (W.ENGINE = W.OS = U([h, f])),
          typeof e !== o
            ? (t.exports && (e = t.exports = W), (e.UAParser = W))
            : n.amdO
            ? (i = function () {
                return W;
              }.call(e, n, e, t)) === a || (t.exports = i)
            : typeof r !== o && (r.UAParser = W);
        var X = typeof r !== o && (r.jQuery || r.Zepto);
        if (X && !X.ua) {
          var j = new W();
          (X.ua = j.getResult()),
            (X.ua.get = function () {
              return j.getUA();
            }),
            (X.ua.set = function (t) {
              j.setUA(t);
              var e = j.getResult();
              for (var n in e) X.ua[n] = e[n];
            });
        }
      })('object' == typeof window ? window : this);
    },
    94: (t, e, n) => {
      'use strict';
      n.d(e, { V: () => a });
      var i = n(245),
        r = n(802);
      class a extends r.T {
        constructor() {
          super(),
            (this.type = 'Camera'),
            (this.matrixWorldInverse = new i.y()),
            (this.projectionMatrix = new i.y()),
            (this.projectionMatrixInverse = new i.y());
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
          super.updateWorldMatrix(t, e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      a.prototype.isCamera = !0;
    },
    152: (t, e, n) => {
      'use strict';
      n.d(e, { i: () => r });
      var i = n(94);
      class r extends i.V {
        constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
          super(),
            (this.type = 'OrthographicCamera'),
            (this.zoom = 1),
            (this.view = null),
            (this.left = t),
            (this.right = e),
            (this.top = n),
            (this.bottom = i),
            (this.near = r),
            (this.far = a),
            this.updateProjectionMatrix();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.left = t.left),
            (this.right = t.right),
            (this.top = t.top),
            (this.bottom = t.bottom),
            (this.near = t.near),
            (this.far = t.far),
            (this.zoom = t.zoom),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            this
          );
        }
        setViewOffset(t, e, n, i, r, a) {
          null === this.view &&
            (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1,
            }),
            (this.view.enabled = !0),
            (this.view.fullWidth = t),
            (this.view.fullHeight = e),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = a),
            this.updateProjectionMatrix();
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
          let r = n - t,
            a = n + t,
            s = i + e,
            o = i - e;
          if (null !== this.view && this.view.enabled) {
            const t =
                (this.right - this.left) / this.view.fullWidth / this.zoom,
              e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            (r += t * this.view.offsetX),
              (a = r + t * this.view.width),
              (s -= e * this.view.offsetY),
              (o = s - e * this.view.height);
          }
          this.projectionMatrix.makeOrthographic(
            r,
            a,
            s,
            o,
            this.near,
            this.far
          ),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.zoom = this.zoom),
            (e.object.left = this.left),
            (e.object.right = this.right),
            (e.object.top = this.top),
            (e.object.bottom = this.bottom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            e
          );
        }
      }
      r.prototype.isOrthographicCamera = !0;
    },
    6: (t, e, n) => {
      'use strict';
      n.d(e, {
        BF: () => Bt,
        BG: () => te,
        BV: () => U,
        Bf: () => it,
        C: () => Xt,
        Cd: () => Z,
        Ct: () => Ut,
        D1: () => ft,
        D9: () => Nt,
        Dj: () => Qt,
        E2: () => Ft,
        Eo: () => Y,
        FU: () => se,
        GG: () => re,
        Gi: () => ae,
        Hy: () => D,
        IL: () => Gt,
        IO: () => fe,
        JQ: () => yt,
        Kh: () => A,
        Kz: () => xt,
        LS: () => xe,
        LY: () => J,
        L_: () => ye,
        Lg: () => C,
        Ls: () => vt,
        M5: () => v,
        M6: () => V,
        M9: () => Vt,
        N4: () => _,
        ND: () => j,
        NY: () => ee,
        Ns: () => W,
        OT: () => Tt,
        Oo: () => lt,
        PA: () => me,
        Pe: () => r,
        Rl: () => I,
        S2: () => s,
        SV: () => at,
        Se: () => F,
        Sm: () => S,
        Sv: () => le,
        T9: () => gt,
        Ty: () => ct,
        UC: () => At,
        UZ: () => i,
        Vd: () => O,
        Vz: () => bt,
        W2: () => ve,
        WM: () => g,
        Wb: () => b,
        Wl: () => u,
        Wp: () => N,
        X: () => x,
        Y8: () => Lt,
        YG: () => K,
        YL: () => ut,
        Zr: () => z,
        _A: () => Ht,
        _L: () => h,
        _i: () => o,
        aH: () => ht,
        av: () => It,
        bG: () => y,
        bd: () => m,
        br: () => Dt,
        bs: () => ce,
        c8: () => E,
        cL: () => Mt,
        cR: () => Ct,
        cu: () => _e,
        dS: () => nt,
        dZ: () => $,
        dw: () => c,
        e: () => Wt,
        eD: () => k,
        eh: () => d,
        ek: () => Yt,
        es: () => p,
        fS: () => P,
        fY: () => tt,
        ft: () => jt,
        g8: () => rt,
        gh: () => T,
        gi: () => $t,
        hE: () => Ot,
        iA: () => _t,
        iW: () => R,
        ii: () => oe,
        ir: () => St,
        jF: () => f,
        jZ: () => Kt,
        k0: () => wt,
        k7: () => L,
        kn: () => he,
        ks: () => G,
        l0: () => qt,
        mS: () => pe,
        nt: () => l,
        pK: () => ie,
        pt: () => Zt,
        qh: () => X,
        qk: () => Pt,
        qy: () => pt,
        rO: () => M,
        r_: () => w,
        rn: () => ue,
        rp: () => st,
        tm: () => a,
        uL: () => q,
        uW: () => ot,
        v3: () => kt,
        vC: () => B,
        vx: () => et,
        w$: () => H,
        wJ: () => Et,
        we: () => dt,
        wk: () => Rt,
        wu: () => zt,
        x5: () => ge,
        xJ: () => ne,
        xf: () => Q,
        y2: () => Jt,
        yw: () => mt,
        z8: () => de,
      });
      const i = '138',
        r = 0,
        a = 1,
        s = 2,
        o = 1,
        l = 2,
        c = 3,
        u = 0,
        h = 1,
        d = 2,
        p = 1,
        f = 0,
        m = 1,
        g = 2,
        _ = 3,
        v = 4,
        x = 5,
        y = 100,
        b = 101,
        M = 102,
        w = 103,
        S = 104,
        E = 200,
        T = 201,
        A = 202,
        R = 203,
        L = 204,
        C = 205,
        P = 206,
        D = 207,
        O = 208,
        N = 209,
        I = 210,
        U = 0,
        F = 1,
        z = 2,
        B = 3,
        k = 4,
        G = 5,
        H = 6,
        V = 7,
        W = 0,
        X = 1,
        j = 2,
        q = 0,
        Y = 1,
        Z = 2,
        K = 3,
        J = 4,
        $ = 5,
        Q = 300,
        tt = 301,
        et = 302,
        nt = 303,
        it = 304,
        rt = 306,
        at = 307,
        st = 1e3,
        ot = 1001,
        lt = 1002,
        ct = 1003,
        ut = 1004,
        ht = 1005,
        dt = 1006,
        pt = 1007,
        ft = 1008,
        mt = 1009,
        gt = 1010,
        _t = 1011,
        vt = 1012,
        xt = 1013,
        yt = 1014,
        bt = 1015,
        Mt = 1016,
        wt = 1017,
        St = 1018,
        Et = 1020,
        Tt = 1021,
        At = 1022,
        Rt = 1023,
        Lt = 1024,
        Ct = 1025,
        Pt = 1026,
        Dt = 1027,
        Ot = 1028,
        Nt = 1029,
        It = 1030,
        Ut = 1031,
        Ft = 1033,
        zt = 33776,
        Bt = 33777,
        kt = 33778,
        Gt = 33779,
        Ht = 35840,
        Vt = 35841,
        Wt = 35842,
        Xt = 35843,
        jt = 36196,
        qt = 37492,
        Yt = 37496,
        Zt = 37808,
        Kt = 37809,
        Jt = 37810,
        $t = 37811,
        Qt = 37812,
        te = 37813,
        ee = 37814,
        ne = 37815,
        ie = 37816,
        re = 37817,
        ae = 37818,
        se = 37819,
        oe = 37820,
        le = 37821,
        ce = 36492,
        ue = 3e3,
        he = 3001,
        de = 3200,
        pe = 3201,
        fe = 0,
        me = 1,
        ge = 7680,
        _e = 519,
        ve = 35044,
        xe = '300 es',
        ye = 1035;
    },
    430: (t, e, n) => {
      'use strict';
      n.d(e, { Tl: () => u, a$: () => p, lC: () => d, ql: () => h });
      var i = n(980),
        r = n(532),
        a = n(120),
        s = n(282),
        o = n(6);
      const l = new r.P(),
        c = new a.F();
      class u {
        constructor(t, e, n) {
          if (Array.isArray(t))
            throw new TypeError(
              'THREE.BufferAttribute: array should be a Typed Array.'
            );
          (this.name = ''),
            (this.array = t),
            (this.itemSize = e),
            (this.count = void 0 !== t ? t.length / e : 0),
            (this.normalized = !0 === n),
            (this.usage = o.W2),
            (this.updateRange = { offset: 0, count: -1 }),
            (this.version = 0);
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        setUsage(t) {
          return (this.usage = t), this;
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.array = new t.array.constructor(t.array)),
            (this.itemSize = t.itemSize),
            (this.count = t.count),
            (this.normalized = t.normalized),
            (this.usage = t.usage),
            this
          );
        }
        copyAt(t, e, n) {
          (t *= this.itemSize), (n *= e.itemSize);
          for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[t + i] = e.array[n + i];
          return this;
        }
        copyArray(t) {
          return this.array.set(t), this;
        }
        copyColorsArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r &&
              (console.warn(
                'THREE.BufferAttribute.copyColorsArray(): color is undefined',
                i
              ),
              (r = new s.I())),
              (e[n++] = r.r),
              (e[n++] = r.g),
              (e[n++] = r.b);
          }
          return this;
        }
        copyVector2sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r &&
              (console.warn(
                'THREE.BufferAttribute.copyVector2sArray(): vector is undefined',
                i
              ),
              (r = new a.F())),
              (e[n++] = r.x),
              (e[n++] = r.y);
          }
          return this;
        }
        copyVector3sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i];
            void 0 === a &&
              (console.warn(
                'THREE.BufferAttribute.copyVector3sArray(): vector is undefined',
                i
              ),
              (a = new r.P())),
              (e[n++] = a.x),
              (e[n++] = a.y),
              (e[n++] = a.z);
          }
          return this;
        }
        copyVector4sArray(t) {
          const e = this.array;
          let n = 0;
          for (let r = 0, a = t.length; r < a; r++) {
            let a = t[r];
            void 0 === a &&
              (console.warn(
                'THREE.BufferAttribute.copyVector4sArray(): vector is undefined',
                r
              ),
              (a = new i.L())),
              (e[n++] = a.x),
              (e[n++] = a.y),
              (e[n++] = a.z),
              (e[n++] = a.w);
          }
          return this;
        }
        applyMatrix3(t) {
          if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              c.fromBufferAttribute(this, e),
                c.applyMatrix3(t),
                this.setXY(e, c.x, c.y);
          else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              l.fromBufferAttribute(this, e),
                l.applyMatrix3(t),
                this.setXYZ(e, l.x, l.y, l.z);
          return this;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.count; e < n; e++)
            (l.x = this.getX(e)),
              (l.y = this.getY(e)),
              (l.z = this.getZ(e)),
              l.applyMatrix4(t),
              this.setXYZ(e, l.x, l.y, l.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++)
            (l.x = this.getX(e)),
              (l.y = this.getY(e)),
              (l.z = this.getZ(e)),
              l.applyNormalMatrix(t),
              this.setXYZ(e, l.x, l.y, l.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++)
            (l.x = this.getX(e)),
              (l.y = this.getY(e)),
              (l.z = this.getZ(e)),
              l.transformDirection(t),
              this.setXYZ(e, l.x, l.y, l.z);
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        getX(t) {
          return this.array[t * this.itemSize];
        }
        setX(t, e) {
          return (this.array[t * this.itemSize] = e), this;
        }
        getY(t) {
          return this.array[t * this.itemSize + 1];
        }
        setY(t, e) {
          return (this.array[t * this.itemSize + 1] = e), this;
        }
        getZ(t) {
          return this.array[t * this.itemSize + 2];
        }
        setZ(t, e) {
          return (this.array[t * this.itemSize + 2] = e), this;
        }
        getW(t) {
          return this.array[t * this.itemSize + 3];
        }
        setW(t, e) {
          return (this.array[t * this.itemSize + 3] = e), this;
        }
        setXY(t, e, n) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            this
          );
        }
        setXYZ(t, e, n, i) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            this
          );
        }
        setXYZW(t, e, n, i, r) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            (this.array[t + 3] = r),
            this
          );
        }
        onUpload(t) {
          return (this.onUploadCallback = t), this;
        }
        clone() {
          return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
          const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized,
          };
          return (
            '' !== this.name && (t.name = this.name),
            this.usage !== o.W2 && (t.usage = this.usage),
            (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
              (t.updateRange = this.updateRange),
            t
          );
        }
      }
      u.prototype.isBufferAttribute = !0;
      class h extends u {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }
      class d extends u {
        constructor(t, e, n) {
          super(new Uint32Array(t), e, n);
        }
      }
      (class extends u {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }.prototype.isFloat16BufferAttribute = !0);
      class p extends u {
        constructor(t, e, n) {
          super(new Float32Array(t), e, n);
        }
      }
    },
    699: (t, e, n) => {
      'use strict';
      n.d(e, { u: () => b });
      var i = n(532),
        r = n(120),
        a = n(232),
        s = n(574),
        o = n(430),
        l = n(771),
        c = n(802),
        u = n(245),
        h = n(894),
        d = n(542),
        p = n(42);
      let f = 0;
      const m = new u.y(),
        g = new c.T(),
        _ = new i.P(),
        v = new a.Z(),
        x = new a.Z(),
        y = new i.P();
      class b extends s.p {
        constructor() {
          super(),
            Object.defineProperty(this, 'id', { value: f++ }),
            (this.uuid = d.DO()),
            (this.name = ''),
            (this.type = 'BufferGeometry'),
            (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.morphTargetsRelative = !1),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.drawRange = { start: 0, count: 1 / 0 }),
            (this.userData = {});
        }
        getIndex() {
          return this.index;
        }
        setIndex(t) {
          return (
            Array.isArray(t)
              ? (this.index = new ((0, p.H7)(t) ? o.lC : o.ql)(t, 1))
              : (this.index = t),
            this
          );
        }
        getAttribute(t) {
          return this.attributes[t];
        }
        setAttribute(t, e) {
          return (this.attributes[t] = e), this;
        }
        deleteAttribute(t) {
          return delete this.attributes[t], this;
        }
        hasAttribute(t) {
          return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
          this.groups.push({ start: t, count: e, materialIndex: n });
        }
        clearGroups() {
          this.groups = [];
        }
        setDrawRange(t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        }
        applyMatrix4(t) {
          const e = this.attributes.position;
          void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
          const n = this.attributes.normal;
          if (void 0 !== n) {
            const e = new h.V().getNormalMatrix(t);
            n.applyNormalMatrix(e), (n.needsUpdate = !0);
          }
          const i = this.attributes.tangent;
          return (
            void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        }
        applyQuaternion(t) {
          return m.makeRotationFromQuaternion(t), this.applyMatrix4(m), this;
        }
        rotateX(t) {
          return m.makeRotationX(t), this.applyMatrix4(m), this;
        }
        rotateY(t) {
          return m.makeRotationY(t), this.applyMatrix4(m), this;
        }
        rotateZ(t) {
          return m.makeRotationZ(t), this.applyMatrix4(m), this;
        }
        translate(t, e, n) {
          return m.makeTranslation(t, e, n), this.applyMatrix4(m), this;
        }
        scale(t, e, n) {
          return m.makeScale(t, e, n), this.applyMatrix4(m), this;
        }
        lookAt(t) {
          return (
            g.lookAt(t), g.updateMatrix(), this.applyMatrix4(g.matrix), this
          );
        }
        center() {
          return (
            this.computeBoundingBox(),
            this.boundingBox.getCenter(_).negate(),
            this.translate(_.x, _.y, _.z),
            this
          );
        }
        setFromPoints(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0);
          }
          return this.setAttribute('position', new o.a$(e, 3)), this;
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new a.Z());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
                this
              ),
              void this.boundingBox.set(
                new i.P(-1 / 0, -1 / 0, -1 / 0),
                new i.P(1 / 0, 1 / 0, 1 / 0)
              )
            );
          if (void 0 !== t) {
            if ((this.boundingBox.setFromBufferAttribute(t), e))
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                v.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? (y.addVectors(this.boundingBox.min, v.min),
                      this.boundingBox.expandByPoint(y),
                      y.addVectors(this.boundingBox.max, v.max),
                      this.boundingBox.expandByPoint(y))
                    : (this.boundingBox.expandByPoint(v.min),
                      this.boundingBox.expandByPoint(v.max));
              }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z)) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
              this
            );
        }
        computeBoundingSphere() {
          null === this.boundingSphere && (this.boundingSphere = new l.a());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
                this
              ),
              void this.boundingSphere.set(new i.P(), 1 / 0)
            );
          if (t) {
            const n = this.boundingSphere.center;
            if ((v.setFromBufferAttribute(t), e))
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                x.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? (y.addVectors(v.min, x.min),
                      v.expandByPoint(y),
                      y.addVectors(v.max, x.max),
                      v.expandByPoint(y))
                    : (v.expandByPoint(x.min), v.expandByPoint(x.max));
              }
            v.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++)
              y.fromBufferAttribute(t, e),
                (i = Math.max(i, n.distanceToSquared(y)));
            if (e)
              for (let r = 0, a = e.length; r < a; r++) {
                const a = e[r],
                  s = this.morphTargetsRelative;
                for (let e = 0, r = a.count; e < r; e++)
                  y.fromBufferAttribute(a, e),
                    s && (_.fromBufferAttribute(t, e), y.add(_)),
                    (i = Math.max(i, n.distanceToSquared(y)));
              }
            (this.boundingSphere.radius = Math.sqrt(i)),
              isNaN(this.boundingSphere.radius) &&
                console.error(
                  'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                  this
                );
          }
        }
        computeTangents() {
          const t = this.index,
            e = this.attributes;
          if (
            null === t ||
            void 0 === e.position ||
            void 0 === e.normal ||
            void 0 === e.uv
          )
            return void console.error(
              'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)'
            );
          const n = t.array,
            a = e.position.array,
            s = e.normal.array,
            l = e.uv.array,
            c = a.length / 3;
          !1 === this.hasAttribute('tangent') &&
            this.setAttribute('tangent', new o.Tl(new Float32Array(4 * c), 4));
          const u = this.getAttribute('tangent').array,
            h = [],
            d = [];
          for (let t = 0; t < c; t++) (h[t] = new i.P()), (d[t] = new i.P());
          const p = new i.P(),
            f = new i.P(),
            m = new i.P(),
            g = new r.F(),
            _ = new r.F(),
            v = new r.F(),
            x = new i.P(),
            y = new i.P();
          function b(t, e, n) {
            p.fromArray(a, 3 * t),
              f.fromArray(a, 3 * e),
              m.fromArray(a, 3 * n),
              g.fromArray(l, 2 * t),
              _.fromArray(l, 2 * e),
              v.fromArray(l, 2 * n),
              f.sub(p),
              m.sub(p),
              _.sub(g),
              v.sub(g);
            const i = 1 / (_.x * v.y - v.x * _.y);
            isFinite(i) &&
              (x
                .copy(f)
                .multiplyScalar(v.y)
                .addScaledVector(m, -_.y)
                .multiplyScalar(i),
              y
                .copy(m)
                .multiplyScalar(_.x)
                .addScaledVector(f, -v.x)
                .multiplyScalar(i),
              h[t].add(x),
              h[e].add(x),
              h[n].add(x),
              d[t].add(y),
              d[e].add(y),
              d[n].add(y));
          }
          let M = this.groups;
          0 === M.length && (M = [{ start: 0, count: n.length }]);
          for (let t = 0, e = M.length; t < e; ++t) {
            const e = M[t],
              i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3)
              b(n[t + 0], n[t + 1], n[t + 2]);
          }
          const w = new i.P(),
            S = new i.P(),
            E = new i.P(),
            T = new i.P();
          function A(t) {
            E.fromArray(s, 3 * t), T.copy(E);
            const e = h[t];
            w.copy(e),
              w.sub(E.multiplyScalar(E.dot(e))).normalize(),
              S.crossVectors(T, e);
            const n = S.dot(d[t]) < 0 ? -1 : 1;
            (u[4 * t] = w.x),
              (u[4 * t + 1] = w.y),
              (u[4 * t + 2] = w.z),
              (u[4 * t + 3] = n);
          }
          for (let t = 0, e = M.length; t < e; ++t) {
            const e = M[t],
              i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3)
              A(n[t + 0]), A(n[t + 1]), A(n[t + 2]);
          }
        }
        computeVertexNormals() {
          const t = this.index,
            e = this.getAttribute('position');
          if (void 0 !== e) {
            let n = this.getAttribute('normal');
            if (void 0 === n)
              (n = new o.Tl(new Float32Array(3 * e.count), 3)),
                this.setAttribute('normal', n);
            else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const r = new i.P(),
              a = new i.P(),
              s = new i.P(),
              l = new i.P(),
              c = new i.P(),
              u = new i.P(),
              h = new i.P(),
              d = new i.P();
            if (t)
              for (let i = 0, o = t.count; i < o; i += 3) {
                const o = t.getX(i + 0),
                  p = t.getX(i + 1),
                  f = t.getX(i + 2);
                r.fromBufferAttribute(e, o),
                  a.fromBufferAttribute(e, p),
                  s.fromBufferAttribute(e, f),
                  h.subVectors(s, a),
                  d.subVectors(r, a),
                  h.cross(d),
                  l.fromBufferAttribute(n, o),
                  c.fromBufferAttribute(n, p),
                  u.fromBufferAttribute(n, f),
                  l.add(h),
                  c.add(h),
                  u.add(h),
                  n.setXYZ(o, l.x, l.y, l.z),
                  n.setXYZ(p, c.x, c.y, c.z),
                  n.setXYZ(f, u.x, u.y, u.z);
              }
            else
              for (let t = 0, i = e.count; t < i; t += 3)
                r.fromBufferAttribute(e, t + 0),
                  a.fromBufferAttribute(e, t + 1),
                  s.fromBufferAttribute(e, t + 2),
                  h.subVectors(s, a),
                  d.subVectors(r, a),
                  h.cross(d),
                  n.setXYZ(t + 0, h.x, h.y, h.z),
                  n.setXYZ(t + 1, h.x, h.y, h.z),
                  n.setXYZ(t + 2, h.x, h.y, h.z);
            this.normalizeNormals(), (n.needsUpdate = !0);
          }
        }
        merge(t, e) {
          if (!t || !t.isBufferGeometry)
            return void console.error(
              'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',
              t
            );
          void 0 === e &&
            ((e = 0),
            console.warn(
              'THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'
            ));
          const n = this.attributes;
          for (const i in n) {
            if (void 0 === t.attributes[i]) continue;
            const r = n[i].array,
              a = t.attributes[i],
              s = a.array,
              o = a.itemSize * e,
              l = Math.min(s.length, r.length - o);
            for (let t = 0, e = o; t < l; t++, e++) r[e] = s[t];
          }
          return this;
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++)
            y.fromBufferAttribute(t, e),
              y.normalize(),
              t.setXYZ(e, y.x, y.y, y.z);
        }
        toNonIndexed() {
          function t(t, e) {
            const n = t.array,
              i = t.itemSize,
              r = t.normalized,
              a = new n.constructor(e.length * i);
            let s = 0,
              l = 0;
            for (let r = 0, o = e.length; r < o; r++) {
              s = t.isInterleavedBufferAttribute
                ? e[r] * t.data.stride + t.offset
                : e[r] * i;
              for (let t = 0; t < i; t++) a[l++] = n[s++];
            }
            return new o.Tl(a, i, r);
          }
          if (null === this.index)
            return (
              console.warn(
                'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
              ),
              this
            );
          const e = new b(),
            n = this.index.array,
            i = this.attributes;
          for (const r in i) {
            const a = t(i[r], n);
            e.setAttribute(r, a);
          }
          const r = this.morphAttributes;
          for (const i in r) {
            const a = [],
              s = r[i];
            for (let e = 0, i = s.length; e < i; e++) {
              const i = t(s[e], n);
              a.push(i);
            }
            e.morphAttributes[i] = a;
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const a = this.groups;
          for (let t = 0, n = a.length; t < n; t++) {
            const n = a[t];
            e.addGroup(n.start, n.count, n.materialIndex);
          }
          return e;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: 'BufferGeometry',
              generator: 'BufferGeometry.toJSON',
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            '' !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 &&
              (t.userData = this.userData),
            void 0 !== this.parameters)
          ) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t;
          }
          t.data = { attributes: {} };
          const e = this.index;
          null !== e &&
            (t.data.index = {
              type: e.array.constructor.name,
              array: Array.prototype.slice.call(e.array),
            });
          const n = this.attributes;
          for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data);
          }
          const i = {};
          let r = !1;
          for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e],
              a = [];
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              a.push(i.toJSON(t.data));
            }
            a.length > 0 && ((i[e] = a), (r = !0));
          }
          r &&
            ((t.data.morphAttributes = i),
            (t.data.morphTargetsRelative = this.morphTargetsRelative));
          const a = this.groups;
          a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
          const s = this.boundingSphere;
          return (
            null !== s &&
              (t.data.boundingSphere = {
                center: s.center.toArray(),
                radius: s.radius,
              }),
            t
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null);
          const e = {};
          this.name = t.name;
          const n = t.index;
          null !== n && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e));
          }
          const r = t.morphAttributes;
          for (const t in r) {
            const n = [],
              i = r[t];
            for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n;
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const a = t.groups;
          for (let t = 0, e = a.length; t < e; t++) {
            const e = a[t];
            this.addGroup(e.start, e.count, e.materialIndex);
          }
          const s = t.boundingBox;
          null !== s && (this.boundingBox = s.clone());
          const o = t.boundingSphere;
          return (
            null !== o && (this.boundingSphere = o.clone()),
            (this.drawRange.start = t.drawRange.start),
            (this.drawRange.count = t.drawRange.count),
            (this.userData = t.userData),
            void 0 !== t.parameters &&
              (this.parameters = Object.assign({}, t.parameters)),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: 'dispose' });
        }
      }
      b.prototype.isBufferGeometry = !0;
    },
    574: (t, e, n) => {
      'use strict';
      n.d(e, { p: () => i });
      class i {
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const n = this._listeners;
          void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          const n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          const n = this._listeners[t];
          if (void 0 !== n) {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null;
          }
        }
      }
    },
    691: (t, e, n) => {
      'use strict';
      n.d(e, { S: () => i });
      class i {
        constructor() {
          this.mask = 1;
        }
        set(t) {
          this.mask = ((1 << t) | 0) >>> 0;
        }
        enable(t) {
          this.mask |= (1 << t) | 0;
        }
        enableAll() {
          this.mask = -1;
        }
        toggle(t) {
          this.mask ^= (1 << t) | 0;
        }
        disable(t) {
          this.mask &= ~((1 << t) | 0);
        }
        disableAll() {
          this.mask = 0;
        }
        test(t) {
          return 0 != (this.mask & t.mask);
        }
        isEnabled(t) {
          return 0 != (this.mask & ((1 << t) | 0));
        }
      }
    },
    802: (t, e, n) => {
      'use strict';
      n.d(e, { T: () => T });
      var i = n(163),
        r = n(532),
        a = n(245),
        s = n(574),
        o = n(542);
      const l = new a.y(),
        c = new i._();
      class u {
        constructor(t = 0, e = 0, n = 0, i = u.DefaultOrder) {
          (this._x = t), (this._y = e), (this._z = n), (this._order = i);
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get order() {
          return this._order;
        }
        set order(t) {
          (this._order = t), this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._order = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
          return (
            (this._x = t._x),
            (this._y = t._y),
            (this._z = t._z),
            (this._order = t._order),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
          const i = t.elements,
            r = i[0],
            a = i[4],
            s = i[8],
            l = i[1],
            c = i[5],
            u = i[9],
            h = i[2],
            d = i[6],
            p = i[10];
          switch (e) {
            case 'XYZ':
              (this._y = Math.asin((0, o.uZ)(s, -1, 1))),
                Math.abs(s) < 0.9999999
                  ? ((this._x = Math.atan2(-u, p)),
                    (this._z = Math.atan2(-a, r)))
                  : ((this._x = Math.atan2(d, c)), (this._z = 0));
              break;
            case 'YXZ':
              (this._x = Math.asin(-(0, o.uZ)(u, -1, 1))),
                Math.abs(u) < 0.9999999
                  ? ((this._y = Math.atan2(s, p)), (this._z = Math.atan2(l, c)))
                  : ((this._y = Math.atan2(-h, r)), (this._z = 0));
              break;
            case 'ZXY':
              (this._x = Math.asin((0, o.uZ)(d, -1, 1))),
                Math.abs(d) < 0.9999999
                  ? ((this._y = Math.atan2(-h, p)),
                    (this._z = Math.atan2(-a, c)))
                  : ((this._y = 0), (this._z = Math.atan2(l, r)));
              break;
            case 'ZYX':
              (this._y = Math.asin(-(0, o.uZ)(h, -1, 1))),
                Math.abs(h) < 0.9999999
                  ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(l, r)))
                  : ((this._x = 0), (this._z = Math.atan2(-a, c)));
              break;
            case 'YZX':
              (this._z = Math.asin((0, o.uZ)(l, -1, 1))),
                Math.abs(l) < 0.9999999
                  ? ((this._x = Math.atan2(-u, c)),
                    (this._y = Math.atan2(-h, r)))
                  : ((this._x = 0), (this._y = Math.atan2(s, p)));
              break;
            case 'XZY':
              (this._z = Math.asin(-(0, o.uZ)(a, -1, 1))),
                Math.abs(a) < 0.9999999
                  ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(s, r)))
                  : ((this._x = Math.atan2(-u, p)), (this._y = 0));
              break;
            default:
              console.warn(
                'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
                  e
              );
          }
          return (this._order = e), !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
          return (
            l.makeRotationFromQuaternion(t), this.setFromRotationMatrix(l, e, n)
          );
        }
        setFromVector3(t, e = this._order) {
          return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
          return c.setFromEuler(this), this.setFromQuaternion(c, t);
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._order === this._order
          );
        }
        fromArray(t) {
          return (
            (this._x = t[0]),
            (this._y = t[1]),
            (this._z = t[2]),
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._order),
            t
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
      }
      (u.prototype.isEuler = !0),
        (u.DefaultOrder = 'XYZ'),
        (u.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX']);
      var h = n(691),
        d = n(894);
      let p = 0;
      const f = new r.P(),
        m = new i._(),
        g = new a.y(),
        _ = new r.P(),
        v = new r.P(),
        x = new r.P(),
        y = new i._(),
        b = new r.P(1, 0, 0),
        M = new r.P(0, 1, 0),
        w = new r.P(0, 0, 1),
        S = { type: 'added' },
        E = { type: 'removed' };
      class T extends s.p {
        constructor() {
          super(),
            Object.defineProperty(this, 'id', { value: p++ }),
            (this.uuid = o.DO()),
            (this.name = ''),
            (this.type = 'Object3D'),
            (this.parent = null),
            (this.children = []),
            (this.up = T.DefaultUp.clone());
          const t = new r.P(),
            e = new u(),
            n = new i._(),
            s = new r.P(1, 1, 1);
          e._onChange(function () {
            n.setFromEuler(e, !1);
          }),
            n._onChange(function () {
              e.setFromQuaternion(n, void 0, !1);
            }),
            Object.defineProperties(this, {
              position: { configurable: !0, enumerable: !0, value: t },
              rotation: { configurable: !0, enumerable: !0, value: e },
              quaternion: { configurable: !0, enumerable: !0, value: n },
              scale: { configurable: !0, enumerable: !0, value: s },
              modelViewMatrix: { value: new a.y() },
              normalMatrix: { value: new d.V() },
            }),
            (this.matrix = new a.y()),
            (this.matrixWorld = new a.y()),
            (this.matrixAutoUpdate = T.DefaultMatrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = !1),
            (this.layers = new h.S()),
            (this.visible = !0),
            (this.castShadow = !1),
            (this.receiveShadow = !1),
            (this.frustumCulled = !0),
            (this.renderOrder = 0),
            (this.animations = []),
            (this.userData = {});
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
          return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
          this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
          this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
          this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
          this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
          return m.setFromAxisAngle(t, e), this.quaternion.multiply(m), this;
        }
        rotateOnWorldAxis(t, e) {
          return m.setFromAxisAngle(t, e), this.quaternion.premultiply(m), this;
        }
        rotateX(t) {
          return this.rotateOnAxis(b, t);
        }
        rotateY(t) {
          return this.rotateOnAxis(M, t);
        }
        rotateZ(t) {
          return this.rotateOnAxis(w, t);
        }
        translateOnAxis(t, e) {
          return (
            f.copy(t).applyQuaternion(this.quaternion),
            this.position.add(f.multiplyScalar(e)),
            this
          );
        }
        translateX(t) {
          return this.translateOnAxis(b, t);
        }
        translateY(t) {
          return this.translateOnAxis(M, t);
        }
        translateZ(t) {
          return this.translateOnAxis(w, t);
        }
        localToWorld(t) {
          return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
          return t.applyMatrix4(g.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
          t.isVector3 ? _.copy(t) : _.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(!0, !1),
            v.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight
              ? g.lookAt(v, _, this.up)
              : g.lookAt(_, v, this.up),
            this.quaternion.setFromRotationMatrix(g),
            i &&
              (g.extractRotation(i.matrixWorld),
              m.setFromRotationMatrix(g),
              this.quaternion.premultiply(m.invert()));
        }
        add(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
          }
          return t === this
            ? (console.error(
                "THREE.Object3D.add: object can't be added as a child of itself.",
                t
              ),
              this)
            : (t && t.isObject3D
                ? (null !== t.parent && t.parent.remove(t),
                  (t.parent = this),
                  this.children.push(t),
                  t.dispatchEvent(S))
                : console.error(
                    'THREE.Object3D.add: object not an instance of THREE.Object3D.',
                    t
                  ),
              this);
        }
        remove(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
              this.remove(arguments[t]);
            return this;
          }
          const e = this.children.indexOf(t);
          return (
            -1 !== e &&
              ((t.parent = null),
              this.children.splice(e, 1),
              t.dispatchEvent(E)),
            this
          );
        }
        removeFromParent() {
          const t = this.parent;
          return null !== t && t.remove(this), this;
        }
        clear() {
          for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            (e.parent = null), e.dispatchEvent(E);
          }
          return (this.children.length = 0), this;
        }
        attach(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            g.copy(this.matrixWorld).invert(),
            null !== t.parent &&
              (t.parent.updateWorldMatrix(!0, !1),
              g.multiply(t.parent.matrixWorld)),
            t.applyMatrix4(g),
            this.add(t),
            t.updateWorldMatrix(!1, !0),
            this
          );
        }
        getObjectById(t) {
          return this.getObjectByProperty('id', t);
        }
        getObjectByName(t) {
          return this.getObjectByProperty('name', t);
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i;
          }
        }
        getWorldPosition(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            t.setFromMatrixPosition(this.matrixWorld)
          );
        }
        getWorldQuaternion(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(v, t, x),
            t
          );
        }
        getWorldScale(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(v, y, t),
            t
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
        }
        traverseVisible(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
          const e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
          this.matrix.compose(this.position, this.quaternion, this.scale),
            (this.matrixWorldNeedsUpdate = !0);
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) &&
              (null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  ),
              (this.matrixWorldNeedsUpdate = !1),
              (t = !0));
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
          const n = this.parent;
          if (
            (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                ),
            !0 === e)
          ) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++)
              t[e].updateWorldMatrix(!1, !0);
          }
        }
        toJSON(t) {
          const e = void 0 === t || 'string' == typeof t,
            n = {};
          e &&
            ((t = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              shapes: {},
              skeletons: {},
              animations: {},
              nodes: {},
            }),
            (n.metadata = {
              version: 4.5,
              type: 'Object',
              generator: 'Object3D.toJSON',
            }));
          const i = {};
          function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            '' !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            '{}' !== JSON.stringify(this.userData) &&
              (i.userData = this.userData),
            (i.layers = this.layers.mask),
            (i.matrix = this.matrix.toArray()),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
              ((i.type = 'InstancedMesh'),
              (i.count = this.count),
              (i.instanceMatrix = this.instanceMatrix.toJSON()),
              null !== this.instanceColor &&
                (i.instanceColor = this.instanceColor.toJSON())),
            this.isScene)
          )
            this.background &&
              (this.background.isColor
                ? (i.background = this.background.toJSON())
                : this.background.isTexture &&
                  (i.background = this.background.toJSON(t).uuid)),
              this.environment &&
                this.environment.isTexture &&
                (i.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
              const n = e.shapes;
              if (Array.isArray(n))
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  r(t.shapes, i);
                }
              else r(t.shapes, n);
            }
          }
          if (
            (this.isSkinnedMesh &&
              ((i.bindMode = this.bindMode),
              (i.bindMatrix = this.bindMatrix.toArray()),
              void 0 !== this.skeleton &&
                (r(t.skeletons, this.skeleton),
                (i.skeleton = this.skeleton.uuid))),
            void 0 !== this.material)
          )
            if (Array.isArray(this.material)) {
              const e = [];
              for (let n = 0, i = this.material.length; n < i; n++)
                e.push(r(t.materials, this.material[n]));
              i.material = e;
            } else i.material = r(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++)
              i.children.push(this.children[e].toJSON(t).object);
          }
          if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
              const n = this.animations[e];
              i.animations.push(r(t.animations, n));
            }
          }
          if (e) {
            const e = a(t.geometries),
              i = a(t.materials),
              r = a(t.textures),
              s = a(t.images),
              o = a(t.shapes),
              l = a(t.skeletons),
              c = a(t.animations),
              u = a(t.nodes);
            e.length > 0 && (n.geometries = e),
              i.length > 0 && (n.materials = i),
              r.length > 0 && (n.textures = r),
              s.length > 0 && (n.images = s),
              o.length > 0 && (n.shapes = o),
              l.length > 0 && (n.skeletons = l),
              c.length > 0 && (n.animations = c),
              u.length > 0 && (n.nodes = u);
          }
          return (n.object = i), n;
          function a(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
        }
        clone(t) {
          return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
          if (
            ((this.name = t.name),
            this.up.copy(t.up),
            this.position.copy(t.position),
            (this.rotation.order = t.rotation.order),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
            (this.layers.mask = t.layers.mask),
            (this.visible = t.visible),
            (this.castShadow = t.castShadow),
            (this.receiveShadow = t.receiveShadow),
            (this.frustumCulled = t.frustumCulled),
            (this.renderOrder = t.renderOrder),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            !0 === e)
          )
            for (let e = 0; e < t.children.length; e++) {
              const n = t.children[e];
              this.add(n.clone());
            }
          return this;
        }
      }
      (T.DefaultUp = new r.P(0, 1, 0)),
        (T.DefaultMatrixAutoUpdate = !0),
        (T.prototype.isObject3D = !0);
    },
    564: (t, e, n) => {
      'use strict';
      n.d(e, { P: () => s });
      var i = n(42),
        r = n(282);
      let a;
      class s {
        static getDataURL(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ('undefined' == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            void 0 === a && (a = (0, i.c)('canvas')),
              (a.width = t.width),
              (a.height = t.height);
            const n = a.getContext('2d');
            t instanceof ImageData
              ? n.putImageData(t, 0, 0)
              : n.drawImage(t, 0, 0, t.width, t.height),
              (e = a);
          }
          return e.width > 2048 || e.height > 2048
            ? (console.warn(
                'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
                t
              ),
              e.toDataURL('image/jpeg', 0.6))
            : e.toDataURL('image/png');
        }
        static sRGBToLinear(t) {
          if (
            ('undefined' != typeof HTMLImageElement &&
              t instanceof HTMLImageElement) ||
            ('undefined' != typeof HTMLCanvasElement &&
              t instanceof HTMLCanvasElement) ||
            ('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
          ) {
            const e = (0, i.c)('canvas');
            (e.width = t.width), (e.height = t.height);
            const n = e.getContext('2d');
            n.drawImage(t, 0, 0, t.width, t.height);
            const a = n.getImageData(0, 0, t.width, t.height),
              s = a.data;
            for (let t = 0; t < s.length; t++)
              s[t] = 255 * (0, r.P)(s[t] / 255);
            return n.putImageData(a, 0, 0), e;
          }
          if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++)
              e instanceof Uint8Array || e instanceof Uint8ClampedArray
                ? (e[t] = Math.floor(255 * (0, r.P)(e[t] / 255)))
                : (e[t] = (0, r.P)(e[t]));
            return { data: e, width: t.width, height: t.height };
          }
          return (
            console.warn(
              'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'
            ),
            t
          );
        }
      }
    },
    848: (t, e, n) => {
      'use strict';
      n.d(e, { _: () => a });
      var i = n(699),
        r = n(430);
      class a extends i.u {
        constructor(t = 1, e = 1, n = 1, i = 1) {
          super(),
            (this.type = 'PlaneGeometry'),
            (this.parameters = {
              width: t,
              height: e,
              widthSegments: n,
              heightSegments: i,
            });
          const a = t / 2,
            s = e / 2,
            o = Math.floor(n),
            l = Math.floor(i),
            c = o + 1,
            u = l + 1,
            h = t / o,
            d = e / l,
            p = [],
            f = [],
            m = [],
            g = [];
          for (let t = 0; t < u; t++) {
            const e = t * d - s;
            for (let n = 0; n < c; n++) {
              const i = n * h - a;
              f.push(i, -e, 0),
                m.push(0, 0, 1),
                g.push(n / o),
                g.push(1 - t / l);
            }
          }
          for (let t = 0; t < l; t++)
            for (let e = 0; e < o; e++) {
              const n = e + c * t,
                i = e + c * (t + 1),
                r = e + 1 + c * (t + 1),
                a = e + 1 + c * t;
              p.push(n, i, a), p.push(i, r, a);
            }
          this.setIndex(p),
            this.setAttribute('position', new r.a$(f, 3)),
            this.setAttribute('normal', new r.a$(m, 3)),
            this.setAttribute('uv', new r.a$(g, 2));
        }
        static fromJSON(t) {
          return new a(t.width, t.height, t.widthSegments, t.heightSegments);
        }
      }
    },
    186: (t, e, n) => {
      'use strict';
      n.d(e, { d: () => c });
      const i = {
          enabled: !1,
          files: {},
          add: function (t, e) {
            !1 !== this.enabled && (this.files[t] = e);
          },
          get: function (t) {
            if (!1 !== this.enabled) return this.files[t];
          },
          remove: function (t) {
            delete this.files[t];
          },
          clear: function () {
            this.files = {};
          },
        },
        r = new (class {
          constructor(t, e, n) {
            const i = this;
            let r,
              a = !1,
              s = 0,
              o = 0;
            const l = [];
            (this.onStart = void 0),
              (this.onLoad = t),
              (this.onProgress = e),
              (this.onError = n),
              (this.itemStart = function (t) {
                o++,
                  !1 === a && void 0 !== i.onStart && i.onStart(t, s, o),
                  (a = !0);
              }),
              (this.itemEnd = function (t) {
                s++,
                  void 0 !== i.onProgress && i.onProgress(t, s, o),
                  s === o && ((a = !1), void 0 !== i.onLoad && i.onLoad());
              }),
              (this.itemError = function (t) {
                void 0 !== i.onError && i.onError(t);
              }),
              (this.resolveURL = function (t) {
                return r ? r(t) : t;
              }),
              (this.setURLModifier = function (t) {
                return (r = t), this;
              }),
              (this.addHandler = function (t, e) {
                return l.push(t, e), this;
              }),
              (this.removeHandler = function (t) {
                const e = l.indexOf(t);
                return -1 !== e && l.splice(e, 2), this;
              }),
              (this.getHandler = function (t) {
                for (let e = 0, n = l.length; e < n; e += 2) {
                  const n = l[e],
                    i = l[e + 1];
                  if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
                }
                return null;
              });
          }
        })();
      class a {
        constructor(t) {
          (this.manager = void 0 !== t ? t : r),
            (this.crossOrigin = 'anonymous'),
            (this.withCredentials = !1),
            (this.path = ''),
            (this.resourcePath = ''),
            (this.requestHeader = {});
        }
        load() {}
        loadAsync(t, e) {
          const n = this;
          return new Promise(function (i, r) {
            n.load(t, i, e, r);
          });
        }
        parse() {}
        setCrossOrigin(t) {
          return (this.crossOrigin = t), this;
        }
        setWithCredentials(t) {
          return (this.withCredentials = t), this;
        }
        setPath(t) {
          return (this.path = t), this;
        }
        setResourcePath(t) {
          return (this.resourcePath = t), this;
        }
        setRequestHeader(t) {
          return (this.requestHeader = t), this;
        }
      }
      var s = n(42);
      class o extends a {
        constructor(t) {
          super(t);
        }
        load(t, e, n, r) {
          void 0 !== this.path && (t = this.path + t),
            (t = this.manager.resolveURL(t));
          const a = this,
            o = i.get(t);
          if (void 0 !== o)
            return (
              a.manager.itemStart(t),
              setTimeout(function () {
                e && e(o), a.manager.itemEnd(t);
              }, 0),
              o
            );
          const l = (0, s.c)('img');
          function c() {
            h(), i.add(t, this), e && e(this), a.manager.itemEnd(t);
          }
          function u(e) {
            h(), r && r(e), a.manager.itemError(t), a.manager.itemEnd(t);
          }
          function h() {
            l.removeEventListener('load', c, !1),
              l.removeEventListener('error', u, !1);
          }
          return (
            l.addEventListener('load', c, !1),
            l.addEventListener('error', u, !1),
            'data:' !== t.slice(0, 5) &&
              void 0 !== this.crossOrigin &&
              (l.crossOrigin = this.crossOrigin),
            a.manager.itemStart(t),
            (l.src = t),
            l
          );
        }
      }
      var l = n(576);
      class c extends a {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          const r = new l.x(),
            a = new o(this.manager);
          return (
            a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(
              t,
              function (t) {
                (r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
              },
              n,
              i
            ),
            r
          );
        }
      }
    },
    406: (t, e, n) => {
      'use strict';
      n.d(e, { F: () => o });
      var i = n(574),
        r = n(6),
        a = n(542);
      let s = 0;
      class o extends i.p {
        constructor() {
          super(),
            Object.defineProperty(this, 'id', { value: s++ }),
            (this.uuid = a.DO()),
            (this.name = ''),
            (this.type = 'Material'),
            (this.fog = !0),
            (this.blending = r.bd),
            (this.side = r.Wl),
            (this.vertexColors = !1),
            (this.opacity = 1),
            (this.transparent = !1),
            (this.blendSrc = r.k7),
            (this.blendDst = r.Lg),
            (this.blendEquation = r.bG),
            (this.blendSrcAlpha = null),
            (this.blendDstAlpha = null),
            (this.blendEquationAlpha = null),
            (this.depthFunc = r.vC),
            (this.depthTest = !0),
            (this.depthWrite = !0),
            (this.stencilWriteMask = 255),
            (this.stencilFunc = r.cu),
            (this.stencilRef = 0),
            (this.stencilFuncMask = 255),
            (this.stencilFail = r.x5),
            (this.stencilZFail = r.x5),
            (this.stencilZPass = r.x5),
            (this.stencilWrite = !1),
            (this.clippingPlanes = null),
            (this.clipIntersection = !1),
            (this.clipShadows = !1),
            (this.shadowSide = null),
            (this.colorWrite = !0),
            (this.precision = null),
            (this.polygonOffset = !1),
            (this.polygonOffsetFactor = 0),
            (this.polygonOffsetUnits = 0),
            (this.dithering = !1),
            (this.alphaToCoverage = !1),
            (this.premultipliedAlpha = !1),
            (this.visible = !0),
            (this.toneMapped = !0),
            (this.userData = {}),
            (this.version = 0),
            (this._alphaTest = 0);
        }
        get alphaTest() {
          return this._alphaTest;
        }
        set alphaTest(t) {
          this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
          return this.onBeforeCompile.toString();
        }
        setValues(t) {
          if (void 0 !== t)
            for (const e in t) {
              const n = t[e];
              if (void 0 === n) {
                console.warn(
                  "THREE.Material: '" + e + "' parameter is undefined."
                );
                continue;
              }
              if ('shading' === e) {
                console.warn(
                  'THREE.' +
                    this.type +
                    ': .shading has been removed. Use the boolean .flatShading instead.'
                ),
                  (this.flatShading = n === r.es);
                continue;
              }
              const i = this[e];
              void 0 !== i
                ? i && i.isColor
                  ? i.set(n)
                  : i && i.isVector3 && n && n.isVector3
                  ? i.copy(n)
                  : (this[e] = n)
                : console.warn(
                    'THREE.' +
                      this.type +
                      ": '" +
                      e +
                      "' is not a property of this material."
                  );
            }
        }
        toJSON(t) {
          const e = void 0 === t || 'string' == typeof t;
          e && (t = { textures: {}, images: {} });
          const n = {
            metadata: {
              version: 4.5,
              type: 'Material',
              generator: 'Material.toJSON',
            },
          };
          function i(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
          if (
            ((n.uuid = this.uuid),
            (n.type = this.type),
            '' !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            void 0 !== this.sheen && (n.sheen = this.sheen),
            this.sheenColor &&
              this.sheenColor.isColor &&
              (n.sheenColor = this.sheenColor.getHex()),
            void 0 !== this.sheenRoughness &&
              (n.sheenRoughness = this.sheenRoughness),
            this.emissive &&
              this.emissive.isColor &&
              (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity &&
              1 !== this.emissiveIntensity &&
              (n.emissiveIntensity = this.emissiveIntensity),
            this.specular &&
              this.specular.isColor &&
              (n.specular = this.specular.getHex()),
            void 0 !== this.specularIntensity &&
              (n.specularIntensity = this.specularIntensity),
            this.specularColor &&
              this.specularColor.isColor &&
              (n.specularColor = this.specularColor.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness &&
              (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap &&
              this.clearcoatMap.isTexture &&
              (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
            this.clearcoatRoughnessMap &&
              this.clearcoatRoughnessMap.isTexture &&
              (n.clearcoatRoughnessMap =
                this.clearcoatRoughnessMap.toJSON(t).uuid),
            this.clearcoatNormalMap &&
              this.clearcoatNormalMap.isTexture &&
              ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
              (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.matcap &&
              this.matcap.isTexture &&
              (n.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap &&
              this.alphaMap.isTexture &&
              (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap &&
              this.lightMap.isTexture &&
              ((n.lightMap = this.lightMap.toJSON(t).uuid),
              (n.lightMapIntensity = this.lightMapIntensity)),
            this.aoMap &&
              this.aoMap.isTexture &&
              ((n.aoMap = this.aoMap.toJSON(t).uuid),
              (n.aoMapIntensity = this.aoMapIntensity)),
            this.bumpMap &&
              this.bumpMap.isTexture &&
              ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
              (n.bumpScale = this.bumpScale)),
            this.normalMap &&
              this.normalMap.isTexture &&
              ((n.normalMap = this.normalMap.toJSON(t).uuid),
              (n.normalMapType = this.normalMapType),
              (n.normalScale = this.normalScale.toArray())),
            this.displacementMap &&
              this.displacementMap.isTexture &&
              ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
              (n.displacementScale = this.displacementScale),
              (n.displacementBias = this.displacementBias)),
            this.roughnessMap &&
              this.roughnessMap.isTexture &&
              (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap &&
              this.metalnessMap.isTexture &&
              (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap &&
              this.emissiveMap.isTexture &&
              (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap &&
              this.specularMap.isTexture &&
              (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.specularIntensityMap &&
              this.specularIntensityMap.isTexture &&
              (n.specularIntensityMap =
                this.specularIntensityMap.toJSON(t).uuid),
            this.specularColorMap &&
              this.specularColorMap.isTexture &&
              (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
            this.envMap &&
              this.envMap.isTexture &&
              ((n.envMap = this.envMap.toJSON(t).uuid),
              void 0 !== this.combine && (n.combine = this.combine)),
            void 0 !== this.envMapIntensity &&
              (n.envMapIntensity = this.envMapIntensity),
            void 0 !== this.reflectivity &&
              (n.reflectivity = this.reflectivity),
            void 0 !== this.refractionRatio &&
              (n.refractionRatio = this.refractionRatio),
            this.gradientMap &&
              this.gradientMap.isTexture &&
              (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.transmission &&
              (n.transmission = this.transmission),
            this.transmissionMap &&
              this.transmissionMap.isTexture &&
              (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
            void 0 !== this.thickness && (n.thickness = this.thickness),
            this.thicknessMap &&
              this.thicknessMap.isTexture &&
              (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
            void 0 !== this.attenuationDistance &&
              (n.attenuationDistance = this.attenuationDistance),
            void 0 !== this.attenuationColor &&
              (n.attenuationColor = this.attenuationColor.getHex()),
            void 0 !== this.size && (n.size = this.size),
            null !== this.shadowSide && (n.shadowSide = this.shadowSide),
            void 0 !== this.sizeAttenuation &&
              (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== r.bd && (n.blending = this.blending),
            this.side !== r.Wl && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            (n.depthFunc = this.depthFunc),
            (n.depthTest = this.depthTest),
            (n.depthWrite = this.depthWrite),
            (n.colorWrite = this.colorWrite),
            (n.stencilWrite = this.stencilWrite),
            (n.stencilWriteMask = this.stencilWriteMask),
            (n.stencilFunc = this.stencilFunc),
            (n.stencilRef = this.stencilRef),
            (n.stencilFuncMask = this.stencilFuncMask),
            (n.stencilFail = this.stencilFail),
            (n.stencilZFail = this.stencilZFail),
            (n.stencilZPass = this.stencilZPass),
            void 0 !== this.rotation &&
              0 !== this.rotation &&
              (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor &&
              (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits &&
              (n.polygonOffsetUnits = this.polygonOffsetUnits),
            void 0 !== this.linewidth &&
              1 !== this.linewidth &&
              (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            !0 === this.alphaToCoverage &&
              (n.alphaToCoverage = this.alphaToCoverage),
            !0 === this.premultipliedAlpha &&
              (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 &&
              (n.wireframeLinewidth = this.wireframeLinewidth),
            'round' !== this.wireframeLinecap &&
              (n.wireframeLinecap = this.wireframeLinecap),
            'round' !== this.wireframeLinejoin &&
              (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            !1 === this.visible && (n.visible = !1),
            !1 === this.toneMapped && (n.toneMapped = !1),
            '{}' !== JSON.stringify(this.userData) &&
              (n.userData = this.userData),
            e)
          ) {
            const e = i(t.textures),
              r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
          }
          return n;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.name = t.name),
            (this.fog = t.fog),
            (this.blending = t.blending),
            (this.side = t.side),
            (this.vertexColors = t.vertexColors),
            (this.opacity = t.opacity),
            (this.transparent = t.transparent),
            (this.blendSrc = t.blendSrc),
            (this.blendDst = t.blendDst),
            (this.blendEquation = t.blendEquation),
            (this.blendSrcAlpha = t.blendSrcAlpha),
            (this.blendDstAlpha = t.blendDstAlpha),
            (this.blendEquationAlpha = t.blendEquationAlpha),
            (this.depthFunc = t.depthFunc),
            (this.depthTest = t.depthTest),
            (this.depthWrite = t.depthWrite),
            (this.stencilWriteMask = t.stencilWriteMask),
            (this.stencilFunc = t.stencilFunc),
            (this.stencilRef = t.stencilRef),
            (this.stencilFuncMask = t.stencilFuncMask),
            (this.stencilFail = t.stencilFail),
            (this.stencilZFail = t.stencilZFail),
            (this.stencilZPass = t.stencilZPass),
            (this.stencilWrite = t.stencilWrite);
          const e = t.clippingPlanes;
          let n = null;
          if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
          }
          return (
            (this.clippingPlanes = n),
            (this.clipIntersection = t.clipIntersection),
            (this.clipShadows = t.clipShadows),
            (this.shadowSide = t.shadowSide),
            (this.colorWrite = t.colorWrite),
            (this.precision = t.precision),
            (this.polygonOffset = t.polygonOffset),
            (this.polygonOffsetFactor = t.polygonOffsetFactor),
            (this.polygonOffsetUnits = t.polygonOffsetUnits),
            (this.dithering = t.dithering),
            (this.alphaTest = t.alphaTest),
            (this.alphaToCoverage = t.alphaToCoverage),
            (this.premultipliedAlpha = t.premultipliedAlpha),
            (this.visible = t.visible),
            (this.toneMapped = t.toneMapped),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: 'dispose' });
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
      }
      (o.prototype.isMaterial = !0),
        (o.fromType = function () {
          return null;
        });
    },
    33: (t, e, n) => {
      'use strict';
      n.d(e, { v: () => s });
      var i = n(406),
        r = n(6),
        a = n(282);
      class s extends i.F {
        constructor(t) {
          super(),
            (this.type = 'MeshBasicMaterial'),
            (this.color = new a.I(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = r.Ns),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = 'round'),
            (this.wireframeLinejoin = 'round'),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            this
          );
        }
      }
      s.prototype.isMeshBasicMaterial = !0;
    },
    613: (t, e, n) => {
      'use strict';
      n.d(e, { F: () => r });
      var i = n(407);
      class r extends i.j {
        constructor(t) {
          super(t), (this.type = 'RawShaderMaterial');
        }
      }
      r.prototype.isRawShaderMaterial = !0;
    },
    407: (t, e, n) => {
      'use strict';
      n.d(e, { j: () => a });
      var i = n(406),
        r = n(369);
      class a extends i.F {
        constructor(t) {
          super(),
            (this.type = 'ShaderMaterial'),
            (this.defines = {}),
            (this.uniforms = {}),
            (this.vertexShader =
              '\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n'),
            (this.fragmentShader =
              '\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n'),
            (this.linewidth = 1),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            (this.lights = !1),
            (this.clipping = !1),
            (this.extensions = {
              derivatives: !1,
              fragDepth: !1,
              drawBuffers: !1,
              shaderTextureLOD: !1,
            }),
            (this.defaultAttributeValues = {
              color: [1, 1, 1],
              uv: [0, 0],
              uv2: [0, 0],
            }),
            (this.index0AttributeName = void 0),
            (this.uniformsNeedUpdate = !1),
            (this.glslVersion = null),
            void 0 !== t &&
              (void 0 !== t.attributes &&
                console.error(
                  'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'
                ),
              this.setValues(t));
        }
        copy(t) {
          return (
            super.copy(t),
            (this.fragmentShader = t.fragmentShader),
            (this.vertexShader = t.vertexShader),
            (this.uniforms = (0, r.dw)(t.uniforms)),
            (this.defines = Object.assign({}, t.defines)),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.lights = t.lights),
            (this.clipping = t.clipping),
            (this.extensions = Object.assign({}, t.extensions)),
            (this.glslVersion = t.glslVersion),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          (e.glslVersion = this.glslVersion), (e.uniforms = {});
          for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture
              ? (e.uniforms[n] = { type: 't', value: i.toJSON(t).uuid })
              : i && i.isColor
              ? (e.uniforms[n] = { type: 'c', value: i.getHex() })
              : i && i.isVector2
              ? (e.uniforms[n] = { type: 'v2', value: i.toArray() })
              : i && i.isVector3
              ? (e.uniforms[n] = { type: 'v3', value: i.toArray() })
              : i && i.isVector4
              ? (e.uniforms[n] = { type: 'v4', value: i.toArray() })
              : i && i.isMatrix3
              ? (e.uniforms[n] = { type: 'm3', value: i.toArray() })
              : i && i.isMatrix4
              ? (e.uniforms[n] = { type: 'm4', value: i.toArray() })
              : (e.uniforms[n] = { value: i });
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines),
            (e.vertexShader = this.vertexShader),
            (e.fragmentShader = this.fragmentShader);
          const n = {};
          for (const t in this.extensions)
            !0 === this.extensions[t] && (n[t] = !0);
          return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
      }
      a.prototype.isShaderMaterial = !0;
    },
    232: (t, e, n) => {
      'use strict';
      n.d(e, { Z: () => r });
      var i = n(532);
      class r {
        constructor(
          t = new i.P(1 / 0, 1 / 0, 1 / 0),
          e = new i.P(-1 / 0, -1 / 0, -1 / 0)
        ) {
          (this.min = t), (this.max = e);
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            s = -1 / 0;
          for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o],
              c = t[o + 1],
              u = t[o + 2];
            l < e && (e = l),
              c < n && (n = c),
              u < i && (i = u),
              l > r && (r = l),
              c > a && (a = c),
              u > s && (s = u);
          }
          return this.min.set(e, n, i), this.max.set(r, a, s), this;
        }
        setFromBufferAttribute(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            s = -1 / 0;
          for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o),
              c = t.getY(o),
              u = t.getZ(o);
            l < e && (e = l),
              c < n && (n = c),
              u < i && (i = u),
              l > r && (r = l),
              c > a && (a = c),
              u > s && (s = u);
          }
          return this.min.set(e, n, i), this.max.set(r, a, s), this;
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this;
        }
        setFromCenterAndSize(t, e) {
          const n = s.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = !1) {
          return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
          return (
            (this.min.x = this.min.y = this.min.z = 1 / 0),
            (this.max.x = this.max.y = this.max.z = -1 / 0),
            this
          );
        }
        isEmpty() {
          return (
            this.max.x < this.min.x ||
            this.max.y < this.min.y ||
            this.max.z < this.min.z
          );
        }
        getCenter(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
          t.updateWorldMatrix(!1, !1);
          const n = t.geometry;
          if (void 0 !== n)
            if (e && null != n.attributes && void 0 !== n.attributes.position) {
              const e = n.attributes.position;
              for (let n = 0, i = e.count; n < i; n++)
                s.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
                  this.expandByPoint(s);
            } else
              null === n.boundingBox && n.computeBoundingBox(),
                o.copy(n.boundingBox),
                o.applyMatrix4(t.matrixWorld),
                this.union(o);
          const i = t.children;
          for (let t = 0, n = i.length; t < n; t++)
            this.expandByObject(i[t], e);
          return this;
        }
        containsPoint(t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y ||
            t.z < this.min.z ||
            t.z > this.max.z
          );
        }
        containsBox(t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y &&
            this.min.z <= t.min.z &&
            t.max.z <= this.max.z
          );
        }
        getParameter(t, e) {
          return e.set(
            (t.x - this.min.x) / (this.max.x - this.min.x),
            (t.y - this.min.y) / (this.max.y - this.min.y),
            (t.z - this.min.z) / (this.max.z - this.min.z)
          );
        }
        intersectsBox(t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y ||
            t.max.z < this.min.z ||
            t.min.z > this.max.z
          );
        }
        intersectsSphere(t) {
          return (
            this.clampPoint(t.center, s),
            s.distanceToSquared(t.center) <= t.radius * t.radius
          );
        }
        intersectsPlane(t) {
          let e, n;
          return (
            t.normal.x > 0
              ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
              : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
            t.normal.y > 0
              ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
              : ((e += t.normal.y * this.max.y),
                (n += t.normal.y * this.min.y)),
            t.normal.z > 0
              ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
              : ((e += t.normal.z * this.max.z),
                (n += t.normal.z * this.min.z)),
            e <= -t.constant && n >= -t.constant
          );
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(f),
            m.subVectors(this.max, f),
            l.subVectors(t.a, f),
            c.subVectors(t.b, f),
            u.subVectors(t.c, f),
            h.subVectors(c, l),
            d.subVectors(u, c),
            p.subVectors(l, u);
          let e = [
            0,
            -h.z,
            h.y,
            0,
            -d.z,
            d.y,
            0,
            -p.z,
            p.y,
            h.z,
            0,
            -h.x,
            d.z,
            0,
            -d.x,
            p.z,
            0,
            -p.x,
            -h.y,
            h.x,
            0,
            -d.y,
            d.x,
            0,
            -p.y,
            p.x,
            0,
          ];
          return (
            !!v(e, l, c, u, m) &&
            ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            !!v(e, l, c, u, m) &&
              (g.crossVectors(h, d), (e = [g.x, g.y, g.z]), v(e, l, c, u, m)))
          );
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
          return s.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
          return (
            this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(s).length()),
            t
          );
        }
        intersect(t) {
          return (
            this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
          );
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
          return (
            this.isEmpty() ||
              (a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(a)),
            this
          );
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        }
      }
      r.prototype.isBox3 = !0;
      const a = [
          new i.P(),
          new i.P(),
          new i.P(),
          new i.P(),
          new i.P(),
          new i.P(),
          new i.P(),
          new i.P(),
        ],
        s = new i.P(),
        o = new r(),
        l = new i.P(),
        c = new i.P(),
        u = new i.P(),
        h = new i.P(),
        d = new i.P(),
        p = new i.P(),
        f = new i.P(),
        m = new i.P(),
        g = new i.P(),
        _ = new i.P();
      function v(t, e, n, i, r) {
        for (let a = 0, s = t.length - 3; a <= s; a += 3) {
          _.fromArray(t, a);
          const s =
              r.x * Math.abs(_.x) + r.y * Math.abs(_.y) + r.z * Math.abs(_.z),
            o = e.dot(_),
            l = n.dot(_),
            c = i.dot(_);
          if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
        }
        return !0;
      }
    },
    282: (t, e, n) => {
      'use strict';
      n.d(e, { I: () => u, P: () => l });
      var i = n(542);
      const r = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        },
        a = { h: 0, s: 0, l: 0 },
        s = { h: 0, s: 0, l: 0 };
      function o(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + 6 * (e - t) * (2 / 3 - n)
            : t
        );
      }
      function l(t) {
        return t < 0.04045
          ? 0.0773993808 * t
          : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
      }
      function c(t) {
        return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
      }
      class u {
        constructor(t, e, n) {
          return void 0 === e && void 0 === n
            ? this.set(t)
            : this.setRGB(t, e, n);
        }
        set(t) {
          return (
            t && t.isColor
              ? this.copy(t)
              : 'number' == typeof t
              ? this.setHex(t)
              : 'string' == typeof t && this.setStyle(t),
            this
          );
        }
        setScalar(t) {
          return (this.r = t), (this.g = t), (this.b = t), this;
        }
        setHex(t) {
          return (
            (t = Math.floor(t)),
            (this.r = ((t >> 16) & 255) / 255),
            (this.g = ((t >> 8) & 255) / 255),
            (this.b = (255 & t) / 255),
            this
          );
        }
        setRGB(t, e, n) {
          return (this.r = t), (this.g = e), (this.b = n), this;
        }
        setHSL(t, e, n) {
          if (
            ((t = i.kz(t, 1)),
            (e = i.uZ(e, 0, 1)),
            (n = i.uZ(n, 0, 1)),
            0 === e)
          )
            this.r = this.g = this.b = n;
          else {
            const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
              r = 2 * n - i;
            (this.r = o(r, i, t + 1 / 3)),
              (this.g = o(r, i, t)),
              (this.b = o(r, i, t - 1 / 3));
          }
          return this;
        }
        setStyle(t) {
          function e(e) {
            void 0 !== e &&
              parseFloat(e) < 1 &&
              console.warn(
                'THREE.Color: Alpha component of ' + t + ' will be ignored.'
              );
          }
          let n;
          if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
            let t;
            const i = n[1],
              r = n[2];
            switch (i) {
              case 'rgb':
              case 'rgba':
                if (
                  (t =
                    /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      r
                    ))
                )
                  return (
                    (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
                    (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
                    (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
                    e(t[4]),
                    this
                  );
                if (
                  (t =
                    /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      r
                    ))
                )
                  return (
                    (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
                    (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
                    (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
                    e(t[4]),
                    this
                  );
                break;
              case 'hsl':
              case 'hsla':
                if (
                  (t =
                    /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      r
                    ))
                ) {
                  const n = parseFloat(t[1]) / 360,
                    i = parseInt(t[2], 10) / 100,
                    r = parseInt(t[3], 10) / 100;
                  return e(t[4]), this.setHSL(n, i, r);
                }
            }
          } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(t))) {
            const t = n[1],
              e = t.length;
            if (3 === e)
              return (
                (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
                (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
                (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
                this
              );
            if (6 === e)
              return (
                (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
                (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
                (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
                this
              );
          }
          return t && t.length > 0 ? this.setColorName(t) : this;
        }
        setColorName(t) {
          const e = r[t.toLowerCase()];
          return (
            void 0 !== e
              ? this.setHex(e)
              : console.warn('THREE.Color: Unknown color ' + t),
            this
          );
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
          return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
        }
        copySRGBToLinear(t) {
          return (this.r = l(t.r)), (this.g = l(t.g)), (this.b = l(t.b)), this;
        }
        copyLinearToSRGB(t) {
          return (this.r = c(t.r)), (this.g = c(t.g)), (this.b = c(t.b)), this;
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this;
        }
        getHex() {
          return (
            ((255 * this.r) << 16) ^
            ((255 * this.g) << 8) ^
            ((255 * this.b) << 0)
          );
        }
        getHexString() {
          return ('000000' + this.getHex().toString(16)).slice(-6);
        }
        getHSL(t) {
          const e = this.r,
            n = this.g,
            i = this.b,
            r = Math.max(e, n, i),
            a = Math.min(e, n, i);
          let s, o;
          const l = (a + r) / 2;
          if (a === r) (s = 0), (o = 0);
          else {
            const t = r - a;
            switch (((o = l <= 0.5 ? t / (r + a) : t / (2 - r - a)), r)) {
              case e:
                s = (n - i) / t + (n < i ? 6 : 0);
                break;
              case n:
                s = (i - e) / t + 2;
                break;
              case i:
                s = (e - n) / t + 4;
            }
            s /= 6;
          }
          return (t.h = s), (t.s = o), (t.l = l), t;
        }
        getStyle() {
          return (
            'rgb(' +
            ((255 * this.r) | 0) +
            ',' +
            ((255 * this.g) | 0) +
            ',' +
            ((255 * this.b) | 0) +
            ')'
          );
        }
        offsetHSL(t, e, n) {
          return (
            this.getHSL(a),
            (a.h += t),
            (a.s += e),
            (a.l += n),
            this.setHSL(a.h, a.s, a.l),
            this
          );
        }
        add(t) {
          return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
        }
        addColors(t, e) {
          return (
            (this.r = t.r + e.r),
            (this.g = t.g + e.g),
            (this.b = t.b + e.b),
            this
          );
        }
        addScalar(t) {
          return (this.r += t), (this.g += t), (this.b += t), this;
        }
        sub(t) {
          return (
            (this.r = Math.max(0, this.r - t.r)),
            (this.g = Math.max(0, this.g - t.g)),
            (this.b = Math.max(0, this.b - t.b)),
            this
          );
        }
        multiply(t) {
          return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
        }
        multiplyScalar(t) {
          return (this.r *= t), (this.g *= t), (this.b *= t), this;
        }
        lerp(t, e) {
          return (
            (this.r += (t.r - this.r) * e),
            (this.g += (t.g - this.g) * e),
            (this.b += (t.b - this.b) * e),
            this
          );
        }
        lerpColors(t, e, n) {
          return (
            (this.r = t.r + (e.r - t.r) * n),
            (this.g = t.g + (e.g - t.g) * n),
            (this.b = t.b + (e.b - t.b) * n),
            this
          );
        }
        lerpHSL(t, e) {
          this.getHSL(a), t.getHSL(s);
          const n = i.t7(a.h, s.h, e),
            r = i.t7(a.s, s.s, e),
            o = i.t7(a.l, s.l, e);
          return this.setHSL(n, r, o), this;
        }
        equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
          return (
            (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
        }
        fromBufferAttribute(t, e) {
          return (
            (this.r = t.getX(e)),
            (this.g = t.getY(e)),
            (this.b = t.getZ(e)),
            !0 === t.normalized &&
              ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
            this
          );
        }
        toJSON() {
          return this.getHex();
        }
      }
      (u.NAMES = r),
        (u.prototype.isColor = !0),
        (u.prototype.r = 1),
        (u.prototype.g = 1),
        (u.prototype.b = 1);
    },
    542: (t, e, n) => {
      'use strict';
      n.d(e, {
        DO: () => s,
        I3: () => a,
        gy: () => h,
        kz: () => l,
        qW: () => r,
        t7: () => c,
        uZ: () => o,
        wt: () => u,
      });
      const i = [];
      for (let t = 0; t < 256; t++) i[t] = (t < 16 ? '0' : '') + t.toString(16);
      const r = Math.PI / 180,
        a = 180 / Math.PI;
      function s() {
        const t = (4294967295 * Math.random()) | 0,
          e = (4294967295 * Math.random()) | 0,
          n = (4294967295 * Math.random()) | 0,
          r = (4294967295 * Math.random()) | 0;
        return (
          i[255 & t] +
          i[(t >> 8) & 255] +
          i[(t >> 16) & 255] +
          i[(t >> 24) & 255] +
          '-' +
          i[255 & e] +
          i[(e >> 8) & 255] +
          '-' +
          i[((e >> 16) & 15) | 64] +
          i[(e >> 24) & 255] +
          '-' +
          i[(63 & n) | 128] +
          i[(n >> 8) & 255] +
          '-' +
          i[(n >> 16) & 255] +
          i[(n >> 24) & 255] +
          i[255 & r] +
          i[(r >> 8) & 255] +
          i[(r >> 16) & 255] +
          i[(r >> 24) & 255]
        ).toUpperCase();
      }
      function o(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function l(t, e) {
        return ((t % e) + e) % e;
      }
      function c(t, e, n) {
        return (1 - n) * t + n * e;
      }
      function u(t) {
        return 0 == (t & (t - 1)) && 0 !== t;
      }
      function h(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
      }
    },
    894: (t, e, n) => {
      'use strict';
      n.d(e, { V: () => i });
      class i {
        constructor() {
          (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            arguments.length > 0 &&
              console.error(
                'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'
              );
        }
        set(t, e, n, i, r, a, s, o, l) {
          const c = this.elements;
          return (
            (c[0] = t),
            (c[1] = i),
            (c[2] = s),
            (c[3] = e),
            (c[4] = r),
            (c[5] = o),
            (c[6] = n),
            (c[7] = a),
            (c[8] = l),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
          );
        }
        setFromMatrix4(t) {
          const e = t.elements;
          return (
            this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
          );
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            s = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            u = n[7],
            h = n[2],
            d = n[5],
            p = n[8],
            f = i[0],
            m = i[3],
            g = i[6],
            _ = i[1],
            v = i[4],
            x = i[7],
            y = i[2],
            b = i[5],
            M = i[8];
          return (
            (r[0] = a * f + s * _ + o * y),
            (r[3] = a * m + s * v + o * b),
            (r[6] = a * g + s * x + o * M),
            (r[1] = l * f + c * _ + u * y),
            (r[4] = l * m + c * v + u * b),
            (r[7] = l * g + c * x + u * M),
            (r[2] = h * f + d * _ + p * y),
            (r[5] = h * m + d * v + p * b),
            (r[8] = h * g + d * x + p * M),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[3] *= t),
            (e[6] *= t),
            (e[1] *= t),
            (e[4] *= t),
            (e[7] *= t),
            (e[2] *= t),
            (e[5] *= t),
            (e[8] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
          return (
            e * a * c -
            e * s * l -
            n * r * c +
            n * s * o +
            i * r * l -
            i * a * o
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            u = c * a - s * l,
            h = s * o - c * r,
            d = l * r - a * o,
            p = e * u + n * h + i * d;
          if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const f = 1 / p;
          return (
            (t[0] = u * f),
            (t[1] = (i * l - c * n) * f),
            (t[2] = (s * n - i * a) * f),
            (t[3] = h * f),
            (t[4] = (c * e - i * o) * f),
            (t[5] = (i * r - s * e) * f),
            (t[6] = d * f),
            (t[7] = (n * o - l * e) * f),
            (t[8] = (a * e - n * r) * f),
            this
          );
        }
        transpose() {
          let t;
          const e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[3]),
            (e[3] = t),
            (t = e[2]),
            (e[2] = e[6]),
            (e[6] = t),
            (t = e[5]),
            (e[5] = e[7]),
            (e[7] = t),
            this
          );
        }
        getNormalMatrix(t) {
          return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
          const e = this.elements;
          return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            this
          );
        }
        setUvTransform(t, e, n, i, r, a, s) {
          const o = Math.cos(r),
            l = Math.sin(r);
          return (
            this.set(
              n * o,
              n * l,
              -n * (o * a + l * s) + a + t,
              -i * l,
              i * o,
              -i * (-l * a + o * s) + s + e,
              0,
              0,
              1
            ),
            this
          );
        }
        scale(t, e) {
          const n = this.elements;
          return (
            (n[0] *= t),
            (n[3] *= t),
            (n[6] *= t),
            (n[1] *= e),
            (n[4] *= e),
            (n[7] *= e),
            this
          );
        }
        rotate(t) {
          const e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            a = i[3],
            s = i[6],
            o = i[1],
            l = i[4],
            c = i[7];
          return (
            (i[0] = e * r + n * o),
            (i[3] = e * a + n * l),
            (i[6] = e * s + n * c),
            (i[1] = -n * r + e * o),
            (i[4] = -n * a + e * l),
            (i[7] = -n * s + e * c),
            this
          );
        }
        translate(t, e) {
          const n = this.elements;
          return (
            (n[0] += t * n[2]),
            (n[3] += t * n[5]),
            (n[6] += t * n[8]),
            (n[1] += e * n[2]),
            (n[4] += e * n[5]),
            (n[7] += e * n[8]),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            t
          );
        }
        clone() {
          return new this.constructor().fromArray(this.elements);
        }
      }
      i.prototype.isMatrix3 = !0;
    },
    245: (t, e, n) => {
      'use strict';
      n.d(e, { y: () => r });
      var i = n(532);
      class r {
        constructor() {
          (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
            arguments.length > 0 &&
              console.error(
                'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.'
              );
        }
        set(t, e, n, i, r, a, s, o, l, c, u, h, d, p, f, m) {
          const g = this.elements;
          return (
            (g[0] = t),
            (g[4] = e),
            (g[8] = n),
            (g[12] = i),
            (g[1] = r),
            (g[5] = a),
            (g[9] = s),
            (g[13] = o),
            (g[2] = l),
            (g[6] = c),
            (g[10] = u),
            (g[14] = h),
            (g[3] = d),
            (g[7] = p),
            (g[11] = f),
            (g[15] = m),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
          return new r().fromArray(this.elements);
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            (e[9] = n[9]),
            (e[10] = n[10]),
            (e[11] = n[11]),
            (e[12] = n[12]),
            (e[13] = n[13]),
            (e[14] = n[14]),
            (e[15] = n[15]),
            this
          );
        }
        copyPosition(t) {
          const e = this.elements,
            n = t.elements;
          return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return (
            this.set(
              e[0],
              e[3],
              e[6],
              0,
              e[1],
              e[4],
              e[7],
              0,
              e[2],
              e[5],
              e[8],
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
          );
        }
        makeBasis(t, e, n) {
          return (
            this.set(
              t.x,
              e.x,
              n.x,
              0,
              t.y,
              e.y,
              n.y,
              0,
              t.z,
              e.z,
              n.z,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractRotation(t) {
          const e = this.elements,
            n = t.elements,
            i = 1 / a.setFromMatrixColumn(t, 0).length(),
            r = 1 / a.setFromMatrixColumn(t, 1).length(),
            s = 1 / a.setFromMatrixColumn(t, 2).length();
          return (
            (e[0] = n[0] * i),
            (e[1] = n[1] * i),
            (e[2] = n[2] * i),
            (e[3] = 0),
            (e[4] = n[4] * r),
            (e[5] = n[5] * r),
            (e[6] = n[6] * r),
            (e[7] = 0),
            (e[8] = n[8] * s),
            (e[9] = n[9] * s),
            (e[10] = n[10] * s),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromEuler(t) {
          (t && t.isEuler) ||
            console.error(
              'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.'
            );
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            a = Math.cos(n),
            s = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            u = Math.sin(r);
          if ('XYZ' === t.order) {
            const t = a * c,
              n = a * u,
              i = s * c,
              r = s * u;
            (e[0] = o * c),
              (e[4] = -o * u),
              (e[8] = l),
              (e[1] = n + i * l),
              (e[5] = t - r * l),
              (e[9] = -s * o),
              (e[2] = r - t * l),
              (e[6] = i + n * l),
              (e[10] = a * o);
          } else if ('YXZ' === t.order) {
            const t = o * c,
              n = o * u,
              i = l * c,
              r = l * u;
            (e[0] = t + r * s),
              (e[4] = i * s - n),
              (e[8] = a * l),
              (e[1] = a * u),
              (e[5] = a * c),
              (e[9] = -s),
              (e[2] = n * s - i),
              (e[6] = r + t * s),
              (e[10] = a * o);
          } else if ('ZXY' === t.order) {
            const t = o * c,
              n = o * u,
              i = l * c,
              r = l * u;
            (e[0] = t - r * s),
              (e[4] = -a * u),
              (e[8] = i + n * s),
              (e[1] = n + i * s),
              (e[5] = a * c),
              (e[9] = r - t * s),
              (e[2] = -a * l),
              (e[6] = s),
              (e[10] = a * o);
          } else if ('ZYX' === t.order) {
            const t = a * c,
              n = a * u,
              i = s * c,
              r = s * u;
            (e[0] = o * c),
              (e[4] = i * l - n),
              (e[8] = t * l + r),
              (e[1] = o * u),
              (e[5] = r * l + t),
              (e[9] = n * l - i),
              (e[2] = -l),
              (e[6] = s * o),
              (e[10] = a * o);
          } else if ('YZX' === t.order) {
            const t = a * o,
              n = a * l,
              i = s * o,
              r = s * l;
            (e[0] = o * c),
              (e[4] = r - t * u),
              (e[8] = i * u + n),
              (e[1] = u),
              (e[5] = a * c),
              (e[9] = -s * c),
              (e[2] = -l * c),
              (e[6] = n * u + i),
              (e[10] = t - r * u);
          } else if ('XZY' === t.order) {
            const t = a * o,
              n = a * l,
              i = s * o,
              r = s * l;
            (e[0] = o * c),
              (e[4] = -u),
              (e[8] = l * c),
              (e[1] = t * u + r),
              (e[5] = a * c),
              (e[9] = n * u - i),
              (e[2] = i * u - n),
              (e[6] = s * c),
              (e[10] = r * u + t);
          }
          return (
            (e[3] = 0),
            (e[7] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromQuaternion(t) {
          return this.compose(o, t, l);
        }
        lookAt(t, e, n) {
          const i = this.elements;
          return (
            h.subVectors(t, e),
            0 === h.lengthSq() && (h.z = 1),
            h.normalize(),
            c.crossVectors(n, h),
            0 === c.lengthSq() &&
              (1 === Math.abs(n.z) ? (h.x += 1e-4) : (h.z += 1e-4),
              h.normalize(),
              c.crossVectors(n, h)),
            c.normalize(),
            u.crossVectors(h, c),
            (i[0] = c.x),
            (i[4] = u.x),
            (i[8] = h.x),
            (i[1] = c.y),
            (i[5] = u.y),
            (i[9] = h.y),
            (i[2] = c.z),
            (i[6] = u.z),
            (i[10] = h.z),
            this
          );
        }
        multiply(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'
              ),
              this.multiplyMatrices(t, e))
            : this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            s = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            u = n[5],
            h = n[9],
            d = n[13],
            p = n[2],
            f = n[6],
            m = n[10],
            g = n[14],
            _ = n[3],
            v = n[7],
            x = n[11],
            y = n[15],
            b = i[0],
            M = i[4],
            w = i[8],
            S = i[12],
            E = i[1],
            T = i[5],
            A = i[9],
            R = i[13],
            L = i[2],
            C = i[6],
            P = i[10],
            D = i[14],
            O = i[3],
            N = i[7],
            I = i[11],
            U = i[15];
          return (
            (r[0] = a * b + s * E + o * L + l * O),
            (r[4] = a * M + s * T + o * C + l * N),
            (r[8] = a * w + s * A + o * P + l * I),
            (r[12] = a * S + s * R + o * D + l * U),
            (r[1] = c * b + u * E + h * L + d * O),
            (r[5] = c * M + u * T + h * C + d * N),
            (r[9] = c * w + u * A + h * P + d * I),
            (r[13] = c * S + u * R + h * D + d * U),
            (r[2] = p * b + f * E + m * L + g * O),
            (r[6] = p * M + f * T + m * C + g * N),
            (r[10] = p * w + f * A + m * P + g * I),
            (r[14] = p * S + f * R + m * D + g * U),
            (r[3] = _ * b + v * E + x * L + y * O),
            (r[7] = _ * M + v * T + x * C + y * N),
            (r[11] = _ * w + v * A + x * P + y * I),
            (r[15] = _ * S + v * R + x * D + y * U),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[4] *= t),
            (e[8] *= t),
            (e[12] *= t),
            (e[1] *= t),
            (e[5] *= t),
            (e[9] *= t),
            (e[13] *= t),
            (e[2] *= t),
            (e[6] *= t),
            (e[10] *= t),
            (e[14] *= t),
            (e[3] *= t),
            (e[7] *= t),
            (e[11] *= t),
            (e[15] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            a = t[1],
            s = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            u = t[6],
            h = t[10],
            d = t[14];
          return (
            t[3] *
              (+r * o * u -
                i * l * u -
                r * s * h +
                n * l * h +
                i * s * d -
                n * o * d) +
            t[7] *
              (+e * o * d -
                e * l * h +
                r * a * h -
                i * a * d +
                i * l * c -
                r * o * c) +
            t[11] *
              (+e * l * u -
                e * s * d -
                r * a * u +
                n * a * d +
                r * s * c -
                n * l * c) +
            t[15] *
              (-i * s * c -
                e * o * u +
                e * s * h +
                i * a * u -
                n * a * h +
                n * o * c)
          );
        }
        transpose() {
          const t = this.elements;
          let e;
          return (
            (e = t[1]),
            (t[1] = t[4]),
            (t[4] = e),
            (e = t[2]),
            (t[2] = t[8]),
            (t[8] = e),
            (e = t[6]),
            (t[6] = t[9]),
            (t[9] = e),
            (e = t[3]),
            (t[3] = t[12]),
            (t[12] = e),
            (e = t[7]),
            (t[7] = t[13]),
            (t[13] = e),
            (e = t[11]),
            (t[11] = t[14]),
            (t[14] = e),
            this
          );
        }
        setPosition(t, e, n) {
          const i = this.elements;
          return (
            t.isVector3
              ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
              : ((i[12] = t), (i[13] = e), (i[14] = n)),
            this
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            u = t[9],
            h = t[10],
            d = t[11],
            p = t[12],
            f = t[13],
            m = t[14],
            g = t[15],
            _ =
              u * m * l -
              f * h * l +
              f * o * d -
              s * m * d -
              u * o * g +
              s * h * g,
            v =
              p * h * l -
              c * m * l -
              p * o * d +
              a * m * d +
              c * o * g -
              a * h * g,
            x =
              c * f * l -
              p * u * l +
              p * s * d -
              a * f * d -
              c * s * g +
              a * u * g,
            y =
              p * u * o -
              c * f * o -
              p * s * h +
              a * f * h +
              c * s * m -
              a * u * m,
            b = e * _ + n * v + i * x + r * y;
          if (0 === b)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const M = 1 / b;
          return (
            (t[0] = _ * M),
            (t[1] =
              (f * h * r -
                u * m * r -
                f * i * d +
                n * m * d +
                u * i * g -
                n * h * g) *
              M),
            (t[2] =
              (s * m * r -
                f * o * r +
                f * i * l -
                n * m * l -
                s * i * g +
                n * o * g) *
              M),
            (t[3] =
              (u * o * r -
                s * h * r -
                u * i * l +
                n * h * l +
                s * i * d -
                n * o * d) *
              M),
            (t[4] = v * M),
            (t[5] =
              (c * m * r -
                p * h * r +
                p * i * d -
                e * m * d -
                c * i * g +
                e * h * g) *
              M),
            (t[6] =
              (p * o * r -
                a * m * r -
                p * i * l +
                e * m * l +
                a * i * g -
                e * o * g) *
              M),
            (t[7] =
              (a * h * r -
                c * o * r +
                c * i * l -
                e * h * l -
                a * i * d +
                e * o * d) *
              M),
            (t[8] = x * M),
            (t[9] =
              (p * u * r -
                c * f * r -
                p * n * d +
                e * f * d +
                c * n * g -
                e * u * g) *
              M),
            (t[10] =
              (a * f * r -
                p * s * r +
                p * n * l -
                e * f * l -
                a * n * g +
                e * s * g) *
              M),
            (t[11] =
              (c * s * r -
                a * u * r -
                c * n * l +
                e * u * l +
                a * n * d -
                e * s * d) *
              M),
            (t[12] = y * M),
            (t[13] =
              (c * f * i -
                p * u * i +
                p * n * h -
                e * f * h -
                c * n * m +
                e * u * m) *
              M),
            (t[14] =
              (p * s * i -
                a * f * i -
                p * n * o +
                e * f * o +
                a * n * m -
                e * s * m) *
              M),
            (t[15] =
              (a * u * i -
                c * s * i +
                c * n * o -
                e * u * o -
                a * n * h +
                e * s * h) *
              M),
            this
          );
        }
        scale(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
          return (
            (e[0] *= n),
            (e[4] *= i),
            (e[8] *= r),
            (e[1] *= n),
            (e[5] *= i),
            (e[9] *= r),
            (e[2] *= n),
            (e[6] *= i),
            (e[10] *= r),
            (e[3] *= n),
            (e[7] *= i),
            (e[11] *= r),
            this
          );
        }
        getMaxScaleOnAxis() {
          const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationY(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationZ(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationAxis(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            a = t.x,
            s = t.y,
            o = t.z,
            l = r * a,
            c = r * s;
          return (
            this.set(
              l * a + n,
              l * s - i * o,
              l * o + i * s,
              0,
              l * s + i * o,
              c * s + n,
              c * o - i * a,
              0,
              l * o - i * s,
              c * o + i * a,
              r * o * o + n,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, a) {
          return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
          const i = this.elements,
            r = e._x,
            a = e._y,
            s = e._z,
            o = e._w,
            l = r + r,
            c = a + a,
            u = s + s,
            h = r * l,
            d = r * c,
            p = r * u,
            f = a * c,
            m = a * u,
            g = s * u,
            _ = o * l,
            v = o * c,
            x = o * u,
            y = n.x,
            b = n.y,
            M = n.z;
          return (
            (i[0] = (1 - (f + g)) * y),
            (i[1] = (d + x) * y),
            (i[2] = (p - v) * y),
            (i[3] = 0),
            (i[4] = (d - x) * b),
            (i[5] = (1 - (h + g)) * b),
            (i[6] = (m + _) * b),
            (i[7] = 0),
            (i[8] = (p + v) * M),
            (i[9] = (m - _) * M),
            (i[10] = (1 - (h + f)) * M),
            (i[11] = 0),
            (i[12] = t.x),
            (i[13] = t.y),
            (i[14] = t.z),
            (i[15] = 1),
            this
          );
        }
        decompose(t, e, n) {
          const i = this.elements;
          let r = a.set(i[0], i[1], i[2]).length();
          const o = a.set(i[4], i[5], i[6]).length(),
            l = a.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (r = -r),
            (t.x = i[12]),
            (t.y = i[13]),
            (t.z = i[14]),
            s.copy(this);
          const c = 1 / r,
            u = 1 / o,
            h = 1 / l;
          return (
            (s.elements[0] *= c),
            (s.elements[1] *= c),
            (s.elements[2] *= c),
            (s.elements[4] *= u),
            (s.elements[5] *= u),
            (s.elements[6] *= u),
            (s.elements[8] *= h),
            (s.elements[9] *= h),
            (s.elements[10] *= h),
            e.setFromRotationMatrix(s),
            (n.x = r),
            (n.y = o),
            (n.z = l),
            this
          );
        }
        makePerspective(t, e, n, i, r, a) {
          void 0 === a &&
            console.warn(
              'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.'
            );
          const s = this.elements,
            o = (2 * r) / (e - t),
            l = (2 * r) / (n - i),
            c = (e + t) / (e - t),
            u = (n + i) / (n - i),
            h = -(a + r) / (a - r),
            d = (-2 * a * r) / (a - r);
          return (
            (s[0] = o),
            (s[4] = 0),
            (s[8] = c),
            (s[12] = 0),
            (s[1] = 0),
            (s[5] = l),
            (s[9] = u),
            (s[13] = 0),
            (s[2] = 0),
            (s[6] = 0),
            (s[10] = h),
            (s[14] = d),
            (s[3] = 0),
            (s[7] = 0),
            (s[11] = -1),
            (s[15] = 0),
            this
          );
        }
        makeOrthographic(t, e, n, i, r, a) {
          const s = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (a - r),
            u = (e + t) * o,
            h = (n + i) * l,
            d = (a + r) * c;
          return (
            (s[0] = 2 * o),
            (s[4] = 0),
            (s[8] = 0),
            (s[12] = -u),
            (s[1] = 0),
            (s[5] = 2 * l),
            (s[9] = 0),
            (s[13] = -h),
            (s[2] = 0),
            (s[6] = 0),
            (s[10] = -2 * c),
            (s[14] = -d),
            (s[3] = 0),
            (s[7] = 0),
            (s[11] = 0),
            (s[15] = 1),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            (t[e + 9] = n[9]),
            (t[e + 10] = n[10]),
            (t[e + 11] = n[11]),
            (t[e + 12] = n[12]),
            (t[e + 13] = n[13]),
            (t[e + 14] = n[14]),
            (t[e + 15] = n[15]),
            t
          );
        }
      }
      r.prototype.isMatrix4 = !0;
      const a = new i.P(),
        s = new r(),
        o = new i.P(0, 0, 0),
        l = new i.P(1, 1, 1),
        c = new i.P(),
        u = new i.P(),
        h = new i.P();
    },
    163: (t, e, n) => {
      'use strict';
      n.d(e, { _: () => r });
      var i = n(542);
      class r {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (this._x = t), (this._y = e), (this._z = n), (this._w = i);
        }
        static slerp(t, e, n, i) {
          return (
            console.warn(
              'THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.'
            ),
            n.slerpQuaternions(t, e, i)
          );
        }
        static slerpFlat(t, e, n, i, r, a, s) {
          let o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            u = n[i + 3];
          const h = r[a + 0],
            d = r[a + 1],
            p = r[a + 2],
            f = r[a + 3];
          if (0 === s)
            return (
              (t[e + 0] = o),
              (t[e + 1] = l),
              (t[e + 2] = c),
              void (t[e + 3] = u)
            );
          if (1 === s)
            return (
              (t[e + 0] = h),
              (t[e + 1] = d),
              (t[e + 2] = p),
              void (t[e + 3] = f)
            );
          if (u !== f || o !== h || l !== d || c !== p) {
            let t = 1 - s;
            const e = o * h + l * d + c * p + u * f,
              n = e >= 0 ? 1 : -1,
              i = 1 - e * e;
            if (i > Number.EPSILON) {
              const r = Math.sqrt(i),
                a = Math.atan2(r, e * n);
              (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
            }
            const r = s * n;
            if (
              ((o = o * t + h * r),
              (l = l * t + d * r),
              (c = c * t + p * r),
              (u = u * t + f * r),
              t === 1 - s)
            ) {
              const t = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
              (o *= t), (l *= t), (c *= t), (u *= t);
            }
          }
          (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = u);
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, a) {
          const s = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            u = r[a],
            h = r[a + 1],
            d = r[a + 2],
            p = r[a + 3];
          return (
            (t[e] = s * p + c * u + o * d - l * h),
            (t[e + 1] = o * p + c * h + l * u - s * d),
            (t[e + 2] = l * p + c * d + s * h - o * u),
            (t[e + 3] = c * p - s * u - o * h - l * d),
            t
          );
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get w() {
          return this._w;
        }
        set w(t) {
          (this._w = t), this._onChangeCallback();
        }
        set(t, e, n, i) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._w = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
          return (
            (this._x = t.x),
            (this._y = t.y),
            (this._z = t.z),
            (this._w = t.w),
            this._onChangeCallback(),
            this
          );
        }
        setFromEuler(t, e) {
          if (!t || !t.isEuler)
            throw new Error(
              'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.'
            );
          const n = t._x,
            i = t._y,
            r = t._z,
            a = t._order,
            s = Math.cos,
            o = Math.sin,
            l = s(n / 2),
            c = s(i / 2),
            u = s(r / 2),
            h = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);
          switch (a) {
            case 'XYZ':
              (this._x = h * c * u + l * d * p),
                (this._y = l * d * u - h * c * p),
                (this._z = l * c * p + h * d * u),
                (this._w = l * c * u - h * d * p);
              break;
            case 'YXZ':
              (this._x = h * c * u + l * d * p),
                (this._y = l * d * u - h * c * p),
                (this._z = l * c * p - h * d * u),
                (this._w = l * c * u + h * d * p);
              break;
            case 'ZXY':
              (this._x = h * c * u - l * d * p),
                (this._y = l * d * u + h * c * p),
                (this._z = l * c * p + h * d * u),
                (this._w = l * c * u - h * d * p);
              break;
            case 'ZYX':
              (this._x = h * c * u - l * d * p),
                (this._y = l * d * u + h * c * p),
                (this._z = l * c * p - h * d * u),
                (this._w = l * c * u + h * d * p);
              break;
            case 'YZX':
              (this._x = h * c * u + l * d * p),
                (this._y = l * d * u + h * c * p),
                (this._z = l * c * p - h * d * u),
                (this._w = l * c * u - h * d * p);
              break;
            case 'XZY':
              (this._x = h * c * u - l * d * p),
                (this._y = l * d * u - h * c * p),
                (this._z = l * c * p + h * d * u),
                (this._w = l * c * u + h * d * p);
              break;
            default:
              console.warn(
                'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' +
                  a
              );
          }
          return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
          const n = e / 2,
            i = Math.sin(n);
          return (
            (this._x = t.x * i),
            (this._y = t.y * i),
            (this._z = t.z * i),
            (this._w = Math.cos(n)),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t) {
          const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            a = e[1],
            s = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            u = e[10],
            h = n + s + u;
          if (h > 0) {
            const t = 0.5 / Math.sqrt(h + 1);
            (this._w = 0.25 / t),
              (this._x = (c - o) * t),
              (this._y = (r - l) * t),
              (this._z = (a - i) * t);
          } else if (n > s && n > u) {
            const t = 2 * Math.sqrt(1 + n - s - u);
            (this._w = (c - o) / t),
              (this._x = 0.25 * t),
              (this._y = (i + a) / t),
              (this._z = (r + l) / t);
          } else if (s > u) {
            const t = 2 * Math.sqrt(1 + s - n - u);
            (this._w = (r - l) / t),
              (this._x = (i + a) / t),
              (this._y = 0.25 * t),
              (this._z = (o + c) / t);
          } else {
            const t = 2 * Math.sqrt(1 + u - n - s);
            (this._w = (a - i) / t),
              (this._x = (r + l) / t),
              (this._y = (o + c) / t),
              (this._z = 0.25 * t);
          }
          return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return (
            n < Number.EPSILON
              ? ((n = 0),
                Math.abs(t.x) > Math.abs(t.z)
                  ? ((this._x = -t.y),
                    (this._y = t.x),
                    (this._z = 0),
                    (this._w = n))
                  : ((this._x = 0),
                    (this._y = -t.z),
                    (this._z = t.y),
                    (this._w = n)))
              : ((this._x = t.y * e.z - t.z * e.y),
                (this._y = t.z * e.x - t.x * e.z),
                (this._z = t.x * e.y - t.y * e.x),
                (this._w = n)),
            this.normalize()
          );
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs(i.uZ(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (0 === n) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this;
        }
        identity() {
          return this.set(0, 0, 0, 1);
        }
        invert() {
          return this.conjugate();
        }
        conjugate() {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this._onChangeCallback(),
            this
          );
        }
        dot(t) {
          return (
            this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
          );
        }
        lengthSq() {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        }
        length() {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        }
        normalize() {
          let t = this.length();
          return (
            0 === t
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((t = 1 / t),
                (this._x = this._x * t),
                (this._y = this._y * t),
                (this._z = this._z * t),
                (this._w = this._w * t)),
            this._onChangeCallback(),
            this
          );
        }
        multiply(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'
              ),
              this.multiplyQuaternions(t, e))
            : this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
          return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
          const n = t._x,
            i = t._y,
            r = t._z,
            a = t._w,
            s = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
          return (
            (this._x = n * c + a * s + i * l - r * o),
            (this._y = i * c + a * o + r * s - n * l),
            (this._z = r * c + a * l + n * o - i * s),
            (this._w = a * c - n * s - i * o - r * l),
            this._onChangeCallback(),
            this
          );
        }
        slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const n = this._x,
            i = this._y,
            r = this._z,
            a = this._w;
          let s = a * t._w + n * t._x + i * t._y + r * t._z;
          if (
            (s < 0
              ? ((this._w = -t._w),
                (this._x = -t._x),
                (this._y = -t._y),
                (this._z = -t._z),
                (s = -s))
              : this.copy(t),
            s >= 1)
          )
            return (
              (this._w = a), (this._x = n), (this._y = i), (this._z = r), this
            );
          const o = 1 - s * s;
          if (o <= Number.EPSILON) {
            const t = 1 - e;
            return (
              (this._w = t * a + e * this._w),
              (this._x = t * n + e * this._x),
              (this._y = t * i + e * this._y),
              (this._z = t * r + e * this._z),
              this.normalize(),
              this._onChangeCallback(),
              this
            );
          }
          const l = Math.sqrt(o),
            c = Math.atan2(l, s),
            u = Math.sin((1 - e) * c) / l,
            h = Math.sin(e * c) / l;
          return (
            (this._w = a * u + this._w * h),
            (this._x = n * u + this._x * h),
            (this._y = i * u + this._y * h),
            (this._z = r * u + this._z * h),
            this._onChangeCallback(),
            this
          );
        }
        slerpQuaternions(t, e, n) {
          return this.copy(t).slerp(e, n);
        }
        random() {
          const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
          return this.set(
            e * Math.cos(i),
            n * Math.sin(r),
            n * Math.cos(r),
            e * Math.sin(i)
          );
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._w === this._w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this._x = t[e]),
            (this._y = t[e + 1]),
            (this._z = t[e + 2]),
            (this._w = t[e + 3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._w),
            t
          );
        }
        fromBufferAttribute(t, e) {
          return (
            (this._x = t.getX(e)),
            (this._y = t.getY(e)),
            (this._z = t.getZ(e)),
            (this._w = t.getW(e)),
            this
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
      }
      r.prototype.isQuaternion = !0;
    },
    771: (t, e, n) => {
      'use strict';
      n.d(e, { a: () => c });
      var i = n(232),
        r = n(532);
      const a = new i.Z(),
        s = new r.P(),
        o = new r.P(),
        l = new r.P();
      class c {
        constructor(t = new r.P(), e = -1) {
          (this.center = t), (this.radius = e);
        }
        set(t, e) {
          return this.center.copy(t), (this.radius = e), this;
        }
        setFromPoints(t, e) {
          const n = this.center;
          void 0 !== e ? n.copy(e) : a.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let e = 0, r = t.length; e < r; e++)
            i = Math.max(i, n.distanceToSquared(t[e]));
          return (this.radius = Math.sqrt(i)), this;
        }
        copy(t) {
          return this.center.copy(t.center), (this.radius = t.radius), this;
        }
        isEmpty() {
          return this.radius < 0;
        }
        makeEmpty() {
          return this.center.set(0, 0, 0), (this.radius = -1), this;
        }
        containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
          return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
          const n = this.center.distanceToSquared(t);
          return (
            e.copy(t),
            n > this.radius * this.radius &&
              (e.sub(this.center).normalize(),
              e.multiplyScalar(this.radius).add(this.center)),
            e
          );
        }
        getBoundingBox(t) {
          return this.isEmpty()
            ? (t.makeEmpty(), t)
            : (t.set(this.center, this.center),
              t.expandByScalar(this.radius),
              t);
        }
        applyMatrix4(t) {
          return (
            this.center.applyMatrix4(t),
            (this.radius = this.radius * t.getMaxScaleOnAxis()),
            this
          );
        }
        translate(t) {
          return this.center.add(t), this;
        }
        expandByPoint(t) {
          l.subVectors(t, this.center);
          const e = l.lengthSq();
          if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
              n = 0.5 * (t - this.radius);
            this.center.add(l.multiplyScalar(n / t)), (this.radius += n);
          }
          return this;
        }
        union(t) {
          return (
            !0 === this.center.equals(t.center)
              ? o.set(0, 0, 1).multiplyScalar(t.radius)
              : o
                  .subVectors(t.center, this.center)
                  .normalize()
                  .multiplyScalar(t.radius),
            this.expandByPoint(s.copy(t.center).add(o)),
            this.expandByPoint(s.copy(t.center).sub(o)),
            this
          );
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
    },
    120: (t, e, n) => {
      'use strict';
      n.d(e, { F: () => i });
      class i {
        constructor(t = 0, e = 0) {
          (this.x = t), (this.y = e);
        }
        get width() {
          return this.x;
        }
        set width(t) {
          this.x = t;
        }
        get height() {
          return this.y;
        }
        set height(t) {
          this.y = t;
        }
        set(t, e) {
          return (this.x = t), (this.y = e), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error('index is out of range: ' + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error('index is out of range: ' + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), this;
        }
        add(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
              ),
              this.addVectors(t, e))
            : ((this.x += t.x), (this.y += t.y), this);
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), this;
        }
        addVectors(t, e) {
          return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
        }
        addScaledVector(t, e) {
          return (this.x += t.x * e), (this.y += t.y * e), this;
        }
        sub(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x), (this.y -= t.y), this);
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), this;
        }
        subVectors(t, e) {
          return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
        }
        multiply(t) {
          return (this.x *= t.x), (this.y *= t.y), this;
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), this;
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = t.elements;
          return (
            (this.x = i[0] * e + i[3] * n + i[6]),
            (this.y = i[1] * e + i[4] * n + i[7]),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            this
          );
        }
        negate() {
          return (this.x = -this.x), (this.y = -this.y), this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y;
        }
        cross(t) {
          return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y;
          return e * e + n * n;
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            this
          );
        }
        equals(t) {
          return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
          return (this.x = t[e]), (this.y = t[e + 1]), this;
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), t;
        }
        fromBufferAttribute(t, e, n) {
          return (
            void 0 !== n &&
              console.warn(
                'THREE.Vector2: offset has been removed from .fromBufferAttribute().'
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            this
          );
        }
        rotateAround(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            a = this.y - t.y;
          return (
            (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
          );
        }
        random() {
          return (this.x = Math.random()), (this.y = Math.random()), this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y;
        }
      }
      i.prototype.isVector2 = !0;
    },
    532: (t, e, n) => {
      'use strict';
      n.d(e, { P: () => a });
      var i = n(542),
        r = n(163);
      class a {
        constructor(t = 0, e = 0, n = 0) {
          (this.x = t), (this.y = e), (this.z = n);
        }
        set(t, e, n) {
          return (
            void 0 === n && (n = this.z),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            this
          );
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error('index is out of range: ' + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error('index is out of range: ' + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        }
        add(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
              ),
              this.addVectors(t, e))
            : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), (this.z += t), this;
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
          );
        }
        sub(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), (this.z -= t), this;
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            this
          );
        }
        multiply(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'
              ),
              this.multiplyVectors(t, e))
            : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }
        multiplyVectors(t, e) {
          return (
            (this.x = t.x * e.x),
            (this.y = t.y * e.y),
            (this.z = t.z * e.z),
            this
          );
        }
        applyEuler(t) {
          return (
            (t && t.isEuler) ||
              console.error(
                'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'
              ),
            this.applyQuaternion(o.setFromEuler(t))
          );
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(o.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[3] * n + r[6] * i),
            (this.y = r[1] * e + r[4] * n + r[7] * i),
            (this.z = r[2] * e + r[5] * n + r[8] * i),
            this
          );
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
          return (
            (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
            (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
            (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
            this
          );
        }
        applyQuaternion(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            a = t.y,
            s = t.z,
            o = t.w,
            l = o * e + a * i - s * n,
            c = o * n + s * e - r * i,
            u = o * i + r * n - a * e,
            h = -r * e - a * n - s * i;
          return (
            (this.x = l * o + h * -r + c * -s - u * -a),
            (this.y = c * o + h * -a + u * -r - l * -s),
            (this.z = u * o + h * -s + l * -a - c * -r),
            this
          );
        }
        project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
            t.projectionMatrix
          );
        }
        unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
            t.matrixWorld
          );
        }
        transformDirection(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[4] * n + r[8] * i),
            (this.y = r[1] * e + r[5] * n + r[9] * i),
            (this.z = r[2] * e + r[6] * n + r[10] * i),
            this.normalize()
          );
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            this
          );
        }
        cross(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'
              ),
              this.crossVectors(t, e))
            : this.crossVectors(this, t);
        }
        crossVectors(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            a = e.x,
            s = e.y,
            o = e.z;
          return (
            (this.x = i * o - r * s),
            (this.y = r * a - n * o),
            (this.z = n * s - i * a),
            this
          );
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
          return s.copy(this).projectOnVector(t), this.sub(s);
        }
        reflect(t) {
          return this.sub(s.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(i.uZ(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
          return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
          return (
            Math.abs(this.x - t.x) +
            Math.abs(this.y - t.y) +
            Math.abs(this.z - t.z)
          );
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return (
            (this.x = i * Math.sin(n)),
            (this.y = Math.cos(e) * t),
            (this.z = i * Math.cos(n)),
            this
          );
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
          return (
            (this.x = t * Math.sin(e)),
            (this.y = n),
            (this.z = t * Math.cos(e)),
            this
          );
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
          return (this.x = e), (this.y = n), (this.z = i), this;
        }
        setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, 3 * e);
        }
        setFromEuler(t) {
          return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
        }
        fromBufferAttribute(t, e, n) {
          return (
            void 0 !== n &&
              console.warn(
                'THREE.Vector3: offset has been removed from .fromBufferAttribute().'
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            this
          );
        }
        randomDirection() {
          const t = 2 * (Math.random() - 0.5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2);
          return (
            (this.x = n * Math.cos(e)),
            (this.y = n * Math.sin(e)),
            (this.z = t),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z;
        }
      }
      a.prototype.isVector3 = !0;
      const s = new a(),
        o = new r._();
    },
    980: (t, e, n) => {
      'use strict';
      n.d(e, { L: () => i });
      class i {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (this.x = t), (this.y = e), (this.z = n), (this.w = i);
        }
        get width() {
          return this.z;
        }
        set width(t) {
          this.z = t;
        }
        get height() {
          return this.w;
        }
        set height(t) {
          this.w = t;
        }
        set(t, e, n, i) {
          return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setW(t) {
          return (this.w = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error('index is out of range: ' + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error('index is out of range: ' + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
          return (
            (this.x = t.x),
            (this.y = t.y),
            (this.z = t.z),
            (this.w = void 0 !== t.w ? t.w : 1),
            this
          );
        }
        add(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
              ),
              this.addVectors(t, e))
            : ((this.x += t.x),
              (this.y += t.y),
              (this.z += t.z),
              (this.w += t.w),
              this);
        }
        addScalar(t) {
          return (
            (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
          );
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            (this.w = t.w + e.w),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e),
            (this.y += t.y * e),
            (this.z += t.z * e),
            (this.w += t.w * e),
            this
          );
        }
        sub(t, e) {
          return void 0 !== e
            ? (console.warn(
                'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x),
              (this.y -= t.y),
              (this.z -= t.z),
              (this.w -= t.w),
              this);
        }
        subScalar(t) {
          return (
            (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
          );
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            (this.w = t.w - e.w),
            this
          );
        }
        multiply(t) {
          return (
            (this.x *= t.x),
            (this.y *= t.y),
            (this.z *= t.z),
            (this.w *= t.w),
            this
          );
        }
        multiplyScalar(t) {
          return (
            (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
          );
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            a = t.elements;
          return (
            (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
            (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
            (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
            (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
            this
          );
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return (
            e < 1e-4
              ? ((this.x = 1), (this.y = 0), (this.z = 0))
              : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
            this
          );
        }
        setAxisAngleFromRotationMatrix(t) {
          let e, n, i, r;
          const a = 0.01,
            s = 0.1,
            o = t.elements,
            l = o[0],
            c = o[4],
            u = o[8],
            h = o[1],
            d = o[5],
            p = o[9],
            f = o[2],
            m = o[6],
            g = o[10];
          if (
            Math.abs(c - h) < a &&
            Math.abs(u - f) < a &&
            Math.abs(p - m) < a
          ) {
            if (
              Math.abs(c + h) < s &&
              Math.abs(u + f) < s &&
              Math.abs(p + m) < s &&
              Math.abs(l + d + g - 3) < s
            )
              return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
              o = (d + 1) / 2,
              _ = (g + 1) / 2,
              v = (c + h) / 4,
              x = (u + f) / 4,
              y = (p + m) / 4;
            return (
              t > o && t > _
                ? t < a
                  ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
                  : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
                : o > _
                ? o < a
                  ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                  : ((i = Math.sqrt(o)), (n = v / i), (r = y / i))
                : _ < a
                ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                : ((r = Math.sqrt(_)), (n = x / r), (i = y / r)),
              this.set(n, i, r, e),
              this
            );
          }
          let _ = Math.sqrt(
            (m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c)
          );
          return (
            Math.abs(_) < 0.001 && (_ = 1),
            (this.x = (m - p) / _),
            (this.y = (u - f) / _),
            (this.z = (h - c) / _),
            (this.w = Math.acos((l + d + g - 1) / 2)),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            (this.w = Math.min(this.w, t.w)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            (this.w = Math.max(this.w, t.w)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            (this.w = Math.max(t.w, Math.min(e.w, this.w))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            (this.w = Math.max(t, Math.min(e, this.w))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            (this.w = Math.floor(this.w)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            (this.w = Math.ceil(this.w)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            (this.w = Math.round(this.w)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x),
            (this.y = -this.y),
            (this.z = -this.z),
            (this.w = -this.w),
            this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
          return (
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
          );
        }
        length() {
          return Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
        }
        manhattanLength() {
          return (
            Math.abs(this.x) +
            Math.abs(this.y) +
            Math.abs(this.z) +
            Math.abs(this.w)
          );
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            (this.w += (t.w - this.w) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            (this.w = t.w + (e.w - t.w) * n),
            this
          );
        }
        equals(t) {
          return (
            t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            (this.w = t[e + 3]),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            (t[e + 3] = this.w),
            t
          );
        }
        fromBufferAttribute(t, e, n) {
          return (
            void 0 !== n &&
              console.warn(
                'THREE.Vector4: offset has been removed from .fromBufferAttribute().'
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            (this.w = t.getW(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            (this.w = Math.random()),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w;
        }
      }
      i.prototype.isVector4 = !0;
    },
    123: (t, e, n) => {
      'use strict';
      n.d(e, { K: () => q });
      var i = n(532),
        r = n(120),
        a = n(771);
      const s = new i.P(),
        o = new i.P(),
        l = new i.P(),
        c = new i.P(),
        u = new i.P(),
        h = new i.P(),
        d = new i.P();
      class p {
        constructor(t = new i.P(), e = new i.P(0, 0, -1)) {
          (this.origin = t), (this.direction = e);
        }
        set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
          return (
            this.origin.copy(t.origin), this.direction.copy(t.direction), this
          );
        }
        at(t, e) {
          return e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
          return this.origin.copy(this.at(t, s)), this;
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0
            ? e.copy(this.origin)
            : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
          const e = s.subVectors(t, this.origin).dot(this.direction);
          return e < 0
            ? this.origin.distanceToSquared(t)
            : (s.copy(this.direction).multiplyScalar(e).add(this.origin),
              s.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
          o.copy(t).add(e).multiplyScalar(0.5),
            l.copy(e).sub(t).normalize(),
            c.copy(this.origin).sub(o);
          const r = 0.5 * t.distanceTo(e),
            a = -this.direction.dot(l),
            s = c.dot(this.direction),
            u = -c.dot(l),
            h = c.lengthSq(),
            d = Math.abs(1 - a * a);
          let p, f, m, g;
          if (d > 0)
            if (((p = a * u - s), (f = a * s - u), (g = r * d), p >= 0))
              if (f >= -g)
                if (f <= g) {
                  const t = 1 / d;
                  (p *= t),
                    (f *= t),
                    (m = p * (p + a * f + 2 * s) + f * (a * p + f + 2 * u) + h);
                } else
                  (f = r),
                    (p = Math.max(0, -(a * f + s))),
                    (m = -p * p + f * (f + 2 * u) + h);
              else
                (f = -r),
                  (p = Math.max(0, -(a * f + s))),
                  (m = -p * p + f * (f + 2 * u) + h);
            else
              f <= -g
                ? ((p = Math.max(0, -(-a * r + s))),
                  (f = p > 0 ? -r : Math.min(Math.max(-r, -u), r)),
                  (m = -p * p + f * (f + 2 * u) + h))
                : f <= g
                ? ((p = 0),
                  (f = Math.min(Math.max(-r, -u), r)),
                  (m = f * (f + 2 * u) + h))
                : ((p = Math.max(0, -(a * r + s))),
                  (f = p > 0 ? r : Math.min(Math.max(-r, -u), r)),
                  (m = -p * p + f * (f + 2 * u) + h));
          else
            (f = a > 0 ? -r : r),
              (p = Math.max(0, -(a * f + s))),
              (m = -p * p + f * (f + 2 * u) + h);
          return (
            n && n.copy(this.direction).multiplyScalar(p).add(this.origin),
            i && i.copy(l).multiplyScalar(f).add(o),
            m
          );
        }
        intersectSphere(t, e) {
          s.subVectors(t.center, this.origin);
          const n = s.dot(this.direction),
            i = s.dot(s) - n * n,
            r = t.radius * t.radius;
          if (i > r) return null;
          const a = Math.sqrt(r - i),
            o = n - a,
            l = n + a;
          return o < 0 && l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
          let n, i, r, a, s, o;
          const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            u = 1 / this.direction.z,
            h = this.origin;
          return (
            l >= 0
              ? ((n = (t.min.x - h.x) * l), (i = (t.max.x - h.x) * l))
              : ((n = (t.max.x - h.x) * l), (i = (t.min.x - h.x) * l)),
            c >= 0
              ? ((r = (t.min.y - h.y) * c), (a = (t.max.y - h.y) * c))
              : ((r = (t.max.y - h.y) * c), (a = (t.min.y - h.y) * c)),
            n > a || r > i
              ? null
              : ((r > n || n != n) && (n = r),
                (a < i || i != i) && (i = a),
                u >= 0
                  ? ((s = (t.min.z - h.z) * u), (o = (t.max.z - h.z) * u))
                  : ((s = (t.max.z - h.z) * u), (o = (t.min.z - h.z) * u)),
                n > o || s > i
                  ? null
                  : ((s > n || n != n) && (n = s),
                    (o < i || i != i) && (i = o),
                    i < 0 ? null : this.at(n >= 0 ? n : i, e)))
          );
        }
        intersectsBox(t) {
          return null !== this.intersectBox(t, s);
        }
        intersectTriangle(t, e, n, i, r) {
          u.subVectors(e, t), h.subVectors(n, t), d.crossVectors(u, h);
          let a,
            s = this.direction.dot(d);
          if (s > 0) {
            if (i) return null;
            a = 1;
          } else {
            if (!(s < 0)) return null;
            (a = -1), (s = -s);
          }
          c.subVectors(this.origin, t);
          const o = a * this.direction.dot(h.crossVectors(c, h));
          if (o < 0) return null;
          const l = a * this.direction.dot(u.cross(c));
          if (l < 0) return null;
          if (o + l > s) return null;
          const p = -a * c.dot(d);
          return p < 0 ? null : this.at(p / s, r);
        }
        applyMatrix4(t) {
          return (
            this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
          );
        }
        equals(t) {
          return (
            t.origin.equals(this.origin) && t.direction.equals(this.direction)
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      var f = n(245),
        m = n(802);
      const g = new i.P(),
        _ = new i.P(),
        v = new i.P(),
        x = new i.P(),
        y = new i.P(),
        b = new i.P(),
        M = new i.P(),
        w = new i.P(),
        S = new i.P(),
        E = new i.P();
      class T {
        constructor(t = new i.P(), e = new i.P(), n = new i.P()) {
          (this.a = t), (this.b = e), (this.c = n);
        }
        static getNormal(t, e, n, i) {
          i.subVectors(n, e), g.subVectors(t, e), i.cross(g);
          const r = i.lengthSq();
          return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
          g.subVectors(i, e), _.subVectors(n, e), v.subVectors(t, e);
          const a = g.dot(g),
            s = g.dot(_),
            o = g.dot(v),
            l = _.dot(_),
            c = _.dot(v),
            u = a * l - s * s;
          if (0 === u) return r.set(-2, -1, -1);
          const h = 1 / u,
            d = (l * o - s * c) * h,
            p = (a * c - s * o) * h;
          return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, n, i) {
          return (
            this.getBarycoord(t, e, n, i, x),
            x.x >= 0 && x.y >= 0 && x.x + x.y <= 1
          );
        }
        static getUV(t, e, n, i, r, a, s, o) {
          return (
            this.getBarycoord(t, e, n, i, x),
            o.set(0, 0),
            o.addScaledVector(r, x.x),
            o.addScaledVector(a, x.y),
            o.addScaledVector(s, x.z),
            o
          );
        }
        static isFrontFacing(t, e, n, i) {
          return g.subVectors(n, e), _.subVectors(t, e), g.cross(_).dot(i) < 0;
        }
        set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        setFromAttributeAndIndices(t, e, n, i) {
          return (
            this.a.fromBufferAttribute(t, e),
            this.b.fromBufferAttribute(t, n),
            this.c.fromBufferAttribute(t, i),
            this
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
          return (
            g.subVectors(this.c, this.b),
            _.subVectors(this.a, this.b),
            0.5 * g.cross(_).length()
          );
        }
        getMidpoint(t) {
          return t
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3);
        }
        getNormal(t) {
          return T.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
          return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
          return T.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, r) {
          return T.getUV(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
          return T.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
          return T.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
          return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
          const n = this.a,
            i = this.b,
            r = this.c;
          let a, s;
          y.subVectors(i, n), b.subVectors(r, n), w.subVectors(t, n);
          const o = y.dot(w),
            l = b.dot(w);
          if (o <= 0 && l <= 0) return e.copy(n);
          S.subVectors(t, i);
          const c = y.dot(S),
            u = b.dot(S);
          if (c >= 0 && u <= c) return e.copy(i);
          const h = o * u - c * l;
          if (h <= 0 && o >= 0 && c <= 0)
            return (a = o / (o - c)), e.copy(n).addScaledVector(y, a);
          E.subVectors(t, r);
          const d = y.dot(E),
            p = b.dot(E);
          if (p >= 0 && d <= p) return e.copy(r);
          const f = d * l - o * p;
          if (f <= 0 && l >= 0 && p <= 0)
            return (s = l / (l - p)), e.copy(n).addScaledVector(b, s);
          const m = c * p - d * u;
          if (m <= 0 && u - c >= 0 && d - p >= 0)
            return (
              M.subVectors(r, i),
              (s = (u - c) / (u - c + (d - p))),
              e.copy(i).addScaledVector(M, s)
            );
          const g = 1 / (m + f + h);
          return (
            (a = f * g),
            (s = h * g),
            e.copy(n).addScaledVector(y, a).addScaledVector(b, s)
          );
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
      }
      var A = n(6),
        R = n(33),
        L = n(699);
      const C = new f.y(),
        P = new p(),
        D = new a.a(),
        O = new i.P(),
        N = new i.P(),
        I = new i.P(),
        U = new i.P(),
        F = new i.P(),
        z = new i.P(),
        B = new i.P(),
        k = new i.P(),
        G = new i.P(),
        H = new r.F(),
        V = new r.F(),
        W = new r.F(),
        X = new i.P(),
        j = new i.P();
      class q extends m.T {
        constructor(t = new L.u(), e = new R.v()) {
          super(),
            (this.type = 'Mesh'),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t) {
          return (
            super.copy(t),
            void 0 !== t.morphTargetInfluences &&
              (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary &&
              (this.morphTargetDictionary = Object.assign(
                {},
                t.morphTargetDictionary
              )),
            (this.material = t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        updateMorphTargets() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
            const e = t.morphAttributes,
              n = Object.keys(e);
            if (n.length > 0) {
              const t = e[n[0]];
              if (void 0 !== t) {
                (this.morphTargetInfluences = []),
                  (this.morphTargetDictionary = {});
                for (let e = 0, n = t.length; e < n; e++) {
                  const n = t[e].name || String(e);
                  this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[n] = e);
                }
              }
            }
          } else {
            const e = t.morphTargets;
            void 0 !== e &&
              e.length > 0 &&
              console.error(
                'THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
              );
          }
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
          if (void 0 === i) return;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            D.copy(n.boundingSphere),
            D.applyMatrix4(r),
            !1 === t.ray.intersectsSphere(D))
          )
            return;
          if (
            (C.copy(r).invert(),
            P.copy(t.ray).applyMatrix4(C),
            null !== n.boundingBox && !1 === P.intersectsBox(n.boundingBox))
          )
            return;
          let a;
          if (n.isBufferGeometry) {
            const r = n.index,
              s = n.attributes.position,
              o = n.morphAttributes.position,
              l = n.morphTargetsRelative,
              c = n.attributes.uv,
              u = n.attributes.uv2,
              h = n.groups,
              d = n.drawRange;
            if (null !== r)
              if (Array.isArray(i))
                for (let n = 0, p = h.length; n < p; n++) {
                  const p = h[n],
                    f = i[p.materialIndex];
                  for (
                    let n = Math.max(p.start, d.start),
                      i = Math.min(
                        r.count,
                        Math.min(p.start + p.count, d.start + d.count)
                      );
                    n < i;
                    n += 3
                  ) {
                    const i = r.getX(n),
                      h = r.getX(n + 1),
                      d = r.getX(n + 2);
                    (a = Y(this, f, t, P, s, o, l, c, u, i, h, d)),
                      a &&
                        ((a.faceIndex = Math.floor(n / 3)),
                        (a.face.materialIndex = p.materialIndex),
                        e.push(a));
                  }
                }
              else
                for (
                  let n = Math.max(0, d.start),
                    h = Math.min(r.count, d.start + d.count);
                  n < h;
                  n += 3
                ) {
                  const h = r.getX(n),
                    d = r.getX(n + 1),
                    p = r.getX(n + 2);
                  (a = Y(this, i, t, P, s, o, l, c, u, h, d, p)),
                    a && ((a.faceIndex = Math.floor(n / 3)), e.push(a));
                }
            else if (void 0 !== s)
              if (Array.isArray(i))
                for (let n = 0, r = h.length; n < r; n++) {
                  const r = h[n],
                    p = i[r.materialIndex];
                  for (
                    let n = Math.max(r.start, d.start),
                      i = Math.min(
                        s.count,
                        Math.min(r.start + r.count, d.start + d.count)
                      );
                    n < i;
                    n += 3
                  )
                    (a = Y(this, p, t, P, s, o, l, c, u, n, n + 1, n + 2)),
                      a &&
                        ((a.faceIndex = Math.floor(n / 3)),
                        (a.face.materialIndex = r.materialIndex),
                        e.push(a));
                }
              else
                for (
                  let n = Math.max(0, d.start),
                    r = Math.min(s.count, d.start + d.count);
                  n < r;
                  n += 3
                )
                  (a = Y(this, i, t, P, s, o, l, c, u, n, n + 1, n + 2)),
                    a && ((a.faceIndex = Math.floor(n / 3)), e.push(a));
          } else
            n.isGeometry &&
              console.error(
                'THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
              );
        }
      }
      function Y(t, e, n, a, s, o, l, c, u, h, d, p) {
        O.fromBufferAttribute(s, h),
          N.fromBufferAttribute(s, d),
          I.fromBufferAttribute(s, p);
        const f = t.morphTargetInfluences;
        if (o && f) {
          B.set(0, 0, 0), k.set(0, 0, 0), G.set(0, 0, 0);
          for (let t = 0, e = o.length; t < e; t++) {
            const e = f[t],
              n = o[t];
            0 !== e &&
              (U.fromBufferAttribute(n, h),
              F.fromBufferAttribute(n, d),
              z.fromBufferAttribute(n, p),
              l
                ? (B.addScaledVector(U, e),
                  k.addScaledVector(F, e),
                  G.addScaledVector(z, e))
                : (B.addScaledVector(U.sub(O), e),
                  k.addScaledVector(F.sub(N), e),
                  G.addScaledVector(z.sub(I), e)));
          }
          O.add(B), N.add(k), I.add(G);
        }
        t.isSkinnedMesh &&
          (t.boneTransform(h, O), t.boneTransform(d, N), t.boneTransform(p, I));
        const m = (function (t, e, n, i, r, a, s, o) {
          let l;
          if (
            ((l =
              e.side === A._L
                ? i.intersectTriangle(s, a, r, !0, o)
                : i.intersectTriangle(r, a, s, e.side !== A.eh, o)),
            null === l)
          )
            return null;
          j.copy(o), j.applyMatrix4(t.matrixWorld);
          const c = n.ray.origin.distanceTo(j);
          return c < n.near || c > n.far
            ? null
            : { distance: c, point: j.clone(), object: t };
        })(t, e, n, a, O, N, I, X);
        if (m) {
          c &&
            (H.fromBufferAttribute(c, h),
            V.fromBufferAttribute(c, d),
            W.fromBufferAttribute(c, p),
            (m.uv = T.getUV(X, O, N, I, H, V, W, new r.F()))),
            u &&
              (H.fromBufferAttribute(u, h),
              V.fromBufferAttribute(u, d),
              W.fromBufferAttribute(u, p),
              (m.uv2 = T.getUV(X, O, N, I, H, V, W, new r.F())));
          const t = { a: h, b: d, c: p, normal: new i.P(), materialIndex: 0 };
          T.getNormal(O, N, I, t.normal), (m.face = t);
        }
        return m;
      }
      q.prototype.isMesh = !0;
    },
    224: (t, e, n) => {
      'use strict';
      n.d(e, { C: () => yn });
      var i = n(6),
        r = n(542),
        a = n(532),
        s = n(771),
        o = n(894);
      const l = new a.P(),
        c = new a.P(),
        u = new o.V();
      class h {
        constructor(t = new a.P(1, 0, 0), e = 0) {
          (this.normal = t), (this.constant = e);
        }
        set(t, e) {
          return this.normal.copy(t), (this.constant = e), this;
        }
        setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), (this.constant = i), this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return (
            this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
          );
        }
        setFromCoplanarPoints(t, e, n) {
          const i = l.subVectors(n, e).cross(c.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
          return this.normal.copy(t.normal), (this.constant = t.constant), this;
        }
        normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), (this.constant *= t), this;
        }
        negate() {
          return (this.constant *= -1), this.normal.negate(), this;
        }
        distanceToPoint(t) {
          return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
          return e
            .copy(this.normal)
            .multiplyScalar(-this.distanceToPoint(t))
            .add(t);
        }
        intersectLine(t, e) {
          const n = t.delta(l),
            i = this.normal.dot(n);
          if (0 === i)
            return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
          const r = -(t.start.dot(this.normal) + this.constant) / i;
          return r < 0 || r > 1
            ? null
            : e.copy(n).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
          return (e < 0 && n > 0) || (n < 0 && e > 0);
        }
        intersectsBox(t) {
          return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
          return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
          return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
          const n = e || u.getNormalMatrix(t),
            i = this.coplanarPoint(l).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
          return (this.constant = -i.dot(r)), this;
        }
        translate(t) {
          return (this.constant -= t.dot(this.normal)), this;
        }
        equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      h.prototype.isPlane = !0;
      const d = new s.a(),
        p = new a.P();
      class f {
        constructor(
          t = new h(),
          e = new h(),
          n = new h(),
          i = new h(),
          r = new h(),
          a = new h()
        ) {
          this.planes = [t, e, n, i, r, a];
        }
        set(t, e, n, i, r, a) {
          const s = this.planes;
          return (
            s[0].copy(t),
            s[1].copy(e),
            s[2].copy(n),
            s[3].copy(i),
            s[4].copy(r),
            s[5].copy(a),
            this
          );
        }
        copy(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
          return this;
        }
        setFromProjectionMatrix(t) {
          const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            a = n[2],
            s = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            u = n[7],
            h = n[8],
            d = n[9],
            p = n[10],
            f = n[11],
            m = n[12],
            g = n[13],
            _ = n[14],
            v = n[15];
          return (
            e[0].setComponents(s - i, u - o, f - h, v - m).normalize(),
            e[1].setComponents(s + i, u + o, f + h, v + m).normalize(),
            e[2].setComponents(s + r, u + l, f + d, v + g).normalize(),
            e[3].setComponents(s - r, u - l, f - d, v - g).normalize(),
            e[4].setComponents(s - a, u - c, f - p, v - _).normalize(),
            e[5].setComponents(s + a, u + c, f + p, v + _).normalize(),
            this
          );
        }
        intersectsObject(t) {
          const e = t.geometry;
          return (
            null === e.boundingSphere && e.computeBoundingSphere(),
            d.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(d)
          );
        }
        intersectsSprite(t) {
          return (
            d.center.set(0, 0, 0),
            (d.radius = 0.7071067811865476),
            d.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(d)
          );
        }
        intersectsSphere(t) {
          const e = this.planes,
            n = t.center,
            i = -t.radius;
          for (let t = 0; t < 6; t++)
            if (e[t].distanceToPoint(n) < i) return !1;
          return !0;
        }
        intersectsBox(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (
              ((p.x = i.normal.x > 0 ? t.max.x : t.min.x),
              (p.y = i.normal.y > 0 ? t.max.y : t.min.y),
              (p.z = i.normal.z > 0 ? t.max.z : t.min.z),
              i.distanceToPoint(p) < 0)
            )
              return !1;
          }
          return !0;
        }
        containsPoint(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
          return !0;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      var m = n(245),
        g = n(120),
        _ = n(980);
      function v() {
        let t = null,
          e = !1,
          n = null,
          i = null;
        function r(e, a) {
          n(e, a), (i = t.requestAnimationFrame(r));
        }
        return {
          start: function () {
            !0 !== e &&
              null !== n &&
              ((i = t.requestAnimationFrame(r)), (e = !0));
          },
          stop: function () {
            t.cancelAnimationFrame(i), (e = !1);
          },
          setAnimationLoop: function (t) {
            n = t;
          },
          setContext: function (e) {
            t = e;
          },
        };
      }
      function x(t, e) {
        const n = e.isWebGL2,
          i = new WeakMap();
        return {
          get: function (t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
          },
          remove: function (e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e));
          },
          update: function (e, r) {
            if (e.isGLBufferAttribute) {
              const t = i.get(e);
              return void (
                (!t || t.version < e.version) &&
                i.set(e, {
                  buffer: e.buffer,
                  type: e.type,
                  bytesPerElement: e.elementSize,
                  version: e.version,
                })
              );
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const a = i.get(e);
            void 0 === a
              ? i.set(
                  e,
                  (function (e, i) {
                    const r = e.array,
                      a = e.usage,
                      s = t.createBuffer();
                    let o;
                    if (
                      (t.bindBuffer(i, s),
                      t.bufferData(i, r, a),
                      e.onUploadCallback(),
                      r instanceof Float32Array)
                    )
                      o = t.FLOAT;
                    else if (r instanceof Uint16Array)
                      if (e.isFloat16BufferAttribute) {
                        if (!n)
                          throw new Error(
                            'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.'
                          );
                        o = t.HALF_FLOAT;
                      } else o = t.UNSIGNED_SHORT;
                    else if (r instanceof Int16Array) o = t.SHORT;
                    else if (r instanceof Uint32Array) o = t.UNSIGNED_INT;
                    else if (r instanceof Int32Array) o = t.INT;
                    else if (r instanceof Int8Array) o = t.BYTE;
                    else if (r instanceof Uint8Array) o = t.UNSIGNED_BYTE;
                    else {
                      if (!(r instanceof Uint8ClampedArray))
                        throw new Error(
                          'THREE.WebGLAttributes: Unsupported buffer data format: ' +
                            r
                        );
                      o = t.UNSIGNED_BYTE;
                    }
                    return {
                      buffer: s,
                      type: o,
                      bytesPerElement: r.BYTES_PER_ELEMENT,
                      version: e.version,
                    };
                  })(e, r)
                )
              : a.version < e.version &&
                ((function (e, i, r) {
                  const a = i.array,
                    s = i.updateRange;
                  t.bindBuffer(r, e),
                    -1 === s.count
                      ? t.bufferSubData(r, 0, a)
                      : (n
                          ? t.bufferSubData(
                              r,
                              s.offset * a.BYTES_PER_ELEMENT,
                              a,
                              s.offset,
                              s.count
                            )
                          : t.bufferSubData(
                              r,
                              s.offset * a.BYTES_PER_ELEMENT,
                              a.subarray(s.offset, s.offset + s.count)
                            ),
                        (s.count = -1));
                })(a.buffer, e, r),
                (a.version = e.version));
          },
        };
      }
      var y = n(699),
        b = n(430);
      class M extends y.u {
        constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
          super(),
            (this.type = 'BoxGeometry'),
            (this.parameters = {
              width: t,
              height: e,
              depth: n,
              widthSegments: i,
              heightSegments: r,
              depthSegments: s,
            });
          const o = this;
          (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
          const l = [],
            c = [],
            u = [],
            h = [];
          let d = 0,
            p = 0;
          function f(t, e, n, i, r, s, f, m, g, _, v) {
            const x = s / g,
              y = f / _,
              b = s / 2,
              M = f / 2,
              w = m / 2,
              S = g + 1,
              E = _ + 1;
            let T = 0,
              A = 0;
            const R = new a.P();
            for (let a = 0; a < E; a++) {
              const s = a * y - M;
              for (let o = 0; o < S; o++) {
                const l = o * x - b;
                (R[t] = l * i),
                  (R[e] = s * r),
                  (R[n] = w),
                  c.push(R.x, R.y, R.z),
                  (R[t] = 0),
                  (R[e] = 0),
                  (R[n] = m > 0 ? 1 : -1),
                  u.push(R.x, R.y, R.z),
                  h.push(o / g),
                  h.push(1 - a / _),
                  (T += 1);
              }
            }
            for (let t = 0; t < _; t++)
              for (let e = 0; e < g; e++) {
                const n = d + e + S * t,
                  i = d + e + S * (t + 1),
                  r = d + (e + 1) + S * (t + 1),
                  a = d + (e + 1) + S * t;
                l.push(n, i, a), l.push(i, r, a), (A += 6);
              }
            o.addGroup(p, A, v), (p += A), (d += T);
          }
          f('z', 'y', 'x', -1, -1, n, e, t, s, r, 0),
            f('z', 'y', 'x', 1, -1, n, e, -t, s, r, 1),
            f('x', 'z', 'y', 1, 1, t, n, e, i, s, 2),
            f('x', 'z', 'y', 1, -1, t, n, -e, i, s, 3),
            f('x', 'y', 'z', 1, -1, t, e, n, i, r, 4),
            f('x', 'y', 'z', -1, -1, t, e, -n, i, r, 5),
            this.setIndex(l),
            this.setAttribute('position', new b.a$(c, 3)),
            this.setAttribute('normal', new b.a$(u, 3)),
            this.setAttribute('uv', new b.a$(h, 2));
        }
        static fromJSON(t) {
          return new M(
            t.width,
            t.height,
            t.depth,
            t.widthSegments,
            t.heightSegments,
            t.depthSegments
          );
        }
      }
      var w = n(848),
        S = n(407),
        E = n(282),
        T = n(123);
      const A = {
        alphamap_fragment:
          '\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n',
        alphamap_pars_fragment:
          '\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n',
        alphatest_fragment:
          '\n#ifdef USE_ALPHATEST\n\n\tif ( diffuseColor.a < alphaTest ) discard;\n\n#endif\n',
        alphatest_pars_fragment:
          '\n#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif\n',
        aomap_fragment:
          '\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\n\t#endif\n\n#endif\n',
        aomap_pars_fragment:
          '\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n',
        begin_vertex: '\nvec3 transformed = vec3( position );\n',
        beginnormal_vertex:
          '\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n',
        bsdfs:
          '\n\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick \'94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH \'13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4\'s roughness\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( V * D );\n\n}\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat D_Charlie( float roughness, float dotNH ) {\n\n\tfloat alpha = pow2( roughness );\n\n\t// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\n\t// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n\n}\n\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\n\treturn sheenColor * ( D * V );\n\n}\n\n#endif\n',
        bumpmap_pars_fragment:
          '\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n',
        clipping_planes_fragment:
          '\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n',
        clipping_planes_pars_fragment:
          '\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n',
        clipping_planes_pars_vertex:
          '\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n#endif\n',
        clipping_planes_vertex:
          '\n#if NUM_CLIPPING_PLANES > 0\n\n\tvClipPosition = - mvPosition.xyz;\n\n#endif\n',
        color_fragment:
          '\n#if defined( USE_COLOR_ALPHA )\n\n\tdiffuseColor *= vColor;\n\n#elif defined( USE_COLOR )\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n',
        color_pars_fragment:
          '\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n',
        color_pars_vertex:
          '\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n',
        color_vertex:
          '\n#if defined( USE_COLOR_ALPHA )\n\n\tvColor = vec4( 1.0 );\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n\tvColor *= color;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n\tvColor.xyz *= instanceColor.xyz;\n\n#endif\n',
        common:
          '\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n\treturn fract( sin( sn ) * c );\n\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t// dir can be either a direction vector or a normal vector\n\t// upper-left 3x3 of matrix is assumed to be orthogonal\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\n// https://en.wikipedia.org/wiki/Relative_luminance\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\n\treturn dot( weights, color.rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n\treturn m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n\t// dir is assumed to be unit length\n\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\treturn vec2( u, v );\n\n}\n',
        cube_uv_reflection_fragment:
          '\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\n\t// These shader functions convert between the UV coordinates of a single face of\n\t// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n\t// sampling a textureCube (not generally normalized ).\n\n\tfloat getFace( vec3 direction ) {\n\n\t\tvec3 absDirection = abs( direction );\n\n\t\tfloat face = - 1.0;\n\n\t\tif ( absDirection.x > absDirection.z ) {\n\n\t\t\tif ( absDirection.x > absDirection.y )\n\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t} else {\n\n\t\t\tif ( absDirection.z > absDirection.y )\n\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t}\n\n\t\treturn face;\n\n\t}\n\n\t// RH coordinate system; PMREM face-indexing convention\n\tvec2 getUV( vec3 direction, float face ) {\n\n\t\tvec2 uv;\n\n\t\tif ( face == 0.0 ) {\n\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n\t\t} else if ( face == 1.0 ) {\n\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n\t\t} else if ( face == 2.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n\t\t} else if ( face == 3.0 ) {\n\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n\t\t} else if ( face == 4.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n\t\t} else {\n\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n\t\t}\n\n\t\treturn 0.5 * ( uv + 1.0 );\n\n\t}\n\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n\t\tfloat face = getFace( direction );\n\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\n\t\tfloat faceSize = exp2( mipInt );\n\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n\n\t\tif ( face > 2.0 ) {\n\n\t\t\tuv.y += faceSize;\n\n\t\t\tface -= 3.0;\n\n\t\t}\n\n\t\tuv.x += face * faceSize;\n\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\n\t\t#ifdef texture2DGradEXT\n\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering\n\n\t\t#else\n\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\n\t\t#endif\n\n\t}\n\n\t// These defines must match with PMREMGenerator\n\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\n\tfloat roughnessToMip( float roughness ) {\n\n\t\tfloat mip = 0.0;\n\n\t\tif ( roughness >= r1 ) {\n\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\n\t\t} else if ( roughness >= r4 ) {\n\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\n\t\t} else if ( roughness >= r5 ) {\n\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\n\t\t} else if ( roughness >= r6 ) {\n\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\n\t\t} else {\n\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n\t\t}\n\n\t\treturn mip;\n\n\t}\n\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\n\t\tfloat mipF = fract( mip );\n\n\t\tfloat mipInt = floor( mip );\n\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n\t\tif ( mipF == 0.0 ) {\n\n\t\t\treturn vec4( color0, 1.0 );\n\n\t\t} else {\n\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\n\t\t}\n\n\t}\n\n#endif\n',
        defaultnormal_vertex:
          '\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\t// this is in lieu of a per-instance normal-matrix\n\t// shear transforms in the instance matrix are not supported\n\n\tmat3 m = mat3( instanceMatrix );\n\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\n\ttransformedNormal = m * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n',
        displacementmap_pars_vertex:
          '\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n',
        displacementmap_vertex:
          '\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n\n#endif\n',
        emissivemap_fragment:
          '\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n',
        emissivemap_pars_fragment:
          '\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n',
        encodings_fragment:
          '\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n',
        encodings_pars_fragment:
          '\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n',
        envmap_fragment:
          '\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n',
        envmap_common_pars_fragment:
          '\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n',
        envmap_pars_fragment:
          '\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n',
        envmap_pars_vertex:
          '\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n',
        envmap_physical_pars_fragment:
          '\n#if defined( USE_ENVMAP )\n\n\t#ifdef ENVMAP_MODE_REFRACTION\n\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 reflectVec;\n\n\t\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\t\treflectVec = reflect( - viewDir, normal );\n\n\t\t\t\t// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t\t#else\n\n\t\t\t\treflectVec = refract( - viewDir, normal, refractionRatio );\n\n\t\t\t#endif\n\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n#endif\n',
        envmap_vertex:
          '\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n',
        fog_vertex:
          '\n#ifdef USE_FOG\n\n\tvFogDepth = - mvPosition.z;\n\n#endif\n',
        fog_pars_vertex:
          '\n#ifdef USE_FOG\n\n\tvarying float vFogDepth;\n\n#endif\n',
        fog_fragment:
          '\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n',
        fog_pars_fragment:
          '\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n',
        gradientmap_pars_fragment:
          '\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\n\t#else\n\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\n\t#endif\n\n}\n',
        lightmap_fragment:
          '\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tlightMapIrradiance *= PI;\n\n\t#endif\n\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n\n#endif\n',
        lightmap_pars_fragment:
          '\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n',
        lights_lambert_vertex:
          '\nvec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\n\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n#ifdef DOUBLE_SIDED\n\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n\n#endif\n\n#if NUM_POINT_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_DIR_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n',
        lights_pars_begin:
          "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\treturn irradiance;\n\n}\n\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t// page 32, equation 26: E[window1]\n\t\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\t\tif ( cutoffDistance > 0.0 ) {\n\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t\t}\n\n\t\treturn distanceFalloff;\n\n\t#else\n\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t\t}\n\n\t\treturn 1.0;\n\n\t#endif\n\n}\n\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\tif ( spotAttenuation > 0.0 ) {\n\n\t\t\tfloat lightDistance = length( lVector );\n\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t\t} else {\n\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n",
        lights_toon_fragment:
          '\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n',
        lights_toon_pars_fragment:
          '\nvarying vec3 vViewPosition;\n\nstruct ToonMaterial {\n\n\tvec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n\n#define Material_LightProbeLOD( material )\t(0)\n',
        lights_phong_fragment:
          '\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n',
        lights_phong_pars_fragment:
          '\nvarying vec3 vViewPosition;\n\nstruct BlinnPhongMaterial {\n\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n',
        lights_physical_fragment:
          '\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n\n#ifdef IOR\n\n\t#ifdef SPECULAR\n\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\n\t\t#endif\n\n\t\t#ifdef USE_SPECULARCOLORMAP\n\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\n\t\t#endif\n\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\n\t#else\n\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\n\t#endif\n\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\n\t#ifdef USE_CLEARCOATMAP\n\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\n\t#endif\n\n\tmaterial.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheenColor;\n\n\t#ifdef USE_SHEENCOLORMAP\n\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\n\t#endif\n\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\n\t#endif\n\n#endif\n',
        lights_physical_pars_fragment:
          '\nstruct PhysicalMaterial {\n\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\n};\n\n// temporary\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\n\n// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from \n// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found\n// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tfloat r2 = roughness * roughness;\n\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\n\treturn saturate( DG * RECIPROCAL_PI );\n\n}\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via \'environmentBRDF\' from "Physically Based Shading on Mobile"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\n\treturn fab;\n\n}\n\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\treturn specularColor * fab.x + specularF90 * fab.y;\n\n}\n\n// Fdez-Agüera\'s "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\n\t#endif\n\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\n\t#endif\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n',
        lights_fragment_begin:
          '\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n',
        lights_fragment_maps:
          '\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tlightMapIrradiance *= PI;\n\n\t\t#endif\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\n\t#endif\n\n#endif\n',
        lights_fragment_end:
          '\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n',
        logdepthbuf_fragment:
          '\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n',
        logdepthbuf_pars_fragment:
          '\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n',
        logdepthbuf_pars_vertex:
          '\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n',
        logdepthbuf_vertex:
          '\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n',
        map_fragment:
          '\n#ifdef USE_MAP\n\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\n\t#ifdef DECODE_VIDEO_TEXTURE\n\n\t\t// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)\n\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\n\t#endif\n\n\tdiffuseColor *= sampledDiffuseColor;\n\n#endif\n',
        map_pars_fragment:
          '\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n',
        map_particle_fragment:
          '\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n#endif\n\n#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, uv );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n',
        map_particle_pars_fragment:
          '\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tuniform mat3 uvTransform;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n',
        metalnessmap_fragment:
          '\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n',
        metalnessmap_pars_fragment:
          '\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n',
        morphcolor_vertex:
          '\n#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tvColor *= morphTargetBaseInfluence;\n\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t#if defined( USE_COLOR_ALPHA )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\n\t\t#elif defined( USE_COLOR )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]\n\n\t\t#endif\n\n\t}\n\n#endif\n',
        morphnormal_vertex:
          '\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n\t#endif\n\n#endif\n',
        morphtarget_pars_vertex:
          '\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform vec2 morphTargetsTextureSize;\n\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\n\t\t\tfloat texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );\n\t\t\tfloat y = floor( texelIndex / morphTargetsTextureSize.x );\n\t\t\tfloat x = texelIndex - y * morphTargetsTextureSize.x;\n\n\t\t\tvec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );\n\t\t\treturn texture( morphTargetsTexture, morphUV );\n\n\t\t}\n\n\t#else\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\n\t\t#else\n\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n',
        morphtarget_vertex:
          '\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n',
        normal_fragment_begin:
          '\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n\t// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )\n\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\t#ifdef USE_TANGENT\n\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\n\t\t#endif\n\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n',
        normal_fragment_maps:
          '\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( TANGENTSPACE_NORMALMAP )\n\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tnormal = normalize( vTBN * mapN );\n\n\t#else\n\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\n\t#endif\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n',
        normal_pars_fragment:
          '\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n',
        normal_pars_vertex:
          '\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n',
        normal_vertex:
          '\n#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n',
        normalmap_pars_fragment:
          '\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\n\t// Normal Mapping Without Precomputed Tangents\n\t// http://www.thetenthplanet.de/archives/1180\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 N = surf_norm; // normalized\n\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\n\t}\n\n#endif\n',
        clearcoat_normal_fragment_begin:
          '\n#ifdef USE_CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n',
        clearcoat_normal_fragment_maps:
          '\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\n\t#else\n\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\n\t#endif\n\n#endif\n',
        clearcoat_pars_fragment:
          '\n\n#ifdef USE_CLEARCOATMAP\n\n\tuniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform sampler2D clearcoatRoughnessMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n',
        output_fragment:
          '\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n\n// https://github.com/mrdoob/three.js/pull/22425\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\n',
        packing:
          '\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\n\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\n// NOTE: https://twitter.com/gonnavis/status/1377183786949959682\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n',
        premultiplied_alpha_fragment:
          '\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n',
        project_vertex:
          '\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n',
        dithering_fragment:
          '\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n',
        dithering_pars_fragment:
          '\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n',
        roughnessmap_fragment:
          '\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n',
        roughnessmap_pars_fragment:
          '\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n',
        shadowmap_pars_fragment:
          '\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n',
        shadowmap_pars_vertex:
          '\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n',
        shadowmap_vertex:
          '\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\t// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\n\t#endif\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n',
        shadowmask_pars_fragment:
          '\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLightShadow directionalLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLightShadow spotLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLightShadow pointLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n',
        skinbase_vertex:
          '\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n',
        skinning_pars_vertex:
          '\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n',
        skinning_vertex:
          '\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n',
        skinnormal_vertex:
          '\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n',
        specularmap_fragment:
          '\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n',
        specularmap_pars_fragment:
          '\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n',
        tonemapping_fragment:
          '\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n',
        tonemapping_pars_fragment:
          '\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\t// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\n\t// ODT_SAT => XYZ => D60_2_D65 => sRGB\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\n\tcolor *= toneMappingExposure / 0.6;\n\n\tcolor = ACESInputMat * color;\n\n\t// Apply RRT and ODT\n\tcolor = RRTAndODTFit( color );\n\n\tcolor = ACESOutputMat * color;\n\n\t// Clamp to [0, 1]\n\treturn saturate( color );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n',
        transmission_fragment:
          '\n#ifdef USE_TRANSMISSION\n\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\n\t#endif\n\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif\n',
        transmission_pars_fragment:
          "\n#ifdef USE_TRANSMISSION\n\n\t// Transmission code is based on glTF-Sampler-Viewer\n\t// https://github.com/KhronosGroup/glTF-Sample-Viewer\n\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tuniform sampler2D transmissionMap;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tuniform sampler2D thicknessMap;\n\n\t#endif\n\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\n\tvarying vec3 vWorldPosition;\n\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\n\t\t// Direction of refracted light.\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\n\t\t// Compute rotation-independant scaling of the model matrix.\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n\t\t// The thickness is specified in local space.\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\n\t}\n\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\n\t\t// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n\t\t// an IOR of 1.5 results in the default amount of microfacet refraction.\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\n\t}\n\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\n\t\t#ifdef texture2DLodEXT\n\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#else\n\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#endif\n\n\t}\n\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tif ( attenuationDistance == 0.0 ) {\n\n\t\t\t// Attenuation distance is +∞ (which we indicate by zero), i.e. the transmitted color is not attenuated at all.\n\t\t\treturn radiance;\n\n\t\t} else {\n\n\t\t\t// Compute light attenuation using Beer's law.\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law\n\t\t\treturn transmittance * radiance;\n\n\t\t}\n\n\t}\n\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\n\t\t// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\n\t\t// Sample framebuffer to get pixel the refracted ray hits.\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\n\t\t// Get the specular component.\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\n\t}\n#endif\n",
        uv_pars_fragment:
          '\n#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\n\tvarying vec2 vUv;\n\n#endif\n',
        uv_pars_vertex:
          '\n#ifdef USE_UV\n\n\t#ifdef UVS_VERTEX_ONLY\n\n\t\tvec2 vUv;\n\n\t#else\n\n\t\tvarying vec2 vUv;\n\n\t#endif\n\n\tuniform mat3 uvTransform;\n\n#endif\n',
        uv_vertex:
          '\n#ifdef USE_UV\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n#endif\n',
        uv2_pars_fragment:
          '\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif\n',
        uv2_pars_vertex:
          '\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n\tuniform mat3 uv2Transform;\n\n#endif\n',
        uv2_vertex:
          '\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n\n#endif\n',
        worldpos_vertex:
          '\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n',
        background_vert:
          '\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n',
        background_frag:
          '\nuniform sampler2D t2D;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tgl_FragColor = texture2D( t2D, vUv );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n',
        cube_vert:
          '\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n',
        cube_frag:
          '\n#include <envmap_common_pars_fragment>\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n',
        depth_vert:
          '\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.\n// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for\n// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvHighPrecisionZW = gl_Position.zw;\n\n}\n',
        depth_frag:
          '\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n',
        distanceRGBA_vert:
          '\n#define DISTANCE\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n\n}\n',
        distanceRGBA_frag:
          '\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n',
        equirect_vert:
          '\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n',
        equirect_frag:
          '\nuniform sampler2D tEquirect;\n\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvec3 direction = normalize( vWorldDirection );\n\n\tvec2 sampleUV = equirectUv( direction );\n\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n',
        linedashed_vert:
          '\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\tvLineDistance = scale * lineDistance;\n\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n',
        linedashed_frag:
          '\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n',
        meshbasic_vert:
          '\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n',
        meshbasic_frag:
          '\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n',
        meshlambert_vert:
          '\n#define LAMBERT\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n',
        meshlambert_frag:
          '\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\n\t#endif\n\n\t#include <lightmap_fragment>\n\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n\t// modulation\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n',
        meshmatcap_vert:
          '\n#define MATCAP\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n}\n',
        meshmatcap_frag:
          '\n#define MATCAP\n\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\n\t#ifdef USE_MATCAP\n\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\n\t#else\n\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing\n\n\t#endif\n\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n',
        meshnormal_vert:
          '\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n',
        meshnormal_frag:
          '\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n\t#ifdef OPAQUE\n\n\t\tgl_FragColor.a = 1.0;\n\n\t#endif\n\n}\n',
        meshphong_vert:
          '\n#define PHONG\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n',
        meshphong_frag:
          '\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n',
        meshphysical_vert:
          '\n#define STANDARD\n\nvarying vec3 vViewPosition;\n\n#ifdef USE_TRANSMISSION\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n#ifdef USE_TRANSMISSION\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n}\n',
        meshphysical_frag:
          '\n#define STANDARD\n\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef IOR\n\tuniform float ior;\n#endif\n\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\n\t#include <transmission_fragment>\n\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\n\t#ifdef USE_SHEEN\n\n\t\t// Sheen energy compensation approximation calculation can be found at the end of\n\t\t// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\n\t#endif\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n',
        meshtoon_vert:
          '\n#define TOON\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n',
        meshtoon_frag:
          '\n#define TOON\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n',
        points_vert:
          '\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\n\tgl_PointSize = size;\n\n\t#ifdef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n\n}\n',
        points_frag:
          '\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n',
        shadow_vert:
          '\n#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n',
        shadow_frag:
          '\nuniform vec3 color;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n',
        sprite_vert:
          '\nuniform float rotation;\nuniform vec2 center;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n\t#ifndef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\n\t#endif\n\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n\tmvPosition.xy += rotatedPosition;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n',
        sprite_frag:
          '\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n',
      };
      var R = n(369);
      const L = {
          common: {
            diffuse: { value: new E.I(16777215) },
            opacity: { value: 1 },
            map: { value: null },
            uvTransform: { value: new o.V() },
            uv2Transform: { value: new o.V() },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
          },
          specularmap: { specularMap: { value: null } },
          envmap: {
            envMap: { value: null },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            ior: { value: 1.5 },
            refractionRatio: { value: 0.98 },
          },
          aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
          lightmap: {
            lightMap: { value: null },
            lightMapIntensity: { value: 1 },
          },
          emissivemap: { emissiveMap: { value: null } },
          bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
          normalmap: {
            normalMap: { value: null },
            normalScale: { value: new g.F(1, 1) },
          },
          displacementmap: {
            displacementMap: { value: null },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 },
          },
          roughnessmap: { roughnessMap: { value: null } },
          metalnessmap: { metalnessMap: { value: null } },
          gradientmap: { gradientMap: { value: null } },
          fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new E.I(16777215) },
          },
          lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: {
              value: [],
              properties: { direction: {}, color: {} },
            },
            directionalLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
              },
            },
            spotLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            spotShadowMap: { value: [] },
            spotShadowMatrix: { value: [] },
            pointLights: {
              value: [],
              properties: { color: {}, position: {}, decay: {}, distance: {} },
            },
            pointLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {},
              },
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: {
              value: [],
              properties: { direction: {}, skyColor: {}, groundColor: {} },
            },
            rectAreaLights: {
              value: [],
              properties: { color: {}, position: {}, width: {}, height: {} },
            },
            ltc_1: { value: null },
            ltc_2: { value: null },
          },
          points: {
            diffuse: { value: new E.I(16777215) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new o.V() },
          },
          sprite: {
            diffuse: { value: new E.I(16777215) },
            opacity: { value: 1 },
            center: { value: new g.F(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new o.V() },
          },
        },
        C = {
          basic: {
            uniforms: (0, R.Rh)([
              L.common,
              L.specularmap,
              L.envmap,
              L.aomap,
              L.lightmap,
              L.fog,
            ]),
            vertexShader: A.meshbasic_vert,
            fragmentShader: A.meshbasic_frag,
          },
          lambert: {
            uniforms: (0, R.Rh)([
              L.common,
              L.specularmap,
              L.envmap,
              L.aomap,
              L.lightmap,
              L.emissivemap,
              L.fog,
              L.lights,
              { emissive: { value: new E.I(0) } },
            ]),
            vertexShader: A.meshlambert_vert,
            fragmentShader: A.meshlambert_frag,
          },
          phong: {
            uniforms: (0, R.Rh)([
              L.common,
              L.specularmap,
              L.envmap,
              L.aomap,
              L.lightmap,
              L.emissivemap,
              L.bumpmap,
              L.normalmap,
              L.displacementmap,
              L.fog,
              L.lights,
              {
                emissive: { value: new E.I(0) },
                specular: { value: new E.I(1118481) },
                shininess: { value: 30 },
              },
            ]),
            vertexShader: A.meshphong_vert,
            fragmentShader: A.meshphong_frag,
          },
          standard: {
            uniforms: (0, R.Rh)([
              L.common,
              L.envmap,
              L.aomap,
              L.lightmap,
              L.emissivemap,
              L.bumpmap,
              L.normalmap,
              L.displacementmap,
              L.roughnessmap,
              L.metalnessmap,
              L.fog,
              L.lights,
              {
                emissive: { value: new E.I(0) },
                roughness: { value: 1 },
                metalness: { value: 0 },
                envMapIntensity: { value: 1 },
              },
            ]),
            vertexShader: A.meshphysical_vert,
            fragmentShader: A.meshphysical_frag,
          },
          toon: {
            uniforms: (0, R.Rh)([
              L.common,
              L.aomap,
              L.lightmap,
              L.emissivemap,
              L.bumpmap,
              L.normalmap,
              L.displacementmap,
              L.gradientmap,
              L.fog,
              L.lights,
              { emissive: { value: new E.I(0) } },
            ]),
            vertexShader: A.meshtoon_vert,
            fragmentShader: A.meshtoon_frag,
          },
          matcap: {
            uniforms: (0, R.Rh)([
              L.common,
              L.bumpmap,
              L.normalmap,
              L.displacementmap,
              L.fog,
              { matcap: { value: null } },
            ]),
            vertexShader: A.meshmatcap_vert,
            fragmentShader: A.meshmatcap_frag,
          },
          points: {
            uniforms: (0, R.Rh)([L.points, L.fog]),
            vertexShader: A.points_vert,
            fragmentShader: A.points_frag,
          },
          dashed: {
            uniforms: (0, R.Rh)([
              L.common,
              L.fog,
              {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 },
              },
            ]),
            vertexShader: A.linedashed_vert,
            fragmentShader: A.linedashed_frag,
          },
          depth: {
            uniforms: (0, R.Rh)([L.common, L.displacementmap]),
            vertexShader: A.depth_vert,
            fragmentShader: A.depth_frag,
          },
          normal: {
            uniforms: (0, R.Rh)([
              L.common,
              L.bumpmap,
              L.normalmap,
              L.displacementmap,
              { opacity: { value: 1 } },
            ]),
            vertexShader: A.meshnormal_vert,
            fragmentShader: A.meshnormal_frag,
          },
          sprite: {
            uniforms: (0, R.Rh)([L.sprite, L.fog]),
            vertexShader: A.sprite_vert,
            fragmentShader: A.sprite_frag,
          },
          background: {
            uniforms: {
              uvTransform: { value: new o.V() },
              t2D: { value: null },
            },
            vertexShader: A.background_vert,
            fragmentShader: A.background_frag,
          },
          cube: {
            uniforms: (0, R.Rh)([L.envmap, { opacity: { value: 1 } }]),
            vertexShader: A.cube_vert,
            fragmentShader: A.cube_frag,
          },
          equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: A.equirect_vert,
            fragmentShader: A.equirect_frag,
          },
          distanceRGBA: {
            uniforms: (0, R.Rh)([
              L.common,
              L.displacementmap,
              {
                referencePosition: { value: new a.P() },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 },
              },
            ]),
            vertexShader: A.distanceRGBA_vert,
            fragmentShader: A.distanceRGBA_frag,
          },
          shadow: {
            uniforms: (0, R.Rh)([
              L.lights,
              L.fog,
              { color: { value: new E.I(0) }, opacity: { value: 1 } },
            ]),
            vertexShader: A.shadow_vert,
            fragmentShader: A.shadow_frag,
          },
        };
      function P(t, e, n, r, a, s) {
        const o = new E.I(0);
        let l,
          c,
          u = !0 === a ? 0 : 1,
          h = null,
          d = 0,
          p = null;
        function f(t, e) {
          n.buffers.color.setClear(t.r, t.g, t.b, e, s);
        }
        return {
          getClearColor: function () {
            return o;
          },
          setClearColor: function (t, e = 1) {
            o.set(t), (u = e), f(o, u);
          },
          getClearAlpha: function () {
            return u;
          },
          setClearAlpha: function (t) {
            (u = t), f(o, u);
          },
          render: function (n, a) {
            let s = !1,
              m = !0 === a.isScene ? a.background : null;
            m && m.isTexture && (m = e.get(m));
            const g = t.xr,
              _ = g.getSession && g.getSession();
            _ && 'additive' === _.environmentBlendMode && (m = null),
              null === m ? f(o, u) : m && m.isColor && (f(m, 1), (s = !0)),
              (t.autoClear || s) &&
                t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
              m && (m.isCubeTexture || m.mapping === i.g8)
                ? (void 0 === c &&
                    ((c = new T.K(
                      new M(1, 1, 1),
                      new S.j({
                        name: 'BackgroundCubeMaterial',
                        uniforms: (0, R.dw)(C.cube.uniforms),
                        vertexShader: C.cube.vertexShader,
                        fragmentShader: C.cube.fragmentShader,
                        side: i._L,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                      })
                    )),
                    c.geometry.deleteAttribute('normal'),
                    c.geometry.deleteAttribute('uv'),
                    (c.onBeforeRender = function (t, e, n) {
                      this.matrixWorld.copyPosition(n.matrixWorld);
                    }),
                    Object.defineProperty(c.material, 'envMap', {
                      get: function () {
                        return this.uniforms.envMap.value;
                      },
                    }),
                    r.update(c)),
                  (c.material.uniforms.envMap.value = m),
                  (c.material.uniforms.flipEnvMap.value =
                    m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1),
                  (h === m && d === m.version && p === t.toneMapping) ||
                    ((c.material.needsUpdate = !0),
                    (h = m),
                    (d = m.version),
                    (p = t.toneMapping)),
                  n.unshift(c, c.geometry, c.material, 0, 0, null))
                : m &&
                  m.isTexture &&
                  (void 0 === l &&
                    ((l = new T.K(
                      new w._(2, 2),
                      new S.j({
                        name: 'BackgroundMaterial',
                        uniforms: (0, R.dw)(C.background.uniforms),
                        vertexShader: C.background.vertexShader,
                        fragmentShader: C.background.fragmentShader,
                        side: i.Wl,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                      })
                    )),
                    l.geometry.deleteAttribute('normal'),
                    Object.defineProperty(l.material, 'map', {
                      get: function () {
                        return this.uniforms.t2D.value;
                      },
                    }),
                    r.update(l)),
                  (l.material.uniforms.t2D.value = m),
                  !0 === m.matrixAutoUpdate && m.updateMatrix(),
                  l.material.uniforms.uvTransform.value.copy(m.matrix),
                  (h === m && d === m.version && p === t.toneMapping) ||
                    ((l.material.needsUpdate = !0),
                    (h = m),
                    (d = m.version),
                    (p = t.toneMapping)),
                  n.unshift(l, l.geometry, l.material, 0, 0, null));
          },
        };
      }
      function D(t, e, n, i) {
        const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
          a = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
          s = i.isWebGL2 || null !== a,
          o = {},
          l = d(null);
        let c = l;
        function u(e) {
          return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
        }
        function h(e) {
          return i.isWebGL2
            ? t.deleteVertexArray(e)
            : a.deleteVertexArrayOES(e);
        }
        function d(t) {
          const e = [],
            n = [],
            i = [];
          for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
          return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null,
          };
        }
        function p() {
          const t = c.newAttributes;
          for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
        }
        function f(t) {
          m(t, 0);
        }
        function m(n, r) {
          const a = c.newAttributes,
            s = c.enabledAttributes,
            o = c.attributeDivisors;
          (a[n] = 1),
            0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)),
            o[n] !== r &&
              ((i.isWebGL2 ? t : e.get('ANGLE_instanced_arrays'))[
                i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
              ](n, r),
              (o[n] = r));
        }
        function g() {
          const e = c.newAttributes,
            n = c.enabledAttributes;
          for (let i = 0, r = n.length; i < r; i++)
            n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
        }
        function _(e, n, r, a, s, o) {
          !0 !== i.isWebGL2 || (r !== t.INT && r !== t.UNSIGNED_INT)
            ? t.vertexAttribPointer(e, n, r, a, s, o)
            : t.vertexAttribIPointer(e, n, r, s, o);
        }
        function v() {
          x(), c !== l && ((c = l), u(c.object));
        }
        function x() {
          (l.geometry = null), (l.program = null), (l.wireframe = !1);
        }
        return {
          setup: function (r, l, h, v, x) {
            let y = !1;
            if (s) {
              const e = (function (e, n, r) {
                const s = !0 === r.wireframe;
                let l = o[e.id];
                void 0 === l && ((l = {}), (o[e.id] = l));
                let c = l[n.id];
                void 0 === c && ((c = {}), (l[n.id] = c));
                let u = c[s];
                return (
                  void 0 === u &&
                    ((u = d(
                      i.isWebGL2
                        ? t.createVertexArray()
                        : a.createVertexArrayOES()
                    )),
                    (c[s] = u)),
                  u
                );
              })(v, h, l);
              c !== e && ((c = e), u(c.object)),
                (y = (function (t, e) {
                  const n = c.attributes,
                    i = t.attributes;
                  let r = 0;
                  for (const t in i) {
                    const e = n[t],
                      a = i[t];
                    if (void 0 === e) return !0;
                    if (e.attribute !== a) return !0;
                    if (e.data !== a.data) return !0;
                    r++;
                  }
                  return c.attributesNum !== r || c.index !== e;
                })(v, x)),
                y &&
                  (function (t, e) {
                    const n = {},
                      i = t.attributes;
                    let r = 0;
                    for (const t in i) {
                      const e = i[t],
                        a = {};
                      (a.attribute = e),
                        e.data && (a.data = e.data),
                        (n[t] = a),
                        r++;
                    }
                    (c.attributes = n), (c.attributesNum = r), (c.index = e);
                  })(v, x);
            } else {
              const t = !0 === l.wireframe;
              (c.geometry === v.id &&
                c.program === h.id &&
                c.wireframe === t) ||
                ((c.geometry = v.id),
                (c.program = h.id),
                (c.wireframe = t),
                (y = !0));
            }
            !0 === r.isInstancedMesh && (y = !0),
              null !== x && n.update(x, t.ELEMENT_ARRAY_BUFFER),
              y &&
                ((function (r, a, s, o) {
                  if (
                    !1 === i.isWebGL2 &&
                    (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                    null === e.get('ANGLE_instanced_arrays')
                  )
                    return;
                  p();
                  const l = o.attributes,
                    c = s.getAttributes(),
                    u = a.defaultAttributeValues;
                  for (const e in c) {
                    const i = c[e];
                    if (i.location >= 0) {
                      let a = l[e];
                      if (
                        (void 0 === a &&
                          ('instanceMatrix' === e &&
                            r.instanceMatrix &&
                            (a = r.instanceMatrix),
                          'instanceColor' === e &&
                            r.instanceColor &&
                            (a = r.instanceColor)),
                        void 0 !== a)
                      ) {
                        const e = a.normalized,
                          s = a.itemSize,
                          l = n.get(a);
                        if (void 0 === l) continue;
                        const c = l.buffer,
                          u = l.type,
                          h = l.bytesPerElement;
                        if (a.isInterleavedBufferAttribute) {
                          const n = a.data,
                            l = n.stride,
                            d = a.offset;
                          if (n.isInstancedInterleavedBuffer) {
                            for (let t = 0; t < i.locationSize; t++)
                              m(i.location + t, n.meshPerAttribute);
                            !0 !== r.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                n.meshPerAttribute * n.count);
                          } else
                            for (let t = 0; t < i.locationSize; t++)
                              f(i.location + t);
                          t.bindBuffer(t.ARRAY_BUFFER, c);
                          for (let t = 0; t < i.locationSize; t++)
                            _(
                              i.location + t,
                              s / i.locationSize,
                              u,
                              e,
                              l * h,
                              (d + (s / i.locationSize) * t) * h
                            );
                        } else {
                          if (a.isInstancedBufferAttribute) {
                            for (let t = 0; t < i.locationSize; t++)
                              m(i.location + t, a.meshPerAttribute);
                            !0 !== r.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                a.meshPerAttribute * a.count);
                          } else
                            for (let t = 0; t < i.locationSize; t++)
                              f(i.location + t);
                          t.bindBuffer(t.ARRAY_BUFFER, c);
                          for (let t = 0; t < i.locationSize; t++)
                            _(
                              i.location + t,
                              s / i.locationSize,
                              u,
                              e,
                              s * h,
                              (s / i.locationSize) * t * h
                            );
                        }
                      } else if (void 0 !== u) {
                        const n = u[e];
                        if (void 0 !== n)
                          switch (n.length) {
                            case 2:
                              t.vertexAttrib2fv(i.location, n);
                              break;
                            case 3:
                              t.vertexAttrib3fv(i.location, n);
                              break;
                            case 4:
                              t.vertexAttrib4fv(i.location, n);
                              break;
                            default:
                              t.vertexAttrib1fv(i.location, n);
                          }
                      }
                    }
                  }
                  g();
                })(r, l, h, v),
                null !== x &&
                  t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(x).buffer));
          },
          reset: v,
          resetDefaultState: x,
          dispose: function () {
            v();
            for (const t in o) {
              const e = o[t];
              for (const t in e) {
                const n = e[t];
                for (const t in n) h(n[t].object), delete n[t];
                delete e[t];
              }
              delete o[t];
            }
          },
          releaseStatesOfGeometry: function (t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const t in e) {
              const n = e[t];
              for (const t in n) h(n[t].object), delete n[t];
              delete e[t];
            }
            delete o[t.id];
          },
          releaseStatesOfProgram: function (t) {
            for (const e in o) {
              const n = o[e];
              if (void 0 === n[t.id]) continue;
              const i = n[t.id];
              for (const t in i) h(i[t].object), delete i[t];
              delete n[t.id];
            }
          },
          initAttributes: p,
          enableAttribute: f,
          disableUnusedAttributes: g,
        };
      }
      function O(t, e, n, i) {
        const r = i.isWebGL2;
        let a;
        (this.setMode = function (t) {
          a = t;
        }),
          (this.render = function (e, i) {
            t.drawArrays(a, e, i), n.update(i, a, 1);
          }),
          (this.renderInstances = function (i, s, o) {
            if (0 === o) return;
            let l, c;
            if (r) (l = t), (c = 'drawArraysInstanced');
            else if (
              ((l = e.get('ANGLE_instanced_arrays')),
              (c = 'drawArraysInstancedANGLE'),
              null === l)
            )
              return void console.error(
                'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
              );
            l[c](a, i, s, o), n.update(s, a, o);
          });
      }
      function N(t, e, n) {
        let i;
        function r(e) {
          if ('highp' === e) {
            if (
              t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)
                .precision > 0 &&
              t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
                .precision > 0
            )
              return 'highp';
            e = 'mediump';
          }
          return 'mediump' === e &&
            t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)
              .precision > 0 &&
            t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
              .precision > 0
            ? 'mediump'
            : 'lowp';
        }
        const a =
          ('undefined' != typeof WebGL2RenderingContext &&
            t instanceof WebGL2RenderingContext) ||
          ('undefined' != typeof WebGL2ComputeRenderingContext &&
            t instanceof WebGL2ComputeRenderingContext);
        let s = void 0 !== n.precision ? n.precision : 'highp';
        const o = r(s);
        o !== s &&
          (console.warn(
            'THREE.WebGLRenderer:',
            s,
            'not supported, using',
            o,
            'instead.'
          ),
          (s = o));
        const l = a || e.has('WEBGL_draw_buffers'),
          c = !0 === n.logarithmicDepthBuffer,
          u = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
          h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          d = t.getParameter(t.MAX_TEXTURE_SIZE),
          p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
          f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
          m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
          g = t.getParameter(t.MAX_VARYING_VECTORS),
          _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
          v = h > 0,
          x = a || e.has('OES_texture_float');
        return {
          isWebGL2: a,
          drawBuffers: l,
          getMaxAnisotropy: function () {
            if (void 0 !== i) return i;
            if (!0 === e.has('EXT_texture_filter_anisotropic')) {
              const n = e.get('EXT_texture_filter_anisotropic');
              i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else i = 0;
            return i;
          },
          getMaxPrecision: r,
          precision: s,
          logarithmicDepthBuffer: c,
          maxTextures: u,
          maxVertexTextures: h,
          maxTextureSize: d,
          maxCubemapSize: p,
          maxAttributes: f,
          maxVertexUniforms: m,
          maxVaryings: g,
          maxFragmentUniforms: _,
          vertexTextures: v,
          floatFragmentTextures: x,
          floatVertexTextures: v && x,
          maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0,
        };
      }
      function I(t) {
        const e = this;
        let n = null,
          i = 0,
          r = !1,
          a = !1;
        const s = new h(),
          l = new o.V(),
          c = { value: null, needsUpdate: !1 };
        function u() {
          c.value !== n && ((c.value = n), (c.needsUpdate = i > 0)),
            (e.numPlanes = i),
            (e.numIntersection = 0);
        }
        function d(t, n, i, r) {
          const a = null !== t ? t.length : 0;
          let o = null;
          if (0 !== a) {
            if (((o = c.value), !0 !== r || null === o)) {
              const e = i + 4 * a,
                r = n.matrixWorldInverse;
              l.getNormalMatrix(r),
                (null === o || o.length < e) && (o = new Float32Array(e));
              for (let e = 0, n = i; e !== a; ++e, n += 4)
                s.copy(t[e]).applyMatrix4(r, l),
                  s.normal.toArray(o, n),
                  (o[n + 3] = s.constant);
            }
            (c.value = o), (c.needsUpdate = !0);
          }
          return (e.numPlanes = a), (e.numIntersection = 0), o;
        }
        (this.uniform = c),
          (this.numPlanes = 0),
          (this.numIntersection = 0),
          (this.init = function (t, e, a) {
            const s = 0 !== t.length || e || 0 !== i || r;
            return (r = e), (n = d(t, a, 0)), (i = t.length), s;
          }),
          (this.beginShadows = function () {
            (a = !0), d(null);
          }),
          (this.endShadows = function () {
            (a = !1), u();
          }),
          (this.setState = function (e, s, o) {
            const l = e.clippingPlanes,
              h = e.clipIntersection,
              p = e.clipShadows,
              f = t.get(e);
            if (!r || null === l || 0 === l.length || (a && !p))
              a ? d(null) : u();
            else {
              const t = a ? 0 : i,
                e = 4 * t;
              let r = f.clippingState || null;
              (c.value = r), (r = d(l, s, e, o));
              for (let t = 0; t !== e; ++t) r[t] = n[t];
              (f.clippingState = r),
                (this.numIntersection = h ? this.numPlanes : 0),
                (this.numPlanes += t);
            }
          });
      }
      C.physical = {
        uniforms: (0, R.Rh)([
          C.standard.uniforms,
          {
            clearcoat: { value: 0 },
            clearcoatMap: { value: null },
            clearcoatRoughness: { value: 0 },
            clearcoatRoughnessMap: { value: null },
            clearcoatNormalScale: { value: new g.F(1, 1) },
            clearcoatNormalMap: { value: null },
            sheen: { value: 0 },
            sheenColor: { value: new E.I(0) },
            sheenColorMap: { value: null },
            sheenRoughness: { value: 1 },
            sheenRoughnessMap: { value: null },
            transmission: { value: 0 },
            transmissionMap: { value: null },
            transmissionSamplerSize: { value: new g.F() },
            transmissionSamplerMap: { value: null },
            thickness: { value: 0 },
            thicknessMap: { value: null },
            attenuationDistance: { value: 0 },
            attenuationColor: { value: new E.I(0) },
            specularIntensity: { value: 1 },
            specularIntensityMap: { value: null },
            specularColor: { value: new E.I(1, 1, 1) },
            specularColorMap: { value: null },
          },
        ]),
        vertexShader: A.meshphysical_vert,
        fragmentShader: A.meshphysical_frag,
      };
      var U = n(574),
        F = n(576);
      class z extends U.p {
        constructor(t, e, n = {}) {
          super(),
            (this.width = t),
            (this.height = e),
            (this.depth = 1),
            (this.scissor = new _.L(0, 0, t, e)),
            (this.scissorTest = !1),
            (this.viewport = new _.L(0, 0, t, e));
          const r = { width: t, height: e, depth: 1 };
          (this.texture = new F.x(
            r,
            n.mapping,
            n.wrapS,
            n.wrapT,
            n.magFilter,
            n.minFilter,
            n.format,
            n.type,
            n.anisotropy,
            n.encoding
          )),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.generateMipmaps =
              void 0 !== n.generateMipmaps && n.generateMipmaps),
            (this.texture.internalFormat =
              void 0 !== n.internalFormat ? n.internalFormat : null),
            (this.texture.minFilter =
              void 0 !== n.minFilter ? n.minFilter : i.we),
            (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
            (this.stencilBuffer =
              void 0 !== n.stencilBuffer && n.stencilBuffer),
            (this.depthTexture =
              void 0 !== n.depthTexture ? n.depthTexture : null),
            (this.samples = void 0 !== n.samples ? n.samples : 0);
        }
        setSize(t, e, n = 1) {
          (this.width === t && this.height === e && this.depth === n) ||
            ((this.width = t),
            (this.height = e),
            (this.depth = n),
            (this.texture.image.width = t),
            (this.texture.image.height = e),
            (this.texture.image.depth = n),
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (
            (this.width = t.width),
            (this.height = t.height),
            (this.depth = t.depth),
            this.viewport.copy(t.viewport),
            (this.texture = t.texture.clone()),
            (this.texture.image = Object.assign({}, t.texture.image)),
            (this.depthBuffer = t.depthBuffer),
            (this.stencilBuffer = t.stencilBuffer),
            null !== t.depthTexture &&
              (this.depthTexture = t.depthTexture.clone()),
            (this.samples = t.samples),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: 'dispose' });
        }
      }
      z.prototype.isWebGLRenderTarget = !0;
      var B = n(802),
        k = n(94);
      class G extends k.V {
        constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
          super(),
            (this.type = 'PerspectiveCamera'),
            (this.fov = t),
            (this.zoom = 1),
            (this.near = n),
            (this.far = i),
            (this.focus = 10),
            (this.aspect = e),
            (this.view = null),
            (this.filmGauge = 35),
            (this.filmOffset = 0),
            this.updateProjectionMatrix();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.fov = t.fov),
            (this.zoom = t.zoom),
            (this.near = t.near),
            (this.far = t.far),
            (this.focus = t.focus),
            (this.aspect = t.aspect),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            (this.filmGauge = t.filmGauge),
            (this.filmOffset = t.filmOffset),
            this
          );
        }
        setFocalLength(t) {
          const e = (0.5 * this.getFilmHeight()) / t;
          (this.fov = 2 * r.I3 * Math.atan(e)), this.updateProjectionMatrix();
        }
        getFocalLength() {
          const t = Math.tan(0.5 * r.qW * this.fov);
          return (0.5 * this.getFilmHeight()) / t;
        }
        getEffectiveFOV() {
          return (
            2 * r.I3 * Math.atan(Math.tan(0.5 * r.qW * this.fov) / this.zoom)
          );
        }
        getFilmWidth() {
          return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
          return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, r, a) {
          (this.aspect = t / e),
            null === this.view &&
              (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1,
              }),
            (this.view.enabled = !0),
            (this.view.fullWidth = t),
            (this.view.fullHeight = e),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = a),
            this.updateProjectionMatrix();
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = this.near;
          let e = (t * Math.tan(0.5 * r.qW * this.fov)) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            a = -0.5 * i;
          const s = this.view;
          if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth,
              r = s.fullHeight;
            (a += (s.offsetX * i) / t),
              (e -= (s.offsetY * n) / r),
              (i *= s.width / t),
              (n *= s.height / r);
          }
          const o = this.filmOffset;
          0 !== o && (a += (t * o) / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(
              a,
              a + i,
              e,
              e - n,
              t,
              this.far
            ),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.fov = this.fov),
            (e.object.zoom = this.zoom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            (e.object.focus = this.focus),
            (e.object.aspect = this.aspect),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            (e.object.filmGauge = this.filmGauge),
            (e.object.filmOffset = this.filmOffset),
            e
          );
        }
      }
      G.prototype.isPerspectiveCamera = !0;
      const H = 90;
      class V extends B.T {
        constructor(t, e, n) {
          if (
            (super(),
            (this.type = 'CubeCamera'),
            !0 !== n.isWebGLCubeRenderTarget)
          )
            return void console.error(
              'THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.'
            );
          this.renderTarget = n;
          const i = new G(H, 1, t, e);
          (i.layers = this.layers),
            i.up.set(0, -1, 0),
            i.lookAt(new a.P(1, 0, 0)),
            this.add(i);
          const r = new G(H, 1, t, e);
          (r.layers = this.layers),
            r.up.set(0, -1, 0),
            r.lookAt(new a.P(-1, 0, 0)),
            this.add(r);
          const s = new G(H, 1, t, e);
          (s.layers = this.layers),
            s.up.set(0, 0, 1),
            s.lookAt(new a.P(0, 1, 0)),
            this.add(s);
          const o = new G(H, 1, t, e);
          (o.layers = this.layers),
            o.up.set(0, 0, -1),
            o.lookAt(new a.P(0, -1, 0)),
            this.add(o);
          const l = new G(H, 1, t, e);
          (l.layers = this.layers),
            l.up.set(0, -1, 0),
            l.lookAt(new a.P(0, 0, 1)),
            this.add(l);
          const c = new G(H, 1, t, e);
          (c.layers = this.layers),
            c.up.set(0, -1, 0),
            c.lookAt(new a.P(0, 0, -1)),
            this.add(c);
        }
        update(t, e) {
          null === this.parent && this.updateMatrixWorld();
          const n = this.renderTarget,
            [i, r, a, s, o, l] = this.children,
            c = t.xr.enabled,
            u = t.getRenderTarget();
          t.xr.enabled = !1;
          const h = n.texture.generateMipmaps;
          (n.texture.generateMipmaps = !1),
            t.setRenderTarget(n, 0),
            t.render(e, i),
            t.setRenderTarget(n, 1),
            t.render(e, r),
            t.setRenderTarget(n, 2),
            t.render(e, a),
            t.setRenderTarget(n, 3),
            t.render(e, s),
            t.setRenderTarget(n, 4),
            t.render(e, o),
            (n.texture.generateMipmaps = h),
            t.setRenderTarget(n, 5),
            t.render(e, l),
            t.setRenderTarget(u),
            (t.xr.enabled = c),
            (n.texture.needsPMREMUpdate = !0);
        }
      }
      class W extends F.x {
        constructor(t, e, n, r, a, s, o, l, c, u) {
          super(
            (t = void 0 !== t ? t : []),
            (e = void 0 !== e ? e : i.fY),
            n,
            r,
            a,
            s,
            o,
            l,
            c,
            u
          ),
            (this.flipY = !1);
        }
        get images() {
          return this.image;
        }
        set images(t) {
          this.image = t;
        }
      }
      W.prototype.isCubeTexture = !0;
      class X extends z {
        constructor(t, e = {}) {
          super(t, t, e);
          const n = { width: t, height: t, depth: 1 },
            r = [n, n, n, n, n, n];
          (this.texture = new W(
            r,
            e.mapping,
            e.wrapS,
            e.wrapT,
            e.magFilter,
            e.minFilter,
            e.format,
            e.type,
            e.anisotropy,
            e.encoding
          )),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.generateMipmaps =
              void 0 !== e.generateMipmaps && e.generateMipmaps),
            (this.texture.minFilter =
              void 0 !== e.minFilter ? e.minFilter : i.we);
        }
        fromEquirectangularTexture(t, e) {
          (this.texture.type = e.type),
            (this.texture.format = i.wk),
            (this.texture.encoding = e.encoding),
            (this.texture.generateMipmaps = e.generateMipmaps),
            (this.texture.minFilter = e.minFilter),
            (this.texture.magFilter = e.magFilter);
          const n = { tEquirect: { value: null } },
            r =
              '\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t',
            a =
              '\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t',
            s = new M(5, 5, 5),
            o = new S.j({
              name: 'CubemapFromEquirect',
              uniforms: (0, R.dw)(n),
              vertexShader: r,
              fragmentShader: a,
              side: i._L,
              blending: i.jF,
            });
          o.uniforms.tEquirect.value = e;
          const l = new T.K(s, o),
            c = e.minFilter;
          return (
            e.minFilter === i.D1 && (e.minFilter = i.we),
            new V(1, 10, this).update(t, l),
            (e.minFilter = c),
            l.geometry.dispose(),
            l.material.dispose(),
            this
          );
        }
        clear(t, e, n, i) {
          const r = t.getRenderTarget();
          for (let r = 0; r < 6; r++)
            t.setRenderTarget(this, r), t.clear(e, n, i);
          t.setRenderTarget(r);
        }
      }
      function j(t) {
        let e = new WeakMap();
        function n(t, e) {
          return (
            e === i.dS ? (t.mapping = i.fY) : e === i.Bf && (t.mapping = i.vx),
            t
          );
        }
        function r(t) {
          const n = t.target;
          n.removeEventListener('dispose', r);
          const i = e.get(n);
          void 0 !== i && (e.delete(n), i.dispose());
        }
        return {
          get: function (a) {
            if (a && a.isTexture && !1 === a.isRenderTargetTexture) {
              const s = a.mapping;
              if (s === i.dS || s === i.Bf) {
                if (e.has(a)) return n(e.get(a).texture, a.mapping);
                {
                  const i = a.image;
                  if (i && i.height > 0) {
                    const s = new X(i.height / 2);
                    return (
                      s.fromEquirectangularTexture(t, a),
                      e.set(a, s),
                      a.addEventListener('dispose', r),
                      n(s.texture, a.mapping)
                    );
                  }
                  return null;
                }
              }
            }
            return a;
          },
          dispose: function () {
            e = new WeakMap();
          },
        };
      }
      X.prototype.isWebGLCubeRenderTarget = !0;
      var q = n(152),
        Y = n(33);
      const Z = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
        K = new q.i(),
        J = new E.I();
      let $ = null;
      const Q = (1 + Math.sqrt(5)) / 2,
        tt = 1 / Q,
        et = [
          new a.P(1, 1, 1),
          new a.P(-1, 1, 1),
          new a.P(1, 1, -1),
          new a.P(-1, 1, -1),
          new a.P(0, Q, tt),
          new a.P(0, Q, -tt),
          new a.P(tt, 0, Q),
          new a.P(-tt, 0, Q),
          new a.P(Q, tt, 0),
          new a.P(-Q, tt, 0),
        ];
      class nt {
        constructor(t) {
          (this._renderer = t),
            (this._pingPongRenderTarget = null),
            (this._lodMax = 0),
            (this._cubeSize = 0),
            (this._lodPlanes = []),
            (this._sizeLods = []),
            (this._sigmas = []),
            (this._blurMaterial = null),
            (this._cubemapMaterial = null),
            (this._equirectMaterial = null),
            this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = 0.1, i = 100) {
          ($ = this._renderer.getRenderTarget()), this._setSize(256);
          const r = this._allocateTargets();
          return (
            (r.depthBuffer = !0),
            this._sceneToCubeUV(t, n, i, r),
            e > 0 && this._blur(r, 0, 0, e),
            this._applyPMREM(r),
            this._cleanup(r),
            r
          );
        }
        fromEquirectangular(t, e = null) {
          return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
          return this._fromTexture(t, e);
        }
        compileCubemapShader() {
          null === this._cubemapMaterial &&
            ((this._cubemapMaterial = st()),
            this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
          null === this._equirectMaterial &&
            ((this._equirectMaterial = at()),
            this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
          this._dispose(),
            null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
            null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t) {
          (this._lodMax = Math.floor(Math.log2(t))),
            (this._cubeSize = Math.pow(2, this._lodMax));
        }
        _dispose() {
          this._blurMaterial.dispose(),
            null !== this._pingPongRenderTarget &&
              this._pingPongRenderTarget.dispose();
          for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
          this._renderer.setRenderTarget($),
            (t.scissorTest = !1),
            rt(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
          t.mapping === i.fY || t.mapping === i.vx
            ? this._setSize(
                0 === t.image.length
                  ? 16
                  : t.image[0].width || t.image[0].image.width
              )
            : this._setSize(t.image.width / 4),
            ($ = this._renderer.getRenderTarget());
          const n = e || this._allocateTargets();
          return (
            this._textureToCubeUV(t, n),
            this._applyPMREM(n),
            this._cleanup(n),
            n
          );
        }
        _allocateTargets() {
          const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize - 32,
            n = {
              magFilter: i.we,
              minFilter: i.we,
              generateMipmaps: !1,
              type: i.cL,
              format: i.wk,
              encoding: i.rn,
              depthBuffer: !1,
            },
            r = it(t, e, n);
          if (
            null === this._pingPongRenderTarget ||
            this._pingPongRenderTarget.width !== t
          ) {
            null !== this._pingPongRenderTarget && this._dispose(),
              (this._pingPongRenderTarget = it(t, e, n));
            const { _lodMax: r } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas,
            } = (function (t) {
              const e = [],
                n = [],
                i = [];
              let r = t;
              const a = t - 4 + 1 + Z.length;
              for (let s = 0; s < a; s++) {
                const a = Math.pow(2, r);
                n.push(a);
                let o = 1 / a;
                s > t - 4 ? (o = Z[s - t + 4 - 1]) : 0 === s && (o = 0),
                  i.push(o);
                const l = 1 / (a - 1),
                  c = -l / 2,
                  u = 1 + l / 2,
                  h = [c, c, u, c, u, u, c, c, u, u, c, u],
                  d = 6,
                  p = 6,
                  f = 3,
                  m = 2,
                  g = 1,
                  _ = new Float32Array(f * p * d),
                  v = new Float32Array(m * p * d),
                  x = new Float32Array(g * p * d);
                for (let t = 0; t < d; t++) {
                  const e = ((t % 3) * 2) / 3 - 1,
                    n = t > 2 ? 0 : -1,
                    i = [
                      e,
                      n,
                      0,
                      e + 2 / 3,
                      n,
                      0,
                      e + 2 / 3,
                      n + 1,
                      0,
                      e,
                      n,
                      0,
                      e + 2 / 3,
                      n + 1,
                      0,
                      e,
                      n + 1,
                      0,
                    ];
                  _.set(i, f * p * t), v.set(h, m * p * t);
                  const r = [t, t, t, t, t, t];
                  x.set(r, g * p * t);
                }
                const M = new y.u();
                M.setAttribute('position', new b.Tl(_, f)),
                  M.setAttribute('uv', new b.Tl(v, m)),
                  M.setAttribute('faceIndex', new b.Tl(x, g)),
                  e.push(M),
                  r > 4 && r--;
              }
              return { lodPlanes: e, sizeLods: n, sigmas: i };
            })(r)),
              (this._blurMaterial = (function (t, e, n) {
                const r = new Float32Array(20),
                  s = new a.P(0, 1, 0);
                return new S.j({
                  name: 'SphericalGaussianBlur',
                  defines: {
                    n: 20,
                    CUBEUV_TEXEL_WIDTH: 1 / e,
                    CUBEUV_TEXEL_HEIGHT: 1 / n,
                    CUBEUV_MAX_MIP: `${t}.0`,
                  },
                  uniforms: {
                    envMap: { value: null },
                    samples: { value: 1 },
                    weights: { value: r },
                    latitudinal: { value: !1 },
                    dTheta: { value: 0 },
                    mipInt: { value: 0 },
                    poleAxis: { value: s },
                  },
                  vertexShader:
                    '\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t',
                  fragmentShader:
                    "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                  blending: i.jF,
                  depthTest: !1,
                  depthWrite: !1,
                });
              })(r, t, e));
          }
          return r;
        }
        _compileMaterial(t) {
          const e = new T.K(this._lodPlanes[0], t);
          this._renderer.compile(e, K);
        }
        _sceneToCubeUV(t, e, n, r) {
          const a = new G(90, 1, e, n),
            s = [1, -1, 1, 1, 1, 1],
            o = [1, 1, 1, -1, -1, -1],
            l = this._renderer,
            c = l.autoClear,
            u = l.toneMapping;
          l.getClearColor(J), (l.toneMapping = i.uL), (l.autoClear = !1);
          const h = new Y.v({
              name: 'PMREM.Background',
              side: i._L,
              depthWrite: !1,
              depthTest: !1,
            }),
            d = new T.K(new M(), h);
          let p = !1;
          const f = t.background;
          f
            ? f.isColor && (h.color.copy(f), (t.background = null), (p = !0))
            : (h.color.copy(J), (p = !0));
          for (let e = 0; e < 6; e++) {
            const n = e % 3;
            0 === n
              ? (a.up.set(0, s[e], 0), a.lookAt(o[e], 0, 0))
              : 1 === n
              ? (a.up.set(0, 0, s[e]), a.lookAt(0, o[e], 0))
              : (a.up.set(0, s[e], 0), a.lookAt(0, 0, o[e]));
            const i = this._cubeSize;
            rt(r, n * i, e > 2 ? i : 0, i, i),
              l.setRenderTarget(r),
              p && l.render(d, a),
              l.render(t, a);
          }
          d.geometry.dispose(),
            d.material.dispose(),
            (l.toneMapping = u),
            (l.autoClear = c),
            (t.background = f);
        }
        _textureToCubeUV(t, e) {
          const n = this._renderer,
            r = t.mapping === i.fY || t.mapping === i.vx;
          r
            ? (null === this._cubemapMaterial && (this._cubemapMaterial = st()),
              (this._cubemapMaterial.uniforms.flipEnvMap.value =
                !1 === t.isRenderTargetTexture ? -1 : 1))
            : null === this._equirectMaterial &&
              (this._equirectMaterial = at());
          const a = r ? this._cubemapMaterial : this._equirectMaterial,
            s = new T.K(this._lodPlanes[0], a);
          a.uniforms.envMap.value = t;
          const o = this._cubeSize;
          rt(e, 0, 0, 3 * o, 2 * o), n.setRenderTarget(e), n.render(s, K);
        }
        _applyPMREM(t) {
          const e = this._renderer,
            n = e.autoClear;
          e.autoClear = !1;
          for (let e = 1; e < this._lodPlanes.length; e++) {
            const n = Math.sqrt(
                this._sigmas[e] * this._sigmas[e] -
                  this._sigmas[e - 1] * this._sigmas[e - 1]
              ),
              i = et[(e - 1) % et.length];
            this._blur(t, e - 1, e, n, i);
          }
          e.autoClear = n;
        }
        _blur(t, e, n, i, r) {
          const a = this._pingPongRenderTarget;
          this._halfBlur(t, a, e, n, i, 'latitudinal', r),
            this._halfBlur(a, t, n, n, i, 'longitudinal', r);
        }
        _halfBlur(t, e, n, i, r, a, s) {
          const o = this._renderer,
            l = this._blurMaterial;
          'latitudinal' !== a &&
            'longitudinal' !== a &&
            console.error(
              'blur direction must be either latitudinal or longitudinal!'
            );
          const c = new T.K(this._lodPlanes[i], l),
            u = l.uniforms,
            h = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * h) : (2 * Math.PI) / 39,
            p = r / d,
            f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
          f > 20 &&
            console.warn(
              `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
            );
          const m = [];
          let g = 0;
          for (let t = 0; t < 20; ++t) {
            const e = t / p,
              n = Math.exp((-e * e) / 2);
            m.push(n), 0 === t ? (g += n) : t < f && (g += 2 * n);
          }
          for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
          (u.envMap.value = t.texture),
            (u.samples.value = f),
            (u.weights.value = m),
            (u.latitudinal.value = 'latitudinal' === a),
            s && (u.poleAxis.value = s);
          const { _lodMax: _ } = this;
          (u.dTheta.value = d), (u.mipInt.value = _ - n);
          const v = this._sizeLods[i];
          rt(
            e,
            3 * v * (i > _ - 4 ? i - _ + 4 : 0),
            4 * (this._cubeSize - v),
            3 * v,
            2 * v
          ),
            o.setRenderTarget(e),
            o.render(c, K);
        }
      }
      function it(t, e, n) {
        const r = new z(t, e, n);
        return (
          (r.texture.mapping = i.g8),
          (r.texture.name = 'PMREM.cubeUv'),
          (r.scissorTest = !0),
          r
        );
      }
      function rt(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
      }
      function at() {
        return new S.j({
          name: 'EquirectangularToCubeUV',
          uniforms: { envMap: { value: null } },
          vertexShader:
            '\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t',
          fragmentShader:
            '\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t',
          blending: i.jF,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function st() {
        return new S.j({
          name: 'CubemapToCubeUV',
          uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
          vertexShader:
            '\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t',
          fragmentShader:
            '\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t',
          blending: i.jF,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function ot(t) {
        let e = new WeakMap(),
          n = null;
        function r(t) {
          const n = t.target;
          n.removeEventListener('dispose', r);
          const i = e.get(n);
          void 0 !== i && (e.delete(n), i.dispose());
        }
        return {
          get: function (a) {
            if (a && a.isTexture) {
              const s = a.mapping,
                o = s === i.dS || s === i.Bf,
                l = s === i.fY || s === i.vx;
              if (o || l) {
                if (a.isRenderTargetTexture && !0 === a.needsPMREMUpdate) {
                  a.needsPMREMUpdate = !1;
                  let i = e.get(a);
                  return (
                    null === n && (n = new nt(t)),
                    (i = o ? n.fromEquirectangular(a, i) : n.fromCubemap(a, i)),
                    e.set(a, i),
                    i.texture
                  );
                }
                if (e.has(a)) return e.get(a).texture;
                {
                  const i = a.image;
                  if (
                    (o && i && i.height > 0) ||
                    (l &&
                      i &&
                      (function (t) {
                        let e = 0;
                        for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
                        return 6 === e;
                      })(i))
                  ) {
                    null === n && (n = new nt(t));
                    const i = o ? n.fromEquirectangular(a) : n.fromCubemap(a);
                    return (
                      e.set(a, i), a.addEventListener('dispose', r), i.texture
                    );
                  }
                  return null;
                }
              }
            }
            return a;
          },
          dispose: function () {
            (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
          },
        };
      }
      function lt(t) {
        const e = {};
        function n(n) {
          if (void 0 !== e[n]) return e[n];
          let i;
          switch (n) {
            case 'WEBGL_depth_texture':
              i =
                t.getExtension('WEBGL_depth_texture') ||
                t.getExtension('MOZ_WEBGL_depth_texture') ||
                t.getExtension('WEBKIT_WEBGL_depth_texture');
              break;
            case 'EXT_texture_filter_anisotropic':
              i =
                t.getExtension('EXT_texture_filter_anisotropic') ||
                t.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
                t.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
              break;
            case 'WEBGL_compressed_texture_s3tc':
              i =
                t.getExtension('WEBGL_compressed_texture_s3tc') ||
                t.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
                t.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
              break;
            case 'WEBGL_compressed_texture_pvrtc':
              i =
                t.getExtension('WEBGL_compressed_texture_pvrtc') ||
                t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
              break;
            default:
              i = t.getExtension(n);
          }
          return (e[n] = i), i;
        }
        return {
          has: function (t) {
            return null !== n(t);
          },
          init: function (t) {
            t.isWebGL2
              ? n('EXT_color_buffer_float')
              : (n('WEBGL_depth_texture'),
                n('OES_texture_float'),
                n('OES_texture_half_float'),
                n('OES_texture_half_float_linear'),
                n('OES_standard_derivatives'),
                n('OES_element_index_uint'),
                n('OES_vertex_array_object'),
                n('ANGLE_instanced_arrays')),
              n('OES_texture_float_linear'),
              n('EXT_color_buffer_half_float'),
              n('WEBGL_multisampled_render_to_texture');
          },
          get: function (t) {
            const e = n(t);
            return (
              null === e &&
                console.warn(
                  'THREE.WebGLRenderer: ' + t + ' extension not supported.'
                ),
              e
            );
          },
        };
      }
      var ct = n(42);
      function ut(t, e, n, i) {
        const r = {},
          a = new WeakMap();
        function s(t) {
          const o = t.target;
          null !== o.index && e.remove(o.index);
          for (const t in o.attributes) e.remove(o.attributes[t]);
          o.removeEventListener('dispose', s), delete r[o.id];
          const l = a.get(o);
          l && (e.remove(l), a.delete(o)),
            i.releaseStatesOfGeometry(o),
            !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
            n.memory.geometries--;
        }
        function o(t) {
          const n = [],
            i = t.index,
            r = t.attributes.position;
          let s = 0;
          if (null !== i) {
            const t = i.array;
            s = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
              const i = t[e + 0],
                r = t[e + 1],
                a = t[e + 2];
              n.push(i, r, r, a, a, i);
            }
          } else {
            const t = r.array;
            s = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
              const t = e + 0,
                i = e + 1,
                r = e + 2;
              n.push(t, i, i, r, r, t);
            }
          }
          const o = new ((0, ct.H7)(n) ? b.lC : b.ql)(n, 1);
          o.version = s;
          const l = a.get(t);
          l && e.remove(l), a.set(t, o);
        }
        return {
          get: function (t, e) {
            return (
              !0 === r[e.id] ||
                (e.addEventListener('dispose', s),
                (r[e.id] = !0),
                n.memory.geometries++),
              e
            );
          },
          update: function (n) {
            const i = n.attributes;
            for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
            const r = n.morphAttributes;
            for (const n in r) {
              const i = r[n];
              for (let n = 0, r = i.length; n < r; n++)
                e.update(i[n], t.ARRAY_BUFFER);
            }
          },
          getWireframeAttribute: function (t) {
            const e = a.get(t);
            if (e) {
              const n = t.index;
              null !== n && e.version < n.version && o(t);
            } else o(t);
            return a.get(t);
          },
        };
      }
      function ht(t, e, n, i) {
        const r = i.isWebGL2;
        let a, s, o;
        (this.setMode = function (t) {
          a = t;
        }),
          (this.setIndex = function (t) {
            (s = t.type), (o = t.bytesPerElement);
          }),
          (this.render = function (e, i) {
            t.drawElements(a, i, s, e * o), n.update(i, a, 1);
          }),
          (this.renderInstances = function (i, l, c) {
            if (0 === c) return;
            let u, h;
            if (r) (u = t), (h = 'drawElementsInstanced');
            else if (
              ((u = e.get('ANGLE_instanced_arrays')),
              (h = 'drawElementsInstancedANGLE'),
              null === u)
            )
              return void console.error(
                'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
              );
            u[h](a, l, s, i * o, c), n.update(l, a, c);
          });
      }
      function dt(t) {
        const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
          memory: { geometries: 0, textures: 0 },
          render: e,
          programs: null,
          autoReset: !0,
          reset: function () {
            e.frame++,
              (e.calls = 0),
              (e.triangles = 0),
              (e.points = 0),
              (e.lines = 0);
          },
          update: function (n, i, r) {
            switch ((e.calls++, i)) {
              case t.TRIANGLES:
                e.triangles += r * (n / 3);
                break;
              case t.LINES:
                e.lines += r * (n / 2);
                break;
              case t.LINE_STRIP:
                e.lines += r * (n - 1);
                break;
              case t.LINE_LOOP:
                e.lines += r * n;
                break;
              case t.POINTS:
                e.points += r * n;
                break;
              default:
                console.error('THREE.WebGLInfo: Unknown draw mode:', i);
            }
          },
        };
      }
      class pt extends F.x {
        constructor(t = null, e = 1, n = 1, r = 1) {
          super(null),
            (this.image = { data: t, width: e, height: n, depth: r }),
            (this.magFilter = i.Ty),
            (this.minFilter = i.Ty),
            (this.wrapR = i.uW),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      function ft(t, e) {
        return t[0] - e[0];
      }
      function mt(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
      }
      function gt(t, e) {
        let n = 1;
        const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        i instanceof Int8Array
          ? (n = 127)
          : i instanceof Int16Array
          ? (n = 32767)
          : i instanceof Int32Array
          ? (n = 2147483647)
          : console.error(
              'THREE.WebGLMorphtargets: Unsupported morph attribute data type: ',
              i
            ),
          t.divideScalar(n);
      }
      function _t(t, e, n) {
        const r = {},
          a = new Float32Array(8),
          s = new WeakMap(),
          o = new _.L(),
          l = [];
        for (let t = 0; t < 8; t++) l[t] = [t, 0];
        return {
          update: function (c, u, h, d) {
            const p = c.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
              const r =
                  u.morphAttributes.position ||
                  u.morphAttributes.normal ||
                  u.morphAttributes.color,
                a = void 0 !== r ? r.length : 0;
              let l = s.get(u);
              if (void 0 === l || l.count !== a) {
                void 0 !== l && l.texture.dispose();
                const t = void 0 !== u.morphAttributes.position,
                  n = void 0 !== u.morphAttributes.normal,
                  r = void 0 !== u.morphAttributes.color,
                  c = u.morphAttributes.position || [],
                  h = u.morphAttributes.normal || [],
                  d = u.morphAttributes.color || [];
                let p = 0;
                !0 === t && (p = 1), !0 === n && (p = 2), !0 === r && (p = 3);
                let f = u.attributes.position.count * p,
                  m = 1;
                f > e.maxTextureSize &&
                  ((m = Math.ceil(f / e.maxTextureSize)),
                  (f = e.maxTextureSize));
                const _ = new Float32Array(f * m * 4 * a),
                  v = new pt(_, f, m, a);
                (v.format = i.wk), (v.type = i.Vz), (v.needsUpdate = !0);
                const x = 4 * p;
                for (let e = 0; e < a; e++) {
                  const i = c[e],
                    a = h[e],
                    s = d[e],
                    l = f * m * 4 * e;
                  for (let e = 0; e < i.count; e++) {
                    const c = e * x;
                    !0 === t &&
                      (o.fromBufferAttribute(i, e),
                      !0 === i.normalized && gt(o, i),
                      (_[l + c + 0] = o.x),
                      (_[l + c + 1] = o.y),
                      (_[l + c + 2] = o.z),
                      (_[l + c + 3] = 0)),
                      !0 === n &&
                        (o.fromBufferAttribute(a, e),
                        !0 === a.normalized && gt(o, a),
                        (_[l + c + 4] = o.x),
                        (_[l + c + 5] = o.y),
                        (_[l + c + 6] = o.z),
                        (_[l + c + 7] = 0)),
                      !0 === r &&
                        (o.fromBufferAttribute(s, e),
                        !0 === s.normalized && gt(o, a),
                        (_[l + c + 8] = o.x),
                        (_[l + c + 9] = o.y),
                        (_[l + c + 10] = o.z),
                        (_[l + c + 11] = 4 === s.itemSize ? o.w : 1));
                  }
                }
                function y() {
                  v.dispose(), s.delete(u), u.removeEventListener('dispose', y);
                }
                (l = { count: a, texture: v, size: new g.F(f, m) }),
                  s.set(u, l),
                  u.addEventListener('dispose', y);
              }
              let c = 0;
              for (let t = 0; t < p.length; t++) c += p[t];
              const h = u.morphTargetsRelative ? 1 : 1 - c;
              d.getUniforms().setValue(t, 'morphTargetBaseInfluence', h),
                d.getUniforms().setValue(t, 'morphTargetInfluences', p),
                d
                  .getUniforms()
                  .setValue(t, 'morphTargetsTexture', l.texture, n),
                d.getUniforms().setValue(t, 'morphTargetsTextureSize', l.size);
            } else {
              const e = void 0 === p ? 0 : p.length;
              let n = r[u.id];
              if (void 0 === n || n.length !== e) {
                n = [];
                for (let t = 0; t < e; t++) n[t] = [t, 0];
                r[u.id] = n;
              }
              for (let t = 0; t < e; t++) {
                const e = n[t];
                (e[0] = t), (e[1] = p[t]);
              }
              n.sort(mt);
              for (let t = 0; t < 8; t++)
                t < e && n[t][1]
                  ? ((l[t][0] = n[t][0]), (l[t][1] = n[t][1]))
                  : ((l[t][0] = Number.MAX_SAFE_INTEGER), (l[t][1] = 0));
              l.sort(ft);
              const i = u.morphAttributes.position,
                s = u.morphAttributes.normal;
              let o = 0;
              for (let t = 0; t < 8; t++) {
                const e = l[t],
                  n = e[0],
                  r = e[1];
                n !== Number.MAX_SAFE_INTEGER && r
                  ? (i &&
                      u.getAttribute('morphTarget' + t) !== i[n] &&
                      u.setAttribute('morphTarget' + t, i[n]),
                    s &&
                      u.getAttribute('morphNormal' + t) !== s[n] &&
                      u.setAttribute('morphNormal' + t, s[n]),
                    (a[t] = r),
                    (o += r))
                  : (i &&
                      !0 === u.hasAttribute('morphTarget' + t) &&
                      u.deleteAttribute('morphTarget' + t),
                    s &&
                      !0 === u.hasAttribute('morphNormal' + t) &&
                      u.deleteAttribute('morphNormal' + t),
                    (a[t] = 0));
              }
              const c = u.morphTargetsRelative ? 1 : 1 - o;
              d.getUniforms().setValue(t, 'morphTargetBaseInfluence', c),
                d.getUniforms().setValue(t, 'morphTargetInfluences', a);
            }
          },
        };
      }
      function vt(t, e, n, i) {
        let r = new WeakMap();
        function a(t) {
          const e = t.target;
          e.removeEventListener('dispose', a),
            n.remove(e.instanceMatrix),
            null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
          update: function (s) {
            const o = i.render.frame,
              l = s.geometry,
              c = e.get(s, l);
            return (
              r.get(c) !== o && (e.update(c), r.set(c, o)),
              s.isInstancedMesh &&
                (!1 === s.hasEventListener('dispose', a) &&
                  s.addEventListener('dispose', a),
                n.update(s.instanceMatrix, t.ARRAY_BUFFER),
                null !== s.instanceColor &&
                  n.update(s.instanceColor, t.ARRAY_BUFFER)),
              c
            );
          },
          dispose: function () {
            r = new WeakMap();
          },
        };
      }
      pt.prototype.isDataArrayTexture = !0;
      var xt = n(691);
      class yt extends F.x {
        constructor(t = null, e = 1, n = 1, r = 1) {
          super(null),
            (this.image = { data: t, width: e, height: n, depth: r }),
            (this.magFilter = i.Ty),
            (this.minFilter = i.Ty),
            (this.wrapR = i.uW),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      yt.prototype.isData3DTexture = !0;
      const bt = new F.x(),
        Mt = new pt(),
        wt = new yt(),
        St = new W(),
        Et = [],
        Tt = [],
        At = new Float32Array(16),
        Rt = new Float32Array(9),
        Lt = new Float32Array(4);
      function Ct(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let a = Et[r];
        if (
          (void 0 === a && ((a = new Float32Array(r)), (Et[r] = a)), 0 !== e)
        ) {
          i.toArray(a, 0);
          for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
        }
        return a;
      }
      function Pt(t, e) {
        if (t.length !== e.length) return !1;
        for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function Dt(t, e) {
        for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
      }
      function Ot(t, e) {
        let n = Tt[e];
        void 0 === n && ((n = new Int32Array(e)), (Tt[e] = n));
        for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
        return n;
      }
      function Nt(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
      }
      function It(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y) ||
            (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
        else {
          if (Pt(n, e)) return;
          t.uniform2fv(this.addr, e), Dt(n, e);
        }
      }
      function Ut(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
            (t.uniform3f(this.addr, e.x, e.y, e.z),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z));
        else if (void 0 !== e.r)
          (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
            (t.uniform3f(this.addr, e.r, e.g, e.b),
            (n[0] = e.r),
            (n[1] = e.g),
            (n[2] = e.b));
        else {
          if (Pt(n, e)) return;
          t.uniform3fv(this.addr, e), Dt(n, e);
        }
      }
      function Ft(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
            (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z),
            (n[3] = e.w));
        else {
          if (Pt(n, e)) return;
          t.uniform4fv(this.addr, e), Dt(n, e);
        }
      }
      function zt(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Pt(n, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), Dt(n, e);
        } else {
          if (Pt(n, i)) return;
          Lt.set(i), t.uniformMatrix2fv(this.addr, !1, Lt), Dt(n, i);
        }
      }
      function Bt(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Pt(n, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), Dt(n, e);
        } else {
          if (Pt(n, i)) return;
          Rt.set(i), t.uniformMatrix3fv(this.addr, !1, Rt), Dt(n, i);
        }
      }
      function kt(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Pt(n, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), Dt(n, e);
        } else {
          if (Pt(n, i)) return;
          At.set(i), t.uniformMatrix4fv(this.addr, !1, At), Dt(n, i);
        }
      }
      function Gt(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
      }
      function Ht(t, e) {
        const n = this.cache;
        Pt(n, e) || (t.uniform2iv(this.addr, e), Dt(n, e));
      }
      function Vt(t, e) {
        const n = this.cache;
        Pt(n, e) || (t.uniform3iv(this.addr, e), Dt(n, e));
      }
      function Wt(t, e) {
        const n = this.cache;
        Pt(n, e) || (t.uniform4iv(this.addr, e), Dt(n, e));
      }
      function Xt(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
      }
      function jt(t, e) {
        const n = this.cache;
        Pt(n, e) || (t.uniform2uiv(this.addr, e), Dt(n, e));
      }
      function qt(t, e) {
        const n = this.cache;
        Pt(n, e) || (t.uniform3uiv(this.addr, e), Dt(n, e));
      }
      function Yt(t, e) {
        const n = this.cache;
        Pt(n, e) || (t.uniform4uiv(this.addr, e), Dt(n, e));
      }
      function Zt(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture2D(e || bt, r);
      }
      function Kt(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture3D(e || wt, r);
      }
      function Jt(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTextureCube(e || St, r);
      }
      function $t(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture2DArray(e || Mt, r);
      }
      function Qt(t, e) {
        t.uniform1fv(this.addr, e);
      }
      function te(t, e) {
        const n = Ct(e, this.size, 2);
        t.uniform2fv(this.addr, n);
      }
      function ee(t, e) {
        const n = Ct(e, this.size, 3);
        t.uniform3fv(this.addr, n);
      }
      function ne(t, e) {
        const n = Ct(e, this.size, 4);
        t.uniform4fv(this.addr, n);
      }
      function ie(t, e) {
        const n = Ct(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n);
      }
      function re(t, e) {
        const n = Ct(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n);
      }
      function ae(t, e) {
        const n = Ct(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n);
      }
      function se(t, e) {
        t.uniform1iv(this.addr, e);
      }
      function oe(t, e) {
        t.uniform2iv(this.addr, e);
      }
      function le(t, e) {
        t.uniform3iv(this.addr, e);
      }
      function ce(t, e) {
        t.uniform4iv(this.addr, e);
      }
      function ue(t, e) {
        t.uniform1uiv(this.addr, e);
      }
      function he(t, e) {
        t.uniform2uiv(this.addr, e);
      }
      function de(t, e) {
        t.uniform3uiv(this.addr, e);
      }
      function pe(t, e) {
        t.uniform4uiv(this.addr, e);
      }
      function fe(t, e, n) {
        const i = e.length,
          r = Ot(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTexture2D(e[t] || bt, r[t]);
      }
      function me(t, e, n) {
        const i = e.length,
          r = Ot(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTexture3D(e[t] || wt, r[t]);
      }
      function ge(t, e, n) {
        const i = e.length,
          r = Ot(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTextureCube(e[t] || St, r[t]);
      }
      function _e(t, e, n) {
        const i = e.length,
          r = Ot(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTexture2DArray(e[t] || Mt, r[t]);
      }
      function ve(t, e, n) {
        (this.id = t),
          (this.addr = n),
          (this.cache = []),
          (this.setValue = (function (t) {
            switch (t) {
              case 5126:
                return Nt;
              case 35664:
                return It;
              case 35665:
                return Ut;
              case 35666:
                return Ft;
              case 35674:
                return zt;
              case 35675:
                return Bt;
              case 35676:
                return kt;
              case 5124:
              case 35670:
                return Gt;
              case 35667:
              case 35671:
                return Ht;
              case 35668:
              case 35672:
                return Vt;
              case 35669:
              case 35673:
                return Wt;
              case 5125:
                return Xt;
              case 36294:
                return jt;
              case 36295:
                return qt;
              case 36296:
                return Yt;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return Zt;
              case 35679:
              case 36299:
              case 36307:
                return Kt;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return Jt;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return $t;
            }
          })(e.type));
      }
      function xe(t, e, n) {
        (this.id = t),
          (this.addr = n),
          (this.cache = []),
          (this.size = e.size),
          (this.setValue = (function (t) {
            switch (t) {
              case 5126:
                return Qt;
              case 35664:
                return te;
              case 35665:
                return ee;
              case 35666:
                return ne;
              case 35674:
                return ie;
              case 35675:
                return re;
              case 35676:
                return ae;
              case 5124:
              case 35670:
                return se;
              case 35667:
              case 35671:
                return oe;
              case 35668:
              case 35672:
                return le;
              case 35669:
              case 35673:
                return ce;
              case 5125:
                return ue;
              case 36294:
                return he;
              case 36295:
                return de;
              case 36296:
                return pe;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return fe;
              case 35679:
              case 36299:
              case 36307:
                return me;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return ge;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return _e;
            }
          })(e.type));
      }
      function ye(t) {
        (this.id = t), (this.seq = []), (this.map = {});
      }
      (xe.prototype.updateCache = function (t) {
        const e = this.cache;
        t instanceof Float32Array &&
          e.length !== t.length &&
          (this.cache = new Float32Array(t.length)),
          Dt(e, t);
      }),
        (ye.prototype.setValue = function (t, e, n) {
          const i = this.seq;
          for (let r = 0, a = i.length; r !== a; ++r) {
            const a = i[r];
            a.setValue(t, e[a.id], n);
          }
        });
      const be = /(\w+)(\])?(\[|\.)?/g;
      function Me(t, e) {
        t.seq.push(e), (t.map[e.id] = e);
      }
      function we(t, e, n) {
        const i = t.name,
          r = i.length;
        for (be.lastIndex = 0; ; ) {
          const a = be.exec(i),
            s = be.lastIndex;
          let o = a[1];
          const l = ']' === a[2],
            c = a[3];
          if ((l && (o |= 0), void 0 === c || ('[' === c && s + 2 === r))) {
            Me(n, void 0 === c ? new ve(o, t, e) : new xe(o, t, e));
            break;
          }
          {
            let t = n.map[o];
            void 0 === t && ((t = new ye(o)), Me(n, t)), (n = t);
          }
        }
      }
      function Se(t, e) {
        (this.seq = []), (this.map = {});
        const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (let i = 0; i < n; ++i) {
          const n = t.getActiveUniform(e, i);
          we(n, t.getUniformLocation(e, n.name), this);
        }
      }
      function Ee(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i;
      }
      (Se.prototype.setValue = function (t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i);
      }),
        (Se.prototype.setOptional = function (t, e, n) {
          const i = e[n];
          void 0 !== i && this.setValue(t, n, i);
        }),
        (Se.upload = function (t, e, n, i) {
          for (let r = 0, a = e.length; r !== a; ++r) {
            const a = e[r],
              s = n[a.id];
            !1 !== s.needsUpdate && a.setValue(t, s.value, i);
          }
        }),
        (Se.seqWithValue = function (t, e) {
          const n = [];
          for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r);
          }
          return n;
        });
      let Te = 0;
      function Ae(t, e, n) {
        const i = t.getShaderParameter(e, t.COMPILE_STATUS),
          r = t.getShaderInfoLog(e).trim();
        return i && '' === r
          ? ''
          : n.toUpperCase() +
              '\n\n' +
              r +
              '\n\n' +
              (function (t) {
                const e = t.split('\n');
                for (let t = 0; t < e.length; t++) e[t] = t + 1 + ': ' + e[t];
                return e.join('\n');
              })(t.getShaderSource(e));
      }
      function Re(t, e) {
        const n = (function (t) {
          switch (t) {
            case i.rn:
              return ['Linear', '( value )'];
            case i.kn:
              return ['sRGB', '( value )'];
            default:
              return (
                console.warn('THREE.WebGLProgram: Unsupported encoding:', t),
                ['Linear', '( value )']
              );
          }
        })(e);
        return (
          'vec4 ' + t + '( vec4 value ) { return LinearTo' + n[0] + n[1] + '; }'
        );
      }
      function Le(t, e) {
        let n;
        switch (e) {
          case i.Eo:
            n = 'Linear';
            break;
          case i.Cd:
            n = 'Reinhard';
            break;
          case i.YG:
            n = 'OptimizedCineon';
            break;
          case i.LY:
            n = 'ACESFilmic';
            break;
          case i.dZ:
            n = 'Custom';
            break;
          default:
            console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
              (n = 'Linear');
        }
        return (
          'vec3 ' +
          t +
          '( vec3 color ) { return ' +
          n +
          'ToneMapping( color ); }'
        );
      }
      function Ce(t) {
        return '' !== t;
      }
      function Pe(t, e) {
        return t
          .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
          .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
          .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
          .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
          .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
          .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
          .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
          .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
      }
      function De(t, e) {
        return t
          .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
          .replace(
            /UNION_CLIPPING_PLANES/g,
            e.numClippingPlanes - e.numClipIntersection
          );
      }
      const Oe = /^[ \t]*#include +<([\w\d./]+)>/gm;
      function Ne(t) {
        return t.replace(Oe, Ie);
      }
      function Ie(t, e) {
        const n = A[e];
        if (void 0 === n)
          throw new Error('Can not resolve #include <' + e + '>');
        return Ne(n);
      }
      const Ue =
          /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        Fe =
          /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
      function ze(t) {
        return t.replace(Fe, ke).replace(Ue, Be);
      }
      function Be(t, e, n, i) {
        return (
          console.warn(
            'WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.'
          ),
          ke(0, e, n, i)
        );
      }
      function ke(t, e, n, i) {
        let r = '';
        for (let t = parseInt(e); t < parseInt(n); t++)
          r += i
            .replace(/\[\s*i\s*\]/g, '[ ' + t + ' ]')
            .replace(/UNROLLED_LOOP_INDEX/g, t);
        return r;
      }
      function Ge(t) {
        let e =
          'precision ' +
          t.precision +
          ' float;\nprecision ' +
          t.precision +
          ' int;';
        return (
          'highp' === t.precision
            ? (e += '\n#define HIGH_PRECISION')
            : 'mediump' === t.precision
            ? (e += '\n#define MEDIUM_PRECISION')
            : 'lowp' === t.precision && (e += '\n#define LOW_PRECISION'),
          e
        );
      }
      function He(t, e, n, r) {
        const a = t.getContext(),
          s = n.defines;
        let o = n.vertexShader,
          l = n.fragmentShader;
        const c = (function (t) {
            let e = 'SHADOWMAP_TYPE_BASIC';
            return (
              t.shadowMapType === i._i
                ? (e = 'SHADOWMAP_TYPE_PCF')
                : t.shadowMapType === i.nt
                ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
                : t.shadowMapType === i.dw && (e = 'SHADOWMAP_TYPE_VSM'),
              e
            );
          })(n),
          u = (function (t) {
            let e = 'ENVMAP_TYPE_CUBE';
            if (t.envMap)
              switch (t.envMapMode) {
                case i.fY:
                case i.vx:
                  e = 'ENVMAP_TYPE_CUBE';
                  break;
                case i.g8:
                case i.SV:
                  e = 'ENVMAP_TYPE_CUBE_UV';
              }
            return e;
          })(n),
          h = (function (t) {
            let e = 'ENVMAP_MODE_REFLECTION';
            if (t.envMap)
              switch (t.envMapMode) {
                case i.vx:
                case i.SV:
                  e = 'ENVMAP_MODE_REFRACTION';
              }
            return e;
          })(n),
          d = (function (t) {
            let e = 'ENVMAP_BLENDING_NONE';
            if (t.envMap)
              switch (t.combine) {
                case i.Ns:
                  e = 'ENVMAP_BLENDING_MULTIPLY';
                  break;
                case i.qh:
                  e = 'ENVMAP_BLENDING_MIX';
                  break;
                case i.ND:
                  e = 'ENVMAP_BLENDING_ADD';
              }
            return e;
          })(n),
          p = (function (t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e / 32 + 1) + 3,
              i = 1 / e;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
              texelHeight: i,
              maxMip: n,
            };
          })(n),
          f = n.isWebGL2
            ? ''
            : (function (t) {
                return [
                  t.extensionDerivatives ||
                  t.envMapCubeUVHeight ||
                  t.bumpMap ||
                  t.tangentSpaceNormalMap ||
                  t.clearcoatNormalMap ||
                  t.flatShading ||
                  'physical' === t.shaderID
                    ? '#extension GL_OES_standard_derivatives : enable'
                    : '',
                  (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
                  t.rendererExtensionFragDepth
                    ? '#extension GL_EXT_frag_depth : enable'
                    : '',
                  t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                    ? '#extension GL_EXT_draw_buffers : require'
                    : '',
                  (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
                  t.rendererExtensionShaderTextureLod
                    ? '#extension GL_EXT_shader_texture_lod : enable'
                    : '',
                ]
                  .filter(Ce)
                  .join('\n');
              })(n),
          m = (function (t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              !1 !== i && e.push('#define ' + n + ' ' + i);
            }
            return e.join('\n');
          })(s),
          g = a.createProgram();
        let _,
          v,
          x = n.glslVersion ? '#version ' + n.glslVersion + '\n' : '';
        n.isRawShaderMaterial
          ? ((_ = [m].filter(Ce).join('\n')),
            _.length > 0 && (_ += '\n'),
            (v = [f, m].filter(Ce).join('\n')),
            v.length > 0 && (v += '\n'))
          : ((_ = [
              Ge(n),
              '#define SHADER_NAME ' + n.shaderName,
              m,
              n.instancing ? '#define USE_INSTANCING' : '',
              n.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
              n.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
              '#define MAX_BONES ' + n.maxBones,
              n.useFog && n.fog ? '#define USE_FOG' : '',
              n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
              n.map ? '#define USE_MAP' : '',
              n.envMap ? '#define USE_ENVMAP' : '',
              n.envMap ? '#define ' + h : '',
              n.lightMap ? '#define USE_LIGHTMAP' : '',
              n.aoMap ? '#define USE_AOMAP' : '',
              n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
              n.bumpMap ? '#define USE_BUMPMAP' : '',
              n.normalMap ? '#define USE_NORMALMAP' : '',
              n.normalMap && n.objectSpaceNormalMap
                ? '#define OBJECTSPACE_NORMALMAP'
                : '',
              n.normalMap && n.tangentSpaceNormalMap
                ? '#define TANGENTSPACE_NORMALMAP'
                : '',
              n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
              n.clearcoatRoughnessMap
                ? '#define USE_CLEARCOAT_ROUGHNESSMAP'
                : '',
              n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
              n.displacementMap && n.supportsVertexTextures
                ? '#define USE_DISPLACEMENTMAP'
                : '',
              n.specularMap ? '#define USE_SPECULARMAP' : '',
              n.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
              n.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
              n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
              n.metalnessMap ? '#define USE_METALNESSMAP' : '',
              n.alphaMap ? '#define USE_ALPHAMAP' : '',
              n.transmission ? '#define USE_TRANSMISSION' : '',
              n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
              n.thicknessMap ? '#define USE_THICKNESSMAP' : '',
              n.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
              n.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
              n.vertexTangents ? '#define USE_TANGENT' : '',
              n.vertexColors ? '#define USE_COLOR' : '',
              n.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
              n.vertexUvs ? '#define USE_UV' : '',
              n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
              n.flatShading ? '#define FLAT_SHADED' : '',
              n.skinning ? '#define USE_SKINNING' : '',
              n.useVertexTexture ? '#define BONE_TEXTURE' : '',
              n.morphTargets ? '#define USE_MORPHTARGETS' : '',
              n.morphNormals && !1 === n.flatShading
                ? '#define USE_MORPHNORMALS'
                : '',
              n.morphColors && n.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
              n.morphTargetsCount > 0 && n.isWebGL2
                ? '#define MORPHTARGETS_TEXTURE'
                : '',
              n.morphTargetsCount > 0 && n.isWebGL2
                ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + n.morphTextureStride
                : '',
              n.morphTargetsCount > 0 && n.isWebGL2
                ? '#define MORPHTARGETS_COUNT ' + n.morphTargetsCount
                : '',
              n.doubleSided ? '#define DOUBLE_SIDED' : '',
              n.flipSided ? '#define FLIP_SIDED' : '',
              n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
              n.shadowMapEnabled ? '#define ' + c : '',
              n.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
              n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
              n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
                ? '#define USE_LOGDEPTHBUF_EXT'
                : '',
              'uniform mat4 modelMatrix;',
              'uniform mat4 modelViewMatrix;',
              'uniform mat4 projectionMatrix;',
              'uniform mat4 viewMatrix;',
              'uniform mat3 normalMatrix;',
              'uniform vec3 cameraPosition;',
              'uniform bool isOrthographic;',
              '#ifdef USE_INSTANCING',
              '\tattribute mat4 instanceMatrix;',
              '#endif',
              '#ifdef USE_INSTANCING_COLOR',
              '\tattribute vec3 instanceColor;',
              '#endif',
              'attribute vec3 position;',
              'attribute vec3 normal;',
              'attribute vec2 uv;',
              '#ifdef USE_TANGENT',
              '\tattribute vec4 tangent;',
              '#endif',
              '#if defined( USE_COLOR_ALPHA )',
              '\tattribute vec4 color;',
              '#elif defined( USE_COLOR )',
              '\tattribute vec3 color;',
              '#endif',
              '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
              '\tattribute vec3 morphTarget0;',
              '\tattribute vec3 morphTarget1;',
              '\tattribute vec3 morphTarget2;',
              '\tattribute vec3 morphTarget3;',
              '\t#ifdef USE_MORPHNORMALS',
              '\t\tattribute vec3 morphNormal0;',
              '\t\tattribute vec3 morphNormal1;',
              '\t\tattribute vec3 morphNormal2;',
              '\t\tattribute vec3 morphNormal3;',
              '\t#else',
              '\t\tattribute vec3 morphTarget4;',
              '\t\tattribute vec3 morphTarget5;',
              '\t\tattribute vec3 morphTarget6;',
              '\t\tattribute vec3 morphTarget7;',
              '\t#endif',
              '#endif',
              '#ifdef USE_SKINNING',
              '\tattribute vec4 skinIndex;',
              '\tattribute vec4 skinWeight;',
              '#endif',
              '\n',
            ]
              .filter(Ce)
              .join('\n')),
            (v = [
              f,
              Ge(n),
              '#define SHADER_NAME ' + n.shaderName,
              m,
              n.useFog && n.fog ? '#define USE_FOG' : '',
              n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
              n.map ? '#define USE_MAP' : '',
              n.matcap ? '#define USE_MATCAP' : '',
              n.envMap ? '#define USE_ENVMAP' : '',
              n.envMap ? '#define ' + u : '',
              n.envMap ? '#define ' + h : '',
              n.envMap ? '#define ' + d : '',
              p ? '#define CUBEUV_TEXEL_WIDTH ' + p.texelWidth : '',
              p ? '#define CUBEUV_TEXEL_HEIGHT ' + p.texelHeight : '',
              p ? '#define CUBEUV_MAX_MIP ' + p.maxMip + '.0' : '',
              n.lightMap ? '#define USE_LIGHTMAP' : '',
              n.aoMap ? '#define USE_AOMAP' : '',
              n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
              n.bumpMap ? '#define USE_BUMPMAP' : '',
              n.normalMap ? '#define USE_NORMALMAP' : '',
              n.normalMap && n.objectSpaceNormalMap
                ? '#define OBJECTSPACE_NORMALMAP'
                : '',
              n.normalMap && n.tangentSpaceNormalMap
                ? '#define TANGENTSPACE_NORMALMAP'
                : '',
              n.clearcoat ? '#define USE_CLEARCOAT' : '',
              n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
              n.clearcoatRoughnessMap
                ? '#define USE_CLEARCOAT_ROUGHNESSMAP'
                : '',
              n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
              n.specularMap ? '#define USE_SPECULARMAP' : '',
              n.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
              n.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
              n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
              n.metalnessMap ? '#define USE_METALNESSMAP' : '',
              n.alphaMap ? '#define USE_ALPHAMAP' : '',
              n.alphaTest ? '#define USE_ALPHATEST' : '',
              n.sheen ? '#define USE_SHEEN' : '',
              n.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
              n.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
              n.transmission ? '#define USE_TRANSMISSION' : '',
              n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
              n.thicknessMap ? '#define USE_THICKNESSMAP' : '',
              n.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
              n.vertexTangents ? '#define USE_TANGENT' : '',
              n.vertexColors || n.instancingColor ? '#define USE_COLOR' : '',
              n.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
              n.vertexUvs ? '#define USE_UV' : '',
              n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
              n.gradientMap ? '#define USE_GRADIENTMAP' : '',
              n.flatShading ? '#define FLAT_SHADED' : '',
              n.doubleSided ? '#define DOUBLE_SIDED' : '',
              n.flipSided ? '#define FLIP_SIDED' : '',
              n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
              n.shadowMapEnabled ? '#define ' + c : '',
              n.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
              n.physicallyCorrectLights
                ? '#define PHYSICALLY_CORRECT_LIGHTS'
                : '',
              n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
              n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
                ? '#define USE_LOGDEPTHBUF_EXT'
                : '',
              'uniform mat4 viewMatrix;',
              'uniform vec3 cameraPosition;',
              'uniform bool isOrthographic;',
              n.toneMapping !== i.uL ? '#define TONE_MAPPING' : '',
              n.toneMapping !== i.uL ? A.tonemapping_pars_fragment : '',
              n.toneMapping !== i.uL ? Le('toneMapping', n.toneMapping) : '',
              n.dithering ? '#define DITHERING' : '',
              n.opaque ? '#define OPAQUE' : '',
              A.encodings_pars_fragment,
              Re('linearToOutputTexel', n.outputEncoding),
              n.depthPacking ? '#define DEPTH_PACKING ' + n.depthPacking : '',
              '\n',
            ]
              .filter(Ce)
              .join('\n'))),
          (o = Ne(o)),
          (o = Pe(o, n)),
          (o = De(o, n)),
          (l = Ne(l)),
          (l = Pe(l, n)),
          (l = De(l, n)),
          (o = ze(o)),
          (l = ze(l)),
          n.isWebGL2 &&
            !0 !== n.isRawShaderMaterial &&
            ((x = '#version 300 es\n'),
            (_ =
              [
                'precision mediump sampler2DArray;',
                '#define attribute in',
                '#define varying out',
                '#define texture2D texture',
              ].join('\n') +
              '\n' +
              _),
            (v =
              [
                '#define varying in',
                n.glslVersion === i.LS
                  ? ''
                  : 'layout(location = 0) out highp vec4 pc_fragColor;',
                n.glslVersion === i.LS
                  ? ''
                  : '#define gl_FragColor pc_fragColor',
                '#define gl_FragDepthEXT gl_FragDepth',
                '#define texture2D texture',
                '#define textureCube texture',
                '#define texture2DProj textureProj',
                '#define texture2DLodEXT textureLod',
                '#define texture2DProjLodEXT textureProjLod',
                '#define textureCubeLodEXT textureLod',
                '#define texture2DGradEXT textureGrad',
                '#define texture2DProjGradEXT textureProjGrad',
                '#define textureCubeGradEXT textureGrad',
              ].join('\n') +
              '\n' +
              v));
        const y = x + _ + o,
          b = x + v + l,
          M = Ee(a, a.VERTEX_SHADER, y),
          w = Ee(a, a.FRAGMENT_SHADER, b);
        if (
          (a.attachShader(g, M),
          a.attachShader(g, w),
          void 0 !== n.index0AttributeName
            ? a.bindAttribLocation(g, 0, n.index0AttributeName)
            : !0 === n.morphTargets && a.bindAttribLocation(g, 0, 'position'),
          a.linkProgram(g),
          t.debug.checkShaderErrors)
        ) {
          const t = a.getProgramInfoLog(g).trim(),
            e = a.getShaderInfoLog(M).trim(),
            n = a.getShaderInfoLog(w).trim();
          let i = !0,
            r = !0;
          if (!1 === a.getProgramParameter(g, a.LINK_STATUS)) {
            i = !1;
            const e = Ae(a, M, 'vertex'),
              n = Ae(a, w, 'fragment');
            console.error(
              'THREE.WebGLProgram: Shader Error ' +
                a.getError() +
                ' - VALIDATE_STATUS ' +
                a.getProgramParameter(g, a.VALIDATE_STATUS) +
                '\n\nProgram Info Log: ' +
                t +
                '\n' +
                e +
                '\n' +
                n
            );
          } else
            '' !== t
              ? console.warn('THREE.WebGLProgram: Program Info Log:', t)
              : ('' !== e && '' !== n) || (r = !1);
          r &&
            (this.diagnostics = {
              runnable: i,
              programLog: t,
              vertexShader: { log: e, prefix: _ },
              fragmentShader: { log: n, prefix: v },
            });
        }
        let S, E;
        return (
          a.deleteShader(M),
          a.deleteShader(w),
          (this.getUniforms = function () {
            return void 0 === S && (S = new Se(a, g)), S;
          }),
          (this.getAttributes = function () {
            return (
              void 0 === E &&
                (E = (function (t, e) {
                  const n = {},
                    i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
                  for (let r = 0; r < i; r++) {
                    const i = t.getActiveAttrib(e, r),
                      a = i.name;
                    let s = 1;
                    i.type === t.FLOAT_MAT2 && (s = 2),
                      i.type === t.FLOAT_MAT3 && (s = 3),
                      i.type === t.FLOAT_MAT4 && (s = 4),
                      (n[a] = {
                        type: i.type,
                        location: t.getAttribLocation(e, a),
                        locationSize: s,
                      });
                  }
                  return n;
                })(a, g)),
              E
            );
          }),
          (this.destroy = function () {
            r.releaseStatesOfProgram(this),
              a.deleteProgram(g),
              (this.program = void 0);
          }),
          (this.name = n.shaderName),
          (this.id = Te++),
          (this.cacheKey = e),
          (this.usedTimes = 1),
          (this.program = g),
          (this.vertexShader = M),
          (this.fragmentShader = w),
          this
        );
      }
      let Ve = 0;
      class We {
        constructor() {
          (this.shaderCache = new Map()), (this.materialCache = new Map());
        }
        update(t) {
          const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            a = this._getShaderCacheForMaterial(t);
          return (
            !1 === a.has(i) && (a.add(i), i.usedTimes++),
            !1 === a.has(r) && (a.add(r), r.usedTimes++),
            this
          );
        }
        remove(t) {
          const e = this.materialCache.get(t);
          for (const t of e)
            t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t);
          return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
          return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
          return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
          this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
          const e = this.materialCache;
          return !1 === e.has(t) && e.set(t, new Set()), e.get(t);
        }
        _getShaderStage(t) {
          const e = this.shaderCache;
          if (!1 === e.has(t)) {
            const n = new Xe();
            e.set(t, n);
          }
          return e.get(t);
        }
      }
      class Xe {
        constructor() {
          (this.id = Ve++), (this.usedTimes = 0);
        }
      }
      function je(t, e, n, r, a, s, o) {
        const l = new xt.S(),
          c = new We(),
          u = [],
          h = a.isWebGL2,
          d = a.logarithmicDepthBuffer,
          p = a.floatVertexTextures,
          f = a.maxVertexUniforms,
          m = a.vertexTextures;
        let g = a.precision;
        const _ = {
          MeshDepthMaterial: 'depth',
          MeshDistanceMaterial: 'distanceRGBA',
          MeshNormalMaterial: 'normal',
          MeshBasicMaterial: 'basic',
          MeshLambertMaterial: 'lambert',
          MeshPhongMaterial: 'phong',
          MeshToonMaterial: 'toon',
          MeshStandardMaterial: 'physical',
          MeshPhysicalMaterial: 'physical',
          MeshMatcapMaterial: 'matcap',
          LineBasicMaterial: 'basic',
          LineDashedMaterial: 'dashed',
          PointsMaterial: 'points',
          ShadowMaterial: 'shadow',
          SpriteMaterial: 'sprite',
        };
        return {
          getParameters: function (s, l, u, v, x) {
            const y = v.fog,
              b = x.geometry,
              M = s.isMeshStandardMaterial ? v.environment : null,
              w = (s.isMeshStandardMaterial ? n : e).get(s.envMap || M),
              S =
                !w || (w.mapping !== i.g8 && w.mapping !== i.SV)
                  ? null
                  : w.image.height,
              E = _[s.type],
              T = x.isSkinnedMesh
                ? (function (t) {
                    const e = t.skeleton.bones;
                    if (p) return 1024;
                    {
                      const t = f,
                        n = Math.floor((t - 20) / 4),
                        i = Math.min(n, e.length);
                      return i < e.length
                        ? (console.warn(
                            'THREE.WebGLRenderer: Skeleton has ' +
                              e.length +
                              ' bones. This GPU supports ' +
                              i +
                              '.'
                          ),
                          0)
                        : i;
                    }
                  })(x)
                : 0;
            null !== s.precision &&
              ((g = a.getMaxPrecision(s.precision)),
              g !== s.precision &&
                console.warn(
                  'THREE.WebGLProgram.getParameters:',
                  s.precision,
                  'not supported, using',
                  g,
                  'instead.'
                ));
            const A =
                b.morphAttributes.position ||
                b.morphAttributes.normal ||
                b.morphAttributes.color,
              R = void 0 !== A ? A.length : 0;
            let L,
              P,
              D,
              O,
              N = 0;
            if (
              (void 0 !== b.morphAttributes.position && (N = 1),
              void 0 !== b.morphAttributes.normal && (N = 2),
              void 0 !== b.morphAttributes.color && (N = 3),
              E)
            ) {
              const t = C[E];
              (L = t.vertexShader), (P = t.fragmentShader);
            } else
              (L = s.vertexShader),
                (P = s.fragmentShader),
                c.update(s),
                (D = c.getVertexShaderID(s)),
                (O = c.getFragmentShaderID(s));
            const I = t.getRenderTarget(),
              U = s.alphaTest > 0,
              F = s.clearcoat > 0;
            return {
              isWebGL2: h,
              shaderID: E,
              shaderName: s.type,
              vertexShader: L,
              fragmentShader: P,
              defines: s.defines,
              customVertexShaderID: D,
              customFragmentShaderID: O,
              isRawShaderMaterial: !0 === s.isRawShaderMaterial,
              glslVersion: s.glslVersion,
              precision: g,
              instancing: !0 === x.isInstancedMesh,
              instancingColor:
                !0 === x.isInstancedMesh && null !== x.instanceColor,
              supportsVertexTextures: m,
              outputEncoding:
                null === I
                  ? t.outputEncoding
                  : !0 === I.isXRRenderTarget
                  ? I.texture.encoding
                  : i.rn,
              map: !!s.map,
              matcap: !!s.matcap,
              envMap: !!w,
              envMapMode: w && w.mapping,
              envMapCubeUVHeight: S,
              lightMap: !!s.lightMap,
              aoMap: !!s.aoMap,
              emissiveMap: !!s.emissiveMap,
              bumpMap: !!s.bumpMap,
              normalMap: !!s.normalMap,
              objectSpaceNormalMap: s.normalMapType === i.PA,
              tangentSpaceNormalMap: s.normalMapType === i.IO,
              decodeVideoTexture:
                !!s.map &&
                !0 === s.map.isVideoTexture &&
                s.map.encoding === i.kn,
              clearcoat: F,
              clearcoatMap: F && !!s.clearcoatMap,
              clearcoatRoughnessMap: F && !!s.clearcoatRoughnessMap,
              clearcoatNormalMap: F && !!s.clearcoatNormalMap,
              displacementMap: !!s.displacementMap,
              roughnessMap: !!s.roughnessMap,
              metalnessMap: !!s.metalnessMap,
              specularMap: !!s.specularMap,
              specularIntensityMap: !!s.specularIntensityMap,
              specularColorMap: !!s.specularColorMap,
              opaque: !1 === s.transparent && s.blending === i.bd,
              alphaMap: !!s.alphaMap,
              alphaTest: U,
              gradientMap: !!s.gradientMap,
              sheen: s.sheen > 0,
              sheenColorMap: !!s.sheenColorMap,
              sheenRoughnessMap: !!s.sheenRoughnessMap,
              transmission: s.transmission > 0,
              transmissionMap: !!s.transmissionMap,
              thicknessMap: !!s.thicknessMap,
              combine: s.combine,
              vertexTangents: !!s.normalMap && !!b.attributes.tangent,
              vertexColors: s.vertexColors,
              vertexAlphas:
                !0 === s.vertexColors &&
                !!b.attributes.color &&
                4 === b.attributes.color.itemSize,
              vertexUvs: !!(
                s.map ||
                s.bumpMap ||
                s.normalMap ||
                s.specularMap ||
                s.alphaMap ||
                s.emissiveMap ||
                s.roughnessMap ||
                s.metalnessMap ||
                s.clearcoatMap ||
                s.clearcoatRoughnessMap ||
                s.clearcoatNormalMap ||
                s.displacementMap ||
                s.transmissionMap ||
                s.thicknessMap ||
                s.specularIntensityMap ||
                s.specularColorMap ||
                s.sheenColorMap ||
                s.sheenRoughnessMap
              ),
              uvsVertexOnly: !(
                s.map ||
                s.bumpMap ||
                s.normalMap ||
                s.specularMap ||
                s.alphaMap ||
                s.emissiveMap ||
                s.roughnessMap ||
                s.metalnessMap ||
                s.clearcoatNormalMap ||
                s.transmission > 0 ||
                s.transmissionMap ||
                s.thicknessMap ||
                s.specularIntensityMap ||
                s.specularColorMap ||
                s.sheen > 0 ||
                s.sheenColorMap ||
                s.sheenRoughnessMap ||
                !s.displacementMap
              ),
              fog: !!y,
              useFog: s.fog,
              fogExp2: y && y.isFogExp2,
              flatShading: !!s.flatShading,
              sizeAttenuation: s.sizeAttenuation,
              logarithmicDepthBuffer: d,
              skinning: !0 === x.isSkinnedMesh && T > 0,
              maxBones: T,
              useVertexTexture: p,
              morphTargets: void 0 !== b.morphAttributes.position,
              morphNormals: void 0 !== b.morphAttributes.normal,
              morphColors: void 0 !== b.morphAttributes.color,
              morphTargetsCount: R,
              morphTextureStride: N,
              numDirLights: l.directional.length,
              numPointLights: l.point.length,
              numSpotLights: l.spot.length,
              numRectAreaLights: l.rectArea.length,
              numHemiLights: l.hemi.length,
              numDirLightShadows: l.directionalShadowMap.length,
              numPointLightShadows: l.pointShadowMap.length,
              numSpotLightShadows: l.spotShadowMap.length,
              numClippingPlanes: o.numPlanes,
              numClipIntersection: o.numIntersection,
              dithering: s.dithering,
              shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
              shadowMapType: t.shadowMap.type,
              toneMapping: s.toneMapped ? t.toneMapping : i.uL,
              physicallyCorrectLights: t.physicallyCorrectLights,
              premultipliedAlpha: s.premultipliedAlpha,
              doubleSided: s.side === i.eh,
              flipSided: s.side === i._L,
              depthPacking: void 0 !== s.depthPacking && s.depthPacking,
              index0AttributeName: s.index0AttributeName,
              extensionDerivatives: s.extensions && s.extensions.derivatives,
              extensionFragDepth: s.extensions && s.extensions.fragDepth,
              extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
              extensionShaderTextureLOD:
                s.extensions && s.extensions.shaderTextureLOD,
              rendererExtensionFragDepth: h || r.has('EXT_frag_depth'),
              rendererExtensionDrawBuffers: h || r.has('WEBGL_draw_buffers'),
              rendererExtensionShaderTextureLod:
                h || r.has('EXT_shader_texture_lod'),
              customProgramCacheKey: s.customProgramCacheKey(),
            };
          },
          getProgramCacheKey: function (e) {
            const n = [];
            if (
              (e.shaderID
                ? n.push(e.shaderID)
                : (n.push(e.customVertexShaderID),
                  n.push(e.customFragmentShaderID)),
              void 0 !== e.defines)
            )
              for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return (
              !1 === e.isRawShaderMaterial &&
                ((function (t, e) {
                  t.push(e.precision),
                    t.push(e.outputEncoding),
                    t.push(e.envMapMode),
                    t.push(e.envMapCubeUVHeight),
                    t.push(e.combine),
                    t.push(e.vertexUvs),
                    t.push(e.fogExp2),
                    t.push(e.sizeAttenuation),
                    t.push(e.maxBones),
                    t.push(e.morphTargetsCount),
                    t.push(e.morphAttributeCount),
                    t.push(e.numDirLights),
                    t.push(e.numPointLights),
                    t.push(e.numSpotLights),
                    t.push(e.numHemiLights),
                    t.push(e.numRectAreaLights),
                    t.push(e.numDirLightShadows),
                    t.push(e.numPointLightShadows),
                    t.push(e.numSpotLightShadows),
                    t.push(e.shadowMapType),
                    t.push(e.toneMapping),
                    t.push(e.numClippingPlanes),
                    t.push(e.numClipIntersection);
                })(n, e),
                (function (t, e) {
                  l.disableAll(),
                    e.isWebGL2 && l.enable(0),
                    e.supportsVertexTextures && l.enable(1),
                    e.instancing && l.enable(2),
                    e.instancingColor && l.enable(3),
                    e.map && l.enable(4),
                    e.matcap && l.enable(5),
                    e.envMap && l.enable(6),
                    e.lightMap && l.enable(7),
                    e.aoMap && l.enable(8),
                    e.emissiveMap && l.enable(9),
                    e.bumpMap && l.enable(10),
                    e.normalMap && l.enable(11),
                    e.objectSpaceNormalMap && l.enable(12),
                    e.tangentSpaceNormalMap && l.enable(13),
                    e.clearcoat && l.enable(14),
                    e.clearcoatMap && l.enable(15),
                    e.clearcoatRoughnessMap && l.enable(16),
                    e.clearcoatNormalMap && l.enable(17),
                    e.displacementMap && l.enable(18),
                    e.specularMap && l.enable(19),
                    e.roughnessMap && l.enable(20),
                    e.metalnessMap && l.enable(21),
                    e.gradientMap && l.enable(22),
                    e.alphaMap && l.enable(23),
                    e.alphaTest && l.enable(24),
                    e.vertexColors && l.enable(25),
                    e.vertexAlphas && l.enable(26),
                    e.vertexUvs && l.enable(27),
                    e.vertexTangents && l.enable(28),
                    e.uvsVertexOnly && l.enable(29),
                    e.fog && l.enable(30),
                    t.push(l.mask),
                    l.disableAll(),
                    e.useFog && l.enable(0),
                    e.flatShading && l.enable(1),
                    e.logarithmicDepthBuffer && l.enable(2),
                    e.skinning && l.enable(3),
                    e.useVertexTexture && l.enable(4),
                    e.morphTargets && l.enable(5),
                    e.morphNormals && l.enable(6),
                    e.morphColors && l.enable(7),
                    e.premultipliedAlpha && l.enable(8),
                    e.shadowMapEnabled && l.enable(9),
                    e.physicallyCorrectLights && l.enable(10),
                    e.doubleSided && l.enable(11),
                    e.flipSided && l.enable(12),
                    e.depthPacking && l.enable(13),
                    e.dithering && l.enable(14),
                    e.specularIntensityMap && l.enable(15),
                    e.specularColorMap && l.enable(16),
                    e.transmission && l.enable(17),
                    e.transmissionMap && l.enable(18),
                    e.thicknessMap && l.enable(19),
                    e.sheen && l.enable(20),
                    e.sheenColorMap && l.enable(21),
                    e.sheenRoughnessMap && l.enable(22),
                    e.decodeVideoTexture && l.enable(23),
                    e.opaque && l.enable(24),
                    t.push(l.mask);
                })(n, e),
                n.push(t.outputEncoding)),
              n.push(e.customProgramCacheKey),
              n.join()
            );
          },
          getUniforms: function (t) {
            const e = _[t.type];
            let n;
            if (e) {
              const t = C[e];
              n = R.rD.clone(t.uniforms);
            } else n = t.uniforms;
            return n;
          },
          acquireProgram: function (e, n) {
            let i;
            for (let t = 0, e = u.length; t < e; t++) {
              const e = u[t];
              if (e.cacheKey === n) {
                (i = e), ++i.usedTimes;
                break;
              }
            }
            return void 0 === i && ((i = new He(t, n, e, s)), u.push(i)), i;
          },
          releaseProgram: function (t) {
            if (0 == --t.usedTimes) {
              const e = u.indexOf(t);
              (u[e] = u[u.length - 1]), u.pop(), t.destroy();
            }
          },
          releaseShaderCache: function (t) {
            c.remove(t);
          },
          programs: u,
          dispose: function () {
            c.dispose();
          },
        };
      }
      function qe() {
        let t = new WeakMap();
        return {
          get: function (e) {
            let n = t.get(e);
            return void 0 === n && ((n = {}), t.set(e, n)), n;
          },
          remove: function (e) {
            t.delete(e);
          },
          update: function (e, n, i) {
            t.get(e)[n] = i;
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function Ye(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.material.id !== e.material.id
          ? t.material.id - e.material.id
          : t.z !== e.z
          ? t.z - e.z
          : t.id - e.id;
      }
      function Ze(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : t.id - e.id;
      }
      function Ke() {
        const t = [];
        let e = 0;
        const n = [],
          i = [],
          r = [];
        function a(n, i, r, a, s, o) {
          let l = t[e];
          return (
            void 0 === l
              ? ((l = {
                  id: n.id,
                  object: n,
                  geometry: i,
                  material: r,
                  groupOrder: a,
                  renderOrder: n.renderOrder,
                  z: s,
                  group: o,
                }),
                (t[e] = l))
              : ((l.id = n.id),
                (l.object = n),
                (l.geometry = i),
                (l.material = r),
                (l.groupOrder = a),
                (l.renderOrder = n.renderOrder),
                (l.z = s),
                (l.group = o)),
            e++,
            l
          );
        }
        return {
          opaque: n,
          transmissive: i,
          transparent: r,
          init: function () {
            (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
          },
          push: function (t, e, s, o, l, c) {
            const u = a(t, e, s, o, l, c);
            s.transmission > 0
              ? i.push(u)
              : !0 === s.transparent
              ? r.push(u)
              : n.push(u);
          },
          unshift: function (t, e, s, o, l, c) {
            const u = a(t, e, s, o, l, c);
            s.transmission > 0
              ? i.unshift(u)
              : !0 === s.transparent
              ? r.unshift(u)
              : n.unshift(u);
          },
          finish: function () {
            for (let n = e, i = t.length; n < i; n++) {
              const e = t[n];
              if (null === e.id) break;
              (e.id = null),
                (e.object = null),
                (e.geometry = null),
                (e.material = null),
                (e.group = null);
            }
          },
          sort: function (t, e) {
            n.length > 1 && n.sort(t || Ye),
              i.length > 1 && i.sort(e || Ze),
              r.length > 1 && r.sort(e || Ze);
          },
        };
      }
      function Je() {
        let t = new WeakMap();
        return {
          get: function (e, n) {
            let i;
            return (
              !1 === t.has(e)
                ? ((i = new Ke()), t.set(e, [i]))
                : n >= t.get(e).length
                ? ((i = new Ke()), t.get(e).push(i))
                : (i = t.get(e)[n]),
              i
            );
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function $e() {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case 'DirectionalLight':
                n = { direction: new a.P(), color: new E.I() };
                break;
              case 'SpotLight':
                n = {
                  position: new a.P(),
                  direction: new a.P(),
                  color: new E.I(),
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0,
                };
                break;
              case 'PointLight':
                n = {
                  position: new a.P(),
                  color: new E.I(),
                  distance: 0,
                  decay: 0,
                };
                break;
              case 'HemisphereLight':
                n = {
                  direction: new a.P(),
                  skyColor: new E.I(),
                  groundColor: new E.I(),
                };
                break;
              case 'RectAreaLight':
                n = {
                  color: new E.I(),
                  position: new a.P(),
                  halfWidth: new a.P(),
                  halfHeight: new a.P(),
                };
            }
            return (t[e.id] = n), n;
          },
        };
      }
      let Qe = 0;
      function tn(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
      }
      function en(t, e) {
        const n = new $e(),
          i = (function () {
            const t = {};
            return {
              get: function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch (e.type) {
                  case 'DirectionalLight':
                  case 'SpotLight':
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new g.F(),
                    };
                    break;
                  case 'PointLight':
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new g.F(),
                      shadowCameraNear: 1,
                      shadowCameraFar: 1e3,
                    };
                }
                return (t[e.id] = n), n;
              },
            };
          })(),
          r = {
            version: 0,
            hash: {
              directionalLength: -1,
              pointLength: -1,
              spotLength: -1,
              rectAreaLength: -1,
              hemiLength: -1,
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1,
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
          };
        for (let t = 0; t < 9; t++) r.probe.push(new a.P());
        const s = new a.P(),
          o = new m.y(),
          l = new m.y();
        return {
          setup: function (a, s) {
            let o = 0,
              l = 0,
              c = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let u = 0,
              h = 0,
              d = 0,
              p = 0,
              f = 0,
              m = 0,
              g = 0,
              _ = 0;
            a.sort(tn);
            const v = !0 !== s ? Math.PI : 1;
            for (let t = 0, e = a.length; t < e; t++) {
              const e = a[t],
                s = e.color,
                x = e.intensity,
                y = e.distance,
                b = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
              if (e.isAmbientLight)
                (o += s.r * x * v), (l += s.g * x * v), (c += s.b * x * v);
              else if (e.isLightProbe)
                for (let t = 0; t < 9; t++)
                  r.probe[t].addScaledVector(e.sh.coefficients[t], x);
              else if (e.isDirectionalLight) {
                const t = n.get(e);
                if (
                  (t.color.copy(e.color).multiplyScalar(e.intensity * v),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (r.directionalShadow[u] = n),
                    (r.directionalShadowMap[u] = b),
                    (r.directionalShadowMatrix[u] = e.shadow.matrix),
                    m++;
                }
                (r.directional[u] = t), u++;
              } else if (e.isSpotLight) {
                const t = n.get(e);
                if (
                  (t.position.setFromMatrixPosition(e.matrixWorld),
                  t.color.copy(s).multiplyScalar(x * v),
                  (t.distance = y),
                  (t.coneCos = Math.cos(e.angle)),
                  (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
                  (t.decay = e.decay),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (r.spotShadow[d] = n),
                    (r.spotShadowMap[d] = b),
                    (r.spotShadowMatrix[d] = e.shadow.matrix),
                    _++;
                }
                (r.spot[d] = t), d++;
              } else if (e.isRectAreaLight) {
                const t = n.get(e);
                t.color.copy(s).multiplyScalar(x),
                  t.halfWidth.set(0.5 * e.width, 0, 0),
                  t.halfHeight.set(0, 0.5 * e.height, 0),
                  (r.rectArea[p] = t),
                  p++;
              } else if (e.isPointLight) {
                const t = n.get(e);
                if (
                  (t.color.copy(e.color).multiplyScalar(e.intensity * v),
                  (t.distance = e.distance),
                  (t.decay = e.decay),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (n.shadowCameraNear = t.camera.near),
                    (n.shadowCameraFar = t.camera.far),
                    (r.pointShadow[h] = n),
                    (r.pointShadowMap[h] = b),
                    (r.pointShadowMatrix[h] = e.shadow.matrix),
                    g++;
                }
                (r.point[h] = t), h++;
              } else if (e.isHemisphereLight) {
                const t = n.get(e);
                t.skyColor.copy(e.color).multiplyScalar(x * v),
                  t.groundColor.copy(e.groundColor).multiplyScalar(x * v),
                  (r.hemi[f] = t),
                  f++;
              }
            }
            p > 0 &&
              (e.isWebGL2 || !0 === t.has('OES_texture_float_linear')
                ? ((r.rectAreaLTC1 = L.LTC_FLOAT_1),
                  (r.rectAreaLTC2 = L.LTC_FLOAT_2))
                : !0 === t.has('OES_texture_half_float_linear')
                ? ((r.rectAreaLTC1 = L.LTC_HALF_1),
                  (r.rectAreaLTC2 = L.LTC_HALF_2))
                : console.error(
                    'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.'
                  )),
              (r.ambient[0] = o),
              (r.ambient[1] = l),
              (r.ambient[2] = c);
            const x = r.hash;
            (x.directionalLength === u &&
              x.pointLength === h &&
              x.spotLength === d &&
              x.rectAreaLength === p &&
              x.hemiLength === f &&
              x.numDirectionalShadows === m &&
              x.numPointShadows === g &&
              x.numSpotShadows === _) ||
              ((r.directional.length = u),
              (r.spot.length = d),
              (r.rectArea.length = p),
              (r.point.length = h),
              (r.hemi.length = f),
              (r.directionalShadow.length = m),
              (r.directionalShadowMap.length = m),
              (r.pointShadow.length = g),
              (r.pointShadowMap.length = g),
              (r.spotShadow.length = _),
              (r.spotShadowMap.length = _),
              (r.directionalShadowMatrix.length = m),
              (r.pointShadowMatrix.length = g),
              (r.spotShadowMatrix.length = _),
              (x.directionalLength = u),
              (x.pointLength = h),
              (x.spotLength = d),
              (x.rectAreaLength = p),
              (x.hemiLength = f),
              (x.numDirectionalShadows = m),
              (x.numPointShadows = g),
              (x.numSpotShadows = _),
              (r.version = Qe++));
          },
          setupView: function (t, e) {
            let n = 0,
              i = 0,
              a = 0,
              c = 0,
              u = 0;
            const h = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
              const d = t[e];
              if (d.isDirectionalLight) {
                const t = r.directional[n];
                t.direction.setFromMatrixPosition(d.matrixWorld),
                  s.setFromMatrixPosition(d.target.matrixWorld),
                  t.direction.sub(s),
                  t.direction.transformDirection(h),
                  n++;
              } else if (d.isSpotLight) {
                const t = r.spot[a];
                t.position.setFromMatrixPosition(d.matrixWorld),
                  t.position.applyMatrix4(h),
                  t.direction.setFromMatrixPosition(d.matrixWorld),
                  s.setFromMatrixPosition(d.target.matrixWorld),
                  t.direction.sub(s),
                  t.direction.transformDirection(h),
                  a++;
              } else if (d.isRectAreaLight) {
                const t = r.rectArea[c];
                t.position.setFromMatrixPosition(d.matrixWorld),
                  t.position.applyMatrix4(h),
                  l.identity(),
                  o.copy(d.matrixWorld),
                  o.premultiply(h),
                  l.extractRotation(o),
                  t.halfWidth.set(0.5 * d.width, 0, 0),
                  t.halfHeight.set(0, 0.5 * d.height, 0),
                  t.halfWidth.applyMatrix4(l),
                  t.halfHeight.applyMatrix4(l),
                  c++;
              } else if (d.isPointLight) {
                const t = r.point[i];
                t.position.setFromMatrixPosition(d.matrixWorld),
                  t.position.applyMatrix4(h),
                  i++;
              } else if (d.isHemisphereLight) {
                const t = r.hemi[u];
                t.direction.setFromMatrixPosition(d.matrixWorld),
                  t.direction.transformDirection(h),
                  t.direction.normalize(),
                  u++;
              }
            }
          },
          state: r,
        };
      }
      function nn(t, e) {
        const n = new en(t, e),
          i = [],
          r = [];
        return {
          init: function () {
            (i.length = 0), (r.length = 0);
          },
          state: { lightsArray: i, shadowsArray: r, lights: n },
          setupLights: function (t) {
            n.setup(i, t);
          },
          setupLightsView: function (t) {
            n.setupView(i, t);
          },
          pushLight: function (t) {
            i.push(t);
          },
          pushShadow: function (t) {
            r.push(t);
          },
        };
      }
      function rn(t, e) {
        let n = new WeakMap();
        return {
          get: function (i, r = 0) {
            let a;
            return (
              !1 === n.has(i)
                ? ((a = new nn(t, e)), n.set(i, [a]))
                : r >= n.get(i).length
                ? ((a = new nn(t, e)), n.get(i).push(a))
                : (a = n.get(i)[r]),
              a
            );
          },
          dispose: function () {
            n = new WeakMap();
          },
        };
      }
      var an = n(406);
      class sn extends an.F {
        constructor(t) {
          super(),
            (this.type = 'MeshDepthMaterial'),
            (this.depthPacking = i.z8),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.depthPacking = t.depthPacking),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            this
          );
        }
      }
      sn.prototype.isMeshDepthMaterial = !0;
      class on extends an.F {
        constructor(t) {
          super(),
            (this.type = 'MeshDistanceMaterial'),
            (this.referencePosition = new a.P()),
            (this.nearDistance = 1),
            (this.farDistance = 1e3),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.fog = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.referencePosition.copy(t.referencePosition),
            (this.nearDistance = t.nearDistance),
            (this.farDistance = t.farDistance),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            this
          );
        }
      }
      function ln(t, e, n) {
        let r = new f();
        const a = new g.F(),
          s = new g.F(),
          o = new _.L(),
          l = new sn({ depthPacking: i.mS }),
          c = new on(),
          u = {},
          h = n.maxTextureSize,
          d = { 0: i._L, 1: i.Wl, 2: i.eh },
          p = new S.j({
            defines: { VSM_SAMPLES: 8 },
            uniforms: {
              shadow_pass: { value: null },
              resolution: { value: new g.F() },
              radius: { value: 4 },
            },
            vertexShader:
              '\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n',
            fragmentShader:
              "\nuniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n\n#include <packing>\n\nvoid main() {\n\n\tconst float samples = float( VSM_SAMPLES );\n\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\n\t// This seems totally useless but it's a crazy work around for a Adreno compiler bug\n\t// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\n\t\t#ifdef HORIZONTAL_PASS\n\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\n\t\t#else\n\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\n\t\t#endif\n\n\t}\n\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n\n}\n",
          }),
          m = p.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const v = new y.u();
        v.setAttribute(
          'position',
          new b.Tl(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
        );
        const x = new T.K(v, p),
          M = this;
        function w(n, i) {
          const r = e.update(x);
          p.defines.VSM_SAMPLES !== n.blurSamples &&
            ((p.defines.VSM_SAMPLES = n.blurSamples),
            (m.defines.VSM_SAMPLES = n.blurSamples),
            (p.needsUpdate = !0),
            (m.needsUpdate = !0)),
            (p.uniforms.shadow_pass.value = n.map.texture),
            (p.uniforms.resolution.value = n.mapSize),
            (p.uniforms.radius.value = n.radius),
            t.setRenderTarget(n.mapPass),
            t.clear(),
            t.renderBufferDirect(i, null, r, p, x, null),
            (m.uniforms.shadow_pass.value = n.mapPass.texture),
            (m.uniforms.resolution.value = n.mapSize),
            (m.uniforms.radius.value = n.radius),
            t.setRenderTarget(n.map),
            t.clear(),
            t.renderBufferDirect(i, null, r, m, x, null);
        }
        function E(e, n, r, a, s, o) {
          let h = null;
          const p =
            !0 === r.isPointLight
              ? e.customDistanceMaterial
              : e.customDepthMaterial;
          if (
            ((h = void 0 !== p ? p : !0 === r.isPointLight ? c : l),
            (t.localClippingEnabled &&
              !0 === n.clipShadows &&
              0 !== n.clippingPlanes.length) ||
              (n.displacementMap && 0 !== n.displacementScale) ||
              (n.alphaMap && n.alphaTest > 0))
          ) {
            const t = h.uuid,
              e = n.uuid;
            let i = u[t];
            void 0 === i && ((i = {}), (u[t] = i));
            let r = i[e];
            void 0 === r && ((r = h.clone()), (i[e] = r)), (h = r);
          }
          return (
            (h.visible = n.visible),
            (h.wireframe = n.wireframe),
            o === i.dw
              ? (h.side = null !== n.shadowSide ? n.shadowSide : n.side)
              : (h.side = null !== n.shadowSide ? n.shadowSide : d[n.side]),
            (h.alphaMap = n.alphaMap),
            (h.alphaTest = n.alphaTest),
            (h.clipShadows = n.clipShadows),
            (h.clippingPlanes = n.clippingPlanes),
            (h.clipIntersection = n.clipIntersection),
            (h.displacementMap = n.displacementMap),
            (h.displacementScale = n.displacementScale),
            (h.displacementBias = n.displacementBias),
            (h.wireframeLinewidth = n.wireframeLinewidth),
            (h.linewidth = n.linewidth),
            !0 === r.isPointLight &&
              !0 === h.isMeshDistanceMaterial &&
              (h.referencePosition.setFromMatrixPosition(r.matrixWorld),
              (h.nearDistance = a),
              (h.farDistance = s)),
            h
          );
        }
        function A(n, a, s, o, l) {
          if (!1 === n.visible) return;
          if (
            n.layers.test(a.layers) &&
            (n.isMesh || n.isLine || n.isPoints) &&
            (n.castShadow || (n.receiveShadow && l === i.dw)) &&
            (!n.frustumCulled || r.intersectsObject(n))
          ) {
            n.modelViewMatrix.multiplyMatrices(
              s.matrixWorldInverse,
              n.matrixWorld
            );
            const i = e.update(n),
              r = n.material;
            if (Array.isArray(r)) {
              const e = i.groups;
              for (let a = 0, c = e.length; a < c; a++) {
                const c = e[a],
                  u = r[c.materialIndex];
                if (u && u.visible) {
                  const e = E(n, u, o, s.near, s.far, l);
                  t.renderBufferDirect(s, null, i, e, n, c);
                }
              }
            } else if (r.visible) {
              const e = E(n, r, o, s.near, s.far, l);
              t.renderBufferDirect(s, null, i, e, n, null);
            }
          }
          const c = n.children;
          for (let t = 0, e = c.length; t < e; t++) A(c[t], a, s, o, l);
        }
        (this.enabled = !1),
          (this.autoUpdate = !0),
          (this.needsUpdate = !1),
          (this.type = i._i),
          (this.render = function (e, n, l) {
            if (!1 === M.enabled) return;
            if (!1 === M.autoUpdate && !1 === M.needsUpdate) return;
            if (0 === e.length) return;
            const c = t.getRenderTarget(),
              u = t.getActiveCubeFace(),
              d = t.getActiveMipmapLevel(),
              p = t.state;
            p.setBlending(i.jF),
              p.buffers.color.setClear(1, 1, 1, 1),
              p.buffers.depth.setTest(!0),
              p.setScissorTest(!1);
            for (let c = 0, u = e.length; c < u; c++) {
              const u = e[c],
                d = u.shadow;
              if (void 0 === d) {
                console.warn('THREE.WebGLShadowMap:', u, 'has no shadow.');
                continue;
              }
              if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
              a.copy(d.mapSize);
              const f = d.getFrameExtents();
              if (
                (a.multiply(f),
                s.copy(d.mapSize),
                (a.x > h || a.y > h) &&
                  (a.x > h &&
                    ((s.x = Math.floor(h / f.x)),
                    (a.x = s.x * f.x),
                    (d.mapSize.x = s.x)),
                  a.y > h &&
                    ((s.y = Math.floor(h / f.y)),
                    (a.y = s.y * f.y),
                    (d.mapSize.y = s.y))),
                null === d.map && !d.isPointLightShadow && this.type === i.dw)
              ) {
                const t = { minFilter: i.we, magFilter: i.we, format: i.wk };
                (d.map = new z(a.x, a.y, t)),
                  (d.map.texture.name = u.name + '.shadowMap'),
                  (d.mapPass = new z(a.x, a.y, t)),
                  d.camera.updateProjectionMatrix();
              }
              if (null === d.map) {
                const t = { minFilter: i.Ty, magFilter: i.Ty, format: i.wk };
                (d.map = new z(a.x, a.y, t)),
                  (d.map.texture.name = u.name + '.shadowMap'),
                  d.camera.updateProjectionMatrix();
              }
              t.setRenderTarget(d.map), t.clear();
              const m = d.getViewportCount();
              for (let t = 0; t < m; t++) {
                const e = d.getViewport(t);
                o.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
                  p.viewport(o),
                  d.updateMatrices(u, t),
                  (r = d.getFrustum()),
                  A(n, l, d.camera, u, this.type);
              }
              d.isPointLightShadow || this.type !== i.dw || w(d, l),
                (d.needsUpdate = !1);
            }
            (M.needsUpdate = !1), t.setRenderTarget(c, u, d);
          });
      }
      function cn(t, e, n) {
        const r = n.isWebGL2,
          a = new (function () {
            let e = !1;
            const n = new _.L();
            let i = null;
            const r = new _.L(0, 0, 0, 0);
            return {
              setMask: function (n) {
                i === n || e || (t.colorMask(n, n, n, n), (i = n));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e, i, a, s, o) {
                !0 === o && ((e *= s), (i *= s), (a *= s)),
                  n.set(e, i, a, s),
                  !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
              },
              reset: function () {
                (e = !1), (i = null), r.set(-1, 0, 0, 0);
              },
            };
          })(),
          s = new (function () {
            let e = !1,
              n = null,
              r = null,
              a = null;
            return {
              setTest: function (e) {
                e ? k(t.DEPTH_TEST) : G(t.DEPTH_TEST);
              },
              setMask: function (i) {
                n === i || e || (t.depthMask(i), (n = i));
              },
              setFunc: function (e) {
                if (r !== e) {
                  if (e)
                    switch (e) {
                      case i.BV:
                        t.depthFunc(t.NEVER);
                        break;
                      case i.Se:
                        t.depthFunc(t.ALWAYS);
                        break;
                      case i.Zr:
                        t.depthFunc(t.LESS);
                        break;
                      case i.vC:
                        t.depthFunc(t.LEQUAL);
                        break;
                      case i.eD:
                        t.depthFunc(t.EQUAL);
                        break;
                      case i.ks:
                        t.depthFunc(t.GEQUAL);
                        break;
                      case i.w$:
                        t.depthFunc(t.GREATER);
                        break;
                      case i.M6:
                        t.depthFunc(t.NOTEQUAL);
                        break;
                      default:
                        t.depthFunc(t.LEQUAL);
                    }
                  else t.depthFunc(t.LEQUAL);
                  r = e;
                }
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                a !== e && (t.clearDepth(e), (a = e));
              },
              reset: function () {
                (e = !1), (n = null), (r = null), (a = null);
              },
            };
          })(),
          o = new (function () {
            let e = !1,
              n = null,
              i = null,
              r = null,
              a = null,
              s = null,
              o = null,
              l = null,
              c = null;
            return {
              setTest: function (n) {
                e || (n ? k(t.STENCIL_TEST) : G(t.STENCIL_TEST));
              },
              setMask: function (i) {
                n === i || e || (t.stencilMask(i), (n = i));
              },
              setFunc: function (e, n, s) {
                (i === e && r === n && a === s) ||
                  (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
              },
              setOp: function (e, n, i) {
                (s === e && o === n && l === i) ||
                  (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                c !== e && (t.clearStencil(e), (c = e));
              },
              reset: function () {
                (e = !1),
                  (n = null),
                  (i = null),
                  (r = null),
                  (a = null),
                  (s = null),
                  (o = null),
                  (l = null),
                  (c = null);
              },
            };
          })();
        let l = {},
          c = {},
          u = new WeakMap(),
          h = [],
          d = null,
          p = !1,
          f = null,
          m = null,
          g = null,
          v = null,
          x = null,
          y = null,
          b = null,
          M = !1,
          w = null,
          S = null,
          E = null,
          T = null,
          A = null;
        const R = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let L = !1,
          C = 0;
        const P = t.getParameter(t.VERSION);
        -1 !== P.indexOf('WebGL')
          ? ((C = parseFloat(/^WebGL (\d)/.exec(P)[1])), (L = C >= 1))
          : -1 !== P.indexOf('OpenGL ES') &&
            ((C = parseFloat(/^OpenGL ES (\d)/.exec(P)[1])), (L = C >= 2));
        let D = null,
          O = {};
        const N = t.getParameter(t.SCISSOR_BOX),
          I = t.getParameter(t.VIEWPORT),
          U = new _.L().fromArray(N),
          F = new _.L().fromArray(I);
        function z(e, n, i) {
          const r = new Uint8Array(4),
            a = t.createTexture();
          t.bindTexture(e, a),
            t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
          for (let e = 0; e < i; e++)
            t.texImage2D(n + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
          return a;
        }
        const B = {};
        function k(e) {
          !0 !== l[e] && (t.enable(e), (l[e] = !0));
        }
        function G(e) {
          !1 !== l[e] && (t.disable(e), (l[e] = !1));
        }
        (B[t.TEXTURE_2D] = z(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
          (B[t.TEXTURE_CUBE_MAP] = z(
            t.TEXTURE_CUBE_MAP,
            t.TEXTURE_CUBE_MAP_POSITIVE_X,
            6
          )),
          a.setClear(0, 0, 0, 1),
          s.setClear(1),
          o.setClear(0),
          k(t.DEPTH_TEST),
          s.setFunc(i.vC),
          X(!1),
          j(i.tm),
          k(t.CULL_FACE),
          W(i.jF);
        const H = {
          [i.bG]: t.FUNC_ADD,
          [i.Wb]: t.FUNC_SUBTRACT,
          [i.rO]: t.FUNC_REVERSE_SUBTRACT,
        };
        if (r) (H[i.r_] = t.MIN), (H[i.Sm] = t.MAX);
        else {
          const t = e.get('EXT_blend_minmax');
          null !== t && ((H[i.r_] = t.MIN_EXT), (H[i.Sm] = t.MAX_EXT));
        }
        const V = {
          [i.c8]: t.ZERO,
          [i.gh]: t.ONE,
          [i.Kh]: t.SRC_COLOR,
          [i.k7]: t.SRC_ALPHA,
          [i.Rl]: t.SRC_ALPHA_SATURATE,
          [i.Vd]: t.DST_COLOR,
          [i.fS]: t.DST_ALPHA,
          [i.iW]: t.ONE_MINUS_SRC_COLOR,
          [i.Lg]: t.ONE_MINUS_SRC_ALPHA,
          [i.Wp]: t.ONE_MINUS_DST_COLOR,
          [i.Hy]: t.ONE_MINUS_DST_ALPHA,
        };
        function W(e, n, r, a, s, o, l, c) {
          if (e !== i.jF) {
            if ((!1 === p && (k(t.BLEND), (p = !0)), e === i.X))
              (s = s || n),
                (o = o || r),
                (l = l || a),
                (n === m && s === x) ||
                  (t.blendEquationSeparate(H[n], H[s]), (m = n), (x = s)),
                (r === g && a === v && o === y && l === b) ||
                  (t.blendFuncSeparate(V[r], V[a], V[o], V[l]),
                  (g = r),
                  (v = a),
                  (y = o),
                  (b = l)),
                (f = e),
                (M = null);
            else if (e !== f || c !== M) {
              if (
                ((m === i.bG && x === i.bG) ||
                  (t.blendEquation(t.FUNC_ADD), (m = i.bG), (x = i.bG)),
                c)
              )
                switch (e) {
                  case i.bd:
                    t.blendFuncSeparate(
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case i.WM:
                    t.blendFunc(t.ONE, t.ONE);
                    break;
                  case i.N4:
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ZERO,
                      t.ONE
                    );
                    break;
                  case i.M5:
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.SRC_COLOR,
                      t.ZERO,
                      t.SRC_ALPHA
                    );
                    break;
                  default:
                    console.error('THREE.WebGLState: Invalid blending: ', e);
                }
              else
                switch (e) {
                  case i.bd:
                    t.blendFuncSeparate(
                      t.SRC_ALPHA,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case i.WM:
                    t.blendFunc(t.SRC_ALPHA, t.ONE);
                    break;
                  case i.N4:
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ZERO,
                      t.ONE
                    );
                    break;
                  case i.M5:
                    t.blendFunc(t.ZERO, t.SRC_COLOR);
                    break;
                  default:
                    console.error('THREE.WebGLState: Invalid blending: ', e);
                }
              (g = null), (v = null), (y = null), (b = null), (f = e), (M = c);
            }
          } else !0 === p && (G(t.BLEND), (p = !1));
        }
        function X(e) {
          w !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (w = e));
        }
        function j(e) {
          e !== i.Pe
            ? (k(t.CULL_FACE),
              e !== S &&
                (e === i.tm
                  ? t.cullFace(t.BACK)
                  : e === i.S2
                  ? t.cullFace(t.FRONT)
                  : t.cullFace(t.FRONT_AND_BACK)))
            : G(t.CULL_FACE),
            (S = e);
        }
        function q(e, n, i) {
          e
            ? (k(t.POLYGON_OFFSET_FILL),
              (T === n && A === i) || (t.polygonOffset(n, i), (T = n), (A = i)))
            : G(t.POLYGON_OFFSET_FILL);
        }
        function Y(e) {
          void 0 === e && (e = t.TEXTURE0 + R - 1),
            D !== e && (t.activeTexture(e), (D = e));
        }
        return {
          buffers: { color: a, depth: s, stencil: o },
          enable: k,
          disable: G,
          bindFramebuffer: function (e, n) {
            return (
              c[e] !== n &&
              (t.bindFramebuffer(e, n),
              (c[e] = n),
              r &&
                (e === t.DRAW_FRAMEBUFFER && (c[t.FRAMEBUFFER] = n),
                e === t.FRAMEBUFFER && (c[t.DRAW_FRAMEBUFFER] = n)),
              !0)
            );
          },
          drawBuffers: function (i, r) {
            let a = h,
              s = !1;
            if (i)
              if (
                ((a = u.get(r)),
                void 0 === a && ((a = []), u.set(r, a)),
                i.isWebGLMultipleRenderTargets)
              ) {
                const e = i.texture;
                if (a.length !== e.length || a[0] !== t.COLOR_ATTACHMENT0) {
                  for (let n = 0, i = e.length; n < i; n++)
                    a[n] = t.COLOR_ATTACHMENT0 + n;
                  (a.length = e.length), (s = !0);
                }
              } else
                a[0] !== t.COLOR_ATTACHMENT0 &&
                  ((a[0] = t.COLOR_ATTACHMENT0), (s = !0));
            else a[0] !== t.BACK && ((a[0] = t.BACK), (s = !0));
            s &&
              (n.isWebGL2
                ? t.drawBuffers(a)
                : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(a));
          },
          useProgram: function (e) {
            return d !== e && (t.useProgram(e), (d = e), !0);
          },
          setBlending: W,
          setMaterial: function (e, n) {
            e.side === i.eh ? G(t.CULL_FACE) : k(t.CULL_FACE);
            let r = e.side === i._L;
            n && (r = !r),
              X(r),
              e.blending === i.bd && !1 === e.transparent
                ? W(i.jF)
                : W(
                    e.blending,
                    e.blendEquation,
                    e.blendSrc,
                    e.blendDst,
                    e.blendEquationAlpha,
                    e.blendSrcAlpha,
                    e.blendDstAlpha,
                    e.premultipliedAlpha
                  ),
              s.setFunc(e.depthFunc),
              s.setTest(e.depthTest),
              s.setMask(e.depthWrite),
              a.setMask(e.colorWrite);
            const l = e.stencilWrite;
            o.setTest(l),
              l &&
                (o.setMask(e.stencilWriteMask),
                o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
                o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
              q(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
              !0 === e.alphaToCoverage
                ? k(t.SAMPLE_ALPHA_TO_COVERAGE)
                : G(t.SAMPLE_ALPHA_TO_COVERAGE);
          },
          setFlipSided: X,
          setCullFace: j,
          setLineWidth: function (e) {
            e !== E && (L && t.lineWidth(e), (E = e));
          },
          setPolygonOffset: q,
          setScissorTest: function (e) {
            e ? k(t.SCISSOR_TEST) : G(t.SCISSOR_TEST);
          },
          activeTexture: Y,
          bindTexture: function (e, n) {
            null === D && Y();
            let i = O[D];
            void 0 === i &&
              ((i = { type: void 0, texture: void 0 }), (O[D] = i)),
              (i.type === e && i.texture === n) ||
                (t.bindTexture(e, n || B[e]), (i.type = e), (i.texture = n));
          },
          unbindTexture: function () {
            const e = O[D];
            void 0 !== e &&
              void 0 !== e.type &&
              (t.bindTexture(e.type, null),
              (e.type = void 0),
              (e.texture = void 0));
          },
          compressedTexImage2D: function () {
            try {
              t.compressedTexImage2D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          texImage2D: function () {
            try {
              t.texImage2D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          texImage3D: function () {
            try {
              t.texImage3D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          texStorage2D: function () {
            try {
              t.texStorage2D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          texStorage3D: function () {
            try {
              t.texStorage3D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          texSubImage2D: function () {
            try {
              t.texSubImage2D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          texSubImage3D: function () {
            try {
              t.texSubImage3D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          compressedTexSubImage2D: function () {
            try {
              t.compressedTexSubImage2D.apply(t, arguments);
            } catch (t) {
              console.error('THREE.WebGLState:', t);
            }
          },
          scissor: function (e) {
            !1 === U.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), U.copy(e));
          },
          viewport: function (e) {
            !1 === F.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), F.copy(e));
          },
          reset: function () {
            t.disable(t.BLEND),
              t.disable(t.CULL_FACE),
              t.disable(t.DEPTH_TEST),
              t.disable(t.POLYGON_OFFSET_FILL),
              t.disable(t.SCISSOR_TEST),
              t.disable(t.STENCIL_TEST),
              t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
              t.blendEquation(t.FUNC_ADD),
              t.blendFunc(t.ONE, t.ZERO),
              t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
              t.colorMask(!0, !0, !0, !0),
              t.clearColor(0, 0, 0, 0),
              t.depthMask(!0),
              t.depthFunc(t.LESS),
              t.clearDepth(1),
              t.stencilMask(4294967295),
              t.stencilFunc(t.ALWAYS, 0, 4294967295),
              t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
              t.clearStencil(0),
              t.cullFace(t.BACK),
              t.frontFace(t.CCW),
              t.polygonOffset(0, 0),
              t.activeTexture(t.TEXTURE0),
              t.bindFramebuffer(t.FRAMEBUFFER, null),
              !0 === r &&
                (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
                t.bindFramebuffer(t.READ_FRAMEBUFFER, null)),
              t.useProgram(null),
              t.lineWidth(1),
              t.scissor(0, 0, t.canvas.width, t.canvas.height),
              t.viewport(0, 0, t.canvas.width, t.canvas.height),
              (l = {}),
              (D = null),
              (O = {}),
              (c = {}),
              (u = new WeakMap()),
              (h = []),
              (d = null),
              (p = !1),
              (f = null),
              (m = null),
              (g = null),
              (v = null),
              (x = null),
              (y = null),
              (b = null),
              (M = !1),
              (w = null),
              (S = null),
              (E = null),
              (T = null),
              (A = null),
              U.set(0, 0, t.canvas.width, t.canvas.height),
              F.set(0, 0, t.canvas.width, t.canvas.height),
              a.reset(),
              s.reset(),
              o.reset();
          },
        };
      }
      on.prototype.isMeshDistanceMaterial = !0;
      var un = n(564);
      function hn(t, e, n, a, s, o, l) {
        const c = s.isWebGL2,
          u = s.maxTextures,
          h = s.maxCubemapSize,
          d = s.maxTextureSize,
          p = s.maxSamples,
          f = e.has('WEBGL_multisampled_render_to_texture')
            ? e.get('WEBGL_multisampled_render_to_texture')
            : null,
          m = new WeakMap();
        let g;
        const _ = new WeakMap();
        let v = !1;
        try {
          v =
            'undefined' != typeof OffscreenCanvas &&
            null !== new OffscreenCanvas(1, 1).getContext('2d');
        } catch (t) {}
        function x(t, e) {
          return v ? new OffscreenCanvas(t, e) : (0, ct.c)('canvas');
        }
        function y(t, e, n, i) {
          let a = 1;
          if (
            ((t.width > i || t.height > i) &&
              (a = i / Math.max(t.width, t.height)),
            a < 1 || !0 === e)
          ) {
            if (
              ('undefined' != typeof HTMLImageElement &&
                t instanceof HTMLImageElement) ||
              ('undefined' != typeof HTMLCanvasElement &&
                t instanceof HTMLCanvasElement) ||
              ('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
            ) {
              const i = e ? r.gy : Math.floor,
                s = i(a * t.width),
                o = i(a * t.height);
              void 0 === g && (g = x(s, o));
              const l = n ? x(s, o) : g;
              return (
                (l.width = s),
                (l.height = o),
                l.getContext('2d').drawImage(t, 0, 0, s, o),
                console.warn(
                  'THREE.WebGLRenderer: Texture has been resized from (' +
                    t.width +
                    'x' +
                    t.height +
                    ') to (' +
                    s +
                    'x' +
                    o +
                    ').'
                ),
                l
              );
            }
            return (
              'data' in t &&
                console.warn(
                  'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                    t.width +
                    'x' +
                    t.height +
                    ').'
                ),
              t
            );
          }
          return t;
        }
        function b(t) {
          return r.wt(t.width) && r.wt(t.height);
        }
        function M(t, e) {
          return (
            t.generateMipmaps &&
            e &&
            t.minFilter !== i.Ty &&
            t.minFilter !== i.we
          );
        }
        function w(e) {
          t.generateMipmap(e);
        }
        function S(n, r, a, s, o = !1) {
          if (!1 === c) return r;
          if (null !== n) {
            if (void 0 !== t[n]) return t[n];
            console.warn(
              "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
                n +
                "'"
            );
          }
          let l = r;
          return (
            r === t.RED &&
              (a === t.FLOAT && (l = t.R32F),
              a === t.HALF_FLOAT && (l = t.R16F),
              a === t.UNSIGNED_BYTE && (l = t.R8)),
            r === t.RG &&
              (a === t.FLOAT && (l = t.RG32F),
              a === t.HALF_FLOAT && (l = t.RG16F),
              a === t.UNSIGNED_BYTE && (l = t.RG8)),
            r === t.RGBA &&
              (a === t.FLOAT && (l = t.RGBA32F),
              a === t.HALF_FLOAT && (l = t.RGBA16F),
              a === t.UNSIGNED_BYTE &&
                (l = s === i.kn && !1 === o ? t.SRGB8_ALPHA8 : t.RGBA8),
              a === t.UNSIGNED_SHORT_4_4_4_4 && (l = t.RGBA4),
              a === t.UNSIGNED_SHORT_5_5_5_1 && (l = t.RGB5_A1)),
            (l !== t.R16F &&
              l !== t.R32F &&
              l !== t.RG16F &&
              l !== t.RG32F &&
              l !== t.RGBA16F &&
              l !== t.RGBA32F) ||
              e.get('EXT_color_buffer_float'),
            l
          );
        }
        function E(t, e, n) {
          return !0 === M(t, n) ||
            (t.isFramebufferTexture &&
              t.minFilter !== i.Ty &&
              t.minFilter !== i.we)
            ? Math.log2(Math.max(e.width, e.height)) + 1
            : void 0 !== t.mipmaps && t.mipmaps.length > 0
            ? t.mipmaps.length
            : t.isCompressedTexture && Array.isArray(t.image)
            ? e.mipmaps.length
            : 1;
        }
        function T(e) {
          return e === i.Ty || e === i.YL || e === i.aH ? t.NEAREST : t.LINEAR;
        }
        function A(t) {
          const e = t.target;
          e.removeEventListener('dispose', A),
            (function (t) {
              const e = a.get(t);
              if (void 0 === e.__webglInit) return;
              const n = t.source,
                i = _.get(n);
              if (i) {
                const r = i[e.__cacheKey];
                r.usedTimes--,
                  0 === r.usedTimes && L(t),
                  0 === Object.keys(i).length && _.delete(n);
              }
              a.remove(t);
            })(e),
            e.isVideoTexture && m.delete(e);
        }
        function R(e) {
          const n = e.target;
          n.removeEventListener('dispose', R),
            (function (e) {
              const n = e.texture,
                i = a.get(e),
                r = a.get(n);
              if (
                (void 0 !== r.__webglTexture &&
                  (t.deleteTexture(r.__webglTexture), l.memory.textures--),
                e.depthTexture && e.depthTexture.dispose(),
                e.isWebGLCubeRenderTarget)
              )
                for (let e = 0; e < 6; e++)
                  t.deleteFramebuffer(i.__webglFramebuffer[e]),
                    i.__webglDepthbuffer &&
                      t.deleteRenderbuffer(i.__webglDepthbuffer[e]);
              else
                t.deleteFramebuffer(i.__webglFramebuffer),
                  i.__webglDepthbuffer &&
                    t.deleteRenderbuffer(i.__webglDepthbuffer),
                  i.__webglMultisampledFramebuffer &&
                    t.deleteFramebuffer(i.__webglMultisampledFramebuffer),
                  i.__webglColorRenderbuffer &&
                    t.deleteRenderbuffer(i.__webglColorRenderbuffer),
                  i.__webglDepthRenderbuffer &&
                    t.deleteRenderbuffer(i.__webglDepthRenderbuffer);
              if (e.isWebGLMultipleRenderTargets)
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = a.get(n[e]);
                  i.__webglTexture &&
                    (t.deleteTexture(i.__webglTexture), l.memory.textures--),
                    a.remove(n[e]);
                }
              a.remove(n), a.remove(e);
            })(n);
        }
        function L(e) {
          const n = a.get(e);
          t.deleteTexture(n.__webglTexture);
          const i = e.source;
          delete _.get(i)[n.__cacheKey], l.memory.textures--;
        }
        let C = 0;
        function P(e, i) {
          const r = a.get(e);
          if (
            (e.isVideoTexture &&
              (function (t) {
                const e = l.render.frame;
                m.get(t) !== e && (m.set(t, e), t.update());
              })(e),
            !1 === e.isRenderTargetTexture &&
              e.version > 0 &&
              r.__version !== e.version)
          ) {
            const t = e.image;
            if (null === t)
              console.warn(
                'THREE.WebGLRenderer: Texture marked for update but no image data found.'
              );
            else {
              if (!1 !== t.complete) return void U(r, e, i);
              console.warn(
                'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
              );
            }
          }
          n.activeTexture(t.TEXTURE0 + i),
            n.bindTexture(t.TEXTURE_2D, r.__webglTexture);
        }
        const D = {
            [i.rp]: t.REPEAT,
            [i.uW]: t.CLAMP_TO_EDGE,
            [i.Oo]: t.MIRRORED_REPEAT,
          },
          O = {
            [i.Ty]: t.NEAREST,
            [i.YL]: t.NEAREST_MIPMAP_NEAREST,
            [i.aH]: t.NEAREST_MIPMAP_LINEAR,
            [i.we]: t.LINEAR,
            [i.qy]: t.LINEAR_MIPMAP_NEAREST,
            [i.D1]: t.LINEAR_MIPMAP_LINEAR,
          };
        function N(n, r, o) {
          if (
            (o
              ? (t.texParameteri(n, t.TEXTURE_WRAP_S, D[r.wrapS]),
                t.texParameteri(n, t.TEXTURE_WRAP_T, D[r.wrapT]),
                (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
                  t.texParameteri(n, t.TEXTURE_WRAP_R, D[r.wrapR]),
                t.texParameteri(n, t.TEXTURE_MAG_FILTER, O[r.magFilter]),
                t.texParameteri(n, t.TEXTURE_MIN_FILTER, O[r.minFilter]))
              : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
                  t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
                (r.wrapS === i.uW && r.wrapT === i.uW) ||
                  console.warn(
                    'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
                  ),
                t.texParameteri(n, t.TEXTURE_MAG_FILTER, T(r.magFilter)),
                t.texParameteri(n, t.TEXTURE_MIN_FILTER, T(r.minFilter)),
                r.minFilter !== i.Ty &&
                  r.minFilter !== i.we &&
                  console.warn(
                    'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
                  )),
            !0 === e.has('EXT_texture_filter_anisotropic'))
          ) {
            const o = e.get('EXT_texture_filter_anisotropic');
            if (r.type === i.Vz && !1 === e.has('OES_texture_float_linear'))
              return;
            if (
              !1 === c &&
              r.type === i.cL &&
              !1 === e.has('OES_texture_half_float_linear')
            )
              return;
            (r.anisotropy > 1 || a.get(r).__currentAnisotropy) &&
              (t.texParameterf(
                n,
                o.TEXTURE_MAX_ANISOTROPY_EXT,
                Math.min(r.anisotropy, s.getMaxAnisotropy())
              ),
              (a.get(r).__currentAnisotropy = r.anisotropy));
          }
        }
        function I(e, n) {
          let i = !1;
          void 0 === e.__webglInit &&
            ((e.__webglInit = !0), n.addEventListener('dispose', A));
          const r = n.source;
          let a = _.get(r);
          void 0 === a && ((a = {}), _.set(r, a));
          const s = (function (t) {
            const e = [];
            return (
              e.push(t.wrapS),
              e.push(t.wrapT),
              e.push(t.magFilter),
              e.push(t.minFilter),
              e.push(t.anisotropy),
              e.push(t.internalFormat),
              e.push(t.format),
              e.push(t.type),
              e.push(t.generateMipmaps),
              e.push(t.premultiplyAlpha),
              e.push(t.flipY),
              e.push(t.unpackAlignment),
              e.push(t.encoding),
              e.join()
            );
          })(n);
          if (s !== e.__cacheKey) {
            void 0 === a[s] &&
              ((a[s] = { texture: t.createTexture(), usedTimes: 0 }),
              l.memory.textures++,
              (i = !0)),
              a[s].usedTimes++;
            const r = a[e.__cacheKey];
            void 0 !== r &&
              (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && L(n)),
              (e.__cacheKey = s),
              (e.__webglTexture = a[s].texture);
          }
          return i;
        }
        function U(e, r, a) {
          let s = t.TEXTURE_2D;
          r.isDataArrayTexture && (s = t.TEXTURE_2D_ARRAY),
            r.isData3DTexture && (s = t.TEXTURE_3D);
          const l = I(e, r),
            u = r.source;
          if (
            (n.activeTexture(t.TEXTURE0 + a),
            n.bindTexture(s, e.__webglTexture),
            u.version !== u.__currentVersion || !0 === l)
          ) {
            t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
              t.pixelStorei(
                t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                r.premultiplyAlpha
              ),
              t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
              t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
            const a =
              (function (t) {
                return (
                  !c &&
                  (t.wrapS !== i.uW ||
                    t.wrapT !== i.uW ||
                    (t.minFilter !== i.Ty && t.minFilter !== i.we))
                );
              })(r) && !1 === b(r.image);
            let l = y(r.image, a, !1, d);
            l = H(r, l);
            const h = b(l) || c,
              p = o.convert(r.format, r.encoding);
            let f,
              m = o.convert(r.type),
              g = S(r.internalFormat, p, m, r.encoding, r.isVideoTexture);
            N(s, r, h);
            const _ = r.mipmaps,
              v = c && !0 !== r.isVideoTexture,
              x = void 0 === e.__version,
              T = E(r, l, h);
            if (r.isDepthTexture)
              (g = t.DEPTH_COMPONENT),
                c
                  ? (g =
                      r.type === i.Vz
                        ? t.DEPTH_COMPONENT32F
                        : r.type === i.JQ
                        ? t.DEPTH_COMPONENT24
                        : r.type === i.wJ
                        ? t.DEPTH24_STENCIL8
                        : t.DEPTH_COMPONENT16)
                  : r.type === i.Vz &&
                    console.error(
                      'WebGLRenderer: Floating point depth texture requires WebGL2.'
                    ),
                r.format === i.qk &&
                  g === t.DEPTH_COMPONENT &&
                  r.type !== i.Ls &&
                  r.type !== i.JQ &&
                  (console.warn(
                    'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
                  ),
                  (r.type = i.Ls),
                  (m = o.convert(r.type))),
                r.format === i.br &&
                  g === t.DEPTH_COMPONENT &&
                  ((g = t.DEPTH_STENCIL),
                  r.type !== i.wJ &&
                    (console.warn(
                      'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
                    ),
                    (r.type = i.wJ),
                    (m = o.convert(r.type)))),
                v && x
                  ? n.texStorage2D(t.TEXTURE_2D, 1, g, l.width, l.height)
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      g,
                      l.width,
                      l.height,
                      0,
                      p,
                      m,
                      null
                    );
            else if (r.isDataTexture)
              if (_.length > 0 && h) {
                v &&
                  x &&
                  n.texStorage2D(t.TEXTURE_2D, T, g, _[0].width, _[0].height);
                for (let e = 0, i = _.length; e < i; e++)
                  (f = _[e]),
                    v
                      ? n.texSubImage2D(
                          t.TEXTURE_2D,
                          e,
                          0,
                          0,
                          f.width,
                          f.height,
                          p,
                          m,
                          f.data
                        )
                      : n.texImage2D(
                          t.TEXTURE_2D,
                          e,
                          g,
                          f.width,
                          f.height,
                          0,
                          p,
                          m,
                          f.data
                        );
                r.generateMipmaps = !1;
              } else
                v
                  ? (x && n.texStorage2D(t.TEXTURE_2D, T, g, l.width, l.height),
                    n.texSubImage2D(
                      t.TEXTURE_2D,
                      0,
                      0,
                      0,
                      l.width,
                      l.height,
                      p,
                      m,
                      l.data
                    ))
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      g,
                      l.width,
                      l.height,
                      0,
                      p,
                      m,
                      l.data
                    );
            else if (r.isCompressedTexture) {
              v &&
                x &&
                n.texStorage2D(t.TEXTURE_2D, T, g, _[0].width, _[0].height);
              for (let e = 0, a = _.length; e < a; e++)
                (f = _[e]),
                  r.format !== i.wk
                    ? null !== p
                      ? v
                        ? n.compressedTexSubImage2D(
                            t.TEXTURE_2D,
                            e,
                            0,
                            0,
                            f.width,
                            f.height,
                            p,
                            f.data
                          )
                        : n.compressedTexImage2D(
                            t.TEXTURE_2D,
                            e,
                            g,
                            f.width,
                            f.height,
                            0,
                            f.data
                          )
                      : console.warn(
                          'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                        )
                    : v
                    ? n.texSubImage2D(
                        t.TEXTURE_2D,
                        e,
                        0,
                        0,
                        f.width,
                        f.height,
                        p,
                        m,
                        f.data
                      )
                    : n.texImage2D(
                        t.TEXTURE_2D,
                        e,
                        g,
                        f.width,
                        f.height,
                        0,
                        p,
                        m,
                        f.data
                      );
            } else if (r.isDataArrayTexture)
              v
                ? (x &&
                    n.texStorage3D(
                      t.TEXTURE_2D_ARRAY,
                      T,
                      g,
                      l.width,
                      l.height,
                      l.depth
                    ),
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    0,
                    0,
                    0,
                    l.width,
                    l.height,
                    l.depth,
                    p,
                    m,
                    l.data
                  ))
                : n.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    g,
                    l.width,
                    l.height,
                    l.depth,
                    0,
                    p,
                    m,
                    l.data
                  );
            else if (r.isData3DTexture)
              v
                ? (x &&
                    n.texStorage3D(
                      t.TEXTURE_3D,
                      T,
                      g,
                      l.width,
                      l.height,
                      l.depth
                    ),
                  n.texSubImage3D(
                    t.TEXTURE_3D,
                    0,
                    0,
                    0,
                    0,
                    l.width,
                    l.height,
                    l.depth,
                    p,
                    m,
                    l.data
                  ))
                : n.texImage3D(
                    t.TEXTURE_3D,
                    0,
                    g,
                    l.width,
                    l.height,
                    l.depth,
                    0,
                    p,
                    m,
                    l.data
                  );
            else if (r.isFramebufferTexture)
              v && x
                ? n.texStorage2D(t.TEXTURE_2D, T, g, l.width, l.height)
                : n.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    g,
                    l.width,
                    l.height,
                    0,
                    p,
                    m,
                    null
                  );
            else if (_.length > 0 && h) {
              v &&
                x &&
                n.texStorage2D(t.TEXTURE_2D, T, g, _[0].width, _[0].height);
              for (let e = 0, i = _.length; e < i; e++)
                (f = _[e]),
                  v
                    ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, p, m, f)
                    : n.texImage2D(t.TEXTURE_2D, e, g, p, m, f);
              r.generateMipmaps = !1;
            } else
              v
                ? (x && n.texStorage2D(t.TEXTURE_2D, T, g, l.width, l.height),
                  n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, p, m, l))
                : n.texImage2D(t.TEXTURE_2D, 0, g, p, m, l);
            M(r, h) && w(s),
              (u.__currentVersion = u.version),
              r.onUpdate && r.onUpdate(r);
          }
          e.__version = r.version;
        }
        function F(e, i, r, s, l) {
          const c = o.convert(r.format, r.encoding),
            u = o.convert(r.type),
            h = S(r.internalFormat, c, u, r.encoding);
          a.get(i).__hasExternalTextures ||
            (l === t.TEXTURE_3D || l === t.TEXTURE_2D_ARRAY
              ? n.texImage3D(l, 0, h, i.width, i.height, i.depth, 0, c, u, null)
              : n.texImage2D(l, 0, h, i.width, i.height, 0, c, u, null)),
            n.bindFramebuffer(t.FRAMEBUFFER, e),
            G(i)
              ? f.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  s,
                  l,
                  a.get(r).__webglTexture,
                  0,
                  k(i)
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  s,
                  l,
                  a.get(r).__webglTexture,
                  0
                ),
            n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
        function z(e, n, r) {
          if (
            (t.bindRenderbuffer(t.RENDERBUFFER, e),
            n.depthBuffer && !n.stencilBuffer)
          ) {
            let a = t.DEPTH_COMPONENT16;
            if (r || G(n)) {
              const e = n.depthTexture;
              e &&
                e.isDepthTexture &&
                (e.type === i.Vz
                  ? (a = t.DEPTH_COMPONENT32F)
                  : e.type === i.JQ && (a = t.DEPTH_COMPONENT24));
              const r = k(n);
              G(n)
                ? f.renderbufferStorageMultisampleEXT(
                    t.RENDERBUFFER,
                    r,
                    a,
                    n.width,
                    n.height
                  )
                : t.renderbufferStorageMultisample(
                    t.RENDERBUFFER,
                    r,
                    a,
                    n.width,
                    n.height
                  );
            } else t.renderbufferStorage(t.RENDERBUFFER, a, n.width, n.height);
            t.framebufferRenderbuffer(
              t.FRAMEBUFFER,
              t.DEPTH_ATTACHMENT,
              t.RENDERBUFFER,
              e
            );
          } else if (n.depthBuffer && n.stencilBuffer) {
            const i = k(n);
            r && !1 === G(n)
              ? t.renderbufferStorageMultisample(
                  t.RENDERBUFFER,
                  i,
                  t.DEPTH24_STENCIL8,
                  n.width,
                  n.height
                )
              : G(n)
              ? f.renderbufferStorageMultisampleEXT(
                  t.RENDERBUFFER,
                  i,
                  t.DEPTH24_STENCIL8,
                  n.width,
                  n.height
                )
              : t.renderbufferStorage(
                  t.RENDERBUFFER,
                  t.DEPTH_STENCIL,
                  n.width,
                  n.height
                ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.RENDERBUFFER,
                e
              );
          } else {
            const e =
                !0 === n.isWebGLMultipleRenderTargets
                  ? n.texture[0]
                  : n.texture,
              i = o.convert(e.format, e.encoding),
              a = o.convert(e.type),
              s = S(e.internalFormat, i, a, e.encoding),
              l = k(n);
            r && !1 === G(n)
              ? t.renderbufferStorageMultisample(
                  t.RENDERBUFFER,
                  l,
                  s,
                  n.width,
                  n.height
                )
              : G(n)
              ? f.renderbufferStorageMultisampleEXT(
                  t.RENDERBUFFER,
                  l,
                  s,
                  n.width,
                  n.height
                )
              : t.renderbufferStorage(t.RENDERBUFFER, s, n.width, n.height);
          }
          t.bindRenderbuffer(t.RENDERBUFFER, null);
        }
        function B(e) {
          const r = a.get(e),
            s = !0 === e.isWebGLCubeRenderTarget;
          if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (s)
              throw new Error(
                'target.depthTexture not supported in Cube render targets'
              );
            !(function (e, r) {
              if (r && r.isWebGLCubeRenderTarget)
                throw new Error(
                  'Depth Texture with cube render targets is not supported'
                );
              if (
                (n.bindFramebuffer(t.FRAMEBUFFER, e),
                !r.depthTexture || !r.depthTexture.isDepthTexture)
              )
                throw new Error(
                  'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
                );
              (a.get(r.depthTexture).__webglTexture &&
                r.depthTexture.image.width === r.width &&
                r.depthTexture.image.height === r.height) ||
                ((r.depthTexture.image.width = r.width),
                (r.depthTexture.image.height = r.height),
                (r.depthTexture.needsUpdate = !0)),
                P(r.depthTexture, 0);
              const s = a.get(r.depthTexture).__webglTexture,
                o = k(r);
              if (r.depthTexture.format === i.qk)
                G(r)
                  ? f.framebufferTexture2DMultisampleEXT(
                      t.FRAMEBUFFER,
                      t.DEPTH_ATTACHMENT,
                      t.TEXTURE_2D,
                      s,
                      0,
                      o
                    )
                  : t.framebufferTexture2D(
                      t.FRAMEBUFFER,
                      t.DEPTH_ATTACHMENT,
                      t.TEXTURE_2D,
                      s,
                      0
                    );
              else {
                if (r.depthTexture.format !== i.br)
                  throw new Error('Unknown depthTexture format');
                G(r)
                  ? f.framebufferTexture2DMultisampleEXT(
                      t.FRAMEBUFFER,
                      t.DEPTH_STENCIL_ATTACHMENT,
                      t.TEXTURE_2D,
                      s,
                      0,
                      o
                    )
                  : t.framebufferTexture2D(
                      t.FRAMEBUFFER,
                      t.DEPTH_STENCIL_ATTACHMENT,
                      t.TEXTURE_2D,
                      s,
                      0
                    );
              }
            })(r.__webglFramebuffer, e);
          } else if (s) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
              n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
                (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
                z(r.__webglDepthbuffer[i], e, !1);
          } else
            n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
              (r.__webglDepthbuffer = t.createRenderbuffer()),
              z(r.__webglDepthbuffer, e, !1);
          n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
        function k(t) {
          return Math.min(p, t.samples);
        }
        function G(t) {
          const n = a.get(t);
          return (
            c &&
            t.samples > 0 &&
            !0 === e.has('WEBGL_multisampled_render_to_texture') &&
            !1 !== n.__useRenderToTexture
          );
        }
        function H(t, n) {
          const r = t.encoding,
            a = t.format,
            s = t.type;
          return (
            !0 === t.isCompressedTexture ||
              !0 === t.isVideoTexture ||
              t.format === i.L_ ||
              (r !== i.rn &&
                (r === i.kn
                  ? !1 === c
                    ? !0 === e.has('EXT_sRGB') && a === i.wk
                      ? ((t.format = i.L_),
                        (t.minFilter = i.we),
                        (t.generateMipmaps = !1))
                      : (n = un.P.sRGBToLinear(n))
                    : (a === i.wk && s === i.yw) ||
                      console.warn(
                        'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.'
                      )
                  : console.error(
                      'THREE.WebGLTextures: Unsupported texture encoding:',
                      r
                    ))),
            n
          );
        }
        (this.allocateTextureUnit = function () {
          const t = C;
          return (
            t >= u &&
              console.warn(
                'THREE.WebGLTextures: Trying to use ' +
                  t +
                  ' texture units while this GPU supports only ' +
                  u
              ),
            (C += 1),
            t
          );
        }),
          (this.resetTextureUnits = function () {
            C = 0;
          }),
          (this.setTexture2D = P),
          (this.setTexture2DArray = function (e, i) {
            const r = a.get(e);
            e.version > 0 && r.__version !== e.version
              ? U(r, e, i)
              : (n.activeTexture(t.TEXTURE0 + i),
                n.bindTexture(t.TEXTURE_2D_ARRAY, r.__webglTexture));
          }),
          (this.setTexture3D = function (e, i) {
            const r = a.get(e);
            e.version > 0 && r.__version !== e.version
              ? U(r, e, i)
              : (n.activeTexture(t.TEXTURE0 + i),
                n.bindTexture(t.TEXTURE_3D, r.__webglTexture));
          }),
          (this.setTextureCube = function (e, r) {
            const s = a.get(e);
            e.version > 0 && s.__version !== e.version
              ? (function (e, r, a) {
                  if (6 !== r.image.length) return;
                  const s = I(e, r),
                    l = r.source;
                  if (
                    (n.activeTexture(t.TEXTURE0 + a),
                    n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture),
                    l.version !== l.__currentVersion || !0 === s)
                  ) {
                    t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
                      t.pixelStorei(
                        t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                        r.premultiplyAlpha
                      ),
                      t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
                      t.pixelStorei(
                        t.UNPACK_COLORSPACE_CONVERSION_WEBGL,
                        t.NONE
                      );
                    const a =
                        r.isCompressedTexture || r.image[0].isCompressedTexture,
                      s = r.image[0] && r.image[0].isDataTexture,
                      u = [];
                    for (let t = 0; t < 6; t++)
                      (u[t] =
                        a || s
                          ? s
                            ? r.image[t].image
                            : r.image[t]
                          : y(r.image[t], !1, !0, h)),
                        (u[t] = H(r, u[t]));
                    const d = u[0],
                      p = b(d) || c,
                      f = o.convert(r.format, r.encoding),
                      m = o.convert(r.type),
                      g = S(r.internalFormat, f, m, r.encoding),
                      _ = c && !0 !== r.isVideoTexture,
                      v = void 0 === e.__version;
                    let x,
                      T = E(r, d, p);
                    if ((N(t.TEXTURE_CUBE_MAP, r, p), a)) {
                      _ &&
                        v &&
                        n.texStorage2D(
                          t.TEXTURE_CUBE_MAP,
                          T,
                          g,
                          d.width,
                          d.height
                        );
                      for (let e = 0; e < 6; e++) {
                        x = u[e].mipmaps;
                        for (let a = 0; a < x.length; a++) {
                          const s = x[a];
                          r.format !== i.wk
                            ? null !== f
                              ? _
                                ? n.compressedTexSubImage2D(
                                    t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                    a,
                                    0,
                                    0,
                                    s.width,
                                    s.height,
                                    f,
                                    s.data
                                  )
                                : n.compressedTexImage2D(
                                    t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                    a,
                                    g,
                                    s.width,
                                    s.height,
                                    0,
                                    s.data
                                  )
                              : console.warn(
                                  'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
                                )
                            : _
                            ? n.texSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                a,
                                0,
                                0,
                                s.width,
                                s.height,
                                f,
                                m,
                                s.data
                              )
                            : n.texImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                a,
                                g,
                                s.width,
                                s.height,
                                0,
                                f,
                                m,
                                s.data
                              );
                        }
                      }
                    } else {
                      (x = r.mipmaps),
                        _ &&
                          v &&
                          (x.length > 0 && T++,
                          n.texStorage2D(
                            t.TEXTURE_CUBE_MAP,
                            T,
                            g,
                            u[0].width,
                            u[0].height
                          ));
                      for (let e = 0; e < 6; e++)
                        if (s) {
                          _
                            ? n.texSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                0,
                                0,
                                u[e].width,
                                u[e].height,
                                f,
                                m,
                                u[e].data
                              )
                            : n.texImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                g,
                                u[e].width,
                                u[e].height,
                                0,
                                f,
                                m,
                                u[e].data
                              );
                          for (let i = 0; i < x.length; i++) {
                            const r = x[i].image[e].image;
                            _
                              ? n.texSubImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  0,
                                  0,
                                  r.width,
                                  r.height,
                                  f,
                                  m,
                                  r.data
                                )
                              : n.texImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  g,
                                  r.width,
                                  r.height,
                                  0,
                                  f,
                                  m,
                                  r.data
                                );
                          }
                        } else {
                          _
                            ? n.texSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                0,
                                0,
                                f,
                                m,
                                u[e]
                              )
                            : n.texImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                g,
                                f,
                                m,
                                u[e]
                              );
                          for (let i = 0; i < x.length; i++) {
                            const r = x[i];
                            _
                              ? n.texSubImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  0,
                                  0,
                                  f,
                                  m,
                                  r.image[e]
                                )
                              : n.texImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  g,
                                  f,
                                  m,
                                  r.image[e]
                                );
                          }
                        }
                    }
                    M(r, p) && w(t.TEXTURE_CUBE_MAP),
                      (l.__currentVersion = l.version),
                      r.onUpdate && r.onUpdate(r);
                  }
                  e.__version = r.version;
                })(s, e, r)
              : (n.activeTexture(t.TEXTURE0 + r),
                n.bindTexture(t.TEXTURE_CUBE_MAP, s.__webglTexture));
          }),
          (this.rebindTextures = function (e, n, i) {
            const r = a.get(e);
            void 0 !== n &&
              F(
                r.__webglFramebuffer,
                e,
                e.texture,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D
              ),
              void 0 !== i && B(e);
          }),
          (this.setupRenderTarget = function (e) {
            const i = e.texture,
              r = a.get(e),
              u = a.get(i);
            e.addEventListener('dispose', R),
              !0 !== e.isWebGLMultipleRenderTargets &&
                (void 0 === u.__webglTexture &&
                  (u.__webglTexture = t.createTexture()),
                (u.__version = i.version),
                l.memory.textures++);
            const h = !0 === e.isWebGLCubeRenderTarget,
              d = !0 === e.isWebGLMultipleRenderTargets,
              p = b(e) || c;
            if (h) {
              r.__webglFramebuffer = [];
              for (let e = 0; e < 6; e++)
                r.__webglFramebuffer[e] = t.createFramebuffer();
            } else if (((r.__webglFramebuffer = t.createFramebuffer()), d))
              if (s.drawBuffers) {
                const n = e.texture;
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = a.get(n[e]);
                  void 0 === i.__webglTexture &&
                    ((i.__webglTexture = t.createTexture()),
                    l.memory.textures++);
                }
              } else
                console.warn(
                  'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
                );
            else if (c && e.samples > 0 && !1 === G(e)) {
              (r.__webglMultisampledFramebuffer = t.createFramebuffer()),
                (r.__webglColorRenderbuffer = t.createRenderbuffer()),
                t.bindRenderbuffer(t.RENDERBUFFER, r.__webglColorRenderbuffer);
              const a = o.convert(i.format, i.encoding),
                s = o.convert(i.type),
                l = S(i.internalFormat, a, s, i.encoding),
                c = k(e);
              t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                c,
                l,
                e.width,
                e.height
              ),
                n.bindFramebuffer(
                  t.FRAMEBUFFER,
                  r.__webglMultisampledFramebuffer
                ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.RENDERBUFFER,
                  r.__webglColorRenderbuffer
                ),
                t.bindRenderbuffer(t.RENDERBUFFER, null),
                e.depthBuffer &&
                  ((r.__webglDepthRenderbuffer = t.createRenderbuffer()),
                  z(r.__webglDepthRenderbuffer, e, !0)),
                n.bindFramebuffer(t.FRAMEBUFFER, null);
            }
            if (h) {
              n.bindTexture(t.TEXTURE_CUBE_MAP, u.__webglTexture),
                N(t.TEXTURE_CUBE_MAP, i, p);
              for (let n = 0; n < 6; n++)
                F(
                  r.__webglFramebuffer[n],
                  e,
                  i,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + n
                );
              M(i, p) && w(t.TEXTURE_CUBE_MAP), n.unbindTexture();
            } else if (d) {
              const i = e.texture;
              for (let s = 0, o = i.length; s < o; s++) {
                const o = i[s],
                  l = a.get(o);
                n.bindTexture(t.TEXTURE_2D, l.__webglTexture),
                  N(t.TEXTURE_2D, o, p),
                  F(
                    r.__webglFramebuffer,
                    e,
                    o,
                    t.COLOR_ATTACHMENT0 + s,
                    t.TEXTURE_2D
                  ),
                  M(o, p) && w(t.TEXTURE_2D);
              }
              n.unbindTexture();
            } else {
              let a = t.TEXTURE_2D;
              (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
                (c
                  ? (a = e.isWebGL3DRenderTarget
                      ? t.TEXTURE_3D
                      : t.TEXTURE_2D_ARRAY)
                  : console.error(
                      'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.'
                    )),
                n.bindTexture(a, u.__webglTexture),
                N(a, i, p),
                F(r.__webglFramebuffer, e, i, t.COLOR_ATTACHMENT0, a),
                M(i, p) && w(a),
                n.unbindTexture();
            }
            e.depthBuffer && B(e);
          }),
          (this.updateRenderTargetMipmap = function (e) {
            const i = b(e) || c,
              r =
                !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
            for (let s = 0, o = r.length; s < o; s++) {
              const o = r[s];
              if (M(o, i)) {
                const i = e.isWebGLCubeRenderTarget
                    ? t.TEXTURE_CUBE_MAP
                    : t.TEXTURE_2D,
                  r = a.get(o).__webglTexture;
                n.bindTexture(i, r), w(i), n.unbindTexture();
              }
            }
          }),
          (this.updateMultisampleRenderTarget = function (e) {
            if (c && e.samples > 0 && !1 === G(e)) {
              const i = e.width,
                r = e.height;
              let s = t.COLOR_BUFFER_BIT;
              const o = [t.COLOR_ATTACHMENT0],
                l = e.stencilBuffer
                  ? t.DEPTH_STENCIL_ATTACHMENT
                  : t.DEPTH_ATTACHMENT;
              e.depthBuffer && o.push(l);
              const c = a.get(e),
                u = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
              !1 === u &&
                (e.depthBuffer && (s |= t.DEPTH_BUFFER_BIT),
                e.stencilBuffer && (s |= t.STENCIL_BUFFER_BIT)),
                n.bindFramebuffer(
                  t.READ_FRAMEBUFFER,
                  c.__webglMultisampledFramebuffer
                ),
                n.bindFramebuffer(t.DRAW_FRAMEBUFFER, c.__webglFramebuffer),
                !0 === u &&
                  (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [l]),
                  t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [l])),
                t.blitFramebuffer(0, 0, i, r, 0, 0, i, r, s, t.NEAREST),
                t.invalidateFramebuffer(t.READ_FRAMEBUFFER, o),
                n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
                n.bindFramebuffer(
                  t.DRAW_FRAMEBUFFER,
                  c.__webglMultisampledFramebuffer
                );
            }
          }),
          (this.setupDepthRenderbuffer = B),
          (this.setupFrameBufferTexture = F),
          (this.useMultisampledRTT = G);
      }
      function dn(t, e, n) {
        const r = n.isWebGL2;
        return {
          convert: function (n, a = null) {
            let s;
            if (n === i.yw) return t.UNSIGNED_BYTE;
            if (n === i.k0) return t.UNSIGNED_SHORT_4_4_4_4;
            if (n === i.ir) return t.UNSIGNED_SHORT_5_5_5_1;
            if (n === i.T9) return t.BYTE;
            if (n === i.iA) return t.SHORT;
            if (n === i.Ls) return t.UNSIGNED_SHORT;
            if (n === i.Kz) return t.INT;
            if (n === i.JQ) return t.UNSIGNED_INT;
            if (n === i.Vz) return t.FLOAT;
            if (n === i.cL)
              return r
                ? t.HALF_FLOAT
                : ((s = e.get('OES_texture_half_float')),
                  null !== s ? s.HALF_FLOAT_OES : null);
            if (n === i.OT) return t.ALPHA;
            if (n === i.wk) return t.RGBA;
            if (n === i.Y8) return t.LUMINANCE;
            if (n === i.cR) return t.LUMINANCE_ALPHA;
            if (n === i.qk) return t.DEPTH_COMPONENT;
            if (n === i.br) return t.DEPTH_STENCIL;
            if (n === i.hE) return t.RED;
            if (n === i.UC)
              return (
                console.warn(
                  'THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228'
                ),
                t.RGBA
              );
            if (n === i.L_)
              return (
                (s = e.get('EXT_sRGB')), null !== s ? s.SRGB_ALPHA_EXT : null
              );
            if (n === i.D9) return t.RED_INTEGER;
            if (n === i.av) return t.RG;
            if (n === i.Ct) return t.RG_INTEGER;
            if (n === i.E2) return t.RGBA_INTEGER;
            if (n === i.wu || n === i.BF || n === i.v3 || n === i.IL)
              if (a === i.kn) {
                if (
                  ((s = e.get('WEBGL_compressed_texture_s3tc_srgb')),
                  null === s)
                )
                  return null;
                if (n === i.wu) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (n === i.BF) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (n === i.v3) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (n === i.IL) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
              } else {
                if (((s = e.get('WEBGL_compressed_texture_s3tc')), null === s))
                  return null;
                if (n === i.wu) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === i.BF) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === i.v3) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === i.IL) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              }
            if (n === i._A || n === i.M9 || n === i.e || n === i.C) {
              if (((s = e.get('WEBGL_compressed_texture_pvrtc')), null === s))
                return null;
              if (n === i._A) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (n === i.M9) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (n === i.e) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (n === i.C) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (n === i.ft)
              return (
                (s = e.get('WEBGL_compressed_texture_etc1')),
                null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null
              );
            if (n === i.l0 || n === i.ek) {
              if (((s = e.get('WEBGL_compressed_texture_etc')), null === s))
                return null;
              if (n === i.l0)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ETC2
                  : s.COMPRESSED_RGB8_ETC2;
              if (n === i.ek)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
                  : s.COMPRESSED_RGBA8_ETC2_EAC;
            }
            if (
              n === i.pt ||
              n === i.jZ ||
              n === i.y2 ||
              n === i.gi ||
              n === i.Dj ||
              n === i.BG ||
              n === i.NY ||
              n === i.xJ ||
              n === i.pK ||
              n === i.GG ||
              n === i.Gi ||
              n === i.FU ||
              n === i.ii ||
              n === i.Sv
            ) {
              if (((s = e.get('WEBGL_compressed_texture_astc')), null === s))
                return null;
              if (n === i.pt)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
                  : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (n === i.jZ)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
                  : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (n === i.y2)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
                  : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (n === i.gi)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
                  : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (n === i.Dj)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
                  : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (n === i.BG)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
                  : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (n === i.NY)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
                  : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (n === i.xJ)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
                  : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (n === i.pK)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
                  : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (n === i.GG)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
                  : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (n === i.Gi)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
                  : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (n === i.FU)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
                  : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (n === i.ii)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
                  : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (n === i.Sv)
                return a === i.kn
                  ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
                  : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
            }
            if (n === i.bs) {
              if (((s = e.get('EXT_texture_compression_bptc')), null === s))
                return null;
              if (n === i.bs)
                return a === i.kn
                  ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
                  : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            }
            return n === i.wJ
              ? r
                ? t.UNSIGNED_INT_24_8
                : ((s = e.get('WEBGL_depth_texture')),
                  null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null)
              : void 0;
          },
        };
      }
      class pn extends G {
        constructor(t = []) {
          super(), (this.cameras = t);
        }
      }
      pn.prototype.isArrayCamera = !0;
      class fn extends B.T {
        constructor() {
          super(), (this.type = 'Group');
        }
      }
      fn.prototype.isGroup = !0;
      const mn = { type: 'move' };
      class gn {
        constructor() {
          (this._targetRay = null), (this._grip = null), (this._hand = null);
        }
        getHandSpace() {
          return (
            null === this._hand &&
              ((this._hand = new fn()),
              (this._hand.matrixAutoUpdate = !1),
              (this._hand.visible = !1),
              (this._hand.joints = {}),
              (this._hand.inputState = { pinching: !1 })),
            this._hand
          );
        }
        getTargetRaySpace() {
          return (
            null === this._targetRay &&
              ((this._targetRay = new fn()),
              (this._targetRay.matrixAutoUpdate = !1),
              (this._targetRay.visible = !1),
              (this._targetRay.hasLinearVelocity = !1),
              (this._targetRay.linearVelocity = new a.P()),
              (this._targetRay.hasAngularVelocity = !1),
              (this._targetRay.angularVelocity = new a.P())),
            this._targetRay
          );
        }
        getGripSpace() {
          return (
            null === this._grip &&
              ((this._grip = new fn()),
              (this._grip.matrixAutoUpdate = !1),
              (this._grip.visible = !1),
              (this._grip.hasLinearVelocity = !1),
              (this._grip.linearVelocity = new a.P()),
              (this._grip.hasAngularVelocity = !1),
              (this._grip.angularVelocity = new a.P())),
            this._grip
          );
        }
        dispatchEvent(t) {
          return (
            null !== this._targetRay && this._targetRay.dispatchEvent(t),
            null !== this._grip && this._grip.dispatchEvent(t),
            null !== this._hand && this._hand.dispatchEvent(t),
            this
          );
        }
        disconnect(t) {
          return (
            this.dispatchEvent({ type: 'disconnected', data: t }),
            null !== this._targetRay && (this._targetRay.visible = !1),
            null !== this._grip && (this._grip.visible = !1),
            null !== this._hand && (this._hand.visible = !1),
            this
          );
        }
        update(t, e, n) {
          let i = null,
            r = null,
            a = null;
          const s = this._targetRay,
            o = this._grip,
            l = this._hand;
          if (t && 'visible-blurred' !== e.session.visibilityState)
            if (
              (null !== s &&
                ((i = e.getPose(t.targetRaySpace, n)),
                null !== i &&
                  (s.matrix.fromArray(i.transform.matrix),
                  s.matrix.decompose(s.position, s.rotation, s.scale),
                  i.linearVelocity
                    ? ((s.hasLinearVelocity = !0),
                      s.linearVelocity.copy(i.linearVelocity))
                    : (s.hasLinearVelocity = !1),
                  i.angularVelocity
                    ? ((s.hasAngularVelocity = !0),
                      s.angularVelocity.copy(i.angularVelocity))
                    : (s.hasAngularVelocity = !1),
                  this.dispatchEvent(mn))),
              l && t.hand)
            ) {
              a = !0;
              for (const i of t.hand.values()) {
                const t = e.getJointPose(i, n);
                if (void 0 === l.joints[i.jointName]) {
                  const t = new fn();
                  (t.matrixAutoUpdate = !1),
                    (t.visible = !1),
                    (l.joints[i.jointName] = t),
                    l.add(t);
                }
                const r = l.joints[i.jointName];
                null !== t &&
                  (r.matrix.fromArray(t.transform.matrix),
                  r.matrix.decompose(r.position, r.rotation, r.scale),
                  (r.jointRadius = t.radius)),
                  (r.visible = null !== t);
              }
              const i = l.joints['index-finger-tip'],
                r = l.joints['thumb-tip'],
                s = i.position.distanceTo(r.position),
                o = 0.02,
                c = 0.005;
              l.inputState.pinching && s > o + c
                ? ((l.inputState.pinching = !1),
                  this.dispatchEvent({
                    type: 'pinchend',
                    handedness: t.handedness,
                    target: this,
                  }))
                : !l.inputState.pinching &&
                  s <= o - c &&
                  ((l.inputState.pinching = !0),
                  this.dispatchEvent({
                    type: 'pinchstart',
                    handedness: t.handedness,
                    target: this,
                  }));
            } else
              null !== o &&
                t.gripSpace &&
                ((r = e.getPose(t.gripSpace, n)),
                null !== r &&
                  (o.matrix.fromArray(r.transform.matrix),
                  o.matrix.decompose(o.position, o.rotation, o.scale),
                  r.linearVelocity
                    ? ((o.hasLinearVelocity = !0),
                      o.linearVelocity.copy(r.linearVelocity))
                    : (o.hasLinearVelocity = !1),
                  r.angularVelocity
                    ? ((o.hasAngularVelocity = !0),
                      o.angularVelocity.copy(r.angularVelocity))
                    : (o.hasAngularVelocity = !1)));
          return (
            null !== s && (s.visible = null !== i),
            null !== o && (o.visible = null !== r),
            null !== l && (l.visible = null !== a),
            this
          );
        }
      }
      class _n extends F.x {
        constructor(t, e, n, r, a, s, o, l, c, u) {
          if ((u = void 0 !== u ? u : i.qk) !== i.qk && u !== i.br)
            throw new Error(
              'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
            );
          void 0 === n && u === i.qk && (n = i.Ls),
            void 0 === n && u === i.br && (n = i.wJ),
            super(null, r, a, s, o, l, u, n, c),
            (this.image = { width: t, height: e }),
            (this.magFilter = void 0 !== o ? o : i.Ty),
            (this.minFilter = void 0 !== l ? l : i.Ty),
            (this.flipY = !1),
            (this.generateMipmaps = !1);
        }
      }
      _n.prototype.isDepthTexture = !0;
      class vn extends U.p {
        constructor(t, e) {
          super();
          const n = this;
          let r = null,
            s = 1,
            o = null,
            l = 'local-floor',
            c = null,
            u = null,
            h = null,
            d = null,
            p = null;
          const f = e.getContextAttributes();
          let m = null,
            g = null;
          const x = [],
            y = new Map(),
            b = new G();
          b.layers.enable(1), (b.viewport = new _.L());
          const M = new G();
          M.layers.enable(2), (M.viewport = new _.L());
          const w = [b, M],
            S = new pn();
          S.layers.enable(1), S.layers.enable(2);
          let E = null,
            T = null;
          function A(t) {
            const e = y.get(t.inputSource);
            e && e.dispatchEvent({ type: t.type, data: t.inputSource });
          }
          function R() {
            y.forEach(function (t, e) {
              t.disconnect(e);
            }),
              y.clear(),
              (E = null),
              (T = null),
              t.setRenderTarget(m),
              (d = null),
              (h = null),
              (u = null),
              (r = null),
              (g = null),
              N.stop(),
              (n.isPresenting = !1),
              n.dispatchEvent({ type: 'sessionend' });
          }
          function L(t) {
            const e = r.inputSources;
            for (let t = 0; t < x.length; t++) y.set(e[t], x[t]);
            for (let e = 0; e < t.removed.length; e++) {
              const n = t.removed[e],
                i = y.get(n);
              i &&
                (i.dispatchEvent({ type: 'disconnected', data: n }),
                y.delete(n));
            }
            for (let e = 0; e < t.added.length; e++) {
              const n = t.added[e],
                i = y.get(n);
              i && i.dispatchEvent({ type: 'connected', data: n });
            }
          }
          (this.cameraAutoUpdate = !0),
            (this.enabled = !1),
            (this.isPresenting = !1),
            (this.getController = function (t) {
              let e = x[t];
              return (
                void 0 === e && ((e = new gn()), (x[t] = e)),
                e.getTargetRaySpace()
              );
            }),
            (this.getControllerGrip = function (t) {
              let e = x[t];
              return (
                void 0 === e && ((e = new gn()), (x[t] = e)), e.getGripSpace()
              );
            }),
            (this.getHand = function (t) {
              let e = x[t];
              return (
                void 0 === e && ((e = new gn()), (x[t] = e)), e.getHandSpace()
              );
            }),
            (this.setFramebufferScaleFactor = function (t) {
              (s = t),
                !0 === n.isPresenting &&
                  console.warn(
                    'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
                  );
            }),
            (this.setReferenceSpaceType = function (t) {
              (l = t),
                !0 === n.isPresenting &&
                  console.warn(
                    'THREE.WebXRManager: Cannot change reference space type while presenting.'
                  );
            }),
            (this.getReferenceSpace = function () {
              return o;
            }),
            (this.getBaseLayer = function () {
              return null !== h ? h : d;
            }),
            (this.getBinding = function () {
              return u;
            }),
            (this.getFrame = function () {
              return p;
            }),
            (this.getSession = function () {
              return r;
            }),
            (this.setSession = async function (a) {
              if (((r = a), null !== r)) {
                if (
                  ((m = t.getRenderTarget()),
                  r.addEventListener('select', A),
                  r.addEventListener('selectstart', A),
                  r.addEventListener('selectend', A),
                  r.addEventListener('squeeze', A),
                  r.addEventListener('squeezestart', A),
                  r.addEventListener('squeezeend', A),
                  r.addEventListener('end', R),
                  r.addEventListener('inputsourceschange', L),
                  !0 !== f.xrCompatible && (await e.makeXRCompatible()),
                  void 0 === r.renderState.layers ||
                    !1 === t.capabilities.isWebGL2)
                ) {
                  const n = {
                    antialias: void 0 !== r.renderState.layers || f.antialias,
                    alpha: f.alpha,
                    depth: f.depth,
                    stencil: f.stencil,
                    framebufferScaleFactor: s,
                  };
                  (d = new XRWebGLLayer(r, e, n)),
                    r.updateRenderState({ baseLayer: d }),
                    (g = new z(d.framebufferWidth, d.framebufferHeight, {
                      format: i.wk,
                      type: i.yw,
                      encoding: t.outputEncoding,
                    }));
                } else {
                  let n = null,
                    a = null,
                    o = null;
                  f.depth &&
                    ((o = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                    (n = f.stencil ? i.br : i.qk),
                    (a = f.stencil ? i.wJ : i.Ls));
                  const l = {
                    colorFormat:
                      t.outputEncoding === i.kn ? e.SRGB8_ALPHA8 : e.RGBA8,
                    depthFormat: o,
                    scaleFactor: s,
                  };
                  (u = new XRWebGLBinding(r, e)),
                    (h = u.createProjectionLayer(l)),
                    r.updateRenderState({ layers: [h] }),
                    (g = new z(h.textureWidth, h.textureHeight, {
                      format: i.wk,
                      type: i.yw,
                      depthTexture: new _n(
                        h.textureWidth,
                        h.textureHeight,
                        a,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        n
                      ),
                      stencilBuffer: f.stencil,
                      encoding: t.outputEncoding,
                      samples: f.antialias ? 4 : 0,
                    })),
                    (t.properties.get(g).__ignoreDepthValues =
                      h.ignoreDepthValues);
                }
                (g.isXRRenderTarget = !0),
                  this.setFoveation(1),
                  (o = await r.requestReferenceSpace(l)),
                  N.setContext(r),
                  N.start(),
                  (n.isPresenting = !0),
                  n.dispatchEvent({ type: 'sessionstart' });
              }
            });
          const C = new a.P(),
            P = new a.P();
          function D(t, e) {
            null === e
              ? t.matrixWorld.copy(t.matrix)
              : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
              t.matrixWorldInverse.copy(t.matrixWorld).invert();
          }
          (this.updateCamera = function (t) {
            if (null === r) return;
            (S.near = M.near = b.near = t.near),
              (S.far = M.far = b.far = t.far),
              (E === S.near && T === S.far) ||
                (r.updateRenderState({ depthNear: S.near, depthFar: S.far }),
                (E = S.near),
                (T = S.far));
            const e = t.parent,
              n = S.cameras;
            D(S, e);
            for (let t = 0; t < n.length; t++) D(n[t], e);
            S.matrixWorld.decompose(S.position, S.quaternion, S.scale),
              t.position.copy(S.position),
              t.quaternion.copy(S.quaternion),
              t.scale.copy(S.scale),
              t.matrix.copy(S.matrix),
              t.matrixWorld.copy(S.matrixWorld);
            const i = t.children;
            for (let t = 0, e = i.length; t < e; t++)
              i[t].updateMatrixWorld(!0);
            2 === n.length
              ? (function (t, e, n) {
                  C.setFromMatrixPosition(e.matrixWorld),
                    P.setFromMatrixPosition(n.matrixWorld);
                  const i = C.distanceTo(P),
                    r = e.projectionMatrix.elements,
                    a = n.projectionMatrix.elements,
                    s = r[14] / (r[10] - 1),
                    o = r[14] / (r[10] + 1),
                    l = (r[9] + 1) / r[5],
                    c = (r[9] - 1) / r[5],
                    u = (r[8] - 1) / r[0],
                    h = (a[8] + 1) / a[0],
                    d = s * u,
                    p = s * h,
                    f = i / (-u + h),
                    m = f * -u;
                  e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                    t.translateX(m),
                    t.translateZ(f),
                    t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                    t.matrixWorldInverse.copy(t.matrixWorld).invert();
                  const g = s + f,
                    _ = o + f,
                    v = d - m,
                    x = p + (i - m),
                    y = ((l * o) / _) * g,
                    b = ((c * o) / _) * g;
                  t.projectionMatrix.makePerspective(v, x, y, b, g, _);
                })(S, b, M)
              : S.projectionMatrix.copy(b.projectionMatrix);
          }),
            (this.getCamera = function () {
              return S;
            }),
            (this.getFoveation = function () {
              return null !== h
                ? h.fixedFoveation
                : null !== d
                ? d.fixedFoveation
                : void 0;
            }),
            (this.setFoveation = function (t) {
              null !== h && (h.fixedFoveation = t),
                null !== d &&
                  void 0 !== d.fixedFoveation &&
                  (d.fixedFoveation = t);
            });
          let O = null;
          const N = new v();
          N.setAnimationLoop(function (e, n) {
            if (((c = n.getViewerPose(o)), (p = n), null !== c)) {
              const e = c.views;
              null !== d &&
                (t.setRenderTargetFramebuffer(g, d.framebuffer),
                t.setRenderTarget(g));
              let n = !1;
              e.length !== S.cameras.length &&
                ((S.cameras.length = 0), (n = !0));
              for (let i = 0; i < e.length; i++) {
                const r = e[i];
                let a = null;
                if (null !== d) a = d.getViewport(r);
                else {
                  const e = u.getViewSubImage(h, r);
                  (a = e.viewport),
                    0 === i &&
                      (t.setRenderTargetTextures(
                        g,
                        e.colorTexture,
                        h.ignoreDepthValues ? void 0 : e.depthStencilTexture
                      ),
                      t.setRenderTarget(g));
                }
                const s = w[i];
                s.matrix.fromArray(r.transform.matrix),
                  s.projectionMatrix.fromArray(r.projectionMatrix),
                  s.viewport.set(a.x, a.y, a.width, a.height),
                  0 === i && S.matrix.copy(s.matrix),
                  !0 === n && S.cameras.push(s);
              }
            }
            const i = r.inputSources;
            for (let t = 0; t < x.length; t++) {
              const e = x[t],
                r = i[t];
              e.update(r, n, o);
            }
            O && O(e, n), (p = null);
          }),
            (this.setAnimationLoop = function (t) {
              O = t;
            }),
            (this.dispose = function () {});
        }
      }
      function xn(t) {
        function e(e, n) {
          (e.opacity.value = n.opacity),
            n.color && e.diffuse.value.copy(n.color),
            n.emissive &&
              e.emissive.value
                .copy(n.emissive)
                .multiplyScalar(n.emissiveIntensity),
            n.map && (e.map.value = n.map),
            n.alphaMap && (e.alphaMap.value = n.alphaMap),
            n.specularMap && (e.specularMap.value = n.specularMap),
            n.alphaTest > 0 && (e.alphaTest.value = n.alphaTest);
          const i = t.get(n).envMap;
          let r, a;
          i &&
            ((e.envMap.value = i),
            (e.flipEnvMap.value =
              i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
            (e.reflectivity.value = n.reflectivity),
            (e.ior.value = n.ior),
            (e.refractionRatio.value = n.refractionRatio)),
            n.lightMap &&
              ((e.lightMap.value = n.lightMap),
              (e.lightMapIntensity.value = n.lightMapIntensity)),
            n.aoMap &&
              ((e.aoMap.value = n.aoMap),
              (e.aoMapIntensity.value = n.aoMapIntensity)),
            n.map
              ? (r = n.map)
              : n.specularMap
              ? (r = n.specularMap)
              : n.displacementMap
              ? (r = n.displacementMap)
              : n.normalMap
              ? (r = n.normalMap)
              : n.bumpMap
              ? (r = n.bumpMap)
              : n.roughnessMap
              ? (r = n.roughnessMap)
              : n.metalnessMap
              ? (r = n.metalnessMap)
              : n.alphaMap
              ? (r = n.alphaMap)
              : n.emissiveMap
              ? (r = n.emissiveMap)
              : n.clearcoatMap
              ? (r = n.clearcoatMap)
              : n.clearcoatNormalMap
              ? (r = n.clearcoatNormalMap)
              : n.clearcoatRoughnessMap
              ? (r = n.clearcoatRoughnessMap)
              : n.specularIntensityMap
              ? (r = n.specularIntensityMap)
              : n.specularColorMap
              ? (r = n.specularColorMap)
              : n.transmissionMap
              ? (r = n.transmissionMap)
              : n.thicknessMap
              ? (r = n.thicknessMap)
              : n.sheenColorMap
              ? (r = n.sheenColorMap)
              : n.sheenRoughnessMap && (r = n.sheenRoughnessMap),
            void 0 !== r &&
              (r.isWebGLRenderTarget && (r = r.texture),
              !0 === r.matrixAutoUpdate && r.updateMatrix(),
              e.uvTransform.value.copy(r.matrix)),
            n.aoMap ? (a = n.aoMap) : n.lightMap && (a = n.lightMap),
            void 0 !== a &&
              (a.isWebGLRenderTarget && (a = a.texture),
              !0 === a.matrixAutoUpdate && a.updateMatrix(),
              e.uv2Transform.value.copy(a.matrix));
        }
        function n(e, n) {
          (e.roughness.value = n.roughness),
            (e.metalness.value = n.metalness),
            n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
            n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
            n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
            n.bumpMap &&
              ((e.bumpMap.value = n.bumpMap),
              (e.bumpScale.value = n.bumpScale),
              n.side === i._L && (e.bumpScale.value *= -1)),
            n.normalMap &&
              ((e.normalMap.value = n.normalMap),
              e.normalScale.value.copy(n.normalScale),
              n.side === i._L && e.normalScale.value.negate()),
            n.displacementMap &&
              ((e.displacementMap.value = n.displacementMap),
              (e.displacementScale.value = n.displacementScale),
              (e.displacementBias.value = n.displacementBias)),
            t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
        }
        return {
          refreshFogUniforms: function (t, e) {
            t.fogColor.value.copy(e.color),
              e.isFog
                ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
                : e.isFogExp2 && (t.fogDensity.value = e.density);
          },
          refreshMaterialUniforms: function (t, r, a, s, o) {
            r.isMeshBasicMaterial
              ? e(t, r)
              : r.isMeshLambertMaterial
              ? (e(t, r),
                (function (t, e) {
                  e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                })(t, r))
              : r.isMeshToonMaterial
              ? (e(t, r),
                (function (t, e) {
                  e.gradientMap && (t.gradientMap.value = e.gradientMap),
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                    e.bumpMap &&
                      ((t.bumpMap.value = e.bumpMap),
                      (t.bumpScale.value = e.bumpScale),
                      e.side === i._L && (t.bumpScale.value *= -1)),
                    e.normalMap &&
                      ((t.normalMap.value = e.normalMap),
                      t.normalScale.value.copy(e.normalScale),
                      e.side === i._L && t.normalScale.value.negate()),
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                })(t, r))
              : r.isMeshPhongMaterial
              ? (e(t, r),
                (function (t, e) {
                  t.specular.value.copy(e.specular),
                    (t.shininess.value = Math.max(e.shininess, 1e-4)),
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                    e.bumpMap &&
                      ((t.bumpMap.value = e.bumpMap),
                      (t.bumpScale.value = e.bumpScale),
                      e.side === i._L && (t.bumpScale.value *= -1)),
                    e.normalMap &&
                      ((t.normalMap.value = e.normalMap),
                      t.normalScale.value.copy(e.normalScale),
                      e.side === i._L && t.normalScale.value.negate()),
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                })(t, r))
              : r.isMeshStandardMaterial
              ? (e(t, r),
                r.isMeshPhysicalMaterial
                  ? (function (t, e, r) {
                      n(t, e),
                        (t.ior.value = e.ior),
                        e.sheen > 0 &&
                          (t.sheenColor.value
                            .copy(e.sheenColor)
                            .multiplyScalar(e.sheen),
                          (t.sheenRoughness.value = e.sheenRoughness),
                          e.sheenColorMap &&
                            (t.sheenColorMap.value = e.sheenColorMap),
                          e.sheenRoughnessMap &&
                            (t.sheenRoughnessMap.value = e.sheenRoughnessMap)),
                        e.clearcoat > 0 &&
                          ((t.clearcoat.value = e.clearcoat),
                          (t.clearcoatRoughness.value = e.clearcoatRoughness),
                          e.clearcoatMap &&
                            (t.clearcoatMap.value = e.clearcoatMap),
                          e.clearcoatRoughnessMap &&
                            (t.clearcoatRoughnessMap.value =
                              e.clearcoatRoughnessMap),
                          e.clearcoatNormalMap &&
                            (t.clearcoatNormalScale.value.copy(
                              e.clearcoatNormalScale
                            ),
                            (t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                            e.side === i._L &&
                              t.clearcoatNormalScale.value.negate())),
                        e.transmission > 0 &&
                          ((t.transmission.value = e.transmission),
                          (t.transmissionSamplerMap.value = r.texture),
                          t.transmissionSamplerSize.value.set(
                            r.width,
                            r.height
                          ),
                          e.transmissionMap &&
                            (t.transmissionMap.value = e.transmissionMap),
                          (t.thickness.value = e.thickness),
                          e.thicknessMap &&
                            (t.thicknessMap.value = e.thicknessMap),
                          (t.attenuationDistance.value = e.attenuationDistance),
                          t.attenuationColor.value.copy(e.attenuationColor)),
                        (t.specularIntensity.value = e.specularIntensity),
                        t.specularColor.value.copy(e.specularColor),
                        e.specularIntensityMap &&
                          (t.specularIntensityMap.value =
                            e.specularIntensityMap),
                        e.specularColorMap &&
                          (t.specularColorMap.value = e.specularColorMap);
                    })(t, r, o)
                  : n(t, r))
              : r.isMeshMatcapMaterial
              ? (e(t, r),
                (function (t, e) {
                  e.matcap && (t.matcap.value = e.matcap),
                    e.bumpMap &&
                      ((t.bumpMap.value = e.bumpMap),
                      (t.bumpScale.value = e.bumpScale),
                      e.side === i._L && (t.bumpScale.value *= -1)),
                    e.normalMap &&
                      ((t.normalMap.value = e.normalMap),
                      t.normalScale.value.copy(e.normalScale),
                      e.side === i._L && t.normalScale.value.negate()),
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                })(t, r))
              : r.isMeshDepthMaterial
              ? (e(t, r),
                (function (t, e) {
                  e.displacementMap &&
                    ((t.displacementMap.value = e.displacementMap),
                    (t.displacementScale.value = e.displacementScale),
                    (t.displacementBias.value = e.displacementBias));
                })(t, r))
              : r.isMeshDistanceMaterial
              ? (e(t, r),
                (function (t, e) {
                  e.displacementMap &&
                    ((t.displacementMap.value = e.displacementMap),
                    (t.displacementScale.value = e.displacementScale),
                    (t.displacementBias.value = e.displacementBias)),
                    t.referencePosition.value.copy(e.referencePosition),
                    (t.nearDistance.value = e.nearDistance),
                    (t.farDistance.value = e.farDistance);
                })(t, r))
              : r.isMeshNormalMaterial
              ? (e(t, r),
                (function (t, e) {
                  e.bumpMap &&
                    ((t.bumpMap.value = e.bumpMap),
                    (t.bumpScale.value = e.bumpScale),
                    e.side === i._L && (t.bumpScale.value *= -1)),
                    e.normalMap &&
                      ((t.normalMap.value = e.normalMap),
                      t.normalScale.value.copy(e.normalScale),
                      e.side === i._L && t.normalScale.value.negate()),
                    e.displacementMap &&
                      ((t.displacementMap.value = e.displacementMap),
                      (t.displacementScale.value = e.displacementScale),
                      (t.displacementBias.value = e.displacementBias));
                })(t, r))
              : r.isLineBasicMaterial
              ? ((function (t, e) {
                  t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
                })(t, r),
                r.isLineDashedMaterial &&
                  (function (t, e) {
                    (t.dashSize.value = e.dashSize),
                      (t.totalSize.value = e.dashSize + e.gapSize),
                      (t.scale.value = e.scale);
                  })(t, r))
              : r.isPointsMaterial
              ? (function (t, e, n, i) {
                  let r;
                  t.diffuse.value.copy(e.color),
                    (t.opacity.value = e.opacity),
                    (t.size.value = e.size * n),
                    (t.scale.value = 0.5 * i),
                    e.map && (t.map.value = e.map),
                    e.alphaMap && (t.alphaMap.value = e.alphaMap),
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                    e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap),
                    void 0 !== r &&
                      (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                      t.uvTransform.value.copy(r.matrix));
                })(t, r, a, s)
              : r.isSpriteMaterial
              ? (function (t, e) {
                  let n;
                  t.diffuse.value.copy(e.color),
                    (t.opacity.value = e.opacity),
                    (t.rotation.value = e.rotation),
                    e.map && (t.map.value = e.map),
                    e.alphaMap && (t.alphaMap.value = e.alphaMap),
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                    e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap),
                    void 0 !== n &&
                      (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                      t.uvTransform.value.copy(n.matrix));
                })(t, r)
              : r.isShadowMaterial
              ? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
              : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
          },
        };
      }
      function yn(t = {}) {
        const e =
            void 0 !== t.canvas
              ? t.canvas
              : (function () {
                  const t = (0, ct.c)('canvas');
                  return (t.style.display = 'block'), t;
                })(),
          n = void 0 !== t.context ? t.context : null,
          s = void 0 === t.depth || t.depth,
          o = void 0 === t.stencil || t.stencil,
          l = void 0 !== t.antialias && t.antialias,
          c = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          u = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          h = void 0 !== t.powerPreference ? t.powerPreference : 'default',
          d =
            void 0 !== t.failIfMajorPerformanceCaveat &&
            t.failIfMajorPerformanceCaveat;
        let p;
        p =
          void 0 !== t.context
            ? n.getContextAttributes().alpha
            : void 0 !== t.alpha && t.alpha;
        let y = null,
          b = null;
        const M = [],
          w = [];
        (this.domElement = e),
          (this.debug = { checkShaderErrors: !0 }),
          (this.autoClear = !0),
          (this.autoClearColor = !0),
          (this.autoClearDepth = !0),
          (this.autoClearStencil = !0),
          (this.sortObjects = !0),
          (this.clippingPlanes = []),
          (this.localClippingEnabled = !1),
          (this.outputEncoding = i.rn),
          (this.physicallyCorrectLights = !1),
          (this.toneMapping = i.uL),
          (this.toneMappingExposure = 1);
        const S = this;
        let E = !1,
          T = 0,
          A = 0,
          R = null,
          L = -1,
          C = null;
        const U = new _.L(),
          F = new _.L();
        let B = null,
          k = e.width,
          G = e.height,
          H = 1,
          V = null,
          W = null;
        const X = new _.L(0, 0, k, G),
          q = new _.L(0, 0, k, G);
        let Y = !1;
        const Z = new f();
        let K = !1,
          J = !1,
          $ = null;
        const Q = new m.y(),
          tt = new g.F(),
          et = new a.P(),
          nt = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0,
          };
        function it() {
          return null === R ? H : 1;
        }
        let rt,
          at,
          st,
          pt,
          ft,
          mt,
          gt,
          xt,
          yt,
          bt,
          Mt,
          wt,
          St,
          Et,
          Tt,
          At,
          Rt,
          Lt,
          Ct,
          Pt,
          Dt,
          Ot,
          Nt,
          It = n;
        function Ut(t, n) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i],
              a = e.getContext(r, n);
            if (null !== a) return a;
          }
          return null;
        }
        try {
          const t = {
            alpha: !0,
            depth: s,
            stencil: o,
            antialias: l,
            premultipliedAlpha: c,
            preserveDrawingBuffer: u,
            powerPreference: h,
            failIfMajorPerformanceCaveat: d,
          };
          if (
            ('setAttribute' in e &&
              e.setAttribute('data-engine', `three.js r${i.UZ}`),
            e.addEventListener('webglcontextlost', Bt, !1),
            e.addEventListener('webglcontextrestored', kt, !1),
            null === It)
          ) {
            const e = ['webgl2', 'webgl', 'experimental-webgl'];
            if (
              (!0 === S.isWebGL1Renderer && e.shift(),
              (It = Ut(e, t)),
              null === It)
            )
              throw Ut(e)
                ? new Error(
                    'Error creating WebGL context with your selected attributes.'
                  )
                : new Error('Error creating WebGL context.');
          }
          void 0 === It.getShaderPrecisionFormat &&
            (It.getShaderPrecisionFormat = function () {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
        } catch (t) {
          throw (console.error('THREE.WebGLRenderer: ' + t.message), t);
        }
        function Ft() {
          (rt = new lt(It)),
            (at = new N(It, rt, t)),
            rt.init(at),
            (Ot = new dn(It, rt, at)),
            (st = new cn(It, rt, at)),
            (pt = new dt(It)),
            (ft = new qe()),
            (mt = new hn(It, rt, st, ft, at, Ot, pt)),
            (gt = new j(S)),
            (xt = new ot(S)),
            (yt = new x(It, at)),
            (Nt = new D(It, rt, yt, at)),
            (bt = new ut(It, yt, pt, Nt)),
            (Mt = new vt(It, bt, yt, pt)),
            (Ct = new _t(It, at, mt)),
            (At = new I(ft)),
            (wt = new je(S, gt, xt, rt, at, Nt, At)),
            (St = new xn(ft)),
            (Et = new Je()),
            (Tt = new rn(rt, at)),
            (Lt = new P(S, gt, st, Mt, p, c)),
            (Rt = new ln(S, Mt, at)),
            (Pt = new O(It, rt, pt, at)),
            (Dt = new ht(It, rt, pt, at)),
            (pt.programs = wt.programs),
            (S.capabilities = at),
            (S.extensions = rt),
            (S.properties = ft),
            (S.renderLists = Et),
            (S.shadowMap = Rt),
            (S.state = st),
            (S.info = pt);
        }
        Ft();
        const zt = new vn(S, It);
        function Bt(t) {
          t.preventDefault(),
            console.log('THREE.WebGLRenderer: Context Lost.'),
            (E = !0);
        }
        function kt() {
          console.log('THREE.WebGLRenderer: Context Restored.'), (E = !1);
          const t = pt.autoReset,
            e = Rt.enabled,
            n = Rt.autoUpdate,
            i = Rt.needsUpdate,
            r = Rt.type;
          Ft(),
            (pt.autoReset = t),
            (Rt.enabled = e),
            (Rt.autoUpdate = n),
            (Rt.needsUpdate = i),
            (Rt.type = r);
        }
        function Gt(t) {
          const e = t.target;
          e.removeEventListener('dispose', Gt),
            (function (t) {
              (function (t) {
                const e = ft.get(t).programs;
                void 0 !== e &&
                  (e.forEach(function (t) {
                    wt.releaseProgram(t);
                  }),
                  t.isShaderMaterial && wt.releaseShaderCache(t));
              })(t),
                ft.remove(t);
            })(e);
        }
        (this.xr = zt),
          (this.getContext = function () {
            return It;
          }),
          (this.getContextAttributes = function () {
            return It.getContextAttributes();
          }),
          (this.forceContextLoss = function () {
            const t = rt.get('WEBGL_lose_context');
            t && t.loseContext();
          }),
          (this.forceContextRestore = function () {
            const t = rt.get('WEBGL_lose_context');
            t && t.restoreContext();
          }),
          (this.getPixelRatio = function () {
            return H;
          }),
          (this.setPixelRatio = function (t) {
            void 0 !== t && ((H = t), this.setSize(k, G, !1));
          }),
          (this.getSize = function (t) {
            return t.set(k, G);
          }),
          (this.setSize = function (t, n, i) {
            zt.isPresenting
              ? console.warn(
                  "THREE.WebGLRenderer: Can't change size while VR device is presenting."
                )
              : ((k = t),
                (G = n),
                (e.width = Math.floor(t * H)),
                (e.height = Math.floor(n * H)),
                !1 !== i &&
                  ((e.style.width = t + 'px'), (e.style.height = n + 'px')),
                this.setViewport(0, 0, t, n));
          }),
          (this.getDrawingBufferSize = function (t) {
            return t.set(k * H, G * H).floor();
          }),
          (this.setDrawingBufferSize = function (t, n, i) {
            (k = t),
              (G = n),
              (H = i),
              (e.width = Math.floor(t * i)),
              (e.height = Math.floor(n * i)),
              this.setViewport(0, 0, t, n);
          }),
          (this.getCurrentViewport = function (t) {
            return t.copy(U);
          }),
          (this.getViewport = function (t) {
            return t.copy(X);
          }),
          (this.setViewport = function (t, e, n, i) {
            t.isVector4 ? X.set(t.x, t.y, t.z, t.w) : X.set(t, e, n, i),
              st.viewport(U.copy(X).multiplyScalar(H).floor());
          }),
          (this.getScissor = function (t) {
            return t.copy(q);
          }),
          (this.setScissor = function (t, e, n, i) {
            t.isVector4 ? q.set(t.x, t.y, t.z, t.w) : q.set(t, e, n, i),
              st.scissor(F.copy(q).multiplyScalar(H).floor());
          }),
          (this.getScissorTest = function () {
            return Y;
          }),
          (this.setScissorTest = function (t) {
            st.setScissorTest((Y = t));
          }),
          (this.setOpaqueSort = function (t) {
            V = t;
          }),
          (this.setTransparentSort = function (t) {
            W = t;
          }),
          (this.getClearColor = function (t) {
            return t.copy(Lt.getClearColor());
          }),
          (this.setClearColor = function () {
            Lt.setClearColor.apply(Lt, arguments);
          }),
          (this.getClearAlpha = function () {
            return Lt.getClearAlpha();
          }),
          (this.setClearAlpha = function () {
            Lt.setClearAlpha.apply(Lt, arguments);
          }),
          (this.clear = function (t = !0, e = !0, n = !0) {
            let i = 0;
            t && (i |= It.COLOR_BUFFER_BIT),
              e && (i |= It.DEPTH_BUFFER_BIT),
              n && (i |= It.STENCIL_BUFFER_BIT),
              It.clear(i);
          }),
          (this.clearColor = function () {
            this.clear(!0, !1, !1);
          }),
          (this.clearDepth = function () {
            this.clear(!1, !0, !1);
          }),
          (this.clearStencil = function () {
            this.clear(!1, !1, !0);
          }),
          (this.dispose = function () {
            e.removeEventListener('webglcontextlost', Bt, !1),
              e.removeEventListener('webglcontextrestored', kt, !1),
              Et.dispose(),
              Tt.dispose(),
              ft.dispose(),
              gt.dispose(),
              xt.dispose(),
              Mt.dispose(),
              Nt.dispose(),
              wt.dispose(),
              zt.dispose(),
              zt.removeEventListener('sessionstart', Vt),
              zt.removeEventListener('sessionend', Wt),
              $ && ($.dispose(), ($ = null)),
              Xt.stop();
          }),
          (this.renderBufferDirect = function (t, e, n, r, a, s) {
            null === e && (e = nt);
            const o = a.isMesh && a.matrixWorld.determinant() < 0,
              l = (function (t, e, n, r, a) {
                !0 !== e.isScene && (e = nt), mt.resetTextureUnits();
                const s = e.fog,
                  o = r.isMeshStandardMaterial ? e.environment : null,
                  l =
                    null === R
                      ? S.outputEncoding
                      : !0 === R.isXRRenderTarget
                      ? R.texture.encoding
                      : i.rn,
                  c = (r.isMeshStandardMaterial ? xt : gt).get(r.envMap || o),
                  u =
                    !0 === r.vertexColors &&
                    !!n.attributes.color &&
                    4 === n.attributes.color.itemSize,
                  h = !!r.normalMap && !!n.attributes.tangent,
                  d = !!n.morphAttributes.position,
                  p = !!n.morphAttributes.normal,
                  f = !!n.morphAttributes.color,
                  m = r.toneMapped ? S.toneMapping : i.uL,
                  g =
                    n.morphAttributes.position ||
                    n.morphAttributes.normal ||
                    n.morphAttributes.color,
                  _ = void 0 !== g ? g.length : 0,
                  v = ft.get(r),
                  x = b.state.lights;
                if (!0 === K && (!0 === J || t !== C)) {
                  const e = t === C && r.id === L;
                  At.setState(r, t, e);
                }
                let y = !1;
                r.version === v.__version
                  ? (v.needsLights &&
                      v.lightsStateVersion !== x.state.version) ||
                    v.outputEncoding !== l ||
                    (a.isInstancedMesh && !1 === v.instancing)
                    ? (y = !0)
                    : a.isInstancedMesh || !0 !== v.instancing
                    ? a.isSkinnedMesh && !1 === v.skinning
                      ? (y = !0)
                      : a.isSkinnedMesh || !0 !== v.skinning
                      ? v.envMap !== c || (r.fog && v.fog !== s)
                        ? (y = !0)
                        : void 0 === v.numClippingPlanes ||
                          (v.numClippingPlanes === At.numPlanes &&
                            v.numIntersection === At.numIntersection)
                        ? (v.vertexAlphas !== u ||
                            v.vertexTangents !== h ||
                            v.morphTargets !== d ||
                            v.morphNormals !== p ||
                            v.morphColors !== f ||
                            v.toneMapping !== m ||
                            (!0 === at.isWebGL2 &&
                              v.morphTargetsCount !== _)) &&
                          (y = !0)
                        : (y = !0)
                      : (y = !0)
                    : (y = !0)
                  : ((y = !0), (v.__version = r.version));
                let M = v.currentProgram;
                !0 === y && (M = Kt(r, e, a));
                let w = !1,
                  E = !1,
                  T = !1;
                const A = M.getUniforms(),
                  P = v.uniforms;
                if (
                  (st.useProgram(M.program) && ((w = !0), (E = !0), (T = !0)),
                  r.id !== L && ((L = r.id), (E = !0)),
                  w || C !== t)
                ) {
                  if (
                    (A.setValue(It, 'projectionMatrix', t.projectionMatrix),
                    at.logarithmicDepthBuffer &&
                      A.setValue(
                        It,
                        'logDepthBufFC',
                        2 / (Math.log(t.far + 1) / Math.LN2)
                      ),
                    C !== t && ((C = t), (E = !0), (T = !0)),
                    r.isShaderMaterial ||
                      r.isMeshPhongMaterial ||
                      r.isMeshToonMaterial ||
                      r.isMeshStandardMaterial ||
                      r.envMap)
                  ) {
                    const e = A.map.cameraPosition;
                    void 0 !== e &&
                      e.setValue(It, et.setFromMatrixPosition(t.matrixWorld));
                  }
                  (r.isMeshPhongMaterial ||
                    r.isMeshToonMaterial ||
                    r.isMeshLambertMaterial ||
                    r.isMeshBasicMaterial ||
                    r.isMeshStandardMaterial ||
                    r.isShaderMaterial) &&
                    A.setValue(
                      It,
                      'isOrthographic',
                      !0 === t.isOrthographicCamera
                    ),
                    (r.isMeshPhongMaterial ||
                      r.isMeshToonMaterial ||
                      r.isMeshLambertMaterial ||
                      r.isMeshBasicMaterial ||
                      r.isMeshStandardMaterial ||
                      r.isShaderMaterial ||
                      r.isShadowMaterial ||
                      a.isSkinnedMesh) &&
                      A.setValue(It, 'viewMatrix', t.matrixWorldInverse);
                }
                if (a.isSkinnedMesh) {
                  A.setOptional(It, a, 'bindMatrix'),
                    A.setOptional(It, a, 'bindMatrixInverse');
                  const t = a.skeleton;
                  t &&
                    (at.floatVertexTextures
                      ? (null === t.boneTexture && t.computeBoneTexture(),
                        A.setValue(It, 'boneTexture', t.boneTexture, mt),
                        A.setValue(It, 'boneTextureSize', t.boneTextureSize))
                      : A.setOptional(It, t, 'boneMatrices'));
                }
                const D = n.morphAttributes;
                var O, N;
                return (
                  (void 0 !== D.position ||
                    void 0 !== D.normal ||
                    (void 0 !== D.color && !0 === at.isWebGL2)) &&
                    Ct.update(a, n, r, M),
                  (E || v.receiveShadow !== a.receiveShadow) &&
                    ((v.receiveShadow = a.receiveShadow),
                    A.setValue(It, 'receiveShadow', a.receiveShadow)),
                  E &&
                    (A.setValue(
                      It,
                      'toneMappingExposure',
                      S.toneMappingExposure
                    ),
                    v.needsLights &&
                      ((N = T),
                      ((O = P).ambientLightColor.needsUpdate = N),
                      (O.lightProbe.needsUpdate = N),
                      (O.directionalLights.needsUpdate = N),
                      (O.directionalLightShadows.needsUpdate = N),
                      (O.pointLights.needsUpdate = N),
                      (O.pointLightShadows.needsUpdate = N),
                      (O.spotLights.needsUpdate = N),
                      (O.spotLightShadows.needsUpdate = N),
                      (O.rectAreaLights.needsUpdate = N),
                      (O.hemisphereLights.needsUpdate = N)),
                    s && r.fog && St.refreshFogUniforms(P, s),
                    St.refreshMaterialUniforms(P, r, H, G, $),
                    Se.upload(It, v.uniformsList, P, mt)),
                  r.isShaderMaterial &&
                    !0 === r.uniformsNeedUpdate &&
                    (Se.upload(It, v.uniformsList, P, mt),
                    (r.uniformsNeedUpdate = !1)),
                  r.isSpriteMaterial && A.setValue(It, 'center', a.center),
                  A.setValue(It, 'modelViewMatrix', a.modelViewMatrix),
                  A.setValue(It, 'normalMatrix', a.normalMatrix),
                  A.setValue(It, 'modelMatrix', a.matrixWorld),
                  M
                );
              })(t, e, n, r, a);
            st.setMaterial(r, o);
            let c = n.index;
            const u = n.attributes.position;
            if (null === c) {
              if (void 0 === u || 0 === u.count) return;
            } else if (0 === c.count) return;
            let h,
              d = 1;
            !0 === r.wireframe && ((c = bt.getWireframeAttribute(n)), (d = 2)),
              Nt.setup(a, r, l, n, c);
            let p = Pt;
            null !== c && ((h = yt.get(c)), (p = Dt), p.setIndex(h));
            const f = null !== c ? c.count : u.count,
              m = n.drawRange.start * d,
              g = n.drawRange.count * d,
              _ = null !== s ? s.start * d : 0,
              v = null !== s ? s.count * d : 1 / 0,
              x = Math.max(m, _),
              y = Math.min(f, m + g, _ + v) - 1,
              M = Math.max(0, y - x + 1);
            if (0 !== M) {
              if (a.isMesh)
                !0 === r.wireframe
                  ? (st.setLineWidth(r.wireframeLinewidth * it()),
                    p.setMode(It.LINES))
                  : p.setMode(It.TRIANGLES);
              else if (a.isLine) {
                let t = r.linewidth;
                void 0 === t && (t = 1),
                  st.setLineWidth(t * it()),
                  a.isLineSegments
                    ? p.setMode(It.LINES)
                    : a.isLineLoop
                    ? p.setMode(It.LINE_LOOP)
                    : p.setMode(It.LINE_STRIP);
              } else
                a.isPoints
                  ? p.setMode(It.POINTS)
                  : a.isSprite && p.setMode(It.TRIANGLES);
              if (a.isInstancedMesh) p.renderInstances(x, M, a.count);
              else if (n.isInstancedBufferGeometry) {
                const t = Math.min(n.instanceCount, n._maxInstanceCount);
                p.renderInstances(x, M, t);
              } else p.render(x, M);
            }
          }),
          (this.compile = function (t, e) {
            (b = Tt.get(t)),
              b.init(),
              w.push(b),
              t.traverseVisible(function (t) {
                t.isLight &&
                  t.layers.test(e.layers) &&
                  (b.pushLight(t), t.castShadow && b.pushShadow(t));
              }),
              b.setupLights(S.physicallyCorrectLights),
              t.traverse(function (e) {
                const n = e.material;
                if (n)
                  if (Array.isArray(n))
                    for (let i = 0; i < n.length; i++) Kt(n[i], t, e);
                  else Kt(n, t, e);
              }),
              w.pop(),
              (b = null);
          });
        let Ht = null;
        function Vt() {
          Xt.stop();
        }
        function Wt() {
          Xt.start();
        }
        const Xt = new v();
        function jt(t, e, n, i) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
            else if (t.isLight) b.pushLight(t), t.castShadow && b.pushShadow(t);
            else if (t.isSprite) {
              if (!t.frustumCulled || Z.intersectsSprite(t)) {
                i && et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Q);
                const e = Mt.update(t),
                  r = t.material;
                r.visible && y.push(t, e, r, n, et.z, null);
              }
            } else if (
              (t.isMesh || t.isLine || t.isPoints) &&
              (t.isSkinnedMesh &&
                t.skeleton.frame !== pt.render.frame &&
                (t.skeleton.update(), (t.skeleton.frame = pt.render.frame)),
              !t.frustumCulled || Z.intersectsObject(t))
            ) {
              i && et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Q);
              const e = Mt.update(t),
                r = t.material;
              if (Array.isArray(r)) {
                const i = e.groups;
                for (let a = 0, s = i.length; a < s; a++) {
                  const s = i[a],
                    o = r[s.materialIndex];
                  o && o.visible && y.push(t, e, o, n, et.z, s);
                }
              } else r.visible && y.push(t, e, r, n, et.z, null);
            }
          const r = t.children;
          for (let t = 0, a = r.length; t < a; t++) jt(r[t], e, n, i);
        }
        function qt(t, e, n, a) {
          const s = t.opaque,
            o = t.transmissive,
            c = t.transparent;
          b.setupLightsView(n),
            o.length > 0 &&
              (function (t, e, n) {
                const a = at.isWebGL2;
                null === $ &&
                  ($ = new z(1, 1, {
                    generateMipmaps: !0,
                    type: null !== Ot.convert(i.cL) ? i.cL : i.yw,
                    minFilter: i.D1,
                    samples: a && !0 === l ? 4 : 0,
                  })),
                  S.getDrawingBufferSize(tt),
                  a
                    ? $.setSize(tt.x, tt.y)
                    : $.setSize((0, r.gy)(tt.x), (0, r.gy)(tt.y));
                const s = S.getRenderTarget();
                S.setRenderTarget($), S.clear();
                const o = S.toneMapping;
                (S.toneMapping = i.uL),
                  Yt(t, e, n),
                  (S.toneMapping = o),
                  mt.updateMultisampleRenderTarget($),
                  mt.updateRenderTargetMipmap($),
                  S.setRenderTarget(s);
              })(s, e, n),
            a && st.viewport(U.copy(a)),
            s.length > 0 && Yt(s, e, n),
            o.length > 0 && Yt(o, e, n),
            c.length > 0 && Yt(c, e, n),
            st.buffers.depth.setTest(!0),
            st.buffers.depth.setMask(!0),
            st.buffers.color.setMask(!0),
            st.setPolygonOffset(!1);
        }
        function Yt(t, e, n) {
          const i = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r],
              s = a.object,
              o = a.geometry,
              l = null === i ? a.material : i,
              c = a.group;
            s.layers.test(n.layers) && Zt(s, e, n, o, l, c);
          }
        }
        function Zt(t, e, n, r, a, s) {
          t.onBeforeRender(S, e, n, r, a, s),
            t.modelViewMatrix.multiplyMatrices(
              n.matrixWorldInverse,
              t.matrixWorld
            ),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            a.onBeforeRender(S, e, n, r, t, s),
            !0 === a.transparent && a.side === i.eh
              ? ((a.side = i._L),
                (a.needsUpdate = !0),
                S.renderBufferDirect(n, e, r, a, t, s),
                (a.side = i.Wl),
                (a.needsUpdate = !0),
                S.renderBufferDirect(n, e, r, a, t, s),
                (a.side = i.eh))
              : S.renderBufferDirect(n, e, r, a, t, s),
            t.onAfterRender(S, e, n, r, a, s);
        }
        function Kt(t, e, n) {
          !0 !== e.isScene && (e = nt);
          const i = ft.get(t),
            r = b.state.lights,
            a = b.state.shadowsArray,
            s = r.state.version,
            o = wt.getParameters(t, r.state, a, e, n),
            l = wt.getProgramCacheKey(o);
          let c = i.programs;
          (i.environment = t.isMeshStandardMaterial ? e.environment : null),
            (i.fog = e.fog),
            (i.envMap = (t.isMeshStandardMaterial ? xt : gt).get(
              t.envMap || i.environment
            )),
            void 0 === c &&
              (t.addEventListener('dispose', Gt),
              (c = new Map()),
              (i.programs = c));
          let u = c.get(l);
          if (void 0 !== u) {
            if (i.currentProgram === u && i.lightsStateVersion === s)
              return Jt(t, o), u;
          } else
            (o.uniforms = wt.getUniforms(t)),
              t.onBuild(n, o, S),
              t.onBeforeCompile(o, S),
              (u = wt.acquireProgram(o, l)),
              c.set(l, u),
              (i.uniforms = o.uniforms);
          const h = i.uniforms;
          ((t.isShaderMaterial || t.isRawShaderMaterial) &&
            !0 !== t.clipping) ||
            (h.clippingPlanes = At.uniform),
            Jt(t, o),
            (i.needsLights = (function (t) {
              return (
                t.isMeshLambertMaterial ||
                t.isMeshToonMaterial ||
                t.isMeshPhongMaterial ||
                t.isMeshStandardMaterial ||
                t.isShadowMaterial ||
                (t.isShaderMaterial && !0 === t.lights)
              );
            })(t)),
            (i.lightsStateVersion = s),
            i.needsLights &&
              ((h.ambientLightColor.value = r.state.ambient),
              (h.lightProbe.value = r.state.probe),
              (h.directionalLights.value = r.state.directional),
              (h.directionalLightShadows.value = r.state.directionalShadow),
              (h.spotLights.value = r.state.spot),
              (h.spotLightShadows.value = r.state.spotShadow),
              (h.rectAreaLights.value = r.state.rectArea),
              (h.ltc_1.value = r.state.rectAreaLTC1),
              (h.ltc_2.value = r.state.rectAreaLTC2),
              (h.pointLights.value = r.state.point),
              (h.pointLightShadows.value = r.state.pointShadow),
              (h.hemisphereLights.value = r.state.hemi),
              (h.directionalShadowMap.value = r.state.directionalShadowMap),
              (h.directionalShadowMatrix.value =
                r.state.directionalShadowMatrix),
              (h.spotShadowMap.value = r.state.spotShadowMap),
              (h.spotShadowMatrix.value = r.state.spotShadowMatrix),
              (h.pointShadowMap.value = r.state.pointShadowMap),
              (h.pointShadowMatrix.value = r.state.pointShadowMatrix));
          const d = u.getUniforms(),
            p = Se.seqWithValue(d.seq, h);
          return (i.currentProgram = u), (i.uniformsList = p), u;
        }
        function Jt(t, e) {
          const n = ft.get(t);
          (n.outputEncoding = e.outputEncoding),
            (n.instancing = e.instancing),
            (n.skinning = e.skinning),
            (n.morphTargets = e.morphTargets),
            (n.morphNormals = e.morphNormals),
            (n.morphColors = e.morphColors),
            (n.morphTargetsCount = e.morphTargetsCount),
            (n.numClippingPlanes = e.numClippingPlanes),
            (n.numIntersection = e.numClipIntersection),
            (n.vertexAlphas = e.vertexAlphas),
            (n.vertexTangents = e.vertexTangents),
            (n.toneMapping = e.toneMapping);
        }
        Xt.setAnimationLoop(function (t) {
          Ht && Ht(t);
        }),
          'undefined' != typeof window && Xt.setContext(window),
          (this.setAnimationLoop = function (t) {
            (Ht = t),
              zt.setAnimationLoop(t),
              null === t ? Xt.stop() : Xt.start();
          }),
          zt.addEventListener('sessionstart', Vt),
          zt.addEventListener('sessionend', Wt),
          (this.render = function (t, e) {
            if (void 0 !== e && !0 !== e.isCamera)
              return void console.error(
                'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
              );
            if (!0 === E) return;
            !0 === t.autoUpdate && t.updateMatrixWorld(),
              null === e.parent && e.updateMatrixWorld(),
              !0 === zt.enabled &&
                !0 === zt.isPresenting &&
                (!0 === zt.cameraAutoUpdate && zt.updateCamera(e),
                (e = zt.getCamera())),
              !0 === t.isScene && t.onBeforeRender(S, t, e, R),
              (b = Tt.get(t, w.length)),
              b.init(),
              w.push(b),
              Q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
              Z.setFromProjectionMatrix(Q),
              (J = this.localClippingEnabled),
              (K = At.init(this.clippingPlanes, J, e)),
              (y = Et.get(t, M.length)),
              y.init(),
              M.push(y),
              jt(t, e, 0, S.sortObjects),
              y.finish(),
              !0 === S.sortObjects && y.sort(V, W),
              !0 === K && At.beginShadows();
            const n = b.state.shadowsArray;
            if (
              (Rt.render(n, t, e),
              !0 === K && At.endShadows(),
              !0 === this.info.autoReset && this.info.reset(),
              Lt.render(y, t),
              b.setupLights(S.physicallyCorrectLights),
              e.isArrayCamera)
            ) {
              const n = e.cameras;
              for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                qt(y, t, i, i.viewport);
              }
            } else qt(y, t, e);
            null !== R &&
              (mt.updateMultisampleRenderTarget(R),
              mt.updateRenderTargetMipmap(R)),
              !0 === t.isScene && t.onAfterRender(S, t, e),
              Nt.resetDefaultState(),
              (L = -1),
              (C = null),
              w.pop(),
              (b = w.length > 0 ? w[w.length - 1] : null),
              M.pop(),
              (y = M.length > 0 ? M[M.length - 1] : null);
          }),
          (this.getActiveCubeFace = function () {
            return T;
          }),
          (this.getActiveMipmapLevel = function () {
            return A;
          }),
          (this.getRenderTarget = function () {
            return R;
          }),
          (this.setRenderTargetTextures = function (t, e, n) {
            (ft.get(t.texture).__webglTexture = e),
              (ft.get(t.depthTexture).__webglTexture = n);
            const i = ft.get(t);
            (i.__hasExternalTextures = !0),
              i.__hasExternalTextures &&
                ((i.__autoAllocateDepthBuffer = void 0 === n),
                i.__autoAllocateDepthBuffer ||
                  (!0 === rt.has('WEBGL_multisampled_render_to_texture') &&
                    (console.warn(
                      'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'
                    ),
                    (i.__useRenderToTexture = !1))));
          }),
          (this.setRenderTargetFramebuffer = function (t, e) {
            const n = ft.get(t);
            (n.__webglFramebuffer = e),
              (n.__useDefaultFramebuffer = void 0 === e);
          }),
          (this.setRenderTarget = function (t, e = 0, n = 0) {
            (R = t), (T = e), (A = n);
            let i = !0;
            if (t) {
              const e = ft.get(t);
              void 0 !== e.__useDefaultFramebuffer
                ? (st.bindFramebuffer(It.FRAMEBUFFER, null), (i = !1))
                : void 0 === e.__webglFramebuffer
                ? mt.setupRenderTarget(t)
                : e.__hasExternalTextures &&
                  mt.rebindTextures(
                    t,
                    ft.get(t.texture).__webglTexture,
                    ft.get(t.depthTexture).__webglTexture
                  );
            }
            let r = null,
              a = !1,
              s = !1;
            if (t) {
              const n = t.texture;
              (n.isData3DTexture || n.isDataArrayTexture) && (s = !0);
              const i = ft.get(t).__webglFramebuffer;
              t.isWebGLCubeRenderTarget
                ? ((r = i[e]), (a = !0))
                : (r =
                    at.isWebGL2 &&
                    t.samples > 0 &&
                    !1 === mt.useMultisampledRTT(t)
                      ? ft.get(t).__webglMultisampledFramebuffer
                      : i),
                U.copy(t.viewport),
                F.copy(t.scissor),
                (B = t.scissorTest);
            } else
              U.copy(X).multiplyScalar(H).floor(),
                F.copy(q).multiplyScalar(H).floor(),
                (B = Y);
            if (
              (st.bindFramebuffer(It.FRAMEBUFFER, r) &&
                at.drawBuffers &&
                i &&
                st.drawBuffers(t, r),
              st.viewport(U),
              st.scissor(F),
              st.setScissorTest(B),
              a)
            ) {
              const i = ft.get(t.texture);
              It.framebufferTexture2D(
                It.FRAMEBUFFER,
                It.COLOR_ATTACHMENT0,
                It.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                i.__webglTexture,
                n
              );
            } else if (s) {
              const i = ft.get(t.texture),
                r = e || 0;
              It.framebufferTextureLayer(
                It.FRAMEBUFFER,
                It.COLOR_ATTACHMENT0,
                i.__webglTexture,
                n || 0,
                r
              );
            }
            L = -1;
          }),
          (this.readRenderTargetPixels = function (t, e, n, r, a, s, o) {
            if (!t || !t.isWebGLRenderTarget)
              return void console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
              );
            let l = ft.get(t).__webglFramebuffer;
            if ((t.isWebGLCubeRenderTarget && void 0 !== o && (l = l[o]), l)) {
              st.bindFramebuffer(It.FRAMEBUFFER, l);
              try {
                const o = t.texture,
                  l = o.format,
                  c = o.type;
                if (
                  l !== i.wk &&
                  Ot.convert(l) !==
                    It.getParameter(It.IMPLEMENTATION_COLOR_READ_FORMAT)
                )
                  return void console.error(
                    'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
                  );
                const u =
                  c === i.cL &&
                  (rt.has('EXT_color_buffer_half_float') ||
                    (at.isWebGL2 && rt.has('EXT_color_buffer_float')));
                if (
                  !(
                    c === i.yw ||
                    Ot.convert(c) ===
                      It.getParameter(It.IMPLEMENTATION_COLOR_READ_TYPE) ||
                    (c === i.Vz &&
                      (at.isWebGL2 ||
                        rt.has('OES_texture_float') ||
                        rt.has('WEBGL_color_buffer_float'))) ||
                    u
                  )
                )
                  return void console.error(
                    'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
                  );
                It.checkFramebufferStatus(It.FRAMEBUFFER) ===
                It.FRAMEBUFFER_COMPLETE
                  ? e >= 0 &&
                    e <= t.width - r &&
                    n >= 0 &&
                    n <= t.height - a &&
                    It.readPixels(e, n, r, a, Ot.convert(l), Ot.convert(c), s)
                  : console.error(
                      'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.'
                    );
              } finally {
                const t = null !== R ? ft.get(R).__webglFramebuffer : null;
                st.bindFramebuffer(It.FRAMEBUFFER, t);
              }
            }
          }),
          (this.copyFramebufferToTexture = function (t, e, n = 0) {
            if (!0 !== e.isFramebufferTexture)
              return void console.error(
                'THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.'
              );
            const i = Math.pow(2, -n),
              r = Math.floor(e.image.width * i),
              a = Math.floor(e.image.height * i);
            mt.setTexture2D(e, 0),
              It.copyTexSubImage2D(It.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a),
              st.unbindTexture();
          }),
          (this.copyTextureToTexture = function (t, e, n, i = 0) {
            const r = e.image.width,
              a = e.image.height,
              s = Ot.convert(n.format),
              o = Ot.convert(n.type);
            mt.setTexture2D(n, 0),
              It.pixelStorei(It.UNPACK_FLIP_Y_WEBGL, n.flipY),
              It.pixelStorei(
                It.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                n.premultiplyAlpha
              ),
              It.pixelStorei(It.UNPACK_ALIGNMENT, n.unpackAlignment),
              e.isDataTexture
                ? It.texSubImage2D(
                    It.TEXTURE_2D,
                    i,
                    t.x,
                    t.y,
                    r,
                    a,
                    s,
                    o,
                    e.image.data
                  )
                : e.isCompressedTexture
                ? It.compressedTexSubImage2D(
                    It.TEXTURE_2D,
                    i,
                    t.x,
                    t.y,
                    e.mipmaps[0].width,
                    e.mipmaps[0].height,
                    s,
                    e.mipmaps[0].data
                  )
                : It.texSubImage2D(It.TEXTURE_2D, i, t.x, t.y, s, o, e.image),
              0 === i && n.generateMipmaps && It.generateMipmap(It.TEXTURE_2D),
              st.unbindTexture();
          }),
          (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
            if (S.isWebGL1Renderer)
              return void console.warn(
                'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.'
              );
            const a = t.max.x - t.min.x + 1,
              s = t.max.y - t.min.y + 1,
              o = t.max.z - t.min.z + 1,
              l = Ot.convert(i.format),
              c = Ot.convert(i.type);
            let u;
            if (i.isData3DTexture) mt.setTexture3D(i, 0), (u = It.TEXTURE_3D);
            else {
              if (!i.isDataArrayTexture)
                return void console.warn(
                  'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
                );
              mt.setTexture2DArray(i, 0), (u = It.TEXTURE_2D_ARRAY);
            }
            It.pixelStorei(It.UNPACK_FLIP_Y_WEBGL, i.flipY),
              It.pixelStorei(
                It.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                i.premultiplyAlpha
              ),
              It.pixelStorei(It.UNPACK_ALIGNMENT, i.unpackAlignment);
            const h = It.getParameter(It.UNPACK_ROW_LENGTH),
              d = It.getParameter(It.UNPACK_IMAGE_HEIGHT),
              p = It.getParameter(It.UNPACK_SKIP_PIXELS),
              f = It.getParameter(It.UNPACK_SKIP_ROWS),
              m = It.getParameter(It.UNPACK_SKIP_IMAGES),
              g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            It.pixelStorei(It.UNPACK_ROW_LENGTH, g.width),
              It.pixelStorei(It.UNPACK_IMAGE_HEIGHT, g.height),
              It.pixelStorei(It.UNPACK_SKIP_PIXELS, t.min.x),
              It.pixelStorei(It.UNPACK_SKIP_ROWS, t.min.y),
              It.pixelStorei(It.UNPACK_SKIP_IMAGES, t.min.z),
              n.isDataTexture || n.isData3DTexture
                ? It.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g.data)
                : n.isCompressedTexture
                ? (console.warn(
                    'THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'
                  ),
                  It.compressedTexSubImage3D(
                    u,
                    r,
                    e.x,
                    e.y,
                    e.z,
                    a,
                    s,
                    o,
                    l,
                    g.data
                  ))
                : It.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g),
              It.pixelStorei(It.UNPACK_ROW_LENGTH, h),
              It.pixelStorei(It.UNPACK_IMAGE_HEIGHT, d),
              It.pixelStorei(It.UNPACK_SKIP_PIXELS, p),
              It.pixelStorei(It.UNPACK_SKIP_ROWS, f),
              It.pixelStorei(It.UNPACK_SKIP_IMAGES, m),
              0 === r && i.generateMipmaps && It.generateMipmap(u),
              st.unbindTexture();
          }),
          (this.initTexture = function (t) {
            mt.setTexture2D(t, 0), st.unbindTexture();
          }),
          (this.resetState = function () {
            (T = 0), (A = 0), (R = null), st.reset(), Nt.reset();
          }),
          'undefined' != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent('observe', { detail: this })
            );
      }
      yn.prototype.isWebGLRenderer = !0;
    },
    369: (t, e, n) => {
      'use strict';
      function i(t) {
        const e = {};
        for (const n in t) {
          e[n] = {};
          for (const i in t[n]) {
            const r = t[n][i];
            r &&
            (r.isColor ||
              r.isMatrix3 ||
              r.isMatrix4 ||
              r.isVector2 ||
              r.isVector3 ||
              r.isVector4 ||
              r.isTexture ||
              r.isQuaternion)
              ? (e[n][i] = r.clone())
              : Array.isArray(r)
              ? (e[n][i] = r.slice())
              : (e[n][i] = r);
          }
        }
        return e;
      }
      function r(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const r = i(t[n]);
          for (const t in r) e[t] = r[t];
        }
        return e;
      }
      n.d(e, { Rh: () => r, dw: () => i, rD: () => a });
      const a = { clone: i, merge: r };
    },
    963: (t, e, n) => {
      'use strict';
      n.d(e, { x: () => r });
      var i = n(802);
      class r extends i.T {
        constructor() {
          super(),
            (this.type = 'Scene'),
            (this.background = null),
            (this.environment = null),
            (this.fog = null),
            (this.overrideMaterial = null),
            (this.autoUpdate = !0),
            'undefined' != typeof __THREE_DEVTOOLS__ &&
              __THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent('observe', { detail: this })
              );
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.environment &&
              (this.environment = t.environment.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial &&
              (this.overrideMaterial = t.overrideMaterial.clone()),
            (this.autoUpdate = t.autoUpdate),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
      }
      r.prototype.isScene = !0;
    },
    576: (t, e, n) => {
      'use strict';
      n.d(e, { x: () => d });
      var i = n(574),
        r = n(6),
        a = n(542),
        s = n(120),
        o = n(894),
        l = n(564);
      class c {
        constructor(t = null) {
          (this.uuid = a.DO()), (this.data = t), (this.version = 0);
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        toJSON(t) {
          const e = void 0 === t || 'string' == typeof t;
          if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
          const n = { uuid: this.uuid, url: '' },
            i = this.data;
          if (null !== i) {
            let t;
            if (Array.isArray(i)) {
              t = [];
              for (let e = 0, n = i.length; e < n; e++)
                i[e].isDataTexture ? t.push(u(i[e].image)) : t.push(u(i[e]));
            } else t = u(i);
            n.url = t;
          }
          return e || (t.images[this.uuid] = n), n;
        }
      }
      function u(t) {
        return ('undefined' != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
          ('undefined' != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
          ? l.P.getDataURL(t)
          : t.data
          ? {
              data: Array.prototype.slice.call(t.data),
              width: t.width,
              height: t.height,
              type: t.data.constructor.name,
            }
          : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
      }
      c.prototype.isSource = !0;
      let h = 0;
      class d extends i.p {
        constructor(
          t = d.DEFAULT_IMAGE,
          e = d.DEFAULT_MAPPING,
          n = r.uW,
          i = r.uW,
          l = r.we,
          u = r.D1,
          p = r.wk,
          f = r.yw,
          m = 1,
          g = r.rn
        ) {
          super(),
            Object.defineProperty(this, 'id', { value: h++ }),
            (this.uuid = a.DO()),
            (this.name = ''),
            (this.source = new c(t)),
            (this.mipmaps = []),
            (this.mapping = e),
            (this.wrapS = n),
            (this.wrapT = i),
            (this.magFilter = l),
            (this.minFilter = u),
            (this.anisotropy = m),
            (this.format = p),
            (this.internalFormat = null),
            (this.type = f),
            (this.offset = new s.F(0, 0)),
            (this.repeat = new s.F(1, 1)),
            (this.center = new s.F(0, 0)),
            (this.rotation = 0),
            (this.matrixAutoUpdate = !0),
            (this.matrix = new o.V()),
            (this.generateMipmaps = !0),
            (this.premultiplyAlpha = !1),
            (this.flipY = !0),
            (this.unpackAlignment = 4),
            (this.encoding = g),
            (this.userData = {}),
            (this.version = 0),
            (this.onUpdate = null),
            (this.isRenderTargetTexture = !1),
            (this.needsPMREMUpdate = !1);
        }
        get image() {
          return this.source.data;
        }
        set image(t) {
          this.source.data = t;
        }
        updateMatrix() {
          this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.source = t.source),
            (this.mipmaps = t.mipmaps.slice(0)),
            (this.mapping = t.mapping),
            (this.wrapS = t.wrapS),
            (this.wrapT = t.wrapT),
            (this.magFilter = t.magFilter),
            (this.minFilter = t.minFilter),
            (this.anisotropy = t.anisotropy),
            (this.format = t.format),
            (this.internalFormat = t.internalFormat),
            (this.type = t.type),
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            (this.rotation = t.rotation),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this.matrix.copy(t.matrix),
            (this.generateMipmaps = t.generateMipmaps),
            (this.premultiplyAlpha = t.premultiplyAlpha),
            (this.flipY = t.flipY),
            (this.unpackAlignment = t.unpackAlignment),
            (this.encoding = t.encoding),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            (this.needsUpdate = !0),
            this
          );
        }
        toJSON(t) {
          const e = void 0 === t || 'string' == typeof t;
          if (!e && void 0 !== t.textures[this.uuid])
            return t.textures[this.uuid];
          const n = {
            metadata: {
              version: 4.5,
              type: 'Texture',
              generator: 'Texture.toJSON',
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment,
          };
          return (
            '{}' !== JSON.stringify(this.userData) &&
              (n.userData = this.userData),
            e || (t.textures[this.uuid] = n),
            n
          );
        }
        dispose() {
          this.dispatchEvent({ type: 'dispose' });
        }
        transformUv(t) {
          if (this.mapping !== r.xf) return t;
          if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
            switch (this.wrapS) {
              case r.rp:
                t.x = t.x - Math.floor(t.x);
                break;
              case r.uW:
                t.x = t.x < 0 ? 0 : 1;
                break;
              case r.Oo:
                1 === Math.abs(Math.floor(t.x) % 2)
                  ? (t.x = Math.ceil(t.x) - t.x)
                  : (t.x = t.x - Math.floor(t.x));
            }
          if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
              case r.rp:
                t.y = t.y - Math.floor(t.y);
                break;
              case r.uW:
                t.y = t.y < 0 ? 0 : 1;
                break;
              case r.Oo:
                1 === Math.abs(Math.floor(t.y) % 2)
                  ? (t.y = Math.ceil(t.y) - t.y)
                  : (t.y = t.y - Math.floor(t.y));
            }
          return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
          !0 === t && (this.version++, (this.source.needsUpdate = !0));
        }
      }
      (d.DEFAULT_IMAGE = null),
        (d.DEFAULT_MAPPING = r.xf),
        (d.prototype.isTexture = !0);
    },
    42: (t, e, n) => {
      'use strict';
      function i(t) {
        for (let e = t.length - 1; e >= 0; --e) if (t[e] > 65535) return !0;
        return !1;
      }
      function r(t) {
        return document.createElementNS('http://www.w3.org/1999/xhtml', t);
      }
      n.d(e, { H7: () => i, c: () => r }),
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
    },
  },
]);
