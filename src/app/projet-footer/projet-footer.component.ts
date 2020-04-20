import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-projet-footer',
  templateUrl: './projet-footer.component.html',
  styleUrls: ['./projet-footer.component.scss']
})
export class ProjetFooterComponent implements OnInit {

  @Input() projetInput: Projet;

  constructor() { }

  ngOnInit() {
  }

}
