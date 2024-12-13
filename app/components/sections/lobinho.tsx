import React from "react";

export const RamoLobinho = () => {
  return (
    <div className="flex flex-col space-y-8 text-gray-900">
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-yellow-900">
          Lobinhos no Escotismo: Uma Breve Explicação
        </h2>
        <p>
          Lobinho é a seção destinada a crianças de <strong>7 a 10 anos</strong>
          , onde aprendem valores e habilidades básicas através de atividades
          lúdicas e educativas. Nesta fase, as crianças são incentivadas a
          desenvolver a socialização, a criatividade e o senso de
          responsabilidade, participando de jogos, brincadeiras e pequenas
          tarefas que estimulam o aprendizado e a convivência em grupo
        </p>
      </div>

      <ul className="bg-gray-100 rounded-3xl p-8 list-decimal list-inside space-y-2">
        <h3 className="font-medium text-lg text-yellow-800 mb-2">
          Outras características do Ramo Lobinho:
        </h3>
        <li>
          <strong>Alcateia</strong>: O grupo de lobinhos é chamado de alcateia,
          em referência ao ambiente natural onde Mowgli viveu.
        </li>
        <li>
          <strong>Matilha</strong>: A alcateia é dividida em matilhas, grupos
          menores que facilitam a interação e as atividades.
        </li>
        <li>
          <strong>Akelá</strong>: O líder da alcateia é chamado de Akelá, em
          homenagem ao líder da matilha de lobos de Mowgli.
        </li>
        <li>
          <strong>Valores</strong>: O Ramo Lobinho busca desenvolver valores
          como amizade, companheirismo, respeito à natureza e à comunidade.
        </li>
      </ul>
      <div className="space-y-4">
        <h3 className="font-medium text-lg text-yellow-800">Lema</h3>
        <p>
          Lema O lema dos lobinhos é &quot;Melhor Possível&quot;. Ele incentiva
          as crianças a estarem sempre prontas para ajudar os outros e a
          comunidade.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="font-medium text-lg text-yellow-800">
          Nossas alcatéias no Grupo Escoteiro Henrique Castriciano
        </h3>
        <p>
          No GE Henrique Castriciano temos duas alcatéias: A 1ª Alcatéia
          Lobo-Guará, 2ª Alcatéia Monte Seeonee e 3ª Mowgli.
        </p>
      </div>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-yellow-900 mb-2">Links auxiliares</h2>
        <a
          target="_blank"
          href="https://www.escoteiros.org.br/ramo-lobinho/"
          className="text-yellow-600 hover:text-yellow-800 hover:underline text-sm flex"
        >
          Escoteiros do Brasil: Ramo Lobinho
        </a>
      </div>
    </div>
  );
};
