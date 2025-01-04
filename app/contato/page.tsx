import Image from "next/image";
import ContactForm from "../components/contact";

const Contato = () => {
  return (
    <main className=" p-6 max-w-[1024px] w-full flex flex-col scroll-smooth gap-12 ">
      <div className="md:flex gap-12 ">
        <div className="flex md:w-1/2  md:mb-0 mb-4 justify-center flex-col">
          <h1 className="text-2xl">
            <b>Entre em contato com a gente!</b>
          </h1>
          <p>
            Atendimento presencial sábado. <br />
            Das 14h30 às 17h.
          </p>
          <div className="w-[400px] h-[300px] relative mt-4 rounded-lg overflow-hidden">
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
        <ContactForm />
      </div>
    </main>
  );
};

export default Contato;
