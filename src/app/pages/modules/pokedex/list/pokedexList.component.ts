import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SysAlert } from '../../../../services/library/system/alert/sysAlert';
import { UtilsDashboard } from '../../../../services/library/utils/utils.dashboard';
import { SysLocalStorage } from 'src/app/services/library/system/localStorage/sysLocalStorage';
import { SysResponse } from '../../../../services/library/system/response/entity/sysResponse';
import { SysResponseManager } from '../../../../services/library/system/response/sysResponseManager';
import { EnumSysComponentName } from 'src/app/services/library/system/enumeration/enumSysComponent';
import { EnumSysBase } from '../../../../services/library/system/enumeration/enumSysBase';
import * as UtilsDataTable from '../../../../services/library/utils/utils.dataTable';

import { PokedexModel } from '../model/pokedex.model';
import { PokedexModelList } from '../model/pokedexList.model';
import { PokedexModelCollection } from '../model/pokedexCollection.model';

import { PokedexService } from '../services/pokedex.service';

import { EnumSysAction } from '../../../../services/library/system/enumeration/enumSysAction';
import { EnumSysTable } from '../../../../services/library/system/enumeration/enumSysTable';
import { EnumSysTab } from '../../../../services/library/system/enumeration/enumSysTab';
import { throwError, Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {PageEvent} from '@angular/material/paginator';

interface ISession {
  PokedexModel?: PokedexModel;
}

interface IDesigner {
  DataTablePokedex?: any;
}

interface IComponent {
  CurrentList: string;
}


@Component({
  selector: 'app-pokedexList',
  templateUrl: './pokedexList.component.html',
  styleUrls: ['./pokedexList.component.sass'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class PokedexListComponent implements OnInit, OnDestroy, AfterViewInit {
  IsNew:Boolean;
  public tableWidget: any;
  SessionRoute: ISession;
  Designer: IDesigner;
  Component: IComponent;
  PokedexList: PokedexModelList;
  PokedexDetailList: PokedexModelList;
  PokedexRoot: PokedexModel;
  SelectedPokedexModel: PokedexModel;
  @ViewChildren('DataTablePokedexParentChange')
  DataTablePokedexParentChange: QueryList<any>;
  title = 'my-app';

  state = 'collapsed';
  PokemonList: any;
  length = 0;
  pageSize = 12;
  pageSizeOptions: number[] = [12];
  showFirstLastButtons= true;
  pageIndex= 0;
  // MatPaginator Output
  pageEvent: PageEvent;
  valueFilter = '';
  constructor(
    private Router: Router,
    private PokedexService: PokedexService
  ) {
    this.SessionRoute = {
      PokedexModel: (history.state.data && { ...history.state.data }) || null,
    };
    this.PokedexList = new PokedexModelList();
    this.PokedexDetailList = new PokedexModelList();
    this.PokedexRoot = new PokedexModel();
    this.Designer = {
      DataTablePokedex: null
    };
    this.Component = {
      CurrentList: ""
    };
    this.PokemonList = new PokedexModelCollection();
  }

  async ngOnInit(): Promise<void> {
    await this.LoadPage();
  }

  ngAfterViewInit(): void {
    
  }

  async LoadPage(): Promise<void> {
    try {
      this.LoadDesigner();
      await this.LoadDataServer();
    } catch (error) {

      console.error('pokedexList.component.ts/LoadPage =>', error);
      throw error;

    }
  }

  LoadDesigner(): void {
    try {
      this.LoadDataDesigner();
    } catch (error) {
      console.error('pokedexList.component.ts/LoadDesigner =>', error);
    }
  }

  LoadDataDesigner(): void {
    try {
      this.LoadTitle();
    } catch (error) {
      console.error('pokedexList.component.ts/LoadDataDesigner =>', error);
    }
  }

  LoadTitle(): void {
    try {
      UtilsDashboard.SetTitlePage('Pokédex');
    } catch (error) {
      console.error('pokedexList.component.ts/LoadTitle =>', error);
    }
  }


  async LoadDataServer(): Promise<void> {
    try {

      const pokedexModelList= await this.PokedexService.GetPokemons(1);
     
      this.PokemonList = pokedexModelList;
      this.length = pokedexModelList.total_items;
    } catch (error) {
      console.error('pokedexList.component.ts/LoadDataServer =>', error);
      SysAlert.Instance.ErrorProcessingData();
      throw error;
    }
    
  }

  async search(): Promise<void> {
    try {
      this.pageIndex= 0;
      if(this.valueFilter){
        const pokedexModelList= await this.PokedexService.GetPokemon(this.valueFilter);
     
        this.PokemonList = pokedexModelList;
        this.length = pokedexModelList.data.length;
      }
      else{
        await this.LoadDataServer()
      }
      
    } catch (error) {
      console.error('pokedexList.component.ts/LoadDataServer =>', error);
      SysAlert.Instance.ErrorProcessingData();
      throw error;
    }
    
  }
  async keyDownFunction(event) {
    if (event.keyCode === 13) {
      await this.search()
    }
  }
  async handlePageEvent(event):Promise<void> {
    try {
        this.pageIndex = event.pageIndex
        const page = this.pageIndex+1;
        const pokedexModelList= await this.PokedexService.GetPokemons(page);
     
        this.PokemonList = pokedexModelList;
        this.length = pokedexModelList.total_items;
        window.scroll(0,0);
    } catch (error) {
      console.error('pokedexList.component.ts/LoadDataServer =>', error);
      SysAlert.Instance.ErrorProcessingData();
      throw error;
    }
    
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  ngOnDestroy() {
    $("div[role='tooltip']").remove();
  }
}
