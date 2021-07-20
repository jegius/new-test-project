import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  links: string[] | null = null;

  constructor() {
  }

  ngOnInit(): void {
    this.links = [
      'home',
      'about us',
      'events',
      'blog',
      'contacts'
    ];
  }

  identify(index: number, item: string): string{
    return item;
  }
}
