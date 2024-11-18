"use client";

import React from "react";
import Image from "next/image";

export default function Experience({ image, title, jobTitle, date, description }) {
  return (
    <div className="w-full flex flex-col gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93]">
      <div className="flex items-center gap-4">
        <Image src={image} alt="logo" width={100} height={90} className="rounded-full aspect-square border-2 border-primary p-1 w-20 h-20" />
        <div className="flex flex-col">
          <h4 className="text-white font-semibold text-xl">{title}</h4>
          <p className="text-white font-medium text-base">{jobTitle}</p>
          <p className="text-white font-light text-sm">{date}</p>
        </div>
      </div>
      <p className="text-grey font-medium text-base">{description}</p>
    </div>
  );
}
