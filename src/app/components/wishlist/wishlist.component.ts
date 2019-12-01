import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
declare var $:any;
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  loadmore:boolean= false;
  wishlistItem: any = [];
  localstorageitem:any=[];
  status:boolean=false;
  getsearchvalue:any;
  moviesList: any = [];
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.searchvalue.subscribe(value => {
      this.getsearchvalue = value;

    });
    if (localStorage.getItem('wishlist') !== null){
    this.moviesList = JSON.parse(localStorage.getItem('wishlist'));
  }
}
  loadMore(){
    //we can change the routing also to another page but i dont think it makes sense so i did it
    // with boolean variable
    // router.navigate(['/routin name]);
  this.loadmore = true;
  $("html, body").animate({ scrollTop: 0 }, "slow");

  }
  loadLess(){
    this.loadmore = false;
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
}
