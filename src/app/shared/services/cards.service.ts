import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { map } from "rxjs";
import { cards } from "../../data/mock-data";
import {Card} from "../../types/card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = cards

  constructor( ) { }

  getAll(){

    return cards

    // return this.http.get(`${environment.fbDbUrl}/posts.json`)
    //   .pipe(map((response: {[key: string]: any}) => {
    //       return Object.keys(response).map(key => ({
    //         ...response[key],
    //         id: key,
    //         data: new Date(response[key].date)
    //       }))
    //     })
    //   )

  }
}
