import {ElementRef} from '@angular/core';
import {KVDiagramSegment} from "./kvdiagram-segment";

export class KvDiagramEntry {

  private _xPos:number;
  private _yPos:number;
  private _value:number;
  private width: number = 50;
  private varCombinationTag: string[] = Array();


  constructor(xPos: number, yPos: number) {
    this._xPos = xPos;
    this._yPos = yPos;
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

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this._xPos * this.width, this._yPos * this.width, this.width, this.width);
    ctx.stroke();

    if(this.value == 1) {
      ctx.font = '25px sans-serif';
      ctx.fillText("1", (this._xPos) * this.width+20, (this._yPos) * this.width+40, this.width);
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
}
