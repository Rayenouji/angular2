import { Director } from "./Director.model";

export class DirectorWrapper{
    _embedded!:{directors:Director[]};
}