import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-form-field-error',
  template: `
    <div class="text-danger" *ngIf="formControl.get('name').invalid && formControl.get('name').touched">
      <div *ngIf="formControl.get('name').errors.required">dado obrigatório</div>
      <div *ngIf="formControl.get('name').errors.minlength">dever ter no mínimo 2 caracteres</div>
    </div>
  `,
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl

  constructor() { }

  ngOnInit(): void {
  }

}
