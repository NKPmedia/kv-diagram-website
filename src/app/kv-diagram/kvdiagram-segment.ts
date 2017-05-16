export class KVDiagramSegment {

  private _segmentType: string = "";
  private _varName: string = "";
  private _startPos: number = 0;
  private _endPos: number = 0;
  private _positiv: boolean = false;

  private width: number = 50;
  private _segmentNameRow: number;

  constructor(segmentType: string, varName: string, startPos: number, endPos: number, positiv: boolean, segmentNameRow: number) {
    this._positiv = positiv;
    this._segmentType = segmentType;
    this._varName = varName;
    this._startPos = startPos;
    this._endPos = endPos;
    this._segmentNameRow = segmentNameRow;

    if(this.startPos > this.endPos) {
      let tmp = this.startPos;
      this._startPos = this.endPos;
      this._endPos = tmp;
    }
  }


  get segmentNameRow(): number {
    return this._segmentNameRow;
  }

  set segmentNameRow(value: number) {
    this._segmentNameRow = value;
  }

  get positiv(): boolean {
    return this._positiv;
  }

  set positiv(value: boolean) {
    this._positiv = value;
  }

  get segmentType(): string {
    return this._segmentType;
  }

  set segmentType(value: string) {
    this._segmentType = value;
  }

  get varName(): string {
    return this._varName;
  }

  set varName(value: string) {
    this._varName = value;
  }

  get startPos(): number {
    return this._startPos;
  }


  get endPos(): number {
    return this._endPos;
  }

  draw(ctx: CanvasRenderingContext2D, xLength:number, yLength:number) {
    ctx.font = '25px sans-serif';
    if(this.segmentType == "x") {
      if(this.positiv) {
        ctx.beginPath();
        ctx.moveTo(this.startPos * this.width, yLength * this.width + 30 * this.segmentNameRow - 20);
        ctx.lineTo(this.endPos * this.width + this.width, yLength * this.width + 30  * this.segmentNameRow - 20);
        ctx.stroke();
        ctx.fillText(this.varName, this.startPos * this.width, yLength * this.width + 30 * this.segmentNameRow, this.width);
      }
    } else {
      if(this.positiv) {
        ctx.beginPath();
        ctx.moveTo((xLength - 1) * this.width + this.width * this.segmentNameRow + 10,this.startPos * this.width);
        ctx.lineTo((xLength - 1) * this.width + this.width * this.segmentNameRow + 10,this.endPos * this.width+this.width);
        ctx.stroke();
        ctx.fillText(this.varName, (xLength - 1) * this.width + this.width * this.segmentNameRow + 15, this.startPos * this.width+25, this.width);
      }
    }
  }

  inSegment(x:number,y: number)
  {
    if(this.segmentType == "x") {
      if(x > this.endPos || x < this.startPos) return false;
    } else {
      if(y > this.endPos || y < this.startPos) return false;
    }
    return true;
  }
}
