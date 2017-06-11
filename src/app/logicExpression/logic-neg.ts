import {AbstractLogicExpression} from "./logic-expression-abstract";
import {LogicVar} from "./logic-var";

export class LogicNeg extends AbstractLogicExpression {

  protected rightAssociative = true;
  protected _precedence = 3;
  protected _expressionType = "~";

  constructor(logicExpression: AbstractLogicExpression = null) {
    super();
    if(logicExpression != null) this.logicChildExpressions[0] = logicExpression;
  }

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
