import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  private _url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'b2edde3062978e00f939b23cc1cb99a0';
  getMovies(): any{
    let moviesUrl = `${this._url}popular?api_key=${this.apiKey}&language=${'en'}`;
    return this.http.get(moviesUrl);
  }
  getParticularMovie(movie_id): any{
    let movieUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(movieUrl);
  }
  getSearchedMovies(search_query): any{
    let search_url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&query=${search_query}`
    return this.http.get(search_url);
  }
  getRequestToken(){
    let search_url = `https://api.themoviedb.org/3/authentication/token/new?api_key=b2edde3062978e00f939b23cc1cb99a0`;
    return this.http.get(search_url);
  }
  getFavourites():any{
    let search_url = `https://api.themoviedb.org/4/account/5d6772eb6743fa0013d61f3a/favorite/movies?api_key=b2edde3062978e00f939b23cc1cb99a0&language=en-US&sort_by=created_at.asc&page=1`;
    return this.http.get(search_url);
  }
}
