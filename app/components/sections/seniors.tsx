export const RamoSenior = () => {
  return (
    <>
      <div className="flex flex-col space-y-8 text-gray-800">
        <div className="space-y-4 bg-gray-100 rounded-3xl p-8 ">
          <blockquote className=" ">
            &quot;Um escoteiro é alguém que sabe fazer todas as coisas úteis que
            são necessárias para se viver felizmente.&quot;
          </blockquote>
          <p className="font-bold">
            <i>Baden-Powell</i>
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl text-rose-900">
            Sênior: Desenvolvendo Líderes para o Futuro
          </h2>
          <p>
            O Ramo Sênior é a etapa final do Escotismo Juvenil, onde os jovens
            entre <strong>15 a 17 anos</strong> aprofundam seus valores,
            desenvolvem habilidades de liderança e se preparam para a vida
            adulta.
          </p>
        </div>

        <ul className="bg-gray-100 rounded-3xl p-8 list-decimal list-inside space-y-2">
          <h3 className="font-medium text-lg text-rose-800 mb-2">
            Características do Ramo Sênior:
          </h3>
          <li>
            <strong>Autonomia e Liderança</strong>: Os Seniores assumem um papel
            mais ativo na organização de atividades e na liderança de seus
            pares, desenvolvendo habilidades de gestão de projetos e tomada de
            decisões.
          </li>
          <li>
            <strong>Projetos de Impacto</strong>: Os projetos realizados pelos
            Seniores tendem a ser mais complexos e com maior impacto social,
            como a criação de iniciativas sustentáveis ou a organização de
            eventos comunitários.
          </li>
          <li>
            <strong>Preparação para a Vida Adulta</strong>: O Ramo Sênior
            oferece oportunidades para os jovens desenvolverem habilidades
            essenciais para a vida adulta, como planejamento financeiro, busca
            de emprego e relacionamentos interpessoais.
          </li>
          <li>
            <strong>Exploração de Interesses</strong>: Os Seniores têm mais
            liberdade para explorar seus interesses pessoais, seja através de
            atividades de aventura, estudo de temas específicos ou participação
            em grupos de discussão.
          </li>
        </ul>

        <div className="space-y-4">
          <h3 className="font-medium text-lg text-rose-700">Lema</h3>
          <p>
            <strong>Sempre Alerta</strong>. Este lema nos lembra da importância
            de estarmos sempre atentos às oportunidades de servir e de aprender.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-lg text-rose-700">
            Nossas Tropas no Grupo Escoteiro Henrique Castriciano
          </h3>
          <p className="text-gray-700">
            Tropa Varela Santiago, Tropa Sênior do Mar e Tropa Mista Sênior
            Asteca
          </p>
        </div>
        <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
          <h2 className="font-bold text-rose-900 mb-2">Links auxiliares</h2>
          <a
            target="_blank"
            href="https://www.escoteiros.org.br/ramo-senior/"
            className="text-rose-600 hover:text-rose-800 hover:underline text-sm flex"
          >
            Escoteiros do Brasil: Ramo Sênior
          </a>
        </div>
      </div>
    </>
  );
};
