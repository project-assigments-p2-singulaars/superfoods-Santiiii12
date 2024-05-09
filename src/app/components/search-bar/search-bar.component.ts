import { Component } from '@angular/core';
import { FoodsTs } from '../../shared/interfaces/FoodsTs';
import  foods  from '../../../../foods';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  
})
export class SearchBarComponent {
  foodslist:FoodsTs[] = [];
  filterArray!:FoodsTs[];

  ngOnInit(): void {
    this.foodslist = foods;
  }

  inputValue!:string;
  searchFood() {
    console.log(this.inputValue)
    return this.filterArray = this.foodslist.filter((food:FoodsTs) => 
      food.name.includes(this.inputValue)
    
      
    )
  } 
  


}
