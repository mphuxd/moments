import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useBreakpointSize from "@/lib/useBreakpointSize";
import SlideShowDesktop from "./SlideShowDesktop";
import SlideShowMobile from "./SlideShowMobile";
import { SlideProps } from "./SlideMobile";

gsap.registerPlugin(ScrollTrigger);

export interface SlideShowContainerProps {
  slides: SlideProps[];
}

function SlideShowContainer({ slides }: SlideShowContainerProps) {
  const breakPointSize = useBreakpointSize();
  const mobileBreakpoints = ["default", "sm", "md"];
  if (!breakPointSize) return null;
  if (mobileBreakpoints.includes(breakPointSize))
    return <SlideShowMobile slides={slides} />;
  return <SlideShowDesktop slides={slides} />;
}

export default SlideShowContainer;
