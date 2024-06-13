import { Injectable } from '@angular/core';
import { cards } from "../../data/mock-data";
import { Card } from "../../types/card";
import { HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // cards: Card[] = cards
  // apiUrl: string = 'https://api.spaceflightnewsapi.net/v4/articles/'

  // private apiUrl = 'https://spaceflightnewsapi.net/api/v4/articles';
  private baseUrl = 'https://api.spaceflightnewsapi.net/v4';

  // newsApiKey = '2bf3eeaf37954dcd9c94817017169474'
  // newsApiUrl = 'https://newsapi.org/v2/everything '

  constructor(private http: HttpClient) { }

  // getAll(){
  //   return this.http.get(this.apiUrl)
  // }

  // getById(id: string){
  //   return this.cards.filter(i => i.id === id)
  // }

  getArticles(){
    return this.http.get(`${this.baseUrl}/articles/`).pipe(map((d: any) => d.results));
  }

  getArticleById(id: string){
    return this.http.get(`${this.baseUrl}/articles/${id}`);
  }

}

