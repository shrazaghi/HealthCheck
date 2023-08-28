import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {
  public result?: Result;
  public test2?: string;

  constructor(private http: HttpClient) {
    this.test2 = 'that is only for test';
  }
  ngOnInit() {

    this.http.get<Result>(environment.baseUrl + 'api/health').subscribe(result => {
      this.result = result;
    }, error => {
      console.error(error);
    });
  }
}


interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}
interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
