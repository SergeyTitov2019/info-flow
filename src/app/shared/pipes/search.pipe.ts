import { Pipe, PipeTransform } from '@angular/core';
import { Card } from "../../types/card";

@Pipe({
  name: 'searchData'
})
export class SearchPipe implements PipeTransform {

  transform(cards: Card[], search =''): Card[] {
    if(!search.trim()){
      return cards
    }
    return cards.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
