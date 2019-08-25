import {Component, Directive, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  @Output() selectValue = new EventEmitter<{string}>();
  constructor() {

  }

  onSelect(feature) {
    this.selectValue.emit(feature);
  }
  onInit() {

  }
}
