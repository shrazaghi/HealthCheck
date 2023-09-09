import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HealthCheckService, Result } from './health-check.service';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {
  public result: Observable<Result | null>;
  public test2?: string;

  constructor(
    public service: HealthCheckService) {
    this.result = this.service.result;
  }

  ngOnInit() {

    // this.http.get<Result>(environment.baseUrl + 'api/health').subscribe(result => {
    //   this.result = result;
    // }, error => {
    //   console.error(error);
    // });
    this.service.startConnection();
    this.service.addDataListeners();
  }
}

