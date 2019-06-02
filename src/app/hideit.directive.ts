import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideit]'
})
export class HideitDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.cancelIt("white");
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.cancelIt("black")
  }

  private cancelIt(action:string){
      this.elem.nativeElement.style.color=action;
  }
}
