export interface ICategory {
  id: number;
  category: string;
  subCategories: {
    id: number;
    category: string;
  }[];
}
