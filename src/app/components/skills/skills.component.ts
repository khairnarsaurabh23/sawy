import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() {
  //gsap.registerPlugin(scrollTrigger);
   }

  ngOnInit() {
    gsap.registerPlugin(scrollTrigger);
    this.initScrollTriggers();
  }

  initScrollTriggers() {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".animate",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        }
      }
    });

    tl.addLabel("start")
      .from(".logo", {scale: 0.3, rotation:45, autoAlpha: 0, stagger:0.5})
      .addLabel("color")
      .from(".logo", {})
      .addLabel("spin")
      .to(".logo", {rotation: 360})
      .addLabel("end");
     // gsap.to(".logo", {
     //  scrollTrigger: {
     //  trigger:".animate",
     //  start: "top top",
     //  end: "bottom bottom",
     //  markers:true,
     //  toggleActions: "start restart none restart"
     //  },
     //  xPercent: 30,
     //  opacity:1,
     //  stagger: 0.2,
     //  });
  };
}
