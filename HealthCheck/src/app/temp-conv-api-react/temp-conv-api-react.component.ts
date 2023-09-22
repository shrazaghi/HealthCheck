import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-temp-conv-api-react',
  templateUrl: './temp-conv-api-react.component.html',
  styleUrls: ['./temp-conv-api-react.component.scss']
})
export class TempConvApiReactComponent {

  celcius = new FormControl();
  fahrenheit = new FormControl();

  constructor(private http: HttpClient) {
  }

  public celciusChanged() {

    var url = environment.baseUrl + 'api/temperature/celtofah';
    var params = new HttpParams()
      .set("celcius", this.celcius.value);


    this.http.get<Number>(url, { params })
      .subscribe(
        result => { this.fahrenheit.setValue(result) },
        error => { console.log(error) });

    //this.fahrenheit.setValue(this.celcius.value - 10);
  }

  public fahrenheitChanged() {
    this.celcius.setValue(this.fahrenheit.value + 10);
  }
}
