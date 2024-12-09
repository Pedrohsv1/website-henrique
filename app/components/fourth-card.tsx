import React from "react";
import { useState } from "react";
import Image from "next/image";

export const FourthCard = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (): void => {
    const textToCopy = "henrique.castriciano@gmail.com"; // Conteúdo do botão
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 4000); // Reseta o estado após 2 segundos
      })
      .catch((err) => console.error("Erro ao copiar:", err));
  };
  return (
    <div className="group md:flex col-span-2 hidden flex-col p-6 justify-between relative w-full h-full overflow-hidden hover:bg-green-50/10">
      <div></div>
      <button
        onClick={handleCopy}
        className="overflow-hidden flex border p-2 gap-2  items-center rounded-full transition-all border-green-950  hover:bg-green-950/30 z-10 font-bold text-green-950"
      >
        <div className="flex bg-green-950 hover:bg-green-950/90 p-2 px-4 gap-2 h-full rounded-full text-green-50 font-normal justify-center items-center">
          <div>{copied ? "Copiado!" : "Copiar"}</div>
          <Image
            src={"/icons/clipboard-fill.svg"}
            alt="Prancheta de copiar"
            height={18}
            width={18}
          />
        </div>
        henrique.castriciano@gmail.com
      </button>
      {/* Image */}
      <Image
        src="/fourth-card.jpg"
        alt="Projeto Alguem Puxa"
        height={300}
        width={300}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[32px]"
      />
      {/* Tag */}
      <p className="left-[24px] top-[24px] bg-green-950 text-green-50 absolute px-4 py-1 border border-green-950 rounded-full w-fit">
        Contatos
      </p>
      {/* Contatos */}
      {/* Gradient */}
      <div className="absolute right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-green-50 to-transparent rounded-b-[32px]"></div>
      {/* Arrow */}
      <div className="filho absolute top-[24px] right-[24px] p-1 rounded-full bg-green-50 transition-transform transform-gpu duration-300 group-hover:bg-green-100 group-hover:rotate-90">
        <Image
          src={"/icons/arrow-up-right-dark.svg"}
          width={24}
          height={24}
          alt={""}
        />
      </div>
    </div>
  );
};
