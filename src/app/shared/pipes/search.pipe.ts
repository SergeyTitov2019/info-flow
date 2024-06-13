import { Pipe, PipeTransform } from '@angular/core';
import { Card, Article } from "../../types/card";

@Pipe({
  name: 'searchData'
})
export class SearchPipe implements PipeTransform {

  transform(cards: Card[], search = ''): Card[] {
    if (!search.trim()) {
      return cards
    }
    return cards.filter(i => {
      return i.title.toLowerCase().includes(search.toLowerCase())
        || i.summary.toLowerCase().includes(search.toLowerCase())
    })
  }
}
