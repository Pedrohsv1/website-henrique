import React, { useEffect, useState } from "react";
import Image from "next/image";

// Tipagem para as props do componente PhotoGallery
interface Photo {
  alt: string;
  url: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define o padrão de larguras para a primeira linha
  const firstRowPatterns = [
    "w-[380px]", // Padrão para a 1ª imagem
    "w-[200px]", // Padrão para a 2ª imagem
    "w-[125px]", // Padrão para a 3ª imagem
    "w-[220px]", // Padrão para a 4ª imagem
    "w-[500px]", // Padrão para a 5ª imagem
  ];

  // Define o padrão de larguras para a segunda linha (invertido)
  const secondRowPatterns = firstRowPatterns.slice().reverse();

  // Calcula o número total de páginas (5 imagens por página)
  const totalPages = Math.ceil(photos.length / 5);

  // Função para atualizar o índice automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [totalPages]);

  // Função para dividir as fotos por grupos de 5
  const currentPhotos = photos.slice(currentIndex * 5, (currentIndex + 1) * 5);

  // Divide as fotos em duas linhas, considerando os padrões
  const firstLinePhotos = currentPhotos.slice(
    0,
    Math.ceil(currentPhotos.length / 2)
  ); // Primeira linha
  const secondLinePhotos = currentPhotos.slice(
    Math.ceil(currentPhotos.length / 2)
  ); // Segunda linha

  return (
    <div className="relative my-6 flex-col gap-4 w-full flex justify-center items-center">
      {/* Carrossel de imagens - Primeira linha */}
      <div className="flex gap-4 w-max">
        {firstLinePhotos.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl bg-green-800/10 h-[200px] ${
              firstRowPatterns[index % firstRowPatterns.length]
            }`}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Carrossel de imagens - Segunda linha */}
      <div className="flex gap-4 w-max">
        {secondLinePhotos.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl bg-green-800/10 h-[200px] ${
              secondRowPatterns[index % secondRowPatterns.length]
            }`}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Pontos de navegação */}
      <div className=" flex items-center gap-2 h-4 mb-4">
        {Array.from({ length: totalPages }).map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full bg-gray-400 transition-all duration-300 ${
                currentIndex == index ? "bg-green-800 w-5 h-5" : ""
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
