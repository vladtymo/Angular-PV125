import { IMovie } from '../movie';
import { Component, Input } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  @Input()
  movies: IMovie[] = [];

  movie: IMovie = {
    id: 0,
    title: "",
    year: 0,
    isCurrent: true
  };

  constructor() {
  }

  addMovie(): void {

    this.movies.push({ ...this.movie });
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
