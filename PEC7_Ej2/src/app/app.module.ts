import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WineitemComponent } from './wines/wineitem/wineitem.component';
import { WinelistComponent } from './wines/winelist/winelist.component';
import { WineNewComponent } from './wines/winenew/winenew.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineService } from './services/wine.service';
import { ImageWinePipe } from './pipes/image-wine.pipe';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";
import { WineDetailsComponent } from "./wines/winedetails/winedetails.component";
import { UserService } from "./services/user.service";
import { UserStoreService } from "./services/userstore.service";
import { WineAppInterceptor } from "./services/wineapp.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent,
    ImageWinePipe,
    WineDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    WineService,
    UserService,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
