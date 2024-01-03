import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-quemsomos',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './quemsomos.component.html',
  styleUrl: './quemsomos.component.css',
  
})
export class QuemsomosComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Quems somos',
      icon: 'group',
      routeUrl: ''
    }    
  }

  ngOnInit(): void { 
  }

}
