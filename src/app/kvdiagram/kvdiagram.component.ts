import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LogicPhrase} from "../phrase/logic-phrase";
import {KVDiagram} from "../kv-diagram-model/kvdiagram";
import {KvDiagramGenerator} from "../kv-diagram-model/kv-diagram-generator";
import {KvDiagramEntry} from "../kv-diagram-model/kv-diagram-entry";

@Component({
  selector: 'app-kvdiagramm',
  templateUrl: './kvdiagram.component.html',
  styleUrls: ['./kvdiagram.component.css']
})
export class KVDiagramComponent implements OnInit {

  @ViewChild('kvDiagramCanvas') canvasRef: ElementRef;
  private kvDiagram: KVDiagram;

  constructor() { }

  ngOnInit() {
  }

  parse(logicPhrase: LogicPhrase) {

    let generator = new KvDiagramGenerator(logicPhrase);
    this.kvDiagram = generator.generateKVDiagram();
    this.kvDiagram.fill(logicPhrase);

    this.kvDiagram.draw(this.canvasRef);
  }
}
