import { Component,Input } from '@angular/core';
import { FoodsTs } from '../../shared/interfaces/FoodsTs';
import { NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-fooddetail',
  standalone: true,
  imports: [],
  templateUrl: './fooddetail.component.html',
  styleUrl: './fooddetail.component.css'
})
// export class FooddetailComponent {
//   @Input()food!:Foods[];

// }

export class foodscomponent{
  @Input() food!:FoodsTs[];
  @Input() searchText!:string;
  @Output() todayDishSent = new EventEmitter();

  foodQuantity=1;

  quantity:number = 1;

  addToMeal(dish: FoodsTs){
    const selectedDish = {...dish, quantity: this.foodQuantity}
    this.todayDishSent.emit(selectedDish)
  }

}
