import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  users_fake;
  private corsHeaders: HttpHeaders

  constructor(private userService: UsersService, private http: HttpClient,) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    this.getUsers()
  }

  getUsers() {
    this.userService.getUser().subscribe(
      users => {
        console.log(users);
        this.users_fake = users;
      }
    )
  }

}
