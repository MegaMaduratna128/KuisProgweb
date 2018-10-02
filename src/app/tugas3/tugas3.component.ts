import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
    .lanjut{
      color: white;
    }
  `]
})
export class Tugas3Component implements OnInit {
  serverCreationStatus = '';
  i = 1;
  log = [];

  constructor() { }

  ngOnInit() {
  }
  onCreationStatus() {
    this.serverCreationStatus = 'POLITEKNIK NEGERI MALANG';
    this.log.push(this.i);
    this.i++;
  }
}
