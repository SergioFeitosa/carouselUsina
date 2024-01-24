import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { MenuComponent } from './template/menu/menu.component';
import { HeaderLanguageService } from './template/header/header.language.service';
import { HeaderService } from './template/header/header.service';
import { HomeComponent } from './views/home/home.component';
import { SharedService } from './core/shared.service';
import { UserStoreService } from './core/user.store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    MenuComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    HeaderService,
    HeaderLanguageService,
    HomeComponent,
    SharedService,
    UserStoreService,
  ]
})

export class AppComponent {
  title = 'carousel';
  idiomaActive = 'english';

  data: any = ''

  toggleSidebar = false;
  sidebarActive = false;

  toogleChineseLanguage = false
  toogleEnglishLanguage = false
  toogleSpanishLanguage = false
  tooglePortugueseLanguage = false

  languageChineseActive = false
  languageEnglishActive = false
  languageSpanishActive = false
  languagePortugueseActive = false

  message = ""

  constructor(
    private userStoreService: UserStoreService
  ) {
  }

  ngOnInit() {
  }

}