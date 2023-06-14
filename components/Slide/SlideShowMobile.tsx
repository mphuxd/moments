import { MutableRefObject, useLayoutEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideMobile from "./SlideMobile";
import { ThemeContext } from "../ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

function SlideShowContainer() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { setColorScheme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector === undefined) return;
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        markers: true,
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
        <SlideMobile
          id="lorem"
          location="start"
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
        />
        <SlideMobile
          id="ipsum"
          location="start"
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
        />

        <SlideMobile
          id="dolor"
          location="start"
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
        />
        <SlideMobile
          id="sit"
          location="start"
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
        />
        <SlideMobile
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
        />
      </div>
    </div>
  );
}

export default SlideShowContainer;
