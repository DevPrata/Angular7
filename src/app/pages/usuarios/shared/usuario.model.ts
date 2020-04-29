import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Usuario extends BaseResourceModel {
    constructor(
      public nome?: string,
      public documento?:string,
      public email?: string,
      public cliente?: string,
      public status?: boolean,
  ){
      super() // Chamando a classe base
  }

  static fromJson(jsonData: any): Usuario {
      return Object.assign(new Usuario(), jsonData)
  }

  get statusText(): string {
    return this.status ? 'ATIVO' : 'INATIVO';
  }
}
