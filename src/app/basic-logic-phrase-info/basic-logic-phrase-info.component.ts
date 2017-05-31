import {Component, OnInit} from '@angular/core';
import {LogicPhrase} from "../phrase/logic-phrase";
import {LogicExpression} from "../logicExpression/logic-expression";

@Component({
  selector: 'app-basic-logic-phrase-info',
  templateUrl: './basic-logic-phrase-info.component.html',
  styleUrls: ['./basic-logic-phrase-info.component.css'],
})
export class BasicLogicPhraseInfoComponent implements OnInit {

  private _logicPhrase: LogicPhrase = new LogicPhrase(0, [], "");
  private _logicExpression: LogicExpression = new LogicExpression();

  constructor() { }

  ngOnInit() {
  }


  set logicPhrase(value: LogicPhrase) {
    this._logicPhrase = value
  }

  get logicPhrase(): LogicPhrase {
    return this._logicPhrase;
  }


  get logicExpression(): LogicExpression {
    return this._logicExpression;
  }

  set logicExpression(value: LogicExpression) {
    this._logicExpression = value;
  }
}
