import Link from "next/link";
import { CardForms } from "../card-forms";

export const LinkForOtherRamos = () => {
  return (
    <>
      <div className=" bg-gray-100 rounded-3xl p-8 mt-8">
        <h2 className="font-bold text-green-900 mb-2">
          Explore: Outros ramos do escoteiro
        </h2>
        <ul className=" lg:flex gap-8">
          <li>
            <Link
              href="/section/17d2f5f5-e6be-4c9c-afc2-ead62b0c8033"
              className="text-green-600 hover:text-green-800 hover:underline text-sm"
            >
              Ramo Lobinho (7 a 9 anos)
            </Link>
          </li>
          <li>
            <Link
              href="/section/66582827-b8b9-4461-bb49-4164932ddb53"
              className="text-green-600 hover:text-green-800 hover:underline text-sm"
            >
              Ramo Escoteiro (10 a 14 anos)
            </Link>
          </li>
          <li>
            <Link
              href="/section/7b8e5e36-be8d-4e03-89d4-b825459c0b1d"
              className="text-green-600 hover:text-green-800 hover:underline text-sm"
            >
              Ramo Sênior (15 a 17 anos)
            </Link>
          </li>
          <li>
            <Link
              href="/section/9c8081f0-0d36-441f-8c42-222c821f7601"
              className="text-green-600 hover:text-green-800 hover:underline text-sm"
            >
              Ramo Pioneiro (18 a 20 anos)
            </Link>
          </li>
        </ul>
      </div>
      <CardForms />
    </>
  );
};
