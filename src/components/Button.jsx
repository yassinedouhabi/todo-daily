import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  variant = "primary",
  size = "medium",
  icon: Icon,
  iconPosition = "left",
  className = "",
  children,
  as: Element = "button",
  to = "",
  ...props
}) => {
  const Component = Element === "link" && to ? Link : Element;

  const baseClasses =
    "inline-flex items-center justify-center font-medium px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-red-500 text-white hover:bg-red-700 focus:ring-red-500",
    secondary:
      "bg-white text-red-500 hover:bg-red-500 hover:text-white hover:border-white focus:ring-red-500",
    tertiary: "bg-green-500 text-white hover:bg-green-700 focus:ring-green-500",
    danger: "bg-red-500 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-700 focus:ring-green-500",
  }[variant];

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[size];

  const iconPositionClasses = Icon
    ? iconPosition === "left"
      ? "flex-row"
      : "flex-row-reverse"
    : "";

  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    iconPositionClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      to={Component === Link ? to : undefined}
      {...props}
      aria-label={children}
    >
      {Icon && iconPosition === "left" && <Icon className="mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="ml-2" />}
    </Component>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "danger",
    "success",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["button", "link"]),
  to: PropTypes.string,
};

export default Button;
