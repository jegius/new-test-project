import {Observable} from 'rxjs';

export interface Category {
  id: string;
  name: string;
  questionsQuantity: number;
}

export abstract class CategoriesService {
  abstract getCategories(): Observable<Category[]>;
  abstract addCategory(newCategory: Category): void;
  abstract deleteCategory(id: string): void;
}
