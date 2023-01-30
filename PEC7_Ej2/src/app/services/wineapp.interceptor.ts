import { HttpEvent, HttpInterceptor } from "@angular/common/http";
import { HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserStoreService } from "./userstore.service";

@Injectable()
export class WineAppInterceptor implements HttpInterceptor {
  constructor(private userStore: UserStoreService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userStore.token) {
      const authReq = req.clone({
        headers: req.headers.set("X-AUTH-HEADER", this.userStore.token),
      });
      req = authReq;
    }
    return next.handle(req);
  }
}
