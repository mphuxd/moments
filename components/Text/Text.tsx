import React from "react";
import cx from "classnames";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  as?: React.ElementType<any>;
  variant?: "base" | "large" | "small";
  className?: string;
}

function Text({
  children,
  as = "p",
  variant = "base",
  className,
  ...props
}: TextProps) {
  const Component = as;

  const classNames = cx(
    className,
    { "text--small": variant === "small" },
    { "text--base": variant === "base" },
    { "text--large": variant === "large" }
  );

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

export default Text;
