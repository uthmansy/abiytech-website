import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon: ReactNode;
  href: string;
}

function ButtonLink({ children, icon, href }: Props) {
  return (
    <Link
      href={href}
      className="header-contact-btn rounded-full p-1 bg-dark flex items-center justify-between w-fit"
    >
      <span className="px-4 uppercase text-sm text-white">{children}</span>
      <button className="bg-white h-12 w-12 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-200">
        <div className="btn-animated-bg absolute bottom-0 left-0 right-0 h-0 transition-all duration-300 delay-150 bg-primary" />
        <div className="relative">{icon}</div>
      </button>
    </Link>
  );
}

export default ButtonLink;
