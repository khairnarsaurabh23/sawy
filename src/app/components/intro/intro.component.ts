import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap' ;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateContent();

  }


  animateContent(){
    //var scrollTrigger = gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({defaults:{opacity:1}})
    tl.to("#text", {
      delay:6,
      duration:2
    }).to(".languages",{ 
      // scrollTrigger:{
      //   trigger:"#nameIntro",
      //   start:"top top",
      //   scrub:true,
      //   markers:true
      // },
      rotation:360,
      y:"+=200",
      duration: 2,
      ease: "elastic.out",
      stagger:0.2
    }).to(".mean-stack",{
      rotation:360,
      x:"+=100",
      duration: 3,
      ease: "bounce.out(1, 0.4)",
    }) .to("#down-arrow", {
      y:"+=50",
      duration:3,
      ease:"bounce.out(3, 1)"
    });
  }
}
