import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const Button = ({
  onClick = () => {},
  className,
  children,
  full = false,
  bgColor = "primary",
  heightSize = "default",
  widthSize = "default",
}) => {
  let bgClassname = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-primary";
      break;
    case "secondary":
      bgClassname = "bg-secondary";
      break;
    case "more":
      bgClassname = "bg-whiteColor";
      break;
    case "slate":
      bgClassname = "bg-slateColor";
      break;
    case "empty":
      bgClassname = "bg-transparent";
      break;
    default:
      break;
  }
  let height = "py-3";
  switch (heightSize) {
    case "tallest":
      height = "py-8";
      break;
    case "tall":
      height = "py-5";
      break;
    case "default":
      height = "py-3";
      break;
    case "short":
      height = "py-2";
      break;
    case "shortest":
      height = "py-1";
      break;

    default:
      break;
  }
  let width = "px-6";
  switch (widthSize) {
    case "largest":
      width = "px-14";
      break;
    case "large":
      width = "px-8";
      break;
    case "default":
      width = "px-6";
      break;
    case "small":
      width = "px-4";
      break;

    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${height} ${width} rounded-lg capitalize ${
        full ? "w-full" : ""
      } mt-auto ${bgClassname} ${className} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary", "secondary", "more", "slate", "empty"]),
  heightSize: PropTypes.oneOf([
    "tallest",
    "tall",
    "default",
    "short",
    "shortest",
  ]),
  widthSize: PropTypes.oneOf(["largest", "large", "default", "small"]),
};
export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponent,
});
