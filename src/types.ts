export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | { [key: string]: number };
  category: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
