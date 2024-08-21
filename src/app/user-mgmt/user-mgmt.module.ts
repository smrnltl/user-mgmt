import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UsersComponent },
//   { path: 'details/:userId', component: UserDetailsComponent},
    // , resolve: {userInfo: UserDetailResolver} },
];


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
//    providers:[UserStore, UserDetailResolver]
})
export class UserMgmtModule { }
