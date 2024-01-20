import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { MenuComponent } from './template/menu/menu.component';
import { HeaderLanguageService } from './template/header/header.language.service';
import { HeaderService } from './template/header/header.service';

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
  providers: [
    HeaderService,
  ]
})

export class AppComponent {
  title = 'carousel';
  sidebarActive = false;

  message=""

  constructor(
    headerLanguageService: HeaderLanguageService
  ) { 
    this.message = headerLanguageService.getData$.name;
    console.log('passei '+ this.message)
  }


  
}


