import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
   @HostListener('mouseenter') mouseover() {
       this.backgroundColor = this.highlightColor;
   };
   @HostListener('mouseleave') mouseenter() {
       this.backgroundColor = this.defaultColor;
   };
   @HostBinding('style.backgroundColor') get setColor() {
      return this.backgroundColor;
   };
   @Input() defaultColor = 'green';
   @Input('highlight') highlightColor = '#212432';
   private backgroundColor  = this.defaultColor;

  constructor() { }

}
