import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-agronegocio.english',
  standalone: true,
  imports: [
    MatCardModule,
    ForDirective,
    AgronegocioEnglishComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './agronegocio.english.component.html',
  styleUrl: './agronegocio.english.component.css'
})
export class AgronegocioEnglishComponent implements OnInit {

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
      title: 'Agro Negócio',
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

      this.headerLanguageService.setDataLanguage({ name: 'Agribusiness', age: 30, language: 'english' });
      this.texto = 'Agribusiness'
      this.idiomaEnglish = true
      this.title = "Cotton"
      this.router.navigate(['agronegocio/english']);

  }

  slides = [
    {img: "/carousel/browser/assets/images/acucar2.jpg",title: "Sugar",routeUrl: "acucar/english"},
    {img: "/carousel/browser/assets/images/algodao.jpg",title: "Cotton",routeUrl: "algodao/english"},
    {img: "/carousel/browser/assets/images/cafe.jpg",title: "Coffee",routeUrl: "cafe/english"},
    {img: "/carousel/browser/assets/images/canadeacucar.jpg",title: "Sugar cane",routeUrl: "canadeacucar/english"},
    {img: "/carousel/browser/assets/images/etanol.jpg",title: "ethanol",routeUrl: "etanol/english"},
    {img: "/carousel/browser/assets/images/feijaopreto.jpg",title: "Black Bean",routeUrl: "feijaopreto/english"},
    {img: "/carousel/browser/assets/images/milho.jpg",title: "Corn",routeUrl: "milho/english"},
    {img: "/carousel/browser/assets/images/soja.jpg",title: "Soy",routeUrl: "soja/english"},
    {img: "/carousel/browser/assets/images/sorgo.jpg",title: "Sorghum",routeUrl: "sorgo/english"},
    {img: "/carousel/browser/assets/images/trigo.jpg",title: "Wheat",routeUrl: "trigo/english"},

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
    this.slides.push({ img: "http://placehold.it/350x150/777777", title: "teste", routeUrl: "cafe" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

}




