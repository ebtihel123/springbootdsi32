import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

import { Nourriture } from '../model/Nourriture.model';

import { NourrritureService } from '../services/nourriture.service';


@Component({
  selector: 'app-update-nourriture',
  templateUrl: './update-nourriture.component.html',
  styles: [
  ]
})
export class UpdateNourritureComponent implements OnInit {
  currentNourritures= new Nourriture();
  categories! : Categorie[];
updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,private nourritureService :NourrritureService,
    private router :Router,

    private produitService: NourrritureService) { }

    ngOnInit(): void {
      this.nourritureService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });
      this.nourritureService.consulterNourriture(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentNourritures = prod;
      this.updatedCatId = this.currentNourritures.categorie.idCat;
      } ) ;}


      updateNourriture() {
        this.currentNourritures.categorie = this.categories.find(
          cat => cat.idCat == this.updatedCatId)!;
       this.nourritureService.updateNourriture(this.currentNourritures).subscribe(prod => {

      this.router.navigate(['nourriture']); }
       );

        }



}
