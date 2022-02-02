import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  i: number = 0;
  doc: any;
  constructor(private element: ElementRef) { }

 

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.doc =  document.getElementById('undraw-picture')!;
 
     
   
   
  }
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
  
    if(this.i <= 1000 || this.i > 0) {

      if(this.i > 800) {
        this.i = 800;

      } else if (this.i < 0) {
        this.i = 0;
      }
    
    this.i += event.deltaY;
    console.log(this.i);

  
    if(this.i < 100) { 
      this.doc.setAttribute(
       "src", "../../../assets/svg-scroll-images/grouped.svg");
    }else  if(this.i < 200) {
      this.doc.setAttribute(
       "src", "../../../assets/svg-scroll-images/grouped2.svg");
     }
     else  if(this.i < 300) {
      this.doc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped3.svg");
    }
    else  if(this.i < 400) {
      this.doc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped4.svg");
    }
    else  if(this.i < 500) {
      this.doc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped5.svg");
    }
    else  if(this.i < 600) {
      this.doc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped6.svg");
    }
    else  if(this.i < 700) {
      this.doc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped7.svg");
    }
    else  if(this.i < 800) {
      this.doc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped8.svg");
    }
  }
  }
 

}
