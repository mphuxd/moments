import React from "react";
import cx from "classnames";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

function Grid({ children, className }: GridProps) {
  return (
    <div
      className={cx(
        "grid h-full w-full max-w-[1920px] grid-cols-12 gap-x-4 px-4 md:gap-x-8 md:px-8 2xl:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Grid;
