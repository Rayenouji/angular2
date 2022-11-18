import { Injectable } from '@angular/core';
import { Director } from '../model/Director.model';
import { Film } from '../model/film.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DirectorWrapper } from '../model/DirectorWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  apiURL: string = 'http://localhost:8888/films/api';
  apiURLdir: string = 'http://localhost:8888/films/dir';
  films! : Film[];
  //director? : Director[];


  constructor(private http :HttpClient) {
   /* this.director = [{idDir: 1,nomDir:"Sami",prenomDir:"ELFEHRI"},
    {idDir: 2,nomDir:"Nidhal",prenomDir:"ELSadi"}];*/
    this.films =[{idFilm : 1, nomFilm : "Spidermen", genre : "Action", dateCreation : new Date("01/14/2011"),director :{idDir: 1,nomDir:"Sami",prenomDir:"ELFEHRI"}},
    {idFilm : 2, nomFilm : "Supermen", genre : "Action", dateCreation : new Date("01/14/2011"),director:{idDir: 2,nomDir:"Nidhal",prenomDir:"ELSadi"}},    
    {idFilm : 3, nomFilm : "Titanic", genre : "Romantic", dateCreation : new Date("01/14/2011"),director :{idDir: 1,nomDir:"Sami",prenomDir:"ELFEHRI"}}
  ];
}  
    listeFilms():Observable<Film[]>{
      return this.http.get<Film[]>(this.apiURL);
    
    }
    listeDirectors():Observable<DirectorWrapper>{
  
      return this.http.get<DirectorWrapper>(this.apiURLdir);
      }
     
    ajouterFilm(f : Film):Observable<Film>{
      return this.http.post<Film>(this.apiURL,f,httpOptions);
    }
    supprimerFilm(id : number){
      const url = `${this.apiURL}/${id}`;
            return this.http.delete(url,httpOptions);
      
      }
      consulterFilm(id:number): Observable<Film>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Film>(url);            

        }
        trierFilms(){
          this.films = this.films.sort((n1,n2) => {
          if (n1.idFilm > n2.idFilm) {
          return 1;
          }
          if (n1.idFilm < n2.idFilm) {
          return -1;
          }
          return 0;
          });
          }
          
        updateFilm(f:Film): Observable<Film>
        {
         return this.http.put<Film>(this.apiURL, f, httpOptions);
        }
        rechercheParDirector(idDir: Number) : Observable<Film[]>{
          const url = `${this.apiURL}/prodscat/${idDir}`;
          return this.http.get<Film[]>(url);
        }
        rechercherParNom(nom: string):Observable< Film[]> {
          const url = `${this.apiURL}/prodsByName/${nom}`;
          return this.http.get<Film[]>(url);
          }
          ajouterDirector( cat: Director):Observable<Director>{
            return this.http.post<Director>(this.apiURLdir, cat, httpOptions);
            }
            supprimerDirector(id : number) {
              const url = `${this.apiURLdir}/${id}`;
              return this.http.delete(url, httpOptions);
              }    }

  