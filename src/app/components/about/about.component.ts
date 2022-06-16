import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(scrollTrigger);
    this.initScrollTriggers();
  }

//   initScrollTriggers() {
//       gsap.to(".about-slogan",{
//         scrollTrigger: {
//           trigger:".about",
//         },
//         opacity:1,
//         y:50
//       }
//     );
//   };
// }

    initScrollTriggers(){
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#about",
        start:"top top",
        pin:true
      }
    });

    tl.to(".self-image", {
      duration:2,
      opacity:1,
      y:60,
    }).to(".description", {
      delay:1,
      duration:2,
      opacity:1,
      x:-50,
    });
  }
}
