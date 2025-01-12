import Container from "@/components/Container";
import React from "react";

function Hero() {
  return (
    <div className="hs1 h-screen w-[100vw] flex items-center md:justify-center bg-bg text-secondary">
      <Container>
        <h1 className="uppercase text-6xl lg:text-8xl 2xl:text-9xl font-bold">
          We Build,
          <br /> You <span className="text-primary">Grow.</span>
        </h1>
      </Container>
    </div>
  );
}

export default Hero;
