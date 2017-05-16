import {LogicPhrase} from "../phrase/logic-phrase";
import {KvDiagramEntry} from "./kv-diagram-entry";
import {KVDiagram} from "./kvdiagram";
import {KVDiagramSegment} from "./kvdiagram-segment";
export class KvDiagramGenerator {

  private logicPhrase: LogicPhrase;

  constructor(logicPhrase: LogicPhrase) {
    this.logicPhrase = logicPhrase;
  }

  generateDiagramSegments(kvDiagram: KVDiagram) {
    let newSegmentLength: number = 1;
    let actualSegmentType: string = "x";
    let segmentNameRow: number = 1;

    let varName1Neg = new KVDiagramSegment(actualSegmentType, "~"+this.logicPhrase.varNames[0], 0, 0, false, segmentNameRow);
    let varName1Pos = new KVDiagramSegment(actualSegmentType, this.logicPhrase.varNames[0], 1, 1, true, segmentNameRow);
    kvDiagram.addSegment(varName1Neg);
    kvDiagram.addSegment(varName1Pos);

    for(let mirrorCount: number = 1; mirrorCount < this.logicPhrase.varCount(); mirrorCount++) {
      if(actualSegmentType == "x") actualSegmentType = "y";
      else actualSegmentType = "x"

      //Mirror old segments of the acutal segmentType
      let toAdd: KVDiagramSegment[] = Array();
      for(let oldSegment of kvDiagram.segments) {
        if(oldSegment.segmentType == actualSegmentType) {
          let mirroredSegment = new KVDiagramSegment(
            actualSegmentType,
            oldSegment.varName,
            newSegmentLength-1+(newSegmentLength-oldSegment.endPos),
            newSegmentLength-1+(newSegmentLength-oldSegment.startPos),
            oldSegment.positiv,
            oldSegment.segmentNameRow
          )
          toAdd.push(mirroredSegment);
        }
      }
      //Add mirroed segments
      for(let newSegment of toAdd) kvDiagram.addSegment(newSegment);

      //Add new segments
      let varNameNeg = new KVDiagramSegment(actualSegmentType, "~"+this.logicPhrase.varNames[mirrorCount], 0, newSegmentLength-1, false, segmentNameRow);
      let varNamePos = new KVDiagramSegment(actualSegmentType, this.logicPhrase.varNames[mirrorCount], newSegmentLength, (newSegmentLength*2)-1, true, segmentNameRow);
      kvDiagram.addSegment(varNameNeg);
      kvDiagram.addSegment(varNamePos);

      if((mirrorCount % 2)== 1) {
        newSegmentLength = newSegmentLength*2;
        segmentNameRow++
      }
    }
  }

  generateKVDiagram(): KVDiagram {
    let fields = Math.pow(2,this.logicPhrase.varCount())

    let xLength = this.getXLength(this.logicPhrase.varCount());
    let yLength = fields / xLength;

    let kvDiagram = new KVDiagram();

    this.generateDiagramSegments(kvDiagram);
    this.optimizeDiagramSegments(kvDiagram);
    let kvMatrix: KvDiagramEntry[][];
    kvMatrix = this.generateMatrix(xLength, yLength);


    kvDiagram.kvMatrix = kvMatrix;

    return kvDiagram;

  }

  fillMatrix() {

  }

  private generateMatrix( xLength: number, yLength: number): KvDiagramEntry[][] {
    let kvMatrix: KvDiagramEntry[][];
    kvMatrix = Array();
    for(let x = 0; x < xLength; x++) {
      kvMatrix[x] = Array();
      for(let y = 0; y < yLength; y++) {
        kvMatrix[x][y] = new KvDiagramEntry(x,y);
      }
    }

    return kvMatrix;
  }

  private getXLength(varCount: number) {
    let steps:number = varCount/2;
    let pot:number = Math.floor(steps) + (varCount%2)
    return Math.pow(2,pot);
  }

  private optimizeDiagramSegments(kvDiagram: KVDiagram) {
    for(let segment of kvDiagram.segments) {
      for(let otherSegment of kvDiagram.segments) {
        if(otherSegment != segment) {
          if((segment.endPos+1) == otherSegment.startPos && segment.varName == otherSegment.varName) {
            let betterSegment:KVDiagramSegment = new KVDiagramSegment(
                segment.segmentType,
                segment.varName,
                segment.startPos,
                otherSegment.endPos,
                segment.positiv,
                segment.segmentNameRow
                );

            //Delet bad segments
            var index = kvDiagram.segments.indexOf(segment, 0);
            if (index > -1) {
              kvDiagram.segments.splice(index, 1);
            }

            index = kvDiagram.segments.indexOf(otherSegment, 0);
            if (index > -1) {
              kvDiagram.segments.splice(index, 1);
            }

            //Add better segment
            kvDiagram.segments.push(betterSegment);
          }
        }
      }
    }
  }
}
