import {Component, Input, OnInit} from '@angular/core';
import {BasicLogicPhraseParser} from "../phrase/basic-logic-phrase-parser";
import {LogicPhrase} from "../phrase/logic-phrase";
import {BasicLogicPhraseInfoComponent} from "../basic-logic-phrase-info/basic-logic-phrase-info.component";

@Component({
  selector: 'app-logic-input',
  templateUrl: './logic-input.component.html',
  styleUrls: ['./logic-input.component.css'],
  providers: [BasicLogicPhraseParser]
})
export class LogicInputComponent implements OnInit {
  @Input()
  basicLogicPhraseInfoCom: BasicLogicPhraseInfoComponent;

  private logicPhraseString = "";
  private logicPhrase: LogicPhrase;

  constructor(private basicLogicPhraseParser: BasicLogicPhraseParser) { }

  ngOnInit() {
  }

  parseLogicPhrase() {
    this.logicPhrase = this.basicLogicPhraseParser.parse(this.logicPhraseString);

    this.basicLogicPhraseInfoCom.logicPhrase = this.logicPhrase;
  }



}
