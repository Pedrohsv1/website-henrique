import React from "react";
import Image from "next/image";

export const SecondCard = () => {
  return (
    <div className="group relative w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-full object-cover rounded-[32px]"
      >
        <source src="/video-pio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="left-[24px] top-[24px] bg-green-950 text-green-50 absolute px-4 py-1 border border-green-950 rounded-full w-fit">
        Seções
      </p>
      <p className="absolute  w-full flex justify-center group-hover:translate-y-[-4px] transition-transform bottom-[24px] left-1/2 -translate-x-1/2 z-10">
        <b>Divisão por Idade</b>
      </p>
      <div className="absolute right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-green-100 to-transparent rounded-b-[32px]"></div>
      <div className="absolute top-[24px] right-[24px] p-1 rounded-full bg-green-950 transition-transform transform-gpu duration-300 group-hover:bg-green-900 group-hover:rotate-90">
        <Image
          src={"/icons/arrow-up-right.svg"}
          width={24}
          height={24}
          alt={""}
        />
      </div>
    </div>
  );
};