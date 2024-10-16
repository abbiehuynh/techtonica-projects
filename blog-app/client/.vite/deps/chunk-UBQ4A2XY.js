import {
  useButtonProps
} from "./chunk-GCOSHMHJ.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-2RD245ZT.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-bootstrap/esm/Button.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var defaultProps = {
  variant: "primary",
  active: false,
  disabled: false
};
var Button = React.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return (0, import_jsx_runtime.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref,
    className: (0, import_classnames.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && "disabled")
  });
});
Button.displayName = "Button";
Button.defaultProps = defaultProps;
var Button_default = Button;

export {
  Button_default
};
//# sourceMappingURL=chunk-UBQ4A2XY.js.map
