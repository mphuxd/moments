import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isEqual } from "lodash";
import Slide from "./Slide";
import { ThemeContext } from "../ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

function SlideShow() {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [startValues, setStartValues] = useState<Array<string>>([]);
  const { setColorScheme } = useContext(ThemeContext);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector === undefined) return;
      const NUM_SLIDES = 5;
      const [lorem] = self.selector("#lorem");
      const [ipsum] = self.selector("#ipsum");
      const [dolor] = self.selector("#dolor");
      const [sit] = self.selector("#sit");
      const [amet] = self.selector("#amet");

      const newStartValues: Array<string> = [];
      [lorem, ipsum, dolor, sit, amet].forEach((slide, index) => {
        const newStartValue = `${
          index * slide.offsetHeight +
          containerRef.current.getBoundingClientRect().top +
          window.scrollY
        }`;

        newStartValues[index] = newStartValue;

        if (index === 0) {
          const timeline = gsap.timeline();
          timeline
            .from(slide, { opacity: 1, duration: 7 })
            .to(slide, { opacity: 0, duration: 1, ease: "power1.out" });
          ScrollTrigger.create({
            animation: timeline,
            start: newStartValue,
            toggleActions: "play complete none none",
            scrub: 0.2,
            onEnter: () => setColorScheme("dark"),
            onLeaveBack: () => setColorScheme("light"),
            end: () => `+=${slide.offsetHeight}`,
            snap: { snapTo: 1 / (NUM_SLIDES - 1), inertia: false },
          });
        } else if (index !== NUM_SLIDES - 1 && index !== 0) {
          const timeline = gsap.timeline();
          timeline
            .from(slide, { opacity: 1, duration: 7 })
            .to(slide, { opacity: 0, duration: 1, ease: "power1.out" });
          ScrollTrigger.create({
            animation: timeline,
            start: newStartValue,
            toggleActions: "play complete none none",
            scrub: 0.2,
            end: () => `+=${slide.offsetHeight}`,
            snap: { snapTo: 1 / (NUM_SLIDES - 1), inertia: false },
          });
        } else {
          const timeline = gsap.timeline();
          timeline.from(slide, { opacity: 1, duration: 7 });
          ScrollTrigger.create({
            animation: timeline,
            start: newStartValue,
            toggleActions: "play complete none none",
            scrub: 0.2,
            end: () => `+=${slide.offsetHeight}`,
            onLeave: () => setColorScheme("light"),
            onEnterBack: () => setColorScheme("dark"),
            snap: { snapTo: 1 / (5 - 1), inertia: false },
          });
        }
      });

      if (!isEqual(startValues, newStartValues)) setStartValues(newStartValues);
    }, containerRef);
    return () => ctx.revert();
  }, [startValues, setColorScheme]);

  return (
    <div ref={containerRef} className="w-full bg-theme">
      <Slide
        id="amet"
        location="start"
        eyebrow="05 Amet"
        heading="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        image={{
          src: "/images/05.jpg",
          width: 1920,
          height: 1080,
          alt: "05",
        }}
        startValue={startValues[4]}
      />
      <Slide
        id="sit"
        location="end"
        eyebrow="04 Sit"
        heading="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        image={{
          src: "/images/04.jpg",
          width: 1920,
          height: 1080,
          alt: "04",
        }}
        startValue={startValues[3]}
      />
      <Slide
        id="dolor"
        eyebrow="03 Dolor"
        heading="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        image={{
          src: "/images/03.jpg",
          width: 1920,
          height: 1080,
          alt: "03",
        }}
        startValue={startValues[2]}
      />
      <Slide
        id="ipsum"
        eyebrow="02 Ipsum"
        heading="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        image={{
          src: "/images/02.jpg",
          width: 1920,
          height: 1080,
          alt: "02",
        }}
        startValue={startValues[1]}
      />
      <Slide
        id="lorem"
        eyebrow="01 Lorem"
        heading="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        image={{
          src: "/images/01.jpg",
          width: 1920,
          height: 1080,
          alt: "01",
        }}
        startValue={startValues[0]}
      />
    </div>
  );
}

export default SlideShow;
