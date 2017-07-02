import {ElementRef} from '@angular/core';
import {KVDiagramSegment} from "./kvdiagram-segment";
import {KVDiagram} from "./kvdiagram";
import {Primimplikante} from "../qmc/primimplikante";
import {Group} from "../qmc/group";
import {GroupBox} from "../qmc/group-box";

export class KvDiagramEntry {
  private _xPos:number;
  private _yPos:number;
  private _value:number;
  public width: number = 50;
  private varCombinationTag: string[] = Array();
  private _mouseOn: boolean;
  private _ctx: CanvasRenderingContext2D;
  private _kvDiagram: KVDiagram;
  private qmcGroups: GroupBox[] = new Array();


  constructor(xPos: number, yPos: number) {
    this._xPos = xPos;
    this._yPos = yPos;
  }

  get kvDiagram(): KVDiagram {
    return this._kvDiagram;
  }

  set kvDiagram(value: KVDiagram) {
    this._kvDiagram = value;
  }

  get ctx(): CanvasRenderingContext2D {
    return this._ctx;
  }

  set ctx(value: CanvasRenderingContext2D) {
    this._ctx = value;
  }

  get xPos(): number {
    return this._xPos;
  }

  set xPos(value: number) {
    this._xPos = value;
  }

  get yPos(): number {
    return this._yPos;
  }

  set yPos(value: number) {
    this._yPos = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get mouseOn(): boolean {
    return this._mouseOn;
  }

  set mouseOn(value: boolean) {
    this._mouseOn = value;
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this._xPos * this.width, this._yPos * this.width, this.width, this.width);
    if(this.mouseOn) this.ctx.fillStyle = "#D7D7D7";
    else this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = "black";
    if(this.value == 1) {
      this.ctx.font = '25px sans-serif';
      this.ctx.fillText("1", (this._xPos) * this.width+20, (this._yPos) * this.width+40, this.width);
    }
  }

  genCombinationTags(segments: KVDiagramSegment[]) {
    this.varCombinationTag = Array();
    for(let segment of segments) {
      if(segment.inSegment(this._xPos, this._yPos)) this.varCombinationTag.push(segment.varName);
    }
  }

  combinationPartOfTag(vars: string[]): boolean {
    for(let name of vars) {
      if(!this.varCombinationTag.includes(name)) return false
    }
    return true;
  }

  getCombinationsAsString(): string {
    let combination: string = "";
    for(let name of this.varCombinationTag) {
      combination += "*"+name;
    }
    return combination.substr(1);
  }

  clicked() {
    if(this.value == 1) this.value = 0;
    else this.value = 1;
    this.kvDiagram.updatedMatrixValues();
  }

  addGroupBox(groupBox: GroupBox) {
    this.qmcGroups.push(groupBox);
  }

  startEnlargeGroupBoxes() {
    for(let groupBox of this.qmcGroups) {
      groupBox.point1.x = this.xPos;
      groupBox.point2.x = this.xPos;
      groupBox.point1.y = this.yPos;
      groupBox.point2.y = this.yPos;
      groupBox = this.enlargeGroupBoxes(groupBox);

      groupBox.assignedGroup.underGroups.push(groupBox);
    }
  }

  private enlargeGroupBoxes(groupBox: GroupBox): GroupBox {
    let i = 0;
    for(let entriesGroups of this.qmcGroups) {
      if(entriesGroups.assignedGroup == groupBox.assignedGroup) {
        i++;
        break;
      }
    }
    if(i==0) return groupBox;


    if(this.combinationPartOfTag(groupBox.assignedGroup.primImplikant.vars)) {
      if(this.xPos < groupBox.point1.x) groupBox.point1.x = this.xPos;
      if(this.xPos > groupBox.point2.x) groupBox.point2.x = this.xPos;
      if(this.yPos < groupBox.point1.y) groupBox.point1.y = this.yPos;
      if(this.yPos > groupBox.point2.y) groupBox.point2.y = this.yPos;

      let i = 0;
      for(let entriesGroups of this.qmcGroups) {
        if(entriesGroups.assignedGroup == groupBox.assignedGroup) {
          this.qmcGroups.splice(i,1);
        }
        i++;
      }

      for(let dx = -1; dx <= 1; dx++) {
        for(let dy = -1; dy <= 1; dy++) {
          if((Math.abs(dy)+Math.abs(dx)) != 2) {
            if (this.kvDiagram.isOnDiagram(this.xPos + dx, this.yPos + dy)) {
              groupBox = this.kvDiagram.kvMatrix[this.xPos + dx][this.yPos + dy].enlargeGroupBoxes(groupBox);
            }
          }
        }
      }

      return groupBox;

    }
    else {
      return groupBox;
    }
  }

  resetGroupBoxes() {
    this.qmcGroups = new Array();
  }
}
