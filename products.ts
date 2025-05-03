import { StaticImageData } from "next/image";

export interface product {
  id: string;
  name: string;
  image: StaticImageData;
  category: string;
  description: string;
  price: number;
}
