import { FaUser } from "react-icons/fa";

// Navigation Links Data
export const liValues = [
  { id: 0, text: "Login", icon: FaUser, link: "login", bg: true },
  { id: 1, text: "Criar Conta", icon: FaUser, link: "register", bg: false },
];

// Navigation Products
export const liProducts = [
  {
    id: 0,
    text: "Casas",
    img: "/casa.png",
    alt: "Imagem do Prduto referente á casas.",
    link: "reserves?type=casa",
  },
  {
    id: 1,
    text: "Apartamentos",
    img: "/edifio.png",
    alt: "Imagem do Produto referente á apartamentos.",
    link: "reserves?type=ap",
  },
];
