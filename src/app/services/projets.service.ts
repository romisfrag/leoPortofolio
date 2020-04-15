import { Projet } from '../../app/models/projet.model';

export class ProjetsService {


  // liste des projets
  private listeProjets: Projet[] = [
    {
      folderName: 'Adidas-Elisa pineau',
      categorie: 'video',
      titre: 'adidas',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: true,
      legendeTitle: 'adidas',
      legendeTexte: 'Elisa Pineau',
      description: 'ceci est la description du projet addias'
    },
    {
      folderName: 'BVB-PSG',
      categorie: 'photographie',
      titre: 'BVB - PSG',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: false,
      legendeTitle: 'PSG',
      legendeTexte: 'Ultra : PSG vs BVB',
      description: 'ceci est la description du projet PSG'
    },
    {
      folderName: 'Jardin Noir-Djibz',
      categorie: 'photographie',
      titre: 'Jardin Noir - Djibz',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: true,
      legendeTitle: 'Jardin Noir',
      legendeTexte: 'Djibz',
      description: 'ceci est la description du projet Djibz'
    }
  ];

  public getListeProjet() {
    return this.listeProjets;
  }

  public getListeProjetFiltre(filtre: string) {
    if (filtre.includes('accueil')) {
      return this.listeProjets;
    }
    const returnList: Projet[] = [];
    for (let i = 0; i < this.listeProjets.length; i++) {
      if (this.listeProjets[i].categorie.includes(filtre)) {
        returnList.push(this.listeProjets[i]);
      }
    }
    return returnList;
  }

  public getUrlImgProjet(projet: Projet) {
    return '../../assets/projets/' + projet.folderName + '/Photo/0.png';
  }


}
