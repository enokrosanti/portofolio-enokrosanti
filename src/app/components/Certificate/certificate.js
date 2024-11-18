"use client";

import React from "react";
import Image from "next/image";

export default function Certificate({ title, image, issuer, date, link }) {
  return (
    <div className="w-full flex flex-col justify-between gap-4 bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] p-4 rounded-lg border-t-2 border-[#693B93]">
      <div className="rounded-lg border-2 border-primary p-1">
        <Image src={image} alt="certificate-image" width={400} height={200} className="object-cover rounded-md" />
      </div>
      <div className="flex justify-between items-end gap-4">
        <div className="space-y-1">
          <h4 className="font-semibold text-lg text-grey">{title}</h4>
          <p className="font-normal text-base text-white">{issuer}</p>
          <p className="font-normal text-sm text-white">{date}</p>
        </div>
        <a href={link}>
          <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_109_918" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="0" width="30" height="30">
              <path d="M15.5 2.58334V7.75001" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7915 14.2083L3.87484 16.7917L7.74984 19.375L3.87484 23.25L7.74984 27.125L11.6248 23.25L14.2082 27.125L16.7915 14.2083Z"
                fill="white"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M6.36646 6.36664L10.0199 10.0201M24.6332 24.6334L20.9797 20.9799M28.4165 15.5H23.2498M24.6332 6.36664L20.9797 10.0201" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            <g mask="url(#mask0_109_918)">
              <path d="M31 0H9.53674e-07V31H31V0Z" fill="white" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
