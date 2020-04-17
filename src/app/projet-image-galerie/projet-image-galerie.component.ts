import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetsService } from '../services/projets.service';

@Component({
  selector: 'app-projet-image-galerie',
  templateUrl: './projet-image-galerie.component.html',
  styleUrls: ['./projet-image-galerie.component.scss']
})
export class ProjetImageGalerieComponent implements OnInit {

  @Input() projetInput: Projet;
  listePhoto: number[];

  compteurGrandePhoto = 0;


  constructor(private projetsService: ProjetsService) {
  }

  ngOnInit() {
    // le ng for est sur cette liste
    this.listePhoto = this.projetInput.listeOrganisationPhoto;
  }

  public getTheUrlImgProjetIndex(index: number) {
    index += 1;
    return this.projetsService.getUrlImgProjetIndex(this.projetInput, index);
  }

  public genererateGridColumnFirstArg(index: number) {

  }
  public genererateGridColumnSecondArg(index: number) {

  }
  public genererateGridRowFirstArg(index: number) {

  }
  public genererateGridRowSecondArg(index: number) {

  }
}
