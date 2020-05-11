import { Projet } from '../../app/models/projet.model';

export class ProjetsService {


  // liste des projets
  private listeProjets: Projet[] = [
    {
      folderName: 'Adidas-Elisa_pineau',
      categorie: 'video',
      titre: 'adidas super long titre pour voir',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: true,
      videoPageBeforeScroll: true,
      legendeTitle: 'adidas',
      legendeTexte: 'Elisa Pineau',
      description: 'ceci est la description du projet addias il faut voir si je peux faire des retour a la' +
      'ligne quand la ligne est trop longue tatatatatatijdsfjsdhfsjdhfisjfdhisdhf et maintenant un ' +
      'retour a la ligne voulu <br> jespere que ça a marche',
      templateAgencementPhotos: 0,
      nombrePhotos: 8,
      client: 'bvb',
      lieux: 'stade',
      format: '1080*900',
      photographie: 'Léonard BEHNAMOU'
    },
    {
      folderName: 'BVB-PSG',
      categorie: 'photographie',
      titre: 'BVB - PSG',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: false,
      videoPageBeforeScroll: false,
      legendeTitle: 'PSG',
      legendeTexte: 'Ultra : PSG vs BVB',
      description: 'ceci est la description du projet PSG',
      templateAgencementPhotos: 0,
      nombrePhotos: 0,
      client: 'bvb',
      lieux: 'stade',
      format: '1080*900',
      photographie: 'Léonard BEHNAMOU'
    },
    {
      folderName: 'PSG-OM',
      categorie: 'video',
      titre: 'PSG - OM',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: true,
      videoPageBeforeScroll: false,
      legendeTitle: 'PSG',
      legendeTexte: 'PSG - OM',
      description: 'ceci est la description du projet PSG OM il faut voir si je peux faire des retour a la' +
      'ligne quand la ligne est trop longue tatatatatatijdsfjsdhfsjdhfisjfdhisdhf et maintenant un ' +
      'retour a la ligne voulu <br> jespere que ça a marche',
      templateAgencementPhotos: 0,
      nombrePhotos: 0,
      client: 'bvb',
      lieux: 'stade',
      format: '1080*900',
      photographie: 'Léonard BEHNAMOU'
    },
    {
      folderName: 'Jardin_Noir-Djibz',
      categorie: 'photographie',
      titre: 'Jardin Noir - Djibz',
      date: new Date('December 17, 1995 03:24:00'),
      portrait: true,
      videoPageBeforeScroll: false,
      legendeTitle: 'Jardin Noir',
      legendeTexte: 'Djibz',
      description: 'ceci est la description du projet Djibz',
      templateAgencementPhotos: 0,
      nombrePhotos: 0,
      client: 'bvb',
      lieux: 'stade',
      format: '1080*900',
      photographie: 'Léonard BEHNAMOU'
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

  public getUrlImgProjetIndex(projet: Projet, index: number) {
    return '../../assets/projets/' + projet.folderName + '/Photo/' + index + '.jpg';
  }


  public getProjetByFolderName(folder: string) {
    for (let i = 0; i < this.listeProjets.length; i++) {
      if (folder.includes(this.listeProjets[i].folderName)) {
        return this.listeProjets[i];
      }
    }
  }


}
