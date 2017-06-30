import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LogicInputComponent } from './logic-input/logic-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicLogicPhraseInfoComponent } from './basic-logic-phrase-info/basic-logic-phrase-info.component';
import { KVDiagramComponent } from './kvdiagram/kvdiagram.component';
import { QMCVisualizerComponent } from './qmcvisualizer/qmcvisualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicInputComponent,
    NavbarComponent,
    BasicLogicPhraseInfoComponent,
    KVDiagramComponent,
    QMCVisualizerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
