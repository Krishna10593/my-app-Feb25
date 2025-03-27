import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalDirective]'
})
export class CapitalDirectiveDirective {

  constructor(private _elementRef:ElementRef) { }
  @HostListener("keyup")
  change(){
    this._elementRef.nativeElement.value=this._elementRef.nativeElement.value.toUpperCase();
  }

}
