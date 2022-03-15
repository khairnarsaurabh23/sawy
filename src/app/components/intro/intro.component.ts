import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap' ;
import TextPlugin from 'gsap/TextPlugin';
//import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateContent();
    //this.name();
  }

  name(){
    document.querySelectorAll(".name path").forEach(lt => {
        console.log(`${lt}`);
      });
    const ltr = document.querySelectorAll(".name path");
    console.log(ltr);
    // for(let i=0; i<7; i++){
    //   console.log(`${i} is ${ltr[i].getTotalLength()}`);
    // }

  }


  animateContent(){
    gsap.registerPlugin(TextPlugin);
    var text1 = "Namaste, I'm ";
    var text2 = "KHAIRNAR SAURABH";
    var tl = gsap.timeline({defaults:{yoyo:true}});
    tl.to(".greet", {
      delay:1,
      duration:2,
      opacity:1,
      ease: "bounce.out",
      y:20
    }).to("#welcome-svg",{
      delay:4,
      opacity:1,
      duration:4,
      xPercent:-30,
    }).to(".second",{
      delay:1,
      opacity:1,
      duration:2,
      y:-10,
    })
    .to("#logo",{
      opacity:1,
      duration:2,
      scrub: true,
      stagger:0.3
    })
    .to(".scroll", {
      y:-10,
      opacity:1,
      
    }).set(".scroll", {
      delay:1,
      duration:3,
      stagger:0.3,
      text:{
        value: "Explore",
      },
      ease: "none"
    });
  }
}


    // tl.to("#text", {
    //   delay:6,
    //   duration:2
    // }).to(".languages",{ 
    //   rotation:360,
    //   y:"+=200",
    //   duration: 2,
    //   ease: "elastic.out",
    //   stagger:0.2
    // }).to(".mean-stack",{
    //   rotation:360,
    //   x:"+=100",
    //   duration: 3,
    //   ease: "bounce.out(1, 0.4)",
    // }) .to("#down-arrow", {
    //   y:"+=50",
    //   duration:3,
    //   ease:"bounce.out(3, 1)"
    // });