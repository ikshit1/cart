import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { ItemsSelectedComponent } from './items-selected/items-selected.component';
import { CartComponent } from './cart/cart.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'items-list',
    component: ItemsSelectedComponent
  },
  {
    path: 'checkout',
    component: CartComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);