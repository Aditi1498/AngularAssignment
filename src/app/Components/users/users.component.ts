import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users : User[] = [
    {name : "Aditi",username : "@aditi",email : "aditi@gmail.com"},
    {name : "Aditii",username : "@aditii",email : "aditii@gmail.com"},
    {name : "Aditiii",username : "@aditiii",email : "aditiii@gmail.com"}
  ]

  @Output()
  selectedUser : User = {name:"",username:"",email:""}

  @Output()
  index :number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(index : number){
    this.users.splice(index,1)
  }

  OnUserSubmit(user : User){
    //console.log(user);  
    if(this.index < 0)
        this.users.push(user);
    else{
      this.users[this.index].name = user.name;
      this.users[this.index].username = user.username;
      this.users[this.index].email = user.email;
      this.index = -1
    }
  }

  selectUser(user : User,i : number){
    this.selectedUser = user;
    this.index = i
  }

}
