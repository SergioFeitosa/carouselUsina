import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-canadeacucar',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './canadeacucar.component.html',
  styleUrl: './canadeacucar.component.css'

})
export class CanadeacucarComponent {
  
}




