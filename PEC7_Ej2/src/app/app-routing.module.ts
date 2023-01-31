import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./guards/auth-guard.service";
import { LoginComponent } from "./users/login/login.component";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./users/register/register.component";
import { WineDetailsComponent } from "./wines/winedetails/winedetails.component";
import { WineListComponent } from "./wines/winelist/winelist.component";
import { WineLoadResolverService } from "./guards/wine-load-resolver.service";
import { WineNewComponent } from "./wines/winenew/winenew.component";
import { WineNewDeactivateGuardService } from "./guards/wine-new-deactivate-guard.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "user/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "wines/list",
    component: WineListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "wines/create",
    component: WineNewComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [WineNewDeactivateGuardService],
  },
  {
    path: "wine/:id",
    component: WineDetailsComponent,
    canActivate: [AuthGuardService],
    resolve: { wine: WineLoadResolverService },
  },

  { path: "**", redirectTo: "user/register" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
