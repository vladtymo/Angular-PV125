import { IMovie } from './../movie';
import { Component } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies: IMovie[];

  constructor() {
    this.movies = [
      { title: "Wrath of Man", genres: ["Action", "Crime"], year: 2021, duration: "1:58", isCurrent: false },
      { title: "Sniper", genres: ["Action", "War"], year: 2022, duration: "1:40", isCurrent: true },
      { title: "Fall", genres: ["Thriller", "Survival"], year: 2022, duration: "1:47", isCurrent: true },
      { title: "The Fast and the Furious", genres: ["Crime", "Adventure"], year: 2001, duration: "1:46", isCurrent: false }
    ];
  }

  switchCurrentStatus(movie: IMovie): void {
    movie.isCurrent = !movie.isCurrent;
  }
  deleteMovie(movie: IMovie): void {

    let index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }
  sortByYear(): void {
    this.movies.sort((a, b) => a.year - b.year);
  }
  clear(): void {
    this.movies.splice(0);
  }
}
