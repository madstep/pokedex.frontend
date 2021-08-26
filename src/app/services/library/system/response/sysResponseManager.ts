import  CodeResponseModule from '../response/entity/enumeration/enumSysResponseModule';

export class SysResponseManager {
  private static _Instance: SysResponseManager;
  private constructor() {}
  public static get Instance() {
    return this._Instance || (this._Instance = new this());
  }

  public IsSuccessBySysResponse(responseServer: any):boolean {
    const objCodeResponse:any = {
      [CodeResponseModule.EnumSysSuccessResponse.Success]: true
    }
    return objCodeResponse[responseServer.Code] || false;
  }

  public IsWarningBySysResponse(responseServer: any):boolean {
    const objCodeResponse:any = {
      [CodeResponseModule.EnumSysWarningResponse.NotContent]: true
    }
    return objCodeResponse[responseServer.Code] || false;

  }

  public IsErrorBySysResponse(responseServer: any):boolean {
    const objCodeResponse:any = {
      [CodeResponseModule.EnumSysErrorResponse.BadRequest]: true,
      [CodeResponseModule.EnumSysErrorResponse.Forbidden]: true,
      [CodeResponseModule.EnumSysErrorResponse.ResourceNotFound]: true,
      [CodeResponseModule.EnumSysErrorResponse.ServiceUnavailable]: true,
      [CodeResponseModule.EnumSysErrorResponse.Unexpected]: true,
    }
    return objCodeResponse[responseServer.Code] || false;

  }
}
