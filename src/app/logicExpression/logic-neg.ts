import {AbstractLogicExpression} from "./logic-expression-abstract";

export class LogicNeg extends AbstractLogicExpression {

  protected rightAssociative = true;
  protected _precedence = 3;

  phraseToString(): string {
    if(typeof this._logicChildExpressions[0] !== "undefined") {
      return "~"+this._logicChildExpressions[0].phraseToString();
    } else {
      return "";
    }
  }

  public toString(): string {
    return "~";
  }

  public getResult(): boolean {
    if(typeof this._logicChildExpressions[0] !== "undefined") {
      return !this._logicChildExpressions[0].getResult();
    } else {
      return false;
    }
  }

}
