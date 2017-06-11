import {AbstractLogicExpression} from "./logic-expression-abstract";

export class LogicBracketClose extends AbstractLogicExpression{

  protected _expressionType = ")";

  phraseToString(): string {
    return ")";
  }

  public toString(): string {
    let result: string = ")";
    return result;
  }

  public getResult(): boolean {
    return false;
  }

}
