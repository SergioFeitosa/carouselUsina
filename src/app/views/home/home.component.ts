import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';
import { HeaderLanguageService } from '../../template/header/header.language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    HeaderLanguageService
  ]

})
export class HomeComponent {

  //@Input() idiomaActive:string = '';
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

    if (this.texto == 'null') {
      this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'english' });
      this.texto = 'english'
    }

    if (idioma === 'chinese') {
      this.texto = 'chinese'
      this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'chinese' });
    }

    if (idioma === 'english') {
      this.texto = 'english'
      this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'english' });
    }

    if (idioma === 'spanish') {
      this.texto = 'spanish'
      this.headerLanguageService.setDataLanguage({ name: 'Materias primas internacionales', age: 30, language: 'spanish' });
    }

    if (idioma === 'portuguese') {
      this.texto = 'portuguese'
      this.headerLanguageService.setDataLanguage({ name: 'Commodities Internacional ', age: 30, language: 'portuguese' });
    }
  }
}
