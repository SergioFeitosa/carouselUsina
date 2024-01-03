import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css',
  
})
export class TransporteComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'transporte',
      icon: 'home',
      routeUrl: ''
    }    
  }

  ngOnInit(): void { 
  }

}
