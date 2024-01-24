import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.data.model';

@Injectable({
  providedIn: 'root'
})


export class CommonService {

  private data = new BehaviorSubject('english');

  data$ = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data)
  }
}