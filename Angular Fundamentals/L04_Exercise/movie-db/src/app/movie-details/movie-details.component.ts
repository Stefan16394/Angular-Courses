import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   movie:Object

  constructor(private route:ActivatedRoute,private movieService:MoviesService) { }

  ngOnInit() {
     this.route.params.subscribe(params=>{
         let id=params['id']
         this.movieService.getMoviebyId(id).subscribe(movie=>{
             this.movie=movie
             console.log(movie)
         })       
     })
  }

}
