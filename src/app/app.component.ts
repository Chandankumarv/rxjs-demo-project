import { Component } from '@angular/core';
import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private userService : UserService
  ){
    this.getUserName()
    this.changeUserName();
  }

  title = 'rxjs-demo-project';

  userName : string = 'Michael';
  userNameRegular : string = 'Rachael';

  getUserName(){
    this.userService.userName$.subscribe(value => {
      this.userName = value;
    })
  }

  changeUserName(){
    this.userService.updateUserName(this.userName);
  }

  changeUserNameRegular(){
    this.userService.userName = this.userNameRegular;
  }

  getUserNameRegular(){
    this.userNameRegular = this.userService.userName;
  }

}
