import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() sidebarActive:boolean = false;
  @Output() toggleSidebar = new EventEmitter();
  @Input() languageChineseActive:boolean = false;
  @Output() toogleChineseLanguage = new EventEmitter();
  @Input() languageEspanholActive:boolean = false;
  @Output() toogleSpanishLanguage = new EventEmitter();
  @Input() languageInglesActive:boolean = false;
  @Output() toogleEnglishLanguage = new EventEmitter();
  @Input() languagePortuguesActive:boolean = false;
  @Output() tooglePortugueseLanguage = new EventEmitter();
  
  constructor(
    private headerService: HeaderService,
    ) { 
  
  }

  ngOnInit(): void {
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

  toogleChinesLanguage() {
    this.toogleChineseLanguage.emit("true");
  }
  toogleEspanholLanguage() {
    this.toogleSpanishLanguage.emit("true");
  }
  toogleInglesLanguage() {
    this.toogleEnglishLanguage.emit("true");
  }
  tooglePortuguesLanguage() {
    this.tooglePortugueseLanguage.emit("true");
  }
}



