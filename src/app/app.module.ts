import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import {CategoriesServiceImplementation} from './services/categories.service';
import {CategoriesService} from './services/categories.service.api';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [
    { provide: CategoriesService, useClass: CategoriesServiceImplementation }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
