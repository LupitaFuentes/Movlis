import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbPaginationModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule, 
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
