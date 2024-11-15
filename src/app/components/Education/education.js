import React from "react";
import Image from "next/image";

export default function Education({educationalInstitution, major, date}) {
  return (
    <div className="flex flex-col md:flex-row lg:items-center gap-4">
      <Image src={"/education/stemanika.png"} alt="education" width={50} height={50} />
      <div className="flex gap-2 lg:gap-12 flex-col md:flex-row md:justify-end md:gap-3 items-start">
        <div className="flex flex-col">
          <p className="text-white font-medium text-lg">{educationalInstitution}</p>
          <p className="text-grey font-light text-base">{major}</p>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
}
