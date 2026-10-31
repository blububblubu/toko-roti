export type Product = {
  id: number;
  name: string;
  category: string;
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
    name: "Pisang Cokelat",
    category: "Fresh Bakery",
    price: 8000,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    badge: "Best Seller",
    description: "Roti lembut dengan isian pisang raja manis dan lelehan cokelat premium.",
    rating: 4.9,
    color: "#FCD34D", // Warm golden yellow
  },
  {
    id: 2,
    name: "Fudgy Brownies",
    category: "Cakes & Brownies",
    price: 35000,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    badge: "Best Seller",
    description: "Brownies panggang dengan shiny crust renyah dan tekstur fudgy cokelat legit.",
    rating: 5.0,
    color: "#F4978E", // Pastel coral / warm peach
  },
  {
    id: 3,
    name: "Nastar Premium",
    category: "Kue Kering",
    price: 45000,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    badge: "Oleh-oleh",
    description: "Kue nastar renyah lumer dengan selai nanas madu asli yang harum butter.",
    rating: 4.9,
    color: "#A7D79A", // Fresh pastel green
  },
  {
    id: 4,
    name: "Paket Hajatan Box",
    category: "Paket Rame",
    price: 150000,
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop",
    badge: "Pesanan Massal",
    description: "Kombinasi aneka roti & kue lezat kemasan higienis, hemat untuk acara besar.",
    rating: 5.0,
    color: "#8ECAE6", // Pastel sky blue
  },
];
