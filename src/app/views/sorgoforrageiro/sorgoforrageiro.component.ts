import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-sorgoforrageiro',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './sorgoforrageiro.component.html',
  styleUrl: './sorgoforrageiro.component.css'

})
export class SorgoforrageiroComponent {
  
}




