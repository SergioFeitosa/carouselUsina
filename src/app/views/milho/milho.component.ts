import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-milho',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './milho.component.html',
  styleUrl: './milho.component.css',
  
})
export class MilhoComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Milho',
      icon: 'home',
      routeUrl: ''
    }    
  }

  ngOnInit(): void { 
  }

}
