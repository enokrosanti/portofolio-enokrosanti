import React from "react";

export default function skill({skill, description}) {
  return (
    <li className="flex flex-col text-white font-medium text-base">
      {" "}
      - {skill}
      <p className="text-sm text-grey">{description}</p>
    </li>
  );
}
