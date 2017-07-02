import {Component, OnInit} from '@angular/core';
import {LogicPhrase} from "../phrase/logic-phrase";
import {LogicRootExpression} from "../logicExpression/logic-root-expression";
import {StringMethods} from "../phrase/string-methods";

@Component({
  selector: 'app-basic-logic-phrase-info',
  templateUrl: './basic-logic-phrase-info.component.html',
  styleUrls: ['./basic-logic-phrase-info.component.css'],
})
export class BasicLogicPhraseInfoComponent implements OnInit {

  private _logicPhrase: LogicPhrase = new LogicPhrase(0, [], "");
  private _logicRootExpression: LogicRootExpression = new LogicRootExpression();
  private _logicRootExpressionInDF: LogicRootExpression = new LogicRootExpression();
  logicRootExpressionInDNF: LogicRootExpression = new LogicRootExpression();

  constructor() { }

  ngOnInit() {
  }


  set logicPhrase(value: LogicPhrase) {
    this._logicPhrase = value
  }


  get logicPhrase(): LogicPhrase {
    return this._logicPhrase;
  }

  get logicRootExpressionInDF(): LogicRootExpression {
    return this._logicRootExpressionInDF;
  }

  set logicRootExpressionInDF(value: LogicRootExpression) {
    this._logicRootExpressionInDF = value;
  }

  get logicRootExpression(): LogicRootExpression {
    return this._logicRootExpression;
  }

  set logicRootExpression(value: LogicRootExpression) {
    this._logicRootExpression = value;
  }
}
