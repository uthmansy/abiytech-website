"use client";
import Header from "@/components/Pages/Header";
import Hero from "@/components/Sections/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      //@ts-ignore
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        tablet: {
          breakpoint: 0,
        },
      });
    })();
  }, []);

  useLayoutEffect(() => {
    const hs1 = gsap.utils.toArray(".hs1");
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(hs1, {
      xPercent: -100 * (hs1.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".hs1-container",
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });
  }, []);

  return (
    <>
      <Header />
      <div className="w-[100vw] overflow-x-hidden">
        <div className="hs1-container flex w-[300vw]">
          <Hero />
          <Hero />
          <Hero />
        </div>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
        expedita quidem odit perspiciatis, suscipit asperiores consequuntur
        incidunt quis quae, non distinctio. Dolorem, veritatis repudiandae.
        Incidunt quo impedit molestiae culpa?
      </div>
    </>
  );
}
