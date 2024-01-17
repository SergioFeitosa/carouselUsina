import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-venda',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css',
  
})
export class VendaComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Venda',
      icon: 'home',
      routeUrl: '',
    }    
  }

  ngOnInit(): void { 
  }

}
