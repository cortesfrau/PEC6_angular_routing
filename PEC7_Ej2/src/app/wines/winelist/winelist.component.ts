import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";
import { WineService } from "src/app/services/wine.service";

@Component({
  selector: "app-winelist",
  template: `
    <app-wineitem
      [wine]="wine"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let wine of wines$ | async"
    ></app-wineitem>
  `,
  styles: []
})

export class WineListComponent implements OnInit {
  public wines$!: Observable<Wine[]>;
  constructor(private wineService: WineService) {}

  ngOnInit() {
    this.wines$ = this.wineService.getWines();
  }
  onQuantityChange(change: WineQuantityChange) {
    this.wineService.changeQuantity(change.wine.id, change.changeInQuantity);
  }
}
