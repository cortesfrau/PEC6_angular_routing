import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WineNewComponent } from "../wines/winenew/winenew.component";

@Injectable({
  providedIn: "root",
})

export class WineNewDeactivateGuardService
  implements CanDeactivate<WineNewComponent> {
  constructor() {}

  canDeactivate(
    component: WineNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm("Vols sortir d'aquesta pàgina");
  }
}
