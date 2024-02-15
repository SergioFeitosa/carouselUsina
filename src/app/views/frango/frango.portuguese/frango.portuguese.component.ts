import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-frango.portuguese',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    FrangoPortugueseComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './frango.portuguese.component.html',
  styleUrl: './frango.portuguese.component.css',
  
})
export class FrangoPortugueseComponent implements OnInit{
  
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

    console.log('Entrada ' + idioma)  

    console.log(this.router.url);

    
    this.texto = idioma
    this.idiomaChinese = false
    this.idiomaEnglish = false
    this.idiomaSpanish = false
    this.idiomaPortuguese = false
  
    this.title = "Cottonxxxxx"

      this.headerLanguageService.setDataLanguage({ name: 'Chicken', age: 30, language: 'english' });
      this.texto = 'Chicken'
      this.idiomaEnglish = true
      this.title = "Cotton"
      this.router.navigate(['frango/portuguese']);
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/asafrango.jpg",title: "asafrango",routeUrl: "asafrango/english"},
    {img: "/carousel/browser/assets/images/coracaofrango.jpg",title: "coracaofrango",routeUrl: "coracaofrango/english"},
    {img: "/carousel/browser/assets/images/coxafrango.jpg",title: "coxafrango",routeUrl: "coxafrango/english"},
    {img: "/carousel/browser/assets/images/drumetfrango.jpg",title: "drumetfrango",routeUrl: "drumetfrango/english"},
    {img: "/carousel/browser/assets/images/figadofrango.jpg",title: "figadofrango",routeUrl: "figadofrango/english"},
    {img: "/carousel/browser/assets/images/moelafrango.jpg",title: "moelafrango",routeUrl: "moelafrango/english"},
    {img: "/carousel/browser/assets/images/pefrango.jpg",title: "pefrango",routeUrl: "pefrango/english"},
    {img: "/carousel/browser/assets/images/peitofrango.jpg",title: "peitofrango",routeUrl: "peitofrango/english"},
    {img: "/carousel/browser/assets/images/sobrecoxafrango.jpg",title: "sobrecoxafrango",routeUrl: "sobrecoxafrango/english"},
    
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


