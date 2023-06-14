"use client";

import {
  Header,
  Hero,
  Card,
  SlideShowContainer,
  News,
  About,
} from "@/components";
import { useEffect, MutableRefObject, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (!self.selector) return;
      const [hero] = self.selector("#hero");
      const [about] = self.selector("#about");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      const movement = -(about.offsetHeight * 0);
      tl.to(about, { y: movement, ease: "none" }, 0);
    }, ref);
    return () => ctx.revert();
  }, [ref]);

  return (
    <main
      ref={ref}
      className="relative mx-auto flex min-h-screen max-w-[1920px] flex-col items-center justify-between"
    >
      <Header />
      <Hero
        src="/images/moments.mp4"
        slogan="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      />
      <About
        heading="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        row1={
          <>
            <Card
              heading="About Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              href="/"
            />
            <Card
              heading="About Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              href="/"
            />
          </>
        }
        row2={
          <>
            <Card
              heading="About Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              href="/"
            />
            <Card
              heading="About Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              href="/"
            />
          </>
        }
      />
      <SlideShowContainer
        slides={[
          {
            id: "lorem",
            location: "start",
            eyebrow: "01 Lorem",
            heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            description1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            image: {
              src: "/images/01.jpg",
              width: 1920,
              height: 1080,
              alt: "01",
            },
          },
          {
            id: "ipsum",
            location: "start",
            eyebrow: "02 Ipsum",
            heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            description1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            image: {
              src: "/images/02.jpg",
              width: 1920,
              height: 1080,
              alt: "02",
            },
          },
          {
            id: "dolor",
            location: "start",
            eyebrow: "03 Dolor",
            heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            description1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            image: {
              src: "/images/03.jpg",
              width: 1920,
              height: 1080,
              alt: "03",
            },
          },
          {
            id: "sit",
            location: "start",
            eyebrow: "04 Sit",
            heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            description1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            image: {
              src: "/images/04.jpg",
              width: 1920,
              height: 1080,
              alt: "04",
            },
          },
          {
            id: "amet",
            location: "start",
            eyebrow: "05 Amet",
            heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            description1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            description2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            image: {
              src: "/images/05.jpg",
              width: 1920,
              height: 1080,
              alt: "05",
            },
          },
        ]}
      />
      <News
        eyebrow="NEWS"
        heading="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        video={{ src: "/images/wildflowers.mp4" }}
      />
    </main>
  );
}
