import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderService } from '../header/header.service';
import { HeaderLanguageService } from '../header/header.language.service';
import { UserStoreService } from '../../core/user.store.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule, 
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [
    HeaderService,
    HeaderLanguageService,
    UserStoreService
  ]

})
export class SidebarComponent {

  @Input() idiomaActive: string = '';

  @Input() sidebarActive: boolean = false;
  @Input() languageChineseActive: boolean = false;
  @Input() languageEnglishActive: boolean = false;
  @Input() languagePortugueseActive: boolean = true;
  @Input() languageSpanishActive: boolean = false;



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

  public toogleChineseLanguageRecebido: boolean = true; 

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private headerLanguageService: HeaderLanguageService,
  ) {

  }
  ngOnInit(): void {
    this.headerLanguageService.getDataLanguage().subscribe((data) => {
      this.data = data;

      this.urlEntrada = this.router.url.substring(1)

      this.words = this.urlEntrada.split('/');
      this.urlRaiz = this.words[0]
      this.urlComplemento = this.words[1]

    }
    );
    this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 0, language: this.idiomaActive });

    this.languageEnglishActive = !this.languageEnglishActive
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
