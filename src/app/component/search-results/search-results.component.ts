import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Route } from '../../model/route';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() toilets: any;
  @Input() paths: Array<Route>;

  @Output() change2: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(event) {
    this.change2.emit(event);
  }

}
