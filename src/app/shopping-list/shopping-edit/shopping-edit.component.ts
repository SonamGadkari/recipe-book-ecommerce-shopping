import {Component, ElementRef, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {newLineWithIndentation} from 'tslint/lib/utils';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})


export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput' , {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput' , {static: true}) amountInputRef: ElementRef;
  @Output() ingredientadded = new EventEmitter<Ingredient>();

  constructor() { }

  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientadded.emit(newIngredient);
  }
  onDelete() {

  }
  onClear() {

  }
  ngOnInit() {
  }

}
