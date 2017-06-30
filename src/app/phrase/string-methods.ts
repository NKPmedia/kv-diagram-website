export class StringMethods {

  public static replaceAll(str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }

  public static escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  public static cleanUpDNF(phrase: string): string {
    phrase = StringMethods.replaceAll(phrase," ","");
    phrase = StringMethods.replaceAll(phrase,"(","");
    phrase = StringMethods.replaceAll(phrase,")","");
    return phrase;
  }
}
