import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader =true;
  private messageSource = new  BehaviorSubject(this.loader);
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  getloaderData(message:boolean){
    this.messageSource.next(message)
  }
}
