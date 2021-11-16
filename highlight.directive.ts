import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color?: string;
  @Input('width') width: number = 200;
  constructor(private el: ElementRef) {
    el.nativeElement.style.width = this.width+"px";
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.color??'yellow';
    this.el.nativeElement.style.width = this.width*2+"px";
    setTimeout(()=>{
      this.el.nativeElement.style.backgroundColor='transparent';
    }, 500)
  }

}
