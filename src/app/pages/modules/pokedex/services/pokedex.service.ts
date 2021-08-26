import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { SysResponse } from '../../../../services/library/system/response/entity/sysResponse';
import { PokedexModel } from '../model/pokedex.model';
import { PokedexModelCollection } from '../model/pokedexCollection.model';
import { LogModel } from '../../../../shared/models/log/log.model';
import { AppConfig } from '../../../../app.config';
@Injectable({
  providedIn: 'root'
})

export class PokedexService {
  constructor(private httpClient: HttpClient) { }

  readonly rootURL = AppConfig.URL_API;
  
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 

  public async GetPokemons(page:number):Promise<any>{
    const responseServer = await this.httpClient.get<SysResponse<PokedexModel[]>>(`${this.rootURL}/pokedex/getPokemons/${page}`,
    this.httpOptions
    ).toPromise();
    return  responseServer
  }
  public async GetPokemon(filter:string):Promise<any>{
    const responseServer = await this.httpClient.get<SysResponse<PokedexModel[]>>(`${this.rootURL}/pokedex/getPokemon/${filter}`,
    this.httpOptions
    ).toPromise();
    return  responseServer
  }
  public async GetItemById(id:number):Promise<SysResponse<PokedexModel>>{
    const responseServer:SysResponse<PokedexModel> = await this.httpClient.get<SysResponse<PokedexModel>>(`${this.rootURL}/Pokedex/GetItemById/?pokedexId=${id}`,
    this.httpOptions
    ).toPromise();
    responseServer.Result = PokedexModel.ConvertByServer(responseServer.Result)
    return  responseServer
  }

}
