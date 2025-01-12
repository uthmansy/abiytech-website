import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import { LOGO } from "@/constants/IMAGES";
import { menuItems } from "@/constants/menu";
import gsap from "gsap";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { CiPaperplane } from "react-icons/ci";

function Header() {
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    gsap.set(menuContainerRef.current, { width: 0 }); // Set initial width to 0
    tl.to(menuContainerRef.current, {
      width: "100%", // Target width (or "25rem" if you want a fixed width)
      duration: 1, // Duration in seconds
      ease: "power2.out", // Optional ease for smoother transition
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10">
        <Container>
          <div className="h-32 flex items-center justify-between">
            <Link href={"/"}>
              <img src={LOGO.src} className="w-auto h-14" alt="" />
            </Link>

            <div className="header-contact-btn rounded-full p-2 bg-dark flex items-center">
              <Link href={"/contact"} className="px-4 uppercase text-sm">
                Get in touch
              </Link>
              <button className="bg-white h-12 w-12 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-200">
                <div className="btn-animated-bg absolute bottom-0 left-0 right-0 h-0 transition-all duration-300 delay-150 bg-primary" />
                <div className="flex flex-col space-y-1 relative">
                  <div className="h-[2px] w-6 bg-dark" />
                  <div className="h-[2px] w-6 bg-dark" />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div
        ref={menuContainerRef}
        className="fixed bg-white top-0 bottom-0 right-0 max-w-md z-20 p-10 py-14 md:px-16 md:pt-28 flex flex-col justify-between text-dark overflow-hidden"
      >
        <button className="absolute top-6 right-6 bg-dark h-12 w-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200">
          <div className="absolute top-0 left-0 right-0 bottom-0 rotate-45 origin-center flex items-center justify-center">
            <div className="h-[2px] w-6 bg-white" />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 -rotate-45 origin-center flex items-center justify-center">
            <div className="h-[2px] w-6 bg-white" />
          </div>
        </button>
        <div>
          <h3 className="mb-16 font-light uppercase">Menu</h3>
          <ul className="flex flex-col text-3xl">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link className="py-4 block" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ButtonLink href="/contact" icon={<CiPaperplane />}>
          Let's Talk
        </ButtonLink>
      </div>
    </>
  );
}

export default Header;
