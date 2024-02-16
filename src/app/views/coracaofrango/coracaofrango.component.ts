import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-coracaofrango',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './coracaofrango.component.html',
  styleUrl: './coracaofrango.component.css'

})
export class CoracaofrangoComponent {
  
}




