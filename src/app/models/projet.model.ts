export class Projet {
  folderName: string;
  categorie: string;
  titre: string;
  date: Date;
  portrait: boolean;
  videoPageBeforeScroll: boolean;
  legendeTitle: string;
  legendeTexte: string;
  description: string;
  /* 0 template classique avec que des portraits et une grande photo en deuxieme position
    1 template avec que des images en paysage de chaque cote
    2 template .....
  */
  templateAgencementPhotos: number;
  nombrePhotos: number;
  // Pour le footer
  client: string;
  lieux: string;
  format: string;
  photographie: string;
}
