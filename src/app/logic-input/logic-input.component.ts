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
    var array = oldString.split(/((?=[a-zA-Z])[a-zA-Z]*)/);
    var i = 0;
    var j = 0;
    var result = "";
    for (var i = 1; i < array.length-1; i++) {

      if (array[i] != "") {
        if (array[i].length > 1) {

          for (var j = 0; i < array[j].length; ++j) {
            result += array[i].charAt(j) + "*";
          }

          result += array[i].charAt(array[i].length-1);

        }
        else {
          result += array[i];
        }
      }

    }
    return result;
  } 
}
