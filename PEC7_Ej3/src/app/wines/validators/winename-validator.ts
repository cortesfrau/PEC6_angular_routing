import { AbstractControl, ValidatorFn } from "@angular/forms";

const validNames = ["Laya", "K-Naina", "Verdejo", "Monstrell"];

export function wineNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !validNames.includes(control.value);
    return forbidden ? { wineNameValid: { value: control.value } } : null;
  };
}
