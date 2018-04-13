import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public controlService: ControlService) { }

  ngOnInit() {
  }

}
