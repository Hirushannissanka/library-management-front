import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-users',
  standalone: true,
  imports: [HttpClientModule,FormsModule,NavComponent,CommonModule],
  templateUrl: './view-all-users.component.html',
  styleUrl: './view-all-users.component.css'
})
export class ViewAllUsersComponent implements OnInit{
  public userList:any;
  
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.http.get("http://localhost:8080/user/get").subscribe(data=>{
      console.log(data);
      this.userList=data;
    })
  }
}
