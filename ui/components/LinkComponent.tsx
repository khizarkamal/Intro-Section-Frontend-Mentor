"use client";

import React, { useState } from "react";
import { CustomLinkComponentType, SubLink } from "@/utils/types";
import Image from "next/image";
import iconArrowDown from "@/public/icon-arrow-down.svg";
import iconArrowUp from "@/public/icon-arrow-up.svg";
import SubItem from "./SubItem";

const LinkComponent = ({ link, mobile }: CustomLinkComponentType) => {
  const [activeLink, setActiveLink] = useState(false);
  return (
    <li
      onClick={() => setActiveLink(!activeLink)}
      className="list-none cursor-pointer relative text-base text-gray capitalize font-medium"
    >
      <div
        className={`flex flex-row ${mobile ? "gap-4" : " gap-2"} items-center`}
      >
        <span className="hover:text-black transition-all duration-500">
          {link.text}
        </span>
        {link.subLinks && (
          <span className="block">
            <Image
              src={activeLink ? iconArrowUp : iconArrowDown}
              alt={activeLink ? "chevron up" : "chevron down"}
            />
          </span>
        )}
      </div>
      {activeLink && link.subLinks && (
        <ul
          className={`p-3 flex flex-col gap-3 ${
            !mobile
              ? `absolute top-8 w-max shadow-2xl px-4 py-5 z-50 rounded-xl -right-5 bg-white `
              : "static"
          }`}
        >
          {link.subLinks.map((subLink: SubLink, index: number) => {
            return <SubItem key={index} subLink={subLink} />;
          })}
        </ul>
      )}
    </li>
  );
};

export default LinkComponent;
