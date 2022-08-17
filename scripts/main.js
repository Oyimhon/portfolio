(() => {
  var t,
    e = {
      60: (t, e, n) => {
        'use strict';
        var i = n(358);
        i.p8.defaults({ ease: 'power2.out', overwrite: 'auto' });
        let s = null;
        class r {
          constructor() {
            if (s) return s;
            (this.fps = 65),
              (this.lastTimestamp = 0),
              (this.updateFunctions = []),
              (this.updateFunctionsLength = 0),
              (s = this),
              this.init();
          }
          static getInstance() {
            return s || (s = new r()), s;
          }
          static add(t) {
            r.getInstance().add(t);
          }
          static remove(t) {
            r.getInstance().remove(t);
          }
          static reset() {
            r.getInstance().reset();
          }
          init() {
            (this.animFunction = this.update.bind(this)),
              requestAnimationFrame(this.animFunction);
          }
          add(t) {
            this.updateFunctions.push(t),
              (this.updateFunctionsLength = this.updateFunctions.length);
          }
          remove(t) {
            let e;
            for (let n = 0; n < this.updateFunctionsLength; n++)
              if (((e = this.updateFunctions[n]), e === t)) {
                this.updateFunctions.splice(n, 1);
                break;
              }
            this.updateFunctionsLength = this.updateFunctions.length;
          }
          update(t) {
            if (
              (requestAnimationFrame(this.animFunction),
              t - this.lastTimestamp < 1e3 / this.fps)
            )
              return;
            let e;
            for (let n = 0; n < this.updateFunctionsLength; n++)
              (e = this.updateFunctions[n]), e(t);
            this.lastTimestamp = t;
          }
          reset() {
            for (let t = 0; t < this.updateFunctionsLength; t++)
              delete this.updateFunctions[t];
            (this.updateFunctions = []),
              (this.updateFunctions.length = 0),
              (this.updateFunctionsLength = 0);
          }
        }
        class o {
          constructor() {
            (this.prevSize = { w: 0, h: 0 }),
              (this.checkTime = 0),
              (this.interval = 500);
          }
          check() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const e = performance.now();
            return !(
              e - this.checkTime < this.interval ||
              ((this.checkTime = e),
              !t &&
                ((window.innerWidth === this.prevSize.w &&
                  window.innerHeight === this.prevSize.h) ||
                  ((this.prevSize.w = window.innerWidth),
                  (this.prevSize.h = window.innerHeight),
                  0)))
            );
          }
        }
        var a = n(306),
          c = n(238),
          h = n.n(c);
        let l = null;
        class u {
          constructor() {
            if (l) return l;
            (this._uaParser = new (h())()),
              (this._isDesktop = null),
              (this._isMobile = null),
              (this._isIos = null),
              (this._isAndroid = null),
              (this._isSafari = null),
              (this._isIE = null),
              (this._isEdge = null),
              (this._device = null),
              (this._events = {
                pointerdown: null,
                pointermove: null,
                pointerup: null,
              }),
              (l = this);
          }
          static getInstance() {
            return l || (l = new u()), l;
          }
          static get isDesktop() {
            return u.getInstance().isDesktop;
          }
          static get isMobile() {
            return u.getInstance().isMobile;
          }
          static get isIos() {
            return u.getInstance().isIos;
          }
          static get isAndroid() {
            return u.getInstance().isAndroid;
          }
          static get isSafari() {
            return u.getInstance().isSafari;
          }
          static get isIE() {
            return u.getInstance().isIE;
          }
          static get isEdge() {
            return u.getInstance().isEdge;
          }
          static get device() {
            return u.getInstance().device;
          }
          static get pointerdownEvent() {
            return u.getInstance().pointerdownEvent;
          }
          static get pointermoveEvent() {
            return u.getInstance().pointermoveEvent;
          }
          static get pointerupEvent() {
            return u.getInstance().pointerupEvent;
          }
          get isDesktop() {
            if (this._isDesktop) return this._isDesktop;
            const t = this._uaParser.getDevice();
            return (
              (this._isDesktop = void 0 === t.type),
              this._isDesktop &&
                u.isSafari &&
                (this._isDesktop = !('ontouchstart' in document)),
              this._isDesktop
            );
          }
          get isMobile() {
            if (this._isMobile) return this._isMobile;
            const t = this._uaParser.getDevice();
            return (
              (this._isMobile = 'mobile' === t.type || 'tablet' === t.type),
              !this._isMobile &&
                u.isSafari &&
                (this._isMobile = 'ontouchstart' in document),
              this._isMobile
            );
          }
          get isIos() {
            if (this._isIos) return this._isIos;
            const t = this._uaParser.getOS();
            return (
              (this._isIos = t.name.toLowerCase().includes('ios')), this._isIos
            );
          }
          get isAndroid() {
            if (this._isAndroid) return this._isAndroid;
            const t = this._uaParser.getOS();
            return (
              (this._isAndroid = t.name.toLowerCase().includes('android')),
              this._isAndroid
            );
          }
          get isSafari() {
            if (this._isSafari) return this._isSafari;
            const t = this._uaParser.getBrowser();
            return (
              (this._isSafari = t.name.toLowerCase().includes('safari')),
              this._isSafari
            );
          }
          get isIE() {
            if (this._isIE) return this._isIE;
            const t = this._uaParser.getBrowser();
            return (
              (this._isIE = t.name.toLowerCase().includes('ie')), this._isIE
            );
          }
          get isEdge() {
            if (this._isEdge) return this._isEdge;
            const t = this._uaParser.getBrowser();
            return (
              (this._isEdge = t.name.toLowerCase().includes('edge')),
              this._isEdge
            );
          }
          get device() {
            return (
              this._device ||
                (u.isDesktop
                  ? (this._device = 'desktop')
                  : u.isMobile && (this._device = 'mobile')),
              this._device
            );
          }
          get pointerdownEvent() {
            return (
              this._events.pointerdown ||
                (this._events.pointerdown = this.isDesktop
                  ? 'pointerdown'
                  : 'touchstart'),
              this._events.pointerdown
            );
          }
          get pointermoveEvent() {
            return (
              this._events.pointermove ||
                (this._events.pointermove = this.isDesktop
                  ? 'pointermove'
                  : 'touchmove'),
              this._events.pointermove
            );
          }
          get pointerupEvent() {
            return (
              this._events.pointerup ||
                (this._events.pointerup = this.isDesktop
                  ? 'pointerup'
                  : 'touchend'),
              this._events.pointerup
            );
          }
        }
        class d {
          static random(t, e) {
            return void 0 === t
              ? Math.random()
              : void 0 === e
              ? Math.random() * t
              : t + Math.random() * (e - t);
          }
          static randomInt(t, e) {
            return Math.floor(d.random(t, e));
          }
          static constrain(t, e, n) {
            return Math.max(Math.min(t, n), e);
          }
          static map(t, e, n, i, s) {
            return ((t - e) / (n - e)) * (s - i) + i;
          }
          static radians(t) {
            return t * ((2 * Math.PI) / 360);
          }
          static dist(t, e, n, i) {
            return Math.sqrt((t - n) * (t - n) + (e - i) * (e - i));
          }
          static lerp(t, e, n) {
            return t + (e - t) * n;
          }
          static calcViewportFov(t, e) {
            return 2 * Math.atan(t / e) * (180 / Math.PI);
          }
        }
        class p {
          constructor(t, e) {
            (this.position = t), (this.velocity = t), (this.alphaSpeed = e);
          }
          lerp(t, e, n) {
            return t + (e - t) * n;
          }
          step(t) {
            const e = Math.exp(-this.alphaSpeed * (1 / 60)),
              n = this.lerp(t, this.position, e);
            (this.velocity = n - this.position), (this.position = n);
          }
          reset() {
            (this.position = 0), (this.velocity = 0);
          }
        }
        class v extends class {
          constructor(t, e) {
            (this.$target = t),
              (this.direction = e),
              (this.downPos = 0),
              (this.prevPos = 0),
              (this.targetScroll = 0),
              (this.scroll = 0),
              (this.velocity = 0),
              (this.max = 0),
              (this.progress = 0),
              (this.isPointerDown = !1),
              (this.isDragging = !1),
              (this.tween = new p(0, 15)),
              (this.onDownFunction = this.onDown.bind(this)),
              (this.onMoveFunction = this.onMove.bind(this)),
              (this.onUpFunction = this.onUp.bind(this)),
              (this.onWheelFunction = this.onWheel.bind(this)),
              (this.onKeyDownFunction = this.onKeyDown.bind(this)),
              (this.canceller = () => !1),
              u.isDesktop &&
                (window.addEventListener('wheel', this.onWheelFunction, {
                  capture: !0,
                  passive: !1,
                }),
                window.addEventListener('keydown', this.onKeyDownFunction)),
              window.addEventListener(u.pointerdownEvent, this.onDownFunction, {
                capture: !0,
                passive: !1,
              }),
              window.addEventListener(u.pointermoveEvent, this.onMoveFunction, {
                capture: !0,
                passive: !1,
              }),
              window.addEventListener(u.pointerupEvent, this.onUpFunction, {
                capture: !0,
                passive: !1,
              }),
              window.addEventListener('contextmenu', () => {
                this.isPointerDown = !1;
              });
          }
          setCanceller(t) {
            this.canceller = t;
          }
          getDownX(t) {
            return u.isDesktop ? t.pageX : t.changedTouches[0].pageX;
          }
          getDownY(t) {
            return u.isDesktop ? t.pageY : t.changedTouches[0].pageY;
          }
          getDownPos(t) {
            return 'vertical' === this.direction
              ? this.getDownY(t)
              : this.getDownX(t);
          }
          onDown(t) {
            this.isPointerDown = !0;
            const e = this.getDownPos(t);
            (this.downPos = e), (this.prevPos = e);
          }
          onMove(t) {
            if ((t.preventDefault(), !this.isPointerDown)) return;
            const e = this.getDownPos(t);
            (this.prevPos = this.downPos), (this.downPos = e);
            const n = this.prevPos - this.downPos;
            this.addTargetScroll(n), (this.isDragging = !0);
          }
          onUp() {
            this.isPointerDown &&
              ((this.velocity = 2 * (this.prevPos - this.downPos)),
              (this.downPos = 0),
              (this.prevPos = 0),
              (this.isPointerDown = !1),
              (this.isDragging = !1));
          }
          onWheel(t) {
            if (this.canceller()) return;
            t.preventDefault();
            const e = d.constrain(t.deltaY, -500, 500);
            this.addTargetScroll(e);
          }
          onKeyDown(t) {
            if (this.canceller()) return;
            const e = t.code;
            'ArrowUp' === e
              ? this.addTargetScroll(-500)
              : 'ArrowDown' === e && this.addTargetScroll(500);
          }
          addTargetScroll(t) {
            this.targetScroll = d.constrain(this.targetScroll + t, 0, this.max);
          }
          update() {
            this.canceller() ||
              ((this.targetScroll += this.velocity),
              (this.velocity *= 0.9),
              (this.targetScroll = d.constrain(this.targetScroll, 0, this.max)),
              this.tween.step(this.targetScroll),
              Math.abs(this.tween.velocity) < 0.01 &&
                (this.tween.position = this.targetScroll),
              (this.scroll = this.tween.position),
              (this.progress = d.constrain(this.scroll / this.max, 0, 1)));
          }
          reset() {
            (this.targetScroll = 0),
              (this.scroll = 0),
              (this.velocity = 0),
              (this.max = 0),
              (this.progress = 0),
              this.tween.reset();
          }
          scrollBy(t) {
            i.p8.to(this, {
              targetScroll: this.targetScroll + t,
              duration: 1.2,
            });
          }
        } {
          constructor(t) {
            super(t, 'vertical');
          }
          resize() {
            const { height: t } = this.$target.getBoundingClientRect();
            this.max = Math.floor(t - window.innerHeight);
          }
          update() {
            super.update(),
              (this.$target.style.transform = `translate3d(0, ${-this
                .scroll}px, 0)`);
          }
        }
        function m(t) {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, 1e3 * t);
          });
        }
        var g = n(186),
          x = n(6),
          w = n(282);
        const y = {
          width: 100,
          height: 100,
          halfWidth: 50,
          halfHeight: 50,
          sceneWidth: 2,
          sceneHeight: 2,
          dpr: 1,
          aspectRatio: 1,
        };
        var f = n(963),
          b = n(152),
          _ = n(224),
          D = n(123),
          z = n(848),
          P = n(613),
          k = n(532),
          S = n(999),
          E = n.n(S),
          C = n(484),
          I = n.n(C),
          M = n(822),
          F = n.n(M);
        const T = { utils: E(), noise2d: I(), noise3d: F() };
        function A(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            i = t;
          return (
            n.forEach((t) => {
              i += T[t];
            }),
            (i += e),
            i
          );
        }
        var L = n(296),
          q = n.n(L),
          R = n(565),
          j = n.n(R),
          O = n(703),
          W = n.n(O),
          $ = n(360),
          B = n.n($);
        const H = A(q(), j()),
          K = A(W(), B(), ['utils', 'noise2d']);
        class U extends D.K {
          constructor(t) {
            let { grain: e, blur: n } = t;
            super(),
              (this.geometry = new z._(3, 3)),
              (this.material = new P.F({
                uniforms: {
                  grainTex: { value: e },
                  blurTex: { value: n },
                  time: { value: 0 },
                  seed: { value: 100 * Math.random() },
                  back: { value: new k.P(0.05, 0.05, 0.05) },
                  param1: { value: 0 },
                  param2: { value: 0 },
                  param3: { value: 0 },
                },
                vertexShader: H,
                fragmentShader: K,
                transparent: !0,
              })),
              (this.position.x = -0.8),
              (this.position.y = -0.5),
              (this.position.z = 1);
          }
          update(t) {
            (this.material.uniforms.time.value = t),
              (this.material.uniforms.back.value.x = y.backColor.r),
              (this.material.uniforms.back.value.y = y.backColor.g),
              (this.material.uniforms.back.value.z = y.backColor.b),
              (this.material.uniforms.param1.value = y.params.param1),
              (this.material.uniforms.param2.value = y.params.param2),
              (this.material.uniforms.param3.value = y.params.param3);
          }
        }
        const V = new (class extends class {
            constructor() {
              (this.$container = document.getElementById('Background')),
                this.setConfig(),
                (this.scene = new f.x()),
                (this.camera = new b.i(-1, 1, 1, -1, 0.1, 1e4)),
                this.camera.position.set(0, 0, 10),
                (this.renderer = new _.C({
                  canvas: this.$container.querySelector('canvas'),
                  alpha: !1,
                  antialias: !1,
                  stencil: !1,
                })),
                this.renderer.setSize(y.width, y.height),
                this.renderer.setPixelRatio(y.dpr);
            }
            setConfig() {
              const { width: t, height: e } =
                this.$container.getBoundingClientRect();
              (y.dpr = Math.min(window.devicePixelRatio, 1.5)),
                (y.width = t),
                (y.height = e),
                (y.halfWidth = y.width / 2),
                (y.halfHeight = y.height / 2),
                (y.aspectRatio = y.width / y.height);
            }
            resizeScene() {
              window.innerWidth >= window.innerHeight
                ? ((this.camera.left = -1),
                  (this.camera.right = 1),
                  (this.camera.top = 1 / y.aspectRatio),
                  (this.camera.bottom = -1 / y.aspectRatio),
                  (y.sceneWidth = 2),
                  (y.sceneHeight = 2 / y.aspectRatio))
                : ((this.camera.left = -1 * y.aspectRatio),
                  (this.camera.right = 1 * y.aspectRatio),
                  (this.camera.top = 1),
                  (this.camera.bottom = -1),
                  (y.sceneWidth = 2 * y.aspectRatio),
                  (y.sceneHeight = 2)),
                (this.camera.aspect = y.aspectRatio),
                this.camera.updateProjectionMatrix(),
                this.renderer.setSize(y.width, y.height);
            }
          } {
            constructor() {
              super(),
                (this.rect = null),
                (this.circle = null),
                (this.isReady = !1),
                (y.backColor = new w.I(0.05, 0.05, 0.05)),
                (y.params = { param1: 1, param2: 0.05, param3: 0.2 });
            }
            async init() {
              const t = new g.d(),
                e = [
                  t.loadAsync('/assets/texture/grain.webp'),
                  t.loadAsync('/assets/texture/blur.webp'),
                ],
                n = await Promise.all(e);
              (n[0].minFilter = x.Ty),
                (n[0].magFilter = x.Ty),
                (n[0].generateMipmaps = !1),
                (n[1].minFilter = x.Ty),
                (n[1].magFilter = x.Ty),
                (n[1].generateMipmaps = !1),
                (this.circle = new U({ grain: n[0], blur: n[1] })),
                this.scene.add(this.circle),
                this.resize(),
                (this.isReady = !0);
            }
            changeTheme(t) {
              'dark' === t
                ? i.p8.to(y.backColor, {
                    r: 0.05,
                    g: 0.05,
                    b: 0.05,
                    duration: 1.6,
                  })
                : i.p8.to(y.backColor, {
                    r: 0.9,
                    g: 0.9,
                    b: 0.9,
                    duration: 1.6,
                  });
            }
            resize() {
              this.setConfig(), this.resizeScene();
            }
            update(t) {
              if (!this.isReady) return;
              const e = 0.001 * t;
              this.circle.update(e),
                this.renderer.setClearColor(y.backColor.getHex()),
                this.renderer.render(this.scene, this.camera);
            }
          })(),
          N = {
            theme: 'dark',
            canInteract: !0,
            isTransitioning: !1,
            pagePaths: ['/', '/projects/', '/info/', '/contact/'],
            currentPath: null,
            init() {
              (this.$page = document.getElementById('Page')),
                (this.pages = {
                  '/': document.querySelector('[data-page="home"]'),
                  '/projects/': document.querySelector(
                    '[data-page="projects"]'
                  ),
                  '/info/': document.querySelector('[data-page="info"]'),
                  '/contact/': document.querySelector('[data-page="contact"]'),
                });
              const t = window.matchMedia('(prefers-color-scheme: dark)');
              (this.theme = t.matches ? 'dark' : 'light'),
                (this.scroll = new v(
                  document.querySelector('#Content .content_inner')
                )),
                this.changeTheme(this.theme),
                this.updateView(),
                this.enter(),
                document.querySelectorAll('a').forEach((t) => {
                  '_blank' !== t.getAttribute('target') &&
                    (t.onclick = (e) => {
                      e.preventDefault(),
                        window.history.pushState(null, '', t.href),
                        this.updateView();
                    });
                }),
                window.addEventListener('popstate', () => {
                  this.updateView();
                });
            },
            changeTheme(t) {
              'dark' === t
                ? (this.$page.classList.add('is-dark'),
                  document.documentElement.style.setProperty(
                    '--c-bg',
                    'hsl(0, 0%, 5%)'
                  ),
                  document.documentElement.style.setProperty(
                    '--c-text',
                    'hsl(0, 0%, 95%)'
                  ))
                : (this.$page.classList.remove('is-dark'),
                  document.documentElement.style.setProperty(
                    '--c-bg',
                    'hsl(0, 0%, 90%)'
                  ),
                  document.documentElement.style.setProperty(
                    '--c-text',
                    'hsl(0, 0%, 10%)'
                  )),
                (this.theme = t),
                V.changeTheme(t);
            },
            toggleTheme() {
              'dark' === this.theme
                ? this.changeTheme('light')
                : this.changeTheme('dark');
            },
            async enter() {
              const t = document.getElementById('EnterView'),
                e = t.querySelector('._t1'),
                n = t.querySelector('._t2');
              await m(1),
                i.p8.to(e, { opacity: 0, duration: 0.6 }),
                i.p8.to(n, { opacity: 0, duration: 0.6, delay: 0.15 }),
                await m(0.6),
                i.p8.to(t, {
                  opacity: 0,
                  duration: 1.6,
                  onComplete: () => {
                    t.remove();
                  },
                });
            },
            updateView() {
              const t = window.location.pathname;
              this.pagePaths.includes(t)
                ? this.switchPage(t)
                : this.switchPage('/');
            },
            async switchPage(t) {
              (this.isTransitioning = !0),
                this.currentPath &&
                  (this.hidePage(this.pages[this.currentPath]), await m(0.3)),
                this.scroll.reset(),
                (this.isTransitioning = !1),
                this.showPage(this.pages[t]),
                (this.currentPath = t);
            },
            showPage(t) {
              (t.style.display = 'block'),
                t.classList.remove('is-leaving'),
                i.p8.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 0.9 });
            },
            hidePage(t) {
              t.classList.add('is-leaving'),
                i.p8.to(t, {
                  opacity: 0,
                  duration: 0.3,
                  onComplete: () => {
                    (t.style.display = 'none'),
                      t.classList.remove('is-leaving');
                  },
                });
            },
            resize() {
              this.scroll.resize();
            },
            update() {
              if (this.isTransitioning) return;
              this.scroll.update();
              const t = this.scroll.tween.velocity;
              Math.abs(t) > 1
                ? (this.canInteract = !1)
                : (this.canInteract = !0);
            },
            scrollBy(t) {
              (this.canInteract = !1), this.scroll.scrollBy(t);
            },
          };
        class Y {
          constructor() {
            this.init(), this.forceResize(), this.resize();
          }
          init() {
            (window.Alpine = a.Z),
              a.Z.store('ui', N),
              a.Z.start(),
              V.init(),
              (this.resizeChecker = new o()),
              (this.resizeChecker2 = new o()),
              r.add(this.update.bind(this));
          }
          forceResize() {
            const t = document.documentElement,
              e = 0.01 * t.clientWidth,
              n = 0.01 * t.clientHeight;
            document.documentElement.style.setProperty('--vw', `${e}px`),
              document.documentElement.style.setProperty('--vh', `${n}px`),
              document.documentElement.style.setProperty(
                '--vmax',
                `${Math.max(e, n)}px`
              ),
              document.documentElement.style.setProperty(
                '--vmin',
                `${Math.min(e, n)}px`
              ),
              a.Z.store('ui').resize();
          }
          resize() {
            V.resize();
          }
          update(t) {
            this.resizeChecker.check() && this.resize(),
              this.resizeChecker2.check(!0) && this.forceResize(),
              a.Z.store('ui').update(),
              V.update(t);
          }
        }
        document.addEventListener('DOMContentLoaded', () => {
          !(function () {
            const t = document.querySelector('meta[name="viewport"]');
            function e() {
              const e =
                window.outerWidth > 375
                  ? 'width=device-width,initial-scale=1'
                  : 'width=375';
              t.getAttribute('content') !== e && t.setAttribute('content', e);
            }
            window.addEventListener('resize', e), e();
          })(),
            new Y();
        });
      },
      484: (t) => {
        t.exports =
          '//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\nfloat snoise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nfloat snoise01(vec2 v) {\n  return (1.0 + snoise(v)) * 0.5;\n}\n';
      },
      822: (t) => {
        t.exports =
          '//\n// Description : Array and textureless GLSL 2D/3D/4D simplex noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\nfloat snoise(vec3 v) {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy;\n  vec3 x3 = x0 - D.yyy;\n\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  float n_ = 0.142857142857;\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise01(vec3 v) {\n  return (1.0 + snoise(v)) * 0.5;\n}\n';
      },
      999: (t) => {
        t.exports =
          'float random(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat map(float value, float start1, float stop1, float start2, float stop2) {\n  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;\n}\n\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nmat2 rotate2D(float rad) {\n  return mat2(cos(rad), sin(rad), -sin(rad), cos(rad));\n}\n\nmat2 scale2D(vec2 scale) {\n  return mat2(scale.x, 0.0, 0.0, scale.y);\n}\n\nvec2 getNormalFromUV(vec2 uv) {\n  float angle = atan(uv.y - 0.5, uv.x - 0.5);\n  return normalize(vec2(cos(angle), sin(angle)));\n}\n\nfloat fresnel(float F0, vec3 viewDirection, vec3 worldNormal) {\n  return F0 + (1.0 - F0) * pow(1.0 - dot(viewDirection, worldNormal), 5.0);\n}\n';
      },
      703: (t) => {
        t.exports =
          'precision highp float;\n\nuniform sampler2D grainTex;\nuniform sampler2D blurTex;\nuniform float time;\nuniform float seed;\nuniform vec3 back;\nuniform float param1;\nuniform float param2;\nuniform float param3;\n\nvarying vec2 vUv;\n';
      },
      360: (t) => {
        t.exports =
          '#define PI 3.141592653589793\n\nfloat noise2d(vec2 st) {\n  return snoise01(vec2(st.x + time * 0.02, st.y - time * 0.04 + seed));\n}\n\nfloat pattern(vec2 p) {\n  vec2 q = vec2( noise2d( p + vec2(0.0, 0.0) ),\n                 noise2d( p + vec2(5.2, 1.3) ) );\n  vec2 r = vec2( noise2d( p + 4.0 * q + vec2(1.7, 9.2) ),\n                 noise2d( p + 4.0 * q + vec2(8.3, 2.8) ) );\n  return noise2d( p + 1.0 * r );\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec2 p = gl_FragCoord.xy;\n  float mt = mod(time, 1000.0);\n\n  // texture\n  vec3 grainColor = texture2D(grainTex, mod(p * param1 * 5.0, 1024.0) / 1024.0).rgb;\n  float blurAlpha = texture2D(blurTex, uv).a;\n\n  float gr = pow(grainColor.r * 1.0, 1.5) + 0.5 * (1.0 - blurAlpha);\n  float gg = grainColor.g;\n\n  float ax = param2 * gr * cos(gg * 2.0 * PI);\n  float ay = param2 * gr * sin(gg * 2.0 * PI);\n\n  // noise\n  float ndx = 1.0 * 1.0 * param3 + 0.1 * (1.0 - blurAlpha);\n  float ndy = 2.0 * 1.0 * param3 + 0.1 * (1.0 - blurAlpha);\n  float nx = uv.x * ndx + ax;\n  float ny = uv.y * ndy + ay;\n  float n = pattern(vec2(nx, ny));\n  n = pow(n * 1.05, 6.0);\n  n = smoothstep(0.0, 1.0, n);\n\n  vec3 front = vec3(0.5);\n  vec3 result = mix(back, front, n);\n\n  gl_FragColor = vec4(result, blurAlpha);\n  // gl_FragColor = vec4(vec3(blurAlpha), 1.0);\n}\n';
      },
      296: (t) => {
        t.exports =
          'uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n';
      },
      565: (t) => {
        t.exports =
          'void main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n';
      },
    },
    n = {};
  function i(t) {
    var s = n[t];
    if (void 0 !== s) return s.exports;
    var r = (n[t] = { exports: {} });
    return e[t].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = e),
    (i.amdO = {}),
    (t = []),
    (i.O = (e, n, s, r) => {
      if (!n) {
        var o = 1 / 0;
        for (l = 0; l < t.length; l++) {
          for (var [n, s, r] = t[l], a = !0, c = 0; c < n.length; c++)
            (!1 & r || o >= r) && Object.keys(i.O).every((t) => i.O[t](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), r < o && (o = r));
          if (a) {
            t.splice(l--, 1);
            var h = s();
            void 0 !== h && (e = h);
          }
        }
        return e;
      }
      r = r || 0;
      for (var l = t.length; l > 0 && t[l - 1][2] > r; l--) t[l] = t[l - 1];
      t[l] = [n, s, r];
    }),
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return i.d(e, { a: e }), e;
    }),
    (i.d = (t, e) => {
      for (var n in e)
        i.o(e, n) &&
          !i.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t = { 179: 0 };
      i.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var s,
            r,
            [o, a, c] = n,
            h = 0;
          if (o.some((e) => 0 !== t[e])) {
            for (s in a) i.o(a, s) && (i.m[s] = a[s]);
            if (c) var l = c(i);
          }
          for (e && e(n); h < o.length; h++)
            (r = o[h]), i.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return i.O(l);
        },
        n = (globalThis.webpackChunkp5aholic_me =
          globalThis.webpackChunkp5aholic_me || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var s = i.O(void 0, [736], () => i(60));
  s = i.O(s);
})();
