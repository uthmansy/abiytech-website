import { LOGO } from "@/constants/IMAGES";
import React from "react";

function Header() {
  return (
    <div className="els font-bold uppercase text-9xl flex items-center justify-center min-h-screen bg-bg relative w-[100vw]">
      <img
        src={LOGO.src}
        className="w-16 h-auto absolute top-10 left-24"
        alt=""
      />
      <div>
        <h1>
          We Build<span className="">,</span>
        </h1>
        <h1>
          You <span className="text-primary">Grow.</span>
        </h1>
      </div>

      <div className="bg-dark absolute bottom-0 right-0 left-0 h-48">
        {/* <div className="bg-grid-lines bg-grid-large absolute top-0 left-0 right-0 bottom-0 opacity-10"></div> */}
      </div>
    </div>
  );
}

export default Header;
