import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films!: Film[];
  constructor(private filmService: FilmService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerFilms();
  }
  chargerFilms() {
    this.filmService.listeFilms().subscribe(f => {
      console.log(f);
      this.films = f;
    });
  }
  supprimerFilm(p: Film) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf == true)
      this.filmService.supprimerFilm(p.idFilm).subscribe(() => {
        console.log("film supprimé");
        this.chargerFilms();
      });
  }
} 