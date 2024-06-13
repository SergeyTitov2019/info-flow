import { Component } from '@angular/core';
import {cards} from "../../data/mock-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cards = cards
  searchStr: string = ''

}
