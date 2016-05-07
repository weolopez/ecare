import {Directive, Input, ElementRef} from 'angular2/core';

/*
  Generated class for the Open directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[open]' // Attribute selector
})
export class Open {
  @Input('open') target: string;
  private el:HTMLElement;
  constructor(el: ElementRef) { 
    var open = this;
    open.el = el.nativeElement;
    
    setTimeout(function(){ 
      let anchors = open.el.querySelectorAll("a");
      console.log('length: '+anchors.length);
      if (anchors.length>0) {
        for (var index = 0; index < anchors.length; index++) {
          var element = anchors.item(index);
          element.setAttribute("target", open.target);
        };
      }
    }, 1000); 
  }
}
