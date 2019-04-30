import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetStreetsService } from '../../service/get-streets.service';
import { StreetAdapter } from '../../adapter/street-adapter';
import { MyPosition } from '../../model/my-position';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() myPosition: MyPosition;
  @Output() myPositionSelected: EventEmitter<any> = new EventEmitter;

  streets: Array<string> = [];
  userForm: FormGroup;
  inputValue: string;
  previousInputLength: number;
  digitsIndex: number[] = [];
  addressNum: string[] = [];
  suggestionLeft: string;

  constructor(private formBuilder: FormBuilder, private getStreets: GetStreetsService, private streetAdapter: StreetAdapter) { }

  ngOnInit() {
    this.initForm();
    this.initSuggestionPosition();
    this.inputValue = this.myPosition.name;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      userInput: ''
    });
  }

  initSuggestionPosition() {
    setTimeout(() => {
      this.suggestionLeft = `${document.getElementById('icon').clientWidth + 8}px`;
    }, 250);
  }

  select(street) {
    (document.getElementById('userInput') as HTMLInputElement).value = street;
    this.streets = [];
  }

  searchBarDisplay(event) {
    if (event.target.value.length < this.previousInputLength) {
      if (this.previousInputLength - 1 === this.digitsIndex[this.digitsIndex.length - 1]) {
        this.digitsIndex.pop();
        this.addressNum.pop();
      }
    }
    let valueArray = event.target.value.split('');
    const reg = /0|1|2|3|4|5|6|7|8|9/;
    if (event.target.value.length > this.previousInputLength) {
      if (reg.test(valueArray[valueArray.length - 1])) {
        this.digitsIndex.push(valueArray.length - 1);
        this.addressNum.push(valueArray[valueArray.length - 1].toString());
      }
    }
    for (let i = this.digitsIndex.length - 1; i > -1; i--) {
      valueArray.splice(this.digitsIndex[i], 1)
    }
    for (let i = 0; i < valueArray.length; i++) {
      if (valueArray[i] === ' ') {
        valueArray.splice(i, 1);
        break;
      }
    }
    const name = valueArray.join('');
    this.myPositionSelected.emit(event.target.value);
    this.previousInputLength = event.target.value.length;
    if (name.length !== 0) {
      this.getStreets.getStreetNames(name).subscribe((result: Array<any>) => {
        this.streets = [];
        if (!result) {
          return;
        }
        for (let i = 0; i < result.length; i++) {
          if (this.addressNum.length === 0) {
            this.streets.push(this.streetAdapter.adaptToDisplay(result[i]).name);
          } else {
            this.streets.push(`${this.addressNum.join('')} ${this.streetAdapter.adaptToDisplay(result[i]).name}`)
          }
        }
      });
    }
  }
}
