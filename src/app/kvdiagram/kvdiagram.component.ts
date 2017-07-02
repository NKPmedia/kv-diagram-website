import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LogicPhrase} from "../phrase/logic-phrase";
import {KVDiagram} from "../kv-diagram-model/kvdiagram";
import {KvDiagramGenerator} from "../kv-diagram-model/kv-diagram-generator";
import {LogicInputComponent} from "../logic-input/logic-input.component";
import {QMC} from "../qmc/qmc";

@Component({
  selector: 'app-kvdiagramm',
  templateUrl: './kvdiagram.component.html',
  styleUrls: ['./kvdiagram.component.css'],
})
export class KVDiagramComponent implements OnInit {

  @ViewChild('kvDiagramCanvas') canvasRef: ElementRef;
  private _kvDiagram: KVDiagram;
  private mouseInCanvas: boolean = false;
  private _logicInputCom: LogicInputComponent;
  private qmc: QMC;

  constructor() { }

  ngOnInit() {
  }


  get kvDiagram(): KVDiagram {
    return this._kvDiagram;
  }

  get logicInputCom(): LogicInputComponent {
    return this._logicInputCom;
  }

  set logicInputCom(value: LogicInputComponent) {
    this._logicInputCom = value;
  }

  parse(logicPhrase: LogicPhrase) {

    let generator = new KvDiagramGenerator(logicPhrase);
    this._kvDiagram = generator.generateKVDiagram();
    this._kvDiagram.kvDiagramComponent = this;
    this._kvDiagram.fill(logicPhrase);

    this._kvDiagram.draw(this.canvasRef);
  }

  canvasMouseEnter() {
    this.mouseInCanvas = true;
  }

  canvasMouseLeave() {
    this.mouseInCanvas = false;
  }

  canvasMouseMove(event: any) {
    if(this.mouseInCanvas) {
      let rect = this.canvasRef.nativeElement.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      if(typeof this._kvDiagram !== "undefined") {
        this._kvDiagram.mouseOver(x,y);
      }
    }
    this.kvDiagram.drawGroups(this.canvasRef);
  }

  cklickedCanvas(event: any) {
    if(this.mouseInCanvas) {
      let rect = this.canvasRef.nativeElement.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      if(typeof this._kvDiagram !== "undefined") {
        this._kvDiagram.clicked(x,y);
      }
      this.kvDiagram.draw(this.canvasRef);
      this.kvDiagram.drawGroups(this.canvasRef);
    }
  }

  updateDNF(newDnf: string) {
    this._logicInputCom.updateDNF(newDnf);
  }

  newQMC(qmc: QMC) {
    this.kvDiagram.newQMC(qmc);
    this.kvDiagram.drawGroups(this.canvasRef);
  }
}
