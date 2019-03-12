import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public tamanoSlider: number;
  public autor: any;

  @ViewChild('texto') texto;

  constructor() { }

  ngOnInit() {
    // console.log(this.texto.nativeElement.textContent);
  }

  cargarSlider() {
    this.tamanoSlider = this.widthSlider;
  }

  resetearSlider() {
    this.widthSlider = null;
    this.tamanoSlider = null;
  }

  getAuthor(event) {
    this.autor = event;
  }
}
