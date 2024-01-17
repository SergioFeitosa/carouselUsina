import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
  
})
export class ContatoComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Milho',
      icon: 'home',
      routeUrl: '',
    }    
  }

  ngOnInit(): void { 
  }

}
