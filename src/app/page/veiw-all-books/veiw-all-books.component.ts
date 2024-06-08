import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-veiw-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,NavComponent,CommonModule],
  templateUrl: './veiw-all-books.component.html',
  styleUrl: './veiw-all-books.component.css'
})
export class VeiwAllBooksComponent implements OnInit {
  private http:any={};
  public bookList:any={};
  public selectedBook:any;
  public bookObt={
    id:null,
    isbn:null,
    title:null,
    author:null,
    category:null,
    qty:null
  }

  constructor(private httpCliant:HttpClient){
    this.http=httpCliant;
  }
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks(){
    this.http.get('http://localhost:8081/book/get').subscribe((data:any={})=>{
      this.bookList=data;
      
    })
  }
  setSelectedBook(book:any){
    this.selectedBook=book;
  }
  saveBook(){
    let postApi="http://localhost:8081/book";
    this.http.post(postApi,this.selectedBook).subscribe((data:any={})=>{
      this.loadBooks();
      this.selectedBook={};
    })
  }

  addBook(){
    let postApi="http://localhost:8081/book";
    this.http.post(postApi,this.bookObt).subscribe((data:any={})=>{
      Swal.fire({
        title: "Added Succesfuly",
        icon: "success"
      });
      this.loadBooks();
      
    })
  }
  /*deleteBook(){
    let api="http://localhost:8081/book/"+this.selectedBook.id;
    this.http.delete(api,{responseType:'text'}).subscribe((response:String)=>{
    this.loadBooks();
    this.selectedBook=null;
    });
  }
  

  deleteBook(){
    this.http.delete(`http://localhost:8080/book/${this.selectedBook.id}`).subscribe((data:any)=>{
    this.loadBooks();
    this.selectedBook=null
    });
    
  }*/

}
