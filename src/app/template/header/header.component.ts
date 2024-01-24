import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { HeaderLanguageService } from './header.language.service';
import { UserStoreService } from '../../core/user.store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [
    HeaderService,
    HeaderLanguageService,
    UserStoreService
  ]
})
export class HeaderComponent implements OnInit {

  @Input() idiomaActive: string = '';

  @Input() sidebarActive: boolean = false;
  @Output() toggleSidebar = new EventEmitter();
  @Input() languageChineseActive: boolean = false;
  @Output() toogleChineseLanguage = new EventEmitter();
  @Input() languageSpanishActive: boolean = false;
  @Output() toogleSpanishLanguage = new EventEmitter();
  @Input() languageEnglishActive: boolean = false;
  @Output() toogleEnglishLanguage = new EventEmitter();
  @Input() languagePortugueseActive: boolean = false;
  @Output() tooglePortugueseLanguage = new EventEmitter();

  public data: any = {};
  public name: string = '';
  public age: number = 0;
  public language: string = '';

  public home: string = 'Home';
  public service: string = 'Service';
  public contact: string = 'Contact us';
  public logout: string = 'Logout';

  public idiomaAnterior = ''


  constructor(
    private router: Router,
    private headerService: HeaderService,
    private headerLanguageService: HeaderLanguageService,
  ) {

  }

  ngOnInit(): void {
    this.headerLanguageService.getDataLanguage().subscribe((data) => {
      this.data = data;
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

  toogleChineseLanguageSend() {

    this.headerLanguageService.getDataLanguage().subscribe((data) => { this.data = data })
    this.idiomaAnterior = this.data.language

    this.headerLanguageService.setDataLanguage({ name: '国际大宗商品', age: 0, language: 'chinese' });
    this.home = '家'
    this.service = '服务'
    this.contact = '接触'
    this.logout = '登出'
    this.toogleChineseLanguage.emit()
    if (this.idiomaAnterior == 'english' || this.idiomaAnterior == 'chinese') {
      this.router.navigate(['home/chinese']);
    }
    else {
      this.router.navigate(['']);
    }
  }

  toogleSpanishLanguageSend() {

    this.headerLanguageService.getDataLanguage().subscribe((data) => { this.data = data })
    this.idiomaAnterior = this.data.language

    this.headerLanguageService.setDataLanguage({ name: 'Materias primas internacionales', age: 0, language: 'spanish' });
    this.home = 'Hogar'
    this.service = 'Servicio'
    this.contact = 'Contacto'
    this.logout = 'Cerrar'
    this.toogleSpanishLanguage.emit()
    if (this.idiomaAnterior == 'english' || this.idiomaAnterior == 'spanish') {
      this.router.navigate(['home/spanish']);
    }
    else {
      this.router.navigate(['']);
    }
  }

  toogleEnglishLanguageSend() {

    this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'english' });
    this.home = 'Home'
    this.service = 'Service'
    this.contact = 'Contact us'
    this.logout = 'Logout'
    this.toogleEnglishLanguage.emit()
    this.router.navigate(['']);
  }

  tooglePortugueseLanguageSend() {

    this.headerLanguageService.getDataLanguage().subscribe((data) => { this.data = data })
    this.idiomaAnterior = this.data.language

    this.headerLanguageService.setDataLanguage({ name: 'Commodities Internacional', age: 30, language: 'portuguese' });
    this.home = 'Home'
    this.service = 'Serviços'
    this.contact = 'Contato'
    this.logout = 'Sair'
    this.tooglePortugueseLanguage.emit()
    if (this.idiomaAnterior == 'english' || this.idiomaAnterior == 'portuguese') {
      this.router.navigate(['home/portuguese']);
    }
    else {
      this.router.navigate(['']);
    }
  }

}



