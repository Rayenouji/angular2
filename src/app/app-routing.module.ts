import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmsComponent } from './films/films.component';
import { ListeDirectorsComponent } from './liste-directors/liste-directors.component';
import { LoginComponent } from './login/login.component';
import { RechercheParDirectorComponent } from './recherche-par-director/recherche-par-director.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ProduitGuard } from './services/film.guard';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { UpdateFilmComponent } from './update-film/update-film.component';

const routes: Routes = [
  {path: "films",component: FilmsComponent},
  {path: "add-film",component: AddFilmComponent, canActivate:[ProduitGuard]},
  { path: "", redirectTo: "films", pathMatch: "full" },
  {path: "updateFilm/:id", component: UpdateFilmComponent},
  {path: "rechercheParDirector", component : RechercheParDirectorComponent},
  {path: "rechercheParNom", component :RechercheParNomComponent},
  {path: "listeDirectors",component : ListeDirectorsComponent},
  {path: "", redirectTo: "films", pathMatch: "full" },
  {path: "login",component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
