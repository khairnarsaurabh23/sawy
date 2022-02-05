import { Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  // // Transform value
  value:number = 0;
  // // trail index number
  // trailValue:number = 0;
  // // interval (Duration)
  // interval:number = 4000;

  // tl = gsap.timeline({defaults:{opacity:1}});
  //slider:HTMLElement | null = document.querySelector<HTMLElement>(".slider");
  constructor() {

   }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    //this.animate();
    this.slide();
  }

  animate(){
    const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}});
    tl.from(".bg", {
      x: "-100%",
      opacity: 0
    }).from("p", {opacity: 0}, "-=0.3")
      .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
      .from("button", {opacity: 0, y: "-40px"}, "-=0.8");
    tl.restart();
  }



  slide(){
      let boxes = gsap.utils.toArray(".box");
      gsap.to(boxes, {
        xPercent : -100 * (boxes.length - 1),
        ease: "none",
        scrollTrigger:{
          trigger:".box",
          start:"top top",
          pin:".container",
          end:"+=500%",
          scrub:1,
          snap: 1 / (boxes.length - 1),
          //toggleActions: "restart none restart restart"
        }
      });
      this.animate();
  };

}

  // // Function to slide forward
  // slide() {
  //     const tl = gsap.timeline({defaults:{ease:"none"}});
  //     gsap.registerPlugin(ScrollTrigger);
  //     tl.from(".box1",{xPercent:-100})
  //     .from(".box2",{xPercent:-100})
  //     .from(".box3", {xPercent:-100});

  //     ScrollTrigger.create({
  //       animation: tl,
  //       trigger:".container",
  //       start:"top top",
  //       end:"bottom bottom",
  //       scrub:true,
  //       pin:".box1",
  //       //anticipatePin:1
  //     });
      //update the value
      // condition === "increase" ? this.initiateINC() : this.initiateDEC();
      // this.move(this.value);


    // function to transform slide 
  // move(S:number) {
  //     // transform slider
  //     this.slider!.style.transform = `translateX(-${S}%)`;
  // }

  // initiateINC() {
  //     // increase transform value
  //     this.value === 80 ? this.value = 0 : this.value += 20;
  // }

  // initiateDEC() {
  //     // increase transform value
  //     this.value === 0 ? this.value = 80 : this.value -= 20;
  // }

  // document.querySelectorAll("svg").forEach(cur => {
  //     // Assign function based on the class Name("next" and "prev")
  //     cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
  


//   // Slider(all Slides in a container)
//   const slider = document.querySelector<HTMLElement>(".slider")
//   // All trails 
//   const trail = document.querySelector(".trail")!.querySelectorAll("div")



//   // Function to slide forward
//   const slide:any = (condition:string) => {
//       // CLear interval
//       clearInterval(this.start)
//       // update value and trailValue
//       condition === "increase" ? this.initiateINC() : this.initiateDEC()
//       // move slide
//       this.move(this.value, this.trailValue)
//       // Restart Animation
//       this.animate()
//       // start interal for slides back 
//       this.start = setInterval(() => this.slide("increase"), this.interval);
//   }

//   // function for increase(forward, next) configuration
//   const initiateINC:any = () => {
//       // Remove active from all trails
//       this.trail.forEach(cur => cur.classList.remove("active"))
//       // increase transform value
//       this.value === 80 ? this.value = 0 : this.value += 20
//       // update trailValue based on value
//       this.trailUpdate()
//   }

//   // function for decrease(backward, previous) configuration
//   const initiateDEC:any = () => {
//        // Remove active from all trails
//       this.trail.forEach(cur => cur.classList.remove("active"))
//       // decrease transform value
//       this.value === 0 ? this.value = 80 : this.value -= 20
//        // update trailValue based on value
//       this.trailUpdate()
//   }

//   // function to transform slide 
//   const move:any = (S:number, T:number) => {
//       // transform slider
//       this.slider!.style.transform = `translateX(-${S}%)`
//       //add active class to the current trail
//       this.trail[T].classList.add("active")
//   }

  
//   // const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}});
//   // this.tl.from(".bg", {
//   //   x: "-100%",
//   //   opacity: 0
//   // }).from("p", {opacity: 0}, "-=0.3")
//   //   .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
//   //   .from("button", {opacity: 0, y: "-40px"}, "-=0.8");

//   // function to restart animation
//   const animate:any = () => this.tl.restart();

//   // function to update trailValue based on slide value
//   const trailUpdate:any = () => {
//       if (this.value === 0) {
//           this.trailValue = 0
//       } else if (this.value === 20) {
//           this.trailValue = 1
//       } else if (this.value === 40) {
//           this.trailValue = 2
//       } else if (this.value === 60) {
//           this.trailValue = 3
//       } else {
//           this.trailValue = 4
//       }
//   }   

//   // Start interval for slides
//   const start:any = setInterval(() => this.slide("increase"), this.interval)

//   // Next  and  Previous button function (SVG icon with different classes)
//   const document:any = document.querySelectorAll("svg").forEach(cur => {
//       // Assign function based on the class Name("next" and "prev")
//       cur.addEventListener("click", () => cur.classList.contains("next") ? 
//         this.slide("increase") : this.slide("decrease"))
//   })

//   // function to slide when trail is clicked
//   const clickCheck:any = (e:any) => {
//       // CLear interval
//       clearInterval(this.start)
//       // remove active class from all trails
//       this.trail.forEach(cur => cur.classList.remove("active"))
//       // Get selected trail
//       const check = e.target
//       // add active class
//       check.classList.add("active")

//       // Update slide value based on the selected trail
//       if(check.classList.contains("box1")) {
//           this.value = 0
//       } else if (check.classList.contains("box2")) {
//           this.value = 20
//       } else if (check.classList.contains("box3")) {
//           this.value = 40
//       } else if (checrk.classList.contains("box4")) {
//           this.value = 60
//       } else {
//           this.value = 80
//       }
//       // update trail based on value
//       this.trailUpdate()
//       // transfrom slide
//       this.move(this.value, this.trailValue)
//       // start animation
//       this.animate()
//       // start interval
//       this.start = setInterval(() => this.slide("increase"), this.interval)
//   }

//   // Add function to all trails
//   trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

//   // Mobile touch Slide Section
//   const touchSlide:any = (() => {
//       let start, move, change, sliderWidth

//       // Do this on initial touch on screen
//       slider.addEventListener("touchstart", (e) => {
//           // get the touche position of X on the screen
//           start = e.touches[0].clientX
//           // (each slide with) the width of the slider container divided by the number of slides
//           sliderWidth = slider.clientWidth/trail.length
//       })
      
//       // Do this on touchDrag on screen
//       slider.addEventListener("touchmove", (e) => {
//           // prevent default function
//           e.preventDefault()
//           // get the touche position of X on the screen when dragging stops
//           move = e.touches[0].clientX
//           // Subtract initial position from end position and save to change variabla
//           change = start - move
//       })

//       const mobile:any = (e) => {
//           // if change is greater than a quarter of sliderWidth, next else Do NOTHING
//           change > (sliderWidth/4)  ? slide("increase") : null;
//           // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
//           (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
//           // reset all variable to 0
//           [start, move, change, sliderWidth] = [0,0,0,0]
//       }
//       // call mobile on touch end
//       slider.addEventListener("touchend", mobile)
//   })

// }
