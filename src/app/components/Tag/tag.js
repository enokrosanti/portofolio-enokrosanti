"use client";

import React from "react";
import Image from "next/image";

export default function Tag({image, tag, link}) {
  return (
    <a href={link} className="flex items-center gap-2 bg-[#11071F] py-2 px-6 rounded-full border border-primary cursor-pointer group hover:shadow-primary hover:shadow-md hover:transform hover:-translate-y-1 duration-300">
      <Image src={image} alt="tags" width={24} height={24} />
      <p className="font-normal text-sm text-[#C0C4CE]">{tag}</p>
    </a>
  );
}
