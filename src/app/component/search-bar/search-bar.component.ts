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
  previousInputLength: number = 0;
  digitsIndex: number[] = [];
  spacesIndex: number[] = [];
  addressNum: string[] = [];
  suggestionLeft: string;

  constructor(private formBuilder: FormBuilder, private getStreets: GetStreetsService, private streetAdapter: StreetAdapter) { }

  ngOnInit() {
    this.initForm();
    this.initSuggestionPosition();
    if (this.myPosition.name) {
      this.inputValue = this.myPosition.name;
    } else {
      this.inputValue = '';
    }
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
    this.myPositionSelected.emit(street);
  }

  searchBarDisplay(event) {
    if (event.length < this.previousInputLength) {
      if (this.previousInputLength - 1 === this.digitsIndex[this.digitsIndex.length - 1]) {
        this.digitsIndex.pop();
        this.addressNum.pop();
      }
    }
    let valueArray = event.split('');
    const regDigits = /0|1|2|3|4|5|6|7|8|9/;
    if (event.length > this.previousInputLength) {
      if (regDigits.test(valueArray[valueArray.length - 1])) {
        this.digitsIndex.push(valueArray.length - 1);
        this.addressNum.push(valueArray[valueArray.length - 1].toString());
      }
    }
    for (let i = this.digitsIndex.length - 1; i > -1; i--) {
      valueArray.splice(this.digitsIndex[i], 1)
    }
    this.previousInputLength = event.length;
    if (valueArray.length !== 0) {
      this.spacesIndex = [];
      const regLetters = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/;
      for (let i = 0; i < valueArray.length; i++) {
        if (valueArray[i] === ' ') {
          if ((valueArray[i - 1] && !regLetters.test(valueArray[i - 1])) || !valueArray[i - 1]) {
            this.spacesIndex.push(i)
          }
        }
      }
      for (let i = this.spacesIndex.length - 1; i > -1; i--) {
        valueArray.splice(this.spacesIndex[i], 1);
      }
      const name = valueArray.join('');
      this.myPositionSelected.emit(`${this.addressNum.join('')} ${name.toString()}`);
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

}
