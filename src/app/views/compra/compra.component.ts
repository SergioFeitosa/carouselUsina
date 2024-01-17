import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css',
  
})
export class CompraComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Compra',
      icon: 'home',
      routeUrl: '',
    }    
  }

  ngOnInit(): void { 
  }

}
