import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddComponent } from './user/add/add.component';
import { ModifyComponent } from './user/modify/modify.component';
import { AllusersComponent } from './user/allusers/allusers.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ModifyComponent,
    AllusersComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    PagesModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
