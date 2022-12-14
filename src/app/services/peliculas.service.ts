import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/pelicula.interface';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseURL:string ='https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public load=false;

  constructor(private http:HttpClient) { }

  get params(){
    return{
      api_key:'fd4c6706834218233296fb459ac4bac7',
      language:'en-EN',
      page:this.carteleraPage.toString()
    }
  }

  getPeliculas():Observable<Movie[]>{
 console.log('Loading...');
 if (this.load) {
  return of([]);
 }

    this.load=true;

    return this.http.get<PeliculasResponse>(`${this.baseURL}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.carteleraPage+=1;
        this.load=false;
      })
    );
  }

buscarPeliculas(texto:string):Observable<Movie[]>{

/*   https://api.themoviedb.org/3/search/movie?api_key=13ee2b3b1810d881d34a3d2f4351f448&language=es-ES&page=1&include_adult=false
 */
  const params = {...this.params, page:1, query:texto};

  return this.http.get<PeliculasResponse>(`${this.baseURL}/search/movie`,{
    params
  }).pipe(
    map(res=>res.results)
  )


}  

getPeliculaDetalle(id:string){

  return this.http.get< MovieDetails>(`${this.baseURL}/movie/${id}`,{
    params:this.params
  }).pipe(

    catchError(err => of(null))

  )

}

resetPeliculaPage(){
this.carteleraPage =1;

}




}
