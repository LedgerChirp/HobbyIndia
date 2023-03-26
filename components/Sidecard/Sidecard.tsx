import Image from "next/image";
import React from "react";

function Sidecard({ desc, url, image, bgcolr, textcolr, title }: any) {
  console.log(bgcolr, textcolr);
  return (
    <div className="bg-amber-200 w-[90vw] mx-auto sm:grid sm:grid-cols-2 mt-6 md:h-1/2">
      <div className="">
        <Image src={image} alt={title} width={540} height={540} />
      </div>
      <div className="space-y-4 m-4 mx-6 sm:h-full sm:flex sm:flex-col sm:justify-center sm:my-6 lg:w-3/4">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <p className="text-sm">{desc}</p>
        <button className={`bg-[#${bgcolr}] p-2 text-${textcolr} w-full`}>
          Show Now
        </button>
      </div>
    </div>
  );
}

export default Sidecard;
