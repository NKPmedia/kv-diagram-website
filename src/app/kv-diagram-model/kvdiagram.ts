///<reference path="kv-diagram-entry.ts"/>
import {KVDiagramSegment} from "./kvdiagram-segment";
import  {KvDiagramEntry} from "./kv-diagram-entry"
import {ElementRef} from "@angular/core";
import {LogicPhrase} from "../phrase/logic-phrase";
import {StringMethods} from "../phrase/string-methods";
import {Coordinate} from "./coordinate";
import {KVDiagramComponent} from "../kvdiagram/kvdiagram.component";
import {QMC} from "../qmc/qmc";
import {Group} from "../qmc/group";
import {GroupBox} from "../qmc/group-box";

export class KVDiagram {

  private _segments: KVDiagramSegment[] = Array();
  private _kvMatrix: KvDiagramEntry[][];
  private lastMouseOnEntry: KvDiagramEntry;
  private _kvDiagramComponent: KVDiagramComponent;
  private qmc: QMC;
  private qmcGroups: Group[] = new Array();

  get kvDiagramComponent(): KVDiagramComponent {
    return this._kvDiagramComponent;
  }

  set kvDiagramComponent(value: KVDiagramComponent) {
    this._kvDiagramComponent = value;
  }

  addSegment(segment: KVDiagramSegment) {
    this._segments.push(segment)
  }

  get segments(): KVDiagramSegment[] {
    return this._segments;
  }

  get kvMatrix(): KvDiagramEntry[][] {
    return this._kvMatrix;
  }

  set kvMatrix(value: KvDiagramEntry[][]) {
    this._kvMatrix = value;
    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        entry.kvDiagram = this;
      }
    }
  }

  fill(logicPhrase: LogicPhrase) {
    let DNFs = logicPhrase.phrase.split("+");
    for(let DNF of DNFs) {
      DNF = StringMethods.replaceAll(DNF, "(", "");
      DNF = StringMethods.replaceAll(DNF, ")", "");
      DNF = StringMethods.replaceAll(DNF, " ", "");
      let vars = DNF.split("*");

      this.genCombinationTagsForEntries();

      let coordinates: Coordinate[] = this.getCoordinate(vars);

      for(let coordinate of coordinates) {
        this.kvMatrix[coordinate.x][coordinate.y].value = 1;
      }
    }
  }

  draw(canvasRef: ElementRef) {
    let ctx: CanvasRenderingContext2D =
      canvasRef.nativeElement.getContext('2d');

    ctx.clearRect(0,0,5000,5000);

    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        entry.ctx = ctx;
        entry.draw();
      }
    }

    for(let segment of this.segments) {
      segment.draw(ctx, this.kvMatrix.length, this.kvMatrix[0].length);
    }
  }

  private getCoordinate(vars: string[]): Coordinate[] {

    this.genCombinationTagsForEntries();
    let coordinates: Coordinate[] = Array();

    let segmentsRequired: KVDiagramSegment[] = new Array();
    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        if(entry.combinationPartOfTag(vars)) {
          coordinates.push(new Coordinate(entry.xPos, entry.yPos));
        }
      }
    }
    return coordinates;
  }

  private genCombinationTagsForEntries() {
    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        entry.genCombinationTags(this._segments);
      }
    }
  }

  mouseOver(x: number, y: number) {
    if(typeof this.kvMatrix[0][0] !== "undefined" ) {
      let matrixX = Math.floor(x / this.kvMatrix[0][0].width);
      let matrixY = Math.floor(y / this.kvMatrix[0][0].width);
      if(matrixX < this.kvMatrix.length && matrixY < this.kvMatrix[0].length) {
        if(typeof this.lastMouseOnEntry === "undefined") this.lastMouseOnEntry = this.kvMatrix[matrixX][matrixY];

        if(this.lastMouseOnEntry != this.kvMatrix[matrixX][matrixY]) {
          this.lastMouseOnEntry.mouseOn = false;
          this.lastMouseOnEntry = this.kvMatrix[matrixX][matrixY];
        }
        this.lastMouseOnEntry.mouseOn = true;
      }
    }
  }

  clicked(x: number, y: number) {
    if(typeof this.kvMatrix[0][0] !== "undefined" ) {
      let matrixX = Math.floor(x / this.kvMatrix[0][0].width);
      let matrixY = Math.floor(y / this.kvMatrix[0][0].width);
      if(matrixX < this.kvMatrix.length && matrixY < this.kvMatrix[0].length) {
        this.kvMatrix[matrixX][matrixY].clicked();
      }
    }
  }

  updatedMatrixValues() {
    let newDnf = this.generateDNFOutOfMatrix();

    this.kvDiagramComponent.updateDNF(newDnf);
  }

  public generateDNFOutOfMatrix() {
    let dnf: string = "";
    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        if(entry.value == 1) {
          dnf += " + " + entry.getCombinationsAsString();
        }
      }
    }
    return dnf.substr(3);
  }

  newQMC(qmc: QMC) {
    this.qmc = qmc;
    this.createQMCGroups();
    this.assignQMCGroups();
    this.findGroupBoxes();
  }

  private assignQMCGroups() {
    this.genCombinationTagsForEntries();
    let coordinates: Coordinate[] = Array();

    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        entry.resetGroupBoxes();
      }
    }

    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        for(let group of this.qmcGroups) {
          if (entry.combinationPartOfTag(group.primImplikant.vars)) {
            entry.addGroupBox(new GroupBox(group));
          }
        }
      }
    }
  }

  private findGroupBoxes() {
    for(let xRow of this.kvMatrix) {
      for(let entry of xRow) {
        entry.startEnlargeGroupBoxes();
      }
    }
  }

  private createQMCGroups() {
    this.qmcGroups = new Array();
    for(let group of this.qmc.bestCoverage) {
      this.qmcGroups.push(new Group(this.genRandomColor(),group))
    }
  }

  isOnDiagram(x: number, y: number) {
    if(x < 0) return false;
    if(y < 0) return false;
    if(x >= this.kvMatrix.length) return false;
    if(y >= this.kvMatrix[0].length) return false;
    return true;
  }

  private genRandomColor(): string {
    var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")";

    return color;
  }

  drawGroups(canvasRef: ElementRef) {
    for(let group of this.qmcGroups) {
      group.draw(canvasRef);
    }
  }
}
