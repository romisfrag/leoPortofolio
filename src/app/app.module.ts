import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Component */
import { BarreNavigationComponent } from './barre-navigation/barre-navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PhotographieComponent } from './photographie/photographie.component';
import { VideoComponent } from './video/video.component';
import { PhotoComponent } from './photo/photo.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';
import { PrintComponent } from './print/print.component';
import { UxComponent } from './ux/ux.component';
/* Services */
import { ConstantesService } from './services/constantes.service';


import { Routes, RouterModule } from '@angular/router';
import { ImageGaleryComponent } from './image-galery/image-galery.component';
import { BeforeScrollPageComponent } from './before-scroll-page/before-scroll-page.component';
import { ProjetsService } from './services/projets.service';
import { ProjetImageGalerieComponent } from './projet-image-galerie/projet-image-galerie.component';
import { ProjetFooterComponent } from './projet-footer/projet-footer.component';
import { ProfilComponent } from './profil/profil.component';
import { CreditComponent } from './credit/credit.component';




const appRoutes: Routes = [
  { path: 'Accueil', component: AccueilComponent },
  { path: 'Photographie', component: PhotographieComponent },
  { path: 'Vidéo', component: VideoComponent },
  { path: 'Print', component: PrintComponent },
  { path: 'Ux', component: UxComponent },
  { path: 'Profil', component: ProfilComponent },
  { path: 'Credit', component: CreditComponent },
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' },
  { path: '**', component:  ProjetPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BarreNavigationComponent,
    AccueilComponent,
    PhotographieComponent,
    VideoComponent,
    ImageGaleryComponent,
    BeforeScrollPageComponent,
    PhotoComponent,
    ProjetPageComponent,
    ProjetImageGalerieComponent,
    PrintComponent,
    UxComponent,
    ProjetFooterComponent,
    ProfilComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [
    ConstantesService,
    ProjetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
