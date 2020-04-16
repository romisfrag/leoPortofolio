export class ConstantesService {

  routesListe: string[] = ['accueil', 'photographie', 'video'];

  // Variable globale permettant de determiner si on veut avoir les trucs a gauche ou à droite
  private gauchePrecedent = true;

  public getGauchePrecedent() {
    return this.gauchePrecedent;
  }

  public switchGauchePrecedent() {
    this.gauchePrecedent = !this.gauchePrecedent;
  }

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

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
}

}
