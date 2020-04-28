import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class LogAcesso extends BaseResourceModel {
    constructor(
      public nome?: string,
      public email?: string,
      public cliente?: string,
      public status?: boolean,
  ){
      super() // Chamando a classe base
  }

  static fromJson(jsonData: any): LogAcesso {
      return Object.assign(new LogAcesso(), jsonData)
  }
}
