import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  isCategoriesVisible = false;

  constructor() {
  }

  toggleCategories(): void {
    this.isCategoriesVisible = !this.isCategoriesVisible;
  }

  ngOnInit(): void {
  }

}
