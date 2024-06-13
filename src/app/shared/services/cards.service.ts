import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private baseUrl = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {
  }

  getArticles(){
    return this.http.get(`${this.baseUrl}/articles/`).pipe(map((d: any) => d.results));
  }

  getArticleById(id: string){
    return this.http.get(`${this.baseUrl}/articles/${id}`);
  }
}

