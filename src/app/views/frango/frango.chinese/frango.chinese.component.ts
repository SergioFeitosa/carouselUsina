import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-frango.chinese',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    FrangoChineseComponent,
   RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './frango.chinese.component.html',
  styleUrl: './frango.chinese.component.css',
  
})
export class FrangoChineseComponent implements OnInit{
  
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
      this.texto = 'Chicken'
      this.idiomaEnglish = true
      this.title = "Cotton"
      this.router.navigate(['frango/chinese']);
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/asinha-frango.png",title: "雞翅",routeUrl: "asafrango/english"},
    {img: "/carousel/browser/assets/images/coracao-frango.jpg",title: "雞心",routeUrl: "coracaofrango/english"},
    {img: "/carousel/browser/assets/images/coxa-frango.jpg",title: "雞腿肉",routeUrl: "coxafrango/english"},
    {img: "/carousel/browser/assets/images/drumet-frango.jpg",title: "雞鼓",routeUrl: "drumetfrango/english"},
    {img: "/carousel/browser/assets/images/figado-frango.jpg",title: "雞肝",routeUrl: "figadofrango/english"},
    {img: "/carousel/browser/assets/images/moela-frango.jpg",title: "雞肫",routeUrl: "moelafrango/english"},
    {img: "/carousel/browser/assets/images/pe-frango.jpg",title: "雞爪",routeUrl: "pefrango/english"},
    {img: "/carousel/browser/assets/images/peito-frango.jpg",title: "雞胸肉",routeUrl: "peitofrango/english"},
    {img: "/carousel/browser/assets/images/sobrecoxa-frango.jpg",title: "雞大腿",routeUrl: "sobrecoxafrango/english"},
    
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
    this.slides.push({img: "http://placehold.it/350x150/777777",title: "teste",routeUrl:"frango"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
}


