import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderService } from '../../../template/header/header.service';
import { ForDirective } from '../../../directives/for.directive';

@Component({
  selector: 'app-servico.english',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './servico.english.component.html',
  styleUrl: './servico.english.component.css',
  
})
export class ServicoEnglishComponent implements OnInit{
  
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
    {img: "/carousel/browser/assets/images/compra.png",title: "Purchase of Commodities",routeUrl: "compra/english"},
    {img: "/carousel/browser/assets/images/venda.jpg",title: "Sales of Commodities ",routeUrl: "venda/english"},
    {img: "/carousel/browser/assets/images/transporte.jpg",title: "Transport of Commodities",routeUrl: "transporte/english"},
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


