import {AbstractLogicExpression} from "./logic-expression-abstract";
import {LogicOr} from "./logic-or";
import {LogicAnd} from "./logic-and";
import {LogicNeg} from "./logic-neg";
import {LogicVar} from "./logic-var";

export class LogicTreeUtils {

  public dissolveLogicAnd(actualLogicExpression: AbstractLogicExpression): AbstractLogicExpression {

      if(actualLogicExpression instanceof LogicAnd) {
        let logicConjunction = actualLogicExpression;
        let var1 = logicConjunction.logicChildExpressions[0];
        let var2 = logicConjunction.logicChildExpressions[1];

        if(var1 instanceof LogicOr && var2 instanceof LogicOr) {
          /*
           * Do all this crazy stuff to have this result:
           * (a+b)*(c+d) = (((ac+ad)+bc)+db)
           *
           * Because on or can only have two child expressions
           */

          let and1 = new LogicAnd();
          and1.add(var1.logicChildExpressions[0]);
          and1.add(var2.logicChildExpressions[0]);
          let and2 = new LogicAnd();
          and2.add(var1.logicChildExpressions[0]);
          and2.add(var2.logicChildExpressions[1]);

          let or1 = new LogicOr();
          or1.add(and1);
          or1.add(and2);

          let and3 = new LogicAnd();
          and3.add(var1.logicChildExpressions[1]);
          and3.add(var2.logicChildExpressions[0]);

          let or2 = new LogicOr();
          or2.add(or1);
          or2.add(and3);

          let and4 = new LogicAnd();
          and4.add(var1.logicChildExpressions[1]);
          and4.add(var2.logicChildExpressions[1]);

          let or3 = new LogicOr();
          or3.add(or2);
          or3.add(and4);

          actualLogicExpression = or3;
        }

        else if(var1 instanceof LogicOr && var2 instanceof LogicVar) {
          actualLogicExpression = new LogicOr();

          let and1 = new LogicAnd();
          and1.add(var2);
          and1.add(var1.logicChildExpressions[0]);

          let and2 = new LogicAnd();
          and2.add(var2);
          and2.add(var1.logicChildExpressions[1]);

          actualLogicExpression.add(and1);
          actualLogicExpression.add(and2);
        }

        else if(var2 instanceof LogicOr && var1 instanceof LogicVar) {
          actualLogicExpression = new LogicOr();

          let and1 = new LogicAnd();
          and1.add(var1);
          and1.add(var2.logicChildExpressions[0]);

          let and2 = new LogicAnd();
          and2.add(var1);
          and2.add(var2.logicChildExpressions[1]);

          actualLogicExpression.add(and1);
          actualLogicExpression.add(and2);
        }
      }

      for(let i = 0; i < actualLogicExpression.logicChildExpressions.length; i++) {
        actualLogicExpression.logicChildExpressions[i] = this.dissolveLogicAnd(actualLogicExpression.logicChildExpressions[i]);
      }
      return actualLogicExpression;
  }

  public dissolveLogicNegs(actualLogicExpression: AbstractLogicExpression): AbstractLogicExpression {

    if(actualLogicExpression.expressionType == "~") {

      let logicConjunction = actualLogicExpression.logicChildExpressions[0];

      let var1 = logicConjunction.logicChildExpressions[0];
      let var2 = logicConjunction.logicChildExpressions[1];

      if(logicConjunction.expressionType == "*") {
        actualLogicExpression = new LogicOr();
        actualLogicExpression.add(new LogicNeg(var1));
        actualLogicExpression.add(new LogicNeg(var2));
      }
      else if(logicConjunction.expressionType == "+") {
        actualLogicExpression = new LogicAnd();
        actualLogicExpression.add(new LogicNeg(var1));
        actualLogicExpression.add(new LogicNeg(var2));
      }
    }


    for(let i = 0; i < actualLogicExpression.logicChildExpressions.length; i++) {
      actualLogicExpression.logicChildExpressions[i] = this.dissolveLogicNegs(actualLogicExpression.logicChildExpressions[i]);
    }


    return actualLogicExpression;
  }
}
