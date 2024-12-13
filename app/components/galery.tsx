import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Photo {
  alt: string;
  url: string;
  wh: number[];
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice da página atual
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar/despausar o carrossel
  const [progress, setProgress] = useState(0); // Progresso da barra (0 a 100)
  const totalPages = Math.ceil(photos.length / 5); // Total de páginas
  const intervalTime = 4000; // Tempo para trocar de página (4 segundos)

  // Atualiza automaticamente o índice quando o carrossel não está pausado
  useEffect(() => {
    if (isPaused) return;

    // Atualiza a barra de progresso e muda de página no final
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % totalPages;
          });
          return 0;
        }
        return prevProgress + 100 / (intervalTime / 100); // Incrementa progressivamente
      });
    }, 100); // Atualiza a cada 100ms

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [isPaused, totalPages]);

  // Reinicia a barra de progresso ao trocar de página manualmente
  const handlePageChange = (index: number) => {
    setCurrentIndex(index);
    setProgress(0); // Reinicia o progresso
  };

  return (
    <div className="relative my-6 flex flex-col gap-4 w-full max-w-[1024px] justify-center items-center">
      {/* Carrossel de fotos */}
      <div
        className="flex relative w-full gap-4 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Desloca as imagens conforme o índice
        }}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className="grid w-full gap-4 grid-cols-[80px_80px_80px]  sm:grid-cols-[180px_180px_180px] md:grid-cols-[200px_200px_200px] lg:grid-cols-[300px_300px_300px]  grid-rows-[200px_200px] lg:grid-rows-[300px_300px]"
          >
            {photos.slice(5 * i, 5 * (i + 1)).map((photo, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl bg-green-800/10 h-[200] lg:h-[300px] ${
                  index === 3 ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                  sizes=" (max-width: 1200px) 100vw, 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Controles de navegação */}
      <div className="flex items-center justify-center w-full mt-4 px-4 gap-4">
        {/* Pontos de navegação com barra de progresso */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center  h-4"
            >
              <button
                id={`${index}`}
                onClick={() => handlePageChange(index)}
                className={`h-4 rounded-full bg-gray-400 transition-all duration-300 overflow-hidden ${
                  currentIndex === index ? "bg-green-800 w-12" : "w-4 "
                }`}
              >
                {currentIndex === index && (
                  <div
                    className=" h-4 rounded-full bg-green-950 transition-all"
                    style={{
                      width: `${progress}%`, // Largura da barra de progresso
                    }}
                  ></div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Botão de Pausa/Play */}
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className=" p-1 bg-green-800 text-white rounded-full hover:bg-green-700 transition-all size-4 flex justify-center items-center  "
        >
          {isPaused ? (
            <Image alt="" src={"/icons/play-fill.svg"} width={12} height={12} />
          ) : (
            <Image
              alt=""
              src={"/icons/pause-fill.svg"}
              width={12}
              height={12}
            />
          )}
        </button>
      </div>
    </div>
  );
};
