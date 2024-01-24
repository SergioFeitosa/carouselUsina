import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserStoreService{
    private signal$ = new BehaviorSubject<boolean>(false);    

    public getSignal(){
        return this.signal$.asObservable();
    }
    
    public setSignal(signal: boolean){
        this.signal$.next(signal);       
    }
    
}