import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-drumetfrango',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './drumetfrango.component.html',
  styleUrl: './drumetfrango.component.css'

})
export class DrumetfrangoComponent {
  
}




