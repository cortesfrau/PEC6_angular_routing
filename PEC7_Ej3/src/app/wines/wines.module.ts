import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WineDetailsComponent } from "./components/winedetails/winedetails.component";
import { WineItemComponent } from "./components/wineitem/wineitem.component";
import { WineListComponent } from "./components/winelist/winelist.component";
import { WineNewComponent } from "./components/winenew/winenew.component";
import { WinesRoutingModule } from "./wines-routing.module";

/* IMPORTACION DE COMPONENTES DE VINOS */

@NgModule({
  declarations: [
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    WineDetailsComponent,
  ],
  imports: [CommonModule, WinesRoutingModule, FormsModule, ReactiveFormsModule],
})

export class WinesModule {}
