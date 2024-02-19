import { Component, Input } from '@angular/core';
import { HeaderService } from '../../header/header.service';
import { HeaderLanguageService } from '../../header/header.language.service';
import { UserStoreService } from '../../../core/user.store.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sidebarspanish',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './sidebar.spanish.component.html',
  styleUrl: './sidebar.spanish.component.scss',
  providers: [
    HeaderService,
    HeaderLanguageService,
    UserStoreService
  ]

})
export class SidebarSpanishComponent {


  @Input() idiomaActive: string = '';

  @Input() sidebarActive: boolean = false;
  @Input() languageChineseActive: boolean = false;
  @Input() languageSpanishActive: boolean = false;
  @Input() languageEnglishActive: boolean = true;
  @Input() languagePortugueseActive: boolean = false;

  public data: any = {};
  public name: string = '';
  public age: number = 0;
  public language: string = '';

  public home: string = 'Home';
  public service: string = 'Service';
  public contact: string = 'Contact us';
  public logout: string = 'Logout';

  public urlEntrada: string = '';
  public urlRaiz: string = '';
  public urlComplemento: string = '';
  public words: any = [];

  public idiomaAnterior = ''

  public toogleChineseLanguageRecebido: boolean = false; 

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private headerLanguageService: HeaderLanguageService,
  ) {

  }
  ngOnInit(): void {
    this.headerLanguageService.getDataLanguage().subscribe((data) => {
      this.data = data;
      console.log('idioma sidebar ==> ' + this.idiomaActive)

      this.urlEntrada = this.router.url.substring(1)

      this.words = this.urlEntrada.split('/');
      this.urlRaiz = this.words[0]
      this.urlComplemento = this.words[1]

      console.log('urlRouter ==> ' + this.router.url)
      console.log('urlEntrada ==> ' + this.urlEntrada)
      console.log('urlComplemento ==> ' + this.urlComplemento)
      console.log('toogleChineseLanguage' + this.languageChineseActive)
      console.log('toogleEnglishLanguage' + this.languageEnglishActive)
      console.log('tooglePortugueseLanguage' + this.languagePortugueseActive)
      console.log('toogleSpanishLanguage' + this.languageSpanishActive)

      console.log('name ' + this.headerLanguageService.headerLanguageData.language)
    }
    );
    this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 0, language: this.idiomaActive });
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  get idioma(): string {
    return this.headerLanguageService.headerLanguageData.language
  }
}
