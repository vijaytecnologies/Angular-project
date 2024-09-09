import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstServiceService } from './my-first-service.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { YourFavouriteComponent } from './your-favourite/your-favourite.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateUserComponent } from './create-user/create-user.component'
import { environment } from 'src/environments/environment';
import { MyfirstInterceptor } from './myfirst.interceptor';




const routesArr: Routes = [
  { path: 'home', component: HomeComponent },


  { path: 'profile', component: ProfileComponent },
  { path: 'products', component: YourFavouriteComponent },
  { path: 'product/:title', component: ProductDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  {path:'newUser', component:CreateUserComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    YourFavouriteComponent,
    SettingsComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    ProductDetailsComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesArr),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule



  ],
  providers: [MyFirstServiceService,
    {
      provide: HTTP_INTERCEPTORS, useClass: MyfirstInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
