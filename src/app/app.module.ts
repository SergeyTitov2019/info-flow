import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from "./shared/pipes/search.pipe";
import {FormsModule} from "@angular/forms";
import { ShortenPipe } from './shared/pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    SearchPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
