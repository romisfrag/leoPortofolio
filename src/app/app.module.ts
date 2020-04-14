import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Component */
import { ProjetsComponent } from './projets/projets.component';
import { BarreNavigationComponent } from './barre-navigation/barre-navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PhotographieComponent } from './photographie/photographie.component';
import { VideoComponent } from './video/video.component';

/* Services */
import { ConstantesService } from './services/constantes.service';


import { Routes, RouterModule } from '@angular/router';
import { ImageGaleryComponent } from './image-galery/image-galery.component';
import { BeforeScrollPageComponent } from './before-scroll-page/before-scroll-page.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'photographie', component: PhotographieComponent },
  { path: 'video', component: VideoComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    BarreNavigationComponent,
    AccueilComponent,
    PhotographieComponent,
    VideoComponent,
    ImageGaleryComponent,
    BeforeScrollPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ConstantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
