import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { HeaderService } from '../../template/header/header.service';
import { ForDirective } from '../../directives/for.directive';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agronegocio',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    AgronegocioComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './agronegocio.component.html',
  styleUrl: './agronegocio.component.css',
  
})
export class AgronegocioComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Agro Negócio',
      icon: 'home',
      routeUrl: ''
    }    
  }
  ngOnInit(): void {
  }
  
  slides = [
    {img: "/assets/images/cafe.jpg",title: "Café",routeUrl: "cafe"},
    {img: "/assets/images/etanol.jpg",title: "Etanol",routeUrl: "cafe"},
    {img: "/assets/images/milho.jpg",title: "Milho",routeUrl: "cafe"},
    {img: "/assets/images/soja.jpg",title: "Soja",routeUrl: "cafe"},
    {img: "/assets/images/sorgo.jpg",title: "Sorgo",routeUrl: "cafe"},
    {img: "/assets/images/trigo.jpg",title: "Trigo",routeUrl: "cafe"},
    {img: "/assets/images/agrokelvy.jpg",title: "Agro Kelvy",routeUrl: "cafe"},
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


