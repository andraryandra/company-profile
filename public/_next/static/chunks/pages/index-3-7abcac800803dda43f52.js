_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [21], {
        "0Yqi": function (e, a, s) {
            "use strict";

            function l(e, a) {
                if (null == e) return {};
                var s, l, i = function (e, a) {
                    if (null == e) return {};
                    var s, l, i = {},
                        t = Object.keys(e);
                    for (l = 0; l < t.length; l++) s = t[l], a.indexOf(s) >= 0 || (i[s] = e[s]);
                    return i
                }(e, a);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < t.length; l++) s = t[l], a.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (i[s] = e[s])
                }
                return i
            }
            var i = s("nOHt"),
                t = s("YFqc"),
                n = s.n(t),
                c = s("q1tI"),
                o = s.n(c),
                r = o.a.createElement;
            a.a = Object(i.withRouter)((function (e) {
                var a = e.router,
                    s = e.children,
                    i = l(e, ["router", "children"]),
                    t = c.Children.only(s),
                    m = t.props.className || "";
                return a.pathname === i.href && i.activeClassName && (m = "".concat(m, " ").concat(i.activeClassName).trim()), delete i.activeClassName, r(n.a, i, o.a.cloneElement(t, {
                    className: m
                }))
            }))
        },
        AV47: function (e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/index-3", function () {
                return s("Axw1")
            }])
        },
        Axw1: function (e, a, s) {
            "use strict";
            s.r(a);
            var l = s("q1tI"),
                i = s.n(l),
                t = i.a.createElement,
                n = function () {
                    return t("header", {
                        className: "header-area header-2 three"
                    }, t("div", {
                        className: "container"
                    }, t("div", {
                        className: "row align-items-center"
                    }, t("div", {
                        className: "col-lg-8 col-md-7 text-left"
                    }, t("div", {
                        className: "header-content-right"
                    }, t("ul", {
                        className: "header-contact"
                    }, t("li", null, t("a", {
                        href: "tel:+1123456789"
                    }, t("i", {
                        className: "bx bxs-phone-call"
                    }), " +1 123 456 789")), t("li", null, t("a", {
                        href: "mailto:hello@zoko.com"
                    }, t("i", {
                        className: "bx bxs-envelope"
                    }), " hello@zoko.com"))))), t("div", {
                        className: "col-lg-4 col-md-5 text-right"
                    }, t("div", {
                        className: "header-content-right"
                    }, t("ul", {
                        className: "header-social"
                    }, t("li", null, t("a", {
                        href: "#",
                        target: "_blank"
                    }, t("i", {
                        className: "bx bxl-facebook"
                    }))), t("li", null, t("a", {
                        href: "#",
                        target: "_blank"
                    }, t("i", {
                        className: "bx bxl-twitter"
                    }))), t("li", null, t("a", {
                        href: "#",
                        target: "_blank"
                    }, t("i", {
                        className: "bx bxs-envelope"
                    }))), t("li", null, t("a", {
                        href: "#",
                        target: "_blank"
                    }, t("i", {
                        className: "bx bxl-google-plus"
                    })))))))))
                },
                c = s("ODXe"),
                o = s("0Yqi"),
                r = i.a.createElement,
                m = function () {
                    var e = i.a.useState(!0),
                        a = Object(c.a)(e, 2),
                        s = a[0],
                        l = a[1],
                        t = function () {
                            l(!s)
                        };
                    i.a.useEffect((function () {
                        var e = document.getElementById("navbar");
                        document.addEventListener("scroll", (function () {
                            window.scrollY > 170 ? e.classList.add("is-sticky") : e.classList.remove("is-sticky")
                        })), window.scrollTo(0, 0)
                    }));
                    var n = s ? "collapse navbar-collapse" : "collapse navbar-collapse show",
                        m = s ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
                    return r(i.a.Fragment, null, r("div", {
                        id: "navbar",
                        className: "navbar-area three"
                    }, r("div", {
                        className: "main-nav"
                    }, r("div", {
                        className: "container"
                    }, r("nav", {
                        className: "navbar navbar-expand-md navbar-light"
                    }, r(o.a, {
                        href: "/"
                    }, r("a", {
                        onClick: t,
                        className: "navbar-brand"
                    }, r("img", {
                        src: "/images/logo.png",
                        alt: "logo"
                    }))), r("button", {
                        onClick: t,
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
                        className: n,
                        id: "navbarSupportedContent"
                    }, r("ul", {
                        className: "navbar-nav text-left"
                    }, r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "#",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: function (e) {
                            return e.preventDefault()
                        },
                        className: "nav-link dropdown-toggle"
                    }, "Home")), r("ul", {
                        className: "dropdown-menu"
                    }, r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Home Demo One"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/index-2",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Home Demo Two"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/index-3",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Home Demo Three"))))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/about-us",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "About"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "#"
                    }, r("a", {
                        onClick: function (e) {
                            return e.preventDefault()
                        },
                        className: "nav-link dropdown-toggle"
                    }, "Solutions")), r("ul", {
                        className: "dropdown-menu"
                    }, r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/solutions",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Solutions"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/solutions-details",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Solutions Details"))))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "#"
                    }, r("a", {
                        onClick: function (e) {
                            return e.preventDefault()
                        },
                        className: "nav-link dropdown-toggle"
                    }, "Case Studies")), r("ul", {
                        className: "dropdown-menu"
                    }, r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/case-studies",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Case Studies"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/case-studies-details",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Case Studies Details"))))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "#"
                    }, r("a", {
                        onClick: function (e) {
                            return e.preventDefault()
                        },
                        className: "nav-link dropdown-toggle"
                    }, "Pages")), r("ul", {
                        className: "dropdown-menu"
                    }, r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/team",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Team"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/pricing",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Pricing"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/testimonials",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Testimonials"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/sign-in",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Sign In"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/sign-up",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Sign Up"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/faq",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "FAQ"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/terms-conditions",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Terms & Conditions"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/privacy-policy",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Privacy Policy"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/404",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "404 Error Page"))))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "#"
                    }, r("a", {
                        onClick: function (e) {
                            return e.preventDefault()
                        },
                        className: "nav-link dropdown-toggle"
                    }, "Blog")), r("ul", {
                        className: "dropdown-menu"
                    }, r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/blog",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Blog"))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/blog-details",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
                        className: "nav-link"
                    }, "Blog Details"))))), r("li", {
                        className: "nav-item"
                    }, r(o.a, {
                        href: "/contact-us",
                        activeClassName: "active"
                    }, r("a", {
                        onClick: t,
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
                    }, r(o.a, {
                        href: "#"
                    }, r("a", {
                        className: "box-btn"
                    }, "Get Started"))))))))
                },
                u = s("wx14"),
                d = s("YFqc"),
                v = s.n(d),
                p = s("a6RD"),
                g = s.n(p),
                N = i.a.createElement,
                f = g()((function () {
                    return s.e(5).then(s.t.bind(null, "Rst5", 7))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return ["Rst5"]
                        },
                        modules: ["react-owl-carousel3"]
                    }
                }),
                h = {
                    items: 1,
                    loop: !0,
                    nav: !0,
                    dots: !1,
                    mouseDrag: !1,
                    touchDrag: !1,
                    autoplay: !0,
                    autoplayHoverPause: !0,
                    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next-1'></i>"]
                },
                b = function () {
                    var e = i.a.useState(!1),
                        a = Object(c.a)(e, 2),
                        s = a[0],
                        l = a[1];
                    return i.a.useEffect((function () {
                        l(!0)
                    }), []), N("div", {
                        className: "main-banner-three"
                    }, N("div", {
                        className: "container-fluid"
                    }, N("div", {
                        className: "row"
                    }, N("div", {
                        className: "col-lg-6 col-md-12"
                    }, N("div", {
                        className: "main-banner-content"
                    }, N("div", {
                        className: "d-table"
                    }, N("div", {
                        className: "d-table-cell"
                    }, N("div", {
                        className: "content"
                    }, N("h1", null, "Secure IT Solutions For A More Secure Environment"), N("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), N("div", {
                        className: "slider-btn-wrap"
                    }, N(v.a, {
                        href: "/contact-us"
                    }, N("a", {
                        className: "box-btn"
                    }, "Contact Us ")), N(v.a, {
                        href: "/about-us"
                    }, N("a", {
                        className: "box-btn border-btn"
                    }, "Know More")))))))), N("div", {
                        className: "col-lg-6 pr-0 col-md-12"
                    }, s ? N(f, Object(u.a)({
                        className: "banner-image-slider owl-carousel owl-theme"
                    }, h), N("div", {
                        className: "banner-image banner-slider-bg-1"
                    }), N("div", {
                        className: "banner-image banner-slider-bg-2"
                    })) : ""))))
                },
                y = i.a.createElement,
                w = function () {
                    return y("div", {
                        className: "home-company-area"
                    }, y("div", {
                        className: "container"
                    }, y("div", {
                        className: "row align-items-center"
                    }, y("div", {
                        className: "col-lg-6 col-md-12"
                    }, y("div", {
                        className: "company-content"
                    }, y("div", {
                        className: "company-tittle"
                    }, y("span", null, "About Us"), y("h2", null, "Innovative It Helping Service All Over the World"), y("p", null, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its."), y("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.")), y(v.a, {
                        href: "/about-us"
                    }, y("a", {
                        className: "box-btn"
                    }, "Know More")))), y("div", {
                        className: "col-lg-6 col-md-12"
                    }, y("div", {
                        className: "company-img"
                    }, y("img", {
                        src: "/images/about-img-2.jpg",
                        alt: "company"
                    }))))))
                },
                k = i.a.createElement,
                C = function () {
                    return k("div", {
                        className: "info-area pt-100 pb-70 bg-color"
                    }, k("div", {
                        className: "container"
                    }, k("div", {
                        className: "row"
                    }, k("div", {
                        className: "col-lg-4 col-sm-6"
                    }, k("div", {
                        className: "single-info"
                    }, k("div", {
                        className: "info-img"
                    }, k("img", {
                        src: "/images/info-1.jpg",
                        alt: "info"
                    })), k("div", {
                        className: "content"
                    }, k("h3", null, k("i", {
                        className: "flaticon-info"
                    }), " About Us"), k("div", {
                        className: "arrow"
                    }, k(v.a, {
                        href: "#"
                    }, k("a", null, k("i", {
                        className: "flaticon-next-1"
                    }))))))), k("div", {
                        className: "col-lg-4 col-sm-6"
                    }, k("div", {
                        className: "single-info"
                    }, k("div", {
                        className: "info-img"
                    }, k("img", {
                        src: "/images/info-2.jpg",
                        alt: "info"
                    })), k("div", {
                        className: "content"
                    }, k("h3", null, k("i", {
                        className: "flaticon-support"
                    }), " Our Vision"), k("div", {
                        className: "arrow"
                    }, k(v.a, {
                        href: "#"
                    }, k("a", null, k("i", {
                        className: "flaticon-next-1"
                    }))))))), k("div", {
                        className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0"
                    }, k("div", {
                        className: "single-info si-30"
                    }, k("div", {
                        className: "info-img"
                    }, k("img", {
                        src: "/images/info-3.jpg",
                        alt: "info"
                    })), k("div", {
                        className: "content"
                    }, k("h3", null, k("i", {
                        className: "flaticon-goal"
                    }), "Our Goal"), k("div", {
                        className: "arrow"
                    }, k(v.a, {
                        href: "#"
                    }, k("a", null, k("i", {
                        className: "flaticon-next-1"
                    }))))))))))
                },
                x = s("kvDB"),
                S = s("b8qE"),
                A = i.a.createElement,
                E = function () {
                    return A("div", {
                        className: "home2-choose-area pt-100 pb-70"
                    }, A("div", {
                        className: "container"
                    }, A("div", {
                        className: "section-title"
                    }, A("span", null, "Why Choose Us"), A("h2", null, "We Achieved People\u2019s Trust by Our Great Service"), A("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")), A("div", {
                        className: "row"
                    }, A("div", {
                        className: "col-lg-2 col-sm-4"
                    }, A("div", {
                        className: "single-choose"
                    }, A("div", {
                        className: "icon"
                    }, A("i", {
                        className: "flaticon-friends"
                    })), A("h3", null, "Understanding"))), A("div", {
                        className: "col-lg-2 col-sm-4"
                    }, A("div", {
                        className: "single-choose"
                    }, A("div", {
                        className: "icon"
                    }, A("i", {
                        className: "flaticon-award"
                    })), A("h3", null, "Best Quality"))), A("div", {
                        className: "col-lg-2 col-sm-4"
                    }, A("div", {
                        className: "single-choose"
                    }, A("div", {
                        className: "icon"
                    }, A("i", {
                        className: "flaticon-chip"
                    })), A("h3", null, "Technology"))), A("div", {
                        className: "col-lg-2 col-sm-4"
                    }, A("div", {
                        className: "single-choose"
                    }, A("div", {
                        className: "icon"
                    }, A("i", {
                        className: "flaticon-customer-service"
                    })), A("h3", null, "Support 24/7"))), A("div", {
                        className: "col-lg-2 col-sm-4"
                    }, A("div", {
                        className: "single-choose"
                    }, A("div", {
                        className: "icon"
                    }, A("i", {
                        className: "flaticon-like"
                    })), A("h3", null, "Expert Team"))), A("div", {
                        className: "col-lg-2 col-sm-4"
                    }, A("div", {
                        className: "single-choose"
                    }, A("div", {
                        className: "icon"
                    }, A("i", {
                        className: "flaticon-coin"
                    })), A("h3", null, "Price Oriented"))))))
                },
                L = s("sxay"),
                q = s("hO8/"),
                D = s("ENSr"),
                j = s("/Q36"),
                O = s("opSn"),
                T = i.a.createElement,
                I = function () {
                    return T("div", {
                        className: "home-contact-area home-2-contact ptb-100"
                    }, T("div", {
                        className: "container"
                    }, T("div", {
                        className: "section-title"
                    }, T("span", null, "Contact Us"), T("h2", null, "Let Us Know About Your Project Idea!"), T("p", null, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.")), T("div", {
                        className: "row"
                    }, T("div", {
                        className: "col-lg-6 col-md-6"
                    }, T("div", {
                        className: "content"
                    }, T("form", {
                        id: "contactForm"
                    }, T("div", {
                        className: "row"
                    }, T("div", {
                        className: "col-lg-12 col-sm-12"
                    }, T("div", {
                        className: "form-group"
                    }, T("input", {
                        type: "text",
                        name: "name",
                        id: "name",
                        className: "form-control",
                        required: !0,
                        placeholder: "Your Name"
                    }))), T("div", {
                        className: "col-lg-12 col-sm-12"
                    }, T("div", {
                        className: "form-group"
                    }, T("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        className: "form-control",
                        required: !0,
                        placeholder: "Your Email"
                    }))), T("div", {
                        className: "col-lg-12 col-sm-12"
                    }, T("div", {
                        className: "form-group"
                    }, T("input", {
                        type: "text",
                        name: "phone_number",
                        id: "phone_number",
                        required: !0,
                        className: "form-control",
                        placeholder: "Your Phone"
                    }))), T("div", {
                        className: "col-lg-12 col-sm-12"
                    }, T("div", {
                        className: "form-group"
                    }, T("input", {
                        type: "text",
                        name: "msg_subject",
                        id: "msg_subject",
                        className: "form-control",
                        required: !0,
                        placeholder: "Subject"
                    }))), T("div", {
                        className: "col-lg-12 col-md-12"
                    }, T("div", {
                        className: "form-group"
                    }, T("textarea", {
                        name: "message",
                        className: "form-control",
                        id: "message",
                        cols: "30",
                        rows: "5",
                        required: !0,
                        placeholder: "Your Message"
                    }))), T("div", {
                        className: "col-lg-12 col-md-12"
                    }, T("button", {
                        type: "submit",
                        className: "default-btn page-btn box-btn"
                    }, "Submit")))))), T("div", {
                        className: "col-lg-6 col-md-6"
                    }, T("div", {
                        className: "contact-img contact-img-2"
                    }, T("img", {
                        src: "/images/contact-img2.jpg",
                        alt: "contact"
                    }))))))
                },
                M = s("mdYk"),
                P = i.a.createElement;
            a.default = function () {
                return P(i.a.Fragment, null, P(n, null), P(m, null), P(b, null), P(w, null), P(C, null), P(x.a, null), P(S.a, null), P(E, null), P(L.a, null), P(q.a, null), P(D.a, null), P(j.a, null), P(O.a, null), P(I, null), P(M.a, null))
            }
        },
        ODXe: function (e, a, s) {
            "use strict";

            function l(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var s = 0, l = new Array(a); s < a; s++) l[s] = e[s];
                return l
            }

            function i(e, a) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, a) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                        var s = [],
                            l = !0,
                            i = !1,
                            t = void 0;
                        try {
                            for (var n, c = e[Symbol.iterator](); !(l = (n = c.next()).done) && (s.push(n.value), !a || s.length !== a); l = !0);
                        } catch (o) {
                            i = !0, t = o
                        } finally {
                            try {
                                l || null == c.return || c.return()
                            } finally {
                                if (i) throw t
                            }
                        }
                        return s
                    }
                }(e, a) || function (e, a) {
                    if (e) {
                        if ("string" === typeof e) return l(e, a);
                        var s = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? l(e, a) : void 0
                    }
                }(e, a) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            s.d(a, "a", (function () {
                return i
            }))
        },
        YFqc: function (e, a, s) {
            e.exports = s("cTJO")
        },
        b8qE: function (e, a, s) {
            "use strict";
            var l = s("q1tI"),
                i = s.n(l).a.createElement;
            a.a = function () {
                return i("div", {
                    className: "home-process-area pt-100 pb-70"
                }, i("div", {
                    className: "container"
                }, i("div", {
                    className: "section-title"
                }, i("span", null, "Working Process"), i("h2", null, "We are popular because of our way of working"), i("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.")), i("div", {
                    className: "row"
                }, i("div", {
                    className: "col-lg-3 col-sm-6"
                }, i("div", {
                    className: "single-process"
                }, i("div", {
                    className: "icon"
                }, i("img", {
                    src: "/images/process/process1.png",
                    alt: "process"
                }), i("span", null, i("img", {
                    src: "/images/process/next.png",
                    alt: "shape"
                }))), i("div", {
                    className: "content"
                }, i("h3", null, "Research Product"), i("p", null, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.")))), i("div", {
                    className: "col-lg-3 col-sm-6"
                }, i("div", {
                    className: "single-process"
                }, i("div", {
                    className: "icon"
                }, i("img", {
                    src: "/images/process/process2.png",
                    alt: "process"
                }), i("span", {
                    className: "pro-span"
                }, i("img", {
                    src: "/images/process/next.png",
                    alt: "shape"
                }))), i("div", {
                    className: "content"
                }, i("h3", null, "User Testing"), i("p", null, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.")))), i("div", {
                    className: "col-lg-3 col-sm-6"
                }, i("div", {
                    className: "single-process"
                }, i("div", {
                    className: "icon"
                }, i("img", {
                    src: "/images/process/process3.png",
                    alt: "process"
                }), i("span", null, i("img", {
                    src: "/images/process/next.png",
                    alt: "shape"
                }))), i("div", {
                    className: "content"
                }, i("h3", null, "Development"), i("p", null, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.")))), i("div", {
                    className: "col-lg-3 col-sm-6"
                }, i("div", {
                    className: "single-process"
                }, i("div", {
                    className: "icon"
                }, i("img", {
                    src: "/images/process/process4.png",
                    alt: "process"
                })), i("div", {
                    className: "content"
                }, i("h3", null, "Product Handover"), i("p", null, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.")))))))
            }
        },
        cTJO: function (e, a, s) {
            "use strict";
            var l = s("J4zp"),
                i = s("284h");
            a.__esModule = !0, a.default = void 0;
            var t, n = i(s("q1tI")),
                c = s("elyg"),
                o = s("nOHt"),
                r = new Map,
                m = window.IntersectionObserver,
                u = {};
            var d = function (e, a) {
                var s = t || (m ? t = new m((function (e) {
                    e.forEach((function (e) {
                        if (r.has(e.target)) {
                            var a = r.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (t.unobserve(e.target), r.delete(e.target), a())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0);
                return s ? (s.observe(e), r.set(e, a), function () {
                    try {
                        s.unobserve(e)
                    } catch (a) {
                        console.error(a)
                    }
                    r.delete(e)
                }) : function () {}
            };

            function v(e, a, s, l) {
                (0, c.isLocalURL)(a) && (e.prefetch(a, s, l).catch((function (e) {
                    0
                })), u[a + "%" + s] = !0)
            }
            var p = function (e) {
                var a = !1 !== e.prefetch,
                    s = n.default.useState(),
                    i = l(s, 2),
                    t = i[0],
                    r = i[1],
                    p = (0, o.useRouter)(),
                    g = p && p.pathname || "/",
                    N = n.default.useMemo((function () {
                        var a = (0, c.resolveHref)(g, e.href);
                        return {
                            href: a,
                            as: e.as ? (0, c.resolveHref)(g, e.as) : a
                        }
                    }), [g, e.href, e.as]),
                    f = N.href,
                    h = N.as;
                n.default.useEffect((function () {
                    if (a && m && t && t.tagName && (0, c.isLocalURL)(f) && !u[f + "%" + h]) return d(t, (function () {
                        v(p, f, h)
                    }))
                }), [a, t, f, h, p]);
                var b = e.children,
                    y = e.replace,
                    w = e.shallow,
                    k = e.scroll;
                "string" === typeof b && (b = n.default.createElement("a", null, b));
                var C = n.Children.only(b),
                    x = {
                        ref: function (e) {
                            e && r(e), C && "object" === typeof C && C.ref && ("function" === typeof C.ref ? C.ref(e) : "object" === typeof C.ref && (C.ref.current = e))
                        },
                        onClick: function (e) {
                            C.props && "function" === typeof C.props.onClick && C.props.onClick(e), e.defaultPrevented || function (e, a, s, l, i, t, n) {
                                ("A" !== e.currentTarget.nodeName || ! function (e) {
                                    var a = e.currentTarget.target;
                                    return a && "_self" !== a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && (0, c.isLocalURL)(s)) && (e.preventDefault(), null == n && (n = l.indexOf("#") < 0), a[i ? "replace" : "push"](s, l, {
                                    shallow: t
                                }).then((function (e) {
                                    e && n && (window.scrollTo(0, 0), document.body.focus())
                                })))
                            }(e, p, f, h, y, w, k)
                        }
                    };
                return a && (x.onMouseEnter = function (e) {
                    (0, c.isLocalURL)(f) && (C.props && "function" === typeof C.props.onMouseEnter && C.props.onMouseEnter(e), v(p, f, h, {
                        priority: !0
                    }))
                }), (e.passHref || "a" === C.type && !("href" in C.props)) && (x.href = (0, c.addBasePath)(h)), n.default.cloneElement(C, x)
            };
            a.default = p
        },
        "hO8/": function (e, a, s) {
            "use strict";
            var l = s("q1tI"),
                i = s.n(l),
                t = s("YFqc"),
                n = s.n(t),
                c = i.a.createElement;
            a.a = function () {
                return c("div", {
                    className: "home-case ptb-100"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "section-title"
                }, c("span", null, "Case Studies"), c("h2", null, "Have a Look Our Work Showcase"), c("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.")), c("div", {
                    className: "row case-list"
                }, c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-case"
                }, c("div", {
                    className: "case-img"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("img", {
                    src: "/images/case-studies/case-studies1.jpg",
                    alt: "case"
                })))), c("div", {
                    className: "content"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("h3", null, "Joe\u2019s Company Software Development Case"))), c("p", null, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor."), c(n.a, {
                    href: "/case-studies-details"
                }, c("a", {
                    className: "line-bnt"
                }, "View Project Details"))))), c("div", {
                    className: "col-lg-4 col-sm-6 item"
                }, c("div", {
                    className: "single-case"
                }, c("div", {
                    className: "case-img"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("img", {
                    src: "/images/case-studies/case-studies2.jpg",
                    alt: "case"
                })))), c("div", {
                    className: "content"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("h3", null, "Ride Share App UX Studies & Development Case"))), c("p", null, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor."), c(n.a, {
                    href: "/case-studies-details"
                }, c("a", {
                    className: "line-bnt"
                }, "View Project Details"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-case"
                }, c("div", {
                    className: "case-img"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("img", {
                    src: "/images/case-studies/case-studies3.jpg",
                    alt: "case"
                })))), c("div", {
                    className: "content"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("h3", null, "Restaurant Management & Web Developing"))), c("p", null, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor."), c(n.a, {
                    href: "/case-studies-details"
                }, c("a", {
                    className: "line-bnt"
                }, "View Project Details"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-case"
                }, c("div", {
                    className: "case-img"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("img", {
                    src: "/images/case-studies/case-studies4.jpg",
                    alt: "case"
                })))), c("div", {
                    className: "content"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("h3", null, "IT Software Company Development Case"))), c("p", null, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor."), c(n.a, {
                    href: "/case-studies-details"
                }, c("a", {
                    className: "line-bnt"
                }, "View Project Details"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-case"
                }, c("div", {
                    className: "case-img"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("img", {
                    src: "/images/case-studies/case-studies5.jpg",
                    alt: "case"
                })))), c("div", {
                    className: "content"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("h3", null, "Parking Management & Web Developing"))), c("p", null, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor."), c(n.a, {
                    href: "/case-studies-details"
                }, c("a", {
                    className: "line-bnt"
                }, "View Project Details"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-case"
                }, c("div", {
                    className: "case-img"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("img", {
                    src: "/images/case-studies/case-studies5.jpg",
                    alt: "case"
                })))), c("div", {
                    className: "content"
                }, c(n.a, {
                    href: "/case-studies-details"
                }, c("a", null, c("h3", null, "Temperature App UX Studies & Development Case"))), c("p", null, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor."), c(n.a, {
                    href: "/case-studies-details"
                }, c("a", {
                    className: "line-bnt"
                }, "View Project Details")))))), c("div", {
                    className: "case-btn text-center"
                }, c("p", null, "We Have More Amazing Cases. ", c(n.a, {
                    href: "/case-studies"
                }, c("a", {
                    href: "#"
                }, "View More"))))))
            }
        },
        kvDB: function (e, a, s) {
            "use strict";
            var l = s("q1tI"),
                i = s.n(l),
                t = s("YFqc"),
                n = s.n(t),
                c = i.a.createElement;
            a.a = function () {
                return c("div", {
                    className: "home-service-area pt-100 pb-70"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "section-title"
                }, c("span", null, "Smart Services"), c("h2", null, "Provide All Kind of Tech Solutions"), c("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.")), c("div", {
                    className: "row"
                }, c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-service"
                }, c("div", {
                    className: "service-img"
                }, c("img", {
                    src: "/images/services/service1.png",
                    alt: "service"
                })), c("div", {
                    className: "service-content"
                }, c("h3", null, "Visual Design"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam"), c(n.a, {
                    href: "/solutions-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-service"
                }, c("div", {
                    className: "service-img"
                }, c("img", {
                    src: "/images/services/service2.png",
                    alt: "service"
                })), c("div", {
                    className: "service-content"
                }, c("h3", null, "Development"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam"), c(n.a, {
                    href: "/solutions-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-service"
                }, c("div", {
                    className: "service-img"
                }, c("img", {
                    src: "/images/services/service3.png",
                    alt: "service"
                })), c("div", {
                    className: "service-content"
                }, c("h3", null, "QA Testing"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam"), c(n.a, {
                    href: "/solutions-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-service"
                }, c("div", {
                    className: "service-img"
                }, c("img", {
                    src: "/images/services/service4.png",
                    alt: "service"
                })), c("div", {
                    className: "service-content"
                }, c("h3", null, "IT Management"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam"), c(n.a, {
                    href: "/solutions-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-service"
                }, c("div", {
                    className: "service-img"
                }, c("img", {
                    src: "/images/services/service5.png",
                    alt: "service"
                })), c("div", {
                    className: "service-content"
                }, c("h3", null, " Cyber Security"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam"), c(n.a, {
                    href: "/solutions-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-sm-6"
                }, c("div", {
                    className: "single-service"
                }, c("div", {
                    className: "service-img"
                }, c("img", {
                    src: "/images/services/service6.png",
                    alt: "service"
                })), c("div", {
                    className: "service-content"
                }, c("h3", null, "Wireless Connectivity"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam"), c(n.a, {
                    href: "/solutions-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))))))
            }
        },
        mdYk: function (e, a, s) {
            "use strict";
            var l = s("q1tI"),
                i = s.n(l),
                t = s("YFqc"),
                n = s.n(t),
                c = i.a.createElement;
            a.a = function () {
                var e = (new Date).getFullYear();
                return c(i.a.Fragment, null, c("footer", {
                    className: "footer-area pt-100"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "row"
                }, c("div", {
                    className: "col-lg-4 col-md-6"
                }, c("div", {
                    className: "content"
                }, c("div", {
                    className: "logo"
                }, c(n.a, {
                    href: "/"
                }, c("a", null, c("img", {
                    src: "/images/logo2.png",
                    alt: "logo"
                })))), c("p", null, "Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod."), c("div", {
                    className: "subscribe"
                }, c("form", {
                    className: "newsletter-form"
                }, c("input", {
                    type: "email",
                    id: "emails",
                    className: "form-control",
                    placeholder: "Your Email",
                    name: "EMAIL",
                    required: !0
                }), c("button", {
                    className: "box-btn",
                    type: "submit"
                }, "Subscribe"))), c("ul", {
                    className: "social"
                }, c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {
                    className: "bx bxl-facebook"
                }))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {
                    className: "bx bxl-twitter"
                }))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {
                    className: "bx bxl-instagram"
                }))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {
                    className: "bx bxl-pinterest"
                })))))), c("div", {
                    className: "col-lg-3 col-md-6"
                }, c("div", {
                    className: "content ml-15"
                }, c("h3", null, "Our Service"), c("ul", {
                    className: "footer-list"
                }, c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "Visual Design"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "Development"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "QA & Testing"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "IT Management"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "Cyber Security"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "Wireless Connection")))))), c("div", {
                    className: "col-lg-2 col-md-6"
                }, c("div", {
                    className: "content"
                }, c("h3", null, "Quick Links"), c("ul", {
                    className: "footer-list"
                }, c("li", null, c(n.a, {
                    href: "/faq"
                }, c("a", null, "FAQs"))), c("li", null, c(n.a, {
                    href: "/solutions"
                }, c("a", null, "Services"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", {
                    href: "#"
                }, "Career"))), c("li", null, c(n.a, {
                    href: "/privecy-policy"
                }, c("a", null, "Privacy & Policy"))), c("li", null, c(n.a, {
                    href: "/terms-condition"
                }, c("a", null, "Terms & Conditions"))), c("li", null, c(n.a, {
                    href: "#"
                }, c("a", null, "Data Analysis")))))), c("div", {
                    className: "col-lg-3 col-md-6"
                }, c("div", {
                    className: "content contacts"
                }, c("h3", {
                    className: "ml-40"
                }, "Contact"), c("ul", {
                    className: "footer-list foot-social"
                }, c("li", null, c("a", {
                    href: "tel:+1975456789"
                }, c("i", {
                    className: "bx bx-phone"
                }), " +1 975 456 789")), c("li", null, c("a", {
                    href: "mailto:hello@zoko.com"
                }, c("i", {
                    className: "bx bxs-envelope"
                }), " hello@zoko.com")), c("li", null, c("a", {
                    href: "mailto:support@zoko.com"
                }, c("i", {
                    className: "bx bxs-envelope"
                }), " support@zoko.com")), c("li", null, c("i", {
                    className: "bx bxs-map"
                }), " 28/A street, New York, USA")))))), c("div", {
                    className: "copy-area"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "row"
                }, c("div", {
                    className: "col-lg-6"
                }, c("ul", {
                    className: "menu"
                }, c("li", null, c(n.a, {
                    href: "/"
                }, c("a", null, "Home"))), c("li", null, c(n.a, {
                    href: "/about-us"
                }, c("a", null, "About"))), c("li", null, c(n.a, {
                    href: "/solutions"
                }, c("a", null, "Solutions"))), c("li", null, c(n.a, {
                    href: "/case-studies"
                }, c("a", null, "Case Studies"))), c("li", null, c(n.a, {
                    href: "/blog"
                }, c("a", null, "Blog"))), c("li", null, c(n.a, {
                    href: "/contact-us"
                }, c("a", null, "Contact"))))), c("div", {
                    className: "col-lg-6"
                }, c("p", {
                    className: "right"
                }, "Copyright @", e, " Zoko. All Rights Reserved by ", c("a", {
                    href: "https://hibootstrap.com/",
                    target: "_blank"
                }, "HiBootstrap.com"))))))))
            }
        },
        opSn: function (e, a, s) {
            "use strict";
            var l = s("q1tI"),
                i = s.n(l),
                t = s("YFqc"),
                n = s.n(t),
                c = i.a.createElement;
            a.a = function () {
                return c("div", {
                    className: "home-blog-area ptb-100 bg-color"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "section-title"
                }, c("span", null, "Blog Post"), c("h2", null, "Our Regular Blogs"), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.")), c("div", {
                    className: "row"
                }, c("div", {
                    className: "col-lg-4 col-md-6"
                }, c("div", {
                    className: "single-blog"
                }, c("div", {
                    className: "blog-img"
                }, c(n.a, {
                    href: "/blog-details"
                }, c("a", null, c("img", {
                    src: "/images/blog/blog1.jpg",
                    alt: "blog"
                })))), c("div", {
                    className: "content"
                }, c("ul", null, c("li", null, "10 April 2020"), c("li", null, c("a", {
                    href: "#"
                }, "By Admin"))), c(n.a, {
                    href: "/blog-details"
                }, c("a", null, c("h3", null, "Joe\u2019s Company Software Development Case"))), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro"), c(n.a, {
                    href: "/blog-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-md-6"
                }, c("div", {
                    className: "single-blog"
                }, c("div", {
                    className: "blog-img"
                }, c(n.a, {
                    href: "/blog-details"
                }, c("a", null, c("img", {
                    src: "/images/blog/blog2.jpg",
                    alt: "blog"
                })))), c("div", {
                    className: "content"
                }, c("ul", null, c("li", null, "10 April 2020"), c("li", null, c("a", {
                    href: "#"
                }, "By Admin"))), c(n.a, {
                    href: "/blog-details"
                }, c("a", null, c("h3", null, "Temperature App UX Studies & Development Case"))), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro"), c(n.a, {
                    href: "/blog-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More"))))), c("div", {
                    className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0"
                }, c("div", {
                    className: "single-blog"
                }, c("div", {
                    className: "blog-img"
                }, c(n.a, {
                    href: "/blog-details"
                }, c("a", null, c("img", {
                    src: "/images/blog/blog3.jpg",
                    alt: "blog"
                })))), c("div", {
                    className: "content"
                }, c("ul", null, c("li", null, "10 April 2020"), c("li", null, c("a", {
                    href: "#"
                }, "By Admin"))), c(n.a, {
                    href: "/blog-details"
                }, c("a", null, c("h3", null, "IT Software Company Development Case"))), c("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro"), c(n.a, {
                    href: "/blog-details"
                }, c("a", {
                    className: "line-bnt"
                }, "Read More")))))), c("div", {
                    className: "blog-btn text-center"
                }, c("p", null, "We Have More Usefull Blogs For You. ", c(n.a, {
                    href: "/blog"
                }, c("a", null, "View More"))))))
            }
        }
    },
    [
        ["AV47", 0, 2, 1, 4, 6]
    ]
]);
