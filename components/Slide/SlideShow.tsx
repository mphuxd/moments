import React, {
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isEqual } from "lodash";
import Slide from "./Slide";
import { ThemeContext } from "../ThemeProvider";
import { SlideProps } from "./SlideMobile";

export interface SlideShowProps {
  slides: SlideProps[];
}

gsap.registerPlugin(ScrollTrigger);

function SlideShow({ slides }: SlideShowProps) {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [startValues, setStartValues] = useState<Array<string>>([]);
  const { setColorScheme } = useContext(ThemeContext);
  const reversedSlides = [...slides].reverse();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (!self.selector) return;

      const slidesArray = self.selector(".slide").toReversed();
      const numSlides = slidesArray.length;
      const newStartValues: Array<string> = [];

      slidesArray.forEach((slide: any, index: number) => {
        const newStartValue = `${
          index * slide.offsetHeight +
          containerRef.current.getBoundingClientRect().top +
          window.scrollY
        }`;
        newStartValues[index] = newStartValue;

        const settings = {
          scrub: 0.2,
          toggleActions: "play complete none none",
          start: newStartValue,
          end: () => `+=${slide.offsetHeight}`,
          snap: { snapTo: 1 / (numSlides - 1), inertia: false },
        };

        if (index === 0) {
          const timeline = gsap.timeline();
          timeline
            .from(slide, { opacity: 1, duration: 7 })
            .to(slide, { opacity: 0, duration: 1, ease: "power1.out" });
          ScrollTrigger.create({
            animation: timeline,
            onEnter: () => setColorScheme("dark"),
            onLeaveBack: () => setColorScheme("light"),
            ...settings,
          });
        } else if (index !== numSlides - 1 && index !== 0) {
          const timeline = gsap.timeline();
          timeline
            .from(slide, { opacity: 1, duration: 7 })
            .to(slide, { opacity: 0, duration: 1, ease: "power1.out" });
          ScrollTrigger.create({
            animation: timeline,
            ...settings,
          });
        } else {
          const timeline = gsap.timeline();
          timeline.from(slide, { opacity: 1, duration: 7 });
          ScrollTrigger.create({
            animation: timeline,
            onLeave: () => setColorScheme("light"),
            onEnterBack: () => setColorScheme("dark"),
            ...settings,
          });
        }
      });

      if (!isEqual(startValues, newStartValues))
        setStartValues(() => newStartValues);
    }, containerRef);
    return () => ctx.revert();
  }, [startValues, setColorScheme]);

  return (
    <div ref={containerRef} className="w-full bg-theme">
      {reversedSlides.map((slide, index) => {
        const { id: key } = slide;
        return (
          <Slide
            key={key}
            {...slide}
            startValue={startValues[reversedSlides.length - index - 1]}
          />
        );
      })}
    </div>
  );
}

export default SlideShow;
