import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../shared/guards/auth-guard.service";
import { WineNewDeactivateGuardService } from "../shared/guards/wine-new-deactivate-guard.service";
import { NgModule } from "@angular/core";
import { WineDetailsComponent } from "./components/winedetails/winedetails.component";
import { WineListComponent } from "./components/winelist/winelist.component";
import { WineLoadResolverService } from "./services/wine-load-resolver.service";
import { WineNewComponent } from "./components/winenew/winenew.component";

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class WinesRoutingModule {}
