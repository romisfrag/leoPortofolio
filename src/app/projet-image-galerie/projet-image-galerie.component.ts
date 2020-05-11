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

  compteurGrandePhoto = 0;
  listePhoto: any[] = [];

  constructor(private projetsService: ProjetsService) {
  }

  ngOnInit() {
    // le ng for est sur cette liste
    // TODO this.listePhoto = this.projetInput.listeOrganisationPhoto;
    for (let i = 0; i < this.projetInput.nombrePhotos; i++) {
      this.listePhoto.push(0);
    }
  }

  public getTheUrlImgProjetIndex(index: number) {
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
