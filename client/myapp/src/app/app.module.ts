import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component'
import { PostComponent } from './post/post.component'
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosAndPostsComponent } from './TodosAndPosts/TodosAndPosts.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  {path: "TodosAndPostsComponent/:userId", component: TodosAndPostsComponent},
  {path: "AddUser", component: AddUserComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsersListComponent,
    UserComponent,
    TodosAndPostsComponent,
    TaskComponent,
    PostComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
