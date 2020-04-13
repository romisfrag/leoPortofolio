export class ConstantesService {

  routesListe: string[] = ['accueil', 'photographie', 'video'];

  public getRouteListe() {
    return this.routesListe;
  }

  public getRoutListeWithoutElement(elem: string) {
    const returnListe: string[] = [];
    for (let i = 0; i < this.routesListe.length; i++) {
      if (!this.routesListe[i].includes(elem)) {
        returnListe.push(this.routesListe[i]);
      }
    }
    return returnListe;
  }

}
