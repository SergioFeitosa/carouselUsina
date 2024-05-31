import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home.portuguese',
  standalone: true,
  imports: [],
  templateUrl: './home.portuguese.component.html',
  styleUrl: './home.portuguese.component.scss'
})
export class HomePortugueseComponent {

  @Input() sidebarActive: boolean = false;

}
