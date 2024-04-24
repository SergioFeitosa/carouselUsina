import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-milhoflour',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './milhoflour.component.html',
  styleUrl: './milhoflour.component.css'

})
export class MilhoflourComponent {
  
}




