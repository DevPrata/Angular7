import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class LogRelatorio extends BaseResourceModel {
    constructor(
      public relatorio?: string,
      public workspace?: string,
      public acessos?: string,
      public ultimoAcesso?: string,
    ){
      super() // Chamando a classe base
    }

  static fromJson(jsonData: any): LogRelatorio {
      return Object.assign(new LogRelatorio(), jsonData)
  }
}
