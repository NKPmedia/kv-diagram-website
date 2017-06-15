import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LogicPhrase} from "../phrase/logic-phrase";
import {KVDiagram} from "../kv-diagram-model/kvdiagram";
import {KvDiagramGenerator} from "../kv-diagram-model/kv-diagram-generator";
import {LogicInputComponent} from "../logic-input/logic-input.component";

@Component({
  selector: 'app-kvdiagramm',
  templateUrl: './kvdiagram.component.html',
  styleUrls: ['./kvdiagram.component.css'],
})
export class KVDiagramComponent implements OnInit {

  @ViewChild('kvDiagramCanvas') canvasRef: ElementRef;
  private kvDiagram: KVDiagram;
  private mouseInCanvas: boolean = false;
  private _logicInputCom: LogicInputComponent;

  constructor() { }

  ngOnInit() {
  }


  get logicInputCom(): LogicInputComponent {
    return this._logicInputCom;
  }

  set logicInputCom(value: LogicInputComponent) {
    this._logicInputCom = value;
  }

  parse(logicPhrase: LogicPhrase) {

    let generator = new KvDiagramGenerator(logicPhrase);
    this.kvDiagram = generator.generateKVDiagram();
    this.kvDiagram.kvDiagramComponent = this;
    this.kvDiagram.fill(logicPhrase);

    this.kvDiagram.draw(this.canvasRef);
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
      if(typeof this.kvDiagram !== "undefined") {
        this.kvDiagram.mouseOver(x,y);
      }
    }
  }

  cklickedCanvas(event: any) {
    if(this.mouseInCanvas) {
      let rect = this.canvasRef.nativeElement.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      if(typeof this.kvDiagram !== "undefined") {
        this.kvDiagram.clicked(x,y);
      }
    }
  }

  updateDNF(newDnf: string) {
    this._logicInputCom.updateDNF(newDnf);
  }
}
