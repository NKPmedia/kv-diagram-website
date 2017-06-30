import {Component, Input, OnInit} from '@angular/core';
import {BasicLogicPhraseParser} from "../phrase/basic-logic-phrase-parser";
import {LogicPhrase} from "../phrase/logic-phrase";
import {BasicLogicPhraseInfoComponent} from "../basic-logic-phrase-info/basic-logic-phrase-info.component";
import {KVDiagramComponent} from "../kvdiagram/kvdiagram.component";
import {LogicRootExpression} from "../logicExpression/logic-root-expression";
import * as _ from 'lodash';

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
  private logicDNFPhrase: LogicPhrase;

  constructor(private basicLogicPhraseParser: BasicLogicPhraseParser) { }

  ngOnInit() {
  }

  parseLogicPhrase() {

    this.kvDiagramCom.logicInputCom = this;

    let separatedVariableString = separateVariables(this.logicPhraseString);

    let logicRootExpression = new LogicRootExpression();
    logicRootExpression.parseLogicString(separatedVariableString);

    let logicExpressionInDNF: LogicRootExpression = _.cloneDeep(logicRootExpression);
    logicExpressionInDNF.toDNF();

    this.basicLogicPhraseInfoCom.logicRootExpression = logicRootExpression;
    this.basicLogicPhraseInfoCom.logicRootExpressionInDNF = logicExpressionInDNF;

    this.logicDNFPhrase = this.basicLogicPhraseParser.parse(logicExpressionInDNF.phraseToStringWithoutBreakets(), this.logicExtraVars);
    this.logicPhrase = this.basicLogicPhraseParser.parse(separatedVariableString, this.logicExtraVars);

    this.basicLogicPhraseInfoCom.logicPhrase = this.logicPhrase;

    this.kvDiagramCom.parse(this.logicDNFPhrase);
  }


  updateDNF(newDnf: string) {
    let logicRootExpression = new LogicRootExpression();
    logicRootExpression.parseLogicString(newDnf);
    this.basicLogicPhraseInfoCom.logicRootExpressionInDNF = logicRootExpression;
  }

  separateVariables(oldString: string) {
    var result = "";
    var last = "";
    for (var i = 0; i < oldString.length; i++) {
      var curr = oldString.charAt(i);
      if (curr.match(/([a-zA-Z]+)/) != null && last.match(/([a-zA-Z]+)/)) {
        result += "*" + curr;
      } else {
        result += curr;
      }
      last = curr;
    }
    return result;
  } 
}
