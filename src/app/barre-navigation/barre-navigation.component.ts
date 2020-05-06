import { Component, OnInit, Input } from '@angular/core';
import { ConstantesService } from '../services/constantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-navigation',
  templateUrl: './barre-navigation.component.html',
  styleUrls: ['./barre-navigation.component.scss']
})
export class BarreNavigationComponent implements OnInit {

  @Input() profil: boolean;

  public listeRoutes: string[];


  constructor(private constantesService: ConstantesService, private router: Router) {
    this.listeRoutes = this.constantesService.getRoutListeWithoutElement(this.router.url.substr(1));
  }

  ngOnInit() {
  }



}
