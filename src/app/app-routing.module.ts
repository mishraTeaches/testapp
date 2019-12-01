import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecentReleasedComponent } from './components/recent-released/recent-released.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './external-components/login/login.component';
import {LoginAuthGuard} from './authguard/login-auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [LoginAuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'recent-released', component: RecentReleasedComponent, canActivate:[LoginAuthGuard]},
  {path: 'top-rated', component: TopRatedComponent},
  {path: 'wishlist', component: WishlistComponent, canActivate: [LoginAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
