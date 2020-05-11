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
    // Si video alors la premiere est une png
    if (this.projetInput.videoPageBeforeScroll && index === 0) {
      return this.projetsService.getUrlImgProjet(this.projetInput);
    }
    // Si pas de video alors ça veut dire que il faut afficher la 0 en haut et pas en bas
    if (!this.projetInput.videoPageBeforeScroll) {
      index += 1;
    }
    return this.projetsService.getUrlImgProjetIndex(this.projetInput, index);
  }

}
