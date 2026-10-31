export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
  description?: string;
  rating?: number;
  color: string; // Pastel background color for card
  textColor?: string;
  crumbs?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Donat Gula Salju",
    price: 5000,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1064&auto=format&fit=crop",
    badge: "Best seller",
    description: "Taburan gula halus lembut, empuk meleleh di lidah.",
    rating: 4.9,
    color: "#FCD34D", // Warm golden yellow
  },
  {
    id: 2,
    name: "Bolu Pandan Suji",
    price: 35000,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=927&auto=format&fit=crop",
    badge: "New",
    description: "Wangi pandan suji asli, tekstur super moist & ringan.",
    rating: 4.8,
    color: "#A7D79A", // Fresh pastel green
  },
  {
    id: 3,
    name: "Roti Sobek Cokelat",
    price: 15000,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1172&auto=format&fit=crop",
    badge: "Bestseller",
    description: "Isian dark chocolate lumer premium melimpah.",
    rating: 5.0,
    color: "#F4978E", // Warm coral/peach pink
  },
  {
    id: 4,
    name: "Croissant Butter",
    price: 18000,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1026&auto=format&fit=crop",
    badge: "New",
    description: "Pastry renyah berlapis dengan 100% butter Prancis.",
    rating: 4.9,
    color: "#8ECAE6", // Pastel sky blue
  },
];
