import React from "react";
import { PhotoGallery } from "./galery";
import { photosURL } from "../data/fotosUrls";

export const Method = () => {
  return (
    <section id="method" className="flex flex-col w-max-[1024px]">
      <h1 className="text-3xl font-bold mb-4">
        Como funciona o método escoteiro?
      </h1>
      <h2 className="font-bold text-2xl text-green-900 mb-2">
        Nosso jeitinho de ser
      </h2>
      <p className="">
        O Movimento Escoteiro é um espaço dinâmico e envolvente para jovens, que
        se desenvolve com a ajuda de voluntários adultos. Com atividades
        variadas e atraentes, o Escotismo encoraja os jovens a assumirem seu
        próprio crescimento e a se envolverem na comunidade, formando lideranças
        comprometidas com o próximo e com o meio ambiente. É no grupo escoteiro
        que tudo acontece, onde os escotistas guiam as atividades enquanto os
        jovens, divididos por faixa etária, aprendem habilidades e valores
        essenciais para a vida.
      </p>
      <PhotoGallery photos={photosURL} />
      {/* <div className="overflow-hidden my-6 w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-[380px] rounded-3xl bg-slate-800 h-[200px] "></div>
          <div className="w-[200px] rounded-3xl bg-slate-800 h-[200px] "></div>
          <div className="w-[125px] rounded-3xl bg-slate-800 h-[200px] "></div>
        </div>
        <div className="flex gap-4">
          <div className="w-[220px] rounded-3xl bg-slate-800 h-[200px] "></div>
          <div className="w-[500px] rounded-3xl bg-slate-800 h-[200px] "></div>
        </div>
      </div> */}
      <h2 className="font-bold text-2xl text-green-900 mb-2">
        O nosso objetivo
      </h2>
      <p className="">
        A proposta educativa do Escotismo visa formar pessoas responsáveis,
        autônomas e solidárias, sempre baseadas nos valores da Lei e Promessa
        Escoteira. Através de ações locais, mas com um pensamento global, o
        Movimento acredita que pequenas ações fazem grandes mudanças, buscando
        construir uma sociedade mais justa e solidária. Ao final, o Escotismo
        ajuda a criar cidadãos ativos e conscientes, preparados para enfrentar
        os desafios do mundo e contribuir para um futuro melhor.
      </p>
      <h2 className="font-bold text-2xl text-green-900 mb-2 mt-4">
        Links auxiliares
      </h2>
      <a
        target="_blank"
        href="https://www.escoteiros.org.br/projeto-educativo/?doing_wp_cron=1732843654.9171431064605712890625"
        className="text-green-600 hover:text-green-800 hover:underline"
      >
        Escoteiros do Brasil: Projeto Educacional
      </a>
      <a
        target="_blank"
        href="https://www.escoteiros.org.br/metodo-escoteiro/?doing_wp_cron=1732843413.1515779495239257812500"
        className="text-green-600 hover:text-green-800 hover:underline"
      >
        Escoteiros do Brasil: Método Escoteiro
      </a>
    </section>
  );
};
