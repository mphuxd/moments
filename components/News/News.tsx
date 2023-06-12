import React, { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grid } from "../Grid";
import { Heading } from "../Heading";
import { Text } from "../Text";

gsap.registerPlugin(ScrollTrigger);

interface NewsProps extends React.ComponentPropsWithoutRef<"div"> {
  eyebrow: string;
  heading: string;
  description1: string;
  description2: string;
  video: {
    src: string;
  };
}

function News({
  eyebrow,
  heading,
  description1,
  description2,
  video,
  ...props
}: NewsProps) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (!self.selector) return;
      const wildflowers = self.selector(".wildflowers");
      const timeline = gsap.timeline();
      timeline.to(wildflowers, { opacity: 1 }, 0.15);
      ScrollTrigger.create({
        animation: timeline,
        trigger: ref.current,
        start: "top center",
        end: () => `+=${ref.current.offsetHeight}`,
        toggleActions: "play pause pause resume",
      });
    }, ref);
    return () => ctx.revert();
  }, [ref]);

  return (
    <div
      ref={ref}
      className="mt-[100vh] flex h-full w-full flex-col justify-center overflow-hidden text-black opacity-100"
      {...props}
    >
      <div className="h-full w-full">
        <Grid>
          <div className="col-span-full flex w-full flex-col justify-end py-8 md:col-span-full lg:col-span-6 lg:pb-32 xl:col-span-7 2xl:col-span-6">
            <Heading
              as="h4"
              variant="h4"
              className="eyebrow mt-12 uppercase md:mt-0"
            >
              {eyebrow}
            </Heading>
            <div className="mt-8 flex w-full md:mt-20 xl:mt-12 2xl:mt-20">
              <div className="flex flex-col gap-y-8">
                <Heading className="heading" as="h2" variant="h2">
                  {heading}
                </Heading>
                <div className="flex flex-col gap-x-8 gap-y-4 text-sm  xl:flex-row">
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
          <div className="wildflowers col-span-full opacity-0 md:col-span-full lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9 2xl:col-span-4 2xl:col-start-9">
            <video
              className="w-full rounded-lg object-cover md:aspect-video lg:aspect-[4/6]"
              muted
              autoPlay
              loop
            >
              <source src={video.src} />
            </video>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default News;
