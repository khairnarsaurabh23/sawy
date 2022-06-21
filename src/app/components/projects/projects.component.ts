import { Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
    gsap.registerPlugin(scrollTrigger);
    this.animateContent();
  }

    animateContent(){
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:".project-template",
        start:"top top",
        pin:true
      }
    });

    tl.to(".project1", {
      duration:1,
      opacity:1,
      y:60,
      ease: "bounce.out"
    }).to(".project2", {
      delay:1,
      duration:1,
      opacity:1,
      y:50,
      ease:"bounce.out"
    });

    // .set(".scroll", {
    //   delay:1,
    //   duration:3,
    //   stagger:0.3,
    //   text:{
    //     value: "Explore",
    //   },
    //   ease: "none"
    // });
  }
}

  // animate(){
  //   const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}});
  //   tl.from(".bg", {
  //     x: "-100%",
  //     opacity: 0
  //   }).from("p", {opacity: 0}, "-=0.3")
  //     .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  //     .from("button", {opacity: 0, y: "-40px"}, "-=0.8");
  //   tl.restart();
  // }



  // slide(){
  //   gsap.utils.toArray(".box").forEach( box => {
  //     gsap.to(".box", {
  //       xPercent:-100,
  //       ease:"none",
  //       ScrollTrigger:{
  //         trigger:".container-fluid",
  //         start:"top top",
  //         pin:".container",
  //         end:"+=500%",
  //         scrub:true,
  //         markers:true,
  //       }
  //     });
  //     this.animate();
  //   });
  // }

      // let boxes = gsap.utils.toArray(".box");
      // gsap.to(boxes, {
      //   xPercent : -100,
      //   ease: "none",
      //   scrollTrigger:{
      //     trigger:".box",
      //     start:"top top",
      //     pin:".container",
      //     end:"+=500%",
      //     scrub:1,
      //     // snap: 1 / (boxes.length - 1),
      //   }
      // });
      // this.animate();