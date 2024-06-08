import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  private http;
  public countryList:any;
  public selectedCountry:any;
  public isExistsUser:any;
  public userObj={
    firstName:null,
    lastName:null,
    userName:null,
    email:null,
    address:null,
    address2:null,
    country:null,
    phoneNumber:null
  }

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(){
    let api="https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe(res =>{
      this.countryList=res;
      //console.log(res);
    })
  }
  setSelectedCountry(country:any){
    //this.selectedCountry=country;
    console.log("hi")
  }
  submitForm(){
    console.log(this.userObj);
    this.http.get(`http://localhost:8080/user/is-exists-user/${this.userObj.userName}`).subscribe(data=>{
      console.log(data);
      this.isExistsUser=data;
      this.registerUser(data)
    })
  }
  registerUser(data:any){
    if(!this.isExistsUser==true){
      this.http.post("http://localhost:8080/user/add",this.userObj).subscribe(data=>{
        Swal.fire({
          title: "Saved Succesfully!",
          
          icon: "success"
        });
      })
    }else{
      Swal.fire({
        icon: "error",
        title: "Can't register this user",
        text: `${this.userObj.userName} is already used please use another user name`,
        
      });
    }

  }

}
