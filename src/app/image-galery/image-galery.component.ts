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
  gauche = true;
  chrome: boolean;

  constructor(private projetsService: ProjetsService, private constantesService: ConstantesService) {
    // Detection pour la rotation d'image
   this.chrome = (this.constantesService.getBrowserName().includes('chrome'));
  }

  ngOnInit() {
    this.listeProjets = this.projetsService.getListeProjetFiltre(this.filtre);
  }



  public getGauche() {
    return this.gauche;
  }
  public getAndChangeGauche() {
    this.gauche = !this.gauche;
    return this.gauche;
  }

}
