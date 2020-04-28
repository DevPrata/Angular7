import { Injectable, Injector } from '@angular/core';

import { Login } from './login.model';

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseResourceService<Login> {

    constructor(protected injector: Injector) {
      super("api/login", injector,Login.fromJson)
    }
  
}