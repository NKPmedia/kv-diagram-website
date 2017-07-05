import { Component } from '@angular/core';
import {AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'KV-Toolbox';
  welcomeMessage = "Das ist eine KV-Toolbox";

  ngAfterViewInit(): void {

  }
}
