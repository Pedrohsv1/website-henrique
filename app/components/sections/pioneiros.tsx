export const RamoPioneiro = () => {
  return (
    <div className="flex flex-col space-y-8 text-gray-900">
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-red-900">
          Pioneiros: Desenvolvendo Líderes para o Futuro
        </h2>
        <p>
          O Ramo Pioneiro é a etapa do Escotismo destinada a jovens entre{" "}
          <strong>18 e 22 anos</strong>. Nessa fase, os jovens aprofundam seus
          valores, desenvolvem habilidades de liderança e se preparam para a
          vida adulta, através de projetos e atividades que os desafiam a fazer
          a diferença na sociedade.
        </p>
      </div>

      <ul className="bg-gray-100 rounded-3xl p-8 list-decimal list-inside space-y-2">
        <h3 className="font-medium text-lg text-red-800 mb-2">
          Características do Ramo Pioneiro:
        </h3>
        <li>
          <strong>Clã</strong>: O grupo de Pioneiros é chamado de Clã,
          representando uma comunidade de amigos com objetivos em comum.
        </li>
        <li>
          <strong>Projetos</strong>: Os Pioneiros desenvolvem projetos pessoais
          e conquistam insígnias que demonstram seu comprometimento com o
          desenvolvimento pessoal e social.
        </li>
        <li>
          <strong>Liderança</strong>: O Ramo Pioneiro incentiva o
          desenvolvimento de habilidades de liderança, preparando os jovens para
          assumirem responsabilidades e tomar decisões.
        </li>
        <li>
          <strong>Cidadania</strong>: Os Pioneiros são estimulados a praticar a
          cidadania, através do serviço voluntário e da participação em ações
          que beneficiam a comunidade.
        </li>
      </ul>
      <div className="space-y-4">
        <h3 className="font-medium text-lg text-rose-700">Lema</h3>
        <p>
          <strong>Servir</strong>. O lema do Ramo Pioneiro destaca a importância
          do serviço à comunidade e ao próximo. Os Pioneiros são incentivados a
          colocar em prática seus valores e conhecimentos, contribuindo para um
          mundo melhor
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="font-medium text-lg text-red-800">
          Nossos Clãs no Grupo Escoteiro Henrique Castriciano
        </h3>
        <p>Clã Pendragon</p>
      </div>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-red-900 mb-2">Links auxiliares</h2>
        <a
          target="_blank"
          href="https://www.escoteiros.org.br/ramo-pioneiro/"
          className="text-red-600 hover:text-red-800 hover:underline text-sm flex"
        >
          Escoteiros do Brasil: Ramo Pioneiro
        </a>
      </div>
    </div>
  );
};
