import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideit]'
})
export class HideitDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.visibility="hidden";
  }

}
