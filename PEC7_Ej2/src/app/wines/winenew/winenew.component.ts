import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WineService } from 'src/app/services/wine.service';
import { wineNameValidator } from "src/app/validators/winename-validator";

@Component({
  selector: 'app-winenew',
  templateUrl: './winenew.component.html',
  styleUrls: ['./winenew.component.css']
})
export class WineNewComponent {
  
  @Output() private wineNew: EventEmitter<void> = new EventEmitter();
  public wineForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private wineService: WineService
    ) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.formBuilder.group({
      name: ['', [Validators.required, wineNameValidator()]],
      price: [null, [Validators.required, Validators.min(1)]],
      imageUrl: [''],
      isOnSale: [false]
    });
  }

  createWine() {
    if (this.wineForm.valid) {
      let wine = {
        id: null as any,
        name: this.wineForm.value.name,
        imageUrl: this.wineForm.value.imageUrl,
        price: this.wineForm.value.price,
        foodPairing: [],
        isOnSale: this.wineForm.value.isOnSale,
        quantityInCart: 0
      }
      this.wineService.create(wine)
        .subscribe((msg) => {
          console.log(msg);
          this.wineNew.next();
        }, (err) => console.error(err));
    } else {
      console.error("Error en el formulari");
    }
  }
}
