import {Component, Input, OnInit} from '@angular/core';
import {BasicLogicPhraseParser} from "../phrase/basic-logic-phrase-parser";
import {LogicPhrase} from "../phrase/logic-phrase";
import {BasicLogicPhraseInfoComponent} from "../basic-logic-phrase-info/basic-logic-phrase-info.component";
import {KVDiagramComponent} from "../kvdiagram/kvdiagram.component";
import {LogicRootExpression} from "../logicExpression/logic-root-expression";
import * as _ from 'lodash';
import {QMC} from "../qmc/qmc";
import {QMCVisualizerComponent} from "../qmcvisualizer/qmcvisualizer.component";

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
  @Input()
  qmcVisualizerCom: QMCVisualizerComponent;

  logicPhraseString = "a+b";
  logicExtraVars = "c d";
  private logicPhrase: LogicPhrase;
  private logicDFPhrase: LogicPhrase;

  constructor(private basicLogicPhraseParser: BasicLogicPhraseParser) { }

  ngOnInit() {
  }

  parseLogicPhrase() {

    this.kvDiagramCom.logicInputCom = this;

    let separatedVariableString = this.separateVariables(this.logicPhraseString);

    let logicRootExpression = new LogicRootExpression();
    logicRootExpression.parseLogicString(separatedVariableString);

    let logicExpressionInDF: LogicRootExpression = _.cloneDeep(logicRootExpression);
    logicExpressionInDF.toDF();

    this.basicLogicPhraseInfoCom.logicRootExpression = logicRootExpression;
    this.basicLogicPhraseInfoCom.logicRootExpressionInDF = logicExpressionInDF;


    this.logicDFPhrase = this.basicLogicPhraseParser.parse(logicExpressionInDF.phraseToStringWithoutBreakets(), this.logicExtraVars);
    this.logicPhrase = this.basicLogicPhraseParser.parse(separatedVariableString, this.logicExtraVars);

    this.basicLogicPhraseInfoCom.logicPhrase = this.logicPhrase;

    this.kvDiagramCom.parse(this.logicDFPhrase);

    this.updateDNF(this.kvDiagramCom.kvDiagram.generateDNFOutOfMatrix())

    let qmc = new QMC();
    qmc.simplify(this.basicLogicPhraseParser.parse(this.kvDiagramCom.kvDiagram.generateDNFOutOfMatrix(), this.logicExtraVars));

    this.qmcVisualizerCom.newQMC(qmc);
  }


  updateDNF(newDnf: string) {
    let logicRootExpression = new LogicRootExpression();
    logicRootExpression.parseLogicString(newDnf);
    this.basicLogicPhraseInfoCom.logicRootExpressionInDF = logicRootExpression;

    let qmc = new QMC();
    qmc.simplify(this.basicLogicPhraseParser.parse(newDnf, this.logicExtraVars));

    this.qmcVisualizerCom.newQMC(qmc);
    this.kvDiagramCom.newQMC(qmc);
  }

  private separateVariables(oldString: string) {
    var result = "";
    var last = "";
    for (var i = 0; i < oldString.length; i++) {
      var curr = oldString.charAt(i);
      if ((curr.match(/([a-zA-Z]+)/) != null || curr == "~") && last.match(/([a-zA-Z]+)/)) {
        result += "*" + curr;
      } else {
        result += curr;
      }
      last = curr;
    }
    return result;
  }
}
