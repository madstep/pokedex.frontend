import { Component, OnInit, Input } from '@angular/core';
import { AuditModel } from '../../models/audit/audit.model'

@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.sass']
})
export class AuditComponent implements OnInit {
  @Input() audit: AuditModel;

  constructor() { }

  ngOnInit() {
  }

}
