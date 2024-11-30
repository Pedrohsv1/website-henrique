type CardProps = {
  name: string;
  subtitle: string;

  url: string;
};

export const Card = ({ name, subtitle }: CardProps) => {
  return (
    <div className="flex flex-col h-[400px] bg-green-200 rounded-3xl p-6">
      <h2 className={"text-yellow-600 text-2xl"}>{name}</h2>
      <h3 className="text-green-950 mt-1">{subtitle}</h3>
      <div
        className="w-[300px] h-full bg-slate-800 rounded-xl
     mt-4"
      ></div>
    </div>
  );
};
