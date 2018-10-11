//movie/shared/movie.model.ts
export class Movie {
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {}
}

//movie/shared/mock-movies.ts
export const MOVIES: Movie[] = [
  new Movie(
    1,
    ' Titanic',
    'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'
  ),
  new Movie(
    2,
    ' E.T. the Extra-Terrestrial',
    'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'
  ),
  new Movie(
    3,
    'The Wizard of Oz',
    'Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.'
  ),
  new Movie(
    4,
    'Star Wars: Episode IV - A New Hope ',
    'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.'
  ),
];

//movie/shared/movie.service.ts
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  list(): Observable<Movie[]> {
    return of(MOVIES);
  }

  find(id: number): Observable<Movie> {
    let movie = MOVIES.find(m => m.id == id);
    return of(movie);
  }
}

//movies/movie-list/movie-list.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  template: `
    <div class="row">
    <ul class="list-group" class="col-md-6">
        <li *ngFor="let movie of movies" class="list-group-item">
            <a [routerLink]="['detail', movie.id]">{{movie.name}}</a>
        </li>

    </ul>
    <div class="col-md-6">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.list().subscribe(data => (this.movies = data));
  }
}

//movies/movie-detail/movie-detail.component.ts
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  template: `
  <div *ngIf="movie" class="panel panel-primary">
    <div class="panel-heading">{{movie.name}}</div>
    <div class="panel-body">
      {{movie.description}}
    </div>
  </div>
  `,
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      let id = +p['id'];
      this.movieService.find(id).subscribe(m => (this.movie = m));
    });
  }
}

//movies/movies-routing.ts
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
    // children: [{ path: 'detail/:id', component: MovieDetailComponent }],
  },
  { path: 'movies/detail/:id', component: MovieDetailComponent },
];

//movies/movies.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MovieListComponent, MovieDetailComponent],
  providers: [MovieService],
})
export default class MoviesModule {}

//passing route parameters
//organizing routes using modules
//child routes
//lazy-loading modules
