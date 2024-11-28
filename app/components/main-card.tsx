import React from "react";
import Image from "next/image";

export const MainCard = () => {
  return (
    <div className="p-8 flex flex-col gap-4 col-span-4 w-full h-full rounded-[32px] bg-green-100 overflow-hidden relative">
      <p className="px-4 py-1 border border-green-950 rounded-full w-fit">
        Escotismo
      </p>
      <h1 className="text-3xl max-w-[550px]">
        <b>
          Um movimento de jovens e para jovens que busca a construção de um
          mundo melhor!
        </b>
      </h1>
      <p className="max-w-[650px] text-sm">
        O escoteiro é alguém que segue os princípios do movimento escoteiro,
        promovendo valores de serviço, cidadania, respeito à natureza e
        desenvolvimento pessoal.
      </p>
      <Image
        src={"/card-boy.png"}
        alt={""}
        height={770}
        width={1110.836}
        className="absolute right-[-250px] bottom-[-150px] z-10"
      />
      <Image
        src={"/curves.svg"}
        alt={""}
        height={770}
        width={1110.836}
        className="absolute right-[-250px] bottom-[-100px]"
      />
      <a
        href="#metodo"
        className="p-4 text-base bg-green-950 text-green-50 w-fit flex justify-center items-center rounded-full gap-4 cursor-pointer hover:bg-green-950/90 transition-all"
      >
        Conheça o método escoteiro
        <Image
          src={"/icons/arrow-up-right.svg"}
          alt={"Seta para cima e direita"}
          height={24}
          width={24}
          className="text-green-50"
        />
      </a>
    </div>
  );
};
