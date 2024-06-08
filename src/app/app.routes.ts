import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { VeiwAllBooksComponent } from './page/veiw-all-books/veiw-all-books.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewAllUsersComponent } from './page/view-all-users/view-all-users.component';

export const routes: Routes = [
    {
        path:"Login",
        component:LoginComponent
    },
    {
        path:"veiw-all-books",
        component:VeiwAllBooksComponent
    },
    {
        path:"register",
        component:RegisterComponent

    },
    {
        path:"view-all-users",
        component:ViewAllUsersComponent
    },
    {
        path:"",
        redirectTo:"Login",
        pathMatch:"full"
    }

];
