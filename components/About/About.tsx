import React, { useRef, useEffect, type MutableRefObject } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@/lib/useWindowSize";
import { Grid } from "../Grid";
import { Heading } from "../Heading";
import { Text } from "../Text";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  heading: string;
  description: string;
  row1: React.ReactNode;
  row2: React.ReactNode;
}

function About({ heading, description, row1, row2 }: AboutProps) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { width, height } = useWindowSize();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      if (!ScrollTrigger.isInViewport(".heading")) {
        timeline
          .from(".heading", { y: 50, ease: "power2.out", opacity: 0 }, 0)
          .from(".description", { y: 30, ease: "power2.out", opacity: 0 }, 0.1)
          .from(".image", { y: 40, ease: "power1.out", opacity: 0 }, 0.2);

        ScrollTrigger.create({
          animation: timeline,
          trigger: ".heading",
          start: "top bottom",
          toggleActions: "play complete complete reset",
        });
      }
    }, ref);
    return () => ctx.revert();
  }, [ref, width, height]);

  return (
    <div
      ref={ref}
      id="about"
      className="z-10 mt-8 w-full bg-neutral-200 py-16 lg:pt-32 2xl:mt-0"
    >
      <Grid>
        <div className="col-span-12 flex flex-col">
          <div className="flex flex-col lg:flex-row lg:gap-x-8 2xl:gap-x-8">
            <div className="flex w-full flex-col justify-center text-black lg:w-1/2">
              <div className="2xl:w-2/3">
                <Heading as="h2" variant="h2" className="heading">
                  {heading}
                </Heading>
                <div className="mt-4 w-full">
                  <Text className="description" variant="base">
                    {description}
                  </Text>
                </div>
              </div>
            </div>
            <div className="image mt-8 w-full md:mx-0 lg:aspect-video lg:w-1/2 xl:aspect-video">
              <Image
                src="/images/el-capitan.png"
                width={5120}
                height={3200}
                alt="El Capitan"
              />
            </div>
          </div>
          <div className="flex flex-col pt-8 md:gap-x-4 lg:flex-col lg:gap-x-8 xl:flex-row 2xl:py-24">
            <div className="flex flex-col sm:flex-row sm:gap-x-4 lg:gap-x-8">
              {row1}
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-x-4 lg:gap-x-8">
              {row2}
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default About;
