import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    this.initScrollTriggers();
  }

  initScrollTriggers() {
      gsap.to(".text",{
        scrollTrigger: {
          trigger:".title", 
          scrub:true,
        },
        opacity:1,
        y:50
      }
    );
  };    
}

