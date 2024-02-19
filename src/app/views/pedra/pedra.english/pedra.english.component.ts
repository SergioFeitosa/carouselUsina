import { Component } from '@angular/core';
import { HeaderService } from '../../../template/header/header.service';
import { MatCardModule } from '@angular/material/card';
import { ForDirective } from '../../../directives/for.directive';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedra.english',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    RouterModule,
    SlickCarouselModule,
    CommonModule

  ],
  templateUrl: './pedra.english.component.html',
  styleUrl: './pedra.english.component.scss'
})
export class PedraEnglishComponent {
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Pedra',
      icon: 'landslide',
      routeUrl: '',
    }    
  }
  ngOnInit(): void {
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/diamante.jpg",title: "Diamond",routeUrl: "diamante"},
    {img: "/carousel/browser/assets/images/esmeralda.jpg",title: "Emerald",routeUrl: "esmeralda"},
  ]

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "inifinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "inifinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "inifinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      },
    ]    
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777",title: "teste",routeUrl:"cafe"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
}


