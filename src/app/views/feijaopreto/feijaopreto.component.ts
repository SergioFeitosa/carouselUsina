import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-feijaopreto',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './feijaopreto.component.html',
  styleUrl: './feijaopreto.component.css'

})
export class FeijaopretoComponent {
  
}




