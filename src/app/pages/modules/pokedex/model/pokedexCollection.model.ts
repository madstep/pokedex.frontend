import { PokedexModel } from './pokedex.model';

export class PokedexModelCollection {
  private _Data: PokedexModel[];

  get Data(): PokedexModel[] {
    return this._Data = Array.isArray(this._Data)  ? this._Data : []
  }
  set Data(modelCollection: PokedexModel[]) {
    this._Data = modelCollection
  }
  get data(): PokedexModel[] {
    return this._Data = Array.isArray(this._Data)  ? this._Data : []
  }
  GetCopyFindById(valueId:number){
    return {
      ...this._Data.find(
        (item: PokedexModel) => item.Id === valueId
      ),
    }
  }

  AssignByModel(model:PokedexModel){
    const item: PokedexModel = this._Data.find((item: PokedexModel) => item.Id === model.Id);
    Object.assign(item, model)
  }

  AssignCollection(modelCollection : PokedexModelCollection){
    this._Data = [...modelCollection.Data]
  }

  AssignCollectionByExcludeByModel(model:PokedexModel){
    this._Data = this._Data.filter(
      (item: PokedexModel) => item.Id !== model.Id
    );
  }

  static ConvertByServer(modelCollection : PokedexModel[]):PokedexModelCollection{
    const itemCollection = new PokedexModelCollection();
    itemCollection.Data = [...modelCollection]
    return itemCollection;
  }
}
