"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ projectName, projectImage, description, link }) {
  return (
    <div className="relative z-20 w-full mt-8 group hover:cursor-pointer">
      <p className="font-semibold text-base text-[#9857D3]">Featured Project</p>
      <h4 className="font-semibold text-xl text-grey">{projectName}</h4>
      <div className="relative bg-custom-radial p-6 rounded-xl overflow-hidden mt-4">
        <div className="absolute inset-0 bg-custom-radial blur-lg rounded-xl -z-10"></div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <Image src={projectImage} alt="project-image" width={580} height={362} className="rounded-[15px] w-full border-t-2 border-[#693B93]" />
          <div className="flex flex-col justify-between gap-4 w-full">
            <p className="font-medium text-lg text-grey w-full">{description}</p>
            <Link href={link || "/"} className="w-[119px] h-[33px] flex items-center justify-center text-white font-medium text-xs text-center bg-[#2C1250] py-3 rounded-lg border border-[#693B93]">
              VISIT PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
