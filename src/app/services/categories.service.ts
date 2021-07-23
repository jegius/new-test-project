import {Injectable} from '@angular/core';
import {CategoriesService, Category} from './categories.service.api';

@Injectable()
export class CategoriesServiceImplementation implements CategoriesService {
  private readonly categories: Category[] = [];

  constructor() {
    this.categories = [
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
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
