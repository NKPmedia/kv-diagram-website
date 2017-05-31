import {AbstractLogicExpression} from "./logic-expression-abstract";
import {LogicVar} from "./logic-var";
import {LogicAnd} from "./logic-and";
import {LogicOr} from "./logic-or";
import {LogicNeg} from "./logic-neg";
import {LogicBracketClose} from "./logic-bracket-close";
import {LogicBracketOpen} from "./logic-bracket-open";
import {ShuntingYard} from "./shunting-yard";
import * as owl from "../copy";

export class LogicExpression extends AbstractLogicExpression {

  phraseToString(): string {
    if (typeof this._logicChildExpressions[0] !== "undefined") {
      return this._logicChildExpressions[0].toString();
    }
    return "";
  }

  private possibleOperands: string[] = Array("~","+","*","(",")");
  private _shuntedPhrase: Array<AbstractLogicExpression> = Array();


  get shuntedPhrase(): Array<AbstractLogicExpression> {
    return this._shuntedPhrase;
  }

  public toString(): string {
    return "";
  }

  public getResult(): boolean {
    if(typeof this._logicChildExpressions[0] !== "undefined") {
      return this._logicChildExpressions[0].getResult();
    }
    return false;
  }

  public parseLogicString(logicPhrase: string) {

    let logicObjectPhrase = this.logicStringToObjectAarray(logicPhrase);

    let shuntigYard = new ShuntingYard();
    this._shuntedPhrase = shuntigYard.startAlgo(logicObjectPhrase);

    this.logicChildExpressions = this.parseShuntedYard(owl.deepCopy(this._shuntedPhrase,100));

  }

  private logicStringToObjectAarray(logicPhrase: string) {
    let logicObjectPhrase = Array();

    let actualConjunction: string = "";
    let actualVarName: string = "";


    for(let i = 0; i < logicPhrase.length; i++) {
      if(this.possibleOperands.indexOf(logicPhrase[i]) != -1 && actualVarName != "") {
        logicObjectPhrase.push(new LogicVar(actualVarName));
        actualVarName = "";
      }
      if(logicPhrase[i] == "~") {
        logicObjectPhrase.push(new LogicNeg());
      }

      else if(logicPhrase[i] == "+") {
        logicObjectPhrase.push(new LogicOr());
      }

      else if(logicPhrase[i] == "*") {
        logicObjectPhrase.push(new LogicAnd());
      }

      else if(logicPhrase[i] == "(") {
        logicObjectPhrase.push(new LogicBracketOpen());
      }

      else if(logicPhrase[i] == ")") {
        logicObjectPhrase.push(new LogicBracketClose());
      }

      else {
        actualVarName += logicPhrase[i];
      }
    }
    if(actualVarName != "") logicObjectPhrase.push(new LogicVar(actualVarName));
    return logicObjectPhrase;
  }

  private parseShuntedYard(_shuntedPhrase: Array<AbstractLogicExpression>): Array<AbstractLogicExpression> {

    let logicObjects: Array<AbstractLogicExpression> = this.reverseArray(_shuntedPhrase);
    let logicObjectResults: Array<AbstractLogicExpression> = Array();

    while(logicObjects.length > 0) {
      let logicObject = logicObjects.pop();

      while(logicObject.parsed) {
        logicObjectResults.push(logicObject)
        logicObject = logicObjects.pop();
      }

      if(logicObject instanceof LogicNeg) {

      } else {
        let var1 = logicObjectResults.pop();
        let var2 = logicObjectResults.pop();
        logicObject.add(var1);
        logicObject.add(var2);
        logicObject.parsed = true;
        logicObjectResults.push(logicObject);
      }
    }

    return logicObjects;
  }

  private reverseArray(array: Array<AbstractLogicExpression>): Array<AbstractLogicExpression> {
    let arrayR = Array();
    while(array.length > 0) {
      arrayR.push(array.pop());
    }
    return arrayR;
  }
}
