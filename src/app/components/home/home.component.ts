import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadmore:boolean= false;
  wishlistItem: any = [];
  localstorageitem: any = [];
  status:boolean=false;
  getsearchvalue: any;
  constructor(private service: MoviesService) {

  }
moviesList: any = [];
  ngOnInit() {
    this.getMoviesList();
this.service.searchvalue.subscribe(value => {
  this.getsearchvalue = value;
});
  }
getMoviesList(){
  const url = 'assets/JSON/movies.json';
  this.service.createGetRequest(url, 0).subscribe(value => {
this.moviesList = value;
  });
}
loadMore(){
  //we can change the routing also to another page but i dont think it makes sense so i did it
  // with boolean variable
  // router.navigate(['/routin name]);
this.loadmore = true;
$('html, body').animate({ scrollTop: 0 }, 'slow');

}
loadLess(){
  this.loadmore = false;
  $('html, body').animate({ scrollTop: 0 }, 'slow');
}
addToWishList(wishlisitem){
if(localStorage.getItem('wishlist') === 'null' || localStorage.getItem('wishlist') === null){
  this.wishlistItem.push(wishlisitem);
  localStorage.setItem('wishlist', JSON.stringify(this.wishlistItem));
}
this.localstorageitem = this.wishlistItem.filter(value => {
if (wishlisitem.id !== value.id) {

  this.wishlistItem.push(wishlisitem);
  localStorage.setItem('wishlist', JSON.stringify(this.wishlistItem));
}
});
}
}
