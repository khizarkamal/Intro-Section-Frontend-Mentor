import React from "react";
import { Link, SideNavigationProps } from "@/utils/types";
import Image from "next/image";
import iconClose from "@/public/icon-close-menu.svg";
import { links } from "@/utils/data";
import LinkComponent from "./LinkComponent";
import Button from "./Button";

const SideNavigation = ({ closeNavigation }: SideNavigationProps) => {
  return (
    <div className="p-4 block fixed right-0 w-2/3 min-h-screen bg-white z-30 top-0 max-w-96 md:hidden">
      <div className="flex justify-end">
        <Image
          onClick={closeNavigation}
          className="cursor-pointer"
          src={iconClose}
          alt="close-icon"
        />
      </div>
      <div className="pb-4">
        <ul className="px-3 py-5 flex flex-col gap-4">
          {links.map((link: Link) => {
            return <LinkComponent key={link.id} link={link} mobile={true} />;
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Button
          styles="cursor-pointer bg-none border-none text-base text-black capitalize "
          text="login"
        />
        <Button
          styles="w-full cursor-pointer border border-black self-center rounded-xl text-black capitalize bg-none py-3 text-center hover:text-white hover:bg-black transition duration-500"
          text="Register"
        />
      </div>
    </div>
  );
};

export default SideNavigation;
