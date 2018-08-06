import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movies
  theaters: Movies
  dramas: Movies
  kids: Movies
  searchResults:any
  query:boolean

  constructor(private movieService: MoviesService) {
  }

  search({search}){
      return this.movieService.searchMovie(search).subscribe(data=>{
          this.searchResults=data
          this.query=true
      })
  }

  ngOnInit() {
    this.movieService.getPopular()
      .subscribe(data => {
        this.popular = data
      })

    this.movieService.getInTheaters()
      .subscribe(data => {
        this.theaters = data
      })

    this.movieService.getKids()
      .subscribe(data => {
         this.kids=data
      })

    this.movieService.getDramas()
      .subscribe(data => {
         this.dramas=data
      })
  }

}
