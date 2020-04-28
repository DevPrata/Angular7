
import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Login extends BaseResourceModel {
    constructor(
      public login?: string,
      public senha?: string,
  ){
      super() // Chamando a classe base
  }

  static fromJson(jsonData: any): Login {
      return Object.assign(new Login(), jsonData)
  }
}
