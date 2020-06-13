import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http: HttpClient ) { }

  public GetPersonInfo(id: number) {
    let url =  `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    return this.http.get(url).pipe(
      map(response => {
        return response;
      })
    );
  }

  public GetUser(){
    let url =  `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get(url).pipe(
      map(response => {
        return response;
      })
    );
  }
}
