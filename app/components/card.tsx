import Image from "next/image";

type CardProps = {
  name: string;
  subtitle?: string;
  url: string;
  color?: string;
};

export const Card = ({ name, subtitle, url, color }: CardProps) => {
  return (
    <div className="flex flex-col h-[400px] w-[260px] bg-green-200 rounded-3xl hover:bg-green-100 p-6">
      <h2
        className={"text-red-700 text-2xl font-bold"}
        style={{ color: color }}
      >
        {name}
      </h2>
      <h3 className="text-green-950 mt-1">{subtitle}</h3>
      <div
        className="relative w-[215px] h-[300px] overflow-hidden rounded-xl
     mt-4"
      >
        <Image
          src={url}
          alt={""}
          fill
          style={{
            objectFit: "cover",
          }}
          quality={100}
          priority
          sizes=" (max-width: 1200px) 100vw, 70vw, 20vw"
        />
      </div>
    </div>
  );
};
