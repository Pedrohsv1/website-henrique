import Image from "next/image";

export const ClickScout = () => {
  return (
    <div className="flex flex-col space-y-8 text-gray-900">
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-red-900">Pedrinho na area! 🎤</h2>
        <p>
          Olá, meu nome é Pedro e sou aluno do Bacharelado em Tecnologia da
          Informação (BTI) na Universidade Federal do Rio Grande do Norte (UFRN)
          o que ajuda um pouco no processo. Faço parte do Grupo Escoteiro 52º RN
          e sou membro do Clã Pendragon. Meu projeto consiste em desenvolver uma
          aplicação web para o meu grupo escoteiro. Assim, poderemos ter um
          espaço virtual para compartilhar informações, fotos, vídeos e muito
          mais.
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <div className="relative md:w-[400px] w-[300px] h-[300px] rounded-3xl overflow-hidden">
          <Image
            src="/projects/pessoas/pedro_varela.jpg"
            alt="Pedro Varela: Idealizador do projeto ClickScout"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-sm text-gray-500">
          Pedro Varela: Idealizador do projeto ClickScout
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-xl text-red-900">Objetivo</h2>
        <p>
          O objetivo principal é criar um ambiente que apresente o Henrique
          Castriciano de forma clara e atrativa para pais e jovens, despertando
          o interesse pela participação no escotismo. Através de fotos e
          projetos de IBP, Sênior e outras iniciativas, o espaço transmitirá
          credibilidade, utilizando um design simples e moderno. Dessa forma,
          esperamos motivar novas adesões, mostrando o impacto positivo do
          escotismo na vida dos participantes.
        </p>
        <p>
          Além disso, o grupo carece de um local centralizado e de fácil acesso
          para armazenar e disseminar sua história, o que tem gerado uma lacuna
          significativa em termos de memória institucional entre os membros,
          ramos e chefias. Essa ausência dificulta a transmissão do legado do
          grupo, comprometendo a continuidade de suas tradições e valores.
        </p>
      </div>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-red-900 mb-2">Links auxiliares</h2>
        <ul className="lg:flex gap-8">
          <li>Nenhum :(</li>
        </ul>
      </div>
    </div>
  );
};
