import { v4 as uuid } from "uuid";

export const sections = [
  {
    id: "17d2f5f5-e6be-4c9c-afc2-ead62b0c8033",
    name: "Lobinho",
    color: "#AC9D29",
    idade: "7 a 10 anos",
    url: "/sections/lobinhos.png",
  },
  {
    id: "66582827-b8b9-4461-bb49-4164932ddb53",
    name: "Escoteiro",
    color: "#0D5A32",
    idade: "10 a 15 anos",
    url: "/sections/escoteiros.png",
  },
  {
    id: "7b8e5e36-be8d-4e03-89d4-b825459c0b1d",
    name: "Sênior",
    color: "#821825",
    idade: "15 a 18 anos",
    url: "/sections/senior.png",
  },
  {
    id: "9c8081f0-0d36-441f-8c42-222c821f7601",
    name: "Pioneiro",
    color: "#AC2939",
    idade: "18 a 21 anos",
    url: "/sections/pioneiro.png",
  },
];

export const projects = [
  {
    id: uuid(),
    name: "Alguém puxa!",
    creator: "Pedro Costa",
    url: "/projects/alguempuxa.png",
  },
  {
    id: uuid(),
    name: "Site Henrique",
    creator: "Pedro Varela",
    url: "/projects/sitehenrique.png",
  },
];
