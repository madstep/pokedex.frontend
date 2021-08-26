import { LogModelCollection } from './logCollection.model';
export class LogModelList {
  private _List: LogModelCollection;
  get List(): LogModelCollection {
    return this._List = this._List ? this._List : new LogModelCollection();
  }
  set List(modelCollection: LogModelCollection) {
    this._List = modelCollection;
  }

  static ConvertByServer(modelList : LogModelList):LogModelList{
    const itemList = new LogModelList();
    itemList.List.Data = [...modelList.List.Data]
    return itemList;
  }
}
