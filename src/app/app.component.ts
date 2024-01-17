import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { MenuComponent } from './template/menu/menu.component';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'carousel';
  sidebarActive = false;
  languageChineseActive = false;
  languageEspanholActive = false;
  languageInglesActive = false;
  languagePortuguesActive = false;

  toogleChineseLanguage = false
  toogleSpanishLanguage = false
  toogleEnglishLanguage = false
  tooglePortugueseLanguage = false

  message = "";

  constructor() { }

  ngOnInit(): void {
    this.chooseLanguage()
  }

  chooseLanguage() {

    this.languageChineseActive = true

    if (this.toogleChineseLanguage) {
      this.languageChineseActive = true

    } else
      if (this.toogleSpanishLanguage) {
        this.languageChineseActive = false
        this.languageEspanholActive = true
        this.languageInglesActive = false
        this.languagePortuguesActive = false
      } else
        if (this.toogleEnglishLanguage) {
          this.languageChineseActive = false
          this.languageEspanholActive = false
          this.languageInglesActive = true
          this.languagePortuguesActive = false
        } else
          if (this.tooglePortugueseLanguage) {
            this.languageChineseActive = false
            this.languageEspanholActive = false
            this.languageInglesActive = false
            this.languagePortuguesActive = true
          };

  }

  receiveChineseMessage($event: string) {
    this.message = $event;
    this.toogleChineseLanguage = (this.message == "true");
    this.chooseLanguage()
  }
  receiveSpanishMessage($event: string) {
    this.message = $event;
    this.toogleSpanishLanguage = (this.message == "true");
    this.chooseLanguage()
  }
  receiveEnglishMessage($event: string) {
    this.message = $event;
    this.toogleEnglishLanguage = (this.message == "true");
    this.chooseLanguage()
  }
  receivePortugueseMessage($event: string) {
    this.message = $event;
    this.tooglePortugueseLanguage = (this.message == "true");
    this.chooseLanguage()
  }

}


