"use client";

import React, { useRef, useEffect, type MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@/lib/useWindowSize";
import { Heading } from "../Heading";
import { Grid } from "../Grid";
import { Text } from "../Text";
import { Button } from "../Button";

gsap.registerPlugin(ScrollTrigger);

export interface HeroProps {
  src: string;
  slogan: string;
  description: string;
}

function Hero({ src, slogan, description }: HeroProps) {
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { width, height } = useWindowSize();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline(
          ScrollTrigger.create({
            trigger: videoRef.current,
            start: "top top",
          })
        )
        .to(videoRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power4.out",
        });

      const timeline = gsap.timeline();
      if (!ScrollTrigger.isInViewport(".heading")) {
        timeline
          .from(".heading", { y: 25, ease: "power1.out" }, 0)
          .from(
            ".description",
            { y: 30, ease: "power1.out", opacity: 0 },
            "<0.1"
          )
          .from(".cta", { y: 25, ease: "power1.out", opacity: 0 }, "<0.2");

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
    <div id="hero" ref={ref} className="relative mt-24 h-full w-full 2xl:my-32">
      <Grid>
        <video
          ref={videoRef}
          className="z-0 col-span-full h-full overflow-hidden rounded-lg object-cover opacity-0 2xl:aspect-video 2xl:w-full"
          loop
          autoPlay
          muted
        >
          <source src={src} />
        </video>
        <div className="col-span-full my-8 flex flex-col md:my-12 md:gap-x-8 lg:my-20 lg:flex-row">
          <div className="lg:w-1/2 xl:px-16">
            <Heading as="h1" variant="h1" className="heading">
              {slogan}
            </Heading>
            <div className="cta my-6">
              <Button label="Click Me" />
            </div>
          </div>
          <div className="description mt-4 lg:mt-0 lg:w-1/2 xl:pr-16 2xl:mt-2">
            <Text as="span" variant="large">
              {description}
            </Text>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Hero;
