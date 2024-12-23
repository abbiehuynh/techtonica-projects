import {
  divWithClassName_default
} from "./chunk-5KQIKM7H.js";
import {
  CardHeaderContext_default
} from "./chunk-XBRBJSYQ.js";
import {
  createWithBsPrefix
} from "./chunk-72HI7HDL.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-2RD245ZT.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-bootstrap/esm/Card.js
var import_classnames3 = __toESM(require_classnames());
var React3 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var CardImg = React.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return (0, import_jsx_runtime.jsx)(Component, {
      ref,
      className: (0, import_classnames.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames2 = __toESM(require_classnames());
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var CardHeader = React2.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return (0, import_jsx_runtime2.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime2.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames2.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var DivStyledAsH6 = divWithClassName_default("h6");
var CardBody = createWithBsPrefix("card-body");
var CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});
var CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6
});
var CardLink = createWithBsPrefix("card-link", {
  Component: "a"
});
var CardText = createWithBsPrefix("card-text", {
  Component: "p"
});
var CardFooter = createWithBsPrefix("card-footer");
var CardImgOverlay = createWithBsPrefix("card-img-overlay");
var defaultProps = {
  body: false
};
var Card = React3.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return (0, import_jsx_runtime3.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames3.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? (0, import_jsx_runtime3.jsx)(CardBody, {
      children
    }) : children
  });
});
Card.displayName = "Card";
Card.defaultProps = defaultProps;
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader_default,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});

export {
  CardImg_default,
  Card_default
};
//# sourceMappingURL=chunk-7ZUDJ5E2.js.map
