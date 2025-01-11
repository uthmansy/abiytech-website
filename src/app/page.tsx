"use client";
import Header from "@/components/Pages/Header";
import { LOGO } from "@/constants/IMAGES";
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

  const elsRef = useRef<HTMLElement[]>([]);

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const els = gsap.utils.toArray(".els");
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(els, {
      xPercent: -100 * (els.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".els-container",
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });
  }, []);

  return (
    <>
      <div className="w-[100vw] overflow-x-hidden">
        <div className="els-container flex w-[300vw]">
          <Header />
          <Header />
          <Header />
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
