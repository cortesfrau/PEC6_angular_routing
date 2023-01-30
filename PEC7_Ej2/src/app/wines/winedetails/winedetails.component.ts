import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Wine } from "../../models/wine";

@Component({
  selector: "app-wine-details",
  templateUrl: "./winedetails.component.html",
  styleUrls: ["./winedetails.component.css"],
})
export class WineDetailsComponent implements OnInit {
  public wine!: Wine;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { wine: Wine }) => {
      this.wine = data.wine;
    });
  }
}
