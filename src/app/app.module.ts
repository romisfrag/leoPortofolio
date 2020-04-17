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

/* Services */
import { ConstantesService } from './services/constantes.service';


import { Routes, RouterModule } from '@angular/router';
import { ImageGaleryComponent } from './image-galery/image-galery.component';
import { BeforeScrollPageComponent } from './before-scroll-page/before-scroll-page.component';
import { ProjetsService } from './services/projets.service';
import { ProjetImageGalerieComponent } from './projet-image-galerie/projet-image-galerie.component';



const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'photographie', component: PhotographieComponent },
  { path: 'video', component: VideoComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
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
    ProjetImageGalerieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ConstantesService,
    ProjetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
