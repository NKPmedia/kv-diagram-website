import {AbstractLogicExpression} from "./logic-expression-abstract";

export class LogicOr extends AbstractLogicExpression {

  protected rightAssociative = false;
  protected _precedence = 1;

  phraseToString(): string {
    let result: string = "(";
    for(let expression of this.logicChildExpressions) {
      result += expression.toString() +  "+";
    }
    result = result.substring(0, result.length - 1);
    result += ")";

    return result;
  }

  public toString(): string {
    return "+";
  }

  public getResult(): boolean {
    let result: boolean = true;
    for(let expression of this.logicChildExpressions) {
      result = result || expression.getResult();
    }
    return result;
  }
}
