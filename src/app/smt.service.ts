import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.keys';

@Injectable({
  providedIn: 'root'
})
export class SMTService {

  apiKey = environment.tmdbAPIKey;

  constructor(private http: HttpClient) {
    this.getMovie().toPromise().then(data => {
      console.log(data);
    });
  }

  getMovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=' + this.apiKey);
  }
}
