
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-agronegocio.portuguese',
  standalone: true,
  imports: [
    MatCardModule,
    ForDirective,
    AgronegocioPortugueseComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule

  ],
  templateUrl: './agronegocio.portuguese.component.html',
  styleUrl: './agronegocio.portuguese.component.css'
})
export class AgronegocioPortugueseComponent {

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
      this.router.navigate(['agronegocio/portuguese']);

  }

  slides = [
    {img: "/carousel/browser/assets/images/acucar2.jpg",title: "Açucar",routeUrl: "acucar/portuguese"},
    {img: "/carousel/browser/assets/images/algodao.jpg",title: "Algodão",routeUrl: "algodao/portuguese"},
    {img: "/carousel/browser/assets/images/cafe.jpg",title: "Café",routeUrl: "cafe/portuguese"},
    {img: "/carousel/browser/assets/images/canadeacucar.jpg",title: "Cana de Açucar",routeUrl: "canadeacucar/portuguese"},
    {img: "/carousel/browser/assets/images/etanol.jpg",title: "Etanol",routeUrl: "etanol/portuguese"},
    {img: "/carousel/browser/assets/images/feijaopreto.jpg",title: "Feijão Preto",routeUrl: "feijaopreto/portuguese"},
    {img: "/carousel/browser/assets/images/milho.jpg",title: "Milho",routeUrl: "milho/portuguese"},
    {img: "/carousel/browser/assets/images/soja.jpg",title: "Soja",routeUrl: "soja/portuguese"},
    {img: "/carousel/browser/assets/images/sorgo.jpg",title: "Sorgo",routeUrl: "sorgo/portuguese"},
    {img: "/carousel/browser/assets/images/trigo.jpg",title: "Trigo",routeUrl: "trigo/portuguese"},

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




