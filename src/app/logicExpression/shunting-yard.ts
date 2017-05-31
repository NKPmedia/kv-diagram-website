import {AbstractLogicExpression} from "./logic-expression-abstract";
import {LogicVar} from "./logic-var";
import {LogicBracketOpen} from "./logic-bracket-open";
import {LogicBracketClose} from "./logic-bracket-close";

export class ShuntingYard {

  public startAlgo(logicObjectPhrase: Array<AbstractLogicExpression>): Array<AbstractLogicExpression> {

    let operands: Array<AbstractLogicExpression> = new Array<AbstractLogicExpression>();
    let vars: Array<AbstractLogicExpression> = new Array<AbstractLogicExpression>();

    for(let i = 0; i < logicObjectPhrase.length; i++) {
      if(logicObjectPhrase[i] instanceof LogicVar) {
        vars.push(logicObjectPhrase[i]);
      }

      else if(logicObjectPhrase[i] instanceof LogicBracketOpen) {
        operands.push(logicObjectPhrase[i]);
      }

      else if(logicObjectPhrase[i] instanceof LogicBracketClose) {
        while(operands.length != 0) {
          let stackOperand = operands.pop();
          if(stackOperand instanceof LogicBracketOpen) break;
          vars.push(stackOperand);
        }
      }

      else {
        while(operands.length != 0) {
          let stackOperand = operands.pop();
          if(logicObjectPhrase[i].isLeftAssociative() && logicObjectPhrase[i].precedenceLessOrEqual(stackOperand)) {
            vars.push(stackOperand);
          } else if(logicObjectPhrase[i].isRightAssociative() && logicObjectPhrase[i].precedenceLess(stackOperand)) {
            vars.push(stackOperand);
          } else {
            operands.push(stackOperand);
            break;
          }
        }
        operands.push(logicObjectPhrase[i]);
      }

    }

    while(operands.length != 0) {
      let stackOperand = operands.pop();
      vars.push(stackOperand);
    }

    return vars;
  }
}
