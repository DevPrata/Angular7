import { BaseResourceModel } from "../models/base-resource.model";

import { Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

interface Argumento {
    resource:string,
    params?:Object
}

export abstract class BaseResourceService<T extends BaseResourceModel>{

    protected http: HttpClient;
    protected argumentos:Argumento;
    protected url:string;

    constructor(
        protected apiPath:string, 
        protected injector: Injector, 
        protected jsonDataToResourceFn: (jsonData) => T
    ){
        this.http = injector.get(HttpClient);
    }
    
    getAll(argumento = {}): Observable<T[]> {
        return this.http.get(this.CriarUrl( { resource:this.apiPath, params: argumento } ))
            .pipe(
                map(this.jsonDataToResources.bind(this)),
                catchError(this.handleError),
            )
    }
    
    getById(id:number): Observable<T> {
        const url = this.CriarUrl( { resource:`${this.apiPath}/${id}` } )

        return this.http.get(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError),
        )
    }
    
    create(resource:T): Observable<T> {
        return this.http.post(this.CriarUrl( { resource:this.apiPath } ),resource).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError),
        )
    }
    
    update(resource:T): Observable<T> {
        const url = this.CriarUrl( { resource:`${this.apiPath}/${resource.id}` } )
        
        return this.http.put(url,resource).pipe(
            map(() => resource),
            catchError(this.handleError),

        )
    }

    delete(id:number): Observable<any> {
        const url = this.CriarUrl( { resource:`${this.apiPath}/${id}` } )

        return this.http.delete(url).pipe(
            map(() => null),
            catchError(this.handleError),
        )
    }

    // PROTECTED METHODS

    protected CriarUrl(args) {
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

    protected jsonDataToResources(jsonData: any[]): T[]{
        const resources: T[] = []
        jsonData.forEach(
            element => resources.push( this.jsonDataToResourceFn(element) ) 
        )
        return resources;
    }

    protected jsonDataToResource(jsonData: any): T{
        return this.jsonDataToResourceFn(jsonData)
    }

    protected handleError(error: any): Observable<any>{
        console.log("ERRO NA REQUISIÇÃO => ", error)
        return throwError(error);
    }
}