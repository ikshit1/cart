import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Injectable}      from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes} from "./app.route";
import { ListComponent } from './list/list.component';
import { ItemsSelectedComponent } from './items-selected/items-selected.component';
import { CartComponent } from './cart/cart.component';
import { WebService } from '../services/service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemsSelectedComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpModule
  ],
  providers: [
    { provide: WebService, useClass: WebService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
