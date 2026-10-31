export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  badge?: string;
  description: string;
  image: string;
  color?: string;
  rating?: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Fudgy Brownies",
    price: 35000,
    category: "Cakes & Brownies",
    badge: "Best Seller",
    description: "Brownies panggang dengan tekstur fudgy legit dan rasa cokelat pekat.",
    image: "/jajan/j1.jpg",
    color: "#FCD34D",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Bolen",
    price: 8000,
    category: "Fresh Bakery",
    badge: "Best Seller",
    description: "Pastry bolen legit dengan isian pisang manis dan cokelat lumer berbalut kulit renyah.",
    image: "/jajan/bolen.jpg",
    color: "#F4978E",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Nastar Premium",
    price: 45000,
    category: "Kue Kering",
    badge: "Oleh-oleh",
    description: "Kue kering nanas legit dengan aroma butter gurih yang renyah dan lumer di mulut.",
    image: "/jajan/j3.jpg",
    color: "#A7D79A",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Bolu Gulung Pandan",
    price: 30000,
    category: "Cakes & Brownies",
    badge: "Favorit",
    description: "Bolu gulung aroma pandan alami dengan isian krim manis lembut yang menggugah selera.",
    image: "/jajan/j4.jpg",
    color: "#8ECAE6",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Croissant Mentega",
    price: 18000,
    category: "Pastry",
    badge: "Fresh",
    description: "Pastry renyah berlapis dengan aroma butter berkualitas tinggi khas Prancis.",
    image: "/jajan/j5.jpg",
    color: "#FDE68A",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Donat Gula Salju",
    price: 6000,
    category: "Fresh Bakery",
    badge: "Camilan",
    description: "Donat empuk bertabur gula salju halus yang memberikan sensasi manis pas.",
    image: "/jajan/j6.jpg",
    color: "#FBCFE8",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Roti Sobek Manis",
    price: 16000,
    category: "Fresh Bakery",
    badge: "Keluarga",
    description: "Roti sobek porsi keluarga dengan tekstur super lembut dan aroma harum mentega.",
    image: "/jajan/j7.jpg",
    color: "#FED7AA",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Paket Hajatan Box",
    price: 48000,
    category: "Paket Rame",
    badge: "Pesanan Massal",
    description: "Kombinasi aneka roti dan kue kemasan praktis dan higienis untuk berbagai acara.",
    image: "/jajan/j8.jpg",
    color: "#BAE6FD",
    rating: 5.0,
  },
];
