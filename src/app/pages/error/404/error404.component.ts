import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsDashboard } from '../../../services/library/utils/utils.dashboard';
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.sass'],
})
export class Error404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // UtilsDashboard.ApplySideBarConfig(this.router.url);
  }
}
