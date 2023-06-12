import React from "react";
import cx from "classnames";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  as?: React.ElementType<any>;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

function Heading({
  children,
  as = "h1",
  variant,
  className,
  ...props
}: HeadingProps) {
  const Component = as;

  const classNames = cx(
    className,
    { "heading--1": variant === "h1" },
    { "heading--2": variant === "h2" },
    { "heading--3": variant === "h3" },
    { "heading--4": variant === "h4" },
    { "heading--5": variant === "h5" },
    { "heading--6": variant === "h6" }
  );

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

export default Heading;
