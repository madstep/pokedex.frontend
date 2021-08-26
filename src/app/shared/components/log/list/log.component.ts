import { Component, OnInit, Input, OnDestroy,Output, EventEmitter, ViewChild,ViewChildren, QueryList,
  OnChanges,  SimpleChanges, SimpleChange } from '@angular/core';
import { LogModel } from '../../../models/log/log.model'
import { LogService } from '../services/log.service';
import { LogModelList } from '../../../models/log/logList.model';
import { LogModelCollection } from '../../../models/log/logCollection.model';
import { SysAlert } from '../../../../services/library/system/alert/sysAlert';
import * as UtilsDataTable from '../../../../services/library/utils/utils.dataTable';
//import "datatables.net";
declare var $: any;
interface IDesigner {
  DataTableLog?: any;//DataTables.Api;
  CurrentDate: string;
  Title: string;
}

@Component({
  selector: 'app-Log-Detail',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.sass']
})
export class LogComponent implements OnInit {
  @Input() LogModel: LogModel;
  Designer: IDesigner;
  LogModelList: LogModelList;
  @ViewChildren('DataTableLogChange')DataTableLogChange: QueryList<any>;
  constructor(private LogService: LogService) { 
    this.LogModelList = new LogModelList();
    this.Designer = {
      CurrentDate: '',
      Title: '',
      DataTableLog: null
    };
  }

  async ngOnInit() {
    
   // await this.LoadPage();
  }

  ngAfterViewInit(): void {
    this.DataTableLogChange.changes.subscribe((t) => {
      this.LoadDataTable();
    });
  }

  async LoadPage(): Promise<void> {
    try {
      if(this.LogModel){
        this.LoadDesigner();
        await this.LoadDataServer();
        
      }else{
        this.LogModel = new LogModel();
      
      }
    } catch (error) {
      console.error('logModal.component.ts/LoadPage =>', error);
    }
  }

  async LoadDataServer(): Promise<void> {
    try {
      const logModelList = new LogModelList() 
      if(!this.Designer.DataTableLog) this.LoadDataTable()
      if(this.LogModelList.List.Data.length){
        UtilsDataTable.DestroyDataTable(this.Designer.DataTableLog);
      }
      this.LogModelList.List.Data = []
      logModelList.List.Data = await (await  this.LogService.GetDetailByFilter(
        this.LogModel.TableId,
        this.LogModel.TabId?this.LogModel.TabId:'',
        this.LogModel.ParentId,
        this.LogModel.ChildId?this.LogModel.ChildId:''
      )).Result.Data;
      if(logModelList.List.Data.length) UtilsDataTable.DestroyDataTable(this.Designer.DataTableLog);
      
      this.LogModelList = logModelList;
        
    } catch (error) {
      console.error('baseModal.component.ts/LoadDataServer =>', error);
      SysAlert.Instance.ErrorProcessingData();
    }
  }

  LoadDesigner(): void {
    try {
      this.Designer.Title =
        `${this.LogModel.Description
        }`
      ;
    } catch (error) {
      console.error('baseModal.component.ts/LoadDesigner =>', error);
    }
  }

  LoadDataTable(): void {
    try {
      let modelTable: any = $('.tableLogModel')
      this.Designer.DataTableLog =  modelTable.DataTable({
        drawCallback: () =>
          UtilsDataTable.ApplySizePaginateButton(
            '.tableResponsiveLogModel'
          ),
        ordering: false,
      });

      $('.tableLogModel span.actionTable').tooltip();
    } catch (error) {
      console.error('logList.component.ts/LoadDataTable =>', error);
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    await this.LoadPage();
  }
}
