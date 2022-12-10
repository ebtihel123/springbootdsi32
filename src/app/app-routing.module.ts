import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNourritureComponent } from './add-nourriture/add-nourriture.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { NourritureGuard } from './nourriture.guard';

import { NourritureComponent } from './nourriture/nourriture.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateNourritureComponent } from './update-nourriture/update-nourriture.component';

const routes: Routes = [{path: "nourriture", component : NourritureComponent},
{path : "add-nourriture", component : AddNourritureComponent, canActivate:[NourritureGuard]},
{ path: "", redirectTo: "nourriture", pathMatch: "full" },
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: "listeCategories", component : ListeCategoriesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "updateNourriture/:id", component: UpdateNourritureComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
