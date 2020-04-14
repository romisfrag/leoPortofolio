import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, ViewChildren } from '@angular/core';
import { BarreNavigationComponent } from '../barre-navigation/barre-navigation.component';

@Component({
  selector: 'app-before-scroll-page',
  templateUrl: './before-scroll-page.component.html',
  styleUrls: ['./before-scroll-page.component.scss']
})
export class BeforeScrollPageComponent implements OnInit, AfterViewInit {

  @ViewChild('stickyMenu') navBar: ElementRef;

  @Input() titre: string;

  elementPosition: any;
  sticky = false;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.navBar.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) handleScroll() {
    const windowScroll = window.pageYOffset;
    console.log('windowScroll : ' + windowScroll + 'elementPosition' + this.elementPosition );
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


}
