import  CodeResponseModule from '../response/entity/enumeration/enumSysResponseModule';
import Swal from 'sweetalert2';

export class SysAlert {
  private static _Instance: SysAlert;
  private constructor() {}
  public static get Instance() {
    return this._Instance || (this._Instance = new this());
  }

  public Error(message: string):void {
    Swal.fire('Error!', message, 'error');
  }

  public ErrorCollection(message: any):void {
    let details:string= `<div class="form-row">
    <div class="form-group col-md-12" style="
    text-align: left;">
                        <ul>`;
    if (typeof(message)==='object'){
      message.forEach(val => details += `
      <li>${val}</li>
      `);   
    }else{
      details += `
      <li>${message}</li>
      `;
    }
    details += '</ul></div></div>';
    
    Swal.fire({
      icon: 'warning',
      title: 'Warning!',
      html: details,
      
    });
  }
  
  public ErrorProcessingData(msg:string=""):void {
    var details = msg!==''?'<span data-toggle="tooltip" data-placement="top" title="Details" onclick="toggle_visibilityErrorDetails()" class="material-icons icon-image-preview actionTable">list</span>':'';
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error occurred while processing the data. Please try again... if the error persists contact the administrator.',
      html:'An error occurred while processing the data. Please try again... if the error persists contact the administrator. ' +
            details,
      footer: '<did id="errorDetail" style="display:none;color:#f27474;" >'+ msg +'</div>'
    });
  //  Swal.fire('Error!', "An error occurred while processing the data.Please try again ... if the error persists contact the administrator", 'error');
  }

  public Success(message: string):void {
    Swal.fire('Success!', message, 'success');
  }
  public Warning(message: string):void {
    Swal.fire('Warning!', message, 'warning');
  }

  public BySysResponse(objResponseServer:any):void {
    this.Generate(objResponseServer.Message,objResponseServer.Code)
  }

  public Generate(message: string, code:string):void {
    const objCodeResponse:any = {
      [CodeResponseModule.EnumSysSuccessResponse.Success]: (msg:string)=> this.Success(msg),
      [CodeResponseModule.EnumSysWarningResponse.NotContent]: (msg:string)=> this.Warning(msg),
      [CodeResponseModule.EnumSysErrorResponse.BadRequest]: (msg:string)=> this.ErrorCollection(msg),
      [CodeResponseModule.EnumSysErrorResponse.Forbidden]: (msg:string)=> this.Error(msg),
      [CodeResponseModule.EnumSysErrorResponse.ResourceNotFound]: (msg:string)=> this.Error(msg),
      [CodeResponseModule.EnumSysErrorResponse.ServiceUnavailable]: (msg:string)=> this.Error(msg),
      [CodeResponseModule.EnumSysErrorResponse.Unexpected]: (msg:string)=> this.Error(msg),
    }
    typeof objCodeResponse[code] === "function" ? objCodeResponse[code](message) : this.ErrorProcessingData();
  }

  public Toast(objResponseServer:any):void {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer),
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: objResponseServer.Message
    })
  }

}
