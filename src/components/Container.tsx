import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: Props) {
  return <div className={`px-5 lg:px-16 ${className}`}>{children}</div>;
}

export default Container;
