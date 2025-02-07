export const CardForms = () => {
  return (
    <div className="bg-green-100 rounded-3xl p-8 mt-8 space-y-4">
      <h1 className="font-bold text-2xl">
        Gostou? Quer entrar ou registrar alguém?
      </h1>
      <p>
        Se você se interessou pelo nosso movimento e deseja fazer parte ou
        registrar alguém, entre em contato conosco! Estamos ansiosos para
        receber novos membros e compartilhar essa jornada incrível de
        aprendizado e crescimento.
      </p>
      <a
        href="https://forms.gle/ga2fD2P28uZhUHtRA"
        target="_blank"
        className="p-4 text-base bg-green-950 text-green-50 w-fit h-[56px] flex justify-center items-center rounded-full gap-4 cursor-pointer hover:bg-green-950/90 transition-all"
      >
        Ir para o formulário
      </a>
    </div>
  );
};
