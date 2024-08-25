"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.svg";
import menuIcon from "@/public/icon-menu.svg";
import Image from "next/image";
import SideNavigation from "./SideNavigation";
import Backdrop from "./Backdrop";
import Button from "./Button";
import { links } from "@/utils/data";
import { Link } from "@/utils/types";
import LinkComponent from "./LinkComponent";

const Navigation = () => {
  const [activeSideNavigation, setActiveSideNavigation] = useState(false);

  useEffect(() => {
    if (activeSideNavigation) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable body scroll
      document.body.style.overflow = "";
    }

    // Cleanup on unmount or when isSidebarOpen changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSideNavigation]);

  return (
    <nav>
      {activeSideNavigation && (
        <Backdrop closeNavigation={() => setActiveSideNavigation(false)} />
      )}
      {/* --------- */}
      <div className="flex items-center justify-between px-4 py-5 md:p-8">
        <div className="flex gap-8 items-center">
          <div>
            <Image src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex md:items-center md:gap-8">
            {links.map((link: Link) => {
              return <LinkComponent key={link.id} link={link} mobile={false} />;
            })}
          </div>
        </div>
        <div className="hidden md:flex md:items-center gap-8 ">
          <Button
            styles="text-black text-base capitalize cursor-pointer"
            text="Login"
          />
          <Button
            styles="cursor-pointer border border-black rounded-xl text-base text-black capitalize bg-none px-5 py-2 text-center hover:text-white hover:bg-black transition duration-500"
            text="Register"
          />
        </div>
        <div className="w-8 h-8 flex items-center justify-center md:hidden">
          <button
            onClick={() => setActiveSideNavigation(!activeSideNavigation)}
          >
            <Image
              src={menuIcon}
              alt="Hamburder Menu"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {activeSideNavigation && (
        <SideNavigation
          closeNavigation={() => setActiveSideNavigation(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
