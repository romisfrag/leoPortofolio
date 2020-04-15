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
  @Input() gaucheInput: boolean;

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
    this.gauche = this.gaucheInput;
    console.log('gauche : ' + this.gauche);
  }

  public getPathName(projet: Projet) {
    return this.projetsService.getUrlImgProjet(projet);
  }



}
