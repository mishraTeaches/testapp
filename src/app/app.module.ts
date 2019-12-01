import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPipe } from './pipes/search.pipe';
import { RecentReleasedComponent } from './components/recent-released/recent-released.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { LoginComponent } from './external-components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { IsotopeModule } from 'ngx-isotope';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe,
    RecentReleasedComponent,
    TopRatedComponent,
    LoginComponent,
    HeaderComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IsotopeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
