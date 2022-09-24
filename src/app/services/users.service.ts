import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
 API_url = 'http://localhost:3000/api';
    
    constructor(private http: HttpClient) { }
    getUser(){
      return this.http.get(this.API_url + '/users')
    }
}
