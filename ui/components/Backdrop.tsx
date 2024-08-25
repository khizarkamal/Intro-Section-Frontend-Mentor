import React from "react";
import { SideNavigationProps } from "@/utils/types";

const Backdrop = ({ closeNavigation }: SideNavigationProps) => {
  return (
    <div
      onClick={closeNavigation}
      className="fixed block top-0 left-0 right-0 bottom-0 w-screen h-screen bg-backdropColor z-10 md:hidden"
    ></div>
  );
};

export default Backdrop;
