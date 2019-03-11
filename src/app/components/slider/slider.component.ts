import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() tamanoSlider: number;
  @Output() obtenerAutor = new EventEmitter();

  public autor: any;
  constructor() {
      this.autor = {
        nombre: 'Gabriel Flores',
        website: 'gabrielflores.cl'
      };
   }

  ngOnInit() {
    $(document).ready(() => {
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: this.tamanoSlider
      });
    });
  }

  lanzarEvento(event) {
    this.obtenerAutor.emit(this.autor);
  }

}
