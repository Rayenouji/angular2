import { Director } from "./Director.model";

export class Film{
    idFilm!: number;
    nomFilm! : string;
    genre!   : string;
    dateCreation! : Date;
   director !: Director;
}