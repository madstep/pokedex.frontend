import { PokedexModelCollection } from './pokedexCollection.model';
export class PokedexModelList {
  private _List: PokedexModelCollection;
  get List(): PokedexModelCollection {
    return this._List = this._List ? this._List : new PokedexModelCollection();
  }
  set List(modelCollection: PokedexModelCollection) {
    this._List = modelCollection;
  }

  static ConvertByServer(modelList : PokedexModelList):PokedexModelList{
    const itemList = new PokedexModelList();
    itemList.List.Data = [...modelList.List.Data]
    return itemList;
  }
}
