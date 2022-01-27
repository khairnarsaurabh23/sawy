import { Component, OnInit } from '@angular/core';
declare var ScrollMagic: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ctrl = new ScrollMagic.Controller();

  constructor() { }

  ngOnInit(): void {
    this.animateContent();
  }

  animateContent() {
    new ScrollMagic.Scene({
      triggerElement:'.content'
    })
      .setClassToggle('.content', 'fade-in')
      .addTo(this.ctrl);
  }

}
