import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Route } from '../../model/route';

@Component({
  selector: 'app-path-information',
  templateUrl: './path-information.component.html',
  styleUrls: ['./path-information.component.css']
})
export class PathInformationComponent implements OnInit {

  @Input() toilet: any;
  @Input() path: Route;

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  displayRoute() {
    const packageToiletAndPath = {
      path: this.path,
      toilet: this.toilet
    };
    this.change.emit(packageToiletAndPath);
  }

}
