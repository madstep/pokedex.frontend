import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { toUnicode } from 'punycode';
import 'rxjs/Rx';

@Injectable()
export class UtilityService {

  _fechaRest: string;
  _valueDefault: string;
  _listErrores = [];
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  list: any = [];
  _baseUrl = '';

  constructor(private http: HttpClient,
    private configService: ConfigService
  ) {
    this._baseUrl = configService.getWebApiURL();
  }

  getFormatDate(fechaValue: string) {
    const splitted = fechaValue.split('-');
    this._fechaRest = splitted[2] + '/' + splitted[1] + '/' + splitted[0];
    return this._fechaRest;
  }

  getValueDefault(valueActual: string) {
    this._valueDefault = valueActual;
    if (valueActual.trim().length === 0) {
      this._valueDefault = '0';
    }
    return this._valueDefault;
  }

  _keyPressNumber(event: any) {
    const pattern = /[0-9]$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  _keyPressNumber_Alfanumerico(event: any, tipo: number) {
    if (tipo === 1) {
      const pattern = /[0-9]$/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  }


  isDateCorrect(valDate: string) {
    const splitted = valDate.split('-');
    if (Number(splitted[0]) > 2015) {
      return true;
    } else {
      return false;
    }
  }

  isValidateRUC(sRuc: string) {
    if (sRuc.toString().length !== 11) {
      return false;
    }
    if (!(sRuc.toString().substr(0, 2) === '10' || sRuc.toString().substr(0, 2) === '11'
      || sRuc.toString().substr(0, 2) === '15' || sRuc.toString().substr(0, 2) === '16'
      || sRuc.toString().substr(0, 2) === '17' || sRuc.toString().substr(0, 2) === '20')) {
      return false;
    }
    return true;
  }

  isValidateHistorial(dIni: string, dFin: string) {

    this._listErrores = [];
    const splittedIni = dIni.split('-');
    const splittedFin = dFin.split('-');

    if (Number(splittedIni[0]) > 9999) {
      this._listErrores.push('El año de la Fecha Inicial no puede ser mayor a 9999');
    }
    if (Number(splittedIni[0]) < 1900) {
      this._listErrores.push('El año de la Fecha Inicial no puede ser menor a 1900');
    }
    if (Number(splittedFin[0]) > 9999) {
      this._listErrores.push('El año de la Fecha Final no puede ser mayor a 9999');
    }
    if (Number(splittedFin[0]) < 1900) {
      this._listErrores.push('El año de la Fecha Final no puede ser menor a 1900');
    }

    const iniDate = new Date(this.getFormatDate(dIni));
    const finDate = new Date(this.getFormatDate(dFin));

    if (this._listErrores.length === 0) {
      if (iniDate > finDate) {
        this._listErrores.push('La Fecha Final no puede ser menor a la Fecha Inicial');
      }
    }

    return this._listErrores;
  }

  public encodeObjectToBase64(object: any): string {
    let data = '';
    if (typeof (object) === 'string') {
      data = JSON.stringify(JSON.parse(object));
    } else {
      data = JSON.stringify(object);
    }
    return btoa(unescape(encodeURIComponent(data)));
  }

  public decodeObjectBase64(value: any): string {
    const data = atob(value);
    return JSON.parse(data);
  }
}
