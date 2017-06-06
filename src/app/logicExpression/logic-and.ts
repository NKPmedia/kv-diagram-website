import {AbstractLogicExpression} from "./logic-expression-abstract";

export class LogicAnd extends AbstractLogicExpression {

  protected rightAssociative = false;
  protected _precedence = 2;

  public toString(): string {
    return "*";
  }

  public phraseToString(): string {
    let result: string = "(";
    for(let expression of this.logicChildExpressions) {
      result += expression.phraseToString() +  "*";
    }
    result = result.substring(0, result.length - 1);
    result += ")";

    return result;
  }

  public getResult(): boolean {
    let result: boolean = true;
    for(let expression of this.logicChildExpressions) {
      result = result && expression.getResult();
    }
    return result;
  }
}
