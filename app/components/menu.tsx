import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="w-full flex justify-center items-center border border-gray-200s">
      <div className="flex p-6 max-w-[1024px] w-full justify-between">
        <div className="flex gap-4">
          <Image
            src="/logo_img.png"
            alt="Logo henrique castriciano"
            width={40}
            height={40}
          />
          <div className="text-green-950 font-bold">
            <p>Henrique</p>
            <p>Castriciano</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="flex gap-2 justify-center items-center hover:text-green-900"
          >
            <Image
              src={"/icons/house-fill.svg"}
              alt="Inicio"
              width={24}
              height={24}
            />
            <p>Home</p>
          </Link>
          <Link
            href={"/"}
            className="flex gap-2 justify-center items-center hover:text-green-900"
          >
            <Image
              src={"/icons/book-fill.svg"}
              alt="Inicio"
              width={24}
              height={24}
            />
            <p>Nossa história</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
