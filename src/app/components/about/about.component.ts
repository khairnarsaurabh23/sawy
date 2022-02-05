import { Component, OnInit } from '@angular/core';
declare var ScrollMagic: any;
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ctrl = new ScrollMagic.Controller();

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.initScrollTriggers();
  }

  initScrollTriggers() {
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: ".content",
          pin: true,
          start: "top center",
          end: "bottom bottom",
          toggleClass:"fade-in",
          toggleActions: "play pause restart none"
        }
      });
      scrollBox.to(".wrap", { y: 30, opacity: 1 });
    };
    
    //gsap.from(".content", {
    //   opacity:1,
    //   duration:3,
    //   ScrollTrigger:{
    //   trigger:".content",
    //   scrub:true,
    //   start:"top center",
    //   end:"top top",
    //   pin:true
    // }});
  //   new ScrollMagic.Scene({
  //     triggerElement:'.content'
  //   })
  //     .setClassToggle('.content', 'fade-in')
  //     .addTo(this.ctrl);
  // }
  }

