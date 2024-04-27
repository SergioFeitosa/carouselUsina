import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-sorgogranifero',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './sorgogranifero.component.html',
  styleUrl: './sorgogranifero.component.css'

})
export class SorgograniferoComponent {
  
}




