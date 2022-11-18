import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Director } from '../model/Director.model';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-recherche-par-director',
  templateUrl: './recherche-par-director.component.html',
  styleUrls: ['./recherche-par-director.component.css']
})
export class RechercheParDirectorComponent implements OnInit {
  IdDirector! : number;
  director! : Director[];
  films! : Film[];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.listeDirectors().
      subscribe(cats => {this.director = cats._embedded.directors;
      console.log(cats);
    });

  }

  onChange() {
    this.filmService.rechercheParDirector(this.IdDirector).
      subscribe(prods =>{this.films=prods});

    }

}