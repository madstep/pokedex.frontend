export class SysLocalStorage {
  private static _Instance: SysLocalStorage;
  private constructor() {}
  public static get Instance() {
    return this._Instance || (this._Instance = new this());
  }

  GetData<T>(componentName:string,genericClass:new()=>T):T{
    const objGeneric:string = localStorage.getItem(componentName) || '{}' ;
    return Object.assign(new genericClass(),JSON.parse(objGeneric));
  }

  SetData<T>(componentName:string,objValueGeneric:T){
    localStorage.setItem(componentName,JSON.stringify(objValueGeneric));
  }
}
