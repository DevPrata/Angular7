import { Injectable, Injector } from '@angular/core';

import { LogRelatorio } from './log-relatorio.model';

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class LogRelatorioService extends BaseResourceService<LogRelatorio> {

    constructor(protected injector: Injector) {
      super("api/logsRelatorio", injector,LogRelatorio.fromJson)
    }
  
}