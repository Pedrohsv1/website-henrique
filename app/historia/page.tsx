import Image from "next/image";
const History = () => {
  return (
    <main className=" p-6 max-w-[1024px] w-full flex flex-col scroll-smooth gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl ">
          <b>O Patrono: Henrique Castriciano de Souza</b>
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
            <p>
              Estudou no Atheneu Norte Riograndense, iniciando seu curso
              jurídico na Faculdade de Direito do Ceará, concluindo no Rio de
              Janeiro, onde bacharelou-se em 1908.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">
          <b>O grupo: Henrique Castriciano</b>
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl  text-green-900">
            <b>Mais uma maneira de aprender...</b>
          </h2>
          <p>
            Visando ampliar a educação dos alunos e tornar realidade um sonho há
            tantos anos acalentado, resolve a professora Noilde Ramalho,
            Diretora Geral, atender a um apelo do então Presidente da União dos
            Escoteiros do Brasil no RN, o Monsenhor João Penha Filho, que em
            carta, solicitava a criação de uma unidade de escotismo no Colégio
            Henrique Castriciano.
          </p>
          <p>
            Em 01 de novembro de 1997, era instalado o 52º Grupo de Escoteiros
            Henrique Castriciano, com a promessa de 10 aspirantes, na faixa
            etária de 11 a 14 anos, sob a presidência da Diretora e colaboração
            dos antigos escoteiros Antonio Varela da Silva Neto, Carlos Roberto
            Pinto Lopes, Clayton Barreto e Murillo César Brandão Filho, que se
            tornaram os primeiros Escotistas do grupo.
          </p>
          <p>
            Objetivando complementar a educação dos jovens envolvidos neste
            projeto educativo, o escotismo busca forjar o caráter das crianças e
            adolescentes, sempre preocupado em desenvolver suas plenas
            potencialidades, numa parceria que busca a formação de valores
            espirituais, noções de cidadania e princípios de solidariedade que
            são assumidos pelo jovem em seu dia a dia.
          </p>
          <p>
            Em 2006 a União dos Escoteiros do Brasil, condecorou o patrono da
            Liga de Ensino do RN e fundador do Escotismo no Estado, Henrique
            Castriciano, que recebeu pós morte a Honraria da Medalha de São
            Jorge pelos serviços prestados à educação, através do escotismo. Tal
            solenidade foi realizada durante o Congresso Escoteiro Nacional da
            UEB em Fortaleza/CE, em 22 de abril de 2006, quando a Professora
            Noilde Ramalho representou o homenageado e também foi condecorada
            com a Medalha de Gratidão, em grau ouro, pelo apoio que vem dando ao
            escotismo local.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl  text-green-900">
            <b>Nossas conquistas</b>
          </h2>
          <div>
            <p className="text-amber-500">
              Grupo Padrão <b>OURO</b> 2024
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4">
          <h2 className="text-xl  text-green-900">
            <b>História do Grupo</b>
          </h2>
          <div>
            <p>
               
            </p>
          </div>
        </div> */}
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </main>
  );
};

export default History;
