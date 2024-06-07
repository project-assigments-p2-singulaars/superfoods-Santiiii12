import { Component } from '@angular/core';
import { cardsComponent } from "../cards/cards.component";
import { Input } from '@angular/core';
import { FoodsTs } from '../../shared/interfaces/FoodsTs';
import { foodscomponent } from "../fooddetail/fooddetail.component";
import { FormComponent } from "../form/form.component";


@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [cardsComponent, cardsComponent, foodscomponent, FormComponent]
})
export class ProductsMainComponent {
@Input() foods!:FoodsTs[];

trackFoods(index:number,food:FoodsTs){
    return food.name
}
}
