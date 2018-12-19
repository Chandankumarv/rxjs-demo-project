import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userName : string = '';
  userNameRegular : string = '';

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getUserName();
    this.getUserNameRegular();
  }

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
