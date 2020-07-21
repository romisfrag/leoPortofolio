import { Component, OnInit, Input } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { Projet } from '../models/projet.model';
import { ConstantesService } from '../services/constantes.service';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.scss']
})
export class ImageGaleryComponent implements OnInit {


  // Permet de filtrer par rapport a video photo ux ....
  @Input() filtre: string;

  listeProjets: Projet[];
  gauche = false;


  constructor(private projetsService: ProjetsService) {
  }

  ngOnInit() {
    this.listeProjets = this.projetsService.getListeProjetFiltre(this.filtre);
    if (this.filtre.includes('accueil')) {
      let m = this.listeProjets.length;
      while (m > 0) {
        const i = Math.floor(Math.random() * m--);
        const t = this.listeProjets[m];
        this.listeProjets[m] = this.listeProjets[i];
        this.listeProjets[i] = t;
      }
    }
    console.log('liste Projet : ' + this.listeProjets);
  }

  public getAndChangeGauche() {
    this.gauche = !this.gauche;
    if (this.gauche) {
      return true;
    } else {
      return false;
    }
  }


}
