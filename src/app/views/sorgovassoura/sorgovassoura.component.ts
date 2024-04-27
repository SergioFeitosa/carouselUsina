import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-sorgovassoura',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './sorgovassoura.component.html',
  styleUrl: './sorgovassoura.component.css'

})
export class SorgovassouraComponent {
  
}




