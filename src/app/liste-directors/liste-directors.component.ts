import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Director } from '../model/Director.model';

@Component({
  selector: 'app-liste-directors',
  templateUrl: './liste-directors.component.html',
  styleUrls: ['./liste-directors.component.css']
})
export class ListeDirectorsComponent implements OnInit {
director! : Director[];
updatedDir:Director = {"idDir":0,"nomDir":"","prenomDir":""};
ajout:boolean=true;
  constructor( private filmService: FilmService) { }

  ngOnInit(): void {
   this.filmService.listeDirectors().subscribe(cat =>{this.director = cat._embedded.directors;
  console.log(cat);});
  }
  chargerDirectores(){
    this.filmService.listeDirectors().
      subscribe(cats => {this.director = cats._embedded.directors;
      console.log(cats);
    });
  }
  updateDir(cat:Director) {
    this.updatedDir=cat;
    this.ajout=false;  
  }
  directorUpdated(cat:Director){
    console.log("Dir updated event",cat);
    this.filmService.ajouterDirector(cat).subscribe( () =>  this.chargerDirectores());
  }
  supprimerDirector(cat : Director) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
         this.filmService.supprimerDirector(cat.idDir).subscribe(() => {
          console.log("directeur supprimée");
          this.chargerDirectores(); }  );
       }
  }


}
