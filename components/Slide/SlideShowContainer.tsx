import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useBreakpointSize from "@/lib/useBreakpointSize";
import SlideShowDesktop from "./SlideShowDesktop";
import SlideShowMobile from "./SlideShowMobile";

gsap.registerPlugin(ScrollTrigger);

function SlideShowContainer() {
  const breakPointSize = useBreakpointSize();
  const mobileBreakpoints = ["default", "sm", "md"];
  if (!breakPointSize) return null;
  if (mobileBreakpoints.includes(breakPointSize)) return <SlideShowMobile />;
  return <SlideShowDesktop />;
}

export default SlideShowContainer;
