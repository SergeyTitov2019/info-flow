import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CardDetailComponent} from "./components/card-detail/card-detail.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: ':id', component: CardDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
