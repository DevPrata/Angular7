import { Component,Input, ViewEncapsulation,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from '@angular/forms';

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

    private changeCallback: Function;
    private touchedCallback: Function;

    isDisabled = false;
    innerValue = '';
  
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

}
