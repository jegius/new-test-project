import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RightSideComponent} from './right-side/right-side.component';
import {MenuComponent} from './menu/menu.component';
import {LeftSideComponent} from './left-side/left-side.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    RightSideComponent,
    MenuComponent,
    LeftSideComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class HeaderModule {
}
