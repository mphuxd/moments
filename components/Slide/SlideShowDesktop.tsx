import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideShow from "./SlideShow";

gsap.registerPlugin(ScrollTrigger);

function SlideShowContainer() {
  const [containerHeight, setContainerHeight] = useState(0);
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector === undefined) return;
      const slides = self.selector(".slide");
      const height = slides.reduce(
        (totalHeight: number, slide: { offsetHeight: any }) =>
          totalHeight + slide.offsetHeight,
        0
      );
      console.log(`height: ${height}`);
      console.log(`container: ${containerHeight}`);
      ref.current.style.height = `${height}px`;
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: false,
        end: "bottom top",
      });
      if (height !== containerHeight && height) setContainerHeight(height);
    }, ref);

    return () => ctx.revert();
  }, [containerHeight]);

  return (
    <div ref={ref} className="w-full overflow-hidden">
      <SlideShow />
    </div>
  );
}

export default SlideShowContainer;
