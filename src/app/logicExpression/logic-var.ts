import {AbstractLogicExpression} from "./logic-expression-abstract";

export class LogicVar extends AbstractLogicExpression {

  private _value: boolean = false;
  private _name: string = "";
  protected _parsed = true;


  constructor(name: string) {
    super();
    this._name = name;
  }

  get value(): boolean {
    return this._value;
  }

  set value(value: boolean) {
    this._value = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  public toString(): string {
    return this._name;
  }

  phraseToString(): string {
    return this._name;
  }

  public getResult(): boolean {
    return this._value;
  }
}
