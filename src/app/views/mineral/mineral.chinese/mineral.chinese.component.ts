import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';

@Component({
  selector: 'app-mineral.chinese',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './mineral.chinese.component.html',
  styleUrl: './mineral.chinese.component.css',
  
})
export class MineralChineseComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Mineral',
      icon: 'hub',
      routeUrl: '',
    }    
  }
  ngOnInit(): void {
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/cobre.jpg",title: "銅",routeUrl: "cobre/chinese"},
    {img: "/carousel/browser/assets/images/ferro.jpg",title: "鐵",routeUrl: "ferro/chinese"},
    {img: "/carousel/browser/assets/images/grafita.jpg",title: "石墨",routeUrl: "grafite/chinese"},
    {img: "/carousel/browser/assets/images/ouro.jpg",title: "礦物",routeUrl: "ouro/chinese"},
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


