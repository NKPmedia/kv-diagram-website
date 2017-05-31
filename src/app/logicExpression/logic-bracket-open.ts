import {AbstractLogicExpression} from "./logic-expression-abstract";
export class LogicBracketOpen extends AbstractLogicExpression{

  phraseToString(): string {
    return "(";
  }

  public toString(): string {
    let result: string = "(";
    return result;
  }

  public getResult(): boolean {
    return false;
  }

}
