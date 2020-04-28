import { Injectable, Injector } from '@angular/core';

import { LogAcesso } from './log-acesso.model';

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class LogAcessoService extends BaseResourceService<LogAcesso> {

    constructor(protected injector: Injector) {
      super("api/logsAcesso", injector,LogAcesso.fromJson)
    }
  
}