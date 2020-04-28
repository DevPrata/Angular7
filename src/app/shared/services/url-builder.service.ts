import { Argumento } from "../models/argumento.model";


export class UrlBuilderService {

    protected argumentos:Argumento;
    protected url:string;

    public CriarUrl(args) {
        this.argumentos = args;

        return this.ConfigurarUrl().ConfigurarOptions();
    }

    protected ConfigurarUrl() {
        this.url = ``;
        
        if(this.url.charAt(this.url.length - 1) !== '/'){
            this.url += "/";
        }

        if(this.argumentos.resource.charAt(0) === '/'){
            this.argumentos.resource = this.argumentos.resource.substring(1);
        }

        this.url += this.argumentos.resource;

        return this;
    }

    protected ConfigurarOptions(){
        var params = "";

        for (const key in this.argumentos.params) {
            if (key in this.argumentos.params){
                const item = this.argumentos.params[key];
                if(item !== undefined){
                    params += '&'+ key +'=' + item;
                }
                
            }
        }

        if(params != ""){
            if(params.charAt(0) === '&'){
                params = params.substring(1);
            }

            if (this.url.indexOf('?') === -1) {
                this.url += '?';
            }

            this.url += params;
        }

        return this.url;
    }
}