import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-sorgo.english',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    SorgoEnglishComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './sorgo.english.component.html',
  styleUrl: './sorgo.english.component.css',
  
})
export class SorgoEnglishComponent implements OnInit{
  
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
      title: 'Corn',
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
  
    this.title = "Sorgo"

      this.headerLanguageService.setDataLanguage({ name: 'Sugar', age: 30, language: 'english' });
      this.texto = 'Corn'
      this.idiomaEnglish = true
      this.title = "Sorgo"
      this.router.navigate(['sorgo/english']);
  }
  
  slides = [

    {img: "/carousel/browser/assets/images/sorgoforrageiro.jpg",title: "Forage Sorghum",routeUrl: "sorgoforrageiro/english"},
    {img: "/carousel/browser/assets/images/sorgogranifero.jpg",title: "Grain Sorghum",routeUrl: "sorgogranifero/english"},
    {img: "/carousel/browser/assets/images/sorgosacarino.jpg",title: "Sweet Sorghum",routeUrl: "sorgosacarino/english"},
    {img: "/carousel/browser/assets/images/sorgovassoura.jpg",title: "Sorghum Broom",routeUrl: "sorgovassoura/english"},

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


