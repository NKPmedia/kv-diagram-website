import {LogicPhrase} from "../phrase/logic-phrase";
import {Primimplikante} from "./primimplikante";
import {StringMethods} from "../phrase/string-methods";
import {analyzeAndValidateNgModules} from "@angular/compiler";
import * as _ from 'lodash';
import {AbstractWalker} from "tslint";

export class QMC {

  private _simplificationTable: Primimplikante[][][];
  private _notCombinedPrimimplikanten: Primimplikante[] = new Array();
  private _restMatrix: string[][] = new Array();
  private _existingDcEquivalebnts: number[];
  private _essentialPrimeImplicants: Primimplikante[] = new Array();
  private actualPrimeImplicantCombination: Primimplikante[];
  private _neededDcEquivalents: number[] = new Array();
  private _bestCoverage: Primimplikante[] = new Array();
  private _notEssentialDcEquivalents: number[] = Array();


  get simplificationTable(): Primimplikante[][][] {
    return this._simplificationTable;
  }


  get notEssentialDcEquivalents(): number[] {
    return this._notEssentialDcEquivalents;
  }

  get notCombinedPrimimplikanten(): Primimplikante[] {
    return this._notCombinedPrimimplikanten;
  }

  get restMatrix(): string[][] {
    return this._restMatrix;
  }

  get essentialPrimeImplicants(): Primimplikante[] {
    return this._essentialPrimeImplicants;
  }

  get neededDcEquivalents(): number[] {
    return this._neededDcEquivalents;
  }

  get bestCoverage(): Primimplikante[] {
    return this._bestCoverage;
  }


  get existingDcEquivalebnts(): number[] {
    return this._existingDcEquivalebnts;
  }

  public simplify(logicPhrase: LogicPhrase): string {

    this.initSimplificationTable(logicPhrase.varCount());
    this.generatePrimimplikante(logicPhrase.phrase);

    let round = 1;
    while(true) {
      let newColume = this.combinePrimimplikants(round, logicPhrase.varCount());
      this.findNotCombinedPrimimplikantes(round-1);
      if(!newColume) {
        this.simplificationTable.pop();
        break;
      }
      round++;
    }

    this.findMinimalExpression();

    return "";
  }


  private generatePrimimplikante(phrase: string) {
    phrase = StringMethods.cleanUpDNF(phrase);
    let conjunctionTerms = phrase.split("+");

    for(let conjunctionTerm of conjunctionTerms) {
      let varNames = conjunctionTerm.split("*");
      let primiplikant = new Primimplikante(varNames);
      let amountPositivVars = primiplikant.amountOfPositivVars;
      this._simplificationTable[0][amountPositivVars].push(primiplikant);
    }
  }

  private initSimplificationTable(amountVars: number) {
    this._simplificationTable = new Array();
    this._simplificationTable[0] = new Array();

    for(let i = 0; i <= amountVars; i++) {
      this._simplificationTable[0][i] = new Array();
    }
  }

  /**
   *
   * @param round
   * @return returns true if it created a new colume in the simplificationTable
   */
  private combinePrimimplikants(round: number, amountVars: number): boolean {
    this._simplificationTable[round] = new Array();
    let newColume = false;

    for(let i = 0; i <= amountVars-round; i++) {
      this._simplificationTable[round][i] = new Array();
    }

    for(let amountClassIndex = 0; amountClassIndex < this._simplificationTable[round-1].length; amountClassIndex++) {
      for(let primimplikante of this._simplificationTable[round-1][amountClassIndex]) {

        if (typeof this._simplificationTable[round - 1][amountClassIndex + 1] !== "undefined") {
          for (let primimplikante2 of this._simplificationTable[round - 1][amountClassIndex + 1]) {

            let newPrimimplikante = primimplikante.combine(primimplikante2);
            if(newPrimimplikante != null){
              newColume = true;
              if(!this.allreadyExist(newPrimimplikante,this._simplificationTable[round][amountClassIndex])) {
                this._simplificationTable[round][amountClassIndex].push(newPrimimplikante);
              }
              primimplikante2.usedForCombination = true;
              primimplikante.usedForCombination = true;
            }
          }
        }
      }
    }
    return newColume;
  }

  private findNotCombinedPrimimplikantes(round: number) {
    for(let amountClass of this._simplificationTable[round]) {
      for(let primim of amountClass) {
        if(!primim.usedForCombination) this._notCombinedPrimimplikanten.push(primim);
      }
    }
  }

