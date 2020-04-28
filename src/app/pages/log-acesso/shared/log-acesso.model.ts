import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class LogAcesso extends BaseResourceModel {
    constructor(
      public dataHora?: string,
      public usuario?: string,
      public ip?: string,
      public dispositivo?: string,
      public navegador?: string,
      public localizacao?: string,
  ){
      super() // Chamando a classe base
  }

  static fromJson(jsonData: any): LogAcesso {
      return Object.assign(new LogAcesso(), jsonData)
  }
}
