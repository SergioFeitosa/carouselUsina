import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() sidebarActive = false;
  @Output() toggleSidebar = new EventEmitter();

  constructor(private headerService: HeaderService) { }
  
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
}  