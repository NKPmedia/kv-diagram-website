import { Component, OnInit } from '@angular/core';
import {QMC} from "../qmc/qmc";

@Component({
  selector: 'app-qmcvisualizer',
  templateUrl: './qmcvisualizer.component.html',
  styleUrls: ['./qmcvisualizer.component.css']
})
export class QMCVisualizerComponent implements OnInit {
  private qmc: QMC = new QMC();

  constructor() { }

  ngOnInit() {
  }

  newQMC(qmc: QMC) {
    this.qmc = qmc;
  }

  getTableBackground(groupIndex): string {
    if(groupIndex % 2 == 1) return "table-info";
    else return "";
  }

  getEssentialPrimBackground(indexI): string {
    let prim = this.qmc.notCombinedPrimimplikanten[indexI];
    if(this.qmc.essentialPrimeImplicants.indexOf(prim) != -1) return "table-warning";
    else return "";
  }

  getEssentialPrimDcBackground(dcEq) {
    if(this.qmc.notEssentialDcEquivalents.indexOf(dcEq) == -1)  return "table-warning";
    else return "";
  }
}
