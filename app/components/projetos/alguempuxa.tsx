export const AlguemPuxa = () => {
  return (
    <div className="flex flex-col space-y-8 text-gray-900">
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-red-900">
          Apresentação: Oi! me chamo Pintinho
        </h2>
        <p>
          Servir! Meu nome é <strong>Pedro Costa (Pintinho)</strong> e faço
          parte do clã Pendragon do Grupo Escoteiro 52º RN. Meu projeto consiste
          em criar uma coletânea de músicas escoteiras. O objetivo é desenvolver
          um álbum com canções que resgatem a cultura escoteira e incentivem a
          prática do canto no movimento escoteiro.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-red-900">Objetivo</h2>
        <p>
          A ideia deste projeto nasceu do desejo de incentivar os jovens a
          voltarem a cantar, seja em atividades na sede, seja em acampamentos,
          onde o canto é uma das principais formas de integração e diversão.
        </p>
        <p>
          Para isso, estou desenvolvendo um e-book com a maior quantidade
          possível de canções escoteiras, que será disponibilizado para todos.
          Assim, poderemos relembrar, aprender e retomar essa prática que tanto
          amamos.
        </p>
      </div>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-red-900 mb-2">Links auxiliares</h2>
        <ul className="lg:flex gap-8">
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/alguem.puxa/"
              className="text-red-600 hover:text-red-800 hover:underline text-sm flex"
            >
              Instagram: @alguem.puxa
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1IyYoQrIcIOTYojFywCPxhYtMm5o-ezU2/view"
              className="text-red-600 hover:text-red-800 hover:underline text-sm flex"
            >
              PDF: Canções Escoteiras
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfR-fbQxzDSt0qi1DaJ6M_DXj_DlN3Vjc1JWcihKIQDq17xiA/viewform"
              className="text-red-600 hover:text-red-800 hover:underline text-sm flex"
            >
              Formulário: Sugestão de Músicas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
