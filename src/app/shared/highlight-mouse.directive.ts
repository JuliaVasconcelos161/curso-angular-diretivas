import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  
 

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'white');
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra
    return this.backgroundColor;
  }

  private backgroundColor: string | undefined;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
    ) { }

}
