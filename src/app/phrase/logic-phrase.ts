export class LogicPhrase {

  private _lengh: number = 0;
  private _varNames:string[];
  private _phrase: string = "";


  constructor(lengh: number, varNames: string[], phrase: string) {
    this._lengh = lengh;
    this._varNames = varNames;
    this._phrase = phrase;
  }

  get lengh(): number {
    return this._lengh;
  }

  set lengh(value: number) {
    this._lengh = value;
  }

  varCount(): number {
    return this._varNames.length;
  }
  get varNames(): string[] {
    return this._varNames;
  }

  set varNames(value: string[]) {
    this._varNames = value;
  }

  get phrase(): string {
    return this._phrase;
  }

  set phrase(value: string) {
    this._phrase = value;
  }
}