  private findMinimalExpression() {
    this.generateRestMatrix();
    this.findEssentialPrimeImplicants();
    this.actualPrimeImplicantCombination = _.cloneDeep(this._essentialPrimeImplicants);

    /**
     * lets start to solve the NP-complete problem XD
     * calculate slave
     */
    this._bestCoverage = this.findBestCovareg(this._neededDcEquivalents,this._essentialPrimeImplicants,_.cloneDeep(this._essentialPrimeImplicants));
  }

  private generateRestMatrix() {
    this.existingDcEquivalents();
    let i = 0;
    for(let primeImplicant of this._notCombinedPrimimplikanten) {
      this._restMatrix[i] = new Array();
      for(let dcEquivalent of this._existingDcEquivalebnts) {
        if(primeImplicant.decEquivalents.indexOf(dcEquivalent) != -1) this._restMatrix[i][dcEquivalent] = "x";
        else this._restMatrix[i][dcEquivalent] = " ";
      }
      i++;
    }
  }

  private findEssentialPrimeImplicants() {
    for(let dcEquivalent of this._existingDcEquivalebnts) {
      let amountOfCovareg = 0;
      let lastCoverPrimeImplicant = 0;
      let i;
      for(i = 0; i < this._notCombinedPrimimplikanten.length; i++) {
        if(this._restMatrix[i][dcEquivalent] == "x") {
          amountOfCovareg++;
          lastCoverPrimeImplicant = i;
        }
      }
      if(amountOfCovareg == 1) {
        if(this.essentialPrimeImplicants.indexOf(this._notCombinedPrimimplikanten[lastCoverPrimeImplicant]) == -1) {
          this._essentialPrimeImplicants.push(this._notCombinedPrimimplikanten[lastCoverPrimeImplicant]);
        }
      }
      else {
        this._neededDcEquivalents.push(dcEquivalent);
        this._notEssentialDcEquivalents.push(dcEquivalent);
      }
    }

    //Delete all covered dcEquivalents
    for(let implicant of this._essentialPrimeImplicants) {
      for(let dcEquivalent of implicant.decEquivalents) {
        var index = this._neededDcEquivalents.indexOf(dcEquivalent, 0);
        if (index > -1) {
          this._neededDcEquivalents.splice(index, 1);
        }
      }
    }
  }

  private existingDcEquivalents() {
    this._existingDcEquivalebnts = new Array();
    for(let primeImplicant of this._notCombinedPrimimplikanten) {
      for(let dcEquivalent of primeImplicant.decEquivalents) {
        if(this._existingDcEquivalebnts.indexOf(dcEquivalent) == -1) this._existingDcEquivalebnts.push(dcEquivalent);
      }
    }
    this._existingDcEquivalebnts.sort((n1,n2) => {
      if (n1 > n2) {
        return 1;
      }

      if (n1 < n2) {
        return -1;
      }

      return 0;
    });
  }

  private findBestCovareg(neededDcEquivalents: number[], usedPrimImplicants: Primimplikante[], any: Primimplikante[]): Primimplikante[] {
    let dcEquivalentToCover = neededDcEquivalents.pop();
    neededDcEquivalents.push(dcEquivalentToCover);
    let amountOfPrimeImplicants = 99999999999999999999;

    if(neededDcEquivalents.length == 0) return usedPrimImplicants;

    for(let onePrimeImplicant of this._notCombinedPrimimplikanten) {
      if(onePrimeImplicant.decEquivalents.indexOf(dcEquivalentToCover) != -1) {

        let newNeededDcEquivalents = _.cloneDeep(neededDcEquivalents);
        for(let dcEquivalent of onePrimeImplicant.decEquivalents) {
          var index = newNeededDcEquivalents.indexOf(dcEquivalent, 0);
          if (index > -1) {
            newNeededDcEquivalents.splice(index, 1);
          }
        }

        let newNeededPrimImplicants = _.cloneDeep(usedPrimImplicants);
        newNeededPrimImplicants.push(onePrimeImplicant);
        let acutalUsedPrimImplicants = this.findBestCovareg(newNeededDcEquivalents, newNeededPrimImplicants, any);
        if(amountOfPrimeImplicants >= acutalUsedPrimImplicants.length) {
          amountOfPrimeImplicants = acutalUsedPrimImplicants.length
          usedPrimImplicants = acutalUsedPrimImplicants;
        }
      }
    }

    return usedPrimImplicants;
  }

  private allreadyExist(newPrimimplikante: Primimplikante, param2: Primimplikante[]) {
    for(let prim of param2) {
      if(prim.toString() == newPrimimplikante.toString()) {
        return true;
      }
    }
    return false;
  }
}
