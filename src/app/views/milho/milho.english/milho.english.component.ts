import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ForDirective } from '../../../directives/for.directive';
import { HeaderService } from '../../../template/header/header.service';
import { HeaderLanguageService } from '../../../template/header/header.language.service';

@Component({
  selector: 'app-milho.english',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    MilhoEnglishComponent,
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './milho.english.component.html',
  styleUrl: './milho.english.component.css',
  
})
export class MilhoEnglishComponent implements OnInit{
  
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
  
    this.title = "Milho"

      this.headerLanguageService.setDataLanguage({ name: 'Sugar', age: 30, language: 'english' });
      this.texto = 'Corn'
      this.idiomaEnglish = true
      this.title = "Milho"
      this.router.navigate(['milho/english']);
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/milhobrania.jpg",title: "Corn Bran",routeUrl: "milhobran/english"},
    {img: "/carousel/browser/assets/images/milhoflouria.jpg",title: "Corn Flour",routeUrl: "milhoflour/english"},
    {img: "/carousel/browser/assets/images/milhoflourbrancaia.jpg",title: "Corn flour white",routeUrl: "milhoflourbranca/english"},
    {img: "/carousel/browser/assets/images/milhoforageia.jpg",title: "Corn Forage",routeUrl: "milhoforage/english"},
    {img: "/carousel/browser/assets/images/milhonomgmoia.jpg",title: "Corn NOM GMO",routeUrl: "milhonomgmo/english"},
    {img: "/carousel/browser/assets/images/milhopopcornia.jpg",title: "Pop Corn",routeUrl: "milhopopcorn/english"},
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


