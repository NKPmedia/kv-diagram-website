import {LogicRootExpression} from "./logic-root-expression";
import {LogicNeg} from "./logic-neg";
import {LogicVar} from "./logic-var";
import {LogicAnd} from "./logic-and";
import {LogicOr} from "./logic-or";

export abstract class AbstractLogicExpression {

  protected _logicChildExpressions: AbstractLogicExpression[] = Array();
  protected rightAssociative = false;
  protected _precedence = 0;
  protected _parsed = false;
  protected _expressionType = "";

  get parsed(): boolean {
    return this._parsed;
  }

  set parsed(value: boolean) {
    this._parsed = value;
  }

  get expressionType(): string {
    return this._expressionType;
  }

  set expressionType(value: string) {
    this._expressionType = value;
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

