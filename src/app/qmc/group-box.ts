import {Group} from "./group";
import {Coordinate} from "../kv-diagram-model/coordinate";
import {ElementRef} from "@angular/core";
export class GroupBox {

  private _point1: Coordinate = new Coordinate(0,0);
  private _point2: Coordinate = new Coordinate(0,0);
  private _assignedGroup: Group;
  public generalWidth: number = 50;


  constructor(assignedGroup: Group) {
    this._assignedGroup = assignedGroup;
  }

  get point1(): Coordinate {
    return this._point1;
  }

  set point1(value: Coordinate) {
    this._point1 = value;
  }

  get point2(): Coordinate {
    return this._point2;
  }

  set point2(value: Coordinate) {
    this._point2 = value;
  }

  get assignedGroup(): Group {
    return this._assignedGroup;
  }

  set assignedGroup(value: Group) {
    this._assignedGroup = value;
  }

  draw(canvasRef: ElementRef) {
    let ctx: CanvasRenderingContext2D =
      canvasRef.nativeElement.getContext('2d');

    let width = this.point2.x - this.point1.x+1;
    let height = this.point2.y - this.point1.y+1;
    ctx.fillStyle = this.assignedGroup.color;
    ctx.strokeStyle = this.assignedGroup.color;
    ctx.lineWidth = 4;
    this.roundRect(ctx,(this.point1.x*this.generalWidth)+4,(this.point1.y*this.generalWidth)+4,(width*this.generalWidth)-8,(height*this.generalWidth)-8,5,false,true);
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

  }

  /**
   * Draws a rounded rectangle using the current state of the canvas.
   * If you omit the last three params, it will draw a rectangle
   * outline with a 5 pixel border radius
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} x The top left x coordinate
   * @param {Number} y The top left y coordinate
   * @param {Number} width The width of the rectangle
   * @param {Number} height The height of the rectangle
   * @param {Number} [radius = 5] The corner radius; It can also be an object
   *                 to specify different radii for corners
   * @param {Number} [radius.tl = 0] Top left
   * @param {Number} [radius.tr = 0] Top right
   * @param {Number} [radius.br = 0] Bottom right
   * @param {Number} [radius.bl = 0] Bottom left
   * @param {Boolean} [fill = false] Whether to fill the rectangle.
   * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
   */
  private roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}
}
