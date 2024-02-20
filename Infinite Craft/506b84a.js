(window.webpackJsonp = window.webpackJsonp || []).push([[28, 10], {
    1319: function(e, t, n) {
        "use strict";
        n.r(t);
        n(110),
        n(50),
        n(43),
        n(87),
        n(88);
        var canvas, o, r, c, d, l = n(10), f = n(33), h = n(284), v = (n(60),
        n(45),
        n(15),
        n(62),
        n(65),
        n(314),
        n(32),
        n(163),
        n(34),
        n(208),
        n(46),
        n(383),
        n(204),
        n(303),
        []), m = 0, x = 0, w = [[204, 200, 241], [50, 213, 202], [242, 187, 128]];
        function y(e, t, n, o, r, c) {
            this.x = e,
            this.y = t,
            this.xSpeed = n,
            this.ySpeed = o,
            this.radius = r,
            this.opacity = c,
            this.color = w[Math.floor(Math.random() * w.length)]
        }
        function I() {
            r = window.innerWidth * d,
            c = window.innerHeight * d,
            canvas.width = r,
            canvas.height = c
        }
        var S = {
            drawParticles: function(e, t) {
                if (!(e - m < 15)) {
                    var n = Math.min(e - m, 30);
                    m = e,
                    v.forEach((function(e) {
                        e.x += e.xSpeed * n,
                        e.y += e.ySpeed * n,
                        e.x < 0 && (e.x = r),
                        e.x > r && (e.x = 10),
                        e.y < 0 && (e.y = c),
                        e.y > c && (e.y = 10)
                    }
                    )),
                    o.clearRect(0, 0, r, c),
                    o.lineWidth = 1,
                    v.forEach((function(e, i) {
                        e.numLines = 0,
                        o.beginPath(),
                        o.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1),
                        o.fillStyle = "rgba(0, 0, 0, ".concat(e.opacity, ")"),
                        o.fill()
                    }
                    )),
                    t.forEach((function(e) {
                        e.numLines = 0
                    }
                    )),
                    v.forEach((function(e, i) {
                        for (var t = x; t < Math.min(v.length, x + 4); t++)
                            if (i !== t) {
                                var n = v[t]
                                  , o = e.x - n.x
                                  , r = e.y - n.y;
                                Math.sqrt(o * o + r * r) < 100 && (e.xSpeed += o / 1e5,
                                e.ySpeed += r / 1e5,
                                e.xSpeed = Math.min(Math.max(e.xSpeed, -.01), .01),
                                e.ySpeed = Math.min(Math.max(e.ySpeed, -.01), .01))
                            }
                    }
                    )),
                    x = (x + 4) % v.length,
                    window.innerWidth < 800 || (t.forEach((function(e, i) {
                        for (var n = i + 1; n < t.length; n++) {
                            var r = t[n]
                              , c = (e.left + e.width / 2) * d
                              , l = (e.top + e.height / 2) * d
                              , f = (r.left + r.width / 2) * d
                              , h = (r.top + r.height / 2) * d
                              , v = c - f
                              , m = l - h
                              , x = Math.sqrt(v * v + m * m);
                            x < 500 && (e.numLines++,
                            r.numLines++,
                            o.beginPath(),
                            o.moveTo(c, l),
                            o.lineTo(f, h),
                            o.strokeStyle = "rgba(180, 180, 180, ".concat(Math.min(1, 1 - x / 500), ")"),
                            o.stroke())
                        }
                    }
                    )),
                    t.forEach((function(e) {
                        v.forEach((function(t) {
                            if (!(t.numLines > 2 || e.numLines > 6)) {
                                var n = (e.left + e.width / 2) * d
                                  , r = (e.top + e.height / 2) * d
                                  , c = t.x - n
                                  , l = t.y - r
                                  , f = Math.sqrt(c * c + l * l);
                                f < 250 && (t.numLines++,
                                e.numLines++,
                                o.beginPath(),
                                o.moveTo(t.x, t.y),
                                o.lineTo(n, r),
                                o.strokeStyle = "rgba(200, 200, 200, ".concat(Math.min(1, 1 - f / 250), ")"),
                                o.stroke())
                            }
                        }
                        ))
                    }
                    )))
                }
            },
            createParticles: function(e) {
                canvas = e,
                d = Math.min(window.devicePixelRatio, 2),
                r = window.innerWidth * d,
                c = window.innerHeight * d,
                canvas.width = r,
                canvas.height = c,
                o = canvas.getContext("2d"),
                window.addEventListener("resize", I);
                for (var t = Math.min(150, window.innerWidth * window.innerHeight / 12e3), i = 0; i < t; i++) {
                    var n = Math.random()
                      , l = n * (1.2 * d) + 1.1 * d
                      , f = .4 * (1 - n) + .1;
                    v.push(new y(Math.random() * r,Math.random() * c,.03 * Math.random() - .015,.03 * Math.random() - .015,l,f))
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", I),
                v = [],
                m = 0,
                x = 0
            }
        }
          , C = n(336);
        function k(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function _(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? k(Object(source), !0).forEach((function(t) {
                    Object(f.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var z, E, j, M = null, O = {
            x: 0,
            y: 0
        }, N = {
            x: 0,
            y: 0
        }, A = {
            data: function() {
                return {
                    elements: [{
                        text: "Water",
                        emoji: "💧",
                        discovered: !1
                    }, {
                        text: "Fire",
                        emoji: "🔥",
                        discovered: !1
                    }, {
                        text: "Wind",
                        emoji: "🌬️",
                        discovered: !1
                    }, {
                        text: "Earth",
                        emoji: "🌍",
                        discovered: !1
                    }],
                    instances: [{
                        id: 0,
                        text: "Water",
                        emoji: "💧",
                        disabled: !1,
                        zIndex: 0,
                        isNew: !1,
                        discovered: !1,
                        hide: !0
                    }],
                    selectedInstance: null,
                    instanceId: 10,
                    hoverId: -1,
                    firstSelected: "",
                    secondSelected: "",
                    mouseDown: !1,
                    moveListener: null,
                    sorts: ["time", "name", "emoji"],
                    sortBy: "time",
                    mobileCraftedElement: {},
                    hasCrafted: !1,
                    sidebarSize: 305,
                    pinwheelCoords: {
                        x: 0,
                        y: 0
                    },
                    discoveries: [],
                    mobileIsCrafting: !1,
                    instanceSound: null,
                    rewardSound: null,
                    deleteSound: null,
                    errorSound: null,
                    discoverySound: null,
                    instanceSoundRate: 1,
                    isMuted: !1,
                    isActive: !0,
                    searchQuery: "",
                    showDiscoveredOnly: !1,
                    showControlFade: !0
                }
            },
            computed: {
                sortedElements: function() {
                    var e = this
                      , t = this.elements;
                    return this.showDiscoveredOnly && (t = t.filter((function(element) {
                        return element.discovered
                    }
                    ))),
                    this.searchQuery && (t = t.filter((function(element) {
                        return element.text.toLowerCase().includes(e.searchQuery.toLowerCase())
                    }
                    ))),
                    "name" === this.sortBy ? t = Object(h.a)(t).sort((function(a, b) {
                        return a.text.localeCompare(b.text)
                    }
                    )) : "emoji" === this.sortBy && (t = Object(h.a)(t).sort((function(a, b) {
                        return a.emoji.localeCompare(b.emoji)
                    }
                    ))),
                    t
                },
                showPinwheel: function() {
                    return this.instances.some((function(e) {
                        return e.isNew
                    }
                    ))
                }
            },
            created: function() {
                var e = JSON.parse(localStorage.getItem("infinite-craft-data"));
                e && e.elements && (this.elements = e.elements,
                this.hasCrafted = !0)
            },
            mounted: function() {
                var e = this;
                this.instanceSound = new C.Howl({
                    src: ["/infinite-craft/instance.mp3"],
                    volume: .5
                }),
                this.rewardSound = new C.Howl({
                    src: ["/infinite-craft/reward.mp3"],
                    volume: .4
                }),
                this.deleteSound = new C.Howl({
                    src: ["/infinite-craft/delete.mp3"],
                    volume: .45
                }),
                this.errorSound = new C.Howl({
                    src: ["/infinite-craft/error.mp3"],
                    volume: .4
                }),
                this.discoverySound = new C.Howl({
                    src: ["/infinite-craft/discovery.mp3"],
                    volume: .1,
                    rate: 1.1
                }),
                S.createParticles(this.$refs.particles);
                requestAnimationFrame((function t(time) {
                    e.isActive && (S.drawParticles(time, e.instances),
                    requestAnimationFrame(t))
                }
                )),
                this.$addEventListener("mousemove", this.moveInstance),
                this.$addEventListener("touchmove", this.moveInstance),
                this.$addEventListener("mouseup", this.dropElement),
                this.$addEventListener("touchend", this.dropElement),
                this.$addEventListener("resize", this.onResize),
                this.$addEventListener("keydown", (function(t) {
                    "Escape" === t.key ? e.searchQuery = "" : e.$refs.search.focus()
                }
                )),
                new ResizeObserver(this.checkControlsBlur).observe(this.$refs.sidebarInner),
                this.$refs.sidebar.addEventListener("scroll", this.checkControlsBlur),
                this.onResize()
            },
            beforeDestroy: function() {
                S.beforeDestroy(),
                C.Howler.mute(!1),
                C.Howler.unload(),
                this.isActive = !1
            },
            methods: {
                selectElement: function(e, t) {
                    var n = this;
                    this.playInstanceSound();
                    var o, r, c, d, l = e.target.getBoundingClientRect();
                    e.touches ? (c = e.touches[0].clientX,
                    d = e.touches[0].clientY) : (c = e.clientX,
                    d = e.clientY),
                    o = (c - l.left) / (l.right - l.left),
                    r = (d - l.top) / (l.bottom - l.top);
                    var f = this.instanceId++
                      , h = this.discoveries.includes(t.text)
                      , data = _({
                        left: l.left - 4,
                        top: l.top - 4,
                        offsetX: o,
                        offsetY: r,
                        id: f,
                        disabled: !1,
                        hasMoved: !1,
                        fromPanel: !0,
                        discovered: h
                    }, t);
                    this.selectedInstance = data,
                    this.instances.push(this.selectedInstance),
                    this.$nextTick((function() {
                        n.setInstancePosition(n.selectedInstance, l.left - 6, l.top - 6),
                        n.setInstanceZIndex(n.selectedInstance, n.instanceId)
                    }
                    )),
                    this.mouseDown = !0,
                    e.preventDefault()
                },
                selectInstance: function(e, t) {
                    if (3 === e.which)
                        return e.preventDefault(),
                        this.instances = this.instances.filter((function(i) {
                            return i.id !== t.id
                        }
                        )),
                        this.deleteSound.play(),
                        !1;
                    this.playInstanceSound(.09);
                    var n = this.getEventCoords(e)
                      , o = n.x
                      , r = n.y;
                    O = {
                        x: o,
                        y: r
                    },
                    t.disabled || (this.mouseDown = !0,
                    this.selectedInstance = t,
                    this.setInstanceZIndex(this.selectedInstance, ++this.instanceId),
                    t.offsetX = (o - t.left) / t.width,
                    t.offsetY = (r - t.top) / t.height),
                    e.preventDefault()
                },
                changeSort: function() {
                    var e = this.sorts.indexOf(this.sortBy) + 1;
                    e >= this.sorts.length ? this.sortBy = this.sorts[0] : this.sortBy = this.sorts[e]
                },
                checkControlsBlur: function() {
                    var e = this.$refs.sidebar;
                    this.showControlFade = e.scrollHeight - e.scrollTop - e.clientHeight >= 1
                },
                mobileSelect: function(e, t) {
                    if (this.mobileCraftedElement = {},
                    this.playInstanceSound(),
                    this.firstSelected) {
                        if (!this.secondSelected) {
                            this.secondSelected = t,
                            document.getElementById("item-" + this.secondSelected.text).style = "animation: itemMobileJiggle 0.35s linear infinite;",
                            this.craftMobile()
                        }
                    } else
                        this.firstSelected = t,
                        document.getElementById("item-" + this.firstSelected.text).style = "animation: itemMobileJiggle 0.35s linear infinite;"
                },
                reset: function() {
                    confirm("Are you sure? This will delete all your progress!") && (localStorage.removeItem("infinite-craft-data"),
                    location.reload())
                },
                getEventCoords: function(e) {
                    var t, n;
                    return e.touches ? (t = e.touches[0].clientX,
                    n = e.touches[0].clientY) : (t = e.clientX,
                    n = e.clientY),
                    {
                        x: t,
                        y: n
                    }
                },
                duplicateInstance: function(e) {
                    var t = this
                      , n = _({}, e);
                    n.id = this.instanceId++,
                    n.elem = null,
                    n.hasMoved = !1,
                    n.fromPanel = !1,
                    this.instances.push(n),
                    this.$nextTick((function() {
                        n.elem = document.getElementById("instance-" + n.id),
                        t.setInstancePosition(n, n.left + 10, n.top - 10),
                        t.setInstanceZIndex(n, t.instanceId)
                    }
                    ))
                },
                onResize: function() {
                    var e = this;
                    this.sidebarSize = window.innerWidth >= 1150 ? 360 : 310,
                    this.instances.forEach((function(t) {
                        t.width || e.calcInstanceSize(t),
                        t.left + t.width > window.innerWidth - e.sidebarSize && e.setInstancePosition(t, window.innerWidth - e.sidebarSize - t.width, t.top),
                        t.top + t.height > window.innerHeight && e.setInstancePosition(t, t.left, window.innerHeight - t.height)
                    }
                    )),
                    this.checkControlsBlur()
                },
                dropElement: function(e) {
                    var t = this;
                    if (this.mouseDown = !1,
                    this.selectedInstance && !(window.innerWidth < 800))
                        if (Math.sqrt(Math.pow(N.x - O.x, 2) + Math.pow(N.y - O.y, 2)) < 10 && !this.selectedInstance.fromPanel)
                            this.hoverId = -1;
                        else {
                            if (!this.selectedInstance.hasMoved && this.selectedInstance.fromPanel) {
                                var n = Math.random() * Math.PI * 2
                                  , o = 50 * Math.cos(n)
                                  , r = 50 * Math.sin(n);
                                return this.setInstancePosition(this.selectedInstance, (window.innerWidth - this.sidebarSize) / 2 + o, window.innerHeight / 2 - 40 + r),
                                this.selectedInstance.hasMoved = !0,
                                void this.calcInstanceSize(this.selectedInstance)
                            }
                            this.selectedInstance.hasMoved && (this.selectedInstance.left + this.selectedInstance.width > window.innerWidth - this.sidebarSize || !this.selectedInstance.width || !this.selectedInstance.left ? (this.instances = this.instances.filter((function(e) {
                                return e.id !== t.selectedInstance.id
                            }
                            )),
                            this.selectedInstance = null,
                            this.deleteSound.play()) : this.checkIntersections(this.selectedInstance))
                        }
                },
                clearInstances: function() {
                    this.instances = [],
                    this.deleteSound.play()
                },
                setInstancePosition: function(e, t, n) {
                    e.left = t,
                    e.top = n,
                    e.elem || (e.elem = document.getElementById("instance-" + e.id)),
                    e.elem.style.translate = "".concat(t, "px ").concat(n, "px")
                },
                setInstanceZIndex: function(e, t) {
                    e.zIndex = t,
                    e.elem.style.zIndex = t
                },
                moveInstance: function(e) {
                    if (this.mouseDown) {
                        var t = this.getEventCoords(e)
                          , n = t.x
                          , o = t.y;
                        N = {
                            x: n,
                            y: o
                        },
                        this.selectedInstance.hasMoved = !0,
                        this.setInstancePosition(this.selectedInstance, n - this.selectedInstance.offsetX * this.selectedInstance.width, o - this.selectedInstance.offsetY * this.selectedInstance.height),
                        this.selectedInstance.isNew && (this.pinwheelCoords = {
                            x: this.selectedInstance.left + this.selectedInstance.width / 2,
                            y: this.selectedInstance.top + this.selectedInstance.height / 2
                        });
                        var r = this.checkIntersections(this.selectedInstance, !0);
                        this.hoverId = r ? r.id : -1
                    }
                },
                calcInstanceSize: function(e) {
                    var element = document.getElementById("instance-" + e.id);
                    element && (e.width = element.offsetWidth,
                    e.height = element.offsetHeight)
                },
                checkIntersections: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e.width && e.height || this.calcInstanceSize(e);
                    for (var n = Object(h.a)(this.instances).sort((function(a, b) {
                        return b.zIndex - a.zIndex
                    }
                    )), i = 0; i < n.length; i++)
                        if (n[i].id !== e.id) {
                            var o = n[i];
                            if (o.width && o.height || this.calcInstanceSize(o),
                            e.left < o.left + o.width && e.left + e.width > o.left && e.top < o.top + o.height && e.top + e.height > o.top)
                                return t && !o.disabled ? o : void this.craft(e, o)
                        }
                    return !1
                },
                getCenterOfCraft: function(e, t) {
                    var n = e.left + e.width / 2
                      , o = e.top + e.height / 2;
                    return {
                        x: (n + (t.left + t.width / 2)) / 2,
                        y: (o + (t.top + t.height / 2)) / 2
                    }
                },
                getCraftResponse: (j = Object(l.a)(regeneratorRuntime.mark((function e(t, n) {
                    var o, r, c, d, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                o = new AbortController,
                                this.$setTimeout((function() {
                                    return o.abort()
                                }
                                ), 12e3),
                                r = [t, n].sort((function(a, b) {
                                    return a.text.localeCompare(b.text)
                                }
                                )),
                                c = "https://neal.fun/api/infinite-craft/pair?first=".concat(encodeURIComponent(r[0].text), "&second=").concat(encodeURIComponent(r[1].text)),
                                e.next = 7,
                                fetch(c, {
                                    signal: o.signal
                                });
                            case 7:
                                return d = e.sent,
                                e.next = 10,
                                d.json();
                            case 10:
                                return "Pigpen" === (l = e.sent).result && (l.emoji = "🐷"),
                                e.abrupt("return", l);
                            case 15:
                                return e.prev = 15,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    result: "Nothing"
                                });
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[0, 15]])
                }
                ))),
                function(e, t) {
                    return j.apply(this, arguments)
                }
                ),
                craftMobile: (E = Object(l.a)(regeneratorRuntime.mark((function e() {
                    var t, n, element, o, r, c, d = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.mobileIsCrafting) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (this.mobileIsCrafting = !0,
                                this.hasCrafted = !0,
                                !this.firstSelected || !this.secondSelected) {
                                    e.next = 17;
                                    break
                                }
                                return t = function e(t) {
                                    t.target.style = "animation: none",
                                    t.target.removeEventListener("animationiteration", e)
                                }
                                ,
                                e.next = 8,
                                this.getCraftResponse(this.firstSelected, this.secondSelected);
                            case 8:
                                "Nothing" !== (n = e.sent).result && ((element = this.elements.find((function(element) {
                                    return element.text === n.result
                                }
                                ))) ? this.playInstanceSound() : (element = {
                                    text: n.result,
                                    emoji: n.emoji
                                },
                                this.elements.push(element),
                                this.saveItems(),
                                o = [.9, 1],
                                this.rewardSound.rate(o[Math.floor(Math.random() * o.length)]),
                                this.rewardSound.play()),
                                this.mobileCraftedElement = element,
                                M && clearTimeout(M),
                                M = setTimeout((function() {
                                    d.mobileCraftedElement = null
                                }
                                ), 1700)),
                                r = document.getElementById("item-" + this.firstSelected.text),
                                c = document.getElementById("item-" + this.secondSelected.text),
                                r.addEventListener("animationiteration", t),
                                c.addEventListener("animationiteration", t),
                                this.firstSelected = null,
                                this.secondSelected = null,
                                this.mobileIsCrafting = !1;
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return E.apply(this, arguments)
                }
                ),
                playInstanceSound: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3;
                    this.instanceSoundRate += .1,
                    this.instanceSoundRate > 1.3 && (this.instanceSoundRate = .9),
                    this.instanceSound.rate(this.instanceSoundRate),
                    this.instanceSound.volume(e),
                    this.instanceSound.play()
                },
                toggleSound: function() {
                    this.isMuted = !this.isMuted,
                    this.isMuted ? C.Howler.mute(!0) : C.Howler.mute(!1)
                },
                saveItems: function() {
                    localStorage.setItem("infinite-craft-data", JSON.stringify({
                        elements: this.elements
                    }))
                },
                craft: (z = Object(l.a)(regeneratorRuntime.mark((function e(t, n) {
                    var o, r, c, d, element, l, f, h, v = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this.hasCrafted = !0,
                                !t.disabled && !n.disabled) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return this.hoverId = -1,
                                t.disabled = !0,
                                n.disabled = !0,
                                e.next = 8,
                                this.getCraftResponse(t, n);
                            case 8:
                                "Nothing" !== (o = e.sent).result ? (r = this.getCenterOfCraft(t, n),
                                c = this.instanceId++,
                                d = {
                                    id: c,
                                    text: o.result,
                                    emoji: o.emoji,
                                    disabled: !1,
                                    zIndex: c,
                                    discovered: o.isNew
                                },
                                o.isNew && this.discoveries.push(o.result),
                                (element = this.elements.find((function(element) {
                                    return element.text.toLowerCase() === d.text.toLowerCase()
                                }
                                ))) && (d.text = element.text,
                                d.emoji = element.emoji,
                                d.discovered = element.discovered),
                                element ? this.playInstanceSound() : (this.elements.push({
                                    text: d.text,
                                    emoji: d.emoji,
                                    discovered: o.isNew
                                }),
                                this.saveItems(),
                                this.pinwheelCoords = r,
                                d.isNew = !0,
                                o.isNew && this.discoverySound.play(),
                                l = [.9, 1],
                                this.rewardSound.rate(l[Math.floor(Math.random() * l.length)]),
                                this.rewardSound.play(),
                                this.$setTimeout((function() {
                                    d.isNew = !1
                                }
                                ), 1200)),
                                f = this.instances.findIndex((function(e) {
                                    return e.id === t.id
                                }
                                )),
                                this.instances.splice(f, 1),
                                h = this.instances.findIndex((function(e) {
                                    return e.id === n.id
                                }
                                )),
                                this.instances.splice(h, 1),
                                this.instances.push(d),
                                this.$nextTick((function() {
                                    v.calcInstanceSize(d),
                                    v.setInstancePosition(d, r.x - d.width / 2, r.y - d.height / 2),
                                    v.setInstanceZIndex(d, c)
                                }
                                ))) : (this.errorSound.play(),
                                t.disabled = !1,
                                n.disabled = !1);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return z.apply(this, arguments)
                }
                )
            }
        }, P = A, R = (n(985),
        n(987),
        n(28)), component = Object(R.a)(P, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "container"
            }, [t("nuxt-link", {
                attrs: {
                    to: "/"
                }
            }, [t("img", {
                staticClass: "site-title",
                attrs: {
                    src: "/general/logo.svg"
                }
            })]), e._v(" "), t("div", {
                staticClass: "side-controls"
            }, [e._m(0), e._v(" "), t("img", {
                staticClass: "clear",
                attrs: {
                    src: "/infinite-craft/clear.svg"
                },
                on: {
                    click: e.clearInstances
                }
            }), e._v(" "), t("img", {
                staticClass: "sound",
                attrs: {
                    src: e.isMuted ? "/infinite-craft/mute.svg" : "/infinite-craft/sound.svg"
                },
                on: {
                    click: e.toggleSound
                }
            })]), e._v(" "), t("client-only", [t("Ad", {
                attrs: {
                    slotId: "1550169597",
                    adStyle: "display:inline-block; width:400px; height:60px; position: fixed; bottom: 0px; left: 50%; transform: translateX(calc(-50% - 162px));",
                    adFormat: "none",
                    isResponsive: !1,
                    minWidth: 1150
                }
            })], 1), e._v(" "), t("canvas", {
                ref: "particles",
                staticClass: "particles"
            }), e._v(" "), t("div", {
                ref: "sidebar",
                staticClass: "sidebar"
            }, [t("div", {
                ref: "sidebarInner",
                staticClass: "sidebar-inner"
            }, [0 === e.sortedElements.length ? t("div", {
                staticClass: "empty-sidebar"
            }, [t("img", {
                staticClass: "empty-sidebar-icon",
                attrs: {
                    src: "/infinite-craft/empty.svg"
                }
            }), e._v("\n        No items\n      ")]) : e._e(), e._v(" "), t("div", {
                staticClass: "items"
            }, [e._l(e.sortedElements, (function(element, i) {
                return t("div", {
                    key: element.text,
                    staticClass: "item",
                    class: {
                        "item-selected": e.firstSelected === element.text || e.secondSelected === element.text,
                        "item-discovered": element.discovered
                    },
                    on: {
                        mousedown: function(t) {
                            return e.selectElement(t, element)
                        },
                        touchstart: function(t) {
                            return e.selectElement(t, element)
                        }
                    }
                }, [t("span", {
                    staticClass: "item-emoji"
                }, [e._v(e._s(element.emoji || "⬜"))]), e._v("\n          " + e._s(element.text) + "\n        ")])
            }
            )), e._v(" "), e.hasCrafted || 0 === e.sortedElements.length ? e._e() : t("div", {
                staticClass: "instruction"
            }, [t("img", {
                staticClass: "instruction-icon",
                attrs: {
                    src: "/infinite-craft/left-arrow.svg"
                }
            }), e._v("\n          Drag elements to craft\n        ")])], 2)]), e._v(" "), t("div", {
                staticClass: "sidebar-controls",
                class: {
                    "sidebar-controls-fade-show": e.showControlFade
                }
            }, [t("div", {
                staticClass: "sidebar-sorting"
            }, [t("div", {
                staticClass: "sidebar-discoveries sidebar-sorting-item",
                class: {
                    "sidebar-discoveries-active": e.showDiscoveredOnly
                },
                on: {
                    click: function(t) {
                        e.showDiscoveredOnly = !e.showDiscoveredOnly
                    }
                }
            }, [t("img", {
                staticClass: "sidebar-sorting-icon",
                attrs: {
                    src: "/infinite-craft/magic.svg"
                }
            }), e._v("\n          Discoveries\n        ")]), e._v(" "), t("div", {
                staticClass: "sidebar-sort sidebar-sorting-item",
                on: {
                    click: e.changeSort
                }
            }, [t("img", {
                staticClass: "sidebar-sorting-icon",
                attrs: {
                    src: "/infinite-craft/".concat(e.sortBy, ".svg")
                }
            }), e._v("\n          Sort by " + e._s(e.sortBy) + "\n        ")])]), e._v(" "), t("div", {
                staticClass: "sidebar-search"
            }, [t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.searchQuery,
                    expression: "searchQuery"
                }],
                ref: "search",
                staticClass: "sidebar-input",
                attrs: {
                    placeholder: "Search items..."
                },
                domProps: {
                    value: e.searchQuery
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.searchQuery = t.target.value)
                    }
                }
            }), e._v(" "), t("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.searchQuery.length > 0,
                    expression: "searchQuery.length > 0"
                }],
                staticClass: "sidebar-input-close",
                attrs: {
                    src: "/infinite-craft/close.svg"
                },
                on: {
                    click: function(t) {
                        e.searchQuery = ""
                    }
                }
            })])])]), e._v(" "), t("div", {
                staticClass: "instances",
                on: {
                    contextmenu: function(e) {
                        return e.preventDefault(),
                        !1
                    }
                }
            }, [t("transition-group", {
                attrs: {
                    name: "instance-anim",
                    tag: "div"
                }
            }, e._l(e.instances, (function(n, i) {
                return t("div", {
                    key: n.id,
                    staticClass: "item instance",
                    class: {
                        "instance-disabled": n.disabled,
                        "instance-hover": e.hoverId === n.id || -1 !== e.hoverId && e.selectedInstance.id === n.id,
                        "instance-new": n.isNew,
                        "instance-hide": n.hide,
                        "instance-discovered": n.discovered
                    },
                    attrs: {
                        id: "instance-" + n.id
                    },
                    on: {
                        mousedown: function(t) {
                            return e.selectInstance(t, n)
                        },
                        touchstart: function(t) {
                            return e.selectInstance(t, n)
                        },
                        dblclick: function(t) {
                            return e.duplicateInstance(n)
                        }
                    }
                }, [t("span", {
                    staticClass: "instance-emoji"
                }, [e._v(e._s(n.emoji || "⬜"))]), e._v("\n        " + e._s(n.text) + "\n        "), n.discovered ? t("div", {
                    staticClass: "instance-discovered-text"
                }, [t("img", {
                    staticClass: "instance-discovered-emoji",
                    attrs: {
                        src: "/infinite-craft/magic.svg"
                    }
                }), e._v("First Discovery\n        ")]) : e._e()])
            }
            )), 0)], 1), e._v(" "), t("transition", {
                attrs: {
                    name: "pinwheel-animation"
                }
            }, [e.showPinwheel ? t("img", {
                staticClass: "pinwheel",
                style: {
                    translate: "calc(".concat(e.pinwheelCoords.x, "px - 48%) calc(").concat(e.pinwheelCoords.y, "px - 50%)")
                },
                attrs: {
                    src: "/infinite-craft/pinwheel.png"
                }
            }) : e._e()]), e._v(" "), t("div", {
                staticClass: "mobile-sound",
                on: {
                    click: e.toggleSound
                }
            }, [t("img", {
                staticClass: "sound",
                attrs: {
                    src: e.isMuted ? "/infinite-craft/mute.svg" : "/infinite-craft/sound.svg"
                }
            })]), e._v(" "), t("img", {
                staticClass: "logo",
                attrs: {
                    src: "/infinite-craft/logo.svg"
                }
            }), e._v(" "), t("div", {
                staticClass: "reset",
                on: {
                    click: e.reset
                }
            }, [e._v("Reset")]), e._v(" "), t("transition-group", {
                staticClass: "mobile-items",
                attrs: {
                    name: "list",
                    tag: "div"
                }
            }, e._l(e.sortedElements, (function(element, i) {
                var n, o, r;
                return t("div", {
                    key: element.text,
                    staticClass: "mobile-item"
                }, [t("div", {
                    staticClass: "item",
                    class: {
                        "item-selected-mobile": (null === (n = e.firstSelected) || void 0 === n ? void 0 : n.text) === element.text || (null === (o = e.secondSelected) || void 0 === o ? void 0 : o.text) === element.text,
                        "item-crafted-mobile": (null === (r = e.mobileCraftedElement) || void 0 === r ? void 0 : r.text) === element.text,
                        "mobile-is-crafting": e.mobileIsCrafting
                    },
                    attrs: {
                        id: "item-" + element.text
                    },
                    on: {
                        click: function(t) {
                            return e.mobileSelect(t, element)
                        }
                    }
                }, [t("span", {
                    staticClass: "item-emoji-mobile"
                }, [e._v(e._s(element.emoji || "⬜"))]), e._v("\n        " + e._s(element.text) + "\n      ")])])
            }
            )), 0), e._v(" "), e.hasCrafted ? e._e() : t("div", {
                staticClass: "mobile-instruction"
            }, [e._v("\n    Tap two elements to craft\n  ")])], 1)
        }
        ), [function() {
            var e = this._self._c;
            return e("a", {
                staticClass: "coffee-link",
                attrs: {
                    target: "_blank",
                    href: "https://ko-fi.com/nealfun"
                }
            }, [e("img", {
                staticClass: "coffee",
                attrs: {
                    src: "/infinite-craft/coffee.svg"
                }
            })])
        }
        ], !1, null, "8889ef30", null);
        t.default = component.exports;
        installComponents(component, {
            Ad: n(280).default
        })
    },
    276: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(19)
          , c = n(9)
          , d = n(6)
          , path = n(203)
          , l = n(4)
          , f = n(109)
          , h = n(12)
          , v = n(201)
          , m = n(39)
          , x = n(81)
          , w = n(202)
          , y = n(3)
          , I = n(80).f
          , S = n(29).f
          , C = n(21).f
          , k = n(281)
          , _ = n(282).trim
          , z = "Number"
          , E = d[z]
          , j = path[z]
          , M = E.prototype
          , O = d.TypeError
          , N = l("".slice)
          , A = l("".charCodeAt)
          , P = function(e) {
            var t = w(e, "number");
            return "bigint" == typeof t ? t : R(t)
        }
          , R = function(e) {
            var t, n, o, r, c, d, l, code, f = w(e, "number");
            if (x(f))
                throw O("Cannot convert a Symbol value to a number");
            if ("string" == typeof f && f.length > 2)
                if (f = _(f),
                43 === (t = A(f, 0)) || 45 === t) {
                    if (88 === (n = A(f, 2)) || 120 === n)
                        return NaN
                } else if (48 === t) {
                    switch (A(f, 1)) {
                    case 66:
                    case 98:
                        o = 2,
                        r = 49;
                        break;
                    case 79:
                    case 111:
                        o = 8,
                        r = 55;
                        break;
                    default:
                        return +f
                    }
                    for (d = (c = N(f, 2)).length,
                    l = 0; l < d; l++)
                        if ((code = A(c, l)) < 48 || code > r)
                            return NaN;
                    return parseInt(c, o)
                }
            return +f
        }
          , L = f(z, !E(" 0o1") || !E("0b1") || E("+0x1"))
          , D = function(e) {
            return m(M, e) && y((function() {
                k(e)
            }
            ))
        }
          , W = function(e) {
            var t = arguments.length < 1 ? 0 : E(P(e));
            return D(this) ? v(Object(t), this, W) : t
        };
        W.prototype = M,
        L && !r && (M.constructor = W),
        o({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: L
        }, {
            Number: W
        });
        var T = function(e, source) {
            for (var t, n = c ? I(source) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++)
                h(source, t = n[o]) && !h(e, t) && C(e, t, S(source, t))
        };
        r && j && T(path[z], j),
        (L || r) && T(path[z], E)
    },
    277: function(e, t, n) {
        var content = n(286);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        n(108).default)("f68e4eaa", content, !0, {
            sourceMap: !1
        })
    },
    280: function(e, t, n) {
        "use strict";
        n.r(t);
        n(276);
        var o = {
            props: {
                slotId: {
                    type: String,
                    required: !0
                },
                adFormat: {
                    type: String,
                    required: !0
                },
                isResponsive: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                adStyle: {
                    type: String,
                    required: !0
                },
                minWidth: {
                    type: Number,
                    required: !1,
                    default: -1
                },
                maxWidth: {
                    type: Number,
                    required: !1,
                    default: -1
                }
            },
            data: function() {
                return {
                    hideAd: !1,
                    shouldShow: this.shouldShowAd()
                }
            },
            mounted: function() {
                var e = this;
                this.createAds(),
                this.$addEventListener("resize", (function() {
                    e.hideAd = !e.shouldShowAd()
                }
                ))
            },
            watch: {
                $route: function() {
                    this.firstLoad = !1,
                    this.createAds()
                }
            },
            methods: {
                createAds: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.shouldShowAd() && (window.adsbygoogle = window.adsbygoogle || [],
                        adsbygoogle.push({}))
                    }
                    ))
                },
                shouldShowAd: function() {
                    return (-1 === this.minWidth || window.innerWidth >= this.minWidth) && (-1 === this.maxWidth || window.innerWidth < this.maxWidth)
                }
            },
            beforeDestroy: function() {
                window.top.__vm_remove = window.top.__vm_remove || [],
                window.top.__vm_remove.push(this.$refs.adPlacement)
            }
        }
          , r = (n(285),
        n(28))
          , component = Object(r.a)(o, (function() {
            var e = this
              , t = e._self._c;
            return t("client-only", [e.shouldShow ? t("ins", {
                staticClass: "adsbygoogle",
                class: {
                    hide: e.hideAd
                },
                style: e.adStyle,
                attrs: {
                    "data-ad-client": "ca-pub-4556406968269041",
                    "data-ad-slot": e.slotId,
                    "data-ad-format": e.adFormat,
                    "data-full-width-responsive": e.isResponsive
                }
            }) : t("div")])
        }
        ), [], !1, null, "8af1cc2e", null);
        t.default = component.exports
    },
    281: function(e, t, n) {
        var o = n(4);
        e.exports = o(1..valueOf)
    },
    282: function(e, t, n) {
        var o = n(4)
          , r = n(24)
          , c = n(13)
          , d = n(283)
          , l = o("".replace)
          , f = RegExp("^[" + d + "]+")
          , h = RegExp("(^|[^" + d + "])[" + d + "]+$")
          , v = function(e) {
            return function(t) {
                var n = c(r(t));
                return 1 & e && (n = l(n, f, "")),
                2 & e && (n = l(n, h, "$1")),
                n
            }
        };
        e.exports = {
            start: v(1),
            end: v(2),
            trim: v(3)
        }
    },
    283: function(e, t) {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    },
    284: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var o = n(111);
        var r = n(137)
          , c = n(82);
        function d(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Object(o.a)(e)
            }(e) || Object(r.a)(e) || Object(c.a)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    285: function(e, t, n) {
        "use strict";
        n(277)
    },
    286: function(e, t, n) {
        var o = n(107)(!1);
        o.push([e.i, ".hide[data-v-8af1cc2e]{display:none!important}", ""]),
        e.exports = o
    },
    303: function(e, t, n) {
        var o = n(2)
          , r = n(304)
          , c = n(112);
        o({
            target: "Array",
            proto: !0
        }, {
            fill: r
        }),
        c("fill")
    },
    304: function(e, t, n) {
        "use strict";
        var o = n(25)
          , r = n(84)
          , c = n(31);
        e.exports = function(e) {
            for (var t = o(this), n = c(t), d = arguments.length, l = r(d > 1 ? arguments[1] : void 0, n), f = d > 2 ? arguments[2] : void 0, h = void 0 === f ? n : r(f, n); h > l; )
                t[l++] = e;
            return t
        }
    },
    311: function(e, t, n) {
        var o = n(61).match(/firefox\/(\d+)/i);
        e.exports = !!o && +o[1]
    },
    312: function(e, t, n) {
        var o = n(61);
        e.exports = /MSIE|Trident/.test(o)
    },
    313: function(e, t, n) {
        var o = n(61).match(/AppleWebKit\/(\d+)\./);
        e.exports = !!o && +o[1]
    },
    314: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(4)
          , c = n(35)
          , d = n(25)
          , l = n(31)
          , f = n(206)
          , h = n(13)
          , v = n(3)
          , m = n(205)
          , x = n(141)
          , w = n(311)
          , y = n(312)
          , I = n(85)
          , S = n(313)
          , C = []
          , k = r(C.sort)
          , _ = r(C.push)
          , z = v((function() {
            C.sort(void 0)
        }
        ))
          , E = v((function() {
            C.sort(null)
        }
        ))
          , j = x("sort")
          , M = !v((function() {
            if (I)
                return I < 70;
            if (!(w && w > 3)) {
                if (y)
                    return !0;
                if (S)
                    return S < 603;
                var code, e, t, n, o = "";
                for (code = 65; code < 76; code++) {
                    switch (e = String.fromCharCode(code),
                    code) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        t = 3;
                        break;
                    case 68:
                    case 71:
                        t = 4;
                        break;
                    default:
                        t = 2
                    }
                    for (n = 0; n < 47; n++)
                        C.push({
                            k: e + n,
                            v: t
                        })
                }
                for (C.sort((function(a, b) {
                    return b.v - a.v
                }
                )),
                n = 0; n < C.length; n++)
                    e = C[n].k.charAt(0),
                    o.charAt(o.length - 1) !== e && (o += e);
                return "DGBEFHACIJK" !== o
            }
        }
        ));
        o({
            target: "Array",
            proto: !0,
            forced: z || !E || !j || !M
        }, {
            sort: function(e) {
                void 0 !== e && c(e);
                var t = d(this);
                if (M)
                    return void 0 === e ? k(t) : k(t, e);
                var n, o, r = [], v = l(t);
                for (o = 0; o < v; o++)
                    o in t && _(r, t[o]);
                for (m(r, function(e) {
                    return function(t, n) {
                        return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : h(t) > h(n) ? 1 : -1
                    }
                }(e)),
                n = l(r),
                o = 0; o < n; )
                    t[o] = r[o++];
                for (; o < v; )
                    f(t, o++);
                return t
            }
        })
    },
    383: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(66).findIndex
          , c = n(112)
          , d = "findIndex"
          , l = !0;
        d in [] && Array(1)[d]((function() {
            l = !1
        }
        )),
        o({
            target: "Array",
            proto: !0,
            forced: l
        }, {
            findIndex: function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        c(d)
    },
    506: function(e, t, n) {
        var content = n(986);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        n(108).default)("c5b86a9e", content, !0, {
            sourceMap: !1
        })
    },
    507: function(e, t, n) {
        var content = n(988);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        n(108).default)("56de0a86", content, !0, {
            sourceMap: !1
        })
    },
    985: function(e, t, n) {
        "use strict";
        n(506)
    },
    986: function(e, t, n) {
        var o = n(107)(!1);
        o.push([e.i, "@keyframes itemMobileJiggle{0%{transform:rotate(0deg)}25%{transform:rotate(2deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-2deg)}to{transform:rotate(0deg)}}", ""]),
        e.exports = o
    },
    987: function(e, t, n) {
        "use strict";
        n(507)
    },
    988: function(e, t, n) {
        var o = n(107)(!1);
        o.push([e.i, '.container[data-v-8889ef30]{left:0;width:100%;height:100%;font-family:"Roboto",sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#040404}.container[data-v-8889ef30],.sidebar[data-v-8889ef30]{position:fixed;top:0}.sidebar[data-v-8889ef30]{right:0;width:305px;height:100vh;background:hsla(0,0%,100%,.93);z-index:10;overflow-y:scroll;overflow-x:visible;border-left:1px solid #c8c8c8}.logo[data-v-8889ef30]{position:fixed;top:10px;right:320px;width:80px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.mobile-items[data-v-8889ef30]{display:none}.items[data-v-8889ef30]{max-width:900px;margin-left:auto;margin-right:auto;padding:9px;min-height:calc(100svh - 71px)}.item[data-v-8889ef30]{margin:4px;cursor:pointer;padding:8px 8px 7px;border-radius:5px;display:inline-block;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid #c8c8c8;transition:background .15s linear;background:#fff;line-height:1em}.item[data-v-8889ef30],.item-emoji[data-v-8889ef30]{font-size:15.4px}.instance[data-v-8889ef30]{position:fixed;font-size:18px;z-index:11;left:0;top:0;padding:11px 10px 10px;transition:scale .15s ease-in;border-radius:5px;transform-origin:center center;display:flex;align-items:center;contain:layout;border:1px solid #91a8c1;background:linear-gradient(0deg,#f7feff,#fff 70%)}.instance[data-v-8889ef30],.instance-discovered-text[data-v-8889ef30]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.instance-discovered-text[data-v-8889ef30]{position:absolute;bottom:-3px;transform:translate(-50%,100%);left:50%;width:100%;text-align:center;font-size:12px;width:110px}.instance-discovered-emoji[data-v-8889ef30]{width:12px;position:relative;top:1px;margin-right:3px}.pinwheel[data-v-8889ef30]{position:fixed;top:0;left:0;width:130px;height:130px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1;animation:pinwheelSpin-8889ef30 2s linear infinite;transition:scale .4s ease-in-out,opacity .4s ease-in-out;scale:0;opacity:0;transform-origin:center center}.pinwheel-animation-enter-active[data-v-8889ef30],.pinwheel-animation-leave-active[data-v-8889ef30]{scale:1;opacity:1}.pinwheel-animation-enter-from[data-v-8889ef30],.pinwheel-animation-leave-to[data-v-8889ef30]{scale:0;opacity:0}@keyframes pinwheelSpin-8889ef30{to{rotate:90deg}}@keyframes scaleIn-8889ef30{0%{scale:.5}to{scale:1}}@media (hover:hover){.item[data-v-8889ef30]:hover{background:linear-gradient(0deg,#d6fcff,#fff 90%);border:1px solid #91a8c1}}.item-selected[data-v-8889ef30]{background:#e3e3e3}.instruction[data-v-8889ef30]{font-size:14px;text-align:center;margin-top:25px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;border-radius:5px;padding:9px 0;border:1px solid #c8c8c8;width:calc(100% - 10px);margin-left:auto;margin-right:auto}.instruction-icon[data-v-8889ef30]{width:16px;position:relative;top:3px;margin-right:5px;margin-top:-3px}.empty-sidebar[data-v-8889ef30]{position:absolute;left:50%;transform:translateX(-50%);font-size:15px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;top:25px}.instance-disabled[data-v-8889ef30]{pointer-events:none;opacity:.7;transition:.15s linear;animation:pulse-8889ef30 .8s ease-in-out .15s infinite alternate-reverse}@keyframes pulse-8889ef30{0%{opacity:.2}to{opacity:.7}}.instance-disabled[data-v-8889ef30]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.instance-hover[data-v-8889ef30]{scale:1.04;background:linear-gradient(0deg,#d6fcff,#fff 90%);border:1px solid #91a8c1}.site-title[data-v-8889ef30]{position:fixed;top:13px;left:13px;width:110px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.site-title[data-v-8889ef30]:hover{transform:scale(1.03)}.side-controls[data-v-8889ef30]{position:fixed;right:314px;bottom:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;grid-gap:19px}.clear[data-v-8889ef30],.sound[data-v-8889ef30]{width:21px;cursor:pointer;opacity:.8;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sound[data-v-8889ef30]{transform:scale(.92)}.coffee[data-v-8889ef30]{width:15px}.coffee-link[data-v-8889ef30]{line-height:0}.clear[data-v-8889ef30]:hover,.coffee[data-v-8889ef30]:hover,.sound[data-v-8889ef30]:hover{transform:scale(1.05)}.mobile-sound[data-v-8889ef30]{position:fixed;bottom:10px;right:10px;width:40px;height:40px;border-radius:5px;background:#fff;z-index:10;display:flex;align-items:center;justify-content:center;border:1px solid #9f9f9f;display:none}.sidebar-controls[data-v-8889ef30]{position:sticky;bottom:0;left:0;width:100%;font-size:13px;text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#fff}.sidebar-controls[data-v-8889ef30]:after{content:"";position:absolute;top:-30px;left:0;width:100%;height:30px;background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9));pointer-events:none;opacity:0;transition:opacity .15s linear}.sidebar-controls-fade-show[data-v-8889ef30]:after{opacity:1}.sidebar-search[data-v-8889ef30]{display:flex;align-items:center;justify-content:right;position:relative}.sidebar-sorting[data-v-8889ef30]{display:grid;grid-template-columns:1fr 1fr;text-align:center;border-top:1px solid #c8c8c8;cursor:pointer;grid-gap:1px;background:#c8c8c8}.sidebar-sorting-item[data-v-8889ef30]{padding:7px 0;background:#fff}.sidebar-discoveries-active[data-v-8889ef30]{background:#fff9ea}.sidebar-input[data-v-8889ef30]{width:100%;font-size:16px;border:none;border-top:1px solid #c8c8c8;outline:none;padding:0 20px 0 40px;height:40px;line-height:18px;position:relative;background:url(/infinite-craft/search.svg) no-repeat 22px 22px;background-size:21px 21px;background-position:10px 10px}.sidebar-input[data-v-8889ef30]::-moz-placeholder{opacity:.5}.sidebar-input[data-v-8889ef30]::placeholder{opacity:.5}.sidebar-input[data-v-8889ef30]:after{content:"";left:10px;top:50%;font-size:20px;pointer-events:none}.sidebar-input-close[data-v-8889ef30],.sidebar-input[data-v-8889ef30]:after{position:absolute;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}.sidebar-input-close[data-v-8889ef30]{right:10px;top:calc(50% + 1px);cursor:pointer;opacity:.45;width:15px}.sort[data-v-8889ef30]{cursor:pointer;padding:2px;opacity:.9;font-size:14px}.sort-img[data-v-8889ef30]{height:15px;top:2px;padding:2px;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.instance-emoji[data-v-8889ef30]{font-size:21px;margin-right:5px}.instance-hide[data-v-8889ef30]{display:none!important;pointer-events:none!important}.mobile-instruction[data-v-8889ef30]{display:none}.list-enter[data-v-8889ef30],.list-leave-to[data-v-8889ef30]{transform:scale(0)}.particles[data-v-8889ef30]{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none}.instance-anim-enter-active[data-v-8889ef30]{animation:scaleIn-8889ef30 .13s ease-in 1 forwards}.instance-anim-leave-to[data-v-8889ef30]{opacity:0;scale:0}.instance-anim-leave-active[data-v-8889ef30]{transition:opacity .16s linear,scale .16s linear}.reset[data-v-8889ef30]{position:fixed;left:10px;bottom:10px;cursor:pointer;opacity:.7;font-size:15px}.sidebar-sorting-icon[data-v-8889ef30]{height:13px;line-height:0;position:relative;top:2px;margin-right:1px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.empty-sidebar-icon[data-v-8889ef30]{width:22px;position:relative;top:5px;margin-right:5px;margin-top:-5px}@media screen and (min-width:1150px){.sidebar[data-v-8889ef30]{width:350px}.logo[data-v-8889ef30]{right:362px;width:85px}.item[data-v-8889ef30]{font-size:16.4px;padding:9px 10px 8px}.items[data-v-8889ef30]{min-height:calc(100svh - 76px)}.item-emoji[data-v-8889ef30]{font-size:16.4px}.instance[data-v-8889ef30]{font-size:19.5px;padding:11px 11px 10px}.instruction[data-v-8889ef30]{font-size:15px}.pinwheel[data-v-8889ef30]{width:145px;height:145px}.instance-discovered-text[data-v-8889ef30]{font-size:13px}.side-controls[data-v-8889ef30]{right:361px}.clear[data-v-8889ef30],.sound[data-v-8889ef30]{width:23px}.coffee[data-v-8889ef30]{width:16px}.sidebar-input[data-v-8889ef30]{background-size:23px 23px;background-position:11px 12px;height:45px;font-size:17px;line-height:21px;padding-left:43px;padding-top:2px}.sidebar-input-close[data-v-8889ef30]{width:18px;right:12px}.empty-sidebar[data-v-8889ef30]{font-size:16px}}@media screen and (max-width:800px){.container[data-v-8889ef30]{position:static}.site-title[data-v-8889ef30]{position:absolute}.sidebar[data-v-8889ef30]{display:none}.mobile-items[data-v-8889ef30]{display:flex;flex-wrap:wrap;margin-top:105px;justify-content:center;grid-gap:5px 5px;margin-bottom:20px;padding:0 5px;position:relative;z-index:2}.instance[data-v-8889ef30]{display:none}.mobile-item[data-v-8889ef30]{transition:transform .4s ease}.item[data-v-8889ef30]{display:flex;align-items:center;min-height:37px;grid-gap:5px;line-height:0;font-size:15.5px;padding:1px 9px 0;border:1px solid #9f9f9f;color:#000;transition:background .1s linear}.item-selected-mobile[data-v-8889ef30]{top:5px}.item-crafted-mobile[data-v-8889ef30],.item-selected-mobile[data-v-8889ef30]{background-color:#fffae6;border-color:#877f64;position:sticky;bottom:5px}.item-crafted-mobile[data-v-8889ef30]{z-index:10;transition:background .2s linear}.item-emoji-mobile[data-v-8889ef30]{margin-right:1px}.particles[data-v-8889ef30]{z-index:1}.side-controls[data-v-8889ef30],.sidebar-controls[data-v-8889ef30]{display:none}.logo[data-v-8889ef30]{position:absolute;right:10px;left:auto;top:10px}.mobile-instruction[data-v-8889ef30]{display:block;max-width:200px;text-align:center;border:1px solid #c8c8c8;background-color:#fffae6;padding:7px;margin-left:auto;margin-right:auto;font-size:15px;border-radius:5px}.mobile-sound[data-v-8889ef30]{display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent}}', ""]),
        e.exports = o
    }
}]);
