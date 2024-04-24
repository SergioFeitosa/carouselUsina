import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-milhoflourbranca',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './milhoflourbranca.component.html',
  styleUrl: './milhoflourbranca.component.css'

})
export class MilhoflourbrancaComponent {
  
}




