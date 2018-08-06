import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Movies} from '../models/movies'

const apiKey = '539e457c9330989d242b0cb34378f496'

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    authentication: string = '&api_key=';
    inTheaters:string='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    kids="discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"
    dramas="discover/movie?with_genres=18&primary_release_year=2018"
    movie='movie/'
    movieAuthentication='?api_key='
    
    constructor(private httpClient: HttpClient) {
    }

    getPopular():Observable<Movies> {
       return this.httpClient.get<Movies>(this.path + this.popular + this.authentication +apiKey)
    }

    getInTheaters():Observable<Movies>{
        return this.httpClient.get<Movies>(this.path + this.inTheaters + this.authentication +apiKey)
    }
    
    getKids():Observable<Movies>{
        return this.httpClient.get<Movies>(this.path + this.kids + this.authentication +apiKey)
    }

    getDramas():Observable<Movies>{
        return this.httpClient.get<Movies>(this.path + this.dramas + this.authentication +apiKey)
    }

    getMoviebyId(id){
        return this.httpClient.get(this.path+this.movie+id+this.movieAuthentication+apiKey)
    }

    searchMovie(name){
        return this.httpClient.get(this.path+'search/movie?query='+name+this.authentication+apiKey)
    }

}