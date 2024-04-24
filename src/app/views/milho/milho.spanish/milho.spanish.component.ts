import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-milho.spanish',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    MilhoSpanishComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './milho.spanish.component.html',
  styleUrl: './milho.spanish.component.css',
  
})
export class MilhoSpanishComponent implements OnInit{
  
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
      title: 'Milho',
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
  
    this.title = "Milho"

      this.headerLanguageService.setDataLanguage({ name: 'Chicken', age: 30, language: 'english' });
      this.texto = 'Milho'
      this.idiomaEnglish = true
      this.title = "Milho"
      this.router.navigate(['milho/spanish']);
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/milhobran.jpg",title: "Salvado de maíz",routeUrl: "milhobran/spanish"},
    {img: "/carousel/browser/assets/images/milhoflour.jpg",title: "Harina de maíz",routeUrl: "milhoflour/spanish"},
    {img: "/carousel/browser/assets/images/milhoflourbranca.jpg",title: "Harina de Maíz Blanca",routeUrl: "milhoflourbranca/spanish"},
    {img: "/carousel/browser/assets/images/milhoforage.jpg",title: "Forraje de maíz",routeUrl: "milhoforage/spanish"},
    {img: "/carousel/browser/assets/images/milhonomgmo.jpg",title: "Maíz no Transgénico",routeUrl: "milhonomgmo/spanish"},
    {img: "/carousel/browser/assets/images/milhopopcorn.jpg",title: "Palomitas de Maíz",routeUrl: "milhopopcorn/spanish"},

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


