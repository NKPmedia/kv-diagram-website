import { Injectable } from '@angular/core';
import {LogicPhrase} from "./logic-phrase";
import {StringMethods} from "./string-methods";

@Injectable()
export class BasicLogicPhraseParser {

  private logicPhrase = "";
  private keyChars:string[] = ['(',')','+','~','*'];

  /**
   * @brief parses the logicPhraseString and returns basic information
   * @param phrase
   * @returns {LogicPhrase}
   */
  parse(phrase: string, extraVars: string): LogicPhrase {
    let length = phrase.length;

    phrase = StringMethods.replaceAll(phrase, " ", "");

    let varNames = this.getVarNames(phrase,extraVars);

    let logicPhrase = new LogicPhrase(length, varNames, phrase);
    return logicPhrase;
  }

  /**
   * @brief returns all names of the included Variables (Anything between the keyChars)
   * @param phrase
   * @returns {string[]}
   */
  getVarNames(phrase: string, extraVars: string): string[] {
    let varNames:string[] = new Array();

    //Parse the extraVars
    for(let varName of extraVars.split(" ")) {
      varNames.push(varName);
    }

    //Parse the phrase
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
    if(actualName != "" && !varNames.includes(actualName)) {
      varNames.push(actualName);
    }

    varNames.sort(function(a, b){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    })
    return varNames;
  }
}
