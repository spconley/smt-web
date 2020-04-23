import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movies: Movie[] = [{
    uid: 0,
    title: "Avatar",
    yearOfRelease: 2012,
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
    mpaaRating: "PG-13",
    duration: 200,
    genres: ["Action", "Adventure", "Sci-Fi"],
    imdbRating: 5.4,
    rottenTomatoesRating: 80,
    status: "watched",
    favorite: false
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
