import {AbstractLogicExpression} from './logic-expression-abstract';
import {LogicVar} from './logic-var';
import {LogicAnd} from './logic-and';
import {LogicOr} from './logic-or';
import {LogicNeg} from './logic-neg';
import {LogicBracketClose} from './logic-bracket-close';
import {LogicBracketOpen} from './logic-bracket-open';
import {ShuntingYard} from './shunting-yard';
import * as _ from 'lodash';
import {LogicTreeUtils} from "./logic-tree-utils";
import {StringMethods} from "../phrase/string-methods";

export class LogicRootExpression extends AbstractLogicExpression {

  phraseToString(): string {
    if (typeof this._logicChildExpressions[0] !== 'undefined') {
      return this._logicChildExpressions[0].phraseToString();
    }
    return '';
  }

  phraseToStringWithoutBreakets(): string {
    if (typeof this._logicChildExpressions[0] !== 'undefined') {
      let tmp = StringMethods.replaceAll(this._logicChildExpressions[0].phraseToString(),")","")
      return StringMethods.replaceAll(tmp,"(","");
    }
    return '';
  }

  private possibleOperands: string[] = Array('~', '+', '*', '(', ')');
  private _shuntedPhrase: Array<AbstractLogicExpression> = Array();


  get shuntedPhrase(): Array<AbstractLogicExpression> {
    return this._shuntedPhrase;
  }

  public toString(): string {
    if (typeof this._logicChildExpressions[0] !== 'undefined') {
      return this._logicChildExpressions[0].toString();
    }
    return '';
  }

  public getResult(): boolean {
    if (typeof this._logicChildExpressions[0] !== 'undefined') {
      return this._logicChildExpressions[0].getResult();
    }
    return false;
  }

  public parseLogicString(logicPhrase: string) {

    logicPhrase = StringMethods.replaceAll(logicPhrase," ","");

    const logicObjectPhrase = this.logicStringToObjectAarray(logicPhrase);

    const shuntigYard = new ShuntingYard();
    this._shuntedPhrase = shuntigYard.startAlgo(logicObjectPhrase);

    const clonedShuntedPhrase: Array<AbstractLogicExpression> = _.cloneDeep(this._shuntedPhrase);

    this.logicChildExpressions = this.parseShuntedYard(clonedShuntedPhrase);

  }

  private logicStringToObjectAarray(logicPhrase: string) {
    const logicObjectPhrase = Array();

    const actualConjunction = '';
    let actualVarName = '';


    for (let i = 0; i < logicPhrase.length; i++) {
      if (this.possibleOperands.indexOf(logicPhrase[i]) != -1 && actualVarName != '') {
        logicObjectPhrase.push(new LogicVar(actualVarName));
        actualVarName = '';
      }
      if (logicPhrase[i] == '~') {
        logicObjectPhrase.push(new LogicNeg());
      }

      else if (logicPhrase[i] == '+') {
        logicObjectPhrase.push(new LogicOr());
      }

      else if (logicPhrase[i] == '*') {
        logicObjectPhrase.push(new LogicAnd());
      }

      else if (logicPhrase[i] == '(') {
        logicObjectPhrase.push(new LogicBracketOpen());
      }

      else if (logicPhrase[i] == ')') {
        logicObjectPhrase.push(new LogicBracketClose());
      }

      else {
        actualVarName += logicPhrase[i];
      }
    }
    if (actualVarName != '') logicObjectPhrase.push(new LogicVar(actualVarName));
    return logicObjectPhrase;
  }

  private parseShuntedYard(_shuntedPhrase: Array<AbstractLogicExpression>): Array<AbstractLogicExpression> {

    const logicObjects: Array<AbstractLogicExpression> = this.reverseArray(_shuntedPhrase);
    const logicObjectResults: Array<AbstractLogicExpression> = Array();

    while (logicObjects.length > 0) {
      let logicObject = logicObjects.pop();

      while (logicObject.parsed && logicObjects.length > 0) {
        logicObjectResults.push(logicObject);
        logicObject = logicObjects.pop();
      }
      if (logicObject.parsed) {
        logicObjects.push(logicObject);
        return logicObjects;
      }

      if (logicObject instanceof LogicNeg) {
        const var1 = logicObjectResults.pop();
        logicObject.add(var1);
        logicObject.parsed = true;
        logicObjects.push(logicObject);
      }

      else {
        const var1 = logicObjectResults.pop();
        const var2 = logicObjectResults.pop();
        logicObject.add(var1);
        logicObject.add(var2);
        logicObject.parsed = true;
        logicObjects.push(logicObject);
      }
    }

    return logicObjects;
  }

  private reverseArray(array: Array<AbstractLogicExpression>): Array<AbstractLogicExpression> {
    const arrayR = Array();
    while (array.length > 0) {
      arrayR.push(array.pop());
    }
    return arrayR;
  }

  public toDF() {
    let logicTreeUtils = new LogicTreeUtils();

    this.logicChildExpressions[0] = logicTreeUtils.dissolveLogicNegs(this.logicChildExpressions[0]);
    this.logicChildExpressions[0] = logicTreeUtils.dissolveLogicAnd(this.logicChildExpressions[0]);
  }
}
