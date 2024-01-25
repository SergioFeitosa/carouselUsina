import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';
import { HeaderLanguageService } from '../../template/header/header.language.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,
    ForDirective,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    HeaderLanguageService
  ]

})
export class HomeComponent {

  //@Input() idiomaActive:string = '';
  @Input('idiomaActive') idiomaActive: string = '';

  routeName = 'Get Current Url Route Demo';
  currentRoute: string = '';


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

  rawPath: string = '';


  constructor(
    private activateRoute: ActivatedRoute,
    private headerService: HeaderService,
    private headerLanguageService: HeaderLanguageService,
  ) {
    this.headerService.headerData = {
      title: 'Início',
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

    if (this.texto == 'null') {
      this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'english' });
      this.texto = 'International Commodities'
      this.idiomaEnglish = true
    }

    if (idioma === 'chinese') {
      this.texto = '国际商品'
      this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'chinese' });
      this.idiomaChinese = true
    }

    if (idioma === 'english') {
      this.texto = 'International Commodities'
      this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'english' });
      this.idiomaEnglish = true
    }

    if (idioma === 'spanish') {
      this.texto = 'Materias primas internacionales'
      this.headerLanguageService.setDataLanguage({ name: 'Materias primas internacionales', age: 30, language: 'spanish' });
      this.idiomaSpanish = true
    }

    if (idioma === 'portuguese') {
      this.texto = 'Commodities Internacional'
      this.headerLanguageService.setDataLanguage({ name: 'Commodities Internacional ', age: 30, language: 'portuguese' });
      this.idiomaPortuguese = true
    }
  }
}
