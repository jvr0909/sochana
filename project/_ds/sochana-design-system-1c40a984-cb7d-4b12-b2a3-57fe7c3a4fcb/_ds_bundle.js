/* @ds-bundle: {"format":4,"namespace":"SochanaDesignSystem_1c40a9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TraceSteps","sourcePath":"components/core/TraceSteps.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d4fb20cde2e9","components/core/Button.jsx":"9896faa0cf9d","components/core/Card.jsx":"566e4630efc4","components/core/Icon.jsx":"0c19d46ed3fb","components/core/IconButton.jsx":"00d768c80bad","components/core/Logo.jsx":"3b093c691baa","components/core/Stat.jsx":"664b0510fff5","components/core/Tag.jsx":"2f2ffd6c197b","components/core/TraceSteps.jsx":"7a0fd7ec1bcd","components/feedback/Dialog.jsx":"0d6b1e9631fb","components/feedback/Toast.jsx":"274378b5f259","components/feedback/Tooltip.jsx":"c6a3d9df1b4d","components/forms/Checkbox.jsx":"9e5695230529","components/forms/Input.jsx":"1e5d37e8b950","components/forms/Radio.jsx":"7dcb2fece07d","components/forms/Select.jsx":"9fc5632c66b4","components/forms/Switch.jsx":"662b133c32ff","components/navigation/Tabs.jsx":"3f16e87be3b2","ui_kits/portal/CaseDetail.jsx":"471ceefe7565","ui_kits/portal/Overview.jsx":"cb6031b9453f","ui_kits/portal/Shell.jsx":"d09d4dfb7e26","ui_kits/portal/data.jsx":"bb972c759efb","ui_kits/website/Chrome.jsx":"56a3642983df","ui_kits/website/Contact.jsx":"211c9f42cab1","ui_kits/website/Home.jsx":"64e489c707c6","ui_kits/website/Services.jsx":"ec97983579f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SochanaDesignSystem_1c40a9 = window.SochanaDesignSystem_1c40a9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  dot = true,
  children,
  style
}) {
  const t = {
    neutral: ['var(--ink-100)', 'var(--ink-600)', 'var(--ink-400)'],
    high: ['var(--risk-high-soft)', 'var(--risk-high-text)', 'var(--risk-high)'],
    medium: ['var(--risk-medium-soft)', 'var(--risk-medium-text)', 'var(--risk-medium)'],
    low: ['var(--risk-low-soft)', 'var(--risk-low-text)', 'var(--risk-low)'],
    info: ['var(--info-soft)', 'var(--info-text)', 'var(--info)'],
    inverse: ['var(--ink-800)', 'var(--ink-100)', 'var(--teal-500)']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-s)',
      background: t[0],
      color: t[1],
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t[2]
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  s: {
    h: 'var(--control-h-s)',
    px: 12,
    fs: 13
  },
  m: {
    h: 'var(--control-h-m)',
    px: 16,
    fs: 14
  },
  l: {
    h: 'var(--control-h-l)',
    px: 22,
    fs: 15
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    hover: 'var(--action-primary-hover)',
    press: 'var(--action-primary-press)',
    fg: 'var(--action-primary-text)',
    bd: 'transparent'
  },
  accent: {
    bg: 'var(--accent)',
    hover: 'var(--accent-hover)',
    press: 'var(--accent-press)',
    fg: 'var(--accent-ink)',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--surface-card)',
    hover: 'var(--ink-50)',
    press: 'var(--ink-100)',
    fg: 'var(--text-strong)',
    bd: 'var(--border-default)'
  },
  ghost: {
    bg: 'transparent',
    hover: 'var(--ink-100)',
    press: 'var(--ink-150)',
    fg: 'var(--text-strong)',
    bd: 'transparent'
  },
  inverse: {
    bg: 'var(--ink-100)',
    hover: 'var(--white)',
    press: 'var(--ink-200)',
    fg: 'var(--ink-900)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--red-500)',
    hover: '#ea6962',
    press: 'var(--red-700)',
    fg: 'var(--white)',
    bd: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'm',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [st, setSt] = React.useState('rest');
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.m;
  const bg = disabled ? v.bg : st === 'press' ? v.press : st === 'hover' ? v.hover : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setSt('hover'),
    onMouseLeave: () => setSt('rest'),
    onMouseDown: () => setSt('press'),
    onMouseUp: () => setSt('hover'),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: bg,
      color: v.fg,
      border: `1px solid ${v.bd}`,
      borderRadius: 'var(--radius-m)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      outline: 'none',
      boxSizing: 'border-box',
      ...style
    },
    onFocus: e => e.currentTarget.style.boxShadow = 'var(--shadow-focus)',
    onBlur: e => e.currentTarget.style.boxShadow = 'none'
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'default',
  padding = 24,
  interactive = false,
  eyebrow,
  title,
  children,
  footer,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const t = {
    default: ['var(--surface-card)', 'var(--border-subtle)', 'var(--text-body)', 'var(--text-strong)'],
    sunken: ['var(--surface-sunken)', 'transparent', 'var(--text-body)', 'var(--text-strong)'],
    inverse: ['var(--surface-inverse-raised)', 'var(--border-inverse)', 'var(--ink-200)', 'var(--ink-100)']
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: t[0],
      border: `1px solid ${interactive && h ? 'var(--border-strong)' : t[1]}`,
      borderRadius: 'var(--radius-l)',
      padding,
      color: t[2],
      boxShadow: interactive && h ? 'var(--shadow-2)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      cursor: interactive ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxSizing: 'border-box',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--teal-500)' : 'var(--text-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 600,
      lineHeight: 1.25,
      color: t[3]
    }
  }, title), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      borderTop: `1px solid ${tone === 'inverse' ? 'var(--border-inverse)' : 'var(--border-subtle)'}`
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function toPascal(n) {
  return n.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color = 'currentColor',
  style
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || {};
  let node = lib[toPascal(name)] || lib[name];
  if (node && node[0] === 'svg') node = node[2];
  const kids = (node || []).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  }));
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = 'm',
  variant = 'ghost',
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = {
    s: 30,
    m: 38,
    l: 46
  }[size] || 38;
  const pal = {
    ghost: ['transparent', 'var(--ink-100)', 'var(--text-strong)', 'transparent'],
    secondary: ['var(--surface-card)', 'var(--ink-50)', 'var(--text-strong)', 'var(--border-default)'],
    inverse: ['transparent', 'var(--ink-800)', 'var(--ink-100)', 'transparent']
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      background: h ? pal[1] : pal[0],
      color: pal[2],
      border: `1px solid ${pal[3]}`,
      borderRadius: 'var(--radius-m)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'lockup',
  surface = 'light',
  height = 28,
  base = '',
  style
}) {
  const map = {
    lockup: {
      light: 'logo-lockup-on-light.png',
      dark: 'logo-lockup-on-dark.png'
    },
    mark: {
      light: 'logo-mark-on-light.png',
      dark: 'logo-mark-on-dark.png'
    },
    icon: {
      light: 'app-icon.png',
      dark: 'app-icon.png'
    }
  };
  const f = (map[variant] || map.lockup)[surface] || map.lockup.light;
  return /*#__PURE__*/React.createElement("img", {
    src: base + 'assets/' + f,
    alt: "Sochana",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function Stat({
  label,
  value,
  delta,
  deltaTone = 'neutral',
  surface = 'light',
  size = 'm'
}) {
  const dc = {
    neutral: 'var(--text-muted)',
    good: 'var(--teal-600)',
    bad: 'var(--red-500)'
  }[deltaTone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: surface === 'dark' ? 'var(--ink-400)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: size === 'l' ? 44 : 28,
      fontWeight: 500,
      letterSpacing: '-.02em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      color: surface === 'dark' ? 'var(--ink-100)' : 'var(--text-strong)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: dc
    }
  }, delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onRemove,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: onRemove ? '0 6px 0 10px' : '0 10px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--ink-900)' : h ? 'var(--border-strong)' : 'var(--border-default)'}`,
      background: selected ? 'var(--ink-900)' : 'var(--surface-card)',
      color: selected ? 'var(--ink-50)' : 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      width: 16,
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      fontSize: 13,
      lineHeight: 1,
      cursor: 'pointer',
      opacity: .7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TraceSteps.jsx
try { (() => {
function TraceSteps({
  steps = [],
  current = -1,
  surface = 'light',
  direction = 'horizontal'
}) {
  const ink = surface === 'dark' ? 'var(--ink-100)' : 'var(--ink-900)';
  const faint = surface === 'dark' ? 'var(--ink-700)' : 'var(--ink-200)';
  const muted = surface === 'dark' ? 'var(--ink-400)' : 'var(--text-muted)';
  const strong = surface === 'dark' ? 'var(--ink-100)' : 'var(--text-strong)';
  const H = direction === 'horizontal';
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: H ? 'row' : 'column'
    }
  }, steps.map((s, i) => {
    const done = current < 0 || i < current,
      here = i === current,
      last = i === steps.length - 1,
      first = i === 0;
    const lineC = current < 0 || i < current ? ink : faint;
    const node = first ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        border: `2px solid ${done || here ? ink : faint}`,
        boxSizing: 'border-box',
        background: surface === 'dark' ? 'var(--ink-900)' : 'var(--surface-card)'
      }
    }) : last && (done || here) ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: 'var(--teal-500)'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: here ? 12 : 8,
        height: here ? 12 : 8,
        borderRadius: '50%',
        background: here ? 'var(--teal-500)' : done ? ink : faint
      }
    });
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        flex: H ? 1 : 'none',
        display: 'flex',
        flexDirection: H ? 'column' : 'row',
        gap: H ? 12 : 14,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: H ? 'row' : 'column',
        alignItems: 'center',
        width: H ? '100%' : 14,
        minHeight: H ? 14 : undefined,
        alignSelf: H ? undefined : 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        height: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, node), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        [H ? 'height' : 'width']: 2,
        [H ? 'minWidth' : 'minHeight']: 16,
        background: lineC
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: H ? 16 : 0,
        paddingBottom: H ? 0 : last ? 0 : 20
      }
    }, s.label && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: here ? 'var(--teal-600)' : muted,
        marginBottom: 4
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: 600,
        color: strong
      }
    }, s.title), s.body && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: 1.5,
        color: muted,
        marginTop: 4,
        textWrap: 'pretty'
      }
    }, s.body)));
  }));
}
Object.assign(__ds_scope, { TraceSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TraceSteps.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  actions,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-l)',
      boxShadow: 'var(--shadow-3)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 30,
      height: 30,
      border: 0,
      background: 'transparent',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 20,
      lineHeight: 1,
      color: 'var(--ink-500)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 20px',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      background: 'var(--ink-50)',
      borderRadius: '0 0 var(--radius-l) var(--radius-l)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  title,
  children,
  onClose,
  action
}) {
  const c = {
    neutral: 'var(--ink-400)',
    success: 'var(--teal-500)',
    warning: 'var(--amber-500)',
    danger: 'var(--red-500)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--ink-900)',
      color: 'var(--ink-200)',
      borderRadius: 'var(--radius-l)',
      boxShadow: 'var(--shadow-3)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c,
      marginTop: 5,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-100)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      marginTop: 2
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--ink-400)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'top' ? {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, o && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--ink-900)',
      color: 'var(--ink-100)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1.4,
      padding: '6px 8px',
      borderRadius: 'var(--radius-s)',
      whiteSpace: 'nowrap',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  description,
  disabled
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 1,
      borderRadius: 'var(--radius-s)',
      border: `1.5px solid ${on ? 'var(--ink-900)' : 'var(--border-strong)'}`,
      background: on ? 'var(--ink-900)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--teal-500)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelS = {
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--text-strong)'
};
const hintS = err => ({
  fontSize: 12,
  color: err ? 'var(--red-700)' : 'var(--text-muted)'
});
function Input({
  label,
  hint,
  error,
  size = 'm',
  iconLeft,
  mono = false,
  style,
  disabled,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const h = {
    s: 30,
    m: 38,
    l: 46
  }[size];
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelS
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--ink-50)' : 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--red-500)' : f ? 'var(--ink-900)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-m)',
      boxShadow: f ? error ? '0 0 0 3px var(--red-100)' : '0 0 0 3px var(--teal-100)' : 'none',
      transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)',
      color: 'var(--text-muted)',
      boxSizing: 'border-box'
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintS(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'vertical'
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap: direction === 'vertical' ? 10 : 20
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: 14,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: `1.5px solid ${on ? 'var(--ink-900)' : 'var(--border-strong)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        background: 'var(--surface-card)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--teal-500)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelS = {
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--text-strong)'
};
const hintS = err => ({
  fontSize: 12,
  color: err ? 'var(--red-700)' : 'var(--text-muted)'
});
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'm',
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const h = {
    s: 30,
    m: 38,
    l: 46
  }[size];
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelS
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 34px 0 12px',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--red-500)' : f ? 'var(--ink-900)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-m)',
      boxShadow: f ? '0 0 0 3px var(--teal-100)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-strong)',
      outline: 0,
      cursor: 'pointer'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintS(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => {
      if (disabled) return;
      setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 34,
      height: 20,
      borderRadius: 999,
      background: on ? 'var(--ink-900)' : 'var(--ink-200)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-standard)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 17 : 3,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: on ? 'var(--teal-500)' : 'var(--white)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  surface = 'light'
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value || tabs[0])));
  const cur = value ?? inner;
  const d = surface === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: `1px solid ${d ? 'var(--border-inverse)' : 'var(--border-subtle)'}`
    }
  }, tabs.map(t => {
    const v = t.value || t,
      l = t.label || t,
      on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        position: 'relative',
        background: 'none',
        border: 0,
        padding: '10px 0 12px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? d ? 'var(--ink-100)' : 'var(--text-strong)' : d ? 'var(--ink-400)' : 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, l, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        padding: '1px 6px',
        borderRadius: 4,
        background: d ? 'var(--ink-800)' : 'var(--ink-100)',
        color: d ? 'var(--ink-300)' : 'var(--ink-600)'
      }
    }, t.count), on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: d ? 'var(--teal-500)' : 'var(--ink-900)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/CaseDetail.jsx
