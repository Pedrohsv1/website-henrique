export const RamoEscoteiro = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-green-900">
          Escoteiros: Aventura e Aprendizado para a Vida
        </h2>
        <p>
          O Ramo Escoteiro é a fase em que os jovens entre{" "}
          <strong>10 e 15 anos</strong>
          descobrem o mundo e a si mesmos através de atividades desafiadoras e
          divertidas. Nessa etapa, os escoteiros aprendem a trabalhar em equipe,
          a tomar decisões, a cuidar da natureza e a servir à comunidade.
        </p>
      </div>

      <ul className="bg-gray-100 rounded-3xl p-8 list-decimal list-inside space-y-2">
        <h3 className="font-medium text-lg text-green-800 mb-2">
          Características do Ramo Escoteiro:
        </h3>
        <li>
          <strong>Patrulha</strong>: Os escoteiros são organizados em patrulhas,
          pequenos grupos liderados por um Guia ou Guia-mirim.
        </li>
        <li>
          <strong>Acampamentos</strong>: Acampamentos são momentos de aventura e
          aprendizado, onde os escoteiros desenvolvem habilidades práticas e
          aprofundam seus conhecimentos sobre a natureza.
        </li>
        <li>
          <strong>Projetos</strong>: Os escoteiros realizam projetos que
          beneficiam a comunidade, como campanhas de coleta de alimentos ou
          mutirões de limpeza.
        </li>
        <li>
          <strong>Valores</strong>: A Lei e a Promessa Escoteiras são a base dos
          valores deste ramo, como honra, lealdade, amizade e serviço.
        </li>
      </ul>
      <div className="space-y-4">
        <h3 className="font-medium text-lg text-green-800">Lema</h3>
        <p>
          O lema do escoteiro é &quot;<strong>Sempre Alerta</strong>&quot;. Ele
          simboliza a curiosidade, a prontidão e a disposição para aprender e
          explorar.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="font-medium text-lg text-green-800">
          Nossas Patrulhas no Grupo Escoteiro Henrique Castriciano
        </h3>
        <p>[Insira aqui os nomes das Patrulhas do seu grupo]</p>
      </div>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-green-900 mb-2">Links auxiliares</h2>
        <a
          target="_blank"
          href="https://www.escoteiros.org.br/ramo-escoteiro/"
          className="text-green-600 hover:text-green-800 hover:underline text-sm flex"
        >
          Escoteiros do Brasil: Ramo Escoteiro
        </a>
      </div>
    </div>
  );
};
