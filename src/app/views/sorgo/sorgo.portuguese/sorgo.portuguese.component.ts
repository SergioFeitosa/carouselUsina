import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-sorgo.portuguese',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    SorgoPortugueseComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './sorgo.portuguese.component.html',
  styleUrl: './sorgo.portuguese.component.css',
  
})
export class SorgoPortugueseComponent implements OnInit{
  
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
      title: 'Acucar',
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

      this.headerLanguageService.setDataLanguage({ name: 'Corn', age: 30, language: 'english' });
      this.texto = 'Corn'
      this.idiomaEnglish = true
      this.title = "Corn"
      this.router.navigate(['sorgo/portuguese']);
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/sorgoforrageiro.jpg",title: "Forrageiro",routeUrl: "sorgoforrageiro/portuguese"},
    {img: "/carousel/browser/assets/images/sorgogranifero.jpg",title: "Granífero",routeUrl: "sorgogranifero/portuguese"},
    {img: "/carousel/browser/assets/images/sorgosacarino.jpg",title: "Sacarino",routeUrl: "sorgosacarino/portuguese"},
    {img: "/carousel/browser/assets/images/sorgovassoura.jpg",title: "Vassoura",routeUrl: "sorgovassoura/portuguese"},
    
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
    this.slides.push({img: "http://placehold.it/350x150/777777",title: "teste",routeUrl:"corn"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
}


