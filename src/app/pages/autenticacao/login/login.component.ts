import { Component, OnInit,Injector } from '@angular/core';
import { Validators } from '@angular/forms'

import { BaseResourceFormComponent } from "../../../shared/abstract/base-resource-form/base-resource-form.component";

import { Login } from "../shared/login.model";
import { LoginService } from "../shared/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseResourceFormComponent<Login> {


  constructor( protected loginService: LoginService, protected injector: Injector){
    super(injector, new Login(),loginService, Login.fromJson)
  }

  ngOnInit(){
    this.buildResourceForm()
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      login:[null, [Validators.required, Validators.minLength(2)]],
      senha:[null, [Validators.required, Validators.minLength(2)]],
    })
  }
}

