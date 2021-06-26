import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { Product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upQuantity(){
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(){
    if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}
