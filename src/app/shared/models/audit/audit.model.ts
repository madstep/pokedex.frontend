export class AuditModel {
  Id:number;
  LogId:number;
  TableId:number;
  TabId:number;
  TableTab?:string;
  ActionId:number;
  Action:string;
  ParentId:number;
  ChildId?:number;
  ItemBefore?:string;
  ItemAfter?:string;
  RegistrationDate?:string;
  RegistrationUserId:number;
  RegistrationUser?:string;
  Description:string;

  constructor(){}
  
  static ConvertByServer(objAuditModel: object):AuditModel{
    const objCurrentAuditModelCollection = new AuditModel();
    Object.assign(objCurrentAuditModelCollection,objAuditModel);
    return objCurrentAuditModelCollection
  }
}
  