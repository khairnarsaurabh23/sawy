import { Component, OnInit } from '@angular/core';

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



  animateContent() {
    var intro:any = document.getElementById("nameIntro");
    intro.innerHTML = intro.innerText.split("")
      .map(function(c:string){
        return "<span>"+c+"<span>";
      }).join('')

    anime({
        targets:"div span",
        opacity:1,
        delay:function(element:any,i:any){
          return i*50;
        }
      });
    console.log(intro);
  }

}
