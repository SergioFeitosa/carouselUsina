import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-sorgosacarino',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './sorgosacarino.component.html',
  styleUrl: './sorgosacarino.component.css'

})
export class SorgosacarinoComponent {
  
}




