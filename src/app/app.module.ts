import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ControlService } from './control.service';  
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ResultComponent } from './result/result.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

import { AlertModule } from 'ngx-bootstrap';

import { StringToArrayPipe } from './custompipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    WorkspaceComponent,
    ResultComponent,
    ButtonGroupComponent,
    StringToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
