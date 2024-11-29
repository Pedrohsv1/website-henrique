"use client";
import Link from "next/link";
import { FourthCard } from "./components/fourth-card";
import { MainCard } from "./components/main-card";
import { SecondCard } from "./components/second-card";
import { ThirdCard } from "./components/third-card";
import { sections } from "./data/data";
import { Card } from "./components/card";

export default function Home() {
  return (
    <div className=" w-full min-h-screen justify-center items-center ">
      <main className=" p-6 max-w-[1024px] w-full flex flex-col gap-12">
        <section className="grid gap-4 grid-cols-4 grid-rows-[350px_350px]">
          <MainCard />
          <SecondCard />
          <ThirdCard />
          <FourthCard />
        </section>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <section id="method" className="grid">
          <h1 className="text-3xl font-bold mb-4">Como funciona o método escoteiro?</h1>
          <h2 className="font-bold text-2xl font-green-900 mb-2">
            Nosso jeitinho de ser
          </h2>
          <p>
            O Movimento Escoteiro é um espaço dinâmico e envolvente para jovens, que se desenvolve com a ajuda de voluntários adultos. Com atividades variadas e atraentes, o Escotismo encoraja os jovens a assumirem seu próprio crescimento e a se envolverem na comunidade, formando lideranças comprometidas com o próximo e com o meio ambiente. É no grupo escoteiro que tudo acontece, onde os escotistas guiam as atividades enquanto os jovens, divididos por faixa etária, aprendem habilidades e valores essenciais para a vida.
          </p>
          <div className="overflow-hidden my-6 w-full flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-[380px] bg-slate-800 h-[200px] "></div>
              <div className="w-[200px] bg-slate-800 h-[200px] "></div>
              <div className="w-[125px] bg-slate-800 h-[200px] "></div>
            </div>
            <div className="flex gap-4">
              <div className="w-[220px] bg-slate-800 h-[200px] "></div>
              <div className="w-[500px] bg-slate-800 h-[200px] "></div>
            </div>
          </div>
          <h2 className="font-bold text-2xl font-green-900 mb-2">
            O nosso objetivo
          </h2>
          <p>
          A proposta educativa do Escotismo visa formar pessoas responsáveis, autônomas e solidárias, sempre baseadas nos valores da Lei e Promessa Escoteira. Através de ações locais, mas com um pensamento global, o Movimento acredita que pequenas ações fazem grandes mudanças, buscando construir uma sociedade mais justa e solidária. Ao final, o Escotismo ajuda a criar cidadãos ativos e conscientes, preparados para enfrentar os desafios do mundo e contribuir para um futuro melhor.
          </p>
          <h2 className="font-bold text-2xl font-green-900 mb-2 mt-4">
            Links auxiliares
          </h2>
          <a target="_blank" href="https://www.escoteiros.org.br/projeto-educativo/?doing_wp_cron=1732843654.9171431064605712890625" className="text-green-600 hover:text-green-800 hover:underline">Escoteiros do Brasil: Projeto Educacional</a>
          <a target="_blank" href="https://www.escoteiros.org.br/metodo-escoteiro/?doing_wp_cron=1732843413.1515779495239257812500" className="text-green-600 hover:text-green-800 hover:underline">Escoteiros do Brasil: Método Escoteiro</a>
          
        </section>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <section>
        <h1 className="text-3xl font-bold mb-4">Seções</h1>
        {/* Cards */}
        <div className="flex gap-4">
          {sections.map((section) => (
            <Card name={section.name} subtitle={section.idade} url="#"/>
          ))
          }
          
        </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
