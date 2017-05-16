import {KVDiagramSegment} from "./kvdiagram-segment";
import  {KvDiagramEntry} from "./kv-diagram-entry"
import {ElementRef} from "@angular/core";
import {LogicPhrase} from "../phrase/logic-phrase";
import {StringMethods} from "../phrase/string-methods";
import {Coordinate} from "./coordinate";

export class KVDiagram {

  private _segments: KVDiagramSegment[] = Array();
  private _kvMatrix: KvDiagramEntry[][];

  addSegment(segment: KVDiagramSegment) {
    this._segments.push(segment)
  }


  get kvMatrix(): KvDiagramEntry[][] {
    return this._kvMatrix;
  }

  set kvMatrix(value: KvDiagramEntry[][]) {
    this._kvMatrix = value;
  }

  get segments(): KVDiagramSegment[] {
    return this._segments;
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
        entry.draw(ctx);
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
}
