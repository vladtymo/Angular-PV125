import { UserCardComponent } from './user-card/user-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }