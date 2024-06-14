import { Pipe, PipeTransform } from '@angular/core';
import { Article } from "../../types/card";

@Pipe({
  name: 'searchData'
})
export class SearchPipe implements PipeTransform {

  transform(cards: Article[], search = ''): Article[] {
    if (!search.trim()) {
      return cards
    } else {
      return cards.filter((i:Article) => {
        return i.title.toLowerCase().includes(search.toLowerCase())
          || i.summary.toLowerCase().includes(search.toLowerCase())
      })
    }

  }
}
