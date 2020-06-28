import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //dependency injection, an instance of elementRef gives directive direct access
  //to DOM element,
  //wrapper
  constructor(private elRef: ElementRef) {}
  @HostListener("click") onClicks(){
        this.highlightRepo("underline")
  }
  @HostListener("dblclick") onDoubleClicks(){
      this.highlightRepo ("none")
  }

    private highlightRepo(action:string){
      this.elRef.nativeElement.style.textShadow = action;
    }

   }
    


