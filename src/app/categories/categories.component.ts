import {Component, OnInit} from '@angular/core';
import {CategoriesService, Category} from '../services/categories.service.api';
import {Observable} from 'rxjs';
import {first, take} from 'rxjs/operators';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private readonly categoriesService: CategoriesService) {
    this.categories = categoriesService.getCategories();
  }

  ngOnInit(): void {
  }

  identify(index: number, item: Category): string {
    return item.id;
  }

  addCategory(): void {
    this.categoriesService.addCategory({
      id: `${Math.random()}`,
      name: `some ${Math.random()}`,
      questionsQuantity: Math.random()
    });
  }

  removeCategory(): void {
    this.categories
      .pipe(take(1))
      .subscribe(([firstCategory]: Category[]) => {
        this.categoriesService.deleteCategory(firstCategory.id);
      });
  }
}
