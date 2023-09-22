import { Component, OnInit,  } from '@angular/core';
// import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent implements OnInit {

  public clecius: number = 0;
  public fahrenheit: number = 0;

  constructor() {
    this.celciusChanged();
  }

  ngOnInit(): void {
    this.clecius = 0;
    this.celciusChanged();
  }

  public celciusChanged() {
    this.fahrenheit = this.clecius * 5 / 9 + 32;
  }

  public fahrenheitChanged() {
    this.clecius = (this.fahrenheit - 32) * 9 / 5;
  }

}
