import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: 'collection', component: CollectionComponent,
  },
  {path: 'cart', component: CartComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const allroutes = [CollectionComponent]
