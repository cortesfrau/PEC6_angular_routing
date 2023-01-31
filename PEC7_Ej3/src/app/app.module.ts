import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./user/components/login/login.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./user/register/register.component";
import { RouterModule } from "@angular/router";
import { UserService } from "./user/services/user.service";
import { UserStoreService } from "./services/userstore.service";
import { WineAppInterceptor } from "./shared/services/wineapp.interceptor";
import { WineDetailsComponent } from "./wines/components/winedetails/winedetails.component";
import { WineItemComponent } from "./wines/wineitem/wineitem.component";
import { WineListComponent } from "./wines/winelist/winelist.component";
import { WineNewComponent } from "./wines/winenew/winenew.component";
import { WineService } from "./wines/services/wine.service";

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    WineDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutesModule,
  ],
  providers: [
    WineService,
    UserService,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
