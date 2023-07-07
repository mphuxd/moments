import { MutableRefObject, useLayoutEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideMobile, { SlideProps } from "./SlideMobile";
import { ThemeContext } from "../ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

export interface SlideShowMobileProps {
  slides: SlideProps[];
}

function SlideShowMobile({ slides }: SlideShowMobileProps) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { setColorScheme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector === undefined) return;
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setColorScheme("dark"),
        onLeave: () => setColorScheme("light"),
        onLeaveBack: () => setColorScheme("light"),
        onEnterBack: () => setColorScheme("dark"),
      });
    }, ref);
    return () => ctx.revert();
  }, [setColorScheme]);

  return (
    <div ref={ref} className="w-full bg-theme">
      <div className="w-full overflow-hidden">
        {slides.map((slide) => {
          const { id } = slide;
          return <SlideMobile key={id} {...slide} />;
        })}
      </div>
    </div>
  );
}

export default SlideShowMobile;
