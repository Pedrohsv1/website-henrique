import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="w-full bg-white z-20 flex sticky top-0 justify-center items-center border border-gray-200s">
      <div className="flex p-6 max-w-[1024px] w-full justify-between">
        <Link href={"/"} className="flex gap-4 items-center">
          <Image
            src="/logo_img.png"
            alt="Logo henrique castriciano"
            width={60}
            height={60}
          />
          <div className="text-green-950 font-bold hidden md:block">
            <p>Henrique</p>
            <p>Castriciano</p>
          </div>
        </Link>
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
            href={"/historia"}
            className="flex gap-2 justify-center items-center hover:text-green-900"
          >
            <Image
              src={"/icons/book-fill.svg"}
              alt="Inicio"
              width={24}
              height={24}
            />
            <p>História</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
