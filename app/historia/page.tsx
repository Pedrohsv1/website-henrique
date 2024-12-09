import React from "react";
import Image from "next/image";
const History = () => {
  return (
    <main className=" p-6 max-w-[1024px] w-full flex flex-col scroll-smooth gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl ">
          <b>O inicio de tudo: Henrique Castriciano de Souza</b>
        </h1>
        <div className="grid md:grid-cols-[175px_1fr]  gap-8">
          <div className="w-full flex justify-center items-center">
            <div className="relative w-[175px] h-[184px]">
              <Image
                alt="Henrique Castriciano"
                src="/history/henrique.jpg"
                fill
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl  text-green-900">
              <b>Um gigante da cultura e política potiguar</b>
            </h2>
            <p>
              Henrique Castriciano de Souza foi uma figura multifacetada que
              deixou um legado indelével no Rio Grande do Norte. Poeta,
              teatrólogo, jornalista, político e fundador de diversas
              instituições de ensino, Castriciano se destacou como um dos
              maiores intelectuais do estado. Sua atuação política foi marcante,
              tendo sido vice-governador por 10 anos e presidente da
              Constituinte Estadual de 1915. Além disso, foi um entusiasta da
              educação, fundando a Escola Doméstica de Natal e o Colégio
              Henrique Castriciano, contribuindo significativamente para o
              desenvolvimento educacional do estado.
            </p>
          </div>
        </div>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
};

export default History;
