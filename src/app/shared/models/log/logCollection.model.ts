import { LogModel } from './log.model';

export class LogModelCollection {
  private _Data: LogModel[];

  get Data(): LogModel[] {
    return this._Data = Array.isArray(this._Data)  ? this._Data : []
  }
  set Data(modelCollection: LogModel[]) {
    this._Data = modelCollection
  }

  GetCopyFindById(valueId:number){
    return {
      ...this._Data.find(
        (item: LogModel) => item.Id === valueId
      ),
    }
  }

  AssignByModel(model:LogModel){
    const item: LogModel = this._Data.find((item: LogModel) => item.Id === model.Id);
    Object.assign(item, model)
  }

  AssignCollection(modelCollection : LogModelCollection){
    this._Data = [...modelCollection.Data]
  }

  AssignCollectionByExcludeByModel(model:LogModel){
    this._Data = this._Data.filter(
      (item: LogModel) => item.Id !== model.Id
    );
  }

  static ConvertByServer(modelCollection : LogModel[]):LogModelCollection{
    const itemCollection = new LogModelCollection();
    itemCollection.Data = [...modelCollection]
    return itemCollection;
  }
}
