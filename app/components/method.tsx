import { photosURL } from "../data/fotosUrls";
import { CardForms } from "./card-forms";
import { PhotoGallery } from "./galery";

export const Method = () => {
  return (
    <section
      id="method"
      className="flex flex-col overflow-hidden w-max-[1024px]"
    >
      <h1 className="text-3xl text-green-950 font-bold mb-4">
        Como funciona o método escoteiro?
      </h1>
      <h2 className="font-bold text-2xl text-green-900 mb-2">
        Nosso jeitinho de ser
      </h2>
      <p className="leading-relaxed">
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

      <h2 className="font-bold text-2xl text-green-900 mb-2">
        O nosso objetivo
      </h2>
      <p className="leading-relaxed">
        A proposta educativa do Escotismo visa formar pessoas responsáveis,
        autônomas e solidárias, sempre baseadas nos valores da Lei e Promessa
        Escoteira. Através de ações locais, mas com um pensamento global, o
        Movimento acredita que pequenas ações fazem grandes mudanças, buscando
        construir uma sociedade mais justa e solidária. Ao final, o Escotismo
        ajuda a criar cidadãos ativos e conscientes, preparados para enfrentar
        os desafios do mundo e contribuir para um futuro melhor.
      </p>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-green-900 mb-2">Links auxiliares</h2>
        <a
          target="_blank"
          href="https://www.escoteiros.org.br/projeto-educativo/?doing_wp_cron=1732843654.9171431064605712890625"
          className="text-green-600 hover:text-green-800 text-sm hover:underline block"
        >
          Escoteiros do Brasil: Projeto Educacional
        </a>
        <a
          target="_blank"
          href="https://www.escoteiros.org.br/metodo-escoteiro/?doing_wp_cron=1732843413.1515779495239257812500"
          className="text-green-600 hover:text-green-800 text-sm hover:underline block"
        >
          Escoteiros do Brasil: Método Escoteiro
        </a>
      </div>
      <CardForms />
    </section>
  );
};
