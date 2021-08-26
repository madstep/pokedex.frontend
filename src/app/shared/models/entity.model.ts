import { LogModel } from './log/log.model';
export class EntityModel {
    Id:number;
    Description:string;
    RegistrationDate:string;
    RegistrationUserId:number;
    RegistrationUser:string;
    ModificationUserId:number;
    ModificationDate:string;
    UnsubscribeDate:string;
    Unsubscribe:boolean;
    Log?:LogModel;
    constructor(){
      this.Id = 0;
      this.Description = "";
      this.RegistrationDate = "";
      this.RegistrationUserId = 0;
      this.RegistrationUser = "";
      this.ModificationUserId = 0;
      this.ModificationDate = "";
      this.UnsubscribeDate = "";
      this.Unsubscribe = false;
    }
  
    static ConvertByServer(entityModel: EntityModel):EntityModel{
      const objCurrentEntityModelCollection = new EntityModel();
      Object.assign(objCurrentEntityModelCollection,entityModel);
      return objCurrentEntityModelCollection
    }
  }
  