import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { HeaderLanguageData } from './header.language.data.model';

@Injectable({
  providedIn: 'root'
})



export class HeaderLanguageService {

  constructor() { }

  private data$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  public getDataLanguage(): Observable<any> {
    return this.data$.asObservable();
  }

  public setDataLanguage(data: any): void {
    this.data$.next(data);
  }


  private dataSubject: ReplaySubject<string> = new ReplaySubject<string>

  setData(data: string): void {
    this.dataSubject.next(data);
  }

  getData$(): Observable<string> {
    return this.dataSubject.asObservable();
  }



  private _headerLanguageData = new BehaviorSubject<HeaderLanguageData>({
    language: "english",
  })

  get headerLanguageData(): HeaderLanguageData {
    return this._headerLanguageData.value
  }

  set headerLanguageData(headerLanguageData: HeaderLanguageData) {
    this._headerLanguageData.next(headerLanguageData)
  }


  private dataX$: Subject<any> = new Subject<any>();

  next(datax:any):void {
    this.data$.next(datax);
  }

  select(): Observable<any> {
    return this.dataX$.asObservable();
  }

}
/*
@Injectable()
export class MyService{

  private data$: Subject<any> = new Subject<any>();

  next(data:any):void {
    this.data$.next(data);
  }

  select(): Observable<any> {
    this.data$.asObservable();
  }

}

*/