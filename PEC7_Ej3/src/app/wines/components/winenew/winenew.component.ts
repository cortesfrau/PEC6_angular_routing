import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { Wine } from "src/app/models/wine";
import { WineService } from "src/app/wines/services/wine.service";
import { wineNameValidator } from "src/app/wines/validators/winename-validator";

@Component({
  selector: "app-winenew",
  templateUrl: "./winenew.component.html",
  styleUrls: ["./winenew.component.css"]
})

export class WineNewComponent {
  public message = "";

  public wineForm!: FormGroup;

  constructor(private fb: FormBuilder, private wineService: WineService) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, wineNameValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ["", [Validators.required]],
      isOnSale: false
    });
  }

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Si us plau, corregiu els errors delñ formulari.";
    } else {
      const wine: Wine = this.wineForm.value;
      this.wineService.create(wine);
    }
  }
}
