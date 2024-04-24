import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-milhoforage',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './milhoforage.component.html',
  styleUrl: './milhoforage.component.css'

})
export class MilhoforageComponent {
  
}




