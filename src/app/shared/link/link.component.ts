import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass']
})
export class LinkComponent implements OnInit {

  @Input()
  name: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
