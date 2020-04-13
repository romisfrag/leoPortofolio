import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ConstantesService } from '../services/constantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-navigation',
  templateUrl: './barre-navigation.component.html',
  styleUrls: ['./barre-navigation.component.scss']
})
export class BarreNavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  public listeRoutes: string[];
  elementPosition: any;
  sticky = false;

  constructor(private constantesService: ConstantesService, private router: Router) {
    this.listeRoutes = this.constantesService.getRoutListeWithoutElement(this.router.url.substr(1));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}
