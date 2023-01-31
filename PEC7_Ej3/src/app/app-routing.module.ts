import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "wines",
    loadChildren: () => import("./wines/wines.module").then((m) => m.WinesModule),
  },
  { path: "**", redirectTo: "register" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutesModule {}
