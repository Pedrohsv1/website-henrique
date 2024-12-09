import React from "react";
import Image from "next/image";

export const ThirdCard = () => {
  return (
    <a
      href="#projects"
      className="group relative w-full h-full overflow-hidden md:col-span-1 col-span-2 hover:bg-green-50/10"
    >
      {/* Image */}
      <Image
        src="/projeto-pio.png"
        alt="Projeto Alguém Puxa"
        height={300}
        width={300}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[32px]"
      />
      {/* Tag */}
      <p className="text-sm md:text-base md:left-[24px] md:top-[24px] left-[16px] top-[16px] bg-green-50 text-green-950 absolute px-4 py-1 border border-green-50 rounded-full w-fit">
        Projetos
      </p>
      {/* Name */}
      <p className="text-sm md:text-base absolute w-full flex justify-center group-hover:translate-y-[-4px] transition-transform text-green-50 md:bottom-[24px] bottom-[16px] left-1/2 -translate-x-1/2 z-10">
        <b>Projeto Pioneiro</b>
      </p>
      {/* Gradient */}
      <div className="absolute right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-green-950 to-transparent rounded-b-[32px]"></div>
      {/* Arrow */}
      <div className=" filho absolute md:top-[24px] md:right-[24px] right-[16px] top-[16px] p-1 rounded-full bg-green-50 transition-transform transform-gpu duration-300 group-hover:bg-green-100 group-hover:rotate-90">
        <Image
          src={"/icons/arrow-up-right-dark.svg"}
          width={24}
          height={24}
          alt={""}
        />
      </div>
    </a>
  );
};
