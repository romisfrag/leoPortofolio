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
