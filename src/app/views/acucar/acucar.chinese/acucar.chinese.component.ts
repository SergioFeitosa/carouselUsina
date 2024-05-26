import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-acucar.chinese',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    AcucarChineseComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './acucar.chinese.component.html',
  styleUrl: './acucar.chinese.component.css',
  
})
export class AcucarChineseComponent implements OnInit{
  
  @Input('idiomaActive') idiomaActive: string = '';

  public data: any = {};
  public name: string = '';
  public age: number = 0;
  public language: string = '';

  languageChineseActive: boolean = false;
  languageEnglishActive: boolean = false;
  languagePortugueseActive: boolean = false;
  languageSpanishActive: boolean = false;

  texto: string = "";
  message: string = "";
  idiomaChinese = false
  idiomaEnglish = false
  idiomaSpanish = false
  idiomaPortuguese = false

  title = ''
  
  constructor(
    private router: Router,

    private activateRoute: ActivatedRoute,
    private headerService: HeaderService,
    private headerLanguageService: HeaderLanguageService,
    ) { 
    this.headerService.headerData = {
      title: 'Frango',
      icon: 'home',
      routeUrl: '',
    }    
  }
  ngOnInit(): void {


    const idioma = String(this.activateRoute.snapshot.paramMap.get('idioma'))

    this.texto = idioma
    this.idiomaChinese = false
    this.idiomaEnglish = false
    this.idiomaSpanish = false
    this.idiomaPortuguese = false
  
    this.title = "Cottonxxxxx"

      this.headerLanguageService.setDataLanguage({ name: 'Chicken', age: 30, language: 'english' });
      this.texto = 'Sugar'
      this.idiomaEnglish = true
      this.title = "Cotton"
      this.router.navigate(['acucar/chinese']);
  }
  
  slides = [

    {img: "/carousel/browser/assets/images/acucaric45.jpg",title: "精製糖：（ICUMSA 45）",routeUrl: "acucaric45/chinese"},
    {img: "/carousel/browser/assets/images/acucaric100.jpg",title: "結晶糖：（ICUMSA 150）",routeUrl: "acucaric100/chinese"},
    {img: "/carousel/browser/assets/images/acucaric600.jpg",title: "紅糖：（ICUMSA 600-1200）",routeUrl: "acucaric600/chinese"},
    {img: "/carousel/browser/assets/images/acucaricVHP.jpg",title: "德梅拉拉糖：（ICUMSA VHP）",routeUrl: "acucaricVHP/chinese"},

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
    this.slides.push({img: "http://placehold.it/350x150/777777",title: "teste",routeUrl:"acucar"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
}


