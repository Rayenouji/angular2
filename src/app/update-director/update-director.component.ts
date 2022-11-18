import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Director } from '../model/Director.model';

@Component({
  selector: 'app-update-director',
  templateUrl: './update-director.component.html',
  styleUrls: ['./update-director.component.css']
})
export class UpdateDirectorComponent implements OnInit {
  @Input()
  director! : Director;
  @Input()
  ajout!:boolean;
  @Output()
directorUpdated = new EventEmitter<Director>();
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInt du composant UpdateDirector ",this.director);
  }
  saveDirector(){
    this.directorUpdated.emit(this.director);
    }

}
