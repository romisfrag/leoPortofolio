export class Projet {
  folderName: string;
  categorie: string;
  titre: string;
  date: Date;
  portrait: boolean;
  legendeTitle: string;
  legendeTexte: string;
  description: string;
  // 0 singinie portrait normal, 1 signifie grand portrait, 2 signifie paysage
  listeOrganisationPhoto: number[];
  // Pour le footer
  client: string;
  lieux: string;
  format: string;
  photographie: string;
}
