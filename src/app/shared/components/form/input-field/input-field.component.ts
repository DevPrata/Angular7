import { Component,Input, ViewEncapsulation,forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel,NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputField),
    multi: true
  }]
})
export class InputField  implements ControlValueAccessor {


    ngControl?: NgControl;
    private changeCallback: Function;
    private touchedCallback: Function;

    isDisabled = false;
    innerValue = '';

    @Input() titulo: string = '';
    @Input() type = 'text';
    @Input() placeholder: string;
    @Input() imaskConfig: object;

    @Input() set value(value: string) {
      this.innerValue = value == null ? '' : String(value);
    }
    get value() {
      return this.innerValue;
    }

    constructor(private inj: Injector) {}

    ngOnInit() {
      this.ngControl = this.inj.get(NgControl)
    }
  
    writeValue(value: any) {
      this.value = value;
    }
    registerOnChange(fn: Function) {
      this.changeCallback = fn;
    }
    registerOnTouched(fn: Function) {
      this.touchedCallback = fn;
    }
    setDisabledState(isDisabled: boolean) {
      this.isDisabled = isDisabled;
    }
  
    inputHandler(event: Event) {
      this.value = (<HTMLInputElement>event.target).value;
      if (this.changeCallback) {
        this.changeCallback(this.value);
      }
    }

    setTouched() {
      if (this.touchedCallback) {
        this.touchedCallback();
      }
    }


    public get errorMessage(): string | null {
      if( this.mustShowErrorMessage() )
        return this.getErrorMessage();
      else
        return null;
    }
  
    public mustShowErrorMessage(): boolean {
      return this.ngControl.invalid && this.ngControl.touched
    }
  
    private getErrorMessage(): string | null {
      if( this.ngControl.errors.required )
        return "dado obrigatório";
  
      else if( this.ngControl.errors.email)
        return "formato de email inválido"
  
      else if( this.ngControl.errors.minlength){
        const requiredLength = this.ngControl.errors.minlength.requiredLength;
        return `deve ter no mínimo ${requiredLength} caracteres`;
      }
  
      else if( this.ngControl.errors.maxlength){
        const requiredLength = this.ngControl.errors.maxlength.requiredLength;
        return `deve ter no máximo ${requiredLength} caracteres`;
      }
    }

}
