import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    }    
  }

  ngOnInit(): void {
  }

}
