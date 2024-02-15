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

  public urlEntrada: string = '';
  public urlRaiz: string = '';
  public urlComplemento: string = '';
  public words: any = [];

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

    console.log('idioma anterior ch ==> ' + this.data.language)
    console.log('url anterior ch ==> ' + this.router.url)


    this.headerLanguageService.getDataLanguage().subscribe((data) => { this.data = data })
    this.idiomaAnterior = this.data.language

    console.log('idioma anterior ch ==> ' + this.data.language)


    this.headerLanguageService.setDataLanguage({ name: '国际商品', age: 0, language: 'chinese' });
    this.home = '家'
    this.service = '服务'
    this.contact = '接触'
    this.logout = '登出'
    this.toogleChineseLanguage.emit()


    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada ===> ' + this.urlEntrada)

    this.words = this.urlEntrada.split('/');
    this.urlRaiz = this.words[0]
    this.urlComplemento = this.words[1]
    console.log('url raiz ===> ' + this.urlRaiz)
    console.log('url complemento ===> ' + this.urlComplemento)


    if (this.urlRaiz == 'agronegocio') {
      this.router.navigate(['agronegocio/chinese']);
    } else if (this.urlRaiz == 'acucar') {
      this.router.navigate(['acucar/chinese']);
    } else if (this.urlRaiz == 'algodao') {
      this.router.navigate(['algodao/chinese']);
    } else if (this.urlRaiz == 'cafe') {
      this.router.navigate(['cafe/chinese']);
    } else if (this.urlRaiz == 'canadeacucar') {
      this.router.navigate(['canadeacucar/chinese']);
    } else if (this.urlRaiz == 'etanol') {
      this.router.navigate(['etanol/chinese']);
    } else if (this.urlRaiz == 'feijaopreto') {
      this.router.navigate(['feijaopreto/chinese']);
    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/chinese']);
    } else if (this.urlRaiz == 'milho') {
      this.router.navigate(['milho/chinese']);
    } else if (this.urlRaiz == 'soja') {
      this.router.navigate(['soja/chinese']);
    } else if (this.urlRaiz == 'sorgo') {
      this.router.navigate(['sorgo/chinese']);
    } else if (this.urlRaiz == 'trigo') {
      this.router.navigate(['trigo/chinese']);

    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/chinese']);
    } else if (this.urlRaiz == 'asafrango') {
      this.router.navigate(['asafrango/chinese']);
    } else if (this.urlRaiz == 'coracaofrango') {
      this.router.navigate(['coracaofrango/chinese']);
    } else if (this.urlRaiz == 'coxafrango') {
      this.router.navigate(['coxafrango/chinese']);
    } else if (this.urlRaiz == 'drumetfrango') {
      this.router.navigate(['drumetfrango/chinese']);
    } else if (this.urlRaiz == 'figadofrango') {
      this.router.navigate(['figadofrango/chinese']);
    } else if (this.urlRaiz == 'moelafrango') {
      this.router.navigate(['moelafrango/chinese']);
    } else if (this.urlRaiz == 'pefrango') {
      this.router.navigate(['pefrango/chinese']);
    } else if (this.urlRaiz == 'peitofrango') {
      this.router.navigate(['peitofrango/chinese']);
    } else if (this.urlRaiz == 'sobrecoxafrango') {
      this.router.navigate(['sobrecoxafrango/chinese']);

    } else if (this.urlRaiz == 'mineral') {
      this.router.navigate(['mineral/chinese']);
    } else if (this.urlRaiz == 'cobre') {
      this.router.navigate(['cobre/chinese']);
    } else if (this.urlRaiz == 'ferro') {
      this.router.navigate(['ferro/chinese']);
    } else if (this.urlRaiz == 'grafite') {
      this.router.navigate(['grafite/chinese']);
    } else if (this.urlRaiz == 'pedra') {
      this.router.navigate(['pedra/chinese']);
    } else if (this.urlRaiz == 'diamante') {
      this.router.navigate(['diamante/chinese']);
    } else if (this.urlRaiz == 'esmeralda') {
      this.router.navigate(['esmeralda/chinese']);
    } else if (this.urlRaiz == 'contato') {
      this.router.navigate(['contato/chinese']);
    } else if (this.urlRaiz == 'quemsomos') {
      this.router.navigate(['quemsomos/chinese']);
    } else {
      this.router.navigate(['home/chinese']);
    }

  }

  toogleEnglishLanguageSend() {

    console.log('idioma anterior en ==> ' + this.data.language)
    console.log('url anterior en ==> ' + this.router.url)


    this.headerLanguageService.getDataLanguage().subscribe((data) => { this.data = data })
    this.idiomaAnterior = this.data.language

    this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30, language: 'english' });
    this.home = 'Home'
    this.service = 'Service'
    this.contact = 'Contact us'
    this.logout = 'Logout'
    this.toogleEnglishLanguage.emit()

    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada xx ===> ' + this.urlEntrada)

    this.words = this.urlEntrada.split('/');
    this.urlRaiz = this.words[0]
    this.urlComplemento = this.words[1]
    console.log('url raiz ===> ' + this.urlRaiz)
    console.log('url complemento ===> ' + this.urlComplemento)
    if (this.urlRaiz == 'agronegocio') {
      this.router.navigate(['agronegocio/english']);
    } else if (this.urlRaiz == 'acucar') {
      this.router.navigate(['acucar/english']);
    } else if (this.urlRaiz == 'algodao') {
      this.router.navigate(['algodao/english']);
    } else if (this.urlRaiz == 'cafe') {
      this.router.navigate(['cafe/english']);
    } else if (this.urlRaiz == 'canadeacucar') {
      this.router.navigate(['canadeacucar/english']);
    } else if (this.urlRaiz == 'etanol') {
      this.router.navigate(['etanol/english']);
    } else if (this.urlRaiz == 'feijaopreto') {
      this.router.navigate(['feijaopreto/english']);
    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/english']);
    } else if (this.urlRaiz == 'milho') {
      this.router.navigate(['milho/english']);
    } else if (this.urlRaiz == 'soja') {
      this.router.navigate(['soja/english']);
    } else if (this.urlRaiz == 'sorgo') {
      this.router.navigate(['sorgo/english']);
    } else if (this.urlRaiz == 'trigo') {
      this.router.navigate(['trigo/english']);

    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/english']);
    } else if (this.urlRaiz == 'asafrango') {
      this.router.navigate(['asafrango/english']);
    } else if (this.urlRaiz == 'coracaofrango') {
      this.router.navigate(['coracaofrango/english']);
    } else if (this.urlRaiz == 'coxafrango') {
      this.router.navigate(['coxafrango/english']);
    } else if (this.urlRaiz == 'drumetfrango') {
      this.router.navigate(['drumetfrango/english']);
    } else if (this.urlRaiz == 'figadofrango') {
      this.router.navigate(['figadofrango/english']);
    } else if (this.urlRaiz == 'moelafrango') {
      this.router.navigate(['moelafrango/english']);
    } else if (this.urlRaiz == 'pefrango') {
      this.router.navigate(['pefrango/english']);
    } else if (this.urlRaiz == 'peitofrango') {
      this.router.navigate(['peitofrango/english']);
    } else if (this.urlRaiz == 'sobrecoxafrango') {
      this.router.navigate(['sobrecoxafrango/english']);

    } else if (this.urlRaiz == 'mineral') {
      this.router.navigate(['mineral/english']);
    } else if (this.urlRaiz == 'cobre') {
      this.router.navigate(['cobre/english']);
    } else if (this.urlRaiz == 'ferro') {
      this.router.navigate(['ferro/english']);
    } else if (this.urlRaiz == 'grafite') {
      this.router.navigate(['grafite/english']);
    } else if (this.urlRaiz == 'pedra') {
      this.router.navigate(['pedra/english']);
    } else if (this.urlRaiz == 'diamante') {
      this.router.navigate(['diamante/english']);
    } else if (this.urlRaiz == 'esmeralda') {
      this.router.navigate(['esmeralda/english']);
    } else if (this.urlRaiz == 'contato') {
      this.router.navigate(['contato/english']);
    } else if (this.urlRaiz == 'quemsomos') {
      this.router.navigate(['quemsomos/english']);
    } else {
      this.router.navigate(['home/english']);
    }
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

    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada xx ===> ' + this.urlEntrada)

    this.words = this.urlEntrada.split('/');
    this.urlRaiz = this.words[0]
    this.urlComplemento = this.words[1]
    console.log('url raiz ===> ' + this.urlRaiz)
    console.log('url complemento ===> ' + this.urlComplemento)
    if (this.urlRaiz == 'agronegocio') {
      this.router.navigate(['agronegocio/portuguese']);
    } else if (this.urlRaiz == 'acucar') {
      this.router.navigate(['acucar/portuguese']);
    } else if (this.urlRaiz == 'algodao') {
      this.router.navigate(['algodao/portuguese']);
    } else if (this.urlRaiz == 'cafe') {
      this.router.navigate(['cafe/portuguese']);
    } else if (this.urlRaiz == 'canadeacucar') {
      this.router.navigate(['canadeacucar/portuguese']);
    } else if (this.urlRaiz == 'etanol') {
      this.router.navigate(['etanol/portuguese']);
    } else if (this.urlRaiz == 'feijaopreto') {
      this.router.navigate(['feijaopreto/portuguese']);
    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/portuguese']);
    } else if (this.urlRaiz == 'milho') {
      this.router.navigate(['milho/portuguese']);
    } else if (this.urlRaiz == 'soja') {
      this.router.navigate(['soja/portuguese']);
    } else if (this.urlRaiz == 'sorgo') {
      this.router.navigate(['sorgo/portuguese']);
    } else if (this.urlRaiz == 'trigo') {
      this.router.navigate(['trigo/portuguese']);

    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/portuguese']);
    } else if (this.urlRaiz == 'asafrango') {
      this.router.navigate(['asafrango/portuguese']);
    } else if (this.urlRaiz == 'coracaofrango') {
      this.router.navigate(['coracaofrango/portuguese']);
    } else if (this.urlRaiz == 'coxafrango') {
      this.router.navigate(['coxafrango/portuguese']);
    } else if (this.urlRaiz == 'drumetfrango') {
      this.router.navigate(['drumetfrango/portuguese']);
    } else if (this.urlRaiz == 'figadofrango') {
      this.router.navigate(['figadofrango/portuguese']);
    } else if (this.urlRaiz == 'moelafrango') {
      this.router.navigate(['moelafrango/portuguese']);
    } else if (this.urlRaiz == 'pefrango') {
      this.router.navigate(['pefrango/portuguese']);
    } else if (this.urlRaiz == 'peitofrango') {
      this.router.navigate(['peitofrango/portuguese']);
    } else if (this.urlRaiz == 'sobrecoxafrango') {
      this.router.navigate(['sobrecoxafrango/portuguese']);


    } else if (this.urlRaiz == 'mineral') {
      this.router.navigate(['mineral/portuguese']);
    } else if (this.urlRaiz == 'cobre') {
      this.router.navigate(['cobre/portuguese']);
    } else if (this.urlRaiz == 'ferro') {
      this.router.navigate(['ferro/portuguese']);
    } else if (this.urlRaiz == 'grafite') {
      this.router.navigate(['grafite/portuguese']);
    } else if (this.urlRaiz == 'pedra') {
      this.router.navigate(['pedra/portuguese']);
    } else if (this.urlRaiz == 'diamante') {
      this.router.navigate(['diamante/portuguese']);
    } else if (this.urlRaiz == 'esmeralda') {
      this.router.navigate(['esmeralda/portuguese']);
    } else if (this.urlRaiz == 'contato') {
      this.router.navigate(['contato/portuguese']);
    } else if (this.urlRaiz == 'quemsomos') {
      this.router.navigate(['quemsomos/portuguese']);
    } else {
      this.router.navigate(['home/portuguese']);
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

    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada xx ===> ' + this.urlEntrada)

    this.words = this.urlEntrada.split('/');
    this.urlRaiz = this.words[0]
    this.urlComplemento = this.words[1]
    console.log('url raiz ===> ' + this.urlRaiz)
    console.log('url complemento ===> ' + this.urlComplemento)
    if (this.urlRaiz == 'agronegocio') {
      this.router.navigate(['agronegocio/spanish']);
    } else if (this.urlRaiz == 'acucar') {
      this.router.navigate(['acucar/spanish']);
    } else if (this.urlRaiz == 'algodao') {
      this.router.navigate(['algodao/spanish']);
    } else if (this.urlRaiz == 'cafe') {
      this.router.navigate(['cafe/spanish']);
    } else if (this.urlRaiz == 'canadeacucar') {
      this.router.navigate(['canadeacucar/spanish']);
    } else if (this.urlRaiz == 'etanol') {
      this.router.navigate(['etanol/spanish']);
    } else if (this.urlRaiz == 'feijaopreto') {
      this.router.navigate(['feijaopreto/spanish']);
    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/spanish']);
    } else if (this.urlRaiz == 'milho') {
      this.router.navigate(['milho/spanish']);
    } else if (this.urlRaiz == 'soja') {
      this.router.navigate(['soja/spanish']);
    } else if (this.urlRaiz == 'sorgo') {
      this.router.navigate(['sorgo/spanish']);
    } else if (this.urlRaiz == 'trigo') {
      this.router.navigate(['trigo/spanish']);

    } else if (this.urlRaiz == 'frango') {
      this.router.navigate(['frango/spanish']);
    } else if (this.urlRaiz == 'asafrango') {
      this.router.navigate(['asafrango/spanish']);
    } else if (this.urlRaiz == 'coracaofrango') {
      this.router.navigate(['coracaofrango/spanish']);
    } else if (this.urlRaiz == 'coxafrango') {
      this.router.navigate(['coxafrango/spanish']);
    } else if (this.urlRaiz == 'drumetfrango') {
      this.router.navigate(['drumetfrango/spanish']);
    } else if (this.urlRaiz == 'figadofrango') {
      this.router.navigate(['figadofrango/spanish']);
    } else if (this.urlRaiz == 'moelafrango') {
      this.router.navigate(['moelafrango/spanish']);
    } else if (this.urlRaiz == 'pefrango') {
      this.router.navigate(['pefrango/spanish']);
    } else if (this.urlRaiz == 'peitofrango') {
      this.router.navigate(['peitofrango/spanish']);
    } else if (this.urlRaiz == 'sobrecoxafrango') {
      this.router.navigate(['sobrecoxafrango/spanish']);

    } else if (this.urlRaiz == 'mineral') {
      this.router.navigate(['mineral/spanish']);
    } else if (this.urlRaiz == 'cobre') {
      this.router.navigate(['cobre/spanish']);
    } else if (this.urlRaiz == 'ferro') {
      this.router.navigate(['ferro/spanish']);
    } else if (this.urlRaiz == 'grafite') {
      this.router.navigate(['grafite/spanish']);
    } else if (this.urlRaiz == 'pedra') {
      this.router.navigate(['pedra/spanish']);
    } else if (this.urlRaiz == 'diamante') {
      this.router.navigate(['diamante/spanish']);
    } else if (this.urlRaiz == 'esmeralda') {
      this.router.navigate(['esmeralda/spanish']);
    } else if (this.urlRaiz == 'contato') {
      this.router.navigate(['contato/spanish']);
    } else if (this.urlRaiz == 'quemsomos') {
      this.router.navigate(['quemsomos/spanish']);
    } else {
      this.router.navigate(['home/spanish']);
    }

  }


}

/*
    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada ===> ' + this.urlEntrada)

    this.words = this.urlEntrada.split('/');
    this.urlRaiz = this.words[0]
    this.urlComplemento = this.words[1]
    console.log('url raiz ===> ' + this.urlRaiz)
    console.log('url complemento ===> ' + this.urlComplemento)


    this.headerLanguageService.getDataLanguage().subscribe((data) => { this.data = data })
    this.idiomaAnterior = this.data.language

    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada ===> ' + this.urlEntrada)

    this.words = this.urlEntrada.split('/');
    this.urlRaiz = this.words[0]
    this.urlComplemento = this.words[1]
    console.log('url raiz ===> ' + this.urlRaiz)
    console.log('url complemento ===> ' + this.urlComplemento)

    this.urlEntrada = this.router.url.substring(1)
    console.log('url entrada ===> ' + this.urlEntrada)

    const words = this.urlEntrada.split('/');
    this.urlRaiz = words[0]
    this.urlComplemento = words[1]


    if (this.idiomaAnterior == 'english' || this.idiomaAnterior == 'chinese') {
      this.router.navigate([this.urlEntrada]);
    }
    else {
      this.router.navigate([this.urlRaiz]);
    }

*/


