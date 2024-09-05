import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FoodsTs } from '../../shared/interfaces/FoodsTs';
import { FormsModule, NgForm } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() formSent = new EventEmitter<FoodsTs>();
  isShown = false;

  constructor(private dataService: DataService) {}

  showForm() {
    this.isShown = !this.isShown;
    console.log("isShown:", this.isShown);
  }

  submit(foodForm: NgForm) {
    const food: FoodsTs = {
      id: this.dataService.getLastId() + 1,
      name: foodForm.controls['nameFood'].value,
      calories: foodForm.controls['caloriesNumber'].value,
      image: foodForm.controls['urlImage'].value,
      quantity: 0
    };

    console.log(food);
    this.formSent.emit(food);
    foodForm.resetForm();

    this.isShown = false;
  }
}