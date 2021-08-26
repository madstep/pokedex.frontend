import { EntityModel } from '../../../../shared/models/entity.model';

export class PokedexModel extends EntityModel {
  id:number;
    
  constructor(){
    super();
    this.id = 0;
    
  }
  
  static ConvertByServer(model: PokedexModel):PokedexModel{
    const item = new PokedexModel();
    Object.assign(item,model);
    return item
  }
}
