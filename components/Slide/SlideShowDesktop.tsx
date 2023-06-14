import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlideProps } from "./SlideMobile";
import SlideShow from "./SlideShow";

gsap.registerPlugin(ScrollTrigger);

export interface SlideShowDesktopProps {
  slides: SlideProps[];
}

function SlideShowDesktop({ slides }: SlideShowDesktopProps) {
  const [containerHeight, setContainerHeight] = useState(0);
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector === undefined) return;
      const slidesRef = self.selector(".slide");
      const height = slidesRef.reduce(
        (totalHeight: number, slide: { offsetHeight: any }) =>
          totalHeight + slide.offsetHeight,
        0
      );

      ref.current.style.height = `${height}px`;
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
        scrub: false,
        end: "bottom top",
      });
      if (height !== containerHeight && height)
        setContainerHeight(() => height);
    }, ref);

    return () => ctx.revert();
  }, [containerHeight]);

  return (
    <div ref={ref} className="w-full overflow-hidden">
      <SlideShow slides={slides} />
    </div>
  );
}

export default SlideShowDesktop;
