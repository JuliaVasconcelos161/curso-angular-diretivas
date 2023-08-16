import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'button[fundoAmarelo]'
})
export class FundoAmareloDirective implements OnInit{

  constructor(private _elementRef: ElementRef,
     private _renderer: Renderer2) {
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor='yellow';
     }

    ngOnInit() {
        this._renderer.setStyle(this._elementRef.nativeElement, 'background', 'yellow');
    }

  }


