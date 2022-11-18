import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomFilm! : string;
  films!: Film[];
  allFilms!: Film[];
  searchTerm!: string;
  constructor(private filmService : FilmService) { }

  ngOnInit(): void {
    this.filmService.listeFilms().subscribe(prods => {
      console.log(prods);
      this.films = prods;
      });
  }
  rechercherProds(){
    this.filmService.rechercherParNom(this.nomFilm).
    subscribe(prods => {
    this.films = prods;
    console.log(prods)});
    }
    onKeyUp(filterText : string){
      this.films = this.allFilms.filter(item =>
      item.nomFilm.toLowerCase().includes(filterText));
      }
      
}
