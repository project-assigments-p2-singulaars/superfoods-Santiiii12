import { Injectable } from '@angular/core';
import foods from '../../../../foods';
import { FoodsTs } from '../interfaces/FoodsTs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllFood () {
    return foods;
  }
  getLastId(){
    return foods.at(-1)!.id;

   
    }
    addNewFood(food:FoodsTs){
      foods.push(food);
  }
}
