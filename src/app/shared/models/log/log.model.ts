export class LogModel {
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
  Description?:string;
  constructor(userId?:number,id?:number,tableId?:number,tabId?:number,actionId?:number,parentId?:number,childId?:number,description?:string){
    this.Id = id;
    this.TableId = tableId;
    this.TabId = tabId
    this.ActionId = actionId;
    this.ParentId = parentId;
    this.ChildId = childId;
    this.RegistrationUserId = userId;
    this.Description = description;
  }
  
  static ConvertByServer(model: object):LogModel{
    const item = new LogModel();
    Object.assign(item,model);
    return item
  }
}
  