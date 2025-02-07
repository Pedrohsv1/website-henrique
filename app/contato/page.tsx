import Image from "next/image";
import { CardForms } from "../components/card-forms";
import ContactForm from "../components/contact";

const Contato = () => {
  return (
    <main className=" p-6 max-w-[1024px] w-full flex flex-col scroll-smooth gap-12 ">
      <div className="md:flex gap-12 ">
        <div className="flex md:w-1/2  md:mb-0 mb-4 justify-center flex-col">
          <CardForms />
          <div className="flex w-full justify-center md:justify-start">
            <div className="w-[250px] h-[200px] md:w-full md:h-[300px] relative mt-4 rounded-lg overflow-hidden">
              <Image
                alt=""
                src={"/lobinhos.jpg"}
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
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contato;
