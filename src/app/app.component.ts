import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { VeiwAllBooksComponent } from './page/veiw-all-books/veiw-all-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,VeiwAllBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-management-app';
}
