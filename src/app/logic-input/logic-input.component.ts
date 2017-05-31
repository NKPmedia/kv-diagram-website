import {Component, Input, OnInit} from '@angular/core';
import {BasicLogicPhraseParser} from "../phrase/basic-logic-phrase-parser";
import {LogicPhrase} from "../phrase/logic-phrase";
import {BasicLogicPhraseInfoComponent} from "../basic-logic-phrase-info/basic-logic-phrase-info.component";
import {KVDiagram} from "../kv-diagram-model/kvdiagram";
import {KVDiagramComponent} from "../kvdiagram/kvdiagram.component";
import {LogicExpression} from "../logicExpression/logic-expression";

@Component({
  selector: 'app-logic-input',
  templateUrl: './logic-input.component.html',
  styleUrls: ['./logic-input.component.css'],
  providers: [BasicLogicPhraseParser]
})
export class LogicInputComponent implements OnInit {
  @Input()
  basicLogicPhraseInfoCom: BasicLogicPhraseInfoComponent;
  @Input()
  kvDiagramCom: KVDiagramComponent;

  logicPhraseString = "";
  logicExtraVars = "";
  private logicPhrase: LogicPhrase;

  constructor(private basicLogicPhraseParser: BasicLogicPhraseParser) { }

  ngOnInit() {
  }

  parseLogicPhrase() {
    this.logicPhrase = this.basicLogicPhraseParser.parse(this.logicPhraseString, this.logicExtraVars);

    this.basicLogicPhraseInfoCom.logicPhrase = this.logicPhrase;

    this.kvDiagramCom.parse(this.logicPhrase);

    let logicExpression = new LogicExpression();
    logicExpression.parseLogicString(this.logicPhrase.phrase);

    this.basicLogicPhraseInfoCom.logicExpression = logicExpression;

  }



}
