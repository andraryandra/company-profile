(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [3], {
        "0Yqi": function(a, e, l) {
            "use strict";

            function n(a, e) {
                if (null == a) return {};
                var l, n, t = function(a, e) {
                    if (null == a) return {};
                    var l, n, t = {},
                        s = Object.keys(a);
                    for (n = 0; n < s.length; n++) l = s[n], e.indexOf(l) >= 0 || (t[l] = a[l]);
                    return t
                }(a, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(a);
                    for (n = 0; n < s.length; n++) l = s[n], e.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(a, l) && (t[l] = a[l])
                }
                return t
            }
            var t = l("nOHt"),
                s = l("YFqc"),
                i = l.n(s),
                r = l("q1tI"),
                o = l.n(r),
                c = o.a.createElement;
            e.a = Object(t.withRouter)((function(a) {
                var e = a.router,
                    l = a.children,
                    t = n(a, ["router", "children"]),
                    s = r.Children.only(l),
                    m = s.props.className || "";
                return e.pathname === t.href && t.activeClassName && (m = "".concat(m, " ").concat(t.activeClassName).trim()), delete t.activeClassName, c(i.a, t, o.a.cloneElement(s, {
                    className: m
                }))
            }))
        },
        ODXe: function(a, e, l) {
            "use strict";

            function n(a, e) {
                (null == e || e > a.length) && (e = a.length);
                for (var l = 0, n = new Array(e); l < e; l++) n[l] = a[l];
                return n
            }

            function t(a, e) {
                return function(a) {
                    if (Array.isArray(a)) return a
                }(a) || function(a, e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(a)) {
                        var l = [],
                            n = !0,
                            t = !1,
                            s = void 0;
                        try {
                            for (var i, r = a[Symbol.iterator](); !(n = (i = r.next()).done) && (l.push(i.value), !e || l.length !== e); n = !0);
                        } catch (o) {
                            t = !0, s = o
                        } finally {
                            try {
                                n || null == r.return || r.return()
                            } finally {
                                if (t) throw s
                            }
                        }
                        return l
                    }
                }(a, e) || function(a, e) {
                    if (a) {
                        if ("string" === typeof a) return n(a, e);
                        var l = Object.prototype.toString.call(a).slice(8, -1);
                        return "Object" === l && a.constructor && (l = a.constructor.name), "Map" === l || "Set" === l ? Array.from(a) : "Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? n(a, e) : void 0
                    }
                }(a, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            l.d(e, "a", (function() {
                return t
            }))
        },
        SxW8: function(a, e, l) {
            "use strict";
            var n = l("ODXe"),
                t = l("q1tI"),
                s = l.n(t),
                i = l("0Yqi"),
                r = s.a.createElement;
            e.a = function() {
                var a = s.a.useState(!0),
                    e = Object(n.a)(a, 2),
                    l = e[0],
                    t = e[1],
                    o = function() {
                        t(!l)
                    };
                s.a.useEffect((function() {
                    var a = document.getElementById("navbar");
                    document.addEventListener("scroll", (function() {
                        window.scrollY > 170 ? a.classList.add("is-sticky") : a.classList.remove("is-sticky")
                    })), window.scrollTo(0, 0)
                }));
                var c = l ? "collapse navbar-collapse" : "collapse navbar-collapse show",
                    m = l ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
                return r(s.a.Fragment, null, r("div", {
                    id: "navbar",
                    className: "navbar-area"
                }, r("div", {
                    className: "main-nav"
                }, r("div", {
                    className: "container"
                }, r("nav", {
                    className: "navbar navbar-expand-lg navbar-light"
                }, r(i.a, {
                    href: "/"
                }, r("a", {
                    onClick: o,
                    className: "navbar-brand"
                }, r("img", {
                    src: "/images/logo.png",
                    alt: "logo"
                }))), r("button", {
                    onClick: o,
                    className: m,
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation"
                }, r("span", {
                    className: "icon-bar top-bar"
                }), r("span", {
                    className: "icon-bar middle-bar"
                }), r("span", {
                    className: "icon-bar bottom-bar"
                })), r("div", {
                    className: c,
                    id: "navbarSupportedContent"
                }, r("ul", {
                    className: "navbar-nav text-left"
                }, r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "#",
                    activeClassName: "active"
                }, r("a", {
                    onClick: function(a) {
                        return a.preventDefault()
                    },
                    className: "nav-link dropdown-toggle"
                }, "Home")), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home Demo One"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/index-2",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home Demo Two"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/index-3",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home Demo Three"))))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/about-us",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "About"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "#"
                }, r("a", {
                    onClick: function(a) {
                        return a.preventDefault()
                    },
                    className: "nav-link dropdown-toggle"
                }, "Solutions")), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/solutions",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Solutions"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/solutions-details",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Solutions Details"))))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "#"
                }, r("a", {
                    onClick: function(a) {
                        return a.preventDefault()
                    },
                    className: "nav-link dropdown-toggle"
                }, "Case Studies")), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/case-studies",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Case Studies"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/case-studies-details",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Case Studies Details"))))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "#"
                }, r("a", {
                    onClick: function(a) {
                        return a.preventDefault()
                    },
                    className: "nav-link dropdown-toggle"
                }, "Pages")), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/team",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Team"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/pricing",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Pricing"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/testimonials",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Testimonials"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/sign-in",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Sign In"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/sign-up",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Sign Up"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/faq",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "FAQ"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/terms-conditions",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Terms & Conditions"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/privacy-policy",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Privacy Policy"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/404",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "404 Error Page"))))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "#"
                }, r("a", {
                    onClick: function(a) {
                        return a.preventDefault()
                    },
                    className: "nav-link dropdown-toggle"
                }, "Blog")), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/blog",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Blog"))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/blog-details",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Blog Details"))))), r("li", {
                    className: "nav-item"
                }, r(i.a, {
                    href: "/contact-us",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Contact"))))), r("div", {
                    className: "nav-right"
                }, r("form", null, r("div", {
                    className: "input-group"
                }, r("input", {
                    type: "text",
                    className: "form-control search",
                    placeholder: "Search..."
                })), r("button", {
                    type: "submit"
                }, r("i", {
                    className: "bx bx-search"
                })))), r("div", {
                    className: "nav-btn"
                }, r(i.a, {
                    href: "#"
                }, r("a", {
                    className: "box-btn"
                }, "Get Started"))))))))
            }
        },
        YFqc: function(a, e, l) {
            a.exports = l("cTJO")
        },
        cTJO: function(a, e, l) {
            "use strict";
            var n = l("J4zp"),
                t = l("284h");
            e.__esModule = !0, e.default = void 0;
            var s, i = t(l("q1tI")),
                r = l("elyg"),
                o = l("nOHt"),
                c = new Map,
                m = window.IntersectionObserver,
                u = {};
            var v = function(a, e) {
                var l = s || (m ? s = new m((function(a) {
                    a.forEach((function(a) {
                        if (c.has(a.target)) {
                            var e = c.get(a.target);
                            (a.isIntersecting || a.intersectionRatio > 0) && (s.unobserve(a.target), c.delete(a.target), e())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0);
                return l ? (l.observe(a), c.set(a, e), function() {
                    try {
                        l.unobserve(a)
                    } catch (e) {
                        console.error(e)
                    }
                    c.delete(a)
                }) : function() {}
            };

            function f(a, e, l, n) {
                (0, r.isLocalURL)(e) && (a.prefetch(e, l, n).catch((function(a) {
                    0
                })), u[e + "%" + l] = !0)
            }
            var d = function(a) {
                var e = !1 !== a.prefetch,
                    l = i.default.useState(),
                    t = n(l, 2),
                    s = t[0],
                    c = t[1],
                    d = (0, o.useRouter)(),
                    N = d && d.pathname || "/",
                    p = i.default.useMemo((function() {
                        var e = (0, r.resolveHref)(N, a.href);
                        return {
                            href: e,
                            as: a.as ? (0, r.resolveHref)(N, a.as) : e
                        }
                    }), [N, a.href, a.as]),
                    h = p.href,
                    b = p.as;
                i.default.useEffect((function() {
                    if (e && m && s && s.tagName && (0, r.isLocalURL)(h) && !u[h + "%" + b]) return v(s, (function() {
                        f(d, h, b)
                    }))
                }), [e, s, h, b, d]);
                var g = a.children,
                    k = a.replace,
                    C = a.shallow,
                    y = a.scroll;
                "string" === typeof g && (g = i.default.createElement("a", null, g));
                var w = i.Children.only(g),
                    x = {
                        ref: function(a) {
                            a && c(a), w && "object" === typeof w && w.ref && ("function" === typeof w.ref ? w.ref(a) : "object" === typeof w.ref && (w.ref.current = a))
                        },
                        onClick: function(a) {
                            w.props && "function" === typeof w.props.onClick && w.props.onClick(a), a.defaultPrevented || function(a, e, l, n, t, s, i) {
                                ("A" !== a.currentTarget.nodeName || ! function(a) {
                                    var e = a.currentTarget.target;
                                    return e && "_self" !== e || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey || a.nativeEvent && 2 === a.nativeEvent.which
                                }(a) && (0, r.isLocalURL)(l)) && (a.preventDefault(), null == i && (i = n.indexOf("#") < 0), e[t ? "replace" : "push"](l, n, {
                                    shallow: s
                                }).then((function(a) {
                                    a && i && (window.scrollTo(0, 0), document.body.focus())
                                })))
                            }(a, d, h, b, k, C, y)
                        }
                    };
                return e && (x.onMouseEnter = function(a) {
                    (0, r.isLocalURL)(h) && (w.props && "function" === typeof w.props.onMouseEnter && w.props.onMouseEnter(a), f(d, h, b, {
                        priority: !0
                    }))
                }), (a.passHref || "a" === w.type && !("href" in w.props)) && (x.href = (0, r.addBasePath)(b)), i.default.cloneElement(w, x)
            };
            e.default = d
        },
        mdYk: function(a, e, l) {
            "use strict";
            var n = l("q1tI"),
                t = l.n(n),
                s = l("YFqc"),
                i = l.n(s),
                r = t.a.createElement;
            e.a = function() {
                var a = (new Date).getFullYear();
                return r(t.a.Fragment, null, r("footer", {
                    className: "footer-area pt-100"
                }, r("div", {
                    className: "container"
                }, r("div", {
                    className: "row"
                }, r("div", {
                    className: "col-lg-4 col-md-6"
                }, r("div", {
                    className: "content"
                }, r("div", {
                    className: "logo"
                }, r(i.a, {
                    href: "/"
                }, r("a", null, r("img", {
                    src: "/images/logo2.png",
                    alt: "logo"
                })))), r("p", null, "Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod."), r("div", {
                    className: "subscribe"
                }, r("form", {
                    className: "newsletter-form"
                }, r("input", {
                    type: "email",
                    id: "emails",
                    className: "form-control",
                    placeholder: "Your Email",
                    name: "EMAIL",
                    required: !0
                }), r("button", {
                    className: "box-btn",
                    type: "submit"
                }, "Subscribe"))), r("ul", {
                    className: "social"
                }, r("li", null, r("a", {
                    href: "#",
                    target: "_blank"
                }, r("i", {
                    className: "bx bxl-facebook"
                }))), r("li", null, r("a", {
                    href: "#",
                    target: "_blank"
                }, r("i", {
                    className: "bx bxl-twitter"
                }))), r("li", null, r("a", {
                    href: "#",
                    target: "_blank"
                }, r("i", {
                    className: "bx bxl-instagram"
                }))), r("li", null, r("a", {
                    href: "#",
                    target: "_blank"
                }, r("i", {
                    className: "bx bxl-pinterest"
                })))))), r("div", {
                    className: "col-lg-3 col-md-6"
                }, r("div", {
                    className: "content ml-15"
                }, r("h3", null, "Our Service"), r("ul", {
                    className: "footer-list"
                }, r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "Visual Design"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "Development"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "QA & Testing"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "IT Management"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "Cyber Security"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "Wireless Connection")))))), r("div", {
                    className: "col-lg-2 col-md-6"
                }, r("div", {
                    className: "content"
                }, r("h3", null, "Quick Links"), r("ul", {
                    className: "footer-list"
                }, r("li", null, r(i.a, {
                    href: "/faq"
                }, r("a", null, "FAQs"))), r("li", null, r(i.a, {
                    href: "/solutions"
                }, r("a", null, "Services"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", {
                    href: "#"
                }, "Career"))), r("li", null, r(i.a, {
                    href: "/privecy-policy"
                }, r("a", null, "Privacy & Policy"))), r("li", null, r(i.a, {
                    href: "/terms-condition"
                }, r("a", null, "Terms & Conditions"))), r("li", null, r(i.a, {
                    href: "#"
                }, r("a", null, "Data Analysis")))))), r("div", {
                    className: "col-lg-3 col-md-6"
                }, r("div", {
                    className: "content contacts"
                }, r("h3", {
                    className: "ml-40"
                }, "Contact"), r("ul", {
                    className: "footer-list foot-social"
                }, r("li", null, r("a", {
                    href: "tel:+1975456789"
                }, r("i", {
                    className: "bx bx-phone"
                }), " +1 975 456 789")), r("li", null, r("a", {
                    href: "mailto:hello@zoko.com"
                }, r("i", {
                    className: "bx bxs-envelope"
                }), " hello@zoko.com")), r("li", null, r("a", {
                    href: "mailto:support@zoko.com"
                }, r("i", {
                    className: "bx bxs-envelope"
                }), " support@zoko.com")), r("li", null, r("i", {
                    className: "bx bxs-map"
                }), " 28/A street, New York, USA")))))), r("div", {
                    className: "copy-area"
                }, r("div", {
                    className: "container"
                }, r("div", {
                    className: "row"
                }, r("div", {
                    className: "col-lg-6"
                }, r("ul", {
                    className: "menu"
                }, r("li", null, r(i.a, {
                    href: "/"
                }, r("a", null, "Home"))), r("li", null, r(i.a, {
                    href: "/about-us"
                }, r("a", null, "About"))), r("li", null, r(i.a, {
                    href: "/solutions"
                }, r("a", null, "Solutions"))), r("li", null, r(i.a, {
                    href: "/case-studies"
                }, r("a", null, "Case Studies"))), r("li", null, r(i.a, {
                    href: "/blog"
                }, r("a", null, "Blog"))), r("li", null, r(i.a, {
                    href: "/contact-us"
                }, r("a", null, "Contact"))))), r("div", {
                    className: "col-lg-6"
                }, r("p", {
                    className: "right"
                }, "Copyright @", a, " Zoko. All Rights Reserved by ", r("a", {
                    href: "https://hibootstrap.com/",
                    target: "_blank"
                }, "HiBootstrap.com"))))))))
            }
        }
    }
]);