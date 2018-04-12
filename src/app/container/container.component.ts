import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';  
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(public myService: ControlService) { }

  ngOnInit() {
  }

}
