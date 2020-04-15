import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetsService } from '../services/projets.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() projetInput: Projet;

  premierePartie: string;
  secondePartie: string;
  url: string;


  constructor(private projetsService: ProjetsService) {

   }

  ngOnInit() {
    console.log('projet : ' + this.projetInput);
    this.premierePartie = this.projetInput.legendeTitle;
    this.secondePartie = this.projetInput.legendeTexte;
  }

  public getPathName(projet: Projet) {
    return this.projetsService.getUrlImgProjet(projet);
  }

}
