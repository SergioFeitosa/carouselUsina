import { Component } from '@angular/core';
import { HeaderService } from '../../../template/header/header.service';
import { MatCardModule } from '@angular/material/card';
import { ForDirective } from '../../../directives/for.directive';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedra.chinese',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    RouterModule,
    SlickCarouselModule,
    CommonModule

  ],
  templateUrl: './pedra.chinese.component.html',
  styleUrl: './pedra.chinese.component.scss'
})
export class PedraChineseComponent {
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
    {img: "/carousel/browser/assets/images/diamante.jpg",title: "鑽石",routeUrl: "diamante/chinese"},
    {img: "/carousel/browser/assets/images/esmeralda.jpg",title: "翠",routeUrl: "esmeralda/chinese"},
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


