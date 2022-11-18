import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';
import { Director } from '../model/Director.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  director!: Director[];
  newIdDir!: number;
  newDirector!: Director;
  newFilm = new Film();


  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.listeDirectors().
      subscribe(cats => { this.director = cats._embedded.directors;
        console.log(cats);
      }
      );
  }
  addFilm() {
    this.newFilm.director = this.director.find(f => f.idDir == this.newIdDir)!;
    this.filmService.ajouterFilm(this.newFilm)
      .subscribe(film => {
        console.log(film);
        this.router.navigate(['films']);
      });

  }

}
