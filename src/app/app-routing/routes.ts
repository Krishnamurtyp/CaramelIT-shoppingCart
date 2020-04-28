import { Routes } from '@angular/router'; 


import { WishlistComponent } from '../wishlist/wishlist.component';
import { CartComponent } from '../cart/cart.component';

export const routes: Routes = [
 	{path: 'wishlist', component: WishlistComponent},
 	{path: 'cart', component: CartComponent},
 	{path: '', redirectTo: '/wishlist', pathMatch: 'full'}
];