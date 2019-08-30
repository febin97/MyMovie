import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  public favourites = {};
  public reqToken = {};
  constructor(private router: Router, private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getRequestToken().subscribe(data => this.reqToken = data);
  }
  goToMovie(){
    this.router.navigate(['./movie',{name:'Avengers'}]);
  }

}
