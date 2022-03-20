import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FormsModule } from '@angular/forms';
import { SalaryHighlightPipe } from './salary-highlight.pipe';
import { NameReversePipe } from './name-reverse.pipe';
import { UserformComponent } from './userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';
import { SerchComponent } from './serch/serch.component';
import { DemocompComponent } from './democomp/democomp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    SalaryHighlightPipe,
    NameReversePipe,
    UserformComponent,
    SenderComponent,
    RecieverComponent,
    RegistrationComponent,
    LoginComponent,
    ViewpageComponent,
    EditComponent,
    ProfileComponent,
    SerchComponent,
    DemocompComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
