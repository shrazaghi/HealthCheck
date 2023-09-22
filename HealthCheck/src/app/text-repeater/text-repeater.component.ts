import { Component, OnInit } from '@angular/core';
import { } from '@angular/material';

@Component({
  selector: 'app-text-repeater',
  templateUrl: './text-repeater.component.html',
  styleUrls: ['./text-repeater.component.scss']
})
export class TextRepeaterComponent implements OnInit {

  public inputText?: string;
  public count?: number;

  public writeList: Array<WriteText>

  ngOnInit(): void {
  }
  constructor() {
    this.writeList = new Array<WriteText>();

  }

  public writeIt() {

    // this.writeList.pop();
    if (this.count != undefined) {
      this.writeList = new Array<WriteText>();
      for (let i = 0; i < this.count; i++)
        this.writeList.push(new WriteText(i, this.inputText ?? 'undefined'));
    }
  }
}

class WriteText {
  constructor(public index: number, public text: string) {
  }
}