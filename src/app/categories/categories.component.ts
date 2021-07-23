import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService, Category} from '../services/categories.service.api';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;

  constructor(private readonly categoriesService: CategoriesService) {
    this.categories = categoriesService.getCategories();
  }

  ngOnInit(): void {
  }

  identify(index: number, item: Category): string{
    return item.id;
  }

}
