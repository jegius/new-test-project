import {Injectable} from '@angular/core';
import {CategoriesService, Category} from './categories.service.api';
import {BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class CategoriesServiceImplementation implements CategoriesService {
  private readonly categories: BehaviorSubject<Category[]>;

  constructor() {
    this.categories = new BehaviorSubject<Category[]>([
      {
        id: '1',
        name: 'Angular',
        questionsQuantity: 22
      },
      {
        id: '2',
        name: 'Svelte',
        questionsQuantity: 11
      },
      {
        id: '3',
        name: 'Vue',
        questionsQuantity: 2
      },
      {
        id: '4',
        name: 'React',
        questionsQuantity: 12
      }
    ]);
  }

  getCategories(): Observable<Category[]> {
    return this.categories.asObservable();
  }

  addCategory(newCategory: Category): void {
    const currentCategories = this.categories.getValue();
    this.categories.next([...currentCategories, newCategory]);
  }

  deleteCategory(id: string): void {
    const currentCategories = this.categories.getValue();
    const filteredCategories = currentCategories.filter(category => category.id !== id);

    this.categories.next(filteredCategories);
  }
}
