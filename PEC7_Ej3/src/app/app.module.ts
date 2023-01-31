import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app-routes.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WineAppInterceptor } from "./shared/services/wineapp.interceptor";
import { UserService } from "./user/services/user.service";
import { UserStoreService } from "./shared/services/userstore.service";
import { WineService } from "./wines/services/wine.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  providers: [
    UserService,
    UserStoreService,
    WineService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
