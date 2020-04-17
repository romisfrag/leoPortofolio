import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetsService } from '../services/projets.service';
import { ConstantesService } from '../services/constantes.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() projetInput: Projet;
  @Input() index: number;

  premierePartie: string;
  secondePartie: string;
  url: string;
  chrome: boolean;
  gauche: boolean;


  constructor(private projetsService: ProjetsService, private constantesService: ConstantesService) {
    this.chrome = (this.constantesService.getBrowserName().includes('chrome'));
   }

  ngOnInit() {
    this.premierePartie = this.projetInput.legendeTitle;
    this.secondePartie = this.projetInput.legendeTexte;
    if (this.index === 0) {
      this.constantesService.resetGauche();
    }
    if (this.projetInput.portrait) {
      this.gauche = this.constantesService.getGauchePrecedent();
      this.constantesService.switchGauchePrecedent();
    }
  }

  public getPathName(projet: Projet) {
    return this.projetsService.getUrlImgProjet(projet);
  }



}
