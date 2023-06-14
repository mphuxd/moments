import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

const useBreakpointSize = () => {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const [breakPointSize, setBreakPointSize] = useState<any>(null);

  useEffect(() => {
    let breakpoint = null;
    if (windowWidth < 640) breakpoint = "default";
    else if (windowWidth >= 640 && windowWidth < 768) breakpoint = "sm";
    else if (windowWidth >= 768 && windowWidth < 1024) breakpoint = "md";
    else if (windowWidth >= 1024 && windowWidth < 1280) breakpoint = "lg";
    else if (windowWidth >= 1280 && windowWidth < 1536) breakpoint = "xl";
    else if (windowWidth >= 1536) breakpoint = "2xl";
    setBreakPointSize(breakpoint);
  }, [windowWidth]);
  return breakPointSize;
};

export default useBreakpointSize;
