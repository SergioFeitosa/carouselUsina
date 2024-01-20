import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { HeaderLanguageService } from './header.language.service';

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
    HeaderLanguageService
  ]
})
export class HeaderComponent implements OnInit {

  languageChinesActive: boolean = false;
  languageEspanholActive: boolean = false;
  languageInglesActive: boolean = false;
  languagePortuguesActive: boolean = false;

  @Input() sidebarActive:boolean = false;
  @Output() toggleSidebar = new EventEmitter();
  //@Input() languageChinesActive:boolean = false;
  //@Output() toogleChineseLanguage = new EventEmitter();
  //@Input() languageEspanholActive:boolean = false;
  //@Output() toogleSpanishLanguage = new EventEmitter();
  //@Input() languageInglesActive:boolean = false;
  //@Output() toogleEnglishLanguage = new EventEmitter();
  //@Input() languagePortuguesActive:boolean = false;
  //@Output() tooglePortugueseLanguage = new EventEmitter();

  public data: any = {};
  public name: string = '';
  public age: number = 0;
  
  constructor(
    private headerService: HeaderService,
    private headerLanguageService: HeaderLanguageService,
    ) {     
      this.headerLanguageService.headerLanguageData = {
        language: 'ingles',
      } 
      
    }

  ngOnInit(): void { this.headerLanguageService.getDataLanguage().subscribe((data) => { 
    this.data = data;
         }
       );
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

  get language(): string {
    return this.headerLanguageService.headerLanguageData.language
  }


  toogleChineseLanguage() {
      this.headerLanguageService.setDataLanguage({ name: '国际大宗商品', age: 30 });
      this.headerLanguageService.getDataLanguage().subscribe((data) => {this.name = data.name})
  }

  toogleSpanishLanguage() {
    this.headerLanguageService.setDataLanguage({ name: 'Materias primas internacionales', age: 30 });
    this.headerLanguageService.getDataLanguage().subscribe((data) => {this.name = data.name})
  }

  toogleEnglishLanguage() {
    this.headerLanguageService.setDataLanguage({ name: 'International Commodities', age: 30 });
    this.headerLanguageService.getDataLanguage().subscribe((data) => {this.name = data.name})
  }

  tooglePortugueseLanguage() {
    this.headerLanguageService.setDataLanguage({ name: 'Commodities Internacional', age: 30 });
    this.headerLanguageService.getDataLanguage().subscribe((data) => {this.name = data.name})
}

}



