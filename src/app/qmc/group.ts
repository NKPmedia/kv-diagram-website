import {Primimplikante} from "./primimplikante";
import {GroupBox} from "./group-box";
import {ElementRef} from "@angular/core";
export class Group {

  private _color: string = "";
  private _primImplikant: Primimplikante;
  private _underGroups: GroupBox[] = new Array();


  constructor(color: string, primImplikant: Primimplikante) {
    this._color = color;
    this._primImplikant = primImplikant;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get primImplikant(): Primimplikante {
    return this._primImplikant;
  }

  set primImplikant(value: Primimplikante) {
    this._primImplikant = value;
  }

  get underGroups(): GroupBox[] {
    return this._underGroups;
  }

  set underGroups(value: GroupBox[]) {
    this._underGroups = value;
  }

  draw(canvasRef: ElementRef) {
    for(let underGroup of this.underGroups) {
      underGroup.draw(canvasRef);
    }
  }
}
