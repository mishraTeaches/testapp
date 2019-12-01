import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchvalue:any;
  @ViewChild('search') searching:ElementRef;
  constructor(public service: MoviesService) { }
  change(event){

    if(event.target.value === ''){
      this.service.getSearchValue(event.target.value);
    }
  }
  ngOnInit() {
    fromEvent(this.searching.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)
      // Time in milliseconds between key events
      , debounceTime(1000)
      // If previous query is diffent from current
      , distinctUntilChanged()
      // subscription for response
      ).subscribe((text: string) => {

        this.searchvalue = text;
        this.service.getSearchValue(this.searchvalue);
      });
  }

}
