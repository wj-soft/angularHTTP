import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(public controlService: ControlService) { }

  ngOnInit() {
  }

}
