import { Component } from '@angular/core';
import { FoodsTs } from '../../shared/interfaces/FoodsTs';
import { FoodService } from '../food.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'

})
export class FormComponent {
  @Output() formSent = new EventEmitter();
  constructor (private dataService:DataService){}

// submit(_t5: NgForm) {
// throw new Error('Method not implemented.');
// }
isShown=false;
showForm(){
  const formulary = document.getElementById('idForm');
  if(this.isShown === true){
    formulary?.classList.add('hide');

  }
  else{
    formulary?.classList.remove('hide');
  }
  this.isShown = !this.isShown
}

submit (foodForm: NgForm){
  const food: FoodsTs = {
    id: this.dataService.getLastId() + 1,
    name: foodForm.controls['nameFood'].value,
    calories: foodForm.controls['caloriesNumber'].value,
    image: foodForm.controls['urlImage'].value,
    quantity: 0
  }
 console.log(food)
  this.formSent.emit(food);
  foodForm.resetForm();


  // this.reverseFormDisplay();
}
  }




