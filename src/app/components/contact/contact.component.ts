import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public tamanoSlider: number;

  constructor() { }

  ngOnInit() {
  }

  cargarSlider() {
    this.tamanoSlider = this.widthSlider;
  }

  resetearSlider() {
    this.widthSlider = null;
    this.tamanoSlider = null;
  }
}
