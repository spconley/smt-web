export interface Movie {
  uid: number;
  title: string;
  yearOfRelease: number;
  imgUrl: string;
  mpaaRating: string;
  duration: number;
  genres: string[];
  imdbRating: number;
  rottenTomatoesRating: number;
  category: string;
  favorite: boolean;
}
