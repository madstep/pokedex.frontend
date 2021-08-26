import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { SysResponse } from '../../../../services/library/system/response/entity/sysResponse';
import { LogModel } from '../../../models/log/log.model';
import { LogModelCollection } from '../../../models/log/logCollection.model';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  constructor(private httpClient: HttpClient) { }

  //readonly rootURL = 'https://w2gapi.azurewebsites.net/api';
  readonly rootURL = 'http://localhost:56701/api';
  
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public async GetDetailByFilter(tableId: any, tabId: any, parentId: any, childId: any):Promise<SysResponse<LogModelCollection>>{
    const responseServer:SysResponse<any> = await this.httpClient.get<SysResponse<LogModel[]>>(`${this.rootURL}/Log/GetDetailByFilter/?tableId=${tableId}&carBrandId=${tabId}&parentId=${parentId}&childId=${childId}`,
    this.httpOptions
    ).toPromise();
    responseServer.Result = LogModelCollection.ConvertByServer(responseServer.Result)
    return  responseServer
  }

}
