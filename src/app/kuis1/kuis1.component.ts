import { Component, OnInit } from '@angular/core';
import { Kuis } from '../shared/kuis';

@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
})
export class Kuis1Component implements OnInit {
  nim = '';
  nama = '';
  kelas = '';
  dftrMhs:Kuis[] = [];
  mhs;
  constructor() { }

  ngOnInit() {
  }
  tambahMhs(){
    this.mhs = new Kuis(this.nim,this.nama,this.kelas);
    this.dftrMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
