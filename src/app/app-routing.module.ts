import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecieverComponent } from './reciever/reciever.component';
import { RegistrationComponent } from './registration/registration.component';
import { SenderComponent } from './sender/sender.component';
import { SerchComponent } from './serch/serch.component';
import { UserformComponent } from './userform/userform.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewpageComponent } from './viewpage/viewpage.component';

const routes: Routes = [
  {path:'userpage',
   component:UserpageComponent},
   
   {path: 'userform',
    component: UserformComponent},
   {path: 'sender',
    component: SenderComponent},
   {path: 'reciever',
    component: RecieverComponent},
   {path: 'regForm',
    component: RegistrationComponent},
   {path: 'login',
    component: LoginComponent},
   {path: 'viewpage',
    component: ViewpageComponent},
   {path: 'edit',
    component: EditComponent},
   {path: 'profile',
    component: ProfileComponent},
   {path: 'search',
    component: SerchComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
