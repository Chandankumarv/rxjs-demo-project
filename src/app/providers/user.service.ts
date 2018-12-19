import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userNameSubject : Subject<string> = new Subject<string>();
  userName$ : Observable<string> = this.userNameSubject.asObservable();

  userName : string = '';

  constructor() { }

  updateUserName(name : string){
    this.userNameSubject.next(name);
  }

  updateUserNameRegular(name : string){
    this.userName = name;
  }
}
