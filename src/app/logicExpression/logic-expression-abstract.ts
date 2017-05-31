import {LogicExpression} from "./logic-expression";

export abstract class AbstractLogicExpression {

  protected _logicChildExpressions: AbstractLogicExpression[] = Array();
  protected rightAssociative = false;
  protected _precedence = 0;
  protected _parsed = false;

  get parsed(): boolean {
    return this._parsed;
  }

  set parsed(value: boolean) {
    this._parsed = value;
  }

  get precedence(): number {
    return this._precedence;
  }

  get logicChildExpressions(): AbstractLogicExpression[] {
    return this._logicChildExpressions;
  }

  set logicChildExpressions(value: AbstractLogicExpression[]) {
    this._logicChildExpressions = value;
  }

  abstract toString(): string
  abstract phraseToString(): string

  abstract getResult(): boolean

  public add(oldVar: AbstractLogicExpression) {
    this.logicChildExpressions.push(oldVar);
  }

  public isRightAssociative() {
    if(this.rightAssociative) return true;
    else return false;
  }

  public isLeftAssociative() {
    if(!this.rightAssociative) return true;
    else return false;
  }

  public precedenceLessOrEqual(otherOperand: AbstractLogicExpression) {
    if(this._precedence <= otherOperand.precedence) return true;
    else return false;
  }

  public precedenceLess(otherOperand: AbstractLogicExpression) {
    if(this._precedence < otherOperand.precedence) return true;
    else return false;
  }

}

