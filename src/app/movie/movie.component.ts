import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movieId;
  public movie={};
  public styleObj = {};
  constructor(private route: ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.movieId = params.get('id');
    });
    this._movieService.getParticularMovie(this.movieId)
                                .subscribe(data => this.movie = data);
    //this.styleObj = {
    //  'background-image': 'url(`https://image.tmdb.org/t/p/w500"+${movie.backdrop_path} `)'
    //};

  }

}
