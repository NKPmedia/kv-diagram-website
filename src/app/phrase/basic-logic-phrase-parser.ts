import { Injectable } from '@angular/core';
import {LogicPhrase} from "./logic-phrase";

@Injectable()
export class BasicLogicPhraseParser {

  private logicPhrase = "";
  private keyChars:string[] = ['(',')','+','-','*'];

  /**
   * @brief parses the logicPhraseString and returns basic information
   * @param phrase
   * @returns {LogicPhrase}
   */
  parse(phrase: string): LogicPhrase {
    let length = phrase.length;

    let varNames = this.getVarNames(phrase);

    let logicPhrase = new LogicPhrase(length, varNames, phrase);
    return logicPhrase;
  }

  /**
   * @brief returns all names of the included Variables (Anything between the keyChars)
   * @param phrase
   * @returns {string[]}
   */
  getVarNames(phrase: string): string[] {
    let varNames:string[] = new Array();
    let actualName: string = "";
    for(let char of phrase) {
      if(this.keyChars.includes(char)) {
        if(!varNames.includes(actualName) && actualName != "") {
          varNames.push(actualName);
        }
        actualName = "";
      } else {
        actualName += char;
      }
    }
    if(actualName != "") {
      varNames.push(actualName);
    }
    return varNames;
  }
}
