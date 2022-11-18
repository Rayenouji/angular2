import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Director } from '../model/Director.model';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  director! : Director[];
  updatedDirId! : number;
  currentFilm = new Film();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.listeDirectors().
    subscribe(cats => {this.director = cats._embedded.directors
  });
  this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentFilm = prod; 
      this.updatedDirId =   this.currentFilm.director.idDir;
    
    } ) ;
    }

  updateFilm() {
    this.currentFilm.director = this.director.find(cat => cat.idDir == this.updatedDirId)!;
    this.filmService.updateFilm(this.currentFilm).subscribe(prod => {
 this.router.navigate(['films']); }
  );}

}