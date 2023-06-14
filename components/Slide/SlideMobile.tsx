import React, { MutableRefObject, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import cx from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grid } from "../Grid";
import { Heading } from "../Heading";
import { Text } from "../Text";

gsap.registerPlugin(ScrollTrigger);

interface SlideProps extends React.ComponentPropsWithoutRef<"div"> {
  eyebrow: string;
  heading: string;
  description1: string;
  description2: string;
  location?: "start" | "end";
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  video?: {
    src: string;
  };
}

function SlideMobile({
  eyebrow,
  heading,
  description1,
  description2,
  location = "start",
  image,
  video,
  ...props
}: SlideProps) {
  const myRef = useRef() as MutableRefObject<HTMLDivElement>;
  const locationClassNames = location === "start" ? "" : "justify-end";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from(".eyebrow", { y: 20, opacity: 0, duration: 0.2 }, 0)
        .from(".heading", { y: 30, opacity: 0 }, ">")
        .from(".description", { y: 30, opacity: 0 }, "<0.2");

      ScrollTrigger.create({
        animation: timeline,
        trigger: myRef.current,
        start: "top center",
        toggleActions: "play complete complete reset",
        end: () => `+=${myRef.current.offsetHeight}`,
      });
    }, myRef);
    return () => ctx.revert();
  }, [myRef]);

  return (
    <div
      ref={myRef}
      className="slide my-auto w-full overflow-hidden opacity-100"
      {...props}
    >
      <Grid>
        {/* frame */}
        <div
          className={cx(
            "relative col-span-full my-auto flex h-full  min-h-[700px] flex-col justify-center overflow-hidden pb-8 pt-16 text-white md:pb-8 md:pt-20 xl:py-20"
          )}
        >
          {/* container */}
          <div className="relative h-full max-h-[1080px] overflow-hidden rounded-lg">
            {/* content */}
            <div className="absolute inset-0 z-10 flex max-h-[1080px] w-full flex-col justify-between px-4 pb-4 pt-4 md:p-8 md:pb-8 xl:pb-20 2xl:pb-32">
              <div className="eyebrow">
                <Heading as="h4" variant="h4" className="uppercase">
                  {eyebrow}
                </Heading>
              </div>
              <div className={cx("flex w-full", locationClassNames)}>
                <div className="flex flex-col gap-y-4 md:gap-y-8 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
                  <div className="heading">
                    <Heading as="h2" variant="h2">
                      {heading}
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-x-8 gap-y-4 text-sm md:flex-row">
                    <Text variant="base" className="description">
                      {description1}
                    </Text>
                    <Text variant="base" className="description">
                      {description2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* image/bg */}
            <div className="absolute inset-0 max-h-[1080px] ">
              {image && !video && (
                <Image
                  className="absolute inset-0 h-screen max-h-[1080px] min-h-[700px] w-full object-cover"
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              )}
              {!image && video && (
                <video
                  className="absolute inset-0 aspect-[16/10] h-screen max-h-[1080px]  w-full overflow-hidden object-cover"
                  muted
                  autoPlay
                  loop
                >
                  <source src={video.src} />
                </video>
              )}
              <div
                className={cx("overlay h-full w-full bg-black opacity-30")}
              />
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default SlideMobile;
