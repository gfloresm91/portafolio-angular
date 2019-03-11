import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() tamanoSlider: number;

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: this.tamanoSlider
      });
    });
  }

}
