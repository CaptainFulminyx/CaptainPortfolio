var ae = Object.defineProperty;
var re = (e, t, a) => t in e ? ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var l = (e, t, a) => (re(e, typeof t != "symbol" ? t + "" : t, a), a);
import { defineComponent as ne, ref as v, toRefs as se, watch as R, toRef as P, nextTick as oe, onMounted as le, onBeforeUnmount as ie, openBlock as i, createElementBlock as u, normalizeClass as ue, createElementVNode as _, Fragment as m, renderList as w, toDisplayString as y, normalizeStyle as $, createCommentVNode as M, renderSlot as N } from "vue";
import _e, { createSingleton as de } from "tippy.js";
const A = class {
  constructor(t, a, s) {
    l(this, "startDate");
    l(this, "endDate");
    l(this, "max");
    l(this, "_values");
    l(this, "_firstFullWeekOfMonths");
    l(this, "_activities");
    l(this, "_calendar");
    this.endDate = this.parseDate(t), this.max = s || Math.ceil(Math.max(...a.map((d) => d.count)) / 5 * 4), this.startDate = this.shiftDate(t, -A.DAYS_IN_ONE_YEAR), this._values = a;
  }
  set values(t) {
    this.max = Math.ceil(Math.max(...t.map((a) => a.count)) / 5 * 4), this._values = t, this._firstFullWeekOfMonths = void 0, this._calendar = void 0, this._activities = void 0;
  }
  get values() {
    return this._values;
  }
  get activities() {
    if (!this._activities) {
      this._activities = /* @__PURE__ */ new Map();
      for (let t = 0, a = this.values.length; t < a; t++)
        this._activities.set(this.keyDayParser(this.values[t].date), {
          count: this.values[t].count,
          colorIndex: this.getColorIndex(this.values[t].count)
        });
    }
    return this._activities;
  }
  get weekCount() {
    return this.getDaysCount() / A.DAYS_IN_WEEK;
  }
  get calendar() {
    if (!this._calendar) {
      let t = this.shiftDate(this.startDate, -this.getCountEmptyDaysAtStart());
      t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), this._calendar = new Array(this.weekCount);
      for (let a = 0, s = this._calendar.length; a < s; a++) {
        this._calendar[a] = new Array(A.DAYS_IN_WEEK);
        for (let d = 0; d < A.DAYS_IN_WEEK; d++) {
          const o = this.activities.get(this.keyDayParser(t));
          this._calendar[a][d] = {
            date: new Date(t.valueOf()),
            count: o ? o.count : void 0,
            colorIndex: o ? o.colorIndex : 0
          }, t.setDate(t.getDate() + 1);
        }
      }
    }
    return this._calendar;
  }
  get firstFullWeekOfMonths() {
    if (!this._firstFullWeekOfMonths) {
      const t = this.calendar;
      this._firstFullWeekOfMonths = [];
      for (let a = 1, s = t.length; a < s; a++) {
        const d = t[a - 1][0].date, o = t[a][0].date;
        (d.getFullYear() < o.getFullYear() || d.getMonth() < o.getMonth()) && this._firstFullWeekOfMonths.push({ value: o.getMonth(), index: a });
      }
    }
    return this._firstFullWeekOfMonths;
  }
  getColorIndex(t) {
    return t == null ? 0 : t <= 0 ? 1 : t >= this.max ? 5 : Math.ceil(t * 100 / this.max * 0.03) + 1;
  }
  getCountEmptyDaysAtStart() {
    return this.startDate.getDay();
  }
  getCountEmptyDaysAtEnd() {
    return A.DAYS_IN_WEEK - 1 - this.endDate.getDay();
  }
  getDaysCount() {
    return A.DAYS_IN_ONE_YEAR + 1 + this.getCountEmptyDaysAtStart() + this.getCountEmptyDaysAtEnd();
  }
  shiftDate(t, a) {
    const s = new Date(t);
    return s.setDate(s.getDate() + a), s;
  }
  parseDate(t) {
    return t instanceof Date ? t : new Date(t);
  }
  keyDayParser(t) {
    const a = this.parseDate(t);
    return String(a.getFullYear()) + String(a.getMonth()).padStart(2, "0") + String(a.getDate()).padStart(2, "0");
  }
};
let n = A;
l(n, "DEFAULT_RANGE_COLOR_LIGHT", ["#ebedf0", "#dae2ef", "#c0ddf9", "#73b3f3", "#3886e1", "#17459e"]), l(n, "DEFAULT_RANGE_COLOR_DARK", ["#1f1f22", "#1e334a", "#1d466c", "#1d5689", "#1d69ac", "#1B95D1"]), // other color candidates
// static readonly DEFAULT_RANGE_COLOR_LIGHT = [ '#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39' ];
// static readonly DEFAULT_RANGE_COLOR_DARK  = [ '#161b22', '#0e4429', '#006d32', '#26a641', '#39d353' ];
// static readonly DEFAULT_RANGE_COLOR_DARK    = [ '#011526', '#012E40', '#025959', '#02735E', '#038C65' ];
// static readonly DEFAULT_RANGE_COLOR_DARK    = [ '#161b22', '#015958', '#008F8C', '#0CABA8', '#0FC2C0' ];
// static readonly DEFAULT_RANGE_COLOR_DARK    = [ '#012030', '#13678A', '#45C4B0', '#9AEBA3', '#DAFDBA' ];
l(n, "DEFAULT_LOCALE", {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  on: "on",
  less: "Less",
  more: "More"
}), l(n, "DEFAULT_TOOLTIP_UNIT", "contributions"), l(n, "DAYS_IN_ONE_YEAR", 365), l(n, "DAYS_IN_WEEK", 7), l(n, "SQUARE_SIZE", 10);
const he = /* @__PURE__ */ ne({
  name: "CalendarHeatmap",
  props: {
    endDate: {
      required: !0
    },
    max: {
      type: Number
    },
    rangeColor: {
      type: Array
    },
    values: {
      type: Array,
      required: !0
    },
    locale: {
      type: Object
    },
    tooltip: {
      type: Boolean,
      default: !0
    },
    tooltipUnit: {
      type: String,
      default: n.DEFAULT_TOOLTIP_UNIT
    },
    tooltipFormatter: {
      type: Function
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    noDataText: {
      type: [Boolean, String],
      default: null
    },
    round: {
      type: Number,
      default: 0
    },
    darkMode: Boolean
  },
  emits: ["dayClick"],
  setup(e) {
    const t = n.SQUARE_SIZE / 5, a = n.SQUARE_SIZE + t, s = Math.ceil(n.SQUARE_SIZE * 2.5), d = a * 3, o = n.SQUARE_SIZE + n.SQUARE_SIZE / 2, h = n.SQUARE_SIZE + n.SQUARE_SIZE / 2, E = `translate(${s}, ${o})`, I = v(null), U = v(/* @__PURE__ */ new Date()), S = v(new n(e.endDate, e.values, e.max)), p = v(0), T = v(0), F = v("0 0 0 0"), W = v("0 0 0 0"), k = v(""), L = v(""), b = v(""), D = v({}), O = v(e.rangeColor || (e.darkMode ? n.DEFAULT_RANGE_COLOR_DARK : n.DEFAULT_RANGE_COLOR_LIGHT)), { values: K, tooltipUnit: H, tooltipFormatter: z, noDataText: V, max: q, vertical: B, locale: J } = se(e), c = /* @__PURE__ */ new Map();
    let g;
    function Y() {
      c.clear(), g ? g.setInstances(Array.from(c.values())) : g = de(Array.from(c.values()), {
        overrides: [],
        moveTransition: "transform 0.1s ease-out",
        allowHTML: !0
      });
    }
    function j(r) {
      if (e.tooltip) {
        if (r.count !== void 0)
          return e.tooltipFormatter ? e.tooltipFormatter(r, e.tooltipUnit) : `<b>${r.count} ${e.tooltipUnit}</b> ${D.value.on} ${D.value.months[r.date.getMonth()]} ${r.date.getDate()}, ${r.date.getFullYear()}`;
        if (e.noDataText)
          return `${e.noDataText}`;
        if (e.noDataText !== !1)
          return `<b>No ${e.tooltipUnit}</b> ${D.value.on} ${D.value.months[r.date.getMonth()]} ${r.date.getDate()}, ${r.date.getFullYear()}`;
      }
    }
    function X(r) {
      return e.vertical ? `translate(0, ${a * S.value.weekCount - (r + 1) * a})` : `translate(${r * a}, 0)`;
    }
    function x(r) {
      return e.vertical ? `translate(${r * a}, 0)` : `translate(0, ${r * a})`;
    }
    function ee(r) {
      return e.vertical ? { x: 3, y: a * S.value.weekCount - a * r.index - a / 4 } : { x: a * r.index, y: a - t };
    }
    R([P(e, "rangeColor"), P(e, "darkMode")], ([r, f]) => {
      O.value = r || (f ? n.DEFAULT_RANGE_COLOR_DARK : n.DEFAULT_RANGE_COLOR_LIGHT);
    }), R(B, (r) => {
      r ? (p.value = s + a * n.DAYS_IN_WEEK + d, T.value = o + a * S.value.weekCount + t, k.value = `translate(${s}, 0)`, L.value = `translate(0, ${o})`) : (p.value = s + a * S.value.weekCount + t, T.value = o + a * n.DAYS_IN_WEEK, k.value = `translate(0, ${o})`, L.value = `translate(${s}, 0)`);
    }, { immediate: !0 }), R([p, T], ([r, f]) => F.value = ` 0 0 ${r} ${f}`, { immediate: !0 }), R([p, T, O], ([r, f, C]) => {
      b.value = B.value ? `translate(${s + a * n.DAYS_IN_WEEK}, ${o})` : `translate(${r - a * C.length - 30}, ${f - h})`;
    }, { immediate: !0 }), R(J, (r) => D.value = r ? { ...n.DEFAULT_LOCALE, ...r } : n.DEFAULT_LOCALE, { immediate: !0 }), R(O, (r) => W.value = `0 0 ${n.SQUARE_SIZE * (r.length + 1)} ${n.SQUARE_SIZE}`, { immediate: !0 }), R(
      [K, H, z, V, q, O],
      () => {
        S.value = new n(e.endDate, e.values, e.max), c.forEach((r) => r.destroy()), oe(Y);
      }
    ), le(Y), ie(() => {
      g == null || g.destroy(), c.forEach((r) => r.destroy());
    });
    function te(r) {
      if (g && r.target && r.target.classList.contains("vch__day__square") && r.target.dataset.weekIndex !== void 0 && r.target.dataset.dayIndex !== void 0) {
        const f = Number(r.target.dataset.weekIndex), C = Number(r.target.dataset.dayIndex);
        if (!isNaN(f) && !isNaN(C)) {
          const Q = j(S.value.calendar[f][C]);
          if (Q) {
            const Z = c.get(r.target);
            Z ? Z.setContent(Q) : Z || (c.set(r.target, _e(r.target, { content: Q })), g.setInstances(Array.from(c.values())));
          }
        }
      }
    }
    return {
      SQUARE_BORDER_SIZE: t,
      SQUARE_SIZE: a,
      LEFT_SECTION_WIDTH: s,
      RIGHT_SECTION_WIDTH: d,
      TOP_SECTION_HEIGHT: o,
      BOTTOM_SECTION_HEIGHT: h,
      svg: I,
      heatmap: S,
      now: U,
      width: p,
      height: T,
      viewbox: F,
      daysLabelWrapperTransform: k,
      monthsLabelWrapperTransform: L,
      yearWrapperTransform: E,
      legendWrapperTransform: b,
      lo: D,
      legendViewbox: W,
      curRangeColor: O,
      getWeekPosition: X,
      getDayPosition: x,
      getMonthLabelPosition: ee,
      initTippyLazy: te
    };
  }
});
const Ee = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, d] of t)
    a[s] = d;
  return a;
}, ve = ["viewBox"], Se = ["transform"], ce = ["x", "y"], ge = ["transform"], fe = ["x", "y"], ye = ["x", "y"], Ae = ["x", "y"], Re = ["transform"], De = ["x"], me = ["rx", "ry", "width", "height", "x", "y"], Ie = ["x", "y"], Ue = ["transform"], pe = ["transform"], Te = ["rx", "ry", "transform", "width", "height", "data-week-index", "data-day-index", "onClick"], Oe = { class: "vch__legend" }, we = { class: "vch__legend-left" }, Ce = { class: "vch__legend-right" }, ke = { class: "vch__legend" }, Le = ["viewBox", "height"], Qe = { class: "vch__legend__wrapper" }, Ze = ["rx", "ry", "width", "height", "x"];
function $e(e, t, a, s, d, o) {
  return i(), u("div", {
    class: ue({ vch__container: !0, "dark-mode": e.darkMode })
  }, [
    (i(), u("svg", {
      class: "vch__wrapper",
      ref: "svg",
      viewBox: e.viewbox
    }, [
      _("g", {
        class: "vch__months__labels__wrapper",
        transform: e.monthsLabelWrapperTransform
      }, [
        (i(!0), u(m, null, w(e.heatmap.firstFullWeekOfMonths, (h, E) => (i(), u("text", {
          class: "vch__month__label",
          key: E,
          x: e.getMonthLabelPosition(h).x,
          y: e.getMonthLabelPosition(h).y
        }, y(e.lo.months[h.value]), 9, ce))), 128))
      ], 8, Se),
      _("g", {
        class: "vch__days__labels__wrapper",
        transform: e.daysLabelWrapperTransform
      }, [
        _("text", {
          class: "vch__day__label",
          x: e.vertical ? e.SQUARE_SIZE : 0,
          y: e.vertical ? e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE : 20
        }, y(e.lo.days[1]), 9, fe),
        _("text", {
          class: "vch__day__label",
          x: e.vertical ? e.SQUARE_SIZE * 3 : 0,
          y: e.vertical ? e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE : 44
        }, y(e.lo.days[3]), 9, ye),
        _("text", {
          class: "vch__day__label",
          x: e.vertical ? e.SQUARE_SIZE * 5 : 0,
          y: e.vertical ? e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE : 69
        }, y(e.lo.days[5]), 9, Ae)
      ], 8, ge),
      e.vertical ? (i(), u("g", {
        key: 0,
        class: "vch__legend__wrapper",
        transform: e.legendWrapperTransform
      }, [
        _("text", {
          x: e.SQUARE_SIZE * 1.25,
          y: "8"
        }, y(e.lo.less), 9, De),
        (i(!0), u(m, null, w(e.curRangeColor, (h, E) => (i(), u("rect", {
          key: E,
          rx: e.round,
          ry: e.round,
          style: $({ fill: h }),
          width: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE,
          height: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE,
          x: e.SQUARE_SIZE * 1.75,
          y: e.SQUARE_SIZE * (E + 1)
        }, null, 12, me))), 128)),
        _("text", {
          x: e.SQUARE_SIZE * 1.25,
          y: e.SQUARE_SIZE * (e.curRangeColor.length + 2) - e.SQUARE_BORDER_SIZE
        }, y(e.lo.more), 9, Ie)
      ], 8, Re)) : M("", !0),
      _("g", {
        class: "vch__year__wrapper",
        transform: e.yearWrapperTransform,
        onMouseover: t[0] || (t[0] = (...h) => e.initTippyLazy && e.initTippyLazy(...h))
      }, [
        (i(!0), u(m, null, w(e.heatmap.calendar, (h, E) => (i(), u("g", {
          class: "vch__month__wrapper",
          key: E,
          transform: e.getWeekPosition(E)
        }, [
          (i(!0), u(m, null, w(h, (I, U) => (i(), u(m, { key: U }, [
            I.date < e.now ? (i(), u("rect", {
              key: 0,
              class: "vch__day__square",
              rx: e.round,
              ry: e.round,
              transform: e.getDayPosition(U),
              width: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE,
              height: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE,
              style: $({ fill: e.curRangeColor[I.colorIndex] }),
              "data-week-index": E,
              "data-day-index": U,
              onClick: (S) => e.$emit("dayClick", I)
            }, null, 12, Te)) : M("", !0)
          ], 64))), 128))
        ], 8, pe))), 128))
      ], 40, Ue)
    ], 8, ve)),
    _("div", Oe, [
      N(e.$slots, "legend", {}, () => [
        _("div", we, [
          N(e.$slots, "vch__legend-left")
        ]),
        _("div", Ce, [
          N(e.$slots, "legend-right", {}, () => [
            _("div", ke, [
              _("div", null, y(e.lo.less), 1),
              e.vertical ? M("", !0) : (i(), u("svg", {
                key: 0,
                class: "vch__external-legend-wrapper",
                viewBox: e.legendViewbox,
                height: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE
              }, [
                _("g", Qe, [
                  (i(!0), u(m, null, w(e.curRangeColor, (h, E) => (i(), u("rect", {
                    key: E,
                    rx: e.round,
                    ry: e.round,
                    style: $({ fill: h }),
                    width: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE,
                    height: e.SQUARE_SIZE - e.SQUARE_BORDER_SIZE,
                    x: e.SQUARE_SIZE * E
                  }, null, 12, Ze))), 128))
                ])
              ], 8, Le)),
              _("div", null, y(e.lo.more), 1)
            ])
          ])
        ])
      ])
    ])
  ], 2);
}
const G = /* @__PURE__ */ Ee(he, [["render", $e]]);
function Me(e) {
  e.component(G.name, G);
}
const be = { install: Me };
export {
  G as CalendarHeatmap,
  n as Heatmap,
  be as default
};
//# sourceMappingURL=vue3-calendar-heatmap.es.js.map
