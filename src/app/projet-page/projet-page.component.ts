import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetsService } from '../services/projets.service';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-projet-page',
  templateUrl: './projet-page.component.html',
  styleUrls: ['./projet-page.component.scss']
})
export class ProjetPageComponent implements OnInit, AfterViewInit {

  @ViewChild('stickyMenu') navBar: ElementRef;

  sticky = false;
  projet: Projet;
  elementPosition: any;


  constructor(private router: Router, private projetsService: ProjetsService) {
    this.projet = this.projetsService.getProjetByFolderName(this.router.url.substr(1));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.navBar.nativeElement.offsetTop;
  }

  public getPathName(projet: Projet) {
    return this.projetsService.getUrlImgProjet(projet);
  }

  public getVideoPath() {
    return this.projetsService.getUrlVideoBeforeScroll(this.projet);
  }

  @HostListener('window:scroll', ['$event']) handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