try { (() => {
const {
  Button: DB,
  Icon: DI,
  Badge: DBd,
  Card: DC,
  Tabs: DT,
  TraceSteps: DTr,
  Dialog: DDlg,
  Toast: DToast,
  Stat: DS,
  Switch: DSw,
  Checkbox: DChk
} = window.SochanaDesignSystem_1c40a9;
function CaseDetail({
  id,
  nav
}) {
  const c = window.PORTAL_CASES.find(x => x.id === id) || window.PORTAL_CASES[0];
  const [tab, setTab] = React.useState('timeline');
  const [dlg, setDlg] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [esc, setEsc] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    onClick: () => nav('cases'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--text-muted)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DI, {
    name: "arrow-left",
    size: 14
  }), "All cases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, c.id), /*#__PURE__*/React.createElement(DBd, {
    tone: c.risk
  }, c.risk, " risk"), esc && /*#__PURE__*/React.createElement(DBd, {
    tone: "info"
  }, "Escalated")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: '-.01em',
      color: 'var(--text-strong)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, c.status, " \xB7 Lead investigator ", c.owner, " \xB7 opened ", c.opened)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DB, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(DI, {
      name: "share-2",
      size: 15
    })
  }, "Share"), /*#__PURE__*/React.createElement(DB, {
    variant: "danger",
    disabled: esc,
    iconLeft: /*#__PURE__*/React.createElement(DI, {
      name: "siren",
      size: 15
    }),
    onClick: () => setDlg(true)
  }, esc ? 'Escalated' : 'Escalate'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DC, {
    padding: 20
  }, /*#__PURE__*/React.createElement(DS, {
    label: "Exposure",
    value: c.exposure
  })), /*#__PURE__*/React.createElement(DC, {
    padding: 20
  }, /*#__PURE__*/React.createElement(DS, {
    label: "Cards affected",
    value: "212",
    delta: "38 source IPs"
  })), /*#__PURE__*/React.createElement(DC, {
    padding: 20
  }, /*#__PURE__*/React.createElement(DS, {
    label: "Recoverable",
    value: "61%",
    delta: "via representment",
    deltaTone: "good"
  }))), /*#__PURE__*/React.createElement(DT, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'timeline',
      label: 'Trace'
    }, {
      value: 'controls',
      label: 'Controls',
      count: 3
    }, {
      value: 'docs',
      label: 'Evidence',
      count: 9
    }]
  }), tab === 'timeline' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DC, {
    eyebrow: "Following the money",
    title: "How the loss happened"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(DTr, {
    direction: "vertical",
    current: 4,
    steps: window.PORTAL_HOPS
  }))), /*#__PURE__*/React.createElement(DC, {
    tone: "inverse",
    eyebrow: "Investigator note",
    title: "Contain first, then recover"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "The velocity rule has stopped new attempts. We recommend holding the three BIN ranges for 72 hours and filing representment on the 129 disputes we can evidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-400)'
    }
  }, "\u2014 R. Okafor, 24 Sep 11:40"))), tab === 'controls' && /*#__PURE__*/React.createElement(DC, {
    padding: 0
  }, [['Velocity rule: >20 auths / BIN / 5 min', 'Live since 24 Sep', true], ['Hold BIN ranges 4471xx, 4472xx, 5310xx', '72 h hold', true], ['Step-up 3DS on gift-card SKUs', 'Recommended', false]].map(([t, s, on], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, s)), /*#__PURE__*/React.createElement(DSw, {
    defaultChecked: on
  })))), tab === 'docs' && /*#__PURE__*/React.createElement(DC, {
    padding: 0
  }, ['auth_log_0092_22sep.csv', 'bin_cluster_analysis.pdf', 'chargeback_batch_0418.xlsx'].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 20px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(DI, {
    name: "file-text",
    size: 18,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, f), /*#__PURE__*/React.createElement(DB, {
    variant: "ghost",
    size: "s",
    iconLeft: /*#__PURE__*/React.createElement(DI, {
      name: "download",
      size: 14
    })
  }, "Download")))), /*#__PURE__*/React.createElement(DDlg, {
    open: dlg,
    onClose: () => setDlg(false),
    eyebrow: "Incident",
    title: "Escalate to the response team?",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DB, {
      variant: "ghost",
      onClick: () => setDlg(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(DB, {
      variant: "danger",
      onClick: () => {
        setDlg(false);
        setEsc(true);
        setToast(true);
      }
    }, "Escalate now"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "An investigator will call you within 30 minutes and join the case as lead responder."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DChk, {
    label: "Notify my card issuer contact",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DChk, {
    label: "Share evidence folder with responder",
    defaultChecked: true
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(DToast, {
    tone: "danger",
    title: "Case escalated",
    onClose: () => setToast(false)
  }, "R. Okafor will call within 30 minutes.")));
}
window.CaseDetail = CaseDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/CaseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Overview.jsx
try { (() => {
const {
  Stat: OS,
  Card: OC,
  Badge: OB,
  Tabs: OT,
  Button: OBtn,
  Icon: OI,
  Select: OSel
} = window.SochanaDesignSystem_1c40a9;
const riskLabel = {
  high: 'High',
  medium: 'Medium',
  low: 'Low'
};
function CasesTable({
  rows,
  nav
}) {
  const th = {
    textAlign: 'left',
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontWeight: 500,
    padding: '10px 16px',
    borderBottom: '1px solid var(--border-subtle)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Case"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Type"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Risk"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "Exposure"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Owner"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement(CaseRow, {
    key: r.id,
    r: r,
    onClick: () => nav('case', r.id)
  })))));
}
function CaseRow({
  r,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const td = {
    padding: '14px 16px',
    borderBottom: '1px solid var(--border-subtle)',
    fontSize: 14,
    color: 'var(--text-body)'
  };
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: 'pointer',
      background: h ? 'var(--ink-50)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, r.id, " \xB7 opened ", r.opened)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.type), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(OB, {
    tone: r.risk
  }, riskLabel[r.risk])), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.status), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-strong)'
    }
  }, r.exposure), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.owner));
}
function Overview({
  view,
  nav
}) {
  const [tab, setTab] = React.useState('open');
  const all = window.PORTAL_CASES;
  const rows = tab === 'open' ? all.filter(c => c.status !== 'Closed') : tab === 'high' ? all.filter(c => c.risk === 'high') : all;
  const bars = [38, 44, 41, 52, 60, 57, 71, 66, 58, 49, 42, 36];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      color: 'var(--text-muted)'
    }
  }, view === 'cases' ? 'CASES' : 'OVERVIEW · Q3 2026'), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 30,
      letterSpacing: '-.01em',
      color: 'var(--text-strong)'
    }
  }, view === 'cases' ? 'All cases' : 'Good morning, Priya')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(OSel, {
    size: "s",
    options: ['Last 90 days', 'Last 30 days', 'Year to date']
  }), /*#__PURE__*/React.createElement(OBtn, {
    variant: "secondary",
    size: "s",
    iconLeft: /*#__PURE__*/React.createElement(OI, {
      name: "download",
      size: 14
    })
  }, "Export"))), view !== 'cases' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, [['Confirmed losses', '$814,570', '▲ 18% vs Q2', 'bad'], ['Prevented', '$2.31M', '▲ 42% vs Q2', 'good'], ['Open cases', '4', '2 high risk', 'neutral'], ['False-positive rate', '3.8%', '▼ 1.9 pts', 'good']].map(([l, v, d, t]) => /*#__PURE__*/React.createElement(OC, {
    key: l,
    padding: 20
  }, /*#__PURE__*/React.createElement(OS, {
    label: l,
    value: v,
    delta: d,
    deltaTone: t
  })))), view !== 'cases' && /*#__PURE__*/React.createElement(OC, {
    eyebrow: "Losses by week",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height: 120
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: b * 1.6,
      background: i === 6 ? 'var(--teal-500)' : 'var(--ink-200)',
      borderRadius: '3px 3px 0 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "W27"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-700)'
    }
  }, "W33 \xB7 peak $71.2k"), /*#__PURE__*/React.createElement("span", null, "W38"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(OT, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'open',
      label: 'Open',
      count: all.filter(c => c.status !== 'Closed').length
    }, {
      value: 'high',
      label: 'High risk',
      count: 2
    }, {
      value: 'all',
      label: 'All',
      count: all.length
    }]
  }), /*#__PURE__*/React.createElement(CasesTable, {
    rows: rows,
    nav: nav
  })));
}
window.Overview = Overview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Shell.jsx
try { (() => {
const {
  Logo: PL,
  Icon: PI,
  IconButton: PIB,
  Input: PInp,
  Tooltip: PTip
} = window.SochanaDesignSystem_1c40a9;
function SideItem({
  icon,
  label,
  on,
  count,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 36,
      padding: '0 12px',
      borderRadius: 6,
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      background: on ? 'var(--ink-850)' : h ? 'var(--ink-850)' : 'transparent',
      color: on ? 'var(--ink-100)' : 'var(--ink-300)',
      position: 'relative'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -12,
      top: 10,
      bottom: 10,
      width: 2,
      background: 'var(--teal-500)'
    }
  }), /*#__PURE__*/React.createElement(PI, {
    name: icon,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, count));
}
function PortalShell({
  view,
  nav,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--ink-900)',
      padding: '20px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      position: 'sticky',
      top: 0,
      height: '100vh',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 12px'
    }
  }, /*#__PURE__*/React.createElement(PL, {
    surface: "dark",
    height: 24,
    base: "../../"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      border: '1px solid var(--ink-800)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.14em',
      color: 'var(--ink-400)'
    }
  }, "CLIENT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-100)',
      fontWeight: 500,
      marginTop: 2
    }
  }, "Northwind Payments")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(SideItem, {
    icon: "layout-dashboard",
    label: "Overview",
    on: view === 'overview',
    onClick: () => nav('overview')
  }), /*#__PURE__*/React.createElement(SideItem, {
    icon: "folder-search",
    label: "Cases",
    count: 5,
    on: view === 'cases' || view === 'case',
    onClick: () => nav('cases')
  }), /*#__PURE__*/React.createElement(SideItem, {
    icon: "shield-check",
    label: "Controls",
    count: 14,
    onClick: () => nav('overview')
  }), /*#__PURE__*/React.createElement(SideItem, {
    icon: "file-text",
    label: "Reports",
    onClick: () => nav('overview')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(SideItem, {
    icon: "settings",
    label: "Settings",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px',
      borderTop: '1px solid var(--ink-800)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--ink-700)',
      color: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, "PS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-100)'
    }
  }, "Priya Shah"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, "Head of Risk"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320
    }
  }, /*#__PURE__*/React.createElement(PInp, {
    size: "s",
    placeholder: "Search cases, accounts, IDs",
    iconLeft: /*#__PURE__*/React.createElement(PI, {
      name: "search",
      size: 14
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(PTip, {
    content: "Incident line \xB7 24/7",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(PIB, {
    label: "Incident line"
  }, /*#__PURE__*/React.createElement(PI, {
    name: "phone"
  }))), /*#__PURE__*/React.createElement(PIB, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(PI, {
    name: "bell"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, children)));
}
window.PortalShell = PortalShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/data.jsx
try { (() => {
window.PORTAL_CASES = [{
  id: 'CASE-2026-0418',
  title: 'Card-testing burst on merchant 0092',
  type: 'Card testing',
  risk: 'high',
  status: 'Investigating',
  exposure: '$412,800',
  opened: '24 Sep',
  owner: 'R. Okafor'
}, {
  id: 'CASE-2026-0411',
  title: 'Refund abuse via split returns',
  type: 'Refund abuse',
  risk: 'high',
  status: 'Controls in review',
  exposure: '$286,150',
  opened: '19 Sep',
  owner: 'M. Lindqvist'
}, {
  id: 'CASE-2026-0397',
  title: 'Promo stacking on new accounts',
  type: 'Promo abuse',
  risk: 'medium',
  status: 'Monitoring',
  exposure: '$64,320',
  opened: '11 Sep',
  owner: 'R. Okafor'
}, {
  id: 'CASE-2026-0382',
  title: 'Credential stuffing, EU login',
  type: 'Account takeover',
  risk: 'medium',
  status: 'Contained',
  exposure: '$38,900',
  opened: '02 Sep',
  owner: 'A. Mehta'
}, {
  id: 'CASE-2026-0364',
  title: 'Duplicate vendor payouts',
  type: 'Insider',
  risk: 'low',
  status: 'Closed',
  exposure: '$12,400',
  opened: '21 Aug',
  owner: 'M. Lindqvist'
}];
window.PORTAL_HOPS = [{
  label: '22 Sep · 02:14',
  title: '1,204 low-value auths',
  body: '$0.50–$2.00 attempts from 38 IPs, same BIN range.'
}, {
  label: '22 Sep · 02:41',
  title: 'Merchant 0092 flagged',
  body: 'Approval rate jumped from 91% to 99.4% in 20 minutes.'
}, {
  label: '23 Sep · 09:10',
  title: 'Cards cashed out',
  body: '212 cards used for gift-card purchases, avg $1,940.'
}, {
  label: '24 Sep · 11:02',
  title: 'Case opened',
  body: 'Velocity rule deployed; 3 BIN ranges on hold.'
}, {
  label: 'Now',
  title: 'Chargeback exposure sized',
  body: '$412,800 across 212 cards; 61% recoverable.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Icon,
  Logo
} = window.SochanaDesignSystem_1c40a9;
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const eyebrowS = {
  fontFamily: 'var(--font-mono)',
  fontSize: 12,
  letterSpacing: '.14em',
  textTransform: 'uppercase'
};
function NavLink({
  on,
  children,
  onClick,
  dark
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      color: on || h ? 'var(--ink-100)' : 'var(--ink-300)',
      position: 'relative',
      padding: '6px 0'
    }
  }, children, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -2,
      height: 2,
      background: 'var(--teal-500)'
    }
  }));
}
function SiteHeader({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--ink-900)',
      borderBottom: '1px solid var(--ink-800)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    surface: "dark",
    variant: "mark",
    height: 30,
    base: "../../"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    on: page === 'services',
    onClick: () => go('services')
  }, "Services"), /*#__PURE__*/React.createElement(NavLink, {
    on: false,
    onClick: () => go('home')
  }, "Approach"), /*#__PURE__*/React.createElement(NavLink, {
    on: false,
    onClick: () => go('home')
  }, "Insights"), /*#__PURE__*/React.createElement(NavLink, {
    on: page === 'contact',
    onClick: () => go('contact')
  }, "Contact")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "s",
    onClick: () => go('contact')
  }, "Book a review"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "s",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "siren",
      size: 15
    }),
    onClick: () => go('incident')
  }, "Report an incident")));
}
function SiteFooter({
  go
}) {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowS,
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: () => go(i === 'Contact' ? 'contact' : 'services'),
    style: {
      color: 'var(--ink-200)',
      fontSize: 14,
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-950)',
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '56px var(--gutter) 32px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    surface: "dark",
    height: 52,
    base: "../../"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      maxWidth: 300,
      lineHeight: 1.6
    }
  }, "Fraud detection, investigation and prevention for businesses that move money.")), col('Services', ['Loss diagnostic', 'Controls & detection', 'Incident response']), col('Company', ['Approach', 'Insights', 'Contact']), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowS,
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, "Incident line"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-100)'
    }
  }, "+44 20 0000 0000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Answered 24/7 by an investigator."))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '18px var(--gutter)',
      borderTop: '1px solid var(--ink-800)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SOCHANA"), /*#__PURE__*/React.createElement("span", null, "Following the money, hop by hop")));
}
function SectionHead({
  num,
  label,
  title,
  body,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowS,
      color: dark ? 'var(--ink-400)' : 'var(--text-muted)'
    }
  }, num, " \xB7 ", label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 36,
      letterSpacing: '-.01em',
      lineHeight: 1.15,
      color: dark ? 'var(--ink-100)' : 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: dark ? 'var(--ink-300)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, body));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  SectionHead,
  siteWrap: wrap,
  eyebrowS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Button: CB,
  Icon: CI,
  Input: CInp,
  Select: CSel,
  Checkbox: CChk,
  Radio: CRad,
  Toast: CToast,
  TraceSteps: CTr
} = window.SochanaDesignSystem_1c40a9;
function ContactPage({
  mode,
  go
}) {
  const w = window.siteWrap;
  const [kind, setKind] = React.useState(mode === 'incident' ? 'Active incident' : 'Proactive review');
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => setKind(mode === 'incident' ? 'Active incident' : 'Proactive review'), [mode]);
  const inc = kind === 'Active incident';
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '72px var(--gutter) 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: inc ? '24/7' : '01',
    label: inc ? 'Incident response' : 'Contact',
    title: inc ? 'Tell us what is happening.' : 'Book a loss diagnostic.',
    body: inc ? 'An investigator will call you back within 30 minutes. If money is moving right now, call the incident line instead.' : 'Tell us a little about your business. We will reply within one business day with a short call to scope the work.'
  }), inc && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      borderRadius: 10,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CI, {
    name: "phone",
    size: 20,
    color: "var(--teal-500)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.eyebrowS,
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, "Incident line"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      color: 'var(--ink-100)'
    }
  }, "+44 20 0000 0000"))), /*#__PURE__*/React.createElement(CTr, {
    direction: "vertical",
    current: sent ? -1 : 0,
    steps: inc ? [{
      label: '0–30 min',
      title: 'Call back',
      body: 'Triage and immediate containment steps.'
    }, {
      label: 'Hours 1–24',
      title: 'Contain',
      body: 'Freeze the path, preserve evidence.'
    }, {
      label: 'Day 2+',
      title: 'Report',
      body: 'Root cause, losses and fixes.'
    }] : [{
      label: 'Day 1',
      title: 'We reply',
      body: 'A short email to find a time.'
    }, {
      label: 'Week 1',
      title: 'Scoping call',
      body: '30 minutes with a senior investigator.'
    }, {
      label: 'Week 2',
      title: 'Diagnostic starts',
      body: 'Fixed fee, four weeks.'
    }]
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(CRad, {
    direction: "horizontal",
    value: kind,
    onChange: setKind,
    options: ['Proactive review', 'Active incident']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CInp, {
    label: "Full name",
    placeholder: "Priya Shah"
  }), /*#__PURE__*/React.createElement(CInp, {
    label: "Work email",
    placeholder: "name@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CInp, {
    label: "Company",
    placeholder: "Northwind Payments"
  }), /*#__PURE__*/React.createElement(CSel, {
    label: "Industry",
    options: ['Fintech', 'E-commerce', 'Insurance', 'Marketplace', 'Other']
  })), inc ? /*#__PURE__*/React.createElement(CInp, {
    label: "Estimated exposure (USD)",
    mono: true,
    placeholder: "250,000"
  }) : /*#__PURE__*/React.createElement(CSel, {
    label: "Monthly transaction volume",
    options: ['Under $1M', '$1M–$10M', '$10M–$100M', 'Over $100M']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, "What are you seeing?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, ['Chargebacks', 'Account takeover', 'Refund abuse', 'Promo abuse', 'Insider fraud', 'Not sure yet'].map(x => /*#__PURE__*/React.createElement(CChk, {
    key: x,
    label: x
  })))), /*#__PURE__*/React.createElement(CB, {
    type: "submit",
    variant: inc ? 'danger' : 'primary',
    size: "l",
    fullWidth: true
  }, inc ? 'Request a call back' : 'Send request'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "We only use these details to reply to you."))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(CToast, {
    tone: "success",
    title: inc ? 'Request received' : 'Thanks — we will be in touch',
    onClose: () => setSent(false)
  }, inc ? 'An investigator will call within 30 minutes.' : 'Expect an email within one business day.')));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button: HB,
  Icon: HI,
  Card: HC,
  Stat: HS,
  TraceSteps: HT,
  Badge: HBadge
} = window.SochanaDesignSystem_1c40a9;
function HomePage({
  go
}) {
  const w = window.siteWrap;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '96px var(--gutter) 88px',
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 64,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.eyebrowS,
      color: 'var(--teal-500)'
    }
  }, "Fraud consulting"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 56,
      lineHeight: 1.08,
      letterSpacing: '-.02em',
      textWrap: 'balance'
    }
  }, "Find where fraud is costing you. Stop it without stopping customers."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--ink-300)',
      maxWidth: 560
    }
  }, "We trace losses to their source, rebuild the controls that let them through, and stay on call when an incident hits."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(HB, {
    variant: "accent",
    size: "l",
    iconRight: /*#__PURE__*/React.createElement(HI, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => go('contact')
  }, "Book a loss diagnostic"), /*#__PURE__*/React.createElement(HB, {
    variant: "inverse",
    size: "l",
    onClick: () => go('services')
  }, "See services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'var(--ink-800)',
      border: '1px solid var(--ink-800)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, [['Losses identified', '$214M', 'across 2025 engagements'], ['Median time to contain', '38h', 'from first call'], ['False-positive reduction', '−41%', 'after controls rework'], ['Response line', '24/7', 'staffed by investigators']].map(([l, v, d]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--ink-900)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(HS, {
    surface: "dark",
    label: l,
    value: v
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-400)',
      marginTop: 6
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '88px var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01",
    label: "Services",
    title: "Three ways we work with you",
    body: "Most clients start with a diagnostic. Some call us mid-incident. Either way, you get the same team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [['search', 'Detect', 'Loss diagnostic', 'A four-week review of transactions, refunds and accounts to show exactly where money leaves.'], ['shield-check', 'Prevent', 'Controls & detection', 'Rules, models and review queues tuned to catch fraud while approving genuine customers.'], ['siren', 'Respond', 'Incident response', 'An investigator on the phone within 30 minutes. Containment, evidence, and a clear write-up.']].map(([ic, e, t, b], i) => /*#__PURE__*/React.createElement(HC, {
    key: t,
    interactive: true,
    eyebrow: '0' + (i + 1) + ' · ' + e,
    title: t,
    onClick: () => go('services'),
    footer: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--text-strong)'
      }
    }, "Learn more ", /*#__PURE__*/React.createElement(HI, {
      name: "arrow-right",
      size: 14
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-900)',
      order: -1
    }
  }, /*#__PURE__*/React.createElement(HI, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '88px var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02",
    label: "Approach",
    title: "Follow the money, hop by hop",
    body: "Every engagement follows the same trace: start from a loss, work back through each hop, and close the gap at its source."
  }), /*#__PURE__*/React.createElement(HT, {
    steps: [{
      label: 'Week 1',
      title: 'Map the flows',
      body: 'Payments, refunds, payouts, account changes.'
    }, {
      label: 'Week 2',
      title: 'Trace the losses',
      body: 'Follow confirmed fraud back to the control that missed it.'
    }, {
      label: 'Week 3',
      title: 'Size the fix',
      body: 'Quantify each gap in dollars and customer friction.'
    }, {
      label: 'Week 4',
      title: 'Hand over',
      body: 'Prioritised controls, rules and a monitoring plan.'
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '72px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "inverse"
  }, "Active incident?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      fontWeight: 500,
      color: 'var(--ink-100)'
    }
  }, "Call us now. Paperwork later.")), /*#__PURE__*/React.createElement(HB, {
    variant: "accent",
    size: "l",
    iconLeft: /*#__PURE__*/React.createElement(HI, {
      name: "phone",
      size: 16
    }),
    onClick: () => go('incident')
  }, "Report an incident"))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  Button: SB,
  Icon: SI,
  Tag: ST,
  Badge: SBd
} = window.SochanaDesignSystem_1c40a9;
function ServicesPage({
  go
}) {
  const w = window.siteWrap;
  const [f, setF] = React.useState('All');
  const svc = [['01', 'Detect', 'Loss diagnostic', '4 weeks', 'Fixed fee', ['Transaction and refund analysis', 'Account and identity review', 'Loss sizing by fraud type', 'Board-ready summary'], ['E-commerce', 'Fintech', 'Marketplace']], ['02', 'Prevent', 'Controls & detection', '6–10 weeks', 'Scoped', ['Rule and model tuning', 'Review-queue design', 'Step-up and friction strategy', 'Monitoring dashboards'], ['Fintech', 'Insurance', 'E-commerce']], ['03', 'Respond', 'Incident response', 'On call', 'Retainer or ad hoc', ['Investigator within 30 minutes', 'Containment and evidence capture', 'Regulator and partner liaison', 'Post-incident report'], ['Fintech', 'Insurance', 'Marketplace', 'E-commerce']]];
  const shown = svc.filter(s => f === 'All' || s[6].includes(f));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '72px var(--gutter) 56px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    dark: true,
    num: "01",
    label: "Services",
    title: "Detect. Prevent. Respond.",
    body: "Pick the engagement that matches where you are. Every one is run by the same senior investigators."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '32px var(--gutter) 0',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...window.eyebrowS,
      fontSize: 11,
      color: 'var(--text-muted)',
      marginRight: 8
    }
  }, "Industry"), ['All', 'Fintech', 'E-commerce', 'Insurance', 'Marketplace'].map(x => /*#__PURE__*/React.createElement(ST, {
    key: x,
    selected: f === x,
    onClick: () => setF(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...w,
      padding: '24px var(--gutter) 88px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, shown.map(([n, e, t, d, p, items]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '220px 1fr 220px',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.eyebrowS,
      fontSize: 11,
      color: 'var(--text-accent)'
    }
  }, n, " \xB7 ", e), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, t)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px 24px'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      flex: 'none'
    }
  }), i))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, d, " \xB7 ", p), /*#__PURE__*/React.createElement(SB, {
    variant: n === '03' ? 'danger' : 'primary',
    onClick: () => go(n === '03' ? 'incident' : 'contact'),
    iconRight: /*#__PURE__*/React.createElement(SI, {
      name: "arrow-right",
      size: 15
    })
  }, n === '03' ? 'Report an incident' : 'Start a conversation'))))));
}
window.ServicesPage = ServicesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TraceSteps = __ds_scope.TraceSteps;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
