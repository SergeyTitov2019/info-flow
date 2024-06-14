import { inject, Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map, Observable} from "rxjs";
import { Article, ApiResponse } from "../../types/card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private baseUrl = 'https://api.spaceflightnewsapi.net/v4';
  private http = inject(HttpClient)

  getArticles(): Observable<Article[]>{
    return this.http.get<ApiResponse>(`${this.baseUrl}/articles/`)
      .pipe(map((data:ApiResponse) => data.results));
  }

  getArticleById(id: string): Observable<Article>{
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`);
  }
}

