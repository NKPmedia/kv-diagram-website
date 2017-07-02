import {StringMethods} from "../phrase/string-methods";
import {forEach} from "@angular/router/src/utils/collection";
export class Primimplikante {


  private _vars: string[] = new Array();
  private _amountOfPositivVars: number = 0;
  private onlyPositivars: string[] = new Array();
  private _usedForCombination = false;
  private _decEquivalents: number[] = Array();


  constructor(varNames: string[], decEquivalents: number[] = new Array()) {

    this._decEquivalents = decEquivalents;

    for(let varName of varNames) {

      this._vars.push(varName);
      this.onlyPositivars.push(StringMethods.replaceAll(varName,"~",""));

      if(!(varName.indexOf("~") >= 0)) this._amountOfPositivVars++;
    }

    if(this._decEquivalents.length == 0) this.genDecEquivalent();
  }


  public toString() {
    let string= "";
    for(let vars of this._vars) {
      string += vars;
    }

    return string;
  }

  public getDcEquivalentsString() {
    let string= "";
    for(let vars of this.decEquivalents) {
      string += vars+" ";
    }

    return string;
  }

  get vars(): string[] {
    return this._vars;
  }

  get decEquivalents(): number[] {
    return this._decEquivalents;
  }

  get usedForCombination(): boolean {
    return this._usedForCombination;
  }

  set usedForCombination(value: boolean) {
    this._usedForCombination = value;
  }

  get amountOfPositivVars(): number {
    return this._amountOfPositivVars;
  }

  /**
   * @brief returns a simplification of both primimplikante or null if you cant combine them
   * @param primimplikante2
   */
  public combine(primimplikante2: Primimplikante): Primimplikante {
    let hammingDistance = 0;
    let varsOfNewPrimimplikante = Array();

    if(!this.representSameVars(primimplikante2)) return null;

    for(let varName of this._vars) {
      for(let varName2 of primimplikante2._vars) {

        if(this.sameVar(varName,varName2)) {
          if(varName2 == varName) {
            varsOfNewPrimimplikante.push(varName);
          }
          else {
            hammingDistance++;
          }
        }

      }
    }

    let decEquivalents: number[] = this.decEquivalents.concat(primimplikante2.decEquivalents);
    if(hammingDistance == 1) return new Primimplikante(varsOfNewPrimimplikante,decEquivalents);
    return null;
  }

  private sameVar(varName: string, varName2: string): boolean {
    let varN2 = StringMethods.replaceAll(varName2,"~","");
    let varN = StringMethods.replaceAll(varName,"~","");

    if(varN == varN2) return true;
    return false;
  }

  private representSameVars(primimplikante2: Primimplikante) {
    for(let varN of this.onlyPositivars) {
      if(primimplikante2.onlyPositivars.indexOf(varN) == -1) return false;
    }

    return true;
  }

  private sortVars() {
    this._vars = this._vars.sort((n1, n2) => {
      n1 = StringMethods.replaceAll(n1,"~","");
      n2 = StringMethods.replaceAll(n2,"~","");
      if (n1 > n2) {
        return 1;
      }

      if (n1 < n2) {
        return -1;
      }

      return 0;
    })
  }

  genDecEquivalent() {
    this.sortVars();
    this._decEquivalents[0] = 0;
    let exponent = 0;
    for(let varName of this._vars) {
      if(varName.indexOf("~") == -1) this._decEquivalents[0] += 2 ** exponent;
      exponent++;
    }
  }
}
