import { SubLink } from "@/utils/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SubItem = ({ subLink }: { subLink: SubLink }) => {
  return (
    <Link href={subLink.link} className="flex gap-4 items-center">
      {subLink.icon && (
        <span>
          <Image src={subLink.icon} alt={subLink.text} />
        </span>
      )}
      <span className="text-sm md:text-base hover:text-black transition-all duration-500">
        {subLink.text}
      </span>
    </Link>
  );
};

export default SubItem;
