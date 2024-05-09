import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import { FoodsTs } from '../../shared/interfaces/FoodsTs';
import { foodscomponent } from "../fooddetail/fooddetail.component";
import { FoodService } from '../food.service';
import { DataService } from '../../shared/services/data.service';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [foodscomponent, SearchBarComponent, FormsModule,FormComponent]
})

export class cardsComponent implements OnInit{
inputValue!:string;
filterArray: FoodsTs[] =[];

todayMeals:FoodsTs[] = [];

food:FoodsTs[]=[];
constructor (private foodService: DataService){}

ngOnInit(): void {
  this.food = this.foodService.getAllFood();
}

searchFood() {
   this.filterArray = this.food.filter((food:FoodsTs) =>
    food.name.toLowerCase().includes (this.inputValue.toLowerCase())
  )
}
registerFood(food:FoodsTs){
  console.log(`Llega al register food: ${food}`)
  this.foodService.addNewFood(food);
}


@Output() todayDishSent = new EventEmitter();

  foodQuantity=1;

  quantity:number = 1;

  addToMeal(dish: FoodsTs){
    const selectedDish = {...dish, quantity: this.foodQuantity}
    // this.todayDishSent.emit(selectedDish)
    this.todayMeals.push(selectedDish);
  }
  
}

