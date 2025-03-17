import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating'; 



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule,RouterModule,StarRatingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[]=[];

  constructor(private foodService:FoodService){
    this.foods=foodService.getAll();
  }
}
