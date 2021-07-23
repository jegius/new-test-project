export interface Category {
  id: string;
  name: string;
  questionsQuantity: number;
}

export abstract class CategoriesService {
  abstract getCategories(): Category[];
}
