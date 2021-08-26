import { Component, OnInit } from '@angular/core';
import { UtilsDashboard } from '../../services/library/utils/utils.dashboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})

export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {

    UtilsDashboard.ApplySideBarConfig(this.router.url);
  }
}
