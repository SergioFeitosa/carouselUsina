import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-milhobran',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './milhobran.component.html',
  styleUrl: './milhobran.component.css'

})
export class MilhobranComponent {
  
}




