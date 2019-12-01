import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private searching = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  searchvalue = this.searching.asObservable();
  createGetRequest(url, isHeader) {
    if (isHeader === 0) {
      let httpOptions;
      httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
      }
      return this.http.get(url, httpOptions);
    }
     if (isHeader === 1) {
      const httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type':  'application/json',
          // 'Authorization': 'my-auth-token',
          'accessToken': ('qwqwqw12qwqwqwqwqasasas121212')})
      };
      return this.http.get(url, httpOptions);
    }

}
getSearchValue(item){
  this.searching.next(item);
}
}
